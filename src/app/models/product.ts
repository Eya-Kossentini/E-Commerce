import { Category } from "./category";

export class Product {

    constructor(
        public Id?: Number,
        public name?: String,
        public description?: String,
        public ImageURL?: String,
        public price?: Number,
        public category?: Category
    ) { }

}
