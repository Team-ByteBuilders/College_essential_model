import { useState,useEffect } from 'react';
import { supabase } from "../src/superbaseClient";
import './App.css';

function App() {
  const[data1,setData1]= useState([]);
  const getDetails = async () => {
    try {
      console.log("hello");
      const { data, error, status } = await supabase
        .from("student-data")
        .select("roll");
      if (error) {
        throw error;
      }

      if (data) {
        setData1(data);
        console.log(data1);
      }
    } catch (error) {
      alert(error.message);
    }
  };
useEffect(() => {
  getDetails();
}, []);
  return (
    <div className="App">
      <h1>roll no of the students are:

      </h1>
    </div>
  );
}

export default App;
