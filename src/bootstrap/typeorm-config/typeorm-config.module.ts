import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get('DB_URL'),
        port: configService.get('DB-PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        options: {
          encrypt: false,
        },
        synchronize: configService.get('CREATE_DB'), // set to false in production
        logging: true,
        // entities: [__dirname + '/entities/*.entity{.ts,.js}'],
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class TypeOrmConfigModule {}
