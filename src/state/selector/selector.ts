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
import { IPessoa, IPessoaFisica, IPessoaJuridica, ITipo } from '../../types/Pessoa';
import { IUsuario } from '../../types/Usuario';
import { IEstoque } from '../../types/Estoque';
import { IPageable } from '../../types/IPageable';

export const asyncBuscarListaDeVendas = selector({
    key: 'asyncBuscarListaDeVendas',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8087';

        const respostaHttp = await axios.get(`${url}/venda`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeVendas: IPageable<IVenda[]> = await respostaHttp.data;
        return listaDeVendas;

    }
});

export const asyncBuscarListaDeCompras = selector({
    key: 'asyncBuscarListaDeCompras',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8088';

        const respostaHttp = await axios.get(`${url}/compra`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeCompras: IPageable<ICompra[]> = await respostaHttp.data;
        return listaDeCompras;
    }
});

export const asyncBuscarListaDeProdutos = selector({
    key: 'asyncBuscarListaDeProdutos',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8082';
        const respostaHttp = await axios.get(`${url}/produto`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeProdutos: IPageable<IProduto[]> = await respostaHttp.data;
        return listaDeProdutos;
    }
});

export const asyncBuscarListaDeUnidades = selector({
    key: 'asyncBuscarListaDeUnidades',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8081';

        const respostaHttp = await axios.get(`${url}/unidade`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeUnidades: IPageable<IUnidade[]> = await respostaHttp.data;
        return listaDeUnidades;

    }
});

export const asyncBuscarListaDeUnidadesParaCadastro = selector({
    key: 'asyncBuscarListaDeUnidadesParaCadastro',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8081';

        const respostaHttp = await axios.get(`${url}/unidade?size=9999999`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeUnidades: IUnidade[] = await respostaHttp.data.content;
        return listaDeUnidades;
    }
});

export const asyncBuscarListaDeCategorias = selector({
    key: 'asyncBuscarListaDeCategorias',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';

        const respostaHttp = await axios.get(`${url}/categoria`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeCategorias: IPageable<ICategoria[]> = await respostaHttp.data;
        return listaDeCategorias;

    }
});

export const asyncBuscarListaDeCategoriasParaCadastro = selector({
    key: 'asyncBuscarListaDeCategoriasParaCadastro',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';

        const respostaHttp = await axios.get(`${url}/categoria?size=999999`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeCategorias: ICategoria[] = await respostaHttp.data.content;
        return listaDeCategorias;
    }
});


export const asyncBuscarListaDeCidades = selector({
    key: 'asyncBuscarListaDeCidades',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8084';

        const respostaHttp = await axios.get(`${url}/cidade`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeCidades: IPageable<ICidade[]> = await respostaHttp.data;
        return listaDeCidades;

    }
});

export const asyncBuscarListaDeEstados = selector({
    key: 'asyncBuscarListaDeEstados',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8084';

        const respostaHttp = await axios.get(`${url}/estado`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeEstados: IPageable<IEstado[]> = await respostaHttp.data;
        return listaDeEstados;

    }
});

export const asyncBuscarListaDeEstadosParaCadastro = selector({
    key: 'asyncBuscarListaDeEstadosParaCadastro',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8084';

        const respostaHttp = await axios.get(`${url}/estado?size=999999`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeEstados: IEstado[] = await respostaHttp.data.content;
        return listaDeEstados;

    }
});

export const asyncBuscarListaDeFuncionarios = selector({
    key: 'asyncBuscarListaDeFuncionarios',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';

        const respostaHttp = await axios.get(`${url}/funcionario`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeFuncionarios: IPageable<IFuncionario[]> = await respostaHttp.data;
        return listaDeFuncionarios;
    }
});

export const asyncBuscarListaDeTipos = selector({
    key: 'asyncBuscarListaDeTipos',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8085';

        const respostaHttp = await axios.get(`${url}/tipo`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeTipos: IPageable<ITipo[]> = await respostaHttp.data;
        return listaDeTipos;

    }
});


export const asyncBuscarListaDeTiposParaCadastro = selector({
    key: 'asyncBuscarListaDeTiposParaCadastro',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8085';

        const respostaHttp = await axios.get(`${url}/tipo?size=999999`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeTipos: ITipo[] = await respostaHttp.data.content;
        return listaDeTipos;
    }
});

export const asyncBuscarListaDeUsuarios = selector({
    key: 'asyncBuscarListaDeUsuarios',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8080';

        const respostaHttp = await axios.get(`${url}/usuario`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeUsuarios: IPageable<IUsuario[]> = await respostaHttp.data;
        return listaDeUsuarios;

    }
});

export const asyncBuscarListaDePessoaFisica = selector({
    key: 'asyncBuscarListaDePessoaFisica',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8085';

        const respostaHttp = await axios.get(`${url}/pessoafisica`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDePessoa: IPageable<IPessoaFisica[]> = await respostaHttp.data;
        return listaDePessoa;

    }
});

export const asyncBuscarListaDePessoaJuridica = selector({
    key: 'asyncBuscarListaDePessoaJuridica',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8085';

        const respostaHttp = await axios.get(`${url}/pessoajuridica`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDePessoa: IPageable<IPessoaJuridica[]> = await respostaHttp.data;
        return listaDePessoa;

    }
});

export const asyncBuscarListaDeEstoque = selector({
    key: 'asyncBuscarListaDeEstoque',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8086';

        const respostaHttp = await axios.get(`${url}/estoque`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
        const listaDeEstoque: IPageable<IEstoque[]> = await respostaHttp.data;
        return listaDeEstoque;

    }
});


export const asyncBuscarListaDeFornecedores = selector({
    key: 'asyncBuscarListaDeFornecedores',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8085';
        try {
            const respostaHttp = await axios.get(`${url}/pessoa/fornecedor`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const listaDePessoa: IPessoaFisica[] | IPessoaJuridica[] = await respostaHttp.data.content;
            return listaDePessoa;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});

export const asyncBuscarListaDeClientes = selector({
    key: 'asyncBuscarListaDeClientes',
    get: async () => {
        const dadosUsuario = useDadosUsuarioAutenticado();
        const url = process.env.BACKEND || 'http://localhost:8085';
        try {
            const respostaHttp = await axios.get(`${url}/pessoa/cliente`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const listaDePessoa: IPessoaFisica[] | IPessoaJuridica[] = await respostaHttp.data.content;
            return listaDePessoa;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});