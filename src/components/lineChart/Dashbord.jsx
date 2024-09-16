import LineChart from './LineChart';

const data = [
  { year: 2023, month: 'January', amount: 200 },
  { year: 2023, month: 'February', amount: 180 },
  { year: 2023, month: 'March', amount: 210 },
  { year: 2023, month: 'April', amount: 190 },
  { year: 2023, month: 'May', amount: 220 },
  { year: 2023, month: 'June', amount: 240 },
  { year: 2023, month: 'July', amount: 250 },
  { year: 2023, month: 'August', amount: 260 },
  { year: 2024, month: 'January', amount: 210 },
  { year: 2024, month: 'February', amount: 200 },
  { year: 2024, month: 'March', amount: 230 },
  { year: 2024, month: 'April', amount: 210 },
  { year: 2024, month: 'May', amount: 240 },
  { year: 2024, month: 'June', amount: 260 },
  { year: 2024, month: 'July', amount: 270 },
  { year: 2024, month: 'August', amount: 280 },
];

export default function Dashboard() {
  return (
    <div>
      <h1>Monthly Food Expenses</h1>
      <div style={{width:"600px", height:"400px"}}>
        <LineChart data={data} />
      </div>
    </div>
  );
}
