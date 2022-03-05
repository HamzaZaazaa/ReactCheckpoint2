import './Style.css'
import img1 from './imageinsrc.png'
function App() {
  return (
  <div>
    <div className="parentdiv">
        <h1 className="titlered">REACT CHECKPOINT</h1>
        <br/>
        <img src={img1} alt='Go My Code' />
        <br/>
        <img src="./imageinpublic.png" alt='Go My Code' />
    </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Ke90Tje7VS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      
  </div>
  );
}

export default App;
