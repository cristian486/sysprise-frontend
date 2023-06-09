import useListaDeTipos from '../../state/hooks/listas/useListaDeTipos';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { ITipo } from '../../types/Pessoa';
import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import useAsyncCall from '../../state/hooks/useAsyncCall';
import { converterObjetoParaValoresIniciais } from './base/converterObjeto';
import { tipoPadrao } from './base/default';
import { headersTipo } from './base/headers';
import { formularioDinamicoState, listaDeTipoState } from '../../state/atom';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import PaginacaoDinamica from '../../components/Paginacao';

export default function Tipo() {
    const listaDeTipos = useListaDeTipos();
    const asyncDetalhamento = useAsyncDetalhamento<ITipo>();
    const [formSate, setFormState] = useGenericRecoilAtom<boolean>(formularioDinamicoState);

    function obterValor(item: ITipo, key: string) {
        const result = String(item[key as keyof ITipo]);
        return result;
    }

    function clickLinha(id: number) {
        asyncDetalhamento(`http://localhost:8085/tipo/${id}`).then(resp => {
            converterObjetoParaValoresIniciais(resp);
            setFormState(true);
        });
    }

    function limparValoresDefinidos() {
        const valoresLimpos = Object.fromEntries(
            Object.keys(tipoPadrao.initialValues).map((key) => [key, ''])
        );
        tipoPadrao.initialValues = valoresLimpos;
    }

    function criar(values: { [key: string]: string }) {
        const obj = { ...values};
        const useCall = useAsyncCall();
        useCall('http://localhost:8085/tipo', 'post', obj).then(() => location.reload()).catch(error => console.log(error));
    }


    return (
        <>
            <Tabela nomeDaTabela={'Lista de Tipos'}
                headers={headersTipo}
                listaDeValores={listaDeTipos.content}
                obterValor={obterValor}
                clickLinha={clickLinha}
                paginacao={<PaginacaoDinamica url='http://localhost:8085/tipo' atomo={listaDeTipoState}  first={listaDeTipos.first} last={listaDeTipos.last} />}
            />

            {
                formSate
                &&
                <FormularioDinamico
                    fields={tipoPadrao.fields}
                    criar={criar}
                    atualizar={tipoPadrao.atualizar}
                    deletar={tipoPadrao.deletar}
                    title={tipoPadrao.title}
                    customFields={tipoPadrao.customFields}
                    initialValues={tipoPadrao.initialValues}
                    limparValores={limparValoresDefinidos}
                />
            }
        </>
    );
}