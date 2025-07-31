import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import Cards from "../Components/Cards";
import Vehicles from "../Components/Vehicles";
import WriteUp from "../Components/WriteUp";
import Footer from "../Components/Footer";
import TopDeal from "../Components/TopDeal";
import CarNews from "../Components/CarNews";


function Home() {
  
  return (
    <div>
    <Nav/>
    <Hero/>
    <Cards/>
    <Vehicles/>
    <WriteUp/>
    <TopDeal/>
    <CarNews/>
    <Footer/>
  </div>
  )
}

export default Home;