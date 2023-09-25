import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private jwtService: JwtService) {
        super({
          jwtFromRequest: (req) => req.headers.authorization,
          secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload: any) {
        return payload;
    }
}
