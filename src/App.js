import "./App.css";

export default function Square() {
  function Square() {
    return <button className="square">1</button>
  }

  return (
    <>
      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>

      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>
      
      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  );
}