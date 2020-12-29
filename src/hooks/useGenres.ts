import { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';

export interface Genre {
    id: number,
    name: string
}

export function useGenres(): Genre[] {
    const [genres, setGenres] = useState<Genre[]>([]);
    useEffect(() => {
        MoviesService.getGenres()
        .then((res: any) => setGenres(res.data.genres))
    }, []);

    return genres
}

