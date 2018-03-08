import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cameras = [
      { id: 11, name: 'Nikon' },
      { id: 12, name: 'Canon' },
      { id: 13, name: 'Pentax' },
      { id: 14, name: 'Olympus' },
      { id: 15, name: 'Fujifilm' },
      { id: 16, name: 'GoPro' },
      { id: 17, name: 'Sony' },
      { id: 18, name: 'Leica' },
      { id: 19, name: 'Casio' },
      { id: 20, name: 'Kodak' }
    ];
    return {cameras};
  }
}
