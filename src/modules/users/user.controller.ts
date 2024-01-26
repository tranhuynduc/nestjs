import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  getUser() {
    return `I'm user`;
  }
}