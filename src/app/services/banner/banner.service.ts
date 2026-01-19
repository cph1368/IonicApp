import { Injectable } from '@angular/core';
import { banners } from 'src/app/dummy-data/banner';
import { Banner } from 'src/app/interfaces/banner.interface';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor() { }

  getBanners(): Banner[] {
    return banners;
  }
}
