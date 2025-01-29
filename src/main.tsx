import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { myStore } from './store/store.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={myStore}>
    <App/>
  </Provider>
 
)
