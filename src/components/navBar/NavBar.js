import {Link, NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-success" to="/">VIN Decoder</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <NavLink className="nav-link" exact activeClassName="active" to="/">Home</NavLink>
                        <NavLink className="nav-link" exact activeClassName="active" to="/variables">Variables</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;