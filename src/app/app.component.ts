import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { } from '@angular/http/';
import { HttpClient } from '@angular/common/http';
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

  releases: any;

  constructor(private http: HttpClient) { }

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

    this.releases = this.http.get('https://api.github.com/repos/Code-Book/code-book-desktop/releases/latest',
      {
        headers: {
          'Accept': 'application/json'
        }
      }).pipe(map((res: any) => {
        return {
          source: res.html_url,
          version: res.tag_name,
          linux: res.assets
            .filter(assetData => assetData.name.endsWith('linux.deb'))
            .map(assetData => assetData.browser_download_url)[0],
          mac: res.assets
            .filter(assetData => assetData.name.endsWith('mac.dmg'))
            .map(assetData => assetData.browser_download_url)[0],
          windows: res.assets
            .filter(assetData => assetData.name.endsWith('win.exe'))
            .map(assetData => assetData.browser_download_url)[0]
        };
      }));
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

  openLink(link: string) {
    window.open(link, '_blank');
  }

}
