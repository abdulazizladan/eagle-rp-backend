import { Injectable } from '@nestjs/common';
import { UserLoginCredentials } from 'src/auth/dto/userLoginCredentials.dto';

@Injectable()
export class AuthService {

    login(user: UserLoginCredentials) {
        return "Logging"; 
    }
}
