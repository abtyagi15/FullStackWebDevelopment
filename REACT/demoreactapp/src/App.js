import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {

  const response = [
    {
      itemName:"Nirma",
      itemDay:"20",
      itemMonth:"June",
      itemYear:"1998",

    },
    {
      itemName:"SurfExcel",
      itemDay:"22",
      itemMonth:"July",
      itemYear:"2002",

    },
    {
      itemName:"AishaniSurf",
      itemDay:"20",
      itemMonth:"July",
      itemYear:"2002",

    }

    
  ]

  return (
    <div>
    <Item name={response[0].itemName}>Hello World</Item>
    <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
    <Item name={response[1].itemName}></Item>
    <ItemDate day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
    <Item name={response[2].itemName}></Item>
    <ItemDate day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      <div className="App">My name is Abhishek Tyagi</div>
    </div>
  );
}

export default App;
