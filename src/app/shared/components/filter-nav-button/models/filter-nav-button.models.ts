export interface FilterNavButtonModel {
    title: string;
    value: FilterValues; 
}

export interface OrderNavButtonModel {
    title: string;
    value: OrderValues; 
}

export enum FilterValues {
 all = "all",
 car = "cars",
 pickups = "pickups",
 suvs = "suvs"
}

export enum OrderValues {
 clean = "clean",
 desc = "desc",
 asc = "asc",
 newer = "newer",
 older = "older" 
}