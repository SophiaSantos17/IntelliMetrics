import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { PlusCircle } from "lucide-react"
 
export default function ModalInstrumento() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4"/> Adicionar Instrumento
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-bold mb-3">Adicionar Instrumento</AlertDialogTitle>
          <AlertDialogDescription>
          <div className="grid grid-cols-2 gap-3">
            <div className="gap-2">
              <Label>Código de Identificação</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Resolução</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Nome</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Tipo de Instrumento</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Nº de Série</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Fabricante</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Faixa nominal</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Unidade de Medida</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Interessado/Cliente</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Contratante</Label>
              <Input placeholder="Digite aqui " />
            </div>
          </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Adicionar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}