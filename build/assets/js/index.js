/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/choices.js/public/assets/scripts/choices.js":
/*!******************************************************************!*\
  !*** ./node_modules/choices.js/public/assets/scripts/choices.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty2(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! choices.js v10.1.0 | © 2022 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
  return (
    /******/
    function () {
      // webpackBootstrap

      /******/
      "use strict";
      /******/

      var __webpack_modules__ = {
        /***/
        282:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_6300__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = void 0;

          var constants_1 = __nested_webpack_require_6300__(883);

          var addChoice = function addChoice(_a) {
            var value = _a.value,
                label = _a.label,
                id = _a.id,
                groupId = _a.groupId,
                disabled = _a.disabled,
                elementId = _a.elementId,
                customProperties = _a.customProperties,
                placeholder = _a.placeholder,
                keyCode = _a.keyCode;
            return {
              type: constants_1.ACTION_TYPES.ADD_CHOICE,
              value: value,
              label: label,
              id: id,
              groupId: groupId,
              disabled: disabled,
              elementId: elementId,
              customProperties: customProperties,
              placeholder: placeholder,
              keyCode: keyCode
            };
          };

          exports.addChoice = addChoice;

          var filterChoices = function filterChoices(results) {
            return {
              type: constants_1.ACTION_TYPES.FILTER_CHOICES,
              results: results
            };
          };

          exports.filterChoices = filterChoices;

          var activateChoices = function activateChoices(active) {
            if (active === void 0) {
              active = true;
            }

            return {
              type: constants_1.ACTION_TYPES.ACTIVATE_CHOICES,
              active: active
            };
          };

          exports.activateChoices = activateChoices;

          var clearChoices = function clearChoices() {
            return {
              type: constants_1.ACTION_TYPES.CLEAR_CHOICES
            };
          };

          exports.clearChoices = clearChoices;
          /***/
        },

        /***/
        783:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_8375__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.addGroup = void 0;

          var constants_1 = __nested_webpack_require_8375__(883);

          var addGroup = function addGroup(_a) {
            var value = _a.value,
                id = _a.id,
                active = _a.active,
                disabled = _a.disabled;
            return {
              type: constants_1.ACTION_TYPES.ADD_GROUP,
              value: value,
              id: id,
              active: active,
              disabled: disabled
            };
          };

          exports.addGroup = addGroup;
          /***/
        },

        /***/
        464:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_9153__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.highlightItem = exports.removeItem = exports.addItem = void 0;

          var constants_1 = __nested_webpack_require_9153__(883);

          var addItem = function addItem(_a) {
            var value = _a.value,
                label = _a.label,
                id = _a.id,
                choiceId = _a.choiceId,
                groupId = _a.groupId,
                customProperties = _a.customProperties,
                placeholder = _a.placeholder,
                keyCode = _a.keyCode;
            return {
              type: constants_1.ACTION_TYPES.ADD_ITEM,
              value: value,
              label: label,
              id: id,
              choiceId: choiceId,
              groupId: groupId,
              customProperties: customProperties,
              placeholder: placeholder,
              keyCode: keyCode
            };
          };

          exports.addItem = addItem;

          var removeItem = function removeItem(id, choiceId) {
            return {
              type: constants_1.ACTION_TYPES.REMOVE_ITEM,
              id: id,
              choiceId: choiceId
            };
          };

          exports.removeItem = removeItem;

          var highlightItem = function highlightItem(id, highlighted) {
            return {
              type: constants_1.ACTION_TYPES.HIGHLIGHT_ITEM,
              id: id,
              highlighted: highlighted
            };
          };

          exports.highlightItem = highlightItem;
          /***/
        },

        /***/
        137:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_10862__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.setIsLoading = exports.resetTo = exports.clearAll = void 0;

          var constants_1 = __nested_webpack_require_10862__(883);

          var clearAll = function clearAll() {
            return {
              type: constants_1.ACTION_TYPES.CLEAR_ALL
            };
          };

          exports.clearAll = clearAll;

          var resetTo = function resetTo(state) {
            return {
              type: constants_1.ACTION_TYPES.RESET_TO,
              state: state
            };
          };

          exports.resetTo = resetTo;

          var setIsLoading = function setIsLoading(isLoading) {
            return {
              type: constants_1.ACTION_TYPES.SET_IS_LOADING,
              isLoading: isLoading
            };
          };

          exports.setIsLoading = setIsLoading;
          /***/
        },

        /***/
        373:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_11905__) {
          var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
            if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
            return to.concat(ar || Array.prototype.slice.call(from));
          };

          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var deepmerge_1 = __importDefault(__nested_webpack_require_11905__(996));
          /* eslint-disable @typescript-eslint/no-explicit-any */


          var fuse_js_1 = __importDefault(__nested_webpack_require_11905__(221));

          var choices_1 = __nested_webpack_require_11905__(282);

          var groups_1 = __nested_webpack_require_11905__(783);

          var items_1 = __nested_webpack_require_11905__(464);

          var misc_1 = __nested_webpack_require_11905__(137);

          var components_1 = __nested_webpack_require_11905__(520);

          var constants_1 = __nested_webpack_require_11905__(883);

          var defaults_1 = __nested_webpack_require_11905__(789);

          var utils_1 = __nested_webpack_require_11905__(799);

          var reducers_1 = __nested_webpack_require_11905__(655);

          var store_1 = __importDefault(__nested_webpack_require_11905__(744));

          var templates_1 = __importDefault(__nested_webpack_require_11905__(686));
          /** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */


          var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
          var USER_DEFAULTS = {};
          /**
           * Choices
           * @author Josh Johnson<josh@joshuajohnson.co.uk>
           */

          var Choices =
          /** @class */
          function () {
            function Choices(element, userConfig) {
              var _this = this;

              if (element === void 0) {
                element = '[data-choice]';
              }

              if (userConfig === void 0) {
                userConfig = {};
              }

              if (userConfig.allowHTML === undefined) {
                console.warn('Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.');
              }

              this.config = deepmerge_1["default"].all([defaults_1.DEFAULT_CONFIG, Choices.defaults.options, userConfig], // When merging array configs, replace with a copy of the userConfig array,
              // instead of concatenating with the default array
              {
                arrayMerge: function arrayMerge(_, sourceArray) {
                  return __spreadArray([], sourceArray, true);
                }
              });
              var invalidConfigOptions = (0, utils_1.diff)(this.config, defaults_1.DEFAULT_CONFIG);

              if (invalidConfigOptions.length) {
                console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
              }

              var passedElement = typeof element === 'string' ? document.querySelector(element) : element;

              if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) {
                throw TypeError('Expected one of the following types text|select-one|select-multiple');
              }

              this._isTextElement = passedElement.type === constants_1.TEXT_TYPE;
              this._isSelectOneElement = passedElement.type === constants_1.SELECT_ONE_TYPE;
              this._isSelectMultipleElement = passedElement.type === constants_1.SELECT_MULTIPLE_TYPE;
              this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
              this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;

              if (!['auto', 'always'].includes("".concat(this.config.renderSelectedChoices))) {
                this.config.renderSelectedChoices = 'auto';
              }

              if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
                var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
                this.config.addItemFilter = re.test.bind(re);
              }

              if (this._isTextElement) {
                this.passedElement = new components_1.WrappedInput({
                  element: passedElement,
                  classNames: this.config.classNames,
                  delimiter: this.config.delimiter
                });
              } else {
                this.passedElement = new components_1.WrappedSelect({
                  element: passedElement,
                  classNames: this.config.classNames,
                  template: function template(data) {
                    return _this._templates.option(data);
                  }
                });
              }

              this.initialised = false;
              this._store = new store_1["default"]();
              this._initialState = reducers_1.defaultState;
              this._currentState = reducers_1.defaultState;
              this._prevState = reducers_1.defaultState;
              this._currentValue = '';
              this._canSearch = !!this.config.searchEnabled;
              this._isScrollingOnIe = false;
              this._highlightPosition = 0;
              this._wasTap = true;
              this._placeholderValue = this._generatePlaceholderValue();
              this._baseId = (0, utils_1.generateId)(this.passedElement.element, 'choices-');
              /**
               * setting direction in cases where it's explicitly set on passedElement
               * or when calculated direction is different from the document
               */

              this._direction = this.passedElement.dir;

              if (!this._direction) {
                var elementDirection = window.getComputedStyle(this.passedElement.element).direction;
                var documentDirection = window.getComputedStyle(document.documentElement).direction;

                if (elementDirection !== documentDirection) {
                  this._direction = elementDirection;
                }
              }

              this._idNames = {
                itemChoice: 'item-choice'
              };

              if (this._isSelectElement) {
                // Assign preset groups from passed element
                this._presetGroups = this.passedElement.optionGroups; // Assign preset options from passed element

                this._presetOptions = this.passedElement.options;
              } // Assign preset choices from passed object


              this._presetChoices = this.config.choices; // Assign preset items from passed object first

              this._presetItems = this.config.items; // Add any values passed from attribute

              if (this.passedElement.value && this._isTextElement) {
                var splitValues = this.passedElement.value.split(this.config.delimiter);
                this._presetItems = this._presetItems.concat(splitValues);
              } // Create array of choices from option elements


              if (this.passedElement.options) {
                this.passedElement.options.forEach(function (option) {
                  _this._presetChoices.push({
                    value: option.value,
                    label: option.innerHTML,
                    selected: !!option.selected,
                    disabled: option.disabled || option.parentNode.disabled,
                    placeholder: option.value === '' || option.hasAttribute('placeholder'),
                    customProperties: option.dataset['custom-properties']
                  });
                });
              }

              this._render = this._render.bind(this);
              this._onFocus = this._onFocus.bind(this);
              this._onBlur = this._onBlur.bind(this);
              this._onKeyUp = this._onKeyUp.bind(this);
              this._onKeyDown = this._onKeyDown.bind(this);
              this._onClick = this._onClick.bind(this);
              this._onTouchMove = this._onTouchMove.bind(this);
              this._onTouchEnd = this._onTouchEnd.bind(this);
              this._onMouseDown = this._onMouseDown.bind(this);
              this._onMouseOver = this._onMouseOver.bind(this);
              this._onFormReset = this._onFormReset.bind(this);
              this._onSelectKey = this._onSelectKey.bind(this);
              this._onEnterKey = this._onEnterKey.bind(this);
              this._onEscapeKey = this._onEscapeKey.bind(this);
              this._onDirectionKey = this._onDirectionKey.bind(this);
              this._onDeleteKey = this._onDeleteKey.bind(this); // If element has already been initialised with Choices, fail silently

              if (this.passedElement.isActive) {
                if (!this.config.silent) {
                  console.warn('Trying to initialise Choices on element already initialised', {
                    element: element
                  });
                }

                this.initialised = true;
                return;
              } // Let's go


              this.init();
            }

            Object.defineProperty(Choices, "defaults", {
              get: function get() {
                return Object.preventExtensions({
                  get options() {
                    return USER_DEFAULTS;
                  },

                  get templates() {
                    return templates_1["default"];
                  }

                });
              },
              enumerable: false,
              configurable: true
            });

            Choices.prototype.init = function () {
              if (this.initialised) {
                return;
              }

              this._createTemplates();

              this._createElements();

              this._createStructure();

              this._store.subscribe(this._render);

              this._render();

              this._addEventListeners();

              var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute('disabled');

              if (shouldDisable) {
                this.disable();
              }

              this.initialised = true;
              var callbackOnInit = this.config.callbackOnInit; // Run callback if it is a function

              if (callbackOnInit && typeof callbackOnInit === 'function') {
                callbackOnInit.call(this);
              }
            };

            Choices.prototype.destroy = function () {
              if (!this.initialised) {
                return;
              }

              this._removeEventListeners();

              this.passedElement.reveal();
              this.containerOuter.unwrap(this.passedElement.element);
              this.clearStore();

              if (this._isSelectElement) {
                this.passedElement.options = this._presetOptions;
              }

              this._templates = templates_1["default"];
              this.initialised = false;
            };

            Choices.prototype.enable = function () {
              if (this.passedElement.isDisabled) {
                this.passedElement.enable();
              }

              if (this.containerOuter.isDisabled) {
                this._addEventListeners();

                this.input.enable();
                this.containerOuter.enable();
              }

              return this;
            };

            Choices.prototype.disable = function () {
              if (!this.passedElement.isDisabled) {
                this.passedElement.disable();
              }

              if (!this.containerOuter.isDisabled) {
                this._removeEventListeners();

                this.input.disable();
                this.containerOuter.disable();
              }

              return this;
            };

            Choices.prototype.highlightItem = function (item, runEvent) {
              if (runEvent === void 0) {
                runEvent = true;
              }

              if (!item || !item.id) {
                return this;
              }

              var id = item.id,
                  _a = item.groupId,
                  groupId = _a === void 0 ? -1 : _a,
                  _b = item.value,
                  value = _b === void 0 ? '' : _b,
                  _c = item.label,
                  label = _c === void 0 ? '' : _c;
              var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

              this._store.dispatch((0, items_1.highlightItem)(id, true));

              if (runEvent) {
                this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                  id: id,
                  value: value,
                  label: label,
                  groupValue: group && group.value ? group.value : null
                });
              }

              return this;
            };

            Choices.prototype.unhighlightItem = function (item) {
              if (!item || !item.id) {
                return this;
              }

              var id = item.id,
                  _a = item.groupId,
                  groupId = _a === void 0 ? -1 : _a,
                  _b = item.value,
                  value = _b === void 0 ? '' : _b,
                  _c = item.label,
                  label = _c === void 0 ? '' : _c;
              var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

              this._store.dispatch((0, items_1.highlightItem)(id, false));

              this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                id: id,
                value: value,
                label: label,
                groupValue: group && group.value ? group.value : null
              });
              return this;
            };

            Choices.prototype.highlightAll = function () {
              var _this = this;

              this._store.items.forEach(function (item) {
                return _this.highlightItem(item);
              });

              return this;
            };

            Choices.prototype.unhighlightAll = function () {
              var _this = this;

              this._store.items.forEach(function (item) {
                return _this.unhighlightItem(item);
              });

              return this;
            };

            Choices.prototype.removeActiveItemsByValue = function (value) {
              var _this = this;

              this._store.activeItems.filter(function (item) {
                return item.value === value;
              }).forEach(function (item) {
                return _this._removeItem(item);
              });

              return this;
            };

            Choices.prototype.removeActiveItems = function (excludedId) {
              var _this = this;

              this._store.activeItems.filter(function (_a) {
                var id = _a.id;
                return id !== excludedId;
              }).forEach(function (item) {
                return _this._removeItem(item);
              });

              return this;
            };

            Choices.prototype.removeHighlightedItems = function (runEvent) {
              var _this = this;

              if (runEvent === void 0) {
                runEvent = false;
              }

              this._store.highlightedActiveItems.forEach(function (item) {
                _this._removeItem(item); // If this action was performed by the user
                // trigger the event


                if (runEvent) {
                  _this._triggerChange(item.value);
                }
              });

              return this;
            };

            Choices.prototype.showDropdown = function (preventInputFocus) {
              var _this = this;

              if (this.dropdown.isActive) {
                return this;
              }

              requestAnimationFrame(function () {
                _this.dropdown.show();

                _this.containerOuter.open(_this.dropdown.distanceFromTopWindow);

                if (!preventInputFocus && _this._canSearch) {
                  _this.input.focus();
                }

                _this.passedElement.triggerEvent(constants_1.EVENTS.showDropdown, {});
              });
              return this;
            };

            Choices.prototype.hideDropdown = function (preventInputBlur) {
              var _this = this;

              if (!this.dropdown.isActive) {
                return this;
              }

              requestAnimationFrame(function () {
                _this.dropdown.hide();

                _this.containerOuter.close();

                if (!preventInputBlur && _this._canSearch) {
                  _this.input.removeActiveDescendant();

                  _this.input.blur();
                }

                _this.passedElement.triggerEvent(constants_1.EVENTS.hideDropdown, {});
              });
              return this;
            };

            Choices.prototype.getValue = function (valueOnly) {
              if (valueOnly === void 0) {
                valueOnly = false;
              }

              var values = this._store.activeItems.reduce(function (selectedItems, item) {
                var itemValue = valueOnly ? item.value : item;
                selectedItems.push(itemValue);
                return selectedItems;
              }, []);

              return this._isSelectOneElement ? values[0] : values;
            };

            Choices.prototype.setValue = function (items) {
              var _this = this;

              if (!this.initialised) {
                return this;
              }

              items.forEach(function (value) {
                return _this._setChoiceOrItem(value);
              });
              return this;
            };

            Choices.prototype.setChoiceByValue = function (value) {
              var _this = this;

              if (!this.initialised || this._isTextElement) {
                return this;
              } // If only one value has been passed, convert to array


              var choiceValue = Array.isArray(value) ? value : [value]; // Loop through each value and

              choiceValue.forEach(function (val) {
                return _this._findAndSelectChoiceByValue(val);
              });
              return this;
            };
            /**
             * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
             * a value field name and a label field name.
             * This behaves the same as passing items via the choices option but can be called after initialising Choices.
             * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
             * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
             *
             * **Input types affected:** select-one, select-multiple
             *
             * @example
             * ```js
             * const example = new Choices(element);
             *
             * example.setChoices([
             *   {value: 'One', label: 'Label One', disabled: true},
             *   {value: 'Two', label: 'Label Two', selected: true},
             *   {value: 'Three', label: 'Label Three'},
             * ], 'value', 'label', false);
             * ```
             *
             * @example
             * ```js
             * const example = new Choices(element);
             *
             * example.setChoices(async () => {
             *   try {
             *      const items = await fetch('/items');
             *      return items.json()
             *   } catch(err) {
             *      console.error(err)
             *   }
             * });
             * ```
             *
             * @example
             * ```js
             * const example = new Choices(element);
             *
             * example.setChoices([{
             *   label: 'Group one',
             *   id: 1,
             *   disabled: false,
             *   choices: [
             *     {value: 'Child One', label: 'Child One', selected: true},
             *     {value: 'Child Two', label: 'Child Two',  disabled: true},
             *     {value: 'Child Three', label: 'Child Three'},
             *   ]
             * },
             * {
             *   label: 'Group two',
             *   id: 2,
             *   disabled: false,
             *   choices: [
             *     {value: 'Child Four', label: 'Child Four', disabled: true},
             *     {value: 'Child Five', label: 'Child Five'},
             *     {value: 'Child Six', label: 'Child Six', customProperties: {
             *       description: 'Custom description about child six',
             *       random: 'Another random custom property'
             *     }},
             *   ]
             * }], 'value', 'label', false);
             * ```
             */


            Choices.prototype.setChoices = function (choicesArrayOrFetcher, value, label, replaceChoices) {
              var _this = this;

              if (choicesArrayOrFetcher === void 0) {
                choicesArrayOrFetcher = [];
              }

              if (value === void 0) {
                value = 'value';
              }

              if (label === void 0) {
                label = 'label';
              }

              if (replaceChoices === void 0) {
                replaceChoices = false;
              }

              if (!this.initialised) {
                throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
              }

              if (!this._isSelectElement) {
                throw new TypeError("setChoices can't be used with INPUT based Choices");
              }

              if (typeof value !== 'string' || !value) {
                throw new TypeError("value parameter must be a name of 'value' field in passed objects");
              } // Clear choices if needed


              if (replaceChoices) {
                this.clearChoices();
              }

              if (typeof choicesArrayOrFetcher === 'function') {
                // it's a choices fetcher function
                var fetcher_1 = choicesArrayOrFetcher(this);

                if (typeof Promise === 'function' && fetcher_1 instanceof Promise) {
                  // that's a promise
                  // eslint-disable-next-line no-promise-executor-return
                  return new Promise(function (resolve) {
                    return requestAnimationFrame(resolve);
                  }).then(function () {
                    return _this._handleLoadingState(true);
                  }).then(function () {
                    return fetcher_1;
                  }).then(function (data) {
                    return _this.setChoices(data, value, label, replaceChoices);
                  })["catch"](function (err) {
                    if (!_this.config.silent) {
                      console.error(err);
                    }
                  }).then(function () {
                    return _this._handleLoadingState(false);
                  }).then(function () {
                    return _this;
                  });
                } // function returned something else than promise, let's check if it's an array of choices


                if (!Array.isArray(fetcher_1)) {
                  throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(_typeof(fetcher_1)));
                } // recursion with results, it's sync and choices were cleared already


                return this.setChoices(fetcher_1, value, label, false);
              }

              if (!Array.isArray(choicesArrayOrFetcher)) {
                throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
              }

              this.containerOuter.removeLoadingState();

              this._startLoading();

              choicesArrayOrFetcher.forEach(function (groupOrChoice) {
                if (groupOrChoice.choices) {
                  _this._addGroup({
                    id: groupOrChoice.id ? parseInt("".concat(groupOrChoice.id), 10) : null,
                    group: groupOrChoice,
                    valueKey: value,
                    labelKey: label
                  });
                } else {
                  var choice = groupOrChoice;

                  _this._addChoice({
                    value: choice[value],
                    label: choice[label],
                    isSelected: !!choice.selected,
                    isDisabled: !!choice.disabled,
                    placeholder: !!choice.placeholder,
                    customProperties: choice.customProperties
                  });
                }
              });

              this._stopLoading();

              return this;
            };

            Choices.prototype.clearChoices = function () {
              this._store.dispatch((0, choices_1.clearChoices)());

              return this;
            };

            Choices.prototype.clearStore = function () {
              this._store.dispatch((0, misc_1.clearAll)());

              return this;
            };

            Choices.prototype.clearInput = function () {
              var shouldSetInputWidth = !this._isSelectOneElement;
              this.input.clear(shouldSetInputWidth);

              if (!this._isTextElement && this._canSearch) {
                this._isSearching = false;

                this._store.dispatch((0, choices_1.activateChoices)(true));
              }

              return this;
            };

            Choices.prototype._render = function () {
              if (this._store.isLoading()) {
                return;
              }

              this._currentState = this._store.state;
              var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
              var shouldRenderChoices = this._isSelectElement;
              var shouldRenderItems = this._currentState.items !== this._prevState.items;

              if (!stateChanged) {
                return;
              }

              if (shouldRenderChoices) {
                this._renderChoices();
              }

              if (shouldRenderItems) {
                this._renderItems();
              }

              this._prevState = this._currentState;
            };

            Choices.prototype._renderChoices = function () {
              var _this = this;

              var _a = this._store,
                  activeGroups = _a.activeGroups,
                  activeChoices = _a.activeChoices;
              var choiceListFragment = document.createDocumentFragment();
              this.choiceList.clear();

              if (this.config.resetScrollPosition) {
                requestAnimationFrame(function () {
                  return _this.choiceList.scrollToTop();
                });
              } // If we have grouped options


              if (activeGroups.length >= 1 && !this._isSearching) {
                // If we have a placeholder choice along with groups
                var activePlaceholders = activeChoices.filter(function (activeChoice) {
                  return activeChoice.placeholder === true && activeChoice.groupId === -1;
                });

                if (activePlaceholders.length >= 1) {
                  choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
                }

                choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
              } else if (activeChoices.length >= 1) {
                choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
              } // If we have choices to show


              if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
                var activeItems = this._store.activeItems;

                var canAddItem = this._canAddItem(activeItems, this.input.value); // ...and we can select them


                if (canAddItem.response) {
                  // ...append them and highlight the first choice
                  this.choiceList.append(choiceListFragment);

                  this._highlightChoice();
                } else {
                  var notice = this._getTemplate('notice', canAddItem.notice);

                  this.choiceList.append(notice);
                }
              } else {
                // Otherwise show a notice
                var dropdownItem = void 0;
                var notice = void 0;

                if (this._isSearching) {
                  notice = typeof this.config.noResultsText === 'function' ? this.config.noResultsText() : this.config.noResultsText;
                  dropdownItem = this._getTemplate('notice', notice, 'no-results');
                } else {
                  notice = typeof this.config.noChoicesText === 'function' ? this.config.noChoicesText() : this.config.noChoicesText;
                  dropdownItem = this._getTemplate('notice', notice, 'no-choices');
                }

                this.choiceList.append(dropdownItem);
              }
            };

            Choices.prototype._renderItems = function () {
              var activeItems = this._store.activeItems || [];
              this.itemList.clear(); // Create a fragment to store our list items
              // (so we don't have to update the DOM for each item)

              var itemListFragment = this._createItemsFragment(activeItems); // If we have items to add, append them


              if (itemListFragment.childNodes) {
                this.itemList.append(itemListFragment);
              }
            };

            Choices.prototype._createGroupsFragment = function (groups, choices, fragment) {
              var _this = this;

              if (fragment === void 0) {
                fragment = document.createDocumentFragment();
              }

              var getGroupChoices = function getGroupChoices(group) {
                return choices.filter(function (choice) {
                  if (_this._isSelectOneElement) {
                    return choice.groupId === group.id;
                  }

                  return choice.groupId === group.id && (_this.config.renderSelectedChoices === 'always' || !choice.selected);
                });
              }; // If sorting is enabled, filter groups


              if (this.config.shouldSort) {
                groups.sort(this.config.sorter);
              }

              groups.forEach(function (group) {
                var groupChoices = getGroupChoices(group);

                if (groupChoices.length >= 1) {
                  var dropdownGroup = _this._getTemplate('choiceGroup', group);

                  fragment.appendChild(dropdownGroup);

                  _this._createChoicesFragment(groupChoices, fragment, true);
                }
              });
              return fragment;
            };

            Choices.prototype._createChoicesFragment = function (choices, fragment, withinGroup) {
              var _this = this;

              if (fragment === void 0) {
                fragment = document.createDocumentFragment();
              }

              if (withinGroup === void 0) {
                withinGroup = false;
              } // Create a fragment to store our list items (so we don't have to update the DOM for each item)


              var _a = this.config,
                  renderSelectedChoices = _a.renderSelectedChoices,
                  searchResultLimit = _a.searchResultLimit,
                  renderChoiceLimit = _a.renderChoiceLimit;
              var filter = this._isSearching ? utils_1.sortByScore : this.config.sorter;

              var appendChoice = function appendChoice(choice) {
                var shouldRender = renderSelectedChoices === 'auto' ? _this._isSelectOneElement || !choice.selected : true;

                if (shouldRender) {
                  var dropdownItem = _this._getTemplate('choice', choice, _this.config.itemSelectText);

                  fragment.appendChild(dropdownItem);
                }
              };

              var rendererableChoices = choices;

              if (renderSelectedChoices === 'auto' && !this._isSelectOneElement) {
                rendererableChoices = choices.filter(function (choice) {
                  return !choice.selected;
                });
              } // Split array into placeholders and "normal" choices


              var _b = rendererableChoices.reduce(function (acc, choice) {
                if (choice.placeholder) {
                  acc.placeholderChoices.push(choice);
                } else {
                  acc.normalChoices.push(choice);
                }

                return acc;
              }, {
                placeholderChoices: [],
                normalChoices: []
              }),
                  placeholderChoices = _b.placeholderChoices,
                  normalChoices = _b.normalChoices; // If sorting is enabled or the user is searching, filter choices


              if (this.config.shouldSort || this._isSearching) {
                normalChoices.sort(filter);
              }

              var choiceLimit = rendererableChoices.length; // Prepend placeholeder

              var sortedChoices = this._isSelectOneElement ? __spreadArray(__spreadArray([], placeholderChoices, true), normalChoices, true) : normalChoices;

              if (this._isSearching) {
                choiceLimit = searchResultLimit;
              } else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) {
                choiceLimit = renderChoiceLimit;
              } // Add each choice to dropdown within range


              for (var i = 0; i < choiceLimit; i += 1) {
                if (sortedChoices[i]) {
                  appendChoice(sortedChoices[i]);
                }
              }

              return fragment;
            };

            Choices.prototype._createItemsFragment = function (items, fragment) {
              var _this = this;

              if (fragment === void 0) {
                fragment = document.createDocumentFragment();
              } // Create fragment to add elements to


              var _a = this.config,
                  shouldSortItems = _a.shouldSortItems,
                  sorter = _a.sorter,
                  removeItemButton = _a.removeItemButton; // If sorting is enabled, filter items

              if (shouldSortItems && !this._isSelectOneElement) {
                items.sort(sorter);
              }

              if (this._isTextElement) {
                // Update the value of the hidden input
                this.passedElement.value = items.map(function (_a) {
                  var value = _a.value;
                  return value;
                }).join(this.config.delimiter);
              } else {
                // Update the options of the hidden input
                this.passedElement.options = items;
              }

              var addItemToFragment = function addItemToFragment(item) {
                // Create new list element
                var listItem = _this._getTemplate('item', item, removeItemButton); // Append it to list


                fragment.appendChild(listItem);
              }; // Add each list item to list


              items.forEach(addItemToFragment);
              return fragment;
            };

            Choices.prototype._triggerChange = function (value) {
              if (value === undefined || value === null) {
                return;
              }

              this.passedElement.triggerEvent(constants_1.EVENTS.change, {
                value: value
              });
            };

            Choices.prototype._selectPlaceholderChoice = function (placeholderChoice) {
              this._addItem({
                value: placeholderChoice.value,
                label: placeholderChoice.label,
                choiceId: placeholderChoice.id,
                groupId: placeholderChoice.groupId,
                placeholder: placeholderChoice.placeholder
              });

              this._triggerChange(placeholderChoice.value);
            };

            Choices.prototype._handleButtonAction = function (activeItems, element) {
              if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
                return;
              }

              var itemId = element.parentNode && element.parentNode.dataset.id;
              var itemToRemove = itemId && activeItems.find(function (item) {
                return item.id === parseInt(itemId, 10);
              });

              if (!itemToRemove) {
                return;
              } // Remove item associated with button


              this._removeItem(itemToRemove);

              this._triggerChange(itemToRemove.value);

              if (this._isSelectOneElement && this._store.placeholderChoice) {
                this._selectPlaceholderChoice(this._store.placeholderChoice);
              }
            };

            Choices.prototype._handleItemAction = function (activeItems, element, hasShiftKey) {
              var _this = this;

              if (hasShiftKey === void 0) {
                hasShiftKey = false;
              }

              if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
                return;
              }

              var passedId = element.dataset.id; // We only want to select one item with a click
              // so we deselect any items that aren't the target
              // unless shift is being pressed

              activeItems.forEach(function (item) {
                if (item.id === parseInt("".concat(passedId), 10) && !item.highlighted) {
                  _this.highlightItem(item);
                } else if (!hasShiftKey && item.highlighted) {
                  _this.unhighlightItem(item);
                }
              }); // Focus input as without focus, a user cannot do anything with a
              // highlighted item

              this.input.focus();
            };

            Choices.prototype._handleChoiceAction = function (activeItems, element) {
              if (!activeItems || !element) {
                return;
              } // If we are clicking on an option


              var id = element.dataset.id;

              var choice = id && this._store.getChoiceById(id);

              if (!choice) {
                return;
              }

              var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : undefined;
              var hasActiveDropdown = this.dropdown.isActive; // Update choice keyCode

              choice.keyCode = passedKeyCode;
              this.passedElement.triggerEvent(constants_1.EVENTS.choice, {
                choice: choice
              });

              if (!choice.selected && !choice.disabled) {
                var canAddItem = this._canAddItem(activeItems, choice.value);

                if (canAddItem.response) {
                  this._addItem({
                    value: choice.value,
                    label: choice.label,
                    choiceId: choice.id,
                    groupId: choice.groupId,
                    customProperties: choice.customProperties,
                    placeholder: choice.placeholder,
                    keyCode: choice.keyCode
                  });

                  this._triggerChange(choice.value);
                }
              }

              this.clearInput(); // We want to close the dropdown if we are dealing with a single select box

              if (hasActiveDropdown && this._isSelectOneElement) {
                this.hideDropdown(true);
                this.containerOuter.focus();
              }
            };

            Choices.prototype._handleBackspace = function (activeItems) {
              if (!this.config.removeItems || !activeItems) {
                return;
              }

              var lastItem = activeItems[activeItems.length - 1];
              var hasHighlightedItems = activeItems.some(function (item) {
                return item.highlighted;
              }); // If editing the last item is allowed and there are not other selected items,
              // we can edit the item value. Otherwise if we can remove items, remove all selected items

              if (this.config.editItems && !hasHighlightedItems && lastItem) {
                this.input.value = lastItem.value;
                this.input.setWidth();

                this._removeItem(lastItem);

                this._triggerChange(lastItem.value);
              } else {
                if (!hasHighlightedItems) {
                  // Highlight last item if none already highlighted
                  this.highlightItem(lastItem, false);
                }

                this.removeHighlightedItems(true);
              }
            };

            Choices.prototype._startLoading = function () {
              this._store.dispatch((0, misc_1.setIsLoading)(true));
            };

            Choices.prototype._stopLoading = function () {
              this._store.dispatch((0, misc_1.setIsLoading)(false));
            };

            Choices.prototype._handleLoadingState = function (setLoading) {
              if (setLoading === void 0) {
                setLoading = true;
              }

              var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));

              if (setLoading) {
                this.disable();
                this.containerOuter.addLoadingState();

                if (this._isSelectOneElement) {
                  if (!placeholderItem) {
                    placeholderItem = this._getTemplate('placeholder', this.config.loadingText);

                    if (placeholderItem) {
                      this.itemList.append(placeholderItem);
                    }
                  } else {
                    placeholderItem.innerHTML = this.config.loadingText;
                  }
                } else {
                  this.input.placeholder = this.config.loadingText;
                }
              } else {
                this.enable();
                this.containerOuter.removeLoadingState();

                if (this._isSelectOneElement) {
                  if (placeholderItem) {
                    placeholderItem.innerHTML = this._placeholderValue || '';
                  }
                } else {
                  this.input.placeholder = this._placeholderValue || '';
                }
              }
            };

            Choices.prototype._handleSearch = function (value) {
              if (!this.input.isFocussed) {
                return;
              }

              var choices = this._store.choices;
              var _a = this.config,
                  searchFloor = _a.searchFloor,
                  searchChoices = _a.searchChoices;
              var hasUnactiveChoices = choices.some(function (option) {
                return !option.active;
              }); // Check that we have a value to search and the input was an alphanumeric character

              if (value !== null && typeof value !== 'undefined' && value.length >= searchFloor) {
                var resultCount = searchChoices ? this._searchChoices(value) : 0; // Trigger search event

                this.passedElement.triggerEvent(constants_1.EVENTS.search, {
                  value: value,
                  resultCount: resultCount
                });
              } else if (hasUnactiveChoices) {
                // Otherwise reset choices to active
                this._isSearching = false;

                this._store.dispatch((0, choices_1.activateChoices)(true));
              }
            };

            Choices.prototype._canAddItem = function (activeItems, value) {
              var canAddItem = true;
              var notice = typeof this.config.addItemText === 'function' ? this.config.addItemText(value) : this.config.addItemText;

              if (!this._isSelectOneElement) {
                var isDuplicateValue = (0, utils_1.existsInArray)(activeItems, value);

                if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                  // If there is a max entry limit and we have reached that limit
                  // don't update
                  canAddItem = false;
                  notice = typeof this.config.maxItemText === 'function' ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
                }

                if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                  canAddItem = false;
                  notice = typeof this.config.uniqueItemText === 'function' ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
                }

                if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === 'function' && !this.config.addItemFilter(value)) {
                  canAddItem = false;
                  notice = typeof this.config.customAddItemText === 'function' ? this.config.customAddItemText(value) : this.config.customAddItemText;
                }
              }

              return {
                response: canAddItem,
                notice: notice
              };
            };

            Choices.prototype._searchChoices = function (value) {
              var newValue = typeof value === 'string' ? value.trim() : value;
              var currentValue = typeof this._currentValue === 'string' ? this._currentValue.trim() : this._currentValue;

              if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) {
                return 0;
              } // If new value matches the desired length and is not the same as the current value with a space


              var haystack = this._store.searchableChoices;
              var needle = newValue;
              var options = Object.assign(this.config.fuseOptions, {
                keys: __spreadArray([], this.config.searchFields, true),
                includeMatches: true
              });
              var fuse = new fuse_js_1["default"](haystack, options);
              var results = fuse.search(needle); // see https://github.com/krisk/Fuse/issues/303

              this._currentValue = newValue;
              this._highlightPosition = 0;
              this._isSearching = true;

              this._store.dispatch((0, choices_1.filterChoices)(results));

              return results.length;
            };

            Choices.prototype._addEventListeners = function () {
              var documentElement = document.documentElement; // capture events - can cancel event processing or propagation

              documentElement.addEventListener('touchend', this._onTouchEnd, true);
              this.containerOuter.element.addEventListener('keydown', this._onKeyDown, true);
              this.containerOuter.element.addEventListener('mousedown', this._onMouseDown, true); // passive events - doesn't call `preventDefault` or `stopPropagation`

              documentElement.addEventListener('click', this._onClick, {
                passive: true
              });
              documentElement.addEventListener('touchmove', this._onTouchMove, {
                passive: true
              });
              this.dropdown.element.addEventListener('mouseover', this._onMouseOver, {
                passive: true
              });

              if (this._isSelectOneElement) {
                this.containerOuter.element.addEventListener('focus', this._onFocus, {
                  passive: true
                });
                this.containerOuter.element.addEventListener('blur', this._onBlur, {
                  passive: true
                });
              }

              this.input.element.addEventListener('keyup', this._onKeyUp, {
                passive: true
              });
              this.input.element.addEventListener('focus', this._onFocus, {
                passive: true
              });
              this.input.element.addEventListener('blur', this._onBlur, {
                passive: true
              });

              if (this.input.element.form) {
                this.input.element.form.addEventListener('reset', this._onFormReset, {
                  passive: true
                });
              }

              this.input.addEventListeners();
            };

            Choices.prototype._removeEventListeners = function () {
              var documentElement = document.documentElement;
              documentElement.removeEventListener('touchend', this._onTouchEnd, true);
              this.containerOuter.element.removeEventListener('keydown', this._onKeyDown, true);
              this.containerOuter.element.removeEventListener('mousedown', this._onMouseDown, true);
              documentElement.removeEventListener('click', this._onClick);
              documentElement.removeEventListener('touchmove', this._onTouchMove);
              this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);

              if (this._isSelectOneElement) {
                this.containerOuter.element.removeEventListener('focus', this._onFocus);
                this.containerOuter.element.removeEventListener('blur', this._onBlur);
              }

              this.input.element.removeEventListener('keyup', this._onKeyUp);
              this.input.element.removeEventListener('focus', this._onFocus);
              this.input.element.removeEventListener('blur', this._onBlur);

              if (this.input.element.form) {
                this.input.element.form.removeEventListener('reset', this._onFormReset);
              }

              this.input.removeEventListeners();
            };

            Choices.prototype._onKeyDown = function (event) {
              var keyCode = event.keyCode;
              var activeItems = this._store.activeItems;
              var hasFocusedInput = this.input.isFocussed;
              var hasActiveDropdown = this.dropdown.isActive;
              var hasItems = this.itemList.hasChildren();
              var keyString = String.fromCharCode(keyCode);
              var wasAlphaNumericChar = /[a-zA-Z0-9-_ ]/.test(keyString);
              var BACK_KEY = constants_1.KEY_CODES.BACK_KEY,
                  DELETE_KEY = constants_1.KEY_CODES.DELETE_KEY,
                  ENTER_KEY = constants_1.KEY_CODES.ENTER_KEY,
                  A_KEY = constants_1.KEY_CODES.A_KEY,
                  ESC_KEY = constants_1.KEY_CODES.ESC_KEY,
                  UP_KEY = constants_1.KEY_CODES.UP_KEY,
                  DOWN_KEY = constants_1.KEY_CODES.DOWN_KEY,
                  PAGE_UP_KEY = constants_1.KEY_CODES.PAGE_UP_KEY,
                  PAGE_DOWN_KEY = constants_1.KEY_CODES.PAGE_DOWN_KEY;

              if (!this._isTextElement && !hasActiveDropdown && wasAlphaNumericChar) {
                this.showDropdown();

                if (!this.input.isFocussed) {
                  /*
                    We update the input value with the pressed key as
                    the input was not focussed at the time of key press
                    therefore does not have the value of the key.
                  */
                  this.input.value += keyString.toLowerCase();
                }
              }

              switch (keyCode) {
                case A_KEY:
                  return this._onSelectKey(event, hasItems);

                case ENTER_KEY:
                  return this._onEnterKey(event, activeItems, hasActiveDropdown);

                case ESC_KEY:
                  return this._onEscapeKey(hasActiveDropdown);

                case UP_KEY:
                case PAGE_UP_KEY:
                case DOWN_KEY:
                case PAGE_DOWN_KEY:
                  return this._onDirectionKey(event, hasActiveDropdown);

                case DELETE_KEY:
                case BACK_KEY:
                  return this._onDeleteKey(event, activeItems, hasFocusedInput);

                default:
              }
            };

            Choices.prototype._onKeyUp = function (_a) {
              var target = _a.target,
                  keyCode = _a.keyCode;
              var value = this.input.value;
              var activeItems = this._store.activeItems;

              var canAddItem = this._canAddItem(activeItems, value);

              var backKey = constants_1.KEY_CODES.BACK_KEY,
                  deleteKey = constants_1.KEY_CODES.DELETE_KEY; // We are typing into a text input and have a value, we want to show a dropdown
              // notice. Otherwise hide the dropdown

              if (this._isTextElement) {
                var canShowDropdownNotice = canAddItem.notice && value;

                if (canShowDropdownNotice) {
                  var dropdownItem = this._getTemplate('notice', canAddItem.notice);

                  this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                  this.showDropdown(true);
                } else {
                  this.hideDropdown(true);
                }
              } else {
                var wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
                var userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
                var canReactivateChoices = !this._isTextElement && this._isSearching;
                var canSearch = this._canSearch && canAddItem.response;

                if (userHasRemovedValue && canReactivateChoices) {
                  this._isSearching = false;

                  this._store.dispatch((0, choices_1.activateChoices)(true));
                } else if (canSearch) {
                  this._handleSearch(this.input.rawValue);
                }
              }

              this._canSearch = this.config.searchEnabled;
            };

            Choices.prototype._onSelectKey = function (event, hasItems) {
              var ctrlKey = event.ctrlKey,
                  metaKey = event.metaKey;
              var hasCtrlDownKeyPressed = ctrlKey || metaKey; // If CTRL + A or CMD + A have been pressed and there are items to select

              if (hasCtrlDownKeyPressed && hasItems) {
                this._canSearch = false;
                var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;

                if (shouldHightlightAll) {
                  this.highlightAll();
                }
              }
            };

            Choices.prototype._onEnterKey = function (event, activeItems, hasActiveDropdown) {
              var target = event.target;
              var enterKey = constants_1.KEY_CODES.ENTER_KEY;
              var targetWasButton = target && target.hasAttribute('data-button');

              if (this._isTextElement && target && target.value) {
                var value = this.input.value;

                var canAddItem = this._canAddItem(activeItems, value);

                if (canAddItem.response) {
                  this.hideDropdown(true);

                  this._addItem({
                    value: value
                  });

                  this._triggerChange(value);

                  this.clearInput();
                }
              }

              if (targetWasButton) {
                this._handleButtonAction(activeItems, target);

                event.preventDefault();
              }

              if (hasActiveDropdown) {
                var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));

                if (highlightedChoice) {
                  // add enter keyCode value
                  if (activeItems[0]) {
                    activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
                  }

                  this._handleChoiceAction(activeItems, highlightedChoice);
                }

                event.preventDefault();
              } else if (this._isSelectOneElement) {
                this.showDropdown();
                event.preventDefault();
              }
            };

            Choices.prototype._onEscapeKey = function (hasActiveDropdown) {
              if (hasActiveDropdown) {
                this.hideDropdown(true);
                this.containerOuter.focus();
              }
            };

            Choices.prototype._onDirectionKey = function (event, hasActiveDropdown) {
              var keyCode = event.keyCode,
                  metaKey = event.metaKey;
              var downKey = constants_1.KEY_CODES.DOWN_KEY,
                  pageUpKey = constants_1.KEY_CODES.PAGE_UP_KEY,
                  pageDownKey = constants_1.KEY_CODES.PAGE_DOWN_KEY; // If up or down key is pressed, traverse through options

              if (hasActiveDropdown || this._isSelectOneElement) {
                this.showDropdown();
                this._canSearch = false;
                var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
                var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
                var selectableChoiceIdentifier = '[data-choice-selectable]';
                var nextEl = void 0;

                if (skipKey) {
                  if (directionInt > 0) {
                    nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type"));
                  } else {
                    nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                  }
                } else {
                  var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));

                  if (currentEl) {
                    nextEl = (0, utils_1.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
                  } else {
                    nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                  }
                }

                if (nextEl) {
                  // We prevent default to stop the cursor moving
                  // when pressing the arrow
                  if (!(0, utils_1.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) {
                    this.choiceList.scrollToChildElement(nextEl, directionInt);
                  }

                  this._highlightChoice(nextEl);
                } // Prevent default to maintain cursor position whilst
                // traversing dropdown options


                event.preventDefault();
              }
            };

            Choices.prototype._onDeleteKey = function (event, activeItems, hasFocusedInput) {
              var target = event.target; // If backspace or delete key is pressed and the input has no value

              if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
                this._handleBackspace(activeItems);

                event.preventDefault();
              }
            };

            Choices.prototype._onTouchMove = function () {
              if (this._wasTap) {
                this._wasTap = false;
              }
            };

            Choices.prototype._onTouchEnd = function (event) {
              var target = (event || event.touches[0]).target;
              var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);

              if (touchWasWithinContainer) {
                var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;

                if (containerWasExactTarget) {
                  if (this._isTextElement) {
                    this.input.focus();
                  } else if (this._isSelectMultipleElement) {
                    this.showDropdown();
                  }
                } // Prevents focus event firing


                event.stopPropagation();
              }

              this._wasTap = true;
            };
            /**
             * Handles mousedown event in capture mode for containetOuter.element
             */


            Choices.prototype._onMouseDown = function (event) {
              var target = event.target;

              if (!(target instanceof HTMLElement)) {
                return;
              } // If we have our mouse down on the scrollbar and are on IE11...


              if (IS_IE11 && this.choiceList.element.contains(target)) {
                // check if click was on a scrollbar area
                var firstChoice = this.choiceList.element.firstElementChild;
                var isOnScrollbar = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
                this._isScrollingOnIe = isOnScrollbar;
              }

              if (target === this.input.element) {
                return;
              }

              var item = target.closest('[data-button],[data-item],[data-choice]');

              if (item instanceof HTMLElement) {
                var hasShiftKey = event.shiftKey;
                var activeItems = this._store.activeItems;
                var dataset = item.dataset;

                if ('button' in dataset) {
                  this._handleButtonAction(activeItems, item);
                } else if ('item' in dataset) {
                  this._handleItemAction(activeItems, item, hasShiftKey);
                } else if ('choice' in dataset) {
                  this._handleChoiceAction(activeItems, item);
                }
              }

              event.preventDefault();
            };
            /**
             * Handles mouseover event over this.dropdown
             * @param {MouseEvent} event
             */


            Choices.prototype._onMouseOver = function (_a) {
              var target = _a.target;

              if (target instanceof HTMLElement && 'choice' in target.dataset) {
                this._highlightChoice(target);
              }
            };

            Choices.prototype._onClick = function (_a) {
              var target = _a.target;
              var clickWasWithinContainer = this.containerOuter.element.contains(target);

              if (clickWasWithinContainer) {
                if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
                  if (this._isTextElement) {
                    if (document.activeElement !== this.input.element) {
                      this.input.focus();
                    }
                  } else {
                    this.showDropdown();
                    this.containerOuter.focus();
                  }
                } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
                  this.hideDropdown();
                }
              } else {
                var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;

                if (hasHighlightedItems) {
                  this.unhighlightAll();
                }

                this.containerOuter.removeFocusState();
                this.hideDropdown(true);
              }
            };

            Choices.prototype._onFocus = function (_a) {
              var _b;

              var _this = this;

              var target = _a.target;
              var focusWasWithinContainer = target && this.containerOuter.element.contains(target);

              if (!focusWasWithinContainer) {
                return;
              }

              var focusActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function () {
                if (target === _this.input.element) {
                  _this.containerOuter.addFocusState();
                }
              }, _b[constants_1.SELECT_ONE_TYPE] = function () {
                _this.containerOuter.addFocusState();

                if (target === _this.input.element) {
                  _this.showDropdown(true);
                }
              }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function () {
                if (target === _this.input.element) {
                  _this.showDropdown(true); // If element is a select box, the focused element is the container and the dropdown
                  // isn't already open, focus and show dropdown


                  _this.containerOuter.addFocusState();
                }
              }, _b);
              focusActions[this.passedElement.element.type]();
            };

            Choices.prototype._onBlur = function (_a) {
              var _b;

              var _this = this;

              var target = _a.target;
              var blurWasWithinContainer = target && this.containerOuter.element.contains(target);

              if (blurWasWithinContainer && !this._isScrollingOnIe) {
                var activeItems = this._store.activeItems;
                var hasHighlightedItems_1 = activeItems.some(function (item) {
                  return item.highlighted;
                });
                var blurActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function () {
                  if (target === _this.input.element) {
                    _this.containerOuter.removeFocusState();

                    if (hasHighlightedItems_1) {
                      _this.unhighlightAll();
                    }

                    _this.hideDropdown(true);
                  }
                }, _b[constants_1.SELECT_ONE_TYPE] = function () {
                  _this.containerOuter.removeFocusState();

                  if (target === _this.input.element || target === _this.containerOuter.element && !_this._canSearch) {
                    _this.hideDropdown(true);
                  }
                }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function () {
                  if (target === _this.input.element) {
                    _this.containerOuter.removeFocusState();

                    _this.hideDropdown(true);

                    if (hasHighlightedItems_1) {
                      _this.unhighlightAll();
                    }
                  }
                }, _b);
                blurActions[this.passedElement.element.type]();
              } else {
                // On IE11, clicking the scollbar blurs our input and thus
                // closes the dropdown. To stop this, we refocus our input
                // if we know we are on IE *and* are scrolling.
                this._isScrollingOnIe = false;
                this.input.element.focus();
              }
            };

            Choices.prototype._onFormReset = function () {
              this._store.dispatch((0, misc_1.resetTo)(this._initialState));
            };

            Choices.prototype._highlightChoice = function (el) {
              var _this = this;

              if (el === void 0) {
                el = null;
              }

              var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));

              if (!choices.length) {
                return;
              }

              var passedEl = el;
              var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))); // Remove any highlighted choices

              highlightedChoices.forEach(function (choice) {
                choice.classList.remove(_this.config.classNames.highlightedState);
                choice.setAttribute('aria-selected', 'false');
              });

              if (passedEl) {
                this._highlightPosition = choices.indexOf(passedEl);
              } else {
                // Highlight choice based on last known highlight location
                if (choices.length > this._highlightPosition) {
                  // If we have an option to highlight
                  passedEl = choices[this._highlightPosition];
                } else {
                  // Otherwise highlight the option before
                  passedEl = choices[choices.length - 1];
                }

                if (!passedEl) {
                  passedEl = choices[0];
                }
              }

              passedEl.classList.add(this.config.classNames.highlightedState);
              passedEl.setAttribute('aria-selected', 'true');
              this.passedElement.triggerEvent(constants_1.EVENTS.highlightChoice, {
                el: passedEl
              });

              if (this.dropdown.isActive) {
                // IE11 ignores aria-label and blocks virtual keyboard
                // if aria-activedescendant is set without a dropdown
                this.input.setActiveDescendant(passedEl.id);
                this.containerOuter.setActiveDescendant(passedEl.id);
              }
            };

            Choices.prototype._addItem = function (_a) {
              var value = _a.value,
                  _b = _a.label,
                  label = _b === void 0 ? null : _b,
                  _c = _a.choiceId,
                  choiceId = _c === void 0 ? -1 : _c,
                  _d = _a.groupId,
                  groupId = _d === void 0 ? -1 : _d,
                  _e = _a.customProperties,
                  customProperties = _e === void 0 ? {} : _e,
                  _f = _a.placeholder,
                  placeholder = _f === void 0 ? false : _f,
                  _g = _a.keyCode,
                  keyCode = _g === void 0 ? -1 : _g;
              var passedValue = typeof value === 'string' ? value.trim() : value;
              var items = this._store.items;
              var passedLabel = label || passedValue;
              var passedOptionId = choiceId || -1;
              var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
              var id = items ? items.length + 1 : 1; // If a prepended value has been passed, prepend it

              if (this.config.prependValue) {
                passedValue = this.config.prependValue + passedValue.toString();
              } // If an appended value has been passed, append it


              if (this.config.appendValue) {
                passedValue += this.config.appendValue.toString();
              }

              this._store.dispatch((0, items_1.addItem)({
                value: passedValue,
                label: passedLabel,
                id: id,
                choiceId: passedOptionId,
                groupId: groupId,
                customProperties: customProperties,
                placeholder: placeholder,
                keyCode: keyCode
              }));

              if (this._isSelectOneElement) {
                this.removeActiveItems(id);
              } // Trigger change event


              this.passedElement.triggerEvent(constants_1.EVENTS.addItem, {
                id: id,
                value: passedValue,
                label: passedLabel,
                customProperties: customProperties,
                groupValue: group && group.value ? group.value : null,
                keyCode: keyCode
              });
            };

            Choices.prototype._removeItem = function (item) {
              var id = item.id,
                  value = item.value,
                  label = item.label,
                  customProperties = item.customProperties,
                  choiceId = item.choiceId,
                  groupId = item.groupId;
              var group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;

              if (!id || !choiceId) {
                return;
              }

              this._store.dispatch((0, items_1.removeItem)(id, choiceId));

              this.passedElement.triggerEvent(constants_1.EVENTS.removeItem, {
                id: id,
                value: value,
                label: label,
                customProperties: customProperties,
                groupValue: group && group.value ? group.value : null
              });
            };

            Choices.prototype._addChoice = function (_a) {
              var value = _a.value,
                  _b = _a.label,
                  label = _b === void 0 ? null : _b,
                  _c = _a.isSelected,
                  isSelected = _c === void 0 ? false : _c,
                  _d = _a.isDisabled,
                  isDisabled = _d === void 0 ? false : _d,
                  _e = _a.groupId,
                  groupId = _e === void 0 ? -1 : _e,
                  _f = _a.customProperties,
                  customProperties = _f === void 0 ? {} : _f,
                  _g = _a.placeholder,
                  placeholder = _g === void 0 ? false : _g,
                  _h = _a.keyCode,
                  keyCode = _h === void 0 ? -1 : _h;

              if (typeof value === 'undefined' || value === null) {
                return;
              } // Generate unique id


              var choices = this._store.choices;
              var choiceLabel = label || value;
              var choiceId = choices ? choices.length + 1 : 1;
              var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);

              this._store.dispatch((0, choices_1.addChoice)({
                id: choiceId,
                groupId: groupId,
                elementId: choiceElementId,
                value: value,
                label: choiceLabel,
                disabled: isDisabled,
                customProperties: customProperties,
                placeholder: placeholder,
                keyCode: keyCode
              }));

              if (isSelected) {
                this._addItem({
                  value: value,
                  label: choiceLabel,
                  choiceId: choiceId,
                  customProperties: customProperties,
                  placeholder: placeholder,
                  keyCode: keyCode
                });
              }
            };

            Choices.prototype._addGroup = function (_a) {
              var _this = this;

              var group = _a.group,
                  id = _a.id,
                  _b = _a.valueKey,
                  valueKey = _b === void 0 ? 'value' : _b,
                  _c = _a.labelKey,
                  labelKey = _c === void 0 ? 'label' : _c;
              var groupChoices = (0, utils_1.isType)('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
              var groupId = id || Math.floor(new Date().valueOf() * Math.random());
              var isDisabled = group.disabled ? group.disabled : false;

              if (groupChoices) {
                this._store.dispatch((0, groups_1.addGroup)({
                  value: group.label,
                  id: groupId,
                  active: true,
                  disabled: isDisabled
                }));

                var addGroupChoices = function addGroupChoices(choice) {
                  var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;

                  _this._addChoice({
                    value: choice[valueKey],
                    label: (0, utils_1.isType)('Object', choice) ? choice[labelKey] : choice.innerHTML,
                    isSelected: choice.selected,
                    isDisabled: isOptDisabled,
                    groupId: groupId,
                    customProperties: choice.customProperties,
                    placeholder: choice.placeholder
                  });
                };

                groupChoices.forEach(addGroupChoices);
              } else {
                this._store.dispatch((0, groups_1.addGroup)({
                  value: group.label,
                  id: group.id,
                  active: false,
                  disabled: group.disabled
                }));
              }
            };

            Choices.prototype._getTemplate = function (template) {
              var _a;

              var args = [];

              for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
              }

              return (_a = this._templates[template]).call.apply(_a, __spreadArray([this, this.config], args, false));
            };

            Choices.prototype._createTemplates = function () {
              var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
              var userTemplates = {};

              if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === 'function') {
                userTemplates = callbackOnCreateTemplates.call(this, utils_1.strToEl);
              }

              this._templates = (0, deepmerge_1["default"])(templates_1["default"], userTemplates);
            };

            Choices.prototype._createElements = function () {
              this.containerOuter = new components_1.Container({
                element: this._getTemplate('containerOuter', this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                position: this.config.position
              });
              this.containerInner = new components_1.Container({
                element: this._getTemplate('containerInner'),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                position: this.config.position
              });
              this.input = new components_1.Input({
                element: this._getTemplate('input', this._placeholderValue),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                preventPaste: !this.config.paste
              });
              this.choiceList = new components_1.List({
                element: this._getTemplate('choiceList', this._isSelectOneElement)
              });
              this.itemList = new components_1.List({
                element: this._getTemplate('itemList', this._isSelectOneElement)
              });
              this.dropdown = new components_1.Dropdown({
                element: this._getTemplate('dropdown'),
                classNames: this.config.classNames,
                type: this.passedElement.element.type
              });
            };

            Choices.prototype._createStructure = function () {
              // Hide original element
              this.passedElement.conceal(); // Wrap input in container preserving DOM ordering

              this.containerInner.wrap(this.passedElement.element); // Wrapper inner container with outer container

              this.containerOuter.wrap(this.containerInner.element);

              if (this._isSelectOneElement) {
                this.input.placeholder = this.config.searchPlaceholderValue || '';
              } else if (this._placeholderValue) {
                this.input.placeholder = this._placeholderValue;
                this.input.setWidth();
              }

              this.containerOuter.element.appendChild(this.containerInner.element);
              this.containerOuter.element.appendChild(this.dropdown.element);
              this.containerInner.element.appendChild(this.itemList.element);

              if (!this._isTextElement) {
                this.dropdown.element.appendChild(this.choiceList.element);
              }

              if (!this._isSelectOneElement) {
                this.containerInner.element.appendChild(this.input.element);
              } else if (this.config.searchEnabled) {
                this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
              }

              if (this._isSelectElement) {
                this._highlightPosition = 0;
                this._isSearching = false;

                this._startLoading();

                if (this._presetGroups.length) {
                  this._addPredefinedGroups(this._presetGroups);
                } else {
                  this._addPredefinedChoices(this._presetChoices);
                }

                this._stopLoading();
              }

              if (this._isTextElement) {
                this._addPredefinedItems(this._presetItems);
              }
            };

            Choices.prototype._addPredefinedGroups = function (groups) {
              var _this = this; // If we have a placeholder option


              var placeholderChoice = this.passedElement.placeholderOption;

              if (placeholderChoice && placeholderChoice.parentNode && placeholderChoice.parentNode.tagName === 'SELECT') {
                this._addChoice({
                  value: placeholderChoice.value,
                  label: placeholderChoice.innerHTML,
                  isSelected: placeholderChoice.selected,
                  isDisabled: placeholderChoice.disabled,
                  placeholder: true
                });
              }

              groups.forEach(function (group) {
                return _this._addGroup({
                  group: group,
                  id: group.id || null
                });
              });
            };

            Choices.prototype._addPredefinedChoices = function (choices) {
              var _this = this; // If sorting is enabled or the user is searching, filter choices


              if (this.config.shouldSort) {
                choices.sort(this.config.sorter);
              }

              var hasSelectedChoice = choices.some(function (choice) {
                return choice.selected;
              });
              var firstEnabledChoiceIndex = choices.findIndex(function (choice) {
                return choice.disabled === undefined || !choice.disabled;
              });
              choices.forEach(function (choice, index) {
                var _a = choice.value,
                    value = _a === void 0 ? '' : _a,
                    label = choice.label,
                    customProperties = choice.customProperties,
                    placeholder = choice.placeholder;

                if (_this._isSelectElement) {
                  // If the choice is actually a group
                  if (choice.choices) {
                    _this._addGroup({
                      group: choice,
                      id: choice.id || null
                    });
                  } else {
                    /**
                     * If there is a selected choice already or the choice is not the first in
                     * the array, add each choice normally.
                     *
                     * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
                     */
                    var shouldPreselect = _this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                    var isSelected = shouldPreselect ? true : choice.selected;
                    var isDisabled = choice.disabled;

                    _this._addChoice({
                      value: value,
                      label: label,
                      isSelected: !!isSelected,
                      isDisabled: !!isDisabled,
                      placeholder: !!placeholder,
                      customProperties: customProperties
                    });
                  }
                } else {
                  _this._addChoice({
                    value: value,
                    label: label,
                    isSelected: !!choice.selected,
                    isDisabled: !!choice.disabled,
                    placeholder: !!choice.placeholder,
                    customProperties: customProperties
                  });
                }
              });
            };

            Choices.prototype._addPredefinedItems = function (items) {
              var _this = this;

              items.forEach(function (item) {
                if (_typeof(item) === 'object' && item.value) {
                  _this._addItem({
                    value: item.value,
                    label: item.label,
                    choiceId: item.id,
                    customProperties: item.customProperties,
                    placeholder: item.placeholder
                  });
                }

                if (typeof item === 'string') {
                  _this._addItem({
                    value: item
                  });
                }
              });
            };

            Choices.prototype._setChoiceOrItem = function (item) {
              var _this = this;

              var itemType = (0, utils_1.getType)(item).toLowerCase();
              var handleType = {
                object: function object() {
                  if (!item.value) {
                    return;
                  } // If we are dealing with a select input, we need to create an option first
                  // that is then selected. For text inputs we can just add items normally.


                  if (!_this._isTextElement) {
                    _this._addChoice({
                      value: item.value,
                      label: item.label,
                      isSelected: true,
                      isDisabled: false,
                      customProperties: item.customProperties,
                      placeholder: item.placeholder
                    });
                  } else {
                    _this._addItem({
                      value: item.value,
                      label: item.label,
                      choiceId: item.id,
                      customProperties: item.customProperties,
                      placeholder: item.placeholder
                    });
                  }
                },
                string: function string() {
                  if (!_this._isTextElement) {
                    _this._addChoice({
                      value: item,
                      label: item,
                      isSelected: true,
                      isDisabled: false
                    });
                  } else {
                    _this._addItem({
                      value: item
                    });
                  }
                }
              };
              handleType[itemType]();
            };

            Choices.prototype._findAndSelectChoiceByValue = function (value) {
              var _this = this;

              var choices = this._store.choices; // Check 'value' property exists and the choice isn't already selected

              var foundChoice = choices.find(function (choice) {
                return _this.config.valueComparer(choice.value, value);
              });

              if (foundChoice && !foundChoice.selected) {
                this._addItem({
                  value: foundChoice.value,
                  label: foundChoice.label,
                  choiceId: foundChoice.id,
                  groupId: foundChoice.groupId,
                  customProperties: foundChoice.customProperties,
                  placeholder: foundChoice.placeholder,
                  keyCode: foundChoice.keyCode
                });
              }
            };

            Choices.prototype._generatePlaceholderValue = function () {
              if (this._isSelectElement && this.passedElement.placeholderOption) {
                var placeholderOption = this.passedElement.placeholderOption;
                return placeholderOption ? placeholderOption.text : null;
              }

              var _a = this.config,
                  placeholder = _a.placeholder,
                  placeholderValue = _a.placeholderValue;
              var dataset = this.passedElement.element.dataset;

              if (placeholder) {
                if (placeholderValue) {
                  return placeholderValue;
                }

                if (dataset.placeholder) {
                  return dataset.placeholder;
                }
              }

              return null;
            };

            return Choices;
          }();

          exports["default"] = Choices;
          /***/
        },

        /***/
        613:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_100959__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __nested_webpack_require_100959__(799);

          var constants_1 = __nested_webpack_require_100959__(883);

          var Container =
          /** @class */
          function () {
            function Container(_a) {
              var element = _a.element,
                  type = _a.type,
                  classNames = _a.classNames,
                  position = _a.position;
              this.element = element;
              this.classNames = classNames;
              this.type = type;
              this.position = position;
              this.isOpen = false;
              this.isFlipped = false;
              this.isFocussed = false;
              this.isDisabled = false;
              this.isLoading = false;
              this._onFocus = this._onFocus.bind(this);
              this._onBlur = this._onBlur.bind(this);
            }

            Container.prototype.addEventListeners = function () {
              this.element.addEventListener('focus', this._onFocus);
              this.element.addEventListener('blur', this._onBlur);
            };

            Container.prototype.removeEventListeners = function () {
              this.element.removeEventListener('focus', this._onFocus);
              this.element.removeEventListener('blur', this._onBlur);
            };
            /**
             * Determine whether container should be flipped based on passed
             * dropdown position
             */


            Container.prototype.shouldFlip = function (dropdownPos) {
              if (typeof dropdownPos !== 'number') {
                return false;
              } // If flip is enabled and the dropdown bottom position is
              // greater than the window height flip the dropdown.


              var shouldFlip = false;

              if (this.position === 'auto') {
                shouldFlip = !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches;
              } else if (this.position === 'top') {
                shouldFlip = true;
              }

              return shouldFlip;
            };

            Container.prototype.setActiveDescendant = function (activeDescendantID) {
              this.element.setAttribute('aria-activedescendant', activeDescendantID);
            };

            Container.prototype.removeActiveDescendant = function () {
              this.element.removeAttribute('aria-activedescendant');
            };

            Container.prototype.open = function (dropdownPos) {
              this.element.classList.add(this.classNames.openState);
              this.element.setAttribute('aria-expanded', 'true');
              this.isOpen = true;

              if (this.shouldFlip(dropdownPos)) {
                this.element.classList.add(this.classNames.flippedState);
                this.isFlipped = true;
              }
            };

            Container.prototype.close = function () {
              this.element.classList.remove(this.classNames.openState);
              this.element.setAttribute('aria-expanded', 'false');
              this.removeActiveDescendant();
              this.isOpen = false; // A dropdown flips if it does not have space within the page

              if (this.isFlipped) {
                this.element.classList.remove(this.classNames.flippedState);
                this.isFlipped = false;
              }
            };

            Container.prototype.focus = function () {
              if (!this.isFocussed) {
                this.element.focus();
              }
            };

            Container.prototype.addFocusState = function () {
              this.element.classList.add(this.classNames.focusState);
            };

            Container.prototype.removeFocusState = function () {
              this.element.classList.remove(this.classNames.focusState);
            };

            Container.prototype.enable = function () {
              this.element.classList.remove(this.classNames.disabledState);
              this.element.removeAttribute('aria-disabled');

              if (this.type === constants_1.SELECT_ONE_TYPE) {
                this.element.setAttribute('tabindex', '0');
              }

              this.isDisabled = false;
            };

            Container.prototype.disable = function () {
              this.element.classList.add(this.classNames.disabledState);
              this.element.setAttribute('aria-disabled', 'true');

              if (this.type === constants_1.SELECT_ONE_TYPE) {
                this.element.setAttribute('tabindex', '-1');
              }

              this.isDisabled = true;
            };

            Container.prototype.wrap = function (element) {
              (0, utils_1.wrap)(element, this.element);
            };

            Container.prototype.unwrap = function (element) {
              if (this.element.parentNode) {
                // Move passed element outside this element
                this.element.parentNode.insertBefore(element, this.element); // Remove this element

                this.element.parentNode.removeChild(this.element);
              }
            };

            Container.prototype.addLoadingState = function () {
              this.element.classList.add(this.classNames.loadingState);
              this.element.setAttribute('aria-busy', 'true');
              this.isLoading = true;
            };

            Container.prototype.removeLoadingState = function () {
              this.element.classList.remove(this.classNames.loadingState);
              this.element.removeAttribute('aria-busy');
              this.isLoading = false;
            };

            Container.prototype._onFocus = function () {
              this.isFocussed = true;
            };

            Container.prototype._onBlur = function () {
              this.isFocussed = false;
            };

            return Container;
          }();

          exports["default"] = Container;
          /***/
        },

        /***/
        217:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Dropdown =
          /** @class */
          function () {
            function Dropdown(_a) {
              var element = _a.element,
                  type = _a.type,
                  classNames = _a.classNames;
              this.element = element;
              this.classNames = classNames;
              this.type = type;
              this.isActive = false;
            }

            Object.defineProperty(Dropdown.prototype, "distanceFromTopWindow", {
              /**
               * Bottom position of dropdown in viewport coordinates
               */
              get: function get() {
                return this.element.getBoundingClientRect().bottom;
              },
              enumerable: false,
              configurable: true
            });

            Dropdown.prototype.getChild = function (selector) {
              return this.element.querySelector(selector);
            };
            /**
             * Show dropdown to user by adding active state class
             */


            Dropdown.prototype.show = function () {
              this.element.classList.add(this.classNames.activeState);
              this.element.setAttribute('aria-expanded', 'true');
              this.isActive = true;
              return this;
            };
            /**
             * Hide dropdown from user
             */


            Dropdown.prototype.hide = function () {
              this.element.classList.remove(this.classNames.activeState);
              this.element.setAttribute('aria-expanded', 'false');
              this.isActive = false;
              return this;
            };

            return Dropdown;
          }();

          exports["default"] = Dropdown;
          /***/
        },

        /***/
        520:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_109066__) {
          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WrappedSelect = exports.WrappedInput = exports.List = exports.Input = exports.Container = exports.Dropdown = void 0;

          var dropdown_1 = __importDefault(__nested_webpack_require_109066__(217));

          exports.Dropdown = dropdown_1["default"];

          var container_1 = __importDefault(__nested_webpack_require_109066__(613));

          exports.Container = container_1["default"];

          var input_1 = __importDefault(__nested_webpack_require_109066__(11));

          exports.Input = input_1["default"];

          var list_1 = __importDefault(__nested_webpack_require_109066__(624));

          exports.List = list_1["default"];

          var wrapped_input_1 = __importDefault(__nested_webpack_require_109066__(541));

          exports.WrappedInput = wrapped_input_1["default"];

          var wrapped_select_1 = __importDefault(__nested_webpack_require_109066__(982));

          exports.WrappedSelect = wrapped_select_1["default"];
          /***/
        },

        /***/
        11:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_110386__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __nested_webpack_require_110386__(799);

          var constants_1 = __nested_webpack_require_110386__(883);

          var Input =
          /** @class */
          function () {
            function Input(_a) {
              var element = _a.element,
                  type = _a.type,
                  classNames = _a.classNames,
                  preventPaste = _a.preventPaste;
              this.element = element;
              this.type = type;
              this.classNames = classNames;
              this.preventPaste = preventPaste;
              this.isFocussed = this.element.isEqualNode(document.activeElement);
              this.isDisabled = element.disabled;
              this._onPaste = this._onPaste.bind(this);
              this._onInput = this._onInput.bind(this);
              this._onFocus = this._onFocus.bind(this);
              this._onBlur = this._onBlur.bind(this);
            }

            Object.defineProperty(Input.prototype, "placeholder", {
              set: function set(placeholder) {
                this.element.placeholder = placeholder;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Input.prototype, "value", {
              get: function get() {
                return (0, utils_1.sanitise)(this.element.value);
              },
              set: function set(value) {
                this.element.value = value;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Input.prototype, "rawValue", {
              get: function get() {
                return this.element.value;
              },
              enumerable: false,
              configurable: true
            });

            Input.prototype.addEventListeners = function () {
              this.element.addEventListener('paste', this._onPaste);
              this.element.addEventListener('input', this._onInput, {
                passive: true
              });
              this.element.addEventListener('focus', this._onFocus, {
                passive: true
              });
              this.element.addEventListener('blur', this._onBlur, {
                passive: true
              });
            };

            Input.prototype.removeEventListeners = function () {
              this.element.removeEventListener('input', this._onInput);
              this.element.removeEventListener('paste', this._onPaste);
              this.element.removeEventListener('focus', this._onFocus);
              this.element.removeEventListener('blur', this._onBlur);
            };

            Input.prototype.enable = function () {
              this.element.removeAttribute('disabled');
              this.isDisabled = false;
            };

            Input.prototype.disable = function () {
              this.element.setAttribute('disabled', '');
              this.isDisabled = true;
            };

            Input.prototype.focus = function () {
              if (!this.isFocussed) {
                this.element.focus();
              }
            };

            Input.prototype.blur = function () {
              if (this.isFocussed) {
                this.element.blur();
              }
            };

            Input.prototype.clear = function (setWidth) {
              if (setWidth === void 0) {
                setWidth = true;
              }

              if (this.element.value) {
                this.element.value = '';
              }

              if (setWidth) {
                this.setWidth();
              }

              return this;
            };
            /**
             * Set the correct input width based on placeholder
             * value or input value
             */


            Input.prototype.setWidth = function () {
              // Resize input to contents or placeholder
              var _a = this.element,
                  style = _a.style,
                  value = _a.value,
                  placeholder = _a.placeholder;
              style.minWidth = "".concat(placeholder.length + 1, "ch");
              style.width = "".concat(value.length + 1, "ch");
            };

            Input.prototype.setActiveDescendant = function (activeDescendantID) {
              this.element.setAttribute('aria-activedescendant', activeDescendantID);
            };

            Input.prototype.removeActiveDescendant = function () {
              this.element.removeAttribute('aria-activedescendant');
            };

            Input.prototype._onInput = function () {
              if (this.type !== constants_1.SELECT_ONE_TYPE) {
                this.setWidth();
              }
            };

            Input.prototype._onPaste = function (event) {
              if (this.preventPaste) {
                event.preventDefault();
              }
            };

            Input.prototype._onFocus = function () {
              this.isFocussed = true;
            };

            Input.prototype._onBlur = function () {
              this.isFocussed = false;
            };

            return Input;
          }();

          exports["default"] = Input;
          /***/
        },

        /***/
        624:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_115821__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var constants_1 = __nested_webpack_require_115821__(883);

          var List =
          /** @class */
          function () {
            function List(_a) {
              var element = _a.element;
              this.element = element;
              this.scrollPos = this.element.scrollTop;
              this.height = this.element.offsetHeight;
            }

            List.prototype.clear = function () {
              this.element.innerHTML = '';
            };

            List.prototype.append = function (node) {
              this.element.appendChild(node);
            };

            List.prototype.getChild = function (selector) {
              return this.element.querySelector(selector);
            };

            List.prototype.hasChildren = function () {
              return this.element.hasChildNodes();
            };

            List.prototype.scrollToTop = function () {
              this.element.scrollTop = 0;
            };

            List.prototype.scrollToChildElement = function (element, direction) {
              var _this = this;

              if (!element) {
                return;
              }

              var listHeight = this.element.offsetHeight; // Scroll position of dropdown

              var listScrollPosition = this.element.scrollTop + listHeight;
              var elementHeight = element.offsetHeight; // Distance from bottom of element to top of parent

              var elementPos = element.offsetTop + elementHeight; // Difference between the element and scroll position

              var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
              requestAnimationFrame(function () {
                _this._animateScroll(destination, direction);
              });
            };

            List.prototype._scrollDown = function (scrollPos, strength, destination) {
              var easing = (destination - scrollPos) / strength;
              var distance = easing > 1 ? easing : 1;
              this.element.scrollTop = scrollPos + distance;
            };

            List.prototype._scrollUp = function (scrollPos, strength, destination) {
              var easing = (scrollPos - destination) / strength;
              var distance = easing > 1 ? easing : 1;
              this.element.scrollTop = scrollPos - distance;
            };

            List.prototype._animateScroll = function (destination, direction) {
              var _this = this;

              var strength = constants_1.SCROLLING_SPEED;
              var choiceListScrollTop = this.element.scrollTop;
              var continueAnimation = false;

              if (direction > 0) {
                this._scrollDown(choiceListScrollTop, strength, destination);

                if (choiceListScrollTop < destination) {
                  continueAnimation = true;
                }
              } else {
                this._scrollUp(choiceListScrollTop, strength, destination);

                if (choiceListScrollTop > destination) {
                  continueAnimation = true;
                }
              }

              if (continueAnimation) {
                requestAnimationFrame(function () {
                  _this._animateScroll(destination, direction);
                });
              }
            };

            return List;
          }();

          exports["default"] = List;
          /***/
        },

        /***/
        730:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_119468__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __nested_webpack_require_119468__(799);

          var WrappedElement =
          /** @class */
          function () {
            function WrappedElement(_a) {
              var element = _a.element,
                  classNames = _a.classNames;
              this.element = element;
              this.classNames = classNames;

              if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) {
                throw new TypeError('Invalid element passed');
              }

              this.isDisabled = false;
            }

            Object.defineProperty(WrappedElement.prototype, "isActive", {
              get: function get() {
                return this.element.dataset.choice === 'active';
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(WrappedElement.prototype, "dir", {
              get: function get() {
                return this.element.dir;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(WrappedElement.prototype, "value", {
              get: function get() {
                return this.element.value;
              },
              set: function set(value) {
                // you must define setter here otherwise it will be readonly property
                this.element.value = value;
              },
              enumerable: false,
              configurable: true
            });

            WrappedElement.prototype.conceal = function () {
              // Hide passed input
              this.element.classList.add(this.classNames.input);
              this.element.hidden = true; // Remove element from tab index

              this.element.tabIndex = -1; // Backup original styles if any

              var origStyle = this.element.getAttribute('style');

              if (origStyle) {
                this.element.setAttribute('data-choice-orig-style', origStyle);
              }

              this.element.setAttribute('data-choice', 'active');
            };

            WrappedElement.prototype.reveal = function () {
              // Reinstate passed element
              this.element.classList.remove(this.classNames.input);
              this.element.hidden = false;
              this.element.removeAttribute('tabindex'); // Recover original styles if any

              var origStyle = this.element.getAttribute('data-choice-orig-style');

              if (origStyle) {
                this.element.removeAttribute('data-choice-orig-style');
                this.element.setAttribute('style', origStyle);
              } else {
                this.element.removeAttribute('style');
              }

              this.element.removeAttribute('data-choice'); // Re-assign values - this is weird, I know
              // @todo Figure out why we need to do this

              this.element.value = this.element.value; // eslint-disable-line no-self-assign
            };

            WrappedElement.prototype.enable = function () {
              this.element.removeAttribute('disabled');
              this.element.disabled = false;
              this.isDisabled = false;
            };

            WrappedElement.prototype.disable = function () {
              this.element.setAttribute('disabled', '');
              this.element.disabled = true;
              this.isDisabled = true;
            };

            WrappedElement.prototype.triggerEvent = function (eventType, data) {
              (0, utils_1.dispatchEvent)(this.element, eventType, data);
            };

            return WrappedElement;
          }();

          exports["default"] = WrappedElement;
          /***/
        },

        /***/
        541:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_123453__) {
          var __extends = this && this.__extends || function () {
            var _extendStatics = function extendStatics(d, b) {
              _extendStatics = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics(d, b);
            };

            return function (d, b) {
              if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

              _extendStatics(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var wrapped_element_1 = __importDefault(__nested_webpack_require_123453__(730));

          var WrappedInput =
          /** @class */
          function (_super) {
            __extends(WrappedInput, _super);

            function WrappedInput(_a) {
              var element = _a.element,
                  classNames = _a.classNames,
                  delimiter = _a.delimiter;

              var _this = _super.call(this, {
                element: element,
                classNames: classNames
              }) || this;

              _this.delimiter = delimiter;
              return _this;
            }

            Object.defineProperty(WrappedInput.prototype, "value", {
              get: function get() {
                return this.element.value;
              },
              set: function set(value) {
                this.element.setAttribute('value', value);
                this.element.value = value;
              },
              enumerable: false,
              configurable: true
            });
            return WrappedInput;
          }(wrapped_element_1["default"]);

          exports["default"] = WrappedInput;
          /***/
        },

        /***/
        982:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_126014__) {
          var __extends = this && this.__extends || function () {
            var _extendStatics2 = function extendStatics(d, b) {
              _extendStatics2 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (d, b) {
                d.__proto__ = b;
              } || function (d, b) {
                for (var p in b) {
                  if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                }
              };

              return _extendStatics2(d, b);
            };

            return function (d, b) {
              if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

              _extendStatics2(d, b);

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
          }();

          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var wrapped_element_1 = __importDefault(__nested_webpack_require_126014__(730));

          var WrappedSelect =
          /** @class */
          function (_super) {
            __extends(WrappedSelect, _super);

            function WrappedSelect(_a) {
              var element = _a.element,
                  classNames = _a.classNames,
                  template = _a.template;

              var _this = _super.call(this, {
                element: element,
                classNames: classNames
              }) || this;

              _this.template = template;
              return _this;
            }

            Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
              get: function get() {
                return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
                this.element.querySelector('option[placeholder]');
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(WrappedSelect.prototype, "optionGroups", {
              get: function get() {
                return Array.from(this.element.getElementsByTagName('OPTGROUP'));
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(WrappedSelect.prototype, "options", {
              get: function get() {
                return Array.from(this.element.options);
              },
              set: function set(options) {
                var _this = this;

                var fragment = document.createDocumentFragment();

                var addOptionToFragment = function addOptionToFragment(data) {
                  // Create a standard select option
                  var option = _this.template(data); // Append it to fragment


                  fragment.appendChild(option);
                }; // Add each list item to list


                options.forEach(function (optionData) {
                  return addOptionToFragment(optionData);
                });
                this.appendDocFragment(fragment);
              },
              enumerable: false,
              configurable: true
            });

            WrappedSelect.prototype.appendDocFragment = function (fragment) {
              this.element.innerHTML = '';
              this.element.appendChild(fragment);
            };

            return WrappedSelect;
          }(wrapped_element_1["default"]);

          exports["default"] = WrappedSelect;
          /***/
        },

        /***/
        883:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SCROLLING_SPEED = exports.SELECT_MULTIPLE_TYPE = exports.SELECT_ONE_TYPE = exports.TEXT_TYPE = exports.KEY_CODES = exports.ACTION_TYPES = exports.EVENTS = void 0;
          exports.EVENTS = {
            showDropdown: 'showDropdown',
            hideDropdown: 'hideDropdown',
            change: 'change',
            choice: 'choice',
            search: 'search',
            addItem: 'addItem',
            removeItem: 'removeItem',
            highlightItem: 'highlightItem',
            highlightChoice: 'highlightChoice',
            unhighlightItem: 'unhighlightItem'
          };
          exports.ACTION_TYPES = {
            ADD_CHOICE: 'ADD_CHOICE',
            FILTER_CHOICES: 'FILTER_CHOICES',
            ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
            CLEAR_CHOICES: 'CLEAR_CHOICES',
            ADD_GROUP: 'ADD_GROUP',
            ADD_ITEM: 'ADD_ITEM',
            REMOVE_ITEM: 'REMOVE_ITEM',
            HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM',
            CLEAR_ALL: 'CLEAR_ALL',
            RESET_TO: 'RESET_TO',
            SET_IS_LOADING: 'SET_IS_LOADING'
          };
          exports.KEY_CODES = {
            BACK_KEY: 46,
            DELETE_KEY: 8,
            ENTER_KEY: 13,
            A_KEY: 65,
            ESC_KEY: 27,
            UP_KEY: 38,
            DOWN_KEY: 40,
            PAGE_UP_KEY: 33,
            PAGE_DOWN_KEY: 34
          };
          exports.TEXT_TYPE = 'text';
          exports.SELECT_ONE_TYPE = 'select-one';
          exports.SELECT_MULTIPLE_TYPE = 'select-multiple';
          exports.SCROLLING_SPEED = 4;
          /***/
        },

        /***/
        789:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_131827__) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DEFAULT_CONFIG = exports.DEFAULT_CLASSNAMES = void 0;

          var utils_1 = __nested_webpack_require_131827__(799);

          exports.DEFAULT_CLASSNAMES = {
            containerOuter: 'choices',
            containerInner: 'choices__inner',
            input: 'choices__input',
            inputCloned: 'choices__input--cloned',
            list: 'choices__list',
            listItems: 'choices__list--multiple',
            listSingle: 'choices__list--single',
            listDropdown: 'choices__list--dropdown',
            item: 'choices__item',
            itemSelectable: 'choices__item--selectable',
            itemDisabled: 'choices__item--disabled',
            itemChoice: 'choices__item--choice',
            placeholder: 'choices__placeholder',
            group: 'choices__group',
            groupHeading: 'choices__heading',
            button: 'choices__button',
            activeState: 'is-active',
            focusState: 'is-focused',
            openState: 'is-open',
            disabledState: 'is-disabled',
            highlightedState: 'is-highlighted',
            selectedState: 'is-selected',
            flippedState: 'is-flipped',
            loadingState: 'is-loading',
            noResults: 'has-no-results',
            noChoices: 'has-no-choices'
          };
          exports.DEFAULT_CONFIG = {
            items: [],
            choices: [],
            silent: false,
            renderChoiceLimit: -1,
            maxItemCount: -1,
            addItems: true,
            addItemFilter: null,
            removeItems: true,
            removeItemButton: false,
            editItems: false,
            allowHTML: true,
            duplicateItemsAllowed: true,
            delimiter: ',',
            paste: true,
            searchEnabled: true,
            searchChoices: true,
            searchFloor: 1,
            searchResultLimit: 4,
            searchFields: ['label', 'value'],
            position: 'auto',
            resetScrollPosition: true,
            shouldSort: true,
            shouldSortItems: false,
            sorter: utils_1.sortByAlpha,
            placeholder: true,
            placeholderValue: null,
            searchPlaceholderValue: null,
            prependValue: null,
            appendValue: null,
            renderSelectedChoices: 'auto',
            loadingText: 'Loading...',
            noResultsText: 'No results found',
            noChoicesText: 'No choices to choose from',
            itemSelectText: 'Press to select',
            uniqueItemText: 'Only unique values can be added',
            customAddItemText: 'Only values matching specific conditions can be added',
            addItemText: function addItemText(value) {
              return "Press Enter to add <b>\"".concat((0, utils_1.sanitise)(value), "\"</b>");
            },
            maxItemText: function maxItemText(maxItemCount) {
              return "Only ".concat(maxItemCount, " values can be added");
            },
            valueComparer: function valueComparer(value1, value2) {
              return value1 === value2;
            },
            fuseOptions: {
              includeScore: true
            },
            labelId: '',
            callbackOnInit: null,
            callbackOnCreateTemplates: null,
            classNames: exports.DEFAULT_CLASSNAMES
          };
          /***/
        },

        /***/
        18:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        978:
        /***/
        function _(__unused_webpack_module, exports) {
          /* eslint-disable @typescript-eslint/no-explicit-any */
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        948:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        359:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        285:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        533:
        /***/
        function _(__unused_webpack_module, exports) {
          /* eslint-disable @typescript-eslint/no-explicit-any */
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        187:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_136866__) {
          var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function get() {
                return m[k];
              }
            });
          } : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            o[k2] = m[k];
          });

          var __exportStar = this && this.__exportStar || function (m, exports) {
            for (var p in m) {
              if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
            }
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          __exportStar(__nested_webpack_require_136866__(18), exports);

          __exportStar(__nested_webpack_require_136866__(978), exports);

          __exportStar(__nested_webpack_require_136866__(948), exports);

          __exportStar(__nested_webpack_require_136866__(359), exports);

          __exportStar(__nested_webpack_require_136866__(285), exports);

          __exportStar(__nested_webpack_require_136866__(533), exports);

          __exportStar(__nested_webpack_require_136866__(287), exports);

          __exportStar(__nested_webpack_require_136866__(132), exports);

          __exportStar(__nested_webpack_require_136866__(837), exports);

          __exportStar(__nested_webpack_require_136866__(598), exports);

          __exportStar(__nested_webpack_require_136866__(369), exports);

          __exportStar(__nested_webpack_require_136866__(37), exports);

          __exportStar(__nested_webpack_require_136866__(47), exports);

          __exportStar(__nested_webpack_require_136866__(923), exports);

          __exportStar(__nested_webpack_require_136866__(876), exports);
          /***/

        },

        /***/
        287:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        132:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        837:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        598:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        37:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        369:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        47:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        923:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        876:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /***/
        },

        /***/
        799:
        /***/
        function _(__unused_webpack_module, exports) {
          /* eslint-disable @typescript-eslint/no-explicit-any */
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.diff = exports.cloneObject = exports.existsInArray = exports.dispatchEvent = exports.sortByScore = exports.sortByAlpha = exports.strToEl = exports.sanitise = exports.isScrolledIntoView = exports.getAdjacentEl = exports.wrap = exports.isType = exports.getType = exports.generateId = exports.generateChars = exports.getRandomNumber = void 0;

          var getRandomNumber = function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
          };

          exports.getRandomNumber = getRandomNumber;

          var generateChars = function generateChars(length) {
            return Array.from({
              length: length
            }, function () {
              return (0, exports.getRandomNumber)(0, 36).toString(36);
            }).join('');
          };

          exports.generateChars = generateChars;

          var generateId = function generateId(element, prefix) {
            var id = element.id || element.name && "".concat(element.name, "-").concat((0, exports.generateChars)(2)) || (0, exports.generateChars)(4);
            id = id.replace(/(:|\.|\[|\]|,)/g, '');
            id = "".concat(prefix, "-").concat(id);
            return id;
          };

          exports.generateId = generateId;

          var getType = function getType(obj) {
            return Object.prototype.toString.call(obj).slice(8, -1);
          };

          exports.getType = getType;

          var isType = function isType(type, obj) {
            return obj !== undefined && obj !== null && (0, exports.getType)(obj) === type;
          };

          exports.isType = isType;

          var wrap = function wrap(element, wrapper) {
            if (wrapper === void 0) {
              wrapper = document.createElement('div');
            }

            if (element.parentNode) {
              if (element.nextSibling) {
                element.parentNode.insertBefore(wrapper, element.nextSibling);
              } else {
                element.parentNode.appendChild(wrapper);
              }
            }

            return wrapper.appendChild(element);
          };

          exports.wrap = wrap;

          var getAdjacentEl = function getAdjacentEl(startEl, selector, direction) {
            if (direction === void 0) {
              direction = 1;
            }

            var prop = "".concat(direction > 0 ? 'next' : 'previous', "ElementSibling");
            var sibling = startEl[prop];

            while (sibling) {
              if (sibling.matches(selector)) {
                return sibling;
              }

              sibling = sibling[prop];
            }

            return sibling;
          };

          exports.getAdjacentEl = getAdjacentEl;

          var isScrolledIntoView = function isScrolledIntoView(element, parent, direction) {
            if (direction === void 0) {
              direction = 1;
            }

            if (!element) {
              return false;
            }

            var isVisible;

            if (direction > 0) {
              // In view from bottom
              isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
            } else {
              // In view from top
              isVisible = element.offsetTop >= parent.scrollTop;
            }

            return isVisible;
          };

          exports.isScrolledIntoView = isScrolledIntoView;

          var sanitise = function sanitise(value) {
            if (typeof value !== 'string') {
              return value;
            }

            return value.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
          };

          exports.sanitise = sanitise;

          exports.strToEl = function () {
            var tmpEl = document.createElement('div');
            return function (str) {
              var cleanedInput = str.trim();
              tmpEl.innerHTML = cleanedInput;
              var firldChild = tmpEl.children[0];

              while (tmpEl.firstChild) {
                tmpEl.removeChild(tmpEl.firstChild);
              }

              return firldChild;
            };
          }();

          var sortByAlpha = function sortByAlpha(_a, _b) {
            var value = _a.value,
                _c = _a.label,
                label = _c === void 0 ? value : _c;
            var value2 = _b.value,
                _d = _b.label,
                label2 = _d === void 0 ? value2 : _d;
            return label.localeCompare(label2, [], {
              sensitivity: 'base',
              ignorePunctuation: true,
              numeric: true
            });
          };

          exports.sortByAlpha = sortByAlpha;

          var sortByScore = function sortByScore(a, b) {
            var _a = a.score,
                scoreA = _a === void 0 ? 0 : _a;
            var _b = b.score,
                scoreB = _b === void 0 ? 0 : _b;
            return scoreA - scoreB;
          };

          exports.sortByScore = sortByScore;

          var dispatchEvent = function dispatchEvent(element, type, customArgs) {
            if (customArgs === void 0) {
              customArgs = null;
            }

            var event = new CustomEvent(type, {
              detail: customArgs,
              bubbles: true,
              cancelable: true
            });
            return element.dispatchEvent(event);
          };

          exports.dispatchEvent = dispatchEvent;

          var existsInArray = function existsInArray(array, value, key) {
            if (key === void 0) {
              key = 'value';
            }

            return array.some(function (item) {
              if (typeof value === 'string') {
                return item[key] === value.trim();
              }

              return item[key] === value;
            });
          };

          exports.existsInArray = existsInArray;

          var cloneObject = function cloneObject(obj) {
            return JSON.parse(JSON.stringify(obj));
          };

          exports.cloneObject = cloneObject;
          /**
           * Returns an array of keys present on the first but missing on the second object
           */

          var diff = function diff(a, b) {
            var aKeys = Object.keys(a).sort();
            var bKeys = Object.keys(b).sort();
            return aKeys.filter(function (i) {
              return bKeys.indexOf(i) < 0;
            });
          };

          exports.diff = diff;
          /***/
        },

        /***/
        273:
        /***/
        function _(__unused_webpack_module, exports) {
          var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
            if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
            return to.concat(ar || Array.prototype.slice.call(from));
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defaultState = void 0;
          exports.defaultState = [];

          function choices(state, action) {
            if (state === void 0) {
              state = exports.defaultState;
            }

            if (action === void 0) {
              action = {};
            }

            switch (action.type) {
              case 'ADD_CHOICE':
                {
                  var addChoiceAction = action;
                  var choice = {
                    id: addChoiceAction.id,
                    elementId: addChoiceAction.elementId,
                    groupId: addChoiceAction.groupId,
                    value: addChoiceAction.value,
                    label: addChoiceAction.label || addChoiceAction.value,
                    disabled: addChoiceAction.disabled || false,
                    selected: false,
                    active: true,
                    score: 9999,
                    customProperties: addChoiceAction.customProperties,
                    placeholder: addChoiceAction.placeholder || false
                  };
                  /*
                    A disabled choice appears in the choice dropdown but cannot be selected
                    A selected choice has been added to the passed input's value (added as an item)
                    An active choice appears within the choice dropdown
                  */

                  return __spreadArray(__spreadArray([], state, true), [choice], false);
                }

              case 'ADD_ITEM':
                {
                  var addItemAction_1 = action; // When an item is added and it has an associated choice,
                  // we want to disable it so it can't be chosen again

                  if (addItemAction_1.choiceId > -1) {
                    return state.map(function (obj) {
                      var choice = obj;

                      if (choice.id === parseInt("".concat(addItemAction_1.choiceId), 10)) {
                        choice.selected = true;
                      }

                      return choice;
                    });
                  }

                  return state;
                }

              case 'REMOVE_ITEM':
                {
                  var removeItemAction_1 = action; // When an item is removed and it has an associated choice,
                  // we want to re-enable it so it can be chosen again

                  if (removeItemAction_1.choiceId && removeItemAction_1.choiceId > -1) {
                    return state.map(function (obj) {
                      var choice = obj;

                      if (choice.id === parseInt("".concat(removeItemAction_1.choiceId), 10)) {
                        choice.selected = false;
                      }

                      return choice;
                    });
                  }

                  return state;
                }

              case 'FILTER_CHOICES':
                {
                  var filterChoicesAction_1 = action;
                  return state.map(function (obj) {
                    var choice = obj; // Set active state based on whether choice is
                    // within filtered results

                    choice.active = filterChoicesAction_1.results.some(function (_a) {
                      var item = _a.item,
                          score = _a.score;

                      if (item.id === choice.id) {
                        choice.score = score;
                        return true;
                      }

                      return false;
                    });
                    return choice;
                  });
                }

              case 'ACTIVATE_CHOICES':
                {
                  var activateChoicesAction_1 = action;
                  return state.map(function (obj) {
                    var choice = obj;
                    choice.active = activateChoicesAction_1.active;
                    return choice;
                  });
                }

              case 'CLEAR_CHOICES':
                {
                  return exports.defaultState;
                }

              default:
                {
                  return state;
                }
            }
          }

          exports["default"] = choices;
          /***/
        },

        /***/
        871:
        /***/
        function _(__unused_webpack_module, exports) {
          var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
            if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
            return to.concat(ar || Array.prototype.slice.call(from));
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defaultState = void 0;
          exports.defaultState = [];

          function groups(state, action) {
            if (state === void 0) {
              state = exports.defaultState;
            }

            if (action === void 0) {
              action = {};
            }

            switch (action.type) {
              case 'ADD_GROUP':
                {
                  var addGroupAction = action;
                  return __spreadArray(__spreadArray([], state, true), [{
                    id: addGroupAction.id,
                    value: addGroupAction.value,
                    active: addGroupAction.active,
                    disabled: addGroupAction.disabled
                  }], false);
                }

              case 'CLEAR_CHOICES':
                {
                  return [];
                }

              default:
                {
                  return state;
                }
            }
          }

          exports["default"] = groups;
          /***/
        },

        /***/
        655:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_154061__) {
          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defaultState = void 0;

          var redux_1 = __nested_webpack_require_154061__(857);

          var items_1 = __importDefault(__nested_webpack_require_154061__(52));

          var groups_1 = __importDefault(__nested_webpack_require_154061__(871));

          var choices_1 = __importDefault(__nested_webpack_require_154061__(273));

          var loading_1 = __importDefault(__nested_webpack_require_154061__(502));

          var utils_1 = __nested_webpack_require_154061__(799);

          exports.defaultState = {
            groups: [],
            items: [],
            choices: [],
            loading: false
          };
          var appReducer = (0, redux_1.combineReducers)({
            items: items_1["default"],
            groups: groups_1["default"],
            choices: choices_1["default"],
            loading: loading_1["default"]
          });

          var rootReducer = function rootReducer(passedState, action) {
            var state = passedState; // If we are clearing all items, groups and options we reassign
            // state and then pass that state to our proper reducer. This isn't
            // mutating our actual state
            // See: http://stackoverflow.com/a/35641992

            if (action.type === 'CLEAR_ALL') {
              state = exports.defaultState;
            } else if (action.type === 'RESET_TO') {
              return (0, utils_1.cloneObject)(action.state);
            }

            return appReducer(state, action);
          };

          exports["default"] = rootReducer;
          /***/
        },

        /***/
        52:
        /***/
        function _(__unused_webpack_module, exports) {
          var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
            if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
            return to.concat(ar || Array.prototype.slice.call(from));
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defaultState = void 0;
          exports.defaultState = [];

          function items(state, action) {
            if (state === void 0) {
              state = exports.defaultState;
            }

            if (action === void 0) {
              action = {};
            }

            switch (action.type) {
              case 'ADD_ITEM':
                {
                  var addItemAction = action; // Add object to items array

                  var newState = __spreadArray(__spreadArray([], state, true), [{
                    id: addItemAction.id,
                    choiceId: addItemAction.choiceId,
                    groupId: addItemAction.groupId,
                    value: addItemAction.value,
                    label: addItemAction.label,
                    active: true,
                    highlighted: false,
                    customProperties: addItemAction.customProperties,
                    placeholder: addItemAction.placeholder || false,
                    keyCode: null
                  }], false);

                  return newState.map(function (obj) {
                    var item = obj;
                    item.highlighted = false;
                    return item;
                  });
                }

              case 'REMOVE_ITEM':
                {
                  // Set item to inactive
                  return state.map(function (obj) {
                    var item = obj;

                    if (item.id === action.id) {
                      item.active = false;
                    }

                    return item;
                  });
                }

              case 'HIGHLIGHT_ITEM':
                {
                  var highlightItemAction_1 = action;
                  return state.map(function (obj) {
                    var item = obj;

                    if (item.id === highlightItemAction_1.id) {
                      item.highlighted = highlightItemAction_1.highlighted;
                    }

                    return item;
                  });
                }

              default:
                {
                  return state;
                }
            }
          }

          exports["default"] = items;
          /***/
        },

        /***/
        502:
        /***/
        function _(__unused_webpack_module, exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defaultState = void 0;
          exports.defaultState = false;

          var general = function general(state, action) {
            if (state === void 0) {
              state = exports.defaultState;
            }

            if (action === void 0) {
              action = {};
            }

            switch (action.type) {
              case 'SET_IS_LOADING':
                {
                  return action.isLoading;
                }

              default:
                {
                  return state;
                }
            }
          };

          exports["default"] = general;
          /***/
        },

        /***/
        744:
        /***/
        function _(__unused_webpack_module, exports, __nested_webpack_require_159710__) {
          var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
            if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
            return to.concat(ar || Array.prototype.slice.call(from));
          };

          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /* eslint-disable @typescript-eslint/no-explicit-any */

          var redux_1 = __nested_webpack_require_159710__(857);

          var index_1 = __importDefault(__nested_webpack_require_159710__(655));

          var Store =
          /** @class */
          function () {
            function Store() {
              this._store = (0, redux_1.createStore)(index_1["default"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
            }
            /**
             * Subscribe store to function call (wrapped Redux method)
             */


            Store.prototype.subscribe = function (onChange) {
              this._store.subscribe(onChange);
            };
            /**
             * Dispatch event to store (wrapped Redux method)
             */


            Store.prototype.dispatch = function (action) {
              this._store.dispatch(action);
            };

            Object.defineProperty(Store.prototype, "state", {
              /**
               * Get store object (wrapping Redux method)
               */
              get: function get() {
                return this._store.getState();
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "items", {
              /**
               * Get items from store
               */
              get: function get() {
                return this.state.items;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "activeItems", {
              /**
               * Get active items from store
               */
              get: function get() {
                return this.items.filter(function (item) {
                  return item.active === true;
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "highlightedActiveItems", {
              /**
               * Get highlighted items from store
               */
              get: function get() {
                return this.items.filter(function (item) {
                  return item.active && item.highlighted;
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "choices", {
              /**
               * Get choices from store
               */
              get: function get() {
                return this.state.choices;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "activeChoices", {
              /**
               * Get active choices from store
               */
              get: function get() {
                return this.choices.filter(function (choice) {
                  return choice.active === true;
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "selectableChoices", {
              /**
               * Get selectable choices from store
               */
              get: function get() {
                return this.choices.filter(function (choice) {
                  return choice.disabled !== true;
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "searchableChoices", {
              /**
               * Get choices that can be searched (excluding placeholders)
               */
              get: function get() {
                return this.selectableChoices.filter(function (choice) {
                  return choice.placeholder !== true;
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "placeholderChoice", {
              /**
               * Get placeholder choice from store
               */
              get: function get() {
                return __spreadArray([], this.choices, true).reverse().find(function (choice) {
                  return choice.placeholder === true;
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "groups", {
              /**
               * Get groups from store
               */
              get: function get() {
                return this.state.groups;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(Store.prototype, "activeGroups", {
              /**
               * Get active groups from store
               */
              get: function get() {
                var _a = this,
                    groups = _a.groups,
                    choices = _a.choices;

                return groups.filter(function (group) {
                  var isActive = group.active === true && group.disabled === false;
                  var hasActiveOptions = choices.some(function (choice) {
                    return choice.active === true && choice.disabled === false;
                  });
                  return isActive && hasActiveOptions;
                }, []);
              },
              enumerable: false,
              configurable: true
            });
            /**
             * Get loading state from store
             */

            Store.prototype.isLoading = function () {
              return this.state.loading;
            };
            /**
             * Get single choice by it's ID
             */


            Store.prototype.getChoiceById = function (id) {
              return this.activeChoices.find(function (choice) {
                return choice.id === parseInt(id, 10);
              });
            };
            /**
             * Get group by group id
             */


            Store.prototype.getGroupById = function (id) {
              return this.groups.find(function (group) {
                return group.id === id;
              });
            };

            return Store;
          }();

          exports["default"] = Store;
          /***/
        },

        /***/
        686:
        /***/
        function _(__unused_webpack_module, exports) {
          /**
           * Helpers to create HTML elements used by Choices
           * Can be overridden by providing `callbackOnCreateTemplates` option
           */
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var templates = {
            containerOuter: function containerOuter(_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
              var containerOuter = _a.classNames.containerOuter;
              var div = Object.assign(document.createElement('div'), {
                className: containerOuter
              });
              div.dataset.type = passedElementType;

              if (dir) {
                div.dir = dir;
              }

              if (isSelectOneElement) {
                div.tabIndex = 0;
              }

              if (isSelectElement) {
                div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');

                if (searchEnabled) {
                  div.setAttribute('aria-autocomplete', 'list');
                }
              }

              div.setAttribute('aria-haspopup', 'true');
              div.setAttribute('aria-expanded', 'false');

              if (labelId) {
                div.setAttribute('aria-labeledby', labelId);
              }

              return div;
            },
            containerInner: function containerInner(_a) {
              var containerInner = _a.classNames.containerInner;
              return Object.assign(document.createElement('div'), {
                className: containerInner
              });
            },
            itemList: function itemList(_a, isSelectOneElement) {
              var _b = _a.classNames,
                  list = _b.list,
                  listSingle = _b.listSingle,
                  listItems = _b.listItems;
              return Object.assign(document.createElement('div'), {
                className: "".concat(list, " ").concat(isSelectOneElement ? listSingle : listItems)
              });
            },
            placeholder: function placeholder(_a, value) {
              var _b;

              var allowHTML = _a.allowHTML,
                  placeholder = _a.classNames.placeholder;
              return Object.assign(document.createElement('div'), (_b = {
                className: placeholder
              }, _b[allowHTML ? 'innerHTML' : 'innerText'] = value, _b));
            },
            item: function item(_a, _b, removeItemButton) {
              var _c, _d;

              var allowHTML = _a.allowHTML,
                  _e = _a.classNames,
                  item = _e.item,
                  button = _e.button,
                  highlightedState = _e.highlightedState,
                  itemSelectable = _e.itemSelectable,
                  placeholder = _e.placeholder;
              var id = _b.id,
                  value = _b.value,
                  label = _b.label,
                  customProperties = _b.customProperties,
                  active = _b.active,
                  disabled = _b.disabled,
                  highlighted = _b.highlighted,
                  isPlaceholder = _b.placeholder;
              var div = Object.assign(document.createElement('div'), (_c = {
                className: item
              }, _c[allowHTML ? 'innerHTML' : 'innerText'] = label, _c));
              Object.assign(div.dataset, {
                item: '',
                id: id,
                value: value,
                customProperties: customProperties
              });

              if (active) {
                div.setAttribute('aria-selected', 'true');
              }

              if (disabled) {
                div.setAttribute('aria-disabled', 'true');
              }

              if (isPlaceholder) {
                div.classList.add(placeholder);
              }

              div.classList.add(highlighted ? highlightedState : itemSelectable);

              if (removeItemButton) {
                if (disabled) {
                  div.classList.remove(itemSelectable);
                }

                div.dataset.deletable = '';
                /** @todo This MUST be localizable, not hardcoded! */

                var REMOVE_ITEM_TEXT = 'Remove item';
                var removeButton = Object.assign(document.createElement('button'), (_d = {
                  type: 'button',
                  className: button
                }, _d[allowHTML ? 'innerHTML' : 'innerText'] = REMOVE_ITEM_TEXT, _d));
                removeButton.setAttribute('aria-label', "".concat(REMOVE_ITEM_TEXT, ": '").concat(value, "'"));
                removeButton.dataset.button = '';
                div.appendChild(removeButton);
              }

              return div;
            },
            choiceList: function choiceList(_a, isSelectOneElement) {
              var list = _a.classNames.list;
              var div = Object.assign(document.createElement('div'), {
                className: list
              });

              if (!isSelectOneElement) {
                div.setAttribute('aria-multiselectable', 'true');
              }

              div.setAttribute('role', 'listbox');
              return div;
            },
            choiceGroup: function choiceGroup(_a, _b) {
              var _c;

              var allowHTML = _a.allowHTML,
                  _d = _a.classNames,
                  group = _d.group,
                  groupHeading = _d.groupHeading,
                  itemDisabled = _d.itemDisabled;
              var id = _b.id,
                  value = _b.value,
                  disabled = _b.disabled;
              var div = Object.assign(document.createElement('div'), {
                className: "".concat(group, " ").concat(disabled ? itemDisabled : '')
              });
              div.setAttribute('role', 'group');
              Object.assign(div.dataset, {
                group: '',
                id: id,
                value: value
              });

              if (disabled) {
                div.setAttribute('aria-disabled', 'true');
              }

              div.appendChild(Object.assign(document.createElement('div'), (_c = {
                className: groupHeading
              }, _c[allowHTML ? 'innerHTML' : 'innerText'] = value, _c)));
              return div;
            },
            choice: function choice(_a, _b, selectText) {
              var _c;

              var allowHTML = _a.allowHTML,
                  _d = _a.classNames,
                  item = _d.item,
                  itemChoice = _d.itemChoice,
                  itemSelectable = _d.itemSelectable,
                  selectedState = _d.selectedState,
                  itemDisabled = _d.itemDisabled,
                  placeholder = _d.placeholder;
              var id = _b.id,
                  value = _b.value,
                  label = _b.label,
                  groupId = _b.groupId,
                  elementId = _b.elementId,
                  isDisabled = _b.disabled,
                  isSelected = _b.selected,
                  isPlaceholder = _b.placeholder;
              var div = Object.assign(document.createElement('div'), (_c = {
                id: elementId
              }, _c[allowHTML ? 'innerHTML' : 'innerText'] = label, _c.className = "".concat(item, " ").concat(itemChoice), _c));

              if (isSelected) {
                div.classList.add(selectedState);
              }

              if (isPlaceholder) {
                div.classList.add(placeholder);
              }

              div.setAttribute('role', groupId && groupId > 0 ? 'treeitem' : 'option');
              Object.assign(div.dataset, {
                choice: '',
                id: id,
                value: value,
                selectText: selectText
              });

              if (isDisabled) {
                div.classList.add(itemDisabled);
                div.dataset.choiceDisabled = '';
                div.setAttribute('aria-disabled', 'true');
              } else {
                div.classList.add(itemSelectable);
                div.dataset.choiceSelectable = '';
              }

              return div;
            },
            input: function input(_a, placeholderValue) {
              var _b = _a.classNames,
                  input = _b.input,
                  inputCloned = _b.inputCloned;
              var inp = Object.assign(document.createElement('input'), {
                type: 'search',
                name: 'search_terms',
                className: "".concat(input, " ").concat(inputCloned),
                autocomplete: 'off',
                autocapitalize: 'off',
                spellcheck: false
              });
              inp.setAttribute('role', 'textbox');
              inp.setAttribute('aria-autocomplete', 'list');
              inp.setAttribute('aria-label', placeholderValue);
              return inp;
            },
            dropdown: function dropdown(_a) {
              var _b = _a.classNames,
                  list = _b.list,
                  listDropdown = _b.listDropdown;
              var div = document.createElement('div');
              div.classList.add(list, listDropdown);
              div.setAttribute('aria-expanded', 'false');
              return div;
            },
            notice: function notice(_a, innerText, type) {
              var _b;

              var allowHTML = _a.allowHTML,
                  _c = _a.classNames,
                  item = _c.item,
                  itemChoice = _c.itemChoice,
                  noResults = _c.noResults,
                  noChoices = _c.noChoices;

              if (type === void 0) {
                type = '';
              }

              var classes = [item, itemChoice];

              if (type === 'no-choices') {
                classes.push(noChoices);
              } else if (type === 'no-results') {
                classes.push(noResults);
              }

              return Object.assign(document.createElement('div'), (_b = {}, _b[allowHTML ? 'innerHTML' : 'innerText'] = innerText, _b.className = classes.join(' '), _b));
            },
            option: function option(_a) {
              var label = _a.label,
                  value = _a.value,
                  customProperties = _a.customProperties,
                  active = _a.active,
                  disabled = _a.disabled;
              var opt = new Option(label, value, false, active);

              if (customProperties) {
                opt.dataset.customProperties = "".concat(customProperties);
              }

              opt.disabled = !!disabled;
              return opt;
            }
          };
          exports["default"] = templates;
          /***/
        },

        /***/
        996:
        /***/
        function _(module) {
          var isMergeableObject = function isMergeableObject(value) {
            return isNonNullObject(value) && !isSpecial(value);
          };

          function isNonNullObject(value) {
            return !!value && _typeof(value) === 'object';
          }

          function isSpecial(value) {
            var stringValue = Object.prototype.toString.call(value);
            return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
          } // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


          var canUseSymbol = typeof Symbol === 'function' && Symbol["for"];
          var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol["for"]('react.element') : 0xeac7;

          function isReactElement(value) {
            return value.$$typeof === REACT_ELEMENT_TYPE;
          }

          function emptyTarget(val) {
            return Array.isArray(val) ? [] : {};
          }

          function cloneUnlessOtherwiseSpecified(value, options) {
            return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
          }

          function defaultArrayMerge(target, source, options) {
            return target.concat(source).map(function (element) {
              return cloneUnlessOtherwiseSpecified(element, options);
            });
          }

          function getMergeFunction(key, options) {
            if (!options.customMerge) {
              return deepmerge;
            }

            var customMerge = options.customMerge(key);
            return typeof customMerge === 'function' ? customMerge : deepmerge;
          }

          function getEnumerableOwnPropertySymbols(target) {
            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
              return target.propertyIsEnumerable(symbol);
            }) : [];
          }

          function getKeys(target) {
            return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
          }

          function propertyIsOnObject(object, property) {
            try {
              return property in object;
            } catch (_) {
              return false;
            }
          } // Protects from prototype poisoning and unexpected merging up the prototype chain.


          function propertyIsUnsafe(target, key) {
            return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
            && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
            && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
          }

          function mergeObject(target, source, options) {
            var destination = {};

            if (options.isMergeableObject(target)) {
              getKeys(target).forEach(function (key) {
                destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
              });
            }

            getKeys(source).forEach(function (key) {
              if (propertyIsUnsafe(target, key)) {
                return;
              }

              if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
                destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
              } else {
                destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
              }
            });
            return destination;
          }

          function deepmerge(target, source, options) {
            options = options || {};
            options.arrayMerge = options.arrayMerge || defaultArrayMerge;
            options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
            // implementations can use it. The caller may not replace it.

            options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
            var sourceIsArray = Array.isArray(source);
            var targetIsArray = Array.isArray(target);
            var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

            if (!sourceAndTargetTypesMatch) {
              return cloneUnlessOtherwiseSpecified(source, options);
            } else if (sourceIsArray) {
              return options.arrayMerge(target, source, options);
            } else {
              return mergeObject(target, source, options);
            }
          }

          deepmerge.all = function deepmergeAll(array, options) {
            if (!Array.isArray(array)) {
              throw new Error('first argument should be an array');
            }

            return array.reduce(function (prev, next) {
              return deepmerge(prev, next, options);
            }, {});
          };

          var deepmerge_1 = deepmerge;
          module.exports = deepmerge_1;
          /***/
        },

        /***/
        221:
        /***/
        function _(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_183107__) {
          __nested_webpack_require_183107__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_183107__.d(__webpack_exports__, {
            /* harmony export */
            "default": function _default() {
              return (
                /* binding */
                Fuse
              );
            }
            /* harmony export */

          });
          /**
           * Fuse.js v6.5.3 - Lightweight fuzzy-search (http://fusejs.io)
           *
           * Copyright (c) 2021 Kiro Risk (http://kiro.me)
           * All Rights Reserved. Apache Software License 2.0
           *
           * http://www.apache.org/licenses/LICENSE-2.0
           */


          function isArray(value) {
            return !Array.isArray ? getTag(value) === '[object Array]' : Array.isArray(value);
          } // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js


          var INFINITY = 1 / 0;

          function baseToString(value) {
            // Exit early for strings to avoid a performance hit in some environments.
            if (typeof value == 'string') {
              return value;
            }

            var result = value + '';
            return result == '0' && 1 / value == -INFINITY ? '-0' : result;
          }

          function toString(value) {
            return value == null ? '' : baseToString(value);
          }

          function isString(value) {
            return typeof value === 'string';
          }

          function isNumber(value) {
            return typeof value === 'number';
          } // Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js


          function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && getTag(value) == '[object Boolean]';
          }

          function isObject(value) {
            return _typeof(value) === 'object';
          } // Checks if `value` is object-like.


          function isObjectLike(value) {
            return isObject(value) && value !== null;
          }

          function isDefined(value) {
            return value !== undefined && value !== null;
          }

          function isBlank(value) {
            return !value.trim().length;
          } // Gets the `toStringTag` of `value`.
          // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js


          function getTag(value) {
            return value == null ? value === undefined ? '[object Undefined]' : '[object Null]' : Object.prototype.toString.call(value);
          }

          var EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';
          var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

          var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = function LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key) {
            return "Invalid value for key ".concat(key);
          };

          var PATTERN_LENGTH_TOO_LARGE = function PATTERN_LENGTH_TOO_LARGE(max) {
            return "Pattern length exceeds max of ".concat(max, ".");
          };

          var MISSING_KEY_PROPERTY = function MISSING_KEY_PROPERTY(name) {
            return "Missing ".concat(name, " property in key");
          };

          var INVALID_KEY_WEIGHT_VALUE = function INVALID_KEY_WEIGHT_VALUE(key) {
            return "Property 'weight' in key '".concat(key, "' must be a positive integer");
          };

          var hasOwn = Object.prototype.hasOwnProperty;

          var KeyStore = /*#__PURE__*/function () {
            function KeyStore(keys) {
              var _this2 = this;

              _classCallCheck(this, KeyStore);

              this._keys = [];
              this._keyMap = {};
              var totalWeight = 0;
              keys.forEach(function (key) {
                var obj = createKey(key);
                totalWeight += obj.weight;

                _this2._keys.push(obj);

                _this2._keyMap[obj.id] = obj;
                totalWeight += obj.weight;
              }); // Normalize weights so that their sum is equal to 1

              this._keys.forEach(function (key) {
                key.weight /= totalWeight;
              });
            }

            _createClass(KeyStore, [{
              key: "get",
              value: function get(keyId) {
                return this._keyMap[keyId];
              }
            }, {
              key: "keys",
              value: function keys() {
                return this._keys;
              }
            }, {
              key: "toJSON",
              value: function toJSON() {
                return JSON.stringify(this._keys);
              }
            }]);

            return KeyStore;
          }();

          function createKey(key) {
            var path = null;
            var id = null;
            var src = null;
            var weight = 1;

            if (isString(key) || isArray(key)) {
              src = key;
              path = createKeyPath(key);
              id = createKeyId(key);
            } else {
              if (!hasOwn.call(key, 'name')) {
                throw new Error(MISSING_KEY_PROPERTY('name'));
              }

              var name = key.name;
              src = name;

              if (hasOwn.call(key, 'weight')) {
                weight = key.weight;

                if (weight <= 0) {
                  throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
                }
              }

              path = createKeyPath(name);
              id = createKeyId(name);
            }

            return {
              path: path,
              id: id,
              weight: weight,
              src: src
            };
          }

          function createKeyPath(key) {
            return isArray(key) ? key : key.split('.');
          }

          function createKeyId(key) {
            return isArray(key) ? key.join('.') : key;
          }

          function get(obj, path) {
            var list = [];
            var arr = false;

            var deepGet = function deepGet(obj, path, index) {
              if (!isDefined(obj)) {
                return;
              }

              if (!path[index]) {
                // If there's no path left, we've arrived at the object we care about.
                list.push(obj);
              } else {
                var key = path[index];
                var value = obj[key];

                if (!isDefined(value)) {
                  return;
                } // If we're at the last value in the path, and if it's a string/number/bool,
                // add it to the list


                if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
                  list.push(toString(value));
                } else if (isArray(value)) {
                  arr = true; // Search each item in the array.

                  for (var i = 0, len = value.length; i < len; i += 1) {
                    deepGet(value[i], path, index + 1);
                  }
                } else if (path.length) {
                  // An object. Recurse further.
                  deepGet(value, path, index + 1);
                }
              }
            }; // Backwards compatibility (since path used to be a string)


            deepGet(obj, isString(path) ? path.split('.') : path, 0);
            return arr ? list : list[0];
          }

          var MatchOptions = {
            // Whether the matches should be included in the result set. When `true`, each record in the result
            // set will include the indices of the matched characters.
            // These can consequently be used for highlighting purposes.
            includeMatches: false,
            // When `true`, the matching function will continue to the end of a search pattern even if
            // a perfect match has already been located in the string.
            findAllMatches: false,
            // Minimum number of characters that must be matched before a result is considered a match
            minMatchCharLength: 1
          };
          var BasicOptions = {
            // When `true`, the algorithm continues searching to the end of the input even if a perfect
            // match is found before the end of the same input.
            isCaseSensitive: false,
            // When true, the matching function will continue to the end of a search pattern even if
            includeScore: false,
            // List of properties that will be searched. This also supports nested properties.
            keys: [],
            // Whether to sort the result list, by score
            shouldSort: true,
            // Default sort function: sort by ascending score, ascending index
            sortFn: function sortFn(a, b) {
              return a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1;
            }
          };
          var FuzzyOptions = {
            // Approximately where in the text is the pattern expected to be found?
            location: 0,
            // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
            // (of both letters and location), a threshold of '1.0' would match anything.
            threshold: 0.6,
            // Determines how close the match must be to the fuzzy location (specified above).
            // An exact letter match which is 'distance' characters away from the fuzzy location
            // would score as a complete mismatch. A distance of '0' requires the match be at
            // the exact location specified, a threshold of '1000' would require a perfect match
            // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
            distance: 100
          };
          var AdvancedOptions = {
            // When `true`, it enables the use of unix-like search commands
            useExtendedSearch: false,
            // The get function to use when fetching an object's properties.
            // The default will search nested paths *ie foo.bar.baz*
            getFn: get,
            // When `true`, search will ignore `location` and `distance`, so it won't matter
            // where in the string the pattern appears.
            // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
            ignoreLocation: false,
            // When `true`, the calculation for the relevance score (used for sorting) will
            // ignore the field-length norm.
            // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
            ignoreFieldNorm: false,
            // The weight to determine how much field length norm effects scoring.
            fieldNormWeight: 1
          };

          var Config = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);

          var SPACE = /[^ ]+/g; // Field-length norm: the shorter the field, the higher the weight.
          // Set to 3 decimals to reduce index size.

          function norm() {
            var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var mantissa = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
            var cache = new Map();
            var m = Math.pow(10, mantissa);
            return {
              get: function get(value) {
                var numTokens = value.match(SPACE).length;

                if (cache.has(numTokens)) {
                  return cache.get(numTokens);
                } // Default function is 1/sqrt(x), weight makes that variable


                var norm = 1 / Math.pow(numTokens, 0.5 * weight); // In place of `toFixed(mantissa)`, for faster computation

                var n = parseFloat(Math.round(norm * m) / m);
                cache.set(numTokens, n);
                return n;
              },
              clear: function clear() {
                cache.clear();
              }
            };
          }

          var FuseIndex = /*#__PURE__*/function () {
            function FuseIndex() {
              var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                  _ref3$getFn = _ref3.getFn,
                  getFn = _ref3$getFn === void 0 ? Config.getFn : _ref3$getFn,
                  _ref3$fieldNormWeight = _ref3.fieldNormWeight,
                  fieldNormWeight = _ref3$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref3$fieldNormWeight;

              _classCallCheck(this, FuseIndex);

              this.norm = norm(fieldNormWeight, 3);
              this.getFn = getFn;
              this.isCreated = false;
              this.setIndexRecords();
            }

            _createClass(FuseIndex, [{
              key: "setSources",
              value: function setSources() {
                var docs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                this.docs = docs;
              }
            }, {
              key: "setIndexRecords",
              value: function setIndexRecords() {
                var records = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                this.records = records;
              }
            }, {
              key: "setKeys",
              value: function setKeys() {
                var _this3 = this;

                var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                this.keys = keys;
                this._keysMap = {};
                keys.forEach(function (key, idx) {
                  _this3._keysMap[key.id] = idx;
                });
              }
            }, {
              key: "create",
              value: function create() {
                var _this4 = this;

                if (this.isCreated || !this.docs.length) {
                  return;
                }

                this.isCreated = true; // List is Array<String>

                if (isString(this.docs[0])) {
                  this.docs.forEach(function (doc, docIndex) {
                    _this4._addString(doc, docIndex);
                  });
                } else {
                  // List is Array<Object>
                  this.docs.forEach(function (doc, docIndex) {
                    _this4._addObject(doc, docIndex);
                  });
                }

                this.norm.clear();
              } // Adds a doc to the end of the index

            }, {
              key: "add",
              value: function add(doc) {
                var idx = this.size();

                if (isString(doc)) {
                  this._addString(doc, idx);
                } else {
                  this._addObject(doc, idx);
                }
              } // Removes the doc at the specified index of the index

            }, {
              key: "removeAt",
              value: function removeAt(idx) {
                this.records.splice(idx, 1); // Change ref index of every subsquent doc

                for (var i = idx, len = this.size(); i < len; i += 1) {
                  this.records[i].i -= 1;
                }
              }
            }, {
              key: "getValueForItemAtKeyId",
              value: function getValueForItemAtKeyId(item, keyId) {
                return item[this._keysMap[keyId]];
              }
            }, {
              key: "size",
              value: function size() {
                return this.records.length;
              }
            }, {
              key: "_addString",
              value: function _addString(doc, docIndex) {
                if (!isDefined(doc) || isBlank(doc)) {
                  return;
                }

                var record = {
                  v: doc,
                  i: docIndex,
                  n: this.norm.get(doc)
                };
                this.records.push(record);
              }
            }, {
              key: "_addObject",
              value: function _addObject(doc, docIndex) {
                var _this5 = this;

                var record = {
                  i: docIndex,
                  $: {}
                }; // Iterate over every key (i.e, path), and fetch the value at that key

                this.keys.forEach(function (key, keyIndex) {
                  // console.log(key)
                  var value = _this5.getFn(doc, key.path);

                  if (!isDefined(value)) {
                    return;
                  }

                  if (isArray(value)) {
                    (function () {
                      var subRecords = [];
                      var stack = [{
                        nestedArrIndex: -1,
                        value: value
                      }];

                      while (stack.length) {
                        var _stack$pop = stack.pop(),
                            nestedArrIndex = _stack$pop.nestedArrIndex,
                            _value = _stack$pop.value;

                        if (!isDefined(_value)) {
                          continue;
                        }

                        if (isString(_value) && !isBlank(_value)) {
                          var subRecord = {
                            v: _value,
                            i: nestedArrIndex,
                            n: _this5.norm.get(_value)
                          };
                          subRecords.push(subRecord);
                        } else if (isArray(_value)) {
                          _value.forEach(function (item, k) {
                            stack.push({
                              nestedArrIndex: k,
                              value: item
                            });
                          });
                        } else ;
                      }

                      record.$[keyIndex] = subRecords;
                    })();
                  } else if (!isBlank(value)) {
                    var subRecord = {
                      v: value,
                      n: _this5.norm.get(value)
                    };
                    record.$[keyIndex] = subRecord;
                  }
                });
                this.records.push(record);
              }
            }, {
              key: "toJSON",
              value: function toJSON() {
                return {
                  keys: this.keys,
                  records: this.records
                };
              }
            }]);

            return FuseIndex;
          }();

          function createIndex(keys, docs) {
            var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                _ref4$getFn = _ref4.getFn,
                getFn = _ref4$getFn === void 0 ? Config.getFn : _ref4$getFn,
                _ref4$fieldNormWeight = _ref4.fieldNormWeight,
                fieldNormWeight = _ref4$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref4$fieldNormWeight;

            var myIndex = new FuseIndex({
              getFn: getFn,
              fieldNormWeight: fieldNormWeight
            });
            myIndex.setKeys(keys.map(createKey));
            myIndex.setSources(docs);
            myIndex.create();
            return myIndex;
          }

          function parseIndex(data) {
            var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref5$getFn = _ref5.getFn,
                getFn = _ref5$getFn === void 0 ? Config.getFn : _ref5$getFn,
                _ref5$fieldNormWeight = _ref5.fieldNormWeight,
                fieldNormWeight = _ref5$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref5$fieldNormWeight;

            var keys = data.keys,
                records = data.records;
            var myIndex = new FuseIndex({
              getFn: getFn,
              fieldNormWeight: fieldNormWeight
            });
            myIndex.setKeys(keys);
            myIndex.setIndexRecords(records);
            return myIndex;
          }

          function computeScore$1(pattern) {
            var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref6$errors = _ref6.errors,
                errors = _ref6$errors === void 0 ? 0 : _ref6$errors,
                _ref6$currentLocation = _ref6.currentLocation,
                currentLocation = _ref6$currentLocation === void 0 ? 0 : _ref6$currentLocation,
                _ref6$expectedLocatio = _ref6.expectedLocation,
                expectedLocation = _ref6$expectedLocatio === void 0 ? 0 : _ref6$expectedLocatio,
                _ref6$distance = _ref6.distance,
                distance = _ref6$distance === void 0 ? Config.distance : _ref6$distance,
                _ref6$ignoreLocation = _ref6.ignoreLocation,
                ignoreLocation = _ref6$ignoreLocation === void 0 ? Config.ignoreLocation : _ref6$ignoreLocation;

            var accuracy = errors / pattern.length;

            if (ignoreLocation) {
              return accuracy;
            }

            var proximity = Math.abs(expectedLocation - currentLocation);

            if (!distance) {
              // Dodge divide by zero error.
              return proximity ? 1.0 : accuracy;
            }

            return accuracy + proximity / distance;
          }

          function convertMaskToIndices() {
            var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Config.minMatchCharLength;
            var indices = [];
            var start = -1;
            var end = -1;
            var i = 0;

            for (var len = matchmask.length; i < len; i += 1) {
              var match = matchmask[i];

              if (match && start === -1) {
                start = i;
              } else if (!match && start !== -1) {
                end = i - 1;

                if (end - start + 1 >= minMatchCharLength) {
                  indices.push([start, end]);
                }

                start = -1;
              }
            } // (i-1 - start) + 1 => i - start


            if (matchmask[i - 1] && i - start >= minMatchCharLength) {
              indices.push([start, i - 1]);
            }

            return indices;
          } // Machine word size


          var MAX_BITS = 32;

          function search(text, pattern, patternAlphabet) {
            var _ref7 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
                _ref7$location = _ref7.location,
                location = _ref7$location === void 0 ? Config.location : _ref7$location,
                _ref7$distance = _ref7.distance,
                distance = _ref7$distance === void 0 ? Config.distance : _ref7$distance,
                _ref7$threshold = _ref7.threshold,
                threshold = _ref7$threshold === void 0 ? Config.threshold : _ref7$threshold,
                _ref7$findAllMatches = _ref7.findAllMatches,
                findAllMatches = _ref7$findAllMatches === void 0 ? Config.findAllMatches : _ref7$findAllMatches,
                _ref7$minMatchCharLen = _ref7.minMatchCharLength,
                minMatchCharLength = _ref7$minMatchCharLen === void 0 ? Config.minMatchCharLength : _ref7$minMatchCharLen,
                _ref7$includeMatches = _ref7.includeMatches,
                includeMatches = _ref7$includeMatches === void 0 ? Config.includeMatches : _ref7$includeMatches,
                _ref7$ignoreLocation = _ref7.ignoreLocation,
                ignoreLocation = _ref7$ignoreLocation === void 0 ? Config.ignoreLocation : _ref7$ignoreLocation;

            if (pattern.length > MAX_BITS) {
              throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
            }

            var patternLen = pattern.length; // Set starting location at beginning text and initialize the alphabet.

            var textLen = text.length; // Handle the case when location > text.length

            var expectedLocation = Math.max(0, Math.min(location, textLen)); // Highest score beyond which we give up.

            var currentThreshold = threshold; // Is there a nearby exact match? (speedup)

            var bestLocation = expectedLocation; // Performance: only computer matches when the minMatchCharLength > 1
            // OR if `includeMatches` is true.

            var computeMatches = minMatchCharLength > 1 || includeMatches; // A mask of the matches, used for building the indices

            var matchMask = computeMatches ? Array(textLen) : [];
            var index; // Get all exact matches, here for speed up

            while ((index = text.indexOf(pattern, bestLocation)) > -1) {
              var score = computeScore$1(pattern, {
                currentLocation: index,
                expectedLocation: expectedLocation,
                distance: distance,
                ignoreLocation: ignoreLocation
              });
              currentThreshold = Math.min(score, currentThreshold);
              bestLocation = index + patternLen;

              if (computeMatches) {
                var i = 0;

                while (i < patternLen) {
                  matchMask[index + i] = 1;
                  i += 1;
                }
              }
            } // Reset the best location


            bestLocation = -1;
            var lastBitArr = [];
            var finalScore = 1;
            var binMax = patternLen + textLen;
            var mask = 1 << patternLen - 1;

            for (var _i2 = 0; _i2 < patternLen; _i2 += 1) {
              // Scan for the best match; each iteration allows for one more error.
              // Run a binary search to determine how far from the match location we can stray
              // at this error level.
              var binMin = 0;
              var binMid = binMax;

              while (binMin < binMid) {
                var _score2 = computeScore$1(pattern, {
                  errors: _i2,
                  currentLocation: expectedLocation + binMid,
                  expectedLocation: expectedLocation,
                  distance: distance,
                  ignoreLocation: ignoreLocation
                });

                if (_score2 <= currentThreshold) {
                  binMin = binMid;
                } else {
                  binMax = binMid;
                }

                binMid = Math.floor((binMax - binMin) / 2 + binMin);
              } // Use the result from this iteration as the maximum for the next.


              binMax = binMid;
              var start = Math.max(1, expectedLocation - binMid + 1);
              var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen; // Initialize the bit array

              var bitArr = Array(finish + 2);
              bitArr[finish + 1] = (1 << _i2) - 1;

              for (var j = finish; j >= start; j -= 1) {
                var currentLocation = j - 1;
                var charMatch = patternAlphabet[text.charAt(currentLocation)];

                if (computeMatches) {
                  // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
                  matchMask[currentLocation] = +!!charMatch;
                } // First pass: exact match


                bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch; // Subsequent passes: fuzzy match

                if (_i2) {
                  bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
                }

                if (bitArr[j] & mask) {
                  finalScore = computeScore$1(pattern, {
                    errors: _i2,
                    currentLocation: currentLocation,
                    expectedLocation: expectedLocation,
                    distance: distance,
                    ignoreLocation: ignoreLocation
                  }); // This match will almost certainly be better than any existing match.
                  // But check anyway.

                  if (finalScore <= currentThreshold) {
                    // Indeed it is
                    currentThreshold = finalScore;
                    bestLocation = currentLocation; // Already passed `loc`, downhill from here on in.

                    if (bestLocation <= expectedLocation) {
                      break;
                    } // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.


                    start = Math.max(1, 2 * expectedLocation - bestLocation);
                  }
                }
              } // No hope for a (better) match at greater error levels.


              var _score = computeScore$1(pattern, {
                errors: _i2 + 1,
                currentLocation: expectedLocation,
                expectedLocation: expectedLocation,
                distance: distance,
                ignoreLocation: ignoreLocation
              });

              if (_score > currentThreshold) {
                break;
              }

              lastBitArr = bitArr;
            }

            var result = {
              isMatch: bestLocation >= 0,
              // Count exact matches (those with a score of 0) to be "almost" exact
              score: Math.max(0.001, finalScore)
            };

            if (computeMatches) {
              var indices = convertMaskToIndices(matchMask, minMatchCharLength);

              if (!indices.length) {
                result.isMatch = false;
              } else if (includeMatches) {
                result.indices = indices;
              }
            }

            return result;
          }

          function createPatternAlphabet(pattern) {
            var mask = {};

            for (var i = 0, len = pattern.length; i < len; i += 1) {
              var _char = pattern.charAt(i);

              mask[_char] = (mask[_char] || 0) | 1 << len - i - 1;
            }

            return mask;
          }

          var BitapSearch = /*#__PURE__*/function () {
            function BitapSearch(pattern) {
              var _this6 = this;

              var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                  _ref8$location = _ref8.location,
                  location = _ref8$location === void 0 ? Config.location : _ref8$location,
                  _ref8$threshold = _ref8.threshold,
                  threshold = _ref8$threshold === void 0 ? Config.threshold : _ref8$threshold,
                  _ref8$distance = _ref8.distance,
                  distance = _ref8$distance === void 0 ? Config.distance : _ref8$distance,
                  _ref8$includeMatches = _ref8.includeMatches,
                  includeMatches = _ref8$includeMatches === void 0 ? Config.includeMatches : _ref8$includeMatches,
                  _ref8$findAllMatches = _ref8.findAllMatches,
                  findAllMatches = _ref8$findAllMatches === void 0 ? Config.findAllMatches : _ref8$findAllMatches,
                  _ref8$minMatchCharLen = _ref8.minMatchCharLength,
                  minMatchCharLength = _ref8$minMatchCharLen === void 0 ? Config.minMatchCharLength : _ref8$minMatchCharLen,
                  _ref8$isCaseSensitive = _ref8.isCaseSensitive,
                  isCaseSensitive = _ref8$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref8$isCaseSensitive,
                  _ref8$ignoreLocation = _ref8.ignoreLocation,
                  ignoreLocation = _ref8$ignoreLocation === void 0 ? Config.ignoreLocation : _ref8$ignoreLocation;

              _classCallCheck(this, BitapSearch);

              this.options = {
                location: location,
                threshold: threshold,
                distance: distance,
                includeMatches: includeMatches,
                findAllMatches: findAllMatches,
                minMatchCharLength: minMatchCharLength,
                isCaseSensitive: isCaseSensitive,
                ignoreLocation: ignoreLocation
              };
              this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
              this.chunks = [];

              if (!this.pattern.length) {
                return;
              }

              var addChunk = function addChunk(pattern, startIndex) {
                _this6.chunks.push({
                  pattern: pattern,
                  alphabet: createPatternAlphabet(pattern),
                  startIndex: startIndex
                });
              };

              var len = this.pattern.length;

              if (len > MAX_BITS) {
                var i = 0;
                var remainder = len % MAX_BITS;
                var end = len - remainder;

                while (i < end) {
                  addChunk(this.pattern.substr(i, MAX_BITS), i);
                  i += MAX_BITS;
                }

                if (remainder) {
                  var startIndex = len - MAX_BITS;
                  addChunk(this.pattern.substr(startIndex), startIndex);
                }
              } else {
                addChunk(this.pattern, 0);
              }
            }

            _createClass(BitapSearch, [{
              key: "searchIn",
              value: function searchIn(text) {
                var _this$options = this.options,
                    isCaseSensitive = _this$options.isCaseSensitive,
                    includeMatches = _this$options.includeMatches;

                if (!isCaseSensitive) {
                  text = text.toLowerCase();
                } // Exact match


                if (this.pattern === text) {
                  var _result = {
                    isMatch: true,
                    score: 0
                  };

                  if (includeMatches) {
                    _result.indices = [[0, text.length - 1]];
                  }

                  return _result;
                } // Otherwise, use Bitap algorithm


                var _this$options2 = this.options,
                    location = _this$options2.location,
                    distance = _this$options2.distance,
                    threshold = _this$options2.threshold,
                    findAllMatches = _this$options2.findAllMatches,
                    minMatchCharLength = _this$options2.minMatchCharLength,
                    ignoreLocation = _this$options2.ignoreLocation;
                var allIndices = [];
                var totalScore = 0;
                var hasMatches = false;
                this.chunks.forEach(function (_ref9) {
                  var pattern = _ref9.pattern,
                      alphabet = _ref9.alphabet,
                      startIndex = _ref9.startIndex;

                  var _search = search(text, pattern, alphabet, {
                    location: location + startIndex,
                    distance: distance,
                    threshold: threshold,
                    findAllMatches: findAllMatches,
                    minMatchCharLength: minMatchCharLength,
                    includeMatches: includeMatches,
                    ignoreLocation: ignoreLocation
                  }),
                      isMatch = _search.isMatch,
                      score = _search.score,
                      indices = _search.indices;

                  if (isMatch) {
                    hasMatches = true;
                  }

                  totalScore += score;

                  if (isMatch && indices) {
                    allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
                  }
                });
                var result = {
                  isMatch: hasMatches,
                  score: hasMatches ? totalScore / this.chunks.length : 1
                };

                if (hasMatches && includeMatches) {
                  result.indices = allIndices;
                }

                return result;
              }
            }]);

            return BitapSearch;
          }();

          var BaseMatch = /*#__PURE__*/function () {
            function BaseMatch(pattern) {
              _classCallCheck(this, BaseMatch);

              this.pattern = pattern;
            }

            _createClass(BaseMatch, [{
              key: "search",
              value: function
                /*text*/
              search() {}
            }], [{
              key: "isMultiMatch",
              value: function isMultiMatch(pattern) {
                return getMatch(pattern, this.multiRegex);
              }
            }, {
              key: "isSingleMatch",
              value: function isSingleMatch(pattern) {
                return getMatch(pattern, this.singleRegex);
              }
            }]);

            return BaseMatch;
          }();

          function getMatch(pattern, exp) {
            var matches = pattern.match(exp);
            return matches ? matches[1] : null;
          } // Token: 'file


          var ExactMatch = /*#__PURE__*/function (_BaseMatch) {
            _inherits(ExactMatch, _BaseMatch);

            var _super2 = _createSuper(ExactMatch);

            function ExactMatch(pattern) {
              _classCallCheck(this, ExactMatch);

              return _super2.call(this, pattern);
            }

            _createClass(ExactMatch, [{
              key: "search",
              value: function search(text) {
                var isMatch = text === this.pattern;
                return {
                  isMatch: isMatch,
                  score: isMatch ? 0 : 1,
                  indices: [0, this.pattern.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return 'exact';
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^="(.*)"$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^=(.*)$/;
              }
            }]);

            return ExactMatch;
          }(BaseMatch); // Token: !fire


          var InverseExactMatch = /*#__PURE__*/function (_BaseMatch2) {
            _inherits(InverseExactMatch, _BaseMatch2);

            var _super3 = _createSuper(InverseExactMatch);

            function InverseExactMatch(pattern) {
              _classCallCheck(this, InverseExactMatch);

              return _super3.call(this, pattern);
            }

            _createClass(InverseExactMatch, [{
              key: "search",
              value: function search(text) {
                var index = text.indexOf(this.pattern);
                var isMatch = index === -1;
                return {
                  isMatch: isMatch,
                  score: isMatch ? 0 : 1,
                  indices: [0, text.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return 'inverse-exact';
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^!"(.*)"$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^!(.*)$/;
              }
            }]);

            return InverseExactMatch;
          }(BaseMatch); // Token: ^file


          var PrefixExactMatch = /*#__PURE__*/function (_BaseMatch3) {
            _inherits(PrefixExactMatch, _BaseMatch3);

            var _super4 = _createSuper(PrefixExactMatch);

            function PrefixExactMatch(pattern) {
              _classCallCheck(this, PrefixExactMatch);

              return _super4.call(this, pattern);
            }

            _createClass(PrefixExactMatch, [{
              key: "search",
              value: function search(text) {
                var isMatch = text.startsWith(this.pattern);
                return {
                  isMatch: isMatch,
                  score: isMatch ? 0 : 1,
                  indices: [0, this.pattern.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return 'prefix-exact';
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^\^"(.*)"$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^\^(.*)$/;
              }
            }]);

            return PrefixExactMatch;
          }(BaseMatch); // Token: !^fire


          var InversePrefixExactMatch = /*#__PURE__*/function (_BaseMatch4) {
            _inherits(InversePrefixExactMatch, _BaseMatch4);

            var _super5 = _createSuper(InversePrefixExactMatch);

            function InversePrefixExactMatch(pattern) {
              _classCallCheck(this, InversePrefixExactMatch);

              return _super5.call(this, pattern);
            }

            _createClass(InversePrefixExactMatch, [{
              key: "search",
              value: function search(text) {
                var isMatch = !text.startsWith(this.pattern);
                return {
                  isMatch: isMatch,
                  score: isMatch ? 0 : 1,
                  indices: [0, text.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return 'inverse-prefix-exact';
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^!\^"(.*)"$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^!\^(.*)$/;
              }
            }]);

            return InversePrefixExactMatch;
          }(BaseMatch); // Token: .file$


          var SuffixExactMatch = /*#__PURE__*/function (_BaseMatch5) {
            _inherits(SuffixExactMatch, _BaseMatch5);

            var _super6 = _createSuper(SuffixExactMatch);

            function SuffixExactMatch(pattern) {
              _classCallCheck(this, SuffixExactMatch);

              return _super6.call(this, pattern);
            }

            _createClass(SuffixExactMatch, [{
              key: "search",
              value: function search(text) {
                var isMatch = text.endsWith(this.pattern);
                return {
                  isMatch: isMatch,
                  score: isMatch ? 0 : 1,
                  indices: [text.length - this.pattern.length, text.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return 'suffix-exact';
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^"(.*)"\$$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^(.*)\$$/;
              }
            }]);

            return SuffixExactMatch;
          }(BaseMatch); // Token: !.file$


          var InverseSuffixExactMatch = /*#__PURE__*/function (_BaseMatch6) {
            _inherits(InverseSuffixExactMatch, _BaseMatch6);

            var _super7 = _createSuper(InverseSuffixExactMatch);

            function InverseSuffixExactMatch(pattern) {
              _classCallCheck(this, InverseSuffixExactMatch);

              return _super7.call(this, pattern);
            }

            _createClass(InverseSuffixExactMatch, [{
              key: "search",
              value: function search(text) {
                var isMatch = !text.endsWith(this.pattern);
                return {
                  isMatch: isMatch,
                  score: isMatch ? 0 : 1,
                  indices: [0, text.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return 'inverse-suffix-exact';
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^!"(.*)"\$$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^!(.*)\$$/;
              }
            }]);

            return InverseSuffixExactMatch;
          }(BaseMatch);

          var FuzzyMatch = /*#__PURE__*/function (_BaseMatch7) {
            _inherits(FuzzyMatch, _BaseMatch7);

            var _super8 = _createSuper(FuzzyMatch);

            function FuzzyMatch(pattern) {
              var _this7;

              var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                  _ref10$location = _ref10.location,
                  location = _ref10$location === void 0 ? Config.location : _ref10$location,
                  _ref10$threshold = _ref10.threshold,
                  threshold = _ref10$threshold === void 0 ? Config.threshold : _ref10$threshold,
                  _ref10$distance = _ref10.distance,
                  distance = _ref10$distance === void 0 ? Config.distance : _ref10$distance,
                  _ref10$includeMatches = _ref10.includeMatches,
                  includeMatches = _ref10$includeMatches === void 0 ? Config.includeMatches : _ref10$includeMatches,
                  _ref10$findAllMatches = _ref10.findAllMatches,
                  findAllMatches = _ref10$findAllMatches === void 0 ? Config.findAllMatches : _ref10$findAllMatches,
                  _ref10$minMatchCharLe = _ref10.minMatchCharLength,
                  minMatchCharLength = _ref10$minMatchCharLe === void 0 ? Config.minMatchCharLength : _ref10$minMatchCharLe,
                  _ref10$isCaseSensitiv = _ref10.isCaseSensitive,
                  isCaseSensitive = _ref10$isCaseSensitiv === void 0 ? Config.isCaseSensitive : _ref10$isCaseSensitiv,
                  _ref10$ignoreLocation = _ref10.ignoreLocation,
                  ignoreLocation = _ref10$ignoreLocation === void 0 ? Config.ignoreLocation : _ref10$ignoreLocation;

              _classCallCheck(this, FuzzyMatch);

              _this7 = _super8.call(this, pattern);
              _this7._bitapSearch = new BitapSearch(pattern, {
                location: location,
                threshold: threshold,
                distance: distance,
                includeMatches: includeMatches,
                findAllMatches: findAllMatches,
                minMatchCharLength: minMatchCharLength,
                isCaseSensitive: isCaseSensitive,
                ignoreLocation: ignoreLocation
              });
              return _this7;
            }

            _createClass(FuzzyMatch, [{
              key: "search",
              value: function search(text) {
                return this._bitapSearch.searchIn(text);
              }
            }], [{
              key: "type",
              get: function get() {
                return 'fuzzy';
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^"(.*)"$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^(.*)$/;
              }
            }]);

            return FuzzyMatch;
          }(BaseMatch); // Token: 'file


          var IncludeMatch = /*#__PURE__*/function (_BaseMatch8) {
            _inherits(IncludeMatch, _BaseMatch8);

            var _super9 = _createSuper(IncludeMatch);

            function IncludeMatch(pattern) {
              _classCallCheck(this, IncludeMatch);

              return _super9.call(this, pattern);
            }

            _createClass(IncludeMatch, [{
              key: "search",
              value: function search(text) {
                var location = 0;
                var index;
                var indices = [];
                var patternLen = this.pattern.length; // Get all exact matches

                while ((index = text.indexOf(this.pattern, location)) > -1) {
                  location = index + patternLen;
                  indices.push([index, location - 1]);
                }

                var isMatch = !!indices.length;
                return {
                  isMatch: isMatch,
                  score: isMatch ? 0 : 1,
                  indices: indices
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return 'include';
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^'"(.*)"$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^'(.*)$/;
              }
            }]);

            return IncludeMatch;
          }(BaseMatch); // ❗Order is important. DO NOT CHANGE.


          var searchers = [ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch];
          var searchersLen = searchers.length; // Regex to split by spaces, but keep anything in quotes together

          var SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
          var OR_TOKEN = '|'; // Return a 2D array representation of the query, for simpler parsing.
          // Example:
          // "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]

          function parseQuery(pattern) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return pattern.split(OR_TOKEN).map(function (item) {
              var query = item.trim().split(SPACE_RE).filter(function (item) {
                return item && !!item.trim();
              });
              var results = [];

              for (var i = 0, len = query.length; i < len; i += 1) {
                var queryItem = query[i]; // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)

                var found = false;
                var idx = -1;

                while (!found && ++idx < searchersLen) {
                  var searcher = searchers[idx];
                  var token = searcher.isMultiMatch(queryItem);

                  if (token) {
                    results.push(new searcher(token, options));
                    found = true;
                  }
                }

                if (found) {
                  continue;
                } // 2. Handle single query matches (i.e, once that are *not* quoted)


                idx = -1;

                while (++idx < searchersLen) {
                  var _searcher = searchers[idx];

                  var _token = _searcher.isSingleMatch(queryItem);

                  if (_token) {
                    results.push(new _searcher(_token, options));
                    break;
                  }
                }
              }

              return results;
            });
          } // These extended matchers can return an array of matches, as opposed
          // to a singl match


          var MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);
          /**
           * Command-like searching
           * ======================
           *
           * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
           * search in a given text.
           *
           * Search syntax:
           *
           * | Token       | Match type                 | Description                            |
           * | ----------- | -------------------------- | -------------------------------------- |
           * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
           * | `=scheme`   | exact-match                | Items that are `scheme`                |
           * | `'python`   | include-match              | Items that include `python`            |
           * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
           * | `^java`     | prefix-exact-match         | Items that start with `java`           |
           * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
           * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
           * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
           *
           * A single pipe character acts as an OR operator. For example, the following
           * query matches entries that start with `core` and end with either`go`, `rb`,
           * or`py`.
           *
           * ```
           * ^core go$ | rb$ | py$
           * ```
           */

          var ExtendedSearch = /*#__PURE__*/function () {
            function ExtendedSearch(pattern) {
              var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                  _ref11$isCaseSensitiv = _ref11.isCaseSensitive,
                  isCaseSensitive = _ref11$isCaseSensitiv === void 0 ? Config.isCaseSensitive : _ref11$isCaseSensitiv,
                  _ref11$includeMatches = _ref11.includeMatches,
                  includeMatches = _ref11$includeMatches === void 0 ? Config.includeMatches : _ref11$includeMatches,
                  _ref11$minMatchCharLe = _ref11.minMatchCharLength,
                  minMatchCharLength = _ref11$minMatchCharLe === void 0 ? Config.minMatchCharLength : _ref11$minMatchCharLe,
                  _ref11$ignoreLocation = _ref11.ignoreLocation,
                  ignoreLocation = _ref11$ignoreLocation === void 0 ? Config.ignoreLocation : _ref11$ignoreLocation,
                  _ref11$findAllMatches = _ref11.findAllMatches,
                  findAllMatches = _ref11$findAllMatches === void 0 ? Config.findAllMatches : _ref11$findAllMatches,
                  _ref11$location = _ref11.location,
                  location = _ref11$location === void 0 ? Config.location : _ref11$location,
                  _ref11$threshold = _ref11.threshold,
                  threshold = _ref11$threshold === void 0 ? Config.threshold : _ref11$threshold,
                  _ref11$distance = _ref11.distance,
                  distance = _ref11$distance === void 0 ? Config.distance : _ref11$distance;

              _classCallCheck(this, ExtendedSearch);

              this.query = null;
              this.options = {
                isCaseSensitive: isCaseSensitive,
                includeMatches: includeMatches,
                minMatchCharLength: minMatchCharLength,
                findAllMatches: findAllMatches,
                ignoreLocation: ignoreLocation,
                location: location,
                threshold: threshold,
                distance: distance
              };
              this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
              this.query = parseQuery(this.pattern, this.options);
            }

            _createClass(ExtendedSearch, [{
              key: "searchIn",
              value: function searchIn(text) {
                var query = this.query;

                if (!query) {
                  return {
                    isMatch: false,
                    score: 1
                  };
                }

                var _this$options3 = this.options,
                    includeMatches = _this$options3.includeMatches,
                    isCaseSensitive = _this$options3.isCaseSensitive;
                text = isCaseSensitive ? text : text.toLowerCase();
                var numMatches = 0;
                var allIndices = [];
                var totalScore = 0; // ORs

                for (var i = 0, qLen = query.length; i < qLen; i += 1) {
                  var _searchers = query[i]; // Reset indices

                  allIndices.length = 0;
                  numMatches = 0; // ANDs

                  for (var j = 0, pLen = _searchers.length; j < pLen; j += 1) {
                    var searcher = _searchers[j];

                    var _searcher$search = searcher.search(text),
                        isMatch = _searcher$search.isMatch,
                        indices = _searcher$search.indices,
                        score = _searcher$search.score;

                    if (isMatch) {
                      numMatches += 1;
                      totalScore += score;

                      if (includeMatches) {
                        var type = searcher.constructor.type;

                        if (MultiMatchSet.has(type)) {
                          allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
                        } else {
                          allIndices.push(indices);
                        }
                      }
                    } else {
                      totalScore = 0;
                      numMatches = 0;
                      allIndices.length = 0;
                      break;
                    }
                  } // OR condition, so if TRUE, return


                  if (numMatches) {
                    var result = {
                      isMatch: true,
                      score: totalScore / numMatches
                    };

                    if (includeMatches) {
                      result.indices = allIndices;
                    }

                    return result;
                  }
                } // Nothing was matched


                return {
                  isMatch: false,
                  score: 1
                };
              }
            }], [{
              key: "condition",
              value: function condition(_, options) {
                return options.useExtendedSearch;
              }
            }]);

            return ExtendedSearch;
          }();

          var registeredSearchers = [];

          function register() {
            registeredSearchers.push.apply(registeredSearchers, arguments);
          }

          function createSearcher(pattern, options) {
            for (var i = 0, len = registeredSearchers.length; i < len; i += 1) {
              var searcherClass = registeredSearchers[i];

              if (searcherClass.condition(pattern, options)) {
                return new searcherClass(pattern, options);
              }
            }

            return new BitapSearch(pattern, options);
          }

          var LogicalOperator = {
            AND: '$and',
            OR: '$or'
          };
          var KeyType = {
            PATH: '$path',
            PATTERN: '$val'
          };

          var isExpression = function isExpression(query) {
            return !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
          };

          var isPath = function isPath(query) {
            return !!query[KeyType.PATH];
          };

          var isLeaf = function isLeaf(query) {
            return !isArray(query) && isObject(query) && !isExpression(query);
          };

          var convertToExplicit = function convertToExplicit(query) {
            return _defineProperty2({}, LogicalOperator.AND, Object.keys(query).map(function (key) {
              return _defineProperty2({}, key, query[key]);
            }));
          }; // When `auto` is `true`, the parse function will infer and initialize and add
          // the appropriate `Searcher` instance


          function parse(query, options) {
            var _ref14 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                _ref14$auto = _ref14.auto,
                auto = _ref14$auto === void 0 ? true : _ref14$auto;

            var next = function next(query) {
              var keys = Object.keys(query);
              var isQueryPath = isPath(query);

              if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
                return next(convertToExplicit(query));
              }

              if (isLeaf(query)) {
                var key = isQueryPath ? query[KeyType.PATH] : keys[0];
                var pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

                if (!isString(pattern)) {
                  throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
                }

                var obj = {
                  keyId: createKeyId(key),
                  pattern: pattern
                };

                if (auto) {
                  obj.searcher = createSearcher(pattern, options);
                }

                return obj;
              }

              var node = {
                children: [],
                operator: keys[0]
              };
              keys.forEach(function (key) {
                var value = query[key];

                if (isArray(value)) {
                  value.forEach(function (item) {
                    node.children.push(next(item));
                  });
                }
              });
              return node;
            };

            if (!isExpression(query)) {
              query = convertToExplicit(query);
            }

            return next(query);
          } // Practical scoring function


          function computeScore(results, _ref15) {
            var _ref15$ignoreFieldNor = _ref15.ignoreFieldNorm,
                ignoreFieldNorm = _ref15$ignoreFieldNor === void 0 ? Config.ignoreFieldNorm : _ref15$ignoreFieldNor;
            results.forEach(function (result) {
              var totalScore = 1;
              result.matches.forEach(function (_ref16) {
                var key = _ref16.key,
                    norm = _ref16.norm,
                    score = _ref16.score;
                var weight = key ? key.weight : null;
                totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
              });
              result.score = totalScore;
            });
          }

          function transformMatches(result, data) {
            var matches = result.matches;
            data.matches = [];

            if (!isDefined(matches)) {
              return;
            }

            matches.forEach(function (match) {
              if (!isDefined(match.indices) || !match.indices.length) {
                return;
              }

              var indices = match.indices,
                  value = match.value;
              var obj = {
                indices: indices,
                value: value
              };

              if (match.key) {
                obj.key = match.key.src;
              }

              if (match.idx > -1) {
                obj.refIndex = match.idx;
              }

              data.matches.push(obj);
            });
          }

          function transformScore(result, data) {
            data.score = result.score;
          }

          function format(results, docs) {
            var _ref17 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                _ref17$includeMatches = _ref17.includeMatches,
                includeMatches = _ref17$includeMatches === void 0 ? Config.includeMatches : _ref17$includeMatches,
                _ref17$includeScore = _ref17.includeScore,
                includeScore = _ref17$includeScore === void 0 ? Config.includeScore : _ref17$includeScore;

            var transformers = [];
            if (includeMatches) transformers.push(transformMatches);
            if (includeScore) transformers.push(transformScore);
            return results.map(function (result) {
              var idx = result.idx;
              var data = {
                item: docs[idx],
                refIndex: idx
              };

              if (transformers.length) {
                transformers.forEach(function (transformer) {
                  transformer(result, data);
                });
              }

              return data;
            });
          }

          var Fuse = /*#__PURE__*/function () {
            function Fuse(docs) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var index = arguments.length > 2 ? arguments[2] : undefined;

              _classCallCheck(this, Fuse);

              this.options = _objectSpread(_objectSpread({}, Config), options);

              if (this.options.useExtendedSearch && !true) {}

              this._keyStore = new KeyStore(this.options.keys);
              this.setCollection(docs, index);
            }

            _createClass(Fuse, [{
              key: "setCollection",
              value: function setCollection(docs, index) {
                this._docs = docs;

                if (index && !(index instanceof FuseIndex)) {
                  throw new Error(INCORRECT_INDEX_TYPE);
                }

                this._myIndex = index || createIndex(this.options.keys, this._docs, {
                  getFn: this.options.getFn,
                  fieldNormWeight: this.options.fieldNormWeight
                });
              }
            }, {
              key: "add",
              value: function add(doc) {
                if (!isDefined(doc)) {
                  return;
                }

                this._docs.push(doc);

                this._myIndex.add(doc);
              }
            }, {
              key: "remove",
              value: function remove() {
                var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function
                  /* doc, idx */
                () {
                  return false;
                };
                var results = [];

                for (var i = 0, len = this._docs.length; i < len; i += 1) {
                  var doc = this._docs[i];

                  if (predicate(doc, i)) {
                    this.removeAt(i);
                    i -= 1;
                    len -= 1;
                    results.push(doc);
                  }
                }

                return results;
              }
            }, {
              key: "removeAt",
              value: function removeAt(idx) {
                this._docs.splice(idx, 1);

                this._myIndex.removeAt(idx);
              }
            }, {
              key: "getIndex",
              value: function getIndex() {
                return this._myIndex;
              }
            }, {
              key: "search",
              value: function search(query) {
                var _ref18 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    _ref18$limit = _ref18.limit,
                    limit = _ref18$limit === void 0 ? -1 : _ref18$limit;

                var _this$options4 = this.options,
                    includeMatches = _this$options4.includeMatches,
                    includeScore = _this$options4.includeScore,
                    shouldSort = _this$options4.shouldSort,
                    sortFn = _this$options4.sortFn,
                    ignoreFieldNorm = _this$options4.ignoreFieldNorm;
                var results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
                computeScore(results, {
                  ignoreFieldNorm: ignoreFieldNorm
                });

                if (shouldSort) {
                  results.sort(sortFn);
                }

                if (isNumber(limit) && limit > -1) {
                  results = results.slice(0, limit);
                }

                return format(results, this._docs, {
                  includeMatches: includeMatches,
                  includeScore: includeScore
                });
              }
            }, {
              key: "_searchStringList",
              value: function _searchStringList(query) {
                var searcher = createSearcher(query, this.options);
                var records = this._myIndex.records;
                var results = []; // Iterate over every string in the index

                records.forEach(function (_ref19) {
                  var text = _ref19.v,
                      idx = _ref19.i,
                      norm = _ref19.n;

                  if (!isDefined(text)) {
                    return;
                  }

                  var _searcher$searchIn = searcher.searchIn(text),
                      isMatch = _searcher$searchIn.isMatch,
                      score = _searcher$searchIn.score,
                      indices = _searcher$searchIn.indices;

                  if (isMatch) {
                    results.push({
                      item: text,
                      idx: idx,
                      matches: [{
                        score: score,
                        value: text,
                        norm: norm,
                        indices: indices
                      }]
                    });
                  }
                });
                return results;
              }
            }, {
              key: "_searchLogical",
              value: function _searchLogical(query) {
                var _this8 = this;

                var expression = parse(query, this.options);

                var evaluate = function evaluate(node, item, idx) {
                  if (!node.children) {
                    var keyId = node.keyId,
                        searcher = node.searcher;

                    var matches = _this8._findMatches({
                      key: _this8._keyStore.get(keyId),
                      value: _this8._myIndex.getValueForItemAtKeyId(item, keyId),
                      searcher: searcher
                    });

                    if (matches && matches.length) {
                      return [{
                        idx: idx,
                        item: item,
                        matches: matches
                      }];
                    }

                    return [];
                  }

                  var res = [];

                  for (var i = 0, len = node.children.length; i < len; i += 1) {
                    var child = node.children[i];
                    var result = evaluate(child, item, idx);

                    if (result.length) {
                      res.push.apply(res, _toConsumableArray(result));
                    } else if (node.operator === LogicalOperator.AND) {
                      return [];
                    }
                  }

                  return res;
                };

                var records = this._myIndex.records;
                var resultMap = {};
                var results = [];
                records.forEach(function (_ref20) {
                  var item = _ref20.$,
                      idx = _ref20.i;

                  if (isDefined(item)) {
                    var expResults = evaluate(expression, item, idx);

                    if (expResults.length) {
                      // Dedupe when adding
                      if (!resultMap[idx]) {
                        resultMap[idx] = {
                          idx: idx,
                          item: item,
                          matches: []
                        };
                        results.push(resultMap[idx]);
                      }

                      expResults.forEach(function (_ref21) {
                        var _resultMap$idx$matche;

                        var matches = _ref21.matches;

                        (_resultMap$idx$matche = resultMap[idx].matches).push.apply(_resultMap$idx$matche, _toConsumableArray(matches));
                      });
                    }
                  }
                });
                return results;
              }
            }, {
              key: "_searchObjectList",
              value: function _searchObjectList(query) {
                var _this9 = this;

                var searcher = createSearcher(query, this.options);
                var _this$_myIndex = this._myIndex,
                    keys = _this$_myIndex.keys,
                    records = _this$_myIndex.records;
                var results = []; // List is Array<Object>

                records.forEach(function (_ref22) {
                  var item = _ref22.$,
                      idx = _ref22.i;

                  if (!isDefined(item)) {
                    return;
                  }

                  var matches = []; // Iterate over every key (i.e, path), and fetch the value at that key

                  keys.forEach(function (key, keyIndex) {
                    matches.push.apply(matches, _toConsumableArray(_this9._findMatches({
                      key: key,
                      value: item[keyIndex],
                      searcher: searcher
                    })));
                  });

                  if (matches.length) {
                    results.push({
                      idx: idx,
                      item: item,
                      matches: matches
                    });
                  }
                });
                return results;
              }
            }, {
              key: "_findMatches",
              value: function _findMatches(_ref23) {
                var key = _ref23.key,
                    value = _ref23.value,
                    searcher = _ref23.searcher;

                if (!isDefined(value)) {
                  return [];
                }

                var matches = [];

                if (isArray(value)) {
                  value.forEach(function (_ref24) {
                    var text = _ref24.v,
                        idx = _ref24.i,
                        norm = _ref24.n;

                    if (!isDefined(text)) {
                      return;
                    }

                    var _searcher$searchIn2 = searcher.searchIn(text),
                        isMatch = _searcher$searchIn2.isMatch,
                        score = _searcher$searchIn2.score,
                        indices = _searcher$searchIn2.indices;

                    if (isMatch) {
                      matches.push({
                        score: score,
                        key: key,
                        value: text,
                        idx: idx,
                        norm: norm,
                        indices: indices
                      });
                    }
                  });
                } else {
                  var text = value.v,
                      _norm = value.n;

                  var _searcher$searchIn3 = searcher.searchIn(text),
                      isMatch = _searcher$searchIn3.isMatch,
                      score = _searcher$searchIn3.score,
                      indices = _searcher$searchIn3.indices;

                  if (isMatch) {
                    matches.push({
                      score: score,
                      key: key,
                      value: text,
                      norm: _norm,
                      indices: indices
                    });
                  }
                }

                return matches;
              }
            }]);

            return Fuse;
          }();

          Fuse.version = '6.5.3';
          Fuse.createIndex = createIndex;
          Fuse.parseIndex = parseIndex;
          Fuse.config = Config;
          {
            Fuse.parseQuery = parse;
          }
          {
            register(ExtendedSearch);
          }
          /***/
        },

        /***/
        857:
        /***/
        function _(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_258781__) {
          // ESM COMPAT FLAG
          __nested_webpack_require_258781__.r(__webpack_exports__); // EXPORTS


          __nested_webpack_require_258781__.d(__webpack_exports__, {
            "__DO_NOT_USE__ActionTypes": function __DO_NOT_USE__ActionTypes() {
              return (
                /* binding */
                ActionTypes
              );
            },
            "applyMiddleware": function applyMiddleware() {
              return (
                /* binding */
                _applyMiddleware
              );
            },
            "bindActionCreators": function bindActionCreators() {
              return (
                /* binding */
                _bindActionCreators
              );
            },
            "combineReducers": function combineReducers() {
              return (
                /* binding */
                _combineReducers
              );
            },
            "compose": function compose() {
              return (
                /* binding */
                _compose
              );
            },
            "createStore": function createStore() {
              return (
                /* binding */
                _createStore
              );
            }
          });

          ; // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              obj[key] = value;
            }

            return obj;
          }

          ; // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js

          function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);

            if (Object.getOwnPropertySymbols) {
              var symbols = Object.getOwnPropertySymbols(object);
              enumerableOnly && (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              })), keys.push.apply(keys, symbols);
            }

            return keys;
          }

          function _objectSpread2(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }

            return target;
          }

          ; // CONCATENATED MODULE: ./node_modules/redux/es/redux.js

          /**
           * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
           *
           * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
           * during build.
           * @param {number} code
           */

          function formatProdErrorMessage(code) {
            return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
          } // Inlined version of the `symbol-observable` polyfill


          var $$observable = function () {
            return typeof Symbol === 'function' && Symbol.observable || '@@observable';
          }();
          /**
           * These are private action types reserved by Redux.
           * For any unknown actions, you must return the current state.
           * If the current state is undefined, you must return the initial state.
           * Do not reference these action types directly in your code.
           */


          var randomString = function randomString() {
            return Math.random().toString(36).substring(7).split('').join('.');
          };

          var ActionTypes = {
            INIT: "@@redux/INIT" + randomString(),
            REPLACE: "@@redux/REPLACE" + randomString(),
            PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
              return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
            }
          };
          /**
           * @param {any} obj The object to inspect.
           * @returns {boolean} True if the argument appears to be a plain object.
           */

          function isPlainObject(obj) {
            if (_typeof(obj) !== 'object' || obj === null) return false;
            var proto = obj;

            while (Object.getPrototypeOf(proto) !== null) {
              proto = Object.getPrototypeOf(proto);
            }

            return Object.getPrototypeOf(obj) === proto;
          } // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of


          function miniKindOf(val) {
            if (val === void 0) return 'undefined';
            if (val === null) return 'null';

            var type = _typeof(val);

            switch (type) {
              case 'boolean':
              case 'string':
              case 'number':
              case 'symbol':
              case 'function':
                {
                  return type;
                }
            }

            if (Array.isArray(val)) return 'array';
            if (isDate(val)) return 'date';
            if (isError(val)) return 'error';
            var constructorName = ctorName(val);

            switch (constructorName) {
              case 'Symbol':
              case 'Promise':
              case 'WeakMap':
              case 'WeakSet':
              case 'Map':
              case 'Set':
                return constructorName;
            } // other


            return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
          }

          function ctorName(val) {
            return typeof val.constructor === 'function' ? val.constructor.name : null;
          }

          function isError(val) {
            return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
          }

          function isDate(val) {
            if (val instanceof Date) return true;
            return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
          }

          function kindOf(val) {
            var typeOfVal = _typeof(val);

            if (false) {}

            return typeOfVal;
          }
          /**
           * Creates a Redux store that holds the state tree.
           * The only way to change the data in the store is to call `dispatch()` on it.
           *
           * There should only be a single store in your app. To specify how different
           * parts of the state tree respond to actions, you may combine several reducers
           * into a single reducer function by using `combineReducers`.
           *
           * @param {Function} reducer A function that returns the next state tree, given
           * the current state tree and the action to handle.
           *
           * @param {any} [preloadedState] The initial state. You may optionally specify it
           * to hydrate the state from the server in universal apps, or to restore a
           * previously serialized user session.
           * If you use `combineReducers` to produce the root reducer function, this must be
           * an object with the same shape as `combineReducers` keys.
           *
           * @param {Function} [enhancer] The store enhancer. You may optionally specify it
           * to enhance the store with third-party capabilities such as middleware,
           * time travel, persistence, etc. The only store enhancer that ships with Redux
           * is `applyMiddleware()`.
           *
           * @returns {Store} A Redux store that lets you read the state, dispatch actions
           * and subscribe to changes.
           */


          function _createStore(reducer, preloadedState, enhancer) {
            var _ref2;

            if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
              throw new Error( true ? formatProdErrorMessage(0) : 0);
            }

            if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
              enhancer = preloadedState;
              preloadedState = undefined;
            }

            if (typeof enhancer !== 'undefined') {
              if (typeof enhancer !== 'function') {
                throw new Error( true ? formatProdErrorMessage(1) : 0);
              }

              return enhancer(_createStore)(reducer, preloadedState);
            }

            if (typeof reducer !== 'function') {
              throw new Error( true ? formatProdErrorMessage(2) : 0);
            }

            var currentReducer = reducer;
            var currentState = preloadedState;
            var currentListeners = [];
            var nextListeners = currentListeners;
            var isDispatching = false;
            /**
             * This makes a shallow copy of currentListeners so we can use
             * nextListeners as a temporary list while dispatching.
             *
             * This prevents any bugs around consumers calling
             * subscribe/unsubscribe in the middle of a dispatch.
             */

            function ensureCanMutateNextListeners() {
              if (nextListeners === currentListeners) {
                nextListeners = currentListeners.slice();
              }
            }
            /**
             * Reads the state tree managed by the store.
             *
             * @returns {any} The current state tree of your application.
             */


            function getState() {
              if (isDispatching) {
                throw new Error( true ? formatProdErrorMessage(3) : 0);
              }

              return currentState;
            }
            /**
             * Adds a change listener. It will be called any time an action is dispatched,
             * and some part of the state tree may potentially have changed. You may then
             * call `getState()` to read the current state tree inside the callback.
             *
             * You may call `dispatch()` from a change listener, with the following
             * caveats:
             *
             * 1. The subscriptions are snapshotted just before every `dispatch()` call.
             * If you subscribe or unsubscribe while the listeners are being invoked, this
             * will not have any effect on the `dispatch()` that is currently in progress.
             * However, the next `dispatch()` call, whether nested or not, will use a more
             * recent snapshot of the subscription list.
             *
             * 2. The listener should not expect to see all state changes, as the state
             * might have been updated multiple times during a nested `dispatch()` before
             * the listener is called. It is, however, guaranteed that all subscribers
             * registered before the `dispatch()` started will be called with the latest
             * state by the time it exits.
             *
             * @param {Function} listener A callback to be invoked on every dispatch.
             * @returns {Function} A function to remove this change listener.
             */


            function subscribe(listener) {
              if (typeof listener !== 'function') {
                throw new Error( true ? formatProdErrorMessage(4) : 0);
              }

              if (isDispatching) {
                throw new Error( true ? formatProdErrorMessage(5) : 0);
              }

              var isSubscribed = true;
              ensureCanMutateNextListeners();
              nextListeners.push(listener);
              return function unsubscribe() {
                if (!isSubscribed) {
                  return;
                }

                if (isDispatching) {
                  throw new Error( true ? formatProdErrorMessage(6) : 0);
                }

                isSubscribed = false;
                ensureCanMutateNextListeners();
                var index = nextListeners.indexOf(listener);
                nextListeners.splice(index, 1);
                currentListeners = null;
              };
            }
            /**
             * Dispatches an action. It is the only way to trigger a state change.
             *
             * The `reducer` function, used to create the store, will be called with the
             * current state tree and the given `action`. Its return value will
             * be considered the **next** state of the tree, and the change listeners
             * will be notified.
             *
             * The base implementation only supports plain object actions. If you want to
             * dispatch a Promise, an Observable, a thunk, or something else, you need to
             * wrap your store creating function into the corresponding middleware. For
             * example, see the documentation for the `redux-thunk` package. Even the
             * middleware will eventually dispatch plain object actions using this method.
             *
             * @param {Object} action A plain object representing “what changed”. It is
             * a good idea to keep actions serializable so you can record and replay user
             * sessions, or use the time travelling `redux-devtools`. An action must have
             * a `type` property which may not be `undefined`. It is a good idea to use
             * string constants for action types.
             *
             * @returns {Object} For convenience, the same action object you dispatched.
             *
             * Note that, if you use a custom middleware, it may wrap `dispatch()` to
             * return something else (for example, a Promise you can await).
             */


            function dispatch(action) {
              if (!isPlainObject(action)) {
                throw new Error( true ? formatProdErrorMessage(7) : 0);
              }

              if (typeof action.type === 'undefined') {
                throw new Error( true ? formatProdErrorMessage(8) : 0);
              }

              if (isDispatching) {
                throw new Error( true ? formatProdErrorMessage(9) : 0);
              }

              try {
                isDispatching = true;
                currentState = currentReducer(currentState, action);
              } finally {
                isDispatching = false;
              }

              var listeners = currentListeners = nextListeners;

              for (var i = 0; i < listeners.length; i++) {
                var listener = listeners[i];
                listener();
              }

              return action;
            }
            /**
             * Replaces the reducer currently used by the store to calculate the state.
             *
             * You might need this if your app implements code splitting and you want to
             * load some of the reducers dynamically. You might also need this if you
             * implement a hot reloading mechanism for Redux.
             *
             * @param {Function} nextReducer The reducer for the store to use instead.
             * @returns {void}
             */


            function replaceReducer(nextReducer) {
              if (typeof nextReducer !== 'function') {
                throw new Error( true ? formatProdErrorMessage(10) : 0);
              }

              currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
              // Any reducers that existed in both the new and old rootReducer
              // will receive the previous state. This effectively populates
              // the new state tree with any relevant data from the old one.

              dispatch({
                type: ActionTypes.REPLACE
              });
            }
            /**
             * Interoperability point for observable/reactive libraries.
             * @returns {observable} A minimal observable of state changes.
             * For more information, see the observable proposal:
             * https://github.com/tc39/proposal-observable
             */


            function observable() {
              var _ref;

              var outerSubscribe = subscribe;
              return _ref = {
                /**
                 * The minimal observable subscription method.
                 * @param {Object} observer Any object that can be used as an observer.
                 * The observer object should have a `next` method.
                 * @returns {subscription} An object with an `unsubscribe` method that can
                 * be used to unsubscribe the observable from the store, and prevent further
                 * emission of values from the observable.
                 */
                subscribe: function subscribe(observer) {
                  if (_typeof(observer) !== 'object' || observer === null) {
                    throw new Error( true ? formatProdErrorMessage(11) : 0);
                  }

                  function observeState() {
                    if (observer.next) {
                      observer.next(getState());
                    }
                  }

                  observeState();
                  var unsubscribe = outerSubscribe(observeState);
                  return {
                    unsubscribe: unsubscribe
                  };
                }
              }, _ref[$$observable] = function () {
                return this;
              }, _ref;
            } // When a store is created, an "INIT" action is dispatched so that every
            // reducer returns their initial state. This effectively populates
            // the initial state tree.


            dispatch({
              type: ActionTypes.INIT
            });
            return _ref2 = {
              dispatch: dispatch,
              subscribe: subscribe,
              getState: getState,
              replaceReducer: replaceReducer
            }, _ref2[$$observable] = observable, _ref2;
          }
          /**
           * Prints a warning in the console if it exists.
           *
           * @param {String} message The warning message.
           * @returns {void}
           */


          function warning(message) {
            /* eslint-disable no-console */
            if (typeof console !== 'undefined' && typeof console.error === 'function') {
              console.error(message);
            }
            /* eslint-enable no-console */


            try {
              // This error was thrown as a convenience so that if you enable
              // "break on all exceptions" in your console,
              // it would pause the execution at this line.
              throw new Error(message);
            } catch (e) {} // eslint-disable-line no-empty

          }

          function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
            var reducerKeys = Object.keys(reducers);
            var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

            if (reducerKeys.length === 0) {
              return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
            }

            if (!isPlainObject(inputState)) {
              return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
            }

            var unexpectedKeys = Object.keys(inputState).filter(function (key) {
              return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
            });
            unexpectedKeys.forEach(function (key) {
              unexpectedKeyCache[key] = true;
            });
            if (action && action.type === ActionTypes.REPLACE) return;

            if (unexpectedKeys.length > 0) {
              return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
            }
          }

          function assertReducerShape(reducers) {
            Object.keys(reducers).forEach(function (key) {
              var reducer = reducers[key];
              var initialState = reducer(undefined, {
                type: ActionTypes.INIT
              });

              if (typeof initialState === 'undefined') {
                throw new Error( true ? formatProdErrorMessage(12) : 0);
              }

              if (typeof reducer(undefined, {
                type: ActionTypes.PROBE_UNKNOWN_ACTION()
              }) === 'undefined') {
                throw new Error( true ? formatProdErrorMessage(13) : 0);
              }
            });
          }
          /**
           * Turns an object whose values are different reducer functions, into a single
           * reducer function. It will call every child reducer, and gather their results
           * into a single state object, whose keys correspond to the keys of the passed
           * reducer functions.
           *
           * @param {Object} reducers An object whose values correspond to different
           * reducer functions that need to be combined into one. One handy way to obtain
           * it is to use ES6 `import * as reducers` syntax. The reducers may never return
           * undefined for any action. Instead, they should return their initial state
           * if the state passed to them was undefined, and the current state for any
           * unrecognized action.
           *
           * @returns {Function} A reducer function that invokes every reducer inside the
           * passed object, and builds a state object with the same shape.
           */


          function _combineReducers(reducers) {
            var reducerKeys = Object.keys(reducers);
            var finalReducers = {};

            for (var i = 0; i < reducerKeys.length; i++) {
              var key = reducerKeys[i];

              if (false) {}

              if (typeof reducers[key] === 'function') {
                finalReducers[key] = reducers[key];
              }
            }

            var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
            // keys multiple times.

            var unexpectedKeyCache;

            if (false) {}

            var shapeAssertionError;

            try {
              assertReducerShape(finalReducers);
            } catch (e) {
              shapeAssertionError = e;
            }

            return function combination(state, action) {
              if (state === void 0) {
                state = {};
              }

              if (shapeAssertionError) {
                throw shapeAssertionError;
              }

              if (false) { var warningMessage; }

              var hasChanged = false;
              var nextState = {};

              for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                var _key = finalReducerKeys[_i];
                var reducer = finalReducers[_key];
                var previousStateForKey = state[_key];
                var nextStateForKey = reducer(previousStateForKey, action);

                if (typeof nextStateForKey === 'undefined') {
                  var actionType = action && action.type;
                  throw new Error( true ? formatProdErrorMessage(14) : 0);
                }

                nextState[_key] = nextStateForKey;
                hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
              }

              hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
              return hasChanged ? nextState : state;
            };
          }

          function bindActionCreator(actionCreator, dispatch) {
            return function () {
              return dispatch(actionCreator.apply(this, arguments));
            };
          }
          /**
           * Turns an object whose values are action creators, into an object with the
           * same keys, but with every function wrapped into a `dispatch` call so they
           * may be invoked directly. This is just a convenience method, as you can call
           * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
           *
           * For convenience, you can also pass an action creator as the first argument,
           * and get a dispatch wrapped function in return.
           *
           * @param {Function|Object} actionCreators An object whose values are action
           * creator functions. One handy way to obtain it is to use ES6 `import * as`
           * syntax. You may also pass a single function.
           *
           * @param {Function} dispatch The `dispatch` function available on your Redux
           * store.
           *
           * @returns {Function|Object} The object mimicking the original object, but with
           * every action creator wrapped into the `dispatch` call. If you passed a
           * function as `actionCreators`, the return value will also be a single
           * function.
           */


          function _bindActionCreators(actionCreators, dispatch) {
            if (typeof actionCreators === 'function') {
              return bindActionCreator(actionCreators, dispatch);
            }

            if (_typeof(actionCreators) !== 'object' || actionCreators === null) {
              throw new Error( true ? formatProdErrorMessage(16) : 0);
            }

            var boundActionCreators = {};

            for (var key in actionCreators) {
              var actionCreator = actionCreators[key];

              if (typeof actionCreator === 'function') {
                boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
              }
            }

            return boundActionCreators;
          }
          /**
           * Composes single-argument functions from right to left. The rightmost
           * function can take multiple arguments as it provides the signature for
           * the resulting composite function.
           *
           * @param {...Function} funcs The functions to compose.
           * @returns {Function} A function obtained by composing the argument functions
           * from right to left. For example, compose(f, g, h) is identical to doing
           * (...args) => f(g(h(...args))).
           */


          function _compose() {
            for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
              funcs[_key] = arguments[_key];
            }

            if (funcs.length === 0) {
              return function (arg) {
                return arg;
              };
            }

            if (funcs.length === 1) {
              return funcs[0];
            }

            return funcs.reduce(function (a, b) {
              return function () {
                return a(b.apply(void 0, arguments));
              };
            });
          }
          /**
           * Creates a store enhancer that applies middleware to the dispatch method
           * of the Redux store. This is handy for a variety of tasks, such as expressing
           * asynchronous actions in a concise manner, or logging every action payload.
           *
           * See `redux-thunk` package as an example of the Redux middleware.
           *
           * Because middleware is potentially asynchronous, this should be the first
           * store enhancer in the composition chain.
           *
           * Note that each middleware will be given the `dispatch` and `getState` functions
           * as named arguments.
           *
           * @param {...Function} middlewares The middleware chain to be applied.
           * @returns {Function} A store enhancer applying the middleware.
           */


          function _applyMiddleware() {
            for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
              middlewares[_key] = arguments[_key];
            }

            return function (createStore) {
              return function () {
                var store = createStore.apply(void 0, arguments);

                var _dispatch = function dispatch() {
                  throw new Error( true ? formatProdErrorMessage(15) : 0);
                };

                var middlewareAPI = {
                  getState: store.getState,
                  dispatch: function dispatch() {
                    return _dispatch.apply(void 0, arguments);
                  }
                };
                var chain = middlewares.map(function (middleware) {
                  return middleware(middlewareAPI);
                });
                _dispatch = _compose.apply(void 0, chain)(store.dispatch);
                return _objectSpread2(_objectSpread2({}, store), {}, {
                  dispatch: _dispatch
                });
              };
            };
          }
          /*
           * This is a dummy function to check if the function name has been altered by minification.
           * If the function has been minified and NODE_ENV !== 'production', warn the user.
           */


          function isCrushed() {}

          if (false) {}
          /***/

        }
        /******/

      };
      /************************************************************************/

      /******/
      // The module cache

      /******/

      var __webpack_module_cache__ = {};
      /******/

      /******/
      // The require function

      /******/

      function __nested_webpack_require_289329__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/

        if (cachedModule !== undefined) {
          /******/
          return cachedModule.exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed

          /******/
          // no module.loaded needed

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_289329__);
        /******/

        /******/
        // Return the exports of the module

        /******/


        return module.exports;
        /******/
      }
      /******/

      /************************************************************************/

      /******/

      /* webpack/runtime/compat get default export */

      /******/


      !function () {
        /******/
        // getDefaultExport function for compatibility with non-harmony modules

        /******/
        __nested_webpack_require_289329__.n = function (module) {
          /******/
          var getter = module && module.__esModule ?
          /******/
          function () {
            return module['default'];
          } :
          /******/
          function () {
            return module;
          };
          /******/

          __nested_webpack_require_289329__.d(getter, {
            a: getter
          });
          /******/


          return getter;
          /******/
        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/define property getters */

      /******/

      !function () {
        /******/
        // define getter functions for harmony exports

        /******/
        __nested_webpack_require_289329__.d = function (exports, definition) {
          /******/
          for (var key in definition) {
            /******/
            if (__nested_webpack_require_289329__.o(definition, key) && !__nested_webpack_require_289329__.o(exports, key)) {
              /******/
              Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/

          }
          /******/

        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/hasOwnProperty shorthand */

      /******/

      !function () {
        /******/
        __nested_webpack_require_289329__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/make namespace object */

      /******/

      !function () {
        /******/
        // define __esModule on exports

        /******/
        __nested_webpack_require_289329__.r = function (exports) {
          /******/
          if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/


          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/

      }();
      /******/

      /************************************************************************/

      var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.

      !function () {
        /* harmony import */
        var _scripts_choices__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_289329__(373);
        /* harmony import */


        var _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_289329__.n(_scripts_choices__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_289329__(187);
        /* harmony import */


        var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_289329__.n(_scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _scripts_constants__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_289329__(883);
        /* harmony import */


        var _scripts_defaults__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_289329__(789);
        /* harmony import */


        var _scripts_templates__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_289329__(686);
        /* harmony default export */


        __webpack_exports__["default"] = _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default();
      }();
      __webpack_exports__ = __webpack_exports__["default"];
      /******/

      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ "./node_modules/dom7/dom7.esm.js":
/*!***************************************!*\
  !*** ./node_modules/dom7/dom7.esm.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ $; },
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "addClass": function() { return /* binding */ addClass; },
/* harmony export */   "animate": function() { return /* binding */ animate; },
/* harmony export */   "animationEnd": function() { return /* binding */ animationEnd; },
/* harmony export */   "append": function() { return /* binding */ append; },
/* harmony export */   "appendTo": function() { return /* binding */ appendTo; },
/* harmony export */   "attr": function() { return /* binding */ attr; },
/* harmony export */   "blur": function() { return /* binding */ blur; },
/* harmony export */   "change": function() { return /* binding */ change; },
/* harmony export */   "children": function() { return /* binding */ children; },
/* harmony export */   "click": function() { return /* binding */ click; },
/* harmony export */   "closest": function() { return /* binding */ closest; },
/* harmony export */   "css": function() { return /* binding */ css; },
/* harmony export */   "data": function() { return /* binding */ data; },
/* harmony export */   "dataset": function() { return /* binding */ dataset; },
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; },
/* harmony export */   "detach": function() { return /* binding */ detach; },
/* harmony export */   "each": function() { return /* binding */ each; },
/* harmony export */   "empty": function() { return /* binding */ empty; },
/* harmony export */   "eq": function() { return /* binding */ eq; },
/* harmony export */   "filter": function() { return /* binding */ filter; },
/* harmony export */   "find": function() { return /* binding */ find; },
/* harmony export */   "focus": function() { return /* binding */ focus; },
/* harmony export */   "focusin": function() { return /* binding */ focusin; },
/* harmony export */   "focusout": function() { return /* binding */ focusout; },
/* harmony export */   "hasClass": function() { return /* binding */ hasClass; },
/* harmony export */   "height": function() { return /* binding */ height; },
/* harmony export */   "hide": function() { return /* binding */ hide; },
/* harmony export */   "html": function() { return /* binding */ html; },
/* harmony export */   "index": function() { return /* binding */ index; },
/* harmony export */   "insertAfter": function() { return /* binding */ insertAfter; },
/* harmony export */   "insertBefore": function() { return /* binding */ insertBefore; },
/* harmony export */   "is": function() { return /* binding */ is; },
/* harmony export */   "keydown": function() { return /* binding */ keydown; },
/* harmony export */   "keypress": function() { return /* binding */ keypress; },
/* harmony export */   "keyup": function() { return /* binding */ keyup; },
/* harmony export */   "mousedown": function() { return /* binding */ mousedown; },
/* harmony export */   "mouseenter": function() { return /* binding */ mouseenter; },
/* harmony export */   "mouseleave": function() { return /* binding */ mouseleave; },
/* harmony export */   "mousemove": function() { return /* binding */ mousemove; },
/* harmony export */   "mouseout": function() { return /* binding */ mouseout; },
/* harmony export */   "mouseover": function() { return /* binding */ mouseover; },
/* harmony export */   "mouseup": function() { return /* binding */ mouseup; },
/* harmony export */   "next": function() { return /* binding */ next; },
/* harmony export */   "nextAll": function() { return /* binding */ nextAll; },
/* harmony export */   "off": function() { return /* binding */ off; },
/* harmony export */   "offset": function() { return /* binding */ offset; },
/* harmony export */   "on": function() { return /* binding */ on; },
/* harmony export */   "once": function() { return /* binding */ once; },
/* harmony export */   "outerHeight": function() { return /* binding */ outerHeight; },
/* harmony export */   "outerWidth": function() { return /* binding */ outerWidth; },
/* harmony export */   "parent": function() { return /* binding */ parent; },
/* harmony export */   "parents": function() { return /* binding */ parents; },
/* harmony export */   "prepend": function() { return /* binding */ prepend; },
/* harmony export */   "prependTo": function() { return /* binding */ prependTo; },
/* harmony export */   "prev": function() { return /* binding */ prev; },
/* harmony export */   "prevAll": function() { return /* binding */ prevAll; },
/* harmony export */   "prop": function() { return /* binding */ prop; },
/* harmony export */   "remove": function() { return /* binding */ remove; },
/* harmony export */   "removeAttr": function() { return /* binding */ removeAttr; },
/* harmony export */   "removeClass": function() { return /* binding */ removeClass; },
/* harmony export */   "removeData": function() { return /* binding */ removeData; },
/* harmony export */   "resize": function() { return /* binding */ resize; },
/* harmony export */   "scroll": function() { return /* binding */ scroll; },
/* harmony export */   "scrollLeft": function() { return /* binding */ scrollLeft; },
/* harmony export */   "scrollTo": function() { return /* binding */ scrollTo; },
/* harmony export */   "scrollTop": function() { return /* binding */ scrollTop; },
/* harmony export */   "show": function() { return /* binding */ show; },
/* harmony export */   "siblings": function() { return /* binding */ siblings; },
/* harmony export */   "stop": function() { return /* binding */ stop; },
/* harmony export */   "styles": function() { return /* binding */ styles; },
/* harmony export */   "submit": function() { return /* binding */ submit; },
/* harmony export */   "text": function() { return /* binding */ text; },
/* harmony export */   "toggleClass": function() { return /* binding */ toggleClass; },
/* harmony export */   "touchend": function() { return /* binding */ touchend; },
/* harmony export */   "touchmove": function() { return /* binding */ touchmove; },
/* harmony export */   "touchstart": function() { return /* binding */ touchstart; },
/* harmony export */   "transform": function() { return /* binding */ transform; },
/* harmony export */   "transition": function() { return /* binding */ transition; },
/* harmony export */   "transitionEnd": function() { return /* binding */ transitionEnd; },
/* harmony export */   "trigger": function() { return /* binding */ trigger; },
/* harmony export */   "val": function() { return /* binding */ val; },
/* harmony export */   "value": function() { return /* binding */ value; },
/* harmony export */   "width": function() { return /* binding */ width; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Dom7 4.0.4
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2022, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: January 11, 2022
 */

/* eslint-disable no-proto */

function makeReactive(obj) {
  var proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get: function get() {
      return proto;
    },
    set: function set(value) {
      proto.__proto__ = value;
    }
  });
}

var Dom7 = /*#__PURE__*/function (_Array) {
  _inherits(Dom7, _Array);

  var _super = _createSuper(Dom7);

  function Dom7(items) {
    var _this;

    _classCallCheck(this, Dom7);

    if (typeof items === 'number') {
      _this = _super.call(this, items);
    } else {
      _this = _super.call.apply(_super, [this].concat(_toConsumableArray(items || [])));
      makeReactive(_assertThisInitialized(_this));
    }

    return _possibleConstructorReturn(_this);
  }

  return _createClass(Dom7);
}( /*#__PURE__*/_wrapNativeSuper(Array));

function arrayFlat() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var res = [];
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      res.push.apply(res, _toConsumableArray(arrayFlat(el)));
    } else {
      res.push(el);
    }
  });
  return res;
}

function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}

function arrayUnique(arr) {
  var uniqueArray = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}

function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group) {
    return group.toUpperCase();
  });
} // eslint-disable-next-line


function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  var a = [];
  var res = context.querySelectorAll(selector);

  for (var i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    var _html = selector.trim();

    if (_html.indexOf('<') >= 0 && _html.indexOf('>') >= 0) {
      var toCreate = 'div';
      if (_html.indexOf('<li') === 0) toCreate = 'ul';
      if (_html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (_html.indexOf('<td') === 0 || _html.indexOf('<th') === 0) toCreate = 'tr';
      if (_html.indexOf('<tbody') === 0) toCreate = 'table';
      if (_html.indexOf('<option') === 0) toCreate = 'select';
      var tempParent = document.createElement(toCreate);
      tempParent.innerHTML = _html;

      for (var i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype; // eslint-disable-next-line

function addClass() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList;

    (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));
  });
  return this;
}

function removeClass() {
  for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    classes[_key2] = arguments[_key2];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList2;

    (_el$classList2 = el.classList).remove.apply(_el$classList2, _toConsumableArray(classNames));
  });
  return this;
}

function toggleClass() {
  for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    classes[_key3] = arguments[_key3];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    classNames.forEach(function (className) {
      el.classList.toggle(className);
    });
  });
}

function hasClass() {
  for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    classes[_key4] = arguments[_key4];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  return arrayFilter(this, function (el) {
    return classNames.filter(function (className) {
      return el.classList.contains(className);
    }).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }

  return this;
}

function data(key, value) {
  var el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    var dataKey = el.getAttribute("data-".concat(key));

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      var _attr = el.attributes[i];

      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }

  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  if (typeof value === 'undefined') {
    // get value
    var el = this[0];
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      var values = [];

      for (var i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  } // set value


  for (var _i = 0; _i < this.length; _i += 1) {
    var _el = this[_i];

    if (Array.isArray(value) && _el.multiple && _el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < _el.options.length; j += 1) {
        _el.options[j].selected = value.indexOf(_el.options[j].value) >= 0;
      }
    } else {
      _el.value = value;
    }
  }

  return this;
}

function value(value) {
  return this.val(value);
}

function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition(duration) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? "".concat(duration, "ms") : duration;
  }

  return this;
}

function on() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line


      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  var events = eventType.split(' ');
  var j;

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });

        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  var events = eventType.split(' ');

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once() {
  var dom = this;

  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  function onceHandler() {
    for (var _len8 = arguments.length, eventArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      eventArgs[_key8] = arguments[_key8];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var events = args[0].split(' ');
  var eventData = args[1];

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];

      if (window.CustomEvent) {
        var evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function animationEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }

  if (callback) {
    dom.on('animationend', fireCallBack);
  }

  return this;
}

function width() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles = this.styles();

      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles2 = this.styles();

      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;

    var _scrollTop = el === window ? window.scrollY : el.scrollTop;

    var _scrollLeft = el === window ? window.scrollX : el.scrollLeft;

    return {
      top: box.top + _scrollTop - clientTop,
      left: box.left + _scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach(function (el, index) {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  var result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  var child = this[0];
  var i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    var returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append() {
  var newChild;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var i;
  var j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  var before = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  var after = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);

    el = _next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    var el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);

    el = _prev;
  }

  return $(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line

    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }

      _parent = _parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  var closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  var foundElements = [];

  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);

    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  var children = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].children;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add() {
  var dom = this;
  var i;
  var j;

  for (var _len10 = arguments.length, els = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    els[_key10] = arguments[_key10];
  }

  for (i = 0; i < els.length; i += 1) {
    var toAdd = $(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}

function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
} // eslint-disable-next-line


function scrollTo() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    args[_key11] = arguments[_key11];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    var el = this;
    var currentTop;
    var currentLeft;
    var maxTop;
    var maxLeft;
    var newTop;
    var newLeft;
    var scrollTop; // eslint-disable-line

    var scrollLeft; // eslint-disable-line

    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();

      if (startTime === null) {
        startTime = time;
      }

      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop() {
  for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    args[_key12] = arguments[_key12];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft() {
  for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    args[_key13] = arguments[_key13];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
} // eslint-disable-next-line


function animate(initialProps, initialParams) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      var elements = []; // Define & Cache Initials & Units

      a.elements.each(function (el, index) {
        var initialFullValue;
        var initialValue;
        var unit;
        var finalValue;
        var finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });
      var startTime = null;
      var time;
      var elementsDone = 0;
      var propsDone = 0;
      var done;
      var began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress;
        var easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance;

  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;

  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');

function shortcut(name) {
  function eventHandler() {
    for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
      args[_key14] = arguments[_key14];
    }

    if (typeof args[0] === 'undefined') {
      for (var i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return this.on.apply(this, [name].concat(args));
  }

  return eventHandler;
}

var click = shortcut('click');
var blur = shortcut('blur');
var focus = shortcut('focus');
var focusin = shortcut('focusin');
var focusout = shortcut('focusout');
var keyup = shortcut('keyup');
var keydown = shortcut('keydown');
var keypress = shortcut('keypress');
var submit = shortcut('submit');
var change = shortcut('change');
var mousedown = shortcut('mousedown');
var mousemove = shortcut('mousemove');
var mouseup = shortcut('mouseup');
var mouseenter = shortcut('mouseenter');
var mouseleave = shortcut('mouseleave');
var mouseout = shortcut('mouseout');
var mouseover = shortcut('mouseover');
var touchstart = shortcut('touchstart');
var touchend = shortcut('touchend');
var touchmove = shortcut('touchmove');
var resize = shortcut('resize');
var scroll = shortcut('scroll');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);


/***/ }),

/***/ "./node_modules/ssr-window/ssr-window.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extend": function() { return /* binding */ extend; },
/* harmony export */   "getDocument": function() { return /* binding */ getDocument; },
/* harmony export */   "getWindow": function() { return /* binding */ getWindow; },
/* harmony export */   "ssrDocument": function() { return /* binding */ ssrDocument; },
/* harmony export */   "ssrWindow": function() { return /* binding */ ssrWindow; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */

/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object' && 'constructor' in obj && obj.constructor === Object;
}

function extend() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var src = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Object.keys(src).forEach(function (key) {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}

var ssrDocument = {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: ''
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {}
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS: function createElementNS() {
    return {};
  },
  importNode: function importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};

function getDocument() {
  var doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}

var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState: function replaceState() {},
    pushState: function pushState() {},
    go: function go() {},
    back: function back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return '';
      }
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {},
  matchMedia: function matchMedia() {
    return {};
  },
  requestAnimationFrame: function requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }

    return setTimeout(callback, 0);
  },
  cancelAnimationFrame: function cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }

    clearTimeout(id);
  }
};

function getWindow() {
  var win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}



/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/getBreakpoint.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/getBreakpoint.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getBreakpoint; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function getBreakpoint(breakpoints) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'window';
  var containerEl = arguments.length > 2 ? arguments[2] : undefined;
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  var breakpoint = false;
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  var points = Object.keys(breakpoints).map(function (point) {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      var minRatio = parseFloat(point.substr(1));
      var value = currentHeight * minRatio;
      return {
        value: value,
        point: point
      };
    }

    return {
      value: point,
      point: point
    };
  });
  points.sort(function (a, b) {
    return parseInt(a.value, 10) - parseInt(b.value, 10);
  });

  for (var i = 0; i < points.length; i += 1) {
    var _points$i = points[i],
        point = _points$i.point,
        value = _points$i.value;

    if (base === 'window') {
      if (window.matchMedia("(min-width: ".concat(value, "px)")).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBreakpoint.js */ "./node_modules/swiper/core/breakpoints/setBreakpoint.js");
/* harmony import */ var _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreakpoint.js */ "./node_modules/swiper/core/breakpoints/getBreakpoint.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setBreakpoint: _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  getBreakpoint: _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/setBreakpoint.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/setBreakpoint.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setBreakpoint; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


var isGridEnabled = function isGridEnabled(swiper, params) {
  return swiper.grid && params.grid && params.grid.rows > 1;
};

function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
      params = swiper.params,
      $el = swiper.$el;
  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  var breakpointParams = breakpointOnlyParams || swiper.originalParams;
  var wasMultiRow = isGridEnabled(swiper, params);
  var isMultiRow = isGridEnabled(swiper, breakpointParams);
  var wasEnabled = params.enabled;

  if (wasMultiRow && !isMultiRow) {
    $el.removeClass("".concat(params.containerModifierClass, "grid ").concat(params.containerModifierClass, "grid-column"));
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass("".concat(params.containerModifierClass, "grid"));

    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      $el.addClass("".concat(params.containerModifierClass, "grid-column"));
    }

    swiper.emitContainerClasses();
  } // Toggle navigation, pagination, scrollbar


  ['navigation', 'pagination', 'scrollbar'].forEach(function (prop) {
    var wasModuleEnabled = params[prop] && params[prop].enabled;
    var isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;

    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }

    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

  if (directionChanged && initialized) {
    swiper.changeDirection();
  }

  (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.params, breakpointParams);
  var isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });

  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }

  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);

  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }

  swiper.emit('breakpoint', breakpointParams);
}

/***/ }),

/***/ "./node_modules/swiper/core/check-overflow/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/check-overflow/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function checkOverflow() {
  var swiper = this;
  var wasLocked = swiper.isLocked,
      params = swiper.params;
  var slidesOffsetBefore = params.slidesOffsetBefore;

  if (slidesOffsetBefore) {
    var lastSlideIndex = swiper.slides.length - 1;
    var lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }

  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }

  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  checkOverflow: checkOverflow
});

/***/ }),

/***/ "./node_modules/swiper/core/classes/addClasses.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/classes/addClasses.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addClasses; }
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function prepareClasses(entries, prefix) {
  var resultClasses = [];
  entries.forEach(function (item) {
    if (_typeof(item) === 'object') {
      Object.keys(item).forEach(function (classNames) {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      $el = swiper.$el,
      device = swiper.device,
      support = swiper.support; // prettier-ignore

  var suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': !support.touch
  }, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push.apply(classNames, _toConsumableArray(suffixes));
  $el.addClass(_toConsumableArray(classNames).join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "./node_modules/swiper/core/classes/index.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/core/classes/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _addClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClasses.js */ "./node_modules/swiper/core/classes/addClasses.js");
/* harmony import */ var _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClasses.js */ "./node_modules/swiper/core/classes/removeClasses.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addClasses: _addClasses_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  removeClasses: _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/classes/removeClasses.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/classes/removeClasses.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeClasses; }
/* harmony export */ });
function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "./node_modules/swiper/core/core.js":
/*!******************************************!*\
  !*** ./node_modules/swiper/core/core.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_get_support_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/get-support.js */ "./node_modules/swiper/shared/get-support.js");
/* harmony import */ var _shared_get_device_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/get-device.js */ "./node_modules/swiper/shared/get-device.js");
/* harmony import */ var _shared_get_browser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/get-browser.js */ "./node_modules/swiper/shared/get-browser.js");
/* harmony import */ var _modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/resize/resize.js */ "./node_modules/swiper/core/modules/resize/resize.js");
/* harmony import */ var _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/observer/observer.js */ "./node_modules/swiper/core/modules/observer/observer.js");
/* harmony import */ var _events_emitter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events-emitter.js */ "./node_modules/swiper/core/events-emitter.js");
/* harmony import */ var _update_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update/index.js */ "./node_modules/swiper/core/update/index.js");
/* harmony import */ var _translate_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./translate/index.js */ "./node_modules/swiper/core/translate/index.js");
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/swiper/core/transition/index.js");
/* harmony import */ var _slide_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slide/index.js */ "./node_modules/swiper/core/slide/index.js");
/* harmony import */ var _loop_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loop/index.js */ "./node_modules/swiper/core/loop/index.js");
/* harmony import */ var _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grab-cursor/index.js */ "./node_modules/swiper/core/grab-cursor/index.js");
/* harmony import */ var _events_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./events/index.js */ "./node_modules/swiper/core/events/index.js");
/* harmony import */ var _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./breakpoints/index.js */ "./node_modules/swiper/core/breakpoints/index.js");
/* harmony import */ var _classes_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./classes/index.js */ "./node_modules/swiper/core/classes/index.js");
/* harmony import */ var _images_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/index.js */ "./node_modules/swiper/core/images/index.js");
/* harmony import */ var _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./check-overflow/index.js */ "./node_modules/swiper/core/check-overflow/index.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/swiper/core/defaults.js");
/* harmony import */ var _moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./moduleExtendParams.js */ "./node_modules/swiper/core/moduleExtendParams.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* eslint no-param-reassign: "off" */






















var prototypes = {
  eventsEmitter: _events_emitter_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  update: _update_index_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  translate: _translate_index_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  transition: _transition_index_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  slide: _slide_index_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  loop: _loop_index_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  grabCursor: _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  events: _events_index_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  breakpoints: _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  checkOverflow: _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  classes: _classes_index_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  images: _images_index_js__WEBPACK_IMPORTED_MODULE_18__["default"]
};
var extendedDefaults = {};

var Swiper = /*#__PURE__*/function () {
  function Swiper() {
    _classCallCheck(this, Swiper);

    var el;
    var params;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }

    if (!params) params = {};
    params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el).length > 1) {
      var swipers = [];
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el).each(function (containerEl) {
        var newParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      }); // eslint-disable-next-line no-constructor-return

      return swipers;
    } // Swiper Instance


    var swiper = this;
    swiper.__swiper__ = true;
    swiper.support = (0,_shared_get_support_js__WEBPACK_IMPORTED_MODULE_3__.getSupport)();
    swiper.device = (0,_shared_get_device_js__WEBPACK_IMPORTED_MODULE_4__.getDevice)({
      userAgent: params.userAgent
    });
    swiper.browser = (0,_shared_get_browser_js__WEBPACK_IMPORTED_MODULE_5__.getBrowser)();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = _toConsumableArray(swiper.__modules__);

    if (params.modules && Array.isArray(params.modules)) {
      var _swiper$modules;

      (_swiper$modules = swiper.modules).push.apply(_swiper$modules, _toConsumableArray(params.modules));
    }

    var allModulesParams = {};
    swiper.modules.forEach(function (mod) {
      mod({
        swiper: swiper,
        extendParams: (0,_moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_21__["default"])(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    }); // Extend defaults with modules params

    var swiperParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, _defaults_js__WEBPACK_IMPORTED_MODULE_20__["default"], allModulesParams); // Extend defaults with passed params

    swiper.params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, swiper.params);
    swiper.passedParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(function (eventName) {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"]; // Extend Swiper

    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el: el,
      // Classes
      classNames: [],
      // Slides
      slides: (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        var desktop = ['pointerdown', 'pointermove', 'pointerup'];
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance
    // eslint-disable-next-line no-constructor-return


    return swiper;
  }

  _createClass(Swiper, [{
    key: "enable",
    value: function enable() {
      var swiper = this;
      if (swiper.enabled) return;
      swiper.enabled = true;

      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      swiper.emit('enable');
    }
  }, {
    key: "disable",
    value: function disable() {
      var swiper = this;
      if (!swiper.enabled) return;
      swiper.enabled = false;

      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }

      swiper.emit('disable');
    }
  }, {
    key: "setProgress",
    value: function setProgress(progress, speed) {
      var swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      var min = swiper.minTranslate();
      var max = swiper.maxTranslate();
      var current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }, {
    key: "emitContainerClasses",
    value: function emitContainerClasses() {
      var swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      var cls = swiper.el.className.split(' ').filter(function (className) {
        return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit('_containerClasses', cls.join(' '));
    }
  }, {
    key: "getSlideClasses",
    value: function getSlideClasses(slideEl) {
      var swiper = this;
      if (swiper.destroyed) return '';
      return slideEl.className.split(' ').filter(function (className) {
        return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(' ');
    }
  }, {
    key: "emitSlidesClasses",
    value: function emitSlidesClasses() {
      var swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      var updates = [];
      swiper.slides.each(function (slideEl) {
        var classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl: slideEl,
          classNames: classNames
        });
        swiper.emit('_slideClass', slideEl, classNames);
      });
      swiper.emit('_slideClasses', updates);
    }
  }, {
    key: "slidesPerViewDynamic",
    value: function slidesPerViewDynamic() {
      var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'current';
      var exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var swiper = this;
      var params = swiper.params,
          slides = swiper.slides,
          slidesGrid = swiper.slidesGrid,
          slidesSizesGrid = swiper.slidesSizesGrid,
          swiperSize = swiper.size,
          activeIndex = swiper.activeIndex;
      var spv = 1;

      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;

        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }

        for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
          if (slides[_i] && !breakLoop) {
            slideSize += slides[_i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        // eslint-disable-next-line
        if (view === 'current') {
          for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
            var slideInView = exact ? slidesGrid[_i2] + slidesSizesGrid[_i2] - slidesGrid[activeIndex] < swiperSize : slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize;

            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          // previous
          for (var _i3 = activeIndex - 1; _i3 >= 0; _i3 -= 1) {
            var _slideInView = slidesGrid[activeIndex] - slidesGrid[_i3] < swiperSize;

            if (_slideInView) {
              spv += 1;
            }
          }
        }
      }

      return spv;
    }
  }, {
    key: "update",
    value: function update() {
      var swiper = this;
      if (!swiper || swiper.destroyed) return;
      var snapGrid = swiper.snapGrid,
          params = swiper.params; // Breakpoints

      if (params.breakpoints) {
        swiper.setBreakpoint();
      }

      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      var translated;

      if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
        setTranslate();

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }

        if (!translated) {
          setTranslate();
        }
      }

      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }

      swiper.emit('update');
    }
  }, {
    key: "changeDirection",
    value: function changeDirection(newDirection) {
      var needUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var swiper = this;
      var currentDirection = swiper.params.direction;

      if (!newDirection) {
        // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }

      if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
        return swiper;
      }

      swiper.$el.removeClass("".concat(swiper.params.containerModifierClass).concat(currentDirection)).addClass("".concat(swiper.params.containerModifierClass).concat(newDirection));
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.each(function (slideEl) {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });
      swiper.emit('changeDirection');
      if (needUpdate) swiper.update();
      return swiper;
    }
  }, {
    key: "changeLanguageDirection",
    value: function changeLanguageDirection(direction) {
      var swiper = this;
      if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
      swiper.rtl = direction === 'rtl';
      swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;

      if (swiper.rtl) {
        swiper.$el.addClass("".concat(swiper.params.containerModifierClass, "rtl"));
        swiper.el.dir = 'rtl';
      } else {
        swiper.$el.removeClass("".concat(swiper.params.containerModifierClass, "rtl"));
        swiper.el.dir = 'ltr';
      }

      swiper.update();
    }
  }, {
    key: "mount",
    value: function mount(el) {
      var swiper = this;
      if (swiper.mounted) return true; // Find el

      var $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el || swiper.params.el);
      el = $el[0];

      if (!el) {
        return false;
      }

      el.swiper = swiper;

      var getWrapperSelector = function getWrapperSelector() {
        return ".".concat((swiper.params.wrapperClass || '').trim().split(' ').join('.'));
      };

      var getWrapper = function getWrapper() {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          var res = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

          res.children = function (options) {
            return $el.children(options);
          };

          return res;
        }

        if (!$el.children) {
          return (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])($el).children(getWrapperSelector());
        }

        return $el.children(getWrapperSelector());
      }; // Find Wrapper


      var $wrapperEl = getWrapper();

      if ($wrapperEl.length === 0 && swiper.params.createElements) {
        var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
        var wrapper = document.createElement('div');
        $wrapperEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(wrapper);
        wrapper.className = swiper.params.wrapperClass;
        $el.append(wrapper);
        $el.children(".".concat(swiper.params.slideClass)).each(function (slideEl) {
          $wrapperEl.append(slideEl);
        });
      }

      Object.assign(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box'
      });
      return true;
    }
  }, {
    key: "init",
    value: function init(el) {
      var swiper = this;
      if (swiper.initialized) return swiper;
      var mounted = swiper.mount(el);
      if (mounted === false) return swiper;
      swiper.emit('beforeInit'); // Set breakpoint

      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      } // Add Classes


      swiper.addClasses(); // Create loop

      if (swiper.params.loop) {
        swiper.loopCreate();
      } // Update size


      swiper.updateSize(); // Update slides

      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      } // Set Grab Cursor


      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      } // Slide To Initial Slide


      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      } // Attach events


      swiper.attachEvents(); // Init Flag

      swiper.initialized = true; // Emit

      swiper.emit('init');
      swiper.emit('afterInit');
      return swiper;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var deleteInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var cleanStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var swiper = this;
      var params = swiper.params,
          $el = swiper.$el,
          $wrapperEl = swiper.$wrapperEl,
          slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy'); // Init Flag

      swiper.initialized = false; // Detach events

      swiper.detachEvents(); // Destroy loop

      if (params.loop) {
        swiper.loopDestroy();
      } // Cleanup styles


      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');

        if (slides && slides.length) {
          slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
        }
      }

      swiper.emit('destroy'); // Detach emitter events

      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.deleteProps)(swiper);
      }

      swiper.destroyed = true;
      return null;
    }
  }], [{
    key: "extendDefaults",
    value: function extendDefaults(newDefaults) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)(extendedDefaults, newDefaults);
    }
  }, {
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return _defaults_js__WEBPACK_IMPORTED_MODULE_20__["default"];
    }
  }, {
    key: "installModule",
    value: function installModule(mod) {
      if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
      var modules = Swiper.prototype.__modules__;

      if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
        modules.push(mod);
      }
    }
  }, {
    key: "use",
    value: function use(module) {
      if (Array.isArray(module)) {
        module.forEach(function (m) {
          return Swiper.installModule(m);
        });
        return Swiper;
      }

      Swiper.installModule(module);
      return Swiper;
    }
  }]);

  return Swiper;
}();

Object.keys(prototypes).forEach(function (prototypeGroup) {
  Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([_modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_7__["default"]]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swiper);

/***/ }),

/***/ "./node_modules/swiper/core/defaults.js":
/*!**********************************************!*\
  !*** ./node_modules/swiper/core/defaults.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopedSlidesLimit: true,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
});

/***/ }),

/***/ "./node_modules/swiper/core/events-emitter.js":
/*!****************************************************!*\
  !*** ./node_modules/swiper/core/events-emitter.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-underscore-dangle */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  on: function on(events, handler, priority) {
    var self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once: function once(events, handler, priority) {
    var self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;

    function onceHandler() {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny: function onAny(handler, priority) {
    var self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },
  offAny: function offAny(handler) {
    var self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    var index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },
  off: function off(events, handler) {
    var self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit: function emit() {
    var self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    var events;
    var data;
    var context;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(function (eventHandler) {
          eventHandler.apply(context, [event].concat(_toConsumableArray(data)));
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
});

/***/ }),

/***/ "./node_modules/swiper/core/events/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/events/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onTouchStart.js */ "./node_modules/swiper/core/events/onTouchStart.js");
/* harmony import */ var _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onTouchMove.js */ "./node_modules/swiper/core/events/onTouchMove.js");
/* harmony import */ var _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onTouchEnd.js */ "./node_modules/swiper/core/events/onTouchEnd.js");
/* harmony import */ var _onResize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onResize.js */ "./node_modules/swiper/core/events/onResize.js");
/* harmony import */ var _onClick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onClick.js */ "./node_modules/swiper/core/events/onClick.js");
/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onScroll.js */ "./node_modules/swiper/core/events/onScroll.js");







var dummyEventAttached = false;

function dummyEventListener() {}

var events = function events(swiper, method) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  var capture = !!params.nested;
  var domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  var swiperMethod = method; // Touch Events

  if (!support.touch) {
    el[domMethod](touchEvents.start, swiper.onTouchStart, false);
    document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
    document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
  } else {
    var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
    el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
      passive: false,
      capture: capture
    } : capture);
    el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);

    if (touchEvents.cancel) {
      el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize_js__WEBPACK_IMPORTED_MODULE_4__["default"], true);
  } else {
    swiper[swiperMethod]('observerUpdate', _onResize_js__WEBPACK_IMPORTED_MODULE_4__["default"], true);
  }
};

function attachEvents() {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
      support = swiper.support;
  swiper.onTouchStart = _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper);
  swiper.onTouchMove = _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper);
  swiper.onTouchEnd = _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = _onScroll_js__WEBPACK_IMPORTED_MODULE_6__["default"].bind(swiper);
  }

  swiper.onClick = _onClick_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(swiper);

  if (support.touch && !dummyEventAttached) {
    document.addEventListener('touchstart', dummyEventListener);
    dummyEventAttached = true;
  }

  events(swiper, 'on');
}

function detachEvents() {
  var swiper = this;
  events(swiper, 'off');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  attachEvents: attachEvents,
  detachEvents: detachEvents
});

/***/ }),

/***/ "./node_modules/swiper/core/events/onClick.js":
/*!****************************************************!*\
  !*** ./node_modules/swiper/core/events/onClick.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onClick; }
/* harmony export */ });
function onClick(e) {
  var swiper = this;
  if (!swiper.enabled) return;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onResize.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/events/onResize.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onResize; }
/* harmony export */ });
function onResize() {
  var swiper = this;
  var params = swiper.params,
      el = swiper.el;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onScroll.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/events/onScroll.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onScroll; }
/* harmony export */ });
function onScroll() {
  var swiper = this;
  var wrapperEl = swiper.wrapperEl,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchEnd.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchEnd.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchEnd; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function onTouchEnd(event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      slidesGrid = swiper.slidesGrid,
      enabled = swiper.enabled;
  if (!enabled) return;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  var touchEndTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
  var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    var pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
  (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  var currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (swiper.params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos: currentPos
    });
    return;
  } // Find current slide


  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];

  for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + _increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + _increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }

  var rewindFirstIndex = null;
  var rewindLastIndex = null;

  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  } // Find current slide size


  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchMove.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchMove.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchMove; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");



function onTouchMove(event) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    if (!(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).is(data.focusableElements)) {
      swiper.allowClick = false;
    }

    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    var touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop && !params.cssMode) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchStart.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchStart.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchStart; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


 // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd

function closestElement(selector) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

  function __closestFrom(el) {
    if (!el || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)() || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    var found = el.closest(selector);

    if (!found && !el.getRootNode) {
      return null;
    }

    return found || __closestFrom(el.getRootNode().host);
  }

  return __closestFrom(base);
}

function onTouchStart(event) {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      enabled = swiper.enabled;
  if (!enabled) return;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  var $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root component

  var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== ''; // eslint-disable-next-line

  var eventPath = event.composedPath ? event.composedPath() : event.path;

  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(eventPath[0]);
  }

  var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : ".".concat(params.noSwipingClass);
  var isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    var preventDefault = true;

    if ($targetEl.is(data.focusableElements)) {
      preventDefault = false;

      if ($targetEl[0].nodeName === 'SELECT') {
        data.isTouched = false;
      }
    }

    if (document.activeElement && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }

  swiper.emit('touchStart', e);
}

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGrabCursor.js */ "./node_modules/swiper/core/grab-cursor/setGrabCursor.js");
/* harmony import */ var _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsetGrabCursor.js */ "./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setGrabCursor: _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  unsetGrabCursor: _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/setGrabCursor.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/setGrabCursor.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setGrabCursor; }
/* harmony export */ });
function setGrabCursor(moving) {
  var swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  var el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ unsetGrabCursor; }
/* harmony export */ });
function unsetGrabCursor() {
  var swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
}

/***/ }),

/***/ "./node_modules/swiper/core/images/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/images/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _loadImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage.js */ "./node_modules/swiper/core/images/loadImage.js");
/* harmony import */ var _preloadImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloadImages.js */ "./node_modules/swiper/core/images/preloadImages.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loadImage: _loadImage_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  preloadImages: _preloadImages_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/images/loadImage.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/images/loadImage.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loadImage; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var image;

  function onReady() {
    if (callback) callback();
  }

  var isPicture = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/images/preloadImages.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/images/preloadImages.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ preloadImages; }
/* harmony export */ });
function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/loop/index.js":
/*!************************************************!*\
  !*** ./node_modules/swiper/core/loop/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopCreate.js */ "./node_modules/swiper/core/loop/loopCreate.js");
/* harmony import */ var _loopFix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopFix.js */ "./node_modules/swiper/core/loop/loopFix.js");
/* harmony import */ var _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopDestroy.js */ "./node_modules/swiper/core/loop/loopDestroy.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loopCreate: _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  loopFix: _loopFix_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  loopDestroy: _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopCreate.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopCreate.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loopCreate; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function loopCreate() {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

  var $selector = $wrapperEl.children().length > 0 ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])($wrapperEl.children()[0].parentNode) : $wrapperEl;
  $selector.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass)).remove();
  var slides = $selector.children(".".concat(params.slideClass));

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document.createElement('div')).addClass("".concat(params.slideClass, " ").concat(params.slideBlankClass));
        $selector.append(blankNode);
      }

      slides = $selector.children(".".concat(params.slideClass));
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (el, index) {
    var slide = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el);
    slide.attr('data-swiper-slide-index', index);
  });

  for (var _i = 0; _i < swiper.loopedSlides; _i += 1) {
    var index = _i - Math.floor(_i / slides.length) * slides.length;

    appendSlides.push(slides.eq(index)[0]);
    prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
  }

  for (var _i2 = 0; _i2 < appendSlides.length; _i2 += 1) {
    $selector.append((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(appendSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (var _i3 = prependSlides.length - 1; _i3 >= 0; _i3 -= 1) {
    $selector.prepend((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prependSlides[_i3].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopDestroy.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopDestroy.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loopDestroy; }
/* harmony export */ });
function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;
  $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, ",.").concat(params.slideClass, ".").concat(params.slideBlankClass)).remove();
  slides.removeAttr('data-swiper-slide-index');
}

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopFix.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopFix.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loopFix; }
/* harmony export */ });
function loopFix() {
  var swiper = this;
  swiper.emit('beforeLoopFix');
  var activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;

    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}

/***/ }),

/***/ "./node_modules/swiper/core/moduleExtendParams.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/moduleExtendParams.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ moduleExtendParams; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


function moduleExtendParams(params, allModulesParams) {
  return function extendParams() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var moduleParamName = Object.keys(obj)[0];
    var moduleParams = obj[moduleParamName];

    if (_typeof(moduleParams) !== 'object' || moduleParams === null) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
      return;
    }

    if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
      params[moduleParamName] = {
        auto: true
      };
    }

    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
      return;
    }

    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }

    if (_typeof(params[moduleParamName]) === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }

    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
  };
}

/***/ }),

/***/ "./node_modules/swiper/core/modules/observer/observer.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/modules/observer/observer.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Observer; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function Observer(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
  var observers = [];
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  var attach = function attach(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    var observer = new ObserverFunc(function (mutations) {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }

      var observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };

  var init = function init() {
    if (!swiper.params.observer) return;

    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();

      for (var i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    } // Observe container


    attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  };

  var destroy = function destroy() {
    observers.forEach(function (observer) {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };

  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/***/ }),

/***/ "./node_modules/swiper/core/modules/resize/resize.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/modules/resize/resize.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Resize; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function Resize(_ref) {
  var swiper = _ref.swiper,
      on = _ref.on,
      emit = _ref.emit;
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var observer = null;
  var animationFrame = null;

  var resizeHandler = function resizeHandler() {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };

  var createObserver = function createObserver() {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(function (entries) {
      animationFrame = window.requestAnimationFrame(function () {
        var width = swiper.width,
            height = swiper.height;
        var newWidth = width;
        var newHeight = height;
        entries.forEach(function (_ref2) {
          var contentBoxSize = _ref2.contentBoxSize,
              contentRect = _ref2.contentRect,
              target = _ref2.target;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });

        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };

  var removeObserver = function removeObserver() {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }

    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };

  var orientationChangeHandler = function orientationChangeHandler() {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };

  on('init', function () {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', function () {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/index.js":
/*!*************************************************!*\
  !*** ./node_modules/swiper/core/slide/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _slideTo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideTo.js */ "./node_modules/swiper/core/slide/slideTo.js");
/* harmony import */ var _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideToLoop.js */ "./node_modules/swiper/core/slide/slideToLoop.js");
/* harmony import */ var _slideNext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideNext.js */ "./node_modules/swiper/core/slide/slideNext.js");
/* harmony import */ var _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidePrev.js */ "./node_modules/swiper/core/slide/slidePrev.js");
/* harmony import */ var _slideReset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideReset.js */ "./node_modules/swiper/core/slide/slideReset.js");
/* harmony import */ var _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideToClosest.js */ "./node_modules/swiper/core/slide/slideToClosest.js");
/* harmony import */ var _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideToClickedSlide.js */ "./node_modules/swiper/core/slide/slideToClickedSlide.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  slideTo: _slideTo_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  slideToLoop: _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  slideNext: _slideNext_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  slidePrev: _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  slideReset: _slideReset_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  slideToClosest: _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  slideToClickedSlide: _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideNext.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideNext.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideNext; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideNext() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  var animating = swiper.animating,
      enabled = swiper.enabled,
      params = swiper.params;
  if (!enabled) return swiper;
  var perGroup = params.slidesPerGroup;

  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }

  var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slidePrev.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/slide/slidePrev.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slidePrev; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slidePrev() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return swiper;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  var translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    return normalize(val);
  });
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    var prevSnapIndex;
    snapGrid.forEach(function (snap, snapIndex) {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });

    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }

  var prevIndex = 0;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }

  if (params.rewind && swiper.isBeginning) {
    var lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideReset.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideReset.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideReset; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideReset() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideTo.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideTo.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideTo; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


function slideTo() {
  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
  var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var internal = arguments.length > 3 ? arguments[3] : undefined;
  var initial = arguments.length > 4 ? arguments[4] : undefined;

  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(_typeof(index), "] given."));
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    var indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    var isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(index, "] given."));
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  var swiper = this;
  var slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate,
      wrapperEl = swiper.wrapperEl,
      enabled = swiper.enabled;

  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }

  var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  var translate = -snapGrid[snapIndex]; // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      var normalizedTranslate = -Math.floor(translate * 100);
      var normalizedGrid = Math.floor(slidesGrid[i] * 100);
      var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  } // Update progress


  swiper.updateProgress(translate);
  var direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    var isH = swiper.isHorizontal();
    var t = rtl ? translate : -translate;

    if (speed === 0) {
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }

      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

      if (isVirtual) {
        requestAnimationFrame(function () {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._swiperImmediateVirtual = false;
        });
      }
    } else {
      var _wrapperEl$scrollTo;

      if (!swiper.support.smoothScroll) {
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.animateCSSModeScroll)({
          swiper: swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _defineProperty(_wrapperEl$scrollTo, isH ? 'left' : 'top', t), _defineProperty(_wrapperEl$scrollTo, "behavior", 'smooth'), _wrapperEl$scrollTo));
    }

    return true;
  }

  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);

  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;

    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }

    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
  }

  return true;
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToClickedSlide.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToClickedSlide.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideToClickedSlide; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToClosest.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToClosest.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideToClosest; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideToClosest() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var threshold = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;
  var swiper = this;
  var index = swiper.activeIndex;
  var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    var prevSnap = swiper.snapGrid[snapIndex - 1];
    var _currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToLoop.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToLoop.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideToLoop; }
/* harmony export */ });
function slideToLoop() {
  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
  var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var internal = arguments.length > 3 ? arguments[3] : undefined;

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    var indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    var isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(index, "] given."));
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  var swiper = this;
  var newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/index.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/transition/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _setTransition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTransition.js */ "./node_modules/swiper/core/transition/setTransition.js");
/* harmony import */ var _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionStart.js */ "./node_modules/swiper/core/transition/transitionStart.js");
/* harmony import */ var _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionEnd.js */ "./node_modules/swiper/core/transition/transitionEnd.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setTransition: _setTransition_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  transitionStart: _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  transitionEnd: _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/transition/setTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/transition/setTransition.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setTransition; }
/* harmony export */ });
function setTransition(duration, byController) {
  var swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionEmit.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionEmit.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transitionEmit; }
/* harmony export */ });
function transitionEmit(_ref) {
  var swiper = _ref.swiper,
      runCallbacks = _ref.runCallbacks,
      direction = _ref.direction,
      step = _ref.step;
  var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex;
  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit("transition".concat(step));

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit("slideResetTransition".concat(step));
      return;
    }

    swiper.emit("slideChangeTransition".concat(step));

    if (dir === 'next') {
      swiper.emit("slideNextTransition".concat(step));
    } else {
      swiper.emit("slidePrevTransition".concat(step));
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionEnd.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionEnd.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transitionEnd; }
/* harmony export */ });
/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ "./node_modules/swiper/core/transition/transitionEmit.js");

function transitionEnd() {
  var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var direction = arguments.length > 1 ? arguments[1] : undefined;
  var swiper = this;
  var params = swiper.params;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  (0,_transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    swiper: swiper,
    runCallbacks: runCallbacks,
    direction: direction,
    step: 'End'
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionStart.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionStart.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transitionStart; }
/* harmony export */ });
/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ "./node_modules/swiper/core/transition/transitionEmit.js");

function transitionStart() {
  var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var direction = arguments.length > 1 ? arguments[1] : undefined;
  var swiper = this;
  var params = swiper.params;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  (0,_transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    swiper: swiper,
    runCallbacks: runCallbacks,
    direction: direction,
    step: 'Start'
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/getTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/getTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getSwiperTranslate; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function getSwiperTranslate() {
  var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? 'x' : 'y';
  var swiper = this;
  var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  var currentTranslate = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.getTranslate)($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/translate/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslate.js */ "./node_modules/swiper/core/translate/getTranslate.js");
/* harmony import */ var _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTranslate.js */ "./node_modules/swiper/core/translate/setTranslate.js");
/* harmony import */ var _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minTranslate.js */ "./node_modules/swiper/core/translate/minTranslate.js");
/* harmony import */ var _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxTranslate.js */ "./node_modules/swiper/core/translate/maxTranslate.js");
/* harmony import */ var _translateTo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateTo.js */ "./node_modules/swiper/core/translate/translateTo.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getTranslate: _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  setTranslate: _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  minTranslate: _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  maxTranslate: _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  translateTo: _translateTo_js__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/translate/maxTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/maxTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ maxTranslate; }
/* harmony export */ });
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/minTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/minTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ minTranslate; }
/* harmony export */ });
function minTranslate() {
  return -this.snapGrid[0];
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/setTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/setTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setTranslate; }
/* harmony export */ });
function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      wrapperEl = swiper.wrapperEl,
      progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform("translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)"));
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/translateTo.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/translate/translateTo.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ translateTo; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function translateTo() {
  var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
  var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var translateBounds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var internal = arguments.length > 4 ? arguments[4] : undefined;
  var swiper = this;
  var params = swiper.params,
      wrapperEl = swiper.wrapperEl;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var minTranslate = swiper.minTranslate();
  var maxTranslate = swiper.maxTranslate();
  var newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    var isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      var _wrapperEl$scrollTo;

      if (!swiper.support.smoothScroll) {
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.animateCSSModeScroll)({
          swiper: swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _defineProperty(_wrapperEl$scrollTo, isH ? 'left' : 'top', -newTranslate), _defineProperty(_wrapperEl$scrollTo, "behavior", 'smooth'), _wrapperEl$scrollTo));
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/swiper/core/update/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/update/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _updateSize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSize.js */ "./node_modules/swiper/core/update/updateSize.js");
/* harmony import */ var _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSlides.js */ "./node_modules/swiper/core/update/updateSlides.js");
/* harmony import */ var _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAutoHeight.js */ "./node_modules/swiper/core/update/updateAutoHeight.js");
/* harmony import */ var _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSlidesOffset.js */ "./node_modules/swiper/core/update/updateSlidesOffset.js");
/* harmony import */ var _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateSlidesProgress.js */ "./node_modules/swiper/core/update/updateSlidesProgress.js");
/* harmony import */ var _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProgress.js */ "./node_modules/swiper/core/update/updateProgress.js");
/* harmony import */ var _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSlidesClasses.js */ "./node_modules/swiper/core/update/updateSlidesClasses.js");
/* harmony import */ var _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateActiveIndex.js */ "./node_modules/swiper/core/update/updateActiveIndex.js");
/* harmony import */ var _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateClickedSlide.js */ "./node_modules/swiper/core/update/updateClickedSlide.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  updateSize: _updateSize_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  updateSlides: _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  updateAutoHeight: _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  updateSlidesOffset: _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  updateSlidesProgress: _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  updateProgress: _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  updateSlidesClasses: _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  updateActiveIndex: _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  updateClickedSlide: _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/update/updateActiveIndex.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateActiveIndex.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateActiveIndex; }
/* harmony export */ });
function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Object.assign(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateAutoHeight.js":
/*!*************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateAutoHeight.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateAutoHeight; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");

function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  var newHeight = 0;
  var i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }

  var getSlideByIndex = function getSlideByIndex(index) {
    if (isVirtual) {
      return swiper.slides.filter(function (el) {
        return parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index;
      })[0];
    }

    return swiper.slides.eq(index)[0];
  }; // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])([])).each(function (slide) {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', "".concat(newHeight, "px"));
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateClickedSlide.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateClickedSlide.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateClickedSlide; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e).closest(".".concat(params.slideClass))[0];
  var slideFound = false;
  var slideIndex;

  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateProgress.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/update/updateProgress.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateProgress; }
/* harmony export */ });
function updateProgress(translate) {
  var swiper = this;

  if (typeof translate === 'undefined') {
    var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Object.assign(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSize.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSize.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSize; }
/* harmony export */ });
function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlides.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlides.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlides; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function updateSlides() {
  var swiper = this;

  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }

  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }

  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children(".".concat(swiper.params.slideClass));
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];
  var offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.slidesGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginBottom: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: '',
    marginTop: ''
  }); // reset cssMode offsets

  if (params.centeredSlides && params.cssMode) {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-before', '');
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-after', '');
  }

  var gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  } // Calc slides


  var slideSize;
  var shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(function (key) {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;

  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    var slide = slides.eq(i);

    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel('width')] = "";
      }

      var slideStyles = getComputedStyle(slide[0]);
      var currentTransform = slide[0].style.transform;
      var currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        var width = getDirectionPropertyValue(slideStyles, 'width');
        var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        var boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          var _slide$ = slide[0],
              clientWidth = _slide$.clientWidth,
              offsetWidth = _slide$.offsetWidth;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = "".concat(slideSize, "px");
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });
  }

  if (params.setWrapperSize) {
    $wrapperEl.css(_defineProperty({}, getDirectionLabel('width'), "".concat(swiper.virtualSize + params.spaceBetween, "px")));
  }

  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    var newSlidesGrid = [];

    for (var _i = 0; _i < snapGrid.length; _i += 1) {
      var slidesGridItem = snapGrid[_i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

      if (snapGrid[_i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter(function (_, slideIndex) {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }).css(_defineProperty({}, key, "".concat(spaceBetween, "px")));
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    var maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(function (snap) {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    var _allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    _allSlidesSize -= params.spaceBetween;

    if (_allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function (snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Object.assign(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });

  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-before', "".concat(-snapGrid[0], "px"));
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-after', "".concat(swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2, "px"));
    var addToSnapGrid = -swiper.snapGrid[0];
    var addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(function (v) {
      return v + addToSnapGrid;
    });
    swiper.slidesGrid = swiper.slidesGrid.map(function (v) {
      return v + addToSlidesGrid;
    });
  }

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }

  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    var backFaceHiddenClass = "".concat(params.containerModifierClass, "backface-hidden");
    var hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);

    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.$el.removeClass(backFaceHiddenClass);
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesClasses.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesClasses.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlidesClasses; }
/* harmony export */ });
function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass("".concat(params.slideActiveClass, " ").concat(params.slideNextClass, " ").concat(params.slidePrevClass, " ").concat(params.slideDuplicateActiveClass, " ").concat(params.slideDuplicateNextClass, " ").concat(params.slideDuplicatePrevClass));
  var activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(activeIndex, "\"]"));
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  var nextSlide = activeSlide.nextAll(".".concat(params.slideClass)).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  var prevSlide = activeSlide.prevAll(".".concat(params.slideClass)).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesOffset.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesOffset.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlidesOffset; }
/* harmony export */ });
function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;

  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesProgress.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesProgress.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlidesProgress; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");

function updateSlidesProgress() {
  var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides,
      rtl = swiper.rtlTranslate,
      snapGrid = swiper.snapGrid;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (var i = 0; i < slides.length; i += 1) {
    var slide = slides[i];
    var slideOffset = slide.swiperSlideOffset;

    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }

    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    var originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    var slideBefore = -(offsetCenter - slideOffset);
    var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides.eq(i).addClass(params.slideVisibleClass);
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }

  swiper.visibleSlides = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.visibleSlides);
}

/***/ }),

/***/ "./node_modules/swiper/modules/a11y/a11y.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/a11y/a11y.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ A11y; }
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ "./node_modules/swiper/shared/classes-to-selector.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function A11y(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null
    }
  });
  swiper.a11y = {
    clicked: false
  };
  var liveRegion = null;

  function notify(message) {
    var notification = liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  }

  function getRandomNumber() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;

    var randomChar = function randomChar() {
      return Math.round(16 * Math.random()).toString(16);
    };

    return 'x'.repeat(size).replace(/x/g, randomChar);
  }

  function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
  }

  function makeElNotFocusable($el) {
    $el.attr('tabIndex', '-1');
  }

  function addElRole($el, role) {
    $el.attr('role', role);
  }

  function addElRoleDescription($el, description) {
    $el.attr('aria-roledescription', description);
  }

  function addElControls($el, controls) {
    $el.attr('aria-controls', controls);
  }

  function addElLabel($el, label) {
    $el.attr('aria-label', label);
  }

  function addElId($el, id) {
    $el.attr('id', id);
  }

  function addElLive($el, live) {
    $el.attr('aria-live', live);
  }

  function disableEl($el) {
    $el.attr('aria-disabled', true);
  }

  function enableEl($el) {
    $el.attr('aria-disabled', false);
  }

  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    var params = swiper.params.a11y;
    var $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target);

    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }

      if (swiper.isEnd) {
        notify(params.lastSlideMessage);
      } else {
        notify(params.nextSlideMessage);
      }
    }

    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }

      if (swiper.isBeginning) {
        notify(params.firstSlideMessage);
      } else {
        notify(params.prevSlideMessage);
      }
    }

    if (swiper.pagination && $targetEl.is((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.pagination.bulletClass))) {
      $targetEl[0].click();
    }
  }

  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        disableEl($prevEl);
        makeElNotFocusable($prevEl);
      } else {
        enableEl($prevEl);
        makeElFocusable($prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        disableEl($nextEl);
        makeElNotFocusable($nextEl);
      } else {
        enableEl($nextEl);
        makeElFocusable($nextEl);
      }
    }
  }

  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }

  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }

  function updatePagination() {
    var params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.each(function (bulletEl) {
      var $bulletEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bulletEl);

      if (swiper.params.pagination.clickable) {
        makeElFocusable($bulletEl);

        if (!swiper.params.pagination.renderBullet) {
          addElRole($bulletEl, 'button');
          addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
        }
      }

      if ($bulletEl.is(".".concat(swiper.params.pagination.bulletActiveClass))) {
        $bulletEl.attr('aria-current', 'true');
      } else {
        $bulletEl.removeAttr('aria-current');
      }
    });
  }

  var initNavEl = function initNavEl($el, wrapperId, message) {
    makeElFocusable($el);

    if ($el[0].tagName !== 'BUTTON') {
      addElRole($el, 'button');
      $el.on('keydown', onEnterOrSpaceKey);
    }

    addElLabel($el, message);
    addElControls($el, wrapperId);
  };

  var handlePointerDown = function handlePointerDown() {
    swiper.a11y.clicked = true;
  };

  var handlePointerUp = function handlePointerUp() {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        swiper.a11y.clicked = false;
      });
    });
  };

  var handleFocus = function handleFocus(e) {
    if (swiper.a11y.clicked) return;
    var slideEl = e.target.closest(".".concat(swiper.params.slideClass));
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    var isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    var isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;

    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }

    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
  };

  var initSlides = function initSlides() {
    var params = swiper.params.a11y;

    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.slides), params.itemRoleDescriptionMessage);
    }

    if (params.slideRole) {
      addElRole((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.slides), params.slideRole);
    }

    var slidesLength = swiper.params.loop ? swiper.slides.filter(function (el) {
      return !el.classList.contains(swiper.params.slideDuplicateClass);
    }).length : swiper.slides.length;

    if (params.slideLabelMessage) {
      swiper.slides.each(function (slideEl, index) {
        var $slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl);
        var slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
        var ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel($slideEl, ariaLabelMessage);
      });
    }
  };

  var init = function init() {
    var params = swiper.params.a11y;
    swiper.$el.append(liveRegion); // Container

    var $containerEl = swiper.$el;

    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
    }

    if (params.containerMessage) {
      addElLabel($containerEl, params.containerMessage);
    } // Wrapper


    var $wrapperEl = swiper.$wrapperEl;
    var wrapperId = params.id || $wrapperEl.attr('id') || "swiper-wrapper-".concat(getRandomNumber(16));
    var live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId($wrapperEl, wrapperId);
    addElLive($wrapperEl, live); // Slide

    initSlides(); // Navigation

    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl && $nextEl.length) {
      initNavEl($nextEl, wrapperId, params.nextSlideMessage);
    }

    if ($prevEl && $prevEl.length) {
      initNavEl($prevEl, wrapperId, params.prevSlideMessage);
    } // Pagination


    if (hasClickablePagination()) {
      swiper.pagination.$el.on('keydown', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    } // Tab focus


    swiper.$el.on('focus', handleFocus, true);
    swiper.$el.on('pointerdown', handlePointerDown, true);
    swiper.$el.on('pointerup', handlePointerUp, true);
  };

  function destroy() {
    if (liveRegion && liveRegion.length > 0) liveRegion.remove();
    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', onEnterOrSpaceKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', onEnterOrSpaceKey);
    } // Pagination


    if (hasClickablePagination()) {
      swiper.pagination.$el.off('keydown', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    } // Tab focus


    swiper.$el.off('focus', handleFocus, true);
    swiper.$el.off('pointerdown', handlePointerDown, true);
    swiper.$el.off('pointerup', handlePointerUp, true);
  }

  on('beforeInit', function () {
    liveRegion = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])("<span class=\"".concat(swiper.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"));
  });
  on('afterInit', function () {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', function () {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', function () {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', function () {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', function () {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/autoplay/autoplay.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay/autoplay.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Autoplay; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* eslint no-underscore-dangle: "off" */

/* eslint no-use-before-define: "off" */


function Autoplay(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
  var timeout;
  swiper.autoplay = {
    running: false,
    paused: false
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });

  function run() {
    if (!swiper.size) {
      swiper.autoplay.running = false;
      swiper.autoplay.paused = false;
      return;
    }

    var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    var delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    clearTimeout(timeout);
    timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(function () {
      var autoplayResult;

      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          emit('autoplay');
        } else {
          stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        emit('autoplay');
      } else {
        stop();
      }

      if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
        run();
      }
    }, delay);
  }

  function start() {
    if (typeof timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    emit('autoplayStart');
    run();
    return true;
  }

  function stop() {
    if (!swiper.autoplay.running) return false;
    if (typeof timeout === 'undefined') return false;

    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }

    swiper.autoplay.running = false;
    emit('autoplayStop');
    return true;
  }

  function pause(speed) {
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (timeout) clearTimeout(timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      run();
    } else {
      ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
      });
    }
  }

  function onVisibilityChange() {
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      pause();
    }

    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      run();
      swiper.autoplay.paused = false;
    }
  }

  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
    swiper.autoplay.paused = false;

    if (!swiper.autoplay.running) {
      stop();
    } else {
      run();
    }
  }

  function onMouseEnter() {
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
    } else {
      emit('autoplayPause');
      pause();
    }

    ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
  }

  function onMouseLeave() {
    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }

    swiper.autoplay.paused = false;
    emit('autoplayResume');
    run();
  }

  function attachMouseEvents() {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on('mouseenter', onMouseEnter);
      swiper.$el.on('mouseleave', onMouseLeave);
    }
  }

  function detachMouseEvents() {
    swiper.$el.off('mouseenter', onMouseEnter);
    swiper.$el.off('mouseleave', onMouseLeave);
  }

  on('init', function () {
    if (swiper.params.autoplay.enabled) {
      start();
      var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
      document.addEventListener('visibilitychange', onVisibilityChange);
      attachMouseEvents();
    }
  });
  on('beforeTransitionStart', function (_s, speed, internal) {
    if (swiper.autoplay.running) {
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.pause(speed);
      } else {
        stop();
      }
    }
  });
  on('sliderFirstMove', function () {
    if (swiper.autoplay.running) {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        pause();
      }
    }
  });
  on('touchEnd', function () {
    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
      run();
    }
  });
  on('destroy', function () {
    detachMouseEvents();

    if (swiper.autoplay.running) {
      stop();
    }

    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  });
  Object.assign(swiper.autoplay, {
    pause: pause,
    run: run,
    start: start,
    stop: stop
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/controller/controller.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/controller/controller.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Controller; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

function Controller(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'

    }
  });
  swiper.controller = {
    control: undefined
  };

  function LinearSpline(x, y) {
    var binarySearch = function search() {
      var maxIndex;
      var minIndex;
      var guess;
      return function (array, val) {
        minIndex = -1;
        maxIndex = array.length;

        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;

          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }

        return maxIndex;
      };
    }();

    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    var i1;
    var i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };

    return this;
  } // xxx: for now i will just save one spline function to to


  function getInterpolateFunction(c) {
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  }

  function setTranslate(_t, byController) {
    var controlled = swiper.controller.control;
    var multiplier;
    var controlledTranslate;
    var Swiper = swiper.constructor;

    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }

      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }

    if (Array.isArray(controlled)) {
      for (var i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }

  function setTransition(duration, byController) {
    var Swiper = swiper.constructor;
    var controlled = swiper.controller.control;
    var i;

    function setControlledTransition(c) {
      c.setTransition(duration, swiper);

      if (duration !== 0) {
        c.transitionStart();

        if (c.params.autoHeight) {
          (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            c.updateAutoHeight();
          });
        }

        c.$wrapperEl.transitionEnd(function () {
          if (!controlled) return;

          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }

          c.transitionEnd();
        });
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }

  function removeSpline() {
    if (!swiper.controller.control) return;

    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }

  on('beforeInit', function () {
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', function () {
    removeSpline();
  });
  on('resize', function () {
    removeSpline();
  });
  on('observerUpdate', function () {
    removeSpline();
  });
  on('setTranslate', function (_s, translate, byController) {
    if (!swiper.controller.control) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', function (_s, duration, byController) {
    if (!swiper.controller.control) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate: setTranslate,
    setTransition: setTransition
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-cards/effect-cards.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards/effect-cards.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCards; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");




function EffectCards(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      transformEl: null,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });

  var setTranslate = function setTranslate() {
    var slides = swiper.slides,
        activeIndex = swiper.activeIndex;
    var params = swiper.params.cardsEffect;
    var _swiper$touchEventsDa = swiper.touchEventsData,
        startTranslate = _swiper$touchEventsDa.startTranslate,
        isTouched = _swiper$touchEventsDa.isTouched;
    var currentTranslate = swiper.translate;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideProgress = $slideEl[0].progress;
      var progress = Math.min(Math.max(slideProgress, -4), 4);
      var offset = $slideEl[0].swiperSlideOffset;

      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.$wrapperEl.transform("translateX(".concat(swiper.minTranslate(), "px)"));
      }

      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }

      var tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      var tY = 0;
      var tZ = -100 * Math.abs(progress);
      var scale = 1;
      var rotate = -params.perSlideRotate * progress;
      var tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      var slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      var isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      var isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;

      if (isSwipeToNext || isSwipeToPrev) {
        var subProgress = Math.pow(1 - Math.abs((Math.abs(progress) - 0.5) / 0.5), 0.5);
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = "".concat(-25 * subProgress * Math.abs(progress), "%");
      }

      if (progress < 0) {
        // next
        tX = "calc(".concat(tX, "px + (").concat(tXAdd * Math.abs(progress), "%))");
      } else if (progress > 0) {
        // prev
        tX = "calc(".concat(tX, "px + (-").concat(tXAdd * Math.abs(progress), "%))");
      } else {
        tX = "".concat(tX, "px");
      }

      if (!swiper.isHorizontal()) {
        var prevY = tY;
        tY = tX;
        tX = prevY;
      }

      var scaleString = progress < 0 ? "".concat(1 + (1 - scale) * progress) : "".concat(1 - (1 - scale) * progress);
      var transform = "\n        translate3d(".concat(tX, ", ").concat(tY, ", ").concat(tZ, "px)\n        rotateZ(").concat(params.rotate ? rotate : 0, "deg)\n        scale(").concat(scaleString, ")\n      ");

      if (params.slideShadows) {
        // Set shadows
        var $shadowEl = $slideEl.find('.swiper-slide-shadow');

        if ($shadowEl.length === 0) {
          $shadowEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl);
        }

        if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      var $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, $slideEl);
      $targetEl.transform(transform);
    }
  };

  var setTransition = function setTransition(duration) {
    var transformEl = swiper.params.cardsEffect.transformEl;
    var $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
      swiper: swiper,
      duration: duration,
      transformEl: transformEl
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'cards',
    swiper: swiper,
    on: on,
    setTranslate: setTranslate,
    setTransition: setTransition,
    perspective: function perspective() {
      return true;
    },
    overwriteParams: function overwriteParams() {
      return {
        watchSlidesProgress: true,
        virtualTranslate: !swiper.params.cssMode
      };
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCoverflow; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");



function EffectCoverflow(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true,
      transformEl: null
    }
  });

  var setTranslate = function setTranslate() {
    var swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        slides = swiper.slides,
        slidesSizesGrid = swiper.slidesSizesGrid;
    var params = swiper.params.coverflowEffect;
    var isHorizontal = swiper.isHorizontal();
    var transform = swiper.translate;
    var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    var rotate = isHorizontal ? params.rotate : -params.rotate;
    var translate = params.depth; // Each slide offset from center

    for (var i = 0, length = slides.length; i < length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideSize = slidesSizesGrid[i];
      var slideOffset = $slideEl[0].swiperSlideOffset;
      var centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      var offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      var translateZ = -translate * Math.abs(offsetMultiplier);
      var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }

      var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      var slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg) scale(").concat(scale, ")");
      var $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, $slideEl);
      $targetEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      if (params.slideShadows) {
        // Set shadows
        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl, isHorizontal ? 'left' : 'top');
        }

        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl, isHorizontal ? 'right' : 'bottom');
        }

        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };

  var setTransition = function setTransition(duration) {
    var transformEl = swiper.params.coverflowEffect.transformEl;
    var $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'coverflow',
    swiper: swiper,
    on: on,
    setTranslate: setTranslate,
    setTransition: setTransition,
    perspective: function perspective() {
      return true;
    },
    overwriteParams: function overwriteParams() {
      return {
        watchSlidesProgress: true
      };
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-creative/effect-creative.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative/effect-creative.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCreative; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");




function EffectCreative(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
  extendParams({
    creativeEffect: {
      transformEl: null,
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });

  var getTranslateValue = function getTranslateValue(value) {
    if (typeof value === 'string') return value;
    return "".concat(value, "px");
  };

  var setTranslate = function setTranslate() {
    var slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl,
        slidesSizesGrid = swiper.slidesSizesGrid;
    var params = swiper.params.creativeEffect;
    var multiplier = params.progressMultiplier;
    var isCenteredSlides = swiper.params.centeredSlides;

    if (isCenteredSlides) {
      var margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      $wrapperEl.transform("translateX(calc(50% - ".concat(margin, "px))"));
    }

    var _loop = function _loop(i) {
      var $slideEl = slides.eq(i);
      var slideProgress = $slideEl[0].progress;
      var progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
      var originalProgress = progress;

      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
      }

      var offset = $slideEl[0].swiperSlideOffset;
      var t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      var r = [0, 0, 0];
      var custom = false;

      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }

      var data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };

      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      } // set translate


      t.forEach(function (value, index) {
        t[index] = "calc(".concat(value, "px + (").concat(getTranslateValue(data.translate[index]), " * ").concat(Math.abs(progress * multiplier), "))");
      }); // set rotates

      r.forEach(function (value, index) {
        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
      });
      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      var translateString = t.join(', ');
      var rotateString = "rotateX(".concat(r[0], "deg) rotateY(").concat(r[1], "deg) rotateZ(").concat(r[2], "deg)");
      var scaleString = originalProgress < 0 ? "scale(".concat(1 + (1 - data.scale) * originalProgress * multiplier, ")") : "scale(".concat(1 - (1 - data.scale) * originalProgress * multiplier, ")");
      var opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      var transform = "translate3d(".concat(translateString, ") ").concat(rotateString, " ").concat(scaleString); // Set shadows

      if (custom && data.shadow || !custom) {
        var $shadowEl = $slideEl.children('.swiper-slide-shadow');

        if ($shadowEl.length === 0 && data.shadow) {
          $shadowEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl);
        }

        if ($shadowEl.length) {
          var shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }

      var $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, $slideEl);
      $targetEl.transform(transform).css({
        opacity: opacityString
      });

      if (data.origin) {
        $targetEl.css('transform-origin', data.origin);
      }
    };

    for (var i = 0; i < slides.length; i += 1) {
      _loop(i);
    }
  };

  var setTransition = function setTransition(duration) {
    var transformEl = swiper.params.creativeEffect.transformEl;
    var $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
      swiper: swiper,
      duration: duration,
      transformEl: transformEl,
      allSlides: true
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'creative',
    swiper: swiper,
    on: on,
    setTranslate: setTranslate,
    setTransition: setTransition,
    perspective: function perspective() {
      return swiper.params.creativeEffect.perspective;
    },
    overwriteParams: function overwriteParams() {
      return {
        watchSlidesProgress: true,
        virtualTranslate: !swiper.params.cssMode
      };
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-cube/effect-cube.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube/effect-cube.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCube; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");


function EffectCube(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });

  var createSlideShadows = function createSlideShadows($slideEl, progress, isHorizontal) {
    var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
    var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

    if (shadowBefore.length === 0) {
      shadowBefore = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
      $slideEl.append(shadowBefore);
    }

    if (shadowAfter.length === 0) {
      shadowAfter = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
      $slideEl.append(shadowAfter);
    }

    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
  };

  var recreateShadows = function recreateShadows() {
    // create new ones
    var isHorizontal = swiper.isHorizontal();
    swiper.slides.each(function (slideEl) {
      var progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl), progress, isHorizontal);
    });
  };

  var setTranslate = function setTranslate() {
    var $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides,
        swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        rtl = swiper.rtlTranslate,
        swiperSize = swiper.size,
        browser = swiper.browser;
    var params = swiper.params.cubeEffect;
    var isHorizontal = swiper.isHorizontal();
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var wrapperRotate = 0;
    var $cubeShadowEl;

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }

        $cubeShadowEl.css({
          height: "".concat(swiperWidth, "px")
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideIndex = i;

      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }

      var slideAngle = slideIndex * 90;
      var round = Math.floor(slideAngle / 360);

      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }

      var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      var tx = 0;
      var ty = 0;
      var tz = 0;

      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }

      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      var transform = "rotateX(".concat(isHorizontal ? 0 : -slideAngle, "deg) rotateY(").concat(isHorizontal ? slideAngle : 0, "deg) translate3d(").concat(tx, "px, ").concat(ty, "px, ").concat(tz, "px)");

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }

      $slideEl.transform(transform);

      if (params.slideShadows) {
        createSlideShadows($slideEl, progress, isHorizontal);
      }
    }

    $wrapperEl.css({
      '-webkit-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
      'transform-origin': "50% 50% -".concat(swiperSize / 2, "px")
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform("translate3d(0px, ".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")"));
      } else {
        var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        var scale1 = params.shadowScale;
        var scale2 = params.shadowScale / multiplier;
        var offset = params.shadowOffset;
        $cubeShadowEl.transform("scale3d(".concat(scale1, ", 1, ").concat(scale2, ") translate3d(0px, ").concat(swiperHeight / 2 + offset, "px, ").concat(-swiperHeight / 2 / scale2, "px) rotateX(-90deg)"));
      }
    }

    var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform("translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(swiper.isHorizontal() ? 0 : wrapperRotate, "deg) rotateY(").concat(swiper.isHorizontal() ? -wrapperRotate : 0, "deg)"));
    $wrapperEl[0].style.setProperty('--swiper-cube-translate-z', "".concat(zFactor, "px"));
  };

  var setTransition = function setTransition(duration) {
    var $el = swiper.$el,
        slides = swiper.slides;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'cube',
    swiper: swiper,
    on: on,
    setTranslate: setTranslate,
    setTransition: setTransition,
    recreateShadows: recreateShadows,
    getEffectParams: function getEffectParams() {
      return swiper.params.cubeEffect;
    },
    perspective: function perspective() {
      return true;
    },
    overwriteParams: function overwriteParams() {
      return {
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      };
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade/effect-fade.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade/effect-fade.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectFade; }
/* harmony export */ });
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");



function EffectFade(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
  extendParams({
    fadeEffect: {
      crossFade: false,
      transformEl: null
    }
  });

  var setTranslate = function setTranslate() {
    var slides = swiper.slides;
    var params = swiper.params.fadeEffect;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper.slides.eq(i);
      var offset = $slideEl[0].swiperSlideOffset;
      var tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      var $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params, $slideEl);
      $targetEl.css({
        opacity: slideOpacity
      }).transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)"));
    }
  };

  var setTransition = function setTransition(duration) {
    var transformEl = swiper.params.fadeEffect.transformEl;
    var $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
      swiper: swiper,
      duration: duration,
      transformEl: transformEl,
      allSlides: true
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    effect: 'fade',
    swiper: swiper,
    on: on,
    setTranslate: setTranslate,
    setTransition: setTransition,
    overwriteParams: function overwriteParams() {
      return {
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      };
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-flip/effect-flip.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip/effect-flip.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectFlip; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");





function EffectFlip(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
      transformEl: null
    }
  });

  var createSlideShadows = function createSlideShadows($slideEl, progress, params) {
    var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
    var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

    if (shadowBefore.length === 0) {
      shadowBefore = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }

    if (shadowAfter.length === 0) {
      shadowAfter = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }

    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
  };

  var recreateShadows = function recreateShadows() {
    // Set shadows
    var params = swiper.params.flipEffect;
    swiper.slides.each(function (slideEl) {
      var $slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl);
      var progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }

      createSlideShadows($slideEl, progress, params);
    });
  };

  var setTranslate = function setTranslate() {
    var slides = swiper.slides,
        rtl = swiper.rtlTranslate;
    var params = swiper.params.flipEffect;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }

      var offset = $slideEl[0].swiperSlideOffset;
      var rotate = -180 * progress;
      var rotateY = rotate;
      var rotateX = 0;
      var tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (params.slideShadows) {
        createSlideShadows($slideEl, progress, params);
      }

      var transform = "translate3d(".concat(tx, "px, ").concat(ty, "px, 0px) rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)");
      var $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_3__["default"])(params, $slideEl);
      $targetEl.transform(transform);
    }
  };

  var setTransition = function setTransition(duration) {
    var transformEl = swiper.params.flipEffect.transformEl;
    var $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
      swiper: swiper,
      duration: duration,
      transformEl: transformEl
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
    effect: 'flip',
    swiper: swiper,
    on: on,
    setTranslate: setTranslate,
    setTransition: setTransition,
    recreateShadows: recreateShadows,
    getEffectParams: function getEffectParams() {
      return swiper.params.flipEffect;
    },
    perspective: function perspective() {
      return true;
    },
    overwriteParams: function overwriteParams() {
      return {
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      };
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/free-mode/free-mode.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode/free-mode.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ freeMode; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function freeMode(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      emit = _ref.emit,
      once = _ref.once;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });

  function onTouchStart() {
    var translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }

  function onTouchMove() {
    var data = swiper.touchEventsData,
        touches = swiper.touches; // Velocity

    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)()
    });
  }

  function onTouchEnd(_ref2) {
    var currentPos = _ref2.currentPos;
    var params = swiper.params,
        $wrapperEl = swiper.$wrapperEl,
        rtl = swiper.rtlTranslate,
        snapGrid = swiper.snapGrid,
        data = swiper.touchEventsData; // Time diff

    var touchEndTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
    var timeDiff = touchEndTime - data.touchStartTime;

    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        var lastMoveEvent = data.velocities.pop();
        var velocityEvent = data.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      var momentumDuration = 1000 * params.freeMode.momentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      var needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        var nextSlide;

        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        once('transitionEnd', function () {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(function () {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }

    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }

  Object.assign(swiper, {
    freeMode: {
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onTouchEnd: onTouchEnd
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/grid/grid.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/grid/grid.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Grid; }
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Grid(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams;
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  var slidesNumberEvenToRows;
  var slidesPerRow;
  var numFullColumns;

  var initSlides = function initSlides(slidesLength) {
    var slidesPerView = swiper.params.slidesPerView;
    var _swiper$params$grid = swiper.params.grid,
        rows = _swiper$params$grid.rows,
        fill = _swiper$params$grid.fill;
    slidesPerRow = slidesNumberEvenToRows / rows;
    numFullColumns = Math.floor(slidesLength / rows);

    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }

    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
  };

  var updateSlide = function updateSlide(i, slide, slidesLength, getDirectionLabel) {
    var _swiper$params = swiper.params,
        slidesPerGroup = _swiper$params.slidesPerGroup,
        spaceBetween = _swiper$params.spaceBetween;
    var _swiper$params$grid2 = swiper.params.grid,
        rows = _swiper$params$grid2.rows,
        fill = _swiper$params$grid2.fill; // Set slides order

    var newSlideOrderIndex;
    var column;
    var row;

    if (fill === 'row' && slidesPerGroup > 1) {
      var groupIndex = Math.floor(i / (slidesPerGroup * rows));
      var slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      var columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.css({
        '-webkit-order': newSlideOrderIndex,
        order: newSlideOrderIndex
      });
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;

      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;

        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }

    slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && "".concat(spaceBetween, "px") : '');
  };

  var updateWrapperSize = function updateWrapperSize(slideSize, snapGrid, getDirectionLabel) {
    var _swiper$params2 = swiper.params,
        spaceBetween = _swiper$params2.spaceBetween,
        centeredSlides = _swiper$params2.centeredSlides,
        roundLengths = _swiper$params2.roundLengths;
    var rows = swiper.params.grid.rows;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    swiper.$wrapperEl.css(_defineProperty({}, getDirectionLabel('width'), "".concat(swiper.virtualSize + spaceBetween, "px")));

    if (centeredSlides) {
      snapGrid.splice(0, snapGrid.length);
      var newSlidesGrid = [];

      for (var i = 0; i < snapGrid.length; i += 1) {
        var slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid.push.apply(snapGrid, newSlidesGrid);
    }
  };

  swiper.grid = {
    initSlides: initSlides,
    updateSlide: updateSlide,
    updateWrapperSize: updateWrapperSize
  };
}

/***/ }),

/***/ "./node_modules/swiper/modules/hash-navigation/hash-navigation.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation/hash-navigation.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HashNavigation; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function HashNavigation(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      emit = _ref.emit,
      on = _ref.on;
  var initialized = false;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  });

  var onHashChange = function onHashChange() {
    emit('hashChange');
    var newHash = document.location.hash.replace('#', '');
    var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

    if (newHash !== activeSlideHash) {
      var newIndex = swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-hash=\"").concat(newHash, "\"]")).index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  };

  var setHash = function setHash() {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;

    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, "#".concat(swiper.slides.eq(swiper.activeIndex).attr('data-hash')) || 0);
      emit('hashSet');
    } else {
      var slide = swiper.slides.eq(swiper.activeIndex);
      var hash = slide.attr('data-hash') || slide.attr('data-history');
      document.location.hash = hash || '';
      emit('hashSet');
    }
  };

  var init = function init() {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    var hash = document.location.hash.replace('#', '');

    if (hash) {
      var speed = 0;

      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHash = slide.attr('data-hash') || slide.attr('data-history');

        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }

    if (swiper.params.hashNavigation.watchState) {
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(window).on('hashchange', onHashChange);
    }
  };

  var destroy = function destroy() {
    if (swiper.params.hashNavigation.watchState) {
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(window).off('hashchange', onHashChange);
    }
  };

  on('init', function () {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', function () {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', function () {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', function () {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/history/history.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/modules/history/history.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ History; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function History(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  var initialized = false;
  var paths = {};

  var slugify = function slugify(text) {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };

  var getPathValues = function getPathValues(urlOverride) {
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    var location;

    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }

    var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
      return part !== '';
    });
    var total = pathArray.length;
    var key = pathArray[total - 2];
    var value = pathArray[total - 1];
    return {
      key: key,
      value: value
    };
  };

  var setHistory = function setHistory(key, index) {
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!initialized || !swiper.params.history.enabled) return;
    var location;

    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }

    var slide = swiper.slides.eq(index);
    var value = slugify(slide.attr('data-history'));

    if (swiper.params.history.root.length > 0) {
      var root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = "".concat(root, "/").concat(key, "/").concat(value);
    } else if (!location.pathname.includes(key)) {
      value = "".concat(key, "/").concat(value);
    }

    if (swiper.params.history.keepQuery) {
      value += location.search;
    }

    var currentState = window.history.state;

    if (currentState && currentState.value === value) {
      return;
    }

    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value: value
      }, null, value);
    } else {
      window.history.pushState({
        value: value
      }, null, value);
    }
  };

  var scrollToSlide = function scrollToSlide(speed, value, runCallbacks) {
    if (value) {
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHistory = slugify(slide.attr('data-history'));

        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };

  var setHistoryPopState = function setHistoryPopState() {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };

  var init = function init() {
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!swiper.params.history) return;

    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }

    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) return;
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);

    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };

  var destroy = function destroy() {
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };

  on('init', function () {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', function () {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', function () {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', function () {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/keyboard/keyboard.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard/keyboard.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Keyboard; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* eslint-disable consistent-return */


function Keyboard(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });

  function handle(event) {
    if (!swiper.enabled) return;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var kc = e.keyCode || e.charCode;
    var pageUpDown = swiper.params.keyboard.pageUpDown;
    var isPageUp = pageUpDown && kc === 33;
    var isPageDown = pageUpDown && kc === 34;
    var isArrowLeft = kc === 37;
    var isArrowRight = kc === 39;
    var isArrowUp = kc === 38;
    var isArrowDown = kc === 40; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }

    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }

    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }

    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }

    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      var inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents(".".concat(swiper.params.slideClass)).length > 0 && swiper.$el.parents(".".concat(swiper.params.slideActiveClass)).length === 0) {
        return undefined;
      }

      var $el = swiper.$el;
      var swiperWidth = $el[0].clientWidth;
      var swiperHeight = $el[0].clientHeight;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

          inView = true;
        }
      }

      if (!inView) return undefined;
    }

    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }

    emit('keyPress', kc);
    return undefined;
  }

  function enable() {
    if (swiper.keyboard.enabled) return;
    (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document).on('keydown', handle);
    swiper.keyboard.enabled = true;
  }

  function disable() {
    if (!swiper.keyboard.enabled) return;
    (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document).off('keydown', handle);
    swiper.keyboard.enabled = false;
  }

  on('init', function () {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', function () {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable: enable,
    disable: disable
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/lazy/lazy.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/lazy/lazy.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Lazy; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function Lazy(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
  extendParams({
    lazy: {
      checkInView: false,
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      scrollingElement: '',
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  });
  swiper.lazy = {};
  var scrollHandlerAttached = false;
  var initialImageLoaded = false;

  function loadInSlide(index) {
    var loadInDuplicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var $slideEl = isVirtual ? swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(index, "\"]")) : swiper.slides.eq(index);
    var $images = $slideEl.find(".".concat(params.elementClass, ":not(.").concat(params.loadedClass, "):not(.").concat(params.loadingClass, ")"));

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images.push($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(function (imageEl) {
      var $imageEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl);
      $imageEl.addClass(params.loadingClass);
      var background = $imageEl.attr('data-background');
      var src = $imageEl.attr('data-src');
      var srcset = $imageEl.attr('data-srcset');
      var sizes = $imageEl.attr('data-sizes');
      var $pictureEl = $imageEl.parent('picture');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

        if (background) {
          $imageEl.css('background-image', "url(\"".concat(background, "\")"));
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }

          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }

          if ($pictureEl.length) {
            $pictureEl.children('source').each(function (sourceEl) {
              var $source = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(sourceEl);

              if ($source.attr('data-srcset')) {
                $source.attr('srcset', $source.attr('data-srcset'));
                $source.removeAttr('data-srcset');
              }
            });
          }

          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(".".concat(params.preloaderClass)).remove();

        if (swiper.params.loop && loadInDuplicate) {
          var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(slideOriginalIndex, "\"]:not(.").concat(swiper.params.slideDuplicateClass, ")"));
            loadInSlide(originalSlide.index(), false);
          } else {
            var duplicatedSlide = swiper.$wrapperEl.children(".".concat(swiper.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(slideOriginalIndex, "\"]"));
            loadInSlide(duplicatedSlide.index(), false);
          }
        }

        emit('lazyImageReady', $slideEl[0], $imageEl[0]);

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      });
      emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  }

  function load() {
    var $wrapperEl = swiper.$wrapperEl,
        swiperParams = swiper.params,
        slides = swiper.slides,
        activeIndex = swiper.activeIndex;
    var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    var params = swiperParams.lazy;
    var slidesPerView = swiperParams.slidesPerView;

    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children(".".concat(swiperParams.slideClass, "[data-swiper-slide-index=\"").concat(index, "\"]")).length) {
          return true;
        }
      } else if (slides[index]) return true;

      return false;
    }

    function slideIndex(slideEl) {
      if (isVirtual) {
        return (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).attr('data-swiper-slide-index');
      }

      return (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).index();
    }

    if (!initialImageLoaded) initialImageLoaded = true;

    if (swiper.params.watchSlidesProgress) {
      $wrapperEl.children(".".concat(swiperParams.slideVisibleClass)).each(function (slideEl) {
        var index = isVirtual ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).attr('data-swiper-slide-index') : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).index();
        loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) loadInSlide(i);
      }
    } else {
      loadInSlide(activeIndex);
    }

    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        var amount = params.loadPrevNextAmount;
        var spv = Math.ceil(slidesPerView);
        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (var _i = activeIndex + spv; _i < maxIndex; _i += 1) {
          if (slideExist(_i)) loadInSlide(_i);
        } // Prev Slides


        for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
          if (slideExist(_i2)) loadInSlide(_i2);
        }
      } else {
        var nextSlide = $wrapperEl.children(".".concat(swiperParams.slideNextClass));
        if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
        var prevSlide = $wrapperEl.children(".".concat(swiperParams.slidePrevClass));
        if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
      }
    }
  }

  function checkInViewOnLoad() {
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!swiper || swiper.destroyed) return;
    var $scrollElement = swiper.params.lazy.scrollingElement ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.lazy.scrollingElement) : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(window);
    var isWindow = $scrollElement[0] === window;
    var scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
    var scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
    var swiperOffset = swiper.$el.offset();
    var rtl = swiper.rtlTranslate;
    var inView = false;
    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
    var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

    for (var i = 0; i < swiperCoord.length; i += 1) {
      var point = swiperCoord[i];

      if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

        inView = true;
      }
    }

    var passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (inView) {
      load();
      $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
    } else if (!scrollHandlerAttached) {
      scrollHandlerAttached = true;
      $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
    }
  }

  on('beforeInit', function () {
    if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
      swiper.params.preloadImages = false;
    }
  });
  on('init', function () {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('scroll', function () {
    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
      load();
    }
  });
  on('scrollbarDragMove resize _freeModeNoMomentumRelease', function () {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('transitionStart', function () {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    }
  });
  on('transitionEnd', function () {
    if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('slideChange', function () {
    var _swiper$params = swiper.params,
        lazy = _swiper$params.lazy,
        cssMode = _swiper$params.cssMode,
        watchSlidesProgress = _swiper$params.watchSlidesProgress,
        touchReleaseOnEdges = _swiper$params.touchReleaseOnEdges,
        resistanceRatio = _swiper$params.resistanceRatio;

    if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
      load();
    }
  });
  on('destroy', function () {
    if (!swiper.$el) return;
    swiper.$el.find(".".concat(swiper.params.lazy.loadingClass)).removeClass(swiper.params.lazy.loadingClass);
  });
  Object.assign(swiper.lazy, {
    load: load,
    loadInSlide: loadInSlide
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/manipulation.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/manipulation.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Manipulation; }
/* harmony export */ });
/* harmony import */ var _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/appendSlide.js */ "./node_modules/swiper/modules/manipulation/methods/appendSlide.js");
/* harmony import */ var _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/prependSlide.js */ "./node_modules/swiper/modules/manipulation/methods/prependSlide.js");
/* harmony import */ var _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/addSlide.js */ "./node_modules/swiper/modules/manipulation/methods/addSlide.js");
/* harmony import */ var _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/removeSlide.js */ "./node_modules/swiper/modules/manipulation/methods/removeSlide.js");
/* harmony import */ var _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/removeAllSlides.js */ "./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js");





function Manipulation(_ref) {
  var swiper = _ref.swiper;
  Object.assign(swiper, {
    appendSlide: _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__["default"].bind(swiper),
    prependSlide: _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper),
    addSlide: _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper),
    removeSlide: _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper),
    removeAllSlides: _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__["default"].bind(swiper)
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/addSlide.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/addSlide.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addSlide; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function addSlide(index, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(".".concat(params.slideClass));
  }

  var baseLength = swiper.slides.length;

  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];

  for (var i = baseLength - 1; i >= index; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (_typeof(slides) === 'object' && 'length' in slides) {
    for (var _i = 0; _i < slides.length; _i += 1) {
      if (slides[_i]) $wrapperEl.append(slides[_i]);
    }

    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
    $wrapperEl.append(slidesBuffer[_i2]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/appendSlide.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/appendSlide.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ appendSlide; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (_typeof(slides) === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/prependSlide.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/prependSlide.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ prependSlide; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
  }

  var newActiveIndex = activeIndex + 1;

  if (_typeof(slides) === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeAllSlides; }
/* harmony export */ });
function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];

  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/removeSlide.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/removeSlide.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeSlide; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(".".concat(params.slideClass));
  }

  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;

  if (_typeof(slidesIndexes) === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "./node_modules/swiper/modules/mousewheel/mousewheel.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel/mousewheel.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Mousewheel; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* eslint-disable consistent-return */



function Mousewheel(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  var timeout;
  var lastScrollTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();
  var lastEventBeforeSnap;
  var recentWheelEvents = [];

  function normalize(e) {
    // Reasonable defaults
    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;
    var sX = 0;
    var sY = 0; // spinX, spinY

    var pX = 0;
    var pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }

    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }

    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }

    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll


    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }

    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined


    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }

  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }

  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }

  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }

    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    } // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).


    if (newEvent.delta >= 6 && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    } // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.


    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    } // If you got here is because an animation has been triggered so store the current time


    lastScrollTime = new window.Date().getTime(); // Return false as a default

    return false;
  }

  function releaseScroll(newEvent) {
    var params = swiper.params.mousewheel;

    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }

    return false;
  }

  function handle(event) {
    var e = event;
    var disableParentSwiper = true;
    if (!swiper.enabled) return;
    var params = swiper.params.mousewheel;

    if (swiper.params.cssMode) {
      e.preventDefault();
    }

    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var delta = 0;
    var rtlFactor = swiper.rtlTranslate ? -1 : 1;
    var data = normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;
    if (params.invert) delta = -delta; // Get the scroll positions

    var positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.

    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      var newEvent = {
        time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      }; // Keep the most recent events

      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.

      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      } // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.


      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:
      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      var _newEvent = {
        time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;

      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;

        if (swiper.params.loop) {
          swiper.loopFix();
        }

        var position = swiper.getTranslate() + delta * params.sensitivity;
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;

          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          var _prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;

          var firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(_newEvent);

          if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            var snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = _newEvent;
            recentWheelEvents.splice(0);
            timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(function () {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(function () {
              var snapToThreshold = 0.5;
              lastEventBeforeSnap = _newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        } // Emit event


        if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay

        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }

  function events(method) {
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    target[method]('mouseenter', handleMouseEnter);
    target[method]('mouseleave', handleMouseLeave);
    target[method]('wheel', handle);
  }

  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }

    if (swiper.mousewheel.enabled) return false;
    events('on');
    swiper.mousewheel.enabled = true;
    return true;
  }

  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }

    if (!swiper.mousewheel.enabled) return false;
    events('off');
    swiper.mousewheel.enabled = false;
    return true;
  }

  on('init', function () {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }

    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', function () {
    if (swiper.params.cssMode) {
      enable();
    }

    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable: enable,
    disable: disable
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/navigation/navigation.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/navigation/navigation.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navigation; }
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function Navigation(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };

  function getEl(el) {
    var $el;

    if (el) {
      $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el);

      if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
        $el = swiper.$el.find(el);
      }
    }

    return $el;
  }

  function toggleEl($el, disabled) {
    var params = swiper.params.navigation;

    if ($el && $el.length > 0) {
      $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
      if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;

      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }
  }

  function update() {
    // Update Navigation Buttons
    if (swiper.params.loop) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;
    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
  }

  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }

  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }

  function init() {
    var params = swiper.params.navigation;
    swiper.params.navigation = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    var $nextEl = getEl(params.nextEl);
    var $prevEl = getEl(params.prevEl);

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', onPrevClick);
    }

    Object.assign(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });

    if (!swiper.enabled) {
      if ($nextEl) $nextEl.addClass(params.lockClass);
      if ($prevEl) $prevEl.addClass(params.lockClass);
    }
  }

  function destroy() {
    var _swiper$navigation2 = swiper.navigation,
        $nextEl = _swiper$navigation2.$nextEl,
        $prevEl = _swiper$navigation2.$prevEl;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }

  on('init', function () {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', function () {
    update();
  });
  on('destroy', function () {
    destroy();
  });
  on('enable disable', function () {
    var _swiper$navigation3 = swiper.navigation,
        $nextEl = _swiper$navigation3.$nextEl,
        $prevEl = _swiper$navigation3.$prevEl;

    if ($nextEl) {
      $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }

    if ($prevEl) {
      $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }
  });
  on('click', function (_s, e) {
    var _swiper$navigation4 = swiper.navigation,
        $nextEl = _swiper$navigation4.$nextEl,
        $prevEl = _swiper$navigation4.$prevEl;
    var targetEl = e.target;

    if (swiper.params.navigation.hideOnClick && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(targetEl).is($prevEl) && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(targetEl).is($nextEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      var isHidden;

      if ($nextEl) {
        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
      } else if ($prevEl) {
        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
      }

      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }

      if ($nextEl) {
        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
      }

      if ($prevEl) {
        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  });

  var enable = function enable() {
    swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
    init();
    update();
  };

  var disable = function disable() {
    swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
    destroy();
  };

  Object.assign(swiper.navigation, {
    enable: enable,
    disable: disable,
    update: update,
    init: init,
    destroy: destroy
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/pagination/pagination.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/pagination/pagination.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ "./node_modules/swiper/shared/classes-to-selector.js");
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");



function Pagination(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
  var pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(number) {
        return number;
      },
      formatFractionTotal: function formatFractionTotal(number) {
        return number;
      },
      bulletClass: "".concat(pfx, "-bullet"),
      bulletActiveClass: "".concat(pfx, "-bullet-active"),
      modifierClass: "".concat(pfx, "-"),
      currentClass: "".concat(pfx, "-current"),
      totalClass: "".concat(pfx, "-total"),
      hiddenClass: "".concat(pfx, "-hidden"),
      progressbarFillClass: "".concat(pfx, "-progressbar-fill"),
      progressbarOppositeClass: "".concat(pfx, "-progressbar-opposite"),
      clickableClass: "".concat(pfx, "-clickable"),
      lockClass: "".concat(pfx, "-lock"),
      horizontalClass: "".concat(pfx, "-horizontal"),
      verticalClass: "".concat(pfx, "-vertical"),
      paginationDisabledClass: "".concat(pfx, "-disabled")
    }
  });
  swiper.pagination = {
    el: null,
    $el: null,
    bullets: []
  };
  var bulletSize;
  var dynamicBulletIndex = 0;

  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
  }

  function setSideBullets($bulletEl, position) {
    var bulletActiveClass = swiper.params.pagination.bulletActiveClass;
    $bulletEl[position]().addClass("".concat(bulletActiveClass, "-").concat(position))[position]().addClass("".concat(bulletActiveClass, "-").concat(position, "-").concat(position));
  }

  function update() {
    // Render || Update Pagination bullets/items
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el; // Current/Total

    var current;
    var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      var firstIndex;
      var lastIndex;
      var midIndex;

      if (params.dynamicBullets) {
        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', "".concat(bulletSize * (params.dynamicMainBullets + 4), "px"));

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);

          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }

        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(function (suffix) {
        return "".concat(params.bulletActiveClass).concat(suffix);
      }).join(' '));

      if ($el.length > 1) {
        bullets.each(function (bullet) {
          var $bullet = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bullet);
          var bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass("".concat(params.bulletActiveClass, "-main"));
            }

            if (bulletIndex === firstIndex) {
              setSideBullets($bullet, 'prev');
            }

            if (bulletIndex === lastIndex) {
              setSideBullets($bullet, 'next');
            }
          }
        });
      } else {
        var $bullet = bullets.eq(current);
        var bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          var $firstDisplayedBullet = bullets.eq(firstIndex);
          var $lastDisplayedBullet = bullets.eq(lastIndex);

          for (var i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass("".concat(params.bulletActiveClass, "-main"));
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length) {
              for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                bullets.eq(bullets.length - _i).addClass("".concat(params.bulletActiveClass, "-main"));
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass("".concat(params.bulletActiveClass, "-prev"));
            } else {
              setSideBullets($firstDisplayedBullet, 'prev');
              setSideBullets($lastDisplayedBullet, 'next');
            }
          } else {
            setSideBullets($firstDisplayedBullet, 'prev');
            setSideBullets($lastDisplayedBullet, 'next');
          }
        }
      }

      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        var bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', "".concat(bulletsOffset, "px"));
      }
    }

    if (params.type === 'fraction') {
      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      var progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      var scale = (current + 1) / total;
      var scaleX = 1;
      var scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(scaleX, ") scaleY(").concat(scaleY, ")")).transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      emit('paginationRender', $el[0]);
    } else {
      emit('paginationUpdate', $el[0]);
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  }

  function render() {
    // Render Container
    var params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    var paginationHTML = '';

    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }

      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += "<".concat(params.bulletElement, " class=\"").concat(params.bulletClass, "\"></").concat(params.bulletElement, ">");
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = "<span class=\"".concat(params.currentClass, "\"></span>") + ' / ' + "<span class=\"".concat(params.totalClass, "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = "<span class=\"".concat(params.progressbarFillClass, "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      emit('paginationRender', swiper.pagination.$el[0]);
    }
  }

  function init() {
    swiper.params.pagination = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__["default"])(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    var params = swiper.params.pagination;
    if (!params.el) return;
    var $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper

      if ($el.length > 1) {
        $el = $el.filter(function (el) {
          if ((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(el).parents('.swiper')[0] !== swiper.el) return false;
          return true;
        });
      }
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);
    $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass("".concat(params.modifierClass).concat(params.type, "-dynamic"));
      dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.bulletClass), function onClick(e) {
        e.preventDefault();
        var index = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    Object.assign(swiper.pagination, {
      $el: $el,
      el: $el[0]
    });

    if (!swiper.enabled) {
      $el.addClass(params.lockClass);
    }
  }

  function destroy() {
    var params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    var $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.bulletClass));
    }
  }

  on('init', function () {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', function () {
    if (swiper.params.loop) {
      update();
    } else if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', function () {
    if (!swiper.params.loop) {
      update();
    }
  });
  on('slidesLengthChange', function () {
    if (swiper.params.loop) {
      render();
      update();
    }
  });
  on('snapGridLengthChange', function () {
    if (!swiper.params.loop) {
      render();
      update();
    }
  });
  on('destroy', function () {
    destroy();
  });
  on('enable disable', function () {
    var $el = swiper.pagination.$el;

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
    }
  });
  on('lock unlock', function () {
    update();
  });
  on('click', function (_s, e) {
    var targetEl = e.target;
    var $el = swiper.pagination.$el;

    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      var isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);

      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }

      $el.toggleClass(swiper.params.pagination.hiddenClass);
    }
  });

  var enable = function enable() {
    swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);

    if (swiper.pagination.$el) {
      swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
    }

    init();
    render();
    update();
  };

  var disable = function disable() {
    swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);

    if (swiper.pagination.$el) {
      swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
    }

    destroy();
  };

  Object.assign(swiper.pagination, {
    enable: enable,
    disable: disable,
    render: render,
    update: update,
    init: init,
    destroy: destroy
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/parallax/parallax.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/parallax/parallax.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Parallax; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");

function Parallax(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
  extendParams({
    parallax: {
      enabled: false
    }
  });

  var setTransform = function setTransform(el, progress) {
    var rtl = swiper.rtl;
    var $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(el);
    var rtlFactor = rtl ? -1 : 1;
    var p = $el.attr('data-swiper-parallax') || '0';
    var x = $el.attr('data-swiper-parallax-x');
    var y = $el.attr('data-swiper-parallax-y');
    var scale = $el.attr('data-swiper-parallax-scale');
    var opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = "".concat(parseInt(x, 10) * progress * rtlFactor, "%");
    } else {
      x = "".concat(x * progress * rtlFactor, "px");
    }

    if (y.indexOf('%') >= 0) {
      y = "".concat(parseInt(y, 10) * progress, "%");
    } else {
      y = "".concat(y * progress, "px");
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }

    if (typeof scale === 'undefined' || scale === null) {
      $el.transform("translate3d(".concat(x, ", ").concat(y, ", 0px)"));
    } else {
      var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform("translate3d(".concat(x, ", ").concat(y, ", 0px) scale(").concat(currentScale, ")"));
    }
  };

  var setTranslate = function setTranslate() {
    var $el = swiper.$el,
        slides = swiper.slides,
        progress = swiper.progress,
        snapGrid = swiper.snapGrid;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
      setTransform(el, progress);
    });
    slides.each(function (slideEl, slideIndex) {
      var slideProgress = slideEl.progress;

      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }

      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
        setTransform(el, slideProgress);
      });
    });
  };

  var setTransition = function setTransition() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : swiper.params.speed;
    var $el = swiper.$el;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (parallaxEl) {
      var $parallaxEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(parallaxEl);
      var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  };

  on('beforeInit', function () {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', function () {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', function () {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', function (_swiper, duration) {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/scrollbar/scrollbar.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar/scrollbar.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Scrollbar; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");




function Scrollbar(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var isTouched = false;
  var timeout = null;
  var dragTimeout = null;
  var dragStartPos;
  var dragSize;
  var trackSize;
  var divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical"
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null,
    $el: null,
    $dragEl: null
  };

  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate,
        progress = swiper.progress;
    var $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    var params = swiper.params.scrollbar;
    var newSize = dragSize;
    var newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      $dragEl.transform("translate3d(".concat(newPos, "px, 0, 0)"));
      $dragEl[0].style.width = "".concat(newSize, "px");
    } else {
      $dragEl.transform("translate3d(0px, ".concat(newPos, "px, 0)"));
      $dragEl[0].style.height = "".concat(newSize, "px");
    }

    if (params.hide) {
      clearTimeout(timeout);
      $el[0].style.opacity = 1;
      timeout = setTimeout(function () {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  }

  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  }

  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar;
    var $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = "".concat(dragSize, "px");
    } else {
      $dragEl[0].style.height = "".concat(dragSize, "px");
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    }
  }

  function getPointerPosition(e) {
    if (swiper.isHorizontal()) {
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
    }

    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
  }

  function setDragPosition(e) {
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
    var $el = scrollbar.$el;
    var positionRatio;
    positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  function onDragStart(e) {
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    isTouched = true;
    dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    setDragPosition(e);
    clearTimeout(dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }

    emit('scrollbarDragStart', e);
  }

  function onDragMove(e) {
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    if (!isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    emit('scrollbarDragMove', e);
  }

  function onDragEnd(e) {
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el;
    if (!isTouched) return;
    isTouched = false;

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }

    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(function () {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }

    emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }

  function events(method) {
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
    var $el = scrollbar.$el;
    if (!$el) return;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    var eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';

    if (!support.touch) {
      target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
      document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
      document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
    } else {
      target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
      target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
      target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
    }
  }

  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }

  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }

  function init() {
    var scrollbar = swiper.scrollbar,
        $swiperEl = swiper.$el;
    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_3__["default"])(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    var params = swiper.params.scrollbar;
    if (!params.el) return;
    var $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    var $dragEl = $el.find(".".concat(swiper.params.scrollbar.dragClass));

    if ($dragEl.length === 0) {
      $dragEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])("<div class=\"".concat(swiper.params.scrollbar.dragClass, "\"></div>"));
      $el.append($dragEl);
    }

    Object.assign(scrollbar, {
      $el: $el,
      el: $el[0],
      $dragEl: $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      enableDraggable();
    }

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
  }

  function destroy() {
    var params = swiper.params.scrollbar;
    var $el = swiper.scrollbar.$el;

    if ($el) {
      $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    }

    disableDraggable();
  }

  on('init', function () {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock', function () {
    updateSize();
  });
  on('setTranslate', function () {
    setTranslate();
  });
  on('setTransition', function (_s, duration) {
    setTransition(duration);
  });
  on('enable disable', function () {
    var $el = swiper.scrollbar.$el;

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
  });
  on('destroy', function () {
    destroy();
  });

  var enable = function enable() {
    swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);

    if (swiper.scrollbar.$el) {
      swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
    }

    init();
    updateSize();
    setTranslate();
  };

  var disable = function disable() {
    swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);

    if (swiper.scrollbar.$el) {
      swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
    }

    destroy();
  };

  Object.assign(swiper.scrollbar, {
    enable: enable,
    disable: disable,
    updateSize: updateSize,
    setTranslate: setTranslate,
    init: init,
    destroy: destroy
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/thumbs/thumbs.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs/thumbs.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Thumb; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function Thumb(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  var initialized = false;
  var swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };

  function onThumbClick() {
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    var clickedIndex = thumbsSwiper.clickedIndex;
    var clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    var slideToIndex;

    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }

    if (swiper.params.loop) {
      var currentIndex = swiper.activeIndex;

      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }

      var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"".concat(slideToIndex, "\"]")).eq(0).index();
      var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"".concat(slideToIndex, "\"]")).eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }

    swiper.slideTo(slideToIndex);
  }

  function init() {
    var thumbsParams = swiper.params.thumbs;
    if (initialized) return false;
    initialized = true;
    var SwiperClass = swiper.constructor;

    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(thumbsParams.swiper)) {
      var thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }

    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }

  function update(initial) {
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView; // Activate thumbs

    var thumbsToActivate = 1;
    var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }

    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (var i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(swiper.realIndex + i, "\"]")).addClass(thumbActiveClass);
      }
    } else {
      for (var _i = 0; _i < thumbsToActivate; _i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
      }
    }

    var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      var currentThumbsIndex = thumbsSwiper.activeIndex;
      var newThumbsIndex;
      var direction;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"".concat(swiper.realIndex, "\"]")).eq(0).index();
        var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"".concat(swiper.realIndex, "\"]")).eq(0).index();

        if (typeof prevThumbsIndex === 'undefined') {
          newThumbsIndex = nextThumbsIndex;
        } else if (typeof nextThumbsIndex === 'undefined') {
          newThumbsIndex = prevThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = nextThumbsIndex;
        } else {
          newThumbsIndex = prevThumbsIndex;
        }

        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }

      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }

      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) {// newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }

  on('beforeInit', function () {
    var thumbs = swiper.params.thumbs;
    if (!thumbs || !thumbs.swiper) return;
    init();
    update(true);
  });
  on('slideChange update resize observerUpdate', function () {
    update();
  });
  on('setTransition', function (_s, duration) {
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', function () {
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;

    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init: init,
    update: update
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/virtual/virtual.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/modules/virtual/virtual.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Virtual; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



function Virtual(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  var cssModeTimeout;
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };

  function renderSlide(slide, index) {
    var params = swiper.params.virtual;

    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }

    var $slideEl = params.renderSlide ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params.renderSlide.call(swiper, slide, index)) : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"".concat(swiper.params.slideClass, "\" data-swiper-slide-index=\"").concat(index, "\">").concat(slide, "</div>"));
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  }

  function update(force) {
    var _swiper$params = swiper.params,
        slidesPerView = _swiper$params.slidesPerView,
        slidesPerGroup = _swiper$params.slidesPerGroup,
        centeredSlides = _swiper$params.centeredSlides;
    var _swiper$params$virtua = swiper.params.virtual,
        addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
        addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
    var _swiper$virtual = swiper.virtual,
        previousFrom = _swiper$virtual.from,
        previousTo = _swiper$virtual.to,
        slides = _swiper$virtual.slides,
        previousSlidesGrid = _swiper$virtual.slidesGrid,
        previousOffset = _swiper$virtual.offset;

    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }

    var activeIndex = swiper.activeIndex || 0;
    var offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    var slidesAfter;
    var slidesBefore;

    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = slidesPerGroup + addSlidesBefore;
    }

    var from = Math.max((activeIndex || 0) - slidesBefore, 0);
    var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    Object.assign(swiper.virtual, {
      from: from,
      to: to,
      offset: offset,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }

      emit('virtualUpdate');
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, "".concat(offset, "px"));
      }

      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }

    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset: offset,
        from: from,
        to: to,
        slides: function getSlides() {
          var slidesToRender = [];

          for (var i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }

          return slidesToRender;
        }()
      });

      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }

      return;
    }

    var prependIndexes = [];
    var appendIndexes = [];

    if (force) {
      swiper.$wrapperEl.find(".".concat(swiper.params.slideClass)).remove();
    } else {
      for (var i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]")).remove();
        }
      }
    }

    for (var _i = 0; _i < slides.length; _i += 1) {
      if (_i >= from && _i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(_i);
        } else {
          if (_i > previousTo) appendIndexes.push(_i);
          if (_i < previousFrom) prependIndexes.push(_i);
        }
      }
    }

    appendIndexes.forEach(function (index) {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort(function (a, b) {
      return b - a;
    }).forEach(function (index) {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, "".concat(offset, "px"));
    onRendered();
  }

  function appendSlide(slides) {
    if (_typeof(slides) === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }

    update(true);
  }

  function prependSlide(slides) {
    var activeIndex = swiper.activeIndex;
    var newActiveIndex = activeIndex + 1;
    var numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }

      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }

    if (swiper.params.virtual.cache) {
      var cache = swiper.virtual.cache;
      var newCache = {};
      Object.keys(cache).forEach(function (cachedIndex) {
        var $cachedEl = cache[cachedIndex];
        var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

        if (cachedElIndex) {
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }

        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
      });
      swiper.virtual.cache = newCache;
    }

    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }

  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    var activeIndex = swiper.activeIndex;

    if (Array.isArray(slidesIndexes)) {
      for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);

        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }

        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);

      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }

      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }

    update(true);
    swiper.slideTo(activeIndex, 0);
  }

  function removeAllSlides() {
    swiper.virtual.slides = [];

    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }

    update(true);
    swiper.slideTo(0, 0);
  }

  on('beforeInit', function () {
    if (!swiper.params.virtual.enabled) return;
    swiper.virtual.slides = swiper.params.virtual.slides;
    swiper.classNames.push("".concat(swiper.params.containerModifierClass, "virtual"));
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;

    if (!swiper.params.initialSlide) {
      update();
    }
  });
  on('setTranslate', function () {
    if (!swiper.params.virtual.enabled) return;

    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(function () {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', function () {
    if (!swiper.params.virtual.enabled) return;

    if (swiper.params.cssMode) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.setCSSProperty)(swiper.wrapperEl, '--swiper-virtual-size', "".concat(swiper.virtualSize, "px"));
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
    update: update
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/zoom/zoom.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/zoom/zoom.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Zoom; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");



function Zoom(_ref) {
  var swiper = _ref.swiper,
      extendParams = _ref.extendParams,
      on = _ref.on,
      emit = _ref.emit;
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  var currentScale = 1;
  var isScaling = false;
  var gesturesEnabled;
  var fakeGestureTouched;
  var fakeGestureMoved;
  var gesture = {
    $slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    $imageEl: undefined,
    $imageWrapEl: undefined,
    maxRatio: 3
  };
  var image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  var velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  var scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get: function get() {
      return scale;
    },
    set: function set(value) {
      if (scale !== value) {
        var imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
        var slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
        emit('zoomChange', value, imageEl, slideEl);
      }

      scale = value;
    }
  });

  function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    var x1 = e.targetTouches[0].pageX;
    var y1 = e.targetTouches[0].pageY;
    var x2 = e.targetTouches[1].pageX;
    var y2 = e.targetTouches[1].pageY;
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  } // Events


  function onGestureStart(e) {
    var support = swiper.support;
    var params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;

    if (!support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }

      fakeGestureTouched = true;
      gesture.scaleStart = getDistanceBetweenTouches(e);
    }

    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).closest(".".concat(swiper.params.slideClass));
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find(".".concat(params.containerClass)).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }

    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }

    isScaling = true;
  }

  function onGestureChange(e) {
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;

    if (!support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }

      fakeGestureMoved = true;
      gesture.scaleMove = getDistanceBetweenTouches(e);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
      if (e.type === 'gesturechange') onGestureStart(e);
      return;
    }

    if (support.gestures) {
      zoom.scale = e.scale * currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    }

    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
    }

    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
    }

    gesture.$imageEl.transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
  }

  function onGestureEnd(e) {
    var device = swiper.device;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;

    if (!support.gestures) {
      if (!fakeGestureTouched || !fakeGestureMoved) {
        return;
      }

      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
        return;
      }

      fakeGestureTouched = false;
      fakeGestureMoved = false;
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  }

  function onTouchStart(e) {
    var device = swiper.device;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  }

  function onTouchMove(e) {
    var zoom = swiper.zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTranslate)(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTranslate)(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
    } // Define if we need image drag


    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }

      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
    }

    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
    }

    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
    } // Velocity


    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"));
  }

  function onTouchEnd() {
    var zoom = swiper.zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }

    image.isTouched = false;
    image.isMoved = false;
    var momentumDurationX = 300;
    var momentumDurationY = 300;
    var momentumDistanceX = velocity.x * momentumDurationX;
    var newPositionX = image.currentX + momentumDistanceX;
    var momentumDistanceY = velocity.y * momentumDurationY;
    var newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"));
  }

  function onTransitionEnd() {
    var zoom = swiper.zoom;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      }

      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      }

      zoom.scale = 1;
      currentScale = 1;
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  }

  function zoomIn(e) {
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;

    if (!gesture.$slideEl) {
      if (e && e.target) {
        gesture.$slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).closest(".".concat(swiper.params.slideClass));
      }

      if (!gesture.$slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.$slideEl = swiper.$wrapperEl.children(".".concat(swiper.params.slideActiveClass));
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
      }

      gesture.$imageEl = gesture.$slideEl.find(".".concat(params.containerClass)).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }

    gesture.$slideEl.addClass("".concat(params.zoomedSlideClass));
    var touchX;
    var touchY;
    var offsetX;
    var offsetY;
    var diffX;
    var diffY;
    var translateX;
    var translateY;
    var imageWidth;
    var imageHeight;
    var scaledWidth;
    var scaledHeight;
    var translateMinX;
    var translateMinY;
    var translateMaxX;
    var translateMaxY;
    var slideWidth;
    var slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left + window.scrollX;
      offsetY = gesture.$slideEl.offset().top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }

      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }

      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }

    gesture.$imageWrapEl.transition(300).transform("translate3d(".concat(translateX, "px, ").concat(translateY, "px,0)"));
    gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
  }

  function zoomOut() {
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children(".".concat(swiper.params.slideActiveClass));
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find(".".concat(params.containerClass)).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }

    zoom.scale = 1;
    currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass("".concat(params.zoomedSlideClass));
    gesture.$slideEl = undefined;
  } // Toggle Zoom


  function zoomToggle(e) {
    var zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }

  function getListeners() {
    var support = swiper.support;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener: passiveListener,
      activeListenerWithCapture: activeListenerWithCapture
    };
  }

  function getSlideSelector() {
    return ".".concat(swiper.params.slideClass);
  }

  function toggleGestures(method) {
    var _getListeners = getListeners(),
        passiveListener = _getListeners.passiveListener;

    var slideSelector = getSlideSelector();
    swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
    swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
    swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
  }

  function enableGestures() {
    if (gesturesEnabled) return;
    gesturesEnabled = true;
    toggleGestures('on');
  }

  function disableGestures() {
    if (!gesturesEnabled) return;
    gesturesEnabled = false;
    toggleGestures('off');
  } // Attach/Detach Events


  function enable() {
    var zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    var support = swiper.support;

    var _getListeners2 = getListeners(),
        passiveListener = _getListeners2.passiveListener,
        activeListenerWithCapture = _getListeners2.activeListenerWithCapture;

    var slideSelector = getSlideSelector(); // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.on(swiper.touchEvents.move, ".".concat(swiper.params.zoom.containerClass), onTouchMove, activeListenerWithCapture);
  }

  function disable() {
    var zoom = swiper.zoom;
    if (!zoom.enabled) return;
    var support = swiper.support;
    zoom.enabled = false;

    var _getListeners3 = getListeners(),
        passiveListener = _getListeners3.passiveListener,
        activeListenerWithCapture = _getListeners3.activeListenerWithCapture;

    var slideSelector = getSlideSelector(); // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.off(swiper.touchEvents.move, ".".concat(swiper.params.zoom.containerClass), onTouchMove, activeListenerWithCapture);
  }

  on('init', function () {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', function () {
    disable();
  });
  on('touchStart', function (_s, e) {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', function (_s, e) {
    if (!swiper.zoom.enabled) return;
    onTouchEnd(e);
  });
  on('doubleTap', function (_s, e) {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', function () {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', function () {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable: enable,
    disable: disable,
    "in": zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}

/***/ }),

/***/ "./node_modules/swiper/shared/classes-to-selector.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classesToSelector; }
/* harmony export */ });
function classesToSelector() {
  var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return ".".concat(classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.'));
}

/***/ }),

/***/ "./node_modules/swiper/shared/create-element-if-not-defined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createElementIfNotDefined; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(function (key) {
      if (!params[key] && params.auto === true) {
        var element = swiper.$el.children(".".concat(checkProps[key]))[0];

        if (!element) {
          element = document.createElement('div');
          element.className = checkProps[key];
          swiper.$el.append(element);
        }

        params[key] = element;
        originalParams[key] = element;
      }
    });
  }

  return params;
}

/***/ }),

/***/ "./node_modules/swiper/shared/create-shadow.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createShadow; }
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/swiper/shared/dom.js");

function createShadow(params, $slideEl, side) {
  var shadowClass = "swiper-slide-shadow".concat(side ? "-".concat(side) : '');
  var $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
  var $shadowEl = $shadowContainer.children(".".concat(shadowClass));

  if (!$shadowEl.length) {
    $shadowEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow".concat(side ? "-".concat(side) : '', "\"></div>"));
    $shadowContainer.append($shadowEl);
  }

  return $shadowEl;
}

/***/ }),

/***/ "./node_modules/swiper/shared/dom.js":
/*!*******************************************!*\
  !*** ./node_modules/swiper/shared/dom.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7 */ "./node_modules/dom7/dom7.esm.js");

var Methods = {
  addClass: dom7__WEBPACK_IMPORTED_MODULE_0__.addClass,
  removeClass: dom7__WEBPACK_IMPORTED_MODULE_0__.removeClass,
  hasClass: dom7__WEBPACK_IMPORTED_MODULE_0__.hasClass,
  toggleClass: dom7__WEBPACK_IMPORTED_MODULE_0__.toggleClass,
  attr: dom7__WEBPACK_IMPORTED_MODULE_0__.attr,
  removeAttr: dom7__WEBPACK_IMPORTED_MODULE_0__.removeAttr,
  transform: dom7__WEBPACK_IMPORTED_MODULE_0__.transform,
  transition: dom7__WEBPACK_IMPORTED_MODULE_0__.transition,
  on: dom7__WEBPACK_IMPORTED_MODULE_0__.on,
  off: dom7__WEBPACK_IMPORTED_MODULE_0__.off,
  trigger: dom7__WEBPACK_IMPORTED_MODULE_0__.trigger,
  transitionEnd: dom7__WEBPACK_IMPORTED_MODULE_0__.transitionEnd,
  outerWidth: dom7__WEBPACK_IMPORTED_MODULE_0__.outerWidth,
  outerHeight: dom7__WEBPACK_IMPORTED_MODULE_0__.outerHeight,
  styles: dom7__WEBPACK_IMPORTED_MODULE_0__.styles,
  offset: dom7__WEBPACK_IMPORTED_MODULE_0__.offset,
  css: dom7__WEBPACK_IMPORTED_MODULE_0__.css,
  each: dom7__WEBPACK_IMPORTED_MODULE_0__.each,
  html: dom7__WEBPACK_IMPORTED_MODULE_0__.html,
  text: dom7__WEBPACK_IMPORTED_MODULE_0__.text,
  is: dom7__WEBPACK_IMPORTED_MODULE_0__.is,
  index: dom7__WEBPACK_IMPORTED_MODULE_0__.index,
  eq: dom7__WEBPACK_IMPORTED_MODULE_0__.eq,
  append: dom7__WEBPACK_IMPORTED_MODULE_0__.append,
  prepend: dom7__WEBPACK_IMPORTED_MODULE_0__.prepend,
  next: dom7__WEBPACK_IMPORTED_MODULE_0__.next,
  nextAll: dom7__WEBPACK_IMPORTED_MODULE_0__.nextAll,
  prev: dom7__WEBPACK_IMPORTED_MODULE_0__.prev,
  prevAll: dom7__WEBPACK_IMPORTED_MODULE_0__.prevAll,
  parent: dom7__WEBPACK_IMPORTED_MODULE_0__.parent,
  parents: dom7__WEBPACK_IMPORTED_MODULE_0__.parents,
  closest: dom7__WEBPACK_IMPORTED_MODULE_0__.closest,
  find: dom7__WEBPACK_IMPORTED_MODULE_0__.find,
  children: dom7__WEBPACK_IMPORTED_MODULE_0__.children,
  filter: dom7__WEBPACK_IMPORTED_MODULE_0__.filter,
  remove: dom7__WEBPACK_IMPORTED_MODULE_0__.remove
};
Object.keys(Methods).forEach(function (methodName) {
  Object.defineProperty(dom7__WEBPACK_IMPORTED_MODULE_0__.$.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom7__WEBPACK_IMPORTED_MODULE_0__.$);

/***/ }),

/***/ "./node_modules/swiper/shared/effect-init.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ effectInit; }
/* harmony export */ });
function effectInit(params) {
  var effect = params.effect,
      swiper = params.swiper,
      on = params.on,
      setTranslate = params.setTranslate,
      setTransition = params.setTransition,
      overwriteParams = params.overwriteParams,
      perspective = params.perspective,
      recreateShadows = params.recreateShadows,
      getEffectParams = params.getEffectParams;
  on('beforeInit', function () {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push("".concat(swiper.params.containerModifierClass).concat(effect));

    if (perspective && perspective()) {
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
    }

    var overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', function () {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', function (_s, duration) {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', function () {
    if (swiper.params.effect !== effect) return;

    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return; // remove shadows

      swiper.slides.each(function (slideEl) {
        var $slideEl = swiper.$(slideEl);
        $slideEl.find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').remove();
      }); // create new one

      recreateShadows();
    }
  });
  var requireUpdateOnVirtual;
  on('virtualUpdate', function () {
    if (swiper.params.effect !== effect) return;

    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }

    requestAnimationFrame(function () {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/swiper/shared/effect-target.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ effectTarget; }
/* harmony export */ });
function effectTarget(effectParams, $slideEl) {
  if (effectParams.transformEl) {
    return $slideEl.find(effectParams.transformEl).css({
      'backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden'
    });
  }

  return $slideEl;
}

/***/ }),

/***/ "./node_modules/swiper/shared/effect-virtual-transition-end.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ effectVirtualTransitionEnd; }
/* harmony export */ });
function effectVirtualTransitionEnd(_ref) {
  var swiper = _ref.swiper,
      duration = _ref.duration,
      transformEl = _ref.transformEl,
      allSlides = _ref.allSlides;
  var slides = swiper.slides,
      activeIndex = swiper.activeIndex,
      $wrapperEl = swiper.$wrapperEl;

  if (swiper.params.virtualTranslate && duration !== 0) {
    var eventTriggered = false;
    var $transitionEndTarget;

    if (allSlides) {
      $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
    } else {
      $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
    }

    $transitionEndTarget.transitionEnd(function () {
      if (eventTriggered) return;
      if (!swiper || swiper.destroyed) return;
      eventTriggered = true;
      swiper.animating = false;
      var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

      for (var i = 0; i < triggerEvents.length; i += 1) {
        $wrapperEl.trigger(triggerEvents[i]);
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/swiper/shared/get-browser.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/get-browser.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBrowser": function() { return /* binding */ getBrowser; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

var browser;

function calcBrowser() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  function isSafari() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}



/***/ }),

/***/ "./node_modules/swiper/shared/get-device.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/shared/get-device.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDevice": function() { return /* binding */ getDevice; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _get_support_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support.js */ "./node_modules/swiper/shared/get-support.js");


var deviceCached;

function calcDevice() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      userAgent = _ref.userAgent;

  var support = (0,_get_support_js__WEBPACK_IMPORTED_MODULE_1__.getSupport)();
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var platform = window.navigator.platform;
  var ua = userAgent || window.navigator.userAgent;
  var device = {
    ios: false,
    android: false
  };
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  var windows = platform === 'Win32';
  var macos = platform === 'MacIntel'; // iPadOs 13 fix

  var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf("".concat(screenWidth, "x").concat(screenHeight)) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }

  return deviceCached;
}



/***/ }),

/***/ "./node_modules/swiper/shared/get-support.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/get-support.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSupport": function() { return /* binding */ getSupport; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

var support;

function calcSupport() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  return {
    smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}



/***/ }),

/***/ "./node_modules/swiper/shared/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/swiper/shared/utils.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animateCSSModeScroll": function() { return /* binding */ animateCSSModeScroll; },
/* harmony export */   "deleteProps": function() { return /* binding */ deleteProps; },
/* harmony export */   "extend": function() { return /* binding */ extend; },
/* harmony export */   "getComputedStyle": function() { return /* binding */ getComputedStyle; },
/* harmony export */   "getTranslate": function() { return /* binding */ getTranslate; },
/* harmony export */   "isObject": function() { return /* binding */ isObject; },
/* harmony export */   "nextTick": function() { return /* binding */ nextTick; },
/* harmony export */   "now": function() { return /* binding */ now; },
/* harmony export */   "setCSSProperty": function() { return /* binding */ setCSSProperty; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



function deleteProps(obj) {
  var object = obj;
  Object.keys(object).forEach(function (key) {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getComputedStyle(el) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function getTranslate(el) {
  var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var matrix;
  var curTransform;
  var transformMatrix;
  var curStyle = getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(function (a) {
        return a.replace(',', '.');
      }).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject(o) {
  return _typeof(o) === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }

  return node && (node.nodeType === 1 || node.nodeType === 11);
}

function extend() {
  var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  var noExtend = ['__proto__', 'constructor', 'prototype'];

  for (var i = 1; i < arguments.length; i += 1) {
    var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
        return noExtend.indexOf(key) < 0;
      });

      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}

function animateCSSModeScroll(_ref) {
  var swiper = _ref.swiper,
      targetPosition = _ref.targetPosition,
      side = _ref.side;
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var startPosition = -swiper.translate;
  var startTime = null;
  var time;
  var duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  var dir = targetPosition > startPosition ? 'next' : 'prev';

  var isOutOfBound = function isOutOfBound(current, target) {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };

  var animate = function animate() {
    time = new Date().getTime();

    if (startTime === null) {
      startTime = time;
    }

    var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    var easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    var currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }

    swiper.wrapperEl.scrollTo(_defineProperty({}, side, currentPosition));

    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(function () {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo(_defineProperty({}, side, currentPosition));
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }

    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };

  animate();
}



/***/ }),

/***/ "./node_modules/swiper/swiper.esm.js":
/*!*******************************************!*\
  !*** ./node_modules/swiper/swiper.esm.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A11y": function() { return /* reexport safe */ _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   "Autoplay": function() { return /* reexport safe */ _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   "Controller": function() { return /* reexport safe */ _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   "EffectCards": function() { return /* reexport safe */ _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_24__["default"]; },
/* harmony export */   "EffectCoverflow": function() { return /* reexport safe */ _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_22__["default"]; },
/* harmony export */   "EffectCreative": function() { return /* reexport safe */ _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_23__["default"]; },
/* harmony export */   "EffectCube": function() { return /* reexport safe */ _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_20__["default"]; },
/* harmony export */   "EffectFade": function() { return /* reexport safe */ _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_19__["default"]; },
/* harmony export */   "EffectFlip": function() { return /* reexport safe */ _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_21__["default"]; },
/* harmony export */   "FreeMode": function() { return /* reexport safe */ _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_16__["default"]; },
/* harmony export */   "Grid": function() { return /* reexport safe */ _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_17__["default"]; },
/* harmony export */   "HashNavigation": function() { return /* reexport safe */ _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   "History": function() { return /* reexport safe */ _modules_history_history_js__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   "Keyboard": function() { return /* reexport safe */ _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "Lazy": function() { return /* reexport safe */ _modules_lazy_lazy_js__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "Manipulation": function() { return /* reexport safe */ _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_18__["default"]; },
/* harmony export */   "Mousewheel": function() { return /* reexport safe */ _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "Navigation": function() { return /* reexport safe */ _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "Pagination": function() { return /* reexport safe */ _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "Parallax": function() { return /* reexport safe */ _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "Scrollbar": function() { return /* reexport safe */ _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "Swiper": function() { return /* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "Thumbs": function() { return /* reexport safe */ _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   "Virtual": function() { return /* reexport safe */ _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "Zoom": function() { return /* reexport safe */ _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "default": function() { return /* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.js */ "./node_modules/swiper/core/core.js");
/* harmony import */ var _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/virtual/virtual.js */ "./node_modules/swiper/modules/virtual/virtual.js");
/* harmony import */ var _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keyboard/keyboard.js */ "./node_modules/swiper/modules/keyboard/keyboard.js");
/* harmony import */ var _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mousewheel/mousewheel.js */ "./node_modules/swiper/modules/mousewheel/mousewheel.js");
/* harmony import */ var _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigation/navigation.js */ "./node_modules/swiper/modules/navigation/navigation.js");
/* harmony import */ var _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pagination/pagination.js */ "./node_modules/swiper/modules/pagination/pagination.js");
/* harmony import */ var _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollbar/scrollbar.js */ "./node_modules/swiper/modules/scrollbar/scrollbar.js");
/* harmony import */ var _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/parallax/parallax.js */ "./node_modules/swiper/modules/parallax/parallax.js");
/* harmony import */ var _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/zoom/zoom.js */ "./node_modules/swiper/modules/zoom/zoom.js");
/* harmony import */ var _modules_lazy_lazy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/lazy/lazy.js */ "./node_modules/swiper/modules/lazy/lazy.js");
/* harmony import */ var _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/controller/controller.js */ "./node_modules/swiper/modules/controller/controller.js");
/* harmony import */ var _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/a11y/a11y.js */ "./node_modules/swiper/modules/a11y/a11y.js");
/* harmony import */ var _modules_history_history_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/history/history.js */ "./node_modules/swiper/modules/history/history.js");
/* harmony import */ var _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/hash-navigation/hash-navigation.js */ "./node_modules/swiper/modules/hash-navigation/hash-navigation.js");
/* harmony import */ var _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/autoplay/autoplay.js */ "./node_modules/swiper/modules/autoplay/autoplay.js");
/* harmony import */ var _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/thumbs/thumbs.js */ "./node_modules/swiper/modules/thumbs/thumbs.js");
/* harmony import */ var _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/free-mode/free-mode.js */ "./node_modules/swiper/modules/free-mode/free-mode.js");
/* harmony import */ var _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/grid/grid.js */ "./node_modules/swiper/modules/grid/grid.js");
/* harmony import */ var _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/manipulation/manipulation.js */ "./node_modules/swiper/modules/manipulation/manipulation.js");
/* harmony import */ var _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/effect-fade/effect-fade.js */ "./node_modules/swiper/modules/effect-fade/effect-fade.js");
/* harmony import */ var _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/effect-cube/effect-cube.js */ "./node_modules/swiper/modules/effect-cube/effect-cube.js");
/* harmony import */ var _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/effect-flip/effect-flip.js */ "./node_modules/swiper/modules/effect-flip/effect-flip.js");
/* harmony import */ var _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/effect-coverflow/effect-coverflow.js */ "./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js");
/* harmony import */ var _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/effect-creative/effect-creative.js */ "./node_modules/swiper/modules/effect-creative/effect-creative.js");
/* harmony import */ var _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/effect-cards/effect-cards.js */ "./node_modules/swiper/modules/effect-cards/effect-cards.js");
/**
 * Swiper 8.4.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 6, 2022
 */


























/***/ }),

/***/ "./src/js/accordion.js":
/*!*****************************!*\
  !*** ./src/js/accordion.js ***!
  \*****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $accordions = document.querySelectorAll('.accordion');
$accordions.forEach(function ($accordion) {
  var $button = $accordion.querySelector('.accordion__button');
  var $content = $accordion.querySelector('.accordion__content');
  $button.addEventListener('click', function () {
    if (!$accordion.classList.contains('accordion_active')) {
      $button.classList.add('accordion__button_active');
      $accordion.classList.add('accordion_activating');
      $content.style.height = "".concat($content.scrollHeight, "px");
    } else {
      $button.classList.remove('accordion__button_active');
      $content.style.height = "".concat($content.scrollHeight, "px");
      $accordion.classList.add('accordion_activating');
      setTimeout(function () {
        return $content.style.height = '0px';
      });
    }
  });
  $content.addEventListener('transitionend', function () {
    $accordion.classList.remove('accordion_activating');

    if (!$accordion.classList.contains('accordion_active')) {
      $content.setAttribute('style', '');
      $accordion.classList.add('accordion_active');
    } else {
      $accordion.classList.remove('accordion_active');
    }
  });
});

/***/ }),

/***/ "./src/js/cookie.js":
/*!**************************!*\
  !*** ./src/js/cookie.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $cookie = document.querySelector('.cookie');

if ($cookie) {
  var isAccept = JSON.parse(localStorage.getItem('cookie'));

  if (!isAccept) {
    setTimeout(function () {
      return $cookie.classList.add('cookie_show');
    }, 1000);
  }

  var $acceptBtn = $cookie.querySelector('.cookie__btn');
  var $closeBtn = $cookie.querySelector('.cookie__close');
  $acceptBtn.addEventListener('click', accept);
  $closeBtn.addEventListener('click', accept);
}

function accept() {
  localStorage.setItem('cookie', JSON.stringify(true));
  $cookie.classList.remove('cookie_show');
}

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/js/popup.js");

var $forms = document.querySelectorAll('.form');
$forms.forEach(function ($form) {
  $form.addEventListener('submit', function (e) {
    e.preventDefault();
    var isError = false;
    var $inputs = $form.querySelectorAll('.form__input');
    $inputs.forEach(function ($input) {
      if (!validateField($input)) {
        isError = true;
      }
    });
    var $popup;

    if (!isError) {
      $popup = _popup_js__WEBPACK_IMPORTED_MODULE_0__["default"].createSuccess();
      clearFields($inputs);
      var $formPopup = document.querySelector('.popup[data-name="callback"]');

      if ($formPopup) {
        $formPopup.classList.remove('popup_show');
      }
    } else {
      $popup = _popup_js__WEBPACK_IMPORTED_MODULE_0__["default"].createError();
    }

    document.body.appendChild($popup);
    setTimeout(function () {
      return $popup.classList.add('popup_show');
    }, 100);
  });
});

function validateField($input) {
  if ($input.value === '') {
    return false;
  }

  return true;
}

function clearFields($inputs) {
  $inputs.forEach(function ($input) {
    return $input.value = '';
  });
}

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElem": function() { return /* binding */ createElem; },
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function createElem(type, className, options) {
  var $elem = document.createElement(type);
  $elem.className = className;

  for (var key in options) {
    $elem[key] = options[key];
  }

  return $elem;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createElem: createElem
});

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
window.addEventListener('load', function () {
  var $menu = document.querySelector('.menu');

  if ($menu) {
    var $menuToggle = $menu.querySelector('.menu__toggle');
    $menuToggle.addEventListener('click', function () {
      $menu.classList.toggle('menu_active');
      document.body.classList.toggle('body-lock');
    });
    $menu.addEventListener('click', function (e) {
      if (e.target.classList.contains('menu__link') && e.target.href.includes('#')) {
        closeMenu($menu);
      }
    });
  }
});

function closeMenu($menu) {
  if ($menu.classList.contains('menu_active')) {
    $menu.classList.remove('menu_active');
    document.body.classList.remove('body-lock');
  }
}

/***/ }),

/***/ "./src/js/partners.js":
/*!****************************!*\
  !*** ./src/js/partners.js ***!
  \****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]({
  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay],
  el: '.partners__list',
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,
  loop: true,
  watchSlidesProgress: true,
  pagination: {
    el: '.partners__pagination',
    clickable: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    1220: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    991: {
      spaceBetween: 30,
      slidesPerView: 3
    },
    860: {
      spaceBetween: 20,
      slidesPerView: 3
    },
    640: {
      slidesPerView: 2
    }
  }
});

/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createErrorPopup": function() { return /* binding */ createErrorPopup; },
/* harmony export */   "createSuccessPopup": function() { return /* binding */ createSuccessPopup; },
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/js/helpers.js");

var $openBtns = document.querySelectorAll('.js-open-popup');
$openBtns.forEach(function ($btn) {
  $btn.addEventListener('click', function () {
    var name = $btn.dataset.popupName;
    var $popup = document.querySelector(".popup[data-name=\"".concat(name, "\""));

    if (!name || !$popup) {
      return;
    }

    $popup.classList.add('popup_show');
  });
});
var $popups = document.querySelectorAll('.popup');
$popups.forEach(function ($popup) {
  var $closeBtn = $popup.querySelector('.popup__close');
  $closeBtn.addEventListener('click', function () {
    $popup.classList.remove('popup_show');
  });
  $popup.addEventListener('click', function (e) {
    if ($popup === e.target) {
      $popup.classList.remove('popup_show');
    }
  });
});

function createPopup($content) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var $closeBtn = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('button', 'popup__close', {
    innerHTML: '<img src="assets/img/icons/close.svg" alt="">'
  });
  var $popupContent = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('div', 'popup__content', {
    innerHTML: $content
  });
  $popupContent.appendChild($closeBtn);
  var $popup = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElem)('div', "popup ".concat(className));
  $popup.appendChild($popupContent);
  $popup.addEventListener('click', function (e) {
    if ($popup === e.target) {
      $popup.classList.remove('popup_show');
      setTimeout(function () {
        return $popup.remove();
      }, 1000);
    }
  });
  $closeBtn.addEventListener('click', function () {
    $popup.classList.remove('popup_show');
    setTimeout(function () {
      return $popup.remove();
    }, 1000);
  }, {
    once: true
  });
  return $popup;
}

function createSuccessPopup(className) {
  var $popup = createPopup("\n    <img class=\"popup__icon\" src=\"assets/img/icons/success.svg\" alt=\"\">\n    <div class=\"popup__text\">\n      \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043F\u0440\u0438\u043D\u044F\u0442\u0430.\n      \u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0412\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F.\n    </div>\n  ");
  return $popup;
}
function createErrorPopup(className) {
  var $popup = createPopup("\n    <img class=\"popup__icon\" src=\"assets/img/icons/error.svg\" alt=\"\">\n    <div class=\"popup__text\">\n      \u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.\n    </div>\n  ");
  return $popup;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createSuccess: createSuccessPopup,
  createError: createErrorPopup
});

/***/ }),

/***/ "./src/js/select.js":
/*!**************************!*\
  !*** ./src/js/select.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");

var $selects = document.querySelectorAll('.select__field');
$selects.forEach(function ($select) {
  new choices_js__WEBPACK_IMPORTED_MODULE_0__($select, {
    searchEnabled: false,
    paste: true,
    itemSelectText: '',
    placeholder: true,
    position: 'select-one',
    noResultsText: 'Не найдено'
  });
});

/***/ }),

/***/ "./src/js/smooth-scroll.js":
/*!*********************************!*\
  !*** ./src/js/smooth-scroll.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $anchors = document.querySelectorAll('a[href*="#"]');
$anchors.forEach(function ($anchor) {
  $anchor.addEventListener('click', function (e) {
    var id = $anchor.getAttribute('href');

    if (id[0] === '#') {
      e.preventDefault();
    }

    if (id === '#') {
      return;
    }

    var $elem = document.querySelector(id);

    if ($elem) {
      var offsetTop = $elem.getBoundingClientRect().top;
      window.scrollBy({
        top: offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _smooth_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smooth-scroll.js */ "./src/js/smooth-scroll.js");
/* harmony import */ var _partners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partners.js */ "./src/js/partners.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select.js */ "./src/js/select.js");
/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion.js */ "./src/js/accordion.js");
/* harmony import */ var _cookie_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cookie.js */ "./src/js/cookie.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup.js */ "./src/js/popup.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form.js */ "./src/js/form.js");








}();
/******/ })()
;