import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { UserManagementModule } from 'src/user-management/user-management.module';
//import { JwtStrategy } from './strategy/jwt-strategy/jwt-strategy.service';

@Module({
    imports: [
        UserManagementModule
    ],
    controllers: [ AuthController ],
    providers: [
        AuthService
        //JwtStrategy
    ]
})
export class AuthModule {}
