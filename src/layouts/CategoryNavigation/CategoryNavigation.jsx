import "./CategoryNavigation.css"

function CategoryNavigation() {
  return (
    <>
      <ul className="category-navigation__list flex-row">
        <li className="category-navigation__item"><a className="category-navigation__link" href="">Tradicional</a></li>
        <li className="category-navigation__item"><a className="category-navigation__link" href="">Snacks</a></li>
        <li className="category-navigation__item"><a className="category-navigation__link" href="">Dulces</a></li>
        <li className="category-navigation__item"><a className="category-navigation__link">Bebidas</a></li>
      </ul>
    </>
  )
}

export default CategoryNavigation;
