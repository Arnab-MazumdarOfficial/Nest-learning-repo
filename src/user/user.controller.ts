import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Req, Res, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { userDto } from 'src/DTO and Entities/user.dto';
import { UserService } from './user.service';
import { FastifyRequest, FastifyReply } from 'fastify';
import { updateUserDto } from 'src/DTO and Entities/update-user.dto';
import { createUserDto } from 'src/DTO and Entities/create-user.dto';
import { serialize  } from 'src/interceptor/serialize.interceptor';

@ApiTags('auth')
@Controller('auth')
@serialize(userDto)
export class UserController {
    constructor(private userService: UserService) { }

    @Post('sign-up')
    async createUser(@Body() body: createUserDto, @Req() request: FastifyRequest, @Res() reply: FastifyReply) {
        try {
            console.log("body-------->>", body);
            const response = await this.userService.create(body.email, body.password);
            reply
                .status(HttpStatus.OK)
                .header('Content-Type', 'application/json')
                .send({
                    'status': 'success',
                    'results': response,
                    'massage': "successfull"
                })
        } catch (error) {
            console.log("error=======+>", error);
            reply
                .status(error.status ? error.status : HttpStatus.BAD_REQUEST)
                .header('Content-Type', 'application/json')
                .send({
                    'status': 'error',
                    'results': error.results ? error.results : undefined,
                    'message': error.message ? error.message : 'Something Went Wrong !!'
                })
        }

    }

    @serialize(userDto)
    @Get('/:id')
    async findUser(@Param('id') id: string, @Req() request: FastifyRequest, @Res() reply: FastifyReply) {
        try {
            console.log("Handeler is running");
            const user = await this.userService.findOne(parseInt(id))
            if (!user) {
                throw new Error('User Not Found')
            }
            reply
                .status(HttpStatus.OK)
                .header('Content-Type', 'application/json')
                .send({
                    'status': 'success',
                    'results': user,
                    'massage': "successfull"
                })
        } catch (error) {
            console.log("error=======+>", error);
            reply
                .status(error.status ? error.status : HttpStatus.BAD_REQUEST)
                .header('Content-Type', 'application/json')
                .send({
                    'status': 'error',
                    'results': error.results ? error.results : undefined,
                    'message': error.message ? error.message : 'Something Went Wrong !!'
                })
        }

    }

    @Get('find-all-user-by-email')
    async findAllUser(@Query('email') email: string, @Req() request: FastifyRequest, @Res() reply: FastifyReply) {
        try {
            const user = await this.userService.find(email);
            reply
                .status(HttpStatus.OK)
                .header('Content-Type', 'application/json')
                .send({
                    'status': 'success',
                    'results': user,
                    'massage': "successfull"
                })
        } catch (error) {
            console.log("error=======+>", error);
            reply
                .status(error.status ? error.status : HttpStatus.BAD_REQUEST)
                .header('Content-Type', 'application/json')
                .send({
                    'status': 'error',
                    'results': error.results ? error.results : undefined,
                    'message': error.message ? error.message : 'Something Went Wrong !!'
                })
        }

    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string, @Req() request: FastifyRequest, @Res() reply: FastifyReply) {
        try {
            const user = await this.userService.remove(parseInt(id));
            reply
                .status(HttpStatus.OK)
                .header('Content-Type', 'application/json')
                .send({
                    'status': 'success',
                    'results': user,
                    'massage': "successfull"
                })
        } catch (error) {
            console.log("error=======+>", error);
            reply
                .status(error.status ? error.status : HttpStatus.BAD_REQUEST)
                .header('Content-Type', 'application/json')
                .send({
                    'status': 'error',
                    'results': error.results ? error.results : undefined,
                    'message': error.message ? error.message : 'Something Went Wrong !!'
                })
        }

    }

    @Patch('/:id')
    async updateUser(@Param('id') id: string, @Body() body: updateUserDto, @Req() request: FastifyRequest, @Res() reply: FastifyReply) {
        try {
            const user = await this.userService.update(parseInt(id), body);
            reply
                .status(HttpStatus.OK)
                .header('Content-Type', 'application/json')
                .send({
                    'status': 'success',
                    'results': user,
                    'massage': "successfull"
                })
        } catch (error) {
            console.log("error=======+>", error);
            reply
                .status(error.status ? error.status : HttpStatus.BAD_REQUEST)
                .header('Content-Type', 'application/json')
                .send({
                    'status': 'error',
                    'results': error.results ? error.results : undefined,
                    'message': error.message ? error.message : 'Something Went Wrong !!'
                })
        }

    }
}
