import { useRecoilValue } from 'recoil';
import { listaDeComprasState } from '../../atom';

const useListaDeCompras = () => {
    return useRecoilValue(listaDeComprasState);
};

export default useListaDeCompras;