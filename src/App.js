import React from "react"
import GLobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import Home from './pages/Home/Home'
import Price from './pages/Price/Price'
import Services from './pages/Services/Services'
import BookTrip from './pages/BookTrip/BookTrip'
import Submit from './pages/Submit/Submit'

const App = () => {
  return (
    <Router>
      <GLobalStyle />
      <Navbar /> 
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/services' exact component={Services}></Route>
        <Route path='/pricing' exact component={Price}></Route>
        <Route path='/book-a-trip' exact component={BookTrip}></Route>
        <Route path='/form-submit' exact component={Submit}></Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
