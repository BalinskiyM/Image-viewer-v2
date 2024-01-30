import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, take, throwError } from 'rxjs';
import { ImageEntity } from '../interfaces/image-entity.interface';
import { ImageService } from '../services/image-service.service';
import { ImagePopupComponent } from '../image-popup/image-popup.component';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ImageListComponent {
  images$!: Observable<ImageEntity[]>;

  constructor(private imageService: ImageService,
              private dialogRef: MatDialog) {
  }

  ngOnInit(): void {
    this.images$ = this.imageService.getImages();
  }

  viewImage(image: ImageEntity): void {
    this.imageService.getImagePosition(image.position)
      .pipe(
        take(1),
        catchError((err) => {
          return throwError(err);
        })
      ).subscribe((position) => {
      if (position) {
        this.dialogRef.open(ImagePopupComponent, {
          data: {
            name: image.name,
            path: image.path,
            position
          },
          width: '600px',
          height: '550px'
        })
      }
    });
  }

}
