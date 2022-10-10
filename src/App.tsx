import { useEffect, useState } from 'react'
import Country from './components/Country/Country'
import AddCountry from './components/AddCountry/AddCountry'

import './App.css'

const list: ICountry[] = [
  {
    id: '2134',
    name: "Romania",
    capital: "Bucharest",
    population: 18000000,
    isEUMember: true
  },
  {
    id: '124124gfas',
    name: "Ukraine",
    capital: "Kviv",
    population: 35000000,
    isEUMember: false
  },
  {
    id: 'dgi9s4',
    name: "Germany",
    capital: "Berlin",
    population: 80000000,
    isEUMember: true
  },
  {
    id: 'agmn3dngd9',
    name: "Italy",
    capital: "Rome",
    population: 45000000,
    isEUMember: true
  },
  {
    id: 'asfn20292804-',
    name: "Jordan",
    capital: "Amman",
    population: 100000000,
    isEUMember: false
  }
]
export interface ICountry {
  id: string,
  name: any,
  capital: string,
  population: number,
  isEUMember: boolean
}

const App = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);

  const remCountry = (value: string) => {
    const updatedCountries = countries.filter(c => c.name !== value)

    setCountries(updatedCountries)
  }

  const add = (tara: ICountry) => {
    setCountries([...countries, tara])
  }

  useEffect(() => {
    setCountries(list);
  }, [])

  return (
    <div className="App ">
      <AddCountry add={add} />
      <div className='grid grid-cols-4 gap-8'>
        {countries.map((country, index) =>
          <Country removeCountry={remCountry} {...country} key={`${country.name}-${index}`} />
        )}
      </div>
    </div>
  )
}

export default App
