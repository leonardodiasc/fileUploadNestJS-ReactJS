export declare class UploadController {
    uploadFile(file: any): Promise<{
        success: boolean;
        message: string;
        file?: undefined;
    } | {
        success: boolean;
        message: string;
        file: {
            originalname: any;
            filename: any;
            path: any;
        };
    }>;
}
