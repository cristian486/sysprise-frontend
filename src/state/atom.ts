import { atom } from 'recoil';
import { IItemDaVenda, IVenda } from '../types/Venda';
import { IDadosUsuarioAutenticado, IUsuario } from '../types/Usuario';
import { IUnidade } from '../types/Unidade';
import { ICategoria } from '../types/Categoria';
import { ICidade } from '../types/Cidade';
import { IEstado } from '../types/Estado';
import { ICompra, IItemDaCompra } from '../types/Compra';
import { IProduto } from '../types/Produto';
import { IFuncionario } from '../types/Funcionario';
import { IContato, IEndereco, IPessoa, IPessoaFisica, IPessoaJuridica, ITipo } from '../types/Pessoa';
import { asyncBuscarListaDeCategorias, asyncBuscarListaDeCidades, asyncBuscarListaDeClientes, asyncBuscarListaDeCompras, asyncBuscarListaDeEstados, asyncBuscarListaDeEstoque, asyncBuscarListaDeFornecedores, asyncBuscarListaDeFuncionarios, asyncBuscarListaDePessoaFisica, asyncBuscarListaDePessoaJuridica, asyncBuscarListaDeProdutos, asyncBuscarListaDeTipos, asyncBuscarListaDeUnidades, asyncBuscarListaDeUsuarios, asyncBuscarListaDeVendas } from './selector/selector';
import { IEstoque } from '../types/Estoque';
import { IAtualizarStatusMovimentacao } from '../types/AtualizarStatus';

export const listaDeVendasState = atom<IVenda[]>({
    key: 'listaDeVendas',
    default: asyncBuscarListaDeVendas
});

export const listaDeComprasState = atom<ICompra[]>({
    key: 'listaDeCompras',
    default: asyncBuscarListaDeCompras
});

export const listaDeProdutosState = atom<IProduto[]>({
    key: 'listaDeProdutos',
    default: asyncBuscarListaDeProdutos
});

export const listaDeUnidadesState = atom<IUnidade[]>({
    key: 'listaDeUnidades',
    default: asyncBuscarListaDeUnidades
});

export const listaDeCategoriasState = atom<ICategoria[]>({
    key: 'listaDeCategorias',
    default: asyncBuscarListaDeCategorias
});

export const listaDeCidadeState = atom<ICidade[]>({
    key: 'listaDeCidades',
    default: asyncBuscarListaDeCidades
});

export const listaDeEstadoState = atom<IEstado[]>({
    key: 'listaDeEstados',
    default: asyncBuscarListaDeEstados
});

export const listaDeFuncionarioState = atom<IFuncionario[]>({
    key: 'listaDeFuncionarios',
    default: asyncBuscarListaDeFuncionarios
});

export const listaDeTipoState = atom<ITipo[]>({
    key: 'listaDeTipos',
    default: asyncBuscarListaDeTipos
});


export const listaDeUsuarioState = atom<IUsuario[]>({
    key: 'listaDeUsuarios',
    default: asyncBuscarListaDeUsuarios
});


export const listaDePessoaFisicaState = atom<IPessoaFisica[]>({
    key: 'listaDePessoaFisica',
    default: asyncBuscarListaDePessoaFisica
});

export const listaDePessoaJuridicaState = atom<IPessoaJuridica[]>({
    key: 'listaDePessoaJuridica',
    default: asyncBuscarListaDePessoaJuridica
});

export const listaDeEstoqueState = atom<IEstoque[]>({
    key: 'listaDeEstoqueState',
    default: asyncBuscarListaDeEstoque
});


export const categoriaState = atom<string>({
    key: 'categoriaDoProduto',
    default: '0'
});


export const unidadeState = atom<string>({
    key: 'unidadeDoProduto',
    default: '0'
});


export const itensDaVendaState = atom<IItemDaVenda[]>({
    key: 'itensDaVendaState',
    default: []
});

export const itensDaCompraState = atom<IItemDaCompra[]>({
    key: 'itensDaCompraState',
    default: []
});

export const contatosState = atom<IContato[]>({
    key: 'contatoState',
    default: []
});

export const enderecoState = atom<IEndereco>({
    key: 'enderecoState',
    default: <IEndereco>{}
});

export const tiposState = atom<string[]>({
    key: 'tiposState',
    default: []
});

export const estadoState = atom<string>({
    key: 'estadoState',
    default: '0'
});

export const cidadeState = atom<string>({
    key: 'cidadeState',
    default: '0'
});

export const pessoaDaMovimentacaoState = atom<string>({
    key: 'pessoaDaMovimentacaoState',
    default: '0'
});

export const listaDeCidadesDoEstadoState = atom<ICidade[]>({
    key: 'listaDeCidadesDoEstadoState',
    default: []
});


export const listaDeFornecedoresState = atom<IPessoaFisica[] | IPessoaJuridica[]>({
    key: 'listaDeFornecedoresState',
    default: asyncBuscarListaDeFornecedores
});

export const listaDeClientesState = atom<IPessoaFisica[] | IPessoaJuridica[]>({
    key: 'listaDeClientesState',
    default: asyncBuscarListaDeClientes
});


export const atualizarStatusMovimentacaoState = atom<IAtualizarStatusMovimentacao>({
    key: 'atualizarStatusMovimentacaoState',
    default: {id: 0, url: ''}
});










export const dadosUsuarioAutenticado = atom<IDadosUsuarioAutenticado>({
    key: 'dadosUsuarioAutenticado',
    default: {token: '',  nome: ''}
});

export const formularioDinamicoState = atom({
    key: 'formularioDinamicoState',
    default: false
});