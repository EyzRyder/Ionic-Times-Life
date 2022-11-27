export interface Itreinos{
    nome: string,
    num: string,
    dificuldade: string,
    exercicios: Iexercicios
};

export interface Iexercicios {
    nome: string,
    setTemp: string,
    num: string,
    imgUrl: string
};
