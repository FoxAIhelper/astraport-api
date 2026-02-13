import { Injectable } from '@nestjs/common';

@Injectable()
export class ContractsService {
  getStatus() {
    return { module: 'contracts', status: 'ok' };
  }
}
