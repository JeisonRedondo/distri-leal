import "./MainLayout.css"

import { products } from "../../data/products.js";
import ProductView from "../ProductView/ProductView";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation.jsx";
import CategoriesSection from "../CategoriesSection/CategoriesSection.jsx";
function MainLayout({ searchedValue }) {
  const productsToShow = searchedValue ? products.filter(item => item.nombre.toLowerCase().includes(searchedValue.toLowerCase())) : products;

  const productsByCategories = productsToShow.reduce((categories, item) => {

    if (!(item.categoria in categories)) {
      categories[item.categoria] = []
    }
    categories[item.categoria].push(item)
    return categories

  }, {});


  return (
    <main className="main-section">
      {
        <>
          <CategoryNavigation />
          <CategoriesSection >
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
                          <ProductView item={item} />
                        ))
                      }
                    </div>
                  </section>
                )

              })

            }
          </CategoriesSection >
        </>

      }
    </main>
  )
}


export default MainLayout;
