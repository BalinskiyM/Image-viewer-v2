import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImagePopupData } from './interfaces/image-popup-data.interface';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.scss']
})
export class ImagePopupComponent implements OnInit {
  @ViewChild('imgElementTmpl', {static: true}) imgElementRef!: ElementRef<HTMLImageElement>;
  zoomLevel = 1;
  maxZoomLevel = 2;
  minZoomLevel = 0.5;
  zoomedToFit = false;
  transform: string = 'initial';

  constructor(@Inject(MAT_DIALOG_DATA) public data: ImagePopupData) {
  }

  ngOnInit() {
    this.setTransform();
  }

  setTransform(): void {
    const translateX = `calc(-50% + ${this.data.position.x}px)`;
    const translateY = `calc(-50% + ${this.data.position.y}px)`;

    this.transform = this.zoomedToFit
      ? `scale(${this.zoomLevel})`
      : `translate(${translateX}, ${translateY}) scale(${this.zoomLevel})`;
  }

  zoomToFit(): void {
    this.zoomedToFit = true;
    this.zoomLevel = 1;
    this.transform = 'initial';
  }

  zoomIn(): void {
    if (this.zoomLevel < this.maxZoomLevel) {
      this.zoomLevel += 0.25;
      this.setTransform();
    }
  }

  zoomOut(): void {
    if (this.zoomedToFit && this.zoomLevel === 1) {
      return;
    }

    if (this.zoomLevel > this.minZoomLevel) {
      this.zoomLevel -= 0.25;
      this.setTransform();
    }
  }
}
