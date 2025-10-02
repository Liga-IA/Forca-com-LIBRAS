import Metrics from "./metrics";

export default async function AnalyticsDashboard() {
  const response = await fetch("https://api.ipify.org?format=json");

  const data = await response.json();
  console.log(data);
  const response2 = await fetch("http://ip-api.com/json/143.255.96.47");
  const data2 = await response2.json();
  console.log(data2);
  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <p>País: {data2.country}</p>
      <p>Cidade: {data2.city}</p>
      <p>Região: {data2.regionName}</p>
      <p>CEP: {data2.zip}</p>

      <Metrics />
    </div>
  );
}
