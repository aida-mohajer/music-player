import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from './typeorm-config/typeorm-config.module';
import { ConfigModule } from '@nestjs/config';
import { MapperModule } from './mapper/mapper.module';

@Module({
  imports: [
    TypeOrmConfigModule,
    MapperModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class BootStrapauModule {}
