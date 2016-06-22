import { Component, OnInit } from '@angular/core';
import { BottomPanelComponent } from './bottom-panel.component';

@Component({
    moduleId: module.id,
    selector: 'welcome-component',
    template: require('./welcome.component.html'),
    directives: [BottomPanelComponent]
})
export class WelcomeComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('WelcomeComponent');
    }

}
