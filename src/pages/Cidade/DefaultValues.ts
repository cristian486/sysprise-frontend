import { CampoFormularioDinamico, PropsFormularioDinamico } from '../../types/FormularioDinamicoProps';
import { IHeader } from '../../types/Headers';

export const headersCidade: IHeader[] = [{ nomeColuna: 'ID', chave: 'id' }, { nomeColuna: 'Nome', chave: 'nome' }];

export const camposCidade: CampoFormularioDinamico[] = [
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
        type: 'number',
        name: 'estado',
        label: 'Estado',
        size: 'medio'
    }
];

export const cidadePadrao: PropsFormularioDinamico = {
    fields: camposCidade,
    initialValues: {
        id: '',
        nome: '',
        codigoIbge: ''
    },
    onSubmit: () => console.log('Funcionou'),
    title: 'Cadastro de Cidade'
};