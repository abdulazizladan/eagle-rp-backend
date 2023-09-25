import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { User } from '../../models/user.model';
import { UserService } from 'src/user-management/services/user/user.service';
import { ApiConflictResponse, ApiCreatedResponse, ApiFoundResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from 'src/user-management/dto/create-user.dto';
import { UpdateUserDTO } from 'src/user-management/dto/update-user.dto';
import { UserEntity } from 'src/user-management/entities/User.entity';

@ApiTags("Users")
@Controller("user")
export class UserController {

    constructor( private readonly userService: UserService) {

    }
    
    /**
     * 
     * @returns an observable that emits a list of users
     */
    @ApiOkResponse(
        {
            type: User, 
            isArray: true,
            description: "Users list retrieved successfully."
        })
    @ApiNotFoundResponse({description: "No users found."})
    @ApiOperation({
        summary: "Get all users",
        description: "Get a list of all users",
        tags: ["users"]
    })
    @Get("")
    getAll() {
        return this.userService.getAll();
    }

    /**
     * 
     * @param id 
     * @returns An observable that emits a single user
     */
    @ApiOperation({
        summary: "Get user by ID",
        description: "Get a single user by ID",
        tags: ["users"]
    })
    @Get(":id")
    @ApiNotFoundResponse({
        type: "string",
        description: "No user found"
    })
    @ApiFoundResponse({
        type: User,
        description: "User found"
    })
    getByID(@Param('id') id: string) {
        const getID = id;
        return this.userService.getById(getID);
    }

    /**
     * 
     * @param dto 
     * @returns An observable that emits a single user
     */
    @ApiOperation({
        summary: "Add user",
        description: "Add a new user",
        tags: ["users"]
    })
    @ApiConflictResponse({
        type: "string",
        description: "User with that Id already exists."
    })
    @Post("")
    @ApiCreatedResponse({type: User, description: "User added successfully"})
    add( @Body() dto: CreateUserDTO) {
        const newUser = dto;
        return this.userService.add(newUser)
    }

    /**
     * 
     * @param id 
     * @param user 
     * @returns An observable that emits a single user
     */
    @ApiOperation({
        summary: "Update user info",
        description: "Update user info",
        tags: ["users"]
    }) 
    @Patch(":id")
    @ApiOkResponse({type: User, description: "Update successful"})
    update(@Param("id") id: string, @Body() user: UpdateUserDTO) {
        const searchID = id;
        const newUser = user;
        return this.userService.update(searchID, user)
    }

    /**
     * 
     * @param id 
     * @returns An observable that emits a single user
     */
    @ApiOperation({
        summary: "Delete user by ID",
        description: "Delete user by ID",
        tags: ["users"]
    })
    @Delete(":id")
    @ApiNotFoundResponse({description: "User not found"})
    @ApiOkResponse({type: User, description: "User deleted successfully"})
    delete(@Param("id") id: string) {
        const deleteID = id;
        return this.userService.delete(deleteID)
    }
}
