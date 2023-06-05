import useListaDeFuncionarios from '../../state/hooks/listas/useListaDeFuncionarios';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { IFuncionario } from '../../types/Funcionario';
import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import { converterObjetoParaValoresIniciais } from './base/converterObjeto';
import { funcionarioPadrao } from './base/default';
import { headersFuncionario } from './base/headers';
import { formularioDinamicoState } from '../../state/atom';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';

export default function Funcionario() {
    const listaDeFuncionarios = useListaDeFuncionarios();
    const [formSate, setFormState] = useGenericRecoilAtom<boolean>(formularioDinamicoState);
    const asyncDetalhamento = useAsyncDetalhamento<IFuncionario>();

    function obterValor(item: IFuncionario, key: string) {
        const result = String(item[key as keyof IFuncionario]);
        return result;
    }

    function clickLinha(id: number) {
        asyncDetalhamento(`http://localhost:8080/funcionario/${id}`).then(resp => {
            converterObjetoParaValoresIniciais(resp);
            setFormState(true);
        });
    }

    function limparValoresDefinidos() {
        const valoresLimpos = Object.fromEntries(
            Object.keys(funcionarioPadrao.initialValues).map((key) => [key, ''])
        );
        funcionarioPadrao.initialValues = valoresLimpos;
    }

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Funcionários'}
                headers={headersFuncionario}
                listaDeValores={listaDeFuncionarios}
                obterValor={obterValor}
                clickLinha={clickLinha}
            />

            {
                formSate
                &&
                <FormularioDinamico
                    fields={funcionarioPadrao.fields}
                    criar={funcionarioPadrao.criar}
                    atualizar={funcionarioPadrao.atualizar}
                    deletar={funcionarioPadrao.deletar}
                    title={funcionarioPadrao.title}
                    customFields={funcionarioPadrao.customFields}
                    initialValues={funcionarioPadrao.initialValues}
                    limparValores={limparValoresDefinidos}
                />
            }
        </>
    );
}