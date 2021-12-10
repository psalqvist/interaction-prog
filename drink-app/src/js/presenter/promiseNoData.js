import '../../loader.css';

function promiseNoData(promise, data, error) {
  const controller = new AbortController();
  const signal = controller.signal;

  setTimeout(() => controller.abort(), 5000);

  return (
    (!promise && ' ') || // case "0"
    (error && <h1>Error</h1>) || // case 3
    (!data && { signal } && (
      <div className="loader">Loading...</div>
    ))
  ); // case 1
}
export default promiseNoData;