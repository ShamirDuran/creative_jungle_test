import { useState, useEffect } from 'react';

/**
 * Ayuda a controlar un infinite scroll
 * @param data Array de objetos que se va a separar en diferentes paginas
 * @param itemsPerPage Numero de items por pagina
 */
export const useInfiniteScroll = <T>(data: T[], itemsPerPage: number) => {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const loadMore = () => {
        if (page < totalPages) {
            setTimeout(() => {
                setPage(page + 1);
            }, 2000);
        }
    };

    const paginatedData: T[] = data.slice(0, page * itemsPerPage);

    const hasMore = page < totalPages;

    useEffect(() => {
        setPage(1);
    }, [data, itemsPerPage]);

    return {
        items: paginatedData,
        hasMore,
        loadMore,
    };
};
