import './style.scss'
import { useState, useEffect } from 'react'

const taskList = [
    // { name: '', developer: '', workType: '', status: false, estimination: '', totalTime: '', myTime: '', efficiency: '' },
    { name: 'Search page mockup', developer: 'Robert Fox,\nKent Peacock,\ntest,\ntest,\ntest', workType: 'Programming,\nMeetings,\ntest,\ntest', status: true, estimination: '0.0', totalTime: '232.17', myTime: '23.00', efficiency: '100%' },
    { name: 'Two levels of the menu mockup', developer: 'Robert Fox', workType: 'Graphic Design', status: false, estimination: '0.0', totalTime: '1567.60', myTime: '15.00', efficiency: '-' },
    { name: 'Edit pictures', developer: 'Dianne Russel,\nAdam Gordon,\ntest,\ntest,\ntest,\ntest,', workType: 'Graphic Design', status: false, estimination: '0.0', totalTime: '678.20', myTime: '67.00', efficiency: '-' },
    { name: 'Subdomain home pages mockup', developer: 'Dianne Russel', workType: 'Graphic Design', status: false, estimination: '0.0', totalTime: '756.70', myTime: '75.00', efficiency: '-' },
    { name: 'Search page mockup', developer: 'Robert Fox,\nKent Peacock,\ntest,\ntest,\ntest', workType: 'Programming,\nMeetings,\ntest,\ntest', status: true, estimination: '0.0', totalTime: '232.17', myTime: '23.00', efficiency: '100%' },
    { name: 'Two levels of the menu mockup', developer: 'Robert Fox', workType: 'Graphic Design', status: false, estimination: '0.0', totalTime: '1567.60', myTime: '15.00', efficiency: '-' },
    { name: 'Edit pictures', developer: 'Dianne Russel,\nAdam Gordon,\ntest,\ntest,\ntest,\ntest,', workType: 'Graphic Design', status: false, estimination: '0.0', totalTime: '678.20', myTime: '67.00', efficiency: '-' },
    { name: 'Subdomain home pages mockup', developer: 'Dianne Russel', workType: 'Graphic Design', status: false, estimination: '0.0', totalTime: '756.70', myTime: '75.00', efficiency: '-' },
    { name: 'Search page mockup', developer: 'Robert Fox,\nKent Peacock,\ntest,\ntest,\ntest', workType: 'Programming,\nMeetings,\ntest,\ntest', status: true, estimination: '0.0', totalTime: '232.17', myTime: '23.00', efficiency: '100%' },
    { name: 'Two levels of the menu mockup', developer: 'Robert Fox', workType: 'Graphic Design', status: false, estimination: '0.0', totalTime: '1567.60', myTime: '15.00', efficiency: '-' },
    { name: 'Search page mockup', developer: 'Robert Fox,\nKent Peacock,\ntest,\ntest,\ntest', workType: 'Programming,\nMeetings,\ntest,\ntest', status: true, estimination: '0.0', totalTime: '232.17', myTime: '23.00', efficiency: '100%' },
    { name: 'Two levels of the menu mockup', developer: 'Robert Fox', workType: 'Graphic Design', status: false, estimination: '0.0', totalTime: '1567.60', myTime: '15.00', efficiency: '-' },
    { name: 'Edit pictures', developer: 'Dianne Russel,\nAdam Gordon,\ntest,\ntest,\ntest,\ntest,', workType: 'Graphic Design', status: false, estimination: '0.0', totalTime: '678.20', myTime: '67.00', efficiency: '-' },
    { name: 'Subdomain home pages mockup', developer: 'Dianne Russel', workType: 'Graphic Design', status: false, estimination: '0.0', totalTime: '756.70', myTime: '75.00', efficiency: '-' },
    { name: 'Search page mockup', developer: 'Robert Fox,\nKent Peacock,\ntest,\ntest,\ntest', workType: 'Programming,\nMeetings,\ntest,\ntest', status: true, estimination: '0.0', totalTime: '232.17', myTime: '23.00', efficiency: '100%' },
    { name: 'Two levels of the menu mockup', developer: 'Robert Fox', workType: 'Graphic Design', status: false, estimination: '0.0', totalTime: '1567.60', myTime: '15.00', efficiency: '-' },

]

const Task = ({ name, developer, workType, status, estimination, totalTime, myTime, efficiency }) => {
    developer = developer && developer.split('\n')
    workType = workType && workType.split('\n')
    const [devExpanded, setDevExpanded] = useState(developer.length > 2 ? false : true)
    const [workExpanded, setWorkExpanded] = useState(workType.length > 2 ? false : true)

    return (
        <div className="tasks__item">
            <div>
                <span className='text--mediumPurple text--small'>{name}</span>
            </div>
            <div>
                <p className='text--lavenderGray text--small' style={{ height: devExpanded ? 'auto' : '3em', overflow: 'hidden' }}>
                    {developer && developer.map(item => <>{item}<br /></>)}
                </p>
                {<p className='showMore' onClick={() => setDevExpanded(devExpanded => !devExpanded)} style={{ display: devExpanded ? 'none' : 'block' }}>Show more ({developer.length - 2})</p>}
            </div>
            <div>
                <p className='text--lavenderGray text--small' style={{ height: workExpanded ? 'auto' : '3em', overflow: 'hidden' }}>
                    {workType && workType.map(item => <>{item}<br /></>)}
                </p>
                <p className='showMore' onClick={() => setWorkExpanded(workExpanded => !workExpanded)} style={{ display: workExpanded ? 'none' : 'block' }}>Show more ({developer.length - 2})</p>
            </div>
            <div>
                {
                    status === true ?
                        <span className='text--green text--small'>Completed</span> :
                        <span className='text--red text--small'>Non Completed</span>
                }
            </div>
            <div>
                <span className='text--lavenderGray text--small'>{estimination}</span>
            </div>
            <div>
                <span className='text--lavenderGray text--small'>{totalTime}</span>
            </div>
            <div>
                <span className='text--lavenderGray text--small'>{myTime}</span>
            </div>
            <div>
                <span className='text--lavenderGray text--small'>{efficiency}</span>
            </div>
        </div>
    )
}

const Tasks = () => {
    const totalTimeAll = (taskList.reduce((totalTime, currentVal) => totalTime + +currentVal.totalTime, 0)).toFixed(2)
    const totalTimeMy = (taskList.reduce((totalTime, currentVal) => totalTime + +currentVal.myTime, 0)).toFixed(2)
    const [tasksPerPage, setTasksPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [tasksNumber, setTasksNumber] = useState(taskList.length)
    let efficencyArr = []
    let efficiencyAvg = 0
    const [firstPage, setFirstPage] = useState(false)
    const [lastPage, setlastPage] = useState(false)
    const [pagesNumber, setPagesNumber] = useState([])
    const [tasksToShow, setTasksToShow] = useState([])
    useEffect(() => {
        setFirstPage(currentPage === 1)
        setlastPage(currentPage * tasksPerPage >= tasksNumber)
    }, [currentPage])
    useEffect(() => {
        setTasksNumber(taskList.length)
    }, [taskList])
    useEffect(() => {
        const arr = []
        for (let a = 1; a < Math.ceil(tasksNumber / tasksPerPage) + 1; a++) arr.push(a)
        setPagesNumber(arr)
    }, [taskList, tasksPerPage])
    useEffect(() => {
        setCurrentPage(currentPage > pagesNumber[pagesNumber.length - 1] ? pagesNumber[pagesNumber.length - 1] : currentPage)
    }, [pagesNumber])
    useEffect(() => {
        const arr = []
        for (let a = 0; a < tasksPerPage; a++) {
            if (taskList[a + tasksPerPage * (currentPage - 1)]) {
                arr.push(taskList[a + tasksPerPage * (currentPage - 1)])
            }
            else break
        }
        setTasksToShow(arr)
        console.log(arr)
    }, [currentPage, tasksPerPage])

    for (const item of taskList) {
        item.efficiency !== '-' && efficencyArr.push(+item.efficiency.match(/^[0-9]{3}/))
    }
    efficiencyAvg = efficencyArr.reduce((sum, currentVal) => sum + currentVal, 0) / efficencyArr.length
    return (
        <div className="tasks">
            <div className="tasks__list">
                <header className="tasks__header">
                    <div>
                        <span className='text--small text--600 text--white'>Task name</span>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                            <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <span className='text--small text--600 text--white'>Developer</span>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                            <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <span className='text--small text--600 text--white'>Work Type</span>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                            <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <span className='text--small text--600 text--white'>Status</span>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                            <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <span className='text--small text--600 text--white'>Estimation (h)</span>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                            <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <span className='text--small text--600 text--white'>Total time spent by All</span>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                            <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <span className='text--small text--600 text--white'>My Time spent by Period (h)</span>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                            <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <span className='text--small text--600 text--white'>Efficiency</span>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.77187 1.89743L3.02319 0.147429C2.82834 -0.0478207 2.51158 -0.0478207 2.31672 0.147429L0.568049 1.89743C0.372947 2.09268 0.372947 2.40918 0.568049 2.60443C0.762902 2.79968 1.07966 2.79968 1.27451 2.60443L2.17034 1.70793V11.5009C2.17034 11.7769 2.39417 12.0009 2.66996 12.0009C2.94575 12.0009 3.16958 11.7769 3.16958 11.5009V1.70793L4.0654 2.60443C4.16283 2.70218 4.29073 2.75093 4.41863 2.75093C4.54654 2.75093 4.67444 2.70218 4.77187 2.60443C4.96697 2.40918 4.96697 2.09268 4.77187 1.89743Z" fill="white" />
                            <path d="M9.26842 9.39738C9.07332 9.20213 8.75706 9.20213 8.56195 9.39738L7.66614 10.2939V0.500877C7.66614 0.224877 7.44231 0.00087738 7.16652 0.00087738C6.89073 0.00087738 6.6669 0.224877 6.6669 0.500877V10.2939L5.77108 9.39738C5.57598 9.20213 5.25947 9.20213 5.06462 9.39738C4.86951 9.59263 4.86951 9.90913 5.06462 10.1044L6.81329 11.8544C6.91096 11.9521 7.03861 12.0009 7.16652 12.0009C7.29442 12.0009 7.42207 11.9521 7.51975 11.8544L9.26842 10.1044C9.46352 9.90913 9.46352 9.59263 9.26842 9.39738Z" fill="white" />
                        </svg>
                    </div>
                </header>
                <div className="tasks__contentWrapper">
                    {tasksToShow.map(item => <Task {...item} />)}
                </div>
                <footer className="tasks__footer">
                    <div><span className='text--white text--small'>Sum</span></div>
                    <div><span className='text--white text--small'>{totalTimeAll}h</span></div>
                    <div><span className='text--white text--small'>{totalTimeMy}h</span></div>
                    <div><span className='text--white text--small'>{efficiencyAvg}% ({totalTimeMy}h)</span></div>
                </footer>
            </div>
            <div className="tasks__pages pages">
                <span className='text--regular text--lavenderGray'>Rows per pages</span>
                <select name="" id="" className='select text--lavenderGray' onChange={(e) => setTasksPerPage(e.target.value)}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
                <span className='text--regular text--lavenderGray'>{(currentPage * tasksPerPage) - tasksPerPage + 1} - {currentPage * tasksPerPage} of {taskList.length}</span>
                <div className="pages__pageButtons">
                    <button disabled={firstPage} className={firstPage ? 'pageButton--disabled' : 'pageButton--active'} onClick={() => setCurrentPage(currentPage => currentPage - 1)}>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 1L1 5L5 9" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div>
                        {pagesNumber.map(item => <button className={currentPage === item ? 'text--white active' : 'text--white'} value={item} onClick={(e) => setCurrentPage(+e.target.value)}>{item}</button>)}
                    </div>
                    <button disabled={lastPage} className={lastPage ? 'pageButton--disabled' : 'pageButton--active'} onClick={() => setCurrentPage(currentPage => currentPage + 1)}>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tasks