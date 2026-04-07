function ProductView({ item }) {
  return (
    <>
      <div key={item.id} className="category-card">
        <article>
          <img src={item.imagen} alt={item.nombre} />
          <p className="category-product_name">{item.nombre}</p>
          <p className="category-description">{item.descripcion}</p>
        </article>
      </div>
    </>
  )
}

export default ProductView;
