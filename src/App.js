import ExpenseItem  from "./components/ExpenseItem";

function App() {
  const object = [{
    date:new Date(2023, 6, 22),
    title:'car insurance',
    price:284.5,
  },{
    date:new Date(2022, 3, 7),
    title:'bike insurance',
    price:432.87,
  },
  {
    date:new Date(2021, 5, 3),
    title:'lorry insurance',
    price:675.33,
  },
  {
    date:new Date(2020, 10, 13),
    title:'jet insurance',
    price:10393.24,

  }
]
  return (
    <div>
     <ExpenseItem title ={object[0].title}
     price={object[0].price}
     date={object[0].date}/>
     <ExpenseItem title={object[1].title}
     price={object[1].price}
     date={object[1].date}/>
     <ExpenseItem title ={object[2].title}
     price={object[2].price}
     date={object[2].date}/>
     <ExpenseItem title ={object[3].title}
     price={object[3].price}
     date={object[3].date}/>
    </div>
  );
}

export default App;
