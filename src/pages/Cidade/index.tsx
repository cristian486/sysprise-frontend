import useListaDeCidades from '../../state/hooks/listas/useListaDeCidades';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { ICidade } from '../../types/Cidade';
import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import Estados from '../../components/Estado';
import { converterObjetoParaValoresIniciais } from './base/converterObjeto';
import { cidadePadrao } from './base/default';
import { headersCidade } from './base/headers';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { estadoState, formularioDinamicoState, listaDeCidadeState } from '../../state/atom';
import PaginacaoDinamica from '../../components/Paginacao';
import useAsyncCall from '../../state/hooks/useAsyncCall';

export default function Cidade() {
    const listaDeCidades = useListaDeCidades();
    const asyncDetalhamento = useAsyncDetalhamento<ICidade>();
    const [estado, setEstadoState] = useGenericRecoilAtom<string>(estadoState);
    const [formSate, setFormState] = useGenericRecoilAtom<boolean>(formularioDinamicoState);

    cidadePadrao.customFields = [
        {
            label: '',
            name: 'estado',
            component: <Estados/>
        }
    ];

    function obterValor(item: ICidade, key: string) {
        const result = String(item[key as keyof ICidade]);
        return result;
    }

    function clickLinha(id: number) {
        asyncDetalhamento(`http://localhost:8084/cidade/${id}`).then(resp => {
            converterObjetoParaValoresIniciais(resp);
            setFormState(true);
        });
    }

    function limparValoresDefinidos() {
        const valoresLimpos = Object.fromEntries(
            Object.keys(cidadePadrao.initialValues).map((key) => [key, ''])
        );
        setEstadoState('0');
        cidadePadrao.initialValues = valoresLimpos;
    }


    function criar(values: { [key: string]: string }) {
        const obj = { ...values, estado_id: estado };
        const useCall = useAsyncCall();
        useCall('http://localhost:8084/cidade', 'post', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    function deletar(values: { [key: string]: string }) {
        const obj = { ...values };
        const useCall = useAsyncCall();
        const id = obj['id'];
        useCall('http://localhost:8084/cidade/' + id, 'delete', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    function atualizar(values: { [key: string]: string }) {
        const obj = { ...values, estado_id: estado };
        const useCall = useAsyncCall();
        useCall('http://localhost:8084/cidade', 'put', obj).then(() => location.reload()).catch(error => console.log(error));
    }


    return (
        <>
            <Tabela nomeDaTabela={'Lista de Cidades'}
                headers={headersCidade}
                listaDeValores={listaDeCidades.content}
                obterValor={obterValor}
                clickLinha={clickLinha}
                paginacao={<PaginacaoDinamica url='http://localhost:8084/cidade' atomo={listaDeCidadeState}  first={listaDeCidades.first} last={listaDeCidades.last} />}
            />

            {
                formSate
                &&
                <FormularioDinamico
                    fields={cidadePadrao.fields}
                    criar={criar}
                    atualizar={atualizar}
                    deletar={deletar}
                    title={cidadePadrao.title}
                    customFields={cidadePadrao.customFields}
                    initialValues={cidadePadrao.initialValues}
                    limparValores={limparValoresDefinidos}
                />
            }
        </>
    );
}