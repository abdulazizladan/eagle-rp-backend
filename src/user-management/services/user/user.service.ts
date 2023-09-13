import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../../models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user-management/entities/User.entity';
import { Repository } from 'typeorm';
import { Observable, catchError, from, of, toArray } from 'rxjs';
import { UpdateUserDTO } from 'src/user-management/dto/update-user.dto';

@Injectable()
export class UserService {

    constructor(
       @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {

    }

    public users: User[] = [
    ]

    /**
     * Get all users
     * @returns User[]
     */
    getAll(): Observable<UserEntity[]> {
        const users = this.userRepository.find();
        return from(users).pipe();
    }

    /**
     * Get a single user by ID
     * @param id The user ID
     * @returns A single user with unque ID
     */
    getById(id: string): Observable<UserEntity> {
        const searchID = id;
        const user = this.userRepository.findOne({where: {id : searchID}});
        if(!user) throw new NotFoundException();
        return from(user);
    }

    /**
     * Add a new user
     * @param user The user data
     * @returns The newly created user
     */
    async add( user: User ): Promise<UserEntity> {
        const exists = await this.userRepository.findOne({where: {email: user.email}});
        if(exists){
            throw new ConflictException()
        }
        const newUser = new UserEntity();
        newUser.id = user.id;
        newUser.email = user.email;
        newUser.firstName = user.firstName;
        newUser.middleName = user.middleName;
        newUser.lastName = user.lastName;
        newUser.password = user.password;
        return this.userRepository.save(newUser)
        
    }

    /**
     * Update an existing user.
     * @param id The user ID.
     * @param user The updated user data.
     * @returns The updated user.
    */
    async update(id: string, user: UpdateUserDTO): Promise<UserEntity> {
        const searchID = id;
        const userToUpdate: UserEntity = await this.userRepository.findOne({where: {id : searchID}});
        if(!userToUpdate) throw new NotFoundException();
        userToUpdate.firstName = user.firstName;
        return //this.userRepository.update(userToUpdate)
    }

    /**
     * Delete  user by ID
     * @param id The User Id
     */
    async delete(id: string) {
        const searchID = id;
        const found = await this.userRepository.findOne({where: {id : searchID}});
        if(!found) throw new NotFoundException()
        return this.userRepository.remove(found);
    }
}

