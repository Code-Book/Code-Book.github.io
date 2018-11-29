import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Code-Book-Landing';
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  bg_color;
  flipDiv = false;

  ngOnInit(): void {

    this.galleryOptions = [
      {
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true,
        previewAutoPlay: true,
        previewAutoPlayPauseOnHover: true
      },
      {
        width: '900px',
        height: '750px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Fade
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.onChange(true);
  }

  onChange(event) {
    if (event) {
      this.loadImages('DarkTheme');
      this.bg_color = '#FFFFFF';
    } else {
      this.loadImages('LightTheme');
      this.bg_color = '#616161';
    }
  }

  loadImages(theme: string) {
    this.galleryImages = [];
    this.getImages(theme).forEach(image => {
      this.galleryImages.push({
        big: image,
        small: image,
        medium: image
      });
    });
  }

  getImages(theme: string) {
    const basePath = `assets/images/${theme}`;
    return [
      `${basePath}/Landing.png`,
      `${basePath}/Listing.png`,
      `${basePath}/Search.png`,
      `${basePath}/Settings.png`,
      `${basePath}/Generate 1.png`,
      `${basePath}/Generate 2.png`,
      `${basePath}/Generate 3.png`,
      `${basePath}/Help.png`
    ];
  }
}
