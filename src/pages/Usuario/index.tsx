import useListaDeUsuarios from '../../state/hooks/listas/useListaDeUsuarios';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { IUsuario } from '../../types/Usuario';
import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import { converterObjetoParaValoresIniciais } from './base/converterObjeto';
import { usuarioPadrao } from './base/default';
import { headersUsuario } from './base/headers';
import { formularioDinamicoState } from '../../state/atom';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';

export default function Usuario() {

    const listaDeUsuarios = useListaDeUsuarios();
    const asyncDetalhamento = useAsyncDetalhamento<IUsuario>();
    const [formSate, setFormState] = useGenericRecoilAtom<boolean>(formularioDinamicoState);

    function obterValor(item: IUsuario, key: string) {
        const result = String(item[key as keyof IUsuario]);
        return result;
    }

    function clickLinha(id: number) {
        asyncDetalhamento(`http://localhost:8080/usuario/${id}`).then(resp => {
            converterObjetoParaValoresIniciais(resp);
            setFormState(true);
        });
    }

    function limparValoresDefinidos() {
        const valoresLimpos = Object.fromEntries(
            Object.keys(usuarioPadrao.initialValues).map((key) => [key, ''])
        );
        usuarioPadrao.initialValues = valoresLimpos;
    }

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Usuários'}
                headers={headersUsuario}
                listaDeValores={listaDeUsuarios.content}
                obterValor={obterValor}
                clickLinha={clickLinha}
            />

            {
                formSate
                &&
                <FormularioDinamico
                    fields={usuarioPadrao.fields}
                    criar={usuarioPadrao.criar}
                    atualizar={usuarioPadrao.atualizar}
                    deletar={usuarioPadrao.deletar}
                    title={usuarioPadrao.title}
                    customFields={usuarioPadrao.customFields}
                    initialValues={usuarioPadrao.initialValues}
                    limparValores={limparValoresDefinidos}
                />
            }
        </>
    );
}