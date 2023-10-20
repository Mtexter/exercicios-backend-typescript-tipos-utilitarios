import { type } from "os"

type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type Usuario2 = Omit<Usuario, "rg">
type DadosObrigatorios = Required<Usuario2>

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}