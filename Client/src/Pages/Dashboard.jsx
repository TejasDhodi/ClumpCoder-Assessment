import React from 'react'
import SearchComponent from '../Components/SearchComponent'

import { FaEye, FaArrowUp } from "react-icons/fa";
import { revenueContainerData } from '../Service/Service';
import Charts from '../Components/Charts';

const Dashboard = () => {
    return (
        <section id='Dashboard'>
            <SearchComponent />

            <section className="revenueContainer">

                {
                    revenueContainerData.map((currElem, index) => {
                        const { Icon, revenue, percentage, label, PercentageIcon } = currElem;
                        return <div className="revenue" key={index}>
                                    <div className="revenueIcon">
                                        <Icon />
                                    </div>
                                    <div className="revenueDetails">
                                        <div className="revenueIfo">
                                            <h2>{`$${revenue}K`}</h2>
                                            <p>{label}</p>
                                        </div>
                                        <div className="percentages">
                                            <p>{`${percentage}%`}</p>
                                            <PercentageIcon />
                                        </div>
                                    </div>
                                </div>
                    })
                }

            </section>
            <section className="charts">
                <Charts />
            </section>
        </section>
    )
}

export default Dashboard
