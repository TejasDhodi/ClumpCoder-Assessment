import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { navBarData } from '../Service/Service';
import { IconContext } from 'react-icons';
const Navbar = () => {
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [rotateIcon, setRotateIcon] = useState('');

    const toggleDropdown = (key) => {
        setOpenDropdowns((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));

        // Toggle rotation class for the arrow icon
        setRotateIcon(prev => (prev === key ? '' : key));
    };

    return (
        <div className="sidebar">
            {navBarData.map((section, sectionIndex) => (
                <div className="sidebarContainer" key={sectionIndex}>
                    {Object.keys(section).map((sectionKey, index) => (
                        <div className='content' key={index}>
                            <h2>{section[sectionKey].head}</h2>
                            <ul className='contentItems'>
                                {Object.keys(section[sectionKey]).map((dropKey, idx) => {
                                    if (dropKey !== 'head') {
                                        const dropdown = section[sectionKey][dropKey];
                                        const isOpen = openDropdowns[`${sectionKey}-${dropKey}`];
                                        const DropHeadIcon = dropdown.dropHead.icon;
                                        const notification = dropdown.dropHead.notiFication;
                                        const headProLabel = dropdown.dropHead.proLabel;
                                        const DropIcon = dropdown.dropHead.dropIcon;

                                        return (
                                            <li className='contentLists' key={idx}>
                                                <div onClick={() => toggleDropdown(`${sectionKey}-${dropKey}`)} className={notification ? "dropdown-btn notification" : "dropdown-btn"}>
                                                    <div className="dropHeadTitle flex">
                                                        <div className="dropHeadIcon">
                                                            {DropHeadIcon && <DropHeadIcon />}
                                                        </div>
                                                        <div className="dropHead">
                                                            <h4>{dropdown.dropHead.label}</h4>
                                                            <div className={`arrowIcon ${rotateIcon === `${sectionKey}-${dropKey}` ? 'rotate' : ''}`}>
                                                                {DropIcon && <DropIcon />}
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="dropHeadLabel flex backGroundDark">
                                                        {notification && <p className='pro'>{notification}</p>}
                                                        {headProLabel && <p className='pro'>{headProLabel}</p>}
                                                    </div>
                                                </div>
                                                {isOpen && dropdown.dropContent && (
                                                    <ul className="dropdown-menu">
                                                        {Object.keys(dropdown.dropContent).map((contentKey, contentIdx) => {
                                                            const content = dropdown.dropContent[contentKey];
                                                            const proLabel = content.proLabel;

                                                            return (
                                                                <li className='dropContent' key={contentIdx}>
                                                                    <NavLink to={`/${content.label.toLowerCase().replace(' ', '')}`}>
                                                                        {content.label}
                                                                    </NavLink>
                                                                    {proLabel && <p className='pro'>{proLabel}</p>}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                )}
                                            </li>
                                        );
                                    }
                                    return null;
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Navbar
