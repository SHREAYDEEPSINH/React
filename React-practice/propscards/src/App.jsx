import Cardsprops from "./Components/Cardsprops"
// import horse from "./assets/horse.jpeg"
// import lion from "./assets/lion.jpeg"
// import tiger from "./assets/tiger.jpeg"
// import elephants from "./assets/elephants.jpeg"


function App() {


  return (
    <div style={{height : "100vh"}} className="d-flex flex-wrap gap-4 justify-content-center align-items-center bg-black" >
      <Cardsprops img1="horse" title="Horse"  pera="Horses are obligate nasal breathers. This means that they are unable to breathe through their mouth as humans can. Horses can only breathe through their nose. "/>
      <Cardsprops img1="lion" title="Lion" pera="The lion (Panthera leo) is a large cat of the genus Panthera, native to Africa and India."/>
      <Cardsprops img1="tiger" title="Tiger" pera="A tiger’s roar can be heard as far as three kilometres away. At full speed, tigers can reach up to 65km/h."/>
      <Cardsprops img1="elephants" title="Elephants" pera=" Elephants are the world’s largest land animal! Male African elephants can reach 3m tall and weigh between 4,000 - 7,500kg. Asian elephants are slightly smaller, reaching 2.7m tall and weighing 3,000 – 6,000kg."/>  
    </div>
  )
}

export default App
