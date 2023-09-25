import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserLoginCredentials } from 'src/auth/dto/userLoginCredentials.dto';
import { AuthService } from 'src/auth/services/auth/auth.service';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {

    constructor( private authService: AuthService) {

    }

    /**
     * 
     * @param dto 
     * @returns a generated JSON Web Token to be stored and used as header in authanticating user
     */
    @ApiOperation({
        summary: "User login",
        description: "User login"
    })
    @Post("login")
    login(@Body() dto: UserLoginCredentials) {
        const credentials = dto
        //return this.authService.login( credentials )
    }
}
