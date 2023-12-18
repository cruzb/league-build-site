import { IItem } from "./item.model";

export interface ICategory {
    id: string;
    sort: number;
    name: string;
    items: IItem[];
    expanded: boolean;
}
