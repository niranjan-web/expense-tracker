
import Expenses from "./components/Expenses";

function App() {
  const object = [
    {
      date: new Date(2023, 6, 22),
      title: "car insurance",
      price: 284.5,
    },
    {
      date: new Date(2022, 3, 7),
      title: "bike insurance",
      price: 432.87,
    },
    {
      date: new Date(2021, 5, 3),
      title: "lorry insurance",
      price: 675.33,
    },
    {
      date: new Date(2020, 10, 13),
      title: "jet insurance",
      price: 10393.24,
    },
  ];
  return (
    <div>
      <Expenses object={object}/>
    </div>
  );
}

export default App;
