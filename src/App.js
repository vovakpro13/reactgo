import './App.css';
import Car from "./components/Car";

function App() {

    const cars = [
        {
            model: 'BMW',
            speed: 290,
            engine: 2.6
        },
        {
            model: 'Toyota',
            speed: 230,
            engine: 3
        },
        {
            model: 'Opel',
            speed: 190,
            engine: 1.5
        },
    ];

    return (
        <div>
            {
                cars.map((car, i) => <Car id={i} model={car.model} speed={car.speed} engine={car.engine}/>)
            }
        </div>
    );
}

export default App;
