export class Item {
    public id: number = 0;
    public name: string = '';
    public description: string = '';
    public colloq: string = '';
    public plaintext: string = '';
    public into: string[] = [];
    public image: IItemImage = {
        full: '',
        sprite: '',
        group: '',
        x: 0,
        y: 0,
        w: 0,
        h: 0
    };
    public gold: IItemGold = {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
    };
    public tags: string[] = [];
    public maps: any;
    public stats: any;
}

export interface IItemImage {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface IItemGold {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
}

export interface IItemResponse {
    type: string;
    version: string;
    basic: any;
    data: any;
    groups: any;
    tree: any;
}
