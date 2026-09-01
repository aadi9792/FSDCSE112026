import ReactDom from "react-dom/client";
function Book() {
  return (
    <div>
      <img src="" width="100" height="100" alt="Book Cover" />
      <h2>Title: ReactJS</h2>
      <h2>Price: 465</h2>
      <button>Add to Cart</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Book Store</h1>
      <Book />
    </div>
  );
}
const parent = document.getElementById("root");
const root = ReactDom.createRoot(parent);
root.render(<App />);
 
