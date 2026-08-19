import "./App.css";

export default function Square() {

  function Square({valor}) {
    return <button className="square">{valor}</button>
  }

  return (
    <>
      <div>
        <Square valor="1" />
        <Square valor="2" />
        <Square valor="3" />
      </div>

      <div>
        <Square valor="4" />
        <Square valor="5" />
        <Square valor="6" />
      </div>

      <div>
        <Square valor="7" />
        <Square valor="8" />
        <Square valor="9" />
      </div>
    </>
  );
}