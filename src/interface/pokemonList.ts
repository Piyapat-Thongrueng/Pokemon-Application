export interface IPokemonListResponse {
    count: number;
    next: string;
    previous: null;
    result: IPokemonListItem[] //array of object
}

export interface IPokemonListItem {
    name: string;
    url: string;
}