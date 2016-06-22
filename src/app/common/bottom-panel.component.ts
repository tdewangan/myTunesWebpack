import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bottom-panel-component',
    template: require('./bottom-panel.component.html'),
    styles: [`
        footer {
            position: fixed;
            bottom : 0;
            width : 100%;
            height : 50px;
            background-color: grey;
            color: white;
        }
        .container {
            height : 50px;
        }
        a {
            height : 50px;
            line-height : 50px;
            margin-right : 5em;
            color: white;
        }
    `]
})
export class BottomPanelComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
