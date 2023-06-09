import useListaDePessoaFisica from '../../state/hooks/listas/useListaDePessoaFisica';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { IContato, IEndereco, IPessoaFisica } from '../../types/Pessoa';
import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import Endereco from '../../components/Endereco';
import ListaContatos from '../../components/ListaContatos';
import ListaTipos from '../../components/ListaTipos';
import { headersPessoaFisica } from './base/headers';
import { converterObjetoParaValoresIniciais } from './base/converterObjeto';
import { pessoaFisicaPadrao } from './base/default';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { cidadeState, contatosState, enderecoState, estadoState, formularioDinamicoState, listaDeCidadesDoEstadoState, listaDePessoaFisicaState, tiposState } from '../../state/atom';
import useAsyncCall from '../../state/hooks/useAsyncCall';
import { IPageable } from '../../types/IPageable';
import { ICidade } from '../../types/Cidade';
import PaginacaoDinamica from '../../components/Paginacao';

export default function PessoaFisica() {
    const listaPessoaFisica = useListaDePessoaFisica();
    const asyncDetalhamento = useAsyncDetalhamento<IPessoaFisica>();
    const [cidade, setCidade] = useGenericRecoilAtom<string>(cidadeState);
    const [estado, setEstadoState] = useGenericRecoilAtom<string>(estadoState);
    const asyncDetalhamentoCidades = useAsyncDetalhamento<IPageable<ICidade[]>>();
    const [tipos, setTiposSelecionados] = useGenericRecoilAtom<string[]>(tiposState);
    const [endereco, setEnderecoState] = useGenericRecoilAtom<IEndereco>(enderecoState);
    const [contatos, setContatosState] = useGenericRecoilAtom<IContato[]>(contatosState);
    const [formSate, setFormState] = useGenericRecoilAtom<boolean>(formularioDinamicoState);
    const [listaDeCidadesDoEstado, setListaDeCidadesDoEstado] = useGenericRecoilAtom<ICidade[]>(listaDeCidadesDoEstadoState);

    pessoaFisicaPadrao.customFields = [
        {
            label: 'Endereço:',
            name: 'endereco',
            component: <Endereco />
        },
        {
            label: 'Contatos',
            name: 'contatos',
            component: <ListaContatos />
        },
        {
            label: 'Tipos',
            name: 'tipos',
            component: <ListaTipos />
        }
    ];

    function obterValor(item: IPessoaFisica, key: string) {
        const result = String(item[key as keyof IPessoaFisica]);
        return result;
    }

    function clickLinha(id: number) {
        asyncDetalhamento(`http://localhost:8085/pessoafisica/${id}`).then(resp => {
            asyncDetalhamentoCidades('http://localhost:8084/cidade', `size=10000000&estadoId=${resp.endereco.estado_id || '0'}`)
                .then(resp => {
                    setListaDeCidadesDoEstado(resp.content);
                    
                })
                .catch(error => console.log(error));

            setCidade(resp.endereco.cidade_id || '0');
            setContatosState(resp.contatos);
            setTiposSelecionados(resp.tipos.map(tipo => tipo.id || '0'));
            setEnderecoState(resp.endereco);
            setEstadoState(resp.endereco.estado_id || '0');
            converterObjetoParaValoresIniciais(resp);


            setFormState(true);
        });


    }

    function limparValoresDefinidos() {
        const valoresLimpos = Object.fromEntries(
            Object.keys(pessoaFisicaPadrao.initialValues).map((key) => [key, ''])
        );
        setCidade('0');
        setEstadoState('0');
        setContatosState([]);
        setTiposSelecionados([]);
        pessoaFisicaPadrao.initialValues = valoresLimpos;
        setEnderecoState({ id: '', rua: '', numero: 0, bairro: '', complemento: '', cep: '', cidade_id: '' });
    }

    function criar(values: { [key: string]: string }) {
        const obj = { ...values, endereco, contatos, tipos };
        console.log(obj);
        const useCall = useAsyncCall();
        useCall('http://localhost:8085/pessoafisica', 'post', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Pessoas Físicas'}
                headers={headersPessoaFisica}
                listaDeValores={listaPessoaFisica.content}
                obterValor={obterValor}
                clickLinha={clickLinha}
                paginacao={<PaginacaoDinamica url='http://localhost:8085/pessoafisica' atomo={listaDePessoaFisicaState}  first={listaPessoaFisica.first} last={listaPessoaFisica.last} />}
            />

            {
                formSate
                &&
                <FormularioDinamico
                    fields={pessoaFisicaPadrao.fields}
                    criar={criar}
                    atualizar={pessoaFisicaPadrao.atualizar}
                    deletar={pessoaFisicaPadrao.deletar}
                    title={pessoaFisicaPadrao.title}
                    customFields={pessoaFisicaPadrao.customFields}
                    initialValues={pessoaFisicaPadrao.initialValues}
                    limparValores={limparValoresDefinidos}
                />
            }
        </>
    );
}