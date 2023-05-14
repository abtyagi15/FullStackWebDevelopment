import Card from "./Card";
const Tours = ({ tours, removeTour }) => {

  return (
    <div className="container">
      <div>
        <h2 className="title">Plan With AbTyagi</h2>
      </div>
      <div className="cards">
      {tours.map((tours) => {
        return <Card key={tours.id}{...tours} removeTour={removeTour}></Card>;
      })}
    </div>
    </div>
  );
}
export default Tours;
