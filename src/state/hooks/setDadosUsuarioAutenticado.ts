import { useSetRecoilState } from 'recoil';
import { dadosUsuarioAutenticado } from '../atom';
import { IDadosUsuarioAutenticado } from '../../types/Usuario';

const setDadosUsuarioAutenticado = () => {
    const setDadosUsuarioAutenticado = useSetRecoilState(dadosUsuarioAutenticado);

    return (dados: IDadosUsuarioAutenticado) => {
        localStorage.setItem('dadosUsuario', JSON.stringify(dados));
        setDadosUsuarioAutenticado(dados);
    };
};

export default setDadosUsuarioAutenticado;