import "./CategoryNavigation.css";
import { products } from "../../data/products.js";

function CategoryNavigation() {

  const categories = products.reduce((categories, item) => {

    if (!categories.includes(item.categoria)) {
      categories.push(item.categoria)
    }
    return categories;

  }, [])
  console.log("CategoryNavigation - categories :", categories)
  return (
    <>

      <ul className="category-navigation__list flex-row">
        {
          categories.map((cat) => (

            <li className="category-navigation__item">
              <a className="category-navigation__link" href="">
                {
                  cat.charAt(0).toUpperCase() + cat.slice(1)
                }
              </a>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default CategoryNavigation;
