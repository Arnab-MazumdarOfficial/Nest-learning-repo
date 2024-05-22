import { Module } from '@nestjs/common';
import { UserAuthService } from './user-auth.service';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[UserModule],
  providers: [UserAuthService],
  exports:[UserAuthService]
})
export class UserAuthModule {}
