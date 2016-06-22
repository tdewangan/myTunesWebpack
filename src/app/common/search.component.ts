import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ISearchQuery } from './models/isearchQuery';

@Component({
    moduleId: module.id,
    selector: 'search-component',
    template: require('./search.component.html')
})
export class SearchComponent implements ISearchQuery {
    @Input() query: string;
    @Output() queryChange = new EventEmitter();
    constructor() { }
    search(_query: string, $event?: KeyboardEvent) {
        if (!$event || $event.keyCode === 13) {
            this.queryChange.next(_query);
        }
    }
}
