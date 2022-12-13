import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { Iusuarios } from 'src/Users/UsuariosInterface/usuarios';

export const UserLogged = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Iusuarios => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
