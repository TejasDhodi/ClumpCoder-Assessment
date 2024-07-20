import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdSunny, IoMdNotificationsOutline } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { AiTwotoneMessage } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const SearchComponent = () => {

    const [toggleLight, setToggleLight] = useState(true);

    return (
        <section className='header flex'>

            <div className="search flex">
                <CiSearch />
                <input type="search" name="" id="" placeholder='Type to search...' />
            </div>

            <div className="hearderContent flex">
                <div className="navAddOns">
                    <div className="toggleLights">
                        <div className={!toggleLight ? "toggleContainer turnDark" : "toggleContainer"} onClick={() => setToggleLight(!toggleLight)}>
                            {
                                toggleLight ? <IoMdSunny /> : <FaMoon />
                            }
                        </div>
                    </div>

                    <div className="notifications">
                        {
                            [IoMdNotificationsOutline, AiTwotoneMessage].map((CurrElem, index) => {
                                return <div className="notify" key={index}>
                                    <CurrElem key={index} />
                                    <span></span>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className="profile flex">
                    <div className="profileDescription">
                        <h4>Tejas Dhodi</h4>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="profileImg">
                        {/* <img src="/Images/Self.jpeg" alt="" /> */}
                    </div>
                    <div className="profileIcon">
                        <RiArrowDropDownLine />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchComponent
