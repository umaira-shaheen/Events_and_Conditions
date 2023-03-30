import { useState } from "react";
import "./index.css";
const Eventhandlers=()=>{
  const purple="yellow";
  const [bg,setBg]=useState(purple);
  const[name,setName]=useState('Hello Umaira')
  const  bgChange=()=>
  {
     let newBg="#34495e";
     setBg(newBg);
     setName("Oouchh!!")
   
  }
  const bgBack=()=>
  {
    setBg(purple);
    setName("Ayyyo!!1");
  }
  return(
   <>
   
   <div style={{backgroundColor:bg}}>
     <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
  </div>
   </>
    
   
  )
 
}
//    function handleClick()
//     {
//         alert("This is me !");
//     }
   

   
// function AlertButton({ message, children }) {
//     return (
//       <button onClick={() => alert(message)}>
//         {children}
//       </button>
//     );
//   }
// export function Toggle()
// {
    
//     return(
//     <div>
//         <AlertButton message="playing">Play Movie!</AlertButton>
//         <AlertButton message="uploading">Upload Image</AlertButton>
//     </div>
  
//     )
    
// }


// export function Toolbar()
// {
//   return(
//     <>
//     <Button onSmash={()=>alert("Playing movie")}>Play Movie</Button>
//      <Button onSmash={()=>alert('Uploading image')}>Upload Image</Button>
//     </>
//   )
  
// }
// export  function Toolbar2() {
//   return (
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <button onClick={() => alert('Playing!')}>
//         Play Movie
//       </button>
//       <button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </button>
//     </div>
//   );

// }


export default Eventhandlers;
