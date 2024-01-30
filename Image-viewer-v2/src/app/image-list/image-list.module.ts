import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { ImageListComponent } from './image-list.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ImageListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ImageListComponent
  ],
})
export class ImageListModule {
}
