import { useEffect, useState } from 'react'
import './App.css'
import Country from './components/Country/Country'

export interface ICountry {
  name: any,
  capital: string,
  population: number,
  isEUMember: boolean
}

function App() {
  const list: ICountry[] = [
    {
      name: "Romania",
      capital: "Bucharest",
      population: 18000000,
      isEUMember: true
    },
    {
      name: "Ukraine",
      capital: "Kviv",
      population: 35000000,
      isEUMember: false
    },
    {
      name: "Germany",
      capital: "Berlin",
      population: 80000000,
      isEUMember: true
    },
    {
      name: "Italy",
      capital: "Rome",
      population: 45000000,
      isEUMember: true
    },
    {
      name: "Jordan",
      capital: "Amman",
      population: 100000000,
      isEUMember: false
    }
  ]
  return (
    <div className="App grid grid-cols-4 gap-8">

      {list.map((country, index) =>
        <Country {...country} key={`${country.name}-${index}`} />
      )}

    </div>
  )
}

export default App
