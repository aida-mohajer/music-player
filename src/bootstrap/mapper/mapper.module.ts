import { Module } from '@nestjs/common';
import { CamelCaseNamingConvention } from '@automapper/core';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
      namingConventions: new CamelCaseNamingConvention(),
    }),
  ],
  exports: [],
})
export class MapperModule {}
