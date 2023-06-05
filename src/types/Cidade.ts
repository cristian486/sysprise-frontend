import { IEstado } from './Estado';

export interface ICidade {
    id: string,
    nome: string,
    codigoIbge: string,
    estado: IEstado
}