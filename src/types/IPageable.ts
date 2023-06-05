export interface IPageable<T> {
    content: T[];
    pageable: {
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        sort: {
            empty: boolean;
            unsorted: boolean;
            sorted: boolean;
        };
        unpaged: boolean;
    },
    sort: {
        empty: boolean;
        unsorted: boolean;
        sorted: boolean;
    },
    totalElements: number;
    totalPages: number;
}