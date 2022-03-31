import '../../stylesheets/components/main.scss'
import Filter from './filter'
import Info from './info'
import Tasks from './tasks'

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