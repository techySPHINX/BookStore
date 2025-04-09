import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
  @ApiProperty({ description: "User email address" })
  email: string;

  @ApiProperty({ description: "User password" })
  password: string;
}
