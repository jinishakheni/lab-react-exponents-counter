const Exponent = ({ num, exponent }) => {
  const arr = new Array(exponent).fill(num);
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n{exponent}</p>
      <p className="exponent-result">
        {arr.join(" * ")} ={" "}
        <span className="total">{arr.reduce((acc, ele) => acc * ele, 1)}</span>
      </p>
    </div>
  );
};

export default Exponent;
