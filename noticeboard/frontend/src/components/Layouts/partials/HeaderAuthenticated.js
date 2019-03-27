import React from 'react';
import {Link} from 'react-router-dom';

export default ({logoutUser, user, auth: {canAddPost}}) =>
    <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"
                   id="themes">Categories <span className="caret"> </span></a>
                <div className="dropdown-menu" aria-labelledby="themes">
                    <a className="dropdown-item" href="#">Default</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Cerulean</a>
                    <a className="dropdown-item" href="#">Cosmo</a>
                    <a className="dropdown-item" href="#">Cyborg</a>
                    <a className="dropdown-item" href="#">Darkly</a>
                    <a className="dropdown-item" href="#">Flatly</a>
                    <a className="dropdown-item" href="#">Journal</a>
                    <a className="dropdown-item" href="#">Litera</a>
                    <a className="dropdown-item" href="#">Lumen</a>
                    <a className="dropdown-item" href="#">Lux</a>
                    <a className="dropdown-item" href="#">Materia</a>
                    <a className="dropdown-item" href="#">Minty</a>
                    <a className="dropdown-item" href="#">Pulse</a>
                    <a className="dropdown-item" href="#">Sandstone</a>
                    <a className="dropdown-item" href="#">Simplex</a>
                    <a className="dropdown-item" href="#">Sketchy</a>
                    <a className="dropdown-item" href="#">Slate</a>
                    <a className="dropdown-item" href="#">Solar</a>
                    <a className="dropdown-item" href="#">Spacelab</a>
                    <a className="dropdown-item" href="#">Superhero</a>
                    <a className="dropdown-item" href="#">United</a>
                    <a className="dropdown-item" href="#">Yeti</a>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
            </li>
            {
                canAddPost ?
                    <li className="nav-item">
                        <Link to="/addpost" className="nav-link">Add a post</Link>
                    </li>
                    : null
            }


            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"
                   id="download">Sketchy <span className="caret"> </span>
                </a>

                <div className="dropdown-menu" aria-labelledby="download">
                    <strong style={{opacity: .5}} className="dropdown-item"
                    >Utility Links</strong>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#"
                    >Add Categories</a>
                    <a className="dropdown-item" href="#"
                    >View Categories</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#"
                    >Add Roles</a>
                    <a className="dropdown-item" href="#"
                    >View Roles</a>
                </div>
            </li>
        </ul>

        <ul className="nav navbar-nav ml-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"
                   id="download">{user ? `${user.first_name} ${user.last_name}` : 'User Account'} <span
                    className="caret"> </span></a>
                <div className="dropdown-menu" aria-labelledby="download">
                    <a className="dropdown-item"
                       href="#">Profile</a>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item"
                    >Help
                    </button>
                    <button className="dropdown-item"
                    >FAQS
                    </button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item"
                    >Account Terms
                    </button>
                    <button className="dropdown-item" onClick={logoutUser}
                    >Account Logout
                    </button>
                </div>
            </li>
        </ul>
    </div>