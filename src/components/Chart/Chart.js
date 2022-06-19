import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  const dataPointValues = props.dataPoints.map((item) => item.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={totalMax}
          label={item.label}
        />
      ))}
    </div>
  );
}

export default Chart;
