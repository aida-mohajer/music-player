import { Controller, Get, Param, Res } from '@nestjs/common';
import { MusicPlayerService } from './musicPlayer.service';
import { Response } from 'express';

@Controller('music')
export class MusicPlayerController {
  constructor(private musicPlayerService: MusicPlayerService) {}

  @Get('list')
  async getMusicList() {
    return await this.musicPlayerService.getMusicList();
  }

  @Get('song/:filename')
  async getSong(@Param('filename') filename: string, @Res() res: Response) {
    const song = await this.musicPlayerService.getSong(filename);
    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-length': song.length,
    });
    res.send(song);
  }

  @Get('image/:filename')
  async getImage(@Param('filename') filename: string, @Res() res: Response) {
    const image = await this.musicPlayerService.getImage(filename);
    res.set({
      'Content-Type': 'image/jpeg',
      'Content-length': image.length,
    });
    res.send(image);
  }
}
