import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { RiskModule } from './risk/risk.module';
import { ContractsModule } from './contracts/contracts.module';

@Module({
  imports: [AuthModule, PortfolioModule, RiskModule, ContractsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
