import './App.css'

function App() {
  const imgUrl = new URL(window.location.href).searchParams.get('src')
  return (
    <div className='container'>
      {<img src={imgUrl} alt='Passed in URL query (src parameter)'></img>}
    </div>
  )
}

export default App
