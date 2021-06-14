import './App.scss';
import vahak from '../assets/Vahak_Blue.png';
import BidHome from '../components/BidHome';

function App() {
  return (
    <>
      <img src={vahak} className="Vahak-logo" alt="logo" />
      <div className="App">
        <header className="App-header">
          <BidHome />
        </header>
      </div>
    </>
  );
}

export default App;
