import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserLoginCredentials } from 'src/auth/dto/userLoginCredentials.dto';
import { UserEntity } from 'src/user-management/entities/User.entity';
import { Repository } from 'typeorm';
//import { JwtStrategy } from 'src/auth/strategy/jwt-strategy/jwt-strategy.service';

@Injectable()
export class AuthService {

    /**constructor(private jwtService: JwtStrategy) {

    }

    login(user: UserLoginCredentials) {
        return "Logging"; 
    }

    validateToken(token: string) {
        
        const payload = this.jwtService.validate(token);
        return payload;
    }**/

    //constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}
}
