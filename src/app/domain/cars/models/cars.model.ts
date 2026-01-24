export interface CarAPIModel {
id: number;
name: string;
thumbnail: string;
year: number;
segment: CarSegmentAPI;
price: number;
}

export interface CarModel {
id: number;
name: string;
thumbnail: string;
year: number;
segment: CarSegmentUI;
price: number;
}

export type CarSegmentUI = "cars" | "pickups" | "suvs" | "all";

export type CarSegmentAPI =  "Sedan" | "Pickups y Comerciales" | "SUVs";