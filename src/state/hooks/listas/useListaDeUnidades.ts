import { useRecoilValue } from 'recoil';
import { listaDeUnidadesState } from '../../atom';

const useListaDeUnidades = () => {
    return useRecoilValue(listaDeUnidadesState);
};

export default useListaDeUnidades;