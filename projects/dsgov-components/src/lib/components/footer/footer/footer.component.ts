import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InformacaoLicenca } from '../../base';
import { BaseComponent } from './../../base/base/base.component';
import { Link } from '../../base';

@Component({
  selector: 'br-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent extends BaseComponent implements OnInit {
  // Indica se o padrão de cores é invertido. Se TRUE, será apendado ao atributo
  // "class" o valor "[inverted]", o que deixa o rodapé na cor branca com fonte azul(invertido)
  // Se FALSE, o rodapé fica padrão: fundo azul e fonte branca
  @Input() invertido: boolean = false;
  // Se TRUE, a classe 'horizontal' é acionada ao elemento br-list

  @Input() horizontal: boolean = true;
  // url da imagem que aparece no rodapé
  @Input() urlImagem: string;
  @Input() alt: string = 'gov.br';
  // logo onde, por default, é incluído o logo/link "Acesso à Informação"
  @Input()
  urlImagem2: string;
  @Input()
  url2: string = 'http://www.acessoainformacao.gov.br/';
  @Input() alt2: string = 'Acesso à Informação';
  // logo onde, por default, é incluído o logo/link "Governo Federal"
  @Input()
  urlImagem3: string;
  @Input()
  url3: string = 'http://www.brasil.gov.br/';
  @Input() alt3: string = 'Governo Federal';

  // grupos de links do rodapé
  grupos: string[];
  @Input() gruposLinks: { [nomeGrupo: string]: Link[] } = {};
  // links para os perfis do órgão em redes sociais
  @Input() linksRedesSociais: Link[] = [];

  // Indica a exibição ou não da informação sobre licença no menu
  @Input() exibeInformacaoLicenca: boolean = true;
  // Label de apresentação e nome da licença utilizada
  @Input() informacaoLicenca: InformacaoLicenca = new InformacaoLicenca();

  /*** As demais características de aparência do componente
   são informadas via atributo "ngClass" ***/
  @Input()
  ngClass: string | string[] | Set<string> | { [klass: string]: any };

  constructor(private domSanitizer: DomSanitizer) {
    super();
  }

  ngOnInit(): void {
    this.grupos = Object.keys(this.gruposLinks);
  }

  //gov.br negativo
  readonly base64Imagem1Default = this.domSanitizer.bypassSecurityTrustUrl(
    `data:image/png;base64,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`
  );

  //Acesso à Informação
  readonly base64Imagem2Default = this.domSanitizer.bypassSecurityTrustUrl(
    `data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20117%2049%22%20height%3D%2249%22%20width%3D%22117%22%20shape-rendering%3D%22geometricPrecision%22%20text-rendering%3D%22geometricPrecision%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%3C!%5BCDATA%5B.a%20%7Bfont%3A%20normal%20bold%2011px%20Open%20Sans%2C%20sans-serif%3B%7D%5D%5D%3E%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ccircle%20cx%3D%2222%22%20cy%3D%2223%22%20r%3D%2222%22%20fill%3D%22%23222%22%2F%3E%3Cpath%20style%3D%22stroke%3A%23fff%3Bstroke-width%3A9%3Bstroke-linecap%3Around%3B%22%20d%3D%22m%2022%2C23%20v%2013%22%2F%3E%3Cpath%20style%3D%22stroke%3A%23222%3Bstroke-width%3A4%3Bstroke-linejoin%3Around%3B%22%20d%3D%22m%204%2C43%203%2C-6%204%2C3%20z%22%2F%3E%3Ccircle%20r%3D%224.5%22%20cy%3D%2211%22%20cx%3D%2222%22%20fill%3D%22%23fff%22%2F%3E%3Cg%20fill%3D%22%23222%22%3E%3Ctext%20x%3D%2247%22%20y%3D%2222%22%3E%3Ctspan%20class%3D%22a%22%20y%3D%2218%22%3EAcesso%20%C3%A0%3C%2Ftspan%3E%3Ctspan%20class%3D%22a%22%20x%3D%2247%22%20y%3D%2231%22%3EInforma%C3%A7%C3%A3o%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E`
  );

  //Logo Pátria Amada Brasil
  readonly base64Imagem3Default = this.domSanitizer.bypassSecurityTrustUrl(
    `data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20496.2%20143.8%22%3E%3Cstyle%3E.st0%7Bfill%3A%23575756%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M220.5%2054.5c14.5%200%2021.4%206%2021.4%2016%200%205.6-3.7%2010.4-9.2%2012.4%206.7%201.8%2012.5%207.9%2012.5%2015.5%200%209.8-7.1%2017.2-23.4%2017.2-8%200-14.4-.2-21.7-.3l-.6-.6V55.4l.6-.6c7.2-.1%2013.9-.3%2020.4-.3zm-10.7%2025.4h10.3c9.2%200%2011.3-4.9%2011.3-9.1%200-4.3-1.9-9.1-11.1-9.1-2.8%200-7.4%200-10.5-.1v18.3zm0%207.2v21.4c4.1%200%208.3-.1%2011.9-.1%2010.6%200%2012.8-6.1%2012.8-10.6%200-4.4-2.9-10.7-13.4-10.7h-11.3zM284.5%2088.7c3.2%201.1%205.6%204.1%207%207.5l4.3%2010.3c1%202.4%202.2%204.8%204.4%206.4-1.4%201.9-4.4%202.9-7.1%202.9-3.9%200-5.3-1.9-6.9-5.7l-4.9-11.9c-1.7-4.1-3.8-7.2-9.9-7.2h-8.1v24.3c-1.6.3-3.5.4-5.2.4-1.6%200-3.6-.1-5.1-.4V55.4l.6-.6c7.4-.1%2014.5-.3%2021.1-.3%2013.7%200%2022.3%206.4%2022.3%2018.1.1%208.1-5.3%2014.1-12.5%2016.1zm-21.1-5.3c3.8-.1%208.2-.2%2010.9-.2%209.6%200%2012-5.5%2012-10.6%200-5.4-2.4-10.7-12-10.7-2.9%200-7.6%200-10.9-.1v21.6zM320.8%20100.5l-5.2%2014.8c-1.3.3-2.9.4-4.5.4-1.9%200-3.7-.3-5.1-.6l-.3-.4L327.9%2055c1.6-.3%204.3-.4%206-.4%201.7%200%204.4.1%205.9.4l22%2059.7c-1.5.9-3.8%201.2-6.1%201.2-3.2%200-4.9-1.1-6.2-4.9l-3.6-10.3c-1.7%200-5.1.1-5.9.1h-13.5c-.8-.2-4-.3-5.7-.3zm2.6-7.6c1.6%200%204.2-.1%205-.1h9.8c.7%200%203.3.1%204.9.1l-4.5-12.8c-1.8-5.1-3.8-11.3-5.2-16h-.4c-1%204-2.8%209.5-3.8%2012.8l-5.8%2016zM371.1%20102.5c5.7%203.4%2013%206%2019.8%206%208%200%2012.5-3.4%2012.6-8.3%200-4.2-3.2-7.3-8.9-9.5L383%2086.2c-8.3-3.2-13.5-7.8-13.5-15.3%200-9.6%209-17.1%2022.2-17.1%208.2%200%2015.7%202.3%2020.8%204.6-.1%202.7-1.7%205.6-3.8%207.3-5.1-2.3-11.8-4.2-16.8-4.2-7.3%200-11.8%203.6-11.8%208.3%200%203.9%203.3%206.1%208.2%208l11.4%204.4c8.5%203.2%2014.7%208.6%2014.7%2016.4%200%2010.2-7.9%2017.8-24.1%2017.8-8.2%200-17-2.5-23.6-6.6.3-2.8%202.2-5.7%204.4-7.3zM426.6%2054.9c1.5-.3%203.6-.4%205.2-.4s3.6.1%205.2.4v60.3c-1.6.3-3.6.4-5.2.4s-3.7-.1-5.2-.4V54.9zM492.9%20107.1c0%201-.1%202.6-.3%203.7-.6%203-3%204.5-6.8%204.5h-25.7c-3.5%200-6.1-2-6.1-5.8V55l.7-.5h3.9c4.3%200%205.9%201.9%205.9%206v46.9c3-.3%206.1-.4%208.7-.4h19.7zM209.6%2034.6h-4.1v10.1c-.9.2-2.1.2-3%20.2-.8%200-2%200-3-.2V14.5l.3-.3c3.6-.1%206.5-.2%209.7-.2%206.1%200%2010.6%203.3%2010.6%2010.3%200%206.8-4.4%2010.3-10.5%2010.3zm-4.1-4.6c1.5%200%203.1-.1%203.7-.1%204%200%204.8-3.2%204.8-5.6%200-2.4-.8-5.6-4.8-5.6h-3.7V30zM227.2%2037.8l-2.1%206.9c-.8.2-1.6.2-2.6.2-.9%200-2.1-.1-2.8-.4l-.2-.3%209.9-30c1-.1%202.4-.2%203.5-.2.9%200%202.5.1%203.4.3l9.7%2030c-.8.5-2.3.8-3.4.8-1.9%200-2.8-.7-3.6-3.2l-1.2-4.1H227.2zm1.5-4.7H236.4l-1.3-4.5c-.8-2.5-1.7-6-2.4-8.6h-.3c-.4%202.3-1.4%205.5-2%207.5l-1.7%205.6zM252.3%2022.5v-3.3H244.7c-.2-.9-.2-1.8-.2-2.5s0-1.6.2-2.5H266c.2.6.3%201.6.3%202.3%200%202-1%202.7-3.2%202.7H258.3v25.5c-1%20.2-2.1.2-3%20.2-.8%200-2%200-3-.2V22.5zM285.4%2031.6c1.6.6%202.7%202.1%203.3%203.9l1.6%204.5c.4%201.2%201.1%202.4%202.1%203.2-.8%201.1-2.4%201.8-4%201.8-2.2%200-2.9-1.2-3.8-3.5l-1.9-5.3c-.7-1.8-1.6-3.2-4.1-3.2H276v11.7c-1%20.2-2.1.2-3%20.2-.8%200-2%200-2.9-.2V14.5l.3-.3c3.6-.1%206.9-.2%2010.2-.2%206.2%200%2010.5%203.1%2010.5%209.4-.1%204.3-2.8%207.2-5.7%208.2zm-9.4-3.2c1.6-.1%203.2-.1%204.1-.1%203.9%200%204.8-2.4%204.8-4.8%200-2.5-.9-4.8-4.8-4.8H276v9.7zM297.3%2014.3c.9-.2%202.2-.2%203-.2.8%200%202%200%203%20.2v30.4c-1%20.2-2.1.2-3%20.2-.8%200-2.1%200-3-.2V14.3zM315.4%2037.8l-2.1%206.9c-.8.2-1.6.2-2.6.2-.9%200-2.1-.1-2.8-.4l-.2-.3%209.9-30c1-.1%202.4-.2%203.5-.2.9%200%202.5.1%203.4.3l9.8%2030c-.8.5-2.3.8-3.4.8-1.9%200-2.8-.7-3.6-3.2l-1.2-4.1h-10.7zm1.5-4.7H324.6l-1.3-4.5c-.8-2.5-1.7-6-2.4-8.6h-.3c-.4%202.3-1.4%205.5-2%207.5l-1.7%205.6zM353.1%2037.8l-2.1%206.9c-.8.2-1.6.2-2.6.2-.9%200-2.1-.1-2.8-.4l-.2-.3%209.9-30c1-.1%202.4-.2%203.5-.2.9%200%202.5.1%203.4.3l9.7%2030c-.8.5-2.3.8-3.4.8-1.9%200-2.8-.7-3.6-3.2l-1.2-4.1H353.1zm1.4-4.7H362.2l-1.3-4.5c-.8-2.5-1.7-6-2.4-8.6h-.3c-.4%202.3-1.4%205.5-2%207.5l-1.7%205.6zM377.7%2014.3c1.3-.2%203-.3%204-.3%201.1%200%202.5.1%203.8.3l3.4%2012.3c.3%201.2%201.4%205.8%201.7%207.6h.3c.3-1.8%201.4-6.4%201.7-7.6l3.4-12.3c1.3-.2%202.8-.3%203.8-.3%201.1%200%202.7.1%204.1.3l2.4%2030.3c-.8.2-2%20.3-3%20.3-.9%200-1.8%200-2.6-.2l-.8-14.3c-.2-2.8-.4-6.9-.4-9.7h-.3L394%2040.1c-.9.1-2.2.2-3.1.2-.8%200-2.1-.1-3-.2l-5.2-19.4h-.3c0%202.8-.2%206.9-.4%209.7l-1%2014.3c-.8.1-1.7.2-2.7.2-.9%200-2.1-.1-3-.3l2.4-30.3zM417.4%2037.8l-2.1%206.9c-.8.2-1.6.2-2.6.2-.9%200-2.1-.1-2.8-.4l-.2-.3%209.9-30c1-.1%202.4-.2%203.5-.2.9%200%202.5.1%203.4.3l9.7%2030c-.8.5-2.3.8-3.4.8-1.9%200-2.8-.7-3.6-3.2l-1.2-4.1H417.4zm1.5-4.7H426.6l-1.3-4.5c-.8-2.5-1.7-6-2.4-8.6h-.3c-.4%202.3-1.4%205.5-2%207.5l-1.7%205.6zM459.4%2042.7c-2%201.6-5.6%202.2-8%202.2-3.7%200-6.6-.1-10.5-.2l-.3-.3v-30l.3-.3c3.8-.1%206.8-.2%2010.5-.2%202.4%200%206%20.6%208%202.2%204.1%203.3%204.9%208%204.9%2013.2-.1%205.4-.8%2010.1-4.9%2013.4zm-8-23.9h-4.9v21.5h4.9c5.8%200%206.7-5.8%206.7-10.7%200-5-.9-10.8-6.7-10.8zM474%2037.8l-2.1%206.9c-.8.2-1.6.2-2.6.2-.9%200-2.1-.1-2.8-.4l-.2-.3%209.9-30c1-.1%202.4-.2%203.5-.2.9%200%202.5.1%203.4.3l9.8%2030c-.8.5-2.3.8-3.4.8-1.9%200-2.8-.7-3.6-3.2l-1.2-4.1H474zm1.5-4.7H483.2l-1.3-4.5c-.8-2.5-1.7-6-2.4-8.6h-.3c-.4%202.3-1.4%205.5-2%207.5l-1.7%205.6zM238.2%203.9c.9.5%202.1%201.9%202.4%203.2l-7.4%204.4c-.7-.3-1.4-1.3-1.6-2l6.6-5.6z%22%2F%3E%3Cg%3E%3Cpath%20d%3D%22M206.9%20133.7h3.4c1.5%200%202.3.7%202.3%202.2v5.7c-1.9.6-3.8.9-5.9.9-1%200-2-.2-2.8-.5-.8-.3-1.5-.8-2-1.5-.5-.6-.9-1.4-1.2-2.4-.3-.9-.4-2-.4-3.2%200-1.3.2-2.5.6-3.4s.9-1.8%201.5-2.4c.6-.6%201.4-1.1%202.2-1.5.8-.3%201.7-.5%202.6-.5%201.9%200%203.6.5%205.3%201.6%200%20.2-.1.5-.2.7-.1.2-.2.5-.3.7-.1.2-.3.4-.5.6-.2.2-.4.3-.6.5-1.2-.8-2.4-1.2-3.6-1.2-2.4%200-3.5%201.6-3.5%204.9%200%203.3%201.2%204.9%203.6%204.9h1c.3%200%20.6-.1.9-.1v-1.4-.9-.6h-1.1c-.6%200-1-.1-1.3-.4-.2-.2-.4-.6-.4-1.1.1-.6.2-1.1.4-1.6zM224.2%20141.1c-1.5-1.3-2.3-3.4-2.3-6.3%200-1.3.1-2.4.4-3.3.3-1%20.7-1.8%201.3-2.4.6-.6%201.2-1.1%202-1.5.8-.3%201.7-.5%202.7-.5%201%200%201.9.2%202.7.5.8.3%201.5.8%202%201.5.6.7%201%201.5%201.3%202.4.3%201%20.4%202.1.4%203.3%200%201.3-.1%202.4-.4%203.3-.3%201-.7%201.8-1.3%202.4-.6.6-1.2%201.1-2%201.5-.8.3-1.7.5-2.7.5-1.7-.1-3-.5-4.1-1.4zm1.7-3c.4%201.1%201.2%201.7%202.4%201.7.6%200%201.1-.1%201.4-.4.4-.3.7-.7.9-1.1.2-.5.3-1%20.4-1.5.1-.6.1-1.1.1-1.7%200-.5%200-1.1-.1-1.7%200-.6-.1-1.2-.3-1.7-.2-.5-.4-1-.8-1.4-.4-.4-.9-.6-1.6-.6-.7%200-1.2.2-1.6.5-.4.4-.6.8-.8%201.3-.2.5-.3%201.1-.3%201.7%200%20.6-.1%201.1-.1%201.5%200%20.7%200%201.3.1%201.8%200%20.5.1%201%20.3%201.6zM249.6%20139.2l2.8-11.9c.3-.1.8-.1%201.3-.1.8%200%201.3.1%201.8.2l.1.2-4%2014.5c-.8.1-1.6.1-2.5.1-.8%200-1.4-.1-1.8-.3-.4-.2-.6-.6-.8-1.2l-3.6-13.1c.8-.3%201.4-.5%201.9-.5.6%200%201.1.1%201.3.4.3.3.5.7.7%201.3l1.7%206.2c.3%201%20.5%202.3.8%203.9.1.2.1.3.3.3zM268.3%20137.7v1.6h6.6c0%20.5%200%20.9-.1%201.2-.2%201.1-.9%201.7-2.2%201.7h-5.8c-.6%200-1.1-.2-1.5-.5-.4-.4-.5-.9-.5-1.5v-12.7l.2-.2h9.3c.1.4.1.9.1%201.4s-.1%201-.3%201.5h-5.9v3.1h4.8c.1.4.2.9.2%201.4%200%20.5-.1%201-.2%201.4h-4.8v1.6zM295.3%20131.9c0%20.5-.1.9-.2%201.4-.1.4-.3.8-.6%201.1-.2.3-.5.6-.8.9-.3.3-.7.4-1%20.6.8.3%201.3.9%201.7%202l.6%201.8c.2.7.6%201.3%201.1%201.6-.2.3-.5.5-1%20.7-.4.2-.9.3-1.4.3-.5%200-.9-.1-1.2-.4-.3-.3-.6-.8-.8-1.5l-.8-2.3c-.2-.4-.4-.8-.6-1-.3-.2-.7-.3-1.2-.3h-.9v5.4c-.5.1-1%20.1-1.7.1s-1.3%200-1.7-.1v-14.7l.2-.2c1.3%200%202.3%200%203.2-.1h2c.8%200%201.5.1%202.2.3.6.2%201.2.5%201.7.9s.8.9%201.1%201.5c0%20.5.1%201.2.1%202zm-7.1-2.1v4.3h1.7c.5%200%20.8-.1%201.1-.3.3-.2.5-.4.6-.6.1-.3.2-.7.2-1.2%200-1.4-.7-2.1-2-2.1h-.9c-.3-.1-.5-.1-.7-.1zM317.1%20127.2l.2.2V142c-.6.1-1.3.2-2%20.2s-1.5%200-2.1-.1l-3.4-7.7c-.4-.9-.8-1.9-1.2-3.1h-.1c.2%202.1.3%204.3.3%206.5v4.3c-.4.1-1%20.1-1.6.1-.6%200-1.2%200-1.6-.1v-14.7c.5-.1%201.2-.2%202-.2s1.5%200%202.1.1l3.4%207.7c.6%201.4%201.1%202.5%201.3%203.3h.1c-.2-2-.3-4.1-.3-6.4v-2.6c0-.8.2-1.3.5-1.6.3-.3.8-.5%201.5-.5h.9zM329.4%20141.1c-1.5-1.3-2.3-3.4-2.3-6.3%200-1.3.1-2.4.4-3.3.3-1%20.7-1.8%201.3-2.4.6-.6%201.2-1.1%202-1.5.8-.3%201.7-.5%202.7-.5%201%200%201.9.2%202.7.5.8.3%201.5.8%202%201.5.6.7%201%201.5%201.3%202.4.3%201%20.4%202.1.4%203.3%200%201.3-.1%202.4-.4%203.3-.3%201-.7%201.8-1.3%202.4-.6.6-1.2%201.1-2%201.5-.8.3-1.7.5-2.7.5-1.6-.1-3-.5-4.1-1.4zm1.7-3c.4%201.1%201.2%201.7%202.4%201.7.6%200%201.1-.1%201.4-.4.4-.3.7-.7.9-1.1.2-.5.3-1%20.4-1.5.1-.6.1-1.1.1-1.7%200-.5%200-1.1-.1-1.7%200-.6-.1-1.2-.3-1.7-.2-.5-.4-1-.8-1.4-.4-.4-.9-.6-1.6-.6-.7%200-1.2.2-1.6.5-.4.4-.6.8-.8%201.3-.2.5-.3%201.1-.3%201.7%200%20.6-.1%201.1-.1%201.5%200%20.7%200%201.3.1%201.8s.2%201%20.3%201.6zM365.4%20130.3V133.4h4.7c.1.4.2.9.2%201.4%200%20.5-.1%201-.2%201.4h-4.7v6c-.5.1-1%20.1-1.7.1s-1.3%200-1.7-.1v-14.7l.2-.1h9.3c.1.4.1.8.1%201.4s-.1.9-.4%201.2c-.3.3-.8.4-1.4.4h-4.4zM384.4%20137.7v1.6h6.6c0%20.5%200%20.9-.1%201.2-.2%201.1-.9%201.7-2.2%201.7H383c-.6%200-1.1-.2-1.5-.5-.4-.4-.5-.9-.5-1.5v-12.7l.2-.2h9.3c.1.4.1.9.1%201.4s-.1%201-.3%201.5h-5.9v3.1h4.8c.1.4.2.9.2%201.4%200%20.5-.1%201-.2%201.4h-4.8v1.6zM410.4%20141.2c-.5.4-1.1.6-1.8.8-.8.2-1.6.3-2.5.3h-1.9c-.8%200-1.9%200-3.2-.1l-.2-.2v-14.6l.2-.2c.8%200%201.7%200%202.6-.1h2.8c1.2%200%202.3.2%203.1.6.8.4%201.5.9%202%201.6s.8%201.5%201%202.4c.2.9.3%201.9.3%203%200%201.4-.2%202.7-.5%203.7-.3%201.1-1%202-1.9%202.8zm-4-1.7c1.9%200%202.9-1.6%202.9-4.8%200-3.2-1-4.8-2.9-4.8h-2.1v9.7h.9c.3-.1.7-.1%201.2-.1zM426.1%20137.7v1.6h6.6c0%20.5%200%20.9-.1%201.2-.2%201.1-.9%201.7-2.2%201.7h-5.8c-.6%200-1.1-.2-1.5-.5-.4-.4-.5-.9-.5-1.5v-12.7l.2-.2h9.3c.1.4.1.9.1%201.4s-.1%201-.3%201.5H426v3.1h4.8c.1.4.2.9.2%201.4%200%20.5-.1%201-.2%201.4H426v1.6zM453.1%20131.9c0%20.5-.1.9-.2%201.4s-.3.8-.6%201.1c-.2.3-.5.6-.8.9-.3.3-.7.4-1%20.6.8.3%201.3.9%201.7%202l.6%201.8c.2.7.6%201.3%201.1%201.6-.2.3-.5.5-1%20.7-.4.2-.9.3-1.4.3-.5%200-.9-.1-1.2-.4-.3-.3-.6-.8-.8-1.5l-.8-2.3c-.2-.4-.4-.8-.6-1-.3-.2-.7-.3-1.2-.3h-.9v5.4c-.5.1-1%20.1-1.7.1s-1.3%200-1.7-.1v-14.7l.2-.2c1.3%200%202.3%200%203.2-.1h2c.8%200%201.5.1%202.2.3.6.2%201.2.5%201.7.9s.8.9%201.1%201.5c0%20.5.1%201.2.1%202zm-7.2-2.1v4.3h1.7c.5%200%20.8-.1%201.1-.3.3-.2.5-.4.6-.6.1-.3.2-.7.2-1.2%200-1.4-.7-2.1-2-2.1h-.9c-.2-.1-.5-.1-.7-.1zM466.8%20139h-.9l-.9%203.1c-.3.1-.8.1-1.4.1-.7%200-1.3-.1-1.7-.2l-.1-.2%204.8-14.5c.6-.1%201.2-.1%202-.1.9%200%201.5.1%202%20.2l4.7%2014.5c-.5.3-1.1.4-1.7.4-.8%200-1.3-.1-1.6-.4-.3-.3-.6-.8-.8-1.5l-.4-1.4h-4zm0-2.7h3.3l-.4-1.3c-.3-1.2-.7-2.7-1.2-4.5h-.1c-.1.6-.5%202-1%204.1l-.6%201.7zM489.9%20139.2h3.8c0%20.6%200%201.1-.1%201.5-.1.4-.3.8-.7%201.1-.4.3-.9.4-1.5.4h-4.9c-.6%200-1.1-.2-1.5-.5-.4-.4-.5-.9-.5-1.5v-12.8l.2-.2h1.3c1.3%200%202%20.7%202%202.2v9.9c.5-.1%201.2-.1%201.9-.1z%22%2F%3E%3C%2Fg%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M.7%2014v69.8l72.1-58.2%20109.1%2048.1V14z%22%2F%3E%3Cpath%20d%3D%22M.7%2083.8v49.4s5.8-5%2016.5-12.2C22.4%2089.1%2050%2064.8%2083.3%2064.8c15.1%200%2029%205%2040.2%2013.4%2017.9-3.3%2037.4-5.1%2058.3-4.5l-109-48.1L.7%2083.8z%22%20fill%3D%22%23c6c6c6%22%2F%3E%3Cpath%20d%3D%22M83.3%2064.8c-33.3%200-60.9%2024.3-66%2056.2%2019.9-13.2%2057-33.7%20106.3-42.8-11.2-8.4-25.2-13.4-40.3-13.4z%22%2F%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M140.2%2096.5C79.3%20100%2037.4%20119.4%2016.4%20131.8%206%20137.9.7%20142.3.7%20142.3h181.1V96.6c-14.7-.9-28.5-.9-41.6-.1z%22%2F%3E%3C%2Fsvg%3E`
  );
}
