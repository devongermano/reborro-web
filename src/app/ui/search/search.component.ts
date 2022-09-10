import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { FocusMonitor } from "@angular/cdk/a11y";

@Component({
  selector: 'ui-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  focused = false;

  constructor(fb: FormBuilder,
              private fm: FocusMonitor,
              private elRef: ElementRef<HTMLElement>) {

  }

  ngOnDestroy() {
    this.fm.stopMonitoring(this.searchInput.nativeElement);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.fm.monitor(this.searchInput.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      console.log(this.focused);
      // this.stateChanges.next();
    });
  }

}
