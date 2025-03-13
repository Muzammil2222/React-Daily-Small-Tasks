import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from './Components/Button';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading(true);
    setError(false);
    try {
      const response = await axios('https://fakestoreapi.com/products');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button onClick={getData} disabled={loading}>
        {loading ? 'Reloading...' : 'Reload Data'}
      </button>

      <div className="container_main">
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error: {error}</h1>}

        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} style={{margin: '0 auto', textAlign:"center", borderRadius:"20px", border:'none', boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)", width:"20%",
              display:'flex', flexDirection:"column", justifyContent:"space-around", alignItems:"center",
            }}>
              <div style={{margin: '0 auto', border:'none', width:"100%", justifyContent:"center", display:"flex",}}
              >  
              <img src={item.image} alt={item.title}  style={{
                width: '100% !important',
                maxWidth: '100% !important',
                margin: '0 auto !important',
                height:"170px",
                objectFit: 'cover'
              }}/>
              </div>
              <h1>
             {item.title.split(" ").slice(0, 3).join(" ")}
              </h1>
              <p> <span style={{
                fontWeight: 'bold'
              }}>{item.category}</span></p>
              <p>
               ${item.price}
              </p>
            <Button 
        text={'View Details'}
        onClick={() => {
          setSelectedProduct(item); // Jo product click ho usko store karo
          setIsOpen(true); // Modal open karo
        }}
        bgColor={isHovered ? "red" : "black"} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
  </div>
  
          ))
        ) : (
          <h2>No data available</h2>
        )}

        {isOpen && selectedProduct && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <div style={{
              border:'none',
            }}>
          <img src={selectedProduct.image} alt={selectedProduct.title} width="150" />

            </div>
            <div style={{border:'none', width:"100%"}}>

          <h1>{selectedProduct.title}</h1>
          <p style={{fontWeight:'bold'}}>{selectedProduct.category}</p>
          <p>{selectedProduct.description}</p>
          
          <p style={{fontWeight:'bold'}}><span>Price: </span>{selectedProduct.price}</p>
          <p>
            <span style={{fontWeight:'bold'}}>Rating : </span>{selectedProduct.rating.rate}

          </p>
            </div>
          <button style={styles.closeButton} onClick={() => setIsOpen(false)}>x</button>
          </div>
          </div>
        )}
      </div>
    </>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    position: "relative",
    display: "flex",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "800px",
    textAlign: "left",
    alignItems: "center",
  },
  closeButton: {
    color:'white ',
    backgroundColor:'black',
    borderRadius:'50%',
    padding:'10px',
    border: 'none',
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "30px",
    cursor: "pointer",
  }
};



// // ChatGpt Task 1

// function App(){
//   const [count, Setcount] = useState(0);
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={()=> Setcount(count + 1)}>Click me</button>
//     </>
//   )
// }

// // ChatGpt Task 2

// function App(){
//   const [show, setShow] = useState(true);
//   return(
//     <>
//     <button onClick={()=> setShow(!show)}>Show/Hide</button>
//     {show && <h1>Hi</h1>}
//     </>
//   )
// }

// // // ChatGpt Task 3
// function App(){
//   const [bgColor, setBgColor] = useState('white');
//   return(
//     <>
//     <div style={{backgroundColor: bgColor, width: '100vw', height: '100vh', padding: '20px', margin: '0'}}>
//     <button onClick={()=> setBgColor(bgColor === 'white' ? 'black' : 'white')}>Change Background</button>

//     </div>
//     </>
//   )
// }

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [parity, setParity] = useState("Even Number"); // ✅ State for Even/Odd

//   // ✅ Function to update counter and check Even/Odd
//   const updateCounter = (newValue) => {
//     setCounter(newValue);
//     setParity(newValue % 2 === 0 ? "Even Number" : "Odd Number");
//   };

//   return (
//     <>
//       <button onClick={() => updateCounter(0)}>Reset</button>
//       <button onClick={() => counter > 0 && updateCounter(counter - 1)}>Decrease Number</button>
//       <h1>{counter}</h1>
//       <button onClick={() => updateCounter(counter + 1)}>Increase Number</button>

//       <h2>{parity}</h2> {/* ✅ Show Even/Odd */}
//     </>
//   );
// }

// function App() {
//   const [checkevenodd, setCheckevenodd] = useState(0);

//   return(
    
//     <input type="text"  onChange={(e) => setCheckevenodd(e.target.value) % 2 === 0 ? "Even Number" : "Odd Number" } />


//   )
  
  
// }

export default App;



