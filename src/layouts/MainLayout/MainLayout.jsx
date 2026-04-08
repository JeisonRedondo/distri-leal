import "./MainLayout.css"

import { products } from "../../data/products.js";
import ProductView from "../ProductView/ProductView";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation.jsx";
import CategoriesSection from "../CategoriesSection/CategoriesSection.jsx";
import { useMemo, useState } from "react";
function MainLayout({ searchedValue }) {

  const [selectCategory, setSelectCategory] = useState("")

  const productsToBeDisplayed = useMemo(() => {
    let productsFiltered = products;
    if (searchedValue) {
      productsFiltered = productsFiltered.filter(item => item.nombre.toLowerCase().includes(searchedValue.toLowerCase()))
    }
    if (selectCategory) {
      productsFiltered = productsFiltered.filter(item => item.categoria === selectCategory)
    }
    return productsFiltered.reduce((categories, item) => {

      if (!(item.categoria in categories)) {
        categories[item.categoria] = []
      }
      categories[item.categoria].push(item)
      return categories

    }, {});


  }, [searchedValue, selectCategory])



  return (
    <main className="main-section">
      {
        <>
          <CategoryNavigation setSelectCategory={setSelectCategory} />
          <CategoriesSection >
            {
              Object.keys(productsToBeDisplayed).map(categoria => {
                const productos = productsToBeDisplayed[categoria];
                const upperCategories = categoria?.charAt(0).toUpperCase() + categoria.slice(1)

                return (
                  <section key={categoria}>
                    <h2 className="title-category"> {upperCategories}</h2>
                    <p className="title-accent"></p>
                    <div key={categoria} className="flex-row-wrap Categories_Section" >
                      {
                        productos.map(item => (
                          <ProductView item={item} key={item.id} />
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
