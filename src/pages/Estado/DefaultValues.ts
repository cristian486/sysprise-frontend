import { CampoFormularioDinamico, PropsFormularioDinamico } from '../../types/FormularioDinamicoProps';
import { IHeader } from '../../types/Headers';

export const headersEstado: IHeader[] = [{ nomeColuna: 'ID', chave: 'id' }, { nomeColuna: 'Nome', chave: 'nome' },
    {nomeColuna: 'Sigla', chave: 'sigla'}];

export const camposEstado: CampoFormularioDinamico[] = [
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
        name: 'codigoIbge',
        label: 'Código IBGE',
        size: 'medio'
    },
    {
        type: 'text',
        name: 'sgila',
        label: 'Sigla',
        size: 'medio'
    }
];

// export const estadoPadrao: PropsFormularioDinamico = {
//     fields: camposEstado,
//     onSubmit: () => console.log('Funcionou'),
//     title: 'Cadastro de Estado'
// };