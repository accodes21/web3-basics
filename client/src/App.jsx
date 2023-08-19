import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Transaction from './components/Transaction'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Header/>
        <Home/>
      </div>
      <Services/>
      <Transaction/>
      <Footer/>
    </div>
  )
}

export default App