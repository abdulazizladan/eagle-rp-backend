import { Module } from '@nestjs/common';
import { MyGateway } from './gateway';
import { MessageBody, SubscribeMessage } from '@nestjs/websockets';

@Module({})
export class GatewayModule {
    providers: [MyGateway]

    @SubscribeMessage("new Message")
    onMessage(@MessageBody() message: any) {
        console.log(message)
    }
}
