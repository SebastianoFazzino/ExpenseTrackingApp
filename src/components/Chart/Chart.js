import ChartBar from "./ChartBar";
import "../components-styles/Chart.css";


const Chart = props => {

    const chartDataValue = props.data.map(data => data.value);
    const maxExpense = Math.max(...chartDataValue);

    return (
        <div className={"chart"}>
            {props.data.map( data =>
                <ChartBar
                    key={data.label}
                    value={data.value}
                    maxValue={maxExpense}
                    label={data.label}
                />)}
        </div>
    )
};


export default Chart;