import { Injectable } from '@nestjs/common';
import { Libro } from 'src/models/libro'

@Injectable()
export class LibrosService {

    libros: Libro[] = [];
    libFAu: Libro[] = [];
    libFGen: Libro[] = [];
    libFAuGen: Libro[] = [];
    isbns: number[] = [];

    
    nuevoLibro(libro: Libro): void {
        if(this.libros.length < 1){
            libro.isbn = this.libros.length+1;
            this.libros.push(libro);
            this.isbns.push(libro.isbn);
        }else{
            if(this.isbns.indexOf(libro.isbn) == -1){
            libro.isbn = this.libros.length+1;
            this.libros.push(libro);
            this.isbns.push(libro.isbn);
            }else{
                console.log('Este ISBN ya inscrito')
            }
        }
    }

    
    obtenerLibroPorISBN(isbn:number): Libro{
        for(let i = 0; i < this.libros.length; i++){
            if(this.libros[i].isbn == isbn){
                return this.libros[i];
            }
        }
        console.log('estado 404');
    }

    
    obtenerLibros(autor: string, genero: string): Libro[] {
        if(autor != "" && genero != ""){
            for(let i = 0; i < this.libros.length; i++){
                if(this.libros[i].autor == autor && this.libros[i].genero == genero){
                    this.libFAuGen.push(this.libros[i]);
                }
            }
            return this.libFAuGen;
        }else if(autor != "" && genero == ""){
            for(let i = 0; i < this.libros.length; i++){
                if(this.libros[i].autor == autor){
                    this.libFAu.push(this.libros[i]);
                }
            }
            return this.libFAu;
        }else if(autor == "" && genero != ""){
            for(let i = 0; i < this.libros.length; i++){
                if(this.libros[i].genero == genero){
                    this.libFGen.push(this.libros[i]);
                }
            }
            return this.libFGen;
        }else{
            return this.libros;
        }

    }

    
    borrarLibro(isbn: number): void {
        for(let i = 0; i < this.libros.length; i++){
            if(this.libros[i].isbn == isbn){
                this.libros.splice(i, 1);
                this.isbns.splice(i, 1);
            }
        }
    }

}
