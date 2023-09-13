import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { User } from '../../models/user.model';
import { UserService } from 'src/user-management/services/user/user.service';
import { ApiConflictResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from 'src/user-management/dto/create-user.dto';
import { UpdateUserDTO } from 'src/user-management/dto/update-user.dto';

@ApiTags("Users")
@Controller("user")
export class UserController {

    constructor( private readonly userService: UserService) {

    }
    
    /**
     * 
     * @returns an observable that emits a list of users
     */
    @ApiOkResponse({description: "Success"})
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
    @ApiNoContentResponse({
        description: "No user found"
    })
    @Get(":id")
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
        description: "User with that Id already exists."
    })
    @Post("")
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
    delete(@Param("id") id: string) {
        const deleteID = id;
        return this.userService.delete(deleteID)
    }
}
