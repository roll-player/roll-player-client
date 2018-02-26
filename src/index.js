import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker'

// Apollo Setup
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { ApolloProvider } from 'react-apollo'

// React Router Setup
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import Highlevel level Components
import { App, Login, Table } from './components'

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

const httpLink = new HttpLink({ uri: 'http://localhost:8080/graphql' })

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})


ReactDOM.render(
<ApolloProvider client={client}>
    <Router>
        <div>
            <Login />
            <Route exact path="/" component={App} />
            <Route path='/table/:id' component={Table} />
        </div>
    </Router>
</ApolloProvider>, 

document.getElementById('root'))
registerServiceWorker()
