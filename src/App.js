import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element: <About/>
      },
    ],
    errorElement: <Error/>
  }
])

export default App;
