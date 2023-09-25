import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../../models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user-management/entities/User.entity';
import { Repository } from 'typeorm';
import { Observable, catchError, from, map, of, tap, toArray } from 'rxjs';
import { UpdateUserDTO } from 'src/user-management/dto/update-user.dto';
import { UserView } from 'src/user-management/entities/views/user.view';
import { Status } from 'src/user-management/enums/status.enum';

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
        return from(
            this.userRepository.find()
        ).pipe(
            map((users) => {
                if(users.length === 0){
                    throw new NotFoundException("No users found.")
                }
                return users;
            })
        )
    }

    /**
     * Get a single user by ID
     * @param id The user ID
     * @returns A single user with unque ID
     */
    getById(id: string): Observable<UserEntity> {
        return from(
            this.userRepository.findOne({where: {id: id}})
        ).pipe(
            tap((user) => {
                if(!user) {
                    throw new NotFoundException("User not found")
                }
            }
            )
        )
    }

    /**
     * Add a new user
     * @param user The user data
     * @returns The newly created user
     */
    async add( user: User ): Promise<UserEntity> {
        const exists = await this.userRepository.findOne({where: {email: user.email}});
        if(exists){
            throw new ConflictException(`User with email : ${user.email} already exists`)
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
        const userUpdate = user;
        const userToUpdate: UserEntity = await this.userRepository.findOne({where: {id : searchID}});
        if(!userToUpdate) throw new NotFoundException();
        if(user.email != ""){ userToUpdate.email = user.email};
        if(user.firstName != ""){ userToUpdate.firstName = user.firstName};
        if(user.middleName != ""){ userToUpdate.middleName = user.middleName};
        if(user.lastName != ""){ userToUpdate.lastName = user.lastName};
        if(user.password != ""){ userToUpdate.password = user.password};
        if(user.status == "active"){
            userToUpdate.status = Status.active
        }else if(user.status =="suspended") {
            userToUpdate.status = Status.suspended
        }else {
            userToUpdate.status = Status.deleted
        }
        this.userRepository.update(id, 
            {
                ...userUpdate, 
                status: Status.active,
                dateLastEdited: Date.now(),
            });
        return await userToUpdate;
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

