import './App.scss';
import Header from './js/components/header';
import Main from './js/components/main';
import Footer from './js/components/footer';
import { DatePickerManual } from './common/js/datePicker';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <div>
        <DatePickerManual />
      </div>
      <Footer />
    </div>
  );
}

export default App;
