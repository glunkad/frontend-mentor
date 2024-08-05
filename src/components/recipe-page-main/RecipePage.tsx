import "./style.scss"
import ImageOmelette from "./assets/images/image-omelette.jpeg"
export const RecipePage = () => {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <img src={ImageOmelette} alt="img"/>
                    <h1>Simple Omelette Recipe</h1>
                    <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                        to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                    <div className="block-qoute">
                        <p>Preparation time</p>
                        <ul>
                            <li><strong>Total: </strong>Approximately 10 minutes</li>
                            <li><strong>Preparation: </strong>5 minutes</li>
                            <li><strong>Cooking: </strong>5 minutes</li>
                        </ul>
                    </div>

                    <h3>Ingredients</h3>
                    <ul>
                        <li>2-3 large eggs</li>
                        <li>Salt, to taste</li>
                        <li>Pepper, to taste</li>
                        <li>1 tablespoon of butter oil</li>
                        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                    </ul>
                    <hr/>
                    <h3>Instructions</h3>
                    <ol>
                        <li><strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper
                            until they are well mixed.
                            You can add a tablespoon of water or milk for a fluffier texture.</li>
                        <li><strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</li>
                        <li><strong>Cook the omelette:</strong>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                            the eggs evenly coat the surface.</li>
                        <li><strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the
                            middle, sprinkle your chosen fillings over one half of the omelette.</li>
                        <li><strong>Fold and serve:</strong>As the omelette continues to cook, carefully lift one edge and fold it over the
                            fillings. Let it cook for another minute, then slide it onto a plate.</li>
                        <li><strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</li>
                    </ol>
                    <hr/>
                    <h3>Nutrition</h3>
                    <p>The table below shows nutritional values per serving without the additional fillings.</p>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Calories</td>
                                <td id="content">277kcal</td>
                            </tr>
                            <tr>
                                <td>Carbs</td>
                                <td id="content">0g</td>
                            </tr>
                            <tr>
                                <td>Protein</td>
                                <td id="content">20g</td>
                            </tr>
                            <tr>
                                <td>Fat</td>
                                <td id="content">22g</td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}