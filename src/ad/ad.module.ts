import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AdController } from './ad.controller';
import { AdService } from './ad.service';

@Module({
  imports: [HttpModule],
  controllers: [AdController],
  providers: [AdService],
})
export class AppModule {}
