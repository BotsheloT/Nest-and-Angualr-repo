import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { Repository } from 'typeorm';
import { IUser } from './models/user.interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ){    
    }

    // Function to create a new user
    async create(user: IUser){
        return await this.userRepository.save(user);
    }
}
