import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
//import { JwtStrategy } from './strategy/jwt-strategy/jwt-strategy.service';

@Module({
    controllers: [ AuthController],
    providers: [
        AuthService, 
        //JwtStrategy
    ]
})
export class AuthModule {}
