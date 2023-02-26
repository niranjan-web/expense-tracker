import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.object[0].title}
        price={props.object[0].price}
        date={props.object[0].date}
      />

      <ExpenseItem
        title={props.object[1].title}
        price={props.object[1].price}
        date={props.object[1].date}
      />

      <ExpenseItem
        title={props.object[2].title}
        price={props.object[2].price}
        date={props.object[2].date}
      />

      <ExpenseItem
        title={props.object[3].title}
        price={props.object[3].price}
        date={props.object[3].date}
      />
    </div>
  );
}

export default Expenses;
