import {NavLink} from "react-router-dom"

export function Navbar(){
    return (
        <div className="ui menu">
            <a className="item"><NavLink to="/home">Home</NavLink></a>
            <a className="item"><NavLink to="/store">Store</NavLink></a>
        </div>

    )
}