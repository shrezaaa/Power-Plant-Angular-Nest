import { IsString, MinLength, MaxLength, Matches, ValidateIf } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message: 'Password too weak !',
  // })
  password: string;

  @IsString()
  @ValidateIf((object, value) => value !== null)
  firstName!:string|null;

  @IsString()
  @ValidateIf((object, value) => value !== null)
  lastName!:string|null;

  @IsString()
  @ValidateIf((object, value) => value !== null)
  email!:string|null;
}
