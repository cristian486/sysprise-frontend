import { useNavigate } from 'react-router-dom';
import { IUsuario, IDadosUsuarioAutenticado } from '../../types/Usuario';
import axios from 'axios';
import setDadosUsuarioAutenticado from './setDadosUsuarioAutenticado';

const asyncLogin = () => {
    const navigate = useNavigate();
    const url = process.env.BACKEND || 'http://localhost:8080';
    const setDadosUsuario = setDadosUsuarioAutenticado();

    return async (dados: IUsuario) => {
        try {
            const respostaHttp = await axios.post(`${url}/login`, JSON.stringify(dados), { headers: { 'Content-Type': 'application/json' } });
            const dadosUsuario: IDadosUsuarioAutenticado = await respostaHttp.data;
            setDadosUsuario(dadosUsuario);
            navigate('/', { replace: true });
        } catch (error) {
            console.log(error);
            alert('Não foi possível fazer o login');
        }
    };
};

export default asyncLogin;