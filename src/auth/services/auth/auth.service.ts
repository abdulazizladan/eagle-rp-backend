import { Injectable } from '@nestjs/common';
import { UserLoginCredentials } from 'src/auth/dto/userLoginCredentials.dto';
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
}
