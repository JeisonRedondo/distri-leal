import "./CategoriesSection.css"
import { products } from "../../data/products.js";
function CategoriesSection() {

  const productsByCategories = products.reduce((categories, item) => {

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

          return (
            <>
              <h2> {categoria}</h2>
              <div key={categoria} className="flex-row-wrap Categories_Section" >
                {
                  productos.map(item => (
                    <div >
                      <article>
                        <img src={item.imagen} alt={item.nombre} />
                        <p>{item.nombre}</p>
                      </article>
                    </div>
                  ))
                }
              </div>
            </>
          )

        })

      }
    </>
  )
}

export default CategoriesSection;
