import Header from './Components/header/header.jsx'
import Login from './Components/log-In/login';
import Home from './Components/home/home';
import PersonForm from './Components/forms/personForm.jsx';
import GroupForm from './Components/forms/groupForm.jsx';
import EventForm from './Components/forms/eventForm.jsx';
import Footer from './Components/footer/footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/*<Login />*/}
      {/*<PersonForm />*/}
      {/*<GroupForm />*/}
      {/*<EventForm />*/}
      <Footer />
    </div>
  );
}

export default App;
