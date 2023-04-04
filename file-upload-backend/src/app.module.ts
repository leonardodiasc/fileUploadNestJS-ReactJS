// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadController } from './upload/upload.controller'; // Import the UploadController

@Module({
  imports: [],
  controllers: [AppController, UploadController], // Add the UploadController to the controllers array
  providers: [AppService],
})
export class AppModule {}
