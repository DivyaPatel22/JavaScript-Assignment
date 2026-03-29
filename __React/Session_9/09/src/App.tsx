import { Provider } from "react-redux"
// import Counter from "./Component/02_Counter/Counter"
// import ToDo from "./Component/03_To-Do/ToDo"
import { store } from "./Component/01_React-Redux/store"
import Products from "./Component/Products/Products"
import Cart from "./Component/Cart/Cart"



function App() {

  return (
    <>
      <Provider store={store}>
        {/* <Counter />
        <hr />
        <ToDo /> */}
        <div style={{display:"flex",flexDirection:'row'}}>
          <Products />
          <Cart />
        </div>
      </Provider>
    </>
  )
}

export default App
