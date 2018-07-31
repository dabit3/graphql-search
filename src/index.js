import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AWSAppSyncClient from 'aws-appsync'
import AppSyncConfig from './AppSync'
import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'

const client = new AWSAppSyncClient({
  url: AppSyncConfig.graphqlEndpoint,
  region: AppSyncConfig.region,
  auth: {
    type: AppSyncConfig.authenticationType,
    apiKey: AppSyncConfig.apiKey,
  }
})

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
)


ReactDOM.render(<WithProvider />, document.getElementById('root'));
registerServiceWorker();
