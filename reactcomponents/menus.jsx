class Menus extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {

        }
    }
    _rendeMenus(){
        function menulist(menu,index){
            return(                
                <li key={index}>
                    <a href={menu.alink} className="link_gnb link_gnb1">
                        <span className="ir_wa">{menu.name}</span>
                    </a>
                </li>
            )
        }
        
        return (
            <ul className="clear gnb_comm">
                {this.props.menu.map(menulist.bind(this))}
            </ul>
        )
    }
    render() {
        return (
            <div>
                {this._rendeMenus()}
            </div>
        )
    }
}
