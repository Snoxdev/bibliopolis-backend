import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { Libro } from 'src/models/libro'

@Controller('libros')
export class LibrosController {

    constructor(private readonly libroService: LibrosService){}

    @Post()
    nuevolibro(@Body() libro:Libro): void {
        this.libroService.nuevoLibro(libro);
    }

    @Get(':isbn')
    obtenerLibroPorISBN(@Param('isbn') isbn:number): Libro{
        return this.libroService.obtenerLibroPorISBN(isbn);
    }

    @Get()
    obtenerLibros(@Query('autor') autor: string, @Query('genero') genero: string): Libro[] {
        return this.libroService.obtenerLibros(autor, genero);
    }

    
    @Delete(':isbn')
    borrarUsuario(@Param('isbn') isbn: number): void {
        this.libroService.borrarLibro(isbn);
    }
}
