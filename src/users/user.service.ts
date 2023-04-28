/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUser() {
    return [
      {
        id: 1,
        username: 'Thang98',
        age: 25,
      },
      {
        id: 2,
        username: 'Thang98',
        age: 25,
      },
      {
        id: 3,
        username: 'Thang98',
        age: 25,
      },
    ];
  }

  createUser(body) {
    return {
      message: 'Success',
      data: body,
    };
  }
}
