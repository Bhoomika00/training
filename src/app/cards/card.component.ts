import { Component, ContentChild, ContentChildren, ElementRef, Renderer2,  ViewChild } from '@angular/core';


@Component({
  selector: 'card',
  template: `
    <div class="card">
      <ng-content select="header"></ng-content>
      <ng-content select="main"></ng-content>
      <ng-content select="footer"></ng-content>
         </div>
  `,
  styles: [
    ` .card {  margin: 5px; background-color: aqua  }
    `
  ]
})
//this is child component
export class CardComponent {

  @ContentChild("header") cardContentHeader!: ElementRef;
  @ViewChild("header") cardViewHeader!: ElementRef;

  @ContentChild("main") mainContentData!: ElementRef;
  @ViewChild("main") mainViewData!: ElementRef;

  @ContentChild("footer") footerContentData!:ElementRef;
  @ViewChild("footer") footerViewData!:ElementRef;




  constructor(private renderor:Renderer2) {
    console.log("CardComponent ->constructor "+this.cardContentHeader)
    console.log("CardComponent ->constructor "+this.mainContentData)
    console.log("CardComponent ->constructor "+this.footerContentData)
    
  }

  ngOnChanges() {
    //first time returns undfined
    console.log("CardComponent ->ngOnChanges "+this.cardContentHeader)
  }

  ngOnInit() {
    //returns undfined
    console.log("CardComponent ->ngOnInit "+this.cardContentHeader)
  }

  ngDoCheck() {
    //first time returns undfined
    console.log("CardComponent ->ngDoCheck "+this.cardContentHeader);
    console.log("CardComponent ->ngDoCheck "+this.mainContentData);
    console.log("CardComponent ->ngDoCheck "+this.footerContentData);

  }

  ngAfterContentInit() {
    //cardContentHeader is available here
    console.log("CardComponent ->ngAfterContentInit-contentHeader "+this.cardContentHeader);
    console.log("CardComponent ->ngAfterContentInit-main "+this.mainContentData);
    console.log("CardComponent ->ngAfterContentInit-footer "+this.footerContentData)

    this.renderor.setStyle(this.cardContentHeader.nativeElement,"color","red");
    this.renderor.setStyle(this.footerContentData.nativeElement,"color","black");
    this.renderor.setStyle(this.mainContentData.nativeElement,"color","green");

    
  }

  ngAfterContentChecked() {
    //cardContentHeader is available here
    console.log("CardComponent ->ngAfterContentInit-contentHeader "+this.cardContentHeader)
  }

  ngAfterViewInit() {
    console.log("CardComponent ->ngAfterViewInit-viewHeader "+this.cardViewHeader);
    console.log("CardComponent ->ngAfterViewInit-mainview "+this.mainViewData);
    console.log("CardComponent ->ngAfterViewInit-footerview "+this.footerViewData)
  }

  ngAfterViewChecked() {
    console.log("CardComponent ->ngAfterViewChecked-viewHeader "+this.cardViewHeader);
    console.log("CardComponent ->ngAfterViewChecked-mainView "+this.mainViewData);
    console.log("CardComponent ->ngAfterViewChecked-footerView "+this.footerViewData)
  }




}