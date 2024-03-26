import '../../css/Loading.css';
function Loading({ loaderText }) {
  return (
    <div className="loader-container">
      <div className="loader">{loaderText}</div>;
    </div>
  );
}

export default Loading;
