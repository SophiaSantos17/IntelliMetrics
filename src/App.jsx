import Menu from "./components/layout/menu";
import ModalCliente from "./components/modals/cliente";
import ModalMembro from "./components/modals/membro";
import ModalPeca from "./components/modals/peca";
import ModalInstrumento from "./components/modals/instrumento";
import ModalOrdemRelatorio from "./components/modals/ordem-relatorio"
import ModalOrdemCertificado from "./components/modals/ordem-certificado";

export function App() {
  return (
    <div>
      <Menu />
      <div className="p-4 sm:ml-64 h-screen bg-backgroundcinza">
        <div className="p-5 mt-20">
          <h1 className="text-4xl text-azul font-bold">Visão Geral</h1>
            <div className="flex gap-2">
            <ModalPeca />
              <ModalMembro />
              <ModalCliente />
              <ModalInstrumento />
              <ModalOrdemRelatorio />
              <ModalOrdemCertificado />
            </div>
        </div>
      </div>
    </div>
  )
}