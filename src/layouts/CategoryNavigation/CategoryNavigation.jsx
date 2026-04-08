import "./CategoryNavigation.css";
import { products } from "../../data/products.js";

function CategoryNavigation({ setSelectCategory }) {

  const categories = products.reduce((categories, item) => {


    if (!categories.includes(item.categoria)) {
      categories.push(item.categoria)
    }
    return categories;

  }, [])
  return (
    <>

      <ul className="category-navigation__list flex-row">
        {
          categories.map((cat) => (

            <li className="category-navigation__item" key={cat} onClick={() => setSelectCategory(cat)} >
              <button className="category-navigation__link" >
                {
                  cat.charAt(0).toUpperCase() + cat.slice(1)
                }
              </button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default CategoryNavigation;
