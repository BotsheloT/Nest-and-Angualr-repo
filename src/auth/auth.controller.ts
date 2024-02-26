import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AuthController {

    @Get('register')
    registeration(){
        return 'This is a register round';
    }

    @Post('register')
    register(){
        return 'This is a register round';
    }

}
