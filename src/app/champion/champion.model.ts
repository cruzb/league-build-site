export class ChampionBrief {
    public version: string = '';
    public id: string = '';
    public key: string = '';
    public name: string = '';
    public title: string = '';
    public blurb: string = '';
    public info!: IChampInfo;
    public image!: IRiotImage;
    public tags: string[] = [];
    public partype: string = '';
    public stats!: IChampStats;
}

export class Champion {
    public id: string = '';
    public key: string = '';
    public name: string = '';
    public title: string = '';
    public image!: IRiotImage;
    public skins: IChampSkin[] = [];
    public lore: string = '';
    public blurb: string = '';
    public allytips: string[] = [];
    public enemytips: string[] = [];
    public tags: string[] = [];
    public partype: string = '';
    public info!: IChampInfo;
    public stats!: IChampStats;
    public spells: IChampSpell[] = [];
    public passive!: IChampSpell;
    public recommended: any[] = [];
}

export interface IChampInfo {
    attack: number;
    defense: number; 
    magic: number;
    difficulty: number;
}

export interface IRiotImage {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface IChampSkin {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
}

export interface IChampStats {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
}

export interface IChampSpell {
    id: string;
    name: string;
    tooltip: string;
    description: string;
    image: IRiotImage;
    leveltip: ISpellLevelTip;
    maxrank: number;
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    datavalues: any;
    effect: number[][];
    effectBurn: string[];
    vars: any[];
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    resource: string;
}

export interface ISpellLevelTip {
    label: string[];
    effect: string[];
}

