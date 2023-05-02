export type SubListaNavegacao = ({ title: string; path: string; icon: Element; cName: string; } |any)[];

export type ItemSubListaNavegacao = SubListaNavegacao[0]

export type ItemListaNavegacao = 
{ item: { title: string; path: string; icon: Element; iconClosed: Element; iconOpened: Element; subNav: SubListaNavegacao} | any; key: number; }