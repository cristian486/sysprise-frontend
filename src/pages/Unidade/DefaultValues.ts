import { CampoFormularioDinamico, PropsFormularioDinamico } from '../../types/FormularioDinamicoProps';
import { IHeader } from '../../types/Headers';

export const headersUnidade: IHeader[] = [{ nomeColuna: 'ID', chave: 'id' }, { nomeColuna: 'Nome', chave: 'nome' }];


export const camposUnidade: CampoFormularioDinamico[] = [
    {
        type: 'number',
        name: 'id',
        label: 'Id',
        size: 'grande',
        options: {
            disabled: true
        }
    },
    {
        type: 'text',
        name: 'nome',
        label: 'Nome',
        size: 'grande'
    },
    {
        type: 'text',
        name: 'abreviacao',
        label: 'Abreviação',
        size: 'grande'
    }
];

// export const unidadePadrao: PropsFormularioDinamico = {
//     fields: camposUnidade,
//     onSubmit: () => console.log('Funcionou'),
//     title: 'Cadastro de Unidade'
// };