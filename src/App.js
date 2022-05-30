import './App.css';
import  AddressBookForm  from './component/AddressBookForm';
import HomePage from './component/HomePage';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

function App() {
  return (
//     <div className="App">
//     {/* <AddressBookForm/> 
//     <HomePage/>  */}

//       <BrowserRouter>
//        <Switch>
//          <Route exact path='/address-book' component={AddressBookForm}></Route>
//          <Route path='/' component={HomePage}></Route>
//          <Route path='/home' component={HomePage}></Route>
//        </Switch>
//     </BrowserRouter> 

//     </div>   
//   );
// }

// export default App;


<div className="App">
<BrowserRouter>
<Switch>
  <Route exact path='/form' component={AddressBookForm}></Route>
  <Route path='/'  component={HomePage}></Route>
  <Route path='/home' component={HomePage}></Route>
  <Route exact path="/form/:id" component={AddressBookForm}></Route> 
</Switch>
</BrowserRouter>
</div>
);
}

export default App;