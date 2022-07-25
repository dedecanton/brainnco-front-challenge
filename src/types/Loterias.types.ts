export type LoteriaContextType = {
    loterias: LoteriaType[];
    concursos: ConcursosType[];
    loading: boolean;
}

export type LoteriaType = {
    id: number;
    nome: string;
}

export type ConcursosType = {
    loteriaId: number,
    concursoId: string
}

export type ConcursoType = {
    id: string;
    loteria: number;
    numeros: string[],
    data: string
}