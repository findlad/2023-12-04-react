import { useEffect, useState } from 'react';

import './App.css';
import { SuperheroDetail } from './SuperheroDetail';
const superheroes=[
  {"name": "Flash",
"power": "speed",
"homeCity": "Central City",
"alterEgo": "Barry Allen",
"colour": "red"
},
{
"name": "Spider-man",
"power":"Web-slinging",
"homeCity": "New York City",
"alterEgo": "Peter Parker",
"colour": "black"

},
{
  "name": "Superman",
  "Power":"Super Strength",
  "homeCity": "Metropolis",
  "alterEgo":"Clark Kent",
  "colour": "blue"
}
];

function App() {
  console.log(superheroes)
  const [superheroesList, setSuperheroesList] = useState();
  useEffect(() =>{
    console.log('call useEffect function')
    setSuperheroesList(superheroes);
  },[])
  console.log('superheroesList', superheroesList)
  return (
   <div>
    <h1>Superhuman Registration Act </h1>
    <h2>Superhero Registry</h2>

    {superheroesList != undefined ? superheroesList.map((superhero)=> {
    return <SuperheroDetail key={superhero.name} superhero={superhero} />;
    }):<p>Loading</p>}
   </div>
  );
}

export default App
