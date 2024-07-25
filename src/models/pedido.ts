import { Usuario } from "src/models/usuario";
import { ItemPedido } from "src/models/itemPedido"

export class Pedido {


    constructor(
        public id: number,
        public usuario: Usuario,
        public fechaPedido: Date,
        public estado:string, // "pendiente", "en proceso", "enviado", "entregado"
        public total: number,
        public items: ItemPedido[]

    ){}
}