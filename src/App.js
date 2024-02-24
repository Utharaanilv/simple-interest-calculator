
import {  Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';


function App() {

  const [principle, setprinciple] = useState("");
  const [rate, setRate] = useState("");
  const [year, setyear] = useState("");
  const [interest, setinterest] = useState(0)

 

  const calculateInterest=(e)=>{
    e.preventDefault()
    console.log(principle, rate, year);

    if(!principle||!rate||!year){
      alert("please enter the form completely")
    }
    else{
      setinterest(principle*rate*year/100)
    }
  }

 const resetout=()=>{
  setprinciple("")
  setRate("")
  setyear("")
  setinterest(0)
 }

 


  return (
    <div className="App">

      <>
        <div className='container'>
          <div className='heading-text'>
            <h3 className='title'>SIMPLE INTEREST CALCULATOR</h3>
            <p className='paragrap'>CALCULATE YOUR SIMPLE INTEREST</p>


          </div>

          <div className='amountcard'>
            <div className='cardtext'>
              <h2 className='totalamt'>₹{interest}</h2>
              <p className='total'> Total simple interest</p>
            </div>

          </div>
          <form onSubmit={calculateInterest} >
            <div className='text-feilds'>
              <div className='input'>
                <TextField value={principle||""} onChange={e => { setprinciple(e.target.value) }}
                  className='outlined-basic' id="outlined-basic" label="Principle Amount" variant="outlined" />
              </div>

              <div className='input'>
                <TextField value={rate||""} onChange={e => { setRate(e.target.value) }}
                  className='outlined-basic' id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" />
              </div>

              <div className='input'>
                <TextField value={year||""} onChange={e => { setyear(e.target.value) }}
                  className='outlined-basic' id="outlined-basic" label="Time period(yr)" variant="outlined" />
              </div>

            </div>

            <div className='btn-group'>

              <Stack direction="row" spacing={2}>
                <Button  className='btn' type="submit"  style={{ backgroundColor: 'black' }} variant="contained">Calculate</Button>
                <Button onClick={resetout} className='btn' variant="outlined">Reset</Button>
              </Stack>

            </div>
          </form>
        </div>


      </>

    </div>
  );
}

export default App;
