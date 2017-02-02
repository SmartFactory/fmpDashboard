import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Powered by: <a href="http://www.ebfactory.com/" target="_blank">ebFactory</a></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://roldansmirnov.com/ricardo/EBFactory/angular/ng2-admin/">Ricardo Roldan Smirnov</a> 2016</div>
        <ul class="al-share clearfix">
          <li><a href="https://www.facebook.com/roldansmirnov" target="_blank"><i class="socicon socicon-facebook"></i></a></li>
          <li><a href="https://twitter.com/RoldanSmirnov" target="_blank"><i class="socicon socicon-twitter"></i></a></li>
          <li><a href="https://plus.google.com/+RicardoRoldanSmirnov" target="_blank"><i class="socicon socicon-google"></i></a></li>
          <li><a href="https://github.com/SmartFactory" target="_blank"><i class="socicon socicon-github"></i></a></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
