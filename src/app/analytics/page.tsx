import Metrics from "./metrics";

export default async function AnalyticsDashboard() {
  const data = await fetch(`http://localhost:3000/api/list`);
  const analytics = await data.json();
  console.log(analytics);
  return (
    <div>
      <Metrics />
    </div>
  );
}
