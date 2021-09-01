/**
 * Código copiado de: https://dsgov.estaleiro.serpro.gov.br/components/header?tab=desenvolvedor
 * na versão 2.1.0-BETA e convertido para Typescript
 */
export class BRHeader {
  name: string;
  component: any;
  componentSearch: any;
  componentSearchInput: any;
  componentSearchTrigger: any;
  componentSearchDismiss: any;
  hideDrop: any;
  menuTrigger: any;

  constructor(name, component) {
    this.name = name;
    this.component = component;
    this.componentSearch = this.component.querySelector('.header-search');
    this.componentSearchInput = this.component.querySelector(
      '.header-search input'
    );
    this.componentSearchTrigger = this.component.querySelector(
      '[data-toggle="search"]'
    );
    this.componentSearchDismiss = this.component.querySelector(
      '[data-dismiss="search"]'
    );
    this.hideDrop = null;
    this.menuTrigger = this.component.querySelector(
      '[data-target="#main-navigation"]'
    );
    this._setBehavior();
  }

  _setBehavior() {
    this._setLoginBehavior();
    this._setLogoutBehavior();
    this._setSearchBehaviors();
    this._setKeyboardBehaviors();
    this._setDropdownBehavior();
    this._setSticky();
  }

  _setLoginBehavior() {
    for (const login of this.component.querySelectorAll(
      '[data-trigger="login"]'
    )) {
      login.addEventListener('click', () => {
        const loginParent = login.closest('.header-login');
        loginParent.querySelector('.header-sign-in').classList.add('d-none');
        loginParent.querySelector('.header-avatar').classList.remove('d-none');
      });
    }
  }

  _setLogoutBehavior() {
    for (const logout of this.component.querySelectorAll(
      '[data-trigger="logout"]'
    )) {
      logout.addEventListener('click', () => {
        const logoutParent = logout.closest('.header-login');
        logoutParent.querySelector('.avatar').classList.remove('show');
        logoutParent
          .querySelector('[data-toggle="dropdown"]')
          .classList.remove('active');
        logoutParent
          .querySelector('.header-sign-in')
          .classList.remove('d-none');
        logoutParent.querySelector('.header-avatar').classList.add('d-none');
      });
    }
  }

  _setSearchBehaviors() {
    // Abrir busca
    if (this.componentSearchTrigger) {
      this.componentSearchTrigger.addEventListener('focus', () => {
        this._cleanDropDownHeader();
      });
      this.componentSearchTrigger.addEventListener('click', () => {
        this._openSearch();
      });
    }

    // Fechar busca
    if (this.componentSearchDismiss) {
      this.componentSearchDismiss.addEventListener('click', () => {
        this._closeSearch();
      });
    }
  }

  _setKeyboardBehaviors() {
    if (this.componentSearchInput) {
      this.componentSearchInput.addEventListener('keydown', (event) => {
        switch (event.keyCode) {
          // Tecla ESC
          case 27:
            this._closeSearch();
            break;
          default:
            break;
        }
      });
    }
    for (const trigger of this.component.querySelectorAll(
      '.dropdown [data-toggle="dropdown"]'
    )) {
      trigger.addEventListener('keydown', (event) => {
        switch (event.keyCode) {
          // Tecla ESC
          case 32:
            if (event.target.parentNode.classList.contains('show')) {
              event.target.parentNode.click();
              event.target.parentNode.classList.remove('show');
              event.target.classList.remove('active');
              event.stopPropagation();
            }
            break;
          default:
            break;
        }
      });
    }
  }
  _openSearch() {
    if (this.componentSearch) {
      this.componentSearch.classList.add('active');
      this.componentSearch.querySelector('input').focus();
    }
  }

  _closeSearch() {
    if (this.componentSearch) {
      this.componentSearch.classList.remove('active');
      //this.componentSearchTrigger.focus()
      this._nextFocusElement().focus();
    }
  }

  _setDropdownBehavior() {
    let hideDrop;
    for (const trigger of this.component.querySelectorAll(
      '.dropdown [data-toggle="dropdown"]'
    )) {
      trigger.addEventListener('click', (event) => {
        clearTimeout(hideDrop);
        // Toggle de abrir / fechar
        const hasShow = event.target.parentNode.classList.contains('active');

        if (hasShow) {
          event.target.parentNode.classList.remove('active');
          event.target.parentNode.parentNode.classList.remove('show');
        } else {
          this._cleanDropDownHeader();
          trigger.classList.add('active');
          trigger.parentNode.classList.add('show');

          // Evita que o componente feche o drop ao navegar pelo teclado
          const next = this._nextFocusElement();
          next.addEventListener('focus', (event) => {
            clearTimeout(hideDrop);
          });
        }
        event.stopPropagation();
      });

      // Faz o drop fechar ao clicar fora
      trigger.addEventListener('blur', (event) => {
        hideDrop = setTimeout(
          this._cleanDropDownHeaderRef,
          500,
          this.component
        );
      });
    }
    this.menuTrigger.addEventListener('focus', (event) => {
      this._cleanDropDownHeader();
    });
  }

  _cleanDropDownHeaderRef(ref) {
    for (const trigger of ref.querySelectorAll('.dropdown.show')) {
      trigger.classList.remove('show');
      trigger.parentNode.classList.remove('show');
      for (const button of ref.querySelectorAll('.br-button')) {
        button.classList.remove('active');
      }
    }
  }

  _cleanDropDownHeader() {
    this._cleanDropDownHeaderRef(this.component);
  }

  _setSticky() {
    if (this.component.hasAttribute('data-sticky')) {
      window.onscroll = () => {
        if (window.pageYOffset > this.component.offsetHeight) {
          this.component.classList.add('sticky', 'compact');
        } else {
          this.component.classList.remove('sticky', 'compact');
        }
      };
    }
  }

  _nextFocusElement() {
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
        //nextElement.focus();
        return nextElement;
      }
    }
    return null;
  }
}
