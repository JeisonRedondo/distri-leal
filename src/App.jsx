import FeaturedProducts from "./layouts/FeaturedProducts/FeaturedProducts"
import Header from "./layouts/Header/Header"
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <FeaturedProducts />
        <h2>Categories</h2>
        <section>
          <h2>Categorie n#</h2>
          <div>
            <article>
              <p>image</p>
              <h3>eslogan</h3>
            </article>
            <article>
              <p>image</p>
              <h3>eslogan</h3>
            </article>
            <article>
              <p>image</p>
              <h3>eslogan</h3>
            </article>
            <article>
              <p>image</p>
              <h3>eslogan</h3>
            </article>
          </div>
          <h2>Categorie n#</h2>
          <div>
            <article>
              <p>image</p>
              <h3>eslogan</h3>
            </article>
            <article>
              <p>image</p>
              <h3>eslogan</h3>
            </article>
            <article>
              <p>image</p>
              <h3>eslogan</h3>
            </article>
            <article>
              <p>image</p>
              <h3>eslogan</h3>
            </article>
          </div>
        </section>
      </main>
      <footer>
        This is the footer
      </footer>
    </>
  )
}

export default App
