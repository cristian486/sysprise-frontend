import axios from 'axios';
import useDadosUsuarioAutenticado from './useDadosUsuarioAutenticado';


const useAsyncDetalhamento = <T>() => {

    const dadosUsuario = useDadosUsuarioAutenticado();

    return async (url: string, params?: string): Promise<T> => {
        try {
            const promiseHttp = await axios.get(`${url}${params !== undefined ? '?' + params : ''}`, { headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` } });
            const dados: T = await promiseHttp.data;
            return dados;
        } catch (error) {
            console.log(error);
            return <T>{};
        }
    };
};

export default useAsyncDetalhamento;