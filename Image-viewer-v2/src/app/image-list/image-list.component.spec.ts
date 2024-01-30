import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageListComponent } from './image-list.component';
import { ImageService } from '../services/image-service.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { ImageEntity } from '../interfaces/image-entity.interface';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

describe('ImageListComponent', () => {
  let component: ImageListComponent;
  let fixture: ComponentFixture<ImageListComponent>;
  let mockImageService: jasmine.SpyObj<ImageService>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

  const image: ImageEntity = { id: '1', name: 'Image 1', path: 'path/to/image1', position: 'Top' };

  beforeEach(async () => {
    mockImageService = jasmine.createSpyObj('ImageService', ['getImages', 'getImagePosition']);
    mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [ImageListComponent],
      imports: [MatListModule, MatIconModule, MatButtonModule],
      providers: [
        { provide: ImageService, useValue: mockImageService },
        { provide: MatDialog, useValue: mockMatDialog }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch images on init', () => {
    const images: ImageEntity[] = [image];
    mockImageService.getImages.and.returnValue(of(images));

    component.ngOnInit();
    expect(mockImageService.getImages).toHaveBeenCalled();
    expect(component.images$).toBeDefined();
  });
});
