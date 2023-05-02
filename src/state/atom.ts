import { atom } from 'recoil';
import { IVenda } from '../types/Venda';
import { asyncBuscarListaDeCategorias, asyncBuscarListaDeCidades, asyncBuscarListaDeCompras, asyncBuscarListaDeEstados, asyncBuscarListaDeFuncionarios, asyncBuscarListaDePessoaFisica, asyncBuscarListaDePessoaJuridica, asyncBuscarListaDeProdutos, asyncBuscarListaDeTipos, asyncBuscarListaDeUnidades, asyncBuscarListaDeUsuarios, asyncBuscarListaDeVendas } from './selector/selector';
import { IDadosUsuarioAutenticado, IUsuario } from '../types/Usuario';
import { PropsFormularioDinamico } from '../types/FormularioDinamicoProps';
import { IUnidade } from '../types/Unidade';
import { ICategoria } from '../types/Categoria';
import { ICidade } from '../types/Cidade';
import { IEstado } from '../types/Estado';
import { ICompra } from '../types/Compra';
import { IProduto } from '../types/Produto';
import { IFuncionario } from '../types/Funcionario';
import { IPessoaFisica, IPessoaJuridica, ITipo } from '../types/Pessoa';

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































export const dadosUsuarioAutenticado = atom<IDadosUsuarioAutenticado>({
    key: 'dadosUsuarioAutenticado',
    default: {token: '',  nome: ''}
});

export const formularioDinamicoState = atom({
    key: 'formularioDinamicoState',
    default: { mostrar: false }
});