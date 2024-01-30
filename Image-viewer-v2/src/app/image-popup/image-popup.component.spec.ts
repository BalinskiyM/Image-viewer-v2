import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagePopupComponent } from './image-popup.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImagePopupData } from './interfaces/image-popup-data.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('ImagePopupComponent', () => {
  let component: ImagePopupComponent;
  let fixture: ComponentFixture<ImagePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagePopupComponent],
      imports: [MatIconModule, MatButtonModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { position: { x: 0, y: 0 } } as ImagePopupData
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.zoomLevel).toBe(1);
    expect(component.maxZoomLevel).toBe(2);
    expect(component.minZoomLevel).toBe(0.5);
    expect(component.zoomedToFit).toBeFalse();
    expect(component.transform).toBe('translate(calc(-50% + 0px), calc(-50% + 0px)) scale(1)');
  });

  it('should set transform', () => {
    const position = { x: 100, y: 100 };
    component.data = { position } as ImagePopupData;
    component.setTransform();
    expect(component.transform).toContain(`translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`);
  });

  it('should zoom to fit', () => {
    component.zoomToFit();
    expect(component.zoomedToFit).toBeTrue();
    expect(component.zoomLevel).toBe(1);
    expect(component.transform).toBe('initial');
  });

  it('should zoom in', () => {
    component.zoomIn();
    expect(component.zoomLevel).toBe(1.25);
  });

  it('should not zoom out if already at minimum zoom level', () => {
    component.zoomLevel = 0.5;
    component.zoomOut();
    expect(component.zoomLevel).toBe(0.5);
  });

  it('should zoom out', () => {
    component.zoomLevel = 1.25;
    component.zoomOut();
    expect(component.zoomLevel).toBe(1);
  });
});
