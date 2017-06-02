class TimeAgo extends React.Component {
    constructor() {
        super(...arguments)
        this._renderDate = this._renderDate.bind(this)
    }
    _renderDate() {
        const {
            config,
            startDate,
            endDate,
            dateTime
        } = this.props
        //TODO
        //서버시간으로 변경
        let dateago

        function prettyDate(time) {
            var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ").split(".")[0]),
                diff = (((new Date()).getTime() - date.getTime()) / 1000);

            let sec = parseInt((new Date()).getTime() - date.getTime()) / 1000;
            let dueDay = parseInt(sec / 60 / 60 / 24);
            sec = (sec - (dueDay * 60 * 60 * 24));
            let dueHour = parseInt(sec / 60 / 60);
            let dueMin = parseInt(sec / 60);

            let duedate

            if (dueDay < 1) {
                if (dueHour < 1) {
                    if(dueMin < 1){
                        duedate = "방금 전"
                    }else{
                        duedate = dueMin + "분 전"
                    }
                }
                else {
                    duedate = dueHour + "시간 전"
                }
            }

            return duedate

        }

        if (Boolean(Number(config)) && startDate && endDate) {
            dateago = common_utils.getDateByForm(startDate) + "~" + common_utils.getDateByForm(endDate)
        } else if (dateTime) {
            if (common_utils.isToday(dateTime)) {
                dateago = prettyDate(dateTime)
            } else {
                dateago = common_utils.getDateByForm(dateTime)
            }
        } else {
            dateago = ""
        }
        return dateago
    }
    render() {
        return (
            <time className="timeago2" >{this._renderDate()}</time>
        )
    }
}

//사용 예
{/*<TimeAgo
    dateTim={data.registerDate}
    startDate={data.startDate}
    endDate={data.endDate}
    config={boardConfig.isUseDateField}
/>*/}
