import { Injectable } from "@nestjs/common";
import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<{ user?: any }>();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const user: { id: string; role: string } | undefined = request.user;

    if (!user) {
      throw new UnauthorizedException();
    }

    return Promise.resolve(true);
  }
}
