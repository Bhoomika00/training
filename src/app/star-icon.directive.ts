import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appStarIcon]'
})
export class StarIconDirective implements OnInit {

  constructor (private ele:ElementRef ) { }
  ngOnInit(): void {
    this.ele.nativeElement.textContent += '⭐';
    
  }

}
