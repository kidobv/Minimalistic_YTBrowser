import { Component, ElementRef, EventEmitter, ViewChild, Output } from '@angular/core';


@Component({
    selector: 'app-search-bar',
    templateUrl: './searchbar.component.html'
})

export class SearchBarComponent {
// @ViewChild('searchTerm') searchTermRef: ElementRef;
@Output() search =  new EventEmitter<string>();

    onFormSubmit(form) {
        console.log(form.value.searchTerm);
        this.search.emit(form.value.searchTerm);
    }
}
