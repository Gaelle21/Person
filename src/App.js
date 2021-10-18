
import './App.css';
import Person from './Person/Person';

function App() {
    const clickHandler = () => {
        alert("Bouton cliqué");
    }
    return(
    <div className="App">
        <h1> Première application ! </h1>
        <Person nom="François" age="45" click={clickHandler}> Je suis ok </Person>
        <Person nom="Ginette" age="30" />
        <Person nom="Bryan" age="22" />
        <Person nom="Thomas" age="21" />
    </div>
    );
}

export default App;
