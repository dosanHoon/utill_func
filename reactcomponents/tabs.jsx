class Tabs extends React.Component {
    static defaultProps = {
        selected: 0
    };
    static propTypes = {
        selected: React.PropTypes.number,
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.element
        ]).isRequired
    };
    constructor() {
        super(...arguments)
        this.state = {
            selected: 0
        }
    }
    componentWillMount() {
        this.setState({
            selected: this.props.selected
        })
    }
    handleClick(index, event) {
        event.preventDefault()
        this.setState({
            selected: index
        })
    }
    _renderTitles() {
        function labels(child, index) {
            let activeClass = (this.state.selected === index ? 'active' : '')
            return (
                <li key={index}>
                    <a href="#"
                        className={activeClass}
                        onClick={this.handleClick.bind(this, index)}>
                        {child.props.label}
                    </a>
                </li>
            )
        }
        return (
            <ul className="tabs__labels">
                {this.props.children.map(labels.bind(this))}
            </ul>
        )
    }
    _renderContent() {
        return (
            <div className="tabs__content">
                {this.props.children[this.state.selected]}
            </div>
        )
    }
    render() {
        return (
            <div className="tabs">
                {this._renderTitles()}
                {this._renderContent()}
            </div>
        )
    }
}

class Pane extends React.Component {
    static defaultProps = {
        label: ""
    };
    static propTypes = {
        label: React.PropTypes.string.isRequired,
        children: React.PropTypes.element.isRequired
    };
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

/*

사용예

<Tabs selected={1}>
    <Pane label="서비스 소개">
        <div>서비스 소개</div>
    </Pane>
    <Pane label="제휴 문의">
        <div>제휴 문의</div>
        <p><input type="text" placeholder="신청 회사" /></p>
        <p><input type="text" placeholder="신청 담당자" /></p>
        <p><input type="text" placeholder="연락처" /></p>
        <p><input type="text" placeholder="이메일" /></p>
        <p><input type="text" placeholder="제목" /></p>
        <p><input type="text" placeholder="문의내용" /></p>
    </Pane>
</Tabs>

*/
