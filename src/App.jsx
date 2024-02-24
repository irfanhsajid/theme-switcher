import { Fragment } from "react";

import AllRoutes from "./routes";
import Navbar from "./shared/navbar";

const App = () => {

  return (

      <Fragment>
        <Navbar/>
           <AllRoutes/>
      </Fragment>

  )
}

export default App;