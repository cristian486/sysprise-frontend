import { useRecoilValue } from 'recoil';
import { listaDeUsuarioState } from '../atom';

const useListaDeUsuarios = () => {
    return useRecoilValue(listaDeUsuarioState);
};

export default useListaDeUsuarios;