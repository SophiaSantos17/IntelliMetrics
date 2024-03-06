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
 
export default function ModalCliente() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4"/> Adicionar Cliente
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-80">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-bold mb-3">Adicionar Cliente</AlertDialogTitle>
          <AlertDialogDescription>
          <div className="grid gap-2">
            <Label>Nome da Empresa</Label>
            <Input placeholder="Digite aqui " />
            <Label>CNPJ</Label>
            <Input placeholder="Digite aqui " />
            <Label>Email</Label>
            <Input placeholder="Digite aqui " />
            <Label>Telefone</Label>
            <Input placeholder="Digite aqui " />
            <Label>Endereço</Label>
            <Input placeholder="Digite aqui " />
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