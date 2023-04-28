/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUser(): any {
    return this.userService.getAllUser();
  }

  @Post()
  createUser(body) {
    return this.userService.createUser(body);
  }
}
