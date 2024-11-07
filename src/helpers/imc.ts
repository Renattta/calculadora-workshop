export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    ouro: number[],
    seuOuro?:number;
}

export const levels: Level[] = [
    {
        title: '',
        color: '#3a3a3a',
        icon: 'up',
        ouro: [0, 99]
    },
];

export const calcularOuro = (peso: number, milesimo: number) => {
    const ouro = (peso*milesimo)/1000;
    for(let i in levels){
        if(ouro >= levels[i].ouro[0] && ouro < levels[i].ouro[1]){
            let levelCopy: Level = {...levels[i]};

            levelCopy.seuOuro = ouro;
            return levelCopy;
    }
}
        return null;
}