import React from 'react'
import { useSelector } from 'react-redux';
import '../../sass/header.scss';

const Header = () => {
    const path = useSelector(state => state.main.path);

    return (
        <div className="header">
            <img className="header-logo" src={`${path}img/logo.png`} alt="" />
            <div className="header_search">
                <div className="input-group mb-3">
                    <button className="btn dropdown-toggle search-cat" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>

                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn" type="button" id="button-addon2" style={{ background: '#F9BD69' }}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>

            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-optionline-one">Hello Guest</span>
                    <span className="header-optionline-two">Hello Guest</span>
                </div>
                <div className="header-option">
                    <span className="header-optionline-one">Hello Guest</span>
                    <span className="header-optionline-two">Hello Guest</span>
                </div>
                <div className="header-option">
                    <span className="header-optionline-one">Hello Guest</span>
                    <span className="header-optionline-two">Hello Guest</span>
                </div>
                <div className="header-option">
                    <span className="header-optionline-one">Hello Guest</span>
                    <span className="header-optionline-two">Hello Guest</span>
                </div>
            </div>
        </div>
    )
}

export default Header
