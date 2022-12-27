import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import img1 from "./assets/img/image 12.jpg";
import img2 from "./assets/img/wedding-photography 1.jpg";
import img3 from "./assets/img/mountain-bike 1.jpg";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-wrapper">
        <Card
          img={img1}
          countStart="5.0"
          countFeedback="6"
          title="Life lessons with Katie Zaferes"
          money="136"
          status="SOLD OUT"
        />
        <Card
          img={img2}
          countStart="5.0"
          countFeedback="30"
          title="Learn wedding photography
          "
          money="125"
          status="ONLINE"
        />
        <Card
          img={img3}
          countStart="4.8"
          countFeedback="2"
          title="Group Mountain Biking"
          money="50"
        />
      </div>
    </div>
  );
}

export default App;
