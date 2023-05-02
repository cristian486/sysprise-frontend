import {Outlet, Navigate} from 'react-router-dom';
import useDadosUsuarioAutenticado from '../../state/hooks/useDadosUsuarioAutenticado';

export default function PrivateRoutes() {

    const dadosUsuario = useDadosUsuarioAutenticado();
    
    function usuarioAutenticado() {
        return true;
        if(dadosUsuario === null) return false;

        return dadosUsuario.token !== undefined && dadosUsuario.token.length > 0;
    }

    return(
        usuarioAutenticado() ? <Outlet/> : <Navigate to='/login'/>
    );
}