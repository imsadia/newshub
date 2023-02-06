import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
    // let isActive = this.context.router.route.location.pathname === this.props.to;
    // let className = isActive ? "nav-link active" : "nav-link";
    console.log(useLocation().pathname.length);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1A2238', color: '#FFFFFF' }}>
                <div className="container-fluid mx-5">
                    <Link className="navbar-brand" to="/">News<span style={{ color: '#FF6A3D' }}>Hub</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className={`nav-link ${useLocation().pathname.length == 1 && 'active'}`} to="/">Home</Link>
                            <Link className={`nav-link ${useLocation().pathname.includes('general') && 'active'}`} to="/general">General</Link>
                            <Link className={`nav-link ${useLocation().pathname.includes('entertainment') && 'active'}`} to="/entertainment">Entertainment</Link>
                            <Link className={`nav-link ${useLocation().pathname.includes('business') && 'active'}`} to="/business">Business</Link>
                            <Link className={`nav-link ${useLocation().pathname.includes('health') && 'active'}`} to="/health">Health</Link>
                            <Link className={`nav-link ${useLocation().pathname.includes('sports') && 'active'}`} to="/sports">Sports</Link>
                            <Link className={`nav-link ${useLocation().pathname.includes('science') && 'active'}`} to="/science">Science</Link>
                            <Link className={`nav-link ${useLocation().pathname.includes('technology') && 'active'}`} to="/technology">Technology</Link>
                        </div>

                        {/* <ul className="navbar-nav ms-auto mx-5">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/">USA</Link></li>
                                    <li><Link className="dropdown-item" to="/">India</Link></li>
                                    <li><Link className="dropdown-item" to="/">Germany</Link></li>
                                    <li><Link className="dropdown-item" to="/">Australia</Link></li>
                                    <li><Link className="dropdown-item" to="/">Canada</Link></li>
                                </ul>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
