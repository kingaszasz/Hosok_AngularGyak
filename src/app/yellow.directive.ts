import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { Hero } from './hero';

@Directive({
  selector: '[appYellow]'
})
export class YellowDirective {

  constructor(
    private tr: TemplateRef<any>,
    private vc: ViewContainerRef
  ) {
    this.vc.createEmbeddedView(this.tr);
  }

  @Input() set appYellow(c: Hero) {
    console.log("Az appYellow módosult:", c);
  }

}
