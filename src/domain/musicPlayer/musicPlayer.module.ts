import { Module } from '@nestjs/common';
import { MusicPlayerController } from './musicPlayer.controller';
import { MusicPlayerService } from './musicPlayer.service';

@Module({
  exports: [MusicPlayerService],
  controllers: [MusicPlayerController],
  providers: [MusicPlayerService],
})
export class MusicPlayerModule {}
