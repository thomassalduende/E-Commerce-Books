import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import userContext from './Context/user' 
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { FiltersProvider } from './Context/filters'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CountCart } from './Context/countCart'
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ 
    uri: 'http://localhost:3000/graphql'
  })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <userContext.Provider>
    <ApolloProvider client={client}> 
    <BrowserRouter>
      <FiltersProvider>
        <CountCart>
          <GoogleOAuthProvider clientId='1013528538582-rgdspt2m2vqct6hrtj7e3s3m9r587gnq.apps.googleusercontent.com'>
            <App  />
          </GoogleOAuthProvider>
        </CountCart>
      </FiltersProvider>
      </BrowserRouter>
    </ApolloProvider>
  </userContext.Provider>
)
