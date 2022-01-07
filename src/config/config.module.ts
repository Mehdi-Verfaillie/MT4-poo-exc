import { ConfigModule } from '@nestjs/config';

export const __ConfigModule = ConfigModule.forRoot({
  envFilePath: ['.env'],
});
