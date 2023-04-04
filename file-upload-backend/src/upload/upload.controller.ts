import {
    Controller,
    Post,
    UseInterceptors,
    UploadedFile,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  
  @Controller('upload')
  export class UploadController {
    @Post()
    @UseInterceptors(
      FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, cb) => {
            const originalName = file.originalname.replace(/[^a-zA-Z0-9.]/g, '_');
            cb(null, originalName);
          },
        }),
        limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
      }),
    )
    async uploadFile(@UploadedFile() file) {
      if (!file) {
        return {
          success: false,
          message: 'No file provided',
        };
      }
  
      return {
        success: true,
        message: 'File uploaded successfully',
        file: {
          originalname: file.originalname,
          filename: file.filename,
          path: file.path,
        },
      };
    }
  }
  