import { Module } from '@nestjs/common';
import { MusicPlayerModule } from './musicPlayer/musicPlayer.module';

@Module({
  imports: [MusicPlayerModule],
})
export class DomainModule {}
