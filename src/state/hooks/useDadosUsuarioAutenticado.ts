import { IDadosUsuarioAutenticado } from '../../types/Usuario';

const useDadosUsuarioAutenticado = () => {

    const dadosUsuarioStorage = localStorage.getItem('dadosUsuario');
    
    if(dadosUsuarioStorage === null) return <IDadosUsuarioAutenticado>{};

    const dadosUsuario : IDadosUsuarioAutenticado = JSON.parse(dadosUsuarioStorage);

    return dadosUsuario;
};

export default useDadosUsuarioAutenticado;