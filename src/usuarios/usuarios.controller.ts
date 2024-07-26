import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Usuario } from 'src/models/usuario'
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {

    constructor(private readonly usuarioService: UsuariosService){}

    @Post()
    nuevoUsuario(@Body() usuario:Usuario): void {
        this.usuarioService.nuevoUsuario(usuario);
        console.log('status 200')
    }

    @Get(':id')
    obtenerUsuarioPorID(@Param('id') ide:number): Usuario{
        return this.usuarioService.obtenerUsuarioPorID(ide);
    }

    @Get()
    obtenerUsuarios(): Usuario[] {
        return this.usuarioService.obtenerUsuarios();
    }

    @Delete(':id')
    borrarUsuario(@Param('id') ide: number): void {
        this.usuarioService.borrarUsuario(ide);
        console.log('status 200');
    }
}


