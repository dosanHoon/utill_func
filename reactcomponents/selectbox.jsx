class SelectBoxDefault extends React.Component {
    static defaultProps = {
		options: []
	};
	static propTypes = {
		options: React.PropTypes.array
	};
    constructor() {
        super(...arguments)
        this.state = {
            selected: 0
        }
        this._rederOption = this._rederOption.bind(this)
    }
    
    componentWillMount () {
    }
    
    _rederOption() {
        let options = this.props.options.map(function (option, index) {
            return <option value={option.value} >{option.name}</option>
        }, this)
        return options
    }
    selectChange(e){        
        this.props.callback(e.target.value)
    }
    render() {
        return (
            <select type="select" name={this.props.name}className="selectbox" onChange={this.selectChange.bind(this)}>
                {this._rederOption()}
            </select>
        )
    }
}

class SelectBoxTotal extends React.Component {
    static defaultProps = {
		options: []
	};
	static propTypes = {
		options: React.PropTypes.array
	};
    constructor() {
        super(...arguments)
        this.state = {
            selected: 0
        }
        this._rederOption = this._rederOption.bind(this)
    }
    
    componentWillMount () {
    }
    
    _rederOption() {
        let options = this.props.options.map(function (option, index) {
            return <option value={option.value} >{option.name}</option>
        }, this)
        return options
    }
    selectChange(e){        
        this.props.callback(e.target.value)
    }
    render() {
        return (
            <select type="select" name={this.props.name}className="selectbox" onChange={this.selectChange.bind(this)}>
            	<option value="">전체</option>
                {this._rederOption()}
            </select>
        )
    }
}

class SelectBoxSelect extends React.Component {
    static defaultProps = {
		options: []
	};
	static propTypes = {
		options: React.PropTypes.array
	};
    constructor() {
        super(...arguments)
        this.state = {
            selected: 0
        }
        this._rederOption = this._rederOption.bind(this)
    }
    
    componentWillMount () {
    }
    
    _rederOption() {
        let options = this.props.options.map(function (option, index) {
            return <option value={option.value} >{option.name}</option>
        }, this)
        return options
    }
    selectChange(e){        
        this.props.callback(e.target.value)
    }
    render() {
        return (
            <select type="select" name={this.props.name}className="selectbox" onChange={this.selectChange.bind(this)}>
            	<option value="">선택</option>
                {this._rederOption()}
            </select>
        )
    }
}