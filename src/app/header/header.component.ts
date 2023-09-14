import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slogan = "Your One Step Shop For Everything."
  source = "../../assets/online-shopping-templates-app-pagefor-web-banner-infographics-hero-images-hero-image-for-website-vector-illustration-2C3DB7E.jpg"
  getSlogan = ()=>{
    return this.slogan
  }
}
