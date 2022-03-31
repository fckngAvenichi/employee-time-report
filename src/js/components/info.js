import '../../stylesheets/components/info.scss'

const Info = () => {
  return (
    <div className="info">
      <section className="info__item info__item--information">
        <header className='info__header'>
          <h2 className='text--white text--large text--700'>Project information</h2>
        </header>
        <div className='info__main'>
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
                <path d="M6 0.833313V19.1666" stroke="#27AE60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.1667 4.16669H3.91667C3.14312 4.16669 2.40125 4.47398 1.85427 5.02096C1.30729 5.56794 1 6.30981 1 7.08335C1 7.8569 1.30729 8.59877 1.85427 9.14575C2.40125 9.69273 3.14312 10 3.91667 10H8.08333C8.85688 10 9.59875 10.3073 10.1457 10.8543C10.6927 11.4013 11 12.1431 11 12.9167C11 13.6902 10.6927 14.4321 10.1457 14.9791C9.59875 15.5261 8.85688 15.8334 8.08333 15.8334H1" stroke="#27AE60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </section>
          <section>
            <span className='text--lavenderBlue text--regular text--600'>Label</span>
            <span className='text--lavenderGray text--small label--purple'>Hourly</span>
          </section>
          <section>
            <span className='text--lavenderBlue text--regular text--600'>Tag</span>
            <span className='text--lavenderGray text--small tag--outlined--purple'>Page Mockup</span>
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
      <section className="info__item info__item--time">
        <header className='info__header'>
          <h2 className='text--white text--large text--700'>Project Time</h2>
        </header>
        <div className="info__main">
          <section>
            <h2 className='text--regular text--lavenderBlue'>Project information</h2>
            <table className="info__table--main info__table--twocolumns">
              <tbody>
                <tr>
                  <td><span>Changes</span></td>
                  <td><span>2067.26h</span></td>
                </tr>
                <tr>
                  <td><span>Origin</span></td>
                  <td><span>1660.55h</span></td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <table className="info__table--secondary info__table--twocolumns">
                      <tbody>
                        <tr>
                          <td><span>Programming</span></td>
                          <td><span>2345.56h</span></td>
                        </tr>
                        <tr>
                          <td><span>Markup</span></td>
                          <td><span>27.18h</span></td>
                        </tr>
                        <tr>
                          <td><span>Graphic Design</span></td>
                          <td><span>34h</span></td>
                        </tr>
                        <tr>
                          <td><span>Estimation</span></td>
                          <td><span>678h</span></td>
                        </tr>
                        <tr>
                          <td><span>Investigation</span></td>
                          <td><span>80.83h</span></td>
                        </tr>
                        <tr>
                          <td><span>Bug Fixing</span></td>
                          <td><span>76h</span></td>
                        </tr>
                        <tr>
                          <td><span>Quality Assurance</span></td>
                          <td><span>6h</span></td>
                        </tr>
                        <tr>
                          <td><span>Meetings</span></td>
                          <td><span>5h</span></td>
                        </tr>
                        <tr>
                          <td><span>Other</span></td>
                          <td><span>8256.08h</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td><span>Sum</span></td>
                  <td><span>15236.48h</span></td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <h2 className='text--regular text--lavenderBlue'>Time (Hours) by Current Month (Sep)</h2>
            <table className="info__table--main info__table--twocolumns">
              <tr>
                <td><span>Changes</span></td>
                <td><span>2067.26h</span></td>
              </tr>
              <tr>
                <td><span>Origin</span></td>
                <td><span>1660.55h</span></td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <table className="info__table--secondary info__table--twocolumns">
                    <tr>
                      <td><span>Other</span></td>
                      <td><span>8256.08h</span></td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td><span>Sum</span></td>
                <td><span>15236.48h</span></td>
              </tr>
            </table>
          </section>
          <section>
            <h2 className='text--regular text--lavenderBlue'>Time (Hours) by Current Month (Sep)</h2>
            <table className="info__table--main info__table--twocolumns">
              <tbody>
                <tr>
                  <td><span>Changes</span></td>
                  <td><span>2067.26h</span></td>
                </tr>
                <tr>
                  <td><span>Origin</span></td>
                  <td><span>1660.55h</span></td>
                </tr>
                <tr>
                  <td><span>Sum</span></td>
                  <td><span>15236.48h</span></td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </section>
      <section className="info__item info__item--efficiency">
        <header className='info__header'>
          <h2 className='text--white text--large text--700'>Efficiency</h2>
        </header>
        <div className="info__main">
          <section>
            <h2 className='time__header text--regular text--lavenderBlue'>Total Efficiency</h2>
            <table className="info__table--main info__table--threecolumns">
              <tr>
                <td colSpan={3}><span>Changes</span></td>
              </tr>
              <tr>
                <td><span>Origin</span></td>
                <td><span>1660.55h</span></td>
                <td><span>2067.26h</span></td>
              </tr>
              <tr>
                <td><span>Sum</span></td>
                <td><span>15236.48h</span></td>
                <td><span>2067.26h</span></td>
              </tr>
            </table>
          </section>
          <section>
            <h2 className='time__header text--regular text--lavenderBlue'>Efficiency by Current Month (Sep)</h2>
            <table className="info__table--main info__table--threecolumns">
              <tr>
                <td colSpan={3}><span>Changes</span></td>
              </tr>
              <tr>
                <td><span>Origin</span></td>
                <td><span>1660.55h</span></td>
                <td><span>2067.26h</span></td>
              </tr>
              <tr>
                <td><span>Sum</span></td>
                <td><span>15236.48h</span></td>
                <td><span>2067.26h</span></td>
              </tr>
            </table>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Info