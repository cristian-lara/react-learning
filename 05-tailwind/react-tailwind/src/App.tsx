import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [theme, setTheme] = useState("light");

  useEffect(()=> {
    if(theme === 'dark'){
      document.querySelector('html')?.classList.add('dark');
    }else{
      document.querySelector('html')?.classList.remove('dark');
    }
  }, [theme])

  const handleThemeColor = () => {
    setTheme(theme=> theme === "light" ? "dark" : "light")
  }

  return (
      <div className="h-screen flex justify-center items-center text-5xl bg-slate-500 dark:bg-black"
      >
        <button onClick={handleThemeColor} 
        className='bg-slate-200 text-black px-4 py-2 rounded hover:bg-slate-300  dark:bg-slate-600 dark:text-white dark:hover:bg-slate-900'> Change theme</button>
      </div>
  )
}

export default App
