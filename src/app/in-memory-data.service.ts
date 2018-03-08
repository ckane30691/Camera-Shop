import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cameras = [
      { id: 11, name: 'Nikon', url: 'https://s3.amazonaws.com/camera-shop/Nikon.jpg' },
      { id: 12, name: 'Canon', url: 'https://s3.amazonaws.com/camera-shop/canon.jpg'},
      { id: 13, name: 'Pentax', url: 'https://s3.amazonaws.com/camera-shop/pentax.jpg'},
      { id: 14, name: 'Olympus', url: 'https://s3.amazonaws.com/camera-shop/Olympus.jpg' },
      { id: 15, name: 'Fujifilm', url: 'https://s3.amazonaws.com/camera-shop/fujifilm.jpg'},
      { id: 16, name: 'GoPro', url: 'https://s3.amazonaws.com/camera-shop/kodak.jpg'},
      { id: 17, name: 'Sony', url:'https://s3.amazonaws.com/camera-shop/Sony.jpg' },
      { id: 18, name: 'Leica', url: 'https://s3.amazonaws.com/camera-shop/Leica.jpg' },
      { id: 19, name: 'Casio', url: 'https://s3.amazonaws.com/camera-shop/Casio.jpg' },
    ];
    return {cameras};
  }
}
