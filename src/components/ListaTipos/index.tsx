import useListaDeTipos from '../../state/hooks/listas/useListaDeTipos';
import ItemTipo from './ItemTipo';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { tiposState } from '../../state/atom';

export default function ListaTipos() {
    const listDeTipos = useListaDeTipos();
    const [tiposSelecionados, setTiposSelecionados] = useGenericRecoilAtom<string[]>(tiposState);

    function handleItemChange(id: string) {
        const contemTipo = tiposSelecionados.filter(tipoId => tipoId === id).length > 0;
        let novaLista = [...tiposSelecionados];

        if(contemTipo) 
            novaLista = tiposSelecionados.filter(tipoId => tipoId !== id); 
        else 
            novaLista.push(id);
        setTiposSelecionados(novaLista);
    }

    function elementoExiste(id: string) {
        return tiposSelecionados.filter(tipoId => tipoId === id).length > 0;
    }


    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
            {
                listDeTipos.map((tipo, index) => {
                    return (
                        <ItemTipo tipo={tipo} onChange={handleItemChange} key={index} checked={elementoExiste(tipo.id || '0')}/>
                    );
                })
            }
        </div>
    );
}