import { Iusuarios } from 'src/Users/UsuariosInterface/usuarios';
import { CreateListaUsuarioDto } from '../dto/create-lista-usuario.dto';

export class ListaUsuario extends CreateListaUsuarioDto {
  id: string;
  usuarios: Iusuarios[];
  dataCriacaoDoPerfil: string;
  startPerfil: Date;
  endPerfil: Date;
}
