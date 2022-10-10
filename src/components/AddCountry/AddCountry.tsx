import { useState } from "react"
import { v4 } from 'uuid'

const AddCountry = ({ add }) => {
  const id = v4();
  const [newCountry, setNewCountry] = useState({ id })

  const addCountry = () => {
    add(newCountry)
    setNewCountry({
      id: v4()
    })
  }

  const updateForm = (e: any) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    if (name === "countryName") {
      setNewCountry((oldState) => ({ ...oldState, name: value }))
    }
    if (name === "countryCapital") {
      setNewCountry((oldState) => ({ ...oldState, capital: value }))
    }
    if (name === "countryPopulation") {
      setNewCountry((oldState) => ({ ...oldState, population: value }))
    }
    if (name === "countryMembership") {
      setNewCountry((oldState) => ({ ...oldState, isEUMember: e.target.checked ? true : false }))
    }
  }

  return (
    <div className="addCountryContainer">
      <input
        type="text"
        name="countryName"
        id="countryName"
        placeholder='Country name'
        onChange={updateForm}
      />
      <input
        type="text"
        name="countryCapital"
        id="countryCapital"
        placeholder='Country capital'
        onChange={updateForm} />
      <label htmlFor="countryPopulation">Population</label>
      <input
        type="number"
        name="countryPopulation"
        id="countryPopulation"
        onChange={updateForm} />
      <br />
      <label htmlFor="countryMembership">Is EU member?</label>
      <input
        type="checkbox"
        name="countryMembership"
        id="countryMembership"
        onChange={updateForm} />
      <button className='bg-slate-500 p-4' onClick={addCountry}>Submit</button>
    </div>
  )
}

export default AddCountry
