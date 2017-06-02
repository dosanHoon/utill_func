class Collapse extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            opened: false
        }
    }
    handleOpen() {
        this.setState((prevState) => {
            return { opened: prevState.opened ? false : true }
        })
    }
    render() {
        const {
            title,
            children
        } = this.props
        return (
            <div>
                <h2 onClick={this.handleOpen.bind(this)}>{title}</h2>
                <div style={this.state.opened ? { display: "block" } : { display: "none" }}>
                    {children}
                </div>
            </div>
        )
    }
}