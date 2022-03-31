import '../../stylesheets/components/tasks.scss'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

function getSum(arr, param) {
  let initialValue = 0;
  initialValue = arr.reduce((previousValue, currentValue) => previousValue + currentValue[param], initialValue)
  return initialValue
}

function getAvg(arr, param) {
  // number of components that are not NULL
  let count = 0;
  arr.map(item => {
    count += item[param] !== null ? 1 : 0
  })
  return (getSum(arr, param) / count).toFixed()
}

const items = [
  // { name: '', developer: '', workType: '', status: false, estimination: '', totalTime: '', myTime: '', efficiency: '' },
  { name: 'Search page mockup', developer: 'Robert Fox,\nKent Peacock,\ntest,\ntest,\ntest', workType: 'Programming,\nMeetings,\ntest,\ntest', status: true, estimination: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: 100 },
  { name: 'Two levels of the menu mockup', developer: 'Robert Fox', workType: 'Graphic Design', status: false, estimination: 0.0, totalTime: 1567.60, myTime: 15.00, efficiency: null },
  { name: 'Edit pictures', developer: 'Dianne Russel,\nAdam Gordon,\ntest,\ntest,\ntest,\ntest,', workType: 'Graphic Design', status: false, estimination: 0.0, totalTime: 678.20, myTime: 67.00, efficiency: null },
  { name: 'Subdomain home pages mockup', developer: 'Dianne Russel', workType: 'Graphic Design', status: false, estimination: 0.0, totalTime: 756.70, myTime: 75.00, efficiency: null },
  { name: 'Search page mockup', developer: 'Robert Fox,\nKent Peacock,\ntest,\ntest,\ntest', workType: 'Programming,\nMeetings,\ntest,\ntest', status: true, estimination: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: 100 },
  { name: 'Search page mockup', developer: 'Robert Fox,\nKent Peacock,\ntest,\ntest,\ntest', workType: 'Programming,\nMeetings,\ntest,\ntest', status: true, estimination: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: 100 },
  { name: 'Two levels of the menu mockup', developer: 'Robert Fox', workType: 'Graphic Design', status: false, estimination: 0.0, totalTime: 1567.60, myTime: 15.00, efficiency: null },
  { name: 'Edit pictures', developer: 'Dianne Russel,\nAdam Gordon,\ntest,\ntest,\ntest,\ntest,', workType: 'Graphic Design', status: false, estimination: 0.0, totalTime: 678.20, myTime: 67.00, efficiency: null },
  { name: 'Subdomain home pages mockup', developer: 'Dianne Russel', workType: 'Graphic Design', status: false, estimination: 0.0, totalTime: 756.70, myTime: 75.00, efficiency: null },
  { name: 'Search page mockup', developer: 'Robert Fox,\nKent Peacock,\ntest,\ntest,\ntest', workType: 'Programming,\nMeetings,\ntest,\ntest', status: true, estimination: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: 100 },
  { name: 'Search page mockup', developer: 'Robert Fox,\nKent Peacock,\ntest,\ntest,\ntest', workType: 'Programming,\nMeetings,\ntest,\ntest', status: true, estimination: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: 100 },
  { name: 'Two levels of the menu mockup', developer: 'Robert Fox', workType: 'Graphic Design', status: false, estimination: 0.0, totalTime: 1567.60, myTime: 15.00, efficiency: null },
  { name: 'Edit pictures', developer: 'Dianne Russel,\nAdam Gordon,\ntest,\ntest,\ntest,\ntest,', workType: 'Graphic Design', status: false, estimination: 0.0, totalTime: 678.20, myTime: 67.00, efficiency: null },
  { name: 'Subdomain home pages mockup', developer: 'Dianne Russel', workType: 'Graphic Design', status: false, estimination: 0.0, totalTime: 756.70, myTime: 75.00, efficiency: null },
  { name: 'Search page mockup', developer: 'Robert Fox,\nKent Peacock,\ntest,\ntest,\ntest', workType: 'Programming,\nMeetings,\ntest,\ntest', status: true, estimination: 0.0, totalTime: 232.17, myTime: 23.00, efficiency: 100 },
]

const TaskItem = ({ item }) => {
  const devs = item.developer && item.developer.split('\n')
  const workType = item.workType && item.workType.split('\n')

  const [isDevsVisible, setIsDevsVisible] = useState(false)
  const [isWorkVisible, setIsWorkVisible] = useState(false)

  return (
    <li className={`tasks__item`}>
      <span className='text--small text--mediumPurple'>{item.name}</span>
      <span className='text--small'><span style={!isDevsVisible ? { height: '5%', overflow: 'none' } : { height: 'auto' }}>{devs && devs.map(item => <>{item}<br /></>)}</span>{devs && devs.length > 2 && <span onClick={() => setIsDevsVisible(isDevsVisible => !isDevsVisible)} className='showMore'>Show more</span>}</span>
      <span className='text--small'>{workType && workType.map(item => <>{item}<br /></>)}{workType && workType.length > 2 && <span onClick={() => setIsWorkVisible(isWorkVisible => !isWorkVisible)} className='showMore'>Show more</span>}</span>
      <span className={(item.status ? 'text--green' : 'text--red') + ' text--small'}>{item.status ? 'Completed' : 'Non Completed'}</span>
      <span className='text--small'>{item.estimination.toFixed(1)}</span>
      <span className='text--small'>{item.totalTime.toFixed(2)}</span>
      <span className='text--small'>{item.myTime.toFixed(2)}</span>
      <span className='text--small'>{item.efficiency > 0 ? item.efficiency + '%' : '-'}</span>
    </li>
  )
}

function Items({ currentItems }) {
  return (
    <>
      {currentItems && currentItems.map((item) => {
        return <TaskItem item={item} />
      })}
    </>
  );
}

function PaginatedItems({ itemsPerPage = 10 }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [tasksPerPage, setTasksPerPage] = useState(itemsPerPage)

  useEffect(() => {
    const endOffset = itemOffset + tasksPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / tasksPerPage));
  }, [itemOffset, tasksPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * tasksPerPage % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className='tasks'>
      <div className="tasks__contentWrapper">
        <div className="tasks__content">
          <header className="tasks__item tasks__item--header">
            <span className='text--white text--600 text--small'>Task name
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
              </svg>
            </span>
            <span className='text--white text--600 text--small'>Developer
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
              </svg>
            </span>
            <span className='text--white text--600 text--small'>Work Type
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
              </svg>
            </span>
            <span className='text--white text--600 text--small'>Status
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
              </svg>
            </span>
            <span className='text--white text--600 text--small'>Estimation (h)
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
              </svg>
            </span>
            <span className='text--white text--600 text--small'>Total time spent by All
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
              </svg>
            </span>
            <span className='text--white text--600 text--small'>My Time spent by Period (h)
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
              </svg>
            </span>
            <span className='text--white text--600 text--small'>Efficiency
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
              </svg>
            </span>
          </header>
          <ul className="tasks__list">
            <Items currentItems={currentItems} />
          </ul>
          <footer className='tasks__item tasks__item--footer'>
            <span className='text--white text--small'>Sum</span>
            <span className='text--white text--small'></span>
            <span className='text--white text--small'></span>
            <span className='text--white text--small'></span>
            <span className='text--white text--small'></span>
            <span className='text--white text--small'>{getSum(items, 'totalTime').toFixed(2)}h</span>
            <span className='text--white text--small'>{getSum(items, 'myTime').toFixed(2)}h</span>
            <span className='text--white text--small'>{getAvg(items, 'efficiency')}% ({getSum(items, 'myTime').toFixed(2)}h)</span>
          </footer>
        </div>
      </div>
      <div className="tasks__controls">
        <span className='text--regular'>Rows per page</span>
        <select name="" id="" className='select text--regular text--lavenderGray' onChange={(e) => setTasksPerPage(e.target.value)}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <span className='text--regular'>{itemOffset} - {(itemOffset + +tasksPerPage) > items.length ? items.length : itemOffset + +tasksPerPage} of {items.length}</span>
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link button"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active button--purple"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default PaginatedItems