class CustomCollapseMo extends React.Component {
    handleOpen() {
        this.props.handleSelect()
    }
    render() {
        const {
            children
        } = this.props
        return (
            <dl className={this.props.currentActive == this.props.childIndex ? "list_open" : ""} onClick={this.handleOpen.bind(this)}>
                {children}
            </dl>
        )
    }
}

class CustomCollapseWrapMo extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            active: -1
        }
    }
    _handleSelect(value) {
    	var valueTmp = value
    	if(this.state.active == value){
    		valueTmp = -1;
    	}
    	this.setState({
            active: valueTmp
        })
    }
    _renderList() {
        return (
            this.props.lists.map(function (lists, index) {
                return (
                    <CustomCollapse currentActive={this.state.active} childIndex={index} handleSelect={this._handleSelect.bind(this, index)}>
                        <dt>
                            <a>
                                <span className="snippet_comm ico_faqQ">q</span>
                                <span className="tit_list">{lists.faqTitle}</span>
                                <span className="ico_unfold snippet_comm"></span>
                            </a>
                        </dt>
                        <dd><span className="snippet_comm ico_faqA">A</span>
                        	<span dangerouslySetInnerHTML={{__html: lists.faqContent}}></span>
                        </dd>
                    </CustomCollapse>
                )
            }, this)
        )
    }
    render() {
        return (
            <div className="bod_list bod_faq">
                {this._renderList()}
            </div>
        )
    }
}

class CustomCollapse extends React.Component {
    handleOpen() {
    	this.props.handleSelect()
    }
    render() {
        const {
            children
        } = this.props
        return (
            <dl className={this.props.currentActive == this.props.childIndex ? "list_open" : ""} onClick={this.handleOpen.bind(this)}>
                {children}
            </dl>
        )
    }
}

class CustomCollapseWrap extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            active: -1
        }
    }
    _handleSelect(value) {
    	var valueTmp = value
    	if(this.state.active == value){
    		valueTmp = -1;
    	}
    	this.setState({
            active: valueTmp
        })
    }
    _renderList() {
        return (
            this.props.lists.map(function (lists, index) {
                return (
                    <CustomCollapse currentActive={this.state.active} childIndex={index} handleSelect={this._handleSelect.bind(this, index)}>
                        <dt>
                            <span className="ico_faq">q</span>
                            <span className="tit_list">{lists.faqTitle}</span>
                            <span className="date_list"><TimeAgo dateTime={lists.registerDate}/></span>
                            <span className="ico_tit_list"><span></span></span>
                        </dt>
                        <dd><span className="ico_faq">a</span>
                        	<span dangerouslySetInnerHTML={{__html: lists.faqContent}}></span>
                        </dd>
                    </CustomCollapse>
                )
            }, this)
        )
    }
    render() {
        return (
            <div>
                {this._renderList()}
            </div>
        )
    }
}
class CustomCollapseWrap2 extends React.Component {
    constructor(){
        super(...arguments)
        this.state = {
            active:-1
        }
    }
    _handleSelect(value){
    	var valueTmp = value
    	if(this.state.active == value){
    		valueTmp = -1;
    	}
    	this.setState({
            active: valueTmp
        })
    }
     _renderList() {
        return (
            this.props.lists.map(function (lists, index) {
                return (
                    <CustomCollapse currentActive={this.state.active} childIndex={index} handleSelect={this._handleSelect.bind(this,index)}>
                        <dt>
                            <span className="ico_faq">q</span>
                            <span className="tit_list">{lists.title}</span>
                            <span className="date_list">{common_utils.getDateByForm(lists.reg_date)}</span>
                            <span className="ico_tit_list"><span></span></span>
                        </dt>
                        <dd><span className="ico_faq">a</span>
                            <span dangerouslySetInnerHTML={{__html: lists.content}}></span>
                        </dd>
                    </CustomCollapse>
                )
            }, this)
        )
    }
    render () {
        return (
            <div>
                {this._renderList()}
            </div>
        )
    }
}

/*

사용예

<CustomCollapse>
    <dt>
        <span className="ico_faq">q</span>
        <span className="tit_list">{lists.제목}</span>
        <span className="date_list">{lists.날짜}</span>
        <span className="ico_tit_list"><span></span></span>
    </dt>
    <dd><span className="ico_faq">a</span>
        {lists.내용}
    </dd>
</CustomCollapse>

*/