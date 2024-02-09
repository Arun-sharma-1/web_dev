import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [formdata, setformdata] = useState({ firstname: "", lastname: "", isvisible: false, mode: "Online-mode", favCar:"" })


  console.log(formdata);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setformdata((prevdata) => {
      return {
        ...prevdata,
        [name]: type === 'checkbox' ? checked : value

      }
    })

  }


  return (
    <div className='App'>
      <div>
        <label htmlFor='firstname'>FirstName: </label>
        <input type="text" placeholder='Enter First Name' name='firstname' onChange={changeHandler} value={formdata.firstname} />
      </div>

      <div>
        <label htmlFor='lastname'>LastName: </label>
        <input type="text" placeholder='Enter Last Name' name='lastname' onChange={changeHandler} value={formdata.lastname} />
      </div>

      <div>
        <label htmlFor='isvisible'>Are you visible ? </label>
        <input type='checkbox' onChange={changeHandler} name='isvisible' checked={formdata.isvisible} />
      </div>

      <div>

        <input
          type="radio"
          name='mode'
          value='Offline-mode'
          id='Offline-mode'
          checked={formdata.mode === 'Offline-mode'}
          onChange={changeHandler}

        />
        <label htmlFor='Offline-mode'>Offline-mode</label>
        <input
          type="radio"
          name='mode'
          value='Online-mode'
          id='Online-mode'
          checked={formdata.mode === 'Online-mode'}
          onChange={changeHandler}

        />
        <label htmlFor='Online-mode'>Online-mode</label>
      </div>

      <div>
        <label htmlFor='favCar'>Tell me about your fav car </label>
        <select name='favCar' id='favCar' onChange={changeHandler}>
          <option value="scarpio">scarpio</option>
          <option value="fortuner">fortuner</option>
          <option value="bmw">bmw</option>
        </select>
      </div>

    </div>
  );
}

export default App;
