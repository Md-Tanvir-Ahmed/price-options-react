
import './App.css'
import LineChart from './components/LineChart/LineChart'
// import DaisyNav from './components/Daisynav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import Phones from './Phones/Phones'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      
      
      <PriceOptions></PriceOptions>

      <LineChart></LineChart>
      <Phones></Phones>
      
      
    </>
  )
}

export default App
