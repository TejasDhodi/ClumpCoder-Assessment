// src/Charts.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { revenueData, revenueData2 } from '../Service/Service';
import { IoRadioButtonOn } from "react-icons/io5";
import { IoIosRadioButtonOff } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

const Charts = () => {


    return (
        <div className='chartsContainer' style={{ display: 'flex' }}>
            <div className="chart">
                <div className="chartHeads">
                    <div className="head">
                        <div className="titlesContainer flex">
                            {
                                ['Revenue', 'Sales'].map((currElem, index) => {
                                    return <div className="titles" key={index}>
                                        <div className="icon">
                                            <IoRadioButtonOn />
                                        </div>
                                        <div className="details">
                                            <h3>{`Total ${currElem}`}</h3>
                                            <p>12.04.2022 - 12.05.2022</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div className="dayFilter">
                            {
                                ['Day', 'Week', 'Month'].map((currElem, index) => {
                                    return <button type="button" key={index}>{currElem}</button>
                                })
                            }
                        </div>
                    </div>
                </div>
                <ResponsiveContainer width={750} height={300} >

                    <LineChart data={revenueData} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#7fb6f5" fillOpacity={1} fill="#7fb6f5" />
                        <Line type="monotone" dataKey="sales" stroke="#1565C0" fillOpacity={1} fill="#1565C0" />
                    </LineChart>
                </ResponsiveContainer>
            </div>


            <div className="chart">
                <div className="chartheads">
                    <div className="head">
                        <h3>Profit this week</h3>
                        <div className="headDrop flex">
                            <p>week</p>
                            <RiArrowDropDownLine />
                        </div>
                    </div>

                    <div className="indicatorContainer flex">
                        {['Sales', 'Revenue'].map((currElem, index) => {
                            return <div className="indicators" key={index}>
                                <IoIosRadioButtonOff />
                                <p>{currElem}</p>
                            </div>
                        })}
                    </div>
                </div>
                <ResponsiveContainer width={400} height={300}>
                    <BarChart
                        width={500}
                        height={300}
                        data={revenueData2}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" stackId="a" fill="#1565C0" />
                        <Bar dataKey="revenue" stackId="a" fill="#7fb6f5" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Charts;
