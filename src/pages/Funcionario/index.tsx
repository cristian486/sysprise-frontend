import useListaDeFuncionarios from '../../state/hooks/listas/useListaDeFuncionarios';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { IFuncionario } from '../../types/Funcionario';
import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import { converterObjetoParaValoresIniciais } from './base/converterObjeto';
import { funcionarioPadrao } from './base/default';
import { headersFuncionario } from './base/headers';
import { formularioDinamicoState, listaDeFuncionarioState } from '../../state/atom';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import useAsyncCall from '../../state/hooks/useAsyncCall';
import PaginacaoDinamica from '../../components/Paginacao';

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

    function criar(values: { [key: string]: string }) {
        const obj = { ...values };
        const useCall = useAsyncCall();
        useCall('http://localhost:8080/funcionario', 'post', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    function deletar(values: { [key: string]: string }) {
        const obj = { ...values };
        const useCall = useAsyncCall();
        const id = obj['id'];
        useCall('http://localhost:8080/funcionario/' + id, 'delete', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    function atualizar(values: { [key: string]: string }) {
        const obj = { ...values };
        const useCall = useAsyncCall();
        useCall('http://localhost:8080/funcionario', 'put', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Funcionários'}
                headers={headersFuncionario}
                listaDeValores={listaDeFuncionarios.content}
                obterValor={obterValor}
                clickLinha={clickLinha}
                paginacao={<PaginacaoDinamica url='http://localhost:8080/funcionario' atomo={listaDeFuncionarioState}  first={listaDeFuncionarios.first} last={listaDeFuncionarios.last} />}
            />

            {
                formSate
                &&
                <FormularioDinamico
                    fields={funcionarioPadrao.fields}
                    criar={criar}
                    atualizar={atualizar}
                    deletar={deletar}
                    title={funcionarioPadrao.title}
                    customFields={funcionarioPadrao.customFields}
                    initialValues={funcionarioPadrao.initialValues}
                    limparValores={limparValoresDefinidos}
                />
            }
        </>
    );
}