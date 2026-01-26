import { Directive, ElementRef, Renderer2, AfterViewInit } from "@angular/core";

@Directive({
  selector: "[appScrollReveal]",
})
export class ScrollRevealDirective implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, "visible");
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(this.el.nativeElement);
  }
}
