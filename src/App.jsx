import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     getData();
//   }, []);

//   async function getData() {
//     setLoading(true);
//     setError(false);
//     try {
//       const response = await axios('https://jsonplaceholder.typicode.com/users');
//       setData(response.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   // Filtered Data Based on Search
//   const filteredData = data.filter(
//     (item) =>
//       item.name.toLowerCase().includes(search.toLowerCase()) ||
//       item.username.toLowerCase().includes(search.toLowerCase()) ||
//       item.email.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       <button onClick={getData} disabled={loading}>
//         {loading ? 'Reloading...' : 'Reload Data'}
//       </button>
      
//       <input
//         type="text"
//         placeholder="Search by name or email"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="container_main">
//         {loading && <h1>Loading...</h1>}
//         {error && <h1>Error: {error}</h1>}

//         {filteredData.length > 0 ? (
//           filteredData.map((item) => (
//             <div key={item.id}>
//               <h2>{item.id}</h2>
//               <h1>
//                 <span>Name:</span> {item.name}
//               </h1>
//               <h4>
//                 <span>Username:</span> {item.username}
//               </h4>
//               <p>
//                 <span>Email:</span> {item.email}
//               </p>
//             </div>
//           ))
//         ) : (
//           <h2>No matching results</h2>
//         )}
//       </div>
//     </>
//   );
// };


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

function App() {
  const [counter, setCounter] = useState(0);
  const [parity, setParity] = useState("Even Number"); // ✅ State for Even/Odd

  // ✅ Function to update counter and check Even/Odd
  const updateCounter = (newValue) => {
    setCounter(newValue);
    setParity(newValue % 2 === 0 ? "Even Number" : "Odd Number");
  };

  return (
    <>
      <button onClick={() => updateCounter(0)}>Reset</button>
      <button onClick={() => counter > 0 && updateCounter(counter - 1)}>Decrease Number</button>
      <h1>{counter}</h1>
      <button onClick={() => updateCounter(counter + 1)}>Increase Number</button>

      <h2>{parity}</h2> {/* ✅ Show Even/Odd */}
    </>
  );
}

export default App;



