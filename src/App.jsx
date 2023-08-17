import React, { useState, useEffect } from 'react';
import './App.css';

const url = 'https://opentdb.com/api.php?amount=30&category=15';

function App() {
  const [countries, setCountries] = useState([]);

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
            <th>Conteudo Prova</th>
            
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
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

function Home() {
  return (
     <>
        <Header />
        <Container>
<section className={styles.home}>
    <div className={styles.apresentacao}>
        <p>
            <br />
            <span>Gabriel Azeredo</span> <br />
            Perdido na Prova
        </p>
       
    </div>
    
</section>
</Container>
        <Footer />
      </> 
  )
}


