import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import StartFrameWork from "./components/StartFrameWork/StartFrameWork";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";


function App() {

  const routers =createBrowserRouter([
    {path:"",element:<Layout/>,children:[
      {path:'',element: <StartFrameWork/>},
      {path:'about',element: <About/>},
      {path:'portfolio',element: <Portfolio/>},
      {path:'contact',element: <Contact/>}
    ] }
  ])


  return (
    <div>
      <RouterProvider router={routers}> </RouterProvider>
    </div>
  );
}

export default App;
