import Button from "./components/Button"
import Banner from "./assets/banner.png"
import Banner2 from "./assets/banner2.png"
import Image from "./components/Image"
import Heading from "./components/Heading"


function App() {
  

  return (
    <>
     <h1>mern2204</h1>
     <Button design = "bg-green-500 p-2 rounded-md hover:bg-red-500 hover:text-blue-500" text ="Shop Now"/>
     <Button design = "bg-red-500" text ="Login"/>
     <Button design = "bg-yellow-500" text ="Registration"/>
     <Button design = "bg-pink-500" text ="Learn more"/>
     <Image src={Banner} alt="" />
     <Image src={Banner2} />   
     <Heading  text="mern 2204" as="h1" type="banner"/>
   <Heading  text="mern stack" as="h2"/>  
    </>
  )
}

export default App
