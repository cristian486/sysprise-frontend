import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IDadosUsuarioAutenticado, IUsuario } from '../../../types/Usuario';
import useGenericRecoilAtom from '../useGenericRecoilAtom';
import { dadosUsuarioAutenticado } from '../../atom';


const asyncLogin = () => {
    const navigate = useNavigate();
    const url = process.env.BACKEND || 'http://localhost:8080';
    const [dadosUsuario, setDadosUsuario] = useGenericRecoilAtom<IDadosUsuarioAutenticado>(dadosUsuarioAutenticado);

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