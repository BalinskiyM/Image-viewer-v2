import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ImageEntity } from '../interfaces/image-entity.interface';
import { ImagePositionEntity } from '../interfaces/image-position-entity.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private images: ImageEntity[] = [
    { id: '1', name: 'First', path: '../../assets/images/image1.jpg', position: 'Left' },
    { id: '2', name: 'Second', path: '../../assets/images/image2.jpg', position: 'Top' },
    { id: '3', name: 'Third', path: '../../assets/images/image3.jpg', position: 'Right' },
    { id: '4', name: 'Fourth', path: '../../assets/images/image4.jpg', position: 'Top' },
  ];

  private imagePositions: ImagePositionEntity[] = [
    { id: '1', name: 'Left', x: 100, y: 150 },
    { id: '2', name: 'Right', x: 200, y: 400 },
    { id: '3', name: 'Top', x: 300, y: 450 },
  ];

  getImages(): Observable<ImageEntity[]> {
    return of(this.images);
  }

  getImagePosition(imagePositionName: string): Observable<ImagePositionEntity> {
    // ! - Added, because we should always have correct position
    const imagePosition = this.imagePositions.find((imagePosition) => imagePosition.name === imagePositionName)!;
    return of(imagePosition);
  }
}
