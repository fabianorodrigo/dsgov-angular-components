import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

// Essa diretiva fará com que o elemento receba foco automaticamente
// quando não for um reload do navegador

@Directive({
  //para usar a directiva como atributo, precisa ter o selector entre colchetes
  selector: '[brAutofocus]',
})
export class AutofocusDirective {
  //para pegar o elemento DOM no qual a diretiva foi inserida,
  //deve-se incluir no construtor um atributo ElementRef

  //e a injeção do Renderer permite que não se manipule a DOM diretamente
  //Assim, mesmo com renderização do lado do servidor (onde não há DOM),
  //essa manipulação seja possível
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngAfterViewInit() {
    console.log(this.el);
    this.el.nativeElement.focus();
  }
}
