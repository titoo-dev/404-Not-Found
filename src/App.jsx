import './App.css'
import scarecrow from './assets/Scarecrow.png'


function App() {

  return (
    <main className='flex flex-col h-screen max-w-screen-lg mx-auto'>
      <header className='flex items-center h-20'>
        <h2 className='text-xl uppercase text-gray-800'>404 not found</h2>
      </header>
      <section className='flex flex-1'>
        <div className='flex items-center'>
          <img src={scarecrow} className='w-90 h-80' />
        </div>
        <div className='flex flex-col justify-center items-start flex-1 pl-28'>
          <h1 className='text-gray-800 text-5xl max-w-md font-display font-bold tracking-wider'>I have a bad news for you</h1>
          <p className='text-gray-600 text-lg max-w-xs mt-8 font-display tracking-wider'>The page you are looking for might be removed or is temporarily unavailable</p>
          <a href="#" className='px-8 py-4 bg-gray-800 text-gray-50 uppercase mt-12 text-sm hover:bg-gray-600 font-display tracking-wider'>back to homepage</a>
        </div>
      </section>
      <footer className='flex justify-center items-center h-20'>
        <p className='text-base text-gray-600'>Created by <span>Titoo</span> - devChallenges.io</p>
      </footer>
    </main>
  )
}

export default App
