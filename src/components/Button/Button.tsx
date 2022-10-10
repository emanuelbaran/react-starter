import { useState } from "react"
import './Button.css'

const Button = ({
  isPrimary,
  color,
  children
}) => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    const newCounter = counter + 1
    setCounter(newCounter)
  }

  return (
    <button
      className={`${isPrimary ?? 'primary'} Button`}
      onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
