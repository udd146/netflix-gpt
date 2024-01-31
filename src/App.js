import Body from "./Components/Body";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice"; 
import moviesSlice from "./Slices/moviesSlice"; 
 

function App() {
  const store =  configureStore({
    reducer:{
       Login:UserSlice,
       movies:moviesSlice
    }
  })
  return (
  <Provider store={store}>
   <div className="App">
     <Body/>
    </div>
    </Provider>
    
  );
}

export default App;
