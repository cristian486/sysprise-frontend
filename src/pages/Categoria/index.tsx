import { useEffect } from 'react';
import useListaDeCategorias from '../../state/hooks/useListaDeCategorias';
import { categoriaPadrao, headersCategoria } from './DefaultValues';
import { ICategoria } from '../../types/Categoria';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import useFormularioDinamicoState from '../../state/hooks/useFormularioDinamico';

export default function Categoria() {
    const listaDeCategorias = useListaDeCategorias();
    const formSate = useFormularioDinamicoState();

    function obterValor(item: ICategoria, key: string) {
        const result = String(item[key as keyof ICategoria]);
        return result;
    }

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Categorias'}
                headers={headersCategoria}
                listaDeValores={listaDeCategorias}
                obterValor={obterValor} />

            {formSate.mostrar &&
                <FormularioDinamico
                    fields={categoriaPadrao.fields}
                    onSubmit={categoriaPadrao.onSubmit}
                    title={categoriaPadrao.title}
                    customFields={categoriaPadrao.customFields}
                    initialValues={categoriaPadrao.initialValues} />
            }
        </>
    );
}