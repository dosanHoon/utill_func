class SelectBoxDefault extends React.Component {
    static defaultProps = {
        options: [],
        callback: function () { },
        title: "선택"
    }
    static propTypes = {
        options: React.PropTypes.array.isRequired,
        callback: React.PropTypes.func,
        title: React.PropTypes.string
    }
    constructor() {
        super(...arguments)
        this.state = {
            selected: 0
        }
        this._rederOption = this._rederOption.bind(this)
    }
    _rederOption() {
        let options = this.props.options.map(function (option, index) {
            return <option value={option.value} index={index} >{option.name}</option>
        }, this)
        return options
    }
    selectChange(e) {
        this.props.callback(e.target.value)
    }
    render() {
        return (
            <select id="selCate"
                disabled={this.props.disabled ? "disabled" : ""}
                type="select"
                className={this.props.className ? this.props.className : "sel_cate"}
                value={this.props.value}
                onChange={this.selectChange.bind(this)}
            >
                <option value="-1" selected="">{this.props.title}</option>
                {this._rederOption()}
            </select>
        )
    }
}
/*사용 예
<SelectBoxDefault
    title = "선택해주세요"
    options = {[{
        name : "보여지는 이름",
        value : "취득할 value"
    }]}
    callback=function(){

    }
/>
*/

/*
 option 과 value 가 다른 값을때
 object 로 name 과 value 키 값으로 전달한다.
*/

class CustomSelectBox extends React.Component {
    static defaultProps = {
        title: ""
    };
    static propTypes = {
        title: React.PropTypes.string
    };
    constructor() {
        super(...arguments)
        this.state = {
            selected: 0,
            opened: false,
            title: this.props.title
        }
        this.handleOpen = this.handleOpen.bind(this)
    }
    componentDidMount() {
        window.addEventListener('click', this.handleDocumentClick)
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.handleDocumentClick)
    }
    handleDocumentClick = (evt) => {
        const area = ReactDOM.findDOMNode(this.selectList);
        if (!area.contains(evt.target)) {
            this.setState({ opened: false })
        }
    }
    _rederOption() {
        function options(option, index) {
            return (
                <li key={index} onClick={this.handleSelectValue.bind(this, option)}><a className="link_option">{option.name}</a></li>
            )
        }
        return (
            <ul className="list_opt" tabIndex="0">
                {this.props.options.map(options.bind(this))}
            </ul>
        )
    }
    handleSelectValue(option) {
        this.setState({
            title: option.name,
            opened: false,
            value: option.value
        })
        this.props.callback(option.value)
    }
    handleOpen() {
        this.setState((prevState) => {
            return { opened: prevState.opened ? false : true }
        })
    }
    render() {
        const {
            classType,
            inputName
        } = this.props
        const {
            opened,
            title
        } = this.state
        return (
            <div className={"cate_select " + classType} ref={(list) => { this.selectList = list }}>
                <input type="text" name={inputName} value={this.state.value} className="screen_out" />
                <div className={"opt_close " + (opened ? "opt_open" : "")}>
                    <strong className="screen_out">서비스 선택 카테고리 선택상자</strong>
                    <div className="screen_out">선택옵션</div>
                    <button type="button" className="link_selected" onClick={this.handleOpen}>
                        <span className="txt_select">{title}</span>
                        <span className="ico_comm ico_arrow"></span>
                    </button>
                    <div className="box_info">
                        <span className="ico_comm ico_balloon"></span>
                        {this._rederOption()}
                    </div>
                </div>
            </div>
        )
    }
}

class CustomSelectBoxTotal extends React.Component {
    static defaultProps = {
        title: ""
    };
    static propTypes = {
        title: React.PropTypes.string
    };
    constructor() {
        super(...arguments)
        this.state = {
            selected: 0,
            opened: false,
            title: this.props.title
        }
        this.handleOpen = this.handleOpen.bind(this)
    }
    componentDidMount() {
        window.addEventListener('click', this.handleDocumentClick)
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.handleDocumentClick)
    }
    handleDocumentClick = (evt) => {
        const area = ReactDOM.findDOMNode(this.selectList);
        if (!area.contains(evt.target)) {
            this.setState({ opened: false })
        }
    }
    _rederOption() {
        function options(option, index) {
            return (
                <li key={index} onClick={this.handleSelectValue.bind(this, option)}><a className="link_option">{option.name}</a></li>
            )
        }
        return (
            <ul className="list_opt" tabIndex="0">
                <li key="" onClick={this.handleSelectValue.bind(this, { value: "", name: "전체" })}><a className="link_option">전체</a></li>
                {this.props.options.map(options.bind(this))}
            </ul>
        )
    }
    handleSelectValue(option) {
        this.setState({
            title: option.name,
            opened: false,
            value: option.value
        })
        this.props.callback(option.value)
    }
    handleOpen() {
        this.setState((prevState) => {
            return { opened: prevState.opened ? false : true }
        })
    }
    render() {
        const {
            classType,
            inputName
        } = this.props
        const {
            opened,
            title
        } = this.state
        return (
            <div className={"cate_select " + classType} ref={(list) => { this.selectList = list }}>
                <input type="text" name={inputName} value={this.state.value} className="screen_out" />
                <div className={"opt_close " + (opened ? "opt_open" : "")}>
                    <strong className="screen_out">서비스 선택 카테고리 선택상자</strong>
                    <div className="screen_out">선택옵션</div>
                    <button type="button" className="link_selected" onClick={this.handleOpen}>
                        <span className="txt_select">{title}</span>
                        <span className="ico_comm ico_arrow"></span>
                    </button>
                    <div className="box_info">
                        <span className="ico_comm ico_balloon"></span>
                        {this._rederOption()}
                    </div>
                </div>
            </div>
        )
    }
}

/*
 option 과 value 가 같은 값일때
*/
class CustomSelectBox2 extends React.Component {
    static defaultProps = {
        title: ""
    };
    static propTypes = {
        title: React.PropTypes.string
    };
    constructor() {
        super(...arguments)
        this.state = {
            selected: 0,
            opened: false,
            title: this.props.title
        }
        this.handleOpen = this.handleOpen.bind(this)
    }
    componentDidMount() {
        window.addEventListener('click', this.handleDocumentClick)
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.handleDocumentClick)
    }
    _rederOption() {
        function options(option, index) {
            return (
                <li key={index} onClick={this.handleSelectValue.bind(this, option)}><a className="link_option">{option}</a></li>
            )
        }
        return (
            <ul className="list_opt" ref={ref => this.input = ref} onBlur={this.handleOpen}>
                <li onClick={this.handleSelectValue.bind(this, "")}><a className="link_option">선택</a></li>
                {this.props.options.map(options.bind(this))}
            </ul>
        )
    }
    handleSelectValue(option) {
        if (!option) {
            option = "선택"
            this.props.callback("")
        } else {
            this.props.callback(option)
        }
        this.setState({
            title: option,
            opened: false
        })
    }
    handleOpen() {
        this.setState((prevState) => {
            return { opened: prevState.opened ? false : true }
        })
    }
    handleDocumentClick = (evt) => {
        const area = ReactDOM.findDOMNode(this.selectList);
        if (!area.contains(evt.target)) {
            this.setState({ opened: false })
        }
    }
    render() {
        const {
            classType
        } = this.props
        const {
            opened,
            title
        } = this.state
        return (
            <div className={"cate_select " + classType} ref={(list) => { this.selectList = list }}>
                <div className={"opt_close " + (opened ? "opt_open" : "")}>
                    <strong className="screen_out">서비스 선택 카테고리 선택상자</strong>
                    <div className="screen_out">선택옵션</div>
                    <button type="button" className="link_selected" onClick={this.handleOpen}>
                        <span className="txt_select">{title}</span>
                        <span className="ico_comm ico_arrow"></span>
                    </button>
                    <div className="box_info">
                        <span className="ico_comm ico_balloon"></span>
                        {this._rederOption()}
                    </div>
                </div>
            </div>
        )
    }
}

/*
option 과 value 가 다른 값을때
object 로 name 과 value 키 값으로 전달한다.
cate_select className 제거
*/

class CustomSelectBox3 extends React.Component {
    static defaultProps = {
        title: ""
    };
    static propTypes = {
        title: React.PropTypes.string
    };
    constructor() {
        super(...arguments)
        this.state = {
            selected: 0,
            opened: false,
            title: this.props.title
        }
        this.handleOpen = this.handleOpen.bind(this)
    }
    _rederOption() {
        function options(option, index) {
            return (
                <li key={index} onClick={this.handleSelectValue.bind(this, option)}><a className="link_option">{option.name}</a></li>
            )
        }
        return (
            <ul className="list_opt">
                {this.props.options.map(options.bind(this))}
            </ul>
        )
    }
    handleSelectValue(option) {
        this.setState({
            title: option.name,
            opened: false
        })
        this.props.callback(option.value)
    }
    handleOpen() {
        this.setState((prevState) => {
            return { opened: prevState.opened ? false : true }
        })
    }

    render() {
        const {
           classType
       } = this.props
        const {
           opened
       } = this.state
        return (
            <div className={"opt_close " + (this.state.opened ? "opt_open" : "")}>
                <strong className="screen_out">서비스 선택 카테고리 선택상자</strong>
                <div className="screen_out">선택옵션</div>
                <button type="button" className="link_selected" onClick={this.handleOpen}>
                    <span className="txt_select">{this.state.title}</span>
                    <span className="ico_comm ico_arrow"></span>
                </button>
                <div className="box_info">
                    <span className="ico_comm ico_balloon"></span>
                    {this._rederOption()}
                </div>
            </div>
        )
    }
}
/*

<CustomSelectBox
    classType="cate_servise"
    options={this.state.services}
    title="서비스 선택"
    callback={this.handleService}
/>

 */