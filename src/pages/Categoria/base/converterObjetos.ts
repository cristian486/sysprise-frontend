import { ICategoria } from '../../../types/Categoria';
import { categoriaPadrao } from './default';

export function converterObjetoParaValoresIniciais(objeto: ICategoria) {
    categoriaPadrao.initialValues = {
        id: objeto.id?.toString() || '',
        nome: objeto.nome || '',
        descricao: objeto.descricao || ''
    };
}