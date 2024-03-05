import Header from "./components/layout/menu"

export function App() {
  return (
    <div>
      <Header />
      <div className="p-4 sm:ml-64 h-screen bg-backgroundDash">
        <div className="p-4">
          <h1 className="text-3xl font-bold">Visão Geral</h1>
        </div>
      </div>
    </div>
  )
}