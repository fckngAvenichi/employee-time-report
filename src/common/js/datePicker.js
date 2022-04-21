import '../stylesheets/datePicker.scss'
import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';

function dateToString(date) {
  const [initialYear, initialMonth, initialDay] = [date.getFullYear(), date.getMonth(), date.getDate()]
  let resultYear, resultMonth, resultDay

  if (initialYear < 10) resultYear = '000' + initialYear
  else if (initialYear < 100) resultYear = '00' + initialYear
  else if (initialYear < 1000) resultYear = '0' + initialYear
  else resultYear = '' + initialYear

  if (initialMonth + 1 < 10) resultMonth = '0' + (initialMonth + 1)
  else resultMonth = '' + (initialMonth + 1)

  if (initialDay < 10) resultDay = '0' + initialDay
  else resultDay = '' + initialDay

  return `${resultYear}-${resultMonth}-${resultDay}`
}

function stringToDate(string) {
  const [year, month, day] = string.split('-').map(item => +item)
  const resultDate = year > 0 && month > 0 && day > 0 ? new Date(year, month - 1, day) : new Date()
  return resultDate
}

export const DatePickerManual = () => {
  const [calendarStartDate, setCalendarStartDate] = useState(new Date())
  const [calendarEndDate, setCalendarEndDate] = useState(new Date())
  const [inputStartDate, setInputStartDate] = useState(dateToString(calendarStartDate))
  const [inputEndDate, setInputEndDate] = useState(calendarEndDate ? dateToString(calendarEndDate) : '')
  const [isDatepickerVisible, setIsDatepickerVisible] = useState(false)

  function onInputChange(event, inputSetter, calendarSetter) {
    inputSetter(event.target.value)
    calendarSetter(stringToDate(event.target.value))
  }

  function onCalendarChange(dates) {
    const [startDate, endDate] = dates
    setCalendarStartDate(startDate)
    setCalendarEndDate(endDate)
    startDate && setInputStartDate(dateToString(startDate))
    endDate && setInputEndDate(dateToString(endDate))
  }

  return (
    <div className="datePicker">
      <div className={`datePicker__container ${isDatepickerVisible && 'datePicker__container--opened'}`} tabIndex={1}>
        <div className="datePicker__item">
          <span className='text--lavenderBlue text--regular'>From:</span>
          <input type="date" name="" id="" className='text--regular text--lavenderGray' value={inputStartDate} onChange={event => onInputChange(event, setInputStartDate, setCalendarStartDate)} />
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5061 3.43557C12.8178 3.16281 13.2917 3.19439 13.5644 3.50612L20.5644 11.5061C20.8119 11.7889 20.8119 12.2111 20.5644 12.4939L13.5644 20.4939C13.2917 20.8056 12.8178 20.8372 12.5061 20.5644C12.1944 20.2917 12.1628 19.8178 12.4356 19.5061L18.3472 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.3472L12.4356 4.49388C12.1628 4.18215 12.1944 3.70833 12.5061 3.43557Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="datePicker__item">
          <span className='text--lavenderBlue text--regular'>To:</span>
          <input type="date" name="" id="" className='text--regular text--lavenderGray' value={inputEndDate} onChange={event => onInputChange(event, setInputEndDate, setCalendarEndDate)} />
          <svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsDatepickerVisible(isDatepickerVisible => !isDatepickerVisible)} className="datePicker__spanSvg">
            <rect width="48" height="48" fill="white" fillOpacity="0.01" />
            <path d="M7.94977 11.9498H39.9498" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.94977 23.9498H39.9498" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.94977 35.9498H39.9498" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      {isDatepickerVisible && <div className="datePicker__picker">
        <ul className="datePicker__periods">
          <li className='text--regular text--white'>All Time</li>
          <li className='text--regular text--white'>Today</li>
          <li className='text--regular text--white'>Yesterday</li>
          <li className='text--regular text--white'>Current week</li>
          <li className='text--regular text--white'>Previous week</li>
          <li className='text--regular text--white'>Current month</li>
          <li className='text--regular text--white'>Previous month</li>
          <li className='text--regular text--white'>Penultimate month</li>
          <li className='text--regular text--white'>Previous six month</li>
          <li className='text--regular text--white'>Current year</li>
          <li className='text--regular text--white'>Previous year</li>
        </ul>
        <div className="datePicker__inputs">
          <input type="date" name="" id="" className='text--regular text--lavenderGray' value={inputStartDate} onChange={event => onInputChange(event, setInputStartDate, setCalendarStartDate)} />
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5061 3.43557C12.8178 3.16281 13.2917 3.19439 13.5644 3.50612L20.5644 11.5061C20.8119 11.7889 20.8119 12.2111 20.5644 12.4939L13.5644 20.4939C13.2917 20.8056 12.8178 20.8372 12.5061 20.5644C12.1944 20.2917 12.1628 19.8178 12.4356 19.5061L18.3472 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.3472L12.4356 4.49388C12.1628 4.18215 12.1944 3.70833 12.5061 3.43557Z" fill="#ffffff" />
          </svg>
          <input type="date" name="" id="" className='text--regular text--lavenderGray' value={inputEndDate} onChange={event => onInputChange(event, setInputEndDate, setCalendarEndDate)} />
        </div>
        <DatePicker
          selected={calendarStartDate}
          onChange={onCalendarChange}
          startDate={calendarStartDate}
          endDate={calendarEndDate}
          selectsRange
          previousMonthButtonLabel='<'
          nextMonthButtonLabel='>'
          showMonthDropdown
          showYearDropdown
          dropdownMode='select'
          calendarStartDay={1}
          inline
        />
      </div>}

    </div>
  )
}