import { FC } from "react"
import { ICountry } from "../../App"

const Country: FC<ICountry> = ({ name, capital, population, isEUMember }) => {
  return (
    <div className="bg-slate-400 p-4 rounded-md">
      <button>X</button>
      <h1 className="text-2xl font-bold">{name}</h1>
      <h3 className="text-l font-semibold mb-4">{capital}</h3>
      <span>Population: {Intl.NumberFormat("ro-RO", {
        style: "decimal"
      }).format(population)}</span>
      {isEUMember ? <p>✅ Is EU member</p> : <p>❌ not EU member</p>}
    </div>
  )
}

export default Country