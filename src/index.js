import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      
         <App />
      </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  
     </React.StrictMode> 
);
