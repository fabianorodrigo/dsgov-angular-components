/**
 * Código copiado de: https://dsgov.estaleiro.serpro.gov.br/components/menu?tab=desenvolvedor
 * na versão 2.1.0-BETA e convertido para Typescript
 */
class BRMenu {
  id: string;
  name: string;
  component: any;
  breakpoints: any[];
  pushShadow: string;
  trigger: any;
  auxiliary: any;
  dismiss: any;
  scrim: any;
  componentFolders: any;
  componentItems: any;

  constructor(name, component) {
    this.name = name;
    this.component = component;
    this.id = this.component.id;
    this.breakpoints = this.component.dataset.breakpoints
      ? this.component.dataset.breakpoints
      : ['col-sm-4', 'col-lg-3'];
    this.pushShadow = 'shadow-lg-right';
    this.trigger = document.querySelector(`[data-target="#${this.id}"]`);
    this.auxiliary = this.component.querySelector('[data-toggle="auxiliary"]');
    this.dismiss = this.component.querySelectorAll('[data-dismiss="menu"]');
    this.scrim = this.component.querySelector('.menu-scrim');
    this.componentFolders = this.component.querySelectorAll('.menu-folder');
    this.componentItems = this.component.querySelectorAll('.menu-item');
    this._setBehavior();
    console.log(this, this.id, this.component.id);
    console.warn(`[data-target="#${this.id}"]`, this.component, this.trigger);
  }

  _setBehavior() {
    this._toggleMenu();
    this._setDropMenu();
    this._setSideMenu();
    this._setKeyboardBehaviors();
    this._setBreakpoints();
    this._setView();
    window.addEventListener('resize', () => {
      this._setView();
    });
  }

  _setView() {
    const template = document.querySelector('body');
    const menuAuxiliar = document.querySelector('.menu-trigger');
    if (menuAuxiliar && window.innerWidth < 575) {
      template.classList.add('mb-5');
    } else {
      template.classList.remove('mb-5');
    }
  }

  _setBreakpoints() {
    if (!this.component.classList.contains('push')) {
      this.component
        .querySelector('.menu-panel')
        .classList.add(...this.breakpoints);
    }
  }

  _setKeyboardBehaviors() {
    // Fechar com tecla ESC
    this.component.addEventListener('keyup', (event) => {
      switch (event.code) {
        case 'Escape':
          this._closeMenu();
        default:
          break;
      }
    });
    // Fechar com Tab fora do menu
    if (this.scrim) {
      this.scrim.addEventListener('keyup', () => {
        return this._closeMenu();
      });
    }
  }

  _toggleMenu() {
    const trigger = this.auxiliary ? this.auxiliary : this.trigger;
    // Clicar no trigger
    if (trigger) {
      trigger.addEventListener('click', () => {
        console.warn('click do trigger de menu');
        // Fechar Menu caso esteja aberto
        if (this.component.classList.contains('active')) {
          this._closeMenu();
          return;
        }
        // Abre Menu
        this._openMenu();
        this._focusNextElement();
      });
    }
    // Clicar no dismiss
    for (const close of this.dismiss) {
      close.addEventListener('click', () => {
        return this._closeMenu();
      });
    }
  }

  _openMenu() {
    console.warn('_openMenu');
    this.component.classList.add('active');
    if (this.component.classList.contains('push')) {
      this.component.classList.add(...this.breakpoints, 'px-0');
    }
    this.component.focus();
  }

  _closeMenu() {
    console.warn('_closeMenu');
    this.component.classList.remove('active');
    if (this.component.classList.contains('push')) {
      this.component.classList.remove(...this.breakpoints, 'px-0');
    }
    this._focusNextElement();
  }

  _setDropMenu() {
    // Configura Drop Menu para filho imediato de ".menu-folder"
    for (const item of this.component.querySelectorAll(
      '.menu-folder > a.menu-item'
    )) {
      // Inclui ícone de Drop Menu
      this._createIcon(item, 'fa-angle-down');
      // Configura como Drop Menu
      item.parentNode.classList.add('drop-menu');
      // Inicializa Drop Menu
      this._toggleDropMenu(item);
    }
  }

  _focusNextElement() {
    //add all elements we want to include in our selection
    const focussableElements =
      'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
    if (document.activeElement) {
      const focussable = Array.prototype.filter.call(
        document.body.querySelectorAll(focussableElements),
        (element) => {
          //check for visibility while always include the current activeElement
          return (
            element.offsetWidth > 0 ||
            element.offsetHeight > 0 ||
            element === document.activeElement
          );
        }
      );
      const index = focussable.indexOf(document.activeElement);
      if (index > -1) {
        const nextElement = focussable[index + 1] || focussable[0];
        nextElement.focus();
      }
    }
  }

  _setSideMenu() {
    // Configura Side Menu para quem não for filho imediato de ".menu-folder"
    for (const ul of this.component.querySelectorAll('a.menu-item + ul')) {
      if (!ul.parentNode.classList.contains('menu-folder')) {
        // Inclui ícone de Side Menu
        this._createIcon(ul.previousElementSibling, 'fa-angle-right');
        // Configura como Side Menu
        ul.parentNode.classList.add('side-menu');
        // Inicializa Side Menu
        this._toggleSideMenu(ul.previousElementSibling);
      }
    }
  }

  _toggleDropMenu(element) {
    element.addEventListener('click', () => {
      // Fecha Drop Menu caso esteja aberto
      if (element.parentNode.classList.contains('active')) {
        element.parentNode.classList.remove('active');
        return;
      }

      // Abre Drop Menu
      element.parentNode.classList.add('active');
    });
  }

  _toggleSideMenu(element) {
    element.addEventListener('click', () => {
      // Esconde todos os itens
      this._hideItems(element);

      // Mostra itens do Side Menu ativo
      this._showItems(element.parentNode);

      // Fecha Side Menu caso esteja aberto
      if (element.parentNode.classList.contains('active')) {
        this._closeSideMenu(element);
        element.focus();
        return;
      }

      // Abre Side Menu
      element.parentNode.classList.add('active');
      element.focus();
    });
  }

  _closeSideMenu(element) {
    element.parentNode.classList.remove('active');
    // Verifica se existe Side Menu anterior, caso contrário mostra todos os itens de volta
    const parentFolder = element.parentNode.closest('.side-menu.active')
      ? element.parentNode.closest('.side-menu.active')
      : element.closest('.menu-body');
    this._showItems(parentFolder);
  }

  _hideItems(element) {
    for (const item of element
      .closest('.menu-body')
      .querySelectorAll('.menu-item')) {
      item.setAttribute('hidden', '');
    }
  }

  _showItems(element) {
    for (const item of element.querySelectorAll('.menu-item')) {
      item.removeAttribute('hidden');
    }
  }

  _createIcon(element, icon) {
    const menuIconContainer = document.createElement('span');
    menuIconContainer.classList.add('support');

    const menuIcon = document.createElement('i');
    menuIcon.classList.add('fas');
    menuIcon.classList.add(icon);
    menuIcon.setAttribute('aria-hidden', 'true');

    menuIconContainer.appendChild(menuIcon);
    element.appendChild(menuIconContainer);
  }
}

export default BRMenu;
