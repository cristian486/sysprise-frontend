export interface IDadosUsuarioAutenticado {
    token: string,
    nome: string
}

export interface IUsuario {
    id?: string,
    login: string,
    senha: string
}