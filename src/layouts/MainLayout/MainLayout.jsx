import "./MainLayout.css"
function MainLayout({ children }) {
  return (
    <main className="main-section">
      {children}
    </main>
  )
}

export default MainLayout;
