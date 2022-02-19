import { Controller, Get } from '@nestjs/common';
import { AdService } from './ad.service';

@Controller()
export class AdController {
  constructor(private readonly adService: AdService) {}

  @Get()
  adFormats(): {}[] {
    return this.adService.adFormats();
  }
}
