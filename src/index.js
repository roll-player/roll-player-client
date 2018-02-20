import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker'

// Apollo Setup
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { ApolloProvider } from 'react-apollo'

// React Router Setup
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import Route level Components
import App from './App'
import Table from './Table'

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:8080/graphql' }),
    cache: new InMemoryCache()
})


ReactDOM.render(
<ApolloProvider client={client}>
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path='/table/:id' component={Table} />
        </div>
    </Router>
</ApolloProvider>, 

document.getElementById('root'))
registerServiceWorker()
