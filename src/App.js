import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import data from "./data";
function App() {
  const cards = data.map((item) => <Card key={item.id} {...item} />);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-wrapper">{cards}</div>
    </div>
  );
}

export default App;
