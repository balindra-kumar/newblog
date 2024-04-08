import './polyfills.server.mjs';
import {
  ActivatedRoute,
  Attribute,
  BehaviorSubject,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  DOCUMENT,
  DatePipe,
  Directive,
  DomSanitizer,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  HttpClient,
  HttpClientModule,
  HttpParams,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  Meta,
  NavigationEnd,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  Optional,
  Output,
  Renderer2,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  SecurityContext,
  Self,
  SkipSelf,
  Title,
  Version,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  bootstrapApplication,
  filter,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  inject,
  isPromise,
  isSubscribable,
  map,
  mergeApplicationConfig,
  provideClientHydration,
  provideRouter,
  provideServerRendering,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMapInterpolate1,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-5X7ATWL3.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MD6NWHS6.mjs";

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor(titleService, metaSevice, router, activatedRoute, document2) {
    this.titleService = titleService;
    this.metaSevice = metaSevice;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.document = document2;
    this.setcolor = false;
    this.setClass = true;
  }
  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.updateMetaTags();
      this.updateCanonicalUrl();
    });
  }
  updateMetaTags() {
    const route = this.activatedRoute.firstChild;
    if (route) {
      route.data.subscribe((data) => {
        this.titleService.setTitle(data["title"] || "Welcome to home");
        this.metaSevice.updateTag({ name: "description", content: data["description"] || "Welcome to home page description" });
      });
    }
  }
  updateCanonicalUrl() {
    const canonicalUrl = this.router.url;
    const head = this.document.getElementsByTagName("head")[0];
    var element = this.document.querySelector(`link[rel='canonical']`) || null;
    if (element == null) {
      element = this.document.createElement("link");
      head.appendChild(element);
    }
    element.setAttribute("rel", "canonical");
    element.setAttribute("href", canonicalUrl);
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DOCUMENT));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [CommonModule, RouterOutlet], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
_AppComponent.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppComponent, factory: _AppComponent.\u0275fac, providedIn: "root" });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 22 });
})();

// src/app/admin/admin.component.ts
var _AdminComponent = class _AdminComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
  }
};
_AdminComponent.\u0275fac = function AdminComponent_Factory(t) {
  return new (t || _AdminComponent)(\u0275\u0275directiveInject(Router));
};
_AdminComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AdminComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [RouterOutlet, CommonModule], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var AdminComponent = _AdminComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src\\app\\admin\\admin.component.ts", lineNumber: 16 });
})();

// node_modules/@angular/forms/fesm2022/forms.mjs
var _BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
};
_BaseControlValueAccessor.\u0275fac = function BaseControlValueAccessor_Factory(t) {
  return new (t || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
};
_BaseControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BaseControlValueAccessor
});
var BaseControlValueAccessor = _BaseControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var _BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
};
_BuiltInControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BuiltInControlValueAccessor_BaseFactory;
  return function BuiltInControlValueAccessor_Factory(t) {
    return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(t || _BuiltInControlValueAccessor);
  };
})();
_BuiltInControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BuiltInControlValueAccessor,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var BuiltInControlValueAccessor = _BuiltInControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken("NgValueAccessor");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var _CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
};
_CheckboxControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckboxControlValueAccessor_BaseFactory;
  return function CheckboxControlValueAccessor_Factory(t) {
    return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(t || _CheckboxControlValueAccessor);
  };
})();
_CheckboxControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CheckboxControlValueAccessor,
  selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
  hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.checked);
      })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var CheckboxControlValueAccessor = _CheckboxControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken("CompositionEventMode");
var _DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
};
_DefaultValueAccessor.\u0275fac = function DefaultValueAccessor_Factory(t) {
  return new (t || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
};
_DefaultValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _DefaultValueAccessor,
  selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
  hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
        return ctx._handleInput($event.target.value);
      })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
        return ctx._compositionStart();
      })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
        return ctx._compositionEnd($event.target.value);
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var DefaultValueAccessor = _DefaultValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken("NgValidators");
var NG_ASYNC_VALIDATORS = new InjectionToken("NgAsyncValidators");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  /**
   * @description
   * Validator that requires the control's value to be greater than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a minimum of 3
   *
   * ```typescript
   * const control = new FormControl(2, Validators.min(3));
   *
   * console.log(control.errors); // {min: {min: 3, actual: 2}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `min` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static min(min) {
    return minValidator(min);
  }
  /**
   * @description
   * Validator that requires the control's value to be less than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a maximum of 15
   *
   * ```typescript
   * const control = new FormControl(16, Validators.max(15));
   *
   * console.log(control.errors); // {max: {max: 15, actual: 16}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `max` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static max(max) {
    return maxValidator(max);
  }
  /**
   * @description
   * Validator that requires the control have a non-empty value.
   *
   * @usageNotes
   *
   * ### Validate that the field is non-empty
   *
   * ```typescript
   * const control = new FormControl('', Validators.required);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map with the `required` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static required(control) {
    return requiredValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value be true. This validator is commonly
   * used for required checkboxes.
   *
   * @usageNotes
   *
   * ### Validate that the field value is true
   *
   * ```typescript
   * const control = new FormControl('some value', Validators.requiredTrue);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map that contains the `required` property
   * set to `true` if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value pass an email validation test.
   *
   * Tests the value using a [regular
   * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
   * pattern suitable for common use cases. The pattern is based on the definition of a valid email
   * address in the [WHATWG HTML
   * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
   * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
   * lengths of different parts of the address).
   *
   * The differences from the WHATWG version include:
   * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
   * - Disallow `local-part` to be longer than 64 characters.
   * - Disallow the whole address to be longer than 254 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid email pattern
   *
   * ```typescript
   * const control = new FormControl('bad@', Validators.email);
   *
   * console.log(control.errors); // {email: true}
   * ```
   *
   * @returns An error map with the `email` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static email(control) {
    return emailValidator(control);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be greater than or equal
   * to the provided minimum length. This validator is also provided by default if you use the
   * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays. The
   * `minLength` validator logic is also not invoked for values when their `length` property is 0
   * (for example in case of an empty string or an empty array), to support optional controls. You
   * can use the standard `required` validator if empty values should not be considered valid.
   *
   * @usageNotes
   *
   * ### Validate that the field has a minimum of 3 characters
   *
   * ```typescript
   * const control = new FormControl('ng', Validators.minLength(3));
   *
   * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
   * ```
   *
   * ```html
   * <input minlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `minlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be less than or equal
   * to the provided maximum length. This validator is also provided by default if you use the
   * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays.
   *
   * @usageNotes
   *
   * ### Validate that the field has maximum of 5 characters
   *
   * ```typescript
   * const control = new FormControl('Angular', Validators.maxLength(5));
   *
   * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
   * ```
   *
   * ```html
   * <input maxlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `maxlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  /**
   * @description
   * Validator that requires the control's value to match a regex pattern. This validator is also
   * provided by default if you use the HTML5 `pattern` attribute.
   *
   * @usageNotes
   *
   * ### Validate that the field only contains letters or spaces
   *
   * ```typescript
   * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
   *
   * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
   * ```
   *
   * ```html
   * <input pattern="[a-zA-Z ]*">
   * ```
   *
   * ### Pattern matching with the global or sticky flag
   *
   * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
   * can produce different results on the same input when validations are run consecutively. This is
   * due to how the behavior of `RegExp.prototype.test` is
   * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
   * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
   * Due to this behavior, it is recommended that when using
   * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
   * flag enabled.
   *
   * ```typescript
   * // Not recommended (since the `g` flag is used)
   * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
   *
   * // Good
   * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
   * ```
   *
   * @param pattern A regular expression to be used as is to test the values, or a string.
   * If a string is passed, the `^` character is prepended and the `$` character is
   * appended to the provided string (if not already present), and the resulting regular
   * expression is used to test the values.
   *
   * @returns A validator function that returns an error map with the
   * `pattern` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  /**
   * @description
   * Validator that performs no operation.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static nullValidator(control) {
    return nullValidator(control);
  }
  static compose(validators) {
    return compose(validators);
  }
  /**
   * @description
   * Compose multiple async validators into a single function that returns the union
   * of the individual error objects for the provided control.
   *
   * @returns A validator function that returns an error map with the
   * merged error objects of the async validators if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern)
    return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^")
      regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$")
      regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control)
      this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var _NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatus.\u0275fac = function NgControlStatus_Factory(t) {
  return new (t || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
};
_NgControlStatus.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgControlStatus,
  selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
  hostVars: 14,
  hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var NgControlStatus = _NgControlStatus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var _NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatusGroup.\u0275fac = function NgControlStatusGroup_Factory(t) {
  return new (t || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
};
_NgControlStatusGroup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgControlStatusGroup,
  selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
  hostVars: 16,
  hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var NgControlStatusGroup = _NgControlStatusGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException() {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formControlNameExample}`);
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = false;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this.pristine = true;
    this.touched = false;
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  /**
   * Marks the control as `touched`. A control is touched by focus and
   * blur events that do not change the value.
   *
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsTouched(opts = {}) {
    this.touched = true;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(opts);
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   */
  markAllAsTouched() {
    this.markAsTouched({
      onlySelf: true
    });
    this._forEachChild((control) => control.markAllAsTouched());
  }
  /**
   * Marks the control as `untouched`.
   *
   * If the control has any children, also marks all children as `untouched`
   * and recalculates the `touched` status of all parent controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after the marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsUntouched(opts = {}) {
    this.touched = false;
    this._pendingTouched = false;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /**
   * Marks the control as `dirty`. A control becomes dirty when
   * the control's value is changed through the UI; compare `markAsTouched`.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsDirty(opts = {}) {
    this.pristine = false;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(opts);
    }
  }
  /**
   * Marks the control as `pristine`.
   *
   * If the control has any children, marks all children as `pristine`,
   * and recalculates the `pristine` status of all parent
   * controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   *
   * @param opts Configuration options that determine how the control emits events after
   * marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsPristine(opts = {}) {
    this.pristine = true;
    this._pendingDirty = false;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /**
   * Marks the control as `pending`.
   *
   * A control is pending while the control performs async validation.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates changes and
   * emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event with the latest status the control is marked pending.
   * When false, no events are emitted.
   *
   */
  markAsPending(opts = {}) {
    this.status = PENDING;
    if (opts.emitEvent !== false) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(opts);
    }
  }
  /**
   * Disables the control. This means the control is exempt from validation checks and
   * excluded from the aggregate value of any parent. Its status is `DISABLED`.
   *
   * If the control has children, all children are also disabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control is disabled.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is disabled.
   * When false, no events are emitted.
   */
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine();
      }
      this._parent._updateTouched();
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  /**
   * Recalculates the value and validation status of the control.
   *
   * By default, it also updates the value and validity of its ancestors.
   *
   * @param opts Configuration options determine how the control propagates changes and emits events
   * after updates and validity checks are applied.
   * * `onlySelf`: When true, only update this control. When false or not supplied,
   * update all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is updated.
   * When false, no events are emitted.
   */
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(opts.emitEvent);
      }
    }
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = true;
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = false;
        this.setErrors(errors, {
          emitEvent
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      this._hasOwnPendingAsyncValidator = false;
    }
  }
  /**
   * Sets errors on a form control when running validations manually, rather than automatically.
   *
   * Calling `setErrors` also updates the validity of the parent control.
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control errors are set.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event after the errors are set.
   *
   * @usageNotes
   *
   * ### Manually set the errors for a control
   *
   * ```
   * const login = new FormControl('someLogin');
   * login.setErrors({
   *   notUnique: true
   * });
   *
   * expect(login.valid).toEqual(false);
   * expect(login.errors).toEqual({ notUnique: true });
   *
   * login.setValue('someOtherLogin');
   *
   * expect(login.valid).toEqual(true);
   * ```
   */
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null)
      return null;
    if (!Array.isArray(currPath))
      currPath = currPath.split(".");
    if (currPath.length === 0)
      return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled())
      return DISABLED;
    if (this.errors)
      return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
      return PENDING;
    if (this._anyControlsHaveStatus(INVALID))
      return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts = {}) {
    this.pristine = !this._anyControlsDirty();
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /** @internal */
  _updateTouched(opts = {}) {
    this.touched = this._anyControlsTouched();
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name])
      return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    if (control)
      this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control)
      _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor)
      _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path?.[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never")
    return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var _NgForm = class _NgForm extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
};
_NgForm.\u0275fac = function NgForm_Factory(t) {
  return new (t || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgForm.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgForm,
  selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
  hostBindings: function NgForm_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function NgForm_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    options: ["ngFormOptions", "options"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
});
var NgForm = _NgForm;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty)
        this.markAsDirty();
      if (this._pendingTouched)
        this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var _AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
};
_AbstractFormGroupDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AbstractFormGroupDirective_BaseFactory;
  return function AbstractFormGroupDirective_Factory(t) {
    return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(t || _AbstractFormGroupDirective);
  };
})();
_AbstractFormGroupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AbstractFormGroupDirective,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var AbstractFormGroupDirective = _AbstractFormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var _NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
};
_NgModelGroup.\u0275fac = function NgModelGroup_Factory(t) {
  return new (t || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_NgModelGroup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgModelGroup,
  selectors: [["", "ngModelGroup", ""]],
  inputs: {
    name: ["ngModelGroup", "name"]
  },
  exportAs: ["ngModelGroup"],
  features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
});
var NgModelGroup = _NgModelGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var _NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name)
      this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
};
_NgModel.\u0275fac = function NgModel_Factory(t) {
  return new (t || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgModel.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgModel,
  selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
  inputs: {
    name: "name",
    isDisabled: ["disabled", "isDisabled"],
    model: ["ngModel", "model"],
    options: ["ngModelOptions", "options"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngModel"],
  features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var NgModel = _NgModel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var _\u0275NgNoValidate = class _\u0275NgNoValidate {
};
_\u0275NgNoValidate.\u0275fac = function \u0275NgNoValidate_Factory(t) {
  return new (t || _\u0275NgNoValidate)();
};
_\u0275NgNoValidate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _\u0275NgNoValidate,
  selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
  hostAttrs: ["novalidate", ""]
});
var \u0275NgNoValidate = _\u0275NgNoValidate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var _NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_NumberValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275NumberValueAccessor_BaseFactory;
  return function NumberValueAccessor_Factory(t) {
    return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(t || _NumberValueAccessor);
  };
})();
_NumberValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NumberValueAccessor,
  selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
  hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var NumberValueAccessor = _NumberValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var _RadioControlRegistryModule = class _RadioControlRegistryModule {
};
_RadioControlRegistryModule.\u0275fac = function RadioControlRegistryModule_Factory(t) {
  return new (t || _RadioControlRegistryModule)();
};
_RadioControlRegistryModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _RadioControlRegistryModule
});
_RadioControlRegistryModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var RadioControlRegistryModule = _RadioControlRegistryModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistryModule, [{
    type: NgModule
  }], null, null);
})();
var _RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control)
      return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
};
_RadioControlRegistry.\u0275fac = function RadioControlRegistry_Factory(t) {
  return new (t || _RadioControlRegistry)();
};
_RadioControlRegistry.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _RadioControlRegistry,
  factory: _RadioControlRegistry.\u0275fac,
  providedIn: RadioControlRegistryModule
});
var RadioControlRegistry = _RadioControlRegistry;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: RadioControlRegistryModule
    }]
  }], null, null);
})();
var _RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName)
      this.name = this.formControlName;
  }
};
_RadioControlValueAccessor.\u0275fac = function RadioControlValueAccessor_Factory(t) {
  return new (t || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
};
_RadioControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RadioControlValueAccessor,
  selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
  hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
        return ctx.onChange();
      })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    name: "name",
    formControlName: "formControlName",
    value: "value"
  },
  features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var RadioControlValueAccessor = _RadioControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var _RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_RangeValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RangeValueAccessor_BaseFactory;
  return function RangeValueAccessor_Factory(t) {
    return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(t || _RangeValueAccessor);
  };
})();
_RangeValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RangeValueAccessor,
  selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
  hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var RangeValueAccessor = _RangeValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken("NgModelWithFormControlWarning");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var _FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
};
_FormControlDirective._ngModelWarningSentOnce = false;
_FormControlDirective.\u0275fac = function FormControlDirective_Factory(t) {
  return new (t || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormControlDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormControlDirective,
  selectors: [["", "formControl", ""]],
  inputs: {
    form: ["formControl", "form"],
    isDisabled: ["disabled", "isDisabled"],
    model: ["ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormControlDirective = _FormControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var _FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
};
_FormGroupDirective.\u0275fac = function FormGroupDirective_Factory(t) {
  return new (t || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormGroupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormGroupDirective,
  selectors: [["", "formGroup", ""]],
  hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function FormGroupDirective_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    form: ["formGroup", "form"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormGroupDirective = _FormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var _FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
};
_FormGroupName.\u0275fac = function FormGroupName_Factory(t) {
  return new (t || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormGroupName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormGroupName,
  selectors: [["", "formGroupName", ""]],
  inputs: {
    name: ["formGroupName", "name"]
  },
  features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
});
var FormGroupName = _FormGroupName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var _FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
};
_FormArrayName.\u0275fac = function FormArrayName_Factory(t) {
  return new (t || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormArrayName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormArrayName,
  selectors: [["", "formArrayName", ""]],
  inputs: {
    name: ["formArrayName", "name"]
  },
  features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
});
var FormArrayName = _FormArrayName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var _FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added)
      this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException();
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
};
_FormControlName._ngModelWarningSentOnce = false;
_FormControlName.\u0275fac = function FormControlName_Factory(t) {
  return new (t || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
};
_FormControlName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormControlName,
  selectors: [["", "formControlName", ""]],
  inputs: {
    name: ["formControlName", "name"],
    isDisabled: ["disabled", "isDisabled"],
    model: ["ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormControlName = _FormControlName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null)
    return `${value}`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var _SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
};
_SelectControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectControlValueAccessor_BaseFactory;
  return function SelectControlValueAccessor_Factory(t) {
    return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(t || _SelectControlValueAccessor);
  };
})();
_SelectControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SelectControlValueAccessor,
  selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
  hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var SelectControlValueAccessor = _SelectControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select)
      this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select)
      this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_NgSelectOption.\u0275fac = function NgSelectOption_Factory(t) {
  return new (t || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
};
_NgSelectOption.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgSelectOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var NgSelectOption = _NgSelectOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null)
    return `${value}`;
  if (typeof value === "string")
    value = `'${value}'`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var _SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
};
_SelectMultipleControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectMultipleControlValueAccessor_BaseFactory;
  return function SelectMultipleControlValueAccessor_Factory(t) {
    return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(t || _SelectMultipleControlValueAccessor);
  };
})();
_SelectMultipleControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SelectMultipleControlValueAccessor,
  selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
  hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target);
      })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var SelectMultipleControlValueAccessor = _SelectMultipleControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _\u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_\u0275NgSelectMultipleOption.\u0275fac = function \u0275NgSelectMultipleOption_Factory(t) {
  return new (t || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
};
_\u0275NgSelectMultipleOption.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _\u0275NgSelectMultipleOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var \u0275NgSelectMultipleOption = _\u0275NgSelectMultipleOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var _AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
};
_AbstractValidatorDirective.\u0275fac = function AbstractValidatorDirective_Factory(t) {
  return new (t || _AbstractValidatorDirective)();
};
_AbstractValidatorDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AbstractValidatorDirective,
  features: [\u0275\u0275NgOnChangesFeature]
});
var AbstractValidatorDirective = _AbstractValidatorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var _MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max) => maxValidator(max);
  }
};
_MaxValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MaxValidator_BaseFactory;
  return function MaxValidator_Factory(t) {
    return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(t || _MaxValidator);
  };
})();
_MaxValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MaxValidator,
  selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
    }
  },
  inputs: {
    max: "max"
  },
  features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MaxValidator = _MaxValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var _MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min) => minValidator(min);
  }
};
_MinValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MinValidator_BaseFactory;
  return function MinValidator_Factory(t) {
    return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(t || _MinValidator);
  };
})();
_MinValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MinValidator,
  selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
    }
  },
  inputs: {
    min: "min"
  },
  features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MinValidator = _MinValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var _RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
};
_RequiredValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RequiredValidator_BaseFactory;
  return function RequiredValidator_Factory(t) {
    return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(t || _RequiredValidator);
  };
})();
_RequiredValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RequiredValidator,
  selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
  hostVars: 1,
  hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("required", ctx._enabled ? "" : null);
    }
  },
  inputs: {
    required: "required"
  },
  features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var RequiredValidator = _RequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var _CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
};
_CheckboxRequiredValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckboxRequiredValidator_BaseFactory;
  return function CheckboxRequiredValidator_Factory(t) {
    return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(t || _CheckboxRequiredValidator);
  };
})();
_CheckboxRequiredValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CheckboxRequiredValidator,
  selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("required", ctx._enabled ? "" : null);
    }
  },
  features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var CheckboxRequiredValidator = _CheckboxRequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var _EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
};
_EmailValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EmailValidator_BaseFactory;
  return function EmailValidator_Factory(t) {
    return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(t || _EmailValidator);
  };
})();
_EmailValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _EmailValidator,
  selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
  inputs: {
    email: "email"
  },
  features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var EmailValidator = _EmailValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var _MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
};
_MinLengthValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MinLengthValidator_BaseFactory;
  return function MinLengthValidator_Factory(t) {
    return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(t || _MinLengthValidator);
  };
})();
_MinLengthValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MinLengthValidator,
  selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
    }
  },
  inputs: {
    minlength: "minlength"
  },
  features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MinLengthValidator = _MinLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var _MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
};
_MaxLengthValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MaxLengthValidator_BaseFactory;
  return function MaxLengthValidator_Factory(t) {
    return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(t || _MaxLengthValidator);
  };
})();
_MaxLengthValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MaxLengthValidator,
  selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
    }
  },
  inputs: {
    maxlength: "maxlength"
  },
  features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MaxLengthValidator = _MaxLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var _PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
};
_PatternValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275PatternValidator_BaseFactory;
  return function PatternValidator_Factory(t) {
    return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(t || _PatternValidator);
  };
})();
_PatternValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _PatternValidator,
  selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function PatternValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
    }
  },
  inputs: {
    pattern: "pattern"
  },
  features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var PatternValidator = _PatternValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var _\u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
};
_\u0275InternalFormsSharedModule.\u0275fac = function \u0275InternalFormsSharedModule_Factory(t) {
  return new (t || _\u0275InternalFormsSharedModule)();
};
_\u0275InternalFormsSharedModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _\u0275InternalFormsSharedModule
});
_\u0275InternalFormsSharedModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [RadioControlRegistryModule]
});
var \u0275InternalFormsSharedModule = _\u0275InternalFormsSharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      imports: [RadioControlRegistryModule],
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1)
      return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled)
        return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var _FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
};
_FormBuilder.\u0275fac = function FormBuilder_Factory(t) {
  return new (t || _FormBuilder)();
};
_FormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FormBuilder,
  factory: _FormBuilder.\u0275fac,
  providedIn: "root"
});
var FormBuilder = _FormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NonNullableFormBuilder = class _NonNullableFormBuilder {
};
_NonNullableFormBuilder.\u0275fac = function NonNullableFormBuilder_Factory(t) {
  return new (t || _NonNullableFormBuilder)();
};
_NonNullableFormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NonNullableFormBuilder,
  factory: () => (() => inject(FormBuilder).nonNullable)(),
  providedIn: "root"
});
var NonNullableFormBuilder = _NonNullableFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var _UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
};
_UntypedFormBuilder.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275UntypedFormBuilder_BaseFactory;
  return function UntypedFormBuilder_Factory(t) {
    return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(t || _UntypedFormBuilder);
  };
})();
_UntypedFormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UntypedFormBuilder,
  factory: _UntypedFormBuilder.\u0275fac,
  providedIn: "root"
});
var UntypedFormBuilder = _UntypedFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("17.0.8");
var _FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_FormsModule.\u0275fac = function FormsModule_Factory(t) {
  return new (t || _FormsModule)();
};
_FormsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _FormsModule
});
_FormsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [\u0275InternalFormsSharedModule]
});
var FormsModule = _FormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var _ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_ReactiveFormsModule.\u0275fac = function ReactiveFormsModule_Factory(t) {
  return new (t || _ReactiveFormsModule)();
};
_ReactiveFormsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ReactiveFormsModule
});
_ReactiveFormsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [\u0275InternalFormsSharedModule]
});
var ReactiveFormsModule = _ReactiveFormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// src/app/admin/login/registration/registration.component.ts
function RegistrationComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "Please fill the Username");
    \u0275\u0275elementEnd();
  }
}
function RegistrationComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, " Please enter correct formate ");
    \u0275\u0275elementEnd();
  }
}
var _RegistrationComponent = class _RegistrationComponent {
  constructor(http, formBuilder, router, titleService, metaService) {
    this.http = http;
    this.router = router;
    this.titleService = titleService;
    this.metaService = metaService;
    this.postUrl = "https://hinditerm.com/demo/post/registration.php";
    this.min = 1e7;
    this.max = 99999999;
    this.user_code = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
    this.registration = new FormGroup({
      user_first_name: new FormControl("", [Validators.required]),
      user_last_name: new FormControl("", [Validators.required]),
      user_img: new FormControl("", [Validators.required]),
      user_add: new FormControl("", [Validators.required]),
      user_gender: new FormControl("", [Validators.required]),
      user_state: new FormControl("", [Validators.required]),
      user_city: new FormControl("", [Validators.required]),
      user_dob: new FormControl("", [Validators.required]),
      user_pincode: new FormControl("", [Validators.required]),
      user_email: new FormControl("", [Validators.required, Validators.pattern(this.emailRegEx)]),
      user_password: new FormControl("", [Validators.required]),
      user_date: new FormControl({ value: this.getFormattedDate(), disabled: true }),
      user_id: new FormControl({ value: this.user_code, disabled: true })
    });
  }
  //Math.random().toString(16).slice(2)
  ngOnInit() {
    this.titleService.setTitle("Registration Page");
    this.metaService.updateTag({ name: "description", content: "Registration page content" });
  }
  getFormattedDate() {
    let date = /* @__PURE__ */ new Date();
    let fullDate = date.toDateString();
    let day = fullDate.substring(0, 3);
    let date1 = fullDate.substring(7, 11);
    let m = fullDate.substring(3, 7);
    let y = fullDate.substring(10, 16);
    return date;
  }
  get emailid() {
    return this.registration.get("user_email");
  }
  get ctrl() {
    return this.registration.controls;
  }
  onSelectedFile(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img1 = event.target.files[0];
      this.registration.get("user_img").setValue(img1);
    }
  }
  registrationSubmit() {
    alert("hi");
    if (this.ctrl.user_first_name.valid == false) {
      return alert("first name required");
    } else if (this.ctrl.user_last_name.valid == false) {
      return alert("Last name required");
    } else if (this.ctrl.user_img.valid == false) {
      return alert("Profile Image Should be must");
    } else if (this.ctrl.user_add.valid == false) {
      return alert("Address is required");
    } else if (this.ctrl.user_gender.valid == false) {
      return alert("Gender is required");
    } else if (this.ctrl.user_state.valid == false) {
      return alert("State is required");
    } else if (this.ctrl.user_city.valid == false) {
      return alert("City is required");
    } else if (this.ctrl.user_dob.valid == false) {
      return alert("User Date of Birth required");
    } else if (this.ctrl.user_pincode.valid == false) {
      return alert("User PinCode required");
    } else if (this.ctrl.user_email.valid == false) {
      return alert("User Email required");
    } else if (this.ctrl.user_password.valid == false) {
      return alert("User Password required");
    } else {
      sessionStorage.setItem("user_email", this.ctrl.user_email.value);
      const formData = new FormData();
      formData.append("img1", this.registration.get("user_img").value);
      formData.append("user_first_name", this.registration.controls["user_first_name"].value);
      formData.append("user_last_name", this.registration.controls["user_last_name"].value);
      formData.append("user_add", this.registration.controls["user_add"].value);
      formData.append("user_gender", this.registration.controls["user_gender"].value);
      formData.append("user_state", this.registration.controls["user_state"].value);
      formData.append("user_city", this.registration.controls["user_city"].value);
      formData.append("user_dob", this.registration.controls["user_dob"].value);
      formData.append("user_pincode", this.registration.controls["user_pincode"].value);
      formData.append("user_email", this.registration.controls["user_email"].value);
      formData.append("user_password", this.registration.controls["user_password"].value);
      formData.append("user_date", this.registration.controls["user_date"].value);
      formData.append("user_id", this.registration.controls["user_id"].value);
      formData.append("user_code", this.user_code);
      this.http.post(this.postUrl, formData).subscribe((data) => {
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(this.ctrl.user_email.value));
        sessionStorage.setItem("user_code", this.ctrl.user_id.value);
        let user_code = sessionStorage.getItem("user_code");
        console.log(user_code);
        alert("thanks for the registration..");
        this.router.navigate([`registrationotp/${user_code}`]);
      });
    }
  }
};
_RegistrationComponent.\u0275fac = function RegistrationComponent_Factory(t) {
  return new (t || _RegistrationComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Meta));
};
_RegistrationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistrationComponent, selectors: [["app-registration"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 106, vars: 8, consts: [[1, "registration-area"], [1, "container"], [1, "row"], [1, "col-md-3", "pr-0", "bg-primary"], [1, "registraion-left-area", "text-center", "text-white", "pb-3"], ["src", "/assets/img/registration.png", "alt", "", 1, "img-fluid"], [1, "btn", "btn-dark", "text-white"], [1, "col-md-9"], [1, "card", "mt-20"], [1, "card-header", "p-2", "bg-primary"], [1, "card-title", "text-white"], ["method", "post", "enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "col-md-4"], [1, "form-outline"], ["for", "form3Example1m", 1, "form-label"], ["type", "text", "oninput", "this.value =  this.value.replace(/[^a-zA-Z]+/g, '')", "formControlName", "user_first_name", 1, "form-control", "form-control-lg", 3, "maxLength"], ["class", "text-danger", 4, "ngIf"], ["for", "form3Example1n", 1, "form-label"], ["type", "text", "oninput", "this.value = this.value.replace (/[^a-zA-Z]+/g, '')", "formControlName", "user_last_name", 1, "form-control", "form-control-lg", 3, "maxLength"], ["for", "form3Example1m1", 1, "form-label"], ["type", "file", "formControlName", "user_img", 1, "form-control", "form-control-lg", 3, "change"], ["for", "form3Example8", 1, "form-label"], ["type", "text", "formControlName", "user_add", 1, "form-control", "form-control-lg", 3, "maxlength"], [1, "d-md-flex", "justify-content-start", "align-items-center", "py-2"], [1, "mb-0"], [1, "form-check", "form-check-inline", "mb-0"], ["type", "radio", "formControlName", "user_gender", "name", "user_gender", "id", "femaleGender", "value", "Female", 1, "form-check-input"], ["for", "femaleGender", 1, "form-check-label"], ["formControlName", "user_gender", "type", "radio", "name", "user_gender", "id", "maleGender", "value", "Male", 1, "form-check-input"], ["for", "maleGender", 1, "form-check-label"], ["formControlName", "user_gender", "type", "radio", "name", "user_gender", "id", "otherGender", "value", "Transgender", 1, "form-check-input"], ["for", "otherGender", 1, "form-check-label"], [1, "form-check-label"], ["formControlName", "user_state", "type", "text", 1, "form-control"], [1, "form-label"], ["formControlName", "user_city", "type", "text", 1, "form-control"], ["for", "form3Example9", 1, "form-label"], ["type", "date", "formControlName", "user_dob", 1, "form-control", "form-control-lg"], ["for", "form3Example90", 1, "form-label"], ["type", "text", "oninput", "this.value = this.value.replace(/\\D+/g, '')", "formControlName", "user_pincode", 1, "form-control", "form-control-lg", 3, "maxLength"], ["for", "form3Example97", 1, "form-label"], ["type", "text", "formControlName", "user_email", 1, "form-control", "form-control-lg"], ["class", "text-danger text-bold", 4, "ngIf"], ["for", "form3Example99", 1, "form-label"], ["type", "text", "id", "form3Example99", "formControlName", "user_password", 1, "form-control", "form-control-lg"], [1, "col-md-3", 2, "display", "none"], ["type", "text", "formControlName", "user_date", 1, "form-control", "form-control-lg", 3, "value"], [1, "card-footer", "p-0"], [1, "d-flex", "justify-content-between", "align-items-center", "p-2"], [1, "text-center", "mb-0"], ["routerLink", "../login"], ["type", "submit", 1, "btn", "btn-warning", "btn-lg", "ms-2"], [1, "registraion-ads"], ["src", "/assets/img/ads.jpg", "alt", "", 1, "img-fluid"], [1, "text-danger"], [1, "text-danger", "text-bold"]], template: function RegistrationComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "img", 5);
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Welcome to NewsIndia24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Create a profile then you can share the genuine post.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 6);
    \u0275\u0275text(11, "Go to Home Page");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "p", 10);
    \u0275\u0275text(16, "Welcome to Registration Form");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "form", 11);
    \u0275\u0275listener("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_17_listener() {
      return ctx.registrationSubmit();
    });
    \u0275\u0275elementStart(18, "div", 12)(19, "div")(20, "div", 2)(21, "div", 13)(22, "div", 14)(23, "label", 15);
    \u0275\u0275text(24, "First name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 16);
    \u0275\u0275template(26, RegistrationComponent_span_26_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 13)(28, "div", 14)(29, "label", 18);
    \u0275\u0275text(30, "Last name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 13)(33, "div", 14)(34, "label", 20);
    \u0275\u0275text(35, "Your Profile Pic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 21);
    \u0275\u0275listener("change", function RegistrationComponent_Template_input_change_36_listener($event) {
      return ctx.onSelectedFile($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 2)(38, "div", 13)(39, "div", 14)(40, "label", 22);
    \u0275\u0275text(41, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 13);
    \u0275\u0275element(44, "br");
    \u0275\u0275elementStart(45, "div", 24)(46, "h6", 25);
    \u0275\u0275text(47, "Gender: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 26);
    \u0275\u0275element(49, "input", 27);
    \u0275\u0275elementStart(50, "label", 28);
    \u0275\u0275text(51, "Female");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 26);
    \u0275\u0275element(53, "input", 29);
    \u0275\u0275elementStart(54, "label", 30);
    \u0275\u0275text(55, "Male");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 26);
    \u0275\u0275element(57, "input", 31);
    \u0275\u0275elementStart(58, "label", 32);
    \u0275\u0275text(59, "Other");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "div", 13)(61, "label", 33);
    \u0275\u0275text(62, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 2)(65, "div", 13)(66, "label", 35);
    \u0275\u0275text(67, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 13)(70, "div", 14)(71, "label", 37);
    \u0275\u0275text(72, "DOB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "input", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 13)(75, "div", 14)(76, "label", 39);
    \u0275\u0275text(77, "Pincode");
    \u0275\u0275elementEnd();
    \u0275\u0275element(78, "input", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 2)(80, "div", 13)(81, "div", 14)(82, "label", 41);
    \u0275\u0275text(83, "Email ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "input", 42);
    \u0275\u0275template(85, RegistrationComponent_div_85_Template, 2, 0, "div", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 13)(87, "div", 14)(88, "label", 44);
    \u0275\u0275text(89, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "input", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 46)(92, "div", 14)(93, "label", 44);
    \u0275\u0275text(94, "Registration Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(95, "input", 47);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(96, "div", 48)(97, "div", 49)(98, "p", 50);
    \u0275\u0275text(99, "Do Have You Account ? ");
    \u0275\u0275elementStart(100, "a", 51);
    \u0275\u0275text(101, "Login");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "button", 52);
    \u0275\u0275text(103, "Submit");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(104, "div", 53);
    \u0275\u0275element(105, "img", 54);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    \u0275\u0275advance(17);
    \u0275\u0275property("formGroup", ctx.registration);
    \u0275\u0275advance(8);
    \u0275\u0275property("maxLength", 15);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.ctrl.user_first_name.invalid && ctx.ctrl.user_first_name.touched);
    \u0275\u0275advance(5);
    \u0275\u0275property("maxLength", 15);
    \u0275\u0275advance(11);
    \u0275\u0275property("maxlength", 100);
    \u0275\u0275advance(36);
    \u0275\u0275property("maxLength", 8);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx.registration.get("user_email")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["pattern"]);
    \u0275\u0275advance(10);
    \u0275\u0275propertyInterpolate("value", ctx.getFormattedDate());
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, NgIf, HttpClientModule, CommonModule, RouterLink], styles: ["\n\n.registration-area[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.registraion-ads[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid gray;\n  margin-top: 20px;\n}\n.registraion-ads[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9hZG1pbi9sb2dpbi9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi5yZWdpc3RyYXRpb24tYXJlYXtcbiBcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG59XG5sYWJlbHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yZWdpc3RyYWlvbi1hZHN7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5yZWdpc3RyYWlvbi1hZHMgaDF7XG4gICAgIGNvbG9yOiAjZmZmO1xufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxDQUFDO0FBRUcsV0FBUyxLQUFLO0FBQ2xCO0FBQ0E7QUFDSSxlQUFhO0FBQ2pCO0FBQ0EsQ0FBQztBQUNHLFlBQVU7QUFFVixVQUFRLElBQUksTUFBTTtBQUNsQixjQUFZO0FBQ2hCO0FBQ0EsQ0FOQyxnQkFNZ0I7QUFDWixTQUFPO0FBQ1o7IiwKICAibmFtZXMiOiBbXQp9Cg== */"] });
var RegistrationComponent = _RegistrationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistrationComponent, { className: "RegistrationComponent", filePath: "src\\app\\admin\\login\\registration\\registration.component.ts", lineNumber: 16 });
})();

// src/app/admin/login/login.component.ts
var _LoginComponent = class _LoginComponent {
  constructor(http, formBuilder, router) {
    this.http = http;
    this.router = router;
    this.login = new FormGroup({
      user_email: new FormControl("", [Validators.required]),
      user_password: new FormControl("", [Validators.required])
    });
    this.products = [];
    this.getUrl = "https://hinditerm.com/demo/post/user-auth.php";
  }
  get controlLogin() {
    return this.login.controls;
  }
  loginSubmit() {
    if (this.controlLogin.user_email.valid == false) {
      return alert("Please Fill Email Id");
    } else if (this.controlLogin.user_password.valid == false) {
      return alert("please fill the password");
    } else {
      let formData = new FormData();
      formData.append("user_email", this.login.controls["user_email"].value);
      formData.append("user_password", this.login.controls["user_password"].value);
      this.http.post(this.getUrl, formData).subscribe((res) => {
        sessionStorage.setItem("Login successful", res.message);
        sessionStorage.setItem("authorized", res.authorized);
        sessionStorage.setItem("authorizedUserId", res.authorizedUserId);
        let loginUser = sessionStorage.getItem("Login successful");
        let authorized_user = sessionStorage.getItem("authorized");
        if (loginUser == "Not Authorized User" && authorized_user != res.authorized) {
          alert("You are not varified user");
          this.router.navigate(["/admin/otpvarification"]);
        }
        if (loginUser == "Login successful" && authorized_user == res.authorized) {
          alert("login successfully");
          this.router.navigate(["/admin/dashboard"]);
        } else {
          alert("Please login with valid email id & password");
        }
      });
    }
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(t) {
  return new (t || _LoginComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 1, consts: [[1, "d-flex", "w-100", "h-100"], [1, "container", "d-flex", "flex-column"], [1, "row", "vh-100"], [1, "col-sm-10", "col-md-8", "col-lg-6", "col-xl-5", "mx-auto", "d-table", "h-100"], [1, "d-table-cell", "align-middle"], [1, "text-center", "mt-4"], [1, "h2"], [1, "lead"], [1, "card"], [1, "card-body"], [1, "m-sm-3"], ["method", "post", "enctype", "multipart/form-data", 1, "signin-form", 3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["formControlName", "user_email", "type", "email", "name", "email", "placeholder", "Enter your email", 1, "form-control", "form-control-lg"], ["formControlName", "user_password", "type", "password", "name", "password", "placeholder", "Enter your password", 1, "form-control", "form-control-lg"], ["href", "pages-reset-password.html"], [1, "form-check", "align-items-center"], ["id", "customControlInline", "type", "checkbox", "value", "remember-me", "name", "remember-me", "checked", "", 1, "form-check-input"], ["for", "customControlInline", 1, "form-check-label", "text-small"], [1, "d-grid", "gap-2", "mt-3"], ["type", "submit", "value", "Login", 1, "btn", "btn-lg", "btn-primary"], [1, "text-center", "mb-3"], ["routerLink", "../registration"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
    \u0275\u0275text(7, "Welcome back!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 7);
    \u0275\u0275text(9, " Login in to your account to continue ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "form", 11);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_13_listener() {
      return ctx.loginSubmit();
    });
    \u0275\u0275elementStart(14, "div", 12)(15, "label", 13);
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 12)(19, "label", 13);
    \u0275\u0275text(20, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 15);
    \u0275\u0275elementStart(22, "small")(23, "a", 16);
    \u0275\u0275text(24, "Forgot password?");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div")(26, "div", 17);
    \u0275\u0275element(27, "input", 18);
    \u0275\u0275elementStart(28, "label", 19);
    \u0275\u0275text(29, "Remember me");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 20);
    \u0275\u0275element(31, "input", 21);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(32, "div", 22);
    \u0275\u0275text(33, " Don't have an account? ");
    \u0275\u0275elementStart(34, "a", 23);
    \u0275\u0275text(35, "New Registration");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275property("formGroup", ctx.login);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, HttpClientModule, CommonModule, RouterLink], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\admin\\login\\login.component.ts", lineNumber: 15 });
})();

// src/app/admin/dashboard/dashboard.component.ts
var _DashboardComponent = class _DashboardComponent {
  constructor(router) {
    this.router = router;
    this.user = sessionStorage.getItem("authorized")?.toString();
    this.logiSuccess = sessionStorage.getItem("Login successful")?.toString();
    this.authorizedUserId = sessionStorage.getItem("authorizedUserId")?.toString();
  }
  ngOnInit() {
    console.log("login", this.logiSuccess);
    if (typeof this.logiSuccess === "undefined") {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
    if (this.logiSuccess.length === 0) {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
    if (typeof this.user == null || this.notAuthorized == "Not Authorized User" || this.user.length === 0 || this.logiSuccess.length == 0 || this.logiSuccess !== "Login successful") {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }
};
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(t) {
  return new (t || _DashboardComponent)(\u0275\u0275directiveInject(Router));
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 331, vars: 0, consts: [[1, "wrapper"], ["id", "sidebar", 1, "sidebar", "js-sidebar"], [1, "sidebar-content", "js-simplebar"], ["href", "https://livenewsinhindi.com/", 1, "sidebar-brand"], [1, "sidebar-brand-text", "align-middle"], [1, "badge", "bg-primary", "text-uppercase"], ["width", "32px", "height", "32px", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#FFFFFF", "stroke-width", "1.5", "stroke-linecap", "square", "stroke-linejoin", "miter", "color", "#FFFFFF", 1, "sidebar-brand-icon", "align-middle", 2, "margin-left", "-3px"], ["d", "M12 4L20 8.00004L12 12L4 8.00004L12 4Z"], ["d", "M20 12L12 16L4 12"], ["d", "M20 16L12 20L4 16"], [1, "sidebar-nav"], [1, "sidebar-item", "active"], ["data-bs-target", "#pages", "data-bs-toggle", "collapse", 1, "sidebar-link"], ["data-feather", "layout", 1, "align-middle"], [1, "align-middle"], ["id", "pages", "data-bs-parent", "#sidebar", 1, "sidebar-dropdown", "list-unstyled", "collapse", "show"], [1, "sidebar-item"], ["routerLink", "viewpost", 1, "sidebar-link"], [1, "sidebar-badge", "badge", "bg-primary"], ["routerLink", "createpost", 1, "sidebar-link"], ["data-bs-target", "#stories", "data-bs-toggle", "collapse", 1, "sidebar-link", "collapsed"], ["id", "stories", "data-bs-parent", "#sidebar", 1, "sidebar-dropdown", "list-unstyled", "collapse", "show"], ["routerLink", "webstoriesread", 1, "sidebar-link"], ["routerLink", "webstoriescreate", 1, "sidebar-link"], [1, "sidebar-header"], ["data-bs-target", "#ui", "data-bs-toggle", "collapse", 1, "sidebar-link", "collapsed"], ["data-feather", "briefcase", 1, "align-middle"], ["id", "ui", "data-bs-parent", "#sidebar", 1, "sidebar-dropdown", "list-unstyled", "collapse"], ["href", "#", 1, "sidebar-link"], [1, "sidebar-cta"], [1, "sidebar-cta-content"], [1, "d-inline-block", "mb-2"], [1, "mb-3", "text-sm"], [1, "d-grid"], ["href", "#", "target", "_blank", 1, "btn", "btn-outline-primary"], [1, "main"], [1, "navbar", "navbar-expand", "navbar-light", "navbar-bg"], [1, "sidebar-toggle", "js-sidebar-toggle"], [1, "hamburger", "align-self-center"], [1, "d-none", "d-sm-inline-block"], [1, "input-group", "input-group-navbar"], ["type", "text", "placeholder", "Search\u2026", "aria-label", "Search", 1, "form-control"], ["type", "button", 1, "btn"], ["data-feather", "search", 1, "align-middle"], [1, "navbar-nav", "d-none", "d-lg-flex"], [1, "nav-item", "px-2", "dropdown"], ["href", "#", "id", "megaDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "megaDropdown", 1, "dropdown-menu", "dropdown-menu-start", "dropdown-mega"], [1, "d-md-flex", "align-items-start", "justify-content-start"], [1, "dropdown-mega-list"], [1, "dropdown-header"], ["href", "#", 1, "dropdown-item"], [1, "nav-item", "dropdown"], ["href", "#", "id", "resourcesDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "resourcesDropdown", 1, "dropdown-menu"], ["href", "#", "target", "_blank", 1, "dropdown-item"], ["data-feather", "home", 1, "align-middle", "me-1"], ["data-feather", "book-open", 1, "align-middle", "me-1"], ["data-feather", "edit", 1, "align-middle", "me-1"], [1, "navbar-collapse", "collapse"], [1, "navbar-nav", "navbar-align"], ["href", "#", "id", "alertsDropdown", "data-bs-toggle", "dropdown", 1, "nav-icon", "dropdown-toggle"], [1, "position-relative"], ["data-feather", "bell", 1, "align-middle"], [1, "indicator"], ["aria-labelledby", "alertsDropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "py-0"], [1, "dropdown-menu-header"], [1, "list-group"], ["href", "#", 1, "list-group-item"], [1, "row", "g-0", "align-items-center"], [1, "col-2"], ["data-feather", "alert-circle", 1, "text-danger"], [1, "col-10"], [1, "text-dark"], [1, "text-muted", "small", "mt-1"], ["data-feather", "bell", 1, "text-warning"], ["data-feather", "home", 1, "text-primary"], ["data-feather", "user-plus", 1, "text-success"], [1, "dropdown-menu-footer"], ["href", "#", 1, "text-muted"], ["href", "#", "id", "messagesDropdown", "data-bs-toggle", "dropdown", 1, "nav-icon", "dropdown-toggle"], ["data-feather", "message-square", 1, "align-middle"], ["aria-labelledby", "messagesDropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "py-0"], ["src", "assets/img/avatars/avatar-5.jpg", "alt", "Vanessa Tucker", 1, "avatar", "img-fluid", "rounded-circle"], [1, "col-10", "ps-2"], ["src", "assets/img/avatars/avatar-2.jpg", "alt", "William Harris", 1, "avatar", "img-fluid", "rounded-circle"], ["src", "assets/img/avatars/avatar-4.jpg", "alt", "Christina Mason", 1, "avatar", "img-fluid", "rounded-circle"], ["src", "assets/img/avatars/avatar-3.jpg", "alt", "Sharon Lessman", 1, "avatar", "img-fluid", "rounded-circle"], ["href", "#", "id", "languageDropdown", "data-bs-toggle", "dropdown", 1, "nav-flag", "dropdown-toggle"], ["src", "assets/img/flags/us.png", "alt", "English"], ["aria-labelledby", "languageDropdown", 1, "dropdown-menu", "dropdown-menu-end"], ["src", "assets/img/flags/us.png", "alt", "English", "width", "20", 1, "align-middle", "me-1"], ["src", "assets/img/flags/es.png", "alt", "Spanish", "width", "20", 1, "align-middle", "me-1"], ["src", "assets/img/flags/ru.png", "alt", "Russian", "width", "20", 1, "align-middle", "me-1"], ["src", "assets/img/flags/de.png", "alt", "German", "width", "20", 1, "align-middle", "me-1"], [1, "nav-item"], ["href", "#", 1, "nav-icon", "js-fullscreen", "d-none", "d-lg-block"], ["data-feather", "maximize", 1, "align-middle"], ["href", "#", "data-bs-toggle", "dropdown", 1, "nav-icon", "pe-md-0", "dropdown-toggle"], ["src", "assets/img/avatars/avatar.jpg", "alt", "Charles Hall", 1, "avatar", "img-fluid", "rounded"], [1, "dropdown-menu", "dropdown-menu-end"], ["data-feather", "user", 1, "align-middle", "me-1"], ["data-feather", "pie-chart", 1, "align-middle", "me-1"], [1, "dropdown-divider"], ["data-feather", "settings", 1, "align-middle", "me-1"], ["data-feather", "help-circle", 1, "align-middle", "me-1"], [1, "dropdown-item", 3, "click"], [1, "content"], [1, "footer"], [1, "container-fluid"], [1, "row", "text-muted"], [1, "col-6", "text-start"], [1, "mb-0"], ["href", "https://livenewsinhindi.com", "target", "_blank", 1, "text-muted"], [1, "col-6", "text-end"], [1, "list-inline"], [1, "list-inline-item"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
    \u0275\u0275text(5, " Livenewsinhindi ");
    \u0275\u0275elementStart(6, "sup")(7, "small", 5);
    \u0275\u0275text(8, "Com");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 6);
    \u0275\u0275element(10, "path", 7)(11, "path", 8)(12, "path", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "ul", 10)(14, "li", 11)(15, "a", 12);
    \u0275\u0275element(16, "i", 13);
    \u0275\u0275elementStart(17, "span", 14);
    \u0275\u0275text(18, "Post");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ul", 15)(20, "li", 16)(21, "a", 17);
    \u0275\u0275text(22, "All Posts ");
    \u0275\u0275elementStart(23, "span", 18);
    \u0275\u0275text(24, "Pro");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "li", 16)(26, "a", 19);
    \u0275\u0275text(27, "New Post");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "li", 16)(29, "a", 20);
    \u0275\u0275element(30, "i", 13);
    \u0275\u0275elementStart(31, "span", 14);
    \u0275\u0275text(32, "Webstories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "ul", 21)(34, "li", 16)(35, "a", 22);
    \u0275\u0275text(36, "All ");
    \u0275\u0275elementStart(37, "span", 18);
    \u0275\u0275text(38, "Pro");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "li", 16)(40, "a", 23);
    \u0275\u0275text(41, "Create new");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "li", 24);
    \u0275\u0275text(43, " Paid Advertisement ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "li", 16)(45, "a", 25);
    \u0275\u0275element(46, "i", 26);
    \u0275\u0275elementStart(47, "span", 14);
    \u0275\u0275text(48, "Ads");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "ul", 27)(50, "li", 16)(51, "a", 28);
    \u0275\u0275text(52, "New Ads ");
    \u0275\u0275elementStart(53, "span", 18);
    \u0275\u0275text(54, "Pro");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "li", 16)(56, "a", 28);
    \u0275\u0275text(57, "View Ads");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(58, "div", 29)(59, "div", 30)(60, "strong", 31);
    \u0275\u0275text(61, "Go to website");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 32);
    \u0275\u0275text(63, " Your weekly sales report is ready for download! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 33)(65, "a", 34);
    \u0275\u0275text(66, "Download");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(67, "div", 35)(68, "nav", 36)(69, "a", 37);
    \u0275\u0275element(70, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "form", 39)(72, "div", 40);
    \u0275\u0275element(73, "input", 41);
    \u0275\u0275elementStart(74, "button", 42);
    \u0275\u0275element(75, "i", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "ul", 44)(77, "li", 45)(78, "a", 46);
    \u0275\u0275text(79, " Mega Menu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 47)(81, "div", 48)(82, "div", 49)(83, "div", 50);
    \u0275\u0275text(84, "UI Elements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "a", 51);
    \u0275\u0275text(86, "Alerts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "a", 51);
    \u0275\u0275text(88, "Buttons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "a", 51);
    \u0275\u0275text(90, "Cards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "a", 51);
    \u0275\u0275text(92, "Carousel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "a", 51);
    \u0275\u0275text(94, "General");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "a", 51);
    \u0275\u0275text(96, "Grid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "a", 51);
    \u0275\u0275text(98, "Modals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "a", 51);
    \u0275\u0275text(100, "Tabs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "a", 51);
    \u0275\u0275text(102, "Typography");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 49)(104, "div", 50);
    \u0275\u0275text(105, "Forms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "a", 51);
    \u0275\u0275text(107, "Layouts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "a", 51);
    \u0275\u0275text(109, "Basic Inputs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "a", 51);
    \u0275\u0275text(111, "Input Groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "a", 51);
    \u0275\u0275text(113, "Advanced Inputs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "a", 51);
    \u0275\u0275text(115, "Editors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "a", 51);
    \u0275\u0275text(117, "Validation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "a", 51);
    \u0275\u0275text(119, "Wizard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 49)(121, "div", 50);
    \u0275\u0275text(122, "Tables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "a", 51);
    \u0275\u0275text(124, "Basic Tables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "a", 51);
    \u0275\u0275text(126, "Responsive Table");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "a", 51);
    \u0275\u0275text(128, "Table with Buttons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "a", 51);
    \u0275\u0275text(130, "Column Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "a", 51);
    \u0275\u0275text(132, "Muulti Selection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "a", 51);
    \u0275\u0275text(134, "Ajax Sourced Data");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(135, "li", 52)(136, "a", 53);
    \u0275\u0275text(137, " Resources ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "div", 54)(139, "a", 55);
    \u0275\u0275element(140, "i", 56);
    \u0275\u0275text(141, " Homepage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "a", 55);
    \u0275\u0275element(143, "i", 57);
    \u0275\u0275text(144, " Documentation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "a", 55);
    \u0275\u0275element(146, "i", 58);
    \u0275\u0275text(147, " Changelog");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(148, "div", 59)(149, "ul", 60)(150, "li", 52)(151, "a", 61)(152, "div", 62);
    \u0275\u0275element(153, "i", 63);
    \u0275\u0275elementStart(154, "span", 64);
    \u0275\u0275text(155, "4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(156, "div", 65)(157, "div", 66);
    \u0275\u0275text(158, " 4 New Notifications ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "div", 67)(160, "a", 68)(161, "div", 69)(162, "div", 70);
    \u0275\u0275element(163, "i", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "div", 72)(165, "div", 73);
    \u0275\u0275text(166, "Update completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "div", 74);
    \u0275\u0275text(168, "Restart server 12 to complete the update.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "div", 74);
    \u0275\u0275text(170, "30m ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(171, "a", 68)(172, "div", 69)(173, "div", 70);
    \u0275\u0275element(174, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "div", 72)(176, "div", 73);
    \u0275\u0275text(177, "Lorem ipsum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "div", 74);
    \u0275\u0275text(179, "Aliquam ex eros, imperdiet vulputate hendrerit et.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "div", 74);
    \u0275\u0275text(181, "2h ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(182, "a", 68)(183, "div", 69)(184, "div", 70);
    \u0275\u0275element(185, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "div", 72)(187, "div", 73);
    \u0275\u0275text(188, "Login from 192.186.1.8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "div", 74);
    \u0275\u0275text(190, "5h ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(191, "a", 68)(192, "div", 69)(193, "div", 70);
    \u0275\u0275element(194, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "div", 72)(196, "div", 73);
    \u0275\u0275text(197, "New connection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "div", 74);
    \u0275\u0275text(199, "Christina accepted your request.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "div", 74);
    \u0275\u0275text(201, "14h ago");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(202, "div", 78)(203, "a", 79);
    \u0275\u0275text(204, "Show all notifications");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(205, "li", 52)(206, "a", 80)(207, "div", 62);
    \u0275\u0275element(208, "i", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(209, "div", 82)(210, "div", 66)(211, "div", 62);
    \u0275\u0275text(212, " 4 New Messages ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(213, "div", 67)(214, "a", 68)(215, "div", 69)(216, "div", 70);
    \u0275\u0275element(217, "img", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(218, "div", 84)(219, "div", 73);
    \u0275\u0275text(220, "Vanessa Tucker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(221, "div", 74);
    \u0275\u0275text(222, "Nam pretium turpis et arcu. Duis arcu tortor.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(223, "div", 74);
    \u0275\u0275text(224, "15m ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(225, "a", 68)(226, "div", 69)(227, "div", 70);
    \u0275\u0275element(228, "img", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(229, "div", 84)(230, "div", 73);
    \u0275\u0275text(231, "William Harris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(232, "div", 74);
    \u0275\u0275text(233, "Curabitur ligula sapien euismod vitae.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(234, "div", 74);
    \u0275\u0275text(235, "2h ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(236, "a", 68)(237, "div", 69)(238, "div", 70);
    \u0275\u0275element(239, "img", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(240, "div", 84)(241, "div", 73);
    \u0275\u0275text(242, "Christina Mason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(243, "div", 74);
    \u0275\u0275text(244, "Pellentesque auctor neque nec urna.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(245, "div", 74);
    \u0275\u0275text(246, "4h ago");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(247, "a", 68)(248, "div", 69)(249, "div", 70);
    \u0275\u0275element(250, "img", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(251, "div", 84)(252, "div", 73);
    \u0275\u0275text(253, "Sharon Lessman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(254, "div", 74);
    \u0275\u0275text(255, "Aenean tellus metus, bibendum sed, posuere ac, mattis non.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(256, "div", 74);
    \u0275\u0275text(257, "5h ago");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(258, "div", 78)(259, "a", 79);
    \u0275\u0275text(260, "Show all messages");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(261, "li", 52)(262, "a", 88);
    \u0275\u0275element(263, "img", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(264, "div", 90)(265, "a", 51);
    \u0275\u0275element(266, "img", 91);
    \u0275\u0275elementStart(267, "span", 14);
    \u0275\u0275text(268, "English");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(269, "a", 51);
    \u0275\u0275element(270, "img", 92);
    \u0275\u0275elementStart(271, "span", 14);
    \u0275\u0275text(272, "Spanish");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(273, "a", 51);
    \u0275\u0275element(274, "img", 93);
    \u0275\u0275elementStart(275, "span", 14);
    \u0275\u0275text(276, "Russian");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(277, "a", 51);
    \u0275\u0275element(278, "img", 94);
    \u0275\u0275elementStart(279, "span", 14);
    \u0275\u0275text(280, "German");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(281, "li", 95)(282, "a", 96)(283, "div", 62);
    \u0275\u0275element(284, "i", 97);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(285, "li", 52)(286, "a", 98);
    \u0275\u0275element(287, "img", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(288, "div", 100)(289, "a", 51);
    \u0275\u0275element(290, "i", 101);
    \u0275\u0275text(291, " Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(292, "a", 51);
    \u0275\u0275element(293, "i", 102);
    \u0275\u0275text(294, " Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275element(295, "div", 103);
    \u0275\u0275elementStart(296, "a", 51);
    \u0275\u0275element(297, "i", 104);
    \u0275\u0275text(298, " Settings & Privacy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(299, "a", 51);
    \u0275\u0275element(300, "i", 105);
    \u0275\u0275text(301, " Help Center");
    \u0275\u0275elementEnd();
    \u0275\u0275element(302, "div", 103);
    \u0275\u0275elementStart(303, "a", 106);
    \u0275\u0275listener("click", function DashboardComponent_Template_a_click_303_listener() {
      return ctx.logout();
    });
    \u0275\u0275text(304, "Logout");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(305, "main", 107)(306, "div");
    \u0275\u0275element(307, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(308, "footer", 108)(309, "div", 109)(310, "div", 110)(311, "div", 111)(312, "p", 112)(313, "a", 113)(314, "strong");
    \u0275\u0275text(315, "Livenewinhindi.com");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(316, " \xA9 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(317, "div", 114)(318, "ul", 115)(319, "li", 116)(320, "a", 79);
    \u0275\u0275text(321, "Support");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(322, "li", 116)(323, "a", 79);
    \u0275\u0275text(324, "Help Center");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(325, "li", 116)(326, "a", 79);
    \u0275\u0275text(327, "Privacy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(328, "li", 116)(329, "a", 79);
    \u0275\u0275text(330, "Terms");
    \u0275\u0275elementEnd()()()()()()()()();
  }
}, dependencies: [RouterOutlet, CommonModule, RouterLink], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\admin\\dashboard\\dashboard.component.ts", lineNumber: 16 });
})();

// src/app/admin/login/registrationotp/registrationotp.component.ts
var _RegistrationotpComponent = class _RegistrationotpComponent {
  //  userUpadeVarifiedUrl = `http://balindra.com/post/user-varification.php/?user_code=${this.user_code}`
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.user_code = sessionStorage.getItem("user_code");
    this.userUrl = `https://hinditerm.com/demo/post/user-otp.php?user_code=${this.user_code}`;
    this.emailVar = new FormGroup({
      otp_vari: new FormControl("")
    });
    this.user_id = sessionStorage.getItem("user_id");
    this.getUrl = "https://hinditerm.com/demo/post/user-otp.php";
  }
  get ctrl() {
    return this.emailVar.controls;
  }
  emailVarSubmit() {
    if (this.ctrl.otp_vari.valid == false) {
      return alert("Please enter the OTP number take from on your email");
    } else {
      let formData = new FormData();
      formData.append("otp_vari", this.emailVar.controls["otp_vari"].value);
      this.http.post(this.userUrl, formData).subscribe((res) => {
        console.log(res);
        sessionStorage.setItem("OTP Varified", res.message);
        let loginUser = sessionStorage.getItem("OTP Varified");
        let user_id = sessionStorage.getItem("user_code");
        if (loginUser == "OTP Varified" && user_id == res.user_code) {
          alert("Your are successfully varified.");
          this.router.navigate(["/login"]);
        } else {
          alert("Please login with valid email id & password");
        }
      });
    }
  }
};
_RegistrationotpComponent.\u0275fac = function RegistrationotpComponent_Factory(t) {
  return new (t || _RegistrationotpComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_RegistrationotpComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistrationotpComponent, selectors: [["app-registrationotp"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 1, consts: [[1, "d-flex", "w-100", "h-100"], [1, "container", "d-flex", "flex-column"], [1, "row", "vh-100"], [1, "col-sm-10", "col-md-8", "col-lg-6", "col-xl-5", "mx-auto", "d-table", "h-100"], [1, "d-table-cell", "align-middle"], [1, "text-center", "mt-4"], [1, "h2"], [1, "lead"], [1, "card"], [1, "card-body"], [1, "m-sm-3"], ["method", "post", 3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["maxlength", "6", "formControlName", "otp_vari", "name", "otp_vari", "type", "number", "placeholder", "Enter your otp number", 1, "form-control", "form-control-lg"], [1, "d-grid", "gap-2", "mt-3"], ["type", "submit", "value", "Login", 1, "btn", "btn-lg", "btn-primary"], [1, "text-center", "mb-3"], ["routerLink", "../../registration"]], template: function RegistrationotpComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
    \u0275\u0275text(7, "Welcome back!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 7);
    \u0275\u0275text(9, " Registraion OTP No. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "form", 11);
    \u0275\u0275listener("ngSubmit", function RegistrationotpComponent_Template_form_ngSubmit_13_listener() {
      return ctx.emailVarSubmit();
    });
    \u0275\u0275elementStart(14, "div", 12)(15, "label", 13);
    \u0275\u0275text(16, "Registration OTP");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 15);
    \u0275\u0275element(19, "input", 16);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(20, "div", 17);
    \u0275\u0275text(21, " Don't have an account? ");
    \u0275\u0275elementStart(22, "a", 18);
    \u0275\u0275text(23, "New Registration");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275property("formGroup", ctx.emailVar);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, HttpClientModule, CommonModule, RouterLink], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var RegistrationotpComponent = _RegistrationotpComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistrationotpComponent, { className: "RegistrationotpComponent", filePath: "src\\app\\admin\\login\\registrationotp\\registrationotp.component.ts", lineNumber: 16 });
})();

// src/app/admin/login/otpvarification/otpvarification.component.ts
var _OtpvarificationComponent = class _OtpvarificationComponent {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.userUpadeVarifiedUrl = "https://hinditerm.com/demo/post/email-varification.php";
    this.emailVar = new FormGroup({
      user_email: new FormControl("", [Validators.required])
    });
  }
  emailVarSubmit() {
    if (this.emailVar.controls["user_email"].value.valid == false) {
      return alert("Please enter the Registration Email Id");
    } else {
      const formData = new FormData();
      formData.append("user_email", this.emailVar.controls["user_email"].value);
      this.http.post(this.userUpadeVarifiedUrl, formData).subscribe((response) => {
        if (response.status === true) {
          console.log("Data:", response.user_email, response.user_code);
          sessionStorage.setItem("user", response.user_email);
          sessionStorage.setItem("user_code", response.user_code);
          let userCode = sessionStorage.getItem("user_code");
          this.router.navigate([`registrationotp/${userCode}`]);
          alert(response.message);
        } else {
          alert(response.message);
        }
      });
    }
  }
};
_OtpvarificationComponent.\u0275fac = function OtpvarificationComponent_Factory(t) {
  return new (t || _OtpvarificationComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_OtpvarificationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtpvarificationComponent, selectors: [["app-otpvarification"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 1, consts: [[1, "ftco-section"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-6", "text-center", "mb-5"], [1, "heading-section"], [1, "col-md-12", "col-lg-10"], [1, "wrap", "d-md-flex"], [1, "img", 2, "background-image", "url(../../../../assets/img/breaking-news.jpg)"], [1, "login-wrap", "p-4", "p-md-5"], [1, "social-media", "d-flex", "justify-content-end"], ["href", "#", 1, "social-icon", "d-flex", "align-items-center", "justify-content-center"], [1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], ["method", "post", 3, "formGroup", "ngSubmit"], [1, "otp-field"], ["type", "text", "placeholder", "Registration Email Enter", "formControlName", "user_email", 1, "form-control", "mb-3"], ["type", "submit", "value", "submit", 1, "btn", "btn-lg", "bg-success"]], template: function OtpvarificationComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
    \u0275\u0275text(5, "Validate Your Account Through OTP");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 2)(7, "div", 5)(8, "div", 6);
    \u0275\u0275element(9, "div", 7);
    \u0275\u0275elementStart(10, "div", 8)(11, "div")(12, "div")(13, "h4");
    \u0275\u0275text(14, "Registraion Email ID");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "p", 9)(17, "a", 10);
    \u0275\u0275element(18, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 10);
    \u0275\u0275element(20, "span", 12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "form", 13);
    \u0275\u0275listener("ngSubmit", function OtpvarificationComponent_Template_form_ngSubmit_21_listener() {
      return ctx.emailVarSubmit();
    });
    \u0275\u0275elementStart(22, "div", 14);
    \u0275\u0275element(23, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 16);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(21);
    \u0275\u0275property("formGroup", ctx.emailVar);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, HttpClientModule, CommonModule], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var OtpvarificationComponent = _OtpvarificationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtpvarificationComponent, { className: "OtpvarificationComponent", filePath: "src\\app\\admin\\login\\otpvarification\\otpvarification.component.ts", lineNumber: 16 });
})();

// node_modules/@kolkov/angular-editor/fesm2020/kolkov-angular-editor.mjs
var _c0 = ["labelButton"];
var _c1 = (a0, a1) => ({
  "selected": a0,
  "focused": a1
});
function AeSelectComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function AeSelectComponent_button_8_Template_button_click_0_listener($event) {
      const restoredCtx = \u0275\u0275restoreView(_r6);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.optionSelect(item_r3, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c1, item_r3.value === ctx_r1.value, i_r4 === ctx_r1.optionId));
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", item_r3.label, " ");
  }
}
function AeSelectComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "No items for select");
    \u0275\u0275elementEnd();
  }
}
var _c2 = (a0) => ({
  "ae-expanded": a0
});
var _c3 = ["fileInput"];
function AngularEditorToolbarComponent_div_0_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "ae-select", 63);
    \u0275\u0275listener("ngModelChange", function AngularEditorToolbarComponent_div_0_div_55_Template_ae_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.customClassId = $event);
    })("change", function AngularEditorToolbarComponent_div_0_div_55_Template_ae_select_change_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.setCustomClass(ctx_r7.customClassId));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(1);
    \u0275\u0275property("options", ctx_r3.customClassList)("ngModel", ctx_r3.customClassId)("disabled", ctx_r3.htmlMode)("hidden", ctx_r3.isButtonHidden("customClasses"));
  }
}
function AngularEditorToolbarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.triggerCommand("undo"));
    });
    \u0275\u0275element(3, "i", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.triggerCommand("redo"));
    });
    \u0275\u0275element(5, "i", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 2)(7, "button", 7);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.triggerCommand("bold"));
    });
    \u0275\u0275element(8, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.triggerCommand("italic"));
    });
    \u0275\u0275element(10, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 11);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r13 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r13.triggerCommand("underline"));
    });
    \u0275\u0275element(12, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 13);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r14 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r14.triggerCommand("strikeThrough"));
    });
    \u0275\u0275element(14, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 15);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r15 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r15.triggerCommand("subscript"));
    });
    \u0275\u0275element(16, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 17);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r16 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r16.triggerCommand("superscript"));
    });
    \u0275\u0275element(18, "i", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 2)(20, "button", 19);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r17 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r17.triggerCommand("justifyLeft"));
    });
    \u0275\u0275element(21, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 21);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r18 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r18.triggerCommand("justifyCenter"));
    });
    \u0275\u0275element(23, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 23);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r19 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r19.triggerCommand("justifyRight"));
    });
    \u0275\u0275element(25, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 25);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r20 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r20.triggerCommand("justifyFull"));
    });
    \u0275\u0275element(27, "i", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 2)(29, "button", 27);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r21 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r21.triggerCommand("indent"));
    });
    \u0275\u0275element(30, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 29);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r22 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r22.triggerCommand("outdent"));
    });
    \u0275\u0275element(32, "i", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 2)(34, "button", 31);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r23 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r23.triggerCommand("insertUnorderedList"));
    });
    \u0275\u0275element(35, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 33);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r24 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r24.triggerCommand("insertOrderedList"));
    });
    \u0275\u0275element(37, "i", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 2)(39, "ae-select", 35);
    \u0275\u0275listener("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r25 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r25.block = $event);
    })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_39_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r26 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r26.triggerCommand(ctx_r26.block));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 2)(41, "ae-select", 36);
    \u0275\u0275listener("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r27 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r27.fontName = $event);
    })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_41_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r28 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r28.setFontName(ctx_r28.fontName));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 2)(43, "ae-select", 37);
    \u0275\u0275listener("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r29 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r29.fontSize = $event);
    })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_43_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r30 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r30.setFontSize(ctx_r30.fontSize));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 2)(45, "input", 38, 39);
    \u0275\u0275listener("change", function AngularEditorToolbarComponent_div_0_Template_input_change_45_listener() {
      \u0275\u0275restoreView(_r9);
      const _r1 = \u0275\u0275reference(46);
      const ctx_r31 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r31.insertColor(_r1.value, "textColor"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 40);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r9);
      const _r1 = \u0275\u0275reference(46);
      const ctx_r32 = \u0275\u0275nextContext();
      ctx_r32.focus();
      return \u0275\u0275resetView(_r1.click());
    });
    \u0275\u0275elementStart(48, "span", 41);
    \u0275\u0275element(49, "i", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "input", 38, 43);
    \u0275\u0275listener("change", function AngularEditorToolbarComponent_div_0_Template_input_change_50_listener() {
      \u0275\u0275restoreView(_r9);
      const _r2 = \u0275\u0275reference(51);
      const ctx_r33 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r33.insertColor(_r2.value, "backgroundColor"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 44);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r9);
      const _r2 = \u0275\u0275reference(51);
      const ctx_r34 = \u0275\u0275nextContext();
      ctx_r34.focus();
      return \u0275\u0275resetView(_r2.click());
    });
    \u0275\u0275elementStart(53, "span", 45);
    \u0275\u0275element(54, "i", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(55, AngularEditorToolbarComponent_div_0_div_55_Template, 2, 4, "div", 46);
    \u0275\u0275elementStart(56, "div", 2)(57, "button", 47);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r35 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r35.insertUrl());
    });
    \u0275\u0275element(58, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 49);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r36 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r36.triggerCommand("unlink"));
    });
    \u0275\u0275element(60, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "input", 51, 52);
    \u0275\u0275listener("change", function AngularEditorToolbarComponent_div_0_Template_input_change_61_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r37 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r37.onFileChanged($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 53);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r9);
      const _r4 = \u0275\u0275reference(62);
      const ctx_r38 = \u0275\u0275nextContext();
      ctx_r38.focus();
      return \u0275\u0275resetView(_r4.click());
    });
    \u0275\u0275element(64, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 55);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r39 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r39.insertVideo());
    });
    \u0275\u0275element(66, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 57);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r40 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r40.triggerCommand("insertHorizontalRule"));
    });
    \u0275\u0275element(68, "i", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 2)(70, "button", 59);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r41 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r41.triggerCommand("removeFormat"));
    });
    \u0275\u0275element(71, "i", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 2)(73, "button", 61);
    \u0275\u0275listener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r42 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r42.triggerCommand("toggleEditorMode"));
    });
    \u0275\u0275element(74, "i", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275projection(75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("hidden", ctx_r0.isButtonHidden("undo"));
    \u0275\u0275advance(2);
    \u0275\u0275property("hidden", ctx_r0.isButtonHidden("redo"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "bold-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("bold"));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "italic-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("italic"));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "underline-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("underline"));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "strikeThrough-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("strikeThrough"));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "subscript-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("subscript"));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "superscript-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("superscript"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "justifyLeft-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyLeft"));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "justifyCenter-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyCenter"));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "justifyRight-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyRight"));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "justifyFull-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyFull"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "indent-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("indent"));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "outdent-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("outdent"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "insertUnorderedList-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertUnorderedList"));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "insertOrderedList-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertOrderedList"));
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r0.headings)("ngModel", ctx_r0.block)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("heading"));
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r0.fonts)("ngModel", ctx_r0.fontName)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("fontName"));
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r0.fontSizes)("ngModel", ctx_r0.fontSize)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("fontSize"));
    \u0275\u0275advance(4);
    \u0275\u0275property("id", "foregroundColorPicker-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("textColor"));
    \u0275\u0275advance(5);
    \u0275\u0275property("id", "backgroundColorPicker-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("backgroundColor"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0._customClasses);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "link-" + ctx_r0.id)("disabled", ctx_r0.isLinkButtonDisabled)("hidden", ctx_r0.isButtonHidden("link"));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "unlink-" + ctx_r0.id)("disabled", ctx_r0.htmlMode || !ctx_r0.linkSelected)("hidden", ctx_r0.isButtonHidden("unlink"));
    \u0275\u0275advance(4);
    \u0275\u0275property("id", "insertImage-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertImage"));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "insertVideo-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertVideo"));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "insertHorizontalRule-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertHorizontalRule"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "clearFormatting-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("removeFormat"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "toggleEditorMode-" + ctx_r0.id)("hidden", ctx_r0.isButtonHidden("toggleEditorMode"));
  }
}
var _c4 = ["*"];
var _c5 = ["customButtons"];
var _c6 = ["editor"];
var _c7 = ["editorWrapper"];
var _c8 = ["editorToolbar"];
var _c9 = (a0) => ({
  executeCommandFn: a0
});
function AngularEditorComponent_angular_editor_toolbar_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "angular-editor-toolbar", 8, 9);
    \u0275\u0275listener("execute", function AngularEditorComponent_angular_editor_toolbar_2_Template_angular_editor_toolbar_execute_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.executeCommand($event));
    });
    \u0275\u0275elementContainer(2, 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r1.id)("uploadUrl", ctx_r1.config.uploadUrl)("upload", ctx_r1.config.upload)("showToolbar", ctx_r1.config.showToolbar !== void 0 ? ctx_r1.config.showToolbar : true)("fonts", ctx_r1.getFonts())("customClasses", ctx_r1.config.customClasses)("defaultFontName", ctx_r1.config.defaultFontName)("defaultFontSize", ctx_r1.config.defaultFontSize)("hiddenButtons", ctx_r1.config.toolbarHiddenButtons);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.customButtonsTemplateRef)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c9, ctx_r1.executeCommandFn));
  }
}
function AngularEditorComponent_angular_editor_toolbar_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "angular-editor-toolbar", 8, 9);
    \u0275\u0275listener("execute", function AngularEditorComponent_angular_editor_toolbar_9_Template_angular_editor_toolbar_execute_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.executeCommand($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r4.id)("uploadUrl", ctx_r4.config.uploadUrl)("upload", ctx_r4.config.upload)("showToolbar", ctx_r4.config.showToolbar !== void 0 ? ctx_r4.config.showToolbar : true)("fonts", ctx_r4.getFonts())("customClasses", ctx_r4.config.customClasses)("defaultFontName", ctx_r4.config.defaultFontName)("defaultFontSize", ctx_r4.config.defaultFontSize)("hiddenButtons", ctx_r4.config.toolbarHiddenButtons);
  }
}
var AngularEditorService = class {
  constructor(http, doc) {
    this.http = http;
    this.doc = doc;
    this.saveSelection = () => {
      if (this.doc.getSelection) {
        const sel = this.doc.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          this.savedSelection = sel.getRangeAt(0);
          this.selectedText = sel.toString();
        }
      } else if (this.doc.getSelection && this.doc.createRange) {
        this.savedSelection = document.createRange();
      } else {
        this.savedSelection = null;
      }
    };
  }
  /**
   * Executed command from editor header buttons exclude toggleEditorMode
   * @param command string from triggerCommand
   * @param value
   */
  executeCommand(command, value) {
    const commands = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "pre"];
    if (commands.includes(command)) {
      this.doc.execCommand("formatBlock", false, command);
      return;
    }
    this.doc.execCommand(command, false, value);
  }
  /**
   * Create URL link
   * @param url string from UI prompt
   */
  createLink(url) {
    if (!url.includes("http")) {
      this.doc.execCommand("createlink", false, url);
    } else {
      const newUrl = '<a href="' + url + '" target="_blank">' + this.selectedText + "</a>";
      this.insertHtml(newUrl);
    }
  }
  /**
   * insert color either font or background
   *
   * @param color color to be inserted
   * @param where where the color has to be inserted either text/background
   */
  insertColor(color, where) {
    const restored = this.restoreSelection();
    if (restored) {
      if (where === "textColor") {
        this.doc.execCommand("foreColor", false, color);
      } else {
        this.doc.execCommand("hiliteColor", false, color);
      }
    }
  }
  /**
   * Set font name
   * @param fontName string
   */
  setFontName(fontName) {
    this.doc.execCommand("fontName", false, fontName);
  }
  /**
   * Set font size
   * @param fontSize string
   */
  setFontSize(fontSize) {
    this.doc.execCommand("fontSize", false, fontSize);
  }
  /**
   * Create raw HTML
   * @param html HTML string
   */
  insertHtml(html) {
    const isHTMLInserted = this.doc.execCommand("insertHTML", false, html);
    if (!isHTMLInserted) {
      throw new Error("Unable to perform the operation");
    }
  }
  /**
   * restore selection when the editor is focused in
   *
   * saved selection when the editor is focused out
   */
  restoreSelection() {
    if (this.savedSelection) {
      if (this.doc.getSelection) {
        const sel = this.doc.getSelection();
        sel.removeAllRanges();
        sel.addRange(this.savedSelection);
        return true;
      } else if (this.doc.getSelection) {
        return true;
      }
    } else {
      return false;
    }
  }
  /**
   * setTimeout used for execute 'saveSelection' method in next event loop iteration
   */
  executeInNextQueueIteration(callbackFn, timeout = 100) {
    setTimeout(callbackFn, timeout);
  }
  /** check any selection is made or not */
  checkSelection() {
    const selectedText = this.savedSelection.toString();
    if (selectedText.length === 0) {
      throw new Error("No Selection Made");
    }
    return true;
  }
  /**
   * Upload file to uploadUrl
   * @param file The file
   */
  uploadImage(file) {
    const uploadData = new FormData();
    uploadData.append("file", file, file.name);
    return this.http.post(this.uploadUrl, uploadData, {
      reportProgress: true,
      observe: "events",
      withCredentials: this.uploadWithCredentials
    });
  }
  /**
   * Insert image with Url
   * @param imageUrl The imageUrl.
   */
  insertImage(imageUrl) {
    this.doc.execCommand("insertImage", false, imageUrl);
  }
  setDefaultParagraphSeparator(separator) {
    this.doc.execCommand("defaultParagraphSeparator", false, separator);
  }
  createCustomClass(customClass) {
    let newTag = this.selectedText;
    if (customClass) {
      const tagName = customClass.tag ? customClass.tag : "span";
      newTag = "<" + tagName + ' class="' + customClass.class + '">' + this.selectedText + "</" + tagName + ">";
    }
    this.insertHtml(newTag);
  }
  insertVideo(videoUrl) {
    if (videoUrl.match("www.youtube.com")) {
      this.insertYouTubeVideoTag(videoUrl);
    }
    if (videoUrl.match("vimeo.com")) {
      this.insertVimeoVideoTag(videoUrl);
    }
  }
  insertYouTubeVideoTag(videoUrl) {
    const id = videoUrl.split("v=")[1];
    const imageUrl = `https://img.youtube.com/vi/${id}/0.jpg`;
    const thumbnail = `
      <div style='position: relative'>
        <a href='${videoUrl}' target='_blank'>
          <img src="${imageUrl}" alt="click to watch"/>
          <img style='position: absolute; left:200px; top:140px'
          src="https://img.icons8.com/color/96/000000/youtube-play.png"/>
        </a>
      </div>`;
    this.insertHtml(thumbnail);
  }
  insertVimeoVideoTag(videoUrl) {
    const sub = this.http.get(`https://vimeo.com/api/oembed.json?url=${videoUrl}`).subscribe((data) => {
      const imageUrl = data.thumbnail_url_with_play_button;
      const thumbnail = `<div>
        <a href='${videoUrl}' target='_blank'>
          <img src="${imageUrl}" alt="${data.title}"/>
        </a>
      </div>`;
      this.insertHtml(thumbnail);
      sub.unsubscribe();
    });
  }
  nextNode(node) {
    if (node.hasChildNodes()) {
      return node.firstChild;
    } else {
      while (node && !node.nextSibling) {
        node = node.parentNode;
      }
      if (!node) {
        return null;
      }
      return node.nextSibling;
    }
  }
  getRangeSelectedNodes(range, includePartiallySelectedContainers) {
    let node = range.startContainer;
    const endNode = range.endContainer;
    let rangeNodes = [];
    if (node === endNode) {
      rangeNodes = [node];
    } else {
      while (node && node !== endNode) {
        rangeNodes.push(node = this.nextNode(node));
      }
      node = range.startContainer;
      while (node && node !== range.commonAncestorContainer) {
        rangeNodes.unshift(node);
        node = node.parentNode;
      }
    }
    if (includePartiallySelectedContainers) {
      node = range.commonAncestorContainer;
      while (node) {
        rangeNodes.push(node);
        node = node.parentNode;
      }
    }
    return rangeNodes;
  }
  getSelectedNodes() {
    const nodes = [];
    if (this.doc.getSelection) {
      const sel = this.doc.getSelection();
      for (let i = 0, len = sel.rangeCount; i < len; ++i) {
        nodes.push.apply(nodes, this.getRangeSelectedNodes(sel.getRangeAt(i), true));
      }
    }
    return nodes;
  }
  replaceWithOwnChildren(el) {
    const parent = el.parentNode;
    while (el.hasChildNodes()) {
      parent.insertBefore(el.firstChild, el);
    }
    parent.removeChild(el);
  }
  removeSelectedElements(tagNames) {
    const tagNamesArray = tagNames.toLowerCase().split(",");
    this.getSelectedNodes().forEach((node) => {
      if (node.nodeType === 1 && tagNamesArray.indexOf(node.tagName.toLowerCase()) > -1) {
        this.replaceWithOwnChildren(node);
      }
    });
  }
};
AngularEditorService.\u0275fac = function AngularEditorService_Factory(t) {
  return new (t || AngularEditorService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(DOCUMENT));
};
AngularEditorService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: AngularEditorService,
  factory: AngularEditorService.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularEditorService, [{
    type: Injectable
  }], function() {
    return [{
      type: HttpClient
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var angularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: "auto",
  minHeight: "0",
  maxHeight: "auto",
  width: "auto",
  minWidth: "0",
  translate: "yes",
  enableToolbar: true,
  showToolbar: true,
  placeholder: "Enter text here...",
  defaultParagraphSeparator: "",
  defaultFontName: "",
  defaultFontSize: "",
  fonts: [{
    class: "arial",
    name: "Arial"
  }, {
    class: "times-new-roman",
    name: "Times New Roman"
  }, {
    class: "calibri",
    name: "Calibri"
  }, {
    class: "comic-sans-ms",
    name: "Comic Sans MS"
  }],
  uploadUrl: "v1/image",
  uploadWithCredentials: false,
  sanitize: true,
  toolbarPosition: "top",
  outline: true
  /*toolbarHiddenButtons: [
    ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
    ['heading', 'fontName', 'fontSize', 'color'],
    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
    ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
    ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
    ['link', 'unlink', 'image', 'video']
  ]*/
};
function isDefined(value) {
  return value !== void 0 && value !== null;
}
var AeSelectComponent = class {
  constructor(elRef, r) {
    this.elRef = elRef;
    this.r = r;
    this.options = [];
    this.disabled = false;
    this.optionId = 0;
    this.opened = false;
    this.hidden = "inline-block";
    this.changeEvent = new EventEmitter();
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
  }
  get label() {
    return this.selectedOption && this.selectedOption.hasOwnProperty("label") ? this.selectedOption.label : "Select";
  }
  get value() {
    return this.selectedOption.value;
  }
  ngOnInit() {
    this.selectedOption = this.options[0];
    if (isDefined(this.isHidden) && this.isHidden) {
      this.hide();
    }
  }
  hide() {
    this.hidden = "none";
  }
  optionSelect(option, event) {
    event.stopPropagation();
    this.setValue(option.value);
    this.onChange(this.selectedOption.value);
    this.changeEvent.emit(this.selectedOption.value);
    this.onTouched();
    this.opened = false;
  }
  toggleOpen(event) {
    if (this.disabled) {
      return;
    }
    this.opened = !this.opened;
  }
  onClick($event) {
    if (!this.elRef.nativeElement.contains($event.target)) {
      this.close();
    }
  }
  close() {
    this.opened = false;
  }
  get isOpen() {
    return this.opened;
  }
  writeValue(value) {
    if (!value || typeof value !== "string") {
      return;
    }
    this.setValue(value);
  }
  setValue(value) {
    let index = 0;
    const selectedEl = this.options.find((el, i) => {
      index = i;
      return el.value === value;
    });
    if (selectedEl) {
      this.selectedOption = selectedEl;
      this.optionId = index;
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.labelButton.nativeElement.disabled = isDisabled;
    const div = this.labelButton.nativeElement;
    const action = isDisabled ? "addClass" : "removeClass";
    this.r[action](div, "disabled");
    this.disabled = isDisabled;
  }
  handleKeyDown($event) {
    if (!this.opened) {
      return;
    }
    switch ($event.key) {
      case "ArrowDown":
        this._handleArrowDown($event);
        break;
      case "ArrowUp":
        this._handleArrowUp($event);
        break;
      case "Space":
        this._handleSpace($event);
        break;
      case "Enter":
        this._handleEnter($event);
        break;
      case "Tab":
        this._handleTab($event);
        break;
      case "Escape":
        this.close();
        $event.preventDefault();
        break;
      case "Backspace":
        this._handleBackspace();
        break;
    }
  }
  _handleArrowDown($event) {
    if (this.optionId < this.options.length - 1) {
      this.optionId++;
    }
  }
  _handleArrowUp($event) {
    if (this.optionId >= 1) {
      this.optionId--;
    }
  }
  _handleSpace($event) {
  }
  _handleEnter($event) {
    this.optionSelect(this.options[this.optionId], $event);
  }
  _handleTab($event) {
  }
  _handleBackspace() {
  }
};
AeSelectComponent.\u0275fac = function AeSelectComponent_Factory(t) {
  return new (t || AeSelectComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
};
AeSelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: AeSelectComponent,
  selectors: [["ae-select"]],
  viewQuery: function AeSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.labelButton = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function AeSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function AeSelectComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      }, false, \u0275\u0275resolveDocument)("keydown", function AeSelectComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.hidden);
    }
  },
  inputs: {
    options: "options",
    isHidden: ["hidden", "isHidden"]
  },
  outputs: {
    changeEvent: "change"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AeSelectComponent),
    multi: true
  }])],
  decls: 10,
  vars: 7,
  consts: [[1, "ae-font", "ae-picker", 3, "ngClass"], ["tabindex", "0", "type", "button", "role", "button", 1, "ae-picker-label", 3, "tabIndex", "click"], ["labelButton", ""], ["viewBox", "0 0 18 18"], ["points", "7 11 9 13 11 11 7 11", 1, "ae-stroke"], ["points", "7 7 9 5 11 7 7 7", 1, "ae-stroke"], [1, "ae-picker-options"], ["tabindex", "-1", "type", "button", "role", "button", "class", "ae-picker-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "dropdown-item", 4, "ngIf"], ["tabindex", "-1", "type", "button", "role", "button", 1, "ae-picker-item", 3, "ngClass", "click"], [1, "dropdown-item"]],
  template: function AeSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 0)(1, "button", 1, 2);
      \u0275\u0275listener("click", function AeSelectComponent_Template_button_click_1_listener($event) {
        return ctx.toggleOpen($event);
      });
      \u0275\u0275text(3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 3);
      \u0275\u0275element(5, "polygon", 4)(6, "polygon", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275template(8, AeSelectComponent_button_8_Template, 2, 5, "button", 7)(9, AeSelectComponent_span_9_Template, 2, 0, "span", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c2, ctx.isOpen));
      \u0275\u0275advance(1);
      \u0275\u0275property("tabIndex", -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.label, " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.options);
      \u0275\u0275advance(1);
      \u0275\u0275property("ngIf", !ctx.options.length);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf],
  styles: ['.ae-font.ae-picker{color:#444;display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:10px;position:relative;width:100%;line-height:26px;vertical-align:middle;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;float:left;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:"";position:absolute;right:0;top:0;width:20px;height:100%;background:linear-gradient(to right,rgb(255,255,255),#ffffff 100%)}.ae-font .ae-picker-label:focus{outline:none}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.ae-font .ae-picker-label:hover:before{background:linear-gradient(to right,#f5f5f5 100%,#ffffff 100%)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:linear-gradient(to right,#f5f5f5 100%,#ffffff 100%)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:#0003 0 2px 8px}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}\n'],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AeSelectComponent, [{
    type: Component,
    args: [{
      selector: "ae-select",
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AeSelectComponent),
        multi: true
      }],
      template: `<span class="ae-font ae-picker" [ngClass]="{'ae-expanded':isOpen}">
  <button [tabIndex]="-1" #labelButton tabindex="0" type="button" role="button" class="ae-picker-label" (click)="toggleOpen($event);">{{label}}
    <svg viewBox="0 0 18 18">
     <!-- <use x="0" y="0" xlink:href="../assets/icons.svg#hom"></use>-->
      <polygon class="ae-stroke" points="7 11 9 13 11 11 7 11"></polygon>
      <polygon class="ae-stroke" points="7 7 9 5 11 7 7 7"></polygon>
    </svg>
  </button>
  <span class="ae-picker-options">
    <button tabindex="-1" type="button" role="button" class="ae-picker-item"
          *ngFor="let item of options; let i = index"
          [ngClass]="{'selected': item.value === value, 'focused': i === optionId}"
          (click)="optionSelect(item, $event)">
          {{item.label}}
    </button>
    <span class="dropdown-item" *ngIf="!options.length">No items for select</span>
  </span>
</span>
`,
      styles: ['.ae-font.ae-picker{color:#444;display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:10px;position:relative;width:100%;line-height:26px;vertical-align:middle;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;float:left;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:"";position:absolute;right:0;top:0;width:20px;height:100%;background:linear-gradient(to right,rgb(255,255,255),#ffffff 100%)}.ae-font .ae-picker-label:focus{outline:none}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.ae-font .ae-picker-label:hover:before{background:linear-gradient(to right,#f5f5f5 100%,#ffffff 100%)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:linear-gradient(to right,#f5f5f5 100%,#ffffff 100%)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:#0003 0 2px 8px}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}\n']
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    options: [{
      type: Input
    }],
    isHidden: [{
      type: Input,
      args: ["hidden"]
    }],
    hidden: [{
      type: HostBinding,
      args: ["style.display"]
    }],
    changeEvent: [{
      type: Output,
      args: ["change"]
    }],
    labelButton: [{
      type: ViewChild,
      args: ["labelButton", {
        static: true
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["document:click", ["$event"]]
    }],
    handleKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var AngularEditorToolbarComponent = class {
  constructor(r, editorService, er, doc) {
    this.r = r;
    this.editorService = editorService;
    this.er = er;
    this.doc = doc;
    this.htmlMode = false;
    this.linkSelected = false;
    this.block = "default";
    this.fontName = "Times New Roman";
    this.fontSize = "3";
    this.headings = [{
      label: "Heading 1",
      value: "h1"
    }, {
      label: "Heading 2",
      value: "h2"
    }, {
      label: "Heading 3",
      value: "h3"
    }, {
      label: "Heading 4",
      value: "h4"
    }, {
      label: "Heading 5",
      value: "h5"
    }, {
      label: "Heading 6",
      value: "h6"
    }, {
      label: "Heading 7",
      value: "h7"
    }, {
      label: "Paragraph",
      value: "p"
    }, {
      label: "Predefined",
      value: "pre"
    }, {
      label: "Standard",
      value: "div"
    }, {
      label: "default",
      value: "default"
    }];
    this.fontSizes = [{
      label: "1",
      value: "1"
    }, {
      label: "2",
      value: "2"
    }, {
      label: "3",
      value: "3"
    }, {
      label: "4",
      value: "4"
    }, {
      label: "5",
      value: "5"
    }, {
      label: "6",
      value: "6"
    }, {
      label: "7",
      value: "7"
    }];
    this.customClassId = "-1";
    this.customClassList = [{
      label: "",
      value: ""
    }];
    this.tagMap = {
      BLOCKQUOTE: "indent",
      A: "link"
    };
    this.select = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "PRE", "DIV"];
    this.buttons = ["bold", "italic", "underline", "strikeThrough", "subscript", "superscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent", "insertUnorderedList", "insertOrderedList", "link"];
    this.fonts = [{
      label: "",
      value: ""
    }];
    this.execute = new EventEmitter();
  }
  set customClasses(classes) {
    if (classes) {
      this._customClasses = classes;
      this.customClassList = this._customClasses.map((x, i) => ({
        label: x.name,
        value: i.toString()
      }));
      this.customClassList.unshift({
        label: "Clear Class",
        value: "-1"
      });
    }
  }
  set defaultFontName(value) {
    if (value) {
      this.fontName = value;
    }
  }
  set defaultFontSize(value) {
    if (value) {
      this.fontSize = value;
    }
  }
  get isLinkButtonDisabled() {
    return this.htmlMode || !Boolean(this.editorService.selectedText);
  }
  /**
   * Trigger command from editor header buttons
   * @param command string from toolbar buttons
   */
  triggerCommand(command) {
    this.execute.emit(command);
  }
  /**
   * highlight editor buttons when cursor moved or positioning
   */
  triggerButtons() {
    if (!this.showToolbar) {
      return;
    }
    this.buttons.forEach((e) => {
      const result = this.doc.queryCommandState(e);
      const elementById = this.doc.getElementById(e + "-" + this.id);
      if (result) {
        this.r.addClass(elementById, "active");
      } else {
        this.r.removeClass(elementById, "active");
      }
    });
  }
  /**
   * trigger highlight editor buttons when cursor moved or positioning in block
   */
  triggerBlocks(nodes) {
    if (!this.showToolbar) {
      return;
    }
    this.linkSelected = nodes.findIndex((x) => x.nodeName === "A") > -1;
    let found = false;
    this.select.forEach((y) => {
      const node = nodes.find((x) => x.nodeName === y);
      if (node !== void 0 && y === node.nodeName) {
        if (found === false) {
          this.block = node.nodeName.toLowerCase();
          found = true;
        }
      } else if (found === false) {
        this.block = "default";
      }
    });
    found = false;
    if (this._customClasses) {
      this._customClasses.forEach((y, index) => {
        const node = nodes.find((x) => {
          if (x instanceof Element) {
            return x.className === y.class;
          }
        });
        if (node !== void 0) {
          if (found === false) {
            this.customClassId = index.toString();
            found = true;
          }
        } else if (found === false) {
          this.customClassId = "-1";
        }
      });
    }
    Object.keys(this.tagMap).map((e) => {
      const elementById = this.doc.getElementById(this.tagMap[e] + "-" + this.id);
      const node = nodes.find((x) => x.nodeName === e);
      if (node !== void 0 && e === node.nodeName) {
        this.r.addClass(elementById, "active");
      } else {
        this.r.removeClass(elementById, "active");
      }
    });
    this.foreColour = this.doc.queryCommandValue("ForeColor");
    this.fontSize = this.doc.queryCommandValue("FontSize");
    this.fontName = this.doc.queryCommandValue("FontName").replace(/"/g, "");
    this.backColor = this.doc.queryCommandValue("backColor");
  }
  /**
   * insert URL link
   */
  insertUrl() {
    let url = "https://";
    const selection = this.editorService.savedSelection;
    if (selection && selection.commonAncestorContainer.parentElement.nodeName === "A") {
      const parent = selection.commonAncestorContainer.parentElement;
      if (parent.href !== "") {
        url = parent.href;
      }
    }
    url = prompt("Insert URL link", url);
    if (url && url !== "" && url !== "https://") {
      this.editorService.createLink(url);
    }
  }
  /**
   * insert Video link
   */
  insertVideo() {
    this.execute.emit("");
    const url = prompt("Insert Video link", `https://`);
    if (url && url !== "" && url !== `https://`) {
      this.editorService.insertVideo(url);
    }
  }
  /** insert color */
  insertColor(color, where) {
    this.editorService.insertColor(color, where);
    this.execute.emit("");
  }
  /**
   * set font Name/family
   * @param foreColor string
   */
  setFontName(foreColor) {
    this.editorService.setFontName(foreColor);
    this.execute.emit("");
  }
  /**
   * set font Size
   * @param fontSize string
   */
  setFontSize(fontSize) {
    this.editorService.setFontSize(fontSize);
    this.execute.emit("");
  }
  /**
   * toggle editor mode (WYSIWYG or SOURCE)
   * @param m boolean
   */
  setEditorMode(m) {
    const toggleEditorModeButton = this.doc.getElementById("toggleEditorMode-" + this.id);
    if (m) {
      this.r.addClass(toggleEditorModeButton, "active");
    } else {
      this.r.removeClass(toggleEditorModeButton, "active");
    }
    this.htmlMode = m;
  }
  /**
   * Upload image when file is selected.
   */
  onFileChanged(event) {
    const file = event.target.files[0];
    if (file.type.includes("image/")) {
      if (this.upload) {
        this.upload(file).subscribe((response) => this.watchUploadImage(response, event));
      } else if (this.uploadUrl) {
        this.editorService.uploadImage(file).subscribe((response) => this.watchUploadImage(response, event));
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          const fr = e.currentTarget;
          this.editorService.insertImage(fr.result.toString());
        };
        reader.readAsDataURL(file);
      }
    }
  }
  watchUploadImage(response, event) {
    const {
      imageUrl
    } = response.body;
    this.editorService.insertImage(imageUrl);
    event.srcElement.value = null;
  }
  /**
   * Set custom class
   */
  setCustomClass(classId) {
    if (classId === "-1") {
      this.execute.emit("clear");
    } else {
      this.editorService.createCustomClass(this._customClasses[+classId]);
    }
  }
  isButtonHidden(name) {
    if (!name) {
      return false;
    }
    if (!(this.hiddenButtons instanceof Array)) {
      return false;
    }
    let result;
    for (const arr of this.hiddenButtons) {
      if (arr instanceof Array) {
        result = arr.find((item) => item === name);
      }
      if (result) {
        break;
      }
    }
    return result !== void 0;
  }
  focus() {
    this.execute.emit("focus");
    console.log("focused");
  }
};
AngularEditorToolbarComponent.\u0275fac = function AngularEditorToolbarComponent_Factory(t) {
  return new (t || AngularEditorToolbarComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(AngularEditorService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT));
};
AngularEditorToolbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: AngularEditorToolbarComponent,
  selectors: [["angular-editor-toolbar"]],
  viewQuery: function AngularEditorToolbarComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c3, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.myInputFile = _t.first);
    }
  },
  inputs: {
    id: "id",
    uploadUrl: "uploadUrl",
    upload: "upload",
    showToolbar: "showToolbar",
    fonts: "fonts",
    customClasses: "customClasses",
    defaultFontName: "defaultFontName",
    defaultFontSize: "defaultFontSize",
    hiddenButtons: "hiddenButtons"
  },
  outputs: {
    execute: "execute"
  },
  ngContentSelectors: _c4,
  decls: 1,
  vars: 1,
  consts: [["class", "angular-editor-toolbar", 4, "ngIf"], [1, "angular-editor-toolbar"], [1, "angular-editor-toolbar-set"], ["type", "button", "title", "Undo", "tabindex", "-1", 1, "angular-editor-button", 3, "hidden", "click"], [1, "fa", "fa-undo"], ["type", "button", "title", "Redo", "tabindex", "-1", 1, "angular-editor-button", 3, "hidden", "click"], [1, "fa", "fa-repeat"], ["type", "button", "title", "Bold", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-bold"], ["type", "button", "title", "Italic", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-italic"], ["type", "button", "title", "Underline", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-underline"], ["type", "button", "title", "Strikethrough", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-strikethrough"], ["type", "button", "title", "Subscript", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-subscript"], ["type", "button", "title", "Superscript", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-superscript"], ["type", "button", "title", "Justify Left", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-left"], ["type", "button", "title", "Justify Center", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-center"], ["type", "button", "title", "Justify Right", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-right"], ["type", "button", "title", "Justify Full", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-justify"], ["type", "button", "title", "Indent", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-indent"], ["type", "button", "title", "Outdent", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-outdent"], ["type", "button", "title", "Unordered List", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-list-ul"], ["type", "button", "title", "Ordered List", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-list-ol"], ["tabindex", "-1", 1, "select-heading", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], ["tabindex", "-1", 1, "select-font", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], ["tabindex", "-1", 1, "select-font-size", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], ["type", "color", 2, "display", "none", 3, "change"], ["fgInput", ""], ["type", "button", "title", "Text Color", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "color-label", "foreground"], [1, "fa", "fa-font"], ["bgInput", ""], ["type", "button", "title", "Background Color", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "color-label", "background"], ["class", "angular-editor-toolbar-set", 4, "ngIf"], ["type", "button", "title", "Insert Link", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-link"], ["type", "button", "title", "Unlink", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-chain-broken"], ["accept", "image/*", "type", "file", 2, "display", "none", 3, "change"], ["fileInput", ""], ["type", "button", "title", "Insert Image", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-image"], ["type", "button", "title", "Insert Video", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-video-camera"], ["type", "button", "title", "Horizontal Line", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-minus"], ["type", "button", "title", "Clear Formatting", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-remove"], ["type", "button", "title", "HTML Code", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "hidden", "click"], [1, "fa", "fa-code"], ["tabindex", "-1", 1, "select-custom-style", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"]],
  template: function AngularEditorToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, AngularEditorToolbarComponent_div_0_Template, 76, 83, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showToolbar);
    }
  },
  dependencies: [AeSelectComponent, NgIf, NgControlStatus, NgModel],
  styles: ['\n\n\n\n@font-face{font-family:FontAwesome;src:url(/assets/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(/assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"),url(/assets/fonts/fontawesome-webfont.woff2?v=4.7.0) format("woff2"),url(/assets/fonts/fontawesome-webfont.woff?v=4.7.0) format("woff"),url(/assets/fonts/fontawesome-webfont.ttf?v=4.7.0) format("truetype"),url(/assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format("svg");font-weight:400;font-style:normal}.fa[_ngcontent-%COMP%]{display:inline-block;font: 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg[_ngcontent-%COMP%]{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x[_ngcontent-%COMP%]{font-size:2em}.fa-3x[_ngcontent-%COMP%]{font-size:3em}.fa-4x[_ngcontent-%COMP%]{font-size:4em}.fa-5x[_ngcontent-%COMP%]{font-size:5em}.fa-fw[_ngcontent-%COMP%]{width:1.2857142857em;text-align:center}.fa-ul[_ngcontent-%COMP%]{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative}.fa-li[_ngcontent-%COMP%]{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg[_ngcontent-%COMP%]{left:-1.8571428571em}.fa-border[_ngcontent-%COMP%]{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left[_ngcontent-%COMP%]{float:left}.fa-pull-right[_ngcontent-%COMP%]{float:right}.fa.fa-pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.fa-pull-right[_ngcontent-%COMP%]{margin-left:.3em}.pull-right[_ngcontent-%COMP%]{float:right}.pull-left[_ngcontent-%COMP%]{float:left}.fa.pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.pull-right[_ngcontent-%COMP%]{margin-left:.3em}.fa-spin[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fa-spin 2s infinite linear}.fa-pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fa-spin 1s infinite steps(8)}@keyframes _ngcontent-%COMP%_fa-spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.fa-rotate-90[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";transform:rotate(90deg)}.fa-rotate-180[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";transform:rotate(180deg)}.fa-rotate-270[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";transform:rotate(270deg)}.fa-flip-horizontal[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";transform:scaleX(-1)}.fa-flip-vertical[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";transform:scaleY(-1)}[_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%]{filter:none}.fa-stack[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x[_ngcontent-%COMP%]{line-height:inherit}.fa-stack-2x[_ngcontent-%COMP%]{font-size:2em}.fa-inverse[_ngcontent-%COMP%]{color:#fff}.fa-glass[_ngcontent-%COMP%]:before{content:"\\f000"}.fa-music[_ngcontent-%COMP%]:before{content:"\\f001"}.fa-search[_ngcontent-%COMP%]:before{content:"\\f002"}.fa-envelope-o[_ngcontent-%COMP%]:before{content:"\\f003"}.fa-heart[_ngcontent-%COMP%]:before{content:"\\f004"}.fa-star[_ngcontent-%COMP%]:before{content:"\\f005"}.fa-star-o[_ngcontent-%COMP%]:before{content:"\\f006"}.fa-user[_ngcontent-%COMP%]:before{content:"\\f007"}.fa-film[_ngcontent-%COMP%]:before{content:"\\f008"}.fa-th-large[_ngcontent-%COMP%]:before{content:"\\f009"}.fa-th[_ngcontent-%COMP%]:before{content:"\\f00a"}.fa-th-list[_ngcontent-%COMP%]:before{content:"\\f00b"}.fa-check[_ngcontent-%COMP%]:before{content:"\\f00c"}.fa-remove[_ngcontent-%COMP%]:before, .fa-close[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before{content:"\\f00d"}.fa-search-plus[_ngcontent-%COMP%]:before{content:"\\f00e"}.fa-search-minus[_ngcontent-%COMP%]:before{content:"\\f010"}.fa-power-off[_ngcontent-%COMP%]:before{content:"\\f011"}.fa-signal[_ngcontent-%COMP%]:before{content:"\\f012"}.fa-gear[_ngcontent-%COMP%]:before, .fa-cog[_ngcontent-%COMP%]:before{content:"\\f013"}.fa-trash-o[_ngcontent-%COMP%]:before{content:"\\f014"}.fa-home[_ngcontent-%COMP%]:before{content:"\\f015"}.fa-file-o[_ngcontent-%COMP%]:before{content:"\\f016"}.fa-clock-o[_ngcontent-%COMP%]:before{content:"\\f017"}.fa-road[_ngcontent-%COMP%]:before{content:"\\f018"}.fa-download[_ngcontent-%COMP%]:before{content:"\\f019"}.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before{content:"\\f01a"}.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before{content:"\\f01b"}.fa-inbox[_ngcontent-%COMP%]:before{content:"\\f01c"}.fa-play-circle-o[_ngcontent-%COMP%]:before{content:"\\f01d"}.fa-rotate-right[_ngcontent-%COMP%]:before, .fa-repeat[_ngcontent-%COMP%]:before{content:"\\f01e"}.fa-refresh[_ngcontent-%COMP%]:before{content:"\\f021"}.fa-list-alt[_ngcontent-%COMP%]:before{content:"\\f022"}.fa-lock[_ngcontent-%COMP%]:before{content:"\\f023"}.fa-flag[_ngcontent-%COMP%]:before{content:"\\f024"}.fa-headphones[_ngcontent-%COMP%]:before{content:"\\f025"}.fa-volume-off[_ngcontent-%COMP%]:before{content:"\\f026"}.fa-volume-down[_ngcontent-%COMP%]:before{content:"\\f027"}.fa-volume-up[_ngcontent-%COMP%]:before{content:"\\f028"}.fa-qrcode[_ngcontent-%COMP%]:before{content:"\\f029"}.fa-barcode[_ngcontent-%COMP%]:before{content:"\\f02a"}.fa-tag[_ngcontent-%COMP%]:before{content:"\\f02b"}.fa-tags[_ngcontent-%COMP%]:before{content:"\\f02c"}.fa-book[_ngcontent-%COMP%]:before{content:"\\f02d"}.fa-bookmark[_ngcontent-%COMP%]:before{content:"\\f02e"}.fa-print[_ngcontent-%COMP%]:before{content:"\\f02f"}.fa-camera[_ngcontent-%COMP%]:before{content:"\\f030"}.fa-font[_ngcontent-%COMP%]:before{content:"\\f031"}.fa-bold[_ngcontent-%COMP%]:before{content:"\\f032"}.fa-italic[_ngcontent-%COMP%]:before{content:"\\f033"}.fa-text-height[_ngcontent-%COMP%]:before{content:"\\f034"}.fa-text-width[_ngcontent-%COMP%]:before{content:"\\f035"}.fa-align-left[_ngcontent-%COMP%]:before{content:"\\f036"}.fa-align-center[_ngcontent-%COMP%]:before{content:"\\f037"}.fa-align-right[_ngcontent-%COMP%]:before{content:"\\f038"}.fa-align-justify[_ngcontent-%COMP%]:before{content:"\\f039"}.fa-list[_ngcontent-%COMP%]:before{content:"\\f03a"}.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before{content:"\\f03b"}.fa-indent[_ngcontent-%COMP%]:before{content:"\\f03c"}.fa-video-camera[_ngcontent-%COMP%]:before{content:"\\f03d"}.fa-photo[_ngcontent-%COMP%]:before, .fa-image[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before{content:"\\f03e"}.fa-pencil[_ngcontent-%COMP%]:before{content:"\\f040"}.fa-map-marker[_ngcontent-%COMP%]:before{content:"\\f041"}.fa-adjust[_ngcontent-%COMP%]:before{content:"\\f042"}.fa-tint[_ngcontent-%COMP%]:before{content:"\\f043"}.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before{content:"\\f044"}.fa-share-square-o[_ngcontent-%COMP%]:before{content:"\\f045"}.fa-check-square-o[_ngcontent-%COMP%]:before{content:"\\f046"}.fa-arrows[_ngcontent-%COMP%]:before{content:"\\f047"}.fa-step-backward[_ngcontent-%COMP%]:before{content:"\\f048"}.fa-fast-backward[_ngcontent-%COMP%]:before{content:"\\f049"}.fa-backward[_ngcontent-%COMP%]:before{content:"\\f04a"}.fa-play[_ngcontent-%COMP%]:before{content:"\\f04b"}.fa-pause[_ngcontent-%COMP%]:before{content:"\\f04c"}.fa-stop[_ngcontent-%COMP%]:before{content:"\\f04d"}.fa-forward[_ngcontent-%COMP%]:before{content:"\\f04e"}.fa-fast-forward[_ngcontent-%COMP%]:before{content:"\\f050"}.fa-step-forward[_ngcontent-%COMP%]:before{content:"\\f051"}.fa-eject[_ngcontent-%COMP%]:before{content:"\\f052"}.fa-chevron-left[_ngcontent-%COMP%]:before{content:"\\f053"}.fa-chevron-right[_ngcontent-%COMP%]:before{content:"\\f054"}.fa-plus-circle[_ngcontent-%COMP%]:before{content:"\\f055"}.fa-minus-circle[_ngcontent-%COMP%]:before{content:"\\f056"}.fa-times-circle[_ngcontent-%COMP%]:before{content:"\\f057"}.fa-check-circle[_ngcontent-%COMP%]:before{content:"\\f058"}.fa-question-circle[_ngcontent-%COMP%]:before{content:"\\f059"}.fa-info-circle[_ngcontent-%COMP%]:before{content:"\\f05a"}.fa-crosshairs[_ngcontent-%COMP%]:before{content:"\\f05b"}.fa-times-circle-o[_ngcontent-%COMP%]:before{content:"\\f05c"}.fa-check-circle-o[_ngcontent-%COMP%]:before{content:"\\f05d"}.fa-ban[_ngcontent-%COMP%]:before{content:"\\f05e"}.fa-arrow-left[_ngcontent-%COMP%]:before{content:"\\f060"}.fa-arrow-right[_ngcontent-%COMP%]:before{content:"\\f061"}.fa-arrow-up[_ngcontent-%COMP%]:before{content:"\\f062"}.fa-arrow-down[_ngcontent-%COMP%]:before{content:"\\f063"}.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before{content:"\\f064"}.fa-expand[_ngcontent-%COMP%]:before{content:"\\f065"}.fa-compress[_ngcontent-%COMP%]:before{content:"\\f066"}.fa-plus[_ngcontent-%COMP%]:before{content:"\\f067"}.fa-minus[_ngcontent-%COMP%]:before{content:"\\f068"}.fa-asterisk[_ngcontent-%COMP%]:before{content:"\\f069"}.fa-exclamation-circle[_ngcontent-%COMP%]:before{content:"\\f06a"}.fa-gift[_ngcontent-%COMP%]:before{content:"\\f06b"}.fa-leaf[_ngcontent-%COMP%]:before{content:"\\f06c"}.fa-fire[_ngcontent-%COMP%]:before{content:"\\f06d"}.fa-eye[_ngcontent-%COMP%]:before{content:"\\f06e"}.fa-eye-slash[_ngcontent-%COMP%]:before{content:"\\f070"}.fa-warning[_ngcontent-%COMP%]:before, .fa-exclamation-triangle[_ngcontent-%COMP%]:before{content:"\\f071"}.fa-plane[_ngcontent-%COMP%]:before{content:"\\f072"}.fa-calendar[_ngcontent-%COMP%]:before{content:"\\f073"}.fa-random[_ngcontent-%COMP%]:before{content:"\\f074"}.fa-comment[_ngcontent-%COMP%]:before{content:"\\f075"}.fa-magnet[_ngcontent-%COMP%]:before{content:"\\f076"}.fa-chevron-up[_ngcontent-%COMP%]:before{content:"\\f077"}.fa-chevron-down[_ngcontent-%COMP%]:before{content:"\\f078"}.fa-retweet[_ngcontent-%COMP%]:before{content:"\\f079"}.fa-shopping-cart[_ngcontent-%COMP%]:before{content:"\\f07a"}.fa-folder[_ngcontent-%COMP%]:before{content:"\\f07b"}.fa-folder-open[_ngcontent-%COMP%]:before{content:"\\f07c"}.fa-arrows-v[_ngcontent-%COMP%]:before{content:"\\f07d"}.fa-arrows-h[_ngcontent-%COMP%]:before{content:"\\f07e"}.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before{content:"\\f080"}.fa-twitter-square[_ngcontent-%COMP%]:before{content:"\\f081"}.fa-facebook-square[_ngcontent-%COMP%]:before{content:"\\f082"}.fa-camera-retro[_ngcontent-%COMP%]:before{content:"\\f083"}.fa-key[_ngcontent-%COMP%]:before{content:"\\f084"}.fa-gears[_ngcontent-%COMP%]:before, .fa-cogs[_ngcontent-%COMP%]:before{content:"\\f085"}.fa-comments[_ngcontent-%COMP%]:before{content:"\\f086"}.fa-thumbs-o-up[_ngcontent-%COMP%]:before{content:"\\f087"}.fa-thumbs-o-down[_ngcontent-%COMP%]:before{content:"\\f088"}.fa-star-half[_ngcontent-%COMP%]:before{content:"\\f089"}.fa-heart-o[_ngcontent-%COMP%]:before{content:"\\f08a"}.fa-sign-out[_ngcontent-%COMP%]:before{content:"\\f08b"}.fa-linkedin-square[_ngcontent-%COMP%]:before{content:"\\f08c"}.fa-thumb-tack[_ngcontent-%COMP%]:before{content:"\\f08d"}.fa-external-link[_ngcontent-%COMP%]:before{content:"\\f08e"}.fa-sign-in[_ngcontent-%COMP%]:before{content:"\\f090"}.fa-trophy[_ngcontent-%COMP%]:before{content:"\\f091"}.fa-github-square[_ngcontent-%COMP%]:before{content:"\\f092"}.fa-upload[_ngcontent-%COMP%]:before{content:"\\f093"}.fa-lemon-o[_ngcontent-%COMP%]:before{content:"\\f094"}.fa-phone[_ngcontent-%COMP%]:before{content:"\\f095"}.fa-square-o[_ngcontent-%COMP%]:before{content:"\\f096"}.fa-bookmark-o[_ngcontent-%COMP%]:before{content:"\\f097"}.fa-phone-square[_ngcontent-%COMP%]:before{content:"\\f098"}.fa-twitter[_ngcontent-%COMP%]:before{content:"\\f099"}.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before{content:"\\f09a"}.fa-github[_ngcontent-%COMP%]:before{content:"\\f09b"}.fa-unlock[_ngcontent-%COMP%]:before{content:"\\f09c"}.fa-credit-card[_ngcontent-%COMP%]:before{content:"\\f09d"}.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before{content:"\\f09e"}.fa-hdd-o[_ngcontent-%COMP%]:before{content:"\\f0a0"}.fa-bullhorn[_ngcontent-%COMP%]:before{content:"\\f0a1"}.fa-bell[_ngcontent-%COMP%]:before{content:"\\f0f3"}.fa-certificate[_ngcontent-%COMP%]:before{content:"\\f0a3"}.fa-hand-o-right[_ngcontent-%COMP%]:before{content:"\\f0a4"}.fa-hand-o-left[_ngcontent-%COMP%]:before{content:"\\f0a5"}.fa-hand-o-up[_ngcontent-%COMP%]:before{content:"\\f0a6"}.fa-hand-o-down[_ngcontent-%COMP%]:before{content:"\\f0a7"}.fa-arrow-circle-left[_ngcontent-%COMP%]:before{content:"\\f0a8"}.fa-arrow-circle-right[_ngcontent-%COMP%]:before{content:"\\f0a9"}.fa-arrow-circle-up[_ngcontent-%COMP%]:before{content:"\\f0aa"}.fa-arrow-circle-down[_ngcontent-%COMP%]:before{content:"\\f0ab"}.fa-globe[_ngcontent-%COMP%]:before{content:"\\f0ac"}.fa-wrench[_ngcontent-%COMP%]:before{content:"\\f0ad"}.fa-tasks[_ngcontent-%COMP%]:before{content:"\\f0ae"}.fa-filter[_ngcontent-%COMP%]:before{content:"\\f0b0"}.fa-briefcase[_ngcontent-%COMP%]:before{content:"\\f0b1"}.fa-arrows-alt[_ngcontent-%COMP%]:before{content:"\\f0b2"}.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before{content:"\\f0c0"}.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before{content:"\\f0c1"}.fa-cloud[_ngcontent-%COMP%]:before{content:"\\f0c2"}.fa-flask[_ngcontent-%COMP%]:before{content:"\\f0c3"}.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before{content:"\\f0c4"}.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before{content:"\\f0c5"}.fa-paperclip[_ngcontent-%COMP%]:before{content:"\\f0c6"}.fa-save[_ngcontent-%COMP%]:before, .fa-floppy-o[_ngcontent-%COMP%]:before{content:"\\f0c7"}.fa-square[_ngcontent-%COMP%]:before{content:"\\f0c8"}.fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before, .fa-bars[_ngcontent-%COMP%]:before{content:"\\f0c9"}.fa-list-ul[_ngcontent-%COMP%]:before{content:"\\f0ca"}.fa-list-ol[_ngcontent-%COMP%]:before{content:"\\f0cb"}.fa-strikethrough[_ngcontent-%COMP%]:before{content:"\\f0cc"}.fa-underline[_ngcontent-%COMP%]:before{content:"\\f0cd"}.fa-table[_ngcontent-%COMP%]:before{content:"\\f0ce"}.fa-magic[_ngcontent-%COMP%]:before{content:"\\f0d0"}.fa-truck[_ngcontent-%COMP%]:before{content:"\\f0d1"}.fa-pinterest[_ngcontent-%COMP%]:before{content:"\\f0d2"}.fa-pinterest-square[_ngcontent-%COMP%]:before{content:"\\f0d3"}.fa-google-plus-square[_ngcontent-%COMP%]:before{content:"\\f0d4"}.fa-google-plus[_ngcontent-%COMP%]:before{content:"\\f0d5"}.fa-money[_ngcontent-%COMP%]:before{content:"\\f0d6"}.fa-caret-down[_ngcontent-%COMP%]:before{content:"\\f0d7"}.fa-caret-up[_ngcontent-%COMP%]:before{content:"\\f0d8"}.fa-caret-left[_ngcontent-%COMP%]:before{content:"\\f0d9"}.fa-caret-right[_ngcontent-%COMP%]:before{content:"\\f0da"}.fa-columns[_ngcontent-%COMP%]:before{content:"\\f0db"}.fa-unsorted[_ngcontent-%COMP%]:before, .fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc"}.fa-sort-down[_ngcontent-%COMP%]:before, .fa-sort-desc[_ngcontent-%COMP%]:before{content:"\\f0dd"}.fa-sort-up[_ngcontent-%COMP%]:before, .fa-sort-asc[_ngcontent-%COMP%]:before{content:"\\f0de"}.fa-envelope[_ngcontent-%COMP%]:before{content:"\\f0e0"}.fa-linkedin[_ngcontent-%COMP%]:before{content:"\\f0e1"}.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before{content:"\\f0e2"}.fa-legal[_ngcontent-%COMP%]:before, .fa-gavel[_ngcontent-%COMP%]:before{content:"\\f0e3"}.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before{content:"\\f0e4"}.fa-comment-o[_ngcontent-%COMP%]:before{content:"\\f0e5"}.fa-comments-o[_ngcontent-%COMP%]:before{content:"\\f0e6"}.fa-flash[_ngcontent-%COMP%]:before, .fa-bolt[_ngcontent-%COMP%]:before{content:"\\f0e7"}.fa-sitemap[_ngcontent-%COMP%]:before{content:"\\f0e8"}.fa-umbrella[_ngcontent-%COMP%]:before{content:"\\f0e9"}.fa-paste[_ngcontent-%COMP%]:before, .fa-clipboard[_ngcontent-%COMP%]:before{content:"\\f0ea"}.fa-lightbulb-o[_ngcontent-%COMP%]:before{content:"\\f0eb"}.fa-exchange[_ngcontent-%COMP%]:before{content:"\\f0ec"}.fa-cloud-download[_ngcontent-%COMP%]:before{content:"\\f0ed"}.fa-cloud-upload[_ngcontent-%COMP%]:before{content:"\\f0ee"}.fa-user-md[_ngcontent-%COMP%]:before{content:"\\f0f0"}.fa-stethoscope[_ngcontent-%COMP%]:before{content:"\\f0f1"}.fa-suitcase[_ngcontent-%COMP%]:before{content:"\\f0f2"}.fa-bell-o[_ngcontent-%COMP%]:before{content:"\\f0a2"}.fa-coffee[_ngcontent-%COMP%]:before{content:"\\f0f4"}.fa-cutlery[_ngcontent-%COMP%]:before{content:"\\f0f5"}.fa-file-text-o[_ngcontent-%COMP%]:before{content:"\\f0f6"}.fa-building-o[_ngcontent-%COMP%]:before{content:"\\f0f7"}.fa-hospital-o[_ngcontent-%COMP%]:before{content:"\\f0f8"}.fa-ambulance[_ngcontent-%COMP%]:before{content:"\\f0f9"}.fa-medkit[_ngcontent-%COMP%]:before{content:"\\f0fa"}.fa-fighter-jet[_ngcontent-%COMP%]:before{content:"\\f0fb"}.fa-beer[_ngcontent-%COMP%]:before{content:"\\f0fc"}.fa-h-square[_ngcontent-%COMP%]:before{content:"\\f0fd"}.fa-plus-square[_ngcontent-%COMP%]:before{content:"\\f0fe"}.fa-angle-double-left[_ngcontent-%COMP%]:before{content:"\\f100"}.fa-angle-double-right[_ngcontent-%COMP%]:before{content:"\\f101"}.fa-angle-double-up[_ngcontent-%COMP%]:before{content:"\\f102"}.fa-angle-double-down[_ngcontent-%COMP%]:before{content:"\\f103"}.fa-angle-left[_ngcontent-%COMP%]:before{content:"\\f104"}.fa-angle-right[_ngcontent-%COMP%]:before{content:"\\f105"}.fa-angle-up[_ngcontent-%COMP%]:before{content:"\\f106"}.fa-angle-down[_ngcontent-%COMP%]:before{content:"\\f107"}.fa-desktop[_ngcontent-%COMP%]:before{content:"\\f108"}.fa-laptop[_ngcontent-%COMP%]:before{content:"\\f109"}.fa-tablet[_ngcontent-%COMP%]:before{content:"\\f10a"}.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before{content:"\\f10b"}.fa-circle-o[_ngcontent-%COMP%]:before{content:"\\f10c"}.fa-quote-left[_ngcontent-%COMP%]:before{content:"\\f10d"}.fa-quote-right[_ngcontent-%COMP%]:before{content:"\\f10e"}.fa-spinner[_ngcontent-%COMP%]:before{content:"\\f110"}.fa-circle[_ngcontent-%COMP%]:before{content:"\\f111"}.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before{content:"\\f112"}.fa-github-alt[_ngcontent-%COMP%]:before{content:"\\f113"}.fa-folder-o[_ngcontent-%COMP%]:before{content:"\\f114"}.fa-folder-open-o[_ngcontent-%COMP%]:before{content:"\\f115"}.fa-smile-o[_ngcontent-%COMP%]:before{content:"\\f118"}.fa-frown-o[_ngcontent-%COMP%]:before{content:"\\f119"}.fa-meh-o[_ngcontent-%COMP%]:before{content:"\\f11a"}.fa-gamepad[_ngcontent-%COMP%]:before{content:"\\f11b"}.fa-keyboard-o[_ngcontent-%COMP%]:before{content:"\\f11c"}.fa-flag-o[_ngcontent-%COMP%]:before{content:"\\f11d"}.fa-flag-checkered[_ngcontent-%COMP%]:before{content:"\\f11e"}.fa-terminal[_ngcontent-%COMP%]:before{content:"\\f120"}.fa-code[_ngcontent-%COMP%]:before{content:"\\f121"}.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before{content:"\\f122"}.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before{content:"\\f123"}.fa-location-arrow[_ngcontent-%COMP%]:before{content:"\\f124"}.fa-crop[_ngcontent-%COMP%]:before{content:"\\f125"}.fa-code-fork[_ngcontent-%COMP%]:before{content:"\\f126"}.fa-unlink[_ngcontent-%COMP%]:before, .fa-chain-broken[_ngcontent-%COMP%]:before{content:"\\f127"}.fa-question[_ngcontent-%COMP%]:before{content:"\\f128"}.fa-info[_ngcontent-%COMP%]:before{content:"\\f129"}.fa-exclamation[_ngcontent-%COMP%]:before{content:"\\f12a"}.fa-superscript[_ngcontent-%COMP%]:before{content:"\\f12b"}.fa-subscript[_ngcontent-%COMP%]:before{content:"\\f12c"}.fa-eraser[_ngcontent-%COMP%]:before{content:"\\f12d"}.fa-puzzle-piece[_ngcontent-%COMP%]:before{content:"\\f12e"}.fa-microphone[_ngcontent-%COMP%]:before{content:"\\f130"}.fa-microphone-slash[_ngcontent-%COMP%]:before{content:"\\f131"}.fa-shield[_ngcontent-%COMP%]:before{content:"\\f132"}.fa-calendar-o[_ngcontent-%COMP%]:before{content:"\\f133"}.fa-fire-extinguisher[_ngcontent-%COMP%]:before{content:"\\f134"}.fa-rocket[_ngcontent-%COMP%]:before{content:"\\f135"}.fa-maxcdn[_ngcontent-%COMP%]:before{content:"\\f136"}.fa-chevron-circle-left[_ngcontent-%COMP%]:before{content:"\\f137"}.fa-chevron-circle-right[_ngcontent-%COMP%]:before{content:"\\f138"}.fa-chevron-circle-up[_ngcontent-%COMP%]:before{content:"\\f139"}.fa-chevron-circle-down[_ngcontent-%COMP%]:before{content:"\\f13a"}.fa-html5[_ngcontent-%COMP%]:before{content:"\\f13b"}.fa-css3[_ngcontent-%COMP%]:before{content:"\\f13c"}.fa-anchor[_ngcontent-%COMP%]:before{content:"\\f13d"}.fa-unlock-alt[_ngcontent-%COMP%]:before{content:"\\f13e"}.fa-bullseye[_ngcontent-%COMP%]:before{content:"\\f140"}.fa-ellipsis-h[_ngcontent-%COMP%]:before{content:"\\f141"}.fa-ellipsis-v[_ngcontent-%COMP%]:before{content:"\\f142"}.fa-rss-square[_ngcontent-%COMP%]:before{content:"\\f143"}.fa-play-circle[_ngcontent-%COMP%]:before{content:"\\f144"}.fa-ticket[_ngcontent-%COMP%]:before{content:"\\f145"}.fa-minus-square[_ngcontent-%COMP%]:before{content:"\\f146"}.fa-minus-square-o[_ngcontent-%COMP%]:before{content:"\\f147"}.fa-level-up[_ngcontent-%COMP%]:before{content:"\\f148"}.fa-level-down[_ngcontent-%COMP%]:before{content:"\\f149"}.fa-check-square[_ngcontent-%COMP%]:before{content:"\\f14a"}.fa-pencil-square[_ngcontent-%COMP%]:before{content:"\\f14b"}.fa-external-link-square[_ngcontent-%COMP%]:before{content:"\\f14c"}.fa-share-square[_ngcontent-%COMP%]:before{content:"\\f14d"}.fa-compass[_ngcontent-%COMP%]:before{content:"\\f14e"}.fa-toggle-down[_ngcontent-%COMP%]:before, .fa-caret-square-o-down[_ngcontent-%COMP%]:before{content:"\\f150"}.fa-toggle-up[_ngcontent-%COMP%]:before, .fa-caret-square-o-up[_ngcontent-%COMP%]:before{content:"\\f151"}.fa-toggle-right[_ngcontent-%COMP%]:before, .fa-caret-square-o-right[_ngcontent-%COMP%]:before{content:"\\f152"}.fa-euro[_ngcontent-%COMP%]:before, .fa-eur[_ngcontent-%COMP%]:before{content:"\\f153"}.fa-gbp[_ngcontent-%COMP%]:before{content:"\\f154"}.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before{content:"\\f155"}.fa-rupee[_ngcontent-%COMP%]:before, .fa-inr[_ngcontent-%COMP%]:before{content:"\\f156"}.fa-cny[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before{content:"\\f157"}.fa-ruble[_ngcontent-%COMP%]:before, .fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before{content:"\\f158"}.fa-won[_ngcontent-%COMP%]:before, .fa-krw[_ngcontent-%COMP%]:before{content:"\\f159"}.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before{content:"\\f15a"}.fa-file[_ngcontent-%COMP%]:before{content:"\\f15b"}.fa-file-text[_ngcontent-%COMP%]:before{content:"\\f15c"}.fa-sort-alpha-asc[_ngcontent-%COMP%]:before{content:"\\f15d"}.fa-sort-alpha-desc[_ngcontent-%COMP%]:before{content:"\\f15e"}.fa-sort-amount-asc[_ngcontent-%COMP%]:before{content:"\\f160"}.fa-sort-amount-desc[_ngcontent-%COMP%]:before{content:"\\f161"}.fa-sort-numeric-asc[_ngcontent-%COMP%]:before{content:"\\f162"}.fa-sort-numeric-desc[_ngcontent-%COMP%]:before{content:"\\f163"}.fa-thumbs-up[_ngcontent-%COMP%]:before{content:"\\f164"}.fa-thumbs-down[_ngcontent-%COMP%]:before{content:"\\f165"}.fa-youtube-square[_ngcontent-%COMP%]:before{content:"\\f166"}.fa-youtube[_ngcontent-%COMP%]:before{content:"\\f167"}.fa-xing[_ngcontent-%COMP%]:before{content:"\\f168"}.fa-xing-square[_ngcontent-%COMP%]:before{content:"\\f169"}.fa-youtube-play[_ngcontent-%COMP%]:before{content:"\\f16a"}.fa-dropbox[_ngcontent-%COMP%]:before{content:"\\f16b"}.fa-stack-overflow[_ngcontent-%COMP%]:before{content:"\\f16c"}.fa-instagram[_ngcontent-%COMP%]:before{content:"\\f16d"}.fa-flickr[_ngcontent-%COMP%]:before{content:"\\f16e"}.fa-adn[_ngcontent-%COMP%]:before{content:"\\f170"}.fa-bitbucket[_ngcontent-%COMP%]:before{content:"\\f171"}.fa-bitbucket-square[_ngcontent-%COMP%]:before{content:"\\f172"}.fa-tumblr[_ngcontent-%COMP%]:before{content:"\\f173"}.fa-tumblr-square[_ngcontent-%COMP%]:before{content:"\\f174"}.fa-long-arrow-down[_ngcontent-%COMP%]:before{content:"\\f175"}.fa-long-arrow-up[_ngcontent-%COMP%]:before{content:"\\f176"}.fa-long-arrow-left[_ngcontent-%COMP%]:before{content:"\\f177"}.fa-long-arrow-right[_ngcontent-%COMP%]:before{content:"\\f178"}.fa-apple[_ngcontent-%COMP%]:before{content:"\\f179"}.fa-windows[_ngcontent-%COMP%]:before{content:"\\f17a"}.fa-android[_ngcontent-%COMP%]:before{content:"\\f17b"}.fa-linux[_ngcontent-%COMP%]:before{content:"\\f17c"}.fa-dribbble[_ngcontent-%COMP%]:before{content:"\\f17d"}.fa-skype[_ngcontent-%COMP%]:before{content:"\\f17e"}.fa-foursquare[_ngcontent-%COMP%]:before{content:"\\f180"}.fa-trello[_ngcontent-%COMP%]:before{content:"\\f181"}.fa-female[_ngcontent-%COMP%]:before{content:"\\f182"}.fa-male[_ngcontent-%COMP%]:before{content:"\\f183"}.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before{content:"\\f184"}.fa-sun-o[_ngcontent-%COMP%]:before{content:"\\f185"}.fa-moon-o[_ngcontent-%COMP%]:before{content:"\\f186"}.fa-archive[_ngcontent-%COMP%]:before{content:"\\f187"}.fa-bug[_ngcontent-%COMP%]:before{content:"\\f188"}.fa-vk[_ngcontent-%COMP%]:before{content:"\\f189"}.fa-weibo[_ngcontent-%COMP%]:before{content:"\\f18a"}.fa-renren[_ngcontent-%COMP%]:before{content:"\\f18b"}.fa-pagelines[_ngcontent-%COMP%]:before{content:"\\f18c"}.fa-stack-exchange[_ngcontent-%COMP%]:before{content:"\\f18d"}.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before{content:"\\f18e"}.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before{content:"\\f190"}.fa-toggle-left[_ngcontent-%COMP%]:before, .fa-caret-square-o-left[_ngcontent-%COMP%]:before{content:"\\f191"}.fa-dot-circle-o[_ngcontent-%COMP%]:before{content:"\\f192"}.fa-wheelchair[_ngcontent-%COMP%]:before{content:"\\f193"}.fa-vimeo-square[_ngcontent-%COMP%]:before{content:"\\f194"}.fa-turkish-lira[_ngcontent-%COMP%]:before, .fa-try[_ngcontent-%COMP%]:before{content:"\\f195"}.fa-plus-square-o[_ngcontent-%COMP%]:before{content:"\\f196"}.fa-space-shuttle[_ngcontent-%COMP%]:before{content:"\\f197"}.fa-slack[_ngcontent-%COMP%]:before{content:"\\f198"}.fa-envelope-square[_ngcontent-%COMP%]:before{content:"\\f199"}.fa-wordpress[_ngcontent-%COMP%]:before{content:"\\f19a"}.fa-openid[_ngcontent-%COMP%]:before{content:"\\f19b"}.fa-institution[_ngcontent-%COMP%]:before, .fa-bank[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before{content:"\\f19c"}.fa-mortar-board[_ngcontent-%COMP%]:before, .fa-graduation-cap[_ngcontent-%COMP%]:before{content:"\\f19d"}.fa-yahoo[_ngcontent-%COMP%]:before{content:"\\f19e"}.fa-google[_ngcontent-%COMP%]:before{content:"\\f1a0"}.fa-reddit[_ngcontent-%COMP%]:before{content:"\\f1a1"}.fa-reddit-square[_ngcontent-%COMP%]:before{content:"\\f1a2"}.fa-stumbleupon-circle[_ngcontent-%COMP%]:before{content:"\\f1a3"}.fa-stumbleupon[_ngcontent-%COMP%]:before{content:"\\f1a4"}.fa-delicious[_ngcontent-%COMP%]:before{content:"\\f1a5"}.fa-digg[_ngcontent-%COMP%]:before{content:"\\f1a6"}.fa-pied-piper-pp[_ngcontent-%COMP%]:before{content:"\\f1a7"}.fa-pied-piper-alt[_ngcontent-%COMP%]:before{content:"\\f1a8"}.fa-drupal[_ngcontent-%COMP%]:before{content:"\\f1a9"}.fa-joomla[_ngcontent-%COMP%]:before{content:"\\f1aa"}.fa-language[_ngcontent-%COMP%]:before{content:"\\f1ab"}.fa-fax[_ngcontent-%COMP%]:before{content:"\\f1ac"}.fa-building[_ngcontent-%COMP%]:before{content:"\\f1ad"}.fa-child[_ngcontent-%COMP%]:before{content:"\\f1ae"}.fa-paw[_ngcontent-%COMP%]:before{content:"\\f1b0"}.fa-spoon[_ngcontent-%COMP%]:before{content:"\\f1b1"}.fa-cube[_ngcontent-%COMP%]:before{content:"\\f1b2"}.fa-cubes[_ngcontent-%COMP%]:before{content:"\\f1b3"}.fa-behance[_ngcontent-%COMP%]:before{content:"\\f1b4"}.fa-behance-square[_ngcontent-%COMP%]:before{content:"\\f1b5"}.fa-steam[_ngcontent-%COMP%]:before{content:"\\f1b6"}.fa-steam-square[_ngcontent-%COMP%]:before{content:"\\f1b7"}.fa-recycle[_ngcontent-%COMP%]:before{content:"\\f1b8"}.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before{content:"\\f1b9"}.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before{content:"\\f1ba"}.fa-tree[_ngcontent-%COMP%]:before{content:"\\f1bb"}.fa-spotify[_ngcontent-%COMP%]:before{content:"\\f1bc"}.fa-deviantart[_ngcontent-%COMP%]:before{content:"\\f1bd"}.fa-soundcloud[_ngcontent-%COMP%]:before{content:"\\f1be"}.fa-database[_ngcontent-%COMP%]:before{content:"\\f1c0"}.fa-file-pdf-o[_ngcontent-%COMP%]:before{content:"\\f1c1"}.fa-file-word-o[_ngcontent-%COMP%]:before{content:"\\f1c2"}.fa-file-excel-o[_ngcontent-%COMP%]:before{content:"\\f1c3"}.fa-file-powerpoint-o[_ngcontent-%COMP%]:before{content:"\\f1c4"}.fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before, .fa-file-image-o[_ngcontent-%COMP%]:before{content:"\\f1c5"}.fa-file-zip-o[_ngcontent-%COMP%]:before, .fa-file-archive-o[_ngcontent-%COMP%]:before{content:"\\f1c6"}.fa-file-sound-o[_ngcontent-%COMP%]:before, .fa-file-audio-o[_ngcontent-%COMP%]:before{content:"\\f1c7"}.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before{content:"\\f1c8"}.fa-file-code-o[_ngcontent-%COMP%]:before{content:"\\f1c9"}.fa-vine[_ngcontent-%COMP%]:before{content:"\\f1ca"}.fa-codepen[_ngcontent-%COMP%]:before{content:"\\f1cb"}.fa-jsfiddle[_ngcontent-%COMP%]:before{content:"\\f1cc"}.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before{content:"\\f1cd"}.fa-circle-o-notch[_ngcontent-%COMP%]:before{content:"\\f1ce"}.fa-ra[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before{content:"\\f1d0"}.fa-ge[_ngcontent-%COMP%]:before, .fa-empire[_ngcontent-%COMP%]:before{content:"\\f1d1"}.fa-git-square[_ngcontent-%COMP%]:before{content:"\\f1d2"}.fa-git[_ngcontent-%COMP%]:before{content:"\\f1d3"}.fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before, .fa-hacker-news[_ngcontent-%COMP%]:before{content:"\\f1d4"}.fa-tencent-weibo[_ngcontent-%COMP%]:before{content:"\\f1d5"}.fa-qq[_ngcontent-%COMP%]:before{content:"\\f1d6"}.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before{content:"\\f1d7"}.fa-send[_ngcontent-%COMP%]:before, .fa-paper-plane[_ngcontent-%COMP%]:before{content:"\\f1d8"}.fa-send-o[_ngcontent-%COMP%]:before, .fa-paper-plane-o[_ngcontent-%COMP%]:before{content:"\\f1d9"}.fa-history[_ngcontent-%COMP%]:before{content:"\\f1da"}.fa-circle-thin[_ngcontent-%COMP%]:before{content:"\\f1db"}.fa-header[_ngcontent-%COMP%]:before{content:"\\f1dc"}.fa-paragraph[_ngcontent-%COMP%]:before{content:"\\f1dd"}.fa-sliders[_ngcontent-%COMP%]:before{content:"\\f1de"}.fa-share-alt[_ngcontent-%COMP%]:before{content:"\\f1e0"}.fa-share-alt-square[_ngcontent-%COMP%]:before{content:"\\f1e1"}.fa-bomb[_ngcontent-%COMP%]:before{content:"\\f1e2"}.fa-soccer-ball-o[_ngcontent-%COMP%]:before, .fa-futbol-o[_ngcontent-%COMP%]:before{content:"\\f1e3"}.fa-tty[_ngcontent-%COMP%]:before{content:"\\f1e4"}.fa-binoculars[_ngcontent-%COMP%]:before{content:"\\f1e5"}.fa-plug[_ngcontent-%COMP%]:before{content:"\\f1e6"}.fa-slideshare[_ngcontent-%COMP%]:before{content:"\\f1e7"}.fa-twitch[_ngcontent-%COMP%]:before{content:"\\f1e8"}.fa-yelp[_ngcontent-%COMP%]:before{content:"\\f1e9"}.fa-newspaper-o[_ngcontent-%COMP%]:before{content:"\\f1ea"}.fa-wifi[_ngcontent-%COMP%]:before{content:"\\f1eb"}.fa-calculator[_ngcontent-%COMP%]:before{content:"\\f1ec"}.fa-paypal[_ngcontent-%COMP%]:before{content:"\\f1ed"}.fa-google-wallet[_ngcontent-%COMP%]:before{content:"\\f1ee"}.fa-cc-visa[_ngcontent-%COMP%]:before{content:"\\f1f0"}.fa-cc-mastercard[_ngcontent-%COMP%]:before{content:"\\f1f1"}.fa-cc-discover[_ngcontent-%COMP%]:before{content:"\\f1f2"}.fa-cc-amex[_ngcontent-%COMP%]:before{content:"\\f1f3"}.fa-cc-paypal[_ngcontent-%COMP%]:before{content:"\\f1f4"}.fa-cc-stripe[_ngcontent-%COMP%]:before{content:"\\f1f5"}.fa-bell-slash[_ngcontent-%COMP%]:before{content:"\\f1f6"}.fa-bell-slash-o[_ngcontent-%COMP%]:before{content:"\\f1f7"}.fa-trash[_ngcontent-%COMP%]:before{content:"\\f1f8"}.fa-copyright[_ngcontent-%COMP%]:before{content:"\\f1f9"}.fa-at[_ngcontent-%COMP%]:before{content:"\\f1fa"}.fa-eyedropper[_ngcontent-%COMP%]:before{content:"\\f1fb"}.fa-paint-brush[_ngcontent-%COMP%]:before{content:"\\f1fc"}.fa-birthday-cake[_ngcontent-%COMP%]:before{content:"\\f1fd"}.fa-area-chart[_ngcontent-%COMP%]:before{content:"\\f1fe"}.fa-pie-chart[_ngcontent-%COMP%]:before{content:"\\f200"}.fa-line-chart[_ngcontent-%COMP%]:before{content:"\\f201"}.fa-lastfm[_ngcontent-%COMP%]:before{content:"\\f202"}.fa-lastfm-square[_ngcontent-%COMP%]:before{content:"\\f203"}.fa-toggle-off[_ngcontent-%COMP%]:before{content:"\\f204"}.fa-toggle-on[_ngcontent-%COMP%]:before{content:"\\f205"}.fa-bicycle[_ngcontent-%COMP%]:before{content:"\\f206"}.fa-bus[_ngcontent-%COMP%]:before{content:"\\f207"}.fa-ioxhost[_ngcontent-%COMP%]:before{content:"\\f208"}.fa-angellist[_ngcontent-%COMP%]:before{content:"\\f209"}.fa-cc[_ngcontent-%COMP%]:before{content:"\\f20a"}.fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before, .fa-ils[_ngcontent-%COMP%]:before{content:"\\f20b"}.fa-meanpath[_ngcontent-%COMP%]:before{content:"\\f20c"}.fa-buysellads[_ngcontent-%COMP%]:before{content:"\\f20d"}.fa-connectdevelop[_ngcontent-%COMP%]:before{content:"\\f20e"}.fa-dashcube[_ngcontent-%COMP%]:before{content:"\\f210"}.fa-forumbee[_ngcontent-%COMP%]:before{content:"\\f211"}.fa-leanpub[_ngcontent-%COMP%]:before{content:"\\f212"}.fa-sellsy[_ngcontent-%COMP%]:before{content:"\\f213"}.fa-shirtsinbulk[_ngcontent-%COMP%]:before{content:"\\f214"}.fa-simplybuilt[_ngcontent-%COMP%]:before{content:"\\f215"}.fa-skyatlas[_ngcontent-%COMP%]:before{content:"\\f216"}.fa-cart-plus[_ngcontent-%COMP%]:before{content:"\\f217"}.fa-cart-arrow-down[_ngcontent-%COMP%]:before{content:"\\f218"}.fa-diamond[_ngcontent-%COMP%]:before{content:"\\f219"}.fa-ship[_ngcontent-%COMP%]:before{content:"\\f21a"}.fa-user-secret[_ngcontent-%COMP%]:before{content:"\\f21b"}.fa-motorcycle[_ngcontent-%COMP%]:before{content:"\\f21c"}.fa-street-view[_ngcontent-%COMP%]:before{content:"\\f21d"}.fa-heartbeat[_ngcontent-%COMP%]:before{content:"\\f21e"}.fa-venus[_ngcontent-%COMP%]:before{content:"\\f221"}.fa-mars[_ngcontent-%COMP%]:before{content:"\\f222"}.fa-mercury[_ngcontent-%COMP%]:before{content:"\\f223"}.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before{content:"\\f224"}.fa-transgender-alt[_ngcontent-%COMP%]:before{content:"\\f225"}.fa-venus-double[_ngcontent-%COMP%]:before{content:"\\f226"}.fa-mars-double[_ngcontent-%COMP%]:before{content:"\\f227"}.fa-venus-mars[_ngcontent-%COMP%]:before{content:"\\f228"}.fa-mars-stroke[_ngcontent-%COMP%]:before{content:"\\f229"}.fa-mars-stroke-v[_ngcontent-%COMP%]:before{content:"\\f22a"}.fa-mars-stroke-h[_ngcontent-%COMP%]:before{content:"\\f22b"}.fa-neuter[_ngcontent-%COMP%]:before{content:"\\f22c"}.fa-genderless[_ngcontent-%COMP%]:before{content:"\\f22d"}.fa-facebook-official[_ngcontent-%COMP%]:before{content:"\\f230"}.fa-pinterest-p[_ngcontent-%COMP%]:before{content:"\\f231"}.fa-whatsapp[_ngcontent-%COMP%]:before{content:"\\f232"}.fa-server[_ngcontent-%COMP%]:before{content:"\\f233"}.fa-user-plus[_ngcontent-%COMP%]:before{content:"\\f234"}.fa-user-times[_ngcontent-%COMP%]:before{content:"\\f235"}.fa-hotel[_ngcontent-%COMP%]:before, .fa-bed[_ngcontent-%COMP%]:before{content:"\\f236"}.fa-viacoin[_ngcontent-%COMP%]:before{content:"\\f237"}.fa-train[_ngcontent-%COMP%]:before{content:"\\f238"}.fa-subway[_ngcontent-%COMP%]:before{content:"\\f239"}.fa-medium[_ngcontent-%COMP%]:before{content:"\\f23a"}.fa-yc[_ngcontent-%COMP%]:before, .fa-y-combinator[_ngcontent-%COMP%]:before{content:"\\f23b"}.fa-optin-monster[_ngcontent-%COMP%]:before{content:"\\f23c"}.fa-opencart[_ngcontent-%COMP%]:before{content:"\\f23d"}.fa-expeditedssl[_ngcontent-%COMP%]:before{content:"\\f23e"}.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before{content:"\\f240"}.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before{content:"\\f241"}.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before{content:"\\f242"}.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before{content:"\\f243"}.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before{content:"\\f244"}.fa-mouse-pointer[_ngcontent-%COMP%]:before{content:"\\f245"}.fa-i-cursor[_ngcontent-%COMP%]:before{content:"\\f246"}.fa-object-group[_ngcontent-%COMP%]:before{content:"\\f247"}.fa-object-ungroup[_ngcontent-%COMP%]:before{content:"\\f248"}.fa-sticky-note[_ngcontent-%COMP%]:before{content:"\\f249"}.fa-sticky-note-o[_ngcontent-%COMP%]:before{content:"\\f24a"}.fa-cc-jcb[_ngcontent-%COMP%]:before{content:"\\f24b"}.fa-cc-diners-club[_ngcontent-%COMP%]:before{content:"\\f24c"}.fa-clone[_ngcontent-%COMP%]:before{content:"\\f24d"}.fa-balance-scale[_ngcontent-%COMP%]:before{content:"\\f24e"}.fa-hourglass-o[_ngcontent-%COMP%]:before{content:"\\f250"}.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before{content:"\\f251"}.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before{content:"\\f252"}.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before{content:"\\f253"}.fa-hourglass[_ngcontent-%COMP%]:before{content:"\\f254"}.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before{content:"\\f255"}.fa-hand-stop-o[_ngcontent-%COMP%]:before, .fa-hand-paper-o[_ngcontent-%COMP%]:before{content:"\\f256"}.fa-hand-scissors-o[_ngcontent-%COMP%]:before{content:"\\f257"}.fa-hand-lizard-o[_ngcontent-%COMP%]:before{content:"\\f258"}.fa-hand-spock-o[_ngcontent-%COMP%]:before{content:"\\f259"}.fa-hand-pointer-o[_ngcontent-%COMP%]:before{content:"\\f25a"}.fa-hand-peace-o[_ngcontent-%COMP%]:before{content:"\\f25b"}.fa-trademark[_ngcontent-%COMP%]:before{content:"\\f25c"}.fa-registered[_ngcontent-%COMP%]:before{content:"\\f25d"}.fa-creative-commons[_ngcontent-%COMP%]:before{content:"\\f25e"}.fa-gg[_ngcontent-%COMP%]:before{content:"\\f260"}.fa-gg-circle[_ngcontent-%COMP%]:before{content:"\\f261"}.fa-tripadvisor[_ngcontent-%COMP%]:before{content:"\\f262"}.fa-odnoklassniki[_ngcontent-%COMP%]:before{content:"\\f263"}.fa-odnoklassniki-square[_ngcontent-%COMP%]:before{content:"\\f264"}.fa-get-pocket[_ngcontent-%COMP%]:before{content:"\\f265"}.fa-wikipedia-w[_ngcontent-%COMP%]:before{content:"\\f266"}.fa-safari[_ngcontent-%COMP%]:before{content:"\\f267"}.fa-chrome[_ngcontent-%COMP%]:before{content:"\\f268"}.fa-firefox[_ngcontent-%COMP%]:before{content:"\\f269"}.fa-opera[_ngcontent-%COMP%]:before{content:"\\f26a"}.fa-internet-explorer[_ngcontent-%COMP%]:before{content:"\\f26b"}.fa-tv[_ngcontent-%COMP%]:before, .fa-television[_ngcontent-%COMP%]:before{content:"\\f26c"}.fa-contao[_ngcontent-%COMP%]:before{content:"\\f26d"}.fa-500px[_ngcontent-%COMP%]:before{content:"\\f26e"}.fa-amazon[_ngcontent-%COMP%]:before{content:"\\f270"}.fa-calendar-plus-o[_ngcontent-%COMP%]:before{content:"\\f271"}.fa-calendar-minus-o[_ngcontent-%COMP%]:before{content:"\\f272"}.fa-calendar-times-o[_ngcontent-%COMP%]:before{content:"\\f273"}.fa-calendar-check-o[_ngcontent-%COMP%]:before{content:"\\f274"}.fa-industry[_ngcontent-%COMP%]:before{content:"\\f275"}.fa-map-pin[_ngcontent-%COMP%]:before{content:"\\f276"}.fa-map-signs[_ngcontent-%COMP%]:before{content:"\\f277"}.fa-map-o[_ngcontent-%COMP%]:before{content:"\\f278"}.fa-map[_ngcontent-%COMP%]:before{content:"\\f279"}.fa-commenting[_ngcontent-%COMP%]:before{content:"\\f27a"}.fa-commenting-o[_ngcontent-%COMP%]:before{content:"\\f27b"}.fa-houzz[_ngcontent-%COMP%]:before{content:"\\f27c"}.fa-vimeo[_ngcontent-%COMP%]:before{content:"\\f27d"}.fa-black-tie[_ngcontent-%COMP%]:before{content:"\\f27e"}.fa-fonticons[_ngcontent-%COMP%]:before{content:"\\f280"}.fa-reddit-alien[_ngcontent-%COMP%]:before{content:"\\f281"}.fa-edge[_ngcontent-%COMP%]:before{content:"\\f282"}.fa-credit-card-alt[_ngcontent-%COMP%]:before{content:"\\f283"}.fa-codiepie[_ngcontent-%COMP%]:before{content:"\\f284"}.fa-modx[_ngcontent-%COMP%]:before{content:"\\f285"}.fa-fort-awesome[_ngcontent-%COMP%]:before{content:"\\f286"}.fa-usb[_ngcontent-%COMP%]:before{content:"\\f287"}.fa-product-hunt[_ngcontent-%COMP%]:before{content:"\\f288"}.fa-mixcloud[_ngcontent-%COMP%]:before{content:"\\f289"}.fa-scribd[_ngcontent-%COMP%]:before{content:"\\f28a"}.fa-pause-circle[_ngcontent-%COMP%]:before{content:"\\f28b"}.fa-pause-circle-o[_ngcontent-%COMP%]:before{content:"\\f28c"}.fa-stop-circle[_ngcontent-%COMP%]:before{content:"\\f28d"}.fa-stop-circle-o[_ngcontent-%COMP%]:before{content:"\\f28e"}.fa-shopping-bag[_ngcontent-%COMP%]:before{content:"\\f290"}.fa-shopping-basket[_ngcontent-%COMP%]:before{content:"\\f291"}.fa-hashtag[_ngcontent-%COMP%]:before{content:"\\f292"}.fa-bluetooth[_ngcontent-%COMP%]:before{content:"\\f293"}.fa-bluetooth-b[_ngcontent-%COMP%]:before{content:"\\f294"}.fa-percent[_ngcontent-%COMP%]:before{content:"\\f295"}.fa-gitlab[_ngcontent-%COMP%]:before{content:"\\f296"}.fa-wpbeginner[_ngcontent-%COMP%]:before{content:"\\f297"}.fa-wpforms[_ngcontent-%COMP%]:before{content:"\\f298"}.fa-envira[_ngcontent-%COMP%]:before{content:"\\f299"}.fa-universal-access[_ngcontent-%COMP%]:before{content:"\\f29a"}.fa-wheelchair-alt[_ngcontent-%COMP%]:before{content:"\\f29b"}.fa-question-circle-o[_ngcontent-%COMP%]:before{content:"\\f29c"}.fa-blind[_ngcontent-%COMP%]:before{content:"\\f29d"}.fa-audio-description[_ngcontent-%COMP%]:before{content:"\\f29e"}.fa-volume-control-phone[_ngcontent-%COMP%]:before{content:"\\f2a0"}.fa-braille[_ngcontent-%COMP%]:before{content:"\\f2a1"}.fa-assistive-listening-systems[_ngcontent-%COMP%]:before{content:"\\f2a2"}.fa-asl-interpreting[_ngcontent-%COMP%]:before, .fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before{content:"\\f2a3"}.fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before, .fa-deaf[_ngcontent-%COMP%]:before{content:"\\f2a4"}.fa-glide[_ngcontent-%COMP%]:before{content:"\\f2a5"}.fa-glide-g[_ngcontent-%COMP%]:before{content:"\\f2a6"}.fa-signing[_ngcontent-%COMP%]:before, .fa-sign-language[_ngcontent-%COMP%]:before{content:"\\f2a7"}.fa-low-vision[_ngcontent-%COMP%]:before{content:"\\f2a8"}.fa-viadeo[_ngcontent-%COMP%]:before{content:"\\f2a9"}.fa-viadeo-square[_ngcontent-%COMP%]:before{content:"\\f2aa"}.fa-snapchat[_ngcontent-%COMP%]:before{content:"\\f2ab"}.fa-snapchat-ghost[_ngcontent-%COMP%]:before{content:"\\f2ac"}.fa-snapchat-square[_ngcontent-%COMP%]:before{content:"\\f2ad"}.fa-pied-piper[_ngcontent-%COMP%]:before{content:"\\f2ae"}.fa-first-order[_ngcontent-%COMP%]:before{content:"\\f2b0"}.fa-yoast[_ngcontent-%COMP%]:before{content:"\\f2b1"}.fa-themeisle[_ngcontent-%COMP%]:before{content:"\\f2b2"}.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before{content:"\\f2b3"}.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before{content:"\\f2b4"}.fa-handshake-o[_ngcontent-%COMP%]:before{content:"\\f2b5"}.fa-envelope-open[_ngcontent-%COMP%]:before{content:"\\f2b6"}.fa-envelope-open-o[_ngcontent-%COMP%]:before{content:"\\f2b7"}.fa-linode[_ngcontent-%COMP%]:before{content:"\\f2b8"}.fa-address-book[_ngcontent-%COMP%]:before{content:"\\f2b9"}.fa-address-book-o[_ngcontent-%COMP%]:before{content:"\\f2ba"}.fa-vcard[_ngcontent-%COMP%]:before, .fa-address-card[_ngcontent-%COMP%]:before{content:"\\f2bb"}.fa-vcard-o[_ngcontent-%COMP%]:before, .fa-address-card-o[_ngcontent-%COMP%]:before{content:"\\f2bc"}.fa-user-circle[_ngcontent-%COMP%]:before{content:"\\f2bd"}.fa-user-circle-o[_ngcontent-%COMP%]:before{content:"\\f2be"}.fa-user-o[_ngcontent-%COMP%]:before{content:"\\f2c0"}.fa-id-badge[_ngcontent-%COMP%]:before{content:"\\f2c1"}.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before{content:"\\f2c2"}.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before{content:"\\f2c3"}.fa-quora[_ngcontent-%COMP%]:before{content:"\\f2c4"}.fa-free-code-camp[_ngcontent-%COMP%]:before{content:"\\f2c5"}.fa-telegram[_ngcontent-%COMP%]:before{content:"\\f2c6"}.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before{content:"\\f2c7"}.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before{content:"\\f2c8"}.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before{content:"\\f2c9"}.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before{content:"\\f2ca"}.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before{content:"\\f2cb"}.fa-shower[_ngcontent-%COMP%]:before{content:"\\f2cc"}.fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before, .fa-bath[_ngcontent-%COMP%]:before{content:"\\f2cd"}.fa-podcast[_ngcontent-%COMP%]:before{content:"\\f2ce"}.fa-window-maximize[_ngcontent-%COMP%]:before{content:"\\f2d0"}.fa-window-minimize[_ngcontent-%COMP%]:before{content:"\\f2d1"}.fa-window-restore[_ngcontent-%COMP%]:before{content:"\\f2d2"}.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before{content:"\\f2d3"}.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before{content:"\\f2d4"}.fa-bandcamp[_ngcontent-%COMP%]:before{content:"\\f2d5"}.fa-grav[_ngcontent-%COMP%]:before{content:"\\f2d6"}.fa-etsy[_ngcontent-%COMP%]:before{content:"\\f2d7"}.fa-imdb[_ngcontent-%COMP%]:before{content:"\\f2d8"}.fa-ravelry[_ngcontent-%COMP%]:before{content:"\\f2d9"}.fa-eercast[_ngcontent-%COMP%]:before{content:"\\f2da"}.fa-microchip[_ngcontent-%COMP%]:before{content:"\\f2db"}.fa-snowflake-o[_ngcontent-%COMP%]:before{content:"\\f2dc"}.fa-superpowers[_ngcontent-%COMP%]:before{content:"\\f2dd"}.fa-wpexplorer[_ngcontent-%COMP%]:before{content:"\\f2de"}.fa-meetup[_ngcontent-%COMP%]:before{content:"\\f2e0"}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-textarea[_ngcontent-%COMP%]{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:#ffffff80}.angular-editor-toolbar[_ngcontent-%COMP%]{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:focus, .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.focus[_ngcontent-%COMP%]{outline:0}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{background:#555555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.background[_ngcontent-%COMP%]{background:#555555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]{background:#fff5b9}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]:hover{background-color:#fffa98}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:24px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{font-size:15px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%]{font-size:13px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%]{font-size:12px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]{display:inline-block;width:50px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:10px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:12px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:18px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:22px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{position:absolute;content:"";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]:not([style*="display:none"]):not([style*="display: none"]){display:inline-block}']
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularEditorToolbarComponent, [{
    type: Component,
    args: [{
      selector: "angular-editor-toolbar",
      template: `<div class="angular-editor-toolbar" *ngIf="showToolbar">
  <div class="angular-editor-toolbar-set">
    <button type="button" title="Undo" class="angular-editor-button" (click)="triggerCommand('undo')"
            [hidden]="isButtonHidden('undo')" tabindex="-1"><i
      class='fa fa-undo'></i></button>
    <button type="button" title="Redo" class="angular-editor-button" (click)="triggerCommand('redo')"
            [hidden]="isButtonHidden('redo')" tabindex="-1"><i
      class='fa fa-repeat'></i></button>
  </div>
  <div class="angular-editor-toolbar-set">
    <button [id]="'bold-'+id" type="button" title="Bold" class="angular-editor-button" (click)="triggerCommand('bold')"
            [disabled]="htmlMode" [hidden]="isButtonHidden('bold')" tabindex="-1"><i class='fa fa-bold'></i></button>
    <button [id]="'italic-'+id" type="button" title="Italic" class="angular-editor-button"
            (click)="triggerCommand('italic')"
            [disabled]="htmlMode" [hidden]="isButtonHidden('italic')" tabindex="-1"><i class='fa fa-italic'></i>
    </button>
    <button [id]="'underline-'+id" type="button" title="Underline" class="angular-editor-button"
            (click)="triggerCommand('underline')" [disabled]="htmlMode" [hidden]="isButtonHidden('underline')"
            tabindex="-1"><i class='fa fa-underline'></i></button>
    <button [id]="'strikeThrough-'+id" type="button" title="Strikethrough" class="angular-editor-button"
            (click)="triggerCommand('strikeThrough')" [disabled]="htmlMode" [hidden]="isButtonHidden('strikeThrough')"
            tabindex="-1"><i class='fa fa-strikethrough'></i></button>
    <button [id]="'subscript-'+id" type="button" title="Subscript" class="angular-editor-button"
            (click)="triggerCommand('subscript')" [disabled]="htmlMode" [hidden]="isButtonHidden('subscript')"
            tabindex="-1"><i class='fa fa-subscript'></i></button>
    <button [id]="'superscript-'+id" type="button" title="Superscript" class="angular-editor-button"
            (click)="triggerCommand('superscript')" [disabled]="htmlMode" [hidden]="isButtonHidden('superscript')"
            tabindex="-1"><i class='fa fa-superscript'></i></button>
  </div>
  <div class="angular-editor-toolbar-set">
    <button [id]="'justifyLeft-'+id" type="button" title="Justify Left" class="angular-editor-button"
            (click)="triggerCommand('justifyLeft')" [disabled]="htmlMode" [hidden]="isButtonHidden('justifyLeft')"
            tabindex="-1"><i
      class='fa fa-align-left'></i></button>
    <button [id]="'justifyCenter-'+id" type="button" title="Justify Center" class="angular-editor-button"
            (click)="triggerCommand('justifyCenter')" [disabled]="htmlMode" [hidden]="isButtonHidden('justifyCenter')"
            tabindex="-1"><i
      class='fa fa-align-center'></i></button>
    <button [id]="'justifyRight-'+id" type="button" title="Justify Right" class="angular-editor-button"
            (click)="triggerCommand('justifyRight')" [disabled]="htmlMode" [hidden]="isButtonHidden('justifyRight')"
            tabindex="-1">
      <i class='fa fa-align-right'></i></button>
    <button [id]="'justifyFull-'+id" type="button" title="Justify Full" class="angular-editor-button"
            (click)="triggerCommand('justifyFull')" [disabled]="htmlMode" [hidden]="isButtonHidden('justifyFull')"
            tabindex="-1"><i
      class='fa fa-align-justify'></i></button>
  </div>
  <div class="angular-editor-toolbar-set">
    <button [id]="'indent-'+id" type="button" title="Indent" class="angular-editor-button"
            (click)="triggerCommand('indent')"
            [disabled]="htmlMode" [hidden]="isButtonHidden('indent')" tabindex="-1"><i
      class='fa fa-indent'></i></button>
    <button [id]="'outdent-'+id" type="button" title="Outdent" class="angular-editor-button"
            (click)="triggerCommand('outdent')"
            [disabled]="htmlMode" [hidden]="isButtonHidden('outdent')" tabindex="-1"><i
      class='fa fa-outdent'></i></button>
  </div>
  <div class="angular-editor-toolbar-set">
    <button [id]="'insertUnorderedList-'+id" type="button" title="Unordered List" class="angular-editor-button"
            (click)="triggerCommand('insertUnorderedList')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('insertUnorderedList')" tabindex="-1"><i
      class='fa fa-list-ul'></i></button>
    <button [id]="'insertOrderedList-'+id" type="button" title="Ordered List" class="angular-editor-button"
            (click)="triggerCommand('insertOrderedList')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('insertOrderedList')" tabindex="-1"><i
      class='fa fa-list-ol'></i></button>
  </div>
  <div class="angular-editor-toolbar-set">

    <ae-select class="select-heading" [options]="headings"
               [(ngModel)]="block"
               (change)="triggerCommand(block)"
               [disabled]="htmlMode"
               [hidden]="isButtonHidden('heading')"
               tabindex="-1"></ae-select>
  </div>
  <div class="angular-editor-toolbar-set">

    <ae-select class="select-font" [options]="fonts"
               [(ngModel)]="fontName"
               (change)="setFontName(fontName)"
               [disabled]="htmlMode"
               [hidden]="isButtonHidden('fontName')"
               tabindex="-1"></ae-select>
  </div>
  <div class="angular-editor-toolbar-set">

    <ae-select class="select-font-size" [options]="fontSizes"
               [(ngModel)]="fontSize"
               (change)="setFontSize(fontSize)"
               [disabled]="htmlMode"
               [hidden]="isButtonHidden('fontSize')"
               tabindex="-1">
    </ae-select>
  </div>
  <div class="angular-editor-toolbar-set">
    <input
      style="display: none"
      type="color" (change)="insertColor(fgInput.value, 'textColor')"
      #fgInput>
    <button [id]="'foregroundColorPicker-'+id" type="button" class="angular-editor-button" (click)="focus(); ; fgInput.click()"
            title="Text Color"
            [disabled]="htmlMode" [hidden]="isButtonHidden('textColor')" tabindex="-1"><span
      class="color-label foreground"><i class="fa fa-font"></i></span>
    </button>
    <input
      style="display: none"
      type="color" (change)="insertColor(bgInput.value, 'backgroundColor')"
      #bgInput>
    <button [id]="'backgroundColorPicker-'+id" type="button" class="angular-editor-button" (click)="focus(); ; bgInput.click()"
            title="Background Color"
            [disabled]="htmlMode" [hidden]="isButtonHidden('backgroundColor')" tabindex="-1"><span
      class="color-label background"><i class="fa fa-font"></i></span>
    </button>
  </div>
  <div *ngIf="_customClasses" class="angular-editor-toolbar-set">
    <ae-select class="select-custom-style" [options]="customClassList"
               [(ngModel)]="customClassId"
               (change)="setCustomClass(customClassId)"
               [disabled]="htmlMode"
               [hidden]="isButtonHidden('customClasses')"
               tabindex="-1"></ae-select>
  </div>
  <div class="angular-editor-toolbar-set">
    <button [id]="'link-'+id" type="button" class="angular-editor-button" (click)="insertUrl()"
            title="Insert Link" [disabled]="isLinkButtonDisabled" [hidden]="isButtonHidden('link')" tabindex="-1">
      <i class="fa fa-link"></i>
    </button>
    <button [id]="'unlink-'+id" type="button" class="angular-editor-button" (click)="triggerCommand('unlink')"
            title="Unlink" [disabled]="htmlMode || !linkSelected" [hidden]="isButtonHidden('unlink')" tabindex="-1">
      <i class="fa fa-chain-broken"></i>
    </button>
    <input
      style="display: none"
      accept="image/*"
      type="file" (change)="onFileChanged($event)"
      #fileInput>
    <button [id]="'insertImage-'+id" type="button" class="angular-editor-button" (click)="focus(); fileInput.click()"
            title="Insert Image"
            [disabled]="htmlMode" [hidden]="isButtonHidden('insertImage')" tabindex="-1"><i class="fa fa-image"></i>
    </button>
    <button [id]="'insertVideo-'+id" type="button" class="angular-editor-button"
            (click)="insertVideo()" title="Insert Video" [disabled]="htmlMode" [hidden]="isButtonHidden('insertVideo')"
            tabindex="-1"><i
      class="fa fa-video-camera"></i></button>
    <button [id]="'insertHorizontalRule-'+id" type="button" title="Horizontal Line" class="angular-editor-button"
            (click)="triggerCommand('insertHorizontalRule')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('insertHorizontalRule')" tabindex="-1"><i
      class="fa fa-minus"></i></button>
  </div>
  <div class="angular-editor-toolbar-set">
    <button [id]="'clearFormatting-'+id" type="button" title="Clear Formatting" class="angular-editor-button"
            (click)="triggerCommand('removeFormat')" [disabled]="htmlMode" [hidden]="isButtonHidden('removeFormat')"
            tabindex="-1"><i class='fa fa-remove'></i>
    </button>
  </div>
  <div class="angular-editor-toolbar-set">
    <button [id]="'toggleEditorMode-'+id" type="button" title="HTML Code" class="angular-editor-button"
            (click)="triggerCommand('toggleEditorMode')" [hidden]="isButtonHidden('toggleEditorMode')" tabindex="-1"><i
      class='fa fa-code'></i></button>
  </div>
  <ng-content></ng-content>
</div>
`,
      styles: ['/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(/assets/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(/assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"),url(/assets/fonts/fontawesome-webfont.woff2?v=4.7.0) format("woff2"),url(/assets/fonts/fontawesome-webfont.woff?v=4.7.0) format("woff"),url(/assets/fonts/fontawesome-webfont.ttf?v=4.7.0) format("truetype"),url(/assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format("svg");font-weight:400;font-style:normal}.fa{display:inline-block;font: 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{animation:fa-spin 2s infinite linear}.fa-pulse{animation:fa-spin 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";transform:scaleY(-1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\\f000"}.fa-music:before{content:"\\f001"}.fa-search:before{content:"\\f002"}.fa-envelope-o:before{content:"\\f003"}.fa-heart:before{content:"\\f004"}.fa-star:before{content:"\\f005"}.fa-star-o:before{content:"\\f006"}.fa-user:before{content:"\\f007"}.fa-film:before{content:"\\f008"}.fa-th-large:before{content:"\\f009"}.fa-th:before{content:"\\f00a"}.fa-th-list:before{content:"\\f00b"}.fa-check:before{content:"\\f00c"}.fa-remove:before,.fa-close:before,.fa-times:before{content:"\\f00d"}.fa-search-plus:before{content:"\\f00e"}.fa-search-minus:before{content:"\\f010"}.fa-power-off:before{content:"\\f011"}.fa-signal:before{content:"\\f012"}.fa-gear:before,.fa-cog:before{content:"\\f013"}.fa-trash-o:before{content:"\\f014"}.fa-home:before{content:"\\f015"}.fa-file-o:before{content:"\\f016"}.fa-clock-o:before{content:"\\f017"}.fa-road:before{content:"\\f018"}.fa-download:before{content:"\\f019"}.fa-arrow-circle-o-down:before{content:"\\f01a"}.fa-arrow-circle-o-up:before{content:"\\f01b"}.fa-inbox:before{content:"\\f01c"}.fa-play-circle-o:before{content:"\\f01d"}.fa-rotate-right:before,.fa-repeat:before{content:"\\f01e"}.fa-refresh:before{content:"\\f021"}.fa-list-alt:before{content:"\\f022"}.fa-lock:before{content:"\\f023"}.fa-flag:before{content:"\\f024"}.fa-headphones:before{content:"\\f025"}.fa-volume-off:before{content:"\\f026"}.fa-volume-down:before{content:"\\f027"}.fa-volume-up:before{content:"\\f028"}.fa-qrcode:before{content:"\\f029"}.fa-barcode:before{content:"\\f02a"}.fa-tag:before{content:"\\f02b"}.fa-tags:before{content:"\\f02c"}.fa-book:before{content:"\\f02d"}.fa-bookmark:before{content:"\\f02e"}.fa-print:before{content:"\\f02f"}.fa-camera:before{content:"\\f030"}.fa-font:before{content:"\\f031"}.fa-bold:before{content:"\\f032"}.fa-italic:before{content:"\\f033"}.fa-text-height:before{content:"\\f034"}.fa-text-width:before{content:"\\f035"}.fa-align-left:before{content:"\\f036"}.fa-align-center:before{content:"\\f037"}.fa-align-right:before{content:"\\f038"}.fa-align-justify:before{content:"\\f039"}.fa-list:before{content:"\\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\\f03b"}.fa-indent:before{content:"\\f03c"}.fa-video-camera:before{content:"\\f03d"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\\f03e"}.fa-pencil:before{content:"\\f040"}.fa-map-marker:before{content:"\\f041"}.fa-adjust:before{content:"\\f042"}.fa-tint:before{content:"\\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\\f044"}.fa-share-square-o:before{content:"\\f045"}.fa-check-square-o:before{content:"\\f046"}.fa-arrows:before{content:"\\f047"}.fa-step-backward:before{content:"\\f048"}.fa-fast-backward:before{content:"\\f049"}.fa-backward:before{content:"\\f04a"}.fa-play:before{content:"\\f04b"}.fa-pause:before{content:"\\f04c"}.fa-stop:before{content:"\\f04d"}.fa-forward:before{content:"\\f04e"}.fa-fast-forward:before{content:"\\f050"}.fa-step-forward:before{content:"\\f051"}.fa-eject:before{content:"\\f052"}.fa-chevron-left:before{content:"\\f053"}.fa-chevron-right:before{content:"\\f054"}.fa-plus-circle:before{content:"\\f055"}.fa-minus-circle:before{content:"\\f056"}.fa-times-circle:before{content:"\\f057"}.fa-check-circle:before{content:"\\f058"}.fa-question-circle:before{content:"\\f059"}.fa-info-circle:before{content:"\\f05a"}.fa-crosshairs:before{content:"\\f05b"}.fa-times-circle-o:before{content:"\\f05c"}.fa-check-circle-o:before{content:"\\f05d"}.fa-ban:before{content:"\\f05e"}.fa-arrow-left:before{content:"\\f060"}.fa-arrow-right:before{content:"\\f061"}.fa-arrow-up:before{content:"\\f062"}.fa-arrow-down:before{content:"\\f063"}.fa-mail-forward:before,.fa-share:before{content:"\\f064"}.fa-expand:before{content:"\\f065"}.fa-compress:before{content:"\\f066"}.fa-plus:before{content:"\\f067"}.fa-minus:before{content:"\\f068"}.fa-asterisk:before{content:"\\f069"}.fa-exclamation-circle:before{content:"\\f06a"}.fa-gift:before{content:"\\f06b"}.fa-leaf:before{content:"\\f06c"}.fa-fire:before{content:"\\f06d"}.fa-eye:before{content:"\\f06e"}.fa-eye-slash:before{content:"\\f070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\\f071"}.fa-plane:before{content:"\\f072"}.fa-calendar:before{content:"\\f073"}.fa-random:before{content:"\\f074"}.fa-comment:before{content:"\\f075"}.fa-magnet:before{content:"\\f076"}.fa-chevron-up:before{content:"\\f077"}.fa-chevron-down:before{content:"\\f078"}.fa-retweet:before{content:"\\f079"}.fa-shopping-cart:before{content:"\\f07a"}.fa-folder:before{content:"\\f07b"}.fa-folder-open:before{content:"\\f07c"}.fa-arrows-v:before{content:"\\f07d"}.fa-arrows-h:before{content:"\\f07e"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\\f080"}.fa-twitter-square:before{content:"\\f081"}.fa-facebook-square:before{content:"\\f082"}.fa-camera-retro:before{content:"\\f083"}.fa-key:before{content:"\\f084"}.fa-gears:before,.fa-cogs:before{content:"\\f085"}.fa-comments:before{content:"\\f086"}.fa-thumbs-o-up:before{content:"\\f087"}.fa-thumbs-o-down:before{content:"\\f088"}.fa-star-half:before{content:"\\f089"}.fa-heart-o:before{content:"\\f08a"}.fa-sign-out:before{content:"\\f08b"}.fa-linkedin-square:before{content:"\\f08c"}.fa-thumb-tack:before{content:"\\f08d"}.fa-external-link:before{content:"\\f08e"}.fa-sign-in:before{content:"\\f090"}.fa-trophy:before{content:"\\f091"}.fa-github-square:before{content:"\\f092"}.fa-upload:before{content:"\\f093"}.fa-lemon-o:before{content:"\\f094"}.fa-phone:before{content:"\\f095"}.fa-square-o:before{content:"\\f096"}.fa-bookmark-o:before{content:"\\f097"}.fa-phone-square:before{content:"\\f098"}.fa-twitter:before{content:"\\f099"}.fa-facebook-f:before,.fa-facebook:before{content:"\\f09a"}.fa-github:before{content:"\\f09b"}.fa-unlock:before{content:"\\f09c"}.fa-credit-card:before{content:"\\f09d"}.fa-feed:before,.fa-rss:before{content:"\\f09e"}.fa-hdd-o:before{content:"\\f0a0"}.fa-bullhorn:before{content:"\\f0a1"}.fa-bell:before{content:"\\f0f3"}.fa-certificate:before{content:"\\f0a3"}.fa-hand-o-right:before{content:"\\f0a4"}.fa-hand-o-left:before{content:"\\f0a5"}.fa-hand-o-up:before{content:"\\f0a6"}.fa-hand-o-down:before{content:"\\f0a7"}.fa-arrow-circle-left:before{content:"\\f0a8"}.fa-arrow-circle-right:before{content:"\\f0a9"}.fa-arrow-circle-up:before{content:"\\f0aa"}.fa-arrow-circle-down:before{content:"\\f0ab"}.fa-globe:before{content:"\\f0ac"}.fa-wrench:before{content:"\\f0ad"}.fa-tasks:before{content:"\\f0ae"}.fa-filter:before{content:"\\f0b0"}.fa-briefcase:before{content:"\\f0b1"}.fa-arrows-alt:before{content:"\\f0b2"}.fa-group:before,.fa-users:before{content:"\\f0c0"}.fa-chain:before,.fa-link:before{content:"\\f0c1"}.fa-cloud:before{content:"\\f0c2"}.fa-flask:before{content:"\\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\\f0c5"}.fa-paperclip:before{content:"\\f0c6"}.fa-save:before,.fa-floppy-o:before{content:"\\f0c7"}.fa-square:before{content:"\\f0c8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\\f0c9"}.fa-list-ul:before{content:"\\f0ca"}.fa-list-ol:before{content:"\\f0cb"}.fa-strikethrough:before{content:"\\f0cc"}.fa-underline:before{content:"\\f0cd"}.fa-table:before{content:"\\f0ce"}.fa-magic:before{content:"\\f0d0"}.fa-truck:before{content:"\\f0d1"}.fa-pinterest:before{content:"\\f0d2"}.fa-pinterest-square:before{content:"\\f0d3"}.fa-google-plus-square:before{content:"\\f0d4"}.fa-google-plus:before{content:"\\f0d5"}.fa-money:before{content:"\\f0d6"}.fa-caret-down:before{content:"\\f0d7"}.fa-caret-up:before{content:"\\f0d8"}.fa-caret-left:before{content:"\\f0d9"}.fa-caret-right:before{content:"\\f0da"}.fa-columns:before{content:"\\f0db"}.fa-unsorted:before,.fa-sort:before{content:"\\f0dc"}.fa-sort-down:before,.fa-sort-desc:before{content:"\\f0dd"}.fa-sort-up:before,.fa-sort-asc:before{content:"\\f0de"}.fa-envelope:before{content:"\\f0e0"}.fa-linkedin:before{content:"\\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\\f0e2"}.fa-legal:before,.fa-gavel:before{content:"\\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\\f0e4"}.fa-comment-o:before{content:"\\f0e5"}.fa-comments-o:before{content:"\\f0e6"}.fa-flash:before,.fa-bolt:before{content:"\\f0e7"}.fa-sitemap:before{content:"\\f0e8"}.fa-umbrella:before{content:"\\f0e9"}.fa-paste:before,.fa-clipboard:before{content:"\\f0ea"}.fa-lightbulb-o:before{content:"\\f0eb"}.fa-exchange:before{content:"\\f0ec"}.fa-cloud-download:before{content:"\\f0ed"}.fa-cloud-upload:before{content:"\\f0ee"}.fa-user-md:before{content:"\\f0f0"}.fa-stethoscope:before{content:"\\f0f1"}.fa-suitcase:before{content:"\\f0f2"}.fa-bell-o:before{content:"\\f0a2"}.fa-coffee:before{content:"\\f0f4"}.fa-cutlery:before{content:"\\f0f5"}.fa-file-text-o:before{content:"\\f0f6"}.fa-building-o:before{content:"\\f0f7"}.fa-hospital-o:before{content:"\\f0f8"}.fa-ambulance:before{content:"\\f0f9"}.fa-medkit:before{content:"\\f0fa"}.fa-fighter-jet:before{content:"\\f0fb"}.fa-beer:before{content:"\\f0fc"}.fa-h-square:before{content:"\\f0fd"}.fa-plus-square:before{content:"\\f0fe"}.fa-angle-double-left:before{content:"\\f100"}.fa-angle-double-right:before{content:"\\f101"}.fa-angle-double-up:before{content:"\\f102"}.fa-angle-double-down:before{content:"\\f103"}.fa-angle-left:before{content:"\\f104"}.fa-angle-right:before{content:"\\f105"}.fa-angle-up:before{content:"\\f106"}.fa-angle-down:before{content:"\\f107"}.fa-desktop:before{content:"\\f108"}.fa-laptop:before{content:"\\f109"}.fa-tablet:before{content:"\\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\\f10b"}.fa-circle-o:before{content:"\\f10c"}.fa-quote-left:before{content:"\\f10d"}.fa-quote-right:before{content:"\\f10e"}.fa-spinner:before{content:"\\f110"}.fa-circle:before{content:"\\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\\f112"}.fa-github-alt:before{content:"\\f113"}.fa-folder-o:before{content:"\\f114"}.fa-folder-open-o:before{content:"\\f115"}.fa-smile-o:before{content:"\\f118"}.fa-frown-o:before{content:"\\f119"}.fa-meh-o:before{content:"\\f11a"}.fa-gamepad:before{content:"\\f11b"}.fa-keyboard-o:before{content:"\\f11c"}.fa-flag-o:before{content:"\\f11d"}.fa-flag-checkered:before{content:"\\f11e"}.fa-terminal:before{content:"\\f120"}.fa-code:before{content:"\\f121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\\f123"}.fa-location-arrow:before{content:"\\f124"}.fa-crop:before{content:"\\f125"}.fa-code-fork:before{content:"\\f126"}.fa-unlink:before,.fa-chain-broken:before{content:"\\f127"}.fa-question:before{content:"\\f128"}.fa-info:before{content:"\\f129"}.fa-exclamation:before{content:"\\f12a"}.fa-superscript:before{content:"\\f12b"}.fa-subscript:before{content:"\\f12c"}.fa-eraser:before{content:"\\f12d"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-microphone:before{content:"\\f130"}.fa-microphone-slash:before{content:"\\f131"}.fa-shield:before{content:"\\f132"}.fa-calendar-o:before{content:"\\f133"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-rocket:before{content:"\\f135"}.fa-maxcdn:before{content:"\\f136"}.fa-chevron-circle-left:before{content:"\\f137"}.fa-chevron-circle-right:before{content:"\\f138"}.fa-chevron-circle-up:before{content:"\\f139"}.fa-chevron-circle-down:before{content:"\\f13a"}.fa-html5:before{content:"\\f13b"}.fa-css3:before{content:"\\f13c"}.fa-anchor:before{content:"\\f13d"}.fa-unlock-alt:before{content:"\\f13e"}.fa-bullseye:before{content:"\\f140"}.fa-ellipsis-h:before{content:"\\f141"}.fa-ellipsis-v:before{content:"\\f142"}.fa-rss-square:before{content:"\\f143"}.fa-play-circle:before{content:"\\f144"}.fa-ticket:before{content:"\\f145"}.fa-minus-square:before{content:"\\f146"}.fa-minus-square-o:before{content:"\\f147"}.fa-level-up:before{content:"\\f148"}.fa-level-down:before{content:"\\f149"}.fa-check-square:before{content:"\\f14a"}.fa-pencil-square:before{content:"\\f14b"}.fa-external-link-square:before{content:"\\f14c"}.fa-share-square:before{content:"\\f14d"}.fa-compass:before{content:"\\f14e"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\\f150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\\f151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\\f152"}.fa-euro:before,.fa-eur:before{content:"\\f153"}.fa-gbp:before{content:"\\f154"}.fa-dollar:before,.fa-usd:before{content:"\\f155"}.fa-rupee:before,.fa-inr:before{content:"\\f156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\\f157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\\f158"}.fa-won:before,.fa-krw:before{content:"\\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\\f15a"}.fa-file:before{content:"\\f15b"}.fa-file-text:before{content:"\\f15c"}.fa-sort-alpha-asc:before{content:"\\f15d"}.fa-sort-alpha-desc:before{content:"\\f15e"}.fa-sort-amount-asc:before{content:"\\f160"}.fa-sort-amount-desc:before{content:"\\f161"}.fa-sort-numeric-asc:before{content:"\\f162"}.fa-sort-numeric-desc:before{content:"\\f163"}.fa-thumbs-up:before{content:"\\f164"}.fa-thumbs-down:before{content:"\\f165"}.fa-youtube-square:before{content:"\\f166"}.fa-youtube:before{content:"\\f167"}.fa-xing:before{content:"\\f168"}.fa-xing-square:before{content:"\\f169"}.fa-youtube-play:before{content:"\\f16a"}.fa-dropbox:before{content:"\\f16b"}.fa-stack-overflow:before{content:"\\f16c"}.fa-instagram:before{content:"\\f16d"}.fa-flickr:before{content:"\\f16e"}.fa-adn:before{content:"\\f170"}.fa-bitbucket:before{content:"\\f171"}.fa-bitbucket-square:before{content:"\\f172"}.fa-tumblr:before{content:"\\f173"}.fa-tumblr-square:before{content:"\\f174"}.fa-long-arrow-down:before{content:"\\f175"}.fa-long-arrow-up:before{content:"\\f176"}.fa-long-arrow-left:before{content:"\\f177"}.fa-long-arrow-right:before{content:"\\f178"}.fa-apple:before{content:"\\f179"}.fa-windows:before{content:"\\f17a"}.fa-android:before{content:"\\f17b"}.fa-linux:before{content:"\\f17c"}.fa-dribbble:before{content:"\\f17d"}.fa-skype:before{content:"\\f17e"}.fa-foursquare:before{content:"\\f180"}.fa-trello:before{content:"\\f181"}.fa-female:before{content:"\\f182"}.fa-male:before{content:"\\f183"}.fa-gittip:before,.fa-gratipay:before{content:"\\f184"}.fa-sun-o:before{content:"\\f185"}.fa-moon-o:before{content:"\\f186"}.fa-archive:before{content:"\\f187"}.fa-bug:before{content:"\\f188"}.fa-vk:before{content:"\\f189"}.fa-weibo:before{content:"\\f18a"}.fa-renren:before{content:"\\f18b"}.fa-pagelines:before{content:"\\f18c"}.fa-stack-exchange:before{content:"\\f18d"}.fa-arrow-circle-o-right:before{content:"\\f18e"}.fa-arrow-circle-o-left:before{content:"\\f190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\\f191"}.fa-dot-circle-o:before{content:"\\f192"}.fa-wheelchair:before{content:"\\f193"}.fa-vimeo-square:before{content:"\\f194"}.fa-turkish-lira:before,.fa-try:before{content:"\\f195"}.fa-plus-square-o:before{content:"\\f196"}.fa-space-shuttle:before{content:"\\f197"}.fa-slack:before{content:"\\f198"}.fa-envelope-square:before{content:"\\f199"}.fa-wordpress:before{content:"\\f19a"}.fa-openid:before{content:"\\f19b"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\\f19c"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\\f19d"}.fa-yahoo:before{content:"\\f19e"}.fa-google:before{content:"\\f1a0"}.fa-reddit:before{content:"\\f1a1"}.fa-reddit-square:before{content:"\\f1a2"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-delicious:before{content:"\\f1a5"}.fa-digg:before{content:"\\f1a6"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-drupal:before{content:"\\f1a9"}.fa-joomla:before{content:"\\f1aa"}.fa-language:before{content:"\\f1ab"}.fa-fax:before{content:"\\f1ac"}.fa-building:before{content:"\\f1ad"}.fa-child:before{content:"\\f1ae"}.fa-paw:before{content:"\\f1b0"}.fa-spoon:before{content:"\\f1b1"}.fa-cube:before{content:"\\f1b2"}.fa-cubes:before{content:"\\f1b3"}.fa-behance:before{content:"\\f1b4"}.fa-behance-square:before{content:"\\f1b5"}.fa-steam:before{content:"\\f1b6"}.fa-steam-square:before{content:"\\f1b7"}.fa-recycle:before{content:"\\f1b8"}.fa-automobile:before,.fa-car:before{content:"\\f1b9"}.fa-cab:before,.fa-taxi:before{content:"\\f1ba"}.fa-tree:before{content:"\\f1bb"}.fa-spotify:before{content:"\\f1bc"}.fa-deviantart:before{content:"\\f1bd"}.fa-soundcloud:before{content:"\\f1be"}.fa-database:before{content:"\\f1c0"}.fa-file-pdf-o:before{content:"\\f1c1"}.fa-file-word-o:before{content:"\\f1c2"}.fa-file-excel-o:before{content:"\\f1c3"}.fa-file-powerpoint-o:before{content:"\\f1c4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\\f1c5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\\f1c6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\\f1c7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\\f1c8"}.fa-file-code-o:before{content:"\\f1c9"}.fa-vine:before{content:"\\f1ca"}.fa-codepen:before{content:"\\f1cb"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\\f1cd"}.fa-circle-o-notch:before{content:"\\f1ce"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:"\\f1d0"}.fa-ge:before,.fa-empire:before{content:"\\f1d1"}.fa-git-square:before{content:"\\f1d2"}.fa-git:before{content:"\\f1d3"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:"\\f1d4"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-qq:before{content:"\\f1d6"}.fa-wechat:before,.fa-weixin:before{content:"\\f1d7"}.fa-send:before,.fa-paper-plane:before{content:"\\f1d8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\\f1d9"}.fa-history:before{content:"\\f1da"}.fa-circle-thin:before{content:"\\f1db"}.fa-header:before{content:"\\f1dc"}.fa-paragraph:before{content:"\\f1dd"}.fa-sliders:before{content:"\\f1de"}.fa-share-alt:before{content:"\\f1e0"}.fa-share-alt-square:before{content:"\\f1e1"}.fa-bomb:before{content:"\\f1e2"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:"\\f1e3"}.fa-tty:before{content:"\\f1e4"}.fa-binoculars:before{content:"\\f1e5"}.fa-plug:before{content:"\\f1e6"}.fa-slideshare:before{content:"\\f1e7"}.fa-twitch:before{content:"\\f1e8"}.fa-yelp:before{content:"\\f1e9"}.fa-newspaper-o:before{content:"\\f1ea"}.fa-wifi:before{content:"\\f1eb"}.fa-calculator:before{content:"\\f1ec"}.fa-paypal:before{content:"\\f1ed"}.fa-google-wallet:before{content:"\\f1ee"}.fa-cc-visa:before{content:"\\f1f0"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-cc-discover:before{content:"\\f1f2"}.fa-cc-amex:before{content:"\\f1f3"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-bell-slash:before{content:"\\f1f6"}.fa-bell-slash-o:before{content:"\\f1f7"}.fa-trash:before{content:"\\f1f8"}.fa-copyright:before{content:"\\f1f9"}.fa-at:before{content:"\\f1fa"}.fa-eyedropper:before{content:"\\f1fb"}.fa-paint-brush:before{content:"\\f1fc"}.fa-birthday-cake:before{content:"\\f1fd"}.fa-area-chart:before{content:"\\f1fe"}.fa-pie-chart:before{content:"\\f200"}.fa-line-chart:before{content:"\\f201"}.fa-lastfm:before{content:"\\f202"}.fa-lastfm-square:before{content:"\\f203"}.fa-toggle-off:before{content:"\\f204"}.fa-toggle-on:before{content:"\\f205"}.fa-bicycle:before{content:"\\f206"}.fa-bus:before{content:"\\f207"}.fa-ioxhost:before{content:"\\f208"}.fa-angellist:before{content:"\\f209"}.fa-cc:before{content:"\\f20a"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:"\\f20b"}.fa-meanpath:before{content:"\\f20c"}.fa-buysellads:before{content:"\\f20d"}.fa-connectdevelop:before{content:"\\f20e"}.fa-dashcube:before{content:"\\f210"}.fa-forumbee:before{content:"\\f211"}.fa-leanpub:before{content:"\\f212"}.fa-sellsy:before{content:"\\f213"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-simplybuilt:before{content:"\\f215"}.fa-skyatlas:before{content:"\\f216"}.fa-cart-plus:before{content:"\\f217"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-diamond:before{content:"\\f219"}.fa-ship:before{content:"\\f21a"}.fa-user-secret:before{content:"\\f21b"}.fa-motorcycle:before{content:"\\f21c"}.fa-street-view:before{content:"\\f21d"}.fa-heartbeat:before{content:"\\f21e"}.fa-venus:before{content:"\\f221"}.fa-mars:before{content:"\\f222"}.fa-mercury:before{content:"\\f223"}.fa-intersex:before,.fa-transgender:before{content:"\\f224"}.fa-transgender-alt:before{content:"\\f225"}.fa-venus-double:before{content:"\\f226"}.fa-mars-double:before{content:"\\f227"}.fa-venus-mars:before{content:"\\f228"}.fa-mars-stroke:before{content:"\\f229"}.fa-mars-stroke-v:before{content:"\\f22a"}.fa-mars-stroke-h:before{content:"\\f22b"}.fa-neuter:before{content:"\\f22c"}.fa-genderless:before{content:"\\f22d"}.fa-facebook-official:before{content:"\\f230"}.fa-pinterest-p:before{content:"\\f231"}.fa-whatsapp:before{content:"\\f232"}.fa-server:before{content:"\\f233"}.fa-user-plus:before{content:"\\f234"}.fa-user-times:before{content:"\\f235"}.fa-hotel:before,.fa-bed:before{content:"\\f236"}.fa-viacoin:before{content:"\\f237"}.fa-train:before{content:"\\f238"}.fa-subway:before{content:"\\f239"}.fa-medium:before{content:"\\f23a"}.fa-yc:before,.fa-y-combinator:before{content:"\\f23b"}.fa-optin-monster:before{content:"\\f23c"}.fa-opencart:before{content:"\\f23d"}.fa-expeditedssl:before{content:"\\f23e"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:"\\f240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\\f241"}.fa-battery-2:before,.fa-battery-half:before{content:"\\f242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\\f243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\f244"}.fa-mouse-pointer:before{content:"\\f245"}.fa-i-cursor:before{content:"\\f246"}.fa-object-group:before{content:"\\f247"}.fa-object-ungroup:before{content:"\\f248"}.fa-sticky-note:before{content:"\\f249"}.fa-sticky-note-o:before{content:"\\f24a"}.fa-cc-jcb:before{content:"\\f24b"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-clone:before{content:"\\f24d"}.fa-balance-scale:before{content:"\\f24e"}.fa-hourglass-o:before{content:"\\f250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\f251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\f252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\f253"}.fa-hourglass:before{content:"\\f254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\\f255"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:"\\f256"}.fa-hand-scissors-o:before{content:"\\f257"}.fa-hand-lizard-o:before{content:"\\f258"}.fa-hand-spock-o:before{content:"\\f259"}.fa-hand-pointer-o:before{content:"\\f25a"}.fa-hand-peace-o:before{content:"\\f25b"}.fa-trademark:before{content:"\\f25c"}.fa-registered:before{content:"\\f25d"}.fa-creative-commons:before{content:"\\f25e"}.fa-gg:before{content:"\\f260"}.fa-gg-circle:before{content:"\\f261"}.fa-tripadvisor:before{content:"\\f262"}.fa-odnoklassniki:before{content:"\\f263"}.fa-odnoklassniki-square:before{content:"\\f264"}.fa-get-pocket:before{content:"\\f265"}.fa-wikipedia-w:before{content:"\\f266"}.fa-safari:before{content:"\\f267"}.fa-chrome:before{content:"\\f268"}.fa-firefox:before{content:"\\f269"}.fa-opera:before{content:"\\f26a"}.fa-internet-explorer:before{content:"\\f26b"}.fa-tv:before,.fa-television:before{content:"\\f26c"}.fa-contao:before{content:"\\f26d"}.fa-500px:before{content:"\\f26e"}.fa-amazon:before{content:"\\f270"}.fa-calendar-plus-o:before{content:"\\f271"}.fa-calendar-minus-o:before{content:"\\f272"}.fa-calendar-times-o:before{content:"\\f273"}.fa-calendar-check-o:before{content:"\\f274"}.fa-industry:before{content:"\\f275"}.fa-map-pin:before{content:"\\f276"}.fa-map-signs:before{content:"\\f277"}.fa-map-o:before{content:"\\f278"}.fa-map:before{content:"\\f279"}.fa-commenting:before{content:"\\f27a"}.fa-commenting-o:before{content:"\\f27b"}.fa-houzz:before{content:"\\f27c"}.fa-vimeo:before{content:"\\f27d"}.fa-black-tie:before{content:"\\f27e"}.fa-fonticons:before{content:"\\f280"}.fa-reddit-alien:before{content:"\\f281"}.fa-edge:before{content:"\\f282"}.fa-credit-card-alt:before{content:"\\f283"}.fa-codiepie:before{content:"\\f284"}.fa-modx:before{content:"\\f285"}.fa-fort-awesome:before{content:"\\f286"}.fa-usb:before{content:"\\f287"}.fa-product-hunt:before{content:"\\f288"}.fa-mixcloud:before{content:"\\f289"}.fa-scribd:before{content:"\\f28a"}.fa-pause-circle:before{content:"\\f28b"}.fa-pause-circle-o:before{content:"\\f28c"}.fa-stop-circle:before{content:"\\f28d"}.fa-stop-circle-o:before{content:"\\f28e"}.fa-shopping-bag:before{content:"\\f290"}.fa-shopping-basket:before{content:"\\f291"}.fa-hashtag:before{content:"\\f292"}.fa-bluetooth:before{content:"\\f293"}.fa-bluetooth-b:before{content:"\\f294"}.fa-percent:before{content:"\\f295"}.fa-gitlab:before{content:"\\f296"}.fa-wpbeginner:before{content:"\\f297"}.fa-wpforms:before{content:"\\f298"}.fa-envira:before{content:"\\f299"}.fa-universal-access:before{content:"\\f29a"}.fa-wheelchair-alt:before{content:"\\f29b"}.fa-question-circle-o:before{content:"\\f29c"}.fa-blind:before{content:"\\f29d"}.fa-audio-description:before{content:"\\f29e"}.fa-volume-control-phone:before{content:"\\f2a0"}.fa-braille:before{content:"\\f2a1"}.fa-assistive-listening-systems:before{content:"\\f2a2"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:"\\f2a3"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:"\\f2a4"}.fa-glide:before{content:"\\f2a5"}.fa-glide-g:before{content:"\\f2a6"}.fa-signing:before,.fa-sign-language:before{content:"\\f2a7"}.fa-low-vision:before{content:"\\f2a8"}.fa-viadeo:before{content:"\\f2a9"}.fa-viadeo-square:before{content:"\\f2aa"}.fa-snapchat:before{content:"\\f2ab"}.fa-snapchat-ghost:before{content:"\\f2ac"}.fa-snapchat-square:before{content:"\\f2ad"}.fa-pied-piper:before{content:"\\f2ae"}.fa-first-order:before{content:"\\f2b0"}.fa-yoast:before{content:"\\f2b1"}.fa-themeisle:before{content:"\\f2b2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\\f2b3"}.fa-fa:before,.fa-font-awesome:before{content:"\\f2b4"}.fa-handshake-o:before{content:"\\f2b5"}.fa-envelope-open:before{content:"\\f2b6"}.fa-envelope-open-o:before{content:"\\f2b7"}.fa-linode:before{content:"\\f2b8"}.fa-address-book:before{content:"\\f2b9"}.fa-address-book-o:before{content:"\\f2ba"}.fa-vcard:before,.fa-address-card:before{content:"\\f2bb"}.fa-vcard-o:before,.fa-address-card-o:before{content:"\\f2bc"}.fa-user-circle:before{content:"\\f2bd"}.fa-user-circle-o:before{content:"\\f2be"}.fa-user-o:before{content:"\\f2c0"}.fa-id-badge:before{content:"\\f2c1"}.fa-drivers-license:before,.fa-id-card:before{content:"\\f2c2"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:"\\f2c3"}.fa-quora:before{content:"\\f2c4"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-telegram:before{content:"\\f2c6"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:"\\f2c7"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\f2c9"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\f2cb"}.fa-shower:before{content:"\\f2cc"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:"\\f2cd"}.fa-podcast:before{content:"\\f2ce"}.fa-window-maximize:before{content:"\\f2d0"}.fa-window-minimize:before{content:"\\f2d1"}.fa-window-restore:before{content:"\\f2d2"}.fa-times-rectangle:before,.fa-window-close:before{content:"\\f2d3"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:"\\f2d4"}.fa-bandcamp:before{content:"\\f2d5"}.fa-grav:before{content:"\\f2d6"}.fa-etsy:before{content:"\\f2d7"}.fa-imdb:before{content:"\\f2d8"}.fa-ravelry:before{content:"\\f2d9"}.fa-eercast:before{content:"\\f2da"}.fa-microchip:before{content:"\\f2db"}.fa-snowflake-o:before{content:"\\f2dc"}.fa-superpowers:before{content:"\\f2dd"}.fa-wpexplorer:before{content:"\\f2de"}.fa-meetup:before{content:"\\f2e0"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:"";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:#ffffff80}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:"";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*="display:none"]):not([style*="display: none"]){display:inline-block}\n']
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: AngularEditorService
    }, {
      type: ElementRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, {
    id: [{
      type: Input
    }],
    uploadUrl: [{
      type: Input
    }],
    upload: [{
      type: Input
    }],
    showToolbar: [{
      type: Input
    }],
    fonts: [{
      type: Input
    }],
    customClasses: [{
      type: Input
    }],
    defaultFontName: [{
      type: Input
    }],
    defaultFontSize: [{
      type: Input
    }],
    hiddenButtons: [{
      type: Input
    }],
    execute: [{
      type: Output
    }],
    myInputFile: [{
      type: ViewChild,
      args: ["fileInput", {
        static: true
      }]
    }]
  });
})();
var AngularEditorComponent = class {
  constructor(r, editorService, doc, sanitizer, cdRef, defaultTabIndex, autoFocus) {
    this.r = r;
    this.editorService = editorService;
    this.doc = doc;
    this.sanitizer = sanitizer;
    this.cdRef = cdRef;
    this.autoFocus = autoFocus;
    this.modeVisual = true;
    this.showPlaceholder = false;
    this.disabled = false;
    this.focused = false;
    this.touched = false;
    this.changed = false;
    this.id = "";
    this.config = angularEditorConfig;
    this.placeholder = "";
    this.executeCommandFn = this.executeCommand.bind(this);
    this.viewMode = new EventEmitter();
    this.blurEvent = new EventEmitter();
    this.focusEvent = new EventEmitter();
    this.tabindex = -1;
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }
  onFocus() {
    this.focus();
  }
  ngOnInit() {
    this.config.toolbarPosition = this.config.toolbarPosition ? this.config.toolbarPosition : angularEditorConfig.toolbarPosition;
  }
  ngAfterViewInit() {
    if (isDefined(this.autoFocus)) {
      this.focus();
    }
  }
  onPaste(event) {
    if (this.config.rawPaste) {
      event.preventDefault();
      const text = event.clipboardData.getData("text/plain");
      document.execCommand("insertHTML", false, text);
      return text;
    }
  }
  /**
   * Executed command from editor header buttons
   * @param command string from triggerCommand
   * @param value
   */
  executeCommand(command, value) {
    this.focus();
    if (command === "focus") {
      return;
    }
    if (command === "toggleEditorMode") {
      this.toggleEditorMode(this.modeVisual);
    } else if (command !== "") {
      if (command === "clear") {
        this.editorService.removeSelectedElements(this.getCustomTags());
        this.onContentChange(this.textArea.nativeElement);
      } else if (command === "default") {
        this.editorService.removeSelectedElements("h1,h2,h3,h4,h5,h6,p,pre");
        this.onContentChange(this.textArea.nativeElement);
      } else {
        this.editorService.executeCommand(command, value);
      }
      this.exec();
    }
  }
  /**
   * focus event
   */
  onTextAreaFocus(event) {
    if (this.focused) {
      event.stopPropagation();
      return;
    }
    this.focused = true;
    this.focusEvent.emit(event);
    if (!this.touched || !this.changed) {
      this.editorService.executeInNextQueueIteration(() => {
        this.configure();
        this.touched = true;
      });
    }
  }
  /**
   * @description fires when cursor leaves textarea
   */
  onTextAreaMouseOut(event) {
    this.editorService.saveSelection();
  }
  /**
   * blur event
   */
  onTextAreaBlur(event) {
    this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
    if (typeof this.onTouched === "function") {
      this.onTouched();
    }
    if (event.relatedTarget !== null) {
      const parent = event.relatedTarget.parentElement;
      if (!parent.classList.contains("angular-editor-toolbar-set") && !parent.classList.contains("ae-picker")) {
        this.blurEvent.emit(event);
        this.focused = false;
      }
    }
  }
  /**
   *  focus the text area when the editor is focused
   */
  focus() {
    if (this.modeVisual) {
      this.textArea.nativeElement.focus();
    } else {
      const sourceText = this.doc.getElementById("sourceText" + this.id);
      sourceText.focus();
      this.focused = true;
    }
  }
  /**
   * Executed from the contenteditable section while the input property changes
   * @param element html element from contenteditable
   */
  onContentChange(element) {
    let html = "";
    if (this.modeVisual) {
      html = element.innerHTML;
    } else {
      html = element.innerText;
    }
    if (!html || html === "<br>") {
      html = "";
    }
    if (typeof this.onChange === "function") {
      this.onChange(this.config.sanitize || this.config.sanitize === void 0 ? this.sanitizer.sanitize(SecurityContext.HTML, html) : html);
      if (!html !== this.showPlaceholder) {
        this.togglePlaceholder(this.showPlaceholder);
      }
    }
    this.changed = true;
  }
  /**
   * Set the function to be called
   * when the control receives a change event.
   *
   * @param fn a function
   */
  registerOnChange(fn) {
    this.onChange = (e) => e === "<br>" ? fn("") : fn(e);
  }
  /**
   * Set the function to be called
   * when the control receives a touch event.
   *
   * @param fn a function
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Write a new value to the element.
   *
   * @param value value to be executed when there is a change in contenteditable
   */
  writeValue(value) {
    if ((!value || value === "<br>" || value === "") !== this.showPlaceholder) {
      this.togglePlaceholder(this.showPlaceholder);
    }
    if (value === void 0 || value === "" || value === "<br>") {
      value = null;
    }
    this.refreshView(value);
  }
  /**
   * refresh view/HTML of the editor
   *
   * @param value html string from the editor
   */
  refreshView(value) {
    const normalizedValue = value === null ? "" : value;
    this.r.setProperty(this.textArea.nativeElement, "innerHTML", normalizedValue);
    return;
  }
  /**
   * toggles placeholder based on input string
   *
   * @param value A HTML string from the editor
   */
  togglePlaceholder(value) {
    if (!value) {
      this.r.addClass(this.editorWrapper.nativeElement, "show-placeholder");
      this.showPlaceholder = true;
    } else {
      this.r.removeClass(this.editorWrapper.nativeElement, "show-placeholder");
      this.showPlaceholder = false;
    }
  }
  /**
   * Implements disabled state for this element
   *
   * @param isDisabled Disabled flag
   */
  setDisabledState(isDisabled) {
    const div = this.textArea.nativeElement;
    const action = isDisabled ? "addClass" : "removeClass";
    this.r[action](div, "disabled");
    this.disabled = isDisabled;
  }
  /**
   * toggles editor mode based on bToSource bool
   *
   * @param bToSource A boolean value from the editor
   */
  toggleEditorMode(bToSource) {
    let oContent;
    const editableElement = this.textArea.nativeElement;
    if (bToSource) {
      oContent = this.r.createText(editableElement.innerHTML);
      this.r.setProperty(editableElement, "innerHTML", "");
      this.r.setProperty(editableElement, "contentEditable", false);
      const oPre = this.r.createElement("pre");
      this.r.setStyle(oPre, "margin", "0");
      this.r.setStyle(oPre, "outline", "none");
      const oCode = this.r.createElement("code");
      this.r.setProperty(oCode, "id", "sourceText" + this.id);
      this.r.setStyle(oCode, "display", "block");
      this.r.setStyle(oCode, "white-space", "pre-wrap");
      this.r.setStyle(oCode, "word-break", "keep-all");
      this.r.setStyle(oCode, "outline", "none");
      this.r.setStyle(oCode, "margin", "0");
      this.r.setStyle(oCode, "background-color", "#fff5b9");
      this.r.setProperty(oCode, "contentEditable", true);
      this.r.appendChild(oCode, oContent);
      this.focusInstance = this.r.listen(oCode, "focus", (event) => this.onTextAreaFocus(event));
      this.blurInstance = this.r.listen(oCode, "blur", (event) => this.onTextAreaBlur(event));
      this.r.appendChild(oPre, oCode);
      this.r.appendChild(editableElement, oPre);
      this.doc.execCommand("defaultParagraphSeparator", false, "div");
      this.modeVisual = false;
      this.viewMode.emit(false);
      oCode.focus();
    } else {
      if (this.doc.querySelectorAll) {
        this.r.setProperty(editableElement, "innerHTML", editableElement.innerText);
      } else {
        oContent = this.doc.createRange();
        oContent.selectNodeContents(editableElement.firstChild);
        this.r.setProperty(editableElement, "innerHTML", oContent.toString());
      }
      this.r.setProperty(editableElement, "contentEditable", true);
      this.modeVisual = true;
      this.viewMode.emit(true);
      this.onContentChange(editableElement);
      editableElement.focus();
    }
    this.editorToolbar.setEditorMode(!this.modeVisual);
  }
  /**
   * toggles editor buttons when cursor moved or positioning
   *
   * Send a node array from the contentEditable of the editor
   */
  exec() {
    this.editorToolbar.triggerButtons();
    let userSelection;
    if (this.doc.getSelection) {
      userSelection = this.doc.getSelection();
      this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
    }
    let a = userSelection.focusNode;
    const els = [];
    while (a && a.id !== "editor") {
      els.unshift(a);
      a = a.parentNode;
    }
    this.editorToolbar.triggerBlocks(els);
  }
  configure() {
    this.editorService.uploadUrl = this.config.uploadUrl;
    this.editorService.uploadWithCredentials = this.config.uploadWithCredentials;
    if (this.config.defaultParagraphSeparator) {
      this.editorService.setDefaultParagraphSeparator(this.config.defaultParagraphSeparator);
    }
    if (this.config.defaultFontName) {
      this.editorService.setFontName(this.config.defaultFontName);
    }
    if (this.config.defaultFontSize) {
      this.editorService.setFontSize(this.config.defaultFontSize);
    }
  }
  getFonts() {
    const fonts = this.config.fonts ? this.config.fonts : angularEditorConfig.fonts;
    return fonts.map((x) => {
      return {
        label: x.name,
        value: x.name
      };
    });
  }
  getCustomTags() {
    const tags = ["span"];
    this.config.customClasses.forEach((x) => {
      if (x.tag !== void 0) {
        if (!tags.includes(x.tag)) {
          tags.push(x.tag);
        }
      }
    });
    return tags.join(",");
  }
  ngOnDestroy() {
    if (this.blurInstance) {
      this.blurInstance();
    }
    if (this.focusInstance) {
      this.focusInstance();
    }
  }
  filterStyles(html) {
    html = html.replace("position: fixed;", "");
    return html;
  }
};
AngularEditorComponent.\u0275fac = function AngularEditorComponent_Factory(t) {
  return new (t || AngularEditorComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(AngularEditorService), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275injectAttribute("autofocus"));
};
AngularEditorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: AngularEditorComponent,
  selectors: [["angular-editor"]],
  contentQueries: function AngularEditorComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, _c5, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.customButtonsTemplateRef = _t.first);
    }
  },
  viewQuery: function AngularEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c6, 7);
      \u0275\u0275viewQuery(_c7, 7);
      \u0275\u0275viewQuery(_c8, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textArea = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editorWrapper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editorToolbar = _t.first);
    }
  },
  hostVars: 1,
  hostBindings: function AngularEditorComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focus", function AngularEditorComponent_focus_HostBindingHandler() {
        return ctx.onFocus();
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("tabindex", ctx.tabindex);
    }
  },
  inputs: {
    id: "id",
    config: "config",
    placeholder: "placeholder",
    tabIndex: "tabIndex"
  },
  outputs: {
    html: "html",
    viewMode: "viewMode",
    blurEvent: "blur",
    focusEvent: "focus"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AngularEditorComponent),
    multi: true
  }, AngularEditorService])],
  decls: 10,
  vars: 19,
  consts: [[1, "angular-editor"], ["angularEditor", ""], [3, "id", "uploadUrl", "upload", "showToolbar", "fonts", "customClasses", "defaultFontName", "defaultFontSize", "hiddenButtons", "execute", 4, "ngIf"], [1, "angular-editor-wrapper"], ["editorWrapper", ""], [1, "angular-editor-textarea", 3, "input", "focus", "blur", "click", "keyup", "mouseout", "paste"], ["editor", ""], [1, "angular-editor-placeholder"], [3, "id", "uploadUrl", "upload", "showToolbar", "fonts", "customClasses", "defaultFontName", "defaultFontSize", "hiddenButtons", "execute"], ["editorToolbar", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function AngularEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0, 1);
      \u0275\u0275template(2, AngularEditorComponent_angular_editor_toolbar_2_Template, 3, 13, "angular-editor-toolbar", 2);
      \u0275\u0275elementStart(3, "div", 3, 4)(5, "div", 5, 6);
      \u0275\u0275listener("input", function AngularEditorComponent_Template_div_input_5_listener($event) {
        return ctx.onContentChange($event.target);
      })("focus", function AngularEditorComponent_Template_div_focus_5_listener($event) {
        return ctx.onTextAreaFocus($event);
      })("blur", function AngularEditorComponent_Template_div_blur_5_listener($event) {
        return ctx.onTextAreaBlur($event);
      })("click", function AngularEditorComponent_Template_div_click_5_listener() {
        return ctx.exec();
      })("keyup", function AngularEditorComponent_Template_div_keyup_5_listener() {
        return ctx.exec();
      })("mouseout", function AngularEditorComponent_Template_div_mouseout_5_listener($event) {
        return ctx.onTextAreaMouseOut($event);
      })("paste", function AngularEditorComponent_Template_div_paste_5_listener($event) {
        return ctx.onPaste($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, AngularEditorComponent_angular_editor_toolbar_9_Template, 2, 9, "angular-editor-toolbar", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("width", ctx.config.width)("min-width", ctx.config.minWidth);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.config.toolbarPosition === "top");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("height", ctx.config.height)("min-height", ctx.config.minHeight)("max-height", ctx.config.maxHeight)("outline", ctx.config.outline === false ? "none" : void 0);
      \u0275\u0275attribute("contenteditable", ctx.config.editable)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("translate", ctx.config.translate)("spellcheck", ctx.config.spellcheck);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.placeholder || ctx.config["placeholder"]);
      \u0275\u0275advance(1);
      \u0275\u0275property("ngIf", ctx.config.toolbarPosition === "bottom");
    }
  },
  dependencies: [AngularEditorToolbarComponent, NgIf, NgTemplateOutlet],
  styles: ['\n\n\n\n@font-face{font-family:FontAwesome;src:url(/assets/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(/assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"),url(/assets/fonts/fontawesome-webfont.woff2?v=4.7.0) format("woff2"),url(/assets/fonts/fontawesome-webfont.woff?v=4.7.0) format("woff"),url(/assets/fonts/fontawesome-webfont.ttf?v=4.7.0) format("truetype"),url(/assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format("svg");font-weight:400;font-style:normal}.fa[_ngcontent-%COMP%]{display:inline-block;font: 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg[_ngcontent-%COMP%]{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x[_ngcontent-%COMP%]{font-size:2em}.fa-3x[_ngcontent-%COMP%]{font-size:3em}.fa-4x[_ngcontent-%COMP%]{font-size:4em}.fa-5x[_ngcontent-%COMP%]{font-size:5em}.fa-fw[_ngcontent-%COMP%]{width:1.2857142857em;text-align:center}.fa-ul[_ngcontent-%COMP%]{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative}.fa-li[_ngcontent-%COMP%]{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg[_ngcontent-%COMP%]{left:-1.8571428571em}.fa-border[_ngcontent-%COMP%]{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left[_ngcontent-%COMP%]{float:left}.fa-pull-right[_ngcontent-%COMP%]{float:right}.fa.fa-pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.fa-pull-right[_ngcontent-%COMP%]{margin-left:.3em}.pull-right[_ngcontent-%COMP%]{float:right}.pull-left[_ngcontent-%COMP%]{float:left}.fa.pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.pull-right[_ngcontent-%COMP%]{margin-left:.3em}.fa-spin[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fa-spin 2s infinite linear}.fa-pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fa-spin 1s infinite steps(8)}@keyframes _ngcontent-%COMP%_fa-spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.fa-rotate-90[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";transform:rotate(90deg)}.fa-rotate-180[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";transform:rotate(180deg)}.fa-rotate-270[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";transform:rotate(270deg)}.fa-flip-horizontal[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";transform:scaleX(-1)}.fa-flip-vertical[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";transform:scaleY(-1)}[_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%]{filter:none}.fa-stack[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x[_ngcontent-%COMP%]{line-height:inherit}.fa-stack-2x[_ngcontent-%COMP%]{font-size:2em}.fa-inverse[_ngcontent-%COMP%]{color:#fff}.fa-glass[_ngcontent-%COMP%]:before{content:"\\f000"}.fa-music[_ngcontent-%COMP%]:before{content:"\\f001"}.fa-search[_ngcontent-%COMP%]:before{content:"\\f002"}.fa-envelope-o[_ngcontent-%COMP%]:before{content:"\\f003"}.fa-heart[_ngcontent-%COMP%]:before{content:"\\f004"}.fa-star[_ngcontent-%COMP%]:before{content:"\\f005"}.fa-star-o[_ngcontent-%COMP%]:before{content:"\\f006"}.fa-user[_ngcontent-%COMP%]:before{content:"\\f007"}.fa-film[_ngcontent-%COMP%]:before{content:"\\f008"}.fa-th-large[_ngcontent-%COMP%]:before{content:"\\f009"}.fa-th[_ngcontent-%COMP%]:before{content:"\\f00a"}.fa-th-list[_ngcontent-%COMP%]:before{content:"\\f00b"}.fa-check[_ngcontent-%COMP%]:before{content:"\\f00c"}.fa-remove[_ngcontent-%COMP%]:before, .fa-close[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before{content:"\\f00d"}.fa-search-plus[_ngcontent-%COMP%]:before{content:"\\f00e"}.fa-search-minus[_ngcontent-%COMP%]:before{content:"\\f010"}.fa-power-off[_ngcontent-%COMP%]:before{content:"\\f011"}.fa-signal[_ngcontent-%COMP%]:before{content:"\\f012"}.fa-gear[_ngcontent-%COMP%]:before, .fa-cog[_ngcontent-%COMP%]:before{content:"\\f013"}.fa-trash-o[_ngcontent-%COMP%]:before{content:"\\f014"}.fa-home[_ngcontent-%COMP%]:before{content:"\\f015"}.fa-file-o[_ngcontent-%COMP%]:before{content:"\\f016"}.fa-clock-o[_ngcontent-%COMP%]:before{content:"\\f017"}.fa-road[_ngcontent-%COMP%]:before{content:"\\f018"}.fa-download[_ngcontent-%COMP%]:before{content:"\\f019"}.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before{content:"\\f01a"}.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before{content:"\\f01b"}.fa-inbox[_ngcontent-%COMP%]:before{content:"\\f01c"}.fa-play-circle-o[_ngcontent-%COMP%]:before{content:"\\f01d"}.fa-rotate-right[_ngcontent-%COMP%]:before, .fa-repeat[_ngcontent-%COMP%]:before{content:"\\f01e"}.fa-refresh[_ngcontent-%COMP%]:before{content:"\\f021"}.fa-list-alt[_ngcontent-%COMP%]:before{content:"\\f022"}.fa-lock[_ngcontent-%COMP%]:before{content:"\\f023"}.fa-flag[_ngcontent-%COMP%]:before{content:"\\f024"}.fa-headphones[_ngcontent-%COMP%]:before{content:"\\f025"}.fa-volume-off[_ngcontent-%COMP%]:before{content:"\\f026"}.fa-volume-down[_ngcontent-%COMP%]:before{content:"\\f027"}.fa-volume-up[_ngcontent-%COMP%]:before{content:"\\f028"}.fa-qrcode[_ngcontent-%COMP%]:before{content:"\\f029"}.fa-barcode[_ngcontent-%COMP%]:before{content:"\\f02a"}.fa-tag[_ngcontent-%COMP%]:before{content:"\\f02b"}.fa-tags[_ngcontent-%COMP%]:before{content:"\\f02c"}.fa-book[_ngcontent-%COMP%]:before{content:"\\f02d"}.fa-bookmark[_ngcontent-%COMP%]:before{content:"\\f02e"}.fa-print[_ngcontent-%COMP%]:before{content:"\\f02f"}.fa-camera[_ngcontent-%COMP%]:before{content:"\\f030"}.fa-font[_ngcontent-%COMP%]:before{content:"\\f031"}.fa-bold[_ngcontent-%COMP%]:before{content:"\\f032"}.fa-italic[_ngcontent-%COMP%]:before{content:"\\f033"}.fa-text-height[_ngcontent-%COMP%]:before{content:"\\f034"}.fa-text-width[_ngcontent-%COMP%]:before{content:"\\f035"}.fa-align-left[_ngcontent-%COMP%]:before{content:"\\f036"}.fa-align-center[_ngcontent-%COMP%]:before{content:"\\f037"}.fa-align-right[_ngcontent-%COMP%]:before{content:"\\f038"}.fa-align-justify[_ngcontent-%COMP%]:before{content:"\\f039"}.fa-list[_ngcontent-%COMP%]:before{content:"\\f03a"}.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before{content:"\\f03b"}.fa-indent[_ngcontent-%COMP%]:before{content:"\\f03c"}.fa-video-camera[_ngcontent-%COMP%]:before{content:"\\f03d"}.fa-photo[_ngcontent-%COMP%]:before, .fa-image[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before{content:"\\f03e"}.fa-pencil[_ngcontent-%COMP%]:before{content:"\\f040"}.fa-map-marker[_ngcontent-%COMP%]:before{content:"\\f041"}.fa-adjust[_ngcontent-%COMP%]:before{content:"\\f042"}.fa-tint[_ngcontent-%COMP%]:before{content:"\\f043"}.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before{content:"\\f044"}.fa-share-square-o[_ngcontent-%COMP%]:before{content:"\\f045"}.fa-check-square-o[_ngcontent-%COMP%]:before{content:"\\f046"}.fa-arrows[_ngcontent-%COMP%]:before{content:"\\f047"}.fa-step-backward[_ngcontent-%COMP%]:before{content:"\\f048"}.fa-fast-backward[_ngcontent-%COMP%]:before{content:"\\f049"}.fa-backward[_ngcontent-%COMP%]:before{content:"\\f04a"}.fa-play[_ngcontent-%COMP%]:before{content:"\\f04b"}.fa-pause[_ngcontent-%COMP%]:before{content:"\\f04c"}.fa-stop[_ngcontent-%COMP%]:before{content:"\\f04d"}.fa-forward[_ngcontent-%COMP%]:before{content:"\\f04e"}.fa-fast-forward[_ngcontent-%COMP%]:before{content:"\\f050"}.fa-step-forward[_ngcontent-%COMP%]:before{content:"\\f051"}.fa-eject[_ngcontent-%COMP%]:before{content:"\\f052"}.fa-chevron-left[_ngcontent-%COMP%]:before{content:"\\f053"}.fa-chevron-right[_ngcontent-%COMP%]:before{content:"\\f054"}.fa-plus-circle[_ngcontent-%COMP%]:before{content:"\\f055"}.fa-minus-circle[_ngcontent-%COMP%]:before{content:"\\f056"}.fa-times-circle[_ngcontent-%COMP%]:before{content:"\\f057"}.fa-check-circle[_ngcontent-%COMP%]:before{content:"\\f058"}.fa-question-circle[_ngcontent-%COMP%]:before{content:"\\f059"}.fa-info-circle[_ngcontent-%COMP%]:before{content:"\\f05a"}.fa-crosshairs[_ngcontent-%COMP%]:before{content:"\\f05b"}.fa-times-circle-o[_ngcontent-%COMP%]:before{content:"\\f05c"}.fa-check-circle-o[_ngcontent-%COMP%]:before{content:"\\f05d"}.fa-ban[_ngcontent-%COMP%]:before{content:"\\f05e"}.fa-arrow-left[_ngcontent-%COMP%]:before{content:"\\f060"}.fa-arrow-right[_ngcontent-%COMP%]:before{content:"\\f061"}.fa-arrow-up[_ngcontent-%COMP%]:before{content:"\\f062"}.fa-arrow-down[_ngcontent-%COMP%]:before{content:"\\f063"}.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before{content:"\\f064"}.fa-expand[_ngcontent-%COMP%]:before{content:"\\f065"}.fa-compress[_ngcontent-%COMP%]:before{content:"\\f066"}.fa-plus[_ngcontent-%COMP%]:before{content:"\\f067"}.fa-minus[_ngcontent-%COMP%]:before{content:"\\f068"}.fa-asterisk[_ngcontent-%COMP%]:before{content:"\\f069"}.fa-exclamation-circle[_ngcontent-%COMP%]:before{content:"\\f06a"}.fa-gift[_ngcontent-%COMP%]:before{content:"\\f06b"}.fa-leaf[_ngcontent-%COMP%]:before{content:"\\f06c"}.fa-fire[_ngcontent-%COMP%]:before{content:"\\f06d"}.fa-eye[_ngcontent-%COMP%]:before{content:"\\f06e"}.fa-eye-slash[_ngcontent-%COMP%]:before{content:"\\f070"}.fa-warning[_ngcontent-%COMP%]:before, .fa-exclamation-triangle[_ngcontent-%COMP%]:before{content:"\\f071"}.fa-plane[_ngcontent-%COMP%]:before{content:"\\f072"}.fa-calendar[_ngcontent-%COMP%]:before{content:"\\f073"}.fa-random[_ngcontent-%COMP%]:before{content:"\\f074"}.fa-comment[_ngcontent-%COMP%]:before{content:"\\f075"}.fa-magnet[_ngcontent-%COMP%]:before{content:"\\f076"}.fa-chevron-up[_ngcontent-%COMP%]:before{content:"\\f077"}.fa-chevron-down[_ngcontent-%COMP%]:before{content:"\\f078"}.fa-retweet[_ngcontent-%COMP%]:before{content:"\\f079"}.fa-shopping-cart[_ngcontent-%COMP%]:before{content:"\\f07a"}.fa-folder[_ngcontent-%COMP%]:before{content:"\\f07b"}.fa-folder-open[_ngcontent-%COMP%]:before{content:"\\f07c"}.fa-arrows-v[_ngcontent-%COMP%]:before{content:"\\f07d"}.fa-arrows-h[_ngcontent-%COMP%]:before{content:"\\f07e"}.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before{content:"\\f080"}.fa-twitter-square[_ngcontent-%COMP%]:before{content:"\\f081"}.fa-facebook-square[_ngcontent-%COMP%]:before{content:"\\f082"}.fa-camera-retro[_ngcontent-%COMP%]:before{content:"\\f083"}.fa-key[_ngcontent-%COMP%]:before{content:"\\f084"}.fa-gears[_ngcontent-%COMP%]:before, .fa-cogs[_ngcontent-%COMP%]:before{content:"\\f085"}.fa-comments[_ngcontent-%COMP%]:before{content:"\\f086"}.fa-thumbs-o-up[_ngcontent-%COMP%]:before{content:"\\f087"}.fa-thumbs-o-down[_ngcontent-%COMP%]:before{content:"\\f088"}.fa-star-half[_ngcontent-%COMP%]:before{content:"\\f089"}.fa-heart-o[_ngcontent-%COMP%]:before{content:"\\f08a"}.fa-sign-out[_ngcontent-%COMP%]:before{content:"\\f08b"}.fa-linkedin-square[_ngcontent-%COMP%]:before{content:"\\f08c"}.fa-thumb-tack[_ngcontent-%COMP%]:before{content:"\\f08d"}.fa-external-link[_ngcontent-%COMP%]:before{content:"\\f08e"}.fa-sign-in[_ngcontent-%COMP%]:before{content:"\\f090"}.fa-trophy[_ngcontent-%COMP%]:before{content:"\\f091"}.fa-github-square[_ngcontent-%COMP%]:before{content:"\\f092"}.fa-upload[_ngcontent-%COMP%]:before{content:"\\f093"}.fa-lemon-o[_ngcontent-%COMP%]:before{content:"\\f094"}.fa-phone[_ngcontent-%COMP%]:before{content:"\\f095"}.fa-square-o[_ngcontent-%COMP%]:before{content:"\\f096"}.fa-bookmark-o[_ngcontent-%COMP%]:before{content:"\\f097"}.fa-phone-square[_ngcontent-%COMP%]:before{content:"\\f098"}.fa-twitter[_ngcontent-%COMP%]:before{content:"\\f099"}.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before{content:"\\f09a"}.fa-github[_ngcontent-%COMP%]:before{content:"\\f09b"}.fa-unlock[_ngcontent-%COMP%]:before{content:"\\f09c"}.fa-credit-card[_ngcontent-%COMP%]:before{content:"\\f09d"}.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before{content:"\\f09e"}.fa-hdd-o[_ngcontent-%COMP%]:before{content:"\\f0a0"}.fa-bullhorn[_ngcontent-%COMP%]:before{content:"\\f0a1"}.fa-bell[_ngcontent-%COMP%]:before{content:"\\f0f3"}.fa-certificate[_ngcontent-%COMP%]:before{content:"\\f0a3"}.fa-hand-o-right[_ngcontent-%COMP%]:before{content:"\\f0a4"}.fa-hand-o-left[_ngcontent-%COMP%]:before{content:"\\f0a5"}.fa-hand-o-up[_ngcontent-%COMP%]:before{content:"\\f0a6"}.fa-hand-o-down[_ngcontent-%COMP%]:before{content:"\\f0a7"}.fa-arrow-circle-left[_ngcontent-%COMP%]:before{content:"\\f0a8"}.fa-arrow-circle-right[_ngcontent-%COMP%]:before{content:"\\f0a9"}.fa-arrow-circle-up[_ngcontent-%COMP%]:before{content:"\\f0aa"}.fa-arrow-circle-down[_ngcontent-%COMP%]:before{content:"\\f0ab"}.fa-globe[_ngcontent-%COMP%]:before{content:"\\f0ac"}.fa-wrench[_ngcontent-%COMP%]:before{content:"\\f0ad"}.fa-tasks[_ngcontent-%COMP%]:before{content:"\\f0ae"}.fa-filter[_ngcontent-%COMP%]:before{content:"\\f0b0"}.fa-briefcase[_ngcontent-%COMP%]:before{content:"\\f0b1"}.fa-arrows-alt[_ngcontent-%COMP%]:before{content:"\\f0b2"}.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before{content:"\\f0c0"}.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before{content:"\\f0c1"}.fa-cloud[_ngcontent-%COMP%]:before{content:"\\f0c2"}.fa-flask[_ngcontent-%COMP%]:before{content:"\\f0c3"}.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before{content:"\\f0c4"}.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before{content:"\\f0c5"}.fa-paperclip[_ngcontent-%COMP%]:before{content:"\\f0c6"}.fa-save[_ngcontent-%COMP%]:before, .fa-floppy-o[_ngcontent-%COMP%]:before{content:"\\f0c7"}.fa-square[_ngcontent-%COMP%]:before{content:"\\f0c8"}.fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before, .fa-bars[_ngcontent-%COMP%]:before{content:"\\f0c9"}.fa-list-ul[_ngcontent-%COMP%]:before{content:"\\f0ca"}.fa-list-ol[_ngcontent-%COMP%]:before{content:"\\f0cb"}.fa-strikethrough[_ngcontent-%COMP%]:before{content:"\\f0cc"}.fa-underline[_ngcontent-%COMP%]:before{content:"\\f0cd"}.fa-table[_ngcontent-%COMP%]:before{content:"\\f0ce"}.fa-magic[_ngcontent-%COMP%]:before{content:"\\f0d0"}.fa-truck[_ngcontent-%COMP%]:before{content:"\\f0d1"}.fa-pinterest[_ngcontent-%COMP%]:before{content:"\\f0d2"}.fa-pinterest-square[_ngcontent-%COMP%]:before{content:"\\f0d3"}.fa-google-plus-square[_ngcontent-%COMP%]:before{content:"\\f0d4"}.fa-google-plus[_ngcontent-%COMP%]:before{content:"\\f0d5"}.fa-money[_ngcontent-%COMP%]:before{content:"\\f0d6"}.fa-caret-down[_ngcontent-%COMP%]:before{content:"\\f0d7"}.fa-caret-up[_ngcontent-%COMP%]:before{content:"\\f0d8"}.fa-caret-left[_ngcontent-%COMP%]:before{content:"\\f0d9"}.fa-caret-right[_ngcontent-%COMP%]:before{content:"\\f0da"}.fa-columns[_ngcontent-%COMP%]:before{content:"\\f0db"}.fa-unsorted[_ngcontent-%COMP%]:before, .fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc"}.fa-sort-down[_ngcontent-%COMP%]:before, .fa-sort-desc[_ngcontent-%COMP%]:before{content:"\\f0dd"}.fa-sort-up[_ngcontent-%COMP%]:before, .fa-sort-asc[_ngcontent-%COMP%]:before{content:"\\f0de"}.fa-envelope[_ngcontent-%COMP%]:before{content:"\\f0e0"}.fa-linkedin[_ngcontent-%COMP%]:before{content:"\\f0e1"}.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before{content:"\\f0e2"}.fa-legal[_ngcontent-%COMP%]:before, .fa-gavel[_ngcontent-%COMP%]:before{content:"\\f0e3"}.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before{content:"\\f0e4"}.fa-comment-o[_ngcontent-%COMP%]:before{content:"\\f0e5"}.fa-comments-o[_ngcontent-%COMP%]:before{content:"\\f0e6"}.fa-flash[_ngcontent-%COMP%]:before, .fa-bolt[_ngcontent-%COMP%]:before{content:"\\f0e7"}.fa-sitemap[_ngcontent-%COMP%]:before{content:"\\f0e8"}.fa-umbrella[_ngcontent-%COMP%]:before{content:"\\f0e9"}.fa-paste[_ngcontent-%COMP%]:before, .fa-clipboard[_ngcontent-%COMP%]:before{content:"\\f0ea"}.fa-lightbulb-o[_ngcontent-%COMP%]:before{content:"\\f0eb"}.fa-exchange[_ngcontent-%COMP%]:before{content:"\\f0ec"}.fa-cloud-download[_ngcontent-%COMP%]:before{content:"\\f0ed"}.fa-cloud-upload[_ngcontent-%COMP%]:before{content:"\\f0ee"}.fa-user-md[_ngcontent-%COMP%]:before{content:"\\f0f0"}.fa-stethoscope[_ngcontent-%COMP%]:before{content:"\\f0f1"}.fa-suitcase[_ngcontent-%COMP%]:before{content:"\\f0f2"}.fa-bell-o[_ngcontent-%COMP%]:before{content:"\\f0a2"}.fa-coffee[_ngcontent-%COMP%]:before{content:"\\f0f4"}.fa-cutlery[_ngcontent-%COMP%]:before{content:"\\f0f5"}.fa-file-text-o[_ngcontent-%COMP%]:before{content:"\\f0f6"}.fa-building-o[_ngcontent-%COMP%]:before{content:"\\f0f7"}.fa-hospital-o[_ngcontent-%COMP%]:before{content:"\\f0f8"}.fa-ambulance[_ngcontent-%COMP%]:before{content:"\\f0f9"}.fa-medkit[_ngcontent-%COMP%]:before{content:"\\f0fa"}.fa-fighter-jet[_ngcontent-%COMP%]:before{content:"\\f0fb"}.fa-beer[_ngcontent-%COMP%]:before{content:"\\f0fc"}.fa-h-square[_ngcontent-%COMP%]:before{content:"\\f0fd"}.fa-plus-square[_ngcontent-%COMP%]:before{content:"\\f0fe"}.fa-angle-double-left[_ngcontent-%COMP%]:before{content:"\\f100"}.fa-angle-double-right[_ngcontent-%COMP%]:before{content:"\\f101"}.fa-angle-double-up[_ngcontent-%COMP%]:before{content:"\\f102"}.fa-angle-double-down[_ngcontent-%COMP%]:before{content:"\\f103"}.fa-angle-left[_ngcontent-%COMP%]:before{content:"\\f104"}.fa-angle-right[_ngcontent-%COMP%]:before{content:"\\f105"}.fa-angle-up[_ngcontent-%COMP%]:before{content:"\\f106"}.fa-angle-down[_ngcontent-%COMP%]:before{content:"\\f107"}.fa-desktop[_ngcontent-%COMP%]:before{content:"\\f108"}.fa-laptop[_ngcontent-%COMP%]:before{content:"\\f109"}.fa-tablet[_ngcontent-%COMP%]:before{content:"\\f10a"}.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before{content:"\\f10b"}.fa-circle-o[_ngcontent-%COMP%]:before{content:"\\f10c"}.fa-quote-left[_ngcontent-%COMP%]:before{content:"\\f10d"}.fa-quote-right[_ngcontent-%COMP%]:before{content:"\\f10e"}.fa-spinner[_ngcontent-%COMP%]:before{content:"\\f110"}.fa-circle[_ngcontent-%COMP%]:before{content:"\\f111"}.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before{content:"\\f112"}.fa-github-alt[_ngcontent-%COMP%]:before{content:"\\f113"}.fa-folder-o[_ngcontent-%COMP%]:before{content:"\\f114"}.fa-folder-open-o[_ngcontent-%COMP%]:before{content:"\\f115"}.fa-smile-o[_ngcontent-%COMP%]:before{content:"\\f118"}.fa-frown-o[_ngcontent-%COMP%]:before{content:"\\f119"}.fa-meh-o[_ngcontent-%COMP%]:before{content:"\\f11a"}.fa-gamepad[_ngcontent-%COMP%]:before{content:"\\f11b"}.fa-keyboard-o[_ngcontent-%COMP%]:before{content:"\\f11c"}.fa-flag-o[_ngcontent-%COMP%]:before{content:"\\f11d"}.fa-flag-checkered[_ngcontent-%COMP%]:before{content:"\\f11e"}.fa-terminal[_ngcontent-%COMP%]:before{content:"\\f120"}.fa-code[_ngcontent-%COMP%]:before{content:"\\f121"}.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before{content:"\\f122"}.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before{content:"\\f123"}.fa-location-arrow[_ngcontent-%COMP%]:before{content:"\\f124"}.fa-crop[_ngcontent-%COMP%]:before{content:"\\f125"}.fa-code-fork[_ngcontent-%COMP%]:before{content:"\\f126"}.fa-unlink[_ngcontent-%COMP%]:before, .fa-chain-broken[_ngcontent-%COMP%]:before{content:"\\f127"}.fa-question[_ngcontent-%COMP%]:before{content:"\\f128"}.fa-info[_ngcontent-%COMP%]:before{content:"\\f129"}.fa-exclamation[_ngcontent-%COMP%]:before{content:"\\f12a"}.fa-superscript[_ngcontent-%COMP%]:before{content:"\\f12b"}.fa-subscript[_ngcontent-%COMP%]:before{content:"\\f12c"}.fa-eraser[_ngcontent-%COMP%]:before{content:"\\f12d"}.fa-puzzle-piece[_ngcontent-%COMP%]:before{content:"\\f12e"}.fa-microphone[_ngcontent-%COMP%]:before{content:"\\f130"}.fa-microphone-slash[_ngcontent-%COMP%]:before{content:"\\f131"}.fa-shield[_ngcontent-%COMP%]:before{content:"\\f132"}.fa-calendar-o[_ngcontent-%COMP%]:before{content:"\\f133"}.fa-fire-extinguisher[_ngcontent-%COMP%]:before{content:"\\f134"}.fa-rocket[_ngcontent-%COMP%]:before{content:"\\f135"}.fa-maxcdn[_ngcontent-%COMP%]:before{content:"\\f136"}.fa-chevron-circle-left[_ngcontent-%COMP%]:before{content:"\\f137"}.fa-chevron-circle-right[_ngcontent-%COMP%]:before{content:"\\f138"}.fa-chevron-circle-up[_ngcontent-%COMP%]:before{content:"\\f139"}.fa-chevron-circle-down[_ngcontent-%COMP%]:before{content:"\\f13a"}.fa-html5[_ngcontent-%COMP%]:before{content:"\\f13b"}.fa-css3[_ngcontent-%COMP%]:before{content:"\\f13c"}.fa-anchor[_ngcontent-%COMP%]:before{content:"\\f13d"}.fa-unlock-alt[_ngcontent-%COMP%]:before{content:"\\f13e"}.fa-bullseye[_ngcontent-%COMP%]:before{content:"\\f140"}.fa-ellipsis-h[_ngcontent-%COMP%]:before{content:"\\f141"}.fa-ellipsis-v[_ngcontent-%COMP%]:before{content:"\\f142"}.fa-rss-square[_ngcontent-%COMP%]:before{content:"\\f143"}.fa-play-circle[_ngcontent-%COMP%]:before{content:"\\f144"}.fa-ticket[_ngcontent-%COMP%]:before{content:"\\f145"}.fa-minus-square[_ngcontent-%COMP%]:before{content:"\\f146"}.fa-minus-square-o[_ngcontent-%COMP%]:before{content:"\\f147"}.fa-level-up[_ngcontent-%COMP%]:before{content:"\\f148"}.fa-level-down[_ngcontent-%COMP%]:before{content:"\\f149"}.fa-check-square[_ngcontent-%COMP%]:before{content:"\\f14a"}.fa-pencil-square[_ngcontent-%COMP%]:before{content:"\\f14b"}.fa-external-link-square[_ngcontent-%COMP%]:before{content:"\\f14c"}.fa-share-square[_ngcontent-%COMP%]:before{content:"\\f14d"}.fa-compass[_ngcontent-%COMP%]:before{content:"\\f14e"}.fa-toggle-down[_ngcontent-%COMP%]:before, .fa-caret-square-o-down[_ngcontent-%COMP%]:before{content:"\\f150"}.fa-toggle-up[_ngcontent-%COMP%]:before, .fa-caret-square-o-up[_ngcontent-%COMP%]:before{content:"\\f151"}.fa-toggle-right[_ngcontent-%COMP%]:before, .fa-caret-square-o-right[_ngcontent-%COMP%]:before{content:"\\f152"}.fa-euro[_ngcontent-%COMP%]:before, .fa-eur[_ngcontent-%COMP%]:before{content:"\\f153"}.fa-gbp[_ngcontent-%COMP%]:before{content:"\\f154"}.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before{content:"\\f155"}.fa-rupee[_ngcontent-%COMP%]:before, .fa-inr[_ngcontent-%COMP%]:before{content:"\\f156"}.fa-cny[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before{content:"\\f157"}.fa-ruble[_ngcontent-%COMP%]:before, .fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before{content:"\\f158"}.fa-won[_ngcontent-%COMP%]:before, .fa-krw[_ngcontent-%COMP%]:before{content:"\\f159"}.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before{content:"\\f15a"}.fa-file[_ngcontent-%COMP%]:before{content:"\\f15b"}.fa-file-text[_ngcontent-%COMP%]:before{content:"\\f15c"}.fa-sort-alpha-asc[_ngcontent-%COMP%]:before{content:"\\f15d"}.fa-sort-alpha-desc[_ngcontent-%COMP%]:before{content:"\\f15e"}.fa-sort-amount-asc[_ngcontent-%COMP%]:before{content:"\\f160"}.fa-sort-amount-desc[_ngcontent-%COMP%]:before{content:"\\f161"}.fa-sort-numeric-asc[_ngcontent-%COMP%]:before{content:"\\f162"}.fa-sort-numeric-desc[_ngcontent-%COMP%]:before{content:"\\f163"}.fa-thumbs-up[_ngcontent-%COMP%]:before{content:"\\f164"}.fa-thumbs-down[_ngcontent-%COMP%]:before{content:"\\f165"}.fa-youtube-square[_ngcontent-%COMP%]:before{content:"\\f166"}.fa-youtube[_ngcontent-%COMP%]:before{content:"\\f167"}.fa-xing[_ngcontent-%COMP%]:before{content:"\\f168"}.fa-xing-square[_ngcontent-%COMP%]:before{content:"\\f169"}.fa-youtube-play[_ngcontent-%COMP%]:before{content:"\\f16a"}.fa-dropbox[_ngcontent-%COMP%]:before{content:"\\f16b"}.fa-stack-overflow[_ngcontent-%COMP%]:before{content:"\\f16c"}.fa-instagram[_ngcontent-%COMP%]:before{content:"\\f16d"}.fa-flickr[_ngcontent-%COMP%]:before{content:"\\f16e"}.fa-adn[_ngcontent-%COMP%]:before{content:"\\f170"}.fa-bitbucket[_ngcontent-%COMP%]:before{content:"\\f171"}.fa-bitbucket-square[_ngcontent-%COMP%]:before{content:"\\f172"}.fa-tumblr[_ngcontent-%COMP%]:before{content:"\\f173"}.fa-tumblr-square[_ngcontent-%COMP%]:before{content:"\\f174"}.fa-long-arrow-down[_ngcontent-%COMP%]:before{content:"\\f175"}.fa-long-arrow-up[_ngcontent-%COMP%]:before{content:"\\f176"}.fa-long-arrow-left[_ngcontent-%COMP%]:before{content:"\\f177"}.fa-long-arrow-right[_ngcontent-%COMP%]:before{content:"\\f178"}.fa-apple[_ngcontent-%COMP%]:before{content:"\\f179"}.fa-windows[_ngcontent-%COMP%]:before{content:"\\f17a"}.fa-android[_ngcontent-%COMP%]:before{content:"\\f17b"}.fa-linux[_ngcontent-%COMP%]:before{content:"\\f17c"}.fa-dribbble[_ngcontent-%COMP%]:before{content:"\\f17d"}.fa-skype[_ngcontent-%COMP%]:before{content:"\\f17e"}.fa-foursquare[_ngcontent-%COMP%]:before{content:"\\f180"}.fa-trello[_ngcontent-%COMP%]:before{content:"\\f181"}.fa-female[_ngcontent-%COMP%]:before{content:"\\f182"}.fa-male[_ngcontent-%COMP%]:before{content:"\\f183"}.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before{content:"\\f184"}.fa-sun-o[_ngcontent-%COMP%]:before{content:"\\f185"}.fa-moon-o[_ngcontent-%COMP%]:before{content:"\\f186"}.fa-archive[_ngcontent-%COMP%]:before{content:"\\f187"}.fa-bug[_ngcontent-%COMP%]:before{content:"\\f188"}.fa-vk[_ngcontent-%COMP%]:before{content:"\\f189"}.fa-weibo[_ngcontent-%COMP%]:before{content:"\\f18a"}.fa-renren[_ngcontent-%COMP%]:before{content:"\\f18b"}.fa-pagelines[_ngcontent-%COMP%]:before{content:"\\f18c"}.fa-stack-exchange[_ngcontent-%COMP%]:before{content:"\\f18d"}.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before{content:"\\f18e"}.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before{content:"\\f190"}.fa-toggle-left[_ngcontent-%COMP%]:before, .fa-caret-square-o-left[_ngcontent-%COMP%]:before{content:"\\f191"}.fa-dot-circle-o[_ngcontent-%COMP%]:before{content:"\\f192"}.fa-wheelchair[_ngcontent-%COMP%]:before{content:"\\f193"}.fa-vimeo-square[_ngcontent-%COMP%]:before{content:"\\f194"}.fa-turkish-lira[_ngcontent-%COMP%]:before, .fa-try[_ngcontent-%COMP%]:before{content:"\\f195"}.fa-plus-square-o[_ngcontent-%COMP%]:before{content:"\\f196"}.fa-space-shuttle[_ngcontent-%COMP%]:before{content:"\\f197"}.fa-slack[_ngcontent-%COMP%]:before{content:"\\f198"}.fa-envelope-square[_ngcontent-%COMP%]:before{content:"\\f199"}.fa-wordpress[_ngcontent-%COMP%]:before{content:"\\f19a"}.fa-openid[_ngcontent-%COMP%]:before{content:"\\f19b"}.fa-institution[_ngcontent-%COMP%]:before, .fa-bank[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before{content:"\\f19c"}.fa-mortar-board[_ngcontent-%COMP%]:before, .fa-graduation-cap[_ngcontent-%COMP%]:before{content:"\\f19d"}.fa-yahoo[_ngcontent-%COMP%]:before{content:"\\f19e"}.fa-google[_ngcontent-%COMP%]:before{content:"\\f1a0"}.fa-reddit[_ngcontent-%COMP%]:before{content:"\\f1a1"}.fa-reddit-square[_ngcontent-%COMP%]:before{content:"\\f1a2"}.fa-stumbleupon-circle[_ngcontent-%COMP%]:before{content:"\\f1a3"}.fa-stumbleupon[_ngcontent-%COMP%]:before{content:"\\f1a4"}.fa-delicious[_ngcontent-%COMP%]:before{content:"\\f1a5"}.fa-digg[_ngcontent-%COMP%]:before{content:"\\f1a6"}.fa-pied-piper-pp[_ngcontent-%COMP%]:before{content:"\\f1a7"}.fa-pied-piper-alt[_ngcontent-%COMP%]:before{content:"\\f1a8"}.fa-drupal[_ngcontent-%COMP%]:before{content:"\\f1a9"}.fa-joomla[_ngcontent-%COMP%]:before{content:"\\f1aa"}.fa-language[_ngcontent-%COMP%]:before{content:"\\f1ab"}.fa-fax[_ngcontent-%COMP%]:before{content:"\\f1ac"}.fa-building[_ngcontent-%COMP%]:before{content:"\\f1ad"}.fa-child[_ngcontent-%COMP%]:before{content:"\\f1ae"}.fa-paw[_ngcontent-%COMP%]:before{content:"\\f1b0"}.fa-spoon[_ngcontent-%COMP%]:before{content:"\\f1b1"}.fa-cube[_ngcontent-%COMP%]:before{content:"\\f1b2"}.fa-cubes[_ngcontent-%COMP%]:before{content:"\\f1b3"}.fa-behance[_ngcontent-%COMP%]:before{content:"\\f1b4"}.fa-behance-square[_ngcontent-%COMP%]:before{content:"\\f1b5"}.fa-steam[_ngcontent-%COMP%]:before{content:"\\f1b6"}.fa-steam-square[_ngcontent-%COMP%]:before{content:"\\f1b7"}.fa-recycle[_ngcontent-%COMP%]:before{content:"\\f1b8"}.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before{content:"\\f1b9"}.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before{content:"\\f1ba"}.fa-tree[_ngcontent-%COMP%]:before{content:"\\f1bb"}.fa-spotify[_ngcontent-%COMP%]:before{content:"\\f1bc"}.fa-deviantart[_ngcontent-%COMP%]:before{content:"\\f1bd"}.fa-soundcloud[_ngcontent-%COMP%]:before{content:"\\f1be"}.fa-database[_ngcontent-%COMP%]:before{content:"\\f1c0"}.fa-file-pdf-o[_ngcontent-%COMP%]:before{content:"\\f1c1"}.fa-file-word-o[_ngcontent-%COMP%]:before{content:"\\f1c2"}.fa-file-excel-o[_ngcontent-%COMP%]:before{content:"\\f1c3"}.fa-file-powerpoint-o[_ngcontent-%COMP%]:before{content:"\\f1c4"}.fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before, .fa-file-image-o[_ngcontent-%COMP%]:before{content:"\\f1c5"}.fa-file-zip-o[_ngcontent-%COMP%]:before, .fa-file-archive-o[_ngcontent-%COMP%]:before{content:"\\f1c6"}.fa-file-sound-o[_ngcontent-%COMP%]:before, .fa-file-audio-o[_ngcontent-%COMP%]:before{content:"\\f1c7"}.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before{content:"\\f1c8"}.fa-file-code-o[_ngcontent-%COMP%]:before{content:"\\f1c9"}.fa-vine[_ngcontent-%COMP%]:before{content:"\\f1ca"}.fa-codepen[_ngcontent-%COMP%]:before{content:"\\f1cb"}.fa-jsfiddle[_ngcontent-%COMP%]:before{content:"\\f1cc"}.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before{content:"\\f1cd"}.fa-circle-o-notch[_ngcontent-%COMP%]:before{content:"\\f1ce"}.fa-ra[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before{content:"\\f1d0"}.fa-ge[_ngcontent-%COMP%]:before, .fa-empire[_ngcontent-%COMP%]:before{content:"\\f1d1"}.fa-git-square[_ngcontent-%COMP%]:before{content:"\\f1d2"}.fa-git[_ngcontent-%COMP%]:before{content:"\\f1d3"}.fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before, .fa-hacker-news[_ngcontent-%COMP%]:before{content:"\\f1d4"}.fa-tencent-weibo[_ngcontent-%COMP%]:before{content:"\\f1d5"}.fa-qq[_ngcontent-%COMP%]:before{content:"\\f1d6"}.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before{content:"\\f1d7"}.fa-send[_ngcontent-%COMP%]:before, .fa-paper-plane[_ngcontent-%COMP%]:before{content:"\\f1d8"}.fa-send-o[_ngcontent-%COMP%]:before, .fa-paper-plane-o[_ngcontent-%COMP%]:before{content:"\\f1d9"}.fa-history[_ngcontent-%COMP%]:before{content:"\\f1da"}.fa-circle-thin[_ngcontent-%COMP%]:before{content:"\\f1db"}.fa-header[_ngcontent-%COMP%]:before{content:"\\f1dc"}.fa-paragraph[_ngcontent-%COMP%]:before{content:"\\f1dd"}.fa-sliders[_ngcontent-%COMP%]:before{content:"\\f1de"}.fa-share-alt[_ngcontent-%COMP%]:before{content:"\\f1e0"}.fa-share-alt-square[_ngcontent-%COMP%]:before{content:"\\f1e1"}.fa-bomb[_ngcontent-%COMP%]:before{content:"\\f1e2"}.fa-soccer-ball-o[_ngcontent-%COMP%]:before, .fa-futbol-o[_ngcontent-%COMP%]:before{content:"\\f1e3"}.fa-tty[_ngcontent-%COMP%]:before{content:"\\f1e4"}.fa-binoculars[_ngcontent-%COMP%]:before{content:"\\f1e5"}.fa-plug[_ngcontent-%COMP%]:before{content:"\\f1e6"}.fa-slideshare[_ngcontent-%COMP%]:before{content:"\\f1e7"}.fa-twitch[_ngcontent-%COMP%]:before{content:"\\f1e8"}.fa-yelp[_ngcontent-%COMP%]:before{content:"\\f1e9"}.fa-newspaper-o[_ngcontent-%COMP%]:before{content:"\\f1ea"}.fa-wifi[_ngcontent-%COMP%]:before{content:"\\f1eb"}.fa-calculator[_ngcontent-%COMP%]:before{content:"\\f1ec"}.fa-paypal[_ngcontent-%COMP%]:before{content:"\\f1ed"}.fa-google-wallet[_ngcontent-%COMP%]:before{content:"\\f1ee"}.fa-cc-visa[_ngcontent-%COMP%]:before{content:"\\f1f0"}.fa-cc-mastercard[_ngcontent-%COMP%]:before{content:"\\f1f1"}.fa-cc-discover[_ngcontent-%COMP%]:before{content:"\\f1f2"}.fa-cc-amex[_ngcontent-%COMP%]:before{content:"\\f1f3"}.fa-cc-paypal[_ngcontent-%COMP%]:before{content:"\\f1f4"}.fa-cc-stripe[_ngcontent-%COMP%]:before{content:"\\f1f5"}.fa-bell-slash[_ngcontent-%COMP%]:before{content:"\\f1f6"}.fa-bell-slash-o[_ngcontent-%COMP%]:before{content:"\\f1f7"}.fa-trash[_ngcontent-%COMP%]:before{content:"\\f1f8"}.fa-copyright[_ngcontent-%COMP%]:before{content:"\\f1f9"}.fa-at[_ngcontent-%COMP%]:before{content:"\\f1fa"}.fa-eyedropper[_ngcontent-%COMP%]:before{content:"\\f1fb"}.fa-paint-brush[_ngcontent-%COMP%]:before{content:"\\f1fc"}.fa-birthday-cake[_ngcontent-%COMP%]:before{content:"\\f1fd"}.fa-area-chart[_ngcontent-%COMP%]:before{content:"\\f1fe"}.fa-pie-chart[_ngcontent-%COMP%]:before{content:"\\f200"}.fa-line-chart[_ngcontent-%COMP%]:before{content:"\\f201"}.fa-lastfm[_ngcontent-%COMP%]:before{content:"\\f202"}.fa-lastfm-square[_ngcontent-%COMP%]:before{content:"\\f203"}.fa-toggle-off[_ngcontent-%COMP%]:before{content:"\\f204"}.fa-toggle-on[_ngcontent-%COMP%]:before{content:"\\f205"}.fa-bicycle[_ngcontent-%COMP%]:before{content:"\\f206"}.fa-bus[_ngcontent-%COMP%]:before{content:"\\f207"}.fa-ioxhost[_ngcontent-%COMP%]:before{content:"\\f208"}.fa-angellist[_ngcontent-%COMP%]:before{content:"\\f209"}.fa-cc[_ngcontent-%COMP%]:before{content:"\\f20a"}.fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before, .fa-ils[_ngcontent-%COMP%]:before{content:"\\f20b"}.fa-meanpath[_ngcontent-%COMP%]:before{content:"\\f20c"}.fa-buysellads[_ngcontent-%COMP%]:before{content:"\\f20d"}.fa-connectdevelop[_ngcontent-%COMP%]:before{content:"\\f20e"}.fa-dashcube[_ngcontent-%COMP%]:before{content:"\\f210"}.fa-forumbee[_ngcontent-%COMP%]:before{content:"\\f211"}.fa-leanpub[_ngcontent-%COMP%]:before{content:"\\f212"}.fa-sellsy[_ngcontent-%COMP%]:before{content:"\\f213"}.fa-shirtsinbulk[_ngcontent-%COMP%]:before{content:"\\f214"}.fa-simplybuilt[_ngcontent-%COMP%]:before{content:"\\f215"}.fa-skyatlas[_ngcontent-%COMP%]:before{content:"\\f216"}.fa-cart-plus[_ngcontent-%COMP%]:before{content:"\\f217"}.fa-cart-arrow-down[_ngcontent-%COMP%]:before{content:"\\f218"}.fa-diamond[_ngcontent-%COMP%]:before{content:"\\f219"}.fa-ship[_ngcontent-%COMP%]:before{content:"\\f21a"}.fa-user-secret[_ngcontent-%COMP%]:before{content:"\\f21b"}.fa-motorcycle[_ngcontent-%COMP%]:before{content:"\\f21c"}.fa-street-view[_ngcontent-%COMP%]:before{content:"\\f21d"}.fa-heartbeat[_ngcontent-%COMP%]:before{content:"\\f21e"}.fa-venus[_ngcontent-%COMP%]:before{content:"\\f221"}.fa-mars[_ngcontent-%COMP%]:before{content:"\\f222"}.fa-mercury[_ngcontent-%COMP%]:before{content:"\\f223"}.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before{content:"\\f224"}.fa-transgender-alt[_ngcontent-%COMP%]:before{content:"\\f225"}.fa-venus-double[_ngcontent-%COMP%]:before{content:"\\f226"}.fa-mars-double[_ngcontent-%COMP%]:before{content:"\\f227"}.fa-venus-mars[_ngcontent-%COMP%]:before{content:"\\f228"}.fa-mars-stroke[_ngcontent-%COMP%]:before{content:"\\f229"}.fa-mars-stroke-v[_ngcontent-%COMP%]:before{content:"\\f22a"}.fa-mars-stroke-h[_ngcontent-%COMP%]:before{content:"\\f22b"}.fa-neuter[_ngcontent-%COMP%]:before{content:"\\f22c"}.fa-genderless[_ngcontent-%COMP%]:before{content:"\\f22d"}.fa-facebook-official[_ngcontent-%COMP%]:before{content:"\\f230"}.fa-pinterest-p[_ngcontent-%COMP%]:before{content:"\\f231"}.fa-whatsapp[_ngcontent-%COMP%]:before{content:"\\f232"}.fa-server[_ngcontent-%COMP%]:before{content:"\\f233"}.fa-user-plus[_ngcontent-%COMP%]:before{content:"\\f234"}.fa-user-times[_ngcontent-%COMP%]:before{content:"\\f235"}.fa-hotel[_ngcontent-%COMP%]:before, .fa-bed[_ngcontent-%COMP%]:before{content:"\\f236"}.fa-viacoin[_ngcontent-%COMP%]:before{content:"\\f237"}.fa-train[_ngcontent-%COMP%]:before{content:"\\f238"}.fa-subway[_ngcontent-%COMP%]:before{content:"\\f239"}.fa-medium[_ngcontent-%COMP%]:before{content:"\\f23a"}.fa-yc[_ngcontent-%COMP%]:before, .fa-y-combinator[_ngcontent-%COMP%]:before{content:"\\f23b"}.fa-optin-monster[_ngcontent-%COMP%]:before{content:"\\f23c"}.fa-opencart[_ngcontent-%COMP%]:before{content:"\\f23d"}.fa-expeditedssl[_ngcontent-%COMP%]:before{content:"\\f23e"}.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before{content:"\\f240"}.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before{content:"\\f241"}.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before{content:"\\f242"}.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before{content:"\\f243"}.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before{content:"\\f244"}.fa-mouse-pointer[_ngcontent-%COMP%]:before{content:"\\f245"}.fa-i-cursor[_ngcontent-%COMP%]:before{content:"\\f246"}.fa-object-group[_ngcontent-%COMP%]:before{content:"\\f247"}.fa-object-ungroup[_ngcontent-%COMP%]:before{content:"\\f248"}.fa-sticky-note[_ngcontent-%COMP%]:before{content:"\\f249"}.fa-sticky-note-o[_ngcontent-%COMP%]:before{content:"\\f24a"}.fa-cc-jcb[_ngcontent-%COMP%]:before{content:"\\f24b"}.fa-cc-diners-club[_ngcontent-%COMP%]:before{content:"\\f24c"}.fa-clone[_ngcontent-%COMP%]:before{content:"\\f24d"}.fa-balance-scale[_ngcontent-%COMP%]:before{content:"\\f24e"}.fa-hourglass-o[_ngcontent-%COMP%]:before{content:"\\f250"}.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before{content:"\\f251"}.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before{content:"\\f252"}.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before{content:"\\f253"}.fa-hourglass[_ngcontent-%COMP%]:before{content:"\\f254"}.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before{content:"\\f255"}.fa-hand-stop-o[_ngcontent-%COMP%]:before, .fa-hand-paper-o[_ngcontent-%COMP%]:before{content:"\\f256"}.fa-hand-scissors-o[_ngcontent-%COMP%]:before{content:"\\f257"}.fa-hand-lizard-o[_ngcontent-%COMP%]:before{content:"\\f258"}.fa-hand-spock-o[_ngcontent-%COMP%]:before{content:"\\f259"}.fa-hand-pointer-o[_ngcontent-%COMP%]:before{content:"\\f25a"}.fa-hand-peace-o[_ngcontent-%COMP%]:before{content:"\\f25b"}.fa-trademark[_ngcontent-%COMP%]:before{content:"\\f25c"}.fa-registered[_ngcontent-%COMP%]:before{content:"\\f25d"}.fa-creative-commons[_ngcontent-%COMP%]:before{content:"\\f25e"}.fa-gg[_ngcontent-%COMP%]:before{content:"\\f260"}.fa-gg-circle[_ngcontent-%COMP%]:before{content:"\\f261"}.fa-tripadvisor[_ngcontent-%COMP%]:before{content:"\\f262"}.fa-odnoklassniki[_ngcontent-%COMP%]:before{content:"\\f263"}.fa-odnoklassniki-square[_ngcontent-%COMP%]:before{content:"\\f264"}.fa-get-pocket[_ngcontent-%COMP%]:before{content:"\\f265"}.fa-wikipedia-w[_ngcontent-%COMP%]:before{content:"\\f266"}.fa-safari[_ngcontent-%COMP%]:before{content:"\\f267"}.fa-chrome[_ngcontent-%COMP%]:before{content:"\\f268"}.fa-firefox[_ngcontent-%COMP%]:before{content:"\\f269"}.fa-opera[_ngcontent-%COMP%]:before{content:"\\f26a"}.fa-internet-explorer[_ngcontent-%COMP%]:before{content:"\\f26b"}.fa-tv[_ngcontent-%COMP%]:before, .fa-television[_ngcontent-%COMP%]:before{content:"\\f26c"}.fa-contao[_ngcontent-%COMP%]:before{content:"\\f26d"}.fa-500px[_ngcontent-%COMP%]:before{content:"\\f26e"}.fa-amazon[_ngcontent-%COMP%]:before{content:"\\f270"}.fa-calendar-plus-o[_ngcontent-%COMP%]:before{content:"\\f271"}.fa-calendar-minus-o[_ngcontent-%COMP%]:before{content:"\\f272"}.fa-calendar-times-o[_ngcontent-%COMP%]:before{content:"\\f273"}.fa-calendar-check-o[_ngcontent-%COMP%]:before{content:"\\f274"}.fa-industry[_ngcontent-%COMP%]:before{content:"\\f275"}.fa-map-pin[_ngcontent-%COMP%]:before{content:"\\f276"}.fa-map-signs[_ngcontent-%COMP%]:before{content:"\\f277"}.fa-map-o[_ngcontent-%COMP%]:before{content:"\\f278"}.fa-map[_ngcontent-%COMP%]:before{content:"\\f279"}.fa-commenting[_ngcontent-%COMP%]:before{content:"\\f27a"}.fa-commenting-o[_ngcontent-%COMP%]:before{content:"\\f27b"}.fa-houzz[_ngcontent-%COMP%]:before{content:"\\f27c"}.fa-vimeo[_ngcontent-%COMP%]:before{content:"\\f27d"}.fa-black-tie[_ngcontent-%COMP%]:before{content:"\\f27e"}.fa-fonticons[_ngcontent-%COMP%]:before{content:"\\f280"}.fa-reddit-alien[_ngcontent-%COMP%]:before{content:"\\f281"}.fa-edge[_ngcontent-%COMP%]:before{content:"\\f282"}.fa-credit-card-alt[_ngcontent-%COMP%]:before{content:"\\f283"}.fa-codiepie[_ngcontent-%COMP%]:before{content:"\\f284"}.fa-modx[_ngcontent-%COMP%]:before{content:"\\f285"}.fa-fort-awesome[_ngcontent-%COMP%]:before{content:"\\f286"}.fa-usb[_ngcontent-%COMP%]:before{content:"\\f287"}.fa-product-hunt[_ngcontent-%COMP%]:before{content:"\\f288"}.fa-mixcloud[_ngcontent-%COMP%]:before{content:"\\f289"}.fa-scribd[_ngcontent-%COMP%]:before{content:"\\f28a"}.fa-pause-circle[_ngcontent-%COMP%]:before{content:"\\f28b"}.fa-pause-circle-o[_ngcontent-%COMP%]:before{content:"\\f28c"}.fa-stop-circle[_ngcontent-%COMP%]:before{content:"\\f28d"}.fa-stop-circle-o[_ngcontent-%COMP%]:before{content:"\\f28e"}.fa-shopping-bag[_ngcontent-%COMP%]:before{content:"\\f290"}.fa-shopping-basket[_ngcontent-%COMP%]:before{content:"\\f291"}.fa-hashtag[_ngcontent-%COMP%]:before{content:"\\f292"}.fa-bluetooth[_ngcontent-%COMP%]:before{content:"\\f293"}.fa-bluetooth-b[_ngcontent-%COMP%]:before{content:"\\f294"}.fa-percent[_ngcontent-%COMP%]:before{content:"\\f295"}.fa-gitlab[_ngcontent-%COMP%]:before{content:"\\f296"}.fa-wpbeginner[_ngcontent-%COMP%]:before{content:"\\f297"}.fa-wpforms[_ngcontent-%COMP%]:before{content:"\\f298"}.fa-envira[_ngcontent-%COMP%]:before{content:"\\f299"}.fa-universal-access[_ngcontent-%COMP%]:before{content:"\\f29a"}.fa-wheelchair-alt[_ngcontent-%COMP%]:before{content:"\\f29b"}.fa-question-circle-o[_ngcontent-%COMP%]:before{content:"\\f29c"}.fa-blind[_ngcontent-%COMP%]:before{content:"\\f29d"}.fa-audio-description[_ngcontent-%COMP%]:before{content:"\\f29e"}.fa-volume-control-phone[_ngcontent-%COMP%]:before{content:"\\f2a0"}.fa-braille[_ngcontent-%COMP%]:before{content:"\\f2a1"}.fa-assistive-listening-systems[_ngcontent-%COMP%]:before{content:"\\f2a2"}.fa-asl-interpreting[_ngcontent-%COMP%]:before, .fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before{content:"\\f2a3"}.fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before, .fa-deaf[_ngcontent-%COMP%]:before{content:"\\f2a4"}.fa-glide[_ngcontent-%COMP%]:before{content:"\\f2a5"}.fa-glide-g[_ngcontent-%COMP%]:before{content:"\\f2a6"}.fa-signing[_ngcontent-%COMP%]:before, .fa-sign-language[_ngcontent-%COMP%]:before{content:"\\f2a7"}.fa-low-vision[_ngcontent-%COMP%]:before{content:"\\f2a8"}.fa-viadeo[_ngcontent-%COMP%]:before{content:"\\f2a9"}.fa-viadeo-square[_ngcontent-%COMP%]:before{content:"\\f2aa"}.fa-snapchat[_ngcontent-%COMP%]:before{content:"\\f2ab"}.fa-snapchat-ghost[_ngcontent-%COMP%]:before{content:"\\f2ac"}.fa-snapchat-square[_ngcontent-%COMP%]:before{content:"\\f2ad"}.fa-pied-piper[_ngcontent-%COMP%]:before{content:"\\f2ae"}.fa-first-order[_ngcontent-%COMP%]:before{content:"\\f2b0"}.fa-yoast[_ngcontent-%COMP%]:before{content:"\\f2b1"}.fa-themeisle[_ngcontent-%COMP%]:before{content:"\\f2b2"}.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before{content:"\\f2b3"}.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before{content:"\\f2b4"}.fa-handshake-o[_ngcontent-%COMP%]:before{content:"\\f2b5"}.fa-envelope-open[_ngcontent-%COMP%]:before{content:"\\f2b6"}.fa-envelope-open-o[_ngcontent-%COMP%]:before{content:"\\f2b7"}.fa-linode[_ngcontent-%COMP%]:before{content:"\\f2b8"}.fa-address-book[_ngcontent-%COMP%]:before{content:"\\f2b9"}.fa-address-book-o[_ngcontent-%COMP%]:before{content:"\\f2ba"}.fa-vcard[_ngcontent-%COMP%]:before, .fa-address-card[_ngcontent-%COMP%]:before{content:"\\f2bb"}.fa-vcard-o[_ngcontent-%COMP%]:before, .fa-address-card-o[_ngcontent-%COMP%]:before{content:"\\f2bc"}.fa-user-circle[_ngcontent-%COMP%]:before{content:"\\f2bd"}.fa-user-circle-o[_ngcontent-%COMP%]:before{content:"\\f2be"}.fa-user-o[_ngcontent-%COMP%]:before{content:"\\f2c0"}.fa-id-badge[_ngcontent-%COMP%]:before{content:"\\f2c1"}.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before{content:"\\f2c2"}.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before{content:"\\f2c3"}.fa-quora[_ngcontent-%COMP%]:before{content:"\\f2c4"}.fa-free-code-camp[_ngcontent-%COMP%]:before{content:"\\f2c5"}.fa-telegram[_ngcontent-%COMP%]:before{content:"\\f2c6"}.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before{content:"\\f2c7"}.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before{content:"\\f2c8"}.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before{content:"\\f2c9"}.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before{content:"\\f2ca"}.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before{content:"\\f2cb"}.fa-shower[_ngcontent-%COMP%]:before{content:"\\f2cc"}.fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before, .fa-bath[_ngcontent-%COMP%]:before{content:"\\f2cd"}.fa-podcast[_ngcontent-%COMP%]:before{content:"\\f2ce"}.fa-window-maximize[_ngcontent-%COMP%]:before{content:"\\f2d0"}.fa-window-minimize[_ngcontent-%COMP%]:before{content:"\\f2d1"}.fa-window-restore[_ngcontent-%COMP%]:before{content:"\\f2d2"}.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before{content:"\\f2d3"}.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before{content:"\\f2d4"}.fa-bandcamp[_ngcontent-%COMP%]:before{content:"\\f2d5"}.fa-grav[_ngcontent-%COMP%]:before{content:"\\f2d6"}.fa-etsy[_ngcontent-%COMP%]:before{content:"\\f2d7"}.fa-imdb[_ngcontent-%COMP%]:before{content:"\\f2d8"}.fa-ravelry[_ngcontent-%COMP%]:before{content:"\\f2d9"}.fa-eercast[_ngcontent-%COMP%]:before{content:"\\f2da"}.fa-microchip[_ngcontent-%COMP%]:before{content:"\\f2db"}.fa-snowflake-o[_ngcontent-%COMP%]:before{content:"\\f2dc"}.fa-superpowers[_ngcontent-%COMP%]:before{content:"\\f2dd"}.fa-wpexplorer[_ngcontent-%COMP%]:before{content:"\\f2de"}.fa-meetup[_ngcontent-%COMP%]:before{content:"\\f2e0"}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-textarea[_ngcontent-%COMP%]{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:#ffffff80}.angular-editor-toolbar[_ngcontent-%COMP%]{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:focus, .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.focus[_ngcontent-%COMP%]{outline:0}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{background:#555555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.background[_ngcontent-%COMP%]{background:#555555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]{background:#fff5b9}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]:hover{background-color:#fffa98}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:24px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{font-size:15px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%]{font-size:13px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%]{font-size:12px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]{display:inline-block;width:50px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:10px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:12px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:18px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:22px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{position:absolute;content:"";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]:not([style*="display:none"]):not([style*="display: none"]){display:inline-block}.angular-editor[_ngcontent-%COMP%]{position:relative}.angular-editor[_ngcontent-%COMP%]     [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]{position:relative}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]     blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]     p{margin-bottom:0}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%]{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.show-placeholder[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%]{display:block}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.5;pointer-events:none}']
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularEditorComponent, [{
    type: Component,
    args: [{
      selector: "angular-editor",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AngularEditorComponent),
        multi: true
      }, AngularEditorService],
      template: `<div
     class="angular-editor"
     #angularEditor
     [style.width]="config.width"
     [style.minWidth]="config.minWidth"
>
     <angular-editor-toolbar
          *ngIf="config.toolbarPosition === 'top'"
          #editorToolbar
          [id]="id"
          [uploadUrl]="config.uploadUrl"
          [upload]="config.upload"
          [showToolbar]="config.showToolbar !== undefined ? config.showToolbar : true"
          [fonts]="getFonts()"
          [customClasses]="config.customClasses"
          [defaultFontName]="config.defaultFontName"
          [defaultFontSize]="config.defaultFontSize"
          [hiddenButtons]="config.toolbarHiddenButtons"
          (execute)="executeCommand($event)"
     >
       <ng-container
         [ngTemplateOutlet]="customButtonsTemplateRef"
         [ngTemplateOutletContext]="{ executeCommandFn: this.executeCommandFn}"
       >
       </ng-container>
     </angular-editor-toolbar>

     <div
          class="angular-editor-wrapper"
          #editorWrapper
     >
          <div
               #editor
               class="angular-editor-textarea"
               [attr.contenteditable]="config.editable"
               [attr.tabindex]="disabled ? -1 : tabIndex"
               [attr.translate]="config.translate"
               [attr.spellcheck]="config.spellcheck"
               [style.height]="config.height"
               [style.minHeight]="config.minHeight"
               [style.maxHeight]="config.maxHeight"
               [style.outline]="config.outline === false ? 'none': undefined"
               (input)="onContentChange($event.target)"
               (focus)="onTextAreaFocus($event)"
               (blur)="onTextAreaBlur($event)"
               (click)="exec()"
               (keyup)="exec()"
               (mouseout)="onTextAreaMouseOut($event)"
               (paste)="onPaste($event)"
          >
          </div>
          <span class="angular-editor-placeholder">{{ placeholder || config['placeholder'] }}</span>
     </div>
     <angular-editor-toolbar
          *ngIf="config.toolbarPosition === 'bottom'"
          #editorToolbar
          [id]="id"
          [uploadUrl]="config.uploadUrl"
          [upload]="config.upload"
          [showToolbar]="config.showToolbar !== undefined ? config.showToolbar : true"
          [fonts]="getFonts()"
          [customClasses]="config.customClasses"
          [defaultFontName]="config.defaultFontName"
          [defaultFontSize]="config.defaultFontSize"
          [hiddenButtons]="config.toolbarHiddenButtons"
          (execute)="executeCommand($event)"
     ></angular-editor-toolbar>
</div>
`,
      styles: ['/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(/assets/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(/assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"),url(/assets/fonts/fontawesome-webfont.woff2?v=4.7.0) format("woff2"),url(/assets/fonts/fontawesome-webfont.woff?v=4.7.0) format("woff"),url(/assets/fonts/fontawesome-webfont.ttf?v=4.7.0) format("truetype"),url(/assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format("svg");font-weight:400;font-style:normal}.fa{display:inline-block;font: 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{animation:fa-spin 2s infinite linear}.fa-pulse{animation:fa-spin 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";transform:scaleY(-1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\\f000"}.fa-music:before{content:"\\f001"}.fa-search:before{content:"\\f002"}.fa-envelope-o:before{content:"\\f003"}.fa-heart:before{content:"\\f004"}.fa-star:before{content:"\\f005"}.fa-star-o:before{content:"\\f006"}.fa-user:before{content:"\\f007"}.fa-film:before{content:"\\f008"}.fa-th-large:before{content:"\\f009"}.fa-th:before{content:"\\f00a"}.fa-th-list:before{content:"\\f00b"}.fa-check:before{content:"\\f00c"}.fa-remove:before,.fa-close:before,.fa-times:before{content:"\\f00d"}.fa-search-plus:before{content:"\\f00e"}.fa-search-minus:before{content:"\\f010"}.fa-power-off:before{content:"\\f011"}.fa-signal:before{content:"\\f012"}.fa-gear:before,.fa-cog:before{content:"\\f013"}.fa-trash-o:before{content:"\\f014"}.fa-home:before{content:"\\f015"}.fa-file-o:before{content:"\\f016"}.fa-clock-o:before{content:"\\f017"}.fa-road:before{content:"\\f018"}.fa-download:before{content:"\\f019"}.fa-arrow-circle-o-down:before{content:"\\f01a"}.fa-arrow-circle-o-up:before{content:"\\f01b"}.fa-inbox:before{content:"\\f01c"}.fa-play-circle-o:before{content:"\\f01d"}.fa-rotate-right:before,.fa-repeat:before{content:"\\f01e"}.fa-refresh:before{content:"\\f021"}.fa-list-alt:before{content:"\\f022"}.fa-lock:before{content:"\\f023"}.fa-flag:before{content:"\\f024"}.fa-headphones:before{content:"\\f025"}.fa-volume-off:before{content:"\\f026"}.fa-volume-down:before{content:"\\f027"}.fa-volume-up:before{content:"\\f028"}.fa-qrcode:before{content:"\\f029"}.fa-barcode:before{content:"\\f02a"}.fa-tag:before{content:"\\f02b"}.fa-tags:before{content:"\\f02c"}.fa-book:before{content:"\\f02d"}.fa-bookmark:before{content:"\\f02e"}.fa-print:before{content:"\\f02f"}.fa-camera:before{content:"\\f030"}.fa-font:before{content:"\\f031"}.fa-bold:before{content:"\\f032"}.fa-italic:before{content:"\\f033"}.fa-text-height:before{content:"\\f034"}.fa-text-width:before{content:"\\f035"}.fa-align-left:before{content:"\\f036"}.fa-align-center:before{content:"\\f037"}.fa-align-right:before{content:"\\f038"}.fa-align-justify:before{content:"\\f039"}.fa-list:before{content:"\\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\\f03b"}.fa-indent:before{content:"\\f03c"}.fa-video-camera:before{content:"\\f03d"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\\f03e"}.fa-pencil:before{content:"\\f040"}.fa-map-marker:before{content:"\\f041"}.fa-adjust:before{content:"\\f042"}.fa-tint:before{content:"\\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\\f044"}.fa-share-square-o:before{content:"\\f045"}.fa-check-square-o:before{content:"\\f046"}.fa-arrows:before{content:"\\f047"}.fa-step-backward:before{content:"\\f048"}.fa-fast-backward:before{content:"\\f049"}.fa-backward:before{content:"\\f04a"}.fa-play:before{content:"\\f04b"}.fa-pause:before{content:"\\f04c"}.fa-stop:before{content:"\\f04d"}.fa-forward:before{content:"\\f04e"}.fa-fast-forward:before{content:"\\f050"}.fa-step-forward:before{content:"\\f051"}.fa-eject:before{content:"\\f052"}.fa-chevron-left:before{content:"\\f053"}.fa-chevron-right:before{content:"\\f054"}.fa-plus-circle:before{content:"\\f055"}.fa-minus-circle:before{content:"\\f056"}.fa-times-circle:before{content:"\\f057"}.fa-check-circle:before{content:"\\f058"}.fa-question-circle:before{content:"\\f059"}.fa-info-circle:before{content:"\\f05a"}.fa-crosshairs:before{content:"\\f05b"}.fa-times-circle-o:before{content:"\\f05c"}.fa-check-circle-o:before{content:"\\f05d"}.fa-ban:before{content:"\\f05e"}.fa-arrow-left:before{content:"\\f060"}.fa-arrow-right:before{content:"\\f061"}.fa-arrow-up:before{content:"\\f062"}.fa-arrow-down:before{content:"\\f063"}.fa-mail-forward:before,.fa-share:before{content:"\\f064"}.fa-expand:before{content:"\\f065"}.fa-compress:before{content:"\\f066"}.fa-plus:before{content:"\\f067"}.fa-minus:before{content:"\\f068"}.fa-asterisk:before{content:"\\f069"}.fa-exclamation-circle:before{content:"\\f06a"}.fa-gift:before{content:"\\f06b"}.fa-leaf:before{content:"\\f06c"}.fa-fire:before{content:"\\f06d"}.fa-eye:before{content:"\\f06e"}.fa-eye-slash:before{content:"\\f070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\\f071"}.fa-plane:before{content:"\\f072"}.fa-calendar:before{content:"\\f073"}.fa-random:before{content:"\\f074"}.fa-comment:before{content:"\\f075"}.fa-magnet:before{content:"\\f076"}.fa-chevron-up:before{content:"\\f077"}.fa-chevron-down:before{content:"\\f078"}.fa-retweet:before{content:"\\f079"}.fa-shopping-cart:before{content:"\\f07a"}.fa-folder:before{content:"\\f07b"}.fa-folder-open:before{content:"\\f07c"}.fa-arrows-v:before{content:"\\f07d"}.fa-arrows-h:before{content:"\\f07e"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\\f080"}.fa-twitter-square:before{content:"\\f081"}.fa-facebook-square:before{content:"\\f082"}.fa-camera-retro:before{content:"\\f083"}.fa-key:before{content:"\\f084"}.fa-gears:before,.fa-cogs:before{content:"\\f085"}.fa-comments:before{content:"\\f086"}.fa-thumbs-o-up:before{content:"\\f087"}.fa-thumbs-o-down:before{content:"\\f088"}.fa-star-half:before{content:"\\f089"}.fa-heart-o:before{content:"\\f08a"}.fa-sign-out:before{content:"\\f08b"}.fa-linkedin-square:before{content:"\\f08c"}.fa-thumb-tack:before{content:"\\f08d"}.fa-external-link:before{content:"\\f08e"}.fa-sign-in:before{content:"\\f090"}.fa-trophy:before{content:"\\f091"}.fa-github-square:before{content:"\\f092"}.fa-upload:before{content:"\\f093"}.fa-lemon-o:before{content:"\\f094"}.fa-phone:before{content:"\\f095"}.fa-square-o:before{content:"\\f096"}.fa-bookmark-o:before{content:"\\f097"}.fa-phone-square:before{content:"\\f098"}.fa-twitter:before{content:"\\f099"}.fa-facebook-f:before,.fa-facebook:before{content:"\\f09a"}.fa-github:before{content:"\\f09b"}.fa-unlock:before{content:"\\f09c"}.fa-credit-card:before{content:"\\f09d"}.fa-feed:before,.fa-rss:before{content:"\\f09e"}.fa-hdd-o:before{content:"\\f0a0"}.fa-bullhorn:before{content:"\\f0a1"}.fa-bell:before{content:"\\f0f3"}.fa-certificate:before{content:"\\f0a3"}.fa-hand-o-right:before{content:"\\f0a4"}.fa-hand-o-left:before{content:"\\f0a5"}.fa-hand-o-up:before{content:"\\f0a6"}.fa-hand-o-down:before{content:"\\f0a7"}.fa-arrow-circle-left:before{content:"\\f0a8"}.fa-arrow-circle-right:before{content:"\\f0a9"}.fa-arrow-circle-up:before{content:"\\f0aa"}.fa-arrow-circle-down:before{content:"\\f0ab"}.fa-globe:before{content:"\\f0ac"}.fa-wrench:before{content:"\\f0ad"}.fa-tasks:before{content:"\\f0ae"}.fa-filter:before{content:"\\f0b0"}.fa-briefcase:before{content:"\\f0b1"}.fa-arrows-alt:before{content:"\\f0b2"}.fa-group:before,.fa-users:before{content:"\\f0c0"}.fa-chain:before,.fa-link:before{content:"\\f0c1"}.fa-cloud:before{content:"\\f0c2"}.fa-flask:before{content:"\\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\\f0c5"}.fa-paperclip:before{content:"\\f0c6"}.fa-save:before,.fa-floppy-o:before{content:"\\f0c7"}.fa-square:before{content:"\\f0c8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\\f0c9"}.fa-list-ul:before{content:"\\f0ca"}.fa-list-ol:before{content:"\\f0cb"}.fa-strikethrough:before{content:"\\f0cc"}.fa-underline:before{content:"\\f0cd"}.fa-table:before{content:"\\f0ce"}.fa-magic:before{content:"\\f0d0"}.fa-truck:before{content:"\\f0d1"}.fa-pinterest:before{content:"\\f0d2"}.fa-pinterest-square:before{content:"\\f0d3"}.fa-google-plus-square:before{content:"\\f0d4"}.fa-google-plus:before{content:"\\f0d5"}.fa-money:before{content:"\\f0d6"}.fa-caret-down:before{content:"\\f0d7"}.fa-caret-up:before{content:"\\f0d8"}.fa-caret-left:before{content:"\\f0d9"}.fa-caret-right:before{content:"\\f0da"}.fa-columns:before{content:"\\f0db"}.fa-unsorted:before,.fa-sort:before{content:"\\f0dc"}.fa-sort-down:before,.fa-sort-desc:before{content:"\\f0dd"}.fa-sort-up:before,.fa-sort-asc:before{content:"\\f0de"}.fa-envelope:before{content:"\\f0e0"}.fa-linkedin:before{content:"\\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\\f0e2"}.fa-legal:before,.fa-gavel:before{content:"\\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\\f0e4"}.fa-comment-o:before{content:"\\f0e5"}.fa-comments-o:before{content:"\\f0e6"}.fa-flash:before,.fa-bolt:before{content:"\\f0e7"}.fa-sitemap:before{content:"\\f0e8"}.fa-umbrella:before{content:"\\f0e9"}.fa-paste:before,.fa-clipboard:before{content:"\\f0ea"}.fa-lightbulb-o:before{content:"\\f0eb"}.fa-exchange:before{content:"\\f0ec"}.fa-cloud-download:before{content:"\\f0ed"}.fa-cloud-upload:before{content:"\\f0ee"}.fa-user-md:before{content:"\\f0f0"}.fa-stethoscope:before{content:"\\f0f1"}.fa-suitcase:before{content:"\\f0f2"}.fa-bell-o:before{content:"\\f0a2"}.fa-coffee:before{content:"\\f0f4"}.fa-cutlery:before{content:"\\f0f5"}.fa-file-text-o:before{content:"\\f0f6"}.fa-building-o:before{content:"\\f0f7"}.fa-hospital-o:before{content:"\\f0f8"}.fa-ambulance:before{content:"\\f0f9"}.fa-medkit:before{content:"\\f0fa"}.fa-fighter-jet:before{content:"\\f0fb"}.fa-beer:before{content:"\\f0fc"}.fa-h-square:before{content:"\\f0fd"}.fa-plus-square:before{content:"\\f0fe"}.fa-angle-double-left:before{content:"\\f100"}.fa-angle-double-right:before{content:"\\f101"}.fa-angle-double-up:before{content:"\\f102"}.fa-angle-double-down:before{content:"\\f103"}.fa-angle-left:before{content:"\\f104"}.fa-angle-right:before{content:"\\f105"}.fa-angle-up:before{content:"\\f106"}.fa-angle-down:before{content:"\\f107"}.fa-desktop:before{content:"\\f108"}.fa-laptop:before{content:"\\f109"}.fa-tablet:before{content:"\\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\\f10b"}.fa-circle-o:before{content:"\\f10c"}.fa-quote-left:before{content:"\\f10d"}.fa-quote-right:before{content:"\\f10e"}.fa-spinner:before{content:"\\f110"}.fa-circle:before{content:"\\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\\f112"}.fa-github-alt:before{content:"\\f113"}.fa-folder-o:before{content:"\\f114"}.fa-folder-open-o:before{content:"\\f115"}.fa-smile-o:before{content:"\\f118"}.fa-frown-o:before{content:"\\f119"}.fa-meh-o:before{content:"\\f11a"}.fa-gamepad:before{content:"\\f11b"}.fa-keyboard-o:before{content:"\\f11c"}.fa-flag-o:before{content:"\\f11d"}.fa-flag-checkered:before{content:"\\f11e"}.fa-terminal:before{content:"\\f120"}.fa-code:before{content:"\\f121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\\f123"}.fa-location-arrow:before{content:"\\f124"}.fa-crop:before{content:"\\f125"}.fa-code-fork:before{content:"\\f126"}.fa-unlink:before,.fa-chain-broken:before{content:"\\f127"}.fa-question:before{content:"\\f128"}.fa-info:before{content:"\\f129"}.fa-exclamation:before{content:"\\f12a"}.fa-superscript:before{content:"\\f12b"}.fa-subscript:before{content:"\\f12c"}.fa-eraser:before{content:"\\f12d"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-microphone:before{content:"\\f130"}.fa-microphone-slash:before{content:"\\f131"}.fa-shield:before{content:"\\f132"}.fa-calendar-o:before{content:"\\f133"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-rocket:before{content:"\\f135"}.fa-maxcdn:before{content:"\\f136"}.fa-chevron-circle-left:before{content:"\\f137"}.fa-chevron-circle-right:before{content:"\\f138"}.fa-chevron-circle-up:before{content:"\\f139"}.fa-chevron-circle-down:before{content:"\\f13a"}.fa-html5:before{content:"\\f13b"}.fa-css3:before{content:"\\f13c"}.fa-anchor:before{content:"\\f13d"}.fa-unlock-alt:before{content:"\\f13e"}.fa-bullseye:before{content:"\\f140"}.fa-ellipsis-h:before{content:"\\f141"}.fa-ellipsis-v:before{content:"\\f142"}.fa-rss-square:before{content:"\\f143"}.fa-play-circle:before{content:"\\f144"}.fa-ticket:before{content:"\\f145"}.fa-minus-square:before{content:"\\f146"}.fa-minus-square-o:before{content:"\\f147"}.fa-level-up:before{content:"\\f148"}.fa-level-down:before{content:"\\f149"}.fa-check-square:before{content:"\\f14a"}.fa-pencil-square:before{content:"\\f14b"}.fa-external-link-square:before{content:"\\f14c"}.fa-share-square:before{content:"\\f14d"}.fa-compass:before{content:"\\f14e"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\\f150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\\f151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\\f152"}.fa-euro:before,.fa-eur:before{content:"\\f153"}.fa-gbp:before{content:"\\f154"}.fa-dollar:before,.fa-usd:before{content:"\\f155"}.fa-rupee:before,.fa-inr:before{content:"\\f156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\\f157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\\f158"}.fa-won:before,.fa-krw:before{content:"\\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\\f15a"}.fa-file:before{content:"\\f15b"}.fa-file-text:before{content:"\\f15c"}.fa-sort-alpha-asc:before{content:"\\f15d"}.fa-sort-alpha-desc:before{content:"\\f15e"}.fa-sort-amount-asc:before{content:"\\f160"}.fa-sort-amount-desc:before{content:"\\f161"}.fa-sort-numeric-asc:before{content:"\\f162"}.fa-sort-numeric-desc:before{content:"\\f163"}.fa-thumbs-up:before{content:"\\f164"}.fa-thumbs-down:before{content:"\\f165"}.fa-youtube-square:before{content:"\\f166"}.fa-youtube:before{content:"\\f167"}.fa-xing:before{content:"\\f168"}.fa-xing-square:before{content:"\\f169"}.fa-youtube-play:before{content:"\\f16a"}.fa-dropbox:before{content:"\\f16b"}.fa-stack-overflow:before{content:"\\f16c"}.fa-instagram:before{content:"\\f16d"}.fa-flickr:before{content:"\\f16e"}.fa-adn:before{content:"\\f170"}.fa-bitbucket:before{content:"\\f171"}.fa-bitbucket-square:before{content:"\\f172"}.fa-tumblr:before{content:"\\f173"}.fa-tumblr-square:before{content:"\\f174"}.fa-long-arrow-down:before{content:"\\f175"}.fa-long-arrow-up:before{content:"\\f176"}.fa-long-arrow-left:before{content:"\\f177"}.fa-long-arrow-right:before{content:"\\f178"}.fa-apple:before{content:"\\f179"}.fa-windows:before{content:"\\f17a"}.fa-android:before{content:"\\f17b"}.fa-linux:before{content:"\\f17c"}.fa-dribbble:before{content:"\\f17d"}.fa-skype:before{content:"\\f17e"}.fa-foursquare:before{content:"\\f180"}.fa-trello:before{content:"\\f181"}.fa-female:before{content:"\\f182"}.fa-male:before{content:"\\f183"}.fa-gittip:before,.fa-gratipay:before{content:"\\f184"}.fa-sun-o:before{content:"\\f185"}.fa-moon-o:before{content:"\\f186"}.fa-archive:before{content:"\\f187"}.fa-bug:before{content:"\\f188"}.fa-vk:before{content:"\\f189"}.fa-weibo:before{content:"\\f18a"}.fa-renren:before{content:"\\f18b"}.fa-pagelines:before{content:"\\f18c"}.fa-stack-exchange:before{content:"\\f18d"}.fa-arrow-circle-o-right:before{content:"\\f18e"}.fa-arrow-circle-o-left:before{content:"\\f190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\\f191"}.fa-dot-circle-o:before{content:"\\f192"}.fa-wheelchair:before{content:"\\f193"}.fa-vimeo-square:before{content:"\\f194"}.fa-turkish-lira:before,.fa-try:before{content:"\\f195"}.fa-plus-square-o:before{content:"\\f196"}.fa-space-shuttle:before{content:"\\f197"}.fa-slack:before{content:"\\f198"}.fa-envelope-square:before{content:"\\f199"}.fa-wordpress:before{content:"\\f19a"}.fa-openid:before{content:"\\f19b"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\\f19c"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\\f19d"}.fa-yahoo:before{content:"\\f19e"}.fa-google:before{content:"\\f1a0"}.fa-reddit:before{content:"\\f1a1"}.fa-reddit-square:before{content:"\\f1a2"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-delicious:before{content:"\\f1a5"}.fa-digg:before{content:"\\f1a6"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-drupal:before{content:"\\f1a9"}.fa-joomla:before{content:"\\f1aa"}.fa-language:before{content:"\\f1ab"}.fa-fax:before{content:"\\f1ac"}.fa-building:before{content:"\\f1ad"}.fa-child:before{content:"\\f1ae"}.fa-paw:before{content:"\\f1b0"}.fa-spoon:before{content:"\\f1b1"}.fa-cube:before{content:"\\f1b2"}.fa-cubes:before{content:"\\f1b3"}.fa-behance:before{content:"\\f1b4"}.fa-behance-square:before{content:"\\f1b5"}.fa-steam:before{content:"\\f1b6"}.fa-steam-square:before{content:"\\f1b7"}.fa-recycle:before{content:"\\f1b8"}.fa-automobile:before,.fa-car:before{content:"\\f1b9"}.fa-cab:before,.fa-taxi:before{content:"\\f1ba"}.fa-tree:before{content:"\\f1bb"}.fa-spotify:before{content:"\\f1bc"}.fa-deviantart:before{content:"\\f1bd"}.fa-soundcloud:before{content:"\\f1be"}.fa-database:before{content:"\\f1c0"}.fa-file-pdf-o:before{content:"\\f1c1"}.fa-file-word-o:before{content:"\\f1c2"}.fa-file-excel-o:before{content:"\\f1c3"}.fa-file-powerpoint-o:before{content:"\\f1c4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\\f1c5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\\f1c6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\\f1c7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\\f1c8"}.fa-file-code-o:before{content:"\\f1c9"}.fa-vine:before{content:"\\f1ca"}.fa-codepen:before{content:"\\f1cb"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\\f1cd"}.fa-circle-o-notch:before{content:"\\f1ce"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:"\\f1d0"}.fa-ge:before,.fa-empire:before{content:"\\f1d1"}.fa-git-square:before{content:"\\f1d2"}.fa-git:before{content:"\\f1d3"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:"\\f1d4"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-qq:before{content:"\\f1d6"}.fa-wechat:before,.fa-weixin:before{content:"\\f1d7"}.fa-send:before,.fa-paper-plane:before{content:"\\f1d8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\\f1d9"}.fa-history:before{content:"\\f1da"}.fa-circle-thin:before{content:"\\f1db"}.fa-header:before{content:"\\f1dc"}.fa-paragraph:before{content:"\\f1dd"}.fa-sliders:before{content:"\\f1de"}.fa-share-alt:before{content:"\\f1e0"}.fa-share-alt-square:before{content:"\\f1e1"}.fa-bomb:before{content:"\\f1e2"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:"\\f1e3"}.fa-tty:before{content:"\\f1e4"}.fa-binoculars:before{content:"\\f1e5"}.fa-plug:before{content:"\\f1e6"}.fa-slideshare:before{content:"\\f1e7"}.fa-twitch:before{content:"\\f1e8"}.fa-yelp:before{content:"\\f1e9"}.fa-newspaper-o:before{content:"\\f1ea"}.fa-wifi:before{content:"\\f1eb"}.fa-calculator:before{content:"\\f1ec"}.fa-paypal:before{content:"\\f1ed"}.fa-google-wallet:before{content:"\\f1ee"}.fa-cc-visa:before{content:"\\f1f0"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-cc-discover:before{content:"\\f1f2"}.fa-cc-amex:before{content:"\\f1f3"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-bell-slash:before{content:"\\f1f6"}.fa-bell-slash-o:before{content:"\\f1f7"}.fa-trash:before{content:"\\f1f8"}.fa-copyright:before{content:"\\f1f9"}.fa-at:before{content:"\\f1fa"}.fa-eyedropper:before{content:"\\f1fb"}.fa-paint-brush:before{content:"\\f1fc"}.fa-birthday-cake:before{content:"\\f1fd"}.fa-area-chart:before{content:"\\f1fe"}.fa-pie-chart:before{content:"\\f200"}.fa-line-chart:before{content:"\\f201"}.fa-lastfm:before{content:"\\f202"}.fa-lastfm-square:before{content:"\\f203"}.fa-toggle-off:before{content:"\\f204"}.fa-toggle-on:before{content:"\\f205"}.fa-bicycle:before{content:"\\f206"}.fa-bus:before{content:"\\f207"}.fa-ioxhost:before{content:"\\f208"}.fa-angellist:before{content:"\\f209"}.fa-cc:before{content:"\\f20a"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:"\\f20b"}.fa-meanpath:before{content:"\\f20c"}.fa-buysellads:before{content:"\\f20d"}.fa-connectdevelop:before{content:"\\f20e"}.fa-dashcube:before{content:"\\f210"}.fa-forumbee:before{content:"\\f211"}.fa-leanpub:before{content:"\\f212"}.fa-sellsy:before{content:"\\f213"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-simplybuilt:before{content:"\\f215"}.fa-skyatlas:before{content:"\\f216"}.fa-cart-plus:before{content:"\\f217"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-diamond:before{content:"\\f219"}.fa-ship:before{content:"\\f21a"}.fa-user-secret:before{content:"\\f21b"}.fa-motorcycle:before{content:"\\f21c"}.fa-street-view:before{content:"\\f21d"}.fa-heartbeat:before{content:"\\f21e"}.fa-venus:before{content:"\\f221"}.fa-mars:before{content:"\\f222"}.fa-mercury:before{content:"\\f223"}.fa-intersex:before,.fa-transgender:before{content:"\\f224"}.fa-transgender-alt:before{content:"\\f225"}.fa-venus-double:before{content:"\\f226"}.fa-mars-double:before{content:"\\f227"}.fa-venus-mars:before{content:"\\f228"}.fa-mars-stroke:before{content:"\\f229"}.fa-mars-stroke-v:before{content:"\\f22a"}.fa-mars-stroke-h:before{content:"\\f22b"}.fa-neuter:before{content:"\\f22c"}.fa-genderless:before{content:"\\f22d"}.fa-facebook-official:before{content:"\\f230"}.fa-pinterest-p:before{content:"\\f231"}.fa-whatsapp:before{content:"\\f232"}.fa-server:before{content:"\\f233"}.fa-user-plus:before{content:"\\f234"}.fa-user-times:before{content:"\\f235"}.fa-hotel:before,.fa-bed:before{content:"\\f236"}.fa-viacoin:before{content:"\\f237"}.fa-train:before{content:"\\f238"}.fa-subway:before{content:"\\f239"}.fa-medium:before{content:"\\f23a"}.fa-yc:before,.fa-y-combinator:before{content:"\\f23b"}.fa-optin-monster:before{content:"\\f23c"}.fa-opencart:before{content:"\\f23d"}.fa-expeditedssl:before{content:"\\f23e"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:"\\f240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\\f241"}.fa-battery-2:before,.fa-battery-half:before{content:"\\f242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\\f243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\f244"}.fa-mouse-pointer:before{content:"\\f245"}.fa-i-cursor:before{content:"\\f246"}.fa-object-group:before{content:"\\f247"}.fa-object-ungroup:before{content:"\\f248"}.fa-sticky-note:before{content:"\\f249"}.fa-sticky-note-o:before{content:"\\f24a"}.fa-cc-jcb:before{content:"\\f24b"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-clone:before{content:"\\f24d"}.fa-balance-scale:before{content:"\\f24e"}.fa-hourglass-o:before{content:"\\f250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\f251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\f252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\f253"}.fa-hourglass:before{content:"\\f254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\\f255"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:"\\f256"}.fa-hand-scissors-o:before{content:"\\f257"}.fa-hand-lizard-o:before{content:"\\f258"}.fa-hand-spock-o:before{content:"\\f259"}.fa-hand-pointer-o:before{content:"\\f25a"}.fa-hand-peace-o:before{content:"\\f25b"}.fa-trademark:before{content:"\\f25c"}.fa-registered:before{content:"\\f25d"}.fa-creative-commons:before{content:"\\f25e"}.fa-gg:before{content:"\\f260"}.fa-gg-circle:before{content:"\\f261"}.fa-tripadvisor:before{content:"\\f262"}.fa-odnoklassniki:before{content:"\\f263"}.fa-odnoklassniki-square:before{content:"\\f264"}.fa-get-pocket:before{content:"\\f265"}.fa-wikipedia-w:before{content:"\\f266"}.fa-safari:before{content:"\\f267"}.fa-chrome:before{content:"\\f268"}.fa-firefox:before{content:"\\f269"}.fa-opera:before{content:"\\f26a"}.fa-internet-explorer:before{content:"\\f26b"}.fa-tv:before,.fa-television:before{content:"\\f26c"}.fa-contao:before{content:"\\f26d"}.fa-500px:before{content:"\\f26e"}.fa-amazon:before{content:"\\f270"}.fa-calendar-plus-o:before{content:"\\f271"}.fa-calendar-minus-o:before{content:"\\f272"}.fa-calendar-times-o:before{content:"\\f273"}.fa-calendar-check-o:before{content:"\\f274"}.fa-industry:before{content:"\\f275"}.fa-map-pin:before{content:"\\f276"}.fa-map-signs:before{content:"\\f277"}.fa-map-o:before{content:"\\f278"}.fa-map:before{content:"\\f279"}.fa-commenting:before{content:"\\f27a"}.fa-commenting-o:before{content:"\\f27b"}.fa-houzz:before{content:"\\f27c"}.fa-vimeo:before{content:"\\f27d"}.fa-black-tie:before{content:"\\f27e"}.fa-fonticons:before{content:"\\f280"}.fa-reddit-alien:before{content:"\\f281"}.fa-edge:before{content:"\\f282"}.fa-credit-card-alt:before{content:"\\f283"}.fa-codiepie:before{content:"\\f284"}.fa-modx:before{content:"\\f285"}.fa-fort-awesome:before{content:"\\f286"}.fa-usb:before{content:"\\f287"}.fa-product-hunt:before{content:"\\f288"}.fa-mixcloud:before{content:"\\f289"}.fa-scribd:before{content:"\\f28a"}.fa-pause-circle:before{content:"\\f28b"}.fa-pause-circle-o:before{content:"\\f28c"}.fa-stop-circle:before{content:"\\f28d"}.fa-stop-circle-o:before{content:"\\f28e"}.fa-shopping-bag:before{content:"\\f290"}.fa-shopping-basket:before{content:"\\f291"}.fa-hashtag:before{content:"\\f292"}.fa-bluetooth:before{content:"\\f293"}.fa-bluetooth-b:before{content:"\\f294"}.fa-percent:before{content:"\\f295"}.fa-gitlab:before{content:"\\f296"}.fa-wpbeginner:before{content:"\\f297"}.fa-wpforms:before{content:"\\f298"}.fa-envira:before{content:"\\f299"}.fa-universal-access:before{content:"\\f29a"}.fa-wheelchair-alt:before{content:"\\f29b"}.fa-question-circle-o:before{content:"\\f29c"}.fa-blind:before{content:"\\f29d"}.fa-audio-description:before{content:"\\f29e"}.fa-volume-control-phone:before{content:"\\f2a0"}.fa-braille:before{content:"\\f2a1"}.fa-assistive-listening-systems:before{content:"\\f2a2"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:"\\f2a3"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:"\\f2a4"}.fa-glide:before{content:"\\f2a5"}.fa-glide-g:before{content:"\\f2a6"}.fa-signing:before,.fa-sign-language:before{content:"\\f2a7"}.fa-low-vision:before{content:"\\f2a8"}.fa-viadeo:before{content:"\\f2a9"}.fa-viadeo-square:before{content:"\\f2aa"}.fa-snapchat:before{content:"\\f2ab"}.fa-snapchat-ghost:before{content:"\\f2ac"}.fa-snapchat-square:before{content:"\\f2ad"}.fa-pied-piper:before{content:"\\f2ae"}.fa-first-order:before{content:"\\f2b0"}.fa-yoast:before{content:"\\f2b1"}.fa-themeisle:before{content:"\\f2b2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\\f2b3"}.fa-fa:before,.fa-font-awesome:before{content:"\\f2b4"}.fa-handshake-o:before{content:"\\f2b5"}.fa-envelope-open:before{content:"\\f2b6"}.fa-envelope-open-o:before{content:"\\f2b7"}.fa-linode:before{content:"\\f2b8"}.fa-address-book:before{content:"\\f2b9"}.fa-address-book-o:before{content:"\\f2ba"}.fa-vcard:before,.fa-address-card:before{content:"\\f2bb"}.fa-vcard-o:before,.fa-address-card-o:before{content:"\\f2bc"}.fa-user-circle:before{content:"\\f2bd"}.fa-user-circle-o:before{content:"\\f2be"}.fa-user-o:before{content:"\\f2c0"}.fa-id-badge:before{content:"\\f2c1"}.fa-drivers-license:before,.fa-id-card:before{content:"\\f2c2"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:"\\f2c3"}.fa-quora:before{content:"\\f2c4"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-telegram:before{content:"\\f2c6"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:"\\f2c7"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\f2c9"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\f2cb"}.fa-shower:before{content:"\\f2cc"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:"\\f2cd"}.fa-podcast:before{content:"\\f2ce"}.fa-window-maximize:before{content:"\\f2d0"}.fa-window-minimize:before{content:"\\f2d1"}.fa-window-restore:before{content:"\\f2d2"}.fa-times-rectangle:before,.fa-window-close:before{content:"\\f2d3"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:"\\f2d4"}.fa-bandcamp:before{content:"\\f2d5"}.fa-grav:before{content:"\\f2d6"}.fa-etsy:before{content:"\\f2d7"}.fa-imdb:before{content:"\\f2d8"}.fa-ravelry:before{content:"\\f2d9"}.fa-eercast:before{content:"\\f2da"}.fa-microchip:before{content:"\\f2db"}.fa-snowflake-o:before{content:"\\f2dc"}.fa-superpowers:before{content:"\\f2dd"}.fa-wpexplorer:before{content:"\\f2de"}.fa-meetup:before{content:"\\f2e0"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:"";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:#ffffff80}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:"";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*="display:none"]):not([style*="display: none"]){display:inline-block}.angular-editor{position:relative}.angular-editor ::ng-deep [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor .angular-editor-wrapper{position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea ::ng-deep blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor .angular-editor-wrapper ::ng-deep p{margin-bottom:0}.angular-editor .angular-editor-wrapper .angular-editor-placeholder{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor .angular-editor-wrapper.show-placeholder .angular-editor-placeholder{display:block}.angular-editor .angular-editor-wrapper.disabled{cursor:not-allowed;opacity:.5;pointer-events:none}\n']
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: AngularEditorService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: DomSanitizer
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["tabindex"]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["autofocus"]
      }]
    }];
  }, {
    id: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    html: [{
      type: Output
    }],
    textArea: [{
      type: ViewChild,
      args: ["editor", {
        static: true
      }]
    }],
    editorWrapper: [{
      type: ViewChild,
      args: ["editorWrapper", {
        static: true
      }]
    }],
    editorToolbar: [{
      type: ViewChild,
      args: ["editorToolbar"]
    }],
    customButtonsTemplateRef: [{
      type: ContentChild,
      args: ["customButtons"]
    }],
    viewMode: [{
      type: Output
    }],
    blurEvent: [{
      type: Output,
      args: ["blur"]
    }],
    focusEvent: [{
      type: Output,
      args: ["focus"]
    }],
    tabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }]
  });
})();
var AeButtonComponent = class {
  constructor() {
    this.iconClass = "";
    this.title = "";
    this.buttonClick = new EventEmitter();
  }
};
AeButtonComponent.\u0275fac = function AeButtonComponent_Factory(t) {
  return new (t || AeButtonComponent)();
};
AeButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: AeButtonComponent,
  selectors: [["ae-button"]],
  inputs: {
    iconClass: "iconClass",
    title: "title"
  },
  outputs: {
    buttonClick: "buttonClick"
  },
  decls: 2,
  vars: 3,
  consts: [["type", "button", "tabindex", "-1", 1, "angular-editor-button", 3, "title", "click"]],
  template: function AeButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function AeButtonComponent_Template_button_click_0_listener() {
        return ctx.buttonClick.emit();
      });
      \u0275\u0275element(1, "i");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("title", ctx.title);
      \u0275\u0275advance(1);
      \u0275\u0275classMap(ctx.iconClass);
    }
  },
  styles: ['/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(/assets/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(/assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"),url(/assets/fonts/fontawesome-webfont.woff2?v=4.7.0) format("woff2"),url(/assets/fonts/fontawesome-webfont.woff?v=4.7.0) format("woff"),url(/assets/fonts/fontawesome-webfont.ttf?v=4.7.0) format("truetype"),url(/assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format("svg");font-weight:400;font-style:normal}.fa{display:inline-block;font: 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{animation:fa-spin 2s infinite linear}.fa-pulse{animation:fa-spin 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";transform:scaleY(-1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\\f000"}.fa-music:before{content:"\\f001"}.fa-search:before{content:"\\f002"}.fa-envelope-o:before{content:"\\f003"}.fa-heart:before{content:"\\f004"}.fa-star:before{content:"\\f005"}.fa-star-o:before{content:"\\f006"}.fa-user:before{content:"\\f007"}.fa-film:before{content:"\\f008"}.fa-th-large:before{content:"\\f009"}.fa-th:before{content:"\\f00a"}.fa-th-list:before{content:"\\f00b"}.fa-check:before{content:"\\f00c"}.fa-remove:before,.fa-close:before,.fa-times:before{content:"\\f00d"}.fa-search-plus:before{content:"\\f00e"}.fa-search-minus:before{content:"\\f010"}.fa-power-off:before{content:"\\f011"}.fa-signal:before{content:"\\f012"}.fa-gear:before,.fa-cog:before{content:"\\f013"}.fa-trash-o:before{content:"\\f014"}.fa-home:before{content:"\\f015"}.fa-file-o:before{content:"\\f016"}.fa-clock-o:before{content:"\\f017"}.fa-road:before{content:"\\f018"}.fa-download:before{content:"\\f019"}.fa-arrow-circle-o-down:before{content:"\\f01a"}.fa-arrow-circle-o-up:before{content:"\\f01b"}.fa-inbox:before{content:"\\f01c"}.fa-play-circle-o:before{content:"\\f01d"}.fa-rotate-right:before,.fa-repeat:before{content:"\\f01e"}.fa-refresh:before{content:"\\f021"}.fa-list-alt:before{content:"\\f022"}.fa-lock:before{content:"\\f023"}.fa-flag:before{content:"\\f024"}.fa-headphones:before{content:"\\f025"}.fa-volume-off:before{content:"\\f026"}.fa-volume-down:before{content:"\\f027"}.fa-volume-up:before{content:"\\f028"}.fa-qrcode:before{content:"\\f029"}.fa-barcode:before{content:"\\f02a"}.fa-tag:before{content:"\\f02b"}.fa-tags:before{content:"\\f02c"}.fa-book:before{content:"\\f02d"}.fa-bookmark:before{content:"\\f02e"}.fa-print:before{content:"\\f02f"}.fa-camera:before{content:"\\f030"}.fa-font:before{content:"\\f031"}.fa-bold:before{content:"\\f032"}.fa-italic:before{content:"\\f033"}.fa-text-height:before{content:"\\f034"}.fa-text-width:before{content:"\\f035"}.fa-align-left:before{content:"\\f036"}.fa-align-center:before{content:"\\f037"}.fa-align-right:before{content:"\\f038"}.fa-align-justify:before{content:"\\f039"}.fa-list:before{content:"\\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\\f03b"}.fa-indent:before{content:"\\f03c"}.fa-video-camera:before{content:"\\f03d"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\\f03e"}.fa-pencil:before{content:"\\f040"}.fa-map-marker:before{content:"\\f041"}.fa-adjust:before{content:"\\f042"}.fa-tint:before{content:"\\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\\f044"}.fa-share-square-o:before{content:"\\f045"}.fa-check-square-o:before{content:"\\f046"}.fa-arrows:before{content:"\\f047"}.fa-step-backward:before{content:"\\f048"}.fa-fast-backward:before{content:"\\f049"}.fa-backward:before{content:"\\f04a"}.fa-play:before{content:"\\f04b"}.fa-pause:before{content:"\\f04c"}.fa-stop:before{content:"\\f04d"}.fa-forward:before{content:"\\f04e"}.fa-fast-forward:before{content:"\\f050"}.fa-step-forward:before{content:"\\f051"}.fa-eject:before{content:"\\f052"}.fa-chevron-left:before{content:"\\f053"}.fa-chevron-right:before{content:"\\f054"}.fa-plus-circle:before{content:"\\f055"}.fa-minus-circle:before{content:"\\f056"}.fa-times-circle:before{content:"\\f057"}.fa-check-circle:before{content:"\\f058"}.fa-question-circle:before{content:"\\f059"}.fa-info-circle:before{content:"\\f05a"}.fa-crosshairs:before{content:"\\f05b"}.fa-times-circle-o:before{content:"\\f05c"}.fa-check-circle-o:before{content:"\\f05d"}.fa-ban:before{content:"\\f05e"}.fa-arrow-left:before{content:"\\f060"}.fa-arrow-right:before{content:"\\f061"}.fa-arrow-up:before{content:"\\f062"}.fa-arrow-down:before{content:"\\f063"}.fa-mail-forward:before,.fa-share:before{content:"\\f064"}.fa-expand:before{content:"\\f065"}.fa-compress:before{content:"\\f066"}.fa-plus:before{content:"\\f067"}.fa-minus:before{content:"\\f068"}.fa-asterisk:before{content:"\\f069"}.fa-exclamation-circle:before{content:"\\f06a"}.fa-gift:before{content:"\\f06b"}.fa-leaf:before{content:"\\f06c"}.fa-fire:before{content:"\\f06d"}.fa-eye:before{content:"\\f06e"}.fa-eye-slash:before{content:"\\f070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\\f071"}.fa-plane:before{content:"\\f072"}.fa-calendar:before{content:"\\f073"}.fa-random:before{content:"\\f074"}.fa-comment:before{content:"\\f075"}.fa-magnet:before{content:"\\f076"}.fa-chevron-up:before{content:"\\f077"}.fa-chevron-down:before{content:"\\f078"}.fa-retweet:before{content:"\\f079"}.fa-shopping-cart:before{content:"\\f07a"}.fa-folder:before{content:"\\f07b"}.fa-folder-open:before{content:"\\f07c"}.fa-arrows-v:before{content:"\\f07d"}.fa-arrows-h:before{content:"\\f07e"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\\f080"}.fa-twitter-square:before{content:"\\f081"}.fa-facebook-square:before{content:"\\f082"}.fa-camera-retro:before{content:"\\f083"}.fa-key:before{content:"\\f084"}.fa-gears:before,.fa-cogs:before{content:"\\f085"}.fa-comments:before{content:"\\f086"}.fa-thumbs-o-up:before{content:"\\f087"}.fa-thumbs-o-down:before{content:"\\f088"}.fa-star-half:before{content:"\\f089"}.fa-heart-o:before{content:"\\f08a"}.fa-sign-out:before{content:"\\f08b"}.fa-linkedin-square:before{content:"\\f08c"}.fa-thumb-tack:before{content:"\\f08d"}.fa-external-link:before{content:"\\f08e"}.fa-sign-in:before{content:"\\f090"}.fa-trophy:before{content:"\\f091"}.fa-github-square:before{content:"\\f092"}.fa-upload:before{content:"\\f093"}.fa-lemon-o:before{content:"\\f094"}.fa-phone:before{content:"\\f095"}.fa-square-o:before{content:"\\f096"}.fa-bookmark-o:before{content:"\\f097"}.fa-phone-square:before{content:"\\f098"}.fa-twitter:before{content:"\\f099"}.fa-facebook-f:before,.fa-facebook:before{content:"\\f09a"}.fa-github:before{content:"\\f09b"}.fa-unlock:before{content:"\\f09c"}.fa-credit-card:before{content:"\\f09d"}.fa-feed:before,.fa-rss:before{content:"\\f09e"}.fa-hdd-o:before{content:"\\f0a0"}.fa-bullhorn:before{content:"\\f0a1"}.fa-bell:before{content:"\\f0f3"}.fa-certificate:before{content:"\\f0a3"}.fa-hand-o-right:before{content:"\\f0a4"}.fa-hand-o-left:before{content:"\\f0a5"}.fa-hand-o-up:before{content:"\\f0a6"}.fa-hand-o-down:before{content:"\\f0a7"}.fa-arrow-circle-left:before{content:"\\f0a8"}.fa-arrow-circle-right:before{content:"\\f0a9"}.fa-arrow-circle-up:before{content:"\\f0aa"}.fa-arrow-circle-down:before{content:"\\f0ab"}.fa-globe:before{content:"\\f0ac"}.fa-wrench:before{content:"\\f0ad"}.fa-tasks:before{content:"\\f0ae"}.fa-filter:before{content:"\\f0b0"}.fa-briefcase:before{content:"\\f0b1"}.fa-arrows-alt:before{content:"\\f0b2"}.fa-group:before,.fa-users:before{content:"\\f0c0"}.fa-chain:before,.fa-link:before{content:"\\f0c1"}.fa-cloud:before{content:"\\f0c2"}.fa-flask:before{content:"\\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\\f0c5"}.fa-paperclip:before{content:"\\f0c6"}.fa-save:before,.fa-floppy-o:before{content:"\\f0c7"}.fa-square:before{content:"\\f0c8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\\f0c9"}.fa-list-ul:before{content:"\\f0ca"}.fa-list-ol:before{content:"\\f0cb"}.fa-strikethrough:before{content:"\\f0cc"}.fa-underline:before{content:"\\f0cd"}.fa-table:before{content:"\\f0ce"}.fa-magic:before{content:"\\f0d0"}.fa-truck:before{content:"\\f0d1"}.fa-pinterest:before{content:"\\f0d2"}.fa-pinterest-square:before{content:"\\f0d3"}.fa-google-plus-square:before{content:"\\f0d4"}.fa-google-plus:before{content:"\\f0d5"}.fa-money:before{content:"\\f0d6"}.fa-caret-down:before{content:"\\f0d7"}.fa-caret-up:before{content:"\\f0d8"}.fa-caret-left:before{content:"\\f0d9"}.fa-caret-right:before{content:"\\f0da"}.fa-columns:before{content:"\\f0db"}.fa-unsorted:before,.fa-sort:before{content:"\\f0dc"}.fa-sort-down:before,.fa-sort-desc:before{content:"\\f0dd"}.fa-sort-up:before,.fa-sort-asc:before{content:"\\f0de"}.fa-envelope:before{content:"\\f0e0"}.fa-linkedin:before{content:"\\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\\f0e2"}.fa-legal:before,.fa-gavel:before{content:"\\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\\f0e4"}.fa-comment-o:before{content:"\\f0e5"}.fa-comments-o:before{content:"\\f0e6"}.fa-flash:before,.fa-bolt:before{content:"\\f0e7"}.fa-sitemap:before{content:"\\f0e8"}.fa-umbrella:before{content:"\\f0e9"}.fa-paste:before,.fa-clipboard:before{content:"\\f0ea"}.fa-lightbulb-o:before{content:"\\f0eb"}.fa-exchange:before{content:"\\f0ec"}.fa-cloud-download:before{content:"\\f0ed"}.fa-cloud-upload:before{content:"\\f0ee"}.fa-user-md:before{content:"\\f0f0"}.fa-stethoscope:before{content:"\\f0f1"}.fa-suitcase:before{content:"\\f0f2"}.fa-bell-o:before{content:"\\f0a2"}.fa-coffee:before{content:"\\f0f4"}.fa-cutlery:before{content:"\\f0f5"}.fa-file-text-o:before{content:"\\f0f6"}.fa-building-o:before{content:"\\f0f7"}.fa-hospital-o:before{content:"\\f0f8"}.fa-ambulance:before{content:"\\f0f9"}.fa-medkit:before{content:"\\f0fa"}.fa-fighter-jet:before{content:"\\f0fb"}.fa-beer:before{content:"\\f0fc"}.fa-h-square:before{content:"\\f0fd"}.fa-plus-square:before{content:"\\f0fe"}.fa-angle-double-left:before{content:"\\f100"}.fa-angle-double-right:before{content:"\\f101"}.fa-angle-double-up:before{content:"\\f102"}.fa-angle-double-down:before{content:"\\f103"}.fa-angle-left:before{content:"\\f104"}.fa-angle-right:before{content:"\\f105"}.fa-angle-up:before{content:"\\f106"}.fa-angle-down:before{content:"\\f107"}.fa-desktop:before{content:"\\f108"}.fa-laptop:before{content:"\\f109"}.fa-tablet:before{content:"\\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\\f10b"}.fa-circle-o:before{content:"\\f10c"}.fa-quote-left:before{content:"\\f10d"}.fa-quote-right:before{content:"\\f10e"}.fa-spinner:before{content:"\\f110"}.fa-circle:before{content:"\\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\\f112"}.fa-github-alt:before{content:"\\f113"}.fa-folder-o:before{content:"\\f114"}.fa-folder-open-o:before{content:"\\f115"}.fa-smile-o:before{content:"\\f118"}.fa-frown-o:before{content:"\\f119"}.fa-meh-o:before{content:"\\f11a"}.fa-gamepad:before{content:"\\f11b"}.fa-keyboard-o:before{content:"\\f11c"}.fa-flag-o:before{content:"\\f11d"}.fa-flag-checkered:before{content:"\\f11e"}.fa-terminal:before{content:"\\f120"}.fa-code:before{content:"\\f121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\\f123"}.fa-location-arrow:before{content:"\\f124"}.fa-crop:before{content:"\\f125"}.fa-code-fork:before{content:"\\f126"}.fa-unlink:before,.fa-chain-broken:before{content:"\\f127"}.fa-question:before{content:"\\f128"}.fa-info:before{content:"\\f129"}.fa-exclamation:before{content:"\\f12a"}.fa-superscript:before{content:"\\f12b"}.fa-subscript:before{content:"\\f12c"}.fa-eraser:before{content:"\\f12d"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-microphone:before{content:"\\f130"}.fa-microphone-slash:before{content:"\\f131"}.fa-shield:before{content:"\\f132"}.fa-calendar-o:before{content:"\\f133"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-rocket:before{content:"\\f135"}.fa-maxcdn:before{content:"\\f136"}.fa-chevron-circle-left:before{content:"\\f137"}.fa-chevron-circle-right:before{content:"\\f138"}.fa-chevron-circle-up:before{content:"\\f139"}.fa-chevron-circle-down:before{content:"\\f13a"}.fa-html5:before{content:"\\f13b"}.fa-css3:before{content:"\\f13c"}.fa-anchor:before{content:"\\f13d"}.fa-unlock-alt:before{content:"\\f13e"}.fa-bullseye:before{content:"\\f140"}.fa-ellipsis-h:before{content:"\\f141"}.fa-ellipsis-v:before{content:"\\f142"}.fa-rss-square:before{content:"\\f143"}.fa-play-circle:before{content:"\\f144"}.fa-ticket:before{content:"\\f145"}.fa-minus-square:before{content:"\\f146"}.fa-minus-square-o:before{content:"\\f147"}.fa-level-up:before{content:"\\f148"}.fa-level-down:before{content:"\\f149"}.fa-check-square:before{content:"\\f14a"}.fa-pencil-square:before{content:"\\f14b"}.fa-external-link-square:before{content:"\\f14c"}.fa-share-square:before{content:"\\f14d"}.fa-compass:before{content:"\\f14e"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\\f150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\\f151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\\f152"}.fa-euro:before,.fa-eur:before{content:"\\f153"}.fa-gbp:before{content:"\\f154"}.fa-dollar:before,.fa-usd:before{content:"\\f155"}.fa-rupee:before,.fa-inr:before{content:"\\f156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\\f157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\\f158"}.fa-won:before,.fa-krw:before{content:"\\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\\f15a"}.fa-file:before{content:"\\f15b"}.fa-file-text:before{content:"\\f15c"}.fa-sort-alpha-asc:before{content:"\\f15d"}.fa-sort-alpha-desc:before{content:"\\f15e"}.fa-sort-amount-asc:before{content:"\\f160"}.fa-sort-amount-desc:before{content:"\\f161"}.fa-sort-numeric-asc:before{content:"\\f162"}.fa-sort-numeric-desc:before{content:"\\f163"}.fa-thumbs-up:before{content:"\\f164"}.fa-thumbs-down:before{content:"\\f165"}.fa-youtube-square:before{content:"\\f166"}.fa-youtube:before{content:"\\f167"}.fa-xing:before{content:"\\f168"}.fa-xing-square:before{content:"\\f169"}.fa-youtube-play:before{content:"\\f16a"}.fa-dropbox:before{content:"\\f16b"}.fa-stack-overflow:before{content:"\\f16c"}.fa-instagram:before{content:"\\f16d"}.fa-flickr:before{content:"\\f16e"}.fa-adn:before{content:"\\f170"}.fa-bitbucket:before{content:"\\f171"}.fa-bitbucket-square:before{content:"\\f172"}.fa-tumblr:before{content:"\\f173"}.fa-tumblr-square:before{content:"\\f174"}.fa-long-arrow-down:before{content:"\\f175"}.fa-long-arrow-up:before{content:"\\f176"}.fa-long-arrow-left:before{content:"\\f177"}.fa-long-arrow-right:before{content:"\\f178"}.fa-apple:before{content:"\\f179"}.fa-windows:before{content:"\\f17a"}.fa-android:before{content:"\\f17b"}.fa-linux:before{content:"\\f17c"}.fa-dribbble:before{content:"\\f17d"}.fa-skype:before{content:"\\f17e"}.fa-foursquare:before{content:"\\f180"}.fa-trello:before{content:"\\f181"}.fa-female:before{content:"\\f182"}.fa-male:before{content:"\\f183"}.fa-gittip:before,.fa-gratipay:before{content:"\\f184"}.fa-sun-o:before{content:"\\f185"}.fa-moon-o:before{content:"\\f186"}.fa-archive:before{content:"\\f187"}.fa-bug:before{content:"\\f188"}.fa-vk:before{content:"\\f189"}.fa-weibo:before{content:"\\f18a"}.fa-renren:before{content:"\\f18b"}.fa-pagelines:before{content:"\\f18c"}.fa-stack-exchange:before{content:"\\f18d"}.fa-arrow-circle-o-right:before{content:"\\f18e"}.fa-arrow-circle-o-left:before{content:"\\f190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\\f191"}.fa-dot-circle-o:before{content:"\\f192"}.fa-wheelchair:before{content:"\\f193"}.fa-vimeo-square:before{content:"\\f194"}.fa-turkish-lira:before,.fa-try:before{content:"\\f195"}.fa-plus-square-o:before{content:"\\f196"}.fa-space-shuttle:before{content:"\\f197"}.fa-slack:before{content:"\\f198"}.fa-envelope-square:before{content:"\\f199"}.fa-wordpress:before{content:"\\f19a"}.fa-openid:before{content:"\\f19b"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\\f19c"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\\f19d"}.fa-yahoo:before{content:"\\f19e"}.fa-google:before{content:"\\f1a0"}.fa-reddit:before{content:"\\f1a1"}.fa-reddit-square:before{content:"\\f1a2"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-delicious:before{content:"\\f1a5"}.fa-digg:before{content:"\\f1a6"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-drupal:before{content:"\\f1a9"}.fa-joomla:before{content:"\\f1aa"}.fa-language:before{content:"\\f1ab"}.fa-fax:before{content:"\\f1ac"}.fa-building:before{content:"\\f1ad"}.fa-child:before{content:"\\f1ae"}.fa-paw:before{content:"\\f1b0"}.fa-spoon:before{content:"\\f1b1"}.fa-cube:before{content:"\\f1b2"}.fa-cubes:before{content:"\\f1b3"}.fa-behance:before{content:"\\f1b4"}.fa-behance-square:before{content:"\\f1b5"}.fa-steam:before{content:"\\f1b6"}.fa-steam-square:before{content:"\\f1b7"}.fa-recycle:before{content:"\\f1b8"}.fa-automobile:before,.fa-car:before{content:"\\f1b9"}.fa-cab:before,.fa-taxi:before{content:"\\f1ba"}.fa-tree:before{content:"\\f1bb"}.fa-spotify:before{content:"\\f1bc"}.fa-deviantart:before{content:"\\f1bd"}.fa-soundcloud:before{content:"\\f1be"}.fa-database:before{content:"\\f1c0"}.fa-file-pdf-o:before{content:"\\f1c1"}.fa-file-word-o:before{content:"\\f1c2"}.fa-file-excel-o:before{content:"\\f1c3"}.fa-file-powerpoint-o:before{content:"\\f1c4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\\f1c5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\\f1c6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\\f1c7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\\f1c8"}.fa-file-code-o:before{content:"\\f1c9"}.fa-vine:before{content:"\\f1ca"}.fa-codepen:before{content:"\\f1cb"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\\f1cd"}.fa-circle-o-notch:before{content:"\\f1ce"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:"\\f1d0"}.fa-ge:before,.fa-empire:before{content:"\\f1d1"}.fa-git-square:before{content:"\\f1d2"}.fa-git:before{content:"\\f1d3"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:"\\f1d4"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-qq:before{content:"\\f1d6"}.fa-wechat:before,.fa-weixin:before{content:"\\f1d7"}.fa-send:before,.fa-paper-plane:before{content:"\\f1d8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\\f1d9"}.fa-history:before{content:"\\f1da"}.fa-circle-thin:before{content:"\\f1db"}.fa-header:before{content:"\\f1dc"}.fa-paragraph:before{content:"\\f1dd"}.fa-sliders:before{content:"\\f1de"}.fa-share-alt:before{content:"\\f1e0"}.fa-share-alt-square:before{content:"\\f1e1"}.fa-bomb:before{content:"\\f1e2"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:"\\f1e3"}.fa-tty:before{content:"\\f1e4"}.fa-binoculars:before{content:"\\f1e5"}.fa-plug:before{content:"\\f1e6"}.fa-slideshare:before{content:"\\f1e7"}.fa-twitch:before{content:"\\f1e8"}.fa-yelp:before{content:"\\f1e9"}.fa-newspaper-o:before{content:"\\f1ea"}.fa-wifi:before{content:"\\f1eb"}.fa-calculator:before{content:"\\f1ec"}.fa-paypal:before{content:"\\f1ed"}.fa-google-wallet:before{content:"\\f1ee"}.fa-cc-visa:before{content:"\\f1f0"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-cc-discover:before{content:"\\f1f2"}.fa-cc-amex:before{content:"\\f1f3"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-bell-slash:before{content:"\\f1f6"}.fa-bell-slash-o:before{content:"\\f1f7"}.fa-trash:before{content:"\\f1f8"}.fa-copyright:before{content:"\\f1f9"}.fa-at:before{content:"\\f1fa"}.fa-eyedropper:before{content:"\\f1fb"}.fa-paint-brush:before{content:"\\f1fc"}.fa-birthday-cake:before{content:"\\f1fd"}.fa-area-chart:before{content:"\\f1fe"}.fa-pie-chart:before{content:"\\f200"}.fa-line-chart:before{content:"\\f201"}.fa-lastfm:before{content:"\\f202"}.fa-lastfm-square:before{content:"\\f203"}.fa-toggle-off:before{content:"\\f204"}.fa-toggle-on:before{content:"\\f205"}.fa-bicycle:before{content:"\\f206"}.fa-bus:before{content:"\\f207"}.fa-ioxhost:before{content:"\\f208"}.fa-angellist:before{content:"\\f209"}.fa-cc:before{content:"\\f20a"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:"\\f20b"}.fa-meanpath:before{content:"\\f20c"}.fa-buysellads:before{content:"\\f20d"}.fa-connectdevelop:before{content:"\\f20e"}.fa-dashcube:before{content:"\\f210"}.fa-forumbee:before{content:"\\f211"}.fa-leanpub:before{content:"\\f212"}.fa-sellsy:before{content:"\\f213"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-simplybuilt:before{content:"\\f215"}.fa-skyatlas:before{content:"\\f216"}.fa-cart-plus:before{content:"\\f217"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-diamond:before{content:"\\f219"}.fa-ship:before{content:"\\f21a"}.fa-user-secret:before{content:"\\f21b"}.fa-motorcycle:before{content:"\\f21c"}.fa-street-view:before{content:"\\f21d"}.fa-heartbeat:before{content:"\\f21e"}.fa-venus:before{content:"\\f221"}.fa-mars:before{content:"\\f222"}.fa-mercury:before{content:"\\f223"}.fa-intersex:before,.fa-transgender:before{content:"\\f224"}.fa-transgender-alt:before{content:"\\f225"}.fa-venus-double:before{content:"\\f226"}.fa-mars-double:before{content:"\\f227"}.fa-venus-mars:before{content:"\\f228"}.fa-mars-stroke:before{content:"\\f229"}.fa-mars-stroke-v:before{content:"\\f22a"}.fa-mars-stroke-h:before{content:"\\f22b"}.fa-neuter:before{content:"\\f22c"}.fa-genderless:before{content:"\\f22d"}.fa-facebook-official:before{content:"\\f230"}.fa-pinterest-p:before{content:"\\f231"}.fa-whatsapp:before{content:"\\f232"}.fa-server:before{content:"\\f233"}.fa-user-plus:before{content:"\\f234"}.fa-user-times:before{content:"\\f235"}.fa-hotel:before,.fa-bed:before{content:"\\f236"}.fa-viacoin:before{content:"\\f237"}.fa-train:before{content:"\\f238"}.fa-subway:before{content:"\\f239"}.fa-medium:before{content:"\\f23a"}.fa-yc:before,.fa-y-combinator:before{content:"\\f23b"}.fa-optin-monster:before{content:"\\f23c"}.fa-opencart:before{content:"\\f23d"}.fa-expeditedssl:before{content:"\\f23e"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:"\\f240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\\f241"}.fa-battery-2:before,.fa-battery-half:before{content:"\\f242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\\f243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\f244"}.fa-mouse-pointer:before{content:"\\f245"}.fa-i-cursor:before{content:"\\f246"}.fa-object-group:before{content:"\\f247"}.fa-object-ungroup:before{content:"\\f248"}.fa-sticky-note:before{content:"\\f249"}.fa-sticky-note-o:before{content:"\\f24a"}.fa-cc-jcb:before{content:"\\f24b"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-clone:before{content:"\\f24d"}.fa-balance-scale:before{content:"\\f24e"}.fa-hourglass-o:before{content:"\\f250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\f251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\f252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\f253"}.fa-hourglass:before{content:"\\f254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\\f255"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:"\\f256"}.fa-hand-scissors-o:before{content:"\\f257"}.fa-hand-lizard-o:before{content:"\\f258"}.fa-hand-spock-o:before{content:"\\f259"}.fa-hand-pointer-o:before{content:"\\f25a"}.fa-hand-peace-o:before{content:"\\f25b"}.fa-trademark:before{content:"\\f25c"}.fa-registered:before{content:"\\f25d"}.fa-creative-commons:before{content:"\\f25e"}.fa-gg:before{content:"\\f260"}.fa-gg-circle:before{content:"\\f261"}.fa-tripadvisor:before{content:"\\f262"}.fa-odnoklassniki:before{content:"\\f263"}.fa-odnoklassniki-square:before{content:"\\f264"}.fa-get-pocket:before{content:"\\f265"}.fa-wikipedia-w:before{content:"\\f266"}.fa-safari:before{content:"\\f267"}.fa-chrome:before{content:"\\f268"}.fa-firefox:before{content:"\\f269"}.fa-opera:before{content:"\\f26a"}.fa-internet-explorer:before{content:"\\f26b"}.fa-tv:before,.fa-television:before{content:"\\f26c"}.fa-contao:before{content:"\\f26d"}.fa-500px:before{content:"\\f26e"}.fa-amazon:before{content:"\\f270"}.fa-calendar-plus-o:before{content:"\\f271"}.fa-calendar-minus-o:before{content:"\\f272"}.fa-calendar-times-o:before{content:"\\f273"}.fa-calendar-check-o:before{content:"\\f274"}.fa-industry:before{content:"\\f275"}.fa-map-pin:before{content:"\\f276"}.fa-map-signs:before{content:"\\f277"}.fa-map-o:before{content:"\\f278"}.fa-map:before{content:"\\f279"}.fa-commenting:before{content:"\\f27a"}.fa-commenting-o:before{content:"\\f27b"}.fa-houzz:before{content:"\\f27c"}.fa-vimeo:before{content:"\\f27d"}.fa-black-tie:before{content:"\\f27e"}.fa-fonticons:before{content:"\\f280"}.fa-reddit-alien:before{content:"\\f281"}.fa-edge:before{content:"\\f282"}.fa-credit-card-alt:before{content:"\\f283"}.fa-codiepie:before{content:"\\f284"}.fa-modx:before{content:"\\f285"}.fa-fort-awesome:before{content:"\\f286"}.fa-usb:before{content:"\\f287"}.fa-product-hunt:before{content:"\\f288"}.fa-mixcloud:before{content:"\\f289"}.fa-scribd:before{content:"\\f28a"}.fa-pause-circle:before{content:"\\f28b"}.fa-pause-circle-o:before{content:"\\f28c"}.fa-stop-circle:before{content:"\\f28d"}.fa-stop-circle-o:before{content:"\\f28e"}.fa-shopping-bag:before{content:"\\f290"}.fa-shopping-basket:before{content:"\\f291"}.fa-hashtag:before{content:"\\f292"}.fa-bluetooth:before{content:"\\f293"}.fa-bluetooth-b:before{content:"\\f294"}.fa-percent:before{content:"\\f295"}.fa-gitlab:before{content:"\\f296"}.fa-wpbeginner:before{content:"\\f297"}.fa-wpforms:before{content:"\\f298"}.fa-envira:before{content:"\\f299"}.fa-universal-access:before{content:"\\f29a"}.fa-wheelchair-alt:before{content:"\\f29b"}.fa-question-circle-o:before{content:"\\f29c"}.fa-blind:before{content:"\\f29d"}.fa-audio-description:before{content:"\\f29e"}.fa-volume-control-phone:before{content:"\\f2a0"}.fa-braille:before{content:"\\f2a1"}.fa-assistive-listening-systems:before{content:"\\f2a2"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:"\\f2a3"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:"\\f2a4"}.fa-glide:before{content:"\\f2a5"}.fa-glide-g:before{content:"\\f2a6"}.fa-signing:before,.fa-sign-language:before{content:"\\f2a7"}.fa-low-vision:before{content:"\\f2a8"}.fa-viadeo:before{content:"\\f2a9"}.fa-viadeo-square:before{content:"\\f2aa"}.fa-snapchat:before{content:"\\f2ab"}.fa-snapchat-ghost:before{content:"\\f2ac"}.fa-snapchat-square:before{content:"\\f2ad"}.fa-pied-piper:before{content:"\\f2ae"}.fa-first-order:before{content:"\\f2b0"}.fa-yoast:before{content:"\\f2b1"}.fa-themeisle:before{content:"\\f2b2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\\f2b3"}.fa-fa:before,.fa-font-awesome:before{content:"\\f2b4"}.fa-handshake-o:before{content:"\\f2b5"}.fa-envelope-open:before{content:"\\f2b6"}.fa-envelope-open-o:before{content:"\\f2b7"}.fa-linode:before{content:"\\f2b8"}.fa-address-book:before{content:"\\f2b9"}.fa-address-book-o:before{content:"\\f2ba"}.fa-vcard:before,.fa-address-card:before{content:"\\f2bb"}.fa-vcard-o:before,.fa-address-card-o:before{content:"\\f2bc"}.fa-user-circle:before{content:"\\f2bd"}.fa-user-circle-o:before{content:"\\f2be"}.fa-user-o:before{content:"\\f2c0"}.fa-id-badge:before{content:"\\f2c1"}.fa-drivers-license:before,.fa-id-card:before{content:"\\f2c2"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:"\\f2c3"}.fa-quora:before{content:"\\f2c4"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-telegram:before{content:"\\f2c6"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:"\\f2c7"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\f2c9"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\f2cb"}.fa-shower:before{content:"\\f2cc"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:"\\f2cd"}.fa-podcast:before{content:"\\f2ce"}.fa-window-maximize:before{content:"\\f2d0"}.fa-window-minimize:before{content:"\\f2d1"}.fa-window-restore:before{content:"\\f2d2"}.fa-times-rectangle:before,.fa-window-close:before{content:"\\f2d3"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:"\\f2d4"}.fa-bandcamp:before{content:"\\f2d5"}.fa-grav:before{content:"\\f2d6"}.fa-etsy:before{content:"\\f2d7"}.fa-imdb:before{content:"\\f2d8"}.fa-ravelry:before{content:"\\f2d9"}.fa-eercast:before{content:"\\f2da"}.fa-microchip:before{content:"\\f2db"}.fa-snowflake-o:before{content:"\\f2dc"}.fa-superpowers:before{content:"\\f2dd"}.fa-wpexplorer:before{content:"\\f2de"}.fa-meetup:before{content:"\\f2e0"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:"";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:#ffffff80}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:"";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*="display:none"]):not([style*="display: none"]){display:inline-block}.select-button{display:inline-block}.select-button.disabled{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}\n'],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AeButtonComponent, [{
    type: Component,
    args: [{
      selector: "ae-button",
      encapsulation: ViewEncapsulation$1.None,
      template: '<button type="button" [title]="title" class="angular-editor-button" (click)="buttonClick.emit()" tabindex="-1"><i\n    [class]="iconClass"></i></button>\n\n',
      styles: ['/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(/assets/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(/assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"),url(/assets/fonts/fontawesome-webfont.woff2?v=4.7.0) format("woff2"),url(/assets/fonts/fontawesome-webfont.woff?v=4.7.0) format("woff"),url(/assets/fonts/fontawesome-webfont.ttf?v=4.7.0) format("truetype"),url(/assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format("svg");font-weight:400;font-style:normal}.fa{display:inline-block;font: 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{animation:fa-spin 2s infinite linear}.fa-pulse{animation:fa-spin 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";transform:scaleY(-1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\\f000"}.fa-music:before{content:"\\f001"}.fa-search:before{content:"\\f002"}.fa-envelope-o:before{content:"\\f003"}.fa-heart:before{content:"\\f004"}.fa-star:before{content:"\\f005"}.fa-star-o:before{content:"\\f006"}.fa-user:before{content:"\\f007"}.fa-film:before{content:"\\f008"}.fa-th-large:before{content:"\\f009"}.fa-th:before{content:"\\f00a"}.fa-th-list:before{content:"\\f00b"}.fa-check:before{content:"\\f00c"}.fa-remove:before,.fa-close:before,.fa-times:before{content:"\\f00d"}.fa-search-plus:before{content:"\\f00e"}.fa-search-minus:before{content:"\\f010"}.fa-power-off:before{content:"\\f011"}.fa-signal:before{content:"\\f012"}.fa-gear:before,.fa-cog:before{content:"\\f013"}.fa-trash-o:before{content:"\\f014"}.fa-home:before{content:"\\f015"}.fa-file-o:before{content:"\\f016"}.fa-clock-o:before{content:"\\f017"}.fa-road:before{content:"\\f018"}.fa-download:before{content:"\\f019"}.fa-arrow-circle-o-down:before{content:"\\f01a"}.fa-arrow-circle-o-up:before{content:"\\f01b"}.fa-inbox:before{content:"\\f01c"}.fa-play-circle-o:before{content:"\\f01d"}.fa-rotate-right:before,.fa-repeat:before{content:"\\f01e"}.fa-refresh:before{content:"\\f021"}.fa-list-alt:before{content:"\\f022"}.fa-lock:before{content:"\\f023"}.fa-flag:before{content:"\\f024"}.fa-headphones:before{content:"\\f025"}.fa-volume-off:before{content:"\\f026"}.fa-volume-down:before{content:"\\f027"}.fa-volume-up:before{content:"\\f028"}.fa-qrcode:before{content:"\\f029"}.fa-barcode:before{content:"\\f02a"}.fa-tag:before{content:"\\f02b"}.fa-tags:before{content:"\\f02c"}.fa-book:before{content:"\\f02d"}.fa-bookmark:before{content:"\\f02e"}.fa-print:before{content:"\\f02f"}.fa-camera:before{content:"\\f030"}.fa-font:before{content:"\\f031"}.fa-bold:before{content:"\\f032"}.fa-italic:before{content:"\\f033"}.fa-text-height:before{content:"\\f034"}.fa-text-width:before{content:"\\f035"}.fa-align-left:before{content:"\\f036"}.fa-align-center:before{content:"\\f037"}.fa-align-right:before{content:"\\f038"}.fa-align-justify:before{content:"\\f039"}.fa-list:before{content:"\\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\\f03b"}.fa-indent:before{content:"\\f03c"}.fa-video-camera:before{content:"\\f03d"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\\f03e"}.fa-pencil:before{content:"\\f040"}.fa-map-marker:before{content:"\\f041"}.fa-adjust:before{content:"\\f042"}.fa-tint:before{content:"\\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\\f044"}.fa-share-square-o:before{content:"\\f045"}.fa-check-square-o:before{content:"\\f046"}.fa-arrows:before{content:"\\f047"}.fa-step-backward:before{content:"\\f048"}.fa-fast-backward:before{content:"\\f049"}.fa-backward:before{content:"\\f04a"}.fa-play:before{content:"\\f04b"}.fa-pause:before{content:"\\f04c"}.fa-stop:before{content:"\\f04d"}.fa-forward:before{content:"\\f04e"}.fa-fast-forward:before{content:"\\f050"}.fa-step-forward:before{content:"\\f051"}.fa-eject:before{content:"\\f052"}.fa-chevron-left:before{content:"\\f053"}.fa-chevron-right:before{content:"\\f054"}.fa-plus-circle:before{content:"\\f055"}.fa-minus-circle:before{content:"\\f056"}.fa-times-circle:before{content:"\\f057"}.fa-check-circle:before{content:"\\f058"}.fa-question-circle:before{content:"\\f059"}.fa-info-circle:before{content:"\\f05a"}.fa-crosshairs:before{content:"\\f05b"}.fa-times-circle-o:before{content:"\\f05c"}.fa-check-circle-o:before{content:"\\f05d"}.fa-ban:before{content:"\\f05e"}.fa-arrow-left:before{content:"\\f060"}.fa-arrow-right:before{content:"\\f061"}.fa-arrow-up:before{content:"\\f062"}.fa-arrow-down:before{content:"\\f063"}.fa-mail-forward:before,.fa-share:before{content:"\\f064"}.fa-expand:before{content:"\\f065"}.fa-compress:before{content:"\\f066"}.fa-plus:before{content:"\\f067"}.fa-minus:before{content:"\\f068"}.fa-asterisk:before{content:"\\f069"}.fa-exclamation-circle:before{content:"\\f06a"}.fa-gift:before{content:"\\f06b"}.fa-leaf:before{content:"\\f06c"}.fa-fire:before{content:"\\f06d"}.fa-eye:before{content:"\\f06e"}.fa-eye-slash:before{content:"\\f070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\\f071"}.fa-plane:before{content:"\\f072"}.fa-calendar:before{content:"\\f073"}.fa-random:before{content:"\\f074"}.fa-comment:before{content:"\\f075"}.fa-magnet:before{content:"\\f076"}.fa-chevron-up:before{content:"\\f077"}.fa-chevron-down:before{content:"\\f078"}.fa-retweet:before{content:"\\f079"}.fa-shopping-cart:before{content:"\\f07a"}.fa-folder:before{content:"\\f07b"}.fa-folder-open:before{content:"\\f07c"}.fa-arrows-v:before{content:"\\f07d"}.fa-arrows-h:before{content:"\\f07e"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\\f080"}.fa-twitter-square:before{content:"\\f081"}.fa-facebook-square:before{content:"\\f082"}.fa-camera-retro:before{content:"\\f083"}.fa-key:before{content:"\\f084"}.fa-gears:before,.fa-cogs:before{content:"\\f085"}.fa-comments:before{content:"\\f086"}.fa-thumbs-o-up:before{content:"\\f087"}.fa-thumbs-o-down:before{content:"\\f088"}.fa-star-half:before{content:"\\f089"}.fa-heart-o:before{content:"\\f08a"}.fa-sign-out:before{content:"\\f08b"}.fa-linkedin-square:before{content:"\\f08c"}.fa-thumb-tack:before{content:"\\f08d"}.fa-external-link:before{content:"\\f08e"}.fa-sign-in:before{content:"\\f090"}.fa-trophy:before{content:"\\f091"}.fa-github-square:before{content:"\\f092"}.fa-upload:before{content:"\\f093"}.fa-lemon-o:before{content:"\\f094"}.fa-phone:before{content:"\\f095"}.fa-square-o:before{content:"\\f096"}.fa-bookmark-o:before{content:"\\f097"}.fa-phone-square:before{content:"\\f098"}.fa-twitter:before{content:"\\f099"}.fa-facebook-f:before,.fa-facebook:before{content:"\\f09a"}.fa-github:before{content:"\\f09b"}.fa-unlock:before{content:"\\f09c"}.fa-credit-card:before{content:"\\f09d"}.fa-feed:before,.fa-rss:before{content:"\\f09e"}.fa-hdd-o:before{content:"\\f0a0"}.fa-bullhorn:before{content:"\\f0a1"}.fa-bell:before{content:"\\f0f3"}.fa-certificate:before{content:"\\f0a3"}.fa-hand-o-right:before{content:"\\f0a4"}.fa-hand-o-left:before{content:"\\f0a5"}.fa-hand-o-up:before{content:"\\f0a6"}.fa-hand-o-down:before{content:"\\f0a7"}.fa-arrow-circle-left:before{content:"\\f0a8"}.fa-arrow-circle-right:before{content:"\\f0a9"}.fa-arrow-circle-up:before{content:"\\f0aa"}.fa-arrow-circle-down:before{content:"\\f0ab"}.fa-globe:before{content:"\\f0ac"}.fa-wrench:before{content:"\\f0ad"}.fa-tasks:before{content:"\\f0ae"}.fa-filter:before{content:"\\f0b0"}.fa-briefcase:before{content:"\\f0b1"}.fa-arrows-alt:before{content:"\\f0b2"}.fa-group:before,.fa-users:before{content:"\\f0c0"}.fa-chain:before,.fa-link:before{content:"\\f0c1"}.fa-cloud:before{content:"\\f0c2"}.fa-flask:before{content:"\\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\\f0c5"}.fa-paperclip:before{content:"\\f0c6"}.fa-save:before,.fa-floppy-o:before{content:"\\f0c7"}.fa-square:before{content:"\\f0c8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\\f0c9"}.fa-list-ul:before{content:"\\f0ca"}.fa-list-ol:before{content:"\\f0cb"}.fa-strikethrough:before{content:"\\f0cc"}.fa-underline:before{content:"\\f0cd"}.fa-table:before{content:"\\f0ce"}.fa-magic:before{content:"\\f0d0"}.fa-truck:before{content:"\\f0d1"}.fa-pinterest:before{content:"\\f0d2"}.fa-pinterest-square:before{content:"\\f0d3"}.fa-google-plus-square:before{content:"\\f0d4"}.fa-google-plus:before{content:"\\f0d5"}.fa-money:before{content:"\\f0d6"}.fa-caret-down:before{content:"\\f0d7"}.fa-caret-up:before{content:"\\f0d8"}.fa-caret-left:before{content:"\\f0d9"}.fa-caret-right:before{content:"\\f0da"}.fa-columns:before{content:"\\f0db"}.fa-unsorted:before,.fa-sort:before{content:"\\f0dc"}.fa-sort-down:before,.fa-sort-desc:before{content:"\\f0dd"}.fa-sort-up:before,.fa-sort-asc:before{content:"\\f0de"}.fa-envelope:before{content:"\\f0e0"}.fa-linkedin:before{content:"\\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\\f0e2"}.fa-legal:before,.fa-gavel:before{content:"\\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\\f0e4"}.fa-comment-o:before{content:"\\f0e5"}.fa-comments-o:before{content:"\\f0e6"}.fa-flash:before,.fa-bolt:before{content:"\\f0e7"}.fa-sitemap:before{content:"\\f0e8"}.fa-umbrella:before{content:"\\f0e9"}.fa-paste:before,.fa-clipboard:before{content:"\\f0ea"}.fa-lightbulb-o:before{content:"\\f0eb"}.fa-exchange:before{content:"\\f0ec"}.fa-cloud-download:before{content:"\\f0ed"}.fa-cloud-upload:before{content:"\\f0ee"}.fa-user-md:before{content:"\\f0f0"}.fa-stethoscope:before{content:"\\f0f1"}.fa-suitcase:before{content:"\\f0f2"}.fa-bell-o:before{content:"\\f0a2"}.fa-coffee:before{content:"\\f0f4"}.fa-cutlery:before{content:"\\f0f5"}.fa-file-text-o:before{content:"\\f0f6"}.fa-building-o:before{content:"\\f0f7"}.fa-hospital-o:before{content:"\\f0f8"}.fa-ambulance:before{content:"\\f0f9"}.fa-medkit:before{content:"\\f0fa"}.fa-fighter-jet:before{content:"\\f0fb"}.fa-beer:before{content:"\\f0fc"}.fa-h-square:before{content:"\\f0fd"}.fa-plus-square:before{content:"\\f0fe"}.fa-angle-double-left:before{content:"\\f100"}.fa-angle-double-right:before{content:"\\f101"}.fa-angle-double-up:before{content:"\\f102"}.fa-angle-double-down:before{content:"\\f103"}.fa-angle-left:before{content:"\\f104"}.fa-angle-right:before{content:"\\f105"}.fa-angle-up:before{content:"\\f106"}.fa-angle-down:before{content:"\\f107"}.fa-desktop:before{content:"\\f108"}.fa-laptop:before{content:"\\f109"}.fa-tablet:before{content:"\\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\\f10b"}.fa-circle-o:before{content:"\\f10c"}.fa-quote-left:before{content:"\\f10d"}.fa-quote-right:before{content:"\\f10e"}.fa-spinner:before{content:"\\f110"}.fa-circle:before{content:"\\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\\f112"}.fa-github-alt:before{content:"\\f113"}.fa-folder-o:before{content:"\\f114"}.fa-folder-open-o:before{content:"\\f115"}.fa-smile-o:before{content:"\\f118"}.fa-frown-o:before{content:"\\f119"}.fa-meh-o:before{content:"\\f11a"}.fa-gamepad:before{content:"\\f11b"}.fa-keyboard-o:before{content:"\\f11c"}.fa-flag-o:before{content:"\\f11d"}.fa-flag-checkered:before{content:"\\f11e"}.fa-terminal:before{content:"\\f120"}.fa-code:before{content:"\\f121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\\f123"}.fa-location-arrow:before{content:"\\f124"}.fa-crop:before{content:"\\f125"}.fa-code-fork:before{content:"\\f126"}.fa-unlink:before,.fa-chain-broken:before{content:"\\f127"}.fa-question:before{content:"\\f128"}.fa-info:before{content:"\\f129"}.fa-exclamation:before{content:"\\f12a"}.fa-superscript:before{content:"\\f12b"}.fa-subscript:before{content:"\\f12c"}.fa-eraser:before{content:"\\f12d"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-microphone:before{content:"\\f130"}.fa-microphone-slash:before{content:"\\f131"}.fa-shield:before{content:"\\f132"}.fa-calendar-o:before{content:"\\f133"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-rocket:before{content:"\\f135"}.fa-maxcdn:before{content:"\\f136"}.fa-chevron-circle-left:before{content:"\\f137"}.fa-chevron-circle-right:before{content:"\\f138"}.fa-chevron-circle-up:before{content:"\\f139"}.fa-chevron-circle-down:before{content:"\\f13a"}.fa-html5:before{content:"\\f13b"}.fa-css3:before{content:"\\f13c"}.fa-anchor:before{content:"\\f13d"}.fa-unlock-alt:before{content:"\\f13e"}.fa-bullseye:before{content:"\\f140"}.fa-ellipsis-h:before{content:"\\f141"}.fa-ellipsis-v:before{content:"\\f142"}.fa-rss-square:before{content:"\\f143"}.fa-play-circle:before{content:"\\f144"}.fa-ticket:before{content:"\\f145"}.fa-minus-square:before{content:"\\f146"}.fa-minus-square-o:before{content:"\\f147"}.fa-level-up:before{content:"\\f148"}.fa-level-down:before{content:"\\f149"}.fa-check-square:before{content:"\\f14a"}.fa-pencil-square:before{content:"\\f14b"}.fa-external-link-square:before{content:"\\f14c"}.fa-share-square:before{content:"\\f14d"}.fa-compass:before{content:"\\f14e"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\\f150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\\f151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\\f152"}.fa-euro:before,.fa-eur:before{content:"\\f153"}.fa-gbp:before{content:"\\f154"}.fa-dollar:before,.fa-usd:before{content:"\\f155"}.fa-rupee:before,.fa-inr:before{content:"\\f156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\\f157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\\f158"}.fa-won:before,.fa-krw:before{content:"\\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\\f15a"}.fa-file:before{content:"\\f15b"}.fa-file-text:before{content:"\\f15c"}.fa-sort-alpha-asc:before{content:"\\f15d"}.fa-sort-alpha-desc:before{content:"\\f15e"}.fa-sort-amount-asc:before{content:"\\f160"}.fa-sort-amount-desc:before{content:"\\f161"}.fa-sort-numeric-asc:before{content:"\\f162"}.fa-sort-numeric-desc:before{content:"\\f163"}.fa-thumbs-up:before{content:"\\f164"}.fa-thumbs-down:before{content:"\\f165"}.fa-youtube-square:before{content:"\\f166"}.fa-youtube:before{content:"\\f167"}.fa-xing:before{content:"\\f168"}.fa-xing-square:before{content:"\\f169"}.fa-youtube-play:before{content:"\\f16a"}.fa-dropbox:before{content:"\\f16b"}.fa-stack-overflow:before{content:"\\f16c"}.fa-instagram:before{content:"\\f16d"}.fa-flickr:before{content:"\\f16e"}.fa-adn:before{content:"\\f170"}.fa-bitbucket:before{content:"\\f171"}.fa-bitbucket-square:before{content:"\\f172"}.fa-tumblr:before{content:"\\f173"}.fa-tumblr-square:before{content:"\\f174"}.fa-long-arrow-down:before{content:"\\f175"}.fa-long-arrow-up:before{content:"\\f176"}.fa-long-arrow-left:before{content:"\\f177"}.fa-long-arrow-right:before{content:"\\f178"}.fa-apple:before{content:"\\f179"}.fa-windows:before{content:"\\f17a"}.fa-android:before{content:"\\f17b"}.fa-linux:before{content:"\\f17c"}.fa-dribbble:before{content:"\\f17d"}.fa-skype:before{content:"\\f17e"}.fa-foursquare:before{content:"\\f180"}.fa-trello:before{content:"\\f181"}.fa-female:before{content:"\\f182"}.fa-male:before{content:"\\f183"}.fa-gittip:before,.fa-gratipay:before{content:"\\f184"}.fa-sun-o:before{content:"\\f185"}.fa-moon-o:before{content:"\\f186"}.fa-archive:before{content:"\\f187"}.fa-bug:before{content:"\\f188"}.fa-vk:before{content:"\\f189"}.fa-weibo:before{content:"\\f18a"}.fa-renren:before{content:"\\f18b"}.fa-pagelines:before{content:"\\f18c"}.fa-stack-exchange:before{content:"\\f18d"}.fa-arrow-circle-o-right:before{content:"\\f18e"}.fa-arrow-circle-o-left:before{content:"\\f190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\\f191"}.fa-dot-circle-o:before{content:"\\f192"}.fa-wheelchair:before{content:"\\f193"}.fa-vimeo-square:before{content:"\\f194"}.fa-turkish-lira:before,.fa-try:before{content:"\\f195"}.fa-plus-square-o:before{content:"\\f196"}.fa-space-shuttle:before{content:"\\f197"}.fa-slack:before{content:"\\f198"}.fa-envelope-square:before{content:"\\f199"}.fa-wordpress:before{content:"\\f19a"}.fa-openid:before{content:"\\f19b"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\\f19c"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\\f19d"}.fa-yahoo:before{content:"\\f19e"}.fa-google:before{content:"\\f1a0"}.fa-reddit:before{content:"\\f1a1"}.fa-reddit-square:before{content:"\\f1a2"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-delicious:before{content:"\\f1a5"}.fa-digg:before{content:"\\f1a6"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-drupal:before{content:"\\f1a9"}.fa-joomla:before{content:"\\f1aa"}.fa-language:before{content:"\\f1ab"}.fa-fax:before{content:"\\f1ac"}.fa-building:before{content:"\\f1ad"}.fa-child:before{content:"\\f1ae"}.fa-paw:before{content:"\\f1b0"}.fa-spoon:before{content:"\\f1b1"}.fa-cube:before{content:"\\f1b2"}.fa-cubes:before{content:"\\f1b3"}.fa-behance:before{content:"\\f1b4"}.fa-behance-square:before{content:"\\f1b5"}.fa-steam:before{content:"\\f1b6"}.fa-steam-square:before{content:"\\f1b7"}.fa-recycle:before{content:"\\f1b8"}.fa-automobile:before,.fa-car:before{content:"\\f1b9"}.fa-cab:before,.fa-taxi:before{content:"\\f1ba"}.fa-tree:before{content:"\\f1bb"}.fa-spotify:before{content:"\\f1bc"}.fa-deviantart:before{content:"\\f1bd"}.fa-soundcloud:before{content:"\\f1be"}.fa-database:before{content:"\\f1c0"}.fa-file-pdf-o:before{content:"\\f1c1"}.fa-file-word-o:before{content:"\\f1c2"}.fa-file-excel-o:before{content:"\\f1c3"}.fa-file-powerpoint-o:before{content:"\\f1c4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\\f1c5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\\f1c6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\\f1c7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\\f1c8"}.fa-file-code-o:before{content:"\\f1c9"}.fa-vine:before{content:"\\f1ca"}.fa-codepen:before{content:"\\f1cb"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\\f1cd"}.fa-circle-o-notch:before{content:"\\f1ce"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:"\\f1d0"}.fa-ge:before,.fa-empire:before{content:"\\f1d1"}.fa-git-square:before{content:"\\f1d2"}.fa-git:before{content:"\\f1d3"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:"\\f1d4"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-qq:before{content:"\\f1d6"}.fa-wechat:before,.fa-weixin:before{content:"\\f1d7"}.fa-send:before,.fa-paper-plane:before{content:"\\f1d8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\\f1d9"}.fa-history:before{content:"\\f1da"}.fa-circle-thin:before{content:"\\f1db"}.fa-header:before{content:"\\f1dc"}.fa-paragraph:before{content:"\\f1dd"}.fa-sliders:before{content:"\\f1de"}.fa-share-alt:before{content:"\\f1e0"}.fa-share-alt-square:before{content:"\\f1e1"}.fa-bomb:before{content:"\\f1e2"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:"\\f1e3"}.fa-tty:before{content:"\\f1e4"}.fa-binoculars:before{content:"\\f1e5"}.fa-plug:before{content:"\\f1e6"}.fa-slideshare:before{content:"\\f1e7"}.fa-twitch:before{content:"\\f1e8"}.fa-yelp:before{content:"\\f1e9"}.fa-newspaper-o:before{content:"\\f1ea"}.fa-wifi:before{content:"\\f1eb"}.fa-calculator:before{content:"\\f1ec"}.fa-paypal:before{content:"\\f1ed"}.fa-google-wallet:before{content:"\\f1ee"}.fa-cc-visa:before{content:"\\f1f0"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-cc-discover:before{content:"\\f1f2"}.fa-cc-amex:before{content:"\\f1f3"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-bell-slash:before{content:"\\f1f6"}.fa-bell-slash-o:before{content:"\\f1f7"}.fa-trash:before{content:"\\f1f8"}.fa-copyright:before{content:"\\f1f9"}.fa-at:before{content:"\\f1fa"}.fa-eyedropper:before{content:"\\f1fb"}.fa-paint-brush:before{content:"\\f1fc"}.fa-birthday-cake:before{content:"\\f1fd"}.fa-area-chart:before{content:"\\f1fe"}.fa-pie-chart:before{content:"\\f200"}.fa-line-chart:before{content:"\\f201"}.fa-lastfm:before{content:"\\f202"}.fa-lastfm-square:before{content:"\\f203"}.fa-toggle-off:before{content:"\\f204"}.fa-toggle-on:before{content:"\\f205"}.fa-bicycle:before{content:"\\f206"}.fa-bus:before{content:"\\f207"}.fa-ioxhost:before{content:"\\f208"}.fa-angellist:before{content:"\\f209"}.fa-cc:before{content:"\\f20a"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:"\\f20b"}.fa-meanpath:before{content:"\\f20c"}.fa-buysellads:before{content:"\\f20d"}.fa-connectdevelop:before{content:"\\f20e"}.fa-dashcube:before{content:"\\f210"}.fa-forumbee:before{content:"\\f211"}.fa-leanpub:before{content:"\\f212"}.fa-sellsy:before{content:"\\f213"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-simplybuilt:before{content:"\\f215"}.fa-skyatlas:before{content:"\\f216"}.fa-cart-plus:before{content:"\\f217"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-diamond:before{content:"\\f219"}.fa-ship:before{content:"\\f21a"}.fa-user-secret:before{content:"\\f21b"}.fa-motorcycle:before{content:"\\f21c"}.fa-street-view:before{content:"\\f21d"}.fa-heartbeat:before{content:"\\f21e"}.fa-venus:before{content:"\\f221"}.fa-mars:before{content:"\\f222"}.fa-mercury:before{content:"\\f223"}.fa-intersex:before,.fa-transgender:before{content:"\\f224"}.fa-transgender-alt:before{content:"\\f225"}.fa-venus-double:before{content:"\\f226"}.fa-mars-double:before{content:"\\f227"}.fa-venus-mars:before{content:"\\f228"}.fa-mars-stroke:before{content:"\\f229"}.fa-mars-stroke-v:before{content:"\\f22a"}.fa-mars-stroke-h:before{content:"\\f22b"}.fa-neuter:before{content:"\\f22c"}.fa-genderless:before{content:"\\f22d"}.fa-facebook-official:before{content:"\\f230"}.fa-pinterest-p:before{content:"\\f231"}.fa-whatsapp:before{content:"\\f232"}.fa-server:before{content:"\\f233"}.fa-user-plus:before{content:"\\f234"}.fa-user-times:before{content:"\\f235"}.fa-hotel:before,.fa-bed:before{content:"\\f236"}.fa-viacoin:before{content:"\\f237"}.fa-train:before{content:"\\f238"}.fa-subway:before{content:"\\f239"}.fa-medium:before{content:"\\f23a"}.fa-yc:before,.fa-y-combinator:before{content:"\\f23b"}.fa-optin-monster:before{content:"\\f23c"}.fa-opencart:before{content:"\\f23d"}.fa-expeditedssl:before{content:"\\f23e"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:"\\f240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\\f241"}.fa-battery-2:before,.fa-battery-half:before{content:"\\f242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\\f243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\f244"}.fa-mouse-pointer:before{content:"\\f245"}.fa-i-cursor:before{content:"\\f246"}.fa-object-group:before{content:"\\f247"}.fa-object-ungroup:before{content:"\\f248"}.fa-sticky-note:before{content:"\\f249"}.fa-sticky-note-o:before{content:"\\f24a"}.fa-cc-jcb:before{content:"\\f24b"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-clone:before{content:"\\f24d"}.fa-balance-scale:before{content:"\\f24e"}.fa-hourglass-o:before{content:"\\f250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\f251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\f252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\f253"}.fa-hourglass:before{content:"\\f254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\\f255"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:"\\f256"}.fa-hand-scissors-o:before{content:"\\f257"}.fa-hand-lizard-o:before{content:"\\f258"}.fa-hand-spock-o:before{content:"\\f259"}.fa-hand-pointer-o:before{content:"\\f25a"}.fa-hand-peace-o:before{content:"\\f25b"}.fa-trademark:before{content:"\\f25c"}.fa-registered:before{content:"\\f25d"}.fa-creative-commons:before{content:"\\f25e"}.fa-gg:before{content:"\\f260"}.fa-gg-circle:before{content:"\\f261"}.fa-tripadvisor:before{content:"\\f262"}.fa-odnoklassniki:before{content:"\\f263"}.fa-odnoklassniki-square:before{content:"\\f264"}.fa-get-pocket:before{content:"\\f265"}.fa-wikipedia-w:before{content:"\\f266"}.fa-safari:before{content:"\\f267"}.fa-chrome:before{content:"\\f268"}.fa-firefox:before{content:"\\f269"}.fa-opera:before{content:"\\f26a"}.fa-internet-explorer:before{content:"\\f26b"}.fa-tv:before,.fa-television:before{content:"\\f26c"}.fa-contao:before{content:"\\f26d"}.fa-500px:before{content:"\\f26e"}.fa-amazon:before{content:"\\f270"}.fa-calendar-plus-o:before{content:"\\f271"}.fa-calendar-minus-o:before{content:"\\f272"}.fa-calendar-times-o:before{content:"\\f273"}.fa-calendar-check-o:before{content:"\\f274"}.fa-industry:before{content:"\\f275"}.fa-map-pin:before{content:"\\f276"}.fa-map-signs:before{content:"\\f277"}.fa-map-o:before{content:"\\f278"}.fa-map:before{content:"\\f279"}.fa-commenting:before{content:"\\f27a"}.fa-commenting-o:before{content:"\\f27b"}.fa-houzz:before{content:"\\f27c"}.fa-vimeo:before{content:"\\f27d"}.fa-black-tie:before{content:"\\f27e"}.fa-fonticons:before{content:"\\f280"}.fa-reddit-alien:before{content:"\\f281"}.fa-edge:before{content:"\\f282"}.fa-credit-card-alt:before{content:"\\f283"}.fa-codiepie:before{content:"\\f284"}.fa-modx:before{content:"\\f285"}.fa-fort-awesome:before{content:"\\f286"}.fa-usb:before{content:"\\f287"}.fa-product-hunt:before{content:"\\f288"}.fa-mixcloud:before{content:"\\f289"}.fa-scribd:before{content:"\\f28a"}.fa-pause-circle:before{content:"\\f28b"}.fa-pause-circle-o:before{content:"\\f28c"}.fa-stop-circle:before{content:"\\f28d"}.fa-stop-circle-o:before{content:"\\f28e"}.fa-shopping-bag:before{content:"\\f290"}.fa-shopping-basket:before{content:"\\f291"}.fa-hashtag:before{content:"\\f292"}.fa-bluetooth:before{content:"\\f293"}.fa-bluetooth-b:before{content:"\\f294"}.fa-percent:before{content:"\\f295"}.fa-gitlab:before{content:"\\f296"}.fa-wpbeginner:before{content:"\\f297"}.fa-wpforms:before{content:"\\f298"}.fa-envira:before{content:"\\f299"}.fa-universal-access:before{content:"\\f29a"}.fa-wheelchair-alt:before{content:"\\f29b"}.fa-question-circle-o:before{content:"\\f29c"}.fa-blind:before{content:"\\f29d"}.fa-audio-description:before{content:"\\f29e"}.fa-volume-control-phone:before{content:"\\f2a0"}.fa-braille:before{content:"\\f2a1"}.fa-assistive-listening-systems:before{content:"\\f2a2"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:"\\f2a3"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:"\\f2a4"}.fa-glide:before{content:"\\f2a5"}.fa-glide-g:before{content:"\\f2a6"}.fa-signing:before,.fa-sign-language:before{content:"\\f2a7"}.fa-low-vision:before{content:"\\f2a8"}.fa-viadeo:before{content:"\\f2a9"}.fa-viadeo-square:before{content:"\\f2aa"}.fa-snapchat:before{content:"\\f2ab"}.fa-snapchat-ghost:before{content:"\\f2ac"}.fa-snapchat-square:before{content:"\\f2ad"}.fa-pied-piper:before{content:"\\f2ae"}.fa-first-order:before{content:"\\f2b0"}.fa-yoast:before{content:"\\f2b1"}.fa-themeisle:before{content:"\\f2b2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\\f2b3"}.fa-fa:before,.fa-font-awesome:before{content:"\\f2b4"}.fa-handshake-o:before{content:"\\f2b5"}.fa-envelope-open:before{content:"\\f2b6"}.fa-envelope-open-o:before{content:"\\f2b7"}.fa-linode:before{content:"\\f2b8"}.fa-address-book:before{content:"\\f2b9"}.fa-address-book-o:before{content:"\\f2ba"}.fa-vcard:before,.fa-address-card:before{content:"\\f2bb"}.fa-vcard-o:before,.fa-address-card-o:before{content:"\\f2bc"}.fa-user-circle:before{content:"\\f2bd"}.fa-user-circle-o:before{content:"\\f2be"}.fa-user-o:before{content:"\\f2c0"}.fa-id-badge:before{content:"\\f2c1"}.fa-drivers-license:before,.fa-id-card:before{content:"\\f2c2"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:"\\f2c3"}.fa-quora:before{content:"\\f2c4"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-telegram:before{content:"\\f2c6"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:"\\f2c7"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\f2c9"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\f2cb"}.fa-shower:before{content:"\\f2cc"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:"\\f2cd"}.fa-podcast:before{content:"\\f2ce"}.fa-window-maximize:before{content:"\\f2d0"}.fa-window-minimize:before{content:"\\f2d1"}.fa-window-restore:before{content:"\\f2d2"}.fa-times-rectangle:before,.fa-window-close:before{content:"\\f2d3"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:"\\f2d4"}.fa-bandcamp:before{content:"\\f2d5"}.fa-grav:before{content:"\\f2d6"}.fa-etsy:before{content:"\\f2d7"}.fa-imdb:before{content:"\\f2d8"}.fa-ravelry:before{content:"\\f2d9"}.fa-eercast:before{content:"\\f2da"}.fa-microchip:before{content:"\\f2db"}.fa-snowflake-o:before{content:"\\f2dc"}.fa-superpowers:before{content:"\\f2dd"}.fa-wpexplorer:before{content:"\\f2de"}.fa-meetup:before{content:"\\f2e0"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:"";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:#ffffff80}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:"";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*="display:none"]):not([style*="display: none"]){display:inline-block}.select-button{display:inline-block}.select-button.disabled{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}\n']
    }]
  }], function() {
    return [];
  }, {
    iconClass: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    buttonClick: [{
      type: Output
    }]
  });
})();
var AeToolbarSetComponent = class {
  constructor() {
  }
};
AeToolbarSetComponent.\u0275fac = function AeToolbarSetComponent_Factory(t) {
  return new (t || AeToolbarSetComponent)();
};
AeToolbarSetComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: AeToolbarSetComponent,
  selectors: [["ae-toolbar-set"]],
  ngContentSelectors: _c4,
  decls: 2,
  vars: 0,
  consts: [[1, "angular-editor-toolbar-set"]],
  template: function AeToolbarSetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275elementEnd();
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AeToolbarSetComponent, [{
    type: Component,
    args: [{
      selector: "ae-toolbar-set",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div class="angular-editor-toolbar-set">\n  <ng-content></ng-content>\n</div>\n',
      styles: [""]
    }]
  }], function() {
    return [];
  }, null);
})();
var AngularEditorModule = class {
};
AngularEditorModule.\u0275fac = function AngularEditorModule_Factory(t) {
  return new (t || AngularEditorModule)();
};
AngularEditorModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: AngularEditorModule
});
AngularEditorModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [[CommonModule, FormsModule, ReactiveFormsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularEditorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent, AeButtonComponent, AeToolbarSetComponent],
      exports: [AngularEditorComponent, AngularEditorToolbarComponent, AeButtonComponent, AeToolbarSetComponent]
    }]
  }], null, null);
})();

// src/app/admin/dashboard/post/createpost/createpost.component.ts
function CreatepostComponent_label_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Select post category");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u092A\u094B\u0938\u094D\u091F \u0915\u093E \u0915\u0947\u091F\u0947\u0917\u0930\u0940 \u091A\u0941\u0928\u093F\u090F?");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Select Language");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u092D\u093E\u0937\u093E \u091A\u0941\u0928\u0947");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Post Title ");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u0905\u092A\u0928\u093E \u092A\u094B\u0938\u094D\u091F \u0915\u093E \u091F\u093E\u0907\u091F\u0932 \u0930\u0916\u093F\u090F?");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const _r8 = \u0275\u0275reference(78);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1("Write the description of the title in 160 = ", _r8.value.length, " characters?");
  }
}
function CreatepostComponent_label_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const _r8 = \u0275\u0275reference(78);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1("\u091F\u093E\u0907\u091F\u0932 \u0915\u093E \u0921\u093F\u0938\u094D\u0915\u094D\u0930\u093F\u092A\u094D\u0936\u0928 160 = ", _r8.value.length, " \u0905\u0915\u094D\u0937\u0930 \u092E\u0947\u0902 \u0932\u093F\u0916\u0947?");
  }
}
function CreatepostComponent_label_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Write 3 or 4 keywords related to your title in about 160 characters");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "3 \u092F\u093E 4 \u0915\u0940\u0935\u0930\u094D\u0921\u094D\u0938 \u0905\u092A\u0928\u0947 \u091F\u093E\u0907\u091F\u0932 \u0938\u0947 \u0938\u0902\u092C\u0902\u0927\u093F\u0924 160 \u0905\u0915\u094D\u0937\u0930 \u092E\u0947\u0902 \u0932\u093F\u0916\u0947?");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "The link of the post [ *$/?<>& space ] cannot be given, the link of the post should only be similar to its title like: ");
    \u0275\u0275elementStart(2, "span", 68);
    \u0275\u0275text(3, "what-is-website");
    \u0275\u0275elementEnd()();
  }
}
function CreatepostComponent_label_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u092A\u094B\u0938\u094D\u091F \u0915\u093E \u0932\u093F\u0902\u0915 [ *$/?>& \u0938\u094D\u092A\u0947\u0938 ] \u0928\u0939\u0940\u0902 \u0926\u0947 \u0938\u0915\u0924\u0947 \u0939\u0948, \u092A\u094B\u0938\u094D\u091F \u0915\u093E \u0932\u093F\u0902\u0915 \u0915\u0947\u0935\u0932 \u0905\u092A\u0928\u0947 \u091F\u093E\u0907\u091F\u0932 \u0938\u0947 \u092E\u093F\u0932\u0924\u093E \u091C\u0941\u0932\u0924\u093E \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F \u091C\u0948\u0938\u0947- ");
    \u0275\u0275elementStart(2, "span", 68);
    \u0275\u0275text(3, " \u0935\u0947\u092C\u0938\u093E\u0907\u091F-\u0915\u094D\u092F\u093E-\u0939\u0948");
    \u0275\u0275elementEnd()();
  }
}
function CreatepostComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 69);
    \u0275\u0275text(2, "Follow : Demo Link Title : word-word-word-word : what-is-computer");
    \u0275\u0275elementEnd()();
  }
}
function CreatepostComponent_label_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Select post headline image?");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u092A\u094B\u0938\u094D\u091F \u0939\u0948\u0921\u0932\u093E\u0907\u0928 \u0907\u092E\u0947\u091C \u091A\u0941\u0928\u093F\u090F?");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Write post description and share related post link");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u092A\u094B\u0938\u094D\u091F \u0921\u093F\u0938\u094D\u0915\u094D\u0930\u093F\u092A\u094D\u0936\u0928 \u0932\u093F\u0916\u0947 \u0914\u0930 \u0930\u093F\u0932\u0947\u091F\u0947\u0921 \u092A\u094B\u0938\u094D\u091F \u0932\u093F\u0902\u0915 \u0936\u0947\u092F\u0930 \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0964 ");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 68);
    \u0275\u0275text(1, " Write related questions and answers from your post? You can take idea from google search engine.");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 68);
    \u0275\u0275text(1, " \u0905\u092A\u0928\u0947 \u092A\u094B\u0938\u094D\u091F \u0938\u0947 \u0930\u093F\u0932\u0947\u091F\u0947\u0921 \u0915\u094D\u0935\u0947\u0936\u094D\u091A\u0928 \u0914\u0930 \u0906\u0902\u0938\u0930 \u0932\u093F\u0916\u0947? \u0906\u092A \u0917\u0942\u0917\u0932 \u0938\u0930\u094D\u091A \u0907\u0902\u091C\u0928 \u0938\u0947 \u0906\u0908\u0921\u093F\u092F\u093E \u0932\u0947 \u0938\u0915\u0924\u0947 \u0939\u0948!");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Question No. 1");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u0915\u094D\u0935\u0947\u0936\u094D\u091A\u0928 \u0928\u0902\u092C\u0930 1");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Answer No. 1");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u0906\u0902\u0938\u0930 \u0928\u0902\u092C\u0930 1");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Question No. 2");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u0915\u094D\u0935\u0947\u0936\u094D\u091A\u0928 \u0928\u0902\u092C\u0930 2");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Answer No. 2");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u0906\u0902\u0938\u0930 \u0928\u0902\u092C\u0930 2");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Question No.3");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u0915\u094D\u0935\u0947\u0936\u094D\u091A\u0928 \u0928\u0902\u092C\u0930 3");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Answer No. 3");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u0906\u0902\u0938\u0930 \u0928\u0902\u092C\u0930 3");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Enter Captch");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u0915\u0948\u092A\u094D\u091A\u093E \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902 ");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Author Name");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u0911\u0925\u0930 \u0928\u093E\u092E ");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "Author Email");
    \u0275\u0275elementEnd();
  }
}
function CreatepostComponent_label_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 67);
    \u0275\u0275text(1, "\u0911\u0925\u0930 \u0908\u092E\u0947\u0932 ");
    \u0275\u0275elementEnd();
  }
}
var _CreatepostComponent = class _CreatepostComponent {
  constructor(http, formBuilder, router) {
    this.http = http;
    this.formBuilder = formBuilder;
    this.router = router;
    this.user = sessionStorage.getItem("authorized")?.toString();
    this.logiSuccess = sessionStorage.getItem("Login successful")?.toString();
    this.authorizedUserId = sessionStorage.getItem("authorizedUserId")?.toString();
    this.post_title = "";
    this.language = "english";
    this.postDataArray = [];
    this.postDataUrl = "https://hindidterm.com/demo/post/read.php";
    this.postArticle = new FormGroup({
      lang_cat: new FormControl("", [Validators.required]),
      post_title: new FormControl("", [Validators.required]),
      post_meta_desc: new FormControl("", [Validators.required]),
      post_meta_keyword: new FormControl("", [Validators.required]),
      post_url: new FormControl("", [Validators.required]),
      post_cat: new FormControl("", [Validators.required]),
      post_img: new FormControl("", [Validators.required]),
      post_desc: new FormControl("", [Validators.required]),
      post_question1: new FormControl("", [Validators.required]),
      post_answer1: new FormControl("", [Validators.required]),
      post_question2: new FormControl("", [Validators.required]),
      post_answer2: new FormControl("", [Validators.required]),
      post_question3: new FormControl("", [Validators.required]),
      post_answer3: new FormControl("", [Validators.required]),
      post_author: new FormControl({ value: this.author_name(), disabled: true }),
      user_email: new FormControl({ value: this.author_email(), disabled: true }),
      //post_day: new FormControl({value:this.getFormattedDate(),disabled:true}),
      fileSource: new FormControl("", [Validators.required]),
      fileSource2: new FormControl("")
    });
    this.postUrl = "https://hinditerm.com/demo/post/post.php";
    this.htmlContent = "";
    this.config = {
      editable: true,
      spellcheck: true,
      height: "15rem",
      minHeight: "5rem",
      placeholder: "Enter text here...",
      translate: "no",
      uploadUrl: "",
      //upload:(file: File) => { console.log('file', file)
      //},
      uploadWithCredentials: true,
      sanitize: false,
      enableToolbar: true,
      showToolbar: true,
      defaultParagraphSeparator: "p",
      defaultFontName: "",
      defaultFontSize: "",
      fonts: [
        { class: "arial", name: "Arial" },
        { class: "times-new-roman", name: "Times New Roman" },
        { class: "calibri", name: "Calibri" },
        { class: "comic-sans-ms", name: "Comic Sans MS" }
      ],
      customClasses: [
        {
          name: "quote",
          class: "quote"
        },
        {
          name: "redText",
          class: "redText"
        },
        {
          name: "titleText",
          class: "titleText",
          tag: "h1"
        }
      ]
    };
    this.http.get(this.postDataUrl, { responseType: "json" }).subscribe((data) => {
      this.postDataArray = data;
    });
  }
  startRefresh() {
    $.get("https://hindidterm.com/demo/post/sitemap-generate.php", function(data) {
      $("#viewHere").html(data);
    });
    const targetedPageUrl = "https://hindidterm.com/demo/post/sitemap.xml";
    const s = document.getElementById("Mymodal");
    s?.setAttribute("style", "display:block;");
    console.log("geet element", s);
    const el = document.createElement("div");
    let ifr = el.innerHTML += `<iframe src='${targetedPageUrl}' width='100%' style='height:300px;overflow:auto;'></iframe>`;
    document.getElementById("datashow")?.appendChild(el);
    setTimeout(() => {
      s?.removeAttribute("style");
    }, 3e3);
  }
  onInputPost() {
    let postValue = this.postArticle.get("post_title").value;
    let postConvertedValue = postValue.split(" ").join("-").toLowerCase().substr(0, 30);
    this.postArticle.get("post_url").setValue(postConvertedValue);
  }
  author_email() {
  }
  author_name() {
  }
  createCaptcha() {
    let c = document.getElementById("captcha");
    c.innerHTML = "";
    var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
      var index = Math.floor(Math.random() * charsArray.length + 1);
      if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index]);
      else
        i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    let ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    this.code = captcha.join("");
    let d = document.getElementById("captcha");
    d.appendChild(canv);
  }
  //  validateCaptcha() {
  // if (a.value == this.code) {
  //   return alert("Valid Captcha");
  //   exit();
  // }else{
  //   return alert("Invalid Captcha. try Again");
  //   // this.createCaptcha();
  // }
  // }
  onChange(event) {
    this.language = event.value;
  }
  get ctrl() {
    return this.postArticle.controls;
  }
  onSelectedFile(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img1 = event.target.files[0];
      this.postArticle.get("post_img").setValue(img1);
    }
  }
  onSelectedHeadline(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.postArticle.get("fileSource").setValue(file);
    }
  }
  loadImage(webImgePath) {
    const headers = new Headers();
    headers.append("Access-Control-Allow-Headers", "Content-Type");
    headers.append("Access-Control-Allow-Methods", "GET");
    headers.append("Access-Control-Allow-Origin", "*");
    const self = this;
    this.http.get("https://hinditerm.com/demo/post/" + webImgePath, { responseType: "blob" }).subscribe((res) => {
      var file = new File([res], webImgePath, {
        type: res.type
      });
      this.blobData = file;
      this.image2Base64(this.blobData);
      console.log(this.image2Base64(this.blobData));
    });
  }
  image2Base64(imageData) {
    var reader = new FileReader();
    reader.readAsDataURL(imageData);
    reader.addEventListener("loadend", () => {
      this.base64Img = reader.result;
      console.log(this.base64Img);
    });
  }
  ngOnInit() {
    if (this.logiSuccess.length == 0) {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
    if (this.user == null || this.notAuthorized == "Not Authorized User" || this.user.length == 0 || this.logiSuccess.length == 0 || this.logiSuccess !== "Login successful") {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
    if (this.postDataArray.length == 1) {
    }
    this.createCaptcha();
    let formData = new FormData();
    formData.append("user_key", this.user);
    formData.append("authorizedUserId", this.authorizedUserId);
    this.http.post("https://hinditerm.com/demo/post/user-read.php", formData).subscribe((res) => {
      console.log(res.message);
      if (res.message == "Not Authorized User" || res.message == "Login failed" || res.message == "Student Record does not exist") {
        sessionStorage.clear();
        this.router.navigate(["/login"]);
      } else {
        this.postDataArray = res.data[0];
        console.log("update profile data is here", this.postDataArray);
      }
    });
  }
  postArticleSubmit() {
    let a = document.getElementById("cpatchaTextBox");
    let aValue = a.value;
    let b = this.code;
    const explicitWords = /sex|sexy|xxx|porn|shemale|escort|blue|guns|bumbs|abuse|nuditity|xvideos|xvideo|naked|fucks baby|lesbian|shemale|gay|escort/i;
    if (this.ctrl.lang_cat.valid == false) {
      return alert("Post Language is required");
    } else if (this.ctrl.post_title.valid == false) {
      return alert("Post Title is required");
    } else if (this.ctrl.post_meta_desc.valid == false) {
      return alert("Post Meta Description is required");
    } else if (this.ctrl.post_meta_keyword.valid == false) {
      return alert("Post Meta Keyword is required");
    } else if (this.ctrl.post_meta_desc.valid == false) {
      return alert("Post Meta Description is required");
    } else if (this.ctrl.post_url.valid == false) {
      return alert("Post Url is required");
    } else if (this.ctrl.post_cat.valid == false) {
      return alert("Post Category is required");
    } else if (this.ctrl.post_desc.valid == false) {
      return alert("Post Description is required");
    } else if (this.ctrl.post_question1.valid == false) {
      return alert("Post Question 1 is required");
    } else if (this.ctrl.post_answer1.valid == false) {
      return alert("Post Answer 1 is required");
    } else if (this.ctrl.post_question2.valid == false) {
      return alert("Post Question 2 is required");
    } else if (this.ctrl.post_answer2.valid == false) {
      return alert("Post Answer 2 is required");
    } else if (this.ctrl.post_question3.valid == false) {
      return alert("Post Question 3 is required");
    } else if (this.ctrl.post_answer3.valid == false) {
      return alert("Post Answer 3 is required");
    } else if (aValue !== b) {
      return alert("Enter The Right Captch!");
    } else {
      const formData = new FormData();
      formData.append("user_key", this.user);
      formData.append("authorizedUserId", this.authorizedUserId);
      formData.append("lang_cat", this.postArticle.controls["lang_cat"].value);
      formData.append("post_title", this.postArticle.controls["post_title"].value);
      formData.append("post_meta_desc", this.postArticle.controls["post_meta_desc"].value);
      formData.append("post_meta_keyword", this.postArticle.controls["post_meta_keyword"].value);
      formData.append("post_url", this.postArticle.controls["post_url"].value);
      formData.append("post_cat", this.postArticle.controls["post_cat"].value);
      formData.append("img1", this.postArticle.get("post_img").value);
      formData.append("post_desc", this.postArticle.controls["post_desc"].value);
      formData.append("post_question1", this.postArticle.controls["post_question1"].value);
      formData.append("post_answer1", this.postArticle.controls["post_answer1"].value);
      formData.append("post_question2", this.postArticle.controls["post_question2"].value);
      formData.append("post_answer2", this.postArticle.controls["post_answer2"].value);
      formData.append("post_question3", this.postArticle.controls["post_question3"].value);
      formData.append("post_answer3", this.postArticle.controls["post_answer3"].value);
      formData.append("post_author", this.postArticle.controls["post_author"].value);
      formData.append("user_email", this.postArticle.controls["user_email"].value);
      this.http.post(this.postUrl, formData).subscribe((data) => {
        if (data) {
          alert("thanks your post successfully submitted !");
          this.startRefresh();
        } else {
          console.log("data is not published");
        }
      });
    }
  }
};
_CreatepostComponent.\u0275fac = function CreatepostComponent_Factory(t) {
  return new (t || _CreatepostComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
};
_CreatepostComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatepostComponent, selectors: [["app-createpost"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 156, vars: 43, consts: [[1, "card"], [1, "card-header"], [1, "text-uppercase"], [1, "card-body"], ["method", "post", "enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "text-black"], [1, "row"], [1, "col-md-6"], ["class", "form-label", 4, "ngIf"], ["formControlName", "post_cat", "name", "type", 1, "form-control"], ["value", "", "disabled", "", "selected", "selected"], ["value", "news"], ["value", "business"], ["value", "technology"], ["value", "blog"], ["value", "entertainment"], ["value", "sports"], ["value", "science"], ["value", "health"], ["value", "education"], ["value", "job"], ["value", "politics"], ["value", "market"], ["value", "meditation"], ["value", "lifestyle"], ["value", "food"], ["value", "software"], ["value", "website"], ["value", "game"], ["value", "moviesongs"], [1, "form-outline"], ["for", "form3Example1m", 1, "form-label"], ["formControlName", "lang_cat", 1, "form-control", 3, "change"], ["value", "english"], ["value", "hindi"], [1, "col-md-12"], ["maxlength", "70", "type", "text", "formControlName", "post_title", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["maxlength", "170", "type", "text", "formControlName", "post_meta_desc", 1, "form-control", 3, "keyup"], ["box2", ""], ["type", "text", "formControlName", "post_meta_keyword", 1, "form-control"], ["type", "text", "formControlName", "post_url", "pattern", "^\\w+(?:[]\\w+)*(?:\\-\\w+(?:[]\\w+)*)*$", 1, "form-control"], [4, "ngIf"], ["type", "file", "formControlName", "post_img", "accept", ".png", 1, "form-control", 3, "change"], ["width", "200", 1, "mt-2", "img-rounded", 3, "src"], ["formControlName", "post_desc", 3, "config"], ["class", "text-bold", 4, "ngIf"], ["type", "text", "formControlName", "post_question1", 1, "form-control"], ["type", "text", "formControlName", "post_answer1", 1, "form-control"], ["type", "text", "formControlName", "post_question2", 1, "form-control"], ["type", "text", "formControlName", "post_answer2", 1, "form-control"], ["type", "text", "formControlName", "post_question3", 1, "form-control"], ["type", "text", "formControlName", "post_answer3", 1, "form-control"], ["id", "captcha"], ["type", "text", "id", "cpatchaTextBox", 1, "form-control"], [1, "form-outline", "hidden-sm", "hidden-xs", "hidden-md", "hidden-lg"], ["type", "text", "formControlName", "post_author", 1, "form-control", 3, "value"], ["type", "email", "formControlName", "user_email", 1, "form-control", 3, "value"], [1, "d-flex", "justify-content-end", "pt-3", "align-items-center"], ["type", "button", "routerLink", "../postread", 1, "text-success", "btn-lg", "ms-2"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "ms-2"], ["id", "Mymodal", 1, "modal", "fade", "in", "show"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["data-bs-dismiss", "modal", 1, "btn", "btn-close", "close"], ["id", "datashow"], [2, "color", "green", 3, "click"], [1, "form-label"], [1, "text-bold"], [1, "text-danger"]], template: function CreatepostComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Welcome to Post Area");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "form", 4);
    \u0275\u0275listener("ngSubmit", function CreatepostComponent_Template_form_ngSubmit_5_listener() {
      return ctx.postArticleSubmit();
    });
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 6)(9, "div", 7);
    \u0275\u0275template(10, CreatepostComponent_label_10_Template, 2, 0, "label", 8)(11, CreatepostComponent_label_11_Template, 2, 0, "label", 8);
    \u0275\u0275elementStart(12, "div")(13, "select", 9)(14, "option", 10);
    \u0275\u0275text(15, "-- Select Event Type --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 11);
    \u0275\u0275text(17, "News");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 12);
    \u0275\u0275text(19, "Business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 13);
    \u0275\u0275text(21, "Technology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 14);
    \u0275\u0275text(23, "Blog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 15);
    \u0275\u0275text(25, "Entertainment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 16);
    \u0275\u0275text(27, "Sports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 17);
    \u0275\u0275text(29, "Science");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 18);
    \u0275\u0275text(31, "Health");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 19);
    \u0275\u0275text(33, "Education");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 20);
    \u0275\u0275text(35, "Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 21);
    \u0275\u0275text(37, "Politics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 22);
    \u0275\u0275text(39, "Market");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 23);
    \u0275\u0275text(41, "Meditation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 24);
    \u0275\u0275text(43, "LifeStyle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 25);
    \u0275\u0275text(45, "Food");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 26);
    \u0275\u0275text(47, "Software");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 27);
    \u0275\u0275text(49, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 28);
    \u0275\u0275text(51, "Game");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 29);
    \u0275\u0275text(53, "Top Movie & Song");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 25);
    \u0275\u0275text(55, "Food");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "div", 7)(57, "div", 30);
    \u0275\u0275template(58, CreatepostComponent_label_58_Template, 2, 0, "label", 8)(59, CreatepostComponent_label_59_Template, 2, 0, "label", 8);
    \u0275\u0275elementStart(60, "label", 31);
    \u0275\u0275text(61, "Select Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "select", 32);
    \u0275\u0275listener("change", function CreatepostComponent_Template_select_change_62_listener($event) {
      return ctx.onChange($event.target);
    });
    \u0275\u0275elementStart(63, "option", 10);
    \u0275\u0275text(64, "-- Select Event Type --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "option", 33);
    \u0275\u0275text(66, "English");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "option", 34);
    \u0275\u0275text(68, "Hindi (\u0939\u093F\u0902\u0926\u0940)");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(69, "div", 35)(70, "div", 30);
    \u0275\u0275template(71, CreatepostComponent_label_71_Template, 2, 0, "label", 8)(72, CreatepostComponent_label_72_Template, 2, 0, "label", 8);
    \u0275\u0275elementStart(73, "input", 36);
    \u0275\u0275listener("keyup", function CreatepostComponent_Template_input_keyup_73_listener() {
      return ctx.onInputPost();
    })("ngModelChange", function CreatepostComponent_Template_input_ngModelChange_73_listener($event) {
      return ctx.post_title = $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 30);
    \u0275\u0275template(75, CreatepostComponent_label_75_Template, 2, 1, "label", 8)(76, CreatepostComponent_label_76_Template, 2, 1, "label", 8);
    \u0275\u0275elementStart(77, "input", 37, 38);
    \u0275\u0275listener("keyup", function CreatepostComponent_Template_input_keyup_77_listener() {
      return 0;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 35)(80, "div", 30);
    \u0275\u0275template(81, CreatepostComponent_label_81_Template, 2, 0, "label", 8)(82, CreatepostComponent_label_82_Template, 2, 0, "label", 8);
    \u0275\u0275element(83, "input", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 35)(85, "div", 30);
    \u0275\u0275template(86, CreatepostComponent_label_86_Template, 4, 0, "label", 8)(87, CreatepostComponent_label_87_Template, 4, 0, "label", 8);
    \u0275\u0275element(88, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(89, CreatepostComponent_div_89_Template, 3, 0, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 6)(91, "div", 35)(92, "div", 30);
    \u0275\u0275template(93, CreatepostComponent_label_93_Template, 2, 0, "label", 8)(94, CreatepostComponent_label_94_Template, 2, 0, "label", 8);
    \u0275\u0275elementStart(95, "input", 42);
    \u0275\u0275listener("change", function CreatepostComponent_Template_input_change_95_listener($event) {
      return ctx.onSelectedFile($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(96, "img", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(97, "div", 30);
    \u0275\u0275template(98, CreatepostComponent_label_98_Template, 2, 0, "label", 8)(99, CreatepostComponent_label_99_Template, 2, 0, "label", 8);
    \u0275\u0275element(100, "angular-editor", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 30);
    \u0275\u0275template(102, CreatepostComponent_label_102_Template, 2, 0, "label", 45)(103, CreatepostComponent_label_103_Template, 2, 0, "label", 45);
    \u0275\u0275element(104, "br");
    \u0275\u0275template(105, CreatepostComponent_label_105_Template, 2, 0, "label", 8)(106, CreatepostComponent_label_106_Template, 2, 0, "label", 8);
    \u0275\u0275element(107, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div", 30);
    \u0275\u0275template(109, CreatepostComponent_label_109_Template, 2, 0, "label", 8)(110, CreatepostComponent_label_110_Template, 2, 0, "label", 8);
    \u0275\u0275element(111, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 30);
    \u0275\u0275template(113, CreatepostComponent_label_113_Template, 2, 0, "label", 8)(114, CreatepostComponent_label_114_Template, 2, 0, "label", 8);
    \u0275\u0275element(115, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 30);
    \u0275\u0275template(117, CreatepostComponent_label_117_Template, 2, 0, "label", 8)(118, CreatepostComponent_label_118_Template, 2, 0, "label", 8);
    \u0275\u0275element(119, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 30);
    \u0275\u0275template(121, CreatepostComponent_label_121_Template, 2, 0, "label", 8)(122, CreatepostComponent_label_122_Template, 2, 0, "label", 8);
    \u0275\u0275element(123, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div", 30);
    \u0275\u0275template(125, CreatepostComponent_label_125_Template, 2, 0, "label", 8)(126, CreatepostComponent_label_126_Template, 2, 0, "label", 8);
    \u0275\u0275element(127, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275element(128, "div", 52);
    \u0275\u0275elementStart(129, "div", 30);
    \u0275\u0275template(130, CreatepostComponent_label_130_Template, 2, 0, "label", 8)(131, CreatepostComponent_label_131_Template, 2, 0, "label", 8);
    \u0275\u0275element(132, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "div", 54);
    \u0275\u0275template(134, CreatepostComponent_label_134_Template, 2, 0, "label", 8)(135, CreatepostComponent_label_135_Template, 2, 0, "label", 8);
    \u0275\u0275element(136, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "div", 54);
    \u0275\u0275template(138, CreatepostComponent_label_138_Template, 2, 0, "label", 8)(139, CreatepostComponent_label_139_Template, 2, 0, "label", 8);
    \u0275\u0275element(140, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "div", 57)(142, "a", 58);
    \u0275\u0275text(143, "See Your Post");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "button", 59);
    \u0275\u0275text(145, "Post Your Article");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(146, "div", 60)(147, "div", 61)(148, "div", 62)(149, "div", 63);
    \u0275\u0275element(150, "button", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "div", 65)(152, "h2");
    \u0275\u0275text(153, "hi");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(154, "a", 66);
    \u0275\u0275listener("click", function CreatepostComponent_Template_a_click_154_listener() {
      return ctx.startRefresh();
    });
    \u0275\u0275text(155, "Get Pop");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.postArticle);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(47);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngModel", ctx.post_title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_14_0 = ctx.postArticle.get("post_url")) == null ? null : tmp_14_0["errors"] == null ? null : tmp_14_0["errors"]["pattern"]);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx.base64Img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(1);
    \u0275\u0275property("config", ctx.config);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate("value", ctx.author_name());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.language == "english");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.language == "hindi");
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate("value", ctx.author_email());
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, PatternValidator, FormGroupDirective, FormControlName, NgIf, HttpClientModule, CommonModule, RouterLink, AngularEditorModule, AngularEditorComponent], styles: ["\n\n.hidden-lg[_ngcontent-%COMP%] {\n  display: none;\n}\n.angular-editor-toolbar[_ngcontent-%COMP%]   .ql-video[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .ql-image[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQvcG9zdC9jcmVhdGVwb3N0L2NyZWF0ZXBvc3QuY29tcG9uZW50LmNzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLmhpZGRlbi1sZ3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLnFsLXZpZGVvLFxuLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLnFsLWltYWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsQ0FBQztBQUNHLFdBQVM7QUFDYjtBQUNBLENBQUMsdUJBQXVCLENBQUM7QUFDekIsQ0FEQyx1QkFDdUIsQ0FBQztBQUN2QixXQUFTO0FBQ1g7IiwKICAibmFtZXMiOiBbXQp9Cg== */"] });
var CreatepostComponent = _CreatepostComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatepostComponent, { className: "CreatepostComponent", filePath: "src\\app\\admin\\dashboard\\post\\createpost\\createpost.component.ts", lineNumber: 20 });
})();

// src/app/admin/dashboard/post/post.component.ts
function PostComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275listener("click", function PostComponent_tr_49_Template_td_click_1_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r4);
      const post_r2 = restoredCtx.$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.ShowDataClick(post_r2.id));
    });
    \u0275\u0275text(2, "\uF441");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275element(22, "img", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "p");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "p");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "p");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td")(33, "p");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "td")(36, "p");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "td")(39, "p");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "td")(42, "p");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "td")(45, "p");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "td")(48, "p");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "td")(51, "button", 22);
    \u0275\u0275listener("click", function PostComponent_tr_49_Template_button_click_51_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r4);
      const post_r2 = restoredCtx.$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.redirectToSpecificPost(post_r2));
    });
    \u0275\u0275text(52, "Update");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "td", 23);
    \u0275\u0275listener("click", function PostComponent_tr_49_Template_td_click_53_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r4);
      const post_r2 = restoredCtx.$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.deleteDataClick(post_r2.id));
    });
    \u0275\u0275text(54, "Delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const post_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(post_r2.post_title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.post_meta_desc.substr(0, 40));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.post_meta_keyword.substr(0, 40));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.post_url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.post_cat);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.post_headline.substr(0, 40));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "https://hinditerm.com/demo/post/", post_r2.post_img, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.post_desc.substr(0, 40));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.post_question1.substr(0, 40));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.post_answer1.substr(0, 40));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.post_question2.substr(0, 40));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.post_answer2.substr(0, 40));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.post_question3.substr(0, 40));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.post_answer3.substr(0, 40));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.post_autdor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.author_email);
  }
}
function PostComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275element(16, "img", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.post_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.post_meta_desc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.post_meta_keyword);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.post_url);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.post_cat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.post_headline);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.post_headline);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "https://hinditerm.com/demo/post/", item_r7.post_img, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.post_desc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.post_question1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.post_answer1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.post_question2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.post_answer2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.post_question3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.post_answer3);
  }
}
var _PostComponent = class _PostComponent {
  customHash(value) {
    let hash = 0;
    if (value.length === 0)
      return hash.toString();
    for (let i = 0; i < value.length; i++) {
      const char = value.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash.toString();
  }
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.onePostDataArray = [];
    this.user = sessionStorage.getItem("authorized")?.toString();
    this.logiSuccess = sessionStorage.getItem("Login successful")?.toString();
    this.authorizedUserId = sessionStorage.getItem("authorizedUserId")?.toString();
    this.postReadUrl = "https://hinditerm.com/demo/post/read.php";
    this.postArrayData = [];
    this.filteredData = [];
  }
  ngOnInit() {
    console.log("login is =>", this.logiSuccess);
    if (this.logiSuccess.length == 0) {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
    if (this.user == null || this.notAuthorized == "Not Authorized User" || this.user.length == 0 || this.logiSuccess.length == 0 || this.logiSuccess !== "Login successful") {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
    if (this.postArrayData.length === 1) {
      this.router.navigate(["/admin"]);
    }
    let formData = new FormData();
    formData.append("user_key", this.user);
    formData.append("authorizedUserId", this.authorizedUserId);
    this.http.post("https://hinditerm.com/demo/post/admin_post_read.php", formData).subscribe((res) => {
      console.log(res.message);
      if (res.message == "Not Authorized User" || res.message == "Login failed" || res.message == "Student Record does not exist") {
        sessionStorage.clear();
        this.router.navigate(["/login"]);
      } else {
        this.postArrayData = res.data;
        this.filteredData = this.postArrayData;
        console.log(this.postArrayData);
      }
    });
  }
  // refreshData(){
  // this.http.get(this.postReadUrl,{responseType:'json'}).subscribe((data:any)=>{
  // let usr:any=sessionStorage.getItem("user");
  // let AuthorEmailExtract =JSON.parse(usr);
  // let authorEmail =AuthorEmailExtract.user_email
  // console.log(authorEmail);
  // To extract data matching from the email id
  //this.postArrayData  = data.filter((postArrayUsingWebCate:any)=>postArrayUsingWebCate.user_key==this.authorizedUserId)
  // })
  //}
  deleteDataClick(id) {
    var strconfirm = confirm("Are you sure you want to delete?");
    if (strconfirm == true) {
      this.deleteDataS(id).subscribe((data) => {
        alert("one data deleted which id is" + id);
      });
    }
  }
  deleteDataS(id) {
    let getUrl = "https://hinditerm.com/demo/post/delete.php";
    const params = new HttpParams().set("id", id.toString());
    return this.http.delete(`${getUrl}`, { params, responseType: "json" });
  }
  OneDataShow(id) {
    let getUrl = "https://hinditerm.com/demo/post/admin-single-data.php";
    const params = new HttpParams().set("id", id.toString());
    return this.http.get(`${getUrl}`, { params, responseType: "json" });
  }
  ShowDataClick(id) {
    this.OneDataShow(id).subscribe((data) => {
      this.onePostDataArray = data;
    });
  }
  redirectToSpecificPost(item) {
    let itemId = item.post_id;
    let encryptedId = btoa(itemId);
    console.log(encryptedId, typeof itemId);
    this.router.navigateByUrl(`admin/updatepost/${encryptedId}`);
  }
  filterData(event) {
    let searchTerm = event.target.value;
    this.filteredData = this.postArrayData.filter((item) => item.post_title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
};
_PostComponent.\u0275fac = function PostComponent_Factory(t) {
  return new (t || _PostComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_PostComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PostComponent, selectors: [["app-post"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 64, vars: 2, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], ["type", "text", "placeholder", "Search by Name", 1, "border", "form-control", "shadow", 3, "keyup"], [1, "table-one"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "bg-dark", "text-white"], [2, "width", "40px"], [4, "ngFor", "ngForOf"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 2, "width", "40px", 3, "click"], ["alt", "", "width", "50", 3, "src"], [1, "btn", "btn-info", 3, "click"], [3, "click"], ["width", "100", 3, "src"]], template: function PostComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
    \u0275\u0275text(3, "All Post ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 2)(5, "input", 3);
    \u0275\u0275listener("keyup", function PostComponent_Template_input_keyup_5_listener($event) {
      return ctx.filterData($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "table", 6)(9, "tbody")(10, "tr", 7)(11, "td", 8);
    \u0275\u0275text(12, "Id");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14, " Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16, " Meta Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18, " Meta Keywords");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20, " Url");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22, " Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24, " Headline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26, " Img");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28, " Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30, " Question 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32, " Answer 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34, " Question 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36, " Answer 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td");
    \u0275\u0275text(38, " Question 3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td");
    \u0275\u0275text(40, " Answer 3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td");
    \u0275\u0275text(42, " Author");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td");
    \u0275\u0275text(44, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46, "Update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "td");
    \u0275\u0275text(48, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, PostComponent_tr_49_Template, 55, 16, "tr", 9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 10)(51, "div", 11)(52, "div", 12)(53, "div", 13)(54, "h5", 14);
    \u0275\u0275text(55, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "button", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 16);
    \u0275\u0275template(58, PostComponent_div_58_Template, 31, 15, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 17)(60, "button", 18);
    \u0275\u0275text(61, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 19);
    \u0275\u0275text(63, "Save changes");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(49);
    \u0275\u0275property("ngForOf", ctx.filteredData);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx.onePostDataArray);
  }
}, dependencies: [ReactiveFormsModule, HttpClientModule, CommonModule, NgForOf], styles: ["\n\n.table-one[_ngcontent-%COMP%] {\n  overflow-x: scroll;\n  height: 400px;\n}\n.table-one[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.table-one[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #a3ddda;\n}\n.table-one[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 200px;\n  border-bottom: 1px solid #e1e1e1;\n  vertical-align: bottom;\n  padding: 8px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n  position: sticky;\n  top: 0;\n  background: #000;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIC50YWJsZV9kYXRhIHRhYmxle1xuICAgIHdpZHRoOiAzMDAwcHg7XG59XG4udGFibGVfZGF0YXtcbiAgICBvdmVyZmxvdzpzY3JvbGw7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn0gKi9cbi50YWJsZS1vbmV7XG4gICAgb3ZlcmZsb3cteDpzY3JvbGw7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICAvKiB3aWR0aDo0MDAwcHg7ICovXG59XG4udGFibGUtb25lIHRhYmxlIHRye1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4udGFibGUtb25lIHRhYmxlIHRyOm50aC1jaGlsZChldmVuKXtcbiAgICBiYWNrZ3JvdW5kOiNhM2RkZGE7XG59XG4udGFibGUtb25lIHRhYmxlIHRyIHRke1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cbnRhYmxlIHRyOmZpcnN0LWNoaWxke1xuICAgIHBvc2l0aW9uOnN0aWNreTtcbiAgICB0b3A6MDtcbiAgICBiYWNrZ3JvdW5kOiMwMDA7XG4gICAgY29sb3I6I2ZmZjtcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBT0EsQ0FBQztBQUNHLGNBQVc7QUFDWCxVQUFRO0FBRVo7QUFDQSxDQUxDLFVBS1UsTUFBTTtBQUNiLFdBQVM7QUFDYjtBQUNBLENBUkMsVUFRVSxNQUFNLEVBQUU7QUFDZixjQUFXO0FBQ2Y7QUFDQSxDQVhDLFVBV1UsTUFBTSxHQUFHO0FBQ2hCLFNBQU87QUFDUCxpQkFBZSxJQUFJLE1BQU07QUFDekIsa0JBQWdCO0FBQ2hCLFdBQVM7QUFDYjtBQUNBLE1BQU0sRUFBRTtBQUNKLFlBQVM7QUFDVCxPQUFJO0FBQ0osY0FBVztBQUNYLFNBQU07QUFDVjsiLAogICJuYW1lcyI6IFtdCn0K */"] });
var PostComponent = _PostComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PostComponent, { className: "PostComponent", filePath: "src\\app\\admin\\dashboard\\post\\post.component.ts", lineNumber: 18 });
})();

// src/app/admin/dashboard/post/updatepost/updatepost.component.ts
var _UpdatepostComponent = class _UpdatepostComponent {
  constructor(routes2, router, http) {
    this.routes = routes2;
    this.router = router;
    this.http = http;
    this.post_title = "";
    this.language = "english";
    this.postDataUrl = "https://hinditerm.com/demo/post/read.php";
    this.user = sessionStorage.getItem("authorized")?.toString();
    this.logiSuccess = sessionStorage.getItem("Login successful")?.toString();
    this.authorizedUserId = sessionStorage.getItem("authorizedUserId")?.toString();
    this.postDataArray = [];
    this.updateArticle = new FormGroup({
      post_title: new FormControl(""),
      post_meta_desc: new FormControl(""),
      post_meta_keyword: new FormControl(""),
      post_url: new FormControl(""),
      post_cat: new FormControl(""),
      post_img: new FormControl(""),
      post_desc: new FormControl(""),
      post_date: new FormControl(""),
      post_question1: new FormControl(""),
      post_answer1: new FormControl(""),
      post_question2: new FormControl(""),
      post_answer2: new FormControl(""),
      post_question3: new FormControl(""),
      post_answer3: new FormControl(""),
      post_author: new FormControl(""),
      fileSource: new FormControl("")
    });
    this.htmlContent = "";
    this.config = {
      editable: true,
      spellcheck: true,
      height: "15rem",
      minHeight: "5rem",
      placeholder: "Enter text here...",
      translate: "no",
      uploadUrl: "",
      //upload:(file: File) => { console.log('file', file)
      //},
      uploadWithCredentials: true,
      sanitize: false,
      enableToolbar: true,
      showToolbar: true,
      defaultParagraphSeparator: "p",
      defaultFontName: "",
      defaultFontSize: "",
      fonts: [
        { class: "arial", name: "Arial" },
        { class: "times-new-roman", name: "Times New Roman" },
        { class: "calibri", name: "Calibri" },
        { class: "comic-sans-ms", name: "Comic Sans MS" }
      ],
      customClasses: [
        {
          name: "quote",
          class: "quote"
        },
        {
          name: "redText",
          class: "redText"
        },
        {
          name: "titleText",
          class: "titleText",
          tag: "h1"
        }
      ]
    };
  }
  onSelectedFile(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img1 = event.target.files[0];
      this.blobData = img1;
      this.image2Base64(this.blobData);
    }
  }
  onSelectedHeadline(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.updateArticle.get("fileSource").setValue(file);
    }
  }
  ngOnInit() {
    this.updateArticle = new FormGroup({
      post_title: new FormControl(""),
      post_meta_desc: new FormControl(""),
      post_meta_keyword: new FormControl(""),
      post_url: new FormControl(""),
      post_cat: new FormControl(""),
      post_desc: new FormControl(""),
      post_date: new FormControl(""),
      post_question1: new FormControl(""),
      post_answer1: new FormControl(""),
      post_question2: new FormControl(""),
      post_answer2: new FormControl(""),
      post_question3: new FormControl(""),
      post_answer3: new FormControl(""),
      post_author: new FormControl(""),
      fileSource: new FormControl(""),
      post_img: new FormControl("")
    });
    if (this.logiSuccess.length == 0) {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
    if (this.user == null || this.notAuthorized == "Not Authorized User" || this.user.length == 0 || this.logiSuccess.length == 0 || this.logiSuccess !== "Login successful") {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
    let postDecryptedId = atob(this.routes.snapshot.params["id"]);
    let post_id = postDecryptedId;
    this.postDecryptedId = post_id;
    let formData1 = new FormData();
    formData1.append("user_key", this.user);
    formData1.append("authorizedUserId", this.authorizedUserId);
    formData1.append("post_id", post_id);
    this.http.post("https://hinditerm.com/demo/post/admin-single-post-read.php", formData1).subscribe((res) => {
      console.log(res.message);
      if (res.message == "Not Authorized User" || res.message == "Login failed" || res.message == "Student Record does not exist") {
        sessionStorage.clear();
        this.router.navigate(["/login"]);
      } else {
        this.postDataArray = res.data[0];
        console.log("sdfdsf", this.postDataArray);
        console.log("all data is here", this.postDataArray);
        this.loadImage(this.postDataArray.post_img);
        this.updateArticle.controls["post_title"].setValue(this.postDataArray.post_title);
        this.updateArticle.controls["post_meta_desc"].setValue(this.postDataArray.post_meta_desc);
        this.updateArticle.controls["post_meta_keyword"].setValue(this.postDataArray.post_meta_keyword);
        this.updateArticle.controls["post_url"].setValue(this.postDataArray.post_url);
        this.updateArticle.controls["post_cat"].setValue(this.postDataArray.post_cat);
        this.updateArticle.controls["post_desc"].setValue(this.postDataArray.post_desc);
        this.updateArticle.controls["post_question1"].setValue(this.postDataArray.post_question1);
        this.updateArticle.controls["post_answer1"].setValue(this.postDataArray.post_answer1);
        this.updateArticle.controls["post_question2"].setValue(this.postDataArray.post_question2);
        this.updateArticle.controls["post_answer2"].setValue(this.postDataArray.post_answer2);
        this.updateArticle.controls["post_question3"].setValue(this.postDataArray.post_question3);
        this.updateArticle.controls["post_answer3"].setValue(this.postDataArray.post_answer3);
        this.updateArticle.controls["post_author"].setValue(this.postDataArray.post_author);
        this.updateArticle.controls["post_img"].setValue(this.postDataArray.post_img);
        this.routes.paramMap.subscribe((param) => {
          param.get("id");
        });
      }
    });
  }
  loadImage(webImgePath) {
    const headers = new Headers();
    headers.append("Access-Control-Allow-Headers", "Content-Type");
    headers.append("Access-Control-Allow-Methods", "GET");
    headers.append("Access-Control-Allow-Origin", "*");
    const self = this;
    this.http.get("https://hinditerm.com/demo/post/" + webImgePath, { responseType: "blob" }).subscribe((res) => {
      console.log(res);
      var file = new File([res], webImgePath, {
        type: res.type
      });
      this.blobData = file;
      console.log("image data is here", file);
      this.image2Base64(this.blobData);
    });
  }
  image2Base64(imageData) {
    var reader = new FileReader();
    reader.readAsDataURL(imageData);
    reader.addEventListener("loadend", () => {
      this.base64Img = reader.result;
    });
  }
  getUpdateArticle() {
    let obj = {
      post_title: this.updateArticle.controls["post_title"].value,
      post_meta_desc: this.updateArticle.controls["post_meta_desc"].value,
      post_meta_keyword: this.updateArticle.controls["post_meta_keyword"].value,
      post_url: this.updateArticle.controls["post_url"].value,
      post_cat: this.updateArticle.controls["post_cat"].value,
      post_desc: this.updateArticle.controls["post_desc"].value,
      post_question1: this.updateArticle.controls["post_question1"].value,
      post_answer1: this.updateArticle.controls["post_answer1"].value,
      post_question2: this.updateArticle.controls["post_question2"].value,
      post_answer2: this.updateArticle.controls["post_answer2"].value,
      post_question3: this.updateArticle.controls["post_question3"].value,
      post_answer3: this.updateArticle.controls["post_answer3"].value,
      post_author: this.updateArticle.controls["post_author"].value,
      post_img: this.updateArticle.controls["post_img"].value
    };
    const formData = new FormData();
    formData.append("post_id", this.postDecryptedId);
    formData.append("user_key", this.user);
    formData.append("authorizedUserId", this.authorizedUserId);
    formData.append("file", this.updateArticle.get("fileSource").value);
    formData.append("img1", this.blobData);
    formData.append("post_title", this.updateArticle.controls["post_title"].value);
    formData.append("post_meta_desc", this.updateArticle.controls["post_meta_desc"].value);
    formData.append("post_meta_keyword", this.updateArticle.controls["post_meta_keyword"].value);
    formData.append("post_url", this.updateArticle.controls["post_url"].value);
    formData.append("post_cat", this.updateArticle.controls["post_cat"].value);
    formData.append("post_desc", this.updateArticle.controls["post_desc"].value);
    formData.append("post_question1", this.updateArticle.controls["post_question1"].value);
    formData.append("post_answer1", this.updateArticle.controls["post_answer1"].value);
    formData.append("post_question2", this.updateArticle.controls["post_question2"].value);
    formData.append("post_answer2", this.updateArticle.controls["post_answer2"].value);
    formData.append("post_question3", this.updateArticle.controls["post_question3"].value);
    formData.append("post_answer3", this.updateArticle.controls["post_answer3"].value);
    formData.append("post_author", this.updateArticle.controls["post_author"].value);
    this.http.post("https://hinditerm.com/demo/post/update.php", formData).subscribe((updateValue) => {
      console.log(updateValue, "data updated");
      alert("thanks your post successfully submitted !");
    });
  }
};
_UpdatepostComponent.\u0275fac = function UpdatepostComponent_Factory(t) {
  return new (t || _UpdatepostComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
};
_UpdatepostComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdatepostComponent, selectors: [["app-updatepost"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 121, vars: 3, consts: [[1, "card"], [1, "card-header"], [1, "text-uppercase"], [1, "card-body"], [1, "row", "g-0"], [1, "col-xl-12"], ["method", "post", "enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "card-body", "p-0", "text-black"], [1, "row"], [1, "col-md-12"], [1, "form-outline"], ["for", "form3Example1m", 1, "form-label"], ["type", "text", "formControlName", "post_title", 1, "form-control"], ["for", "form3Example1m1", 1, "form-label"], ["type", "file", "formControlName", "post_img", "accept", ".png", 1, "form-control", 3, "change"], ["width", "100", 3, "src"], ["for", "form3Example1n", 1, "form-label"], ["type", "text", "formControlName", "post_meta_desc", 1, "form-control"], ["type", "text", "formControlName", "post_meta_keyword", 1, "form-control"], ["type", "text", "formControlName", "post_url", 1, "form-control"], [1, "form-label"], ["formControlName", "post_cat", "name", "type", 1, "form-control"], ["value", "", "disabled", "", "selected", "selected"], ["value", "news"], ["value", "business"], ["value", "technology"], ["value", "blog"], ["value", "entertainment"], ["value", "sports"], ["value", "science"], ["value", "health"], ["value", "education"], ["value", "job"], ["value", "politics"], ["value", "market"], ["value", "meditation"], ["value", "lifestyle"], ["value", "food"], ["value", "software"], ["value", "website"], ["value", "game"], ["value", "moviesongs"], ["for", "form3Example9", 1, "form-label"], ["id", "editor2", "formControlName", "post_desc", 3, "config"], ["type", "text", "formControlName", "post_question1", 1, "form-control"], ["type", "text", "formControlName", "post_answer1", 1, "form-control"], ["type", "text", "formControlName", "post_question2", 1, "form-control"], ["type", "text", "formControlName", "post_answer2", 1, "form-control"], ["type", "text", "formControlName", "post_question3", 1, "form-control"], ["type", "text", "formControlName", "post_answer3", 1, "form-control"], [1, "form-outline", "hidden-sm", "hidden-xs", "hidden-md", "hidden-lg"], ["type", "text", "formControlName", "post_author", 1, "form-control"], [1, "d-flex", "justify-content-end", "pt-3", "align-items-center"], ["type", "button", "routerLink", "../postread", 1, "text-success", "btn-lg", "ms-2"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "ms-2"]], template: function UpdatepostComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Update Post");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "form", 6);
    \u0275\u0275listener("ngSubmit", function UpdatepostComponent_Template_form_ngSubmit_7_listener() {
      return ctx.getUpdateArticle();
    });
    \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "label", 11);
    \u0275\u0275text(13, "Post Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "div", 10)(18, "label", 13);
    \u0275\u0275text(19, "Your Profile Pic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 14);
    \u0275\u0275listener("change", function UpdatepostComponent_Template_input_change_20_listener($event) {
      return ctx.onSelectedFile($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "img", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 9)(23, "div", 10)(24, "label", 16);
    \u0275\u0275text(25, "Meta Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 9)(28, "div", 10)(29, "label", 16);
    \u0275\u0275text(30, "Meta Keyword");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 9)(33, "div", 10)(34, "label", 16);
    \u0275\u0275text(35, "Post URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 9)(38, "label", 20);
    \u0275\u0275text(39, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div")(41, "select", 21)(42, "option", 22);
    \u0275\u0275text(43, "-- Select Event Type --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 23);
    \u0275\u0275text(45, "News");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 24);
    \u0275\u0275text(47, "Business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 25);
    \u0275\u0275text(49, "Technology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 26);
    \u0275\u0275text(51, "Blog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 27);
    \u0275\u0275text(53, "Entertainment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 28);
    \u0275\u0275text(55, "Sports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 29);
    \u0275\u0275text(57, "Science");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "option", 30);
    \u0275\u0275text(59, "Health");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "option", 31);
    \u0275\u0275text(61, "Education");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 32);
    \u0275\u0275text(63, "Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "option", 33);
    \u0275\u0275text(65, "Politics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "option", 34);
    \u0275\u0275text(67, "Market");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "option", 35);
    \u0275\u0275text(69, "Meditation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "option", 36);
    \u0275\u0275text(71, "LifeStyle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "option", 37);
    \u0275\u0275text(73, "Food");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "option", 38);
    \u0275\u0275text(75, "Software");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "option", 39);
    \u0275\u0275text(77, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "option", 40);
    \u0275\u0275text(79, "Game");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "option", 41);
    \u0275\u0275text(81, "Top Movie & Song");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "option", 37);
    \u0275\u0275text(83, "Food");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(84, "div", 10)(85, "label", 42);
    \u0275\u0275text(86, "Post Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(87, "angular-editor", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 10)(89, "label", 20);
    \u0275\u0275text(90, "Question 1");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 10)(93, "label", 20);
    \u0275\u0275text(94, "Answer 1");
    \u0275\u0275elementEnd();
    \u0275\u0275element(95, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 10)(97, "label", 20);
    \u0275\u0275text(98, "Question 2");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 10)(101, "label", 20);
    \u0275\u0275text(102, "Answer 2");
    \u0275\u0275elementEnd();
    \u0275\u0275element(103, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 10)(105, "label", 20);
    \u0275\u0275text(106, "Question 3");
    \u0275\u0275elementEnd();
    \u0275\u0275element(107, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div", 10)(109, "label", 20);
    \u0275\u0275text(110, "Answer 3");
    \u0275\u0275elementEnd();
    \u0275\u0275element(111, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 50)(113, "label", 20);
    \u0275\u0275text(114, "Author");
    \u0275\u0275elementEnd();
    \u0275\u0275element(115, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 52)(117, "a", 53);
    \u0275\u0275text(118, "See Your Post");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "button", 54);
    \u0275\u0275text(120, "Post Your Article");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx.updateArticle);
    \u0275\u0275advance(14);
    \u0275\u0275property("src", ctx.base64Img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(66);
    \u0275\u0275property("config", ctx.config);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, HttpClientModule, CommonModule, RouterLink, AngularEditorModule, AngularEditorComponent], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var UpdatepostComponent = _UpdatepostComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdatepostComponent, { className: "UpdatepostComponent", filePath: "src\\app\\admin\\dashboard\\post\\updatepost\\updatepost.component.ts", lineNumber: 20 });
})();

// src/app/admin/webstories/webstoriescreate/webstoriescreate.component.ts
function WebstoriescreateComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 67);
    \u0275\u0275text(2, "Follow : Demo Link Title : word-word-word-word : what-is-computer");
    \u0275\u0275elementEnd()();
  }
}
var _WebstoriescreateComponent = class _WebstoriescreateComponent {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.user = sessionStorage.getItem("authorized")?.toString();
    this.logiSuccess = sessionStorage.getItem("Login successful")?.toString();
    this.authorizedUserId = sessionStorage.getItem("authorizedUserId")?.toString();
    this.userArrayData = [];
    this.web_title = "";
    this.postUrl = "https://hinditerm.com/demo/post/webstories-create.php";
    this.postDataUrl = "https://hinditerm.com/demo/post/read.php";
    this.webstories = new FormGroup({
      web_title: new FormControl("", [Validators.required]),
      web_meta_desc: new FormControl("", [Validators.required]),
      web_meta_key: new FormControl("", [Validators.required]),
      web_link: new FormControl("", [Validators.required]),
      web_cat: new FormControl("", [Validators.required]),
      web_date: new FormControl({ value: this.getFormattedDate(), disabled: true }),
      web_time: new FormControl({ value: this.getFormattedTime(), disabled: true }),
      web_hour: new FormControl(""),
      web_heading1: new FormControl("", [Validators.required]),
      web_img1: new FormControl("", [Validators.required]),
      web_heading_desc1: new FormControl("", [Validators.required]),
      web_heading2: new FormControl("", [Validators.required]),
      web_img2: new FormControl("", [Validators.required]),
      web_heading_desc2: new FormControl("", [Validators.required]),
      web_heading3: new FormControl("", [Validators.required]),
      web_img3: new FormControl("", [Validators.required]),
      web_heading_desc3: new FormControl("", [Validators.required]),
      web_heading4: new FormControl("", [Validators.required]),
      web_img4: new FormControl("", [Validators.required]),
      web_heading_desc4: new FormControl("", [Validators.required]),
      web_heading5: new FormControl("", [Validators.required]),
      web_img5: new FormControl("", [Validators.required]),
      web_heading_desc5: new FormControl("", [Validators.required]),
      web_heading6: new FormControl("", [Validators.required]),
      web_img6: new FormControl("", [Validators.required]),
      web_heading_desc6: new FormControl("", [Validators.required]),
      web_heading7: new FormControl("", [Validators.required]),
      web_img7: new FormControl("", [Validators.required]),
      web_heading_desc7: new FormControl("", [Validators.required]),
      web_heading8: new FormControl("", [Validators.required]),
      web_img8: new FormControl("", [Validators.required]),
      web_heading_desc8: new FormControl("", [Validators.required]),
      web_heading9: new FormControl("", [Validators.required]),
      web_img9: new FormControl("", [Validators.required]),
      web_heading_desc9: new FormControl("", [Validators.required]),
      post_author: new FormControl({ value: this.author_name(), disabled: true }),
      user_email: new FormControl({ value: this.author_email(), disabled: true }),
      web_approval: new FormControl("")
    });
  }
  ngOnInit() {
    if (this.logiSuccess.length == 0) {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
    if (this.user == null || this.notAuthorized == "Not Authorized User" || this.user.length == 0 || this.logiSuccess.length == 0 || this.logiSuccess !== "Login successful") {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
    let formData = new FormData();
    formData.append("user_key", this.user);
    formData.append("authorizedUserId", this.authorizedUserId);
    this.http.post("https://hinditerm.com/demo/post/user-read.php", formData).subscribe((res) => {
      this.userArrayData = res.data[0];
      console.log(res.message);
      if (res.message == "Not Authorized User" || res.message == "Login failed" || res.message == "Student Record does not exist") {
        sessionStorage.clear();
        this.router.navigate(["/login"]);
      }
    });
  }
  //add value for date
  getFormattedDate() {
    let date = /* @__PURE__ */ new Date();
    let fullDate = date.toDateString();
    let day = fullDate.substring(0, 3);
    let date1 = fullDate.substring(7, 11);
    let m = fullDate.substring(3, 7);
    let y = fullDate.substring(10, 16);
    return day + "," + date1 + m + y;
  }
  //add value for time
  getFormattedTime() {
    var date = /* @__PURE__ */ new Date();
    var time = date.toLocaleTimeString();
    return time;
  }
  onInputPost() {
    let postValue = this.webstories.get("web_title").value;
    let postConvertedValue = postValue.split(" ").join("-").toLowerCase().substr(0, 30);
    this.webstories.get("web_link").setValue(postConvertedValue);
  }
  author_email() {
    return this.userArrayData.user_email;
  }
  author_name() {
    let f_name = this.userArrayData.user_first_name;
    let l_name = this.userArrayData.user_last_name;
    return f_name + " " + l_name;
  }
  get ctrl() {
    return this.webstories.controls;
  }
  onSelectedFile(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img1 = event.target.files[0];
      this.webstories.get("web_img1").setValue(img1);
    }
  }
  onSelectedFile2(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img2 = event.target.files[0];
      this.webstories.get("web_img2").setValue(img2);
    }
  }
  onSelectedFile3(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img3 = event.target.files[0];
      this.webstories.get("web_img3").setValue(img3);
    }
  }
  onSelectedFile4(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img4 = event.target.files[0];
      this.webstories.get("web_img4").setValue(img4);
    }
  }
  onSelectedFile5(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img5 = event.target.files[0];
      this.webstories.get("web_img5").setValue(img5);
    }
  }
  onSelectedFile6(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img6 = event.target.files[0];
      this.webstories.get("web_img6").setValue(img6);
    }
  }
  onSelectedFile7(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img7 = event.target.files[0];
      this.webstories.get("web_img7").setValue(img7);
    }
  }
  onSelectedFile8(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img8 = event.target.files[0];
      this.webstories.get("web_img8").setValue(img8);
    }
  }
  onSelectedFile9(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img9 = event.target.files[0];
      this.webstories.get("web_img9").setValue(img9);
    }
  }
  webstoriesSubmit() {
    if (this.ctrl.web_title.valid == false) {
      return alert("Title Required");
    } else if (this.ctrl.web_meta_desc.valid == false) {
      return alert("Meta Description Required");
    } else if (this.ctrl.web_meta_key.valid == false) {
      return alert("Meta Keywords Required");
    } else if (this.ctrl.web_link.valid == false) {
      return alert("Web Link Required");
    } else if (this.ctrl.web_cat.valid == false) {
      return alert("Web Categorey Required");
    } else if (this.ctrl.web_heading1.valid == false) {
      return alert("web_heading1 Required");
    } else if (this.ctrl.web_img1.valid == false) {
      return alert("web_img1 Required");
    } else if (this.ctrl.web_heading_desc1.valid == false) {
      return alert("web_heading_desc1 Required");
    } else if (this.ctrl.web_heading2.valid == false) {
      return alert("web_heading2 Required");
    } else if (this.ctrl.web_img2.valid == false) {
      return alert("web_img2 Required");
    } else if (this.ctrl.web_heading_desc2.valid == false) {
      return alert("web_heading_desc2 Required");
    } else if (this.ctrl.web_heading3.valid == false) {
      return alert("web_heading3 Required");
    } else if (this.ctrl.web_img3.valid == false) {
      return alert("web_img3 Required");
    } else if (this.ctrl.web_heading_desc3.valid == false) {
      return alert("web_heading_desc3 Required");
    } else if (this.ctrl.web_heading4.valid == false) {
      return alert("web_heading4 Required");
    } else if (this.ctrl.web_img4.valid == false) {
      return alert("web_img4 Required");
    } else if (this.ctrl.web_heading_desc4.valid == false) {
      return alert("web_heading_desc4 Required");
    } else if (this.ctrl.web_heading5.valid == false) {
      return alert("web_heading5 Required");
    } else if (this.ctrl.web_img5.valid == false) {
      return alert("web_img5 Required");
    } else if (this.ctrl.web_heading_desc5.valid == false) {
      return alert("web_heading_desc5 Required");
    } else if (this.ctrl.web_heading6.valid == false) {
      return alert("web_heading_desc5 Required");
    } else if (this.ctrl.web_img6.valid == false) {
      return alert("web_img6 Required");
    } else if (this.ctrl.web_heading_desc6.valid == false) {
      return alert("web_heading_desc6 Required");
    } else if (this.ctrl.web_heading7.valid == false) {
      return alert("web_heading7 Required");
    } else if (this.ctrl.web_img7.valid == false) {
      return alert("web_img7 Required");
    } else if (this.ctrl.web_heading_desc7.valid == false) {
      return alert("web_heading_desc7 Required");
    } else if (this.ctrl.web_heading8.valid == false) {
      return alert("web_heading8 Required");
    } else if (this.ctrl.web_img8.valid == false) {
      return alert("web_img8 Required");
    } else if (this.ctrl.web_heading_desc8.valid == false) {
      return alert("web_heading_desc8 Required");
    } else if (this.ctrl.web_heading9.valid == false) {
      return alert("web_heading9 Required");
    } else if (this.ctrl.web_img9.valid == false) {
      return alert("web_img9 Required");
    } else if (this.ctrl.web_heading_desc9.valid == false) {
      return alert("web_heading_desc9 Required");
    } else {
      const formData = new FormData();
      formData.append("user_key", this.user);
      formData.append("authorizedUserId", this.authorizedUserId);
      formData.append("web_title", this.webstories.controls["web_title"].value);
      formData.append("web_meta_desc", this.webstories.controls["web_meta_desc"].value);
      formData.append("web_meta_key", this.webstories.controls["web_meta_key"].value);
      formData.append("web_link", this.webstories.controls["web_link"].value);
      formData.append("web_cat", this.webstories.controls["web_cat"].value);
      formData.append("web_date", this.webstories.controls["web_date"].value);
      formData.append("web_time", this.webstories.controls["web_time"].value);
      formData.append("web_hour", this.webstories.controls["web_hour"].value);
      formData.append("web_heading1", this.webstories.controls["web_heading1"].value);
      formData.append("img1", this.webstories.get("web_img1").value);
      formData.append("web_heading_desc1", this.webstories.controls["web_heading_desc1"].value);
      formData.append("web_heading2", this.webstories.controls["web_heading2"].value);
      formData.append("img2", this.webstories.get("web_img2").value);
      formData.append("web_heading_desc2", this.webstories.controls["web_heading_desc2"].value);
      formData.append("web_heading3", this.webstories.controls["web_heading3"].value);
      formData.append("img3", this.webstories.get("web_img3").value);
      formData.append("web_heading_desc3", this.webstories.controls["web_heading_desc3"].value);
      formData.append("web_heading4", this.webstories.controls["web_heading4"].value);
      formData.append("img4", this.webstories.get("web_img4").value);
      formData.append("web_heading_desc4", this.webstories.controls["web_heading_desc4"].value);
      formData.append("web_heading5", this.webstories.controls["web_heading5"].value);
      formData.append("img5", this.webstories.get("web_img5").value);
      formData.append("web_heading_desc5", this.webstories.controls["web_heading_desc5"].value);
      formData.append("web_heading6", this.webstories.controls["web_heading6"].value);
      formData.append("img6", this.webstories.get("web_img6").value);
      formData.append("web_heading_desc6", this.webstories.controls["web_heading_desc6"].value);
      formData.append("web_heading7", this.webstories.controls["web_heading7"].value);
      formData.append("img7", this.webstories.get("web_img7").value);
      formData.append("web_heading_desc7", this.webstories.controls["web_heading_desc7"].value);
      formData.append("web_heading8", this.webstories.controls["web_heading8"].value);
      formData.append("img8", this.webstories.get("web_img8").value);
      formData.append("web_heading_desc8", this.webstories.controls["web_heading_desc8"].value);
      formData.append("web_heading9", this.webstories.controls["web_heading9"].value);
      formData.append("img9", this.webstories.get("web_img9").value);
      formData.append("web_heading_desc9", this.webstories.controls["web_heading_desc9"].value);
      formData.append("web_approval", this.webstories.controls["web_approval"].value);
      formData.append("post_author", this.webstories.controls["post_author"].value);
      formData.append("user_email", this.webstories.controls["user_email"].value);
      this.http.post(this.postUrl, formData).subscribe((data) => {
        alert("Successfully Post");
      });
    }
  }
};
_WebstoriescreateComponent.\u0275fac = function WebstoriescreateComponent_Factory(t) {
  return new (t || _WebstoriescreateComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_WebstoriescreateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebstoriescreateComponent, selectors: [["app-webstoriescreate"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 166, vars: 5, consts: [[1, "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "col", "admin-post-area"], [1, "card", "m-3", "card-registration", "my-4"], ["method", "post", "enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "row", "g-0"], [1, "col-md-12"], [1, "card-header"], [1, "card-body"], [1, "form-group"], ["type", "text", "formControlName", "web_title", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["type", "text", "formControlName", "web_meta_desc", 1, "form-control"], ["type", "text", "formControlName", "web_meta_key", 1, "form-control"], ["type", "text", "formControlName", "web_link", "pattern", "^\\w+(?:[]\\w+)*(?:\\-\\w+(?:[]\\w+)*)*$", 1, "form-control"], [4, "ngIf"], [1, "form-outline"], [1, "form-label"], ["formControlName", "web_cat", 1, "form-control"], ["value", "", "disabled", "", "selected", "selected"], ["value", "news"], ["value", "business"], ["value", "technology"], ["value", "entertainment"], ["value", "sports"], ["value", "science"], ["value", "health"], ["value", "education"], ["value", "job"], ["value", "politics"], ["value", "market"], ["value", "meditation"], ["value", "lifestyle"], ["value", "food"], ["value", "travel"], [1, "form-group", "bg-light-grey", "p-3", "mt-5", "card"], ["type", "text", "formControlName", "web_heading1", 1, "form-control"], ["type", "file", "formControlName", "web_img1", "accept", "image/*", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc1", 1, "form-control"], ["type", "text", "formControlName", "web_heading2", 1, "form-control"], ["type", "file", "formControlName", "web_img2", "accept", "image/*", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc2", 1, "form-control"], ["type", "text", "formControlName", "web_heading3", 1, "form-control"], ["type", "file", "formControlName", "web_img3", "accept", "image/*", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc3", 1, "form-control"], ["type", "text", "formControlName", "web_heading4", 1, "form-control"], ["type", "file", "formControlName", "web_img4", "accept", "image/*", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc4", 1, "form-control"], ["type", "text", "formControlName", "web_heading5", 1, "form-control"], ["type", "file", "formControlName", "web_img5", "accept", "image/*", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc5", 1, "form-control"], ["type", "text", "formControlName", "web_heading6", 1, "form-control"], ["type", "file", "formControlName", "web_img6", "accept", "image/*", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc6", 1, "form-control"], ["type", "text", "formControlName", "web_heading7", 1, "form-control"], ["type", "file", "formControlName", "web_img7", "accept", "image/*", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc7", 1, "form-control"], ["type", "text", "formControlName", "web_heading8", 1, "form-control"], ["type", "file", "formControlName", "web_img8", "accept", "image/*", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc8", 1, "form-control"], ["type", "text", "formControlName", "web_heading9", 1, "form-control"], ["type", "file", "formControlName", "web_img9", "accept", "image/*", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc9", 1, "form-control"], [1, "form-outline", "hidden-sm", "hidden-xs", "hidden-md", "hidden-lg"], ["type", "text", "formControlName", "post_author", 1, "form-control", 3, "value"], ["lass", "form-label"], ["type", "email", "formControlName", "user_email", 1, "form-control", 3, "value"], [1, "card-footer", "pb-3"], ["type", "submit", 1, "btn", "btn-default", "btn-primary", "float-right"], [1, "text-danger"]], template: function WebstoriescreateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3);
    \u0275\u0275listener("ngSubmit", function WebstoriescreateComponent_Template_form_ngSubmit_3_listener() {
      return ctx.webstoriesSubmit();
    });
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h3");
    \u0275\u0275text(8, "Create New Web Stories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "label");
    \u0275\u0275text(12, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 9);
    \u0275\u0275listener("keyup", function WebstoriescreateComponent_Template_input_keyup_13_listener() {
      return ctx.onInputPost();
    })("ngModelChange", function WebstoriescreateComponent_Template_input_ngModelChange_13_listener($event) {
      return ctx.web_title = $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8)(15, "label");
    \u0275\u0275text(16, "Meta Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 8)(19, "label");
    \u0275\u0275text(20, "Meta Keywords");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 8)(23, "label");
    \u0275\u0275text(24, "Link");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, WebstoriescreateComponent_div_26_Template, 3, 0, "div", 13);
    \u0275\u0275elementStart(27, "div", 8)(28, "div", 14)(29, "label", 15);
    \u0275\u0275text(30, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 16)(32, "option", 17);
    \u0275\u0275text(33, "-- Select Event Type --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 18);
    \u0275\u0275text(35, "News");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 19);
    \u0275\u0275text(37, "Business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 20);
    \u0275\u0275text(39, "Technology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 21);
    \u0275\u0275text(41, "Entertainment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 22);
    \u0275\u0275text(43, "Sports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 23);
    \u0275\u0275text(45, "Science");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 24);
    \u0275\u0275text(47, "Health");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 25);
    \u0275\u0275text(49, "Education");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 26);
    \u0275\u0275text(51, "Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 27);
    \u0275\u0275text(53, "Politics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 28);
    \u0275\u0275text(55, "Market");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 29);
    \u0275\u0275text(57, "Meditation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "option", 30);
    \u0275\u0275text(59, "LifeStyle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "option", 31);
    \u0275\u0275text(61, "Food");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 32);
    \u0275\u0275text(63, "Travel");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(64, "div", 33)(65, "label");
    \u0275\u0275text(66, "Heading 1");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "input", 34);
    \u0275\u0275elementStart(68, "label");
    \u0275\u0275text(69, "Heading Img 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "input", 35);
    \u0275\u0275listener("change", function WebstoriescreateComponent_Template_input_change_70_listener($event) {
      return ctx.onSelectedFile($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "label");
    \u0275\u0275text(72, "Heading 1 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 33)(75, "label");
    \u0275\u0275text(76, "Heading 2");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 37);
    \u0275\u0275elementStart(78, "label");
    \u0275\u0275text(79, "Heading Img 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "input", 38);
    \u0275\u0275listener("change", function WebstoriescreateComponent_Template_input_change_80_listener($event) {
      return ctx.onSelectedFile2($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "label");
    \u0275\u0275text(82, "Heading 2 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 33)(85, "label");
    \u0275\u0275text(86, "Heading 3");
    \u0275\u0275elementEnd();
    \u0275\u0275element(87, "input", 40);
    \u0275\u0275elementStart(88, "label");
    \u0275\u0275text(89, "Heading Img 3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "input", 41);
    \u0275\u0275listener("change", function WebstoriescreateComponent_Template_input_change_90_listener($event) {
      return ctx.onSelectedFile3($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "label");
    \u0275\u0275text(92, "Heading 3 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(93, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 33)(95, "label");
    \u0275\u0275text(96, "Heading 4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(97, "input", 43);
    \u0275\u0275elementStart(98, "label");
    \u0275\u0275text(99, "Heading Img 4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "input", 44);
    \u0275\u0275listener("change", function WebstoriescreateComponent_Template_input_change_100_listener($event) {
      return ctx.onSelectedFile4($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "label");
    \u0275\u0275text(102, "Heading 4 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(103, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 33)(105, "label");
    \u0275\u0275text(106, "Heading 5");
    \u0275\u0275elementEnd();
    \u0275\u0275element(107, "input", 46);
    \u0275\u0275elementStart(108, "label");
    \u0275\u0275text(109, "Heading Img 5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "input", 47);
    \u0275\u0275listener("change", function WebstoriescreateComponent_Template_input_change_110_listener($event) {
      return ctx.onSelectedFile5($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "label");
    \u0275\u0275text(112, "Heading 5 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(113, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "div", 33)(115, "label");
    \u0275\u0275text(116, "Heading 6");
    \u0275\u0275elementEnd();
    \u0275\u0275element(117, "input", 49);
    \u0275\u0275elementStart(118, "label");
    \u0275\u0275text(119, "Heading Img 6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "input", 50);
    \u0275\u0275listener("change", function WebstoriescreateComponent_Template_input_change_120_listener($event) {
      return ctx.onSelectedFile6($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "label");
    \u0275\u0275text(122, "Heading 6 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(123, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div", 33)(125, "label");
    \u0275\u0275text(126, "Heading 7");
    \u0275\u0275elementEnd();
    \u0275\u0275element(127, "input", 52);
    \u0275\u0275elementStart(128, "label");
    \u0275\u0275text(129, "Heading Img 7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "input", 53);
    \u0275\u0275listener("change", function WebstoriescreateComponent_Template_input_change_130_listener($event) {
      return ctx.onSelectedFile7($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "label");
    \u0275\u0275text(132, "Heading 7 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(133, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div", 33)(135, "label");
    \u0275\u0275text(136, "Heading 8");
    \u0275\u0275elementEnd();
    \u0275\u0275element(137, "input", 55);
    \u0275\u0275elementStart(138, "label");
    \u0275\u0275text(139, "Heading Img 8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "input", 56);
    \u0275\u0275listener("change", function WebstoriescreateComponent_Template_input_change_140_listener($event) {
      return ctx.onSelectedFile8($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "label");
    \u0275\u0275text(142, "Heading 8 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(143, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "div", 33)(145, "label");
    \u0275\u0275text(146, "Heading 9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(147, "input", 58);
    \u0275\u0275elementStart(148, "label");
    \u0275\u0275text(149, "Heading Img 9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "input", 59);
    \u0275\u0275listener("change", function WebstoriescreateComponent_Template_input_change_150_listener($event) {
      return ctx.onSelectedFile9($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "label");
    \u0275\u0275text(152, "Heading 9 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(153, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "div", 61)(155, "label", 15);
    \u0275\u0275text(156, "Author Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(157, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "div", 61)(159, "label", 63);
    \u0275\u0275text(160, "Author Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(161, "input", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "div", 65)(163, "div", 8)(164, "button", 66);
    \u0275\u0275text(165, "Submit");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.webstories);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", ctx.web_title);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx.webstories.get("web_link")) == null ? null : tmp_2_0["errors"] == null ? null : tmp_2_0["errors"]["pattern"]);
    \u0275\u0275advance(131);
    \u0275\u0275propertyInterpolate("value", ctx.author_name());
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("value", ctx.author_email());
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, PatternValidator, FormGroupDirective, FormControlName, NgIf, HttpClientModule, CommonModule], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var WebstoriescreateComponent = _WebstoriescreateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebstoriescreateComponent, { className: "WebstoriescreateComponent", filePath: "src\\app\\admin\\webstories\\webstoriescreate\\webstoriescreate.component.ts", lineNumber: 17 });
})();

// src/app/admin/webstories/webstoriesread/webstoriesread.component.ts
function WebstoriesreadComponent_tr_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 6);
    \u0275\u0275listener("click", function WebstoriesreadComponent_tr_84_Template_a_click_2_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r3);
      const stories_r1 = restoredCtx.$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteWebStories(stories_r1.web_id));
    });
    \u0275\u0275text(3, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "a", 6);
    \u0275\u0275listener("click", function WebstoriesreadComponent_tr_84_Template_a_click_5_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r3);
      const stories_r1 = restoredCtx.$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.redirectToSpecificPost(stories_r1));
    });
    \u0275\u0275text(6, "Update");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275element(26, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275element(32, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td");
    \u0275\u0275element(38, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td");
    \u0275\u0275element(44, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "td");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td");
    \u0275\u0275element(50, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td");
    \u0275\u0275element(56, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "td");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "td");
    \u0275\u0275element(62, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "td");
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "td");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "td");
    \u0275\u0275element(68, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td");
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "td");
    \u0275\u0275element(74, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "td");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "td");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stories_r1 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(stories_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_meta_desc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_meta_key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_link);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_hour);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_heading1);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "http://balindra.com/post/", stories_r1.web_img1, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", stories_r1.web_heading_desc1.substr(0, 50), "...");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_heading2);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "http://balindra.com/post/", stories_r1.web_img2, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", stories_r1.web_heading_desc2.substr(0, 50), "...");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_heading3);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "http://balindra.com/post/", stories_r1.web_img3, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", stories_r1.web_heading_desc3.substr(0, 50), "...");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_heading4);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "http://balindra.com/post/", stories_r1.web_img4, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", stories_r1.web_heading_desc4.substr(0, 50), "...");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_heading5);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "http://balindra.com/post/", stories_r1.web_img5, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", stories_r1.web_heading_desc5.substr(0, 50), "...");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_heading6);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "http://balindra.com/post/", stories_r1.web_img6, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", stories_r1.web_heading_desc6.substr(0, 50), "...");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_heading7);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "http://balindra.com/post/", stories_r1.web_img7, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", stories_r1.web_heading_desc7.substr(0, 50), "...");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_heading8);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "http://balindra.com/post/", stories_r1.web_img8, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", stories_r1.web_heading_desc8.substr(0, 50), "...");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_heading9);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "http://balindra.com/post/", stories_r1.web_img9, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", stories_r1.web_heading_desc9.substr(0, 50), "...");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stories_r1.web_approval);
  }
}
var _WebstoriesreadComponent = class _WebstoriesreadComponent {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.user = sessionStorage.getItem("authorized")?.toString();
    this.logiSuccess = sessionStorage.getItem("Login successful")?.toString();
    this.authorizedUserId = sessionStorage.getItem("authorizedUserId")?.toString();
    this.webstoriesArrayData = [];
    this.filteredData = [];
  }
  ngOnInit() {
    if (this.user == null || this.notAuthorized == "Not Authorized User" || this.user.length == 0 || this.logiSuccess.length == 0 || this.logiSuccess !== "Login successful") {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
    let formData = new FormData();
    formData.append("user_key", this.user);
    formData.append("authorizedUserId", this.authorizedUserId);
    this.http.post("https://hinditerm.com/demo/post/admin-webstories-read.php", formData).subscribe((res) => {
      console.log(res);
      if (res.message == "Not Authorized User" || res.message == "Login failed" || res.message == "Student Record does not exist") {
        sessionStorage.clear();
        this.router.navigate(["/login"]);
      } else {
        this.webstoriesArrayData = res.data;
        console.log("data is", this.webstoriesArrayData);
        this.filteredData = this.webstoriesArrayData;
        console.log(this.webstoriesArrayData);
      }
    });
    console.log("webstories", this.webstoriesArrayData);
  }
  refreshData() {
    let formData = new FormData();
    formData.append("user_key", this.user);
    formData.append("authorizedUserId", this.authorizedUserId);
    this.http.post("https://hinditerm.com/demo/post/admin-webstories-read.php", formData).subscribe((res) => {
      console.log(res);
      if (res.message == "Not Authorized User" || res.message == "Login failed" || res.message == "Student Record does not exist") {
        sessionStorage.clear();
        this.router.navigate(["/login"]);
      } else {
        this.webstoriesArrayData = res.data;
        console.log("data is", this.webstoriesArrayData);
        this.filteredData = this.webstoriesArrayData;
        console.log(this.webstoriesArrayData);
      }
    });
  }
  deleteWebStories(web_id) {
    let formData = new FormData();
    formData.append("user_key", this.user);
    formData.append("authorizedUserId", this.authorizedUserId);
    formData.append("web_id", web_id);
    if (confirm("Are you sure to delete " + web_id)) {
      this.http.post("https://hinditerm.com/demo/post/web-stories-delete.php", formData).subscribe((data) => {
        alert("one record delete" + web_id);
        this.refreshData();
      });
    } else {
      alert("Thanks your data is safe.you r redirect to same page");
    }
  }
  redirectToSpecificPost(item) {
    let itemId = item.web_id;
    let encryptedId = btoa(itemId);
    console.log(encryptedId, typeof itemId);
    this.router.navigateByUrl(`dashboard/webstoriesupdate/${encryptedId}`);
  }
};
_WebstoriesreadComponent.\u0275fac = function WebstoriesreadComponent_Factory(t) {
  return new (t || _WebstoriesreadComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_WebstoriesreadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebstoriesreadComponent, selectors: [["app-webstoriesread"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 85, vars: 1, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "table-one"], [1, "bg-dark", "text-white"], [4, "ngFor", "ngForOf"], [3, "click"], [2, "width", "40px", 3, "src"]], template: function WebstoriesreadComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
    \u0275\u0275text(3, "All Post ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "table")(7, "tr", 4)(8, "td");
    \u0275\u0275text(9, "Delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11, "Update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13, "id");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15, "web_title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17, "web_meta_desc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19, "web_meta_key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21, "web_link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23, "web_date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25, "web_time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27, "web_hour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td");
    \u0275\u0275text(29, "web_heading1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275text(31, "web_img1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td");
    \u0275\u0275text(33, "web_heading_desc1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35, "web_heading2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td");
    \u0275\u0275text(37, "web_img2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td");
    \u0275\u0275text(39, "web_heading_desc2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41, "web_heading3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td");
    \u0275\u0275text(43, "web_img3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "td");
    \u0275\u0275text(45, "web_heading_desc3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47, "web_heading4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "td");
    \u0275\u0275text(49, "web_img4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "td");
    \u0275\u0275text(51, "web_heading_desc4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "td");
    \u0275\u0275text(53, "web_heading5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55, "web_img5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td");
    \u0275\u0275text(57, "web_heading_desc5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "td");
    \u0275\u0275text(59, "web_heading6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "td");
    \u0275\u0275text(61, "web_img6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "td");
    \u0275\u0275text(63, "web_heading_desc6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "td");
    \u0275\u0275text(65, "web_heading7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "td");
    \u0275\u0275text(67, "web_img7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "td");
    \u0275\u0275text(69, "web_heading_desc7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "td");
    \u0275\u0275text(71, "web_heading8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "td");
    \u0275\u0275text(73, "web_img8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "td");
    \u0275\u0275text(75, "web_heading_desc8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "td");
    \u0275\u0275text(77, "web_heading9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "td");
    \u0275\u0275text(79, "web_img9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "td");
    \u0275\u0275text(81, "web_heading_desc9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "td");
    \u0275\u0275text(83, "web_approval");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(84, WebstoriesreadComponent_tr_84_Template, 79, 36, "tr", 5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(84);
    \u0275\u0275property("ngForOf", ctx.webstoriesArrayData);
  }
}, dependencies: [ReactiveFormsModule, HttpClientModule, CommonModule, NgForOf], styles: ["\n\n.table-one[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n.table-one[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.table-one[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #a3ddda;\n}\n.table-one[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 200px;\n  border-bottom: 1px solid #e1e1e1;\n  vertical-align: bottom;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9hZG1pbi93ZWJzdG9yaWVzL3dlYnN0b3JpZXNyZWFkL3dlYnN0b3JpZXNyZWFkLmNvbXBvbmVudC5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIC50YWJsZV9kYXRhIHRhYmxle1xuICAgIHdpZHRoOiAzMDAwcHg7XG59XG4udGFibGVfZGF0YXtcbiAgICBvdmVyZmxvdzpzY3JvbGw7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn0gKi9cbi50YWJsZS1vbmV7XG4gICBcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93OmF1dG87XG4gICAgXG59XG4udGFibGUtb25lIHRhYmxlIHRye1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4udGFibGUtb25lIHRhYmxlIHRyOm50aC1jaGlsZChldmVuKXtcbiAgICBiYWNrZ3JvdW5kOiNhM2RkZGE7XG59XG4udGFibGUtb25lIHRhYmxlIHRyIHRke1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFPQSxDQUFDO0FBRUcsVUFBUTtBQUNSLFlBQVM7QUFFYjtBQUNBLENBTkMsVUFNVSxNQUFNO0FBQ2IsV0FBUztBQUNiO0FBQ0EsQ0FUQyxVQVNVLE1BQU0sRUFBRTtBQUNmLGNBQVc7QUFDZjtBQUNBLENBWkMsVUFZVSxNQUFNLEdBQUc7QUFDaEIsU0FBTztBQUNQLGlCQUFlLElBQUksTUFBTTtBQUN6QixrQkFBZ0I7QUFDaEIsV0FBUztBQUNiOyIsCiAgIm5hbWVzIjogW10KfQo= */"] });
var WebstoriesreadComponent = _WebstoriesreadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebstoriesreadComponent, { className: "WebstoriesreadComponent", filePath: "src\\app\\admin\\webstories\\webstoriesread\\webstoriesread.component.ts", lineNumber: 17 });
})();

// src/app/admin/dashboard/dasboard.service.ts
var _DasboardService = class _DasboardService {
  constructor(http) {
    this.http = http;
    this.getDataUrl = "https://hinditerm.com/demo/post/read.php";
    this.userGetDataUrl = "https://hinditerm.com/demo/post/user-read.php";
    this.$titleObservable = new BehaviorSubject({ title: "" });
    this.$title = this.$titleObservable.asObservable();
    this.metadata = new BehaviorSubject({ name: "", content: "" });
    this.$metadata = this.metadata.asObservable();
    this.webstoriesGetDataUrl = "https://hinditerm.com/demo/post/webstories-read.php";
    this.userEmail = sessionStorage.getItem("user");
  }
  //  deleteDataS(id:string){
  //   let getUrl= "https://hinditerm.com/demo/post/delete.php";
  //   const params = new HttpParams()
  //   .set('id', id.toString());
  //   return this.http.delete(`${getUrl}`, { params: params, responseType:'json' });
  // }
  // OneDataShow(id:string){
  //   let getUrl= "https://hinditerm.com/demo/post/admin-single-data.php";
  //   const params = new HttpParams()
  //   .set('id', id.toString());
  //   return this.http.get(`${getUrl}`, { params: params, responseType:'json' });
  // }
  singlePostRead(post_url) {
    let getUrl = `https://hinditerm.com/demo/post/single-read.php/?post_url=${post_url}`;
    return this.http.get(getUrl);
  }
  relatedPost(post_cat) {
    let PostGetUrl = `https://hinditerm.com/demo/post/related_post.php/?post_cat=${post_cat}`;
    return this.http.get(PostGetUrl);
  }
  singlePostComment(cmt_url) {
    let CommentGetUrl = `https://hinditerm.com/demo/post/cmt-read.php/?cmt_url=${cmt_url}`;
    return this.http.get(CommentGetUrl);
  }
  getCurrentData(id) {
    return this.http.get(`${this.getDataUrl}/${id}`);
  }
  userGetCurrentData(user_key) {
    return this.http.get(`${this.userGetDataUrl}/${user_key}`);
  }
  userGetUpdate(user_id, data) {
    let userGetUpdateUrl = "https://hinditerm.com/demo/post/user-update.php?user_key=";
    return this.http.post(`${userGetUpdateUrl}${user_id}`, data);
  }
  getCurrentAds(id) {
    let getSinglePostUrl = "https://hinditerm.com/demo/post/ads-read.php";
    return this.http.get(`${getSinglePostUrl}/${id}`);
  }
  getCurrentAdsUpdate(id, data) {
    let getAdsUpdateUrl = "https://hinditerm.com/demo/post/ads-update.php?id=";
    return this.http.post(`${getAdsUpdateUrl}${id}`, data);
  }
  setTitle(title) {
    this.$titleObservable.next({ title });
  }
  setMetadata(m) {
    this.$titleObservable.next(m);
  }
  getTitle() {
    return this.$title;
  }
  onEdit() {
    window.scrollTo(0, 0);
  }
  webstoriesGetCurrentData(id) {
    return this.http.get(`${this.webstoriesGetDataUrl}/${id}`);
  }
  //webstories current data update
  webstoriesGetUpdatePost(id, data) {
    let webstoriesGetUpdateUrl = "https://hinditerm.com/demo/post/webstories-update.php?id=";
    return this.http.post(`${webstoriesGetUpdateUrl}${id}`, data);
  }
  singleWebStoriesRead(post_url) {
    let getUrl = `https://hinditerm.com/demo/post/single-webstories-read.php?post_url=${post_url}`;
    return this.http.get(getUrl);
  }
  singleWebStoriesRelatedPost(web_cat) {
    let PostGetUrl = `https://hinditerm.com/demo/post/related-webstories-read.php?web_cat=${web_cat}`;
    return this.http.get(PostGetUrl);
  }
};
_DasboardService.\u0275fac = function DasboardService_Factory(t) {
  return new (t || _DasboardService)(\u0275\u0275inject(HttpClient));
};
_DasboardService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DasboardService, factory: _DasboardService.\u0275fac, providedIn: "root" });
var DasboardService = _DasboardService;

// src/app/admin/webstories/webstoriesupdate/webstoriesupdate.component.ts
var _WebstoriesupdateComponent = class _WebstoriesupdateComponent {
  constructor(userService, routes2, http, router) {
    this.userService = userService;
    this.routes = routes2;
    this.http = http;
    this.router = router;
    this.user = sessionStorage.getItem("authorized")?.toString();
    this.logiSuccess = sessionStorage.getItem("Login successful")?.toString();
    this.authorizedUserId = sessionStorage.getItem("authorizedUserId")?.toString();
    this.img_width = 100;
    this.updateWebstories = new FormGroup({
      web_title: new FormControl("", Validators.required),
      web_meta_desc: new FormControl("", Validators.required),
      web_meta_key: new FormControl("", Validators.required),
      web_date: new FormControl({ value: this.getFormattedDate(), disabled: true }),
      web_time: new FormControl({ value: this.getFormattedTime(), disabled: true }),
      web_hour: new FormControl("", Validators.required),
      web_heading1: new FormControl("", Validators.required),
      web_img1: new FormControl(""),
      web_heading_desc1: new FormControl("", Validators.required),
      web_heading2: new FormControl("", Validators.required),
      web_img2: new FormControl(""),
      web_heading_desc2: new FormControl("", Validators.required),
      web_heading3: new FormControl("", Validators.required),
      web_img3: new FormControl(""),
      web_heading_desc3: new FormControl("", Validators.required),
      web_heading4: new FormControl("", Validators.required),
      web_img4: new FormControl(""),
      web_heading_desc4: new FormControl("", Validators.required),
      web_heading5: new FormControl("", Validators.required),
      web_img5: new FormControl(""),
      web_heading_desc5: new FormControl("", Validators.required),
      web_heading6: new FormControl("", Validators.required),
      web_img6: new FormControl(""),
      web_heading_desc6: new FormControl(""),
      web_heading7: new FormControl("", Validators.required),
      web_img7: new FormControl(""),
      web_heading_desc7: new FormControl("", Validators.required),
      web_heading8: new FormControl("", Validators.required),
      web_img8: new FormControl(""),
      web_heading_desc8: new FormControl("", Validators.required),
      web_heading9: new FormControl("", Validators.required),
      web_img9: new FormControl(""),
      web_heading_desc9: new FormControl("", Validators.required),
      web_approval: new FormControl("", Validators.required)
    });
  }
  getFormattedDate() {
    let date = /* @__PURE__ */ new Date();
    let fullDate = date.toDateString();
    let day = fullDate.substring(0, 3);
    let date1 = fullDate.substring(7, 11);
    let m = fullDate.substring(3, 7);
    let y = fullDate.substring(10, 16);
    return day + "," + date1 + m + y;
  }
  getFormattedTime() {
    var date = /* @__PURE__ */ new Date();
    var time = date.toLocaleTimeString();
    return time;
  }
  ngOnInit() {
    if (this.logiSuccess.length == 0) {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
    if (this.user == null || this.notAuthorized == "Not Authorized User" || this.user.length == 0 || this.logiSuccess.length == 0 || this.logiSuccess !== "Login successful") {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
    let postDecryptedId = atob(this.routes.snapshot.params["id"]);
    let post_id = postDecryptedId;
    this.postDecryptedId = post_id;
    let formData1 = new FormData();
    formData1.append("user_key", this.user);
    formData1.append("authorizedUserId", this.authorizedUserId);
    formData1.append("web_id", post_id);
    this.http.post("http://balindra.com/post/admin-webstories-single-data.php", formData1).subscribe((res) => {
      console.log(res.message);
      if (res.message == "Not Authorized User" || res.message == "Login failed" || res.message == "Student Record does not exist") {
        sessionStorage.clear();
        this.router.navigate(["/login"]);
      } else {
        this.userData = res.data[0];
        console.log("sdfdsf", this.userData);
        this.updateWebstories.controls["web_title"].setValue(this.userData.web_title);
        this.updateWebstories.controls["web_meta_desc"].setValue(this.userData.web_meta_desc);
        this.updateWebstories.controls["web_meta_key"].setValue(this.userData.web_meta_key);
        this.updateWebstories.controls["web_date"].setValue(this.getFormattedDate());
        this.updateWebstories.controls["web_time"].setValue(this.getFormattedTime());
        this.updateWebstories.controls["web_hour"].setValue(this.userData.web_hour);
        this.updateWebstories.controls["web_heading1"].setValue(this.userData.web_heading1);
        this.loadImage(this.userData.web_img1, 1);
        this.updateWebstories.controls["web_heading_desc1"].setValue(this.userData.web_heading_desc1);
        this.updateWebstories.controls["web_heading2"].setValue(this.userData.web_heading2);
        this.loadImage(this.userData.web_img2, 2);
        this.updateWebstories.controls["web_heading_desc2"].setValue(this.userData.web_heading_desc2);
        this.updateWebstories.controls["web_heading3"].setValue(this.userData.web_heading3);
        this.loadImage(this.userData.web_img3, 3);
        this.updateWebstories.controls["web_heading_desc3"].setValue(this.userData.web_heading_desc3);
        this.updateWebstories.controls["web_heading4"].setValue(this.userData.web_heading4);
        this.loadImage(this.userData.web_img4, 4);
        this.updateWebstories.controls["web_heading_desc4"].setValue(this.userData.web_heading_desc4);
        this.updateWebstories.controls["web_heading5"].setValue(this.userData.web_heading5);
        this.loadImage(this.userData.web_img5, 5);
        this.updateWebstories.controls["web_heading_desc5"].setValue(this.userData.web_heading_desc5);
        this.updateWebstories.controls["web_heading6"].setValue(this.userData.web_heading6);
        this.loadImage(this.userData.web_img6, 6);
        this.updateWebstories.controls["web_heading_desc6"].setValue(this.userData.web_heading_desc6);
        this.updateWebstories.controls["web_heading7"].setValue(this.userData.web_heading7);
        this.loadImage(this.userData.web_img7, 7);
        this.updateWebstories.controls["web_heading_desc7"].setValue(this.userData.web_heading_desc7);
        this.updateWebstories.controls["web_heading8"].setValue(this.userData.web_heading8);
        this.loadImage(this.userData.web_img8, 8);
        this.updateWebstories.controls["web_heading_desc8"].setValue(this.userData.web_heading_desc8);
        this.updateWebstories.controls["web_heading9"].setValue(this.userData.web_heading9);
        this.loadImage(this.userData.web_img9, 9);
        this.updateWebstories.controls["web_heading_desc9"].setValue(this.userData.web_heading_desc9);
        this.routes.paramMap.subscribe((param) => {
          param.get("id");
        });
      }
    });
  }
  loadImage(webImgePath, imageNumber) {
    this.http.get("http://localhost:8080/api-crud/api/api-crud/post/" + webImgePath, { responseType: "blob" }).subscribe((res) => {
      console.log(res);
      var file = new File([res], webImgePath, {
        type: res.type
      });
      if (imageNumber === 1) {
        this.blobData1 = file;
        this.image2Base64(this.blobData1, imageNumber);
      }
      if (imageNumber === 2) {
        this.blobData2 = file;
        this.image2Base64(this.blobData2, imageNumber);
      }
      if (imageNumber === 3) {
        this.blobData3 = file;
        this.image2Base64(this.blobData3, imageNumber);
      }
      if (imageNumber === 4) {
        this.blobData4 = file;
        this.image2Base64(this.blobData4, imageNumber);
      }
      if (imageNumber === 5) {
        this.blobData5 = file;
        this.image2Base64(this.blobData5, imageNumber);
      }
      if (imageNumber === 6) {
        this.blobData6 = file;
        this.image2Base64(this.blobData6, imageNumber);
      }
      if (imageNumber === 7) {
        this.blobData7 = file;
        this.image2Base64(this.blobData7, imageNumber);
      }
      if (imageNumber === 8) {
        this.blobData8 = file;
        this.image2Base64(this.blobData7, imageNumber);
      }
      if (imageNumber === 9) {
        this.blobData9 = file;
        this.image2Base64(this.blobData9, imageNumber);
      }
      console.log(file);
    });
  }
  image2Base64(imageData, imageNumber) {
    var reader = new FileReader();
    reader.readAsDataURL(imageData);
    reader.addEventListener("loadend", () => {
      if (imageNumber === 1) {
        this.base64Img1 = reader.result;
      }
      if (imageNumber === 2) {
        this.base64Img2 = reader.result;
      }
      if (imageNumber === 3) {
        this.base64Img3 = reader.result;
      }
      if (imageNumber === 4) {
        this.base64Img4 = reader.result;
      }
      if (imageNumber === 5) {
        this.base64Img5 = reader.result;
      }
      if (imageNumber === 6) {
        this.base64Img6 = reader.result;
      }
      if (imageNumber === 7) {
        this.base64Img7 = reader.result;
      }
      if (imageNumber === 8) {
        this.base64Img8 = reader.result;
      }
      if (imageNumber === 9) {
        this.base64Img9 = reader.result;
      }
    });
  }
  onSelectedFile(event) {
    if (event.target.files && event.target.files.length > 0) {
      debugger;
      const img1 = event.target.files[0];
      this.blobData1 = img1;
      this.image2Base64(this.blobData1, 1);
    }
  }
  onSelectedFile2(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img2 = event.target.files[0];
      this.blobData2 = img2;
      this.image2Base64(this.blobData2, 2);
    }
  }
  onSelectedFile3(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img3 = event.target.files[0];
      this.blobData3 = img3;
      this.image2Base64(this.blobData3, 3);
    }
  }
  onSelectedFile4(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img4 = event.target.files[0];
      this.blobData4 = img4;
      this.image2Base64(this.blobData4, 4);
    }
  }
  onSelectedFile5(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img5 = event.target.files[0];
      this.blobData5 = img5;
      this.image2Base64(this.blobData5, 5);
    }
  }
  onSelectedFile6(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img6 = event.target.files[0];
      this.blobData6 = img6;
      this.image2Base64(this.blobData6, 6);
    }
  }
  onSelectedFile7(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img7 = event.target.files[0];
      this.blobData7 = img7;
      this.image2Base64(this.blobData7, 7);
    }
  }
  onSelectedFile8(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img8 = event.target.files[0];
      this.blobData8 = img8;
      this.image2Base64(this.blobData8, 8);
    }
  }
  onSelectedFile9(event) {
    if (event.target.files && event.target.files.length > 0) {
      const img9 = event.target.files[0];
      this.blobData9 = img9;
      this.image2Base64(this.blobData9, 9);
    }
  }
  get ctrl() {
    return this.updateWebstories.controls;
  }
  updateWebstoriesSubmit() {
    if (this.ctrl.web_title.valid == false) {
      return alert("Title Required");
    } else if (this.ctrl.web_meta_desc.valid == false) {
      return alert("Meta Description Required");
    } else if (this.ctrl.web_meta_key.valid == false) {
      return alert("Meta Keywords Required");
    } else if (this.ctrl.web_heading1.valid == false) {
      return alert("web_heading1 Required");
    } else if (this.ctrl.web_img1.valid == false) {
      return alert("web_img1 Required");
    } else if (this.ctrl.web_heading_desc1.valid == false) {
      return alert("web_heading_desc1 Required");
    } else if (this.ctrl.web_heading2.valid == false) {
      return alert("web_heading2 Required");
    } else if (this.ctrl.web_img2.valid == false) {
      return alert("web_img2 Required");
    } else if (this.ctrl.web_heading_desc2.valid == false) {
      return alert("web_heading_desc2 Required");
    } else if (this.ctrl.web_heading3.valid == false) {
      return alert("web_heading3 Required");
    } else if (this.ctrl.web_img3.valid == false) {
      return alert("web_img3 Required");
    } else if (this.ctrl.web_heading_desc3.valid == false) {
      return alert("web_heading_desc3 Required");
    } else if (this.ctrl.web_heading4.valid == false) {
      return alert("web_heading4 Required");
    } else if (this.ctrl.web_img4.valid == false) {
      return alert("web_img4 Required");
    } else if (this.ctrl.web_heading_desc4.valid == false) {
      return alert("web_heading_desc4 Required");
    } else if (this.ctrl.web_heading5.valid == false) {
      return alert("web_heading5 Required");
    } else if (this.ctrl.web_img5.valid == false) {
      return alert("web_img5 Required");
    } else if (this.ctrl.web_heading_desc5.valid == false) {
      return alert("web_heading_desc5 Required");
    } else if (this.ctrl.web_heading6.valid == false) {
      return alert("web_heading_desc5 Required");
    } else if (this.ctrl.web_img6.valid == false) {
      return alert("web_img6 Required");
    } else if (this.ctrl.web_heading_desc6.valid == false) {
      return alert("web_heading_desc6 Required");
    } else if (this.ctrl.web_heading7.valid == false) {
      return alert("web_heading7 Required");
    } else if (this.ctrl.web_img7.valid == false) {
      return alert("web_img7 Required");
    } else if (this.ctrl.web_heading_desc7.valid == false) {
      return alert("web_heading_desc7 Required");
    } else if (this.ctrl.web_heading8.valid == false) {
      return alert("web_heading8 Required");
    } else if (this.ctrl.web_img8.valid == false) {
      return alert("web_img8 Required");
    } else if (this.ctrl.web_heading_desc8.valid == false) {
      return alert("web_heading_desc8 Required");
    } else if (this.ctrl.web_heading9.valid == false) {
      return alert("web_heading9 Required");
    } else if (this.ctrl.web_img9.valid == false) {
      return alert("web_img9 Required");
    } else if (this.ctrl.web_heading_desc9.valid == false) {
      return alert("web_heading_desc9 Required");
    } else {
      const formData = new FormData();
      formData.append("web_id", this.postDecryptedId);
      formData.append("user_key", this.user);
      formData.append("authorizedUserId", this.authorizedUserId);
      formData.append("web_title", this.updateWebstories.controls["web_title"].value);
      formData.append("web_meta_desc", this.updateWebstories.controls["web_meta_desc"].value);
      formData.append("web_meta_key", this.updateWebstories.controls["web_meta_key"].value);
      formData.append("web_date", this.updateWebstories.controls["web_date"].value);
      formData.append("web_time", this.updateWebstories.controls["web_time"].value);
      formData.append("web_hour", this.updateWebstories.controls["web_hour"].value);
      formData.append("web_heading1", this.updateWebstories.controls["web_heading1"].value);
      formData.append("img1", this.blobData1);
      formData.append("web_heading_desc1", this.updateWebstories.controls["web_heading_desc1"].value);
      formData.append("web_heading2", this.updateWebstories.controls["web_heading2"].value);
      formData.append("img2", this.blobData2);
      formData.append("web_heading_desc2", this.updateWebstories.controls["web_heading_desc2"].value);
      formData.append("web_heading3", this.updateWebstories.controls["web_heading3"].value);
      formData.append("img3", this.blobData3);
      formData.append("web_heading_desc3", this.updateWebstories.controls["web_heading_desc3"].value);
      formData.append("img4", this.blobData4);
      formData.append("web_heading4", this.updateWebstories.controls["web_heading4"].value);
      formData.append("web_heading_desc4", this.updateWebstories.controls["web_heading_desc4"].value);
      formData.append("web_heading5", this.updateWebstories.controls["web_heading5"].value);
      formData.append("img5", this.blobData5);
      formData.append("web_heading_desc5", this.updateWebstories.controls["web_heading_desc5"].value);
      formData.append("img6", this.blobData6);
      formData.append("web_heading6", this.updateWebstories.controls["web_heading6"].value);
      formData.append("web_heading_desc6", this.updateWebstories.controls["web_heading_desc6"].value);
      formData.append("img7", this.blobData7);
      formData.append("web_heading7", this.updateWebstories.controls["web_heading7"].value);
      formData.append("web_heading_desc7", this.updateWebstories.controls["web_heading_desc7"].value);
      formData.append("img8", this.blobData8);
      formData.append("web_heading8", this.updateWebstories.controls["web_heading8"].value);
      formData.append("web_heading_desc8", this.updateWebstories.controls["web_heading_desc8"].value);
      formData.append("img9", this.blobData9);
      formData.append("web_heading9", this.updateWebstories.controls["web_heading9"].value);
      formData.append("web_heading_desc9", this.updateWebstories.controls["web_heading_desc9"].value);
      formData.append("web_approval", this.updateWebstories.controls["web_approval"].value);
      this.http.post("http://balindra.com/post/webstories-update.php", formData).subscribe((updateValue) => {
        console.log(updateValue, "data updated");
        alert("thanks your post successfully submitted !");
      });
    }
  }
};
_WebstoriesupdateComponent.\u0275fac = function WebstoriesupdateComponent_Factory(t) {
  return new (t || _WebstoriesupdateComponent)(\u0275\u0275directiveInject(DasboardService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
};
_WebstoriesupdateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebstoriesupdateComponent, selectors: [["app-webstoriesupdate"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 144, vars: 12, consts: [[1, "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "col", "admin-post-area"], [1, "card", "m-3", "card-registration", "my-4"], [3, "formGroup", "ngSubmit"], [1, "row", "g-0"], [1, "col-md-12"], [1, "card-header"], [1, "card-body"], [1, "form-group"], ["disabled", "", 1, "form-control", "bg-light-warning"], ["type", "text", "formControlName", "web_title", 1, "form-control"], ["type", "text", "formControlName", "web_meta_desc", 1, "form-control"], ["type", "text", "formControlName", "web_meta_key", 1, "form-control"], ["type", "text", "formControlName", "web_date", 1, "form-control"], ["type", "text", "formControlName", "web_time", 1, "form-control"], [1, "form-group", "bg-light-grey", "p-3", "mt-5", "card"], ["type", "text", "formControlName", "web_heading1", 1, "form-control"], ["type", "file", "formControlName", "web_img1", "accept", ".png, .jpg, .jpeg", 1, "form-control", 3, "change"], ["width", "100", 3, "src"], ["type", "text", "formControlName", "web_heading_desc1", 1, "form-control"], ["type", "text", "formControlName", "web_heading2", 1, "form-control"], ["type", "file", "formControlName", "web_img2", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc2", 1, "form-control"], ["type", "text", "formControlName", "web_heading3", 1, "form-control"], ["type", "file", "formControlName", "web_img3", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc3", 1, "form-control"], ["type", "text", "formControlName", "web_heading4", 1, "form-control"], ["type", "file", "formControlName", "web_img4", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc4", 1, "form-control"], ["type", "text", "formControlName", "web_heading5", 1, "form-control"], ["type", "file", "formControlName", "web_img5", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc5", 1, "form-control"], ["type", "text", "formControlName", "web_heading6", 1, "form-control"], ["type", "file", "formControlName", "web_img6", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc6", 1, "form-control"], ["type", "text", "formControlName", "web_heading7", 1, "form-control"], ["type", "file", "formControlName", "web_img7", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc7", 1, "form-control"], ["type", "text", "formControlName", "web_heading8", 1, "form-control"], ["type", "file", "formControlName", "web_img8", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc8", 1, "form-control"], ["type", "text", "formControlName", "web_heading9", 1, "form-control"], ["type", "file", "formControlName", "web_img9", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "web_heading_desc9", 1, "form-control"], [1, "card-footer", "pb-3"], ["type", "submit", 1, "btn", "btn-default", "btn-primary", "float-right"]], template: function WebstoriesupdateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3);
    \u0275\u0275listener("ngSubmit", function WebstoriesupdateComponent_Template_form_ngSubmit_3_listener() {
      return ctx.updateWebstoriesSubmit();
    });
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h3");
    \u0275\u0275text(8, "Web Stories Update ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 8)(12, "label");
    \u0275\u0275text(13, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 9);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 8)(17, "label");
    \u0275\u0275text(18, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 8)(21, "label");
    \u0275\u0275text(22, "Meta Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 8)(25, "label");
    \u0275\u0275text(26, "Meta Keywords");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 8)(29, "label");
    \u0275\u0275text(30, "Link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 9);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 8)(34, "label");
    \u0275\u0275text(35, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 8)(38, "label");
    \u0275\u0275text(39, "Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 15)(42, "label");
    \u0275\u0275text(43, "Heading 1");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 16);
    \u0275\u0275elementStart(45, "label");
    \u0275\u0275text(46, "Heading Img 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 17);
    \u0275\u0275listener("change", function WebstoriesupdateComponent_Template_input_change_47_listener($event) {
      return ctx.onSelectedFile($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "img", 18);
    \u0275\u0275elementStart(49, "label");
    \u0275\u0275text(50, "Heading 1 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 15)(53, "label");
    \u0275\u0275text(54, "Heading 2");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "input", 20);
    \u0275\u0275elementStart(56, "label");
    \u0275\u0275text(57, "Heading Img 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "input", 21);
    \u0275\u0275listener("change", function WebstoriesupdateComponent_Template_input_change_58_listener($event) {
      return ctx.onSelectedFile2($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "img", 18);
    \u0275\u0275elementStart(60, "label");
    \u0275\u0275text(61, "Heading 2 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 15)(64, "label");
    \u0275\u0275text(65, "Heading 3");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "input", 23);
    \u0275\u0275elementStart(67, "label");
    \u0275\u0275text(68, "Heading Img 3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 24);
    \u0275\u0275listener("change", function WebstoriesupdateComponent_Template_input_change_69_listener($event) {
      return ctx.onSelectedFile3($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "img", 18);
    \u0275\u0275elementStart(71, "label");
    \u0275\u0275text(72, "Heading 3 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 15)(75, "label");
    \u0275\u0275text(76, "Heading 4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 26);
    \u0275\u0275elementStart(78, "label");
    \u0275\u0275text(79, "Heading Img 4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "input", 27);
    \u0275\u0275listener("change", function WebstoriesupdateComponent_Template_input_change_80_listener($event) {
      return ctx.onSelectedFile4($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "img", 18);
    \u0275\u0275elementStart(82, "label");
    \u0275\u0275text(83, "Heading 4 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 15)(86, "label");
    \u0275\u0275text(87, "Heading 5");
    \u0275\u0275elementEnd();
    \u0275\u0275element(88, "input", 29);
    \u0275\u0275elementStart(89, "label");
    \u0275\u0275text(90, "Heading Img 5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "input", 30);
    \u0275\u0275listener("change", function WebstoriesupdateComponent_Template_input_change_91_listener($event) {
      return ctx.onSelectedFile5($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(92, "img", 18);
    \u0275\u0275elementStart(93, "label");
    \u0275\u0275text(94, "Heading 5 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(95, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 15)(97, "label");
    \u0275\u0275text(98, "Heading 6");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "input", 32);
    \u0275\u0275elementStart(100, "label");
    \u0275\u0275text(101, "Heading Img 6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "input", 33);
    \u0275\u0275listener("change", function WebstoriesupdateComponent_Template_input_change_102_listener($event) {
      return ctx.onSelectedFile6($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(103, "img", 18);
    \u0275\u0275elementStart(104, "label");
    \u0275\u0275text(105, "Heading 6 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(106, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 15)(108, "label");
    \u0275\u0275text(109, "Heading 7");
    \u0275\u0275elementEnd();
    \u0275\u0275element(110, "input", 35);
    \u0275\u0275elementStart(111, "label");
    \u0275\u0275text(112, "Heading Img 7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "input", 36);
    \u0275\u0275listener("change", function WebstoriesupdateComponent_Template_input_change_113_listener($event) {
      return ctx.onSelectedFile7($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(114, "img", 18);
    \u0275\u0275elementStart(115, "label");
    \u0275\u0275text(116, "Heading 7 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(117, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 15)(119, "label");
    \u0275\u0275text(120, "Heading 8");
    \u0275\u0275elementEnd();
    \u0275\u0275element(121, "input", 38);
    \u0275\u0275elementStart(122, "label");
    \u0275\u0275text(123, "Heading Img 8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "input", 39);
    \u0275\u0275listener("change", function WebstoriesupdateComponent_Template_input_change_124_listener($event) {
      return ctx.onSelectedFile8($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(125, "img", 18);
    \u0275\u0275elementStart(126, "label");
    \u0275\u0275text(127, "Heading 8 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(128, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "div", 15)(130, "label");
    \u0275\u0275text(131, "Heading 9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(132, "input", 41);
    \u0275\u0275elementStart(133, "label");
    \u0275\u0275text(134, "Heading Img 9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "input", 42);
    \u0275\u0275listener("change", function WebstoriesupdateComponent_Template_input_change_135_listener($event) {
      return ctx.onSelectedFile9($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(136, "img", 18);
    \u0275\u0275elementStart(137, "label");
    \u0275\u0275text(138, "Heading 9 Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(139, "input", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "div", 44)(141, "div", 8)(142, "button", 45);
    \u0275\u0275text(143, "Submit");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.updateWebstories);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx.userData.web_cat, " [ You cannot change]");
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1("", ctx.userData.web_link, " [ You cannot change]");
    \u0275\u0275advance(16);
    \u0275\u0275property("src", ctx.base64Img1, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(11);
    \u0275\u0275property("src", ctx.base64Img2, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(11);
    \u0275\u0275property("src", ctx.base64Img3, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(11);
    \u0275\u0275property("src", ctx.base64Img4, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(11);
    \u0275\u0275property("src", ctx.base64Img5, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(11);
    \u0275\u0275property("src", ctx.base64Img6, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(11);
    \u0275\u0275property("src", ctx.base64Img7, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(11);
    \u0275\u0275property("src", ctx.base64Img8, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(11);
    \u0275\u0275property("src", ctx.base64Img9, \u0275\u0275sanitizeUrl);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, HttpClientModule, CommonModule], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var WebstoriesupdateComponent = _WebstoriesupdateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebstoriesupdateComponent, { className: "WebstoriesupdateComponent", filePath: "src\\app\\admin\\webstories\\webstoriesupdate\\webstoriesupdate.component.ts", lineNumber: 17 });
})();

// src/app/home/postdate.pipe.ts
var _PostdatePipe = class _PostdatePipe {
  transform(value, args) {
    if (value) {
      const seconds = Math.floor((+/* @__PURE__ */ new Date() - +new Date(value)) / 1e3);
      if (seconds < 29)
        return "Just now";
      const intervals = {
        "year": 31536e3,
        "month": 2592e3,
        "week": 604800,
        "day": 86400,
        "hour": 3600,
        "minute": 60,
        "second": 1
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0)
          if (counter === 1) {
            return counter + " " + i + " ago";
          } else {
            return counter + " " + i + "s ago";
          }
      }
    }
    return value;
  }
};
_PostdatePipe.\u0275fac = function PostdatePipe_Factory(t) {
  return new (t || _PostdatePipe)();
};
_PostdatePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "postdate", type: _PostdatePipe, pure: true, standalone: true });
_PostdatePipe.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PostdatePipe, factory: _PostdatePipe.\u0275fac, providedIn: "root" });
var PostdatePipe = _PostdatePipe;

// src/app/home/top/top.component.ts
function TopComponent_div_8_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "postdate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const topnews_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1("Published:", \u0275\u0275pipeBind1(2, 1, topnews_r2.post_day), "");
  }
}
function TopComponent_div_8_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "postdate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const topnews_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1("Updated:", \u0275\u0275pipeBind1(2, 1, topnews_r2.post_update_date), "");
  }
}
function TopComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "a", 16)(2, "span", 17);
    \u0275\u0275element(3, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22)(10, "span", 23)(11, "span", 24);
    \u0275\u0275text(12, "by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 25);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 26)(16, "span", 24);
    \u0275\u0275text(17, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, TopComponent_div_8_span_18_Template, 3, 3, "span", 27)(19, TopComponent_div_8_span_19_Template, 3, 3, "span", 27);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const topnews_r2 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate1("routerLink", "post/", topnews_r2.post_url, "");
    \u0275\u0275propertyInterpolate("title", topnews_r2.post_title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMapInterpolate1("background-image:url(http://balindra.com/post/", topnews_r2.post_img, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(topnews_r2.post_cat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(topnews_r2.post_title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(topnews_r2.post_author);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", topnews_r2.post_update_date === topnews_r2.post_day);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", topnews_r2.post_update_date !== topnews_r2.post_day);
  }
}
function TopComponent_div_10_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "postdate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1("Published:", \u0275\u0275pipeBind1(2, 1, post_r7.post_day), "");
  }
}
function TopComponent_div_10_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "postdate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1("Updated:", \u0275\u0275pipeBind1(2, 1, post_r7.post_update_date), "");
  }
}
function TopComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "a", 29)(2, "span", 17);
    \u0275\u0275element(3, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22)(10, "span", 26);
    \u0275\u0275template(11, TopComponent_div_10_span_11_Template, 3, 3, "span", 27)(12, TopComponent_div_10_span_12_Template, 3, 3, "span", 27);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const post_r7 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate1("routerLink", "post/", post_r7.post_url, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleMapInterpolate1("background-image:url(http://balindra.com/post/", post_r7.post_img, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r7.post_cat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r7.post_title);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", post_r7.post_update_date === post_r7.post_day);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", post_r7.post_update_date !== post_r7.post_day);
  }
}
var _TopComponent = class _TopComponent {
  constructor(http) {
    this.http = http;
    this.postReadUrl = "http://balindra.com/post/read.php";
    this.topPostArray = [];
    this.storeyData = [];
    this.storeyUrl = "http://balindra.com/post/webstories-read.php";
    this.customOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ["", ""],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 3
        }
      },
      nav: true
    };
    this.http.get(this.postReadUrl, { responseType: "json" }).subscribe((data) => {
      this.topPostArray = data;
      this.topPostArray = this.topPostArray.sort((b, a) => {
        return new Date(b.post_update_date) < new Date(a.post_update_date);
      });
    });
    this.http.get(this.storeyUrl, { responseType: "json" }).subscribe((data1) => {
      this.storeyData = data1;
      this.storeyData = this.storeyData.sort((b, a) => {
        return new Date(b.post_update_date) < new Date(a.post_update_date);
      });
    });
  }
};
_TopComponent.\u0275fac = function TopComponent_Factory(t) {
  return new (t || _TopComponent)(\u0275\u0275directiveInject(HttpClient));
};
_TopComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopComponent, selectors: [["app-top"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-md-12", "carousel_slider"], ["id", "featured-wrapper", 1, "flex-c"], ["id", "featured", "name", "Featured Posts", 1, "featured", "container", "row-x1", "section"], ["data-version", "2", "id", "HTML11", 1, "widget", "HTML", "is-visible", "type-feat3"], [1, "widget-content"], [1, "featured-items"], ["class", "featured-item cs item-0", 4, "ngFor", "ngForOf"], [1, "featured-grid", "recent_post"], ["class", "featured-item cs item-1", 4, "ngFor", "ngForOf"], ["id", "header-ads-wrap", 1, "flex-c"], ["id", "header-ads", "name", "Header ADS", 1, "header-ads", "container", "row-x1", "section"], ["data-version", "2", "id", "HTML1", 1, "widget", "HTML"], ["routerLink", "https://templateify.com/", 1, "ads-here"], [1, "featured-item", "cs", "item-0"], [1, "entry-inner", 3, "routerLink", "title"], [1, "entry-image-wrap", "before-mask", "is-image"], [1, "entry-image", "templateify-lazy"], [1, "entry-header", "entry-info"], [1, "entry-category"], [1, "entry-title"], [1, "entry-meta"], [1, "entry-author", "mi"], [1, "sp"], [1, "author-name"], [1, "entry-time", "mi"], [4, "ngIf"], [1, "featured-item", "cs", "item-1"], ["title", "Cheap Smart Phone Could And Help You Old Food Safe", 1, "entry-inner", 3, "routerLink"], ["data-image", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_yx38VS3CQJp5Mze6hZYePGBciy_adQIA5BxG96bPSxsyVVkvjZMqEhnE7pCJLHRnkC0PhM1CX3xjPhmy2iJNstHNj7q_VyJjpKLTM6zyqi4XPXgbk38Yh4pP3_5q7cd1H6MpRGK6K1PR_vEt1B8S172ZqIG68-4BAe11VxX2Tyfq8efMUtOwxpvt/w72-h72-p-k-no-nu/blog8.jpg", 1, "entry-image", "templateify-lazy"]], template: function TopComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
    \u0275\u0275template(8, TopComponent_div_8_Template, 20, 10, "div", 8);
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275template(10, TopComponent_div_10_Template, 13, 8, "div", 10);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "div", 6)(15, "a", 14);
    \u0275\u0275text(16, "Responsive Advertisement");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(17, "router-outlet");
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx.topPostArray.slice(0, 1));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.topPostArray.slice(1, 5));
  }
}, dependencies: [RouterOutlet, PostdatePipe, RouterLink], styles: ["\n\n.featured-grid-stories[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 10px;\n  margin: 10px;\n}\n@media (max-width:767px) {\n  .featured-grid-stories[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .featured-grid[_ngcontent-%COMP%]   .featured-item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .recent_post[_ngcontent-%COMP%] {\n    display: flex !important;\n    margin: 10px 0;\n  }\n  .recent_post[_ngcontent-%COMP%]   .featured-item[_ngcontent-%COMP%] {\n    width: 78% !important;\n    height: 100%;\n    margin: 6px 4px 0;\n    overflow: hidden;\n    border-radius: 4px;\n  }\n}\n.row-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  align-items: baseline;\n}\n.row-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9ob21lL3RvcC90b3AuY29tcG9uZW50LmNzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLmZlYXR1cmVkLWdyaWQtc3RvcmllcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo3NjdweCl7XHJcblxyXG4gICAgLmZlYXR1cmVkLWdyaWQtc3RvcmllcyB7XHJcbiAgICAgIFxyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZmVhdHVyZWQtZ3JpZCAuZmVhdHVyZWQtaXRlbXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgLnJlY2VudF9wb3N0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcbiAgIC5yZWNlbnRfcG9zdCAuZmVhdHVyZWQtaXRlbSB7XHJcbiAgICB3aWR0aDogNzglICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDZweCA0cHggMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG59XHJcblxyXG59XHJcbi5yb3ctZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcbi5yb3ctZmxleCBzcGFue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlc21va2VcclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxDQUFDO0FBQ0csV0FBUztBQUNULHlCQUF1QixPQUFPLENBQUMsRUFBQztBQUNoQyxZQUFVO0FBQ1YsVUFBUTtBQUNaO0FBQ0EsT0FBTSxDQUFDLFNBQVMsQ0FBQztBQUViLEdBUkg7QUFVTyxZQUFRO0FBQ1o7QUFFQSxHQUFDLGNBQWMsQ0FBQztBQUNaLFdBQU87QUFDWDtBQUNELEdBQUM7QUFDSSxhQUFTO0FBQ1QsWUFBUSxLQUFLO0FBQ2pCO0FBQ0QsR0FKQyxZQUlZLENBUEk7QUFRaEIsV0FBTztBQUNQLFlBQVE7QUFDUixZQUFRLElBQUksSUFBSTtBQUNoQixjQUFVO0FBQ1YsbUJBQWU7QUFFbkI7QUFFQTtBQUNBLENBQUM7QUFDRyxXQUFTO0FBQ1QsbUJBQWlCO0FBQ2pCLGVBQWE7QUFDakI7QUFDQSxDQUxDLFNBS1M7QUFDTixnQkFBYztBQUNkLFNBQU87QUFDWDsiLAogICJuYW1lcyI6IFtdCn0K */"] });
var TopComponent = _TopComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopComponent, { className: "TopComponent", filePath: "src\\app\\home\\top\\top.component.ts", lineNumber: 14 });
})();

// src/app/home/navbar/general/general.component.ts
var _GeneralComponent = class _GeneralComponent {
  ngOnInit() {
    $(document).ready(() => {
      $(".cata-sub-nav").on("scroll", () => {
        const $val = $(this).scrollLeft();
        if ($(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth) {
          $(".nav-next").hide();
        } else {
          $(".nav-next").show();
        }
        if ($val == 0) {
          $(".nav-prev").hide();
        } else {
          $(".nav-prev").show();
        }
      });
      console.log("init-scroll: " + $(".nav-next").scrollLeft());
      $(".nav-next").on("click", function() {
        $(".cata-sub-nav").animate({ scrollLeft: "+=460" }, 200);
      });
      $(".nav-prev").on("click", function() {
        $(".cata-sub-nav").animate({ scrollLeft: "-=460" }, 200);
      });
    });
  }
  constructor() {
  }
};
_GeneralComponent.\u0275fac = function GeneralComponent_Factory(t) {
  return new (t || _GeneralComponent)();
};
_GeneralComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeneralComponent, selectors: [["app-general"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 0, consts: [[1, "navbar_area", "topbar-wrap"], [1, "container"], [1, "row"], [1, "col-md-9"], [1, "navbar-nav-hori", "me-auto", "my-2", "my-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLink", "stories", 1, "nav-link", "active"], ["routerLink", "education", 1, "nav-link"], ["routerLink", "job", 1, "nav-link"], ["routerLink", "news", 1, "nav-link"], ["routerLink", "travel", 1, "nav-link"], ["routerLink", "entertainment", 1, "nav-link"], ["routerLink", "politics", 1, "nav-link"], ["routerLink", "market", 1, "nav-link"], ["routerLink", "meditation", 1, "nav-link"], [1, "col-md-3", "d-sm-none", "d-none", "d-md-block"], [1, "d-flex", "social-icons", "social", "navbar-nav-hori", "me-auto", "my-2", "my-lg-0", "float-end"], ["routerLink", "about", 1, "nav-link"], [1, "nav-link"]], template: function GeneralComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ul", 4)(5, "li", 5)(6, "a", 6);
    \u0275\u0275text(7, "Webstories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 5)(9, "a", 7);
    \u0275\u0275text(10, "Education");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li", 5)(12, "a", 8);
    \u0275\u0275text(13, "Jobs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li", 5)(15, "a", 9);
    \u0275\u0275text(16, "News");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "li", 5)(18, "a", 10);
    \u0275\u0275text(19, "Travel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "li", 5)(21, "a", 11);
    \u0275\u0275text(22, "Entertainment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "li", 5)(24, "a", 12);
    \u0275\u0275text(25, "Politics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "li", 5)(27, "a", 13);
    \u0275\u0275text(28, "Markets");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "li", 5)(30, "a", 14);
    \u0275\u0275text(31, "Meditation");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 15)(33, "ul", 16)(34, "li", 5)(35, "a", 17);
    \u0275\u0275text(36, "About Us");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "li", 5)(38, "a", 18);
    \u0275\u0275text(39, "Contact Us");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "li", 5)(41, "a", 18);
    \u0275\u0275text(42, "Youtube");
    \u0275\u0275elementEnd()()()()()()();
  }
}, dependencies: [RouterLink], styles: ["\n\n.navbar-nav-hori[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  -webkit-overflow-scrolling: touch;\n  white-space: nowrap;\n}\n.navbar-nav-hori[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.navbar_area[_ngcontent-%COMP%]   .navbar-nav-hori[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #585858;\n  padding: 4px 8px;\n}\n.navbar_area[_ngcontent-%COMP%]   .navbar-nav-hori[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background: #f9250f;\n  color: #fff;\n}\n.navbar_area[_ngcontent-%COMP%]   .navbar-nav-hori[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid #dbdbdb;\n}\n.topbar-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 3px 6px 0 rgba(191, 191, 191, 0.16);\n}\n@media (max-width:767px) {\n  .navbar_area[_ngcontent-%COMP%]   .navbar-nav-hori[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 0 4px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9ob21lL25hdmJhci9nZW5lcmFsL2dlbmVyYWwuY29tcG9uZW50LmNzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLm5hdmJhci1uYXYtaG9yaXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgXHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxuLyogRm9yIFdlYktpdCBpbXBsZW1lbnRhdGlvbnMsIHByb3ZpZGUgaW5lcnRpYSBzY3JvbGxpbmcgKi9cclxuLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4vKiBXZSBkb24ndCB3YW50IGludGVybmFsIGlubGluZSBlbGVtZW50cyB0byB3cmFwICovXHJcbndoaXRlLXNwYWNlOiBub3dyYXA7XHJcbi8qIFJlbW92ZSB0aGUgZGVmYXVsdCBzY3JvbGxiYXIgZm9yIFdlYktpdCBpbXBsZW1lbnRhdGlvbnMgKi9cclxufVxyXG4ubmF2YmFyLW5hdi1ob3JpOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLm5hdmJhcl9hcmVhIC5uYXZiYXItbmF2LWhvcmkgLm5hdi1saW5re1xyXG4gICAgY29sb3I6ICM1ODU4NTg7XHJcbiAgIFxyXG4gICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICBcclxuICAgIFxyXG4gfVxyXG5cclxuIC5uYXZiYXJfYXJlYSAubmF2YmFyLW5hdi1ob3JpIC5uYXYtbGluazpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNmOTI1MGY7XHJcbiAgIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiB9XHJcblxyXG5cclxuIC5uYXZiYXJfYXJlYSAubmF2YmFyLW5hdi1ob3JpIGxpOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RiZGJkYjtcclxuIH1cclxuIC50b3BiYXItd3JhcHtcclxuICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgxOTEsMTkxLDE5MSwwLjE2KTtcclxuIH1cclxuXHJcbiBAbWVkaWEobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC5uYXZiYXJfYXJlYSAubmF2YmFyLW5hdi1ob3JpIC5uYXYtbGlua3tcclxuICAgICAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgIH1cclxuIH0iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsQ0FBQztBQUNHLFdBQVM7QUFDVCxjQUFZO0FBRVosY0FBWTtBQUNaLHNCQUFvQjtBQUV4Qiw4QkFBNEI7QUFFNUIsZUFBYTtBQUViO0FBQ0EsQ0FaQyxlQVllO0FBQ1osV0FBUztBQUNiO0FBR0EsQ0FBQyxZQUFZLENBakJaLGdCQWlCNkIsQ0FBQztBQUMzQixTQUFPO0FBRU4sV0FBUyxJQUFJO0FBR2pCO0FBRUEsQ0FSQSxZQVFhLENBekJiLGdCQXlCOEIsQ0FSQSxRQVFTO0FBQ3BDLGNBQVk7QUFFWixTQUFPO0FBQ1Y7QUFHQSxDQWZBLFlBZWEsQ0FoQ2IsZ0JBZ0M4QixFQUFFLEtBQUs7QUFDcEMsZ0JBQWMsSUFBSSxNQUFNO0FBQ3pCO0FBQ0EsQ0FBQztBQUNBLGNBQVc7QUFDWCxjQUFZLEVBQUUsSUFBSSxJQUFJLEVBQUUsS0FBSyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQztBQUMxQztBQUVBLE9BQU0sQ0FBQyxTQUFTLENBQUM7QUFDZCxHQXhCSCxZQXdCZ0IsQ0F6Q2hCLGdCQXlDaUMsQ0F4Qkg7QUF5QnZCLGFBQVMsRUFBRTtBQUNmO0FBQ0g7IiwKICAibmFtZXMiOiBbXQp9Cg== */"] });
var GeneralComponent = _GeneralComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeneralComponent, { className: "GeneralComponent", filePath: "src\\app\\home\\navbar\\general\\general.component.ts", lineNumber: 11 });
})();

// src/app/home/navbar/topmenu/topmenu.component.ts
var _TopmenuComponent = class _TopmenuComponent {
  ngOnInit() {
    $(document).ready(function() {
      $(".nav-link").click(function() {
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      });
    });
  }
};
_TopmenuComponent.\u0275fac = function TopmenuComponent_Factory(t) {
  return new (t || _TopmenuComponent)();
};
_TopmenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopmenuComponent, selectors: [["app-topmenu"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 0, consts: [[1, "navbar_area", "topbar-wrap"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "navbar-nav-hori", "me-auto", "my-2", "my-lg-0", "justify-content-center"], [1, "nav-item"], ["routerLink", "health", 1, "nav-link"], ["routerLink", "food", 1, "nav-link"], ["routerLink", "science", 1, "nav-link"], ["routerLink", "lifestyle", 1, "nav-link"], ["routerLink", "climate", 1, "nav-link"], ["routerLink", "sport", 1, "nav-link"], ["routerLink", "technology", 1, "nav-link"], ["routerLink", "business", 1, "nav-link"], ["routerLink", "website", 1, "nav-link"], ["routerLink", "moviesong", 1, "nav-link"], ["routerLink", "blog", 1, "nav-link"]], template: function TopmenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ul", 4)(5, "li", 5)(6, "a", 6);
    \u0275\u0275text(7, "Health");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 5)(9, "a", 7);
    \u0275\u0275text(10, "Food");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li", 5)(12, "a", 8);
    \u0275\u0275text(13, "Science");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li", 5)(15, "a", 9);
    \u0275\u0275text(16, "Life Style");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "li", 5)(18, "a", 10);
    \u0275\u0275text(19, "Climate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "li", 5)(21, "a", 11);
    \u0275\u0275text(22, "Sports");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "li", 5)(24, "a", 12);
    \u0275\u0275text(25, "Technology");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "li", 5)(27, "a", 13);
    \u0275\u0275text(28, "Business");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "li", 5)(30, "a", 14);
    \u0275\u0275text(31, "Website News");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "li", 5)(33, "a", 15);
    \u0275\u0275text(34, "Top Trends Movie & Song");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "li", 5)(36, "a", 16);
    \u0275\u0275text(37, "Blog");
    \u0275\u0275elementEnd()()()()()()();
  }
}, dependencies: [RouterLink], styles: ["\n\n.topbar-wrap[_ngcontent-%COMP%] {\n  background: #191e25;\n}\n.navbar-nav-hori[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  -webkit-overflow-scrolling: touch;\n  white-space: nowrap;\n}\n.navbar-nav-hori[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.navbar-nav-hori[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #a5a3a3;\n  margin: 0 3px;\n  padding: 1px 7px;\n  border-radius: 3px;\n  margin-bottom: 8px;\n  font-size: 14px;\n  border: 1px solid #f5f5f540;\n}\n.navbar_area[_ngcontent-%COMP%]   .navbar-nav-hori[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background: #f9250f;\n  color: #fff;\n}\n@media (max-width:767px) {\n  .navbar-nav-hori[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n  }\n  .navbar-nav-hori[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9ob21lL25hdmJhci90b3BtZW51L3RvcG1lbnUuY29tcG9uZW50LmNzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLnRvcGJhci13cmFwe1xyXG4gICBcclxuICAgYmFja2dyb3VuZDojMTkxZTI1O1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdi1ob3Jpe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG4vKiBGb3IgV2ViS2l0IGltcGxlbWVudGF0aW9ucywgcHJvdmlkZSBpbmVydGlhIHNjcm9sbGluZyAqL1xyXG4td2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbi8qIFdlIGRvbid0IHdhbnQgaW50ZXJuYWwgaW5saW5lIGVsZW1lbnRzIHRvIHdyYXAgKi9cclxud2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuLyogUmVtb3ZlIHRoZSBkZWZhdWx0IHNjcm9sbGJhciBmb3IgV2ViS2l0IGltcGxlbWVudGF0aW9ucyAqL1xyXG59XHJcbi5uYXZiYXItbmF2LWhvcmk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiAubmF2YmFyLW5hdi1ob3JpIC5uYXYtbGlua3tcclxuICAgIGNvbG9yOiAjYTVhM2EzO1xyXG4gICAgbWFyZ2luOiAwIDNweDtcclxuICAgIHBhZGRpbmc6IDFweCA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgYm9yZGVyOjFweCBzb2xpZCAjZjVmNWY1NDBcclxuIH1cclxuXHJcbiAubmF2YmFyX2FyZWEgLm5hdmJhci1uYXYtaG9yaSAubmF2LWxpbms6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiNmOTI1MGY7XHJcbiAgIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiB9XHJcblxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAubmF2YmFyLW5hdi1ob3Jpe1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAubmF2YmFyLW5hdi1ob3JpIC5uYXYtbGlua3tcclxuICAgICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLENBQUM7QUFFRSxjQUFXO0FBQ2Q7QUFFQSxDQUFDO0FBQ0csV0FBUztBQUNULGNBQVk7QUFFWixjQUFZO0FBQ1osc0JBQW9CO0FBRXhCLDhCQUE0QjtBQUU1QixlQUFhO0FBRWI7QUFDQSxDQVpDLGVBWWU7QUFDWixXQUFTO0FBQ2I7QUFFQyxDQWhCQSxnQkFnQmlCLENBQUM7QUFDZixTQUFPO0FBQ1AsVUFBUSxFQUFFO0FBQ1YsV0FBUyxJQUFJO0FBQ2IsaUJBQWU7QUFDZixpQkFBZTtBQUNmLGFBQVc7QUFDVixVQUFPLElBQUksTUFBTTtBQUNyQjtBQUVBLENBQUMsWUFBWSxDQTFCYixnQkEwQjhCLENBVlosUUFVcUI7QUFDcEMsY0FBVztBQUVYLFNBQU87QUFDVjtBQUlELE9BQU0sQ0FBQyxTQUFTLENBQUM7QUFDZCxHQW5DRjtBQW9DSyxxQkFBaUI7QUFDcEI7QUFDQSxHQXRDRixnQkFzQ21CLENBdEJEO0FBdUJiLG1CQUFjO0FBQ2pCO0FBQ0g7IiwKICAibmFtZXMiOiBbXQp9Cg== */"] });
var TopmenuComponent = _TopmenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopmenuComponent, { className: "TopmenuComponent", filePath: "src\\app\\home\\navbar\\topmenu\\topmenu.component.ts", lineNumber: 11 });
})();

// src/app/home/navbar/menu/menu.component.ts
var _MenuComponent = class _MenuComponent {
  constructor(router) {
    this.router = router;
    this.userArrayData = [];
    this.currentTime = /* @__PURE__ */ new Date();
    $(window).bind("scroll", function() {
      var navHeight = $(window).height() - 400;
      if ($(window).scrollTop() > navHeight) {
        $(".top_main_header").addClass("fixed");
      } else {
        $(".top_main_header").removeClass("fixed");
      }
    });
    let user = sessionStorage.getItem("user");
    this.userArrayData = JSON.parse(user);
    console.log(this.userArrayData);
  }
  ngOnInit() {
    setInterval(() => {
      this.currentTime = /* @__PURE__ */ new Date();
    }, 1e3);
    const currentDate = /* @__PURE__ */ new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDate = date < 10 ? `0${date}` : date;
    this.currentDate = `${formattedDate}-${formattedMonth}-${year}`;
  }
};
_MenuComponent.\u0275fac = function MenuComponent_Factory(t) {
  return new (t || _MenuComponent)(\u0275\u0275directiveInject(Router));
};
_MenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuComponent, selectors: [["app-menu"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 104, vars: 5, consts: [[1, "header_area"], [1, "text-center"], ["src", "assets/img/ads.jpg", "alt", "", 1, "width_100_mobile"], [1, "top_main_header"], [1, "lang"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "list-inline", "justify-content-center"], [1, "nav-item"], ["data-lang", "en", 1, "nav-link", "lang-select"], ["data-lang", "ml", 1, "nav-link", "lang-select"], ["data-lang", "hi", 1, "nav-link", "lang-select"], ["data-lang", "bn", 1, "nav-link", "lang-select"], ["data-lang", "gu", 1, "nav-link", "lang-select"], ["data-lang", "mr", 1, "nav-link", "lang-select"], [1, "clearfix"], [1, "top-nav", "d-sm-none", "d-none", "d-md-block"], [1, "row", "align-items-center"], [1, "col-md-3", "p-0"], [1, "mt-2", "text-white", "btn", "btn-sm"], ["src", "assets/img/time.png", "alt", "News", 1, "icon_size"], [1, "text-grey", "btn", "btn-sm"], ["src", "assets/img/news.png", "alt", "News", 1, "icon_size"], [1, "col-md-5", "text-center"], ["routerLink", "http://balindra.com", 1, "navbar-brand1"], [1, "text-center", "mt-2", "text-bold", "text-grey"], [1, "col-md-4"], [1, "float-right", "header-right", "navigation_icon"], [1, "list-inline", "float-right"], ["routerLink", "game", "routerLinkActive", "active", 1, "nav-link"], ["src", "assets/img/games.png"], ["routerLink", "software", "routerLinkActive", "active", 1, "nav-link"], ["src", "assets/img/software.png"], ["routerLink", "login", "routerLinkActive", "active", 1, "nav-link"], ["src", "assets/img/user.png"], [1, "clearfix", "row-flex"], ["data-bs-scroll", "true", "data-bs-backdrop", "false", "tabindex", "-1", "id", "offcanvasScrolling", "aria-labelledby", "offcanvasScrollingLabel", 1, "offcanvas", "offcanvas-start"], [1, "offcanvas-header"], ["id", "offcanvasScrollingLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close"], [1, "offcanvas-body"], [1, "navbar", "navbar-expand-lg", "bg-body-tertiary", "d-md-none", "d-lg-none", "d-sm-block", "d-xs-block"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasScrolling", "aria-controls", "offcanvasScrolling"], [1, "navbar-toggler-icon"], ["routerLink", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], ["aria-current", "page", "routerLink", "#", 1, "nav-link", "active"], ["routerLink", "#", 1, "nav-link"], [1, "nav-link"]], template: function MenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "ul", 8)(9, "li", 9)(10, "a", 10);
    \u0275\u0275text(11, "ENGLISH");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li", 9)(13, "a", 11);
    \u0275\u0275text(14, "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li", 9)(16, "a", 12);
    \u0275\u0275text(17, "\u0939\u093F\u0902\u0926\u0940");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li", 9)(19, "a", 13);
    \u0275\u0275text(20, "\u09AC\u09BE\u0982\u09B2\u09BE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li", 9)(22, "a", 14);
    \u0275\u0275text(23, "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li", 9)(25, "a", 15);
    \u0275\u0275text(26, "\u092E\u0930\u093E\u0920\u0940");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275element(27, "div", 16);
    \u0275\u0275elementStart(28, "div", 17)(29, "div", 5)(30, "div", 18)(31, "div", 19)(32, "p", 20);
    \u0275\u0275element(33, "img", 21);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 22);
    \u0275\u0275element(37, "img", 23);
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39, "EPAPER | ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " TODAY\u2019S PAPER");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 24)(42, "h2")(43, "a", 25)(44, "span");
    \u0275\u0275text(45, "India News Today");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "p", 26);
    \u0275\u0275text(47, "JOURNALISM OF COURAGE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 27)(49, "div", 28)(50, "ul", 29)(51, "li", 9)(52, "a", 30);
    \u0275\u0275element(53, "img", 31);
    \u0275\u0275text(54, " Games");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "li", 9)(56, "a", 32);
    \u0275\u0275element(57, "img", 33);
    \u0275\u0275text(58, " Software");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "li", 9)(60, "a", 34);
    \u0275\u0275element(61, "img", 35);
    \u0275\u0275text(62, " Sing In");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 36);
    \u0275\u0275element(64, "ul", 29);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275element(65, "app-topmenu");
    \u0275\u0275elementStart(66, "div", 37)(67, "div", 38)(68, "h5", 39);
    \u0275\u0275text(69, "Offcanvas with body scrolling");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "button", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 41)(72, "p");
    \u0275\u0275text(73, "Try scrolling the rest of the page to see this option in action.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "nav", 42)(75, "div", 5)(76, "a", 43);
    \u0275\u0275element(77, "span", 44)(78, "span", 44)(79, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "a", 45);
    \u0275\u0275text(81, "India News Today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "button", 46);
    \u0275\u0275element(83, "span", 44)(84, "span", 44)(85, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 47)(87, "ul", 48)(88, "li", 9)(89, "a", 49);
    \u0275\u0275text(90, "Technology");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "li", 9)(92, "a", 50);
    \u0275\u0275text(93, "Jobs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "li", 9)(95, "a", 50);
    \u0275\u0275text(96, "Business ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "li", 9)(98, "a", 50);
    \u0275\u0275text(99, "Science ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "li", 9)(101, "a", 51);
    \u0275\u0275text(102, "Health");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275element(103, "app-general");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(34);
    \u0275\u0275textInterpolate2(" ", ctx.currentDate, " Time : ", \u0275\u0275pipeBind2(35, 2, ctx.currentTime, "hh:mm:ss a"), " ");
  }
}, dependencies: [GeneralComponent, TopmenuComponent, DatePipe], styles: ["\n\n.top-nav[_ngcontent-%COMP%]   .dropdown-megamenu[_ngcontent-%COMP%] {\n  position: static;\n}\n@media (min-width: 767px) {\n  .dropdown-container[_ngcontent-%COMP%] {\n    width: 98%;\n    left: 1%;\n    padding: 20px;\n  }\n  .width_100_mobile[_ngcontent-%COMP%] {\n    width: 700px;\n  }\n}\n.top-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #3a3838;\n  font-size: 15px;\n  font-weight: 600;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #3a3838 !important;\n}\n.top-nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0px 10px;\n  margin: 0 3px;\n  padding-left: 0;\n  font-size: 14px;\n  font-weight: 600;\n  transition: all 0.4s ease-in-out;\n}\n.no-margin[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  border-right: none !important;\n}\n.top-nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  text-decoration: none;\n  white-space: nowrap;\n  background: linear-gradient(0deg, #f9250f 54%, #2e2e2d 53%);\n  padding: 17px 6px;\n  border-radius: 5px;\n  color: #fff;\n}\n.top-nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #000;\n  border-radius: 1px;\n  padding: 8px;\n  border-radius: 3px;\n  font-family: fantasy;\n}\n.top-nav[_ngcontent-%COMP%]   .navbar-expand-lg[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  background: #fff;\n  border-bottom: 1px solid #f3f3f3;\n}\n.list-inline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n}\n.list-inline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-left: 0;\n  color: #444141;\n}\n.lang[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #c5c5c5;\n}\n.lang[_ngcontent-%COMP%]   .list-inline[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  -webkit-overflow-scrolling: touch;\n  white-space: nowrap;\n}\n.lang[_ngcontent-%COMP%]   .list-inline[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.lang[_ngcontent-%COMP%]   .list-inline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 0 10px;\n}\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f9250f;\n}\n.top-nav[_ngcontent-%COMP%] {\n  background: #191e25;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #a9a6a6;\n}\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.header-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dbd9d9;\n  font-weight: 500;\n}\n.btn-xs[_ngcontent-%COMP%] {\n  padding: 3px;\n  font-size: 13px;\n  background: #e53a28;\n  margin-top: 4px;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 1000;\n  width: 100%;\n}\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 25px;\n  height: 4px;\n  background-color: #e58139;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  margin: 0 auto 3px;\n  transition: background-color 0.2s;\n}\n.img-circle[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  height: 40px;\n  width: 40px !important;\n  display: table;\n  text-align: center;\n  margin: 1px auto;\n  margin-right: 8px;\n  border: 1px solid #fff;\n}\n.profile_heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  font-size: 18px;\n  display: block;\n}\n.profile_user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 7px;\n}\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n@media (max-width:767px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 2px 0;\n  }\n}\n.top-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f9250f;\n}\n.active[_ngcontent-%COMP%] {\n  color: yellow !important;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9ob21lL25hdmJhci9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLnRvcC1uYXYgLmRyb3Bkb3duLW1lZ2FtZW51IHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmRyb3Bkb3duLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICBsZWZ0OiAxJTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLndpZHRoXzEwMF9tb2JpbGV7XHJcbiAgICAgIHdpZHRoOiA3MDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRvcC1uYXYgLm5hdi1saW5re1xyXG4gICAgY29sb3I6ICMzYTM4Mzg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICBcclxuICB9XHJcbiAgLmJ0bi1kYW5nZXIge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAubmF2LWxpbmt7XHJcbiAgICBjb2xvcjogIzNhMzgzOCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudG9wLW5hdiAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5uby1tYXJnaW57XHJcbiAgbWFyZ2luOjAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4udG9wLW5hdiAubmF2YmFyLWJyYW5kIHtcclxuICBwYWRkaW5nLXRvcDogMC4zMTI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjMxMjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2Y5MjUwZiA1NCUsICMyZTJlMmQgNTMlKTtcclxuICBwYWRkaW5nOiAxN3B4IDZweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnRvcC1uYXYgLm5hdmJhci1icmFuZCBzcGFue1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XHJcbn1cclxuLnRvcC1uYXYgLm5hdmJhci1leHBhbmQtbGcge1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuIFxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7XHJcbn1cclxuXHJcblxyXG5cclxuLmxpc3QtaW5saW5lIGxpe1xyXG4gIGZsb2F0OmxlZnQ7XHJcbn1cclxuLmxpc3QtaW5saW5lIGxpIGF7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGNvbG9yOiAjNDQ0MTQxO1xyXG59XHJcblxyXG4ubGFuZ3tcclxuICBcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjNWM1YzU7XHJcbn1cclxuXHJcbi5sYW5nIC5saXN0LWlubGluZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgXHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG4vKiBGb3IgV2ViS2l0IGltcGxlbWVudGF0aW9ucywgcHJvdmlkZSBpbmVydGlhIHNjcm9sbGluZyAqL1xyXG4td2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbi8qIFdlIGRvbid0IHdhbnQgaW50ZXJuYWwgaW5saW5lIGVsZW1lbnRzIHRvIHdyYXAgKi9cclxud2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuLyogUmVtb3ZlIHRoZSBkZWZhdWx0IHNjcm9sbGJhciBmb3IgV2ViS2l0IGltcGxlbWVudGF0aW9ucyAqL1xyXG59XHJcbi5sYW5nIC5saXN0LWlubGluZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmxhbmcgLmxpc3QtaW5saW5lIGxpIGF7XHJcbiBmb250LXNpemU6IDE0cHg7XHJcbiBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuLm5hdi1pdGVtIGE6aG92ZXJ7XHJcbiAgY29sb3I6ICNmOTI1MGZcclxufVxyXG4udG9wLW5hdntcclxuICBiYWNrZ3JvdW5kOiAjMTkxZTI1O1xyXG5cclxufVxyXG4udGV4dC1ncmV5e1xyXG4gIGNvbG9yOiAjYTlhNmE2IFxyXG59XHJcbi5mbG9hdC1yaWdodHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmhlYWRlci1yaWdodCBsaSBhe1xyXG4gIGNvbG9yOiAjZGJkOWQ5O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmJ0bi14c3tcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTUzYTI4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcbi5maXhlZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlci1pY29ue1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAyNXB4O1xyXG5cdGhlaWdodDogNHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlNTgxMzk7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdG1hcmdpbjogMCBhdXRvIDNweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XHJcbn1cclxuLmltZy1jaXJjbGV7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxcHggYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcbi5wcm9maWxlX2hlYWRpbmd7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBcclxufVxyXG4ucHJvZmlsZV91c2Vye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbn1cclxuLmFsaWduLWl0ZW1zLWNlbnRlcntcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpe1xyXG4gIC5uYXZiYXJ7XHJcbiAgICBwYWRkaW5nOiAycHggMDtcclxuICB9XHJcbn1cclxuXHJcbi50b3AtbmF2IGxpIGE6aG92ZXJ7XHJcbiAgY29sb3I6I2Y5MjUwZjtcclxufVxyXG4uYWN0aXZle1xyXG4gIGNvbG9yOnllbGxvdyAhaW1wb3J0YW50O1xyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLENBQUMsUUFBUSxDQUFDO0FBQ04sWUFBVTtBQUNaO0FBQ0EsT0FBTyxDQUFDLFNBQVMsRUFBRTtBQUNqQixHQUFDO0FBQ0csV0FBTztBQUNQLFVBQU07QUFDTixhQUFTO0FBQ2I7QUFDQSxHQUFDO0FBQ0MsV0FBTztBQUNUO0FBQ0Y7QUFDQSxDQWJELFFBYVUsQ0FBQztBQUNSLFNBQU87QUFDUCxhQUFXO0FBQ1gsZUFBYTtBQUVmO0FBQ0EsQ0FBQztBQUNDLGFBQVc7QUFDYjtBQUNBLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQVRwQjtBQVVSLFNBQU87QUFDVDtBQUNBLENBekJELFFBeUJVLENBSFUsV0FHRSxDQVpYO0FBYVIsVUFBUTtBQUNSLFdBQVMsSUFBSTtBQUNiLFVBQVEsRUFBRTtBQUNWLGdCQUFhO0FBRWIsYUFBVztBQUVYLGVBQWE7QUFDYixjQUFZLElBQUksS0FBSztBQUN6QjtBQUVBLENBQUM7QUFDQyxVQUFPO0FBQ1AsZ0JBQWM7QUFDaEI7QUFDQSxDQXpDQyxRQXlDUSxDQUFDO0FBQ1IsZUFBYTtBQUNiLGtCQUFnQjtBQUNoQixnQkFBYztBQUNkLGFBQVc7QUFDWCxtQkFBaUI7QUFDakIsZUFBYTtBQUNiLGNBQVksZ0JBQWdCLElBQUksRUFBRSxRQUFRLEdBQUcsRUFBRSxRQUFRO0FBQ3ZELFdBQVMsS0FBSztBQUNkLGlCQUFlO0FBQ2YsU0FBTztBQUNUO0FBQ0EsQ0FyREMsUUFxRFEsQ0FaQyxhQVlhO0FBQ3JCLGNBQVk7QUFDWixTQUFPO0FBQ1AsaUJBQWU7QUFDZixXQUFTO0FBQ1QsaUJBQWU7QUFDZixlQUFhO0FBQ2Y7QUFDQSxDQTdEQyxRQTZEUSxDQXZDTjtBQXdDRCxhQUFXO0FBQ1gsbUJBQWlCO0FBRWpCLGNBQVk7QUFDWixpQkFBZSxJQUFJLE1BQU07QUFDM0I7QUFJQSxDQUFDLFlBQVk7QUFDWCxTQUFNO0FBQ1I7QUFDQSxDQUhDLFlBR1ksR0FBRztBQUNkLGdCQUFjO0FBQ2QsU0FBTztBQUNUO0FBRUEsQ0FBQztBQUVDLGlCQUFlLElBQUksT0FBTztBQUM1QjtBQUVBLENBTEMsS0FLSyxDQWJMO0FBY0MsV0FBUztBQUNULGNBQVk7QUFFWixjQUFZO0FBQ1osc0JBQW9CO0FBRXRCLDhCQUE0QjtBQUU1QixlQUFhO0FBRWI7QUFDQSxDQWpCQyxLQWlCSyxDQXpCTCxXQXlCaUI7QUFDaEIsV0FBUztBQUNYO0FBT0EsQ0ExQkMsS0EwQkssQ0FsQ0wsWUFrQ2tCLEdBQUc7QUFDckIsYUFBVztBQUNYLFdBQVMsRUFBRTtBQUNaO0FBQ0EsQ0FBQyxTQUFTLENBQUM7QUFDVCxTQUFPO0FBQ1Q7QUFDQSxDQWhIQztBQWlIQyxjQUFZO0FBRWQ7QUFDQSxDQUFDO0FBQ0MsU0FBTztBQUNUO0FBQ0EsQ0FBQztBQUNDLFNBQU87QUFDVDtBQUNBLENBQUMsYUFBYSxHQUFHO0FBQ2YsU0FBTztBQUNQLGVBQWE7QUFDZjtBQUNBLENBQUM7QUFDQyxXQUFTO0FBQ1AsYUFBVztBQUNYLGNBQVk7QUFDWixjQUFZO0FBQ2hCO0FBQ0EsQ0FBQztBQUNDLFlBQVU7QUFDVixPQUFLO0FBQ0wsY0FBWTtBQUNaLFdBQVM7QUFDVCxTQUFPO0FBQ1Q7QUFFQSxDQUFDO0FBQ0EsV0FBUztBQUNULFNBQU87QUFDUCxVQUFRO0FBQ1Isb0JBQWtCO0FBQ2xCLHlCQUF1QjtBQUN2QixzQkFBb0I7QUFDcEIsaUJBQWU7QUFDZixVQUFRLEVBQUUsS0FBSztBQUNkLGNBQVksaUJBQWlCO0FBQy9CO0FBQ0EsQ0FBQztBQUNDLGlCQUFlO0FBQ2YsVUFBUTtBQUNSLFNBQU87QUFDUCxXQUFTO0FBQ1QsY0FBWTtBQUNaLFVBQVEsSUFBSTtBQUNaLGdCQUFjO0FBQ2QsVUFBUSxJQUFJLE1BQU07QUFDcEI7QUFDQSxDQUFDO0FBQ0MsY0FBWTtBQUNaLGVBQWE7QUFDYixhQUFXO0FBQ1gsV0FBUztBQUVYO0FBQ0EsQ0FBQztBQUNDLFdBQVM7QUFDUCxlQUFhO0FBQ2IsVUFBUTtBQUNaO0FBQ0EsQ0FBQztBQUNDLGVBQWE7QUFDZjtBQUNBLE9BQU0sQ0FBQyxTQUFTLENBQUM7QUFDZixHQUFDO0FBQ0MsYUFBUyxJQUFJO0FBQ2Y7QUFDRjtBQUVBLENBdExDLFFBc0xRLEdBQUcsQ0FBQztBQUNYLFNBQU07QUFDUjtBQUNBLENBQUM7QUFDQyxTQUFNO0FBQ1I7IiwKICAibmFtZXMiOiBbXQp9Cg== */"] });
var MenuComponent = _MenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuComponent, { className: "MenuComponent", filePath: "src\\app\\home\\navbar\\menu\\menu.component.ts", lineNumber: 16 });
})();

// src/app/home/navbar/breakingnews/breakingnews.component.ts
var _BreakingnewsComponent = class _BreakingnewsComponent {
};
_BreakingnewsComponent.\u0275fac = function BreakingnewsComponent_Factory(t) {
  return new (t || _BreakingnewsComponent)();
};
_BreakingnewsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BreakingnewsComponent, selectors: [["app-breakingnews"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 0, consts: [["id", "ticker-wrapper", 1, "flex-c"], ["id", "ticker", "name", "Ticker News", 1, "ticker", "container", "row-x1", "section"], ["data-version", "2", "id", "HTML20", 1, "widget", "HTML", "is-visible", "type-ticker"], [1, "widget-title"], [1, "title"], ["id", "myCarousel", "data-bs-ride", "carousel", 1, "widget-content", "carousel", "slide"], [1, "ticker-items", "carousel-inner"], [1, "ticker-item", "item-0", "carousel-item", "active"], [1, "entry-title"], ["href", "https://webify-templateify.blogspot.com/2023/03/cheap-smart-phone-could-and-help-you.html", "title", "How Drones Could be the Future of Indian Farming"], [1, "ticker-item", "item-1", "carousel-item"], ["href", "https://webify-templateify.blogspot.com/2023/03/cheap-smart-phone-could-and-help-you_18.html", "title", "Cheap Smart Phone Could And Help You Old Food Safe"], [1, "ticker-item", "item-2", "carousel-item"], ["href", "https://webify-templateify.blogspot.com/2022/06/cheap-smart-phone-could-and-help-you_83.html", "title", "Donald Trump Back on Google-Owned YouTube: Read the Company's Statement"], [1, "ticker-item", "item-3", "carousel-item"], ["href", "https://webify-templateify.blogspot.com/2018/05/cheap-smart-phone-could-and-help-you.html", "title", "Another Country Bans TikTok on Government Devices"], [1, "ticker-item", "item-4", "carousel-item"], ["href", "https://webify-templateify.blogspot.com/2018/05/cheap-smart-phone-could-and-help-you_23.html", "title", "Realme 10 Receives a New Update for March 2023"], [1, "ticker-item", "item-5", "carousel-item"], ["href", "https://webify-templateify.blogspot.com/2018/05/cheap-smart-phone-could-and-help-you_35.html", "title", "OpenAI Announces ChatGPT Successor GPT-4"], [1, "ticker-nav"], ["data-bs-target", "#myCarousel", "data-bs-slide", "prev", "aria-label", "Previous", 1, "tn-prev"], ["data-bs-target", "#myCarousel", "data-bs-slide", "next", "aria-label", "Next", 1, "tn-next"]], template: function BreakingnewsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
    \u0275\u0275text(5, "Breaking");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "h2", 8)(10, "a", 9);
    \u0275\u0275text(11, "How Drones Could be the Future of Indian Farming");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 10)(13, "h2", 8)(14, "a", 11);
    \u0275\u0275text(15, "Cheap Smart Phone Could And Help You Old Food Safe");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 12)(17, "h2", 8)(18, "a", 13);
    \u0275\u0275text(19, "Donald Trump Back on Google-Owned YouTube: Read the Company's Statement");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 14)(21, "h2", 8)(22, "a", 15);
    \u0275\u0275text(23, "Another Country Bans TikTok on Government Devices");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 16)(25, "h2", 8)(26, "a", 17);
    \u0275\u0275text(27, "Realme 10 Receives a New Update for March 2023");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 18)(29, "h2", 8)(30, "a", 19);
    \u0275\u0275text(31, "OpenAI Announces ChatGPT Successor GPT-4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 20);
    \u0275\u0275element(33, "button", 21)(34, "button", 22);
    \u0275\u0275elementEnd()()()()();
  }
}, styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var BreakingnewsComponent = _BreakingnewsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BreakingnewsComponent, { className: "BreakingnewsComponent", filePath: "src\\app\\home\\navbar\\breakingnews\\breakingnews.component.ts", lineNumber: 10 });
})();

// src/app/home/navbar/navbar.component.ts
var _NavbarComponent = class _NavbarComponent {
};
_NavbarComponent.\u0275fac = function NavbarComponent_Factory(t) {
  return new (t || _NavbarComponent)();
};
_NavbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, template: function NavbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-breakingnews")(2, "app-menu");
    \u0275\u0275elementEnd();
  }
}, dependencies: [CommonModule, HttpClientModule, MenuComponent, BreakingnewsComponent], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var NavbarComponent = _NavbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\home\\navbar\\navbar.component.ts", lineNumber: 16 });
})();

// src/app/home/news/newstoday.component.ts
function NewstodayComponent_div_17_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "postdate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const news_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1("Published:", \u0275\u0275pipeBind1(2, 1, news_r9.post_day), "");
  }
}
function NewstodayComponent_div_17_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "postdate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const news_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1("Updated:", \u0275\u0275pipeBind1(2, 1, news_r9.post_update_date), "");
  }
}
function NewstodayComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "a", 44);
    \u0275\u0275element(2, "span", 45);
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 47)(6, "h2", 48)(7, "a", 49);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 50)(10, "span", 51)(11, "span", 52);
    \u0275\u0275text(12, "by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 53);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 54)(16, "span", 52);
    \u0275\u0275text(17, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, NewstodayComponent_div_17_span_18_Template, 3, 3, "span", 55)(19, NewstodayComponent_div_17_span_19_Template, 3, 3, "span", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "span", 56);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const news_r9 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate("title", news_r9.post_title);
    \u0275\u0275propertyInterpolate1("routerLink", "post/", news_r9.post_url, "");
    \u0275\u0275advance(1);
    \u0275\u0275styleMapInterpolate1("background-image:url(http://balindra.com/post/", news_r9.post_img, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Published:", news_r9.post_cat, "");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "post/", news_r9.post_url, "");
    \u0275\u0275propertyInterpolate("title", news_r9.post_title);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(news_r9.post_title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(news_r9.post_author);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", news_r9.post_update_date === "" || news_r9.post_update_date == null);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", news_r9.post_update_date === "" && news_r9.post_update_date == null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(news_r9.post_meta_desc);
  }
}
function NewstodayComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "a", 58);
    \u0275\u0275element(2, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47)(4, "h2", 48)(5, "a", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 50)(8, "span", 54)(9, "time", 59);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "postdate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const news_r14 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate("title", news_r14.post_title);
    \u0275\u0275propertyInterpolate("routerLink", news_r14.post_url);
    \u0275\u0275advance(1);
    \u0275\u0275styleMapInterpolate1("background-image:url(http://balindra.com/post/", news_r14.post_img, ")");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "post/", news_r14.post_url, "");
    \u0275\u0275propertyInterpolate("title", news_r14.post_title);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(news_r14.post_title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, news_r14.post_day));
  }
}
function NewstodayComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "a", 44);
    \u0275\u0275element(2, "span", 45);
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 47)(6, "h2", 48)(7, "a", 49);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 50)(10, "span", 51)(11, "span", 52);
    \u0275\u0275text(12, "by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 53);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 54)(16, "span", 52);
    \u0275\u0275text(17, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "time", 61);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "postdate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const news_r15 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate("title", news_r15.post_title);
    \u0275\u0275propertyInterpolate1("routerLink", "post/", news_r15.post_url, "");
    \u0275\u0275advance(1);
    \u0275\u0275styleMapInterpolate1("background-image:url(http://balindra.com/post/", news_r15.post_img, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(news_r15.post_cat);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "post/", news_r15.post_url, "");
    \u0275\u0275propertyInterpolate("title", news_r15.post_title);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(news_r15.post_title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(news_r15.post_author);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 11, news_r15.post_day));
  }
}
function NewstodayComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "a", 63)(2, "span");
    \u0275\u0275element(3, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 64)(5, "span", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 50)(10, "span", 51)(11, "span", 52);
    \u0275\u0275text(12, "by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 53);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 54)(16, "span", 52);
    \u0275\u0275text(17, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "time", 65);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "postdate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const news_r16 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate("routerLink", news_r16.post_url);
    \u0275\u0275propertyInterpolate("title", news_r16.post_title);
    \u0275\u0275advance(1);
    \u0275\u0275classMap(news_r16.post_title);
    \u0275\u0275advance(1);
    \u0275\u0275styleMapInterpolate1("background-image:url(http://balindra.com/post/", news_r16.post_img, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(news_r16.post_cat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(news_r16.post_title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(news_r16.post_author);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 12, news_r16.post_day));
  }
}
function NewstodayComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "a", 58);
    \u0275\u0275element(2, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47)(4, "h2", 48)(5, "a", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 50)(8, "span", 54)(9, "time", 67);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "postdate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const news_r17 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate("title", news_r17.post_title);
    \u0275\u0275propertyInterpolate("routerLink", news_r17.post_url);
    \u0275\u0275advance(1);
    \u0275\u0275styleMapInterpolate1("background-image:url(http://balindra.com/post/", news_r17.post_img, ")");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "post/", news_r17.post_url, "");
    \u0275\u0275propertyInterpolate("title", news_r17.post_title);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(news_r17.post_title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, news_r17.post_day));
  }
}
function NewstodayComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "a", 63)(2, "span", 68);
    \u0275\u0275element(3, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 64)(5, "span", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 50)(10, "span", 51)(11, "span", 52);
    \u0275\u0275text(12, "by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 53);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 54)(16, "span", 52);
    \u0275\u0275text(17, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "time", 65);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "postdate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const news_r18 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate("routerLink", news_r18.post_url);
    \u0275\u0275propertyInterpolate("title", news_r18.post_title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMapInterpolate1("background-image:url(http://balindra.com/post/", news_r18.post_img, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(news_r18.post_cat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(news_r18.post_title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(news_r18.post_author);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 9, news_r18.post_day));
  }
}
function NewstodayComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "a", 58);
    \u0275\u0275element(2, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47)(4, "h2", 48)(5, "a", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 50)(8, "span", 54)(9, "time", 67);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "postdate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const news_r19 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate("title", news_r19.post_title);
    \u0275\u0275propertyInterpolate("routerLink", news_r19.post_url);
    \u0275\u0275advance(1);
    \u0275\u0275styleMapInterpolate1("background-image:url(http://balindra.com/post/", news_r19.post_img, ")");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "post/", news_r19.post_url, "");
    \u0275\u0275propertyInterpolate("title", news_r19.post_title);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(news_r19.post_title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, news_r19.post_day));
  }
}
function NewstodayComponent_article_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 69)(1, "a", 70);
    \u0275\u0275element(2, "span", 45);
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 47)(6, "h2", 48)(7, "a", 49);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 50)(10, "span", 51)(11, "span", 71);
    \u0275\u0275text(12, "by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 53);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 54)(16, "span", 52);
    \u0275\u0275text(17, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "time", 72);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "postdate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "p", 73);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 49);
    \u0275\u0275text(24, "Read More");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const news_r20 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate("routerLink", news_r20.post_url);
    \u0275\u0275propertyInterpolate("title", news_r20.post_title);
    \u0275\u0275advance(1);
    \u0275\u0275styleMapInterpolate1("background-image:url(http://balindra.com/post/", news_r20.post_img, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(news_r20.post_cat);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "post/", news_r20.post_url, "");
    \u0275\u0275propertyInterpolate("title", news_r20.post_title);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(news_r20.post_title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(news_r20.post_author);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 14, news_r20.post_day));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", news_r20.post_meta_desc.substr(0, 170), "..");
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate1("routerLink", "post/", news_r20.post_url, "");
    \u0275\u0275propertyInterpolate("title", news_r20.post_title);
  }
}
function NewstodayComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "a", 44);
    \u0275\u0275element(2, "span", 45);
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 47)(6, "h2", 48)(7, "a", 49);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 50)(10, "span", 54)(11, "time", 65);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "postdate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const science_r21 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate("title", science_r21.post_title);
    \u0275\u0275propertyInterpolate1("routerLink", "post/", science_r21.post_url, "");
    \u0275\u0275advance(1);
    \u0275\u0275styleMapInterpolate1("background-image:url(http://balindra.com/post/", science_r21.post_img, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(science_r21.post_cat);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "post/", science_r21.post_url, "");
    \u0275\u0275propertyInterpolate("title", science_r21.post_title);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(science_r21.post_title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, science_r21.post_day));
  }
}
var _NewstodayComponent = class _NewstodayComponent {
  constructor(http) {
    this.http = http;
    this.postReadUrl = "https://hinditerm.com/demo/post/read.php";
    this.postArrayData = [];
    this.newsArrayData = [];
    this.newsReadUrl = "https://hinditerm.com/demo/post/news.php";
    this.techArrayData = [];
    this.techReadUrl = "https://hinditerm.com/demo/post/tech.php";
    this.jobArrayData = [];
    this.jobReadUrl = "https://hinditerm.com/demo/post/job.php";
    this.busiArrayData = [];
    this.busiReadUrl = "https://hinditerm.com/demo/post/business.php";
    this.healthArrayData = [];
    this.healthReadUrl = "https://hinditerm.com/demo/post/health.php";
    this.scienceArrayData = [];
    this.scienceReadUrl = "https://hinditerm.com/demo/post/science.php";
    this.http.get(this.postReadUrl, { responseType: "json" }).subscribe((data) => {
      this.postArrayData = data;
      this.postArrayData = this.postArrayData.sort((b, a) => {
        return new Date(b.post_update_date) < new Date(a.post_update_date);
      });
    });
    this.http.get(this.newsReadUrl, { responseType: "json" }).subscribe((data) => {
      this.newsArrayData = data;
      this.newsArrayData = this.newsArrayData.sort((b, a) => {
        return new Date(b.post_update_date) < new Date(a.post_update_date);
      });
    });
    this.http.get(this.techReadUrl, { responseType: "json" }).subscribe((data) => {
      this.techArrayData = data;
      this.techArrayData = this.techArrayData.sort((b, a) => {
        return new Date(b.post_update_date) < new Date(a.post_update_date);
      });
    });
    this.http.get(this.jobReadUrl, { responseType: "json" }).subscribe((data) => {
      this.jobArrayData = data;
      this.jobArrayData = this.jobArrayData.sort((b, a) => {
        return new Date(b.post_update_date) < new Date(a.post_update_date);
      });
    });
    this.http.get(this.busiReadUrl, { responseType: "json" }).subscribe((data) => {
      this.busiArrayData = data;
      this.busiArrayData = this.busiArrayData.sort((b, a) => {
        return new Date(b.post_update_date) < new Date(a.post_update_date);
      });
    });
    this.http.get(this.healthReadUrl, { responseType: "json" }).subscribe((data) => {
      this.healthArrayData = data;
      this.healthArrayData = this.healthArrayData.sort((b, a) => {
        return new Date(b.post_update_date) < new Date(a.post_update_date);
      });
    });
    this.http.get(this.scienceReadUrl, { responseType: "json" }).subscribe((data1) => {
      this.scienceArrayData = data1;
      this.scienceArrayData = this.scienceArrayData.sort((b, a) => {
        return new Date(b.post_update_date) < new Date(a.post_update_date);
      });
    });
  }
  scrolltop() {
    window.scrollTo(0, 0);
  }
};
_NewstodayComponent.\u0275fac = function NewstodayComponent_Factory(t) {
  return new (t || _NewstodayComponent)(\u0275\u0275directiveInject(HttpClient));
};
_NewstodayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewstodayComponent, selectors: [["app-newstoday"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 77, vars: 9, consts: [[1, "thetop"], ["id", "content-wrapper", 1, "flex-c"], [1, "container", 2, "transform", "none"], [1, "row"], [1, "col-md-8", "col-xs-12", "p-0"], ["id", "main-wrapper", 1, "has-margin", 2, "position", "relative", "overflow", "visible", "box-sizing", "border-box", "min-height", "1px"], [1, "theiaStickySidebar", 2, "padding-top", "0px", "padding-bottom", "1px", "position", "static", "transform", "none"], ["id", "content-section-1", "name", "Content Section 2", 1, "content-section", "section"], ["data-version", "2", "id", "HTML14", 1, "widget", "HTML", "is-visible", "type-block"], [1, "widget-title", "title-wrap"], [1, "title"], ["routerLink", "/search/label/Game", 1, "title-link"], [1, "widget-content"], [1, "content-block", "block-items"], ["class", "block-item item-0", 4, "ngFor", "ngForOf"], [1, "block-list"], ["class", "block-item item-1", 4, "ngFor", "ngForOf"], ["data-version", "2", "id", "HTML7", 1, "widget", "HTML", "is-visible", "type-grid2"], ["routerLink", "/search/label/lifestyle", 1, "title-link"], [1, "content-block", "grid2-items"], ["class", "grid2-item post", 4, "ngFor", "ngForOf"], ["data-version", "2", "id", "HTML8", "data-align", "left", 1, "widget", "HTML", "is-visible", "column-style", "type-column"], ["routerLink", "/search/label/Design", 1, "title-link"], [1, "content-block", "column-items"], ["class", "col-item cs item-0", 4, "ngFor", "ngForOf"], ["class", "col-item item-1", 4, "ngFor", "ngForOf"], [1, "title-link"], ["data-shortcode", "{getPosts} $results={4} $label={Design} $type={col-left}", 1, "widget-content"], ["data-version", "2", "id", "HTML17", 1, "widget", "HTML", "is-ad"], ["routerLink", "#", 1, "ads-here"], ["name", "Main Posts", 1, "main", "section"], ["data-version", "2", "id", "Blog1", 1, "widget", "Blog", "flex-col"], [1, "title-wrap", "main-title"], ["routerLink", "/search", 1, "title-link"], [1, "blog-posts", "index-post-wrap", "flex-col"], ["class", "blog-post hentry index-post post-0", 4, "ngFor", "ngForOf"], ["id", "content-section-2", "name", "Content Section 3", 1, "content-section", "section"], ["data-version", "2", "id", "HTML18", 1, "widget", "HTML", "is-ad"], ["data-version", "2", "id", "HTML10", 1, "widget", "HTML", "is-visible", "type-grid"], ["routerLink", "/search/label/living", 1, "title-link"], [1, "content-block", "grid-items"], ["class", "grid-item post", 4, "ngFor", "ngForOf"], [1, "col-md-4", "p-0"], [1, "block-item", "item-0"], [1, "entry-image-wrap", "is-image", 3, "title", "routerLink"], [1, "entry-image", "templateify-lazy"], [1, "entry-category"], [1, "entry-header"], [1, "entry-title"], [3, "routerLink", "title"], [1, "entry-meta"], [1, "entry-author", "mi"], [1, "sp"], [1, "author-name"], [1, "entry-time", "mi"], ["class", "entry-category", 4, "ngIf"], [1, "entry-excerpt", "excerpt"], [1, "block-item", "item-1"], [1, "entry-image-wrap", "sz-1", "is-image", 3, "title", "routerLink"], ["datetime", "2018-05-23T19:51:00.000-07:00", 1, "published"], [1, "grid2-item", "post"], ["datetime", "2023-03-18T22:13:00.004-07:00", 1, "published"], [1, "col-item", "cs", "item-0"], [1, "entry-inner", 3, "routerLink", "title"], [1, "entry-header", "entry-info"], ["datetime", "2022-06-11T22:32:00.000-07:00", 1, "published"], [1, "col-item", "item-1"], ["datetime", "2018-05-23T19:48:00.000-07:00", 1, "published"], [1, "entry-image-wrap", "before-mask", "is-image"], [1, "blog-post", "hentry", "index-post", "post-0"], [1, "entry-image-wrap", "is-image", 3, "routerLink", "title"], [1, "by", "sp"], ["datetime", "2023-03-18T22:13:00-07:00", 1, "published"], [1, "entry-excerpt", "excerpt", "my-3"], [1, "grid-item", "post"]], template: function NewstodayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 0)(1, "app-navbar");
    \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "main", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "h3", 10);
    \u0275\u0275text(12, "News");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 11);
    \u0275\u0275text(14, "View all");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12)(16, "div", 13);
    \u0275\u0275template(17, NewstodayComponent_div_17_Template, 22, 13, "div", 14);
    \u0275\u0275elementStart(18, "div", 15);
    \u0275\u0275template(19, NewstodayComponent_div_19_Template, 12, 11, "div", 16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 17)(21, "div", 9)(22, "h3", 10);
    \u0275\u0275text(23, "Technology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 18);
    \u0275\u0275text(25, "View all");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 12)(27, "div", 19);
    \u0275\u0275template(28, NewstodayComponent_div_28_Template, 21, 13, "div", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 21)(30, "div", 9)(31, "h3", 10);
    \u0275\u0275text(32, "Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "a", 22);
    \u0275\u0275text(34, "View all");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 12)(36, "div", 23);
    \u0275\u0275template(37, NewstodayComponent_div_37_Template, 21, 14, "div", 24)(38, NewstodayComponent_div_38_Template, 12, 11, "div", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 21)(40, "div", 9)(41, "h3", 10);
    \u0275\u0275text(42, "Business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a", 26);
    \u0275\u0275text(44, "View all");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 27)(46, "div", 23);
    \u0275\u0275template(47, NewstodayComponent_div_47_Template, 21, 11, "div", 24)(48, NewstodayComponent_div_48_Template, 12, 11, "div", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 28)(50, "div", 12)(51, "a", 29);
    \u0275\u0275text(52, "Responsive Advertisement");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 30)(54, "div", 31)(55, "div", 32)(56, "h3", 10);
    \u0275\u0275text(57, "Health");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "a", 33);
    \u0275\u0275text(59, "View all");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 34);
    \u0275\u0275template(61, NewstodayComponent_article_61_Template, 25, 16, "article", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 36)(63, "div", 37)(64, "div", 12)(65, "a", 29);
    \u0275\u0275text(66, "Responsive Advertisement");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 38)(68, "div", 9)(69, "h3", 10);
    \u0275\u0275text(70, "Science");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "a", 39);
    \u0275\u0275text(72, "View all");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 12)(74, "div", 40);
    \u0275\u0275template(75, NewstodayComponent_div_75_Template, 14, 12, "div", 41);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275element(76, "div", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx.newsArrayData.slice(0, 1));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.newsArrayData.slice(1, 5));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx.techArrayData.slice(0, 4));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx.jobArrayData.slice(0, 1));
    \u0275\u0275advance(1);
    \u0275\u0275property("ngForOf", ctx.jobArrayData.slice(1, 4));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx.busiArrayData.slice(0, 1));
    \u0275\u0275advance(1);
    \u0275\u0275property("ngForOf", ctx.busiArrayData.slice(1, 4));
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx.healthArrayData.slice(0, 6));
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx.scienceArrayData);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, HttpClientModule, PostdatePipe, NavbarComponent], styles: ["\n\n#main-wrapper[_ngcontent-%COMP%] {\n  width: calc(100% - 30px);\n  padding-right: 10px;\n}\n.title-wrap[_ngcontent-%COMP%]    > .title-link[_ngcontent-%COMP%], .title-wrap[_ngcontent-%COMP%]    > .title-link[_ngcontent-%COMP%] {\n  background: none;\n}\n.title-wrap[_ngcontent-%COMP%]    > .title-link[_ngcontent-%COMP%]:hover {\n  background-color: #f50000;\n}\n.title-wrap[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  height: inherit;\n}\n@media (max-width:767px) {\n  #main-wrapper[_ngcontent-%COMP%] {\n    width: inherit !important;\n    padding-right: 0 !important;\n  }\n  .featured-grid[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .featured-items[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .featured-grid[_ngcontent-%COMP%]   .featured-item[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    margin: 12px 0 0;\n    overflow: hidden;\n    border-radius: 4px;\n  }\n  #content-wrapper[_ngcontent-%COMP%] {\n    padding-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9ob21lL25ld3MvbmV3c3RvZGF5LmNvbXBvbmVudC5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIiNtYWluLXdyYXBwZXJ7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7IFxyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4udGl0bGUtd3JhcCA+IC50aXRsZS1saW5rLCAudGl0bGUtd3JhcCA+IC50aXRsZS1saW5re1xyXG4gICAgYmFja2dyb3VuZDpub25lO1xyXG4gICBcclxufVxyXG4udGl0bGUtd3JhcCA+IC50aXRsZS1saW5rOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1MDAwMDtcclxufVxyXG4udGl0bGUtd3JhcHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAjbWFpbi13cmFwcGVye1xyXG4gICAgICAgIHdpZHRoOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZlYXR1cmVkLWdyaWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgXHJcbiAgICAuZmVhdHVyZWQtaXRlbXN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmZlYXR1cmVkLWdyaWQgLmZlYXR1cmVkLWl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDEycHggMCAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgI2NvbnRlbnQtd3JhcHBlcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxDQUFDO0FBQ0csU0FBTyxLQUFLLEtBQUssRUFBRTtBQUNuQixpQkFBZTtBQUNuQjtBQUNBLENBQUMsV0FBVyxFQUFFLENBQUM7QUFBWSxDQUExQixXQUFzQyxFQUFFLENBQTFCO0FBQ1gsY0FBVztBQUVmO0FBQ0EsQ0FKQyxXQUlXLEVBQUUsQ0FKQyxVQUlVO0FBQ3JCLG9CQUFrQjtBQUN0QjtBQUNBLENBUEM7QUFRRyxXQUFTLEtBQUs7QUFDZCxVQUFRO0FBQ1o7QUFFQSxPQUFNLENBQUMsU0FBUyxDQUFDO0FBQ2IsR0FqQkg7QUFrQk8sV0FBTztBQUNQLG1CQUFlO0FBQ25CO0FBRUEsR0FBQztBQUNHLGFBQVM7QUFDYjtBQUVBLEdBQUM7QUFDRyxhQUFTO0FBQ2I7QUFDQSxHQVBDLGNBT2MsQ0FBQztBQUNaLFdBQU87QUFDUCxZQUFRO0FBQ1IsWUFBUSxLQUFLLEVBQUU7QUFDZixjQUFVO0FBQ1YsbUJBQWU7QUFDbkI7QUFDQSxHQUFDO0FBQ0csaUJBQWE7QUFDakI7QUFDSjsiLAogICJuYW1lcyI6IFtdCn0K */"] });
var NewstodayComponent = _NewstodayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewstodayComponent, { className: "NewstodayComponent", filePath: "src\\app\\home\\news\\newstoday.component.ts", lineNumber: 16 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", component: NewstodayComponent },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "", component: LoginComponent },
      { path: "registration", component: RegistrationComponent },
      { path: "login", component: LoginComponent },
      { path: "registrationotp/:id", component: RegistrationotpComponent },
      { path: "otpvarification", component: OtpvarificationComponent },
      {
        path: "dashboard",
        component: DashboardComponent,
        children: [
          { path: "createpost", component: CreatepostComponent },
          { path: "viewpost", component: PostComponent },
          { path: "updatepost/:id", component: UpdatepostComponent },
          { path: "webstoriescreate", component: WebstoriescreateComponent },
          { path: "webstoriesread", component: WebstoriesreadComponent },
          { path: "webstoriesupdate/:id", component: WebstoriesupdateComponent }
        ]
      }
    ]
  }
];
var _AppRouteComponent = class _AppRouteComponent {
};
_AppRouteComponent.\u0275fac = function AppRouteComponent_Factory(t) {
  return new (t || _AppRouteComponent)();
};
_AppRouteComponent.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRouteComponent });
_AppRouteComponent.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
var AppRouteComponent = _AppRouteComponent;

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration()
  ]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v17.0.8
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-DEO64CMP.mjs.map
