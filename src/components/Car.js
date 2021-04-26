import carStyle from './car.module.css';

function Car(props) {
    return (
        <div className={carStyle.car}>
            <table>
                <caption><i>#{props.id}</i> {props.model}</caption>
                <tr><th>Speed: </th><td>{props.speed}</td></tr>
                <tr><th>Engine: </th><td>{props.engine}</td></tr>
            </table>
        </div>
    );
}

export default Car;