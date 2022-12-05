import React from 'react'
import Forecast from './components/Forecast'
import Search from './components/Search'
import useForecast from './hooks/useForecast'

const App = (): JSX.Element => {
  console.log(process.env.REACT_APP_API_KEY)
  const {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  } = useForecast()
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {forecast ? (
        <Forecast forecast={forecast} />
      ) : (
        <Search
          onSubmit={onSubmit}
          onInputChange={onInputChange}
          options={options}
          term={term}
          onOptionSelect={onOptionSelect}
        />
      )}
    </main>
  )
}

export default App
