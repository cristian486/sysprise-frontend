import { CampoFormularioDinamico, PropsFormularioDinamico } from '../../types/FormularioDinamicoProps';
import { IHeader } from '../../types/Headers';



export const headersTipo : IHeader[] = [{ nomeColuna: 'ID', chave: 'id' }, { nomeColuna: 'Nome', chave: 'nome' }];


export const camposTipo: CampoFormularioDinamico[] = [
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
    }
];

// export const tipoPadrao: PropsFormularioDinamico = {
//     fields: camposTipo,
//     onSubmit: () => console.log('Funcionou'),
//     title: 'Cadastro de Tipo'
// };