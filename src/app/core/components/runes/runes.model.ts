export interface IRuneTree {
    id: number;
    key: string;
    icon: string;
    name: string;
    slots: ISlot[];
}

export interface ISelectedRuneTree extends IRuneTree {
    expanded: boolean;
}

export interface ISlot {
    runes: IRune[];
    selectedIndex?: number;
}

export interface IRune {
    id: number;
    key: string;
    icon: string;
    name: string;
    shortDesc: string;
    longDesc: string;
}

export interface IStatSlot {
    runes: IStatRune[];
    selectedIndex?: number;
}

export interface IStatRune {
    id: number;
    name: string;
    icon: string;
}