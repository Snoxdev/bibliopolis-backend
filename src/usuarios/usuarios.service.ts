import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/models/usuario';

@Injectable()
export class UsuariosService {

    usuarios: Usuario[] = [];
    correos: string[] = [];

    
    nuevoUsuario(usuario: Usuario): void {
        if(this.usuarios.length < 1){
            usuario.id = this.usuarios.length+1;
            this.usuarios.push(usuario);
            this.correos.push(usuario.correoElectronico);
        }else{
            if(this.correos.indexOf(usuario.correoElectronico) == -1){
            usuario.id = this.usuarios.length+1;
            this.usuarios.push(usuario);
            this.correos.push(usuario.correoElectronico);
            }else{
                console.log('Correo electrónico ya inscrito')
            }
        }
    }

    
    obtenerUsuarioPorID(ide:number): Usuario{
        for(let i = 0; i < this.usuarios.length; i++){
            if(this.usuarios[i].id == ide){
                return this.usuarios[i];
            }
        }
        console.log('estado 404');
    }

    
    obtenerUsuarios(): Usuario[] {
        return this.usuarios;
    }

    
    borrarUsuario(ide: number): void {
        for(let i = 0; i < this.usuarios.length; i++){
            if(this.usuarios[i].id == ide){
                this.usuarios.splice(i, 1);
                this.correos.splice(i, 1);
                for(let j = ide; j <= this.usuarios.length;j++){
                    this.usuarios[j-1].id = j;
                }
            }
        }
    }
}
