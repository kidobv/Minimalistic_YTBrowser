import { Component, ElementRef, EventEmitter, ViewChild, Output } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './searchbar.component.html'
})

export class SearchBarComponent {
@ViewChild('searchTerm') searchTermRef: ElementRef;
@Output() search =  new EventEmitter<string>();

    onFormSubmit() {
        this.search.emit(this.searchTermRef.nativeElement.value);
    }
}
