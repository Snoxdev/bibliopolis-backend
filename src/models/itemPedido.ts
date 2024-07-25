import { Libro } from 'src/models/libro'

export class ItemPedido{


    constructor(
        public libro:Libro,
        public cantidad: Libro[]

    ){}
}