import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext"

import Chats from "./Chats"
import Login from "./Login"

const App = () => {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" component={Login} />
            <Route path="/chats" component={Chats} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App