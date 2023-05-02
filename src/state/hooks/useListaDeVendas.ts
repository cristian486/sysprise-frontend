import { useRecoilValue } from 'recoil';
import { listaDeVendasState } from '../atom';

const useListaDeVendas = () => {
    return useRecoilValue(listaDeVendasState);
};

export default useListaDeVendas;