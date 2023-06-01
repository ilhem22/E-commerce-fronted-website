

import ProductScreen from './screens/ProductScreen'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'
import Login from './screens/Login'
import Sub from './screens/Sub'



  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomeScreen />,
      component:{WelcomeScreen}
      

    },
    {
      path: "/login",
      element: <Login />,
      component:{Login}
      

    },
    {
      path: "/subscribe",
      element: <Sub />,
      component:{Sub}
      

    },
      {
        path: "/home",
        element: <HomeScreen />,
        component:{HomeScreen}
        
  
      },
    {
      path: "/product/:id",
      element: <ProductScreen  />,
      component:{ProductScreen}
      
        }           
   
  ]);
  


function App() {
  
  return <RouterProvider router={router} />
}

export default App;

