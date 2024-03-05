import Header from "./components/layout/menu"
import { Button } from "./components/ui/button"
import { PlusCircle } from "lucide-react"

export function App() {
  return (
    <div>
      <Header />
      <div className="p-4 sm:ml-64 h-screen bg-backgroundcinza">
        <div className="p-5 mt-20">
          <h1 className="text-4xl text-azul font-bold">Visão Geral</h1>
        </div>
      </div>
    </div>
  )
}