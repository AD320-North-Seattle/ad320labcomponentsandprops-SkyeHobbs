import './data'
import RecipeContainer from './components/RecipeContainer'
import './App.css'

//App is the root of our application and where we load in our components.
function App() {
  return (
    <div className="App">
      <RecipeContainer/>
    </div>
  );
}

export default App;