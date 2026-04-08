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
        <li className="category-navigation__item" key="All"  >
          <button className="category-navigation__link" onClick={() => setSelectCategory("")}>
            All
          </button>
        </li>
        {
          categories.map((cat) => (

            <li className="category-navigation__item" key={cat}  >
              <button className="category-navigation__link" onClick={() => setSelectCategory(cat)}>
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
