import ItemNavegacao from './ItemNavegacao';
import { SidebarData } from './data/NavegacaoData';

export default function Navegacao() {
    return(
        <nav>
            <ul style={{padding: '1rem 0'}}>
                {SidebarData.map((item, index) => {
                    return(
                        <ItemNavegacao item={item} key={index}/>
                    );
                })}
            </ul>
        </nav>
    );
}

