import './App.css'

function App() {
  const exampleURL =
    'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg'
  const imgUrl = new URL(window.location.href).searchParams.get('src')
  return (
    <div className='container'>
      {imgUrl ? (
        <img src={imgUrl} alt='Passed in URL query'></img>
      ) : (
        <>
          <h1>Usage description:</h1>
          <p>
            Pass in an URL of image you want to display. This bypasses images
            that are automatically downloaded by browser, so you can view them
            in peace.
          </p>
          <h2>Example:</h2>
          <a href={window.location.href.split('?')[0] + '?src=' + exampleURL}>
            <code>
              {window.location.href.split('?')[0] + '?src=' + exampleURL}
            </code>
          </a>
        </>
      )}
    </div>
  )
}

export default App
