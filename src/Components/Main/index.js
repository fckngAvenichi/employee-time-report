import './style.scss'
import Filter from '../Filter'
import Info from '../Info'
import Tasks from '../Tasks'

const Main = () => {
    return (
        <main className="main">
            <Filter />
            <Info />
            <Tasks />
        </main>
    )
}

export default Main