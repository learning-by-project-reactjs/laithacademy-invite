import React, { useState } from 'react';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList'

export interface IState {
  people: {
    name: string
    age: number
    img: string,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://th.bing.com/th/id/R.9586d922e34e941933ae9e86862b244e?rik=RPmW7rnhbdZslQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f4%2f46%2fKobe_B_Bryant.jpg&ehk=TVVr3TpoxjUbqU1GOAL8KmuOluBdLsp%2b2ETfv5lB25c%3d&risl=&pid=ImgRaw&r=0"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;
