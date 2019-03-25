import React from 'react';
import { Link } from 'react-router-dom';

export default ({ }) =>
    <ul className="nav navbar-nav ml-auto">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"
                id="download">Join Now <span className="caret"> </span></a>
            <div className="dropdown-menu" aria-labelledby="download">
                <a className="dropdown-item"
                    href="#">Help</a>
                <div className="dropdown-divider"> </div>
                <a className="dropdown-item" href="#"
                    download>Account Terms</a>
                <a className="dropdown-item" href="#"
                    download>Account FAQS</a>
                <div className="dropdown-divider"> </div>
                <Link className="dropdown-item" to="/login"
                >Login</Link>
                <Link className="dropdown-item" to="/register"
                >Request Access</Link>
            </div>
        </li>
    </ul>