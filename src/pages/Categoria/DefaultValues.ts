import { CampoFormularioDinamico, PropsFormularioDinamico } from '../../types/FormularioDinamicoProps';
import { IHeader } from '../../types/Headers';

export const headersCategoria: IHeader[] = [{ nomeColuna: 'ID', chave: 'id' }, { nomeColuna: 'Nome', chave: 'nome' }];

export const camposCategoria: CampoFormularioDinamico[] = [
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
        name: 'descricao',
        label: 'Descrição',
        size: 'grande'
    }
];

export const categoriaPadrao: PropsFormularioDinamico = {
    fields: camposCategoria,
    initialValues: {
        id: '',
        nome: '',
        descricao: ''
    },
    onSubmit: () => console.log('Funcionou'),
    title: 'Cadastro de Categoria'
};