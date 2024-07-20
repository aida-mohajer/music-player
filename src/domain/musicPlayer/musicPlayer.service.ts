import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { promises as fs } from 'fs';

@Injectable()
export class MusicPlayerService {
  private musicDirectory = join(
    process.cwd(),
    'src',
    'domain',
    'public',
    'songs',
  );
  private imageDirectory = join(
    process.cwd(),
    'src',
    'domain',
    'public',
    'images',
  );

  async getMusicList() {
    const files = await fs.readdir(this.musicDirectory);
    return files.filter((file) => file.endsWith('.mp3'));
  }

  async getSong(fileName: string): Promise<Buffer> {
    const filePath = join(this.musicDirectory, fileName);
    if (!(await fs.stat(filePath)).isFile()) {
      throw new Error('song not found');
    }
    return await fs.readFile(filePath);
  }

  async getImage(fileName: string): Promise<Buffer> {
    const filePath = join(this.imageDirectory, fileName);
    if (!(await fs.stat(filePath)).isFile()) {
      throw new Error('image not found');
    }
    return await fs.readFile(filePath);
  }
}
