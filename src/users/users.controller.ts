// src/users/users.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return { message: 'This will return all users' };
  }
}
