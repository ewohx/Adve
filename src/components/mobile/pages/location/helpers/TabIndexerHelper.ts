export interface ITabIndexer {
    index: number;
}

export const CompareIndexForButtonSort = (a: ITabIndexer, b: ITabIndexer) => {
    if (a.index < b.index) return -1;
    if (a.index > b.index) return 1;
    return 0;
}