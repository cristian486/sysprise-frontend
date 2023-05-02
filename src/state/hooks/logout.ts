import { useNavigate } from 'react-router-dom';
import setDadosUsuarioAutenticado from './setDadosUsuarioAutenticado';
import { IDadosUsuarioAutenticado } from '../../types/Usuario';

const logout = () => {
    const navigate = useNavigate();
    const setDados = setDadosUsuarioAutenticado();

    return () => {
        setDados(<IDadosUsuarioAutenticado>{});
        localStorage.removeItem('dadosUsuario');
        navigate('/login', { replace: true });
    };
};

export default logout;