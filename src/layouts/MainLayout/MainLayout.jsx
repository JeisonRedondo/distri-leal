import "./MainLayout.css"
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation.jsx";
import CategoriesSection from "../CategoriesSection/CategoriesSection.jsx";
function MainLayout({ searchedValue }) {
  return (
    <main className="main-section">
      {
        <>
          <CategoryNavigation />
          <CategoriesSection searchedValue={searchedValue} />
        </>

      }
    </main>
  )
}


export default MainLayout;
