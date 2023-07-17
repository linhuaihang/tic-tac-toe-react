export default function Square({ value, clickSquare }) {
    return (
      <button className="square" onClick={clickSquare}>
        {value}
      </button>
    );
  }