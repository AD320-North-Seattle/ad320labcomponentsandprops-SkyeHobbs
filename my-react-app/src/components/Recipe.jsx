function Recipe(props) {

  return (
    <div className="Recipe">
      <h2>{props.recipe.name}</h2>
      <h3>Ingredients</h3>
      <p>{props.recipe.ingredients.map(
                    function namesIterator(ingredient, i) {
                        return (
                            <span key={i}>
                              {ingredient}
                              <br />
                            </span>
                        )
                    }

                )}</p>
      <h3>Instructions</h3>
      <p>{props.recipe.instructions.map(
                    function namesIterator(instruction, i) {
                        return (
                            <span key={i}>
                              {instruction}
                              <br />
                            </span>
                        )
                    }

                )}</p>
      
    </div>
  );
}

export default Recipe;