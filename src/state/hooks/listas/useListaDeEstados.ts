import { useRecoilValue } from 'recoil';
import { listaDeEstadoState } from '../../atom';

const useListaDeEstados = () => {
    return useRecoilValue(listaDeEstadoState);
};

export default useListaDeEstados;