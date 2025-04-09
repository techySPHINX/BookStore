import {
 Injectable,
 CanActivate,
 ExecutionContext,
 UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {
 constructor(private readonly jwtService: JwtService) {}

 canActivate(context: ExecutionContext): boolean {
  const request = context.switchToHttp().getRequest();
  const authHeader = request.headers.authorization;

  // Check if Auth header is present
  if (!authHeader) {
   throw new UnauthorizedException("Authorization header missing");
  }

  const token = authHeader.split(" ")[1];
  try {
   // Verify  token using the JwtService
   const decoded = this.jwtService.verify(token, {
    secret: process.env.JWT_SECRET, 
   });

   // Attach decoded user information to the request object
   request.user = decoded;
   return true; 
  } catch (error) {
   throw new UnauthorizedException("Invalid or expired token");
  }
 }
}
