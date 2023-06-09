import useListaDePessoaJuridica from '../../state/hooks/listas/useListaDePessoaJuridica';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { IContato, IEndereco, IPessoaJuridica } from '../../types/Pessoa';
import useAsyncDetalhamento from '../../state/hooks/useAsyncDetalhamento';
import Endereco from '../../components/Endereco';
import ListaContatos from '../../components/ListaContatos';
import ListaTipos from '../../components/ListaTipos';
import { converterObjetoParaValoresIniciais } from './base/converterObjeto';
import { pessoaJuridicaPadrao } from './base/default';
import { headersPessoaJuridica } from './base/headers';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { cidadeState, contatosState, enderecoState, estadoState, formularioDinamicoState, listaDeCidadesDoEstadoState, listaDePessoaJuridicaState, tiposState } from '../../state/atom';
import useAsyncCall from '../../state/hooks/useAsyncCall';
import { ICidade } from '../../types/Cidade';
import { IPageable } from '../../types/IPageable';
import PaginacaoDinamica from '../../components/Paginacao';

export default function PessoaJuridica() {
    const listaDePessoaJuridica = useListaDePessoaJuridica();
    const asyncDetalhamento = useAsyncDetalhamento<IPessoaJuridica>();
    const [contatos, setContatosState] = useGenericRecoilAtom<IContato[]>(contatosState);
    const [endereco, setEnderecoState] = useGenericRecoilAtom<IEndereco>(enderecoState);
    const [estado, setEstadoState] = useGenericRecoilAtom<string>(estadoState);
    const [formSate, setFormState] = useGenericRecoilAtom<boolean>(formularioDinamicoState);
    const [tipos, setTiposSelecionados] = useGenericRecoilAtom<string[]>(tiposState);
    const [cidade, setCidade] = useGenericRecoilAtom<string>(cidadeState);
    const asyncDetalhamentoCidades = useAsyncDetalhamento<IPageable<ICidade[]>>();
    const [listaDeCidadesDoEstado, setListaDeCidadesDoEstado] = useGenericRecoilAtom<ICidade[]>(listaDeCidadesDoEstadoState);

    pessoaJuridicaPadrao.customFields = [
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

    function obterValor(item: IPessoaJuridica, key: string) {
        const result = String(item[key as keyof IPessoaJuridica]);
        return result;
    }

    function clickLinha(id: number) {
        asyncDetalhamento(`http://localhost:8085/pessoajuridica/${id}`).then(resp => {

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
            Object.keys(pessoaJuridicaPadrao.initialValues).map((key) => [key, ''])
        );
        
        setCidade('0');
        setEstadoState('0');
        setContatosState([]);
        setTiposSelecionados([]);
        pessoaJuridicaPadrao.initialValues = valoresLimpos;
        setEnderecoState({id: '', rua: '', numero: 0, bairro: '', complemento: '', cep: '', cidade_id: ''});
    }

    function criar(values: { [key: string]: string }) {
        const obj = { ...values, endereco, contatos, tipos };
        console.log(obj);
        const useCall = useAsyncCall();
        useCall('http://localhost:8085/pessoajuridica', 'post', obj).then(() => location.reload()).catch(error => console.log(error));
    }

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Pessoas Jurídicas'}
                headers={headersPessoaJuridica}
                listaDeValores={listaDePessoaJuridica.content}
                obterValor={obterValor}
                clickLinha={clickLinha}
                paginacao={<PaginacaoDinamica url='http://localhost:8085/pessoajuridica' atomo={listaDePessoaJuridicaState}  first={listaDePessoaJuridica.first} last={listaDePessoaJuridica.last} />}
            />

            {
                formSate
                &&
                <FormularioDinamico
                    fields={pessoaJuridicaPadrao.fields}
                    criar={criar}
                    atualizar={pessoaJuridicaPadrao.atualizar}
                    deletar={pessoaJuridicaPadrao.deletar}
                    title={pessoaJuridicaPadrao.title}
                    customFields={pessoaJuridicaPadrao.customFields}
                    initialValues={pessoaJuridicaPadrao.initialValues}
                    limparValores={limparValoresDefinidos}
                />
            }
        </>
    );
}