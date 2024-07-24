import { useEffect, useState } from "react"
import styles from "./App.module.css"

export default function App() {
  const [n, setN] = useState(1)
  // this state isn't directly used its simply used to rerun the App component

  console.log(`window width is ${window.innerWidth}`)

  useEffect(() => {

    function update() {
      setN((prev) => prev+1)
    }

    window.addEventListener("resize", update)

    return () => {
      window.removeEventListener("resize",update)
    }

  }, [])

  return (
    <>
      <div className={styles.flexContainer} >
        <p>The windown width (window.innerWidth) is {window.innerWidth}</p>
        <div className={styles.container} >
          I am blue if width is smaller than 400px
        </div>
        <div className={styles.container} >
          I am blue if width is smaller than 400px
        </div>
      </div>
    </>
  )
}