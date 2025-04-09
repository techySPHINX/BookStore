import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { setupSwagger } from "./config/swagger.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = Number(configService.get("PORT")) || 3000;

  setupSwagger(app);

  app.getHttpAdapter().get("/", (req, res) => {
    res.redirect("/api/docs");
  });

  app.enableCors();

  await app.listen(port);

  Logger.log(
    `Application is running on: http://localhost:${port}`,
    "Bootstrap"
  );
  Logger.log(
    `Swagger API documentation available at: http://localhost:${port}/api/docs`,
    "Bootstrap"
  );
}

bootstrap();
