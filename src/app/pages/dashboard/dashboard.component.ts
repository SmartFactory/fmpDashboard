import {Component, ViewEncapsulation} from '@angular/core';

    //import {TreeNode} from 'primeng/primeng';


@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor() {
  }

/*
  selectedFiles: TreeNode[];

  files: TreeNode[]  = 
    [
        {
            "label": "A", //"Documents",
            "data": "Documents Folder",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": 
              [
                {
                    "label": "A01", //"Work",
                    "data": "Work Folder",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                      {"label": "A0101", "icon": "fa-file-word-o", "data": "Expenses Document"},
                      {"label": "A0102", "icon": "fa-file-word-o", "data": "Resume Document"}
                    ]
                },
                {
                    "label": "A02", //"Home",
                    "data": "Home Folder",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                      {"label": "A0201", "icon": "fa-file-word-o", "data": "Invoices for this month"}
                    ]
                }
              ]
        },
        {
            "label": "B",
            "data": "Pictures Folder",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": 
              [
                {"label": "B01", "icon": "fa-file-image-o", "data": "Barcelona Photo"},
                {"label": "B02", "icon": "fa-file-image-o", "data": "PrimeFaces Logo"},
                {"label": "B03", "icon": "fa-file-image-o", "data": "PrimeUI Logo"}
              ]
        },
        {
            "label": "C",
            "data": "Movies Folder",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": 
              [
                {
                    "label": "C01",
                    "data": "Pacino Movies",
                    "children": [
                      {"label": "C0101", "icon": "fa-file-video-o", "data": "Scarface Movie"},
                      {"label": "C0102", "icon": "fa-file-video-o", "data": "Serpico Movie"}
                    ]
                },
                {
                    "label": "C02",
                    "data": "De Niro Movies",
                    "children": [
                      {"label": "C0201", "icon": "fa-file-video-o", "data": "Goodfellas Movie"},
                      {"label": "C0202", "icon": "fa-file-video-o", "data": "Untouchables Movie"}
                    ]
                }
              ]
        }
    ];
*/


}
