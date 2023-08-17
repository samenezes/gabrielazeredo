import React, { useState, useEffect } from 'react';
import './Conteudo-module.css';

const url = 'https://opentdb.com/api.php?amount=30&category=15';

function App() {
  const [category, types] = useState([]);

  useEffect(() => {
    fetchCountryData();
  }, []);

  async function fetchCountryData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  }



  return (
    <div className="AppContainer">

      <table className="CountryTable"> 
        <thead>
          <tr>
            <th>category</th>
            <th>types</th>
          
          </tr>
        </thead>
        <tbody>
          {countries.map((category, index) => (
            <tr key={index}>
            
              <td>{country.category}</td>
              <td>{country.type}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;