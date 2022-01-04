import { Boutique } from "./boutique";

export class Commercant {
    id!: number;
    prenoms!: string;
    nom!: string;
    telephone!: string;
    adresse!: string;
    image_path!: null;
    created_at!: Date;
    updated_at!: Date;
    boutique!:   Boutique;
}
