import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BootStrapauModule } from './bootstrap/bootstrap.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
    DomainModule,
    BootStrapauModule,
  ],
  controllers: [AppController],
  providers: [DomainModule, BootStrapauModule],
})
export class AppModule {}
