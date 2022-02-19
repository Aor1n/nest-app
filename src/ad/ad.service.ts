import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdService {
  constructor(private httpService: HttpService) {}

  // async fetchAdFormats(): Promise<any> {
  //   const response = await []
  //   return response
  // }

  adFormats(): { id: number, name: string, description: string, icon: string }[] {
    return [
      {
        id: 1, 
        name: 'Banners', 
        description: 'Open group', 
        icon: 'https://first.com'
      },
      {
        id: 2, 
        name: 'In-apps', 
        description: 'Open group', 
        icon: 'https://second.com'
      },
      {
        id: 3, 
        name: 'Back to all formats', 
        description: '', 
        icon: 'https://second.com'
      }
    ];
  }
}
