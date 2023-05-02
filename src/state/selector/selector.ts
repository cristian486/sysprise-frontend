import axios from 'axios';
import { selector } from 'recoil';
import { IVenda } from '../../types/Venda';
import useDadosUsuarioAutenticado from '../hooks/useDadosUsuarioAutenticado';
import { IUnidade } from '../../types/Unidade';
import { ICategoria } from '../../types/Categoria';
import { ICidade } from '../../types/Cidade';
import { IEstado } from '../../types/Estado';
import { ICompra } from '../../types/Compra';
import { IProduto } from '../../types/Produto';
import { IFuncionario } from '../../types/Funcionario';
import { IPessoaFisica, IPessoaJuridica, ITipo } from '../../types/Pessoa';
import { IUsuario } from '../../types/Usuario';

export const asyncBuscarListaDeVendas = selector({
    key: 'asyncBuscarListaDeVendas',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';
        try {
            const respostaHttp = await axios.get(`${url}/venda`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const listaDeVendas: IVenda[] = await respostaHttp.data.content;
            return listaDeVendas;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});

export const asyncBuscarListaDeCompras = selector({
    key: 'asyncBuscarListaDeCompras',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';
        try {
            const respostaHttp = await axios.get(`${url}/compra`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const listaDeCompras: ICompra[] = await respostaHttp.data.content;
            return listaDeCompras;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});

export const asyncBuscarListaDeProdutos = selector({
    key: 'asyncBuscarListaDeProdutos',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';
        try {
            const respostaHttp = await axios.get(`${url}/produto`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const listaDeProdutos: IProduto[] = await respostaHttp.data.content;
            return listaDeProdutos;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});

export const asyncBuscarListaDeUnidades = selector({
    key: 'asyncBuscarListaDeUnidades',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';
        try {
            const respostaHttp = await axios.get(`${url}/unidade`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const listaDeUnidades: IUnidade[] = await respostaHttp.data.content;
            return listaDeUnidades;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});

export const asyncBuscarListaDeCategorias = selector({
    key: 'asyncBuscarListaDeCategorias',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';
        try {
            const respostaHttp = await axios.get(`${url}/categoria`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const listaDeCategorias: ICategoria[] = await respostaHttp.data.content;
            return listaDeCategorias;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});

export const asyncBuscarListaDeCidades = selector({
    key: 'asyncBuscarListaDeCidades',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';
        try {
            const respostaHttp = await axios.get(`${url}/cidade`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const listaDeCidades: ICidade[] = await respostaHttp.data.content;
            return listaDeCidades;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});

export const asyncBuscarListaDeEstados = selector({
    key: 'asyncBuscarListaDeEstados',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';
        try {
            const respostaHttp = await axios.get(`${url}/estado`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const listaDeEstados: IEstado[] = await respostaHttp.data.content;
            return listaDeEstados;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});

export const asyncBuscarListaDeFuncionarios = selector({
    key: 'asyncBuscarListaDeFuncionarios',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';
        try {
            const respostaHttp = await axios.get(`${url}/funcionario`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const listaDeFuncionarios: IFuncionario[] = await respostaHttp.data.content;
            return listaDeFuncionarios;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});

export const asyncBuscarListaDeTipos = selector({
    key: 'asyncBuscarListaDeTipos',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';
        try {
            const respostaHttp = await axios.get(`${url}/tipo`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const listaDeTipos: ITipo[] = await respostaHttp.data.content;
            return listaDeTipos;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});

export const asyncBuscarListaDeUsuarios = selector({
    key: 'asyncBuscarListaDeUsuarios',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';
        try {
            const respostaHttp = await axios.get(`${url}/usuario`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const listaDeUsuarios: IUsuario[] = await respostaHttp.data.content;
            return listaDeUsuarios;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});

export const asyncBuscarListaDePessoaFisica = selector({
    key: 'asyncBuscarListaDePessoaFisica',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';
        try {
            const respostaHttp = await axios.get(`${url}/usuario`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const listaDePessoa: IPessoaFisica[] = await respostaHttp.data.content;
            return listaDePessoa;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});

export const asyncBuscarListaDePessoaJuridica = selector({
    key: 'asyncBuscarListaDePessoaJuridica',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';
        try {
            const respostaHttp = await axios.get(`${url}/usuario`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const listaDePessoa: IPessoaJuridica[] = await respostaHttp.data.content;
            return listaDePessoa;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});