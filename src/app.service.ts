import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  mixAdFormatsByUI(): { id: number, name: string, description: string, icon: string }[] {
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
