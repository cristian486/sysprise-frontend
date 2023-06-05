import { useNavigate } from 'react-router-dom';
import { IDadosUsuarioAutenticado } from '../../../types/Usuario';
import useGenericRecoilAtom from '../useGenericRecoilAtom';
import { dadosUsuarioAutenticado } from '../../atom';

const logout = () => {
    const navigate = useNavigate();
    const [dadosUsuario, setDadosUsuario] = useGenericRecoilAtom<IDadosUsuarioAutenticado>(dadosUsuarioAutenticado);


    return () => {
        setDadosUsuario(<IDadosUsuarioAutenticado>{});
        localStorage.removeItem('dadosUsuario');
        navigate('/login', { replace: true });
    };
};

export default logout;