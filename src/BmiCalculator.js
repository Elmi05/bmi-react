// BMI.js
import React, { useState } from 'react';
import './App.css'; 

const BmiCalculator = () => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [mass, setMass] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height);
    const massInKg = parseFloat(mass);

    if (!isNaN(heightInMeters) && !isNaN(massInKg) && heightInMeters > 0 && massInKg > 0) {
      const bmiValue = massInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    } else {
      alert('Enter your correct height and mass😃.');
    }
  };

  return (
    <div className="bmi-container">
      <h1>BMI Calculator</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Height (in meters):</label>
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label>Mass (in kilograms):</label>
        <input type="text" value={mass} onChange={(e) => setMass(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && (
        <div>
          <h2>{name}'s BMI: {bmi}</h2>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
