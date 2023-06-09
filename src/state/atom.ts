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
import { IContato, IEndereco, IPessoaFisica, IPessoaJuridica, ITipo } from '../types/Pessoa';
import { asyncBuscarListaDeCategorias, asyncBuscarListaDeCategoriasParaCadastro, asyncBuscarListaDeCidades, asyncBuscarListaDeClientes, asyncBuscarListaDeCompras, asyncBuscarListaDeEstados, asyncBuscarListaDeEstadosParaCadastro, asyncBuscarListaDeEstoque, asyncBuscarListaDeFornecedores, asyncBuscarListaDeFuncionarios, asyncBuscarListaDePessoaFisica, asyncBuscarListaDePessoaJuridica, asyncBuscarListaDeProdutos, asyncBuscarListaDeTipos, asyncBuscarListaDeTiposParaCadastro, asyncBuscarListaDeUnidades, asyncBuscarListaDeUnidadesParaCadastro, asyncBuscarListaDeUsuarios, asyncBuscarListaDeVendas } from './selector/selector';
import { IEstoque } from '../types/Estoque';
import { IAtualizarStatusMovimentacao } from '../types/AtualizarStatus';
import { IPageable } from '../types/IPageable';

export const listaDeVendasState = atom<IPageable<IVenda[]>>({
    key: 'listaDeVendas',
    default: asyncBuscarListaDeVendas
});

export const listaDeComprasState = atom<IPageable<ICompra[]>>({
    key: 'listaDeCompras',
    default: asyncBuscarListaDeCompras
});

export const listaDeProdutosState = atom<IPageable<IProduto[]>>({
    key: 'listaDeProdutos',
    default: asyncBuscarListaDeProdutos
});

export const listaDeUnidadesState = atom<IPageable<IUnidade[]>>({
    key: 'listaDeUnidades',
    default: asyncBuscarListaDeUnidades
});

export const listaDeUnidadesParaCadastroState = atom<IUnidade[]>({
    key: 'listaDeUnidadesParaCadastroState',
    default: asyncBuscarListaDeUnidadesParaCadastro
});

export const listaDeCategoriasState = atom<IPageable<ICategoria[]>>({
    key: 'listaDeCategorias',
    default: asyncBuscarListaDeCategorias
});

export const listaDeCategoriasParaCadastroState = atom<ICategoria[]>({
    key: 'listaDeCategoriasParaCadastroState',
    default: asyncBuscarListaDeCategoriasParaCadastro
});

export const listaDeCidadeState = atom<IPageable<ICidade[]>>({
    key: 'listaDeCidades',
    default: asyncBuscarListaDeCidades
});

export const listaDeEstadoState = atom<IPageable<IEstado[]>>({
    key: 'listaDeEstados',
    default: asyncBuscarListaDeEstados
});


export const listaDeEstadoParaCadastroState = atom<IEstado[]>({
    key: 'listaDeEstadoParaCadastroState',
    default: asyncBuscarListaDeEstadosParaCadastro
});

export const listaDeFuncionarioState = atom<IPageable<IFuncionario[]>>({
    key: 'listaDeFuncionarios',
    default: asyncBuscarListaDeFuncionarios
});

export const listaDeTipoState = atom<IPageable<ITipo[]>>({
    key: 'listaDeTipos',
    default: asyncBuscarListaDeTipos
});

export const listaDeTipoParaCadastroState = atom<ITipo[]>({
    key: 'listaDeTipoParaCadastroState',
    default: asyncBuscarListaDeTiposParaCadastro
});

export const listaDeUsuarioState = atom<IPageable<IUsuario[]>>({
    key: 'listaDeUsuarios',
    default: asyncBuscarListaDeUsuarios
});

export const listaDePessoaFisicaState = atom<IPageable<IPessoaFisica[]>>({
    key: 'listaDePessoaFisica',
    default: asyncBuscarListaDePessoaFisica
});

export const listaDePessoaJuridicaState = atom<IPageable<IPessoaJuridica[]>>({
    key: 'listaDePessoaJuridica',
    default: asyncBuscarListaDePessoaJuridica
});

export const listaDeEstoqueState = atom<IPageable<IEstoque[]>>({
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


export const paginacaoState = atom<number>({
    key: 'paginacaoState',
    default: 1
});

export const dadosUsuarioAutenticado = atom<IDadosUsuarioAutenticado>({
    key: 'dadosUsuarioAutenticado',
    default: {token: '',  nome: ''}
});

export const formularioDinamicoState = atom({
    key: 'formularioDinamicoState',
    default: false
});