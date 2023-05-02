import { IEstado } from './Estado';

export interface ICidade {
    id: number,
    nome: string,
    codigoIbge: string,
    estado: IEstado
}