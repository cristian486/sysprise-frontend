import axios, { Method } from 'axios';
import useDadosUsuarioAutenticado from './useDadosUsuarioAutenticado';


const useAsyncCall = () => {

    const dadosUsuario = useDadosUsuarioAutenticado();

    return async <T>(url: string, method: Method, data?: T) => {
        try {
            const response = await axios({
                method,
                url,
                data,
                headers: { 'Content-Type': 'application/json', 'Authorization': `${dadosUsuario.token}` }
            });
        } catch (error) {
            console.error('Erro na requisição:', error);
            throw error;
        }
    };
};

export default useAsyncCall;