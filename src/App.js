import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import {createBrowserRouter , RouterProvider} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
])

export default App;
