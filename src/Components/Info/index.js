import './style.scss'

const Info = () => {
    return (
        <div className="info">
            <section className="info__item information">
                <header className="info__header text--large text--white text--700">Project information</header>
                <div className="info__main">
                    <section>
                        <span className='text--lavenderBlue text--regular text--600'>Team lead</span>
                        <span className='text--lavenderGray text--regular'>Ralph Edwards</span>
                    </section>
                    <section>
                        <span className='text--lavenderBlue text--regular text--600'>Created</span>
                        <span className='text--lavenderGray text--regular'>25/06/2019</span>
                    </section>
                    <section>
                        <span className='text--lavenderBlue text--regular text--600'>Finished</span>
                        <span className='text--lavenderGray text--regular'>30/06/2020</span>
                    </section>
                    <section>
                        <span className='text--lavenderBlue text--regular text--600'>Categories</span>
                        <span className='text--lavenderGray text--regular'>CMS Production</span>
                    </section>
                    <section>
                        <span className='text--lavenderBlue text--regular text--600'>Time</span>
                        <span className='text--lavenderGray text--regular'>
                            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg--green'>
                                <path d="M6 0.833313V19.1666" stroke="#27AE60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.1667 4.16669H3.91667C3.14312 4.16669 2.40125 4.47398 1.85427 5.02096C1.30729 5.56794 1 6.30981 1 7.08335C1 7.8569 1.30729 8.59877 1.85427 9.14575C2.40125 9.69273 3.14312 10 3.91667 10H8.08333C8.85688 10 9.59875 10.3073 10.1457 10.8543C10.6927 11.4013 11 12.1431 11 12.9167C11 13.6902 10.6927 14.4321 10.1457 14.9791C9.59875 15.5261 8.85688 15.8334 8.08333 15.8334H1" stroke="#27AE60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </section>
                    <section>
                        <span className='text--lavenderBlue text--regular text--600'>Label</span>
                        <span className='text--lavenderGray text--small label'>Hourly</span>
                    </section>
                    <section>
                        <span className='text--lavenderBlue text--regular text--600'>Tag</span>
                        <span className='text--lavenderGray text--small tag'>Page Mockup</span>
                    </section>
                    <section>
                        <span className='text--lavenderBlue text--regular text--600'>Status</span>
                        <span className='text--red text--regular'>Non Completed</span>
                    </section>
                    <section>
                        <span className='text--lavenderBlue text--regular text--600'>Team</span>
                        <span className='text--lavenderGray text--regular'>Jane Cooper, Wade Warren, Esther Howard, Cameron Williamson, Brooklyn Simmons, Leslie Alexander, Jenny Wilson, Gur Hawkins, Robert Fox, Jacob Jones, Kristin Watson, Cody Fisher, Savannah Nguen, Bessie Cooper, Albert Flores, Ralph Edwards, Dianne Russel, Devon Lane, Marvin McKinney, Jerome Bell, Courtney Henry, Theresa Webb, Kathrin Murphu, Eleonora Pena, Floud Miles, Darrell Steward</span>
                    </section>
                </div>
            </section>
            <section className="info__item time">
                <header className="info__header text--large text--white text--700">Project Time</header>
                <div className="info__main">
                    <section className="info__table firstTimeTable">
                        <h2 className='time__header text--regular text--lavenderBlue'>Total time (Hours)</h2>
                        <table className="time__mainTable">
                            <tr>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>Changes</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>2067.26h</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>Origin</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>1660.55h</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <table className="time__subTable">
                                        <tr>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>Programming</span>
                                            </td>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>2345.56h</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>Markup</span>
                                            </td>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>27.18h</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>Graphic Design</span>
                                            </td>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>34h</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>Estimation</span>
                                            </td>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>678h</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>Investigation</span>
                                            </td>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>80.83h</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>Bug Fixing</span>
                                            </td>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>76h</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>Quality Assurance</span>
                                            </td>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>6h</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>Meetings</span>
                                            </td>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>5h</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>Other</span>
                                            </td>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>8256.08h</span>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>Sum</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>15236.48h</span>
                                </td>
                            </tr>
                        </table>
                    </section>
                    <section className="info__table secondTimeTable">
                        <h2 className='time__header text--regular text--lavenderBlue'>Time (Hours) by Current Month (Sep)</h2>
                        <table className="time__mainTable">
                            <tr>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>Changes</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>0h</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>Origin</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>2067.26h</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <table className="time__subTable">
                                        <tr>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>Programming</span>
                                            </td>
                                            <td>
                                                <span className='text--regular text--lavenderGray'>1660.55h</span>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>Sum</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>15236.48h</span>
                                </td>
                            </tr>
                        </table>
                    </section>
                    <section className="info__table thirdTimeTable">
                        <h2 className='time__header text--regular text--lavenderBlue'>Time (Hours) by Current Month (Sep)</h2>
                        <table className="time__mainTable">
                            <tr>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>Changes</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>0h</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>Origin</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>2067.26h</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>Sum</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>15236.48h</span>
                                </td>
                            </tr>
                        </table>
                    </section>
                </div>
            </section>
            <section className="info__item efficiency">
                <header className="info__header text--large text--white text--700">Efficiency</header>
                <div className="info__main">
                    <section className="info__table firstEfficiencyTable">
                        <h2 className='time__header text--regular text--lavenderBlue'>Time (Hours) by Current Month (Sep)</h2>
                        <table className="time__mainTable">
                            <tr>
                                <td colSpan={3}>
                                    <span className='text--regular text--lavenderGray text--700'>Changes</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>Origin</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>2067.26h</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>100%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>Average</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>2345.04h</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>100%</span>
                                </td>
                            </tr>
                        </table>
                    </section>
                    <section className="info__table secondEfficiencyTable">
                        <h2 className='time__header text--regular text--lavenderBlue'>Efficiency by Current Month (Sep)</h2>
                        <table className="time__mainTable">
                            <tr>
                                <td colSpan={3}>
                                    <span className='text--regular text--lavenderGray text--700'>Changes</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>Origin</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>507.26h</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>100%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>Average</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>507.26h</span>
                                </td>
                                <td>
                                    <span className='text--regular text--lavenderGray text--700'>100%</span>
                                </td>
                            </tr>
                        </table>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Info