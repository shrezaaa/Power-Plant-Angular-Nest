import { Repository, EntityRepository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { firstName, lastName, email, username, password } =
      authCredentialsDto;

    const user = new User();
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;

    try {
      await user.save();
    } catch (error) {
      if (error.number === 2627) {
        // handle duplicate username with code
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(
    authCredentialsDto: AuthCredentialsDto
  ): Promise<any> {
    const { username, password } = authCredentialsDto;

    const user = await this.findOne({ username });

    if (user && (await user.validatePassword(password))) {
      return user;
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
