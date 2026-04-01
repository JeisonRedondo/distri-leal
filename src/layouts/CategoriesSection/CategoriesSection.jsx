import "./CategoriesSection.css"
import { products } from "../../data/products.js";
function CategoriesSection({ searchedValue }) {

  const productsToShow = searchedValue ? products.filter(item => item.nombre.toLowerCase().includes(searchedValue.toLowerCase())) : products;

  const productsByCategories = productsToShow.reduce((categories, item) => {

    if (!(item.categoria in categories)) {
      categories[item.categoria] = []
    }
    categories[item.categoria].push(item)
    return categories

  }, {});


  return (

    <>
      {
        Object.keys(productsByCategories).map(categoria => {
          const productos = productsByCategories[categoria];
          const upperCategories = categoria?.charAt(0).toUpperCase() + categoria.slice(1)

          return (
            <section key={categoria}>
              <h2 className="title-category"> {upperCategories}</h2>
              <p className="title-accent"></p>
              <div key={categoria} className="flex-row-wrap Categories_Section" >
                {
                  productos.map(item => (
                    <div key={item.id} className="category-card">
                      <article>
                        <img src={item.imagen} alt={item.nombre} />
                        <p className="category-product_name">{item.nombre}</p>
                        <p className="category-description">{item.descripcion}</p>
                      </article>
                    </div>
                  ))
                }
              </div>
            </section>
          )

        })

      }
    </>
  )
}

export default CategoriesSection;
