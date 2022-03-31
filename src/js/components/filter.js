import '../../stylesheets/components/filter.scss'
import { useState } from 'react'

const Filter = () => {
  const [isHoverApply, setIsHoverApply] = useState(false)
  const [isHoverReset, setIsHoverReset] = useState(false)

  return (
    <div className="filter">
      <section className="filter__item">
        <h2 className='filter__title text--regular text--lavenderBlue'>Dev</h2>
        <div className='filetr__content'>
          <select name="" id="" className='filter__select select text--lavenderGray text--regular'>
            <option value="Jenny Wilson">Jenny Wilson</option>
            <option value="test1">test1</option>
            <option value="test2">test2</option>
          </select>
        </div>
      </section>
      <section className="filter__item">
        <h2 className='filter__title text--regular text--lavenderBlue'>Status</h2>
        <div className='filter__content'>
          <select name="" id="" className='filter__select select text--lavenderGray text--regular'>
            <option value="Jenny Wilson">All Statuses</option>
            <option value="test1">test1</option>
            <option value="test2">test2</option>
          </select>
        </div>
      </section>
      <section className="filter__item">
        <h2 className='filter__title text--regular text--lavenderBlue'></h2>
        <div className='filter__content'>
          <input type="checkbox" name="" id="efficiency" className="checkbox" />
          <label htmlFor="efficiency" className="text--regular text--lavenderGray">Show Efficiency</label>
        </div>
      </section>
      <section className="filter__item">
        <h2 className='filter__title text--regular text--lavenderBlue'></h2>
        <div className='filter__content'>
          <button className={`text--700 button ${isHoverApply ? "button--purple" : "button--outlined--purple"}`} onMouseOver={() => setIsHoverApply(true)} onMouseOut={() => setIsHoverApply(false)}>Apply</button>
        </div>
      </section>
      <section className="filter__item">
        <h2 className='filter__title text--regular text--lavenderBlue'></h2>
        <div className='filter__content'>
          <button className={`text--700 button ${isHoverReset ? "button--purple" : "button--outlined--purple"}`} onMouseOver={() => setIsHoverReset(true)} onMouseOut={() => setIsHoverReset(false)}>Reset Filters</button>
        </div>
      </section>
    </div>
  )
}

export default Filter