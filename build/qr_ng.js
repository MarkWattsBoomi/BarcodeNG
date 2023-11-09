var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component2(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component2.prototype.isReactComponent = {};
        Component2.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component2.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component2.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component2.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component2.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement3(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component3) {
          var prototype = Component3.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement3.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component2;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/ts-custom-error/dist/custom-error.umd.js
var require_custom_error_umd = __commonJS({
  "node_modules/ts-custom-error/dist/custom-error.umd.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global.tsCustomError = {});
    })(exports, function(exports2) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
      };
      function __extends(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }
      function fixProto(target, prototype) {
        var setPrototypeOf = Object.setPrototypeOf;
        setPrototypeOf ? setPrototypeOf(target, prototype) : target.__proto__ = prototype;
      }
      function fixStack(target, fn) {
        if (fn === void 0) {
          fn = target.constructor;
        }
        var captureStackTrace = Error.captureStackTrace;
        captureStackTrace && captureStackTrace(target, fn);
      }
      var CustomError = function(_super) {
        __extends(CustomError2, _super);
        function CustomError2(message) {
          var _newTarget = this.constructor;
          var _this = _super.call(this, message) || this;
          Object.defineProperty(_this, "name", {
            value: _newTarget.name,
            enumerable: false
          });
          fixProto(_this, _newTarget.prototype);
          fixStack(_this);
          return _this;
        }
        return CustomError2;
      }(Error);
      function customErrorFactory(fn, parent) {
        if (parent === void 0) {
          parent = Error;
        }
        function CustomError2() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (!(this instanceof CustomError2))
            return new (CustomError2.bind.apply(CustomError2, [void 0].concat(args)))();
          parent.apply(this, args);
          fn.apply(this, args);
          this.name = fn.name || parent.name;
          fixStack(this, CustomError2);
        }
        return Object.defineProperties(CustomError2, {
          prototype: {
            value: Object.create(parent.prototype, {
              constructor: {
                value: CustomError2,
                writable: true,
                configurable: true
              }
            })
          }
        });
      }
      exports2.CustomError = CustomError;
      exports2.customErrorFactory = customErrorFactory;
    });
  }
});

// node_modules/@zxing/library/esm5/core/Exception.js
var require_Exception = __commonJS({
  "node_modules/@zxing/library/esm5/core/Exception.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts_custom_error_1 = require_custom_error_umd();
    var Exception = (
      /** @class */
      function(_super) {
        __extends(Exception2, _super);
        function Exception2(message) {
          if (message === void 0) {
            message = void 0;
          }
          var _this = _super.call(this, message) || this;
          _this.message = message;
          return _this;
        }
        return Exception2;
      }(ts_custom_error_1.CustomError)
    );
    exports.default = Exception;
  }
});

// node_modules/@zxing/library/esm5/core/ArgumentException.js
var require_ArgumentException = __commonJS({
  "node_modules/@zxing/library/esm5/core/ArgumentException.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Exception_1 = require_Exception();
    var ArgumentException = (
      /** @class */
      function(_super) {
        __extends(ArgumentException2, _super);
        function ArgumentException2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return ArgumentException2;
      }(Exception_1.default)
    );
    exports.default = ArgumentException;
  }
});

// node_modules/@zxing/library/esm5/core/IllegalArgumentException.js
var require_IllegalArgumentException = __commonJS({
  "node_modules/@zxing/library/esm5/core/IllegalArgumentException.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Exception_1 = require_Exception();
    var IllegalArgumentException = (
      /** @class */
      function(_super) {
        __extends(IllegalArgumentException2, _super);
        function IllegalArgumentException2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return IllegalArgumentException2;
      }(Exception_1.default)
    );
    exports.default = IllegalArgumentException;
  }
});

// node_modules/@zxing/library/esm5/core/BinaryBitmap.js
var require_BinaryBitmap = __commonJS({
  "node_modules/@zxing/library/esm5/core/BinaryBitmap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var BinaryBitmap = (
      /** @class */
      function() {
        function BinaryBitmap2(binarizer) {
          this.binarizer = binarizer;
          if (binarizer === null) {
            throw new IllegalArgumentException_1.default("Binarizer must be non-null.");
          }
        }
        BinaryBitmap2.prototype.getWidth = function() {
          return this.binarizer.getWidth();
        };
        BinaryBitmap2.prototype.getHeight = function() {
          return this.binarizer.getHeight();
        };
        BinaryBitmap2.prototype.getBlackRow = function(y, row) {
          return this.binarizer.getBlackRow(y, row);
        };
        BinaryBitmap2.prototype.getBlackMatrix = function() {
          if (this.matrix === null || this.matrix === void 0) {
            this.matrix = this.binarizer.getBlackMatrix();
          }
          return this.matrix;
        };
        BinaryBitmap2.prototype.isCropSupported = function() {
          return this.binarizer.getLuminanceSource().isCropSupported();
        };
        BinaryBitmap2.prototype.crop = function(left, top, width, height) {
          var newSource = this.binarizer.getLuminanceSource().crop(left, top, width, height);
          return new BinaryBitmap2(this.binarizer.createBinarizer(newSource));
        };
        BinaryBitmap2.prototype.isRotateSupported = function() {
          return this.binarizer.getLuminanceSource().isRotateSupported();
        };
        BinaryBitmap2.prototype.rotateCounterClockwise = function() {
          var newSource = this.binarizer.getLuminanceSource().rotateCounterClockwise();
          return new BinaryBitmap2(this.binarizer.createBinarizer(newSource));
        };
        BinaryBitmap2.prototype.rotateCounterClockwise45 = function() {
          var newSource = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
          return new BinaryBitmap2(this.binarizer.createBinarizer(newSource));
        };
        BinaryBitmap2.prototype.toString = function() {
          try {
            return this.getBlackMatrix().toString();
          } catch (e) {
            return "";
          }
        };
        return BinaryBitmap2;
      }()
    );
    exports.default = BinaryBitmap;
  }
});

// node_modules/@zxing/library/esm5/core/ChecksumException.js
var require_ChecksumException = __commonJS({
  "node_modules/@zxing/library/esm5/core/ChecksumException.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Exception_1 = require_Exception();
    var ChecksumException = (
      /** @class */
      function(_super) {
        __extends(ChecksumException2, _super);
        function ChecksumException2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return ChecksumException2;
      }(Exception_1.default)
    );
    exports.default = ChecksumException;
  }
});

// node_modules/@zxing/library/esm5/core/Binarizer.js
var require_Binarizer = __commonJS({
  "node_modules/@zxing/library/esm5/core/Binarizer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Binarizer = (
      /** @class */
      function() {
        function Binarizer2(source) {
          this.source = source;
        }
        Binarizer2.prototype.getLuminanceSource = function() {
          return this.source;
        };
        Binarizer2.prototype.getWidth = function() {
          return this.source.getWidth();
        };
        Binarizer2.prototype.getHeight = function() {
          return this.source.getHeight();
        };
        return Binarizer2;
      }()
    );
    exports.default = Binarizer;
  }
});

// node_modules/@zxing/library/esm5/core/util/System.js
var require_System = __commonJS({
  "node_modules/@zxing/library/esm5/core/util/System.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var System = (
      /** @class */
      function() {
        function System2() {
        }
        System2.arraycopy = function(src, srcPos, dest, destPos, length) {
          while (length--) {
            dest[destPos++] = src[srcPos++];
          }
        };
        System2.currentTimeMillis = function() {
          return Date.now();
        };
        return System2;
      }()
    );
    exports.default = System;
  }
});

// node_modules/@zxing/library/esm5/core/util/Integer.js
var require_Integer = __commonJS({
  "node_modules/@zxing/library/esm5/core/util/Integer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Integer = (
      /** @class */
      function() {
        function Integer2() {
        }
        Integer2.numberOfTrailingZeros = function(i) {
          var y;
          if (i === 0)
            return 32;
          var n = 31;
          y = i << 16;
          if (y !== 0) {
            n -= 16;
            i = y;
          }
          y = i << 8;
          if (y !== 0) {
            n -= 8;
            i = y;
          }
          y = i << 4;
          if (y !== 0) {
            n -= 4;
            i = y;
          }
          y = i << 2;
          if (y !== 0) {
            n -= 2;
            i = y;
          }
          return n - (i << 1 >>> 31);
        };
        Integer2.numberOfLeadingZeros = function(i) {
          if (i === 0) {
            return 32;
          }
          var n = 1;
          if (i >>> 16 === 0) {
            n += 16;
            i <<= 16;
          }
          if (i >>> 24 === 0) {
            n += 8;
            i <<= 8;
          }
          if (i >>> 28 === 0) {
            n += 4;
            i <<= 4;
          }
          if (i >>> 30 === 0) {
            n += 2;
            i <<= 2;
          }
          n -= i >>> 31;
          return n;
        };
        Integer2.toHexString = function(i) {
          return i.toString(16);
        };
        Integer2.bitCount = function(i) {
          i = i - (i >>> 1 & 1431655765);
          i = (i & 858993459) + (i >>> 2 & 858993459);
          i = i + (i >>> 4) & 252645135;
          i = i + (i >>> 8);
          i = i + (i >>> 16);
          return i & 63;
        };
        Integer2.MIN_VALUE_32_BITS = -2147483648;
        return Integer2;
      }()
    );
    exports.default = Integer;
  }
});

// node_modules/@zxing/library/esm5/core/util/Arrays.js
var require_Arrays = __commonJS({
  "node_modules/@zxing/library/esm5/core/util/Arrays.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var System_1 = require_System();
    var Arrays = (
      /** @class */
      function() {
        function Arrays2() {
        }
        Arrays2.equals = function(first, second) {
          if (!first) {
            return false;
          }
          if (!second) {
            return false;
          }
          if (!first.length) {
            return false;
          }
          if (!second.length) {
            return false;
          }
          if (first.length !== second.length) {
            return false;
          }
          for (var i = 0, length_1 = first.length; i < length_1; i++) {
            if (first[i] !== second[i]) {
              return false;
            }
          }
          return true;
        };
        Arrays2.hashCode = function(a) {
          if (a === null) {
            return 0;
          }
          var result = 1;
          for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var element = a_1[_i];
            result = 31 * result + element;
          }
          return result;
        };
        Arrays2.fillUint8Array = function(a, value) {
          for (var i = 0; i !== a.length; i++) {
            a[i] = value;
          }
        };
        Arrays2.copyOf = function(original, newLength) {
          var copy = new Int32Array(newLength);
          System_1.default.arraycopy(original, 0, copy, 0, Math.min(original.length, newLength));
          return copy;
        };
        Arrays2.binarySearch = function(ar, el, comparator) {
          if (void 0 === comparator) {
            comparator = Arrays2.numberComparator;
          }
          var m = 0;
          var n = ar.length - 1;
          while (m <= n) {
            var k = n + m >> 1;
            var cmp = comparator(el, ar[k]);
            if (cmp > 0) {
              m = k + 1;
            } else if (cmp < 0) {
              n = k - 1;
            } else {
              return k;
            }
          }
          return -m - 1;
        };
        Arrays2.numberComparator = function(a, b) {
          return a - b;
        };
        return Arrays2;
      }()
    );
    exports.default = Arrays;
  }
});

// node_modules/@zxing/library/esm5/core/common/BitArray.js
var require_BitArray = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/BitArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var System_1 = require_System();
    var Integer_1 = require_Integer();
    var Arrays_1 = require_Arrays();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var BitArray = (
      /** @class */
      function() {
        function BitArray2(size, bits) {
          if (void 0 === size) {
            this.size = 0;
            this.bits = new Int32Array(1);
          } else {
            this.size = size;
            if (void 0 === bits || null === bits) {
              this.bits = BitArray2.makeArray(size);
            } else {
              this.bits = bits;
            }
          }
        }
        BitArray2.prototype.getSize = function() {
          return this.size;
        };
        BitArray2.prototype.getSizeInBytes = function() {
          return Math.floor((this.size + 7) / 8);
        };
        BitArray2.prototype.ensureCapacity = function(size) {
          if (size > this.bits.length * 32) {
            var newBits = BitArray2.makeArray(size);
            System_1.default.arraycopy(this.bits, 0, newBits, 0, this.bits.length);
            this.bits = newBits;
          }
        };
        BitArray2.prototype.get = function(i) {
          return (this.bits[Math.floor(i / 32)] & 1 << (i & 31)) !== 0;
        };
        BitArray2.prototype.set = function(i) {
          this.bits[Math.floor(i / 32)] |= 1 << (i & 31);
        };
        BitArray2.prototype.flip = function(i) {
          this.bits[Math.floor(i / 32)] ^= 1 << (i & 31);
        };
        BitArray2.prototype.getNextSet = function(from) {
          var size = this.size;
          if (from >= size) {
            return size;
          }
          var bits = this.bits;
          var bitsOffset = Math.floor(from / 32);
          var currentBits = bits[bitsOffset];
          currentBits &= ~((1 << (from & 31)) - 1);
          var length = bits.length;
          while (currentBits === 0) {
            if (++bitsOffset === length) {
              return size;
            }
            currentBits = bits[bitsOffset];
          }
          var result = bitsOffset * 32 + Integer_1.default.numberOfTrailingZeros(currentBits);
          return result > size ? size : result;
        };
        BitArray2.prototype.getNextUnset = function(from) {
          var size = this.size;
          if (from >= size) {
            return size;
          }
          var bits = this.bits;
          var bitsOffset = Math.floor(from / 32);
          var currentBits = ~bits[bitsOffset];
          currentBits &= ~((1 << (from & 31)) - 1);
          var length = bits.length;
          while (currentBits === 0) {
            if (++bitsOffset === length) {
              return size;
            }
            currentBits = ~bits[bitsOffset];
          }
          var result = bitsOffset * 32 + Integer_1.default.numberOfTrailingZeros(currentBits);
          return result > size ? size : result;
        };
        BitArray2.prototype.setBulk = function(i, newBits) {
          this.bits[Math.floor(i / 32)] = newBits;
        };
        BitArray2.prototype.setRange = function(start, end) {
          if (end < start || start < 0 || end > this.size) {
            throw new IllegalArgumentException_1.default();
          }
          if (end === start) {
            return;
          }
          end--;
          var firstInt = Math.floor(start / 32);
          var lastInt = Math.floor(end / 32);
          var bits = this.bits;
          for (var i = firstInt; i <= lastInt; i++) {
            var firstBit = i > firstInt ? 0 : start & 31;
            var lastBit = i < lastInt ? 31 : end & 31;
            var mask = (2 << lastBit) - (1 << firstBit);
            bits[i] |= mask;
          }
        };
        BitArray2.prototype.clear = function() {
          var max = this.bits.length;
          var bits = this.bits;
          for (var i = 0; i < max; i++) {
            bits[i] = 0;
          }
        };
        BitArray2.prototype.isRange = function(start, end, value) {
          if (end < start || start < 0 || end > this.size) {
            throw new IllegalArgumentException_1.default();
          }
          if (end === start) {
            return true;
          }
          end--;
          var firstInt = Math.floor(start / 32);
          var lastInt = Math.floor(end / 32);
          var bits = this.bits;
          for (var i = firstInt; i <= lastInt; i++) {
            var firstBit = i > firstInt ? 0 : start & 31;
            var lastBit = i < lastInt ? 31 : end & 31;
            var mask = (2 << lastBit) - (1 << firstBit) & 4294967295;
            if ((bits[i] & mask) !== (value ? mask : 0)) {
              return false;
            }
          }
          return true;
        };
        BitArray2.prototype.appendBit = function(bit) {
          this.ensureCapacity(this.size + 1);
          if (bit) {
            this.bits[Math.floor(this.size / 32)] |= 1 << (this.size & 31);
          }
          this.size++;
        };
        BitArray2.prototype.appendBits = function(value, numBits) {
          if (numBits < 0 || numBits > 32) {
            throw new IllegalArgumentException_1.default("Num bits must be between 0 and 32");
          }
          this.ensureCapacity(this.size + numBits);
          var appendBit = this.appendBit;
          for (var numBitsLeft = numBits; numBitsLeft > 0; numBitsLeft--) {
            this.appendBit((value >> numBitsLeft - 1 & 1) === 1);
          }
        };
        BitArray2.prototype.appendBitArray = function(other) {
          var otherSize = other.size;
          this.ensureCapacity(this.size + otherSize);
          var appendBit = this.appendBit;
          for (var i = 0; i < otherSize; i++) {
            this.appendBit(other.get(i));
          }
        };
        BitArray2.prototype.xor = function(other) {
          if (this.size !== other.size) {
            throw new IllegalArgumentException_1.default("Sizes don't match");
          }
          var bits = this.bits;
          for (var i = 0, length_1 = bits.length; i < length_1; i++) {
            bits[i] ^= other.bits[i];
          }
        };
        BitArray2.prototype.toBytes = function(bitOffset, array, offset, numBytes) {
          for (var i = 0; i < numBytes; i++) {
            var theByte = 0;
            for (var j = 0; j < 8; j++) {
              if (this.get(bitOffset)) {
                theByte |= 1 << 7 - j;
              }
              bitOffset++;
            }
            array[offset + i] = /*(byte)*/
            theByte;
          }
        };
        BitArray2.prototype.getBitArray = function() {
          return this.bits;
        };
        BitArray2.prototype.reverse = function() {
          var newBits = new Int32Array(this.bits.length);
          var len = Math.floor((this.size - 1) / 32);
          var oldBitsLen = len + 1;
          var bits = this.bits;
          for (var i = 0; i < oldBitsLen; i++) {
            var x = bits[i];
            x = x >> 1 & 1431655765 | (x & 1431655765) << 1;
            x = x >> 2 & 858993459 | (x & 858993459) << 2;
            x = x >> 4 & 252645135 | (x & 252645135) << 4;
            x = x >> 8 & 16711935 | (x & 16711935) << 8;
            x = x >> 16 & 65535 | (x & 65535) << 16;
            newBits[len - i] = /*(int)*/
            x;
          }
          if (this.size !== oldBitsLen * 32) {
            var leftOffset = oldBitsLen * 32 - this.size;
            var currentInt = newBits[0] >>> leftOffset;
            for (var i = 1; i < oldBitsLen; i++) {
              var nextInt = newBits[i];
              currentInt |= nextInt << 32 - leftOffset;
              newBits[i - 1] = currentInt;
              currentInt = nextInt >>> leftOffset;
            }
            newBits[oldBitsLen - 1] = currentInt;
          }
          this.bits = newBits;
        };
        BitArray2.makeArray = function(size) {
          return new Int32Array(Math.floor((size + 31) / 32));
        };
        BitArray2.prototype.equals = function(o) {
          if (!(o instanceof BitArray2)) {
            return false;
          }
          var other = o;
          return this.size === other.size && Arrays_1.default.equals(this.bits, other.bits);
        };
        BitArray2.prototype.hashCode = function() {
          return 31 * this.size + Arrays_1.default.hashCode(this.bits);
        };
        BitArray2.prototype.toString = function() {
          var result = "";
          for (var i = 0, size = this.size; i < size; i++) {
            if ((i & 7) === 0) {
              result += " ";
            }
            result += this.get(i) ? "X" : ".";
          }
          return result;
        };
        BitArray2.prototype.clone = function() {
          return new BitArray2(this.size, this.bits.slice());
        };
        return BitArray2;
      }()
    );
    exports.default = BitArray;
  }
});

// node_modules/@zxing/library/esm5/core/util/StringBuilder.js
var require_StringBuilder = __commonJS({
  "node_modules/@zxing/library/esm5/core/util/StringBuilder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StringBuilder = (
      /** @class */
      function() {
        function StringBuilder2(value) {
          if (value === void 0) {
            value = "";
          }
          this.value = value;
        }
        StringBuilder2.prototype.append = function(s) {
          if (typeof s === "string") {
            this.value += s.toString();
          } else {
            this.value += String.fromCharCode(s);
          }
          return this;
        };
        StringBuilder2.prototype.length = function() {
          return this.value.length;
        };
        StringBuilder2.prototype.charAt = function(n) {
          return this.value.charAt(n);
        };
        StringBuilder2.prototype.deleteCharAt = function(n) {
          this.value = this.value.substr(0, n) + this.value.substring(n + 1);
        };
        StringBuilder2.prototype.setCharAt = function(n, c) {
          this.value = this.value.substr(0, n) + c + this.value.substr(n + 1);
        };
        StringBuilder2.prototype.toString = function() {
          return this.value;
        };
        StringBuilder2.prototype.insert = function(n, c) {
          this.value = this.value.substr(0, n) + c + this.value.substr(n + c.length);
        };
        return StringBuilder2;
      }()
    );
    exports.default = StringBuilder;
  }
});

// node_modules/@zxing/library/esm5/core/common/BitMatrix.js
var require_BitMatrix = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/BitMatrix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BitArray_1 = require_BitArray();
    var System_1 = require_System();
    var Arrays_1 = require_Arrays();
    var StringBuilder_1 = require_StringBuilder();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var BitMatrix = (
      /** @class */
      function() {
        function BitMatrix2(width, height, rowSize, bits) {
          this.width = width;
          this.height = height;
          this.rowSize = rowSize;
          this.bits = bits;
          if (void 0 === height || null === height) {
            height = width;
          }
          this.height = height;
          if (width < 1 || height < 1) {
            throw new IllegalArgumentException_1.default("Both dimensions must be greater than 0");
          }
          if (void 0 === rowSize || null === rowSize) {
            rowSize = Math.floor((width + 31) / 32);
          }
          this.rowSize = rowSize;
          if (void 0 === bits || null === bits) {
            this.bits = new Int32Array(this.rowSize * this.height);
          }
        }
        BitMatrix2.parseFromBooleanArray = function(image) {
          var height = image.length;
          var width = image[0].length;
          var bits = new BitMatrix2(width, height);
          for (var i = 0; i < height; i++) {
            var imageI = image[i];
            for (var j = 0; j < width; j++) {
              if (imageI[j]) {
                bits.set(j, i);
              }
            }
          }
          return bits;
        };
        BitMatrix2.parseFromString = function(stringRepresentation, setString, unsetString) {
          if (stringRepresentation === null) {
            throw new IllegalArgumentException_1.default("stringRepresentation cannot be null");
          }
          var bits = new Array(stringRepresentation.length);
          var bitsPos = 0;
          var rowStartPos = 0;
          var rowLength = -1;
          var nRows = 0;
          var pos = 0;
          while (pos < stringRepresentation.length) {
            if (stringRepresentation.charAt(pos) === "\n" || stringRepresentation.charAt(pos) === "\r") {
              if (bitsPos > rowStartPos) {
                if (rowLength === -1) {
                  rowLength = bitsPos - rowStartPos;
                } else if (bitsPos - rowStartPos !== rowLength) {
                  throw new IllegalArgumentException_1.default("row lengths do not match");
                }
                rowStartPos = bitsPos;
                nRows++;
              }
              pos++;
            } else if (stringRepresentation.substring(pos, pos + setString.length) === setString) {
              pos += setString.length;
              bits[bitsPos] = true;
              bitsPos++;
            } else if (stringRepresentation.substring(pos, pos + unsetString.length) === unsetString) {
              pos += unsetString.length;
              bits[bitsPos] = false;
              bitsPos++;
            } else {
              throw new IllegalArgumentException_1.default("illegal character encountered: " + stringRepresentation.substring(pos));
            }
          }
          if (bitsPos > rowStartPos) {
            if (rowLength === -1) {
              rowLength = bitsPos - rowStartPos;
            } else if (bitsPos - rowStartPos !== rowLength) {
              throw new IllegalArgumentException_1.default("row lengths do not match");
            }
            nRows++;
          }
          var matrix = new BitMatrix2(rowLength, nRows);
          for (var i = 0; i < bitsPos; i++) {
            if (bits[i]) {
              matrix.set(Math.floor(i % rowLength), Math.floor(i / rowLength));
            }
          }
          return matrix;
        };
        BitMatrix2.prototype.get = function(x, y) {
          var offset = y * this.rowSize + Math.floor(x / 32);
          return (this.bits[offset] >>> (x & 31) & 1) !== 0;
        };
        BitMatrix2.prototype.set = function(x, y) {
          var offset = y * this.rowSize + Math.floor(x / 32);
          this.bits[offset] |= 1 << (x & 31) & 4294967295;
        };
        BitMatrix2.prototype.unset = function(x, y) {
          var offset = y * this.rowSize + Math.floor(x / 32);
          this.bits[offset] &= ~(1 << (x & 31) & 4294967295);
        };
        BitMatrix2.prototype.flip = function(x, y) {
          var offset = y * this.rowSize + Math.floor(x / 32);
          this.bits[offset] ^= 1 << (x & 31) & 4294967295;
        };
        BitMatrix2.prototype.xor = function(mask) {
          if (this.width !== mask.getWidth() || this.height !== mask.getHeight() || this.rowSize !== mask.getRowSize()) {
            throw new IllegalArgumentException_1.default("input matrix dimensions do not match");
          }
          var rowArray = new BitArray_1.default(Math.floor(this.width / 32) + 1);
          var rowSize = this.rowSize;
          var bits = this.bits;
          for (var y = 0, height = this.height; y < height; y++) {
            var offset = y * rowSize;
            var row = mask.getRow(y, rowArray).getBitArray();
            for (var x = 0; x < rowSize; x++) {
              bits[offset + x] ^= row[x];
            }
          }
        };
        BitMatrix2.prototype.clear = function() {
          var bits = this.bits;
          var max = bits.length;
          for (var i = 0; i < max; i++) {
            bits[i] = 0;
          }
        };
        BitMatrix2.prototype.setRegion = function(left, top, width, height) {
          if (top < 0 || left < 0) {
            throw new IllegalArgumentException_1.default("Left and top must be nonnegative");
          }
          if (height < 1 || width < 1) {
            throw new IllegalArgumentException_1.default("Height and width must be at least 1");
          }
          var right = left + width;
          var bottom = top + height;
          if (bottom > this.height || right > this.width) {
            throw new IllegalArgumentException_1.default("The region must fit inside the matrix");
          }
          var rowSize = this.rowSize;
          var bits = this.bits;
          for (var y = top; y < bottom; y++) {
            var offset = y * rowSize;
            for (var x = left; x < right; x++) {
              bits[offset + Math.floor(x / 32)] |= 1 << (x & 31) & 4294967295;
            }
          }
        };
        BitMatrix2.prototype.getRow = function(y, row) {
          if (row === null || row === void 0 || row.getSize() < this.width) {
            row = new BitArray_1.default(this.width);
          } else {
            row.clear();
          }
          var rowSize = this.rowSize;
          var bits = this.bits;
          var offset = y * rowSize;
          for (var x = 0; x < rowSize; x++) {
            row.setBulk(x * 32, bits[offset + x]);
          }
          return row;
        };
        BitMatrix2.prototype.setRow = function(y, row) {
          System_1.default.arraycopy(row.getBitArray(), 0, this.bits, y * this.rowSize, this.rowSize);
        };
        BitMatrix2.prototype.rotate180 = function() {
          var width = this.getWidth();
          var height = this.getHeight();
          var topRow = new BitArray_1.default(width);
          var bottomRow = new BitArray_1.default(width);
          for (var i = 0, length_1 = Math.floor((height + 1) / 2); i < length_1; i++) {
            topRow = this.getRow(i, topRow);
            bottomRow = this.getRow(height - 1 - i, bottomRow);
            topRow.reverse();
            bottomRow.reverse();
            this.setRow(i, bottomRow);
            this.setRow(height - 1 - i, topRow);
          }
        };
        BitMatrix2.prototype.getEnclosingRectangle = function() {
          var width = this.width;
          var height = this.height;
          var rowSize = this.rowSize;
          var bits = this.bits;
          var left = width;
          var top = height;
          var right = -1;
          var bottom = -1;
          for (var y = 0; y < height; y++) {
            for (var x32 = 0; x32 < rowSize; x32++) {
              var theBits = bits[y * rowSize + x32];
              if (theBits !== 0) {
                if (y < top) {
                  top = y;
                }
                if (y > bottom) {
                  bottom = y;
                }
                if (x32 * 32 < left) {
                  var bit = 0;
                  while ((theBits << 31 - bit & 4294967295) === 0) {
                    bit++;
                  }
                  if (x32 * 32 + bit < left) {
                    left = x32 * 32 + bit;
                  }
                }
                if (x32 * 32 + 31 > right) {
                  var bit = 31;
                  while (theBits >>> bit === 0) {
                    bit--;
                  }
                  if (x32 * 32 + bit > right) {
                    right = x32 * 32 + bit;
                  }
                }
              }
            }
          }
          if (right < left || bottom < top) {
            return null;
          }
          return Int32Array.from([left, top, right - left + 1, bottom - top + 1]);
        };
        BitMatrix2.prototype.getTopLeftOnBit = function() {
          var rowSize = this.rowSize;
          var bits = this.bits;
          var bitsOffset = 0;
          while (bitsOffset < bits.length && bits[bitsOffset] === 0) {
            bitsOffset++;
          }
          if (bitsOffset === bits.length) {
            return null;
          }
          var y = bitsOffset / rowSize;
          var x = bitsOffset % rowSize * 32;
          var theBits = bits[bitsOffset];
          var bit = 0;
          while ((theBits << 31 - bit & 4294967295) === 0) {
            bit++;
          }
          x += bit;
          return Int32Array.from([x, y]);
        };
        BitMatrix2.prototype.getBottomRightOnBit = function() {
          var rowSize = this.rowSize;
          var bits = this.bits;
          var bitsOffset = bits.length - 1;
          while (bitsOffset >= 0 && bits[bitsOffset] === 0) {
            bitsOffset--;
          }
          if (bitsOffset < 0) {
            return null;
          }
          var y = Math.floor(bitsOffset / rowSize);
          var x = Math.floor(bitsOffset % rowSize) * 32;
          var theBits = bits[bitsOffset];
          var bit = 31;
          while (theBits >>> bit === 0) {
            bit--;
          }
          x += bit;
          return Int32Array.from([x, y]);
        };
        BitMatrix2.prototype.getWidth = function() {
          return this.width;
        };
        BitMatrix2.prototype.getHeight = function() {
          return this.height;
        };
        BitMatrix2.prototype.getRowSize = function() {
          return this.rowSize;
        };
        BitMatrix2.prototype.equals = function(o) {
          if (!(o instanceof BitMatrix2)) {
            return false;
          }
          var other = o;
          return this.width === other.width && this.height === other.height && this.rowSize === other.rowSize && Arrays_1.default.equals(this.bits, other.bits);
        };
        BitMatrix2.prototype.hashCode = function() {
          var hash = this.width;
          hash = 31 * hash + this.width;
          hash = 31 * hash + this.height;
          hash = 31 * hash + this.rowSize;
          hash = 31 * hash + Arrays_1.default.hashCode(this.bits);
          return hash;
        };
        BitMatrix2.prototype.toString = function(setString, unsetString, lineSeparator) {
          if (setString === void 0) {
            setString = "x";
          }
          if (unsetString === void 0) {
            unsetString = " ";
          }
          if (lineSeparator === void 0) {
            lineSeparator = "\n";
          }
          return this.buildToString(setString, unsetString, lineSeparator);
        };
        BitMatrix2.prototype.buildToString = function(setString, unsetString, lineSeparator) {
          var result = new StringBuilder_1.default();
          result.append(lineSeparator);
          for (var y = 0, height = this.height; y < height; y++) {
            for (var x = 0, width = this.width; x < width; x++) {
              result.append(this.get(x, y) ? setString : unsetString);
            }
            result.append(lineSeparator);
          }
          return result.toString();
        };
        BitMatrix2.prototype.clone = function() {
          return new BitMatrix2(this.width, this.height, this.rowSize, this.bits.slice());
        };
        return BitMatrix2;
      }()
    );
    exports.default = BitMatrix;
  }
});

// node_modules/@zxing/library/esm5/core/NotFoundException.js
var require_NotFoundException = __commonJS({
  "node_modules/@zxing/library/esm5/core/NotFoundException.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Exception_1 = require_Exception();
    var NotFoundException = (
      /** @class */
      function(_super) {
        __extends(NotFoundException2, _super);
        function NotFoundException2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return NotFoundException2;
      }(Exception_1.default)
    );
    exports.default = NotFoundException;
  }
});

// node_modules/@zxing/library/esm5/core/common/GlobalHistogramBinarizer.js
var require_GlobalHistogramBinarizer = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/GlobalHistogramBinarizer.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Binarizer_1 = require_Binarizer();
    var BitArray_1 = require_BitArray();
    var BitMatrix_1 = require_BitMatrix();
    var NotFoundException_1 = require_NotFoundException();
    var GlobalHistogramBinarizer = (
      /** @class */
      function(_super) {
        __extends(GlobalHistogramBinarizer2, _super);
        function GlobalHistogramBinarizer2(source) {
          var _this = _super.call(this, source) || this;
          _this.luminances = GlobalHistogramBinarizer2.EMPTY;
          _this.buckets = new Int32Array(GlobalHistogramBinarizer2.LUMINANCE_BUCKETS);
          return _this;
        }
        GlobalHistogramBinarizer2.prototype.getBlackRow = function(y, row) {
          var source = this.getLuminanceSource();
          var width = source.getWidth();
          if (row === void 0 || row === null || row.getSize() < width) {
            row = new BitArray_1.default(width);
          } else {
            row.clear();
          }
          this.initArrays(width);
          var localLuminances = source.getRow(y, this.luminances);
          var localBuckets = this.buckets;
          for (var x = 0; x < width; x++) {
            localBuckets[(localLuminances[x] & 255) >> GlobalHistogramBinarizer2.LUMINANCE_SHIFT]++;
          }
          var blackPoint = GlobalHistogramBinarizer2.estimateBlackPoint(localBuckets);
          if (width < 3) {
            for (var x = 0; x < width; x++) {
              if ((localLuminances[x] & 255) < blackPoint) {
                row.set(x);
              }
            }
          } else {
            var left = localLuminances[0] & 255;
            var center = localLuminances[1] & 255;
            for (var x = 1; x < width - 1; x++) {
              var right = localLuminances[x + 1] & 255;
              if ((center * 4 - left - right) / 2 < blackPoint) {
                row.set(x);
              }
              left = center;
              center = right;
            }
          }
          return row;
        };
        GlobalHistogramBinarizer2.prototype.getBlackMatrix = function() {
          var source = this.getLuminanceSource();
          var width = source.getWidth();
          var height = source.getHeight();
          var matrix = new BitMatrix_1.default(width, height);
          this.initArrays(width);
          var localBuckets = this.buckets;
          for (var y = 1; y < 5; y++) {
            var row = height * y / 5;
            var localLuminances_1 = source.getRow(row, this.luminances);
            var right = Math.floor(width * 4 / 5);
            for (var x = Math.floor(width / 5); x < right; x++) {
              var pixel = localLuminances_1[x] & 255;
              localBuckets[pixel >> GlobalHistogramBinarizer2.LUMINANCE_SHIFT]++;
            }
          }
          var blackPoint = GlobalHistogramBinarizer2.estimateBlackPoint(localBuckets);
          var localLuminances = source.getMatrix();
          for (var y = 0; y < height; y++) {
            var offset = y * width;
            for (var x = 0; x < width; x++) {
              var pixel = localLuminances[offset + x] & 255;
              if (pixel < blackPoint) {
                matrix.set(x, y);
              }
            }
          }
          return matrix;
        };
        GlobalHistogramBinarizer2.prototype.createBinarizer = function(source) {
          return new GlobalHistogramBinarizer2(source);
        };
        GlobalHistogramBinarizer2.prototype.initArrays = function(luminanceSize) {
          if (this.luminances.length < luminanceSize) {
            this.luminances = new Uint8ClampedArray(luminanceSize);
          }
          var buckets = this.buckets;
          for (var x = 0; x < GlobalHistogramBinarizer2.LUMINANCE_BUCKETS; x++) {
            buckets[x] = 0;
          }
        };
        GlobalHistogramBinarizer2.estimateBlackPoint = function(buckets) {
          var numBuckets = buckets.length;
          var maxBucketCount = 0;
          var firstPeak = 0;
          var firstPeakSize = 0;
          for (var x = 0; x < numBuckets; x++) {
            if (buckets[x] > firstPeakSize) {
              firstPeak = x;
              firstPeakSize = buckets[x];
            }
            if (buckets[x] > maxBucketCount) {
              maxBucketCount = buckets[x];
            }
          }
          var secondPeak = 0;
          var secondPeakScore = 0;
          for (var x = 0; x < numBuckets; x++) {
            var distanceToBiggest = x - firstPeak;
            var score = buckets[x] * distanceToBiggest * distanceToBiggest;
            if (score > secondPeakScore) {
              secondPeak = x;
              secondPeakScore = score;
            }
          }
          if (firstPeak > secondPeak) {
            var temp = firstPeak;
            firstPeak = secondPeak;
            secondPeak = temp;
          }
          if (secondPeak - firstPeak <= numBuckets / 16) {
            throw new NotFoundException_1.default();
          }
          var bestValley = secondPeak - 1;
          var bestValleyScore = -1;
          for (var x = secondPeak - 1; x > firstPeak; x--) {
            var fromFirst = x - firstPeak;
            var score = fromFirst * fromFirst * (secondPeak - x) * (maxBucketCount - buckets[x]);
            if (score > bestValleyScore) {
              bestValley = x;
              bestValleyScore = score;
            }
          }
          return bestValley << GlobalHistogramBinarizer2.LUMINANCE_SHIFT;
        };
        GlobalHistogramBinarizer2.LUMINANCE_BITS = 5;
        GlobalHistogramBinarizer2.LUMINANCE_SHIFT = 8 - GlobalHistogramBinarizer2.LUMINANCE_BITS;
        GlobalHistogramBinarizer2.LUMINANCE_BUCKETS = 1 << GlobalHistogramBinarizer2.LUMINANCE_BITS;
        GlobalHistogramBinarizer2.EMPTY = Uint8ClampedArray.from([0]);
        return GlobalHistogramBinarizer2;
      }(Binarizer_1.default)
    );
    exports.default = GlobalHistogramBinarizer;
  }
});

// node_modules/@zxing/library/esm5/core/common/HybridBinarizer.js
var require_HybridBinarizer = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/HybridBinarizer.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalHistogramBinarizer_1 = require_GlobalHistogramBinarizer();
    var BitMatrix_1 = require_BitMatrix();
    var HybridBinarizer = (
      /** @class */
      function(_super) {
        __extends(HybridBinarizer2, _super);
        function HybridBinarizer2(source) {
          var _this = _super.call(this, source) || this;
          _this.matrix = null;
          return _this;
        }
        HybridBinarizer2.prototype.getBlackMatrix = function() {
          if (this.matrix !== null) {
            return this.matrix;
          }
          var source = this.getLuminanceSource();
          var width = source.getWidth();
          var height = source.getHeight();
          if (width >= HybridBinarizer2.MINIMUM_DIMENSION && height >= HybridBinarizer2.MINIMUM_DIMENSION) {
            var luminances = source.getMatrix();
            var subWidth = width >> HybridBinarizer2.BLOCK_SIZE_POWER;
            if ((width & HybridBinarizer2.BLOCK_SIZE_MASK) !== 0) {
              subWidth++;
            }
            var subHeight = height >> HybridBinarizer2.BLOCK_SIZE_POWER;
            if ((height & HybridBinarizer2.BLOCK_SIZE_MASK) !== 0) {
              subHeight++;
            }
            var blackPoints = HybridBinarizer2.calculateBlackPoints(luminances, subWidth, subHeight, width, height);
            var newMatrix = new BitMatrix_1.default(width, height);
            HybridBinarizer2.calculateThresholdForBlock(luminances, subWidth, subHeight, width, height, blackPoints, newMatrix);
            this.matrix = newMatrix;
          } else {
            this.matrix = _super.prototype.getBlackMatrix.call(this);
          }
          return this.matrix;
        };
        HybridBinarizer2.prototype.createBinarizer = function(source) {
          return new HybridBinarizer2(source);
        };
        HybridBinarizer2.calculateThresholdForBlock = function(luminances, subWidth, subHeight, width, height, blackPoints, matrix) {
          var maxYOffset = height - HybridBinarizer2.BLOCK_SIZE;
          var maxXOffset = width - HybridBinarizer2.BLOCK_SIZE;
          for (var y = 0; y < subHeight; y++) {
            var yoffset = y << HybridBinarizer2.BLOCK_SIZE_POWER;
            if (yoffset > maxYOffset) {
              yoffset = maxYOffset;
            }
            var top_1 = HybridBinarizer2.cap(y, 2, subHeight - 3);
            for (var x = 0; x < subWidth; x++) {
              var xoffset = x << HybridBinarizer2.BLOCK_SIZE_POWER;
              if (xoffset > maxXOffset) {
                xoffset = maxXOffset;
              }
              var left = HybridBinarizer2.cap(x, 2, subWidth - 3);
              var sum = 0;
              for (var z = -2; z <= 2; z++) {
                var blackRow = blackPoints[top_1 + z];
                sum += blackRow[left - 2] + blackRow[left - 1] + blackRow[left] + blackRow[left + 1] + blackRow[left + 2];
              }
              var average = sum / 25;
              HybridBinarizer2.thresholdBlock(luminances, xoffset, yoffset, average, width, matrix);
            }
          }
        };
        HybridBinarizer2.cap = function(value, min, max) {
          return value < min ? min : value > max ? max : value;
        };
        HybridBinarizer2.thresholdBlock = function(luminances, xoffset, yoffset, threshold, stride, matrix) {
          for (var y = 0, offset = yoffset * stride + xoffset; y < HybridBinarizer2.BLOCK_SIZE; y++, offset += stride) {
            for (var x = 0; x < HybridBinarizer2.BLOCK_SIZE; x++) {
              if ((luminances[offset + x] & 255) <= threshold) {
                matrix.set(xoffset + x, yoffset + y);
              }
            }
          }
        };
        HybridBinarizer2.calculateBlackPoints = function(luminances, subWidth, subHeight, width, height) {
          var maxYOffset = height - HybridBinarizer2.BLOCK_SIZE;
          var maxXOffset = width - HybridBinarizer2.BLOCK_SIZE;
          var blackPoints = new Array(subHeight);
          for (var y = 0; y < subHeight; y++) {
            blackPoints[y] = new Int32Array(subWidth);
            var yoffset = y << HybridBinarizer2.BLOCK_SIZE_POWER;
            if (yoffset > maxYOffset) {
              yoffset = maxYOffset;
            }
            for (var x = 0; x < subWidth; x++) {
              var xoffset = x << HybridBinarizer2.BLOCK_SIZE_POWER;
              if (xoffset > maxXOffset) {
                xoffset = maxXOffset;
              }
              var sum = 0;
              var min = 255;
              var max = 0;
              for (var yy = 0, offset = yoffset * width + xoffset; yy < HybridBinarizer2.BLOCK_SIZE; yy++, offset += width) {
                for (var xx = 0; xx < HybridBinarizer2.BLOCK_SIZE; xx++) {
                  var pixel = luminances[offset + xx] & 255;
                  sum += pixel;
                  if (pixel < min) {
                    min = pixel;
                  }
                  if (pixel > max) {
                    max = pixel;
                  }
                }
                if (max - min > HybridBinarizer2.MIN_DYNAMIC_RANGE) {
                  for (yy++, offset += width; yy < HybridBinarizer2.BLOCK_SIZE; yy++, offset += width) {
                    for (var xx = 0; xx < HybridBinarizer2.BLOCK_SIZE; xx++) {
                      sum += luminances[offset + xx] & 255;
                    }
                  }
                }
              }
              var average = sum >> HybridBinarizer2.BLOCK_SIZE_POWER * 2;
              if (max - min <= HybridBinarizer2.MIN_DYNAMIC_RANGE) {
                average = min / 2;
                if (y > 0 && x > 0) {
                  var averageNeighborBlackPoint = (blackPoints[y - 1][x] + 2 * blackPoints[y][x - 1] + blackPoints[y - 1][x - 1]) / 4;
                  if (min < averageNeighborBlackPoint) {
                    average = averageNeighborBlackPoint;
                  }
                }
              }
              blackPoints[y][x] = average;
            }
          }
          return blackPoints;
        };
        HybridBinarizer2.BLOCK_SIZE_POWER = 3;
        HybridBinarizer2.BLOCK_SIZE = 1 << HybridBinarizer2.BLOCK_SIZE_POWER;
        HybridBinarizer2.BLOCK_SIZE_MASK = HybridBinarizer2.BLOCK_SIZE - 1;
        HybridBinarizer2.MINIMUM_DIMENSION = HybridBinarizer2.BLOCK_SIZE * 5;
        HybridBinarizer2.MIN_DYNAMIC_RANGE = 24;
        return HybridBinarizer2;
      }(GlobalHistogramBinarizer_1.default)
    );
    exports.default = HybridBinarizer;
  }
});

// node_modules/@zxing/library/esm5/core/FormatException.js
var require_FormatException = __commonJS({
  "node_modules/@zxing/library/esm5/core/FormatException.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Exception_1 = require_Exception();
    var FormatException = (
      /** @class */
      function(_super) {
        __extends(FormatException2, _super);
        function FormatException2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return FormatException2;
      }(Exception_1.default)
    );
    exports.default = FormatException;
  }
});

// node_modules/@zxing/library/esm5/core/UnsupportedOperationException.js
var require_UnsupportedOperationException = __commonJS({
  "node_modules/@zxing/library/esm5/core/UnsupportedOperationException.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Exception_1 = require_Exception();
    var UnsupportedOperationException = (
      /** @class */
      function(_super) {
        __extends(UnsupportedOperationException2, _super);
        function UnsupportedOperationException2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return UnsupportedOperationException2;
      }(Exception_1.default)
    );
    exports.default = UnsupportedOperationException;
  }
});

// node_modules/@zxing/library/esm5/core/LuminanceSource.js
var require_LuminanceSource = __commonJS({
  "node_modules/@zxing/library/esm5/core/LuminanceSource.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StringBuilder_1 = require_StringBuilder();
    var UnsupportedOperationException_1 = require_UnsupportedOperationException();
    var LuminanceSource = (
      /** @class */
      function() {
        function LuminanceSource2(width, height) {
          this.width = width;
          this.height = height;
        }
        LuminanceSource2.prototype.getWidth = function() {
          return this.width;
        };
        LuminanceSource2.prototype.getHeight = function() {
          return this.height;
        };
        LuminanceSource2.prototype.isCropSupported = function() {
          return false;
        };
        LuminanceSource2.prototype.crop = function(left, top, width, height) {
          throw new UnsupportedOperationException_1.default("This luminance source does not support cropping.");
        };
        LuminanceSource2.prototype.isRotateSupported = function() {
          return false;
        };
        LuminanceSource2.prototype.rotateCounterClockwise = function() {
          throw new UnsupportedOperationException_1.default("This luminance source does not support rotation by 90 degrees.");
        };
        LuminanceSource2.prototype.rotateCounterClockwise45 = function() {
          throw new UnsupportedOperationException_1.default("This luminance source does not support rotation by 45 degrees.");
        };
        LuminanceSource2.prototype.toString = function() {
          var row = new Uint8ClampedArray(this.width);
          var result = new StringBuilder_1.default();
          for (var y = 0; y < this.height; y++) {
            var sourceRow = this.getRow(y, row);
            for (var x = 0; x < this.width; x++) {
              var luminance = sourceRow[x] & 255;
              var c = void 0;
              if (luminance < 64) {
                c = "#";
              } else if (luminance < 128) {
                c = "+";
              } else if (luminance < 192) {
                c = ".";
              } else {
                c = " ";
              }
              result.append(c);
            }
            result.append("\n");
          }
          return result.toString();
        };
        return LuminanceSource2;
      }()
    );
    exports.default = LuminanceSource;
  }
});

// node_modules/@zxing/library/esm5/core/InvertedLuminanceSource.js
var require_InvertedLuminanceSource = __commonJS({
  "node_modules/@zxing/library/esm5/core/InvertedLuminanceSource.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var LuminanceSource_1 = require_LuminanceSource();
    var InvertedLuminanceSource = (
      /** @class */
      function(_super) {
        __extends(InvertedLuminanceSource2, _super);
        function InvertedLuminanceSource2(delegate) {
          var _this = _super.call(this, delegate.getWidth(), delegate.getHeight()) || this;
          _this.delegate = delegate;
          return _this;
        }
        InvertedLuminanceSource2.prototype.getRow = function(y, row) {
          var sourceRow = this.delegate.getRow(y, row);
          var width = this.getWidth();
          for (var i = 0; i < width; i++) {
            sourceRow[i] = /*(byte)*/
            255 - (sourceRow[i] & 255);
          }
          return sourceRow;
        };
        InvertedLuminanceSource2.prototype.getMatrix = function() {
          var matrix = this.delegate.getMatrix();
          var length = this.getWidth() * this.getHeight();
          var invertedMatrix = new Uint8ClampedArray(length);
          for (var i = 0; i < length; i++) {
            invertedMatrix[i] = /*(byte)*/
            255 - (matrix[i] & 255);
          }
          return invertedMatrix;
        };
        InvertedLuminanceSource2.prototype.isCropSupported = function() {
          return this.delegate.isCropSupported();
        };
        InvertedLuminanceSource2.prototype.crop = function(left, top, width, height) {
          return new InvertedLuminanceSource2(this.delegate.crop(left, top, width, height));
        };
        InvertedLuminanceSource2.prototype.isRotateSupported = function() {
          return this.delegate.isRotateSupported();
        };
        InvertedLuminanceSource2.prototype.invert = function() {
          return this.delegate;
        };
        InvertedLuminanceSource2.prototype.rotateCounterClockwise = function() {
          return new InvertedLuminanceSource2(this.delegate.rotateCounterClockwise());
        };
        InvertedLuminanceSource2.prototype.rotateCounterClockwise45 = function() {
          return new InvertedLuminanceSource2(this.delegate.rotateCounterClockwise45());
        };
        return InvertedLuminanceSource2;
      }(LuminanceSource_1.default)
    );
    exports.default = InvertedLuminanceSource;
  }
});

// node_modules/@zxing/library/esm5/browser/HTMLCanvasElementLuminanceSource.js
var require_HTMLCanvasElementLuminanceSource = __commonJS({
  "node_modules/@zxing/library/esm5/browser/HTMLCanvasElementLuminanceSource.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var InvertedLuminanceSource_1 = require_InvertedLuminanceSource();
    var LuminanceSource_1 = require_LuminanceSource();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var HTMLCanvasElementLuminanceSource = (
      /** @class */
      function(_super) {
        __extends(HTMLCanvasElementLuminanceSource2, _super);
        function HTMLCanvasElementLuminanceSource2(canvas) {
          var _this = _super.call(this, canvas.width, canvas.height) || this;
          _this.canvas = canvas;
          _this.tempCanvasElement = null;
          _this.buffer = HTMLCanvasElementLuminanceSource2.makeBufferFromCanvasImageData(canvas);
          return _this;
        }
        HTMLCanvasElementLuminanceSource2.makeBufferFromCanvasImageData = function(canvas) {
          var imageData = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
          return HTMLCanvasElementLuminanceSource2.toGrayscaleBuffer(imageData.data, canvas.width, canvas.height);
        };
        HTMLCanvasElementLuminanceSource2.toGrayscaleBuffer = function(imageBuffer, width, height) {
          var grayscaleBuffer = new Uint8ClampedArray(width * height);
          for (var i = 0, j = 0, length_1 = imageBuffer.length; i < length_1; i += 4, j++) {
            var gray = void 0;
            var alpha = imageBuffer[i + 3];
            if (alpha === 0) {
              gray = 255;
            } else {
              var pixelR = imageBuffer[i];
              var pixelG = imageBuffer[i + 1];
              var pixelB = imageBuffer[i + 2];
              gray = 306 * pixelR + 601 * pixelG + 117 * pixelB + 512 >> 10;
            }
            grayscaleBuffer[j] = gray;
          }
          return grayscaleBuffer;
        };
        HTMLCanvasElementLuminanceSource2.prototype.getRow = function(y, row) {
          if (y < 0 || y >= this.getHeight()) {
            throw new IllegalArgumentException_1.default("Requested row is outside the image: " + y);
          }
          var width = this.getWidth();
          var start = y * width;
          if (row === null) {
            row = this.buffer.slice(start, start + width);
          } else {
            if (row.length < width) {
              row = new Uint8ClampedArray(width);
            }
            row.set(this.buffer.slice(start, start + width));
          }
          return row;
        };
        HTMLCanvasElementLuminanceSource2.prototype.getMatrix = function() {
          return this.buffer;
        };
        HTMLCanvasElementLuminanceSource2.prototype.isCropSupported = function() {
          return true;
        };
        HTMLCanvasElementLuminanceSource2.prototype.crop = function(left, top, width, height) {
          this.crop(left, top, width, height);
          return this;
        };
        HTMLCanvasElementLuminanceSource2.prototype.isRotateSupported = function() {
          return true;
        };
        HTMLCanvasElementLuminanceSource2.prototype.rotateCounterClockwise = function() {
          this.rotate(-90);
          return this;
        };
        HTMLCanvasElementLuminanceSource2.prototype.rotateCounterClockwise45 = function() {
          this.rotate(-45);
          return this;
        };
        HTMLCanvasElementLuminanceSource2.prototype.getTempCanvasElement = function() {
          if (null === this.tempCanvasElement) {
            var tempCanvasElement = this.canvas.ownerDocument.createElement("canvas");
            tempCanvasElement.width = this.canvas.width;
            tempCanvasElement.height = this.canvas.height;
            this.tempCanvasElement = tempCanvasElement;
          }
          return this.tempCanvasElement;
        };
        HTMLCanvasElementLuminanceSource2.prototype.rotate = function(angle) {
          var tempCanvasElement = this.getTempCanvasElement();
          var tempContext = tempCanvasElement.getContext("2d");
          var angleRadians = angle * HTMLCanvasElementLuminanceSource2.DEGREE_TO_RADIANS;
          var width = this.canvas.width;
          var height = this.canvas.height;
          var newWidth = Math.ceil(Math.abs(Math.cos(angleRadians)) * width + Math.abs(Math.sin(angleRadians)) * height);
          var newHeight = Math.ceil(Math.abs(Math.sin(angleRadians)) * width + Math.abs(Math.cos(angleRadians)) * height);
          tempCanvasElement.width = newWidth;
          tempCanvasElement.height = newHeight;
          tempContext.translate(newWidth / 2, newHeight / 2);
          tempContext.rotate(angleRadians);
          tempContext.drawImage(this.canvas, width / -2, height / -2);
          this.buffer = HTMLCanvasElementLuminanceSource2.makeBufferFromCanvasImageData(tempCanvasElement);
          return this;
        };
        HTMLCanvasElementLuminanceSource2.prototype.invert = function() {
          return new InvertedLuminanceSource_1.default(this);
        };
        HTMLCanvasElementLuminanceSource2.DEGREE_TO_RADIANS = Math.PI / 180;
        return HTMLCanvasElementLuminanceSource2;
      }(LuminanceSource_1.default)
    );
    exports.HTMLCanvasElementLuminanceSource = HTMLCanvasElementLuminanceSource;
  }
});

// node_modules/@zxing/library/esm5/browser/VideoInputDevice.js
var require_VideoInputDevice = __commonJS({
  "node_modules/@zxing/library/esm5/browser/VideoInputDevice.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VideoInputDevice = (
      /** @class */
      function() {
        function VideoInputDevice2(deviceId, label, groupId) {
          this.deviceId = deviceId;
          this.label = label;
          this.kind = "videoinput";
          this.groupId = groupId || void 0;
        }
        VideoInputDevice2.prototype.toJSON = function() {
          return {
            kind: this.kind,
            groupId: this.groupId,
            deviceId: this.deviceId,
            label: this.label
          };
        };
        return VideoInputDevice2;
      }()
    );
    exports.VideoInputDevice = VideoInputDevice;
  }
});

// node_modules/@zxing/library/esm5/browser/BrowserCodeReader.js
var require_BrowserCodeReader = __commonJS({
  "node_modules/@zxing/library/esm5/browser/BrowserCodeReader.js"(exports) {
    "use strict";
    var __awaiter3 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve2) {
            resolve2(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArgumentException_1 = require_ArgumentException();
    var BinaryBitmap_1 = require_BinaryBitmap();
    var ChecksumException_1 = require_ChecksumException();
    var HybridBinarizer_1 = require_HybridBinarizer();
    var FormatException_1 = require_FormatException();
    var NotFoundException_1 = require_NotFoundException();
    var HTMLCanvasElementLuminanceSource_1 = require_HTMLCanvasElementLuminanceSource();
    var VideoInputDevice_1 = require_VideoInputDevice();
    var BrowserCodeReader = (
      /** @class */
      function() {
        function BrowserCodeReader2(reader, timeBetweenScansMillis, _hints) {
          if (timeBetweenScansMillis === void 0) {
            timeBetweenScansMillis = 500;
          }
          this.reader = reader;
          this.timeBetweenScansMillis = timeBetweenScansMillis;
          this._hints = _hints;
          this._stopContinuousDecode = false;
          this._stopAsyncDecode = false;
          this._timeBetweenDecodingAttempts = 0;
        }
        Object.defineProperty(BrowserCodeReader2.prototype, "hasNavigator", {
          /**
           * If navigator is present.
           */
          get: function() {
            return typeof navigator !== "undefined";
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(BrowserCodeReader2.prototype, "isMediaDevicesSuported", {
          /**
           * If mediaDevices under navigator is supported.
           */
          get: function() {
            return this.hasNavigator && !!navigator.mediaDevices;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(BrowserCodeReader2.prototype, "canEnumerateDevices", {
          /**
           * If enumerateDevices under navigator is supported.
           */
          get: function() {
            return !!(this.isMediaDevicesSuported && navigator.mediaDevices.enumerateDevices);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(BrowserCodeReader2.prototype, "timeBetweenDecodingAttempts", {
          /** Time between two decoding tries in milli seconds. */
          get: function() {
            return this._timeBetweenDecodingAttempts;
          },
          /**
           * Change the time span the decoder waits between two decoding tries.
           *
           * @param {number} millis Time between two decoding tries in milli seconds.
           */
          set: function(millis) {
            this._timeBetweenDecodingAttempts = millis < 0 ? 0 : millis;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(BrowserCodeReader2.prototype, "hints", {
          /**
           * Sets the hints.
           */
          get: function() {
            return this._hints;
          },
          /**
           * Sets the hints.
           */
          set: function(hints) {
            this._hints = hints || null;
          },
          enumerable: true,
          configurable: true
        });
        BrowserCodeReader2.prototype.listVideoInputDevices = function() {
          return __awaiter3(this, void 0, void 0, function() {
            var devices, videoDevices, _i, devices_1, device, kind, deviceId, label, groupId, videoDevice;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!this.hasNavigator) {
                    throw new Error("Can't enumerate devices, navigator is not present.");
                  }
                  if (!this.canEnumerateDevices) {
                    throw new Error("Can't enumerate devices, method not supported.");
                  }
                  return [4, navigator.mediaDevices.enumerateDevices()];
                case 1:
                  devices = _a.sent();
                  videoDevices = [];
                  for (_i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                    device = devices_1[_i];
                    kind = device.kind === "video" ? "videoinput" : device.kind;
                    if (kind !== "videoinput") {
                      continue;
                    }
                    deviceId = device.deviceId || device.id;
                    label = device.label || "Video device " + (videoDevices.length + 1);
                    groupId = device.groupId;
                    videoDevice = { deviceId, label, kind, groupId };
                    videoDevices.push(videoDevice);
                  }
                  return [2, videoDevices];
              }
            });
          });
        };
        BrowserCodeReader2.prototype.getVideoInputDevices = function() {
          return __awaiter3(this, void 0, void 0, function() {
            var devices;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.listVideoInputDevices()];
                case 1:
                  devices = _a.sent();
                  return [2, devices.map(function(d) {
                    return new VideoInputDevice_1.VideoInputDevice(d.deviceId, d.label);
                  })];
              }
            });
          });
        };
        BrowserCodeReader2.prototype.findDeviceById = function(deviceId) {
          return __awaiter3(this, void 0, void 0, function() {
            var devices;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.listVideoInputDevices()];
                case 1:
                  devices = _a.sent();
                  if (!devices) {
                    return [2, null];
                  }
                  return [2, devices.find(function(x) {
                    return x.deviceId === deviceId;
                  })];
              }
            });
          });
        };
        BrowserCodeReader2.prototype.decodeFromInputVideoDevice = function(deviceId, videoSource) {
          return __awaiter3(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.decodeOnceFromVideoDevice(deviceId, videoSource)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        };
        BrowserCodeReader2.prototype.decodeOnceFromVideoDevice = function(deviceId, videoSource) {
          return __awaiter3(this, void 0, void 0, function() {
            var videoConstraints, constraints;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  this.reset();
                  if (!deviceId) {
                    videoConstraints = { facingMode: "environment" };
                  } else {
                    videoConstraints = { deviceId: { exact: deviceId } };
                  }
                  constraints = { video: videoConstraints };
                  return [4, this.decodeOnceFromConstraints(constraints, videoSource)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        };
        BrowserCodeReader2.prototype.decodeOnceFromConstraints = function(constraints, videoSource) {
          return __awaiter3(this, void 0, void 0, function() {
            var stream;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, navigator.mediaDevices.getUserMedia(constraints)];
                case 1:
                  stream = _a.sent();
                  return [4, this.decodeOnceFromStream(stream, videoSource)];
                case 2:
                  return [2, _a.sent()];
              }
            });
          });
        };
        BrowserCodeReader2.prototype.decodeOnceFromStream = function(stream, videoSource) {
          return __awaiter3(this, void 0, void 0, function() {
            var video, result;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  this.reset();
                  return [4, this.attachStreamToVideo(stream, videoSource)];
                case 1:
                  video = _a.sent();
                  return [4, this.decodeOnce(video)];
                case 2:
                  result = _a.sent();
                  return [2, result];
              }
            });
          });
        };
        BrowserCodeReader2.prototype.decodeFromInputVideoDeviceContinuously = function(deviceId, videoSource, callbackFn) {
          return __awaiter3(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.decodeFromVideoDevice(deviceId, videoSource, callbackFn)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        };
        BrowserCodeReader2.prototype.decodeFromVideoDevice = function(deviceId, videoSource, callbackFn) {
          return __awaiter3(this, void 0, void 0, function() {
            var videoConstraints, constraints;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!deviceId) {
                    videoConstraints = { facingMode: "environment" };
                  } else {
                    videoConstraints = { deviceId: { exact: deviceId } };
                  }
                  constraints = { video: videoConstraints };
                  return [4, this.decodeFromConstraints(constraints, videoSource, callbackFn)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        };
        BrowserCodeReader2.prototype.decodeFromConstraints = function(constraints, videoSource, callbackFn) {
          return __awaiter3(this, void 0, void 0, function() {
            var stream;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, navigator.mediaDevices.getUserMedia(constraints)];
                case 1:
                  stream = _a.sent();
                  return [4, this.decodeFromStream(stream, videoSource, callbackFn)];
                case 2:
                  return [2, _a.sent()];
              }
            });
          });
        };
        BrowserCodeReader2.prototype.decodeFromStream = function(stream, videoSource, callbackFn) {
          return __awaiter3(this, void 0, void 0, function() {
            var video;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  this.reset();
                  return [4, this.attachStreamToVideo(stream, videoSource)];
                case 1:
                  video = _a.sent();
                  return [4, this.decodeContinuously(video, callbackFn)];
                case 2:
                  return [2, _a.sent()];
              }
            });
          });
        };
        BrowserCodeReader2.prototype.stopAsyncDecode = function() {
          this._stopAsyncDecode = true;
        };
        BrowserCodeReader2.prototype.stopContinuousDecode = function() {
          this._stopContinuousDecode = true;
        };
        BrowserCodeReader2.prototype.attachStreamToVideo = function(stream, videoSource) {
          return __awaiter3(this, void 0, void 0, function() {
            var videoElement;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  videoElement = this.prepareVideoElement(videoSource);
                  this.addVideoSource(videoElement, stream);
                  this.videoElement = videoElement;
                  this.stream = stream;
                  return [4, this.playVideoOnLoadAsync(videoElement)];
                case 1:
                  _a.sent();
                  return [2, videoElement];
              }
            });
          });
        };
        BrowserCodeReader2.prototype.playVideoOnLoadAsync = function(videoElement) {
          var _this = this;
          return new Promise(function(resolve, reject) {
            return _this.playVideoOnLoad(videoElement, function() {
              return resolve();
            });
          });
        };
        BrowserCodeReader2.prototype.playVideoOnLoad = function(element, callbackFn) {
          var _this = this;
          this.videoEndedListener = function() {
            return _this.stopStreams();
          };
          this.videoCanPlayListener = function() {
            return _this.tryPlayVideo(element);
          };
          element.addEventListener("ended", this.videoEndedListener);
          element.addEventListener("canplay", this.videoCanPlayListener);
          element.addEventListener("playing", callbackFn);
          this.tryPlayVideo(element);
        };
        BrowserCodeReader2.prototype.isVideoPlaying = function(video) {
          return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
        };
        BrowserCodeReader2.prototype.tryPlayVideo = function(videoElement) {
          return __awaiter3(this, void 0, void 0, function() {
            var _a;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  if (this.isVideoPlaying(videoElement)) {
                    console.warn("Trying to play video that is already playing.");
                    return [
                      2
                      /*return*/
                    ];
                  }
                  _b.label = 1;
                case 1:
                  _b.trys.push([1, 3, , 4]);
                  return [4, videoElement.play()];
                case 2:
                  _b.sent();
                  return [3, 4];
                case 3:
                  _a = _b.sent();
                  console.warn("It was not possible to play the video.");
                  return [3, 4];
                case 4:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        BrowserCodeReader2.prototype.getMediaElement = function(mediaElementId, type) {
          var mediaElement = document.getElementById(mediaElementId);
          if (!mediaElement) {
            throw new ArgumentException_1.default("element with id '" + mediaElementId + "' not found");
          }
          if (mediaElement.nodeName.toLowerCase() !== type.toLowerCase()) {
            throw new ArgumentException_1.default("element with id '" + mediaElementId + "' must be an " + type + " element");
          }
          return mediaElement;
        };
        BrowserCodeReader2.prototype.decodeFromImage = function(source, url) {
          if (!source && !url) {
            throw new ArgumentException_1.default("either imageElement with a src set or an url must be provided");
          }
          if (url && !source) {
            return this.decodeFromImageUrl(url);
          }
          return this.decodeFromImageElement(source);
        };
        BrowserCodeReader2.prototype.decodeFromVideo = function(source, url) {
          if (!source && !url) {
            throw new ArgumentException_1.default("Either an element with a src set or an URL must be provided");
          }
          if (url && !source) {
            return this.decodeFromVideoUrl(url);
          }
          return this.decodeFromVideoElement(source);
        };
        BrowserCodeReader2.prototype.decodeFromVideoContinuously = function(source, url, callbackFn) {
          if (void 0 === source && void 0 === url) {
            throw new ArgumentException_1.default("Either an element with a src set or an URL must be provided");
          }
          if (url && !source) {
            return this.decodeFromVideoUrlContinuously(url, callbackFn);
          }
          return this.decodeFromVideoElementContinuously(source, callbackFn);
        };
        BrowserCodeReader2.prototype.decodeFromImageElement = function(source) {
          if (!source) {
            throw new ArgumentException_1.default("An image element must be provided.");
          }
          this.reset();
          var element = this.prepareImageElement(source);
          this.imageElement = element;
          var task;
          if (this.isImageLoaded(element)) {
            task = this.decodeOnce(element, false, true);
          } else {
            task = this._decodeOnLoadImage(element);
          }
          return task;
        };
        BrowserCodeReader2.prototype.decodeFromVideoElement = function(source) {
          var element = this._decodeFromVideoElementSetup(source);
          return this._decodeOnLoadVideo(element);
        };
        BrowserCodeReader2.prototype.decodeFromVideoElementContinuously = function(source, callbackFn) {
          var element = this._decodeFromVideoElementSetup(source);
          return this._decodeOnLoadVideoContinuously(element, callbackFn);
        };
        BrowserCodeReader2.prototype._decodeFromVideoElementSetup = function(source) {
          if (!source) {
            throw new ArgumentException_1.default("A video element must be provided.");
          }
          this.reset();
          var element = this.prepareVideoElement(source);
          this.videoElement = element;
          return element;
        };
        BrowserCodeReader2.prototype.decodeFromImageUrl = function(url) {
          if (!url) {
            throw new ArgumentException_1.default("An URL must be provided.");
          }
          this.reset();
          var element = this.prepareImageElement();
          this.imageElement = element;
          var decodeTask = this._decodeOnLoadImage(element);
          element.src = url;
          return decodeTask;
        };
        BrowserCodeReader2.prototype.decodeFromVideoUrl = function(url) {
          if (!url) {
            throw new ArgumentException_1.default("An URL must be provided.");
          }
          this.reset();
          var element = this.prepareVideoElement();
          var decodeTask = this.decodeFromVideoElement(element);
          element.src = url;
          return decodeTask;
        };
        BrowserCodeReader2.prototype.decodeFromVideoUrlContinuously = function(url, callbackFn) {
          if (!url) {
            throw new ArgumentException_1.default("An URL must be provided.");
          }
          this.reset();
          var element = this.prepareVideoElement();
          var decodeTask = this.decodeFromVideoElementContinuously(element, callbackFn);
          element.src = url;
          return decodeTask;
        };
        BrowserCodeReader2.prototype._decodeOnLoadImage = function(element) {
          var _this = this;
          return new Promise(function(resolve, reject) {
            _this.imageLoadedListener = function() {
              return _this.decodeOnce(element, false, true).then(resolve, reject);
            };
            element.addEventListener("load", _this.imageLoadedListener);
          });
        };
        BrowserCodeReader2.prototype._decodeOnLoadVideo = function(videoElement) {
          return __awaiter3(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.playVideoOnLoadAsync(videoElement)];
                case 1:
                  _a.sent();
                  return [4, this.decodeOnce(videoElement)];
                case 2:
                  return [2, _a.sent()];
              }
            });
          });
        };
        BrowserCodeReader2.prototype._decodeOnLoadVideoContinuously = function(videoElement, callbackFn) {
          return __awaiter3(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.playVideoOnLoadAsync(videoElement)];
                case 1:
                  _a.sent();
                  this.decodeContinuously(videoElement, callbackFn);
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        BrowserCodeReader2.prototype.isImageLoaded = function(img) {
          if (!img.complete) {
            return false;
          }
          if (img.naturalWidth === 0) {
            return false;
          }
          return true;
        };
        BrowserCodeReader2.prototype.prepareImageElement = function(imageSource) {
          var imageElement;
          if (typeof imageSource === "undefined") {
            imageElement = document.createElement("img");
            imageElement.width = 200;
            imageElement.height = 200;
          }
          if (typeof imageSource === "string") {
            imageElement = this.getMediaElement(imageSource, "img");
          }
          if (imageSource instanceof HTMLImageElement) {
            imageElement = imageSource;
          }
          return imageElement;
        };
        BrowserCodeReader2.prototype.prepareVideoElement = function(videoSource) {
          var videoElement;
          if (!videoSource && typeof document !== "undefined") {
            videoElement = document.createElement("video");
            videoElement.width = 200;
            videoElement.height = 200;
          }
          if (typeof videoSource === "string") {
            videoElement = this.getMediaElement(videoSource, "video");
          }
          if (videoSource instanceof HTMLVideoElement) {
            videoElement = videoSource;
          }
          videoElement.setAttribute("autoplay", "true");
          videoElement.setAttribute("muted", "true");
          videoElement.setAttribute("playsinline", "true");
          return videoElement;
        };
        BrowserCodeReader2.prototype.decodeOnce = function(element, retryIfNotFound, retryIfChecksumOrFormatError) {
          var _this = this;
          if (retryIfNotFound === void 0) {
            retryIfNotFound = true;
          }
          if (retryIfChecksumOrFormatError === void 0) {
            retryIfChecksumOrFormatError = true;
          }
          this._stopAsyncDecode = false;
          var loop = function(resolve, reject) {
            if (_this._stopAsyncDecode) {
              reject(new NotFoundException_1.default("Video stream has ended before any code could be detected."));
              _this._stopAsyncDecode = void 0;
              return;
            }
            try {
              var result = _this.decode(element);
              resolve(result);
            } catch (e) {
              var ifNotFound = retryIfNotFound && e instanceof NotFoundException_1.default;
              var isChecksumOrFormatError = e instanceof ChecksumException_1.default || e instanceof FormatException_1.default;
              var ifChecksumOrFormat = isChecksumOrFormatError && retryIfChecksumOrFormatError;
              if (ifNotFound || ifChecksumOrFormat) {
                return setTimeout(function() {
                  return loop(resolve, reject);
                }, _this._timeBetweenDecodingAttempts);
              }
              reject(e);
            }
          };
          return new Promise(function(resolve, reject) {
            return loop(resolve, reject);
          });
        };
        BrowserCodeReader2.prototype.decodeContinuously = function(element, callbackFn) {
          var _this = this;
          this._stopContinuousDecode = false;
          var loop = function() {
            if (_this._stopContinuousDecode) {
              _this._stopContinuousDecode = void 0;
              return;
            }
            try {
              var result = _this.decode(element);
              callbackFn(result, null);
              setTimeout(function() {
                return loop();
              }, _this.timeBetweenScansMillis);
            } catch (e) {
              callbackFn(null, e);
              var isChecksumOrFormatError = e instanceof ChecksumException_1.default || e instanceof FormatException_1.default;
              var isNotFound = e instanceof NotFoundException_1.default;
              if (isChecksumOrFormatError || isNotFound) {
                setTimeout(function() {
                  return loop();
                }, _this._timeBetweenDecodingAttempts);
              }
            }
          };
          loop();
        };
        BrowserCodeReader2.prototype.decode = function(element) {
          var binaryBitmap = this.createBinaryBitmap(element);
          return this.decodeBitmap(binaryBitmap);
        };
        BrowserCodeReader2.prototype.createBinaryBitmap = function(mediaElement) {
          var ctx = this.getCaptureCanvasContext(mediaElement);
          this.drawImageOnCanvas(ctx, mediaElement);
          var canvas = this.getCaptureCanvas(mediaElement);
          var luminanceSource = new HTMLCanvasElementLuminanceSource_1.HTMLCanvasElementLuminanceSource(canvas);
          var hybridBinarizer = new HybridBinarizer_1.default(luminanceSource);
          return new BinaryBitmap_1.default(hybridBinarizer);
        };
        BrowserCodeReader2.prototype.getCaptureCanvasContext = function(mediaElement) {
          if (!this.captureCanvasContext) {
            var elem = this.getCaptureCanvas(mediaElement);
            var ctx = elem.getContext("2d");
            this.captureCanvasContext = ctx;
          }
          return this.captureCanvasContext;
        };
        BrowserCodeReader2.prototype.getCaptureCanvas = function(mediaElement) {
          if (!this.captureCanvas) {
            var elem = this.createCaptureCanvas(mediaElement);
            this.captureCanvas = elem;
          }
          return this.captureCanvas;
        };
        BrowserCodeReader2.prototype.drawImageOnCanvas = function(canvasElementContext, srcElement) {
          canvasElementContext.drawImage(srcElement, 0, 0);
        };
        BrowserCodeReader2.prototype.decodeBitmap = function(binaryBitmap) {
          return this.reader.decode(binaryBitmap, this._hints);
        };
        BrowserCodeReader2.prototype.createCaptureCanvas = function(mediaElement) {
          if (typeof document === "undefined") {
            this._destroyCaptureCanvas();
            return null;
          }
          var canvasElement = document.createElement("canvas");
          var width;
          var height;
          if (typeof mediaElement !== "undefined") {
            if (mediaElement instanceof HTMLVideoElement) {
              width = mediaElement.videoWidth;
              height = mediaElement.videoHeight;
            } else if (mediaElement instanceof HTMLImageElement) {
              width = mediaElement.naturalWidth || mediaElement.width;
              height = mediaElement.naturalHeight || mediaElement.height;
            }
          }
          canvasElement.style.width = width + "px";
          canvasElement.style.height = height + "px";
          canvasElement.width = width;
          canvasElement.height = height;
          return canvasElement;
        };
        BrowserCodeReader2.prototype.stopStreams = function() {
          if (this.stream) {
            this.stream.getVideoTracks().forEach(function(t) {
              return t.stop();
            });
            this.stream = void 0;
          }
          if (this._stopAsyncDecode === false) {
            this.stopAsyncDecode();
          }
          if (this._stopContinuousDecode === false) {
            this.stopContinuousDecode();
          }
        };
        BrowserCodeReader2.prototype.reset = function() {
          this.stopStreams();
          this._destroyVideoElement();
          this._destroyImageElement();
          this._destroyCaptureCanvas();
        };
        BrowserCodeReader2.prototype._destroyVideoElement = function() {
          if (!this.videoElement) {
            return;
          }
          if (typeof this.videoEndedListener !== "undefined") {
            this.videoElement.removeEventListener("ended", this.videoEndedListener);
          }
          if (typeof this.videoPlayingEventListener !== "undefined") {
            this.videoElement.removeEventListener("playing", this.videoPlayingEventListener);
          }
          if (typeof this.videoCanPlayListener !== "undefined") {
            this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener);
          }
          this.cleanVideoSource(this.videoElement);
          this.videoElement = void 0;
        };
        BrowserCodeReader2.prototype._destroyImageElement = function() {
          if (!this.imageElement) {
            return;
          }
          if (void 0 !== this.imageLoadedListener) {
            this.imageElement.removeEventListener("load", this.imageLoadedListener);
          }
          this.imageElement.src = void 0;
          this.imageElement.removeAttribute("src");
          this.imageElement = void 0;
        };
        BrowserCodeReader2.prototype._destroyCaptureCanvas = function() {
          this.captureCanvasContext = void 0;
          this.captureCanvas = void 0;
        };
        BrowserCodeReader2.prototype.addVideoSource = function(videoElement, stream) {
          try {
            videoElement.srcObject = stream;
          } catch (err) {
            videoElement.src = URL.createObjectURL(stream);
          }
        };
        BrowserCodeReader2.prototype.cleanVideoSource = function(videoElement) {
          try {
            videoElement.srcObject = null;
          } catch (err) {
            videoElement.src = "";
          }
          this.videoElement.removeAttribute("src");
        };
        return BrowserCodeReader2;
      }()
    );
    exports.BrowserCodeReader = BrowserCodeReader;
  }
});

// node_modules/@zxing/library/esm5/core/BarcodeFormat.js
var require_BarcodeFormat = __commonJS({
  "node_modules/@zxing/library/esm5/core/BarcodeFormat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarcodeFormat2;
    (function(BarcodeFormat3) {
      BarcodeFormat3[BarcodeFormat3["AZTEC"] = 0] = "AZTEC";
      BarcodeFormat3[BarcodeFormat3["CODABAR"] = 1] = "CODABAR";
      BarcodeFormat3[BarcodeFormat3["CODE_39"] = 2] = "CODE_39";
      BarcodeFormat3[BarcodeFormat3["CODE_93"] = 3] = "CODE_93";
      BarcodeFormat3[BarcodeFormat3["CODE_128"] = 4] = "CODE_128";
      BarcodeFormat3[BarcodeFormat3["DATA_MATRIX"] = 5] = "DATA_MATRIX";
      BarcodeFormat3[BarcodeFormat3["EAN_8"] = 6] = "EAN_8";
      BarcodeFormat3[BarcodeFormat3["EAN_13"] = 7] = "EAN_13";
      BarcodeFormat3[BarcodeFormat3["ITF"] = 8] = "ITF";
      BarcodeFormat3[BarcodeFormat3["MAXICODE"] = 9] = "MAXICODE";
      BarcodeFormat3[BarcodeFormat3["PDF_417"] = 10] = "PDF_417";
      BarcodeFormat3[BarcodeFormat3["QR_CODE"] = 11] = "QR_CODE";
      BarcodeFormat3[BarcodeFormat3["RSS_14"] = 12] = "RSS_14";
      BarcodeFormat3[BarcodeFormat3["RSS_EXPANDED"] = 13] = "RSS_EXPANDED";
      BarcodeFormat3[BarcodeFormat3["UPC_A"] = 14] = "UPC_A";
      BarcodeFormat3[BarcodeFormat3["UPC_E"] = 15] = "UPC_E";
      BarcodeFormat3[BarcodeFormat3["UPC_EAN_EXTENSION"] = 16] = "UPC_EAN_EXTENSION";
    })(BarcodeFormat2 || (BarcodeFormat2 = {}));
    exports.default = BarcodeFormat2;
  }
});

// node_modules/@zxing/library/esm5/core/DecodeHintType.js
var require_DecodeHintType = __commonJS({
  "node_modules/@zxing/library/esm5/core/DecodeHintType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DecodeHintType2;
    (function(DecodeHintType3) {
      DecodeHintType3[DecodeHintType3["OTHER"] = 0] = "OTHER";
      DecodeHintType3[DecodeHintType3["PURE_BARCODE"] = 1] = "PURE_BARCODE";
      DecodeHintType3[DecodeHintType3["POSSIBLE_FORMATS"] = 2] = "POSSIBLE_FORMATS";
      DecodeHintType3[DecodeHintType3["TRY_HARDER"] = 3] = "TRY_HARDER";
      DecodeHintType3[DecodeHintType3["CHARACTER_SET"] = 4] = "CHARACTER_SET";
      DecodeHintType3[DecodeHintType3["ALLOWED_LENGTHS"] = 5] = "ALLOWED_LENGTHS";
      DecodeHintType3[DecodeHintType3["ASSUME_CODE_39_CHECK_DIGIT"] = 6] = "ASSUME_CODE_39_CHECK_DIGIT";
      DecodeHintType3[DecodeHintType3["ASSUME_GS1"] = 7] = "ASSUME_GS1";
      DecodeHintType3[DecodeHintType3["RETURN_CODABAR_START_END"] = 8] = "RETURN_CODABAR_START_END";
      DecodeHintType3[DecodeHintType3["NEED_RESULT_POINT_CALLBACK"] = 9] = "NEED_RESULT_POINT_CALLBACK";
      DecodeHintType3[DecodeHintType3["ALLOWED_EAN_EXTENSIONS"] = 10] = "ALLOWED_EAN_EXTENSIONS";
    })(DecodeHintType2 || (DecodeHintType2 = {}));
    exports.default = DecodeHintType2;
  }
});

// node_modules/@zxing/library/esm5/core/ResultMetadataType.js
var require_ResultMetadataType = __commonJS({
  "node_modules/@zxing/library/esm5/core/ResultMetadataType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResultMetadataType;
    (function(ResultMetadataType2) {
      ResultMetadataType2[ResultMetadataType2["OTHER"] = 0] = "OTHER";
      ResultMetadataType2[ResultMetadataType2["ORIENTATION"] = 1] = "ORIENTATION";
      ResultMetadataType2[ResultMetadataType2["BYTE_SEGMENTS"] = 2] = "BYTE_SEGMENTS";
      ResultMetadataType2[ResultMetadataType2["ERROR_CORRECTION_LEVEL"] = 3] = "ERROR_CORRECTION_LEVEL";
      ResultMetadataType2[ResultMetadataType2["ISSUE_NUMBER"] = 4] = "ISSUE_NUMBER";
      ResultMetadataType2[ResultMetadataType2["SUGGESTED_PRICE"] = 5] = "SUGGESTED_PRICE";
      ResultMetadataType2[ResultMetadataType2["POSSIBLE_COUNTRY"] = 6] = "POSSIBLE_COUNTRY";
      ResultMetadataType2[ResultMetadataType2["UPC_EAN_EXTENSION"] = 7] = "UPC_EAN_EXTENSION";
      ResultMetadataType2[ResultMetadataType2["PDF417_EXTRA_METADATA"] = 8] = "PDF417_EXTRA_METADATA";
      ResultMetadataType2[ResultMetadataType2["STRUCTURED_APPEND_SEQUENCE"] = 9] = "STRUCTURED_APPEND_SEQUENCE";
      ResultMetadataType2[ResultMetadataType2["STRUCTURED_APPEND_PARITY"] = 10] = "STRUCTURED_APPEND_PARITY";
    })(ResultMetadataType || (ResultMetadataType = {}));
    exports.default = ResultMetadataType;
  }
});

// node_modules/@zxing/library/esm5/core/common/detector/MathUtils.js
var require_MathUtils = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/detector/MathUtils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MathUtils = (
      /** @class */
      function() {
        function MathUtils2() {
        }
        MathUtils2.prototype.MathUtils = function() {
        };
        MathUtils2.round = function(d) {
          if (NaN === d)
            return 0;
          if (d <= Number.MIN_SAFE_INTEGER)
            return Number.MIN_SAFE_INTEGER;
          if (d >= Number.MAX_SAFE_INTEGER)
            return Number.MAX_SAFE_INTEGER;
          return (
            /*(int) */
            d + (d < 0 ? -0.5 : 0.5) | 0
          );
        };
        MathUtils2.distance = function(aX, aY, bX, bY) {
          var xDiff = aX - bX;
          var yDiff = aY - bY;
          return (
            /*(float) */
            Math.sqrt(xDiff * xDiff + yDiff * yDiff)
          );
        };
        MathUtils2.sum = function(array) {
          var count = 0;
          for (var i = 0, length_1 = array.length; i !== length_1; i++) {
            var a = array[i];
            count += a;
          }
          return count;
        };
        return MathUtils2;
      }()
    );
    exports.default = MathUtils;
  }
});

// node_modules/@zxing/library/esm5/core/util/Float.js
var require_Float = __commonJS({
  "node_modules/@zxing/library/esm5/core/util/Float.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Float = (
      /** @class */
      function() {
        function Float2() {
        }
        Float2.floatToIntBits = function(f) {
          return f;
        };
        return Float2;
      }()
    );
    exports.default = Float;
  }
});

// node_modules/@zxing/library/esm5/core/ResultPoint.js
var require_ResultPoint = __commonJS({
  "node_modules/@zxing/library/esm5/core/ResultPoint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MathUtils_1 = require_MathUtils();
    var Float_1 = require_Float();
    var ResultPoint = (
      /** @class */
      function() {
        function ResultPoint2(x, y) {
          this.x = x;
          this.y = y;
        }
        ResultPoint2.prototype.getX = function() {
          return this.x;
        };
        ResultPoint2.prototype.getY = function() {
          return this.y;
        };
        ResultPoint2.prototype.equals = function(other) {
          if (other instanceof ResultPoint2) {
            var otherPoint = other;
            return this.x === otherPoint.x && this.y === otherPoint.y;
          }
          return false;
        };
        ResultPoint2.prototype.hashCode = function() {
          return 31 * Float_1.default.floatToIntBits(this.x) + Float_1.default.floatToIntBits(this.y);
        };
        ResultPoint2.prototype.toString = function() {
          return "(" + this.x + "," + this.y + ")";
        };
        ResultPoint2.orderBestPatterns = function(patterns) {
          var zeroOneDistance = this.distance(patterns[0], patterns[1]);
          var oneTwoDistance = this.distance(patterns[1], patterns[2]);
          var zeroTwoDistance = this.distance(patterns[0], patterns[2]);
          var pointA;
          var pointB;
          var pointC;
          if (oneTwoDistance >= zeroOneDistance && oneTwoDistance >= zeroTwoDistance) {
            pointB = patterns[0];
            pointA = patterns[1];
            pointC = patterns[2];
          } else if (zeroTwoDistance >= oneTwoDistance && zeroTwoDistance >= zeroOneDistance) {
            pointB = patterns[1];
            pointA = patterns[0];
            pointC = patterns[2];
          } else {
            pointB = patterns[2];
            pointA = patterns[0];
            pointC = patterns[1];
          }
          if (this.crossProductZ(pointA, pointB, pointC) < 0) {
            var temp = pointA;
            pointA = pointC;
            pointC = temp;
          }
          patterns[0] = pointA;
          patterns[1] = pointB;
          patterns[2] = pointC;
        };
        ResultPoint2.distance = function(pattern1, pattern2) {
          return MathUtils_1.default.distance(pattern1.x, pattern1.y, pattern2.x, pattern2.y);
        };
        ResultPoint2.crossProductZ = function(pointA, pointB, pointC) {
          var bX = pointB.x;
          var bY = pointB.y;
          return (pointC.x - bX) * (pointA.y - bY) - (pointC.y - bY) * (pointA.x - bX);
        };
        return ResultPoint2;
      }()
    );
    exports.default = ResultPoint;
  }
});

// node_modules/@zxing/library/esm5/core/oned/OneDReader.js
var require_OneDReader = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/OneDReader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BitArray_1 = require_BitArray();
    var DecodeHintType_1 = require_DecodeHintType();
    var ResultMetadataType_1 = require_ResultMetadataType();
    var ResultPoint_1 = require_ResultPoint();
    var NotFoundException_1 = require_NotFoundException();
    var OneDReader = (
      /** @class */
      function() {
        function OneDReader2() {
        }
        OneDReader2.prototype.decode = function(image, hints) {
          try {
            return this.doDecode(image, hints);
          } catch (nfe) {
            var tryHarder = hints && hints.get(DecodeHintType_1.default.TRY_HARDER) === true;
            if (tryHarder && image.isRotateSupported()) {
              var rotatedImage = image.rotateCounterClockwise();
              var result = this.doDecode(rotatedImage, hints);
              var metadata = result.getResultMetadata();
              var orientation_1 = 270;
              if (metadata !== null && metadata.get(ResultMetadataType_1.default.ORIENTATION) === true) {
                orientation_1 = orientation_1 + metadata.get(ResultMetadataType_1.default.ORIENTATION) % 360;
              }
              result.putMetadata(ResultMetadataType_1.default.ORIENTATION, orientation_1);
              var points = result.getResultPoints();
              if (points !== null) {
                var height = rotatedImage.getHeight();
                for (var i = 0; i < points.length; i++) {
                  points[i] = new ResultPoint_1.default(height - points[i].getY() - 1, points[i].getX());
                }
              }
              return result;
            } else {
              throw new NotFoundException_1.default();
            }
          }
        };
        OneDReader2.prototype.reset = function() {
        };
        OneDReader2.prototype.doDecode = function(image, hints) {
          var width = image.getWidth();
          var height = image.getHeight();
          var row = new BitArray_1.default(width);
          var tryHarder = hints && hints.get(DecodeHintType_1.default.TRY_HARDER) === true;
          var rowStep = Math.max(1, height >> (tryHarder ? 8 : 5));
          var maxLines;
          if (tryHarder) {
            maxLines = height;
          } else {
            maxLines = 15;
          }
          var middle = Math.trunc(height / 2);
          for (var x = 0; x < maxLines; x++) {
            var rowStepsAboveOrBelow = Math.trunc((x + 1) / 2);
            var isAbove = (x & 1) === 0;
            var rowNumber = middle + rowStep * (isAbove ? rowStepsAboveOrBelow : -rowStepsAboveOrBelow);
            if (rowNumber < 0 || rowNumber >= height) {
              break;
            }
            try {
              row = image.getBlackRow(rowNumber, row);
            } catch (ignored) {
              continue;
            }
            var _loop_1 = function(attempt2) {
              if (attempt2 === 1) {
                row.reverse();
                if (hints && hints.get(DecodeHintType_1.default.NEED_RESULT_POINT_CALLBACK) === true) {
                  var newHints_1 = /* @__PURE__ */ new Map();
                  hints.forEach(function(hint, key) {
                    return newHints_1.set(key, hint);
                  });
                  newHints_1.delete(DecodeHintType_1.default.NEED_RESULT_POINT_CALLBACK);
                  hints = newHints_1;
                }
              }
              try {
                var result = this_1.decodeRow(rowNumber, row, hints);
                if (attempt2 === 1) {
                  result.putMetadata(ResultMetadataType_1.default.ORIENTATION, 180);
                  var points = result.getResultPoints();
                  if (points !== null) {
                    points[0] = new ResultPoint_1.default(width - points[0].getX() - 1, points[0].getY());
                    points[1] = new ResultPoint_1.default(width - points[1].getX() - 1, points[1].getY());
                  }
                }
                return { value: result };
              } catch (re) {
              }
            };
            var this_1 = this;
            for (var attempt = 0; attempt < 2; attempt++) {
              var state_1 = _loop_1(attempt);
              if (typeof state_1 === "object")
                return state_1.value;
            }
          }
          throw new NotFoundException_1.default();
        };
        OneDReader2.recordPattern = function(row, start, counters) {
          var numCounters = counters.length;
          for (var index = 0; index < numCounters; index++)
            counters[index] = 0;
          var end = row.getSize();
          if (start >= end) {
            throw new NotFoundException_1.default();
          }
          var isWhite = !row.get(start);
          var counterPosition = 0;
          var i = start;
          while (i < end) {
            if (row.get(i) !== isWhite) {
              counters[counterPosition]++;
            } else {
              if (++counterPosition === numCounters) {
                break;
              } else {
                counters[counterPosition] = 1;
                isWhite = !isWhite;
              }
            }
            i++;
          }
          if (!(counterPosition === numCounters || counterPosition === numCounters - 1 && i === end)) {
            throw new NotFoundException_1.default();
          }
        };
        OneDReader2.recordPatternInReverse = function(row, start, counters) {
          var numTransitionsLeft = counters.length;
          var last = row.get(start);
          while (start > 0 && numTransitionsLeft >= 0) {
            if (row.get(--start) !== last) {
              numTransitionsLeft--;
              last = !last;
            }
          }
          if (numTransitionsLeft >= 0) {
            throw new NotFoundException_1.default();
          }
          OneDReader2.recordPattern(row, start + 1, counters);
        };
        OneDReader2.patternMatchVariance = function(counters, pattern, maxIndividualVariance) {
          var numCounters = counters.length;
          var total = 0;
          var patternLength = 0;
          for (var i = 0; i < numCounters; i++) {
            total += counters[i];
            patternLength += pattern[i];
          }
          if (total < patternLength) {
            return Number.POSITIVE_INFINITY;
          }
          var unitBarWidth = total / patternLength;
          maxIndividualVariance *= unitBarWidth;
          var totalVariance = 0;
          for (var x = 0; x < numCounters; x++) {
            var counter = counters[x];
            var scaledPattern = pattern[x] * unitBarWidth;
            var variance = counter > scaledPattern ? counter - scaledPattern : scaledPattern - counter;
            if (variance > maxIndividualVariance) {
              return Number.POSITIVE_INFINITY;
            }
            totalVariance += variance;
          }
          return totalVariance / total;
        };
        return OneDReader2;
      }()
    );
    exports.default = OneDReader;
  }
});

// node_modules/@zxing/library/esm5/core/Result.js
var require_Result = __commonJS({
  "node_modules/@zxing/library/esm5/core/Result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResultPoint_1 = require_ResultPoint();
    var System_1 = require_System();
    var Result2 = (
      /** @class */
      function() {
        function Result3(text, rawBytes, numBits, resultPoints, format, timestamp) {
          this.text = text;
          this.rawBytes = rawBytes;
          this.numBits = numBits;
          this.resultPoints = resultPoints;
          this.format = format;
          this.timestamp = timestamp;
          this.text = text;
          this.rawBytes = rawBytes;
          if (void 0 === numBits || null === numBits) {
            this.numBits = rawBytes === null || rawBytes === void 0 ? 0 : 8 * rawBytes.length;
          } else {
            this.numBits = numBits;
          }
          this.resultPoints = resultPoints;
          this.format = format;
          this.resultMetadata = null;
          if (void 0 === timestamp || null === timestamp) {
            this.timestamp = System_1.default.currentTimeMillis();
          } else {
            this.timestamp = timestamp;
          }
        }
        Result3.prototype.getText = function() {
          return this.text;
        };
        Result3.prototype.getRawBytes = function() {
          return this.rawBytes;
        };
        Result3.prototype.getNumBits = function() {
          return this.numBits;
        };
        Result3.prototype.getResultPoints = function() {
          return this.resultPoints;
        };
        Result3.prototype.getBarcodeFormat = function() {
          return this.format;
        };
        Result3.prototype.getResultMetadata = function() {
          return this.resultMetadata;
        };
        Result3.prototype.putMetadata = function(type, value) {
          if (this.resultMetadata === null) {
            this.resultMetadata = /* @__PURE__ */ new Map();
          }
          this.resultMetadata.set(type, value);
        };
        Result3.prototype.putAllMetadata = function(metadata) {
          if (metadata !== null) {
            if (this.resultMetadata === null) {
              this.resultMetadata = metadata;
            } else {
              this.resultMetadata = new Map(metadata);
            }
          }
        };
        Result3.prototype.addResultPoints = function(newPoints) {
          var oldPoints = this.resultPoints;
          if (oldPoints === null) {
            this.resultPoints = newPoints;
          } else if (newPoints !== null && newPoints.length > 0) {
            var allPoints = new ResultPoint_1.default[oldPoints.length + newPoints.length]();
            System_1.default.arraycopy(oldPoints, 0, allPoints, 0, oldPoints.length);
            System_1.default.arraycopy(newPoints, 0, allPoints, oldPoints.length, newPoints.length);
            this.resultPoints = allPoints;
          }
        };
        Result3.prototype.getTimestamp = function() {
          return this.timestamp;
        };
        Result3.prototype.toString = function() {
          return this.text;
        };
        return Result3;
      }()
    );
    exports.default = Result2;
  }
});

// node_modules/@zxing/library/esm5/core/oned/Code39Reader.js
var require_Code39Reader = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/Code39Reader.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarcodeFormat_1 = require_BarcodeFormat();
    var ChecksumException_1 = require_ChecksumException();
    var FormatException_1 = require_FormatException();
    var NotFoundException_1 = require_NotFoundException();
    var OneDReader_1 = require_OneDReader();
    var Result_1 = require_Result();
    var ResultPoint_1 = require_ResultPoint();
    var Code39Reader = (
      /** @class */
      function(_super) {
        __extends(Code39Reader2, _super);
        function Code39Reader2(usingCheckDigit, extendedMode) {
          if (usingCheckDigit === void 0) {
            usingCheckDigit = false;
          }
          if (extendedMode === void 0) {
            extendedMode = false;
          }
          var _this = _super.call(this) || this;
          _this.usingCheckDigit = usingCheckDigit;
          _this.extendedMode = extendedMode;
          _this.decodeRowResult = "";
          _this.counters = new Array(9);
          return _this;
        }
        Code39Reader2.prototype.decodeRow = function(rowNumber, row, hints) {
          var theCounters = this.counters;
          theCounters.fill(0);
          this.decodeRowResult = "";
          var start = Code39Reader2.findAsteriskPattern(row, theCounters);
          var nextStart = row.getNextSet(start[1]);
          var end = row.getSize();
          var decodedChar;
          var lastStart;
          do {
            Code39Reader2.recordPattern(row, nextStart, theCounters);
            var pattern = Code39Reader2.toNarrowWidePattern(theCounters);
            if (pattern < 0) {
              throw new NotFoundException_1.default();
            }
            decodedChar = Code39Reader2.patternToChar(pattern);
            this.decodeRowResult += decodedChar;
            lastStart = nextStart;
            for (var _i = 0, theCounters_1 = theCounters; _i < theCounters_1.length; _i++) {
              var counter = theCounters_1[_i];
              nextStart += counter;
            }
            nextStart = row.getNextSet(nextStart);
          } while (decodedChar !== "*");
          this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
          var lastPatternSize = 0;
          for (var _a = 0, theCounters_2 = theCounters; _a < theCounters_2.length; _a++) {
            var counter = theCounters_2[_a];
            lastPatternSize += counter;
          }
          var whiteSpaceAfterEnd = nextStart - lastStart - lastPatternSize;
          if (nextStart !== end && whiteSpaceAfterEnd * 2 < lastPatternSize) {
            throw new NotFoundException_1.default();
          }
          if (this.usingCheckDigit) {
            var max = this.decodeRowResult.length - 1;
            var total = 0;
            for (var i = 0; i < max; i++) {
              total += Code39Reader2.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(i));
            }
            if (this.decodeRowResult.charAt(max) !== Code39Reader2.ALPHABET_STRING.charAt(total % 43)) {
              throw new ChecksumException_1.default();
            }
            this.decodeRowResult = this.decodeRowResult.substring(0, max);
          }
          if (this.decodeRowResult.length === 0) {
            throw new NotFoundException_1.default();
          }
          var resultString;
          if (this.extendedMode) {
            resultString = Code39Reader2.decodeExtended(this.decodeRowResult);
          } else {
            resultString = this.decodeRowResult;
          }
          var left = (start[1] + start[0]) / 2;
          var right = lastStart + lastPatternSize / 2;
          return new Result_1.default(resultString, null, 0, [new ResultPoint_1.default(left, rowNumber), new ResultPoint_1.default(right, rowNumber)], BarcodeFormat_1.default.CODE_39, (/* @__PURE__ */ new Date()).getTime());
        };
        Code39Reader2.findAsteriskPattern = function(row, counters) {
          var width = row.getSize();
          var rowOffset = row.getNextSet(0);
          var counterPosition = 0;
          var patternStart = rowOffset;
          var isWhite = false;
          var patternLength = counters.length;
          for (var i = rowOffset; i < width; i++) {
            if (row.get(i) !== isWhite) {
              counters[counterPosition]++;
            } else {
              if (counterPosition === patternLength - 1) {
                if (this.toNarrowWidePattern(counters) === Code39Reader2.ASTERISK_ENCODING && row.isRange(Math.max(0, patternStart - Math.floor((i - patternStart) / 2)), patternStart, false)) {
                  return [patternStart, i];
                }
                patternStart += counters[0] + counters[1];
                counters.copyWithin(0, 2, 2 + counterPosition - 1);
                counters[counterPosition - 1] = 0;
                counters[counterPosition] = 0;
                counterPosition--;
              } else {
                counterPosition++;
              }
              counters[counterPosition] = 1;
              isWhite = !isWhite;
            }
          }
          throw new NotFoundException_1.default();
        };
        Code39Reader2.toNarrowWidePattern = function(counters) {
          var numCounters = counters.length;
          var maxNarrowCounter = 0;
          var wideCounters;
          do {
            var minCounter = 2147483647;
            for (var _i = 0, counters_1 = counters; _i < counters_1.length; _i++) {
              var counter = counters_1[_i];
              if (counter < minCounter && counter > maxNarrowCounter) {
                minCounter = counter;
              }
            }
            maxNarrowCounter = minCounter;
            wideCounters = 0;
            var totalWideCountersWidth = 0;
            var pattern = 0;
            for (var i = 0; i < numCounters; i++) {
              var counter = counters[i];
              if (counter > maxNarrowCounter) {
                pattern |= 1 << numCounters - 1 - i;
                wideCounters++;
                totalWideCountersWidth += counter;
              }
            }
            if (wideCounters === 3) {
              for (var i = 0; i < numCounters && wideCounters > 0; i++) {
                var counter = counters[i];
                if (counter > maxNarrowCounter) {
                  wideCounters--;
                  if (counter * 2 >= totalWideCountersWidth) {
                    return -1;
                  }
                }
              }
              return pattern;
            }
          } while (wideCounters > 3);
          return -1;
        };
        Code39Reader2.patternToChar = function(pattern) {
          for (var i = 0; i < Code39Reader2.CHARACTER_ENCODINGS.length; i++) {
            if (Code39Reader2.CHARACTER_ENCODINGS[i] === pattern) {
              return Code39Reader2.ALPHABET_STRING.charAt(i);
            }
          }
          if (pattern === Code39Reader2.ASTERISK_ENCODING) {
            return "*";
          }
          throw new NotFoundException_1.default();
        };
        Code39Reader2.decodeExtended = function(encoded) {
          var length = encoded.length;
          var decoded = "";
          for (var i = 0; i < length; i++) {
            var c = encoded.charAt(i);
            if (c === "+" || c === "$" || c === "%" || c === "/") {
              var next = encoded.charAt(i + 1);
              var decodedChar = "\0";
              switch (c) {
                case "+":
                  if (next >= "A" && next <= "Z") {
                    decodedChar = String.fromCharCode(next.charCodeAt(0) + 32);
                  } else {
                    throw new FormatException_1.default();
                  }
                  break;
                case "$":
                  if (next >= "A" && next <= "Z") {
                    decodedChar = String.fromCharCode(next.charCodeAt(0) - 64);
                  } else {
                    throw new FormatException_1.default();
                  }
                  break;
                case "%":
                  if (next >= "A" && next <= "E") {
                    decodedChar = String.fromCharCode(next.charCodeAt(0) - 38);
                  } else if (next >= "F" && next <= "J") {
                    decodedChar = String.fromCharCode(next.charCodeAt(0) - 11);
                  } else if (next >= "K" && next <= "O") {
                    decodedChar = String.fromCharCode(next.charCodeAt(0) + 16);
                  } else if (next >= "P" && next <= "T") {
                    decodedChar = String.fromCharCode(next.charCodeAt(0) + 43);
                  } else if (next === "U") {
                    decodedChar = "\0";
                  } else if (next === "V") {
                    decodedChar = "@";
                  } else if (next === "W") {
                    decodedChar = "`";
                  } else if (next === "X" || next === "Y" || next === "Z") {
                    decodedChar = "\x7F";
                  } else {
                    throw new FormatException_1.default();
                  }
                  break;
                case "/":
                  if (next >= "A" && next <= "O") {
                    decodedChar = String.fromCharCode(next.charCodeAt(0) - 32);
                  } else if (next === "Z") {
                    decodedChar = ":";
                  } else {
                    throw new FormatException_1.default();
                  }
                  break;
              }
              decoded += decodedChar;
              i++;
            } else {
              decoded += c;
            }
          }
          return decoded;
        };
        Code39Reader2.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%";
        Code39Reader2.CHARACTER_ENCODINGS = [
          52,
          289,
          97,
          352,
          49,
          304,
          112,
          37,
          292,
          100,
          265,
          73,
          328,
          25,
          280,
          88,
          13,
          268,
          76,
          28,
          259,
          67,
          322,
          19,
          274,
          82,
          7,
          262,
          70,
          22,
          385,
          193,
          448,
          145,
          400,
          208,
          133,
          388,
          196,
          168,
          162,
          138,
          42
          // /-%
        ];
        Code39Reader2.ASTERISK_ENCODING = 148;
        return Code39Reader2;
      }(OneDReader_1.default)
    );
    exports.default = Code39Reader;
  }
});

// node_modules/@zxing/library/esm5/core/oned/Code128Reader.js
var require_Code128Reader = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/Code128Reader.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarcodeFormat_1 = require_BarcodeFormat();
    var DecodeHintType_1 = require_DecodeHintType();
    var Result_1 = require_Result();
    var ResultPoint_1 = require_ResultPoint();
    var OneDReader_1 = require_OneDReader();
    var NotFoundException_1 = require_NotFoundException();
    var FormatException_1 = require_FormatException();
    var ChecksumException_1 = require_ChecksumException();
    var Code128Reader = (
      /** @class */
      function(_super) {
        __extends(Code128Reader2, _super);
        function Code128Reader2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Code128Reader2.findStartPattern = function(row) {
          var width = row.getSize();
          var rowOffset = row.getNextSet(0);
          var counterPosition = 0;
          var counters = [0, 0, 0, 0, 0, 0];
          var patternStart = rowOffset;
          var isWhite = false;
          var patternLength = 6;
          for (var i = rowOffset; i < width; i++) {
            if (row.get(i) !== isWhite) {
              counters[counterPosition]++;
            } else {
              if (counterPosition === patternLength - 1) {
                var bestVariance = Code128Reader2.MAX_AVG_VARIANCE;
                var bestMatch = -1;
                for (var startCode = Code128Reader2.CODE_START_A; startCode <= Code128Reader2.CODE_START_C; startCode++) {
                  var variance = OneDReader_1.default.patternMatchVariance(counters, Code128Reader2.CODE_PATTERNS[startCode], Code128Reader2.MAX_INDIVIDUAL_VARIANCE);
                  if (variance < bestVariance) {
                    bestVariance = variance;
                    bestMatch = startCode;
                  }
                }
                if (bestMatch >= 0 && row.isRange(Math.max(0, patternStart - (i - patternStart) / 2), patternStart, false)) {
                  return [patternStart, i, bestMatch];
                }
                patternStart += counters[0] + counters[1];
                counters.splice(0, 2);
                counters[counterPosition - 1] = 0;
                counters[counterPosition] = 0;
                counterPosition--;
              } else {
                counterPosition++;
              }
              counters[counterPosition] = 1;
              isWhite = !isWhite;
            }
          }
          throw new NotFoundException_1.default();
        };
        Code128Reader2.decodeCode = function(row, counters, rowOffset) {
          OneDReader_1.default.recordPattern(row, rowOffset, counters);
          var bestVariance = Code128Reader2.MAX_AVG_VARIANCE;
          var bestMatch = -1;
          for (var d = 0; d < Code128Reader2.CODE_PATTERNS.length; d++) {
            var pattern = Code128Reader2.CODE_PATTERNS[d];
            var variance = this.patternMatchVariance(counters, pattern, Code128Reader2.MAX_INDIVIDUAL_VARIANCE);
            if (variance < bestVariance) {
              bestVariance = variance;
              bestMatch = d;
            }
          }
          if (bestMatch >= 0) {
            return bestMatch;
          } else {
            throw new NotFoundException_1.default();
          }
        };
        Code128Reader2.prototype.decodeRow = function(rowNumber, row, hints) {
          var convertFNC1 = hints && hints.get(DecodeHintType_1.default.ASSUME_GS1) === true;
          var startPatternInfo = Code128Reader2.findStartPattern(row);
          var startCode = startPatternInfo[2];
          var currentRawCodesIndex = 0;
          var rawCodes = new Uint8Array(20);
          rawCodes[currentRawCodesIndex++] = startCode;
          var codeSet;
          switch (startCode) {
            case Code128Reader2.CODE_START_A:
              codeSet = Code128Reader2.CODE_CODE_A;
              break;
            case Code128Reader2.CODE_START_B:
              codeSet = Code128Reader2.CODE_CODE_B;
              break;
            case Code128Reader2.CODE_START_C:
              codeSet = Code128Reader2.CODE_CODE_C;
              break;
            default:
              throw new FormatException_1.default();
          }
          var done = false;
          var isNextShifted = false;
          var result = "";
          var lastStart = startPatternInfo[0];
          var nextStart = startPatternInfo[1];
          var counters = [0, 0, 0, 0, 0, 0];
          var lastCode = 0;
          var code = 0;
          var checksumTotal = startCode;
          var multiplier = 0;
          var lastCharacterWasPrintable = true;
          var upperMode = false;
          var shiftUpperMode = false;
          while (!done) {
            var unshift = isNextShifted;
            isNextShifted = false;
            lastCode = code;
            code = Code128Reader2.decodeCode(row, counters, nextStart);
            rawCodes[currentRawCodesIndex++] = code;
            if (code !== Code128Reader2.CODE_STOP) {
              lastCharacterWasPrintable = true;
            }
            if (code !== Code128Reader2.CODE_STOP) {
              multiplier++;
              checksumTotal += multiplier * code;
            }
            lastStart = nextStart;
            nextStart += counters.reduce(function(previous, current) {
              return previous + current;
            }, 0);
            switch (code) {
              case Code128Reader2.CODE_START_A:
              case Code128Reader2.CODE_START_B:
              case Code128Reader2.CODE_START_C:
                throw new FormatException_1.default();
            }
            switch (codeSet) {
              case Code128Reader2.CODE_CODE_A:
                if (code < 64) {
                  if (shiftUpperMode === upperMode) {
                    result += String.fromCharCode(" ".charCodeAt(0) + code);
                  } else {
                    result += String.fromCharCode(" ".charCodeAt(0) + code + 128);
                  }
                  shiftUpperMode = false;
                } else if (code < 96) {
                  if (shiftUpperMode === upperMode) {
                    result += String.fromCharCode(code - 64);
                  } else {
                    result += String.fromCharCode(code + 64);
                  }
                  shiftUpperMode = false;
                } else {
                  if (code !== Code128Reader2.CODE_STOP) {
                    lastCharacterWasPrintable = false;
                  }
                  switch (code) {
                    case Code128Reader2.CODE_FNC_1:
                      if (convertFNC1) {
                        if (result.length === 0) {
                          result += "]C1";
                        } else {
                          result += String.fromCharCode(29);
                        }
                      }
                      break;
                    case Code128Reader2.CODE_FNC_2:
                    case Code128Reader2.CODE_FNC_3:
                      break;
                    case Code128Reader2.CODE_FNC_4_A:
                      if (!upperMode && shiftUpperMode) {
                        upperMode = true;
                        shiftUpperMode = false;
                      } else if (upperMode && shiftUpperMode) {
                        upperMode = false;
                        shiftUpperMode = false;
                      } else {
                        shiftUpperMode = true;
                      }
                      break;
                    case Code128Reader2.CODE_SHIFT:
                      isNextShifted = true;
                      codeSet = Code128Reader2.CODE_CODE_B;
                      break;
                    case Code128Reader2.CODE_CODE_B:
                      codeSet = Code128Reader2.CODE_CODE_B;
                      break;
                    case Code128Reader2.CODE_CODE_C:
                      codeSet = Code128Reader2.CODE_CODE_C;
                      break;
                    case Code128Reader2.CODE_STOP:
                      done = true;
                      break;
                  }
                }
                break;
              case Code128Reader2.CODE_CODE_B:
                if (code < 96) {
                  if (shiftUpperMode === upperMode) {
                    result += String.fromCharCode(" ".charCodeAt(0) + code);
                  } else {
                    result += String.fromCharCode(" ".charCodeAt(0) + code + 128);
                  }
                  shiftUpperMode = false;
                } else {
                  if (code !== Code128Reader2.CODE_STOP) {
                    lastCharacterWasPrintable = false;
                  }
                  switch (code) {
                    case Code128Reader2.CODE_FNC_1:
                      if (convertFNC1) {
                        if (result.length === 0) {
                          result += "]C1";
                        } else {
                          result += String.fromCharCode(29);
                        }
                      }
                      break;
                    case Code128Reader2.CODE_FNC_2:
                    case Code128Reader2.CODE_FNC_3:
                      break;
                    case Code128Reader2.CODE_FNC_4_B:
                      if (!upperMode && shiftUpperMode) {
                        upperMode = true;
                        shiftUpperMode = false;
                      } else if (upperMode && shiftUpperMode) {
                        upperMode = false;
                        shiftUpperMode = false;
                      } else {
                        shiftUpperMode = true;
                      }
                      break;
                    case Code128Reader2.CODE_SHIFT:
                      isNextShifted = true;
                      codeSet = Code128Reader2.CODE_CODE_A;
                      break;
                    case Code128Reader2.CODE_CODE_A:
                      codeSet = Code128Reader2.CODE_CODE_A;
                      break;
                    case Code128Reader2.CODE_CODE_C:
                      codeSet = Code128Reader2.CODE_CODE_C;
                      break;
                    case Code128Reader2.CODE_STOP:
                      done = true;
                      break;
                  }
                }
                break;
              case Code128Reader2.CODE_CODE_C:
                if (code < 100) {
                  if (code < 10) {
                    result += "0";
                  }
                  result += code;
                } else {
                  if (code !== Code128Reader2.CODE_STOP) {
                    lastCharacterWasPrintable = false;
                  }
                  switch (code) {
                    case Code128Reader2.CODE_FNC_1:
                      if (convertFNC1) {
                        if (result.length === 0) {
                          result += "]C1";
                        } else {
                          result += String.fromCharCode(29);
                        }
                      }
                      break;
                    case Code128Reader2.CODE_CODE_A:
                      codeSet = Code128Reader2.CODE_CODE_A;
                      break;
                    case Code128Reader2.CODE_CODE_B:
                      codeSet = Code128Reader2.CODE_CODE_B;
                      break;
                    case Code128Reader2.CODE_STOP:
                      done = true;
                      break;
                  }
                }
                break;
            }
            if (unshift) {
              codeSet = codeSet === Code128Reader2.CODE_CODE_A ? Code128Reader2.CODE_CODE_B : Code128Reader2.CODE_CODE_A;
            }
          }
          var lastPatternSize = nextStart - lastStart;
          nextStart = row.getNextUnset(nextStart);
          if (!row.isRange(nextStart, Math.min(row.getSize(), nextStart + (nextStart - lastStart) / 2), false)) {
            throw new NotFoundException_1.default();
          }
          checksumTotal -= multiplier * lastCode;
          if (checksumTotal % 103 !== lastCode) {
            throw new ChecksumException_1.default();
          }
          var resultLength = result.length;
          if (resultLength === 0) {
            throw new NotFoundException_1.default();
          }
          if (resultLength > 0 && lastCharacterWasPrintable) {
            if (codeSet === Code128Reader2.CODE_CODE_C) {
              result = result.substring(0, resultLength - 2);
            } else {
              result = result.substring(0, resultLength - 1);
            }
          }
          var left = (startPatternInfo[1] + startPatternInfo[0]) / 2;
          var right = lastStart + lastPatternSize / 2;
          var rawCodesSize = rawCodes.length;
          var rawBytes = new Uint8Array(rawCodesSize);
          for (var i = 0; i < rawCodesSize; i++) {
            rawBytes[i] = rawCodes[i];
          }
          var points = [new ResultPoint_1.default(left, rowNumber), new ResultPoint_1.default(right, rowNumber)];
          return new Result_1.default(result, rawBytes, 0, points, BarcodeFormat_1.default.CODE_128, (/* @__PURE__ */ new Date()).getTime());
        };
        Code128Reader2.CODE_PATTERNS = [
          [2, 1, 2, 2, 2, 2],
          [2, 2, 2, 1, 2, 2],
          [2, 2, 2, 2, 2, 1],
          [1, 2, 1, 2, 2, 3],
          [1, 2, 1, 3, 2, 2],
          [1, 3, 1, 2, 2, 2],
          [1, 2, 2, 2, 1, 3],
          [1, 2, 2, 3, 1, 2],
          [1, 3, 2, 2, 1, 2],
          [2, 2, 1, 2, 1, 3],
          [2, 2, 1, 3, 1, 2],
          [2, 3, 1, 2, 1, 2],
          [1, 1, 2, 2, 3, 2],
          [1, 2, 2, 1, 3, 2],
          [1, 2, 2, 2, 3, 1],
          [1, 1, 3, 2, 2, 2],
          [1, 2, 3, 1, 2, 2],
          [1, 2, 3, 2, 2, 1],
          [2, 2, 3, 2, 1, 1],
          [2, 2, 1, 1, 3, 2],
          [2, 2, 1, 2, 3, 1],
          [2, 1, 3, 2, 1, 2],
          [2, 2, 3, 1, 1, 2],
          [3, 1, 2, 1, 3, 1],
          [3, 1, 1, 2, 2, 2],
          [3, 2, 1, 1, 2, 2],
          [3, 2, 1, 2, 2, 1],
          [3, 1, 2, 2, 1, 2],
          [3, 2, 2, 1, 1, 2],
          [3, 2, 2, 2, 1, 1],
          [2, 1, 2, 1, 2, 3],
          [2, 1, 2, 3, 2, 1],
          [2, 3, 2, 1, 2, 1],
          [1, 1, 1, 3, 2, 3],
          [1, 3, 1, 1, 2, 3],
          [1, 3, 1, 3, 2, 1],
          [1, 1, 2, 3, 1, 3],
          [1, 3, 2, 1, 1, 3],
          [1, 3, 2, 3, 1, 1],
          [2, 1, 1, 3, 1, 3],
          [2, 3, 1, 1, 1, 3],
          [2, 3, 1, 3, 1, 1],
          [1, 1, 2, 1, 3, 3],
          [1, 1, 2, 3, 3, 1],
          [1, 3, 2, 1, 3, 1],
          [1, 1, 3, 1, 2, 3],
          [1, 1, 3, 3, 2, 1],
          [1, 3, 3, 1, 2, 1],
          [3, 1, 3, 1, 2, 1],
          [2, 1, 1, 3, 3, 1],
          [2, 3, 1, 1, 3, 1],
          [2, 1, 3, 1, 1, 3],
          [2, 1, 3, 3, 1, 1],
          [2, 1, 3, 1, 3, 1],
          [3, 1, 1, 1, 2, 3],
          [3, 1, 1, 3, 2, 1],
          [3, 3, 1, 1, 2, 1],
          [3, 1, 2, 1, 1, 3],
          [3, 1, 2, 3, 1, 1],
          [3, 3, 2, 1, 1, 1],
          [3, 1, 4, 1, 1, 1],
          [2, 2, 1, 4, 1, 1],
          [4, 3, 1, 1, 1, 1],
          [1, 1, 1, 2, 2, 4],
          [1, 1, 1, 4, 2, 2],
          [1, 2, 1, 1, 2, 4],
          [1, 2, 1, 4, 2, 1],
          [1, 4, 1, 1, 2, 2],
          [1, 4, 1, 2, 2, 1],
          [1, 1, 2, 2, 1, 4],
          [1, 1, 2, 4, 1, 2],
          [1, 2, 2, 1, 1, 4],
          [1, 2, 2, 4, 1, 1],
          [1, 4, 2, 1, 1, 2],
          [1, 4, 2, 2, 1, 1],
          [2, 4, 1, 2, 1, 1],
          [2, 2, 1, 1, 1, 4],
          [4, 1, 3, 1, 1, 1],
          [2, 4, 1, 1, 1, 2],
          [1, 3, 4, 1, 1, 1],
          [1, 1, 1, 2, 4, 2],
          [1, 2, 1, 1, 4, 2],
          [1, 2, 1, 2, 4, 1],
          [1, 1, 4, 2, 1, 2],
          [1, 2, 4, 1, 1, 2],
          [1, 2, 4, 2, 1, 1],
          [4, 1, 1, 2, 1, 2],
          [4, 2, 1, 1, 1, 2],
          [4, 2, 1, 2, 1, 1],
          [2, 1, 2, 1, 4, 1],
          [2, 1, 4, 1, 2, 1],
          [4, 1, 2, 1, 2, 1],
          [1, 1, 1, 1, 4, 3],
          [1, 1, 1, 3, 4, 1],
          [1, 3, 1, 1, 4, 1],
          [1, 1, 4, 1, 1, 3],
          [1, 1, 4, 3, 1, 1],
          [4, 1, 1, 1, 1, 3],
          [4, 1, 1, 3, 1, 1],
          [1, 1, 3, 1, 4, 1],
          [1, 1, 4, 1, 3, 1],
          [3, 1, 1, 1, 4, 1],
          [4, 1, 1, 1, 3, 1],
          [2, 1, 1, 4, 1, 2],
          [2, 1, 1, 2, 1, 4],
          [2, 1, 1, 2, 3, 2],
          [2, 3, 3, 1, 1, 1, 2]
        ];
        Code128Reader2.MAX_AVG_VARIANCE = 0.25;
        Code128Reader2.MAX_INDIVIDUAL_VARIANCE = 0.7;
        Code128Reader2.CODE_SHIFT = 98;
        Code128Reader2.CODE_CODE_C = 99;
        Code128Reader2.CODE_CODE_B = 100;
        Code128Reader2.CODE_CODE_A = 101;
        Code128Reader2.CODE_FNC_1 = 102;
        Code128Reader2.CODE_FNC_2 = 97;
        Code128Reader2.CODE_FNC_3 = 96;
        Code128Reader2.CODE_FNC_4_A = 101;
        Code128Reader2.CODE_FNC_4_B = 100;
        Code128Reader2.CODE_START_A = 103;
        Code128Reader2.CODE_START_B = 104;
        Code128Reader2.CODE_START_C = 105;
        Code128Reader2.CODE_STOP = 106;
        return Code128Reader2;
      }(OneDReader_1.default)
    );
    exports.default = Code128Reader;
  }
});

// node_modules/@zxing/library/esm5/core/oned/rss/AbstractRSSReader.js
var require_AbstractRSSReader = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/rss/AbstractRSSReader.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var OneDReader_1 = require_OneDReader();
    var NotFoundException_1 = require_NotFoundException();
    var MathUtils_1 = require_MathUtils();
    var AbstractRSSReader = (
      /** @class */
      function(_super) {
        __extends(AbstractRSSReader2, _super);
        function AbstractRSSReader2() {
          var _this = _super.call(this) || this;
          _this.decodeFinderCounters = new Array(4);
          _this.dataCharacterCounters = new Array(8);
          _this.oddRoundingErrors = new Array(4);
          _this.evenRoundingErrors = new Array(4);
          _this.oddCounts = new Array(_this.dataCharacterCounters.length / 2);
          _this.evenCounts = new Array(_this.dataCharacterCounters.length / 2);
          return _this;
        }
        AbstractRSSReader2.prototype.getDecodeFinderCounters = function() {
          return this.decodeFinderCounters;
        };
        AbstractRSSReader2.prototype.getDataCharacterCounters = function() {
          return this.dataCharacterCounters;
        };
        AbstractRSSReader2.prototype.getOddRoundingErrors = function() {
          return this.oddRoundingErrors;
        };
        AbstractRSSReader2.prototype.getEvenRoundingErrors = function() {
          return this.evenRoundingErrors;
        };
        AbstractRSSReader2.prototype.getOddCounts = function() {
          return this.oddCounts;
        };
        AbstractRSSReader2.prototype.getEvenCounts = function() {
          return this.evenCounts;
        };
        AbstractRSSReader2.prototype.parseFinderValue = function(counters, finderPatterns) {
          for (var value = 0; value < finderPatterns.length; value++) {
            if (OneDReader_1.default.patternMatchVariance(counters, finderPatterns[value], AbstractRSSReader2.MAX_INDIVIDUAL_VARIANCE) < AbstractRSSReader2.MAX_AVG_VARIANCE) {
              return value;
            }
          }
          throw new NotFoundException_1.default();
        };
        AbstractRSSReader2.count = function(array) {
          return MathUtils_1.default.sum(new Int32Array(array));
        };
        AbstractRSSReader2.increment = function(array, errors) {
          var index = 0;
          var biggestError = errors[0];
          for (var i = 1; i < array.length; i++) {
            if (errors[i] > biggestError) {
              biggestError = errors[i];
              index = i;
            }
          }
          array[index]++;
        };
        AbstractRSSReader2.decrement = function(array, errors) {
          var index = 0;
          var biggestError = errors[0];
          for (var i = 1; i < array.length; i++) {
            if (errors[i] < biggestError) {
              biggestError = errors[i];
              index = i;
            }
          }
          array[index]--;
        };
        AbstractRSSReader2.isFinderPattern = function(counters) {
          var firstTwoSum = counters[0] + counters[1];
          var sum = firstTwoSum + counters[2] + counters[3];
          var ratio = firstTwoSum / sum;
          if (ratio >= AbstractRSSReader2.MIN_FINDER_PATTERN_RATIO && ratio <= AbstractRSSReader2.MAX_FINDER_PATTERN_RATIO) {
            var minCounter = Number.MAX_SAFE_INTEGER;
            var maxCounter = Number.MIN_SAFE_INTEGER;
            for (var _i = 0, counters_1 = counters; _i < counters_1.length; _i++) {
              var counter = counters_1[_i];
              if (counter > maxCounter) {
                maxCounter = counter;
              }
              if (counter < minCounter) {
                minCounter = counter;
              }
            }
            return maxCounter < 10 * minCounter;
          }
          return false;
        };
        AbstractRSSReader2.MAX_AVG_VARIANCE = 0.2;
        AbstractRSSReader2.MAX_INDIVIDUAL_VARIANCE = 0.45;
        AbstractRSSReader2.MIN_FINDER_PATTERN_RATIO = 9.5 / 12;
        AbstractRSSReader2.MAX_FINDER_PATTERN_RATIO = 12.5 / 14;
        return AbstractRSSReader2;
      }(OneDReader_1.default)
    );
    exports.default = AbstractRSSReader;
  }
});

// node_modules/@zxing/library/esm5/core/oned/rss/DataCharacter.js
var require_DataCharacter = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/rss/DataCharacter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataCharacter = (
      /** @class */
      function() {
        function DataCharacter2(value, checksumPortion) {
          this.value = value;
          this.checksumPortion = checksumPortion;
        }
        DataCharacter2.prototype.getValue = function() {
          return this.value;
        };
        DataCharacter2.prototype.getChecksumPortion = function() {
          return this.checksumPortion;
        };
        DataCharacter2.prototype.toString = function() {
          return this.value + "(" + this.checksumPortion + ")";
        };
        DataCharacter2.prototype.equals = function(o) {
          if (!(o instanceof DataCharacter2)) {
            return false;
          }
          var that = o;
          return this.value === that.value && this.checksumPortion === that.checksumPortion;
        };
        DataCharacter2.prototype.hashCode = function() {
          return this.value ^ this.checksumPortion;
        };
        return DataCharacter2;
      }()
    );
    exports.default = DataCharacter;
  }
});

// node_modules/@zxing/library/esm5/core/oned/rss/Pair.js
var require_Pair = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/rss/Pair.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataCharacter_1 = require_DataCharacter();
    var Pair = (
      /** @class */
      function(_super) {
        __extends(Pair2, _super);
        function Pair2(value, checksumPortion, finderPattern) {
          var _this = _super.call(this, value, checksumPortion) || this;
          _this.count = 0;
          _this.finderPattern = finderPattern;
          return _this;
        }
        Pair2.prototype.getFinderPattern = function() {
          return this.finderPattern;
        };
        Pair2.prototype.getCount = function() {
          return this.count;
        };
        Pair2.prototype.incrementCount = function() {
          this.count++;
        };
        return Pair2;
      }(DataCharacter_1.default)
    );
    exports.default = Pair;
  }
});

// node_modules/@zxing/library/esm5/core/oned/rss/FinderPattern.js
var require_FinderPattern = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/rss/FinderPattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResultPoint_1 = require_ResultPoint();
    var FinderPattern = (
      /** @class */
      function() {
        function FinderPattern2(value, startEnd, start, end, rowNumber) {
          this.value = value;
          this.startEnd = startEnd;
          this.value = value;
          this.startEnd = startEnd;
          this.resultPoints = new Array();
          this.resultPoints.push(new ResultPoint_1.default(start, rowNumber));
          this.resultPoints.push(new ResultPoint_1.default(end, rowNumber));
        }
        FinderPattern2.prototype.getValue = function() {
          return this.value;
        };
        FinderPattern2.prototype.getStartEnd = function() {
          return this.startEnd;
        };
        FinderPattern2.prototype.getResultPoints = function() {
          return this.resultPoints;
        };
        FinderPattern2.prototype.equals = function(o) {
          if (!(o instanceof FinderPattern2)) {
            return false;
          }
          var that = o;
          return this.value === that.value;
        };
        FinderPattern2.prototype.hashCode = function() {
          return this.value;
        };
        return FinderPattern2;
      }()
    );
    exports.default = FinderPattern;
  }
});

// node_modules/@zxing/library/esm5/core/oned/rss/RSSUtils.js
var require_RSSUtils = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/rss/RSSUtils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RSSUtils = (
      /** @class */
      function() {
        function RSSUtils2() {
        }
        RSSUtils2.prototype.RSSUtils = function() {
        };
        RSSUtils2.getRSSvalue = function(widths, maxWidth, noNarrow) {
          var n = 0;
          for (var _i = 0, widths_1 = widths; _i < widths_1.length; _i++) {
            var width = widths_1[_i];
            n += width;
          }
          var val = 0;
          var narrowMask = 0;
          var elements = widths.length;
          for (var bar = 0; bar < elements - 1; bar++) {
            var elmWidth = void 0;
            for (elmWidth = 1, narrowMask |= 1 << bar; elmWidth < widths[bar]; elmWidth++, narrowMask &= ~(1 << bar)) {
              var subVal = RSSUtils2.combins(n - elmWidth - 1, elements - bar - 2);
              if (noNarrow && narrowMask === 0 && n - elmWidth - (elements - bar - 1) >= elements - bar - 1) {
                subVal -= RSSUtils2.combins(n - elmWidth - (elements - bar), elements - bar - 2);
              }
              if (elements - bar - 1 > 1) {
                var lessVal = 0;
                for (var mxwElement = n - elmWidth - (elements - bar - 2); mxwElement > maxWidth; mxwElement--) {
                  lessVal += RSSUtils2.combins(n - elmWidth - mxwElement - 1, elements - bar - 3);
                }
                subVal -= lessVal * (elements - 1 - bar);
              } else if (n - elmWidth > maxWidth) {
                subVal--;
              }
              val += subVal;
            }
            n -= elmWidth;
          }
          return val;
        };
        RSSUtils2.combins = function(n, r) {
          var maxDenom;
          var minDenom;
          if (n - r > r) {
            minDenom = r;
            maxDenom = n - r;
          } else {
            minDenom = n - r;
            maxDenom = r;
          }
          var val = 1;
          var j = 1;
          for (var i = n; i > maxDenom; i--) {
            val *= i;
            if (j <= minDenom) {
              val /= j;
              j++;
            }
          }
          while (j <= minDenom) {
            val /= j;
            j++;
          }
          return val;
        };
        return RSSUtils2;
      }()
    );
    exports.default = RSSUtils;
  }
});

// node_modules/@zxing/library/esm5/core/oned/rss/RSS14Reader.js
var require_RSS14Reader = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/rss/RSS14Reader.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var AbstractRSSReader_1 = require_AbstractRSSReader();
    var Pair_1 = require_Pair();
    var Result_1 = require_Result();
    var DecodeHintType_1 = require_DecodeHintType();
    var NotFoundException_1 = require_NotFoundException();
    var StringBuilder_1 = require_StringBuilder();
    var BarcodeFormat_1 = require_BarcodeFormat();
    var ResultPoint_1 = require_ResultPoint();
    var FinderPattern_1 = require_FinderPattern();
    var DataCharacter_1 = require_DataCharacter();
    var MathUtils_1 = require_MathUtils();
    var RSSUtils_1 = require_RSSUtils();
    var System_1 = require_System();
    var OneDReader_1 = require_OneDReader();
    var RSS14Reader = (
      /** @class */
      function(_super) {
        __extends(RSS14Reader2, _super);
        function RSS14Reader2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.possibleLeftPairs = [];
          _this.possibleRightPairs = [];
          return _this;
        }
        RSS14Reader2.prototype.decodeRow = function(rowNumber, row, hints) {
          var leftPair = this.decodePair(row, false, rowNumber, hints);
          RSS14Reader2.addOrTally(this.possibleLeftPairs, leftPair);
          row.reverse();
          var rightPair = this.decodePair(row, true, rowNumber, hints);
          RSS14Reader2.addOrTally(this.possibleRightPairs, rightPair);
          row.reverse();
          for (var _i = 0, _a = this.possibleLeftPairs; _i < _a.length; _i++) {
            var left = _a[_i];
            if (left.getCount() > 1) {
              for (var _b = 0, _c = this.possibleRightPairs; _b < _c.length; _b++) {
                var right = _c[_b];
                if (right.getCount() > 1 && RSS14Reader2.checkChecksum(left, right)) {
                  return RSS14Reader2.constructResult(left, right);
                }
              }
            }
          }
          throw new NotFoundException_1.default();
        };
        RSS14Reader2.addOrTally = function(possiblePairs, pair) {
          if (pair == null) {
            return;
          }
          var found = false;
          for (var _i = 0, possiblePairs_1 = possiblePairs; _i < possiblePairs_1.length; _i++) {
            var other = possiblePairs_1[_i];
            if (other.getValue() === pair.getValue()) {
              other.incrementCount();
              found = true;
              break;
            }
          }
          if (!found) {
            possiblePairs.push(pair);
          }
        };
        RSS14Reader2.prototype.reset = function() {
          this.possibleLeftPairs.length = 0;
          this.possibleRightPairs.length = 0;
        };
        RSS14Reader2.constructResult = function(leftPair, rightPair) {
          var symbolValue = 4537077 * leftPair.getValue() + rightPair.getValue();
          var text = new String(symbolValue).toString();
          var buffer = new StringBuilder_1.default();
          for (var i = 13 - text.length; i > 0; i--) {
            buffer.append("0");
          }
          buffer.append(text);
          var checkDigit = 0;
          for (var i = 0; i < 13; i++) {
            var digit = buffer.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
            checkDigit += (i & 1) === 0 ? 3 * digit : digit;
          }
          checkDigit = 10 - checkDigit % 10;
          if (checkDigit === 10) {
            checkDigit = 0;
          }
          buffer.append(checkDigit.toString());
          var leftPoints = leftPair.getFinderPattern().getResultPoints();
          var rightPoints = rightPair.getFinderPattern().getResultPoints();
          return new Result_1.default(buffer.toString(), null, 0, [leftPoints[0], leftPoints[1], rightPoints[0], rightPoints[1]], BarcodeFormat_1.default.RSS_14, (/* @__PURE__ */ new Date()).getTime());
        };
        RSS14Reader2.checkChecksum = function(leftPair, rightPair) {
          var checkValue = (leftPair.getChecksumPortion() + 16 * rightPair.getChecksumPortion()) % 79;
          var targetCheckValue = 9 * leftPair.getFinderPattern().getValue() + rightPair.getFinderPattern().getValue();
          if (targetCheckValue > 72) {
            targetCheckValue--;
          }
          if (targetCheckValue > 8) {
            targetCheckValue--;
          }
          return checkValue === targetCheckValue;
        };
        RSS14Reader2.prototype.decodePair = function(row, right, rowNumber, hints) {
          try {
            var startEnd = this.findFinderPattern(row, right);
            var pattern = this.parseFoundFinderPattern(row, rowNumber, right, startEnd);
            var resultPointCallback = hints == null ? null : hints.get(DecodeHintType_1.default.NEED_RESULT_POINT_CALLBACK);
            if (resultPointCallback != null) {
              var center = (startEnd[0] + startEnd[1]) / 2;
              if (right) {
                center = row.getSize() - 1 - center;
              }
              resultPointCallback.foundPossibleResultPoint(new ResultPoint_1.default(center, rowNumber));
            }
            var outside = this.decodeDataCharacter(row, pattern, true);
            var inside = this.decodeDataCharacter(row, pattern, false);
            return new Pair_1.default(1597 * outside.getValue() + inside.getValue(), outside.getChecksumPortion() + 4 * inside.getChecksumPortion(), pattern);
          } catch (err) {
            return null;
          }
        };
        RSS14Reader2.prototype.decodeDataCharacter = function(row, pattern, outsideChar) {
          var counters = this.getDataCharacterCounters();
          for (var x = 0; x < counters.length; x++) {
            counters[x] = 0;
          }
          if (outsideChar) {
            OneDReader_1.default.recordPatternInReverse(row, pattern.getStartEnd()[0], counters);
          } else {
            OneDReader_1.default.recordPattern(row, pattern.getStartEnd()[1] + 1, counters);
            for (var i = 0, j = counters.length - 1; i < j; i++, j--) {
              var temp = counters[i];
              counters[i] = counters[j];
              counters[j] = temp;
            }
          }
          var numModules = outsideChar ? 16 : 15;
          var elementWidth = MathUtils_1.default.sum(new Int32Array(counters)) / numModules;
          var oddCounts = this.getOddCounts();
          var evenCounts = this.getEvenCounts();
          var oddRoundingErrors = this.getOddRoundingErrors();
          var evenRoundingErrors = this.getEvenRoundingErrors();
          for (var i = 0; i < counters.length; i++) {
            var value = counters[i] / elementWidth;
            var count = Math.floor(value + 0.5);
            if (count < 1) {
              count = 1;
            } else if (count > 8) {
              count = 8;
            }
            var offset = Math.floor(i / 2);
            if ((i & 1) === 0) {
              oddCounts[offset] = count;
              oddRoundingErrors[offset] = value - count;
            } else {
              evenCounts[offset] = count;
              evenRoundingErrors[offset] = value - count;
            }
          }
          this.adjustOddEvenCounts(outsideChar, numModules);
          var oddSum = 0;
          var oddChecksumPortion = 0;
          for (var i = oddCounts.length - 1; i >= 0; i--) {
            oddChecksumPortion *= 9;
            oddChecksumPortion += oddCounts[i];
            oddSum += oddCounts[i];
          }
          var evenChecksumPortion = 0;
          var evenSum = 0;
          for (var i = evenCounts.length - 1; i >= 0; i--) {
            evenChecksumPortion *= 9;
            evenChecksumPortion += evenCounts[i];
            evenSum += evenCounts[i];
          }
          var checksumPortion = oddChecksumPortion + 3 * evenChecksumPortion;
          if (outsideChar) {
            if ((oddSum & 1) !== 0 || oddSum > 12 || oddSum < 4) {
              throw new NotFoundException_1.default();
            }
            var group = (12 - oddSum) / 2;
            var oddWidest = RSS14Reader2.OUTSIDE_ODD_WIDEST[group];
            var evenWidest = 9 - oddWidest;
            var vOdd = RSSUtils_1.default.getRSSvalue(oddCounts, oddWidest, false);
            var vEven = RSSUtils_1.default.getRSSvalue(evenCounts, evenWidest, true);
            var tEven = RSS14Reader2.OUTSIDE_EVEN_TOTAL_SUBSET[group];
            var gSum = RSS14Reader2.OUTSIDE_GSUM[group];
            return new DataCharacter_1.default(vOdd * tEven + vEven + gSum, checksumPortion);
          } else {
            if ((evenSum & 1) !== 0 || evenSum > 10 || evenSum < 4) {
              throw new NotFoundException_1.default();
            }
            var group = (10 - evenSum) / 2;
            var oddWidest = RSS14Reader2.INSIDE_ODD_WIDEST[group];
            var evenWidest = 9 - oddWidest;
            var vOdd = RSSUtils_1.default.getRSSvalue(oddCounts, oddWidest, true);
            var vEven = RSSUtils_1.default.getRSSvalue(evenCounts, evenWidest, false);
            var tOdd = RSS14Reader2.INSIDE_ODD_TOTAL_SUBSET[group];
            var gSum = RSS14Reader2.INSIDE_GSUM[group];
            return new DataCharacter_1.default(vEven * tOdd + vOdd + gSum, checksumPortion);
          }
        };
        RSS14Reader2.prototype.findFinderPattern = function(row, rightFinderPattern) {
          var counters = this.getDecodeFinderCounters();
          counters[0] = 0;
          counters[1] = 0;
          counters[2] = 0;
          counters[3] = 0;
          var width = row.getSize();
          var isWhite = false;
          var rowOffset = 0;
          while (rowOffset < width) {
            isWhite = !row.get(rowOffset);
            if (rightFinderPattern === isWhite) {
              break;
            }
            rowOffset++;
          }
          var counterPosition = 0;
          var patternStart = rowOffset;
          for (var x = rowOffset; x < width; x++) {
            if (row.get(x) !== isWhite) {
              counters[counterPosition]++;
            } else {
              if (counterPosition === 3) {
                if (AbstractRSSReader_1.default.isFinderPattern(counters)) {
                  return [patternStart, x];
                }
                patternStart += counters[0] + counters[1];
                counters[0] = counters[2];
                counters[1] = counters[3];
                counters[2] = 0;
                counters[3] = 0;
                counterPosition--;
              } else {
                counterPosition++;
              }
              counters[counterPosition] = 1;
              isWhite = !isWhite;
            }
          }
          throw new NotFoundException_1.default();
        };
        RSS14Reader2.prototype.parseFoundFinderPattern = function(row, rowNumber, right, startEnd) {
          var firstIsBlack = row.get(startEnd[0]);
          var firstElementStart = startEnd[0] - 1;
          while (firstElementStart >= 0 && firstIsBlack !== row.get(firstElementStart)) {
            firstElementStart--;
          }
          firstElementStart++;
          var firstCounter = startEnd[0] - firstElementStart;
          var counters = this.getDecodeFinderCounters();
          var copy = new Array(counters.length);
          System_1.default.arraycopy(counters, 0, copy, 1, counters.length - 1);
          copy[0] = firstCounter;
          var value = this.parseFinderValue(copy, RSS14Reader2.FINDER_PATTERNS);
          var start = firstElementStart;
          var end = startEnd[1];
          if (right) {
            start = row.getSize() - 1 - start;
            end = row.getSize() - 1 - end;
          }
          return new FinderPattern_1.default(value, [firstElementStart, startEnd[1]], start, end, rowNumber);
        };
        RSS14Reader2.prototype.adjustOddEvenCounts = function(outsideChar, numModules) {
          var oddSum = MathUtils_1.default.sum(new Int32Array(this.getOddCounts()));
          var evenSum = MathUtils_1.default.sum(new Int32Array(this.getEvenCounts()));
          var incrementOdd = false;
          var decrementOdd = false;
          var incrementEven = false;
          var decrementEven = false;
          if (outsideChar) {
            if (oddSum > 12) {
              decrementOdd = true;
            } else if (oddSum < 4) {
              incrementOdd = true;
            }
            if (evenSum > 12) {
              decrementEven = true;
            } else if (evenSum < 4) {
              incrementEven = true;
            }
          } else {
            if (oddSum > 11) {
              decrementOdd = true;
            } else if (oddSum < 5) {
              incrementOdd = true;
            }
            if (evenSum > 10) {
              decrementEven = true;
            } else if (evenSum < 4) {
              incrementEven = true;
            }
          }
          var mismatch = oddSum + evenSum - numModules;
          var oddParityBad = (oddSum & 1) === (outsideChar ? 1 : 0);
          var evenParityBad = (evenSum & 1) === 1;
          if (mismatch === 1) {
            if (oddParityBad) {
              if (evenParityBad) {
                throw new NotFoundException_1.default();
              }
              decrementOdd = true;
            } else {
              if (!evenParityBad) {
                throw new NotFoundException_1.default();
              }
              decrementEven = true;
            }
          } else if (mismatch === -1) {
            if (oddParityBad) {
              if (evenParityBad) {
                throw new NotFoundException_1.default();
              }
              incrementOdd = true;
            } else {
              if (!evenParityBad) {
                throw new NotFoundException_1.default();
              }
              incrementEven = true;
            }
          } else if (mismatch === 0) {
            if (oddParityBad) {
              if (!evenParityBad) {
                throw new NotFoundException_1.default();
              }
              if (oddSum < evenSum) {
                incrementOdd = true;
                decrementEven = true;
              } else {
                decrementOdd = true;
                incrementEven = true;
              }
            } else {
              if (evenParityBad) {
                throw new NotFoundException_1.default();
              }
            }
          } else {
            throw new NotFoundException_1.default();
          }
          if (incrementOdd) {
            if (decrementOdd) {
              throw new NotFoundException_1.default();
            }
            AbstractRSSReader_1.default.increment(this.getOddCounts(), this.getOddRoundingErrors());
          }
          if (decrementOdd) {
            AbstractRSSReader_1.default.decrement(this.getOddCounts(), this.getOddRoundingErrors());
          }
          if (incrementEven) {
            if (decrementEven) {
              throw new NotFoundException_1.default();
            }
            AbstractRSSReader_1.default.increment(this.getEvenCounts(), this.getOddRoundingErrors());
          }
          if (decrementEven) {
            AbstractRSSReader_1.default.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
          }
        };
        RSS14Reader2.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126];
        RSS14Reader2.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81];
        RSS14Reader2.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715];
        RSS14Reader2.INSIDE_GSUM = [0, 336, 1036, 1516];
        RSS14Reader2.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1];
        RSS14Reader2.INSIDE_ODD_WIDEST = [2, 4, 6, 8];
        RSS14Reader2.FINDER_PATTERNS = [
          [3, 8, 2, 1],
          [3, 5, 5, 1],
          [3, 3, 7, 1],
          [3, 1, 9, 1],
          [2, 7, 4, 1],
          [2, 5, 6, 1],
          [2, 3, 8, 1],
          [1, 5, 7, 1],
          [1, 3, 9, 1]
        ];
        return RSS14Reader2;
      }(AbstractRSSReader_1.default)
    );
    exports.default = RSS14Reader;
  }
});

// node_modules/@zxing/library/esm5/core/oned/ITFReader.js
var require_ITFReader = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/ITFReader.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarcodeFormat_1 = require_BarcodeFormat();
    var DecodeHintType_1 = require_DecodeHintType();
    var Result_1 = require_Result();
    var ResultPoint_1 = require_ResultPoint();
    var OneDReader_1 = require_OneDReader();
    var StringBuilder_1 = require_StringBuilder();
    var System_1 = require_System();
    var FormatException_1 = require_FormatException();
    var NotFoundException_1 = require_NotFoundException();
    var ITFReader = (
      /** @class */
      function(_super) {
        __extends(ITFReader2, _super);
        function ITFReader2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.narrowLineWidth = -1;
          return _this;
        }
        ITFReader2.prototype.decodeRow = function(rowNumber, row, hints) {
          var startRange = this.decodeStart(row);
          var endRange = this.decodeEnd(row);
          var result = new StringBuilder_1.default();
          ITFReader2.decodeMiddle(row, startRange[1], endRange[0], result);
          var resultString = result.toString();
          var allowedLengths = null;
          if (hints != null) {
            allowedLengths = hints.get(DecodeHintType_1.default.ALLOWED_LENGTHS);
          }
          if (allowedLengths == null) {
            allowedLengths = ITFReader2.DEFAULT_ALLOWED_LENGTHS;
          }
          var length = resultString.length;
          var lengthOK = false;
          var maxAllowedLength = 0;
          for (var _i = 0, allowedLengths_1 = allowedLengths; _i < allowedLengths_1.length; _i++) {
            var value = allowedLengths_1[_i];
            if (length === value) {
              lengthOK = true;
              break;
            }
            if (value > maxAllowedLength) {
              maxAllowedLength = value;
            }
          }
          if (!lengthOK && length > maxAllowedLength) {
            lengthOK = true;
          }
          if (!lengthOK) {
            throw new FormatException_1.default();
          }
          var points = [new ResultPoint_1.default(startRange[1], rowNumber), new ResultPoint_1.default(endRange[0], rowNumber)];
          var resultReturn = new Result_1.default(
            resultString,
            null,
            // no natural byte representation for these barcodes
            0,
            points,
            BarcodeFormat_1.default.ITF,
            (/* @__PURE__ */ new Date()).getTime()
          );
          return resultReturn;
        };
        ITFReader2.decodeMiddle = function(row, payloadStart, payloadEnd, resultString) {
          var counterDigitPair = new Array(10);
          var counterBlack = new Array(5);
          var counterWhite = new Array(5);
          counterDigitPair.fill(0);
          counterBlack.fill(0);
          counterWhite.fill(0);
          while (payloadStart < payloadEnd) {
            OneDReader_1.default.recordPattern(row, payloadStart, counterDigitPair);
            for (var k = 0; k < 5; k++) {
              var twoK = 2 * k;
              counterBlack[k] = counterDigitPair[twoK];
              counterWhite[k] = counterDigitPair[twoK + 1];
            }
            var bestMatch = ITFReader2.decodeDigit(counterBlack);
            resultString.append(bestMatch.toString());
            bestMatch = this.decodeDigit(counterWhite);
            resultString.append(bestMatch.toString());
            counterDigitPair.forEach(function(counterDigit) {
              payloadStart += counterDigit;
            });
          }
        };
        ITFReader2.prototype.decodeStart = function(row) {
          var endStart = ITFReader2.skipWhiteSpace(row);
          var startPattern = ITFReader2.findGuardPattern(row, endStart, ITFReader2.START_PATTERN);
          this.narrowLineWidth = (startPattern[1] - startPattern[0]) / 4;
          this.validateQuietZone(row, startPattern[0]);
          return startPattern;
        };
        ITFReader2.prototype.validateQuietZone = function(row, startPattern) {
          var quietCount = this.narrowLineWidth * 10;
          quietCount = quietCount < startPattern ? quietCount : startPattern;
          for (var i = startPattern - 1; quietCount > 0 && i >= 0; i--) {
            if (row.get(i)) {
              break;
            }
            quietCount--;
          }
          if (quietCount !== 0) {
            throw new NotFoundException_1.default();
          }
        };
        ITFReader2.skipWhiteSpace = function(row) {
          var width = row.getSize();
          var endStart = row.getNextSet(0);
          if (endStart === width) {
            throw new NotFoundException_1.default();
          }
          return endStart;
        };
        ITFReader2.prototype.decodeEnd = function(row) {
          row.reverse();
          try {
            var endStart = ITFReader2.skipWhiteSpace(row);
            var endPattern = void 0;
            try {
              endPattern = ITFReader2.findGuardPattern(row, endStart, ITFReader2.END_PATTERN_REVERSED[0]);
            } catch (NotFoundException) {
              endPattern = ITFReader2.findGuardPattern(row, endStart, ITFReader2.END_PATTERN_REVERSED[1]);
            }
            this.validateQuietZone(row, endPattern[0]);
            var temp = endPattern[0];
            endPattern[0] = row.getSize() - endPattern[1];
            endPattern[1] = row.getSize() - temp;
            return endPattern;
          } finally {
            row.reverse();
          }
        };
        ITFReader2.findGuardPattern = function(row, rowOffset, pattern) {
          var patternLength = pattern.length;
          var counters = new Array(patternLength);
          var width = row.getSize();
          var isWhite = false;
          var counterPosition = 0;
          var patternStart = rowOffset;
          counters.fill(0);
          for (var x = rowOffset; x < width; x++) {
            if (row.get(x) !== isWhite) {
              counters[counterPosition]++;
            } else {
              if (counterPosition === patternLength - 1) {
                if (OneDReader_1.default.patternMatchVariance(counters, pattern, ITFReader2.MAX_INDIVIDUAL_VARIANCE) < ITFReader2.MAX_AVG_VARIANCE) {
                  return [patternStart, x];
                }
                patternStart += counters[0] + counters[1];
                System_1.default.arraycopy(counters, 2, counters, 0, counterPosition - 1);
                counters[counterPosition - 1] = 0;
                counters[counterPosition] = 0;
                counterPosition--;
              } else {
                counterPosition++;
              }
              counters[counterPosition] = 1;
              isWhite = !isWhite;
            }
          }
          throw new NotFoundException_1.default();
        };
        ITFReader2.decodeDigit = function(counters) {
          var bestVariance = ITFReader2.MAX_AVG_VARIANCE;
          var bestMatch = -1;
          var max = ITFReader2.PATTERNS.length;
          for (var i = 0; i < max; i++) {
            var pattern = ITFReader2.PATTERNS[i];
            var variance = OneDReader_1.default.patternMatchVariance(counters, pattern, ITFReader2.MAX_INDIVIDUAL_VARIANCE);
            if (variance < bestVariance) {
              bestVariance = variance;
              bestMatch = i;
            } else if (variance === bestVariance) {
              bestMatch = -1;
            }
          }
          if (bestMatch >= 0) {
            return bestMatch % 10;
          } else {
            throw new NotFoundException_1.default();
          }
        };
        ITFReader2.W = 3;
        ITFReader2.w = 2;
        ITFReader2.N = 1;
        ITFReader2.PATTERNS = [
          [1, 1, 2, 2, 1],
          [2, 1, 1, 1, 2],
          [1, 2, 1, 1, 2],
          [2, 2, 1, 1, 1],
          [1, 1, 2, 1, 2],
          [2, 1, 2, 1, 1],
          [1, 2, 2, 1, 1],
          [1, 1, 1, 2, 2],
          [2, 1, 1, 2, 1],
          [1, 2, 1, 2, 1],
          [1, 1, 3, 3, 1],
          [3, 1, 1, 1, 3],
          [1, 3, 1, 1, 3],
          [3, 3, 1, 1, 1],
          [1, 1, 3, 1, 3],
          [3, 1, 3, 1, 1],
          [1, 3, 3, 1, 1],
          [1, 1, 1, 3, 3],
          [3, 1, 1, 3, 1],
          [1, 3, 1, 3, 1]
          // 9
        ];
        ITFReader2.MAX_AVG_VARIANCE = 0.38;
        ITFReader2.MAX_INDIVIDUAL_VARIANCE = 0.5;
        ITFReader2.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14];
        ITFReader2.START_PATTERN = [1, 1, 1, 1];
        ITFReader2.END_PATTERN_REVERSED = [
          [1, 1, 2],
          [1, 1, 3]
          // 3x
        ];
        return ITFReader2;
      }(OneDReader_1.default)
    );
    exports.default = ITFReader;
  }
});

// node_modules/@zxing/library/esm5/core/oned/UPCEANExtension5Support.js
var require_UPCEANExtension5Support = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/UPCEANExtension5Support.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarcodeFormat_1 = require_BarcodeFormat();
    var UPCEANReader_1 = require_UPCEANReader();
    var Result_1 = require_Result();
    var ResultPoint_1 = require_ResultPoint();
    var ResultMetadataType_1 = require_ResultMetadataType();
    var NotFoundException_1 = require_NotFoundException();
    var UPCEANExtension5Support = (
      /** @class */
      function() {
        function UPCEANExtension5Support2() {
          this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];
          this.decodeMiddleCounters = [0, 0, 0, 0];
          this.decodeRowStringBuffer = "";
        }
        UPCEANExtension5Support2.prototype.decodeRow = function(rowNumber, row, extensionStartRange) {
          var result = this.decodeRowStringBuffer;
          var end = this.decodeMiddle(row, extensionStartRange, result);
          var resultString = result.toString();
          var extensionData = UPCEANExtension5Support2.parseExtensionString(resultString);
          var resultPoints = [
            new ResultPoint_1.default((extensionStartRange[0] + extensionStartRange[1]) / 2, rowNumber),
            new ResultPoint_1.default(end, rowNumber)
          ];
          var extensionResult = new Result_1.default(resultString, null, 0, resultPoints, BarcodeFormat_1.default.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
          if (extensionData != null) {
            extensionResult.putAllMetadata(extensionData);
          }
          return extensionResult;
        };
        UPCEANExtension5Support2.prototype.decodeMiddle = function(row, startRange, resultString) {
          var counters = this.decodeMiddleCounters;
          counters[0] = 0;
          counters[1] = 0;
          counters[2] = 0;
          counters[3] = 0;
          var end = row.getSize();
          var rowOffset = startRange[1];
          var lgPatternFound = 0;
          for (var x = 0; x < 5 && rowOffset < end; x++) {
            var bestMatch = UPCEANReader_1.default.decodeDigit(row, counters, rowOffset, UPCEANReader_1.default.L_AND_G_PATTERNS);
            resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
            for (var _i = 0, counters_1 = counters; _i < counters_1.length; _i++) {
              var counter = counters_1[_i];
              rowOffset += counter;
            }
            if (bestMatch >= 10) {
              lgPatternFound |= 1 << 4 - x;
            }
            if (x !== 4) {
              rowOffset = row.getNextSet(rowOffset);
              rowOffset = row.getNextUnset(rowOffset);
            }
          }
          if (resultString.length !== 5) {
            throw new NotFoundException_1.default();
          }
          var checkDigit = this.determineCheckDigit(lgPatternFound);
          if (UPCEANExtension5Support2.extensionChecksum(resultString.toString()) !== checkDigit) {
            throw new NotFoundException_1.default();
          }
          return rowOffset;
        };
        UPCEANExtension5Support2.extensionChecksum = function(s) {
          var length = s.length;
          var sum = 0;
          for (var i = length - 2; i >= 0; i -= 2) {
            sum += s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
          }
          sum *= 3;
          for (var i = length - 1; i >= 0; i -= 2) {
            sum += s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
          }
          sum *= 3;
          return sum % 10;
        };
        UPCEANExtension5Support2.prototype.determineCheckDigit = function(lgPatternFound) {
          for (var d = 0; d < 10; d++) {
            if (lgPatternFound === this.CHECK_DIGIT_ENCODINGS[d]) {
              return d;
            }
          }
          throw new NotFoundException_1.default();
        };
        UPCEANExtension5Support2.parseExtensionString = function(raw) {
          if (raw.length !== 5) {
            return null;
          }
          var value = UPCEANExtension5Support2.parseExtension5String(raw);
          if (value == null) {
            return null;
          }
          return /* @__PURE__ */ new Map([[ResultMetadataType_1.default.SUGGESTED_PRICE, value]]);
        };
        UPCEANExtension5Support2.parseExtension5String = function(raw) {
          var currency;
          switch (raw.charAt(0)) {
            case "0":
              currency = "\xA3";
              break;
            case "5":
              currency = "$";
              break;
            case "9":
              switch (raw) {
                case "90000":
                  return null;
                case "99991":
                  return "0.00";
                case "99990":
                  return "Used";
              }
              currency = "";
              break;
            default:
              currency = "";
              break;
          }
          var rawAmount = parseInt(raw.substring(1));
          var unitsString = (rawAmount / 100).toString();
          var hundredths = rawAmount % 100;
          var hundredthsString = hundredths < 10 ? "0" + hundredths : hundredths.toString();
          return currency + unitsString + "." + hundredthsString;
        };
        return UPCEANExtension5Support2;
      }()
    );
    exports.default = UPCEANExtension5Support;
  }
});

// node_modules/@zxing/library/esm5/core/oned/UPCEANExtension2Support.js
var require_UPCEANExtension2Support = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/UPCEANExtension2Support.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarcodeFormat_1 = require_BarcodeFormat();
    var UPCEANReader_1 = require_UPCEANReader();
    var Result_1 = require_Result();
    var ResultPoint_1 = require_ResultPoint();
    var ResultMetadataType_1 = require_ResultMetadataType();
    var NotFoundException_1 = require_NotFoundException();
    var UPCEANExtension2Support = (
      /** @class */
      function() {
        function UPCEANExtension2Support2() {
          this.decodeMiddleCounters = [0, 0, 0, 0];
          this.decodeRowStringBuffer = "";
        }
        UPCEANExtension2Support2.prototype.decodeRow = function(rowNumber, row, extensionStartRange) {
          var result = this.decodeRowStringBuffer;
          var end = this.decodeMiddle(row, extensionStartRange, result);
          var resultString = result.toString();
          var extensionData = UPCEANExtension2Support2.parseExtensionString(resultString);
          var resultPoints = [
            new ResultPoint_1.default((extensionStartRange[0] + extensionStartRange[1]) / 2, rowNumber),
            new ResultPoint_1.default(end, rowNumber)
          ];
          var extensionResult = new Result_1.default(resultString, null, 0, resultPoints, BarcodeFormat_1.default.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
          if (extensionData != null) {
            extensionResult.putAllMetadata(extensionData);
          }
          return extensionResult;
        };
        UPCEANExtension2Support2.prototype.decodeMiddle = function(row, startRange, resultString) {
          var counters = this.decodeMiddleCounters;
          counters[0] = 0;
          counters[1] = 0;
          counters[2] = 0;
          counters[3] = 0;
          var end = row.getSize();
          var rowOffset = startRange[1];
          var checkParity = 0;
          for (var x = 0; x < 2 && rowOffset < end; x++) {
            var bestMatch = UPCEANReader_1.default.decodeDigit(row, counters, rowOffset, UPCEANReader_1.default.L_AND_G_PATTERNS);
            resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
            for (var _i = 0, counters_1 = counters; _i < counters_1.length; _i++) {
              var counter = counters_1[_i];
              rowOffset += counter;
            }
            if (bestMatch >= 10) {
              checkParity |= 1 << 1 - x;
            }
            if (x !== 1) {
              rowOffset = row.getNextSet(rowOffset);
              rowOffset = row.getNextUnset(rowOffset);
            }
          }
          if (resultString.length !== 2) {
            throw new NotFoundException_1.default();
          }
          if (parseInt(resultString.toString()) % 4 !== checkParity) {
            throw new NotFoundException_1.default();
          }
          return rowOffset;
        };
        UPCEANExtension2Support2.parseExtensionString = function(raw) {
          if (raw.length !== 2) {
            return null;
          }
          return /* @__PURE__ */ new Map([[ResultMetadataType_1.default.ISSUE_NUMBER, parseInt(raw)]]);
        };
        return UPCEANExtension2Support2;
      }()
    );
    exports.default = UPCEANExtension2Support;
  }
});

// node_modules/@zxing/library/esm5/core/oned/UPCEANExtensionSupport.js
var require_UPCEANExtensionSupport = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/UPCEANExtensionSupport.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UPCEANReader_1 = require_UPCEANReader();
    var UPCEANExtension5Support_1 = require_UPCEANExtension5Support();
    var UPCEANExtension2Support_1 = require_UPCEANExtension2Support();
    var UPCEANExtensionSupport = (
      /** @class */
      function() {
        function UPCEANExtensionSupport2() {
        }
        UPCEANExtensionSupport2.decodeRow = function(rowNumber, row, rowOffset) {
          var extensionStartRange = UPCEANReader_1.default.findGuardPattern(row, rowOffset, false, this.EXTENSION_START_PATTERN, new Array(this.EXTENSION_START_PATTERN.length).fill(0));
          try {
            var fiveSupport = new UPCEANExtension5Support_1.default();
            return fiveSupport.decodeRow(rowNumber, row, extensionStartRange);
          } catch (err) {
            var twoSupport = new UPCEANExtension2Support_1.default();
            return twoSupport.decodeRow(rowNumber, row, extensionStartRange);
          }
        };
        UPCEANExtensionSupport2.EXTENSION_START_PATTERN = [1, 1, 2];
        return UPCEANExtensionSupport2;
      }()
    );
    exports.default = UPCEANExtensionSupport;
  }
});

// node_modules/@zxing/library/esm5/core/oned/UPCEANReader.js
var require_UPCEANReader = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/UPCEANReader.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarcodeFormat_1 = require_BarcodeFormat();
    var DecodeHintType_1 = require_DecodeHintType();
    var Result_1 = require_Result();
    var ResultMetadataType_1 = require_ResultMetadataType();
    var ResultPoint_1 = require_ResultPoint();
    var OneDReader_1 = require_OneDReader();
    var UPCEANExtensionSupport_1 = require_UPCEANExtensionSupport();
    var NotFoundException_1 = require_NotFoundException();
    var FormatException_1 = require_FormatException();
    var ChecksumException_1 = require_ChecksumException();
    var UPCEANReader = (
      /** @class */
      function(_super) {
        __extends(UPCEANReader2, _super);
        function UPCEANReader2() {
          var _this = _super.call(this) || this;
          _this.decodeRowStringBuffer = "";
          _this.decodeRowStringBuffer = "";
          UPCEANReader2.L_AND_G_PATTERNS = UPCEANReader2.L_PATTERNS.map(function(arr) {
            return arr.slice();
          });
          for (var i = 10; i < 20; i++) {
            var widths = UPCEANReader2.L_PATTERNS[i - 10];
            var reversedWidths = new Array(widths.length);
            for (var j = 0; j < widths.length; j++) {
              reversedWidths[j] = widths[widths.length - j - 1];
            }
            UPCEANReader2.L_AND_G_PATTERNS[i] = reversedWidths;
          }
          return _this;
        }
        UPCEANReader2.findStartGuardPattern = function(row) {
          var foundStart = false;
          var startRange = null;
          var nextStart = 0;
          var counters = [0, 0, 0];
          while (!foundStart) {
            counters = [0, 0, 0];
            startRange = UPCEANReader2.findGuardPattern(row, nextStart, false, this.START_END_PATTERN, counters);
            var start = startRange[0];
            nextStart = startRange[1];
            var quietStart = start - (nextStart - start);
            if (quietStart >= 0) {
              foundStart = row.isRange(quietStart, start, false);
            }
          }
          return startRange;
        };
        UPCEANReader2.prototype.decodeRow = function(rowNumber, row, hints) {
          var startGuardRange = UPCEANReader2.findStartGuardPattern(row);
          var resultPointCallback = hints == null ? null : hints.get(DecodeHintType_1.default.NEED_RESULT_POINT_CALLBACK);
          if (resultPointCallback != null) {
            var resultPoint_1 = new ResultPoint_1.default((startGuardRange[0] + startGuardRange[1]) / 2, rowNumber);
            resultPointCallback.foundPossibleResultPoint(resultPoint_1);
          }
          var budello = this.decodeMiddle(row, startGuardRange, this.decodeRowStringBuffer);
          var endStart = budello.rowOffset;
          var result = budello.resultString;
          if (resultPointCallback != null) {
            var resultPoint_2 = new ResultPoint_1.default(endStart, rowNumber);
            resultPointCallback.foundPossibleResultPoint(resultPoint_2);
          }
          var endRange = UPCEANReader2.decodeEnd(row, endStart);
          if (resultPointCallback != null) {
            var resultPoint_3 = new ResultPoint_1.default((endRange[0] + endRange[1]) / 2, rowNumber);
            resultPointCallback.foundPossibleResultPoint(resultPoint_3);
          }
          var end = endRange[1];
          var quietEnd = end + (end - endRange[0]);
          if (quietEnd >= row.getSize() || !row.isRange(end, quietEnd, false)) {
            throw new NotFoundException_1.default();
          }
          var resultString = result.toString();
          if (resultString.length < 8) {
            throw new FormatException_1.default();
          }
          if (!UPCEANReader2.checkChecksum(resultString)) {
            throw new ChecksumException_1.default();
          }
          var left = (startGuardRange[1] + startGuardRange[0]) / 2;
          var right = (endRange[1] + endRange[0]) / 2;
          var format = this.getBarcodeFormat();
          var resultPoint = [new ResultPoint_1.default(left, rowNumber), new ResultPoint_1.default(right, rowNumber)];
          var decodeResult = new Result_1.default(resultString, null, 0, resultPoint, format, (/* @__PURE__ */ new Date()).getTime());
          var extensionLength = 0;
          try {
            var extensionResult = UPCEANExtensionSupport_1.default.decodeRow(rowNumber, row, endRange[1]);
            decodeResult.putMetadata(ResultMetadataType_1.default.UPC_EAN_EXTENSION, extensionResult.getText());
            decodeResult.putAllMetadata(extensionResult.getResultMetadata());
            decodeResult.addResultPoints(extensionResult.getResultPoints());
            extensionLength = extensionResult.getText().length;
          } catch (err) {
          }
          var allowedExtensions = hints == null ? null : hints.get(DecodeHintType_1.default.ALLOWED_EAN_EXTENSIONS);
          if (allowedExtensions != null) {
            var valid = false;
            for (var length_1 in allowedExtensions) {
              if (extensionLength.toString() === length_1) {
                valid = true;
                break;
              }
            }
            if (!valid) {
              throw new NotFoundException_1.default();
            }
          }
          if (format === BarcodeFormat_1.default.EAN_13 || format === BarcodeFormat_1.default.UPC_A) {
          }
          return decodeResult;
        };
        UPCEANReader2.checkChecksum = function(s) {
          return UPCEANReader2.checkStandardUPCEANChecksum(s);
        };
        UPCEANReader2.checkStandardUPCEANChecksum = function(s) {
          var length = s.length;
          if (length === 0)
            return false;
          var check = parseInt(s.charAt(length - 1), 10);
          return UPCEANReader2.getStandardUPCEANChecksum(s.substring(0, length - 1)) === check;
        };
        UPCEANReader2.getStandardUPCEANChecksum = function(s) {
          var length = s.length;
          var sum = 0;
          for (var i = length - 1; i >= 0; i -= 2) {
            var digit = s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
            if (digit < 0 || digit > 9) {
              throw new FormatException_1.default();
            }
            sum += digit;
          }
          sum *= 3;
          for (var i = length - 2; i >= 0; i -= 2) {
            var digit = s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
            if (digit < 0 || digit > 9) {
              throw new FormatException_1.default();
            }
            sum += digit;
          }
          return (1e3 - sum) % 10;
        };
        UPCEANReader2.decodeEnd = function(row, endStart) {
          return UPCEANReader2.findGuardPattern(row, endStart, false, UPCEANReader2.START_END_PATTERN, new Array(UPCEANReader2.START_END_PATTERN.length).fill(0));
        };
        UPCEANReader2.findGuardPattern = function(row, rowOffset, whiteFirst, pattern, counters) {
          var width = row.getSize();
          rowOffset = whiteFirst ? row.getNextUnset(rowOffset) : row.getNextSet(rowOffset);
          var counterPosition = 0;
          var patternStart = rowOffset;
          var patternLength = pattern.length;
          var isWhite = whiteFirst;
          for (var x = rowOffset; x < width; x++) {
            if (row.get(x) !== isWhite) {
              counters[counterPosition]++;
            } else {
              if (counterPosition === patternLength - 1) {
                if (OneDReader_1.default.patternMatchVariance(counters, pattern, UPCEANReader2.MAX_INDIVIDUAL_VARIANCE) < UPCEANReader2.MAX_AVG_VARIANCE) {
                  return [patternStart, x];
                }
                patternStart += counters[0] + counters[1];
                var slice = counters.slice(2, counters.length);
                for (var i = 0; i < counterPosition - 1; i++) {
                  counters[i] = slice[i];
                }
                counters[counterPosition - 1] = 0;
                counters[counterPosition] = 0;
                counterPosition--;
              } else {
                counterPosition++;
              }
              counters[counterPosition] = 1;
              isWhite = !isWhite;
            }
          }
          throw new NotFoundException_1.default();
        };
        UPCEANReader2.decodeDigit = function(row, counters, rowOffset, patterns) {
          this.recordPattern(row, rowOffset, counters);
          var bestVariance = this.MAX_AVG_VARIANCE;
          var bestMatch = -1;
          var max = patterns.length;
          for (var i = 0; i < max; i++) {
            var pattern = patterns[i];
            var variance = OneDReader_1.default.patternMatchVariance(counters, pattern, UPCEANReader2.MAX_INDIVIDUAL_VARIANCE);
            if (variance < bestVariance) {
              bestVariance = variance;
              bestMatch = i;
            }
          }
          if (bestMatch >= 0) {
            return bestMatch;
          } else {
            throw new NotFoundException_1.default();
          }
        };
        UPCEANReader2.MAX_AVG_VARIANCE = 0.48;
        UPCEANReader2.MAX_INDIVIDUAL_VARIANCE = 0.7;
        UPCEANReader2.START_END_PATTERN = [1, 1, 1];
        UPCEANReader2.MIDDLE_PATTERN = [1, 1, 1, 1, 1];
        UPCEANReader2.END_PATTERN = [1, 1, 1, 1, 1, 1];
        UPCEANReader2.L_PATTERNS = [
          [3, 2, 1, 1],
          [2, 2, 2, 1],
          [2, 1, 2, 2],
          [1, 4, 1, 1],
          [1, 1, 3, 2],
          [1, 2, 3, 1],
          [1, 1, 1, 4],
          [1, 3, 1, 2],
          [1, 2, 1, 3],
          [3, 1, 1, 2]
        ];
        return UPCEANReader2;
      }(OneDReader_1.default)
    );
    exports.default = UPCEANReader;
  }
});

// node_modules/@zxing/library/esm5/core/oned/EAN13Reader.js
var require_EAN13Reader = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/EAN13Reader.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarcodeFormat_1 = require_BarcodeFormat();
    var UPCEANReader_1 = require_UPCEANReader();
    var NotFoundException_1 = require_NotFoundException();
    var EAN13Reader = (
      /** @class */
      function(_super) {
        __extends(EAN13Reader2, _super);
        function EAN13Reader2() {
          var _this = _super.call(this) || this;
          _this.decodeMiddleCounters = [0, 0, 0, 0];
          return _this;
        }
        EAN13Reader2.prototype.decodeMiddle = function(row, startRange, resultString) {
          var counters = this.decodeMiddleCounters;
          counters[0] = 0;
          counters[1] = 0;
          counters[2] = 0;
          counters[3] = 0;
          var end = row.getSize();
          var rowOffset = startRange[1];
          var lgPatternFound = 0;
          for (var x = 0; x < 6 && rowOffset < end; x++) {
            var bestMatch = UPCEANReader_1.default.decodeDigit(row, counters, rowOffset, UPCEANReader_1.default.L_AND_G_PATTERNS);
            resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
            for (var _i = 0, counters_1 = counters; _i < counters_1.length; _i++) {
              var counter = counters_1[_i];
              rowOffset += counter;
            }
            if (bestMatch >= 10) {
              lgPatternFound |= 1 << 5 - x;
            }
          }
          resultString = EAN13Reader2.determineFirstDigit(resultString, lgPatternFound);
          var middleRange = UPCEANReader_1.default.findGuardPattern(row, rowOffset, true, UPCEANReader_1.default.MIDDLE_PATTERN, new Array(UPCEANReader_1.default.MIDDLE_PATTERN.length).fill(0));
          rowOffset = middleRange[1];
          for (var x = 0; x < 6 && rowOffset < end; x++) {
            var bestMatch = UPCEANReader_1.default.decodeDigit(row, counters, rowOffset, UPCEANReader_1.default.L_PATTERNS);
            resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch);
            for (var _a = 0, counters_2 = counters; _a < counters_2.length; _a++) {
              var counter = counters_2[_a];
              rowOffset += counter;
            }
          }
          return { rowOffset, resultString };
        };
        EAN13Reader2.prototype.getBarcodeFormat = function() {
          return BarcodeFormat_1.default.EAN_13;
        };
        EAN13Reader2.determineFirstDigit = function(resultString, lgPatternFound) {
          for (var d = 0; d < 10; d++) {
            if (lgPatternFound === this.FIRST_DIGIT_ENCODINGS[d]) {
              resultString = String.fromCharCode("0".charCodeAt(0) + d) + resultString;
              return resultString;
            }
          }
          throw new NotFoundException_1.default();
        };
        EAN13Reader2.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
        return EAN13Reader2;
      }(UPCEANReader_1.default)
    );
    exports.default = EAN13Reader;
  }
});

// node_modules/@zxing/library/esm5/core/oned/EAN8Reader.js
var require_EAN8Reader = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/EAN8Reader.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarcodeFormat_1 = require_BarcodeFormat();
    var UPCEANReader_1 = require_UPCEANReader();
    var EAN8Reader = (
      /** @class */
      function(_super) {
        __extends(EAN8Reader2, _super);
        function EAN8Reader2() {
          var _this = _super.call(this) || this;
          _this.decodeMiddleCounters = [0, 0, 0, 0];
          return _this;
        }
        EAN8Reader2.prototype.decodeMiddle = function(row, startRange, resultString) {
          var counters = this.decodeMiddleCounters;
          counters[0] = 0;
          counters[1] = 0;
          counters[2] = 0;
          counters[3] = 0;
          var end = row.getSize();
          var rowOffset = startRange[1];
          for (var x = 0; x < 4 && rowOffset < end; x++) {
            var bestMatch = UPCEANReader_1.default.decodeDigit(row, counters, rowOffset, UPCEANReader_1.default.L_PATTERNS);
            resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch);
            for (var _i = 0, counters_1 = counters; _i < counters_1.length; _i++) {
              var counter = counters_1[_i];
              rowOffset += counter;
            }
          }
          var middleRange = UPCEANReader_1.default.findGuardPattern(row, rowOffset, true, UPCEANReader_1.default.MIDDLE_PATTERN, new Array(UPCEANReader_1.default.MIDDLE_PATTERN.length).fill(0));
          rowOffset = middleRange[1];
          for (var x = 0; x < 4 && rowOffset < end; x++) {
            var bestMatch = UPCEANReader_1.default.decodeDigit(row, counters, rowOffset, UPCEANReader_1.default.L_PATTERNS);
            resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch);
            for (var _a = 0, counters_2 = counters; _a < counters_2.length; _a++) {
              var counter = counters_2[_a];
              rowOffset += counter;
            }
          }
          return { rowOffset, resultString };
        };
        EAN8Reader2.prototype.getBarcodeFormat = function() {
          return BarcodeFormat_1.default.EAN_8;
        };
        return EAN8Reader2;
      }(UPCEANReader_1.default)
    );
    exports.default = EAN8Reader;
  }
});

// node_modules/@zxing/library/esm5/core/oned/MultiFormatUPCEANReader.js
var require_MultiFormatUPCEANReader = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/MultiFormatUPCEANReader.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarcodeFormat_1 = require_BarcodeFormat();
    var DecodeHintType_1 = require_DecodeHintType();
    var OneDReader_1 = require_OneDReader();
    var EAN13Reader_1 = require_EAN13Reader();
    var EAN8Reader_1 = require_EAN8Reader();
    var NotFoundException_1 = require_NotFoundException();
    var MultiFormatUPCEANReader = (
      /** @class */
      function(_super) {
        __extends(MultiFormatUPCEANReader2, _super);
        function MultiFormatUPCEANReader2(hints) {
          var _this = _super.call(this) || this;
          var possibleFormats = hints == null ? null : hints.get(DecodeHintType_1.default.POSSIBLE_FORMATS);
          var readers = [];
          if (possibleFormats != null) {
            if (possibleFormats.indexOf(BarcodeFormat_1.default.EAN_13) > -1) {
              readers.push(new EAN13Reader_1.default());
            }
            if (possibleFormats.indexOf(BarcodeFormat_1.default.EAN_8) > -1) {
              readers.push(new EAN8Reader_1.default());
            }
          }
          if (readers.length === 0) {
            readers.push(new EAN13Reader_1.default());
            readers.push(new EAN8Reader_1.default());
          }
          _this.readers = readers;
          return _this;
        }
        MultiFormatUPCEANReader2.prototype.decodeRow = function(rowNumber, row, hints) {
          for (var _i = 0, _a = this.readers; _i < _a.length; _i++) {
            var reader = _a[_i];
            try {
              return reader.decodeRow(rowNumber, row, hints);
            } catch (err) {
            }
          }
          throw new NotFoundException_1.default();
        };
        MultiFormatUPCEANReader2.prototype.reset = function() {
          for (var _i = 0, _a = this.readers; _i < _a.length; _i++) {
            var reader = _a[_i];
            reader.reset();
          }
        };
        return MultiFormatUPCEANReader2;
      }(OneDReader_1.default)
    );
    exports.default = MultiFormatUPCEANReader;
  }
});

// node_modules/@zxing/library/esm5/core/oned/MultiFormatOneDReader.js
var require_MultiFormatOneDReader = __commonJS({
  "node_modules/@zxing/library/esm5/core/oned/MultiFormatOneDReader.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarcodeFormat_1 = require_BarcodeFormat();
    var Code39Reader_1 = require_Code39Reader();
    var Code128Reader_1 = require_Code128Reader();
    var RSS14Reader_1 = require_RSS14Reader();
    var DecodeHintType_1 = require_DecodeHintType();
    var ITFReader_1 = require_ITFReader();
    var MultiFormatUPCEANReader_1 = require_MultiFormatUPCEANReader();
    var NotFoundException_1 = require_NotFoundException();
    var OneDReader_1 = require_OneDReader();
    var MultiFormatOneDReader = (
      /** @class */
      function(_super) {
        __extends(MultiFormatOneDReader2, _super);
        function MultiFormatOneDReader2(hints) {
          var _this = _super.call(this) || this;
          _this.readers = [];
          var possibleFormats = !hints ? null : hints.get(DecodeHintType_1.default.POSSIBLE_FORMATS);
          var useCode39CheckDigit = hints && hints.get(DecodeHintType_1.default.ASSUME_CODE_39_CHECK_DIGIT) !== void 0;
          if (possibleFormats) {
            if (possibleFormats.includes(BarcodeFormat_1.default.EAN_13) || possibleFormats.includes(BarcodeFormat_1.default.EAN_8)) {
              _this.readers.push(new MultiFormatUPCEANReader_1.default(hints));
            }
            if (possibleFormats.includes(BarcodeFormat_1.default.CODE_39)) {
              _this.readers.push(new Code39Reader_1.default(useCode39CheckDigit));
            }
            if (possibleFormats.includes(BarcodeFormat_1.default.CODE_128)) {
              _this.readers.push(new Code128Reader_1.default());
            }
            if (possibleFormats.includes(BarcodeFormat_1.default.ITF)) {
              _this.readers.push(new ITFReader_1.default());
            }
            if (possibleFormats.includes(BarcodeFormat_1.default.RSS_14)) {
              _this.readers.push(new RSS14Reader_1.default());
            }
          }
          if (_this.readers.length === 0) {
            _this.readers.push(new Code39Reader_1.default());
            _this.readers.push(new MultiFormatUPCEANReader_1.default(hints));
            _this.readers.push(new Code128Reader_1.default());
            _this.readers.push(new ITFReader_1.default());
            _this.readers.push(new RSS14Reader_1.default());
          }
          return _this;
        }
        MultiFormatOneDReader2.prototype.decodeRow = function(rowNumber, row, hints) {
          for (var i = 0; i < this.readers.length; i++) {
            try {
              return this.readers[i].decodeRow(rowNumber, row, hints);
            } catch (re) {
            }
          }
          throw new NotFoundException_1.default();
        };
        MultiFormatOneDReader2.prototype.reset = function() {
          this.readers.forEach(function(reader) {
            return reader.reset();
          });
        };
        return MultiFormatOneDReader2;
      }(OneDReader_1.default)
    );
    exports.default = MultiFormatOneDReader;
  }
});

// node_modules/@zxing/library/esm5/browser/BrowserBarcodeReader.js
var require_BrowserBarcodeReader = __commonJS({
  "node_modules/@zxing/library/esm5/browser/BrowserBarcodeReader.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BrowserCodeReader_1 = require_BrowserCodeReader();
    var MultiFormatOneDReader_1 = require_MultiFormatOneDReader();
    var BrowserBarcodeReader = (
      /** @class */
      function(_super) {
        __extends(BrowserBarcodeReader2, _super);
        function BrowserBarcodeReader2(timeBetweenScansMillis, hints) {
          if (timeBetweenScansMillis === void 0) {
            timeBetweenScansMillis = 500;
          }
          return _super.call(this, new MultiFormatOneDReader_1.default(hints), timeBetweenScansMillis, hints) || this;
        }
        return BrowserBarcodeReader2;
      }(BrowserCodeReader_1.BrowserCodeReader)
    );
    exports.BrowserBarcodeReader = BrowserBarcodeReader;
  }
});

// node_modules/@zxing/library/esm5/core/common/reedsolomon/GenericGFPoly.js
var require_GenericGFPoly = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/reedsolomon/GenericGFPoly.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GenericGF_1 = require_GenericGF();
    var System_1 = require_System();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var GenericGFPoly = (
      /** @class */
      function() {
        function GenericGFPoly2(field, coefficients) {
          if (coefficients.length === 0) {
            throw new IllegalArgumentException_1.default();
          }
          this.field = field;
          var coefficientsLength = coefficients.length;
          if (coefficientsLength > 1 && coefficients[0] === 0) {
            var firstNonZero = 1;
            while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
              firstNonZero++;
            }
            if (firstNonZero === coefficientsLength) {
              this.coefficients = Int32Array.from([0]);
            } else {
              this.coefficients = new Int32Array(coefficientsLength - firstNonZero);
              System_1.default.arraycopy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
            }
          } else {
            this.coefficients = coefficients;
          }
        }
        GenericGFPoly2.prototype.getCoefficients = function() {
          return this.coefficients;
        };
        GenericGFPoly2.prototype.getDegree = function() {
          return this.coefficients.length - 1;
        };
        GenericGFPoly2.prototype.isZero = function() {
          return this.coefficients[0] === 0;
        };
        GenericGFPoly2.prototype.getCoefficient = function(degree) {
          return this.coefficients[this.coefficients.length - 1 - degree];
        };
        GenericGFPoly2.prototype.evaluateAt = function(a) {
          if (a === 0) {
            return this.getCoefficient(0);
          }
          var coefficients = this.coefficients;
          var result;
          if (a === 1) {
            result = 0;
            for (var i = 0, length_1 = coefficients.length; i !== length_1; i++) {
              var coefficient = coefficients[i];
              result = GenericGF_1.default.addOrSubtract(result, coefficient);
            }
            return result;
          }
          result = coefficients[0];
          var size = coefficients.length;
          var field = this.field;
          for (var i = 1; i < size; i++) {
            result = GenericGF_1.default.addOrSubtract(field.multiply(a, result), coefficients[i]);
          }
          return result;
        };
        GenericGFPoly2.prototype.addOrSubtract = function(other) {
          if (!this.field.equals(other.field)) {
            throw new IllegalArgumentException_1.default("GenericGFPolys do not have same GenericGF field");
          }
          if (this.isZero()) {
            return other;
          }
          if (other.isZero()) {
            return this;
          }
          var smallerCoefficients = this.coefficients;
          var largerCoefficients = other.coefficients;
          if (smallerCoefficients.length > largerCoefficients.length) {
            var temp = smallerCoefficients;
            smallerCoefficients = largerCoefficients;
            largerCoefficients = temp;
          }
          var sumDiff = new Int32Array(largerCoefficients.length);
          var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
          System_1.default.arraycopy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
          for (var i = lengthDiff; i < largerCoefficients.length; i++) {
            sumDiff[i] = GenericGF_1.default.addOrSubtract(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
          }
          return new GenericGFPoly2(this.field, sumDiff);
        };
        GenericGFPoly2.prototype.multiply = function(other) {
          if (!this.field.equals(other.field)) {
            throw new IllegalArgumentException_1.default("GenericGFPolys do not have same GenericGF field");
          }
          if (this.isZero() || other.isZero()) {
            return this.field.getZero();
          }
          var aCoefficients = this.coefficients;
          var aLength = aCoefficients.length;
          var bCoefficients = other.coefficients;
          var bLength = bCoefficients.length;
          var product = new Int32Array(aLength + bLength - 1);
          var field = this.field;
          for (var i = 0; i < aLength; i++) {
            var aCoeff = aCoefficients[i];
            for (var j = 0; j < bLength; j++) {
              product[i + j] = GenericGF_1.default.addOrSubtract(product[i + j], field.multiply(aCoeff, bCoefficients[j]));
            }
          }
          return new GenericGFPoly2(field, product);
        };
        GenericGFPoly2.prototype.multiplyScalar = function(scalar) {
          if (scalar === 0) {
            return this.field.getZero();
          }
          if (scalar === 1) {
            return this;
          }
          var size = this.coefficients.length;
          var field = this.field;
          var product = new Int32Array(size);
          var coefficients = this.coefficients;
          for (var i = 0; i < size; i++) {
            product[i] = field.multiply(coefficients[i], scalar);
          }
          return new GenericGFPoly2(field, product);
        };
        GenericGFPoly2.prototype.multiplyByMonomial = function(degree, coefficient) {
          if (degree < 0) {
            throw new IllegalArgumentException_1.default();
          }
          if (coefficient === 0) {
            return this.field.getZero();
          }
          var coefficients = this.coefficients;
          var size = coefficients.length;
          var product = new Int32Array(size + degree);
          var field = this.field;
          for (var i = 0; i < size; i++) {
            product[i] = field.multiply(coefficients[i], coefficient);
          }
          return new GenericGFPoly2(field, product);
        };
        GenericGFPoly2.prototype.divide = function(other) {
          if (!this.field.equals(other.field)) {
            throw new IllegalArgumentException_1.default("GenericGFPolys do not have same GenericGF field");
          }
          if (other.isZero()) {
            throw new IllegalArgumentException_1.default("Divide by 0");
          }
          var field = this.field;
          var quotient = field.getZero();
          var remainder = this;
          var denominatorLeadingTerm = other.getCoefficient(other.getDegree());
          var inverseDenominatorLeadingTerm = field.inverse(denominatorLeadingTerm);
          while (remainder.getDegree() >= other.getDegree() && !remainder.isZero()) {
            var degreeDifference = remainder.getDegree() - other.getDegree();
            var scale = field.multiply(remainder.getCoefficient(remainder.getDegree()), inverseDenominatorLeadingTerm);
            var term = other.multiplyByMonomial(degreeDifference, scale);
            var iterationQuotient = field.buildMonomial(degreeDifference, scale);
            quotient = quotient.addOrSubtract(iterationQuotient);
            remainder = remainder.addOrSubtract(term);
          }
          return [quotient, remainder];
        };
        GenericGFPoly2.prototype.toString = function() {
          var result = "";
          for (var degree = this.getDegree(); degree >= 0; degree--) {
            var coefficient = this.getCoefficient(degree);
            if (coefficient !== 0) {
              if (coefficient < 0) {
                result += " - ";
                coefficient = -coefficient;
              } else {
                if (result.length > 0) {
                  result += " + ";
                }
              }
              if (degree === 0 || coefficient !== 1) {
                var alphaPower = this.field.log(coefficient);
                if (alphaPower === 0) {
                  result += "1";
                } else if (alphaPower === 1) {
                  result += "a";
                } else {
                  result += "a^";
                  result += alphaPower;
                }
              }
              if (degree !== 0) {
                if (degree === 1) {
                  result += "x";
                } else {
                  result += "x^";
                  result += degree;
                }
              }
            }
          }
          return result;
        };
        return GenericGFPoly2;
      }()
    );
    exports.default = GenericGFPoly;
  }
});

// node_modules/@zxing/library/esm5/core/ArithmeticException.js
var require_ArithmeticException = __commonJS({
  "node_modules/@zxing/library/esm5/core/ArithmeticException.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Exception_1 = require_Exception();
    var ArithmeticException = (
      /** @class */
      function(_super) {
        __extends(ArithmeticException2, _super);
        function ArithmeticException2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return ArithmeticException2;
      }(Exception_1.default)
    );
    exports.default = ArithmeticException;
  }
});

// node_modules/@zxing/library/esm5/core/common/reedsolomon/GenericGF.js
var require_GenericGF = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/reedsolomon/GenericGF.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GenericGFPoly_1 = require_GenericGFPoly();
    var Integer_1 = require_Integer();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var ArithmeticException_1 = require_ArithmeticException();
    var GenericGF = (
      /** @class */
      function() {
        function GenericGF2(primitive, size, generatorBase) {
          this.primitive = primitive;
          this.size = size;
          this.generatorBase = generatorBase;
          var expTable = new Int32Array(size);
          var x = 1;
          for (var i = 0; i < size; i++) {
            expTable[i] = x;
            x *= 2;
            if (x >= size) {
              x ^= primitive;
              x &= size - 1;
            }
          }
          this.expTable = expTable;
          var logTable = new Int32Array(size);
          for (var i = 0; i < size - 1; i++) {
            logTable[expTable[i]] = i;
          }
          this.logTable = logTable;
          this.zero = new GenericGFPoly_1.default(this, Int32Array.from([0]));
          this.one = new GenericGFPoly_1.default(this, Int32Array.from([1]));
        }
        GenericGF2.prototype.getZero = function() {
          return this.zero;
        };
        GenericGF2.prototype.getOne = function() {
          return this.one;
        };
        GenericGF2.prototype.buildMonomial = function(degree, coefficient) {
          if (degree < 0) {
            throw new IllegalArgumentException_1.default();
          }
          if (coefficient === 0) {
            return this.zero;
          }
          var coefficients = new Int32Array(degree + 1);
          coefficients[0] = coefficient;
          return new GenericGFPoly_1.default(this, coefficients);
        };
        GenericGF2.addOrSubtract = function(a, b) {
          return a ^ b;
        };
        GenericGF2.prototype.exp = function(a) {
          return this.expTable[a];
        };
        GenericGF2.prototype.log = function(a) {
          if (a === 0) {
            throw new IllegalArgumentException_1.default();
          }
          return this.logTable[a];
        };
        GenericGF2.prototype.inverse = function(a) {
          if (a === 0) {
            throw new ArithmeticException_1.default();
          }
          return this.expTable[this.size - this.logTable[a] - 1];
        };
        GenericGF2.prototype.multiply = function(a, b) {
          if (a === 0 || b === 0) {
            return 0;
          }
          return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.size - 1)];
        };
        GenericGF2.prototype.getSize = function() {
          return this.size;
        };
        GenericGF2.prototype.getGeneratorBase = function() {
          return this.generatorBase;
        };
        GenericGF2.prototype.toString = function() {
          return "GF(0x" + Integer_1.default.toHexString(this.primitive) + "," + this.size + ")";
        };
        GenericGF2.prototype.equals = function(o) {
          return o === this;
        };
        GenericGF2.AZTEC_DATA_12 = new GenericGF2(4201, 4096, 1);
        GenericGF2.AZTEC_DATA_10 = new GenericGF2(1033, 1024, 1);
        GenericGF2.AZTEC_DATA_6 = new GenericGF2(67, 64, 1);
        GenericGF2.AZTEC_PARAM = new GenericGF2(19, 16, 1);
        GenericGF2.QR_CODE_FIELD_256 = new GenericGF2(285, 256, 0);
        GenericGF2.DATA_MATRIX_FIELD_256 = new GenericGF2(301, 256, 1);
        GenericGF2.AZTEC_DATA_8 = GenericGF2.DATA_MATRIX_FIELD_256;
        GenericGF2.MAXICODE_FIELD_64 = GenericGF2.AZTEC_DATA_6;
        return GenericGF2;
      }()
    );
    exports.default = GenericGF;
  }
});

// node_modules/@zxing/library/esm5/core/ReedSolomonException.js
var require_ReedSolomonException = __commonJS({
  "node_modules/@zxing/library/esm5/core/ReedSolomonException.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Exception_1 = require_Exception();
    var ReedSolomonException = (
      /** @class */
      function(_super) {
        __extends(ReedSolomonException2, _super);
        function ReedSolomonException2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return ReedSolomonException2;
      }(Exception_1.default)
    );
    exports.default = ReedSolomonException;
  }
});

// node_modules/@zxing/library/esm5/core/IllegalStateException.js
var require_IllegalStateException = __commonJS({
  "node_modules/@zxing/library/esm5/core/IllegalStateException.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Exception_1 = require_Exception();
    var IllegalStateException = (
      /** @class */
      function(_super) {
        __extends(IllegalStateException2, _super);
        function IllegalStateException2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return IllegalStateException2;
      }(Exception_1.default)
    );
    exports.default = IllegalStateException;
  }
});

// node_modules/@zxing/library/esm5/core/common/reedsolomon/ReedSolomonDecoder.js
var require_ReedSolomonDecoder = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/reedsolomon/ReedSolomonDecoder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GenericGF_1 = require_GenericGF();
    var GenericGFPoly_1 = require_GenericGFPoly();
    var ReedSolomonException_1 = require_ReedSolomonException();
    var IllegalStateException_1 = require_IllegalStateException();
    var ReedSolomonDecoder = (
      /** @class */
      function() {
        function ReedSolomonDecoder2(field) {
          this.field = field;
        }
        ReedSolomonDecoder2.prototype.decode = function(received, twoS) {
          var field = this.field;
          var poly = new GenericGFPoly_1.default(field, received);
          var syndromeCoefficients = new Int32Array(twoS);
          var noError = true;
          for (var i = 0; i < twoS; i++) {
            var evalResult = poly.evaluateAt(field.exp(i + field.getGeneratorBase()));
            syndromeCoefficients[syndromeCoefficients.length - 1 - i] = evalResult;
            if (evalResult !== 0) {
              noError = false;
            }
          }
          if (noError) {
            return;
          }
          var syndrome = new GenericGFPoly_1.default(field, syndromeCoefficients);
          var sigmaOmega = this.runEuclideanAlgorithm(field.buildMonomial(twoS, 1), syndrome, twoS);
          var sigma = sigmaOmega[0];
          var omega = sigmaOmega[1];
          var errorLocations = this.findErrorLocations(sigma);
          var errorMagnitudes = this.findErrorMagnitudes(omega, errorLocations);
          for (var i = 0; i < errorLocations.length; i++) {
            var position = received.length - 1 - field.log(errorLocations[i]);
            if (position < 0) {
              throw new ReedSolomonException_1.default("Bad error location");
            }
            received[position] = GenericGF_1.default.addOrSubtract(received[position], errorMagnitudes[i]);
          }
        };
        ReedSolomonDecoder2.prototype.runEuclideanAlgorithm = function(a, b, R) {
          if (a.getDegree() < b.getDegree()) {
            var temp = a;
            a = b;
            b = temp;
          }
          var field = this.field;
          var rLast = a;
          var r = b;
          var tLast = field.getZero();
          var t = field.getOne();
          while (r.getDegree() >= (R / 2 | 0)) {
            var rLastLast = rLast;
            var tLastLast = tLast;
            rLast = r;
            tLast = t;
            if (rLast.isZero()) {
              throw new ReedSolomonException_1.default("r_{i-1} was zero");
            }
            r = rLastLast;
            var q = field.getZero();
            var denominatorLeadingTerm = rLast.getCoefficient(rLast.getDegree());
            var dltInverse = field.inverse(denominatorLeadingTerm);
            while (r.getDegree() >= rLast.getDegree() && !r.isZero()) {
              var degreeDiff = r.getDegree() - rLast.getDegree();
              var scale = field.multiply(r.getCoefficient(r.getDegree()), dltInverse);
              q = q.addOrSubtract(field.buildMonomial(degreeDiff, scale));
              r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
            }
            t = q.multiply(tLast).addOrSubtract(tLastLast);
            if (r.getDegree() >= rLast.getDegree()) {
              throw new IllegalStateException_1.default("Division algorithm failed to reduce polynomial?");
            }
          }
          var sigmaTildeAtZero = t.getCoefficient(0);
          if (sigmaTildeAtZero === 0) {
            throw new ReedSolomonException_1.default("sigmaTilde(0) was zero");
          }
          var inverse = field.inverse(sigmaTildeAtZero);
          var sigma = t.multiplyScalar(inverse);
          var omega = r.multiplyScalar(inverse);
          return [sigma, omega];
        };
        ReedSolomonDecoder2.prototype.findErrorLocations = function(errorLocator) {
          var numErrors = errorLocator.getDegree();
          if (numErrors === 1) {
            return Int32Array.from([errorLocator.getCoefficient(1)]);
          }
          var result = new Int32Array(numErrors);
          var e = 0;
          var field = this.field;
          for (var i = 1; i < field.getSize() && e < numErrors; i++) {
            if (errorLocator.evaluateAt(i) === 0) {
              result[e] = field.inverse(i);
              e++;
            }
          }
          if (e !== numErrors) {
            throw new ReedSolomonException_1.default("Error locator degree does not match number of roots");
          }
          return result;
        };
        ReedSolomonDecoder2.prototype.findErrorMagnitudes = function(errorEvaluator, errorLocations) {
          var s = errorLocations.length;
          var result = new Int32Array(s);
          var field = this.field;
          for (var i = 0; i < s; i++) {
            var xiInverse = field.inverse(errorLocations[i]);
            var denominator = 1;
            for (var j = 0; j < s; j++) {
              if (i !== j) {
                var term = field.multiply(errorLocations[j], xiInverse);
                var termPlus1 = (term & 1) === 0 ? term | 1 : term & ~1;
                denominator = field.multiply(denominator, termPlus1);
              }
            }
            result[i] = field.multiply(errorEvaluator.evaluateAt(xiInverse), field.inverse(denominator));
            if (field.getGeneratorBase() !== 0) {
              result[i] = field.multiply(result[i], xiInverse);
            }
          }
          return result;
        };
        return ReedSolomonDecoder2;
      }()
    );
    exports.default = ReedSolomonDecoder;
  }
});

// node_modules/@zxing/library/esm5/core/datamatrix/decoder/Version.js
var require_Version = __commonJS({
  "node_modules/@zxing/library/esm5/core/datamatrix/decoder/Version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FormatException_1 = require_FormatException();
    var ECBlocks = (
      /** @class */
      function() {
        function ECBlocks2(ecCodewords, ecBlocks1, ecBlocks2) {
          this.ecCodewords = ecCodewords;
          this.ecBlocks = [ecBlocks1];
          ecBlocks2 && this.ecBlocks.push(ecBlocks2);
        }
        ECBlocks2.prototype.getECCodewords = function() {
          return this.ecCodewords;
        };
        ECBlocks2.prototype.getECBlocks = function() {
          return this.ecBlocks;
        };
        return ECBlocks2;
      }()
    );
    exports.ECBlocks = ECBlocks;
    var ECB = (
      /** @class */
      function() {
        function ECB2(count, dataCodewords) {
          this.count = count;
          this.dataCodewords = dataCodewords;
        }
        ECB2.prototype.getCount = function() {
          return this.count;
        };
        ECB2.prototype.getDataCodewords = function() {
          return this.dataCodewords;
        };
        return ECB2;
      }()
    );
    exports.ECB = ECB;
    var Version = (
      /** @class */
      function() {
        function Version2(versionNumber, symbolSizeRows, symbolSizeColumns, dataRegionSizeRows, dataRegionSizeColumns, ecBlocks) {
          this.versionNumber = versionNumber;
          this.symbolSizeRows = symbolSizeRows;
          this.symbolSizeColumns = symbolSizeColumns;
          this.dataRegionSizeRows = dataRegionSizeRows;
          this.dataRegionSizeColumns = dataRegionSizeColumns;
          this.ecBlocks = ecBlocks;
          var total = 0;
          var ecCodewords = ecBlocks.getECCodewords();
          var ecbArray = ecBlocks.getECBlocks();
          for (var _i = 0, ecbArray_1 = ecbArray; _i < ecbArray_1.length; _i++) {
            var ecBlock = ecbArray_1[_i];
            total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
          }
          this.totalCodewords = total;
        }
        Version2.prototype.getVersionNumber = function() {
          return this.versionNumber;
        };
        Version2.prototype.getSymbolSizeRows = function() {
          return this.symbolSizeRows;
        };
        Version2.prototype.getSymbolSizeColumns = function() {
          return this.symbolSizeColumns;
        };
        Version2.prototype.getDataRegionSizeRows = function() {
          return this.dataRegionSizeRows;
        };
        Version2.prototype.getDataRegionSizeColumns = function() {
          return this.dataRegionSizeColumns;
        };
        Version2.prototype.getTotalCodewords = function() {
          return this.totalCodewords;
        };
        Version2.prototype.getECBlocks = function() {
          return this.ecBlocks;
        };
        Version2.getVersionForDimensions = function(numRows, numColumns) {
          if ((numRows & 1) !== 0 || (numColumns & 1) !== 0) {
            throw new FormatException_1.default();
          }
          for (var _i = 0, _a = Version2.VERSIONS; _i < _a.length; _i++) {
            var version = _a[_i];
            if (version.symbolSizeRows === numRows && version.symbolSizeColumns === numColumns) {
              return version;
            }
          }
          throw new FormatException_1.default();
        };
        Version2.prototype.toString = function() {
          return "" + this.versionNumber;
        };
        Version2.buildVersions = function() {
          return [
            new Version2(1, 10, 10, 8, 8, new ECBlocks(5, new ECB(1, 3))),
            new Version2(2, 12, 12, 10, 10, new ECBlocks(7, new ECB(1, 5))),
            new Version2(3, 14, 14, 12, 12, new ECBlocks(10, new ECB(1, 8))),
            new Version2(4, 16, 16, 14, 14, new ECBlocks(12, new ECB(1, 12))),
            new Version2(5, 18, 18, 16, 16, new ECBlocks(14, new ECB(1, 18))),
            new Version2(6, 20, 20, 18, 18, new ECBlocks(18, new ECB(1, 22))),
            new Version2(7, 22, 22, 20, 20, new ECBlocks(20, new ECB(1, 30))),
            new Version2(8, 24, 24, 22, 22, new ECBlocks(24, new ECB(1, 36))),
            new Version2(9, 26, 26, 24, 24, new ECBlocks(28, new ECB(1, 44))),
            new Version2(10, 32, 32, 14, 14, new ECBlocks(36, new ECB(1, 62))),
            new Version2(11, 36, 36, 16, 16, new ECBlocks(42, new ECB(1, 86))),
            new Version2(12, 40, 40, 18, 18, new ECBlocks(48, new ECB(1, 114))),
            new Version2(13, 44, 44, 20, 20, new ECBlocks(56, new ECB(1, 144))),
            new Version2(14, 48, 48, 22, 22, new ECBlocks(68, new ECB(1, 174))),
            new Version2(15, 52, 52, 24, 24, new ECBlocks(42, new ECB(2, 102))),
            new Version2(16, 64, 64, 14, 14, new ECBlocks(56, new ECB(2, 140))),
            new Version2(17, 72, 72, 16, 16, new ECBlocks(36, new ECB(4, 92))),
            new Version2(18, 80, 80, 18, 18, new ECBlocks(48, new ECB(4, 114))),
            new Version2(19, 88, 88, 20, 20, new ECBlocks(56, new ECB(4, 144))),
            new Version2(20, 96, 96, 22, 22, new ECBlocks(68, new ECB(4, 174))),
            new Version2(21, 104, 104, 24, 24, new ECBlocks(56, new ECB(6, 136))),
            new Version2(22, 120, 120, 18, 18, new ECBlocks(68, new ECB(6, 175))),
            new Version2(23, 132, 132, 20, 20, new ECBlocks(62, new ECB(8, 163))),
            new Version2(24, 144, 144, 22, 22, new ECBlocks(62, new ECB(8, 156), new ECB(2, 155))),
            new Version2(25, 8, 18, 6, 16, new ECBlocks(7, new ECB(1, 5))),
            new Version2(26, 8, 32, 6, 14, new ECBlocks(11, new ECB(1, 10))),
            new Version2(27, 12, 26, 10, 24, new ECBlocks(14, new ECB(1, 16))),
            new Version2(28, 12, 36, 10, 16, new ECBlocks(18, new ECB(1, 22))),
            new Version2(29, 16, 36, 14, 16, new ECBlocks(24, new ECB(1, 32))),
            new Version2(30, 16, 48, 14, 22, new ECBlocks(28, new ECB(1, 49)))
          ];
        };
        Version2.VERSIONS = Version2.buildVersions();
        return Version2;
      }()
    );
    exports.default = Version;
  }
});

// node_modules/@zxing/library/esm5/core/datamatrix/decoder/BitMatrixParser.js
var require_BitMatrixParser = __commonJS({
  "node_modules/@zxing/library/esm5/core/datamatrix/decoder/BitMatrixParser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BitMatrix_1 = require_BitMatrix();
    var Version_1 = require_Version();
    var FormatException_1 = require_FormatException();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var BitMatrixParser = (
      /** @class */
      function() {
        function BitMatrixParser2(bitMatrix) {
          var dimension = bitMatrix.getHeight();
          if (dimension < 8 || dimension > 144 || (dimension & 1) !== 0) {
            throw new FormatException_1.default();
          }
          this.version = BitMatrixParser2.readVersion(bitMatrix);
          this.mappingBitMatrix = this.extractDataRegion(bitMatrix);
          this.readMappingMatrix = new BitMatrix_1.default(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
        }
        BitMatrixParser2.prototype.getVersion = function() {
          return this.version;
        };
        BitMatrixParser2.readVersion = function(bitMatrix) {
          var numRows = bitMatrix.getHeight();
          var numColumns = bitMatrix.getWidth();
          return Version_1.default.getVersionForDimensions(numRows, numColumns);
        };
        BitMatrixParser2.prototype.readCodewords = function() {
          var result = new Int8Array(this.version.getTotalCodewords());
          var resultOffset = 0;
          var row = 4;
          var column = 0;
          var numRows = this.mappingBitMatrix.getHeight();
          var numColumns = this.mappingBitMatrix.getWidth();
          var corner1Read = false;
          var corner2Read = false;
          var corner3Read = false;
          var corner4Read = false;
          do {
            if (row === numRows && column === 0 && !corner1Read) {
              result[resultOffset++] = this.readCorner1(numRows, numColumns) & 255;
              row -= 2;
              column += 2;
              corner1Read = true;
            } else if (row === numRows - 2 && column === 0 && (numColumns & 3) !== 0 && !corner2Read) {
              result[resultOffset++] = this.readCorner2(numRows, numColumns) & 255;
              row -= 2;
              column += 2;
              corner2Read = true;
            } else if (row === numRows + 4 && column === 2 && (numColumns & 7) === 0 && !corner3Read) {
              result[resultOffset++] = this.readCorner3(numRows, numColumns) & 255;
              row -= 2;
              column += 2;
              corner3Read = true;
            } else if (row === numRows - 2 && column === 0 && (numColumns & 7) === 4 && !corner4Read) {
              result[resultOffset++] = this.readCorner4(numRows, numColumns) & 255;
              row -= 2;
              column += 2;
              corner4Read = true;
            } else {
              do {
                if (row < numRows && column >= 0 && !this.readMappingMatrix.get(column, row)) {
                  result[resultOffset++] = this.readUtah(row, column, numRows, numColumns) & 255;
                }
                row -= 2;
                column += 2;
              } while (row >= 0 && column < numColumns);
              row += 1;
              column += 3;
              do {
                if (row >= 0 && column < numColumns && !this.readMappingMatrix.get(column, row)) {
                  result[resultOffset++] = this.readUtah(row, column, numRows, numColumns) & 255;
                }
                row += 2;
                column -= 2;
              } while (row < numRows && column >= 0);
              row += 3;
              column += 1;
            }
          } while (row < numRows || column < numColumns);
          if (resultOffset !== this.version.getTotalCodewords()) {
            throw new FormatException_1.default();
          }
          return result;
        };
        BitMatrixParser2.prototype.readModule = function(row, column, numRows, numColumns) {
          if (row < 0) {
            row += numRows;
            column += 4 - (numRows + 4 & 7);
          }
          if (column < 0) {
            column += numColumns;
            row += 4 - (numColumns + 4 & 7);
          }
          this.readMappingMatrix.set(column, row);
          return this.mappingBitMatrix.get(column, row);
        };
        BitMatrixParser2.prototype.readUtah = function(row, column, numRows, numColumns) {
          var currentByte = 0;
          if (this.readModule(row - 2, column - 2, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(row - 2, column - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(row - 1, column - 2, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(row - 1, column - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(row - 1, column, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(row, column - 2, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(row, column - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(row, column, numRows, numColumns)) {
            currentByte |= 1;
          }
          return currentByte;
        };
        BitMatrixParser2.prototype.readCorner1 = function(numRows, numColumns) {
          var currentByte = 0;
          if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(numRows - 1, 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(numRows - 1, 2, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(2, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(3, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          return currentByte;
        };
        BitMatrixParser2.prototype.readCorner2 = function(numRows, numColumns) {
          var currentByte = 0;
          if (this.readModule(numRows - 3, 0, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(numRows - 2, 0, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 4, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 3, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          return currentByte;
        };
        BitMatrixParser2.prototype.readCorner3 = function(numRows, numColumns) {
          var currentByte = 0;
          if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(numRows - 1, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 3, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(1, numColumns - 3, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(1, numColumns - 2, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          return currentByte;
        };
        BitMatrixParser2.prototype.readCorner4 = function(numRows, numColumns) {
          var currentByte = 0;
          if (this.readModule(numRows - 3, 0, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(numRows - 2, 0, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(2, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(3, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
          }
          return currentByte;
        };
        BitMatrixParser2.prototype.extractDataRegion = function(bitMatrix) {
          var symbolSizeRows = this.version.getSymbolSizeRows();
          var symbolSizeColumns = this.version.getSymbolSizeColumns();
          if (bitMatrix.getHeight() !== symbolSizeRows) {
            throw new IllegalArgumentException_1.default("Dimension of bitMatrix must match the version size");
          }
          var dataRegionSizeRows = this.version.getDataRegionSizeRows();
          var dataRegionSizeColumns = this.version.getDataRegionSizeColumns();
          var numDataRegionsRow = symbolSizeRows / dataRegionSizeRows | 0;
          var numDataRegionsColumn = symbolSizeColumns / dataRegionSizeColumns | 0;
          var sizeDataRegionRow = numDataRegionsRow * dataRegionSizeRows;
          var sizeDataRegionColumn = numDataRegionsColumn * dataRegionSizeColumns;
          var bitMatrixWithoutAlignment = new BitMatrix_1.default(sizeDataRegionColumn, sizeDataRegionRow);
          for (var dataRegionRow = 0; dataRegionRow < numDataRegionsRow; ++dataRegionRow) {
            var dataRegionRowOffset = dataRegionRow * dataRegionSizeRows;
            for (var dataRegionColumn = 0; dataRegionColumn < numDataRegionsColumn; ++dataRegionColumn) {
              var dataRegionColumnOffset = dataRegionColumn * dataRegionSizeColumns;
              for (var i = 0; i < dataRegionSizeRows; ++i) {
                var readRowOffset = dataRegionRow * (dataRegionSizeRows + 2) + 1 + i;
                var writeRowOffset = dataRegionRowOffset + i;
                for (var j = 0; j < dataRegionSizeColumns; ++j) {
                  var readColumnOffset = dataRegionColumn * (dataRegionSizeColumns + 2) + 1 + j;
                  if (bitMatrix.get(readColumnOffset, readRowOffset)) {
                    var writeColumnOffset = dataRegionColumnOffset + j;
                    bitMatrixWithoutAlignment.set(writeColumnOffset, writeRowOffset);
                  }
                }
              }
            }
          }
          return bitMatrixWithoutAlignment;
        };
        return BitMatrixParser2;
      }()
    );
    exports.default = BitMatrixParser;
  }
});

// node_modules/@zxing/library/esm5/core/datamatrix/decoder/DataBlock.js
var require_DataBlock = __commonJS({
  "node_modules/@zxing/library/esm5/core/datamatrix/decoder/DataBlock.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var DataBlock = (
      /** @class */
      function() {
        function DataBlock2(numDataCodewords, codewords) {
          this.numDataCodewords = numDataCodewords;
          this.codewords = codewords;
        }
        DataBlock2.getDataBlocks = function(rawCodewords, version) {
          var ecBlocks = version.getECBlocks();
          var totalBlocks = 0;
          var ecBlockArray = ecBlocks.getECBlocks();
          for (var _i = 0, ecBlockArray_1 = ecBlockArray; _i < ecBlockArray_1.length; _i++) {
            var ecBlock = ecBlockArray_1[_i];
            totalBlocks += ecBlock.getCount();
          }
          var result = new Array(totalBlocks);
          var numResultBlocks = 0;
          for (var _a = 0, ecBlockArray_2 = ecBlockArray; _a < ecBlockArray_2.length; _a++) {
            var ecBlock = ecBlockArray_2[_a];
            for (var i = 0; i < ecBlock.getCount(); i++) {
              var numDataCodewords = ecBlock.getDataCodewords();
              var numBlockCodewords = ecBlocks.getECCodewords() + numDataCodewords;
              result[numResultBlocks++] = new DataBlock2(numDataCodewords, new Uint8Array(numBlockCodewords));
            }
          }
          var longerBlocksTotalCodewords = result[0].codewords.length;
          var longerBlocksNumDataCodewords = longerBlocksTotalCodewords - ecBlocks.getECCodewords();
          var shorterBlocksNumDataCodewords = longerBlocksNumDataCodewords - 1;
          var rawCodewordsOffset = 0;
          for (var i = 0; i < shorterBlocksNumDataCodewords; i++) {
            for (var j = 0; j < numResultBlocks; j++) {
              result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
            }
          }
          var specialVersion = version.getVersionNumber() === 24;
          var numLongerBlocks = specialVersion ? 8 : numResultBlocks;
          for (var j = 0; j < numLongerBlocks; j++) {
            result[j].codewords[longerBlocksNumDataCodewords - 1] = rawCodewords[rawCodewordsOffset++];
          }
          var max = result[0].codewords.length;
          for (var i = longerBlocksNumDataCodewords; i < max; i++) {
            for (var j = 0; j < numResultBlocks; j++) {
              var jOffset = specialVersion ? (j + 8) % numResultBlocks : j;
              var iOffset = specialVersion && jOffset > 7 ? i - 1 : i;
              result[jOffset].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
            }
          }
          if (rawCodewordsOffset !== rawCodewords.length) {
            throw new IllegalArgumentException_1.default();
          }
          return result;
        };
        DataBlock2.prototype.getNumDataCodewords = function() {
          return this.numDataCodewords;
        };
        DataBlock2.prototype.getCodewords = function() {
          return this.codewords;
        };
        return DataBlock2;
      }()
    );
    exports.default = DataBlock;
  }
});

// node_modules/@zxing/library/esm5/core/common/DecoderResult.js
var require_DecoderResult = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/DecoderResult.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DecoderResult = (
      /** @class */
      function() {
        function DecoderResult2(rawBytes, text, byteSegments, ecLevel, structuredAppendSequenceNumber, structuredAppendParity) {
          if (structuredAppendSequenceNumber === void 0) {
            structuredAppendSequenceNumber = -1;
          }
          if (structuredAppendParity === void 0) {
            structuredAppendParity = -1;
          }
          this.rawBytes = rawBytes;
          this.text = text;
          this.byteSegments = byteSegments;
          this.ecLevel = ecLevel;
          this.structuredAppendSequenceNumber = structuredAppendSequenceNumber;
          this.structuredAppendParity = structuredAppendParity;
          this.numBits = rawBytes === void 0 || rawBytes === null ? 0 : 8 * rawBytes.length;
        }
        DecoderResult2.prototype.getRawBytes = function() {
          return this.rawBytes;
        };
        DecoderResult2.prototype.getNumBits = function() {
          return this.numBits;
        };
        DecoderResult2.prototype.setNumBits = function(numBits) {
          this.numBits = numBits;
        };
        DecoderResult2.prototype.getText = function() {
          return this.text;
        };
        DecoderResult2.prototype.getByteSegments = function() {
          return this.byteSegments;
        };
        DecoderResult2.prototype.getECLevel = function() {
          return this.ecLevel;
        };
        DecoderResult2.prototype.getErrorsCorrected = function() {
          return this.errorsCorrected;
        };
        DecoderResult2.prototype.setErrorsCorrected = function(errorsCorrected) {
          this.errorsCorrected = errorsCorrected;
        };
        DecoderResult2.prototype.getErasures = function() {
          return this.erasures;
        };
        DecoderResult2.prototype.setErasures = function(erasures) {
          this.erasures = erasures;
        };
        DecoderResult2.prototype.getOther = function() {
          return this.other;
        };
        DecoderResult2.prototype.setOther = function(other) {
          this.other = other;
        };
        DecoderResult2.prototype.hasStructuredAppend = function() {
          return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
        };
        DecoderResult2.prototype.getStructuredAppendParity = function() {
          return this.structuredAppendParity;
        };
        DecoderResult2.prototype.getStructuredAppendSequenceNumber = function() {
          return this.structuredAppendSequenceNumber;
        };
        return DecoderResult2;
      }()
    );
    exports.default = DecoderResult;
  }
});

// node_modules/@zxing/library/esm5/core/common/BitSource.js
var require_BitSource = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/BitSource.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var BitSource = (
      /** @class */
      function() {
        function BitSource2(bytes) {
          this.bytes = bytes;
          this.byteOffset = 0;
          this.bitOffset = 0;
        }
        BitSource2.prototype.getBitOffset = function() {
          return this.bitOffset;
        };
        BitSource2.prototype.getByteOffset = function() {
          return this.byteOffset;
        };
        BitSource2.prototype.readBits = function(numBits) {
          if (numBits < 1 || numBits > 32 || numBits > this.available()) {
            throw new IllegalArgumentException_1.default("" + numBits);
          }
          var result = 0;
          var bitOffset = this.bitOffset;
          var byteOffset = this.byteOffset;
          var bytes = this.bytes;
          if (bitOffset > 0) {
            var bitsLeft = 8 - bitOffset;
            var toRead = numBits < bitsLeft ? numBits : bitsLeft;
            var bitsToNotRead = bitsLeft - toRead;
            var mask = 255 >> 8 - toRead << bitsToNotRead;
            result = (bytes[byteOffset] & mask) >> bitsToNotRead;
            numBits -= toRead;
            bitOffset += toRead;
            if (bitOffset === 8) {
              bitOffset = 0;
              byteOffset++;
            }
          }
          if (numBits > 0) {
            while (numBits >= 8) {
              result = result << 8 | bytes[byteOffset] & 255;
              byteOffset++;
              numBits -= 8;
            }
            if (numBits > 0) {
              var bitsToNotRead = 8 - numBits;
              var mask = 255 >> bitsToNotRead << bitsToNotRead;
              result = result << numBits | (bytes[byteOffset] & mask) >> bitsToNotRead;
              bitOffset += numBits;
            }
          }
          this.bitOffset = bitOffset;
          this.byteOffset = byteOffset;
          return result;
        };
        BitSource2.prototype.available = function() {
          return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
        };
        return BitSource2;
      }()
    );
    exports.default = BitSource;
  }
});

// node_modules/@zxing/library/esm5/core/common/CharacterSetECI.js
var require_CharacterSetECI = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/CharacterSetECI.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FormatException_1 = require_FormatException();
    var CharacterSetValueIdentifiers;
    (function(CharacterSetValueIdentifiers2) {
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp437"] = 0] = "Cp437";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_1"] = 1] = "ISO8859_1";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_2"] = 2] = "ISO8859_2";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_3"] = 3] = "ISO8859_3";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_4"] = 4] = "ISO8859_4";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_5"] = 5] = "ISO8859_5";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_6"] = 6] = "ISO8859_6";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_7"] = 7] = "ISO8859_7";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_8"] = 8] = "ISO8859_8";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_9"] = 9] = "ISO8859_9";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_10"] = 10] = "ISO8859_10";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_11"] = 11] = "ISO8859_11";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_13"] = 12] = "ISO8859_13";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_14"] = 13] = "ISO8859_14";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_15"] = 14] = "ISO8859_15";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_16"] = 15] = "ISO8859_16";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["SJIS"] = 16] = "SJIS";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1250"] = 17] = "Cp1250";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1251"] = 18] = "Cp1251";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1252"] = 19] = "Cp1252";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1256"] = 20] = "Cp1256";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["UnicodeBigUnmarked"] = 21] = "UnicodeBigUnmarked";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["UTF8"] = 22] = "UTF8";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ASCII"] = 23] = "ASCII";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Big5"] = 24] = "Big5";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["GB18030"] = 25] = "GB18030";
      CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["EUC_KR"] = 26] = "EUC_KR";
    })(CharacterSetValueIdentifiers = exports.CharacterSetValueIdentifiers || (exports.CharacterSetValueIdentifiers = {}));
    var CharacterSetECI = (
      /** @class */
      function() {
        function CharacterSetECI2(valueIdentifier, valuesParam, name) {
          var otherEncodingNames = [];
          for (var _i = 3; _i < arguments.length; _i++) {
            otherEncodingNames[_i - 3] = arguments[_i];
          }
          this.valueIdentifier = valueIdentifier;
          this.name = name;
          if (typeof valuesParam === "number") {
            this.values = Int32Array.from([valuesParam]);
          } else {
            this.values = valuesParam;
          }
          this.otherEncodingNames = otherEncodingNames;
          CharacterSetECI2.VALUE_IDENTIFIER_TO_ECI.set(valueIdentifier, this);
          CharacterSetECI2.NAME_TO_ECI.set(name, this);
          var values = this.values;
          for (var i = 0, length_1 = values.length; i !== length_1; i++) {
            var v = values[i];
            CharacterSetECI2.VALUES_TO_ECI.set(v, this);
          }
          for (var _a = 0, otherEncodingNames_1 = otherEncodingNames; _a < otherEncodingNames_1.length; _a++) {
            var otherName = otherEncodingNames_1[_a];
            CharacterSetECI2.NAME_TO_ECI.set(otherName, this);
          }
        }
        CharacterSetECI2.prototype.getValueIdentifier = function() {
          return this.valueIdentifier;
        };
        CharacterSetECI2.prototype.getName = function() {
          return this.name;
        };
        CharacterSetECI2.prototype.getValue = function() {
          return this.values[0];
        };
        CharacterSetECI2.getCharacterSetECIByValue = function(value) {
          if (value < 0 || value >= 900) {
            throw new FormatException_1.default("incorect value");
          }
          var characterSet = CharacterSetECI2.VALUES_TO_ECI.get(value);
          if (void 0 === characterSet) {
            throw new FormatException_1.default("incorect value");
          }
          return characterSet;
        };
        CharacterSetECI2.getCharacterSetECIByName = function(name) {
          var characterSet = CharacterSetECI2.NAME_TO_ECI.get(name);
          if (void 0 === characterSet) {
            throw new FormatException_1.default("incorect value");
          }
          return characterSet;
        };
        CharacterSetECI2.prototype.equals = function(o) {
          if (!(o instanceof CharacterSetECI2)) {
            return false;
          }
          var other = o;
          return this.getName() === other.getName();
        };
        CharacterSetECI2.VALUE_IDENTIFIER_TO_ECI = /* @__PURE__ */ new Map();
        CharacterSetECI2.VALUES_TO_ECI = /* @__PURE__ */ new Map();
        CharacterSetECI2.NAME_TO_ECI = /* @__PURE__ */ new Map();
        CharacterSetECI2.Cp437 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp437, Int32Array.from([0, 2]), "Cp437");
        CharacterSetECI2.ISO8859_1 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1");
        CharacterSetECI2.ISO8859_2 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2");
        CharacterSetECI2.ISO8859_3 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3");
        CharacterSetECI2.ISO8859_4 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4");
        CharacterSetECI2.ISO8859_5 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5");
        CharacterSetECI2.ISO8859_6 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6");
        CharacterSetECI2.ISO8859_7 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7");
        CharacterSetECI2.ISO8859_8 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8");
        CharacterSetECI2.ISO8859_9 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9");
        CharacterSetECI2.ISO8859_10 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10");
        CharacterSetECI2.ISO8859_11 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11");
        CharacterSetECI2.ISO8859_13 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13");
        CharacterSetECI2.ISO8859_14 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14");
        CharacterSetECI2.ISO8859_15 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15");
        CharacterSetECI2.ISO8859_16 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16");
        CharacterSetECI2.SJIS = new CharacterSetECI2(CharacterSetValueIdentifiers.SJIS, 20, "SJIS", "Shift_JIS");
        CharacterSetECI2.Cp1250 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp1250, 21, "Cp1250", "windows-1250");
        CharacterSetECI2.Cp1251 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp1251, 22, "Cp1251", "windows-1251");
        CharacterSetECI2.Cp1252 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp1252, 23, "Cp1252", "windows-1252");
        CharacterSetECI2.Cp1256 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp1256, 24, "Cp1256", "windows-1256");
        CharacterSetECI2.UnicodeBigUnmarked = new CharacterSetECI2(CharacterSetValueIdentifiers.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig");
        CharacterSetECI2.UTF8 = new CharacterSetECI2(CharacterSetValueIdentifiers.UTF8, 26, "UTF8", "UTF-8");
        CharacterSetECI2.ASCII = new CharacterSetECI2(CharacterSetValueIdentifiers.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII");
        CharacterSetECI2.Big5 = new CharacterSetECI2(CharacterSetValueIdentifiers.Big5, 28, "Big5");
        CharacterSetECI2.GB18030 = new CharacterSetECI2(CharacterSetValueIdentifiers.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK");
        CharacterSetECI2.EUC_KR = new CharacterSetECI2(CharacterSetValueIdentifiers.EUC_KR, 30, "EUC_KR", "EUC-KR");
        return CharacterSetECI2;
      }()
    );
    exports.default = CharacterSetECI;
  }
});

// node_modules/@zxing/library/esm5/core/util/StringEncoding.js
var require_StringEncoding = __commonJS({
  "node_modules/@zxing/library/esm5/core/util/StringEncoding.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UnsupportedOperationException_1 = require_UnsupportedOperationException();
    var CharacterSetECI_1 = require_CharacterSetECI();
    var StringEncoding = (
      /** @class */
      function() {
        function StringEncoding2() {
        }
        StringEncoding2.decode = function(bytes, encoding) {
          var encodingName = this.encodingName(encoding);
          if (typeof TextDecoder === "undefined") {
            return this.decodeFallback(bytes, encodingName);
          }
          return new TextDecoder(encodingName).decode(bytes);
        };
        StringEncoding2.encode = function(s, encoding) {
          if (!StringEncoding2.isBrowser()) {
            var EncoderConstructor = TextEncoder;
            return new EncoderConstructor(this.encodingName(encoding), { NONSTANDARD_allowLegacyEncoding: true }).encode(s);
          }
          if (typeof TextEncoder === "undefined") {
            return this.encodeFallback(s);
          }
          return new TextEncoder().encode(s);
        };
        StringEncoding2.isBrowser = function() {
          return typeof window !== "undefined" && {}.toString.call(window) === "[object Window]";
        };
        StringEncoding2.encodingName = function(encoding) {
          return typeof encoding === "string" ? encoding : encoding.getName();
        };
        StringEncoding2.encodingCharacterSet = function(encoding) {
          return CharacterSetECI_1.default.getCharacterSetECIByName(this.encodingName(encoding));
        };
        StringEncoding2.decodeFallback = function(bytes, encoding) {
          var characterSet = this.encodingCharacterSet(encoding);
          if (characterSet.equals(CharacterSetECI_1.default.UTF8) || characterSet.equals(CharacterSetECI_1.default.ISO8859_1) || characterSet.equals(CharacterSetECI_1.default.ASCII)) {
            var s = "";
            for (var i = 0, length_1 = bytes.length; i < length_1; i++) {
              var h = bytes[i].toString(16);
              if (h.length < 2) {
                h = "0" + h;
              }
              s += "%" + h;
            }
            return decodeURIComponent(s);
          }
          if (characterSet.equals(CharacterSetECI_1.default.UnicodeBigUnmarked)) {
            return String.fromCharCode.apply(null, new Uint16Array(bytes.buffer));
          }
          throw new UnsupportedOperationException_1.default("Encoding " + this.encodingName(encoding) + " not supported by fallback.");
        };
        StringEncoding2.encodeFallback = function(s) {
          var encodedURIstring = btoa(unescape(encodeURIComponent(s)));
          var charList = encodedURIstring.split("");
          var uintArray = [];
          for (var i = 0; i < charList.length; i++) {
            uintArray.push(charList[i].charCodeAt(0));
          }
          return new Uint8Array(uintArray);
        };
        return StringEncoding2;
      }()
    );
    exports.default = StringEncoding;
  }
});

// node_modules/@zxing/library/esm5/core/datamatrix/decoder/DecodedBitStreamParser.js
var require_DecodedBitStreamParser = __commonJS({
  "node_modules/@zxing/library/esm5/core/datamatrix/decoder/DecodedBitStreamParser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DecoderResult_1 = require_DecoderResult();
    var BitSource_1 = require_BitSource();
    var StringBuilder_1 = require_StringBuilder();
    var StringEncoding_1 = require_StringEncoding();
    var __1 = require_esm5();
    var FormatException_1 = require_FormatException();
    var IllegalStateException_1 = require_IllegalStateException();
    var Mode;
    (function(Mode2) {
      Mode2[Mode2["PAD_ENCODE"] = 0] = "PAD_ENCODE";
      Mode2[Mode2["ASCII_ENCODE"] = 1] = "ASCII_ENCODE";
      Mode2[Mode2["C40_ENCODE"] = 2] = "C40_ENCODE";
      Mode2[Mode2["TEXT_ENCODE"] = 3] = "TEXT_ENCODE";
      Mode2[Mode2["ANSIX12_ENCODE"] = 4] = "ANSIX12_ENCODE";
      Mode2[Mode2["EDIFACT_ENCODE"] = 5] = "EDIFACT_ENCODE";
      Mode2[Mode2["BASE256_ENCODE"] = 6] = "BASE256_ENCODE";
    })(Mode || (Mode = {}));
    var DecodedBitStreamParser = (
      /** @class */
      function() {
        function DecodedBitStreamParser2() {
        }
        DecodedBitStreamParser2.decode = function(bytes) {
          var bits = new BitSource_1.default(bytes);
          var result = new StringBuilder_1.default();
          var resultTrailer = new StringBuilder_1.default();
          var byteSegments = new Array();
          var mode = Mode.ASCII_ENCODE;
          do {
            if (mode === Mode.ASCII_ENCODE) {
              mode = this.decodeAsciiSegment(bits, result, resultTrailer);
            } else {
              switch (mode) {
                case Mode.C40_ENCODE:
                  this.decodeC40Segment(bits, result);
                  break;
                case Mode.TEXT_ENCODE:
                  this.decodeTextSegment(bits, result);
                  break;
                case Mode.ANSIX12_ENCODE:
                  this.decodeAnsiX12Segment(bits, result);
                  break;
                case Mode.EDIFACT_ENCODE:
                  this.decodeEdifactSegment(bits, result);
                  break;
                case Mode.BASE256_ENCODE:
                  this.decodeBase256Segment(bits, result, byteSegments);
                  break;
                default:
                  throw new FormatException_1.default();
              }
              mode = Mode.ASCII_ENCODE;
            }
          } while (mode !== Mode.PAD_ENCODE && bits.available() > 0);
          if (resultTrailer.length() > 0) {
            result.append(resultTrailer.toString());
          }
          return new DecoderResult_1.default(bytes, result.toString(), byteSegments.length === 0 ? null : byteSegments, null);
        };
        DecodedBitStreamParser2.decodeAsciiSegment = function(bits, result, resultTrailer) {
          var upperShift = false;
          do {
            var oneByte = bits.readBits(8);
            if (oneByte === 0) {
              throw new FormatException_1.default();
            } else if (oneByte <= 128) {
              if (upperShift) {
                oneByte += 128;
              }
              result.append(String.fromCharCode(oneByte - 1));
              return Mode.ASCII_ENCODE;
            } else if (oneByte === 129) {
              return Mode.PAD_ENCODE;
            } else if (oneByte <= 229) {
              var value = oneByte - 130;
              if (value < 10) {
                result.append("0");
              }
              result.append("" + value);
            } else {
              switch (oneByte) {
                case 230:
                  return Mode.C40_ENCODE;
                case 231:
                  return Mode.BASE256_ENCODE;
                case 232:
                  result.append(String.fromCharCode(29));
                  break;
                case 233:
                case 234:
                  break;
                case 235:
                  upperShift = true;
                  break;
                case 236:
                  result.append("[)>05");
                  resultTrailer.insert(0, "");
                  break;
                case 237:
                  result.append("[)>06");
                  resultTrailer.insert(0, "");
                  break;
                case 238:
                  return Mode.ANSIX12_ENCODE;
                case 239:
                  return Mode.TEXT_ENCODE;
                case 240:
                  return Mode.EDIFACT_ENCODE;
                case 241:
                  break;
                default:
                  if (oneByte !== 254 || bits.available() !== 0) {
                    throw new FormatException_1.default();
                  }
                  break;
              }
            }
          } while (bits.available() > 0);
          return Mode.ASCII_ENCODE;
        };
        DecodedBitStreamParser2.decodeC40Segment = function(bits, result) {
          var upperShift = false;
          var cValues = [];
          var shift = 0;
          do {
            if (bits.available() === 8) {
              return;
            }
            var firstByte = bits.readBits(8);
            if (firstByte === 254) {
              return;
            }
            this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
            for (var i = 0; i < 3; i++) {
              var cValue = cValues[i];
              switch (shift) {
                case 0:
                  if (cValue < 3) {
                    shift = cValue + 1;
                  } else if (cValue < this.C40_BASIC_SET_CHARS.length) {
                    var c40char = this.C40_BASIC_SET_CHARS[cValue];
                    if (upperShift) {
                      result.append(String.fromCharCode(c40char.charCodeAt(0) + 128));
                      upperShift = false;
                    } else {
                      result.append(c40char);
                    }
                  } else {
                    throw new FormatException_1.default();
                  }
                  break;
                case 1:
                  if (upperShift) {
                    result.append(String.fromCharCode(cValue + 128));
                    upperShift = false;
                  } else {
                    result.append(String.fromCharCode(cValue));
                  }
                  shift = 0;
                  break;
                case 2:
                  if (cValue < this.C40_SHIFT2_SET_CHARS.length) {
                    var c40char = this.C40_SHIFT2_SET_CHARS[cValue];
                    if (upperShift) {
                      result.append(String.fromCharCode(c40char.charCodeAt(0) + 128));
                      upperShift = false;
                    } else {
                      result.append(c40char);
                    }
                  } else {
                    switch (cValue) {
                      case 27:
                        result.append(String.fromCharCode(29));
                        break;
                      case 30:
                        upperShift = true;
                        break;
                      default:
                        throw new FormatException_1.default();
                    }
                  }
                  shift = 0;
                  break;
                case 3:
                  if (upperShift) {
                    result.append(String.fromCharCode(cValue + 224));
                    upperShift = false;
                  } else {
                    result.append(String.fromCharCode(cValue + 96));
                  }
                  shift = 0;
                  break;
                default:
                  throw new FormatException_1.default();
              }
            }
          } while (bits.available() > 0);
        };
        DecodedBitStreamParser2.decodeTextSegment = function(bits, result) {
          var upperShift = false;
          var cValues = [];
          var shift = 0;
          do {
            if (bits.available() === 8) {
              return;
            }
            var firstByte = bits.readBits(8);
            if (firstByte === 254) {
              return;
            }
            this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
            for (var i = 0; i < 3; i++) {
              var cValue = cValues[i];
              switch (shift) {
                case 0:
                  if (cValue < 3) {
                    shift = cValue + 1;
                  } else if (cValue < this.TEXT_BASIC_SET_CHARS.length) {
                    var textChar = this.TEXT_BASIC_SET_CHARS[cValue];
                    if (upperShift) {
                      result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                      upperShift = false;
                    } else {
                      result.append(textChar);
                    }
                  } else {
                    throw new FormatException_1.default();
                  }
                  break;
                case 1:
                  if (upperShift) {
                    result.append(String.fromCharCode(cValue + 128));
                    upperShift = false;
                  } else {
                    result.append(String.fromCharCode(cValue));
                  }
                  shift = 0;
                  break;
                case 2:
                  if (cValue < this.TEXT_SHIFT2_SET_CHARS.length) {
                    var textChar = this.TEXT_SHIFT2_SET_CHARS[cValue];
                    if (upperShift) {
                      result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                      upperShift = false;
                    } else {
                      result.append(textChar);
                    }
                  } else {
                    switch (cValue) {
                      case 27:
                        result.append(String.fromCharCode(29));
                        break;
                      case 30:
                        upperShift = true;
                        break;
                      default:
                        throw new FormatException_1.default();
                    }
                  }
                  shift = 0;
                  break;
                case 3:
                  if (cValue < this.TEXT_SHIFT3_SET_CHARS.length) {
                    var textChar = this.TEXT_SHIFT3_SET_CHARS[cValue];
                    if (upperShift) {
                      result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                      upperShift = false;
                    } else {
                      result.append(textChar);
                    }
                    shift = 0;
                  } else {
                    throw new FormatException_1.default();
                  }
                  break;
                default:
                  throw new FormatException_1.default();
              }
            }
          } while (bits.available() > 0);
        };
        DecodedBitStreamParser2.decodeAnsiX12Segment = function(bits, result) {
          var cValues = [];
          do {
            if (bits.available() === 8) {
              return;
            }
            var firstByte = bits.readBits(8);
            if (firstByte === 254) {
              return;
            }
            this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
            for (var i = 0; i < 3; i++) {
              var cValue = cValues[i];
              switch (cValue) {
                case 0:
                  result.append("\r");
                  break;
                case 1:
                  result.append("*");
                  break;
                case 2:
                  result.append(">");
                  break;
                case 3:
                  result.append(" ");
                  break;
                default:
                  if (cValue < 14) {
                    result.append(String.fromCharCode(cValue + 44));
                  } else if (cValue < 40) {
                    result.append(String.fromCharCode(cValue + 51));
                  } else {
                    throw new FormatException_1.default();
                  }
                  break;
              }
            }
          } while (bits.available() > 0);
        };
        DecodedBitStreamParser2.parseTwoBytes = function(firstByte, secondByte, result) {
          var fullBitValue = (firstByte << 8) + secondByte - 1;
          var temp = Math.floor(fullBitValue / 1600);
          result[0] = temp;
          fullBitValue -= temp * 1600;
          temp = Math.floor(fullBitValue / 40);
          result[1] = temp;
          result[2] = fullBitValue - temp * 40;
        };
        DecodedBitStreamParser2.decodeEdifactSegment = function(bits, result) {
          do {
            if (bits.available() <= 16) {
              return;
            }
            for (var i = 0; i < 4; i++) {
              var edifactValue = bits.readBits(6);
              if (edifactValue === 31) {
                var bitsLeft = 8 - bits.getBitOffset();
                if (bitsLeft !== 8) {
                  bits.readBits(bitsLeft);
                }
                return;
              }
              if ((edifactValue & 32) === 0) {
                edifactValue |= 64;
              }
              result.append(String.fromCharCode(edifactValue));
            }
          } while (bits.available() > 0);
        };
        DecodedBitStreamParser2.decodeBase256Segment = function(bits, result, byteSegments) {
          var codewordPosition = 1 + bits.getByteOffset();
          var d1 = this.unrandomize255State(bits.readBits(8), codewordPosition++);
          var count;
          if (d1 === 0) {
            count = bits.available() / 8 | 0;
          } else if (d1 < 250) {
            count = d1;
          } else {
            count = 250 * (d1 - 249) + this.unrandomize255State(bits.readBits(8), codewordPosition++);
          }
          if (count < 0) {
            throw new FormatException_1.default();
          }
          var bytes = new Uint8Array(count);
          for (var i = 0; i < count; i++) {
            if (bits.available() < 8) {
              throw new FormatException_1.default();
            }
            bytes[i] = this.unrandomize255State(bits.readBits(8), codewordPosition++);
          }
          byteSegments.push(bytes);
          try {
            result.append(StringEncoding_1.default.decode(bytes, __1.StringUtils.ISO88591));
          } catch (uee) {
            throw new IllegalStateException_1.default("Platform does not support required encoding: " + uee.message);
          }
        };
        DecodedBitStreamParser2.unrandomize255State = function(randomizedBase256Codeword, base256CodewordPosition) {
          var pseudoRandomNumber = 149 * base256CodewordPosition % 255 + 1;
          var tempVariable = randomizedBase256Codeword - pseudoRandomNumber;
          return tempVariable >= 0 ? tempVariable : tempVariable + 256;
        };
        DecodedBitStreamParser2.C40_BASIC_SET_CHARS = [
          "*",
          "*",
          "*",
          " ",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z"
        ];
        DecodedBitStreamParser2.C40_SHIFT2_SET_CHARS = [
          "!",
          '"',
          "#",
          "$",
          "%",
          "&",
          "'",
          "(",
          ")",
          "*",
          "+",
          ",",
          "-",
          ".",
          "/",
          ":",
          ";",
          "<",
          "=",
          ">",
          "?",
          "@",
          "[",
          "\\",
          "]",
          "^",
          "_"
        ];
        DecodedBitStreamParser2.TEXT_BASIC_SET_CHARS = [
          "*",
          "*",
          "*",
          " ",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z"
        ];
        DecodedBitStreamParser2.TEXT_SHIFT2_SET_CHARS = DecodedBitStreamParser2.C40_SHIFT2_SET_CHARS;
        DecodedBitStreamParser2.TEXT_SHIFT3_SET_CHARS = [
          "`",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          "{",
          "|",
          "}",
          "~",
          String.fromCharCode(127)
        ];
        return DecodedBitStreamParser2;
      }()
    );
    exports.default = DecodedBitStreamParser;
  }
});

// node_modules/@zxing/library/esm5/core/datamatrix/decoder/Decoder.js
var require_Decoder = __commonJS({
  "node_modules/@zxing/library/esm5/core/datamatrix/decoder/Decoder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReedSolomonDecoder_1 = require_ReedSolomonDecoder();
    var GenericGF_1 = require_GenericGF();
    var BitMatrixParser_1 = require_BitMatrixParser();
    var DataBlock_1 = require_DataBlock();
    var DecodedBitStreamParser_1 = require_DecodedBitStreamParser();
    var ChecksumException_1 = require_ChecksumException();
    var Decoder = (
      /** @class */
      function() {
        function Decoder2() {
          this.rsDecoder = new ReedSolomonDecoder_1.default(GenericGF_1.default.DATA_MATRIX_FIELD_256);
        }
        Decoder2.prototype.decode = function(bits) {
          var parser = new BitMatrixParser_1.default(bits);
          var version = parser.getVersion();
          var codewords = parser.readCodewords();
          var dataBlocks = DataBlock_1.default.getDataBlocks(codewords, version);
          var totalBytes = 0;
          for (var _i = 0, dataBlocks_1 = dataBlocks; _i < dataBlocks_1.length; _i++) {
            var db = dataBlocks_1[_i];
            totalBytes += db.getNumDataCodewords();
          }
          var resultBytes = new Uint8Array(totalBytes);
          var dataBlocksCount = dataBlocks.length;
          for (var j = 0; j < dataBlocksCount; j++) {
            var dataBlock = dataBlocks[j];
            var codewordBytes = dataBlock.getCodewords();
            var numDataCodewords = dataBlock.getNumDataCodewords();
            this.correctErrors(codewordBytes, numDataCodewords);
            for (var i = 0; i < numDataCodewords; i++) {
              resultBytes[i * dataBlocksCount + j] = codewordBytes[i];
            }
          }
          return DecodedBitStreamParser_1.default.decode(resultBytes);
        };
        Decoder2.prototype.correctErrors = function(codewordBytes, numDataCodewords) {
          var numCodewords = codewordBytes.length;
          var codewordsInts = new Int32Array(codewordBytes);
          try {
            this.rsDecoder.decode(codewordsInts, codewordBytes.length - numDataCodewords);
          } catch (ignored) {
            throw new ChecksumException_1.default();
          }
          for (var i = 0; i < numDataCodewords; i++) {
            codewordBytes[i] = codewordsInts[i];
          }
        };
        return Decoder2;
      }()
    );
    exports.default = Decoder;
  }
});

// node_modules/@zxing/library/esm5/core/common/DetectorResult.js
var require_DetectorResult = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/DetectorResult.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DetectorResult = (
      /** @class */
      function() {
        function DetectorResult2(bits, points) {
          this.bits = bits;
          this.points = points;
        }
        DetectorResult2.prototype.getBits = function() {
          return this.bits;
        };
        DetectorResult2.prototype.getPoints = function() {
          return this.points;
        };
        return DetectorResult2;
      }()
    );
    exports.default = DetectorResult;
  }
});

// node_modules/@zxing/library/esm5/core/common/GridSampler.js
var require_GridSampler = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/GridSampler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NotFoundException_1 = require_NotFoundException();
    var GridSampler = (
      /** @class */
      function() {
        function GridSampler2() {
        }
        GridSampler2.checkAndNudgePoints = function(image, points) {
          var width = image.getWidth();
          var height = image.getHeight();
          var nudged = true;
          for (var offset = 0; offset < points.length && nudged; offset += 2) {
            var x = Math.floor(points[offset]);
            var y = Math.floor(points[offset + 1]);
            if (x < -1 || x > width || y < -1 || y > height) {
              throw new NotFoundException_1.default();
            }
            nudged = false;
            if (x === -1) {
              points[offset] = 0;
              nudged = true;
            } else if (x === width) {
              points[offset] = width - 1;
              nudged = true;
            }
            if (y === -1) {
              points[offset + 1] = 0;
              nudged = true;
            } else if (y === height) {
              points[offset + 1] = height - 1;
              nudged = true;
            }
          }
          nudged = true;
          for (var offset = points.length - 2; offset >= 0 && nudged; offset -= 2) {
            var x = Math.floor(points[offset]);
            var y = Math.floor(points[offset + 1]);
            if (x < -1 || x > width || y < -1 || y > height) {
              throw new NotFoundException_1.default();
            }
            nudged = false;
            if (x === -1) {
              points[offset] = 0;
              nudged = true;
            } else if (x === width) {
              points[offset] = width - 1;
              nudged = true;
            }
            if (y === -1) {
              points[offset + 1] = 0;
              nudged = true;
            } else if (y === height) {
              points[offset + 1] = height - 1;
              nudged = true;
            }
          }
        };
        return GridSampler2;
      }()
    );
    exports.default = GridSampler;
  }
});

// node_modules/@zxing/library/esm5/core/common/PerspectiveTransform.js
var require_PerspectiveTransform = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/PerspectiveTransform.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PerspectiveTransform = (
      /** @class */
      function() {
        function PerspectiveTransform2(a11, a21, a31, a12, a22, a32, a13, a23, a33) {
          this.a11 = a11;
          this.a21 = a21;
          this.a31 = a31;
          this.a12 = a12;
          this.a22 = a22;
          this.a32 = a32;
          this.a13 = a13;
          this.a23 = a23;
          this.a33 = a33;
        }
        PerspectiveTransform2.quadrilateralToQuadrilateral = function(x0, y0, x1, y1, x2, y2, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
          var qToS = PerspectiveTransform2.quadrilateralToSquare(x0, y0, x1, y1, x2, y2, x3, y3);
          var sToQ = PerspectiveTransform2.squareToQuadrilateral(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p);
          return sToQ.times(qToS);
        };
        PerspectiveTransform2.prototype.transformPoints = function(points) {
          var max = points.length;
          var a11 = this.a11;
          var a12 = this.a12;
          var a13 = this.a13;
          var a21 = this.a21;
          var a22 = this.a22;
          var a23 = this.a23;
          var a31 = this.a31;
          var a32 = this.a32;
          var a33 = this.a33;
          for (var i = 0; i < max; i += 2) {
            var x = points[i];
            var y = points[i + 1];
            var denominator = a13 * x + a23 * y + a33;
            points[i] = (a11 * x + a21 * y + a31) / denominator;
            points[i + 1] = (a12 * x + a22 * y + a32) / denominator;
          }
        };
        PerspectiveTransform2.prototype.transformPointsWithValues = function(xValues, yValues) {
          var a11 = this.a11;
          var a12 = this.a12;
          var a13 = this.a13;
          var a21 = this.a21;
          var a22 = this.a22;
          var a23 = this.a23;
          var a31 = this.a31;
          var a32 = this.a32;
          var a33 = this.a33;
          var n = xValues.length;
          for (var i = 0; i < n; i++) {
            var x = xValues[i];
            var y = yValues[i];
            var denominator = a13 * x + a23 * y + a33;
            xValues[i] = (a11 * x + a21 * y + a31) / denominator;
            yValues[i] = (a12 * x + a22 * y + a32) / denominator;
          }
        };
        PerspectiveTransform2.squareToQuadrilateral = function(x0, y0, x1, y1, x2, y2, x3, y3) {
          var dx3 = x0 - x1 + x2 - x3;
          var dy3 = y0 - y1 + y2 - y3;
          if (dx3 === 0 && dy3 === 0) {
            return new PerspectiveTransform2(x1 - x0, x2 - x1, x0, y1 - y0, y2 - y1, y0, 0, 0, 1);
          } else {
            var dx1 = x1 - x2;
            var dx2 = x3 - x2;
            var dy1 = y1 - y2;
            var dy2 = y3 - y2;
            var denominator = dx1 * dy2 - dx2 * dy1;
            var a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
            var a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
            return new PerspectiveTransform2(x1 - x0 + a13 * x1, x3 - x0 + a23 * x3, x0, y1 - y0 + a13 * y1, y3 - y0 + a23 * y3, y0, a13, a23, 1);
          }
        };
        PerspectiveTransform2.quadrilateralToSquare = function(x0, y0, x1, y1, x2, y2, x3, y3) {
          return PerspectiveTransform2.squareToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3).buildAdjoint();
        };
        PerspectiveTransform2.prototype.buildAdjoint = function() {
          return new PerspectiveTransform2(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
        };
        PerspectiveTransform2.prototype.times = function(other) {
          return new PerspectiveTransform2(this.a11 * other.a11 + this.a21 * other.a12 + this.a31 * other.a13, this.a11 * other.a21 + this.a21 * other.a22 + this.a31 * other.a23, this.a11 * other.a31 + this.a21 * other.a32 + this.a31 * other.a33, this.a12 * other.a11 + this.a22 * other.a12 + this.a32 * other.a13, this.a12 * other.a21 + this.a22 * other.a22 + this.a32 * other.a23, this.a12 * other.a31 + this.a22 * other.a32 + this.a32 * other.a33, this.a13 * other.a11 + this.a23 * other.a12 + this.a33 * other.a13, this.a13 * other.a21 + this.a23 * other.a22 + this.a33 * other.a23, this.a13 * other.a31 + this.a23 * other.a32 + this.a33 * other.a33);
        };
        return PerspectiveTransform2;
      }()
    );
    exports.default = PerspectiveTransform;
  }
});

// node_modules/@zxing/library/esm5/core/common/DefaultGridSampler.js
var require_DefaultGridSampler = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/DefaultGridSampler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var GridSampler_1 = require_GridSampler();
    var BitMatrix_1 = require_BitMatrix();
    var PerspectiveTransform_1 = require_PerspectiveTransform();
    var NotFoundException_1 = require_NotFoundException();
    var DefaultGridSampler = (
      /** @class */
      function(_super) {
        __extends(DefaultGridSampler2, _super);
        function DefaultGridSampler2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        DefaultGridSampler2.prototype.sampleGrid = function(image, dimensionX, dimensionY, p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY) {
          var transform = PerspectiveTransform_1.default.quadrilateralToQuadrilateral(p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY);
          return this.sampleGridWithTransform(image, dimensionX, dimensionY, transform);
        };
        DefaultGridSampler2.prototype.sampleGridWithTransform = function(image, dimensionX, dimensionY, transform) {
          if (dimensionX <= 0 || dimensionY <= 0) {
            throw new NotFoundException_1.default();
          }
          var bits = new BitMatrix_1.default(dimensionX, dimensionY);
          var points = new Float32Array(2 * dimensionX);
          for (var y = 0; y < dimensionY; y++) {
            var max = points.length;
            var iValue = y + 0.5;
            for (var x = 0; x < max; x += 2) {
              points[x] = /*(float)*/
              x / 2 + 0.5;
              points[x + 1] = iValue;
            }
            transform.transformPoints(points);
            GridSampler_1.default.checkAndNudgePoints(image, points);
            try {
              for (var x = 0; x < max; x += 2) {
                if (image.get(Math.floor(points[x]), Math.floor(points[x + 1]))) {
                  bits.set(x / 2, y);
                }
              }
            } catch (aioobe) {
              throw new NotFoundException_1.default();
            }
          }
          return bits;
        };
        return DefaultGridSampler2;
      }(GridSampler_1.default)
    );
    exports.default = DefaultGridSampler;
  }
});

// node_modules/@zxing/library/esm5/core/common/GridSamplerInstance.js
var require_GridSamplerInstance = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/GridSamplerInstance.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DefaultGridSampler_1 = require_DefaultGridSampler();
    var GridSamplerInstance = (
      /** @class */
      function() {
        function GridSamplerInstance2() {
        }
        GridSamplerInstance2.setGridSampler = function(newGridSampler) {
          GridSamplerInstance2.gridSampler = newGridSampler;
        };
        GridSamplerInstance2.getInstance = function() {
          return GridSamplerInstance2.gridSampler;
        };
        GridSamplerInstance2.gridSampler = new DefaultGridSampler_1.default();
        return GridSamplerInstance2;
      }()
    );
    exports.default = GridSamplerInstance;
  }
});

// node_modules/@zxing/library/esm5/core/common/detector/WhiteRectangleDetector.js
var require_WhiteRectangleDetector = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/detector/WhiteRectangleDetector.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResultPoint_1 = require_ResultPoint();
    var MathUtils_1 = require_MathUtils();
    var NotFoundException_1 = require_NotFoundException();
    var WhiteRectangleDetector = (
      /** @class */
      function() {
        function WhiteRectangleDetector2(image, initSize, x, y) {
          this.image = image;
          this.height = image.getHeight();
          this.width = image.getWidth();
          if (void 0 === initSize || null === initSize) {
            initSize = WhiteRectangleDetector2.INIT_SIZE;
          }
          if (void 0 === x || null === x) {
            x = image.getWidth() / 2 | 0;
          }
          if (void 0 === y || null === y) {
            y = image.getHeight() / 2 | 0;
          }
          var halfsize = initSize / 2 | 0;
          this.leftInit = x - halfsize;
          this.rightInit = x + halfsize;
          this.upInit = y - halfsize;
          this.downInit = y + halfsize;
          if (this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) {
            throw new NotFoundException_1.default();
          }
        }
        WhiteRectangleDetector2.prototype.detect = function() {
          var left = this.leftInit;
          var right = this.rightInit;
          var up = this.upInit;
          var down = this.downInit;
          var sizeExceeded = false;
          var aBlackPointFoundOnBorder = true;
          var atLeastOneBlackPointFoundOnBorder = false;
          var atLeastOneBlackPointFoundOnRight = false;
          var atLeastOneBlackPointFoundOnBottom = false;
          var atLeastOneBlackPointFoundOnLeft = false;
          var atLeastOneBlackPointFoundOnTop = false;
          var width = this.width;
          var height = this.height;
          while (aBlackPointFoundOnBorder) {
            aBlackPointFoundOnBorder = false;
            var rightBorderNotWhite = true;
            while ((rightBorderNotWhite || !atLeastOneBlackPointFoundOnRight) && right < width) {
              rightBorderNotWhite = this.containsBlackPoint(up, down, right, false);
              if (rightBorderNotWhite) {
                right++;
                aBlackPointFoundOnBorder = true;
                atLeastOneBlackPointFoundOnRight = true;
              } else if (!atLeastOneBlackPointFoundOnRight) {
                right++;
              }
            }
            if (right >= width) {
              sizeExceeded = true;
              break;
            }
            var bottomBorderNotWhite = true;
            while ((bottomBorderNotWhite || !atLeastOneBlackPointFoundOnBottom) && down < height) {
              bottomBorderNotWhite = this.containsBlackPoint(left, right, down, true);
              if (bottomBorderNotWhite) {
                down++;
                aBlackPointFoundOnBorder = true;
                atLeastOneBlackPointFoundOnBottom = true;
              } else if (!atLeastOneBlackPointFoundOnBottom) {
                down++;
              }
            }
            if (down >= height) {
              sizeExceeded = true;
              break;
            }
            var leftBorderNotWhite = true;
            while ((leftBorderNotWhite || !atLeastOneBlackPointFoundOnLeft) && left >= 0) {
              leftBorderNotWhite = this.containsBlackPoint(up, down, left, false);
              if (leftBorderNotWhite) {
                left--;
                aBlackPointFoundOnBorder = true;
                atLeastOneBlackPointFoundOnLeft = true;
              } else if (!atLeastOneBlackPointFoundOnLeft) {
                left--;
              }
            }
            if (left < 0) {
              sizeExceeded = true;
              break;
            }
            var topBorderNotWhite = true;
            while ((topBorderNotWhite || !atLeastOneBlackPointFoundOnTop) && up >= 0) {
              topBorderNotWhite = this.containsBlackPoint(left, right, up, true);
              if (topBorderNotWhite) {
                up--;
                aBlackPointFoundOnBorder = true;
                atLeastOneBlackPointFoundOnTop = true;
              } else if (!atLeastOneBlackPointFoundOnTop) {
                up--;
              }
            }
            if (up < 0) {
              sizeExceeded = true;
              break;
            }
            if (aBlackPointFoundOnBorder) {
              atLeastOneBlackPointFoundOnBorder = true;
            }
          }
          if (!sizeExceeded && atLeastOneBlackPointFoundOnBorder) {
            var maxSize = right - left;
            var z = null;
            for (var i = 1; z === null && i < maxSize; i++) {
              z = this.getBlackPointOnSegment(left, down - i, left + i, down);
            }
            if (z == null) {
              throw new NotFoundException_1.default();
            }
            var t = null;
            for (var i = 1; t === null && i < maxSize; i++) {
              t = this.getBlackPointOnSegment(left, up + i, left + i, up);
            }
            if (t == null) {
              throw new NotFoundException_1.default();
            }
            var x = null;
            for (var i = 1; x === null && i < maxSize; i++) {
              x = this.getBlackPointOnSegment(right, up + i, right - i, up);
            }
            if (x == null) {
              throw new NotFoundException_1.default();
            }
            var y = null;
            for (var i = 1; y === null && i < maxSize; i++) {
              y = this.getBlackPointOnSegment(right, down - i, right - i, down);
            }
            if (y == null) {
              throw new NotFoundException_1.default();
            }
            return this.centerEdges(y, z, x, t);
          } else {
            throw new NotFoundException_1.default();
          }
        };
        WhiteRectangleDetector2.prototype.getBlackPointOnSegment = function(aX, aY, bX, bY) {
          var dist = MathUtils_1.default.round(MathUtils_1.default.distance(aX, aY, bX, bY));
          var xStep = (bX - aX) / dist;
          var yStep = (bY - aY) / dist;
          var image = this.image;
          for (var i = 0; i < dist; i++) {
            var x = MathUtils_1.default.round(aX + i * xStep);
            var y = MathUtils_1.default.round(aY + i * yStep);
            if (image.get(x, y)) {
              return new ResultPoint_1.default(x, y);
            }
          }
          return null;
        };
        WhiteRectangleDetector2.prototype.centerEdges = function(y, z, x, t) {
          var yi = y.getX();
          var yj = y.getY();
          var zi = z.getX();
          var zj = z.getY();
          var xi = x.getX();
          var xj = x.getY();
          var ti = t.getX();
          var tj = t.getY();
          var CORR = WhiteRectangleDetector2.CORR;
          if (yi < this.width / 2) {
            return [
              new ResultPoint_1.default(ti - CORR, tj + CORR),
              new ResultPoint_1.default(zi + CORR, zj + CORR),
              new ResultPoint_1.default(xi - CORR, xj - CORR),
              new ResultPoint_1.default(yi + CORR, yj - CORR)
            ];
          } else {
            return [
              new ResultPoint_1.default(ti + CORR, tj + CORR),
              new ResultPoint_1.default(zi + CORR, zj - CORR),
              new ResultPoint_1.default(xi - CORR, xj + CORR),
              new ResultPoint_1.default(yi - CORR, yj - CORR)
            ];
          }
        };
        WhiteRectangleDetector2.prototype.containsBlackPoint = function(a, b, fixed, horizontal) {
          var image = this.image;
          if (horizontal) {
            for (var x = a; x <= b; x++) {
              if (image.get(x, fixed)) {
                return true;
              }
            }
          } else {
            for (var y = a; y <= b; y++) {
              if (image.get(fixed, y)) {
                return true;
              }
            }
          }
          return false;
        };
        WhiteRectangleDetector2.INIT_SIZE = 10;
        WhiteRectangleDetector2.CORR = 1;
        return WhiteRectangleDetector2;
      }()
    );
    exports.default = WhiteRectangleDetector;
  }
});

// node_modules/@zxing/library/esm5/core/datamatrix/detector/Detector.js
var require_Detector = __commonJS({
  "node_modules/@zxing/library/esm5/core/datamatrix/detector/Detector.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResultPoint_1 = require_ResultPoint();
    var DetectorResult_1 = require_DetectorResult();
    var GridSamplerInstance_1 = require_GridSamplerInstance();
    var MathUtils_1 = require_MathUtils();
    var WhiteRectangleDetector_1 = require_WhiteRectangleDetector();
    var NotFoundException_1 = require_NotFoundException();
    var Detector = (
      /** @class */
      function() {
        function Detector2(image) {
          this.image = image;
          this.rectangleDetector = new WhiteRectangleDetector_1.default(image);
        }
        Detector2.prototype.detect = function() {
          var cornerPoints = this.rectangleDetector.detect();
          var pointA = cornerPoints[0];
          var pointB = cornerPoints[1];
          var pointC = cornerPoints[2];
          var pointD = cornerPoints[3];
          var transitions = [];
          transitions.push(this.transitionsBetween(pointA, pointB));
          transitions.push(this.transitionsBetween(pointA, pointC));
          transitions.push(this.transitionsBetween(pointB, pointD));
          transitions.push(this.transitionsBetween(pointC, pointD));
          transitions.sort(ResultPointsAndTransitions.resultPointsAndTransitionsComparator);
          var lSideOne = transitions[0];
          var lSideTwo = transitions[1];
          var pointCount = /* @__PURE__ */ new Map();
          Detector2.increment(pointCount, lSideOne.getFrom());
          Detector2.increment(pointCount, lSideOne.getTo());
          Detector2.increment(pointCount, lSideTwo.getFrom());
          Detector2.increment(pointCount, lSideTwo.getTo());
          var maybeTopLeft = null;
          var bottomLeft = null;
          var maybeBottomRight = null;
          for (var _i = 0, _a = Array.from(pointCount.entries()); _i < _a.length; _i++) {
            var _b = _a[_i], point = _b[0], value = _b[1];
            if (value === 2) {
              bottomLeft = point;
            } else {
              if (maybeTopLeft == null) {
                maybeTopLeft = point;
              } else {
                maybeBottomRight = point;
              }
            }
          }
          if (maybeTopLeft == null || bottomLeft == null || maybeBottomRight == null) {
            throw new NotFoundException_1.default();
          }
          var corners = [maybeTopLeft, bottomLeft, maybeBottomRight];
          ResultPoint_1.default.orderBestPatterns(corners);
          var bottomRight = corners[0];
          bottomLeft = corners[1];
          var topLeft = corners[2];
          var topRight;
          if (!pointCount.has(pointA)) {
            topRight = pointA;
          } else if (!pointCount.has(pointB)) {
            topRight = pointB;
          } else if (!pointCount.has(pointC)) {
            topRight = pointC;
          } else {
            topRight = pointD;
          }
          var dimensionTop = this.transitionsBetween(topLeft, topRight).getTransitions();
          var dimensionRight = this.transitionsBetween(bottomRight, topRight).getTransitions();
          if ((dimensionTop & 1) === 1) {
            dimensionTop++;
          }
          dimensionTop += 2;
          if ((dimensionRight & 1) === 1) {
            dimensionRight++;
          }
          dimensionRight += 2;
          var bits;
          var correctedTopRight;
          if (4 * dimensionTop >= 7 * dimensionRight || 4 * dimensionRight >= 7 * dimensionTop) {
            correctedTopRight = this.correctTopRightRectangular(bottomLeft, bottomRight, topLeft, topRight, dimensionTop, dimensionRight);
            if (correctedTopRight == null) {
              correctedTopRight = topRight;
            }
            dimensionTop = this.transitionsBetween(topLeft, correctedTopRight).getTransitions();
            dimensionRight = this.transitionsBetween(bottomRight, correctedTopRight).getTransitions();
            if ((dimensionTop & 1) === 1) {
              dimensionTop++;
            }
            if ((dimensionRight & 1) === 1) {
              dimensionRight++;
            }
            bits = Detector2.sampleGrid(this.image, topLeft, bottomLeft, bottomRight, correctedTopRight, dimensionTop, dimensionRight);
          } else {
            var dimension = Math.min(dimensionRight, dimensionTop);
            correctedTopRight = this.correctTopRight(bottomLeft, bottomRight, topLeft, topRight, dimension);
            if (correctedTopRight == null) {
              correctedTopRight = topRight;
            }
            var dimensionCorrected = Math.max(this.transitionsBetween(topLeft, correctedTopRight).getTransitions(), this.transitionsBetween(bottomRight, correctedTopRight).getTransitions());
            dimensionCorrected++;
            if ((dimensionCorrected & 1) === 1) {
              dimensionCorrected++;
            }
            bits = Detector2.sampleGrid(this.image, topLeft, bottomLeft, bottomRight, correctedTopRight, dimensionCorrected, dimensionCorrected);
          }
          return new DetectorResult_1.default(bits, [topLeft, bottomLeft, bottomRight, correctedTopRight]);
        };
        Detector2.prototype.correctTopRightRectangular = function(bottomLeft, bottomRight, topLeft, topRight, dimensionTop, dimensionRight) {
          var corr = Detector2.distance(bottomLeft, bottomRight) / dimensionTop;
          var norm = Detector2.distance(topLeft, topRight);
          var cos = (topRight.getX() - topLeft.getX()) / norm;
          var sin = (topRight.getY() - topLeft.getY()) / norm;
          var c1 = new ResultPoint_1.default(topRight.getX() + corr * cos, topRight.getY() + corr * sin);
          corr = Detector2.distance(bottomLeft, topLeft) / dimensionRight;
          norm = Detector2.distance(bottomRight, topRight);
          cos = (topRight.getX() - bottomRight.getX()) / norm;
          sin = (topRight.getY() - bottomRight.getY()) / norm;
          var c2 = new ResultPoint_1.default(topRight.getX() + corr * cos, topRight.getY() + corr * sin);
          if (!this.isValid(c1)) {
            if (this.isValid(c2)) {
              return c2;
            }
            return null;
          }
          if (!this.isValid(c2)) {
            return c1;
          }
          var l1 = Math.abs(dimensionTop - this.transitionsBetween(topLeft, c1).getTransitions()) + Math.abs(dimensionRight - this.transitionsBetween(bottomRight, c1).getTransitions());
          var l2 = Math.abs(dimensionTop - this.transitionsBetween(topLeft, c2).getTransitions()) + Math.abs(dimensionRight - this.transitionsBetween(bottomRight, c2).getTransitions());
          if (l1 <= l2) {
            return c1;
          }
          return c2;
        };
        Detector2.prototype.correctTopRight = function(bottomLeft, bottomRight, topLeft, topRight, dimension) {
          var corr = Detector2.distance(bottomLeft, bottomRight) / dimension;
          var norm = Detector2.distance(topLeft, topRight);
          var cos = (topRight.getX() - topLeft.getX()) / norm;
          var sin = (topRight.getY() - topLeft.getY()) / norm;
          var c1 = new ResultPoint_1.default(topRight.getX() + corr * cos, topRight.getY() + corr * sin);
          corr = Detector2.distance(bottomLeft, topLeft) / dimension;
          norm = Detector2.distance(bottomRight, topRight);
          cos = (topRight.getX() - bottomRight.getX()) / norm;
          sin = (topRight.getY() - bottomRight.getY()) / norm;
          var c2 = new ResultPoint_1.default(topRight.getX() + corr * cos, topRight.getY() + corr * sin);
          if (!this.isValid(c1)) {
            if (this.isValid(c2)) {
              return c2;
            }
            return null;
          }
          if (!this.isValid(c2)) {
            return c1;
          }
          var l1 = Math.abs(this.transitionsBetween(topLeft, c1).getTransitions() - this.transitionsBetween(bottomRight, c1).getTransitions());
          var l2 = Math.abs(this.transitionsBetween(topLeft, c2).getTransitions() - this.transitionsBetween(bottomRight, c2).getTransitions());
          return l1 <= l2 ? c1 : c2;
        };
        Detector2.prototype.isValid = function(p) {
          return p.getX() >= 0 && p.getX() < this.image.getWidth() && p.getY() > 0 && p.getY() < this.image.getHeight();
        };
        Detector2.distance = function(a, b) {
          return MathUtils_1.default.round(ResultPoint_1.default.distance(a, b));
        };
        Detector2.increment = function(table, key) {
          var value = table.get(key);
          table.set(key, value == null ? 1 : value + 1);
        };
        Detector2.sampleGrid = function(image, topLeft, bottomLeft, bottomRight, topRight, dimensionX, dimensionY) {
          var sampler = GridSamplerInstance_1.default.getInstance();
          return sampler.sampleGrid(image, dimensionX, dimensionY, 0.5, 0.5, dimensionX - 0.5, 0.5, dimensionX - 0.5, dimensionY - 0.5, 0.5, dimensionY - 0.5, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRight.getX(), bottomRight.getY(), bottomLeft.getX(), bottomLeft.getY());
        };
        Detector2.prototype.transitionsBetween = function(from, to) {
          var fromX = from.getX() | 0;
          var fromY = from.getY() | 0;
          var toX = to.getX() | 0;
          var toY = to.getY() | 0;
          var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
          if (steep) {
            var temp = fromX;
            fromX = fromY;
            fromY = temp;
            temp = toX;
            toX = toY;
            toY = temp;
          }
          var dx = Math.abs(toX - fromX);
          var dy = Math.abs(toY - fromY);
          var error = -dx / 2;
          var ystep = fromY < toY ? 1 : -1;
          var xstep = fromX < toX ? 1 : -1;
          var transitions = 0;
          var inBlack = this.image.get(steep ? fromY : fromX, steep ? fromX : fromY);
          for (var x = fromX, y = fromY; x !== toX; x += xstep) {
            var isBlack = this.image.get(steep ? y : x, steep ? x : y);
            if (isBlack !== inBlack) {
              transitions++;
              inBlack = isBlack;
            }
            error += dy;
            if (error > 0) {
              if (y === toY) {
                break;
              }
              y += ystep;
              error -= dx;
            }
          }
          return new ResultPointsAndTransitions(from, to, transitions);
        };
        return Detector2;
      }()
    );
    exports.default = Detector;
    var ResultPointsAndTransitions = (
      /** @class */
      function() {
        function ResultPointsAndTransitions2(from, to, transitions) {
          this.from = from;
          this.to = to;
          this.transitions = transitions;
        }
        ResultPointsAndTransitions2.prototype.getFrom = function() {
          return this.from;
        };
        ResultPointsAndTransitions2.prototype.getTo = function() {
          return this.to;
        };
        ResultPointsAndTransitions2.prototype.getTransitions = function() {
          return this.transitions;
        };
        ResultPointsAndTransitions2.prototype.toString = function() {
          return this.from + "/" + this.to + "/" + this.transitions;
        };
        ResultPointsAndTransitions2.resultPointsAndTransitionsComparator = function(o1, o2) {
          return o1.getTransitions() - o2.getTransitions();
        };
        return ResultPointsAndTransitions2;
      }()
    );
  }
});

// node_modules/@zxing/library/esm5/core/datamatrix/DataMatrixReader.js
var require_DataMatrixReader = __commonJS({
  "node_modules/@zxing/library/esm5/core/datamatrix/DataMatrixReader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Decoder_1 = require_Decoder();
    var Result_1 = require_Result();
    var BarcodeFormat_1 = require_BarcodeFormat();
    var DecodeHintType_1 = require_DecodeHintType();
    var ResultMetadataType_1 = require_ResultMetadataType();
    var BitMatrix_1 = require_BitMatrix();
    var Detector_1 = require_Detector();
    var System_1 = require_System();
    var NotFoundException_1 = require_NotFoundException();
    var DataMatrixReader = (
      /** @class */
      function() {
        function DataMatrixReader2() {
          this.decoder = new Decoder_1.default();
        }
        DataMatrixReader2.prototype.decode = function(image, hints) {
          if (hints === void 0) {
            hints = null;
          }
          var decoderResult;
          var points;
          if (hints != null && hints.has(DecodeHintType_1.default.PURE_BARCODE)) {
            var bits = DataMatrixReader2.extractPureBits(image.getBlackMatrix());
            decoderResult = this.decoder.decode(bits);
            points = DataMatrixReader2.NO_POINTS;
          } else {
            var detectorResult = new Detector_1.default(image.getBlackMatrix()).detect();
            decoderResult = this.decoder.decode(detectorResult.getBits());
            points = detectorResult.getPoints();
          }
          var rawBytes = decoderResult.getRawBytes();
          var result = new Result_1.default(decoderResult.getText(), rawBytes, 8 * rawBytes.length, points, BarcodeFormat_1.default.DATA_MATRIX, System_1.default.currentTimeMillis());
          var byteSegments = decoderResult.getByteSegments();
          if (byteSegments != null) {
            result.putMetadata(ResultMetadataType_1.default.BYTE_SEGMENTS, byteSegments);
          }
          var ecLevel = decoderResult.getECLevel();
          if (ecLevel != null) {
            result.putMetadata(ResultMetadataType_1.default.ERROR_CORRECTION_LEVEL, ecLevel);
          }
          return result;
        };
        DataMatrixReader2.prototype.reset = function() {
        };
        DataMatrixReader2.extractPureBits = function(image) {
          var leftTopBlack = image.getTopLeftOnBit();
          var rightBottomBlack = image.getBottomRightOnBit();
          if (leftTopBlack == null || rightBottomBlack == null) {
            throw new NotFoundException_1.default();
          }
          var moduleSize = this.moduleSize(leftTopBlack, image);
          var top = leftTopBlack[1];
          var bottom = rightBottomBlack[1];
          var left = leftTopBlack[0];
          var right = rightBottomBlack[0];
          var matrixWidth = (right - left + 1) / moduleSize;
          var matrixHeight = (bottom - top + 1) / moduleSize;
          if (matrixWidth <= 0 || matrixHeight <= 0) {
            throw new NotFoundException_1.default();
          }
          var nudge = moduleSize / 2;
          top += nudge;
          left += nudge;
          var bits = new BitMatrix_1.default(matrixWidth, matrixHeight);
          for (var y = 0; y < matrixHeight; y++) {
            var iOffset = top + y * moduleSize;
            for (var x = 0; x < matrixWidth; x++) {
              if (image.get(left + x * moduleSize, iOffset)) {
                bits.set(x, y);
              }
            }
          }
          return bits;
        };
        DataMatrixReader2.moduleSize = function(leftTopBlack, image) {
          var width = image.getWidth();
          var x = leftTopBlack[0];
          var y = leftTopBlack[1];
          while (x < width && image.get(x, y)) {
            x++;
          }
          if (x === width) {
            throw new NotFoundException_1.default();
          }
          var moduleSize = x - leftTopBlack[0];
          if (moduleSize === 0) {
            throw new NotFoundException_1.default();
          }
          return moduleSize;
        };
        DataMatrixReader2.NO_POINTS = [];
        return DataMatrixReader2;
      }()
    );
    exports.default = DataMatrixReader;
  }
});

// node_modules/@zxing/library/esm5/browser/BrowserDatamatrixCodeReader.js
var require_BrowserDatamatrixCodeReader = __commonJS({
  "node_modules/@zxing/library/esm5/browser/BrowserDatamatrixCodeReader.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BrowserCodeReader_1 = require_BrowserCodeReader();
    var DataMatrixReader_1 = require_DataMatrixReader();
    var BrowserDatamatrixCodeReader = (
      /** @class */
      function(_super) {
        __extends(BrowserDatamatrixCodeReader2, _super);
        function BrowserDatamatrixCodeReader2(timeBetweenScansMillis) {
          if (timeBetweenScansMillis === void 0) {
            timeBetweenScansMillis = 500;
          }
          return _super.call(this, new DataMatrixReader_1.default(), timeBetweenScansMillis) || this;
        }
        return BrowserDatamatrixCodeReader2;
      }(BrowserCodeReader_1.BrowserCodeReader)
    );
    exports.BrowserDatamatrixCodeReader = BrowserDatamatrixCodeReader;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/decoder/ErrorCorrectionLevel.js
var require_ErrorCorrectionLevel = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/decoder/ErrorCorrectionLevel.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArgumentException_1 = require_ArgumentException();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var ErrorCorrectionLevelValues;
    (function(ErrorCorrectionLevelValues2) {
      ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["L"] = 0] = "L";
      ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["M"] = 1] = "M";
      ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["Q"] = 2] = "Q";
      ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["H"] = 3] = "H";
    })(ErrorCorrectionLevelValues = exports.ErrorCorrectionLevelValues || (exports.ErrorCorrectionLevelValues = {}));
    var ErrorCorrectionLevel = (
      /** @class */
      function() {
        function ErrorCorrectionLevel2(value, stringValue, bits) {
          this.value = value;
          this.stringValue = stringValue;
          this.bits = bits;
          ErrorCorrectionLevel2.FOR_BITS.set(bits, this);
          ErrorCorrectionLevel2.FOR_VALUE.set(value, this);
        }
        ErrorCorrectionLevel2.prototype.getValue = function() {
          return this.value;
        };
        ErrorCorrectionLevel2.prototype.getBits = function() {
          return this.bits;
        };
        ErrorCorrectionLevel2.fromString = function(s) {
          switch (s) {
            case "L":
              return ErrorCorrectionLevel2.L;
            case "M":
              return ErrorCorrectionLevel2.M;
            case "Q":
              return ErrorCorrectionLevel2.Q;
            case "H":
              return ErrorCorrectionLevel2.H;
            default:
              throw new ArgumentException_1.default(s + "not available");
          }
        };
        ErrorCorrectionLevel2.prototype.toString = function() {
          return this.stringValue;
        };
        ErrorCorrectionLevel2.prototype.equals = function(o) {
          if (!(o instanceof ErrorCorrectionLevel2)) {
            return false;
          }
          var other = o;
          return this.value === other.value;
        };
        ErrorCorrectionLevel2.forBits = function(bits) {
          if (bits < 0 || bits >= ErrorCorrectionLevel2.FOR_BITS.size) {
            throw new IllegalArgumentException_1.default();
          }
          return ErrorCorrectionLevel2.FOR_BITS.get(bits);
        };
        ErrorCorrectionLevel2.FOR_BITS = /* @__PURE__ */ new Map();
        ErrorCorrectionLevel2.FOR_VALUE = /* @__PURE__ */ new Map();
        ErrorCorrectionLevel2.L = new ErrorCorrectionLevel2(ErrorCorrectionLevelValues.L, "L", 1);
        ErrorCorrectionLevel2.M = new ErrorCorrectionLevel2(ErrorCorrectionLevelValues.M, "M", 0);
        ErrorCorrectionLevel2.Q = new ErrorCorrectionLevel2(ErrorCorrectionLevelValues.Q, "Q", 3);
        ErrorCorrectionLevel2.H = new ErrorCorrectionLevel2(ErrorCorrectionLevelValues.H, "H", 2);
        return ErrorCorrectionLevel2;
      }()
    );
    exports.default = ErrorCorrectionLevel;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/decoder/FormatInformation.js
var require_FormatInformation = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/decoder/FormatInformation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ErrorCorrectionLevel_1 = require_ErrorCorrectionLevel();
    var Integer_1 = require_Integer();
    var FormatInformation = (
      /** @class */
      function() {
        function FormatInformation2(formatInfo) {
          this.errorCorrectionLevel = ErrorCorrectionLevel_1.default.forBits(formatInfo >> 3 & 3);
          this.dataMask = /*(byte) */
          formatInfo & 7;
        }
        FormatInformation2.numBitsDiffering = function(a, b) {
          return Integer_1.default.bitCount(a ^ b);
        };
        FormatInformation2.decodeFormatInformation = function(maskedFormatInfo1, maskedFormatInfo2) {
          var formatInfo = FormatInformation2.doDecodeFormatInformation(maskedFormatInfo1, maskedFormatInfo2);
          if (formatInfo !== null) {
            return formatInfo;
          }
          return FormatInformation2.doDecodeFormatInformation(maskedFormatInfo1 ^ FormatInformation2.FORMAT_INFO_MASK_QR, maskedFormatInfo2 ^ FormatInformation2.FORMAT_INFO_MASK_QR);
        };
        FormatInformation2.doDecodeFormatInformation = function(maskedFormatInfo1, maskedFormatInfo2) {
          var bestDifference = Number.MAX_SAFE_INTEGER;
          var bestFormatInfo = 0;
          for (var _i = 0, _a = FormatInformation2.FORMAT_INFO_DECODE_LOOKUP; _i < _a.length; _i++) {
            var decodeInfo = _a[_i];
            var targetInfo = decodeInfo[0];
            if (targetInfo === maskedFormatInfo1 || targetInfo === maskedFormatInfo2) {
              return new FormatInformation2(decodeInfo[1]);
            }
            var bitsDifference = FormatInformation2.numBitsDiffering(maskedFormatInfo1, targetInfo);
            if (bitsDifference < bestDifference) {
              bestFormatInfo = decodeInfo[1];
              bestDifference = bitsDifference;
            }
            if (maskedFormatInfo1 !== maskedFormatInfo2) {
              bitsDifference = FormatInformation2.numBitsDiffering(maskedFormatInfo2, targetInfo);
              if (bitsDifference < bestDifference) {
                bestFormatInfo = decodeInfo[1];
                bestDifference = bitsDifference;
              }
            }
          }
          if (bestDifference <= 3) {
            return new FormatInformation2(bestFormatInfo);
          }
          return null;
        };
        FormatInformation2.prototype.getErrorCorrectionLevel = function() {
          return this.errorCorrectionLevel;
        };
        FormatInformation2.prototype.getDataMask = function() {
          return this.dataMask;
        };
        FormatInformation2.prototype.hashCode = function() {
          return this.errorCorrectionLevel.getBits() << 3 | this.dataMask;
        };
        FormatInformation2.prototype.equals = function(o) {
          if (!(o instanceof FormatInformation2)) {
            return false;
          }
          var other = o;
          return this.errorCorrectionLevel === other.errorCorrectionLevel && this.dataMask === other.dataMask;
        };
        FormatInformation2.FORMAT_INFO_MASK_QR = 21522;
        FormatInformation2.FORMAT_INFO_DECODE_LOOKUP = [
          Int32Array.from([21522, 0]),
          Int32Array.from([20773, 1]),
          Int32Array.from([24188, 2]),
          Int32Array.from([23371, 3]),
          Int32Array.from([17913, 4]),
          Int32Array.from([16590, 5]),
          Int32Array.from([20375, 6]),
          Int32Array.from([19104, 7]),
          Int32Array.from([30660, 8]),
          Int32Array.from([29427, 9]),
          Int32Array.from([32170, 10]),
          Int32Array.from([30877, 11]),
          Int32Array.from([26159, 12]),
          Int32Array.from([25368, 13]),
          Int32Array.from([27713, 14]),
          Int32Array.from([26998, 15]),
          Int32Array.from([5769, 16]),
          Int32Array.from([5054, 17]),
          Int32Array.from([7399, 18]),
          Int32Array.from([6608, 19]),
          Int32Array.from([1890, 20]),
          Int32Array.from([597, 21]),
          Int32Array.from([3340, 22]),
          Int32Array.from([2107, 23]),
          Int32Array.from([13663, 24]),
          Int32Array.from([12392, 25]),
          Int32Array.from([16177, 26]),
          Int32Array.from([14854, 27]),
          Int32Array.from([9396, 28]),
          Int32Array.from([8579, 29]),
          Int32Array.from([11994, 30]),
          Int32Array.from([11245, 31])
        ];
        return FormatInformation2;
      }()
    );
    exports.default = FormatInformation;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/decoder/ECBlocks.js
var require_ECBlocks = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/decoder/ECBlocks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ECBlocks = (
      /** @class */
      function() {
        function ECBlocks2(ecCodewordsPerBlock) {
          var ecBlocks = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            ecBlocks[_i - 1] = arguments[_i];
          }
          this.ecCodewordsPerBlock = ecCodewordsPerBlock;
          this.ecBlocks = ecBlocks;
        }
        ECBlocks2.prototype.getECCodewordsPerBlock = function() {
          return this.ecCodewordsPerBlock;
        };
        ECBlocks2.prototype.getNumBlocks = function() {
          var total = 0;
          var ecBlocks = this.ecBlocks;
          for (var _i = 0, ecBlocks_1 = ecBlocks; _i < ecBlocks_1.length; _i++) {
            var ecBlock = ecBlocks_1[_i];
            total += ecBlock.getCount();
          }
          return total;
        };
        ECBlocks2.prototype.getTotalECCodewords = function() {
          return this.ecCodewordsPerBlock * this.getNumBlocks();
        };
        ECBlocks2.prototype.getECBlocks = function() {
          return this.ecBlocks;
        };
        return ECBlocks2;
      }()
    );
    exports.default = ECBlocks;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/decoder/ECB.js
var require_ECB = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/decoder/ECB.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ECB = (
      /** @class */
      function() {
        function ECB2(count, dataCodewords) {
          this.count = count;
          this.dataCodewords = dataCodewords;
        }
        ECB2.prototype.getCount = function() {
          return this.count;
        };
        ECB2.prototype.getDataCodewords = function() {
          return this.dataCodewords;
        };
        return ECB2;
      }()
    );
    exports.default = ECB;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/decoder/Version.js
var require_Version2 = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/decoder/Version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BitMatrix_1 = require_BitMatrix();
    var FormatInformation_1 = require_FormatInformation();
    var ECBlocks_1 = require_ECBlocks();
    var ECB_1 = require_ECB();
    var FormatException_1 = require_FormatException();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var Version = (
      /** @class */
      function() {
        function Version2(versionNumber, alignmentPatternCenters) {
          var ecBlocks = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            ecBlocks[_i - 2] = arguments[_i];
          }
          this.versionNumber = versionNumber;
          this.alignmentPatternCenters = alignmentPatternCenters;
          this.ecBlocks = ecBlocks;
          var total = 0;
          var ecCodewords = ecBlocks[0].getECCodewordsPerBlock();
          var ecbArray = ecBlocks[0].getECBlocks();
          for (var _a = 0, ecbArray_1 = ecbArray; _a < ecbArray_1.length; _a++) {
            var ecBlock = ecbArray_1[_a];
            total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
          }
          this.totalCodewords = total;
        }
        Version2.prototype.getVersionNumber = function() {
          return this.versionNumber;
        };
        Version2.prototype.getAlignmentPatternCenters = function() {
          return this.alignmentPatternCenters;
        };
        Version2.prototype.getTotalCodewords = function() {
          return this.totalCodewords;
        };
        Version2.prototype.getDimensionForVersion = function() {
          return 17 + 4 * this.versionNumber;
        };
        Version2.prototype.getECBlocksForLevel = function(ecLevel) {
          return this.ecBlocks[ecLevel.getValue()];
        };
        Version2.getProvisionalVersionForDimension = function(dimension) {
          if (dimension % 4 !== 1) {
            throw new FormatException_1.default();
          }
          try {
            return this.getVersionForNumber((dimension - 17) / 4);
          } catch (ignored) {
            throw new FormatException_1.default();
          }
        };
        Version2.getVersionForNumber = function(versionNumber) {
          if (versionNumber < 1 || versionNumber > 40) {
            throw new IllegalArgumentException_1.default();
          }
          return Version2.VERSIONS[versionNumber - 1];
        };
        Version2.decodeVersionInformation = function(versionBits) {
          var bestDifference = Number.MAX_SAFE_INTEGER;
          var bestVersion = 0;
          for (var i = 0; i < Version2.VERSION_DECODE_INFO.length; i++) {
            var targetVersion = Version2.VERSION_DECODE_INFO[i];
            if (targetVersion === versionBits) {
              return Version2.getVersionForNumber(i + 7);
            }
            var bitsDifference = FormatInformation_1.default.numBitsDiffering(versionBits, targetVersion);
            if (bitsDifference < bestDifference) {
              bestVersion = i + 7;
              bestDifference = bitsDifference;
            }
          }
          if (bestDifference <= 3) {
            return Version2.getVersionForNumber(bestVersion);
          }
          return null;
        };
        Version2.prototype.buildFunctionPattern = function() {
          var dimension = this.getDimensionForVersion();
          var bitMatrix = new BitMatrix_1.default(dimension);
          bitMatrix.setRegion(0, 0, 9, 9);
          bitMatrix.setRegion(dimension - 8, 0, 8, 9);
          bitMatrix.setRegion(0, dimension - 8, 9, 8);
          var max = this.alignmentPatternCenters.length;
          for (var x = 0; x < max; x++) {
            var i = this.alignmentPatternCenters[x] - 2;
            for (var y = 0; y < max; y++) {
              if (x === 0 && (y === 0 || y === max - 1) || x === max - 1 && y === 0) {
                continue;
              }
              bitMatrix.setRegion(this.alignmentPatternCenters[y] - 2, i, 5, 5);
            }
          }
          bitMatrix.setRegion(6, 9, 1, dimension - 17);
          bitMatrix.setRegion(9, 6, dimension - 17, 1);
          if (this.versionNumber > 6) {
            bitMatrix.setRegion(dimension - 11, 0, 3, 6);
            bitMatrix.setRegion(0, dimension - 11, 6, 3);
          }
          return bitMatrix;
        };
        Version2.prototype.toString = function() {
          return "" + this.versionNumber;
        };
        Version2.VERSION_DECODE_INFO = Int32Array.from([
          31892,
          34236,
          39577,
          42195,
          48118,
          51042,
          55367,
          58893,
          63784,
          68472,
          70749,
          76311,
          79154,
          84390,
          87683,
          92361,
          96236,
          102084,
          102881,
          110507,
          110734,
          117786,
          119615,
          126325,
          127568,
          133589,
          136944,
          141498,
          145311,
          150283,
          152622,
          158308,
          161089,
          167017
        ]);
        Version2.VERSIONS = [
          new Version2(1, new Int32Array(0), new ECBlocks_1.default(7, new ECB_1.default(1, 19)), new ECBlocks_1.default(10, new ECB_1.default(1, 16)), new ECBlocks_1.default(13, new ECB_1.default(1, 13)), new ECBlocks_1.default(17, new ECB_1.default(1, 9))),
          new Version2(2, Int32Array.from([6, 18]), new ECBlocks_1.default(10, new ECB_1.default(1, 34)), new ECBlocks_1.default(16, new ECB_1.default(1, 28)), new ECBlocks_1.default(22, new ECB_1.default(1, 22)), new ECBlocks_1.default(28, new ECB_1.default(1, 16))),
          new Version2(3, Int32Array.from([6, 22]), new ECBlocks_1.default(15, new ECB_1.default(1, 55)), new ECBlocks_1.default(26, new ECB_1.default(1, 44)), new ECBlocks_1.default(18, new ECB_1.default(2, 17)), new ECBlocks_1.default(22, new ECB_1.default(2, 13))),
          new Version2(4, Int32Array.from([6, 26]), new ECBlocks_1.default(20, new ECB_1.default(1, 80)), new ECBlocks_1.default(18, new ECB_1.default(2, 32)), new ECBlocks_1.default(26, new ECB_1.default(2, 24)), new ECBlocks_1.default(16, new ECB_1.default(4, 9))),
          new Version2(5, Int32Array.from([6, 30]), new ECBlocks_1.default(26, new ECB_1.default(1, 108)), new ECBlocks_1.default(24, new ECB_1.default(2, 43)), new ECBlocks_1.default(18, new ECB_1.default(2, 15), new ECB_1.default(2, 16)), new ECBlocks_1.default(22, new ECB_1.default(2, 11), new ECB_1.default(2, 12))),
          new Version2(6, Int32Array.from([6, 34]), new ECBlocks_1.default(18, new ECB_1.default(2, 68)), new ECBlocks_1.default(16, new ECB_1.default(4, 27)), new ECBlocks_1.default(24, new ECB_1.default(4, 19)), new ECBlocks_1.default(28, new ECB_1.default(4, 15))),
          new Version2(7, Int32Array.from([6, 22, 38]), new ECBlocks_1.default(20, new ECB_1.default(2, 78)), new ECBlocks_1.default(18, new ECB_1.default(4, 31)), new ECBlocks_1.default(18, new ECB_1.default(2, 14), new ECB_1.default(4, 15)), new ECBlocks_1.default(26, new ECB_1.default(4, 13), new ECB_1.default(1, 14))),
          new Version2(8, Int32Array.from([6, 24, 42]), new ECBlocks_1.default(24, new ECB_1.default(2, 97)), new ECBlocks_1.default(22, new ECB_1.default(2, 38), new ECB_1.default(2, 39)), new ECBlocks_1.default(22, new ECB_1.default(4, 18), new ECB_1.default(2, 19)), new ECBlocks_1.default(26, new ECB_1.default(4, 14), new ECB_1.default(2, 15))),
          new Version2(9, Int32Array.from([6, 26, 46]), new ECBlocks_1.default(30, new ECB_1.default(2, 116)), new ECBlocks_1.default(22, new ECB_1.default(3, 36), new ECB_1.default(2, 37)), new ECBlocks_1.default(20, new ECB_1.default(4, 16), new ECB_1.default(4, 17)), new ECBlocks_1.default(24, new ECB_1.default(4, 12), new ECB_1.default(4, 13))),
          new Version2(10, Int32Array.from([6, 28, 50]), new ECBlocks_1.default(18, new ECB_1.default(2, 68), new ECB_1.default(2, 69)), new ECBlocks_1.default(26, new ECB_1.default(4, 43), new ECB_1.default(1, 44)), new ECBlocks_1.default(24, new ECB_1.default(6, 19), new ECB_1.default(2, 20)), new ECBlocks_1.default(28, new ECB_1.default(6, 15), new ECB_1.default(2, 16))),
          new Version2(11, Int32Array.from([6, 30, 54]), new ECBlocks_1.default(20, new ECB_1.default(4, 81)), new ECBlocks_1.default(30, new ECB_1.default(1, 50), new ECB_1.default(4, 51)), new ECBlocks_1.default(28, new ECB_1.default(4, 22), new ECB_1.default(4, 23)), new ECBlocks_1.default(24, new ECB_1.default(3, 12), new ECB_1.default(8, 13))),
          new Version2(12, Int32Array.from([6, 32, 58]), new ECBlocks_1.default(24, new ECB_1.default(2, 92), new ECB_1.default(2, 93)), new ECBlocks_1.default(22, new ECB_1.default(6, 36), new ECB_1.default(2, 37)), new ECBlocks_1.default(26, new ECB_1.default(4, 20), new ECB_1.default(6, 21)), new ECBlocks_1.default(28, new ECB_1.default(7, 14), new ECB_1.default(4, 15))),
          new Version2(13, Int32Array.from([6, 34, 62]), new ECBlocks_1.default(26, new ECB_1.default(4, 107)), new ECBlocks_1.default(22, new ECB_1.default(8, 37), new ECB_1.default(1, 38)), new ECBlocks_1.default(24, new ECB_1.default(8, 20), new ECB_1.default(4, 21)), new ECBlocks_1.default(22, new ECB_1.default(12, 11), new ECB_1.default(4, 12))),
          new Version2(14, Int32Array.from([6, 26, 46, 66]), new ECBlocks_1.default(30, new ECB_1.default(3, 115), new ECB_1.default(1, 116)), new ECBlocks_1.default(24, new ECB_1.default(4, 40), new ECB_1.default(5, 41)), new ECBlocks_1.default(20, new ECB_1.default(11, 16), new ECB_1.default(5, 17)), new ECBlocks_1.default(24, new ECB_1.default(11, 12), new ECB_1.default(5, 13))),
          new Version2(15, Int32Array.from([6, 26, 48, 70]), new ECBlocks_1.default(22, new ECB_1.default(5, 87), new ECB_1.default(1, 88)), new ECBlocks_1.default(24, new ECB_1.default(5, 41), new ECB_1.default(5, 42)), new ECBlocks_1.default(30, new ECB_1.default(5, 24), new ECB_1.default(7, 25)), new ECBlocks_1.default(24, new ECB_1.default(11, 12), new ECB_1.default(7, 13))),
          new Version2(16, Int32Array.from([6, 26, 50, 74]), new ECBlocks_1.default(24, new ECB_1.default(5, 98), new ECB_1.default(1, 99)), new ECBlocks_1.default(28, new ECB_1.default(7, 45), new ECB_1.default(3, 46)), new ECBlocks_1.default(24, new ECB_1.default(15, 19), new ECB_1.default(2, 20)), new ECBlocks_1.default(30, new ECB_1.default(3, 15), new ECB_1.default(13, 16))),
          new Version2(17, Int32Array.from([6, 30, 54, 78]), new ECBlocks_1.default(28, new ECB_1.default(1, 107), new ECB_1.default(5, 108)), new ECBlocks_1.default(28, new ECB_1.default(10, 46), new ECB_1.default(1, 47)), new ECBlocks_1.default(28, new ECB_1.default(1, 22), new ECB_1.default(15, 23)), new ECBlocks_1.default(28, new ECB_1.default(2, 14), new ECB_1.default(17, 15))),
          new Version2(18, Int32Array.from([6, 30, 56, 82]), new ECBlocks_1.default(30, new ECB_1.default(5, 120), new ECB_1.default(1, 121)), new ECBlocks_1.default(26, new ECB_1.default(9, 43), new ECB_1.default(4, 44)), new ECBlocks_1.default(28, new ECB_1.default(17, 22), new ECB_1.default(1, 23)), new ECBlocks_1.default(28, new ECB_1.default(2, 14), new ECB_1.default(19, 15))),
          new Version2(19, Int32Array.from([6, 30, 58, 86]), new ECBlocks_1.default(28, new ECB_1.default(3, 113), new ECB_1.default(4, 114)), new ECBlocks_1.default(26, new ECB_1.default(3, 44), new ECB_1.default(11, 45)), new ECBlocks_1.default(26, new ECB_1.default(17, 21), new ECB_1.default(4, 22)), new ECBlocks_1.default(26, new ECB_1.default(9, 13), new ECB_1.default(16, 14))),
          new Version2(20, Int32Array.from([6, 34, 62, 90]), new ECBlocks_1.default(28, new ECB_1.default(3, 107), new ECB_1.default(5, 108)), new ECBlocks_1.default(26, new ECB_1.default(3, 41), new ECB_1.default(13, 42)), new ECBlocks_1.default(30, new ECB_1.default(15, 24), new ECB_1.default(5, 25)), new ECBlocks_1.default(28, new ECB_1.default(15, 15), new ECB_1.default(10, 16))),
          new Version2(21, Int32Array.from([6, 28, 50, 72, 94]), new ECBlocks_1.default(28, new ECB_1.default(4, 116), new ECB_1.default(4, 117)), new ECBlocks_1.default(26, new ECB_1.default(17, 42)), new ECBlocks_1.default(28, new ECB_1.default(17, 22), new ECB_1.default(6, 23)), new ECBlocks_1.default(30, new ECB_1.default(19, 16), new ECB_1.default(6, 17))),
          new Version2(22, Int32Array.from([6, 26, 50, 74, 98]), new ECBlocks_1.default(28, new ECB_1.default(2, 111), new ECB_1.default(7, 112)), new ECBlocks_1.default(28, new ECB_1.default(17, 46)), new ECBlocks_1.default(30, new ECB_1.default(7, 24), new ECB_1.default(16, 25)), new ECBlocks_1.default(24, new ECB_1.default(34, 13))),
          new Version2(23, Int32Array.from([6, 30, 54, 78, 102]), new ECBlocks_1.default(30, new ECB_1.default(4, 121), new ECB_1.default(5, 122)), new ECBlocks_1.default(28, new ECB_1.default(4, 47), new ECB_1.default(14, 48)), new ECBlocks_1.default(30, new ECB_1.default(11, 24), new ECB_1.default(14, 25)), new ECBlocks_1.default(30, new ECB_1.default(16, 15), new ECB_1.default(14, 16))),
          new Version2(24, Int32Array.from([6, 28, 54, 80, 106]), new ECBlocks_1.default(30, new ECB_1.default(6, 117), new ECB_1.default(4, 118)), new ECBlocks_1.default(28, new ECB_1.default(6, 45), new ECB_1.default(14, 46)), new ECBlocks_1.default(30, new ECB_1.default(11, 24), new ECB_1.default(16, 25)), new ECBlocks_1.default(30, new ECB_1.default(30, 16), new ECB_1.default(2, 17))),
          new Version2(25, Int32Array.from([6, 32, 58, 84, 110]), new ECBlocks_1.default(26, new ECB_1.default(8, 106), new ECB_1.default(4, 107)), new ECBlocks_1.default(28, new ECB_1.default(8, 47), new ECB_1.default(13, 48)), new ECBlocks_1.default(30, new ECB_1.default(7, 24), new ECB_1.default(22, 25)), new ECBlocks_1.default(30, new ECB_1.default(22, 15), new ECB_1.default(13, 16))),
          new Version2(26, Int32Array.from([6, 30, 58, 86, 114]), new ECBlocks_1.default(28, new ECB_1.default(10, 114), new ECB_1.default(2, 115)), new ECBlocks_1.default(28, new ECB_1.default(19, 46), new ECB_1.default(4, 47)), new ECBlocks_1.default(28, new ECB_1.default(28, 22), new ECB_1.default(6, 23)), new ECBlocks_1.default(30, new ECB_1.default(33, 16), new ECB_1.default(4, 17))),
          new Version2(27, Int32Array.from([6, 34, 62, 90, 118]), new ECBlocks_1.default(30, new ECB_1.default(8, 122), new ECB_1.default(4, 123)), new ECBlocks_1.default(28, new ECB_1.default(22, 45), new ECB_1.default(3, 46)), new ECBlocks_1.default(30, new ECB_1.default(8, 23), new ECB_1.default(26, 24)), new ECBlocks_1.default(30, new ECB_1.default(12, 15), new ECB_1.default(28, 16))),
          new Version2(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new ECBlocks_1.default(30, new ECB_1.default(3, 117), new ECB_1.default(10, 118)), new ECBlocks_1.default(28, new ECB_1.default(3, 45), new ECB_1.default(23, 46)), new ECBlocks_1.default(30, new ECB_1.default(4, 24), new ECB_1.default(31, 25)), new ECBlocks_1.default(30, new ECB_1.default(11, 15), new ECB_1.default(31, 16))),
          new Version2(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new ECBlocks_1.default(30, new ECB_1.default(7, 116), new ECB_1.default(7, 117)), new ECBlocks_1.default(28, new ECB_1.default(21, 45), new ECB_1.default(7, 46)), new ECBlocks_1.default(30, new ECB_1.default(1, 23), new ECB_1.default(37, 24)), new ECBlocks_1.default(30, new ECB_1.default(19, 15), new ECB_1.default(26, 16))),
          new Version2(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new ECBlocks_1.default(30, new ECB_1.default(5, 115), new ECB_1.default(10, 116)), new ECBlocks_1.default(28, new ECB_1.default(19, 47), new ECB_1.default(10, 48)), new ECBlocks_1.default(30, new ECB_1.default(15, 24), new ECB_1.default(25, 25)), new ECBlocks_1.default(30, new ECB_1.default(23, 15), new ECB_1.default(25, 16))),
          new Version2(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new ECBlocks_1.default(30, new ECB_1.default(13, 115), new ECB_1.default(3, 116)), new ECBlocks_1.default(28, new ECB_1.default(2, 46), new ECB_1.default(29, 47)), new ECBlocks_1.default(30, new ECB_1.default(42, 24), new ECB_1.default(1, 25)), new ECBlocks_1.default(30, new ECB_1.default(23, 15), new ECB_1.default(28, 16))),
          new Version2(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new ECBlocks_1.default(30, new ECB_1.default(17, 115)), new ECBlocks_1.default(28, new ECB_1.default(10, 46), new ECB_1.default(23, 47)), new ECBlocks_1.default(30, new ECB_1.default(10, 24), new ECB_1.default(35, 25)), new ECBlocks_1.default(30, new ECB_1.default(19, 15), new ECB_1.default(35, 16))),
          new Version2(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new ECBlocks_1.default(30, new ECB_1.default(17, 115), new ECB_1.default(1, 116)), new ECBlocks_1.default(28, new ECB_1.default(14, 46), new ECB_1.default(21, 47)), new ECBlocks_1.default(30, new ECB_1.default(29, 24), new ECB_1.default(19, 25)), new ECBlocks_1.default(30, new ECB_1.default(11, 15), new ECB_1.default(46, 16))),
          new Version2(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new ECBlocks_1.default(30, new ECB_1.default(13, 115), new ECB_1.default(6, 116)), new ECBlocks_1.default(28, new ECB_1.default(14, 46), new ECB_1.default(23, 47)), new ECBlocks_1.default(30, new ECB_1.default(44, 24), new ECB_1.default(7, 25)), new ECBlocks_1.default(30, new ECB_1.default(59, 16), new ECB_1.default(1, 17))),
          new Version2(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new ECBlocks_1.default(30, new ECB_1.default(12, 121), new ECB_1.default(7, 122)), new ECBlocks_1.default(28, new ECB_1.default(12, 47), new ECB_1.default(26, 48)), new ECBlocks_1.default(30, new ECB_1.default(39, 24), new ECB_1.default(14, 25)), new ECBlocks_1.default(30, new ECB_1.default(22, 15), new ECB_1.default(41, 16))),
          new Version2(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new ECBlocks_1.default(30, new ECB_1.default(6, 121), new ECB_1.default(14, 122)), new ECBlocks_1.default(28, new ECB_1.default(6, 47), new ECB_1.default(34, 48)), new ECBlocks_1.default(30, new ECB_1.default(46, 24), new ECB_1.default(10, 25)), new ECBlocks_1.default(30, new ECB_1.default(2, 15), new ECB_1.default(64, 16))),
          new Version2(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new ECBlocks_1.default(30, new ECB_1.default(17, 122), new ECB_1.default(4, 123)), new ECBlocks_1.default(28, new ECB_1.default(29, 46), new ECB_1.default(14, 47)), new ECBlocks_1.default(30, new ECB_1.default(49, 24), new ECB_1.default(10, 25)), new ECBlocks_1.default(30, new ECB_1.default(24, 15), new ECB_1.default(46, 16))),
          new Version2(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new ECBlocks_1.default(30, new ECB_1.default(4, 122), new ECB_1.default(18, 123)), new ECBlocks_1.default(28, new ECB_1.default(13, 46), new ECB_1.default(32, 47)), new ECBlocks_1.default(30, new ECB_1.default(48, 24), new ECB_1.default(14, 25)), new ECBlocks_1.default(30, new ECB_1.default(42, 15), new ECB_1.default(32, 16))),
          new Version2(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new ECBlocks_1.default(30, new ECB_1.default(20, 117), new ECB_1.default(4, 118)), new ECBlocks_1.default(28, new ECB_1.default(40, 47), new ECB_1.default(7, 48)), new ECBlocks_1.default(30, new ECB_1.default(43, 24), new ECB_1.default(22, 25)), new ECBlocks_1.default(30, new ECB_1.default(10, 15), new ECB_1.default(67, 16))),
          new Version2(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new ECBlocks_1.default(30, new ECB_1.default(19, 118), new ECB_1.default(6, 119)), new ECBlocks_1.default(28, new ECB_1.default(18, 47), new ECB_1.default(31, 48)), new ECBlocks_1.default(30, new ECB_1.default(34, 24), new ECB_1.default(34, 25)), new ECBlocks_1.default(30, new ECB_1.default(20, 15), new ECB_1.default(61, 16)))
        ];
        return Version2;
      }()
    );
    exports.default = Version;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/decoder/DataMask.js
var require_DataMask = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/decoder/DataMask.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataMaskValues;
    (function(DataMaskValues2) {
      DataMaskValues2[DataMaskValues2["DATA_MASK_000"] = 0] = "DATA_MASK_000";
      DataMaskValues2[DataMaskValues2["DATA_MASK_001"] = 1] = "DATA_MASK_001";
      DataMaskValues2[DataMaskValues2["DATA_MASK_010"] = 2] = "DATA_MASK_010";
      DataMaskValues2[DataMaskValues2["DATA_MASK_011"] = 3] = "DATA_MASK_011";
      DataMaskValues2[DataMaskValues2["DATA_MASK_100"] = 4] = "DATA_MASK_100";
      DataMaskValues2[DataMaskValues2["DATA_MASK_101"] = 5] = "DATA_MASK_101";
      DataMaskValues2[DataMaskValues2["DATA_MASK_110"] = 6] = "DATA_MASK_110";
      DataMaskValues2[DataMaskValues2["DATA_MASK_111"] = 7] = "DATA_MASK_111";
    })(DataMaskValues = exports.DataMaskValues || (exports.DataMaskValues = {}));
    var DataMask = (
      /** @class */
      function() {
        function DataMask2(value, isMasked) {
          this.value = value;
          this.isMasked = isMasked;
        }
        DataMask2.prototype.unmaskBitMatrix = function(bits, dimension) {
          for (var i = 0; i < dimension; i++) {
            for (var j = 0; j < dimension; j++) {
              if (this.isMasked(i, j)) {
                bits.flip(j, i);
              }
            }
          }
        };
        DataMask2.values = /* @__PURE__ */ new Map([
          /**
           * 000: mask bits for which (x + y) mod 2 == 0
           */
          [DataMaskValues.DATA_MASK_000, new DataMask2(DataMaskValues.DATA_MASK_000, function(i, j) {
            return (i + j & 1) === 0;
          })],
          /**
           * 001: mask bits for which x mod 2 == 0
           */
          [DataMaskValues.DATA_MASK_001, new DataMask2(DataMaskValues.DATA_MASK_001, function(i, j) {
            return (i & 1) === 0;
          })],
          /**
           * 010: mask bits for which y mod 3 == 0
           */
          [DataMaskValues.DATA_MASK_010, new DataMask2(DataMaskValues.DATA_MASK_010, function(i, j) {
            return j % 3 === 0;
          })],
          /**
           * 011: mask bits for which (x + y) mod 3 == 0
           */
          [DataMaskValues.DATA_MASK_011, new DataMask2(DataMaskValues.DATA_MASK_011, function(i, j) {
            return (i + j) % 3 === 0;
          })],
          /**
           * 100: mask bits for which (x/2 + y/3) mod 2 == 0
           */
          [DataMaskValues.DATA_MASK_100, new DataMask2(DataMaskValues.DATA_MASK_100, function(i, j) {
            return (Math.floor(i / 2) + Math.floor(j / 3) & 1) === 0;
          })],
          /**
           * 101: mask bits for which xy mod 2 + xy mod 3 == 0
           * equivalently, such that xy mod 6 == 0
           */
          [DataMaskValues.DATA_MASK_101, new DataMask2(DataMaskValues.DATA_MASK_101, function(i, j) {
            return i * j % 6 === 0;
          })],
          /**
           * 110: mask bits for which (xy mod 2 + xy mod 3) mod 2 == 0
           * equivalently, such that xy mod 6 < 3
           */
          [DataMaskValues.DATA_MASK_110, new DataMask2(DataMaskValues.DATA_MASK_110, function(i, j) {
            return i * j % 6 < 3;
          })],
          /**
           * 111: mask bits for which ((x+y)mod 2 + xy mod 3) mod 2 == 0
           * equivalently, such that (x + y + xy mod 3) mod 2 == 0
           */
          [DataMaskValues.DATA_MASK_111, new DataMask2(DataMaskValues.DATA_MASK_111, function(i, j) {
            return (i + j + i * j % 3 & 1) === 0;
          })]
        ]);
        return DataMask2;
      }()
    );
    exports.default = DataMask;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/decoder/BitMatrixParser.js
var require_BitMatrixParser2 = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/decoder/BitMatrixParser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Version_1 = require_Version2();
    var FormatInformation_1 = require_FormatInformation();
    var DataMask_1 = require_DataMask();
    var FormatException_1 = require_FormatException();
    var BitMatrixParser = (
      /** @class */
      function() {
        function BitMatrixParser2(bitMatrix) {
          var dimension = bitMatrix.getHeight();
          if (dimension < 21 || (dimension & 3) !== 1) {
            throw new FormatException_1.default();
          }
          this.bitMatrix = bitMatrix;
        }
        BitMatrixParser2.prototype.readFormatInformation = function() {
          if (this.parsedFormatInfo !== null && this.parsedFormatInfo !== void 0) {
            return this.parsedFormatInfo;
          }
          var formatInfoBits1 = 0;
          for (var i = 0; i < 6; i++) {
            formatInfoBits1 = this.copyBit(i, 8, formatInfoBits1);
          }
          formatInfoBits1 = this.copyBit(7, 8, formatInfoBits1);
          formatInfoBits1 = this.copyBit(8, 8, formatInfoBits1);
          formatInfoBits1 = this.copyBit(8, 7, formatInfoBits1);
          for (var j = 5; j >= 0; j--) {
            formatInfoBits1 = this.copyBit(8, j, formatInfoBits1);
          }
          var dimension = this.bitMatrix.getHeight();
          var formatInfoBits2 = 0;
          var jMin = dimension - 7;
          for (var j = dimension - 1; j >= jMin; j--) {
            formatInfoBits2 = this.copyBit(8, j, formatInfoBits2);
          }
          for (var i = dimension - 8; i < dimension; i++) {
            formatInfoBits2 = this.copyBit(i, 8, formatInfoBits2);
          }
          this.parsedFormatInfo = FormatInformation_1.default.decodeFormatInformation(formatInfoBits1, formatInfoBits2);
          if (this.parsedFormatInfo !== null) {
            return this.parsedFormatInfo;
          }
          throw new FormatException_1.default();
        };
        BitMatrixParser2.prototype.readVersion = function() {
          if (this.parsedVersion !== null && this.parsedVersion !== void 0) {
            return this.parsedVersion;
          }
          var dimension = this.bitMatrix.getHeight();
          var provisionalVersion = Math.floor((dimension - 17) / 4);
          if (provisionalVersion <= 6) {
            return Version_1.default.getVersionForNumber(provisionalVersion);
          }
          var versionBits = 0;
          var ijMin = dimension - 11;
          for (var j = 5; j >= 0; j--) {
            for (var i = dimension - 9; i >= ijMin; i--) {
              versionBits = this.copyBit(i, j, versionBits);
            }
          }
          var theParsedVersion = Version_1.default.decodeVersionInformation(versionBits);
          if (theParsedVersion !== null && theParsedVersion.getDimensionForVersion() === dimension) {
            this.parsedVersion = theParsedVersion;
            return theParsedVersion;
          }
          versionBits = 0;
          for (var i = 5; i >= 0; i--) {
            for (var j = dimension - 9; j >= ijMin; j--) {
              versionBits = this.copyBit(i, j, versionBits);
            }
          }
          theParsedVersion = Version_1.default.decodeVersionInformation(versionBits);
          if (theParsedVersion !== null && theParsedVersion.getDimensionForVersion() === dimension) {
            this.parsedVersion = theParsedVersion;
            return theParsedVersion;
          }
          throw new FormatException_1.default();
        };
        BitMatrixParser2.prototype.copyBit = function(i, j, versionBits) {
          var bit = this.isMirror ? this.bitMatrix.get(j, i) : this.bitMatrix.get(i, j);
          return bit ? versionBits << 1 | 1 : versionBits << 1;
        };
        BitMatrixParser2.prototype.readCodewords = function() {
          var formatInfo = this.readFormatInformation();
          var version = this.readVersion();
          var dataMask = DataMask_1.default.values.get(formatInfo.getDataMask());
          var dimension = this.bitMatrix.getHeight();
          dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
          var functionPattern = version.buildFunctionPattern();
          var readingUp = true;
          var result = new Uint8Array(version.getTotalCodewords());
          var resultOffset = 0;
          var currentByte = 0;
          var bitsRead = 0;
          for (var j = dimension - 1; j > 0; j -= 2) {
            if (j === 6) {
              j--;
            }
            for (var count = 0; count < dimension; count++) {
              var i = readingUp ? dimension - 1 - count : count;
              for (var col = 0; col < 2; col++) {
                if (!functionPattern.get(j - col, i)) {
                  bitsRead++;
                  currentByte <<= 1;
                  if (this.bitMatrix.get(j - col, i)) {
                    currentByte |= 1;
                  }
                  if (bitsRead === 8) {
                    result[resultOffset++] = /*(byte) */
                    currentByte;
                    bitsRead = 0;
                    currentByte = 0;
                  }
                }
              }
            }
            readingUp = !readingUp;
          }
          if (resultOffset !== version.getTotalCodewords()) {
            throw new FormatException_1.default();
          }
          return result;
        };
        BitMatrixParser2.prototype.remask = function() {
          if (this.parsedFormatInfo === null) {
            return;
          }
          var dataMask = DataMask_1.default.values[this.parsedFormatInfo.getDataMask()];
          var dimension = this.bitMatrix.getHeight();
          dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
        };
        BitMatrixParser2.prototype.setMirror = function(isMirror) {
          this.parsedVersion = null;
          this.parsedFormatInfo = null;
          this.isMirror = isMirror;
        };
        BitMatrixParser2.prototype.mirror = function() {
          var bitMatrix = this.bitMatrix;
          for (var x = 0, width = bitMatrix.getWidth(); x < width; x++) {
            for (var y = x + 1, height = bitMatrix.getHeight(); y < height; y++) {
              if (bitMatrix.get(x, y) !== bitMatrix.get(y, x)) {
                bitMatrix.flip(y, x);
                bitMatrix.flip(x, y);
              }
            }
          }
        };
        return BitMatrixParser2;
      }()
    );
    exports.default = BitMatrixParser;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/decoder/QRCodeDecoderMetaData.js
var require_QRCodeDecoderMetaData = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/decoder/QRCodeDecoderMetaData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QRCodeDecoderMetaData = (
      /** @class */
      function() {
        function QRCodeDecoderMetaData2(mirrored) {
          this.mirrored = mirrored;
        }
        QRCodeDecoderMetaData2.prototype.isMirrored = function() {
          return this.mirrored;
        };
        QRCodeDecoderMetaData2.prototype.applyMirroredCorrection = function(points) {
          if (!this.mirrored || points === null || points.length < 3) {
            return;
          }
          var bottomLeft = points[0];
          points[0] = points[2];
          points[2] = bottomLeft;
        };
        return QRCodeDecoderMetaData2;
      }()
    );
    exports.default = QRCodeDecoderMetaData;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/decoder/DataBlock.js
var require_DataBlock2 = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/decoder/DataBlock.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var DataBlock = (
      /** @class */
      function() {
        function DataBlock2(numDataCodewords, codewords) {
          this.numDataCodewords = numDataCodewords;
          this.codewords = codewords;
        }
        DataBlock2.getDataBlocks = function(rawCodewords, version, ecLevel) {
          if (rawCodewords.length !== version.getTotalCodewords()) {
            throw new IllegalArgumentException_1.default();
          }
          var ecBlocks = version.getECBlocksForLevel(ecLevel);
          var totalBlocks = 0;
          var ecBlockArray = ecBlocks.getECBlocks();
          for (var _i = 0, ecBlockArray_1 = ecBlockArray; _i < ecBlockArray_1.length; _i++) {
            var ecBlock = ecBlockArray_1[_i];
            totalBlocks += ecBlock.getCount();
          }
          var result = new Array(totalBlocks);
          var numResultBlocks = 0;
          for (var _a = 0, ecBlockArray_2 = ecBlockArray; _a < ecBlockArray_2.length; _a++) {
            var ecBlock = ecBlockArray_2[_a];
            for (var i = 0; i < ecBlock.getCount(); i++) {
              var numDataCodewords = ecBlock.getDataCodewords();
              var numBlockCodewords = ecBlocks.getECCodewordsPerBlock() + numDataCodewords;
              result[numResultBlocks++] = new DataBlock2(numDataCodewords, new Uint8Array(numBlockCodewords));
            }
          }
          var shorterBlocksTotalCodewords = result[0].codewords.length;
          var longerBlocksStartAt = result.length - 1;
          while (longerBlocksStartAt >= 0) {
            var numCodewords = result[longerBlocksStartAt].codewords.length;
            if (numCodewords === shorterBlocksTotalCodewords) {
              break;
            }
            longerBlocksStartAt--;
          }
          longerBlocksStartAt++;
          var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.getECCodewordsPerBlock();
          var rawCodewordsOffset = 0;
          for (var i = 0; i < shorterBlocksNumDataCodewords; i++) {
            for (var j = 0; j < numResultBlocks; j++) {
              result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
            }
          }
          for (var j = longerBlocksStartAt; j < numResultBlocks; j++) {
            result[j].codewords[shorterBlocksNumDataCodewords] = rawCodewords[rawCodewordsOffset++];
          }
          var max = result[0].codewords.length;
          for (var i = shorterBlocksNumDataCodewords; i < max; i++) {
            for (var j = 0; j < numResultBlocks; j++) {
              var iOffset = j < longerBlocksStartAt ? i : i + 1;
              result[j].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
            }
          }
          return result;
        };
        DataBlock2.prototype.getNumDataCodewords = function() {
          return this.numDataCodewords;
        };
        DataBlock2.prototype.getCodewords = function() {
          return this.codewords;
        };
        return DataBlock2;
      }()
    );
    exports.default = DataBlock;
  }
});

// node_modules/@zxing/library/esm5/core/common/StringUtils.js
var require_StringUtils = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/StringUtils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DecodeHintType_1 = require_DecodeHintType();
    var CharacterSetECI_1 = require_CharacterSetECI();
    var StringUtils = (
      /** @class */
      function() {
        function StringUtils2() {
        }
        StringUtils2.prototype.StringUtils = function() {
        };
        StringUtils2.guessEncoding = function(bytes, hints) {
          if (hints !== null && hints !== void 0 && void 0 !== hints.get(DecodeHintType_1.default.CHARACTER_SET)) {
            return hints.get(DecodeHintType_1.default.CHARACTER_SET).toString();
          }
          var length = bytes.length;
          var canBeISO88591 = true;
          var canBeShiftJIS = true;
          var canBeUTF8 = true;
          var utf8BytesLeft = 0;
          var utf2BytesChars = 0;
          var utf3BytesChars = 0;
          var utf4BytesChars = 0;
          var sjisBytesLeft = 0;
          var sjisKatakanaChars = 0;
          var sjisCurKatakanaWordLength = 0;
          var sjisCurDoubleBytesWordLength = 0;
          var sjisMaxKatakanaWordLength = 0;
          var sjisMaxDoubleBytesWordLength = 0;
          var isoHighOther = 0;
          var utf8bom = bytes.length > 3 && bytes[0] === /*(byte) */
          239 && bytes[1] === /*(byte) */
          187 && bytes[2] === /*(byte) */
          191;
          for (var i = 0; i < length && (canBeISO88591 || canBeShiftJIS || canBeUTF8); i++) {
            var value = bytes[i] & 255;
            if (canBeUTF8) {
              if (utf8BytesLeft > 0) {
                if ((value & 128) === 0) {
                  canBeUTF8 = false;
                } else {
                  utf8BytesLeft--;
                }
              } else if ((value & 128) !== 0) {
                if ((value & 64) === 0) {
                  canBeUTF8 = false;
                } else {
                  utf8BytesLeft++;
                  if ((value & 32) === 0) {
                    utf2BytesChars++;
                  } else {
                    utf8BytesLeft++;
                    if ((value & 16) === 0) {
                      utf3BytesChars++;
                    } else {
                      utf8BytesLeft++;
                      if ((value & 8) === 0) {
                        utf4BytesChars++;
                      } else {
                        canBeUTF8 = false;
                      }
                    }
                  }
                }
              }
            }
            if (canBeISO88591) {
              if (value > 127 && value < 160) {
                canBeISO88591 = false;
              } else if (value > 159) {
                if (value < 192 || value === 215 || value === 247) {
                  isoHighOther++;
                }
              }
            }
            if (canBeShiftJIS) {
              if (sjisBytesLeft > 0) {
                if (value < 64 || value === 127 || value > 252) {
                  canBeShiftJIS = false;
                } else {
                  sjisBytesLeft--;
                }
              } else if (value === 128 || value === 160 || value > 239) {
                canBeShiftJIS = false;
              } else if (value > 160 && value < 224) {
                sjisKatakanaChars++;
                sjisCurDoubleBytesWordLength = 0;
                sjisCurKatakanaWordLength++;
                if (sjisCurKatakanaWordLength > sjisMaxKatakanaWordLength) {
                  sjisMaxKatakanaWordLength = sjisCurKatakanaWordLength;
                }
              } else if (value > 127) {
                sjisBytesLeft++;
                sjisCurKatakanaWordLength = 0;
                sjisCurDoubleBytesWordLength++;
                if (sjisCurDoubleBytesWordLength > sjisMaxDoubleBytesWordLength) {
                  sjisMaxDoubleBytesWordLength = sjisCurDoubleBytesWordLength;
                }
              } else {
                sjisCurKatakanaWordLength = 0;
                sjisCurDoubleBytesWordLength = 0;
              }
            }
          }
          if (canBeUTF8 && utf8BytesLeft > 0) {
            canBeUTF8 = false;
          }
          if (canBeShiftJIS && sjisBytesLeft > 0) {
            canBeShiftJIS = false;
          }
          if (canBeUTF8 && (utf8bom || utf2BytesChars + utf3BytesChars + utf4BytesChars > 0)) {
            return StringUtils2.UTF8;
          }
          if (canBeShiftJIS && (StringUtils2.ASSUME_SHIFT_JIS || sjisMaxKatakanaWordLength >= 3 || sjisMaxDoubleBytesWordLength >= 3)) {
            return StringUtils2.SHIFT_JIS;
          }
          if (canBeISO88591 && canBeShiftJIS) {
            return sjisMaxKatakanaWordLength === 2 && sjisKatakanaChars === 2 || isoHighOther * 10 >= length ? StringUtils2.SHIFT_JIS : StringUtils2.ISO88591;
          }
          if (canBeISO88591) {
            return StringUtils2.ISO88591;
          }
          if (canBeShiftJIS) {
            return StringUtils2.SHIFT_JIS;
          }
          if (canBeUTF8) {
            return StringUtils2.UTF8;
          }
          return StringUtils2.PLATFORM_DEFAULT_ENCODING;
        };
        StringUtils2.SHIFT_JIS = CharacterSetECI_1.default.SJIS.getName();
        StringUtils2.GB2312 = "GB2312";
        StringUtils2.ISO88591 = CharacterSetECI_1.default.ISO8859_1.getName();
        StringUtils2.EUC_JP = "EUC_JP";
        StringUtils2.UTF8 = CharacterSetECI_1.default.UTF8.getName();
        StringUtils2.PLATFORM_DEFAULT_ENCODING = StringUtils2.UTF8;
        StringUtils2.ASSUME_SHIFT_JIS = false;
        return StringUtils2;
      }()
    );
    exports.default = StringUtils;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/decoder/Mode.js
var require_Mode = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/decoder/Mode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var ModeValues;
    (function(ModeValues2) {
      ModeValues2[ModeValues2["TERMINATOR"] = 0] = "TERMINATOR";
      ModeValues2[ModeValues2["NUMERIC"] = 1] = "NUMERIC";
      ModeValues2[ModeValues2["ALPHANUMERIC"] = 2] = "ALPHANUMERIC";
      ModeValues2[ModeValues2["STRUCTURED_APPEND"] = 3] = "STRUCTURED_APPEND";
      ModeValues2[ModeValues2["BYTE"] = 4] = "BYTE";
      ModeValues2[ModeValues2["ECI"] = 5] = "ECI";
      ModeValues2[ModeValues2["KANJI"] = 6] = "KANJI";
      ModeValues2[ModeValues2["FNC1_FIRST_POSITION"] = 7] = "FNC1_FIRST_POSITION";
      ModeValues2[ModeValues2["FNC1_SECOND_POSITION"] = 8] = "FNC1_SECOND_POSITION";
      ModeValues2[ModeValues2["HANZI"] = 9] = "HANZI";
    })(ModeValues = exports.ModeValues || (exports.ModeValues = {}));
    var Mode = (
      /** @class */
      function() {
        function Mode2(value, stringValue, characterCountBitsForVersions, bits) {
          this.value = value;
          this.stringValue = stringValue;
          this.characterCountBitsForVersions = characterCountBitsForVersions;
          this.bits = bits;
          Mode2.FOR_BITS.set(bits, this);
          Mode2.FOR_VALUE.set(value, this);
        }
        Mode2.forBits = function(bits) {
          var mode = Mode2.FOR_BITS.get(bits);
          if (void 0 === mode) {
            throw new IllegalArgumentException_1.default();
          }
          return mode;
        };
        Mode2.prototype.getCharacterCountBits = function(version) {
          var versionNumber = version.getVersionNumber();
          var offset;
          if (versionNumber <= 9) {
            offset = 0;
          } else if (versionNumber <= 26) {
            offset = 1;
          } else {
            offset = 2;
          }
          return this.characterCountBitsForVersions[offset];
        };
        Mode2.prototype.getValue = function() {
          return this.value;
        };
        Mode2.prototype.getBits = function() {
          return this.bits;
        };
        Mode2.prototype.equals = function(o) {
          if (!(o instanceof Mode2)) {
            return false;
          }
          var other = o;
          return this.value === other.value;
        };
        Mode2.prototype.toString = function() {
          return this.stringValue;
        };
        Mode2.FOR_BITS = /* @__PURE__ */ new Map();
        Mode2.FOR_VALUE = /* @__PURE__ */ new Map();
        Mode2.TERMINATOR = new Mode2(ModeValues.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0);
        Mode2.NUMERIC = new Mode2(ModeValues.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1);
        Mode2.ALPHANUMERIC = new Mode2(ModeValues.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2);
        Mode2.STRUCTURED_APPEND = new Mode2(ModeValues.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3);
        Mode2.BYTE = new Mode2(ModeValues.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4);
        Mode2.ECI = new Mode2(ModeValues.ECI, "ECI", Int32Array.from([0, 0, 0]), 7);
        Mode2.KANJI = new Mode2(ModeValues.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8);
        Mode2.FNC1_FIRST_POSITION = new Mode2(ModeValues.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5);
        Mode2.FNC1_SECOND_POSITION = new Mode2(ModeValues.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9);
        Mode2.HANZI = new Mode2(ModeValues.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13);
        return Mode2;
      }()
    );
    exports.default = Mode;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/decoder/DecodedBitStreamParser.js
var require_DecodedBitStreamParser2 = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/decoder/DecodedBitStreamParser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BitSource_1 = require_BitSource();
    var CharacterSetECI_1 = require_CharacterSetECI();
    var DecoderResult_1 = require_DecoderResult();
    var StringUtils_1 = require_StringUtils();
    var Mode_1 = require_Mode();
    var StringBuilder_1 = require_StringBuilder();
    var StringEncoding_1 = require_StringEncoding();
    var FormatException_1 = require_FormatException();
    var DecodedBitStreamParser = (
      /** @class */
      function() {
        function DecodedBitStreamParser2() {
        }
        DecodedBitStreamParser2.decode = function(bytes, version, ecLevel, hints) {
          var bits = new BitSource_1.default(bytes);
          var result = new StringBuilder_1.default();
          var byteSegments = new Array();
          var symbolSequence = -1;
          var parityData = -1;
          try {
            var currentCharacterSetECI = null;
            var fc1InEffect = false;
            var mode = void 0;
            do {
              if (bits.available() < 4) {
                mode = Mode_1.default.TERMINATOR;
              } else {
                var modeBits = bits.readBits(4);
                mode = Mode_1.default.forBits(modeBits);
              }
              switch (mode) {
                case Mode_1.default.TERMINATOR:
                  break;
                case Mode_1.default.FNC1_FIRST_POSITION:
                case Mode_1.default.FNC1_SECOND_POSITION:
                  fc1InEffect = true;
                  break;
                case Mode_1.default.STRUCTURED_APPEND:
                  if (bits.available() < 16) {
                    throw new FormatException_1.default();
                  }
                  symbolSequence = bits.readBits(8);
                  parityData = bits.readBits(8);
                  break;
                case Mode_1.default.ECI:
                  var value = DecodedBitStreamParser2.parseECIValue(bits);
                  currentCharacterSetECI = CharacterSetECI_1.default.getCharacterSetECIByValue(value);
                  if (currentCharacterSetECI === null) {
                    throw new FormatException_1.default();
                  }
                  break;
                case Mode_1.default.HANZI:
                  var subset = bits.readBits(4);
                  var countHanzi = bits.readBits(mode.getCharacterCountBits(version));
                  if (subset === DecodedBitStreamParser2.GB2312_SUBSET) {
                    DecodedBitStreamParser2.decodeHanziSegment(bits, result, countHanzi);
                  }
                  break;
                default:
                  var count = bits.readBits(mode.getCharacterCountBits(version));
                  switch (mode) {
                    case Mode_1.default.NUMERIC:
                      DecodedBitStreamParser2.decodeNumericSegment(bits, result, count);
                      break;
                    case Mode_1.default.ALPHANUMERIC:
                      DecodedBitStreamParser2.decodeAlphanumericSegment(bits, result, count, fc1InEffect);
                      break;
                    case Mode_1.default.BYTE:
                      DecodedBitStreamParser2.decodeByteSegment(bits, result, count, currentCharacterSetECI, byteSegments, hints);
                      break;
                    case Mode_1.default.KANJI:
                      DecodedBitStreamParser2.decodeKanjiSegment(bits, result, count);
                      break;
                    default:
                      throw new FormatException_1.default();
                  }
                  break;
              }
            } while (mode !== Mode_1.default.TERMINATOR);
          } catch (iae) {
            throw new FormatException_1.default();
          }
          return new DecoderResult_1.default(bytes, result.toString(), byteSegments.length === 0 ? null : byteSegments, ecLevel === null ? null : ecLevel.toString(), symbolSequence, parityData);
        };
        DecodedBitStreamParser2.decodeHanziSegment = function(bits, result, count) {
          if (count * 13 > bits.available()) {
            throw new FormatException_1.default();
          }
          var buffer = new Uint8Array(2 * count);
          var offset = 0;
          while (count > 0) {
            var twoBytes = bits.readBits(13);
            var assembledTwoBytes = twoBytes / 96 << 8 & 4294967295 | twoBytes % 96;
            if (assembledTwoBytes < 959) {
              assembledTwoBytes += 41377;
            } else {
              assembledTwoBytes += 42657;
            }
            buffer[offset] = /*(byte) */
            assembledTwoBytes >> 8 & 255;
            buffer[offset + 1] = /*(byte) */
            assembledTwoBytes & 255;
            offset += 2;
            count--;
          }
          try {
            result.append(StringEncoding_1.default.decode(buffer, StringUtils_1.default.GB2312));
          } catch (ignored) {
            throw new FormatException_1.default(ignored);
          }
        };
        DecodedBitStreamParser2.decodeKanjiSegment = function(bits, result, count) {
          if (count * 13 > bits.available()) {
            throw new FormatException_1.default();
          }
          var buffer = new Uint8Array(2 * count);
          var offset = 0;
          while (count > 0) {
            var twoBytes = bits.readBits(13);
            var assembledTwoBytes = twoBytes / 192 << 8 & 4294967295 | twoBytes % 192;
            if (assembledTwoBytes < 7936) {
              assembledTwoBytes += 33088;
            } else {
              assembledTwoBytes += 49472;
            }
            buffer[offset] = /*(byte) */
            assembledTwoBytes >> 8;
            buffer[offset + 1] = /*(byte) */
            assembledTwoBytes;
            offset += 2;
            count--;
          }
          try {
            result.append(StringEncoding_1.default.decode(buffer, StringUtils_1.default.SHIFT_JIS));
          } catch (ignored) {
            throw new FormatException_1.default(ignored);
          }
        };
        DecodedBitStreamParser2.decodeByteSegment = function(bits, result, count, currentCharacterSetECI, byteSegments, hints) {
          if (8 * count > bits.available()) {
            throw new FormatException_1.default();
          }
          var readBytes = new Uint8Array(count);
          for (var i = 0; i < count; i++) {
            readBytes[i] = /*(byte) */
            bits.readBits(8);
          }
          var encoding;
          if (currentCharacterSetECI === null) {
            encoding = StringUtils_1.default.guessEncoding(readBytes, hints);
          } else {
            encoding = currentCharacterSetECI.getName();
          }
          try {
            result.append(StringEncoding_1.default.decode(readBytes, encoding));
          } catch (ignored) {
            throw new FormatException_1.default(ignored);
          }
          byteSegments.push(readBytes);
        };
        DecodedBitStreamParser2.toAlphaNumericChar = function(value) {
          if (value >= DecodedBitStreamParser2.ALPHANUMERIC_CHARS.length) {
            throw new FormatException_1.default();
          }
          return DecodedBitStreamParser2.ALPHANUMERIC_CHARS[value];
        };
        DecodedBitStreamParser2.decodeAlphanumericSegment = function(bits, result, count, fc1InEffect) {
          var start = result.length();
          while (count > 1) {
            if (bits.available() < 11) {
              throw new FormatException_1.default();
            }
            var nextTwoCharsBits = bits.readBits(11);
            result.append(DecodedBitStreamParser2.toAlphaNumericChar(Math.floor(nextTwoCharsBits / 45)));
            result.append(DecodedBitStreamParser2.toAlphaNumericChar(nextTwoCharsBits % 45));
            count -= 2;
          }
          if (count === 1) {
            if (bits.available() < 6) {
              throw new FormatException_1.default();
            }
            result.append(DecodedBitStreamParser2.toAlphaNumericChar(bits.readBits(6)));
          }
          if (fc1InEffect) {
            for (var i = start; i < result.length(); i++) {
              if (result.charAt(i) === "%") {
                if (i < result.length() - 1 && result.charAt(i + 1) === "%") {
                  result.deleteCharAt(i + 1);
                } else {
                  result.setCharAt(i, String.fromCharCode(29));
                }
              }
            }
          }
        };
        DecodedBitStreamParser2.decodeNumericSegment = function(bits, result, count) {
          while (count >= 3) {
            if (bits.available() < 10) {
              throw new FormatException_1.default();
            }
            var threeDigitsBits = bits.readBits(10);
            if (threeDigitsBits >= 1e3) {
              throw new FormatException_1.default();
            }
            result.append(DecodedBitStreamParser2.toAlphaNumericChar(Math.floor(threeDigitsBits / 100)));
            result.append(DecodedBitStreamParser2.toAlphaNumericChar(Math.floor(threeDigitsBits / 10) % 10));
            result.append(DecodedBitStreamParser2.toAlphaNumericChar(threeDigitsBits % 10));
            count -= 3;
          }
          if (count === 2) {
            if (bits.available() < 7) {
              throw new FormatException_1.default();
            }
            var twoDigitsBits = bits.readBits(7);
            if (twoDigitsBits >= 100) {
              throw new FormatException_1.default();
            }
            result.append(DecodedBitStreamParser2.toAlphaNumericChar(Math.floor(twoDigitsBits / 10)));
            result.append(DecodedBitStreamParser2.toAlphaNumericChar(twoDigitsBits % 10));
          } else if (count === 1) {
            if (bits.available() < 4) {
              throw new FormatException_1.default();
            }
            var digitBits = bits.readBits(4);
            if (digitBits >= 10) {
              throw new FormatException_1.default();
            }
            result.append(DecodedBitStreamParser2.toAlphaNumericChar(digitBits));
          }
        };
        DecodedBitStreamParser2.parseECIValue = function(bits) {
          var firstByte = bits.readBits(8);
          if ((firstByte & 128) === 0) {
            return firstByte & 127;
          }
          if ((firstByte & 192) === 128) {
            var secondByte = bits.readBits(8);
            return (firstByte & 63) << 8 & 4294967295 | secondByte;
          }
          if ((firstByte & 224) === 192) {
            var secondThirdBytes = bits.readBits(16);
            return (firstByte & 31) << 16 & 4294967295 | secondThirdBytes;
          }
          throw new FormatException_1.default();
        };
        DecodedBitStreamParser2.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
        DecodedBitStreamParser2.GB2312_SUBSET = 1;
        return DecodedBitStreamParser2;
      }()
    );
    exports.default = DecodedBitStreamParser;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/decoder/Decoder.js
var require_Decoder2 = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/decoder/Decoder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BitMatrix_1 = require_BitMatrix();
    var GenericGF_1 = require_GenericGF();
    var ReedSolomonDecoder_1 = require_ReedSolomonDecoder();
    var BitMatrixParser_1 = require_BitMatrixParser2();
    var QRCodeDecoderMetaData_1 = require_QRCodeDecoderMetaData();
    var DataBlock_1 = require_DataBlock2();
    var DecodedBitStreamParser_1 = require_DecodedBitStreamParser2();
    var ChecksumException_1 = require_ChecksumException();
    var Decoder = (
      /** @class */
      function() {
        function Decoder2() {
          this.rsDecoder = new ReedSolomonDecoder_1.default(GenericGF_1.default.QR_CODE_FIELD_256);
        }
        Decoder2.prototype.decodeBooleanArray = function(image, hints) {
          return this.decodeBitMatrix(BitMatrix_1.default.parseFromBooleanArray(image), hints);
        };
        Decoder2.prototype.decodeBitMatrix = function(bits, hints) {
          var parser = new BitMatrixParser_1.default(bits);
          var ex = null;
          try {
            return this.decodeBitMatrixParser(parser, hints);
          } catch (e) {
            ex = e;
          }
          try {
            parser.remask();
            parser.setMirror(true);
            parser.readVersion();
            parser.readFormatInformation();
            parser.mirror();
            var result = this.decodeBitMatrixParser(parser, hints);
            result.setOther(new QRCodeDecoderMetaData_1.default(true));
            return result;
          } catch (e) {
            if (ex !== null) {
              throw ex;
            }
            throw e;
          }
        };
        Decoder2.prototype.decodeBitMatrixParser = function(parser, hints) {
          var version = parser.readVersion();
          var ecLevel = parser.readFormatInformation().getErrorCorrectionLevel();
          var codewords = parser.readCodewords();
          var dataBlocks = DataBlock_1.default.getDataBlocks(codewords, version, ecLevel);
          var totalBytes = 0;
          for (var _i = 0, dataBlocks_1 = dataBlocks; _i < dataBlocks_1.length; _i++) {
            var dataBlock = dataBlocks_1[_i];
            totalBytes += dataBlock.getNumDataCodewords();
          }
          var resultBytes = new Uint8Array(totalBytes);
          var resultOffset = 0;
          for (var _a = 0, dataBlocks_2 = dataBlocks; _a < dataBlocks_2.length; _a++) {
            var dataBlock = dataBlocks_2[_a];
            var codewordBytes = dataBlock.getCodewords();
            var numDataCodewords = dataBlock.getNumDataCodewords();
            this.correctErrors(codewordBytes, numDataCodewords);
            for (var i = 0; i < numDataCodewords; i++) {
              resultBytes[resultOffset++] = codewordBytes[i];
            }
          }
          return DecodedBitStreamParser_1.default.decode(resultBytes, version, ecLevel, hints);
        };
        Decoder2.prototype.correctErrors = function(codewordBytes, numDataCodewords) {
          var numCodewords = codewordBytes.length;
          var codewordsInts = new Int32Array(codewordBytes);
          try {
            this.rsDecoder.decode(codewordsInts, codewordBytes.length - numDataCodewords);
          } catch (ignored) {
            throw new ChecksumException_1.default();
          }
          for (var i = 0; i < numDataCodewords; i++) {
            codewordBytes[i] = /*(byte) */
            codewordsInts[i];
          }
        };
        return Decoder2;
      }()
    );
    exports.default = Decoder;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/detector/FinderPattern.js
var require_FinderPattern2 = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/detector/FinderPattern.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResultPoint_1 = require_ResultPoint();
    var FinderPattern = (
      /** @class */
      function(_super) {
        __extends(FinderPattern2, _super);
        function FinderPattern2(posX, posY, estimatedModuleSize, count) {
          var _this = _super.call(this, posX, posY) || this;
          _this.estimatedModuleSize = estimatedModuleSize;
          _this.count = count;
          if (void 0 === count) {
            _this.count = 1;
          }
          return _this;
        }
        FinderPattern2.prototype.getEstimatedModuleSize = function() {
          return this.estimatedModuleSize;
        };
        FinderPattern2.prototype.getCount = function() {
          return this.count;
        };
        FinderPattern2.prototype.aboutEquals = function(moduleSize, i, j) {
          if (Math.abs(i - this.getY()) <= moduleSize && Math.abs(j - this.getX()) <= moduleSize) {
            var moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
            return moduleSizeDiff <= 1 || moduleSizeDiff <= this.estimatedModuleSize;
          }
          return false;
        };
        FinderPattern2.prototype.combineEstimate = function(i, j, newModuleSize) {
          var combinedCount = this.count + 1;
          var combinedX = (this.count * this.getX() + j) / combinedCount;
          var combinedY = (this.count * this.getY() + i) / combinedCount;
          var combinedModuleSize = (this.count * this.estimatedModuleSize + newModuleSize) / combinedCount;
          return new FinderPattern2(combinedX, combinedY, combinedModuleSize, combinedCount);
        };
        return FinderPattern2;
      }(ResultPoint_1.default)
    );
    exports.default = FinderPattern;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/detector/FinderPatternInfo.js
var require_FinderPatternInfo = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/detector/FinderPatternInfo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FinderPatternInfo = (
      /** @class */
      function() {
        function FinderPatternInfo2(patternCenters) {
          this.bottomLeft = patternCenters[0];
          this.topLeft = patternCenters[1];
          this.topRight = patternCenters[2];
        }
        FinderPatternInfo2.prototype.getBottomLeft = function() {
          return this.bottomLeft;
        };
        FinderPatternInfo2.prototype.getTopLeft = function() {
          return this.topLeft;
        };
        FinderPatternInfo2.prototype.getTopRight = function() {
          return this.topRight;
        };
        return FinderPatternInfo2;
      }()
    );
    exports.default = FinderPatternInfo;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/detector/FinderPatternFinder.js
var require_FinderPatternFinder = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/detector/FinderPatternFinder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DecodeHintType_1 = require_DecodeHintType();
    var ResultPoint_1 = require_ResultPoint();
    var FinderPattern_1 = require_FinderPattern2();
    var FinderPatternInfo_1 = require_FinderPatternInfo();
    var NotFoundException_1 = require_NotFoundException();
    var FinderPatternFinder = (
      /** @class */
      function() {
        function FinderPatternFinder2(image, resultPointCallback) {
          this.image = image;
          this.resultPointCallback = resultPointCallback;
          this.possibleCenters = [];
          this.crossCheckStateCount = new Int32Array(5);
          this.resultPointCallback = resultPointCallback;
        }
        FinderPatternFinder2.prototype.getImage = function() {
          return this.image;
        };
        FinderPatternFinder2.prototype.getPossibleCenters = function() {
          return this.possibleCenters;
        };
        FinderPatternFinder2.prototype.find = function(hints) {
          var tryHarder = hints !== null && hints !== void 0 && void 0 !== hints.get(DecodeHintType_1.default.TRY_HARDER);
          var pureBarcode = hints !== null && hints !== void 0 && void 0 !== hints.get(DecodeHintType_1.default.PURE_BARCODE);
          var image = this.image;
          var maxI = image.getHeight();
          var maxJ = image.getWidth();
          var iSkip = Math.floor(3 * maxI / (4 * FinderPatternFinder2.MAX_MODULES));
          if (iSkip < FinderPatternFinder2.MIN_SKIP || tryHarder) {
            iSkip = FinderPatternFinder2.MIN_SKIP;
          }
          var done = false;
          var stateCount = new Int32Array(5);
          for (var i = iSkip - 1; i < maxI && !done; i += iSkip) {
            stateCount[0] = 0;
            stateCount[1] = 0;
            stateCount[2] = 0;
            stateCount[3] = 0;
            stateCount[4] = 0;
            var currentState = 0;
            for (var j = 0; j < maxJ; j++) {
              if (image.get(j, i)) {
                if ((currentState & 1) === 1) {
                  currentState++;
                }
                stateCount[currentState]++;
              } else {
                if ((currentState & 1) === 0) {
                  if (currentState === 4) {
                    if (FinderPatternFinder2.foundPatternCross(stateCount)) {
                      var confirmed = this.handlePossibleCenter(stateCount, i, j, pureBarcode);
                      if (confirmed === true) {
                        iSkip = 2;
                        if (this.hasSkipped === true) {
                          done = this.haveMultiplyConfirmedCenters();
                        } else {
                          var rowSkip = this.findRowSkip();
                          if (rowSkip > stateCount[2]) {
                            i += rowSkip - stateCount[2] - iSkip;
                            j = maxJ - 1;
                          }
                        }
                      } else {
                        stateCount[0] = stateCount[2];
                        stateCount[1] = stateCount[3];
                        stateCount[2] = stateCount[4];
                        stateCount[3] = 1;
                        stateCount[4] = 0;
                        currentState = 3;
                        continue;
                      }
                      currentState = 0;
                      stateCount[0] = 0;
                      stateCount[1] = 0;
                      stateCount[2] = 0;
                      stateCount[3] = 0;
                      stateCount[4] = 0;
                    } else {
                      stateCount[0] = stateCount[2];
                      stateCount[1] = stateCount[3];
                      stateCount[2] = stateCount[4];
                      stateCount[3] = 1;
                      stateCount[4] = 0;
                      currentState = 3;
                    }
                  } else {
                    stateCount[++currentState]++;
                  }
                } else {
                  stateCount[currentState]++;
                }
              }
            }
            if (FinderPatternFinder2.foundPatternCross(stateCount)) {
              var confirmed = this.handlePossibleCenter(stateCount, i, maxJ, pureBarcode);
              if (confirmed === true) {
                iSkip = stateCount[0];
                if (this.hasSkipped) {
                  done = this.haveMultiplyConfirmedCenters();
                }
              }
            }
          }
          var patternInfo = this.selectBestPatterns();
          ResultPoint_1.default.orderBestPatterns(patternInfo);
          return new FinderPatternInfo_1.default(patternInfo);
        };
        FinderPatternFinder2.centerFromEnd = function(stateCount, end) {
          return end - stateCount[4] - stateCount[3] - stateCount[2] / 2;
        };
        FinderPatternFinder2.foundPatternCross = function(stateCount) {
          var totalModuleSize = 0;
          for (var i = 0; i < 5; i++) {
            var count = stateCount[i];
            if (count === 0) {
              return false;
            }
            totalModuleSize += count;
          }
          if (totalModuleSize < 7) {
            return false;
          }
          var moduleSize = totalModuleSize / 7;
          var maxVariance = moduleSize / 2;
          return Math.abs(moduleSize - stateCount[0]) < maxVariance && Math.abs(moduleSize - stateCount[1]) < maxVariance && Math.abs(3 * moduleSize - stateCount[2]) < 3 * maxVariance && Math.abs(moduleSize - stateCount[3]) < maxVariance && Math.abs(moduleSize - stateCount[4]) < maxVariance;
        };
        FinderPatternFinder2.prototype.getCrossCheckStateCount = function() {
          var crossCheckStateCount = this.crossCheckStateCount;
          crossCheckStateCount[0] = 0;
          crossCheckStateCount[1] = 0;
          crossCheckStateCount[2] = 0;
          crossCheckStateCount[3] = 0;
          crossCheckStateCount[4] = 0;
          return crossCheckStateCount;
        };
        FinderPatternFinder2.prototype.crossCheckDiagonal = function(startI, centerJ, maxCount, originalStateCountTotal) {
          var stateCount = this.getCrossCheckStateCount();
          var i = 0;
          var image = this.image;
          while (startI >= i && centerJ >= i && image.get(centerJ - i, startI - i)) {
            stateCount[2]++;
            i++;
          }
          if (startI < i || centerJ < i) {
            return false;
          }
          while (startI >= i && centerJ >= i && !image.get(centerJ - i, startI - i) && stateCount[1] <= maxCount) {
            stateCount[1]++;
            i++;
          }
          if (startI < i || centerJ < i || stateCount[1] > maxCount) {
            return false;
          }
          while (startI >= i && centerJ >= i && image.get(centerJ - i, startI - i) && stateCount[0] <= maxCount) {
            stateCount[0]++;
            i++;
          }
          if (stateCount[0] > maxCount) {
            return false;
          }
          var maxI = image.getHeight();
          var maxJ = image.getWidth();
          i = 1;
          while (startI + i < maxI && centerJ + i < maxJ && image.get(centerJ + i, startI + i)) {
            stateCount[2]++;
            i++;
          }
          if (startI + i >= maxI || centerJ + i >= maxJ) {
            return false;
          }
          while (startI + i < maxI && centerJ + i < maxJ && !image.get(centerJ + i, startI + i) && stateCount[3] < maxCount) {
            stateCount[3]++;
            i++;
          }
          if (startI + i >= maxI || centerJ + i >= maxJ || stateCount[3] >= maxCount) {
            return false;
          }
          while (startI + i < maxI && centerJ + i < maxJ && image.get(centerJ + i, startI + i) && stateCount[4] < maxCount) {
            stateCount[4]++;
            i++;
          }
          if (stateCount[4] >= maxCount) {
            return false;
          }
          var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
          return Math.abs(stateCountTotal - originalStateCountTotal) < 2 * originalStateCountTotal && FinderPatternFinder2.foundPatternCross(stateCount);
        };
        FinderPatternFinder2.prototype.crossCheckVertical = function(startI, centerJ, maxCount, originalStateCountTotal) {
          var image = this.image;
          var maxI = image.getHeight();
          var stateCount = this.getCrossCheckStateCount();
          var i = startI;
          while (i >= 0 && image.get(centerJ, i)) {
            stateCount[2]++;
            i--;
          }
          if (i < 0) {
            return NaN;
          }
          while (i >= 0 && !image.get(centerJ, i) && stateCount[1] <= maxCount) {
            stateCount[1]++;
            i--;
          }
          if (i < 0 || stateCount[1] > maxCount) {
            return NaN;
          }
          while (i >= 0 && image.get(centerJ, i) && stateCount[0] <= maxCount) {
            stateCount[0]++;
            i--;
          }
          if (stateCount[0] > maxCount) {
            return NaN;
          }
          i = startI + 1;
          while (i < maxI && image.get(centerJ, i)) {
            stateCount[2]++;
            i++;
          }
          if (i === maxI) {
            return NaN;
          }
          while (i < maxI && !image.get(centerJ, i) && stateCount[3] < maxCount) {
            stateCount[3]++;
            i++;
          }
          if (i === maxI || stateCount[3] >= maxCount) {
            return NaN;
          }
          while (i < maxI && image.get(centerJ, i) && stateCount[4] < maxCount) {
            stateCount[4]++;
            i++;
          }
          if (stateCount[4] >= maxCount) {
            return NaN;
          }
          var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
          if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
            return NaN;
          }
          return FinderPatternFinder2.foundPatternCross(stateCount) ? FinderPatternFinder2.centerFromEnd(stateCount, i) : NaN;
        };
        FinderPatternFinder2.prototype.crossCheckHorizontal = function(startJ, centerI, maxCount, originalStateCountTotal) {
          var image = this.image;
          var maxJ = image.getWidth();
          var stateCount = this.getCrossCheckStateCount();
          var j = startJ;
          while (j >= 0 && image.get(j, centerI)) {
            stateCount[2]++;
            j--;
          }
          if (j < 0) {
            return NaN;
          }
          while (j >= 0 && !image.get(j, centerI) && stateCount[1] <= maxCount) {
            stateCount[1]++;
            j--;
          }
          if (j < 0 || stateCount[1] > maxCount) {
            return NaN;
          }
          while (j >= 0 && image.get(j, centerI) && stateCount[0] <= maxCount) {
            stateCount[0]++;
            j--;
          }
          if (stateCount[0] > maxCount) {
            return NaN;
          }
          j = startJ + 1;
          while (j < maxJ && image.get(j, centerI)) {
            stateCount[2]++;
            j++;
          }
          if (j === maxJ) {
            return NaN;
          }
          while (j < maxJ && !image.get(j, centerI) && stateCount[3] < maxCount) {
            stateCount[3]++;
            j++;
          }
          if (j === maxJ || stateCount[3] >= maxCount) {
            return NaN;
          }
          while (j < maxJ && image.get(j, centerI) && stateCount[4] < maxCount) {
            stateCount[4]++;
            j++;
          }
          if (stateCount[4] >= maxCount) {
            return NaN;
          }
          var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
          if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= originalStateCountTotal) {
            return NaN;
          }
          return FinderPatternFinder2.foundPatternCross(stateCount) ? FinderPatternFinder2.centerFromEnd(stateCount, j) : NaN;
        };
        FinderPatternFinder2.prototype.handlePossibleCenter = function(stateCount, i, j, pureBarcode) {
          var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
          var centerJ = FinderPatternFinder2.centerFromEnd(stateCount, j);
          var centerI = this.crossCheckVertical(
            i,
            /*(int) */
            Math.floor(centerJ),
            stateCount[2],
            stateCountTotal
          );
          if (!isNaN(centerI)) {
            centerJ = this.crossCheckHorizontal(
              /*(int) */
              Math.floor(centerJ),
              /*(int) */
              Math.floor(centerI),
              stateCount[2],
              stateCountTotal
            );
            if (!isNaN(centerJ) && (!pureBarcode || this.crossCheckDiagonal(
              /*(int) */
              Math.floor(centerI),
              /*(int) */
              Math.floor(centerJ),
              stateCount[2],
              stateCountTotal
            ))) {
              var estimatedModuleSize = stateCountTotal / 7;
              var found = false;
              var possibleCenters = this.possibleCenters;
              for (var index = 0, length_1 = possibleCenters.length; index < length_1; index++) {
                var center = possibleCenters[index];
                if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
                  possibleCenters[index] = center.combineEstimate(centerI, centerJ, estimatedModuleSize);
                  found = true;
                  break;
                }
              }
              if (!found) {
                var point = new FinderPattern_1.default(centerJ, centerI, estimatedModuleSize);
                possibleCenters.push(point);
                if (this.resultPointCallback !== null && this.resultPointCallback !== void 0) {
                  this.resultPointCallback.foundPossibleResultPoint(point);
                }
              }
              return true;
            }
          }
          return false;
        };
        FinderPatternFinder2.prototype.findRowSkip = function() {
          var max = this.possibleCenters.length;
          if (max <= 1) {
            return 0;
          }
          var firstConfirmedCenter = null;
          for (var _i = 0, _a = this.possibleCenters; _i < _a.length; _i++) {
            var center = _a[_i];
            if (center.getCount() >= FinderPatternFinder2.CENTER_QUORUM) {
              if (firstConfirmedCenter == null) {
                firstConfirmedCenter = center;
              } else {
                this.hasSkipped = true;
                return (
                  /*(int) */
                  Math.floor((Math.abs(firstConfirmedCenter.getX() - center.getX()) - Math.abs(firstConfirmedCenter.getY() - center.getY())) / 2)
                );
              }
            }
          }
          return 0;
        };
        FinderPatternFinder2.prototype.haveMultiplyConfirmedCenters = function() {
          var confirmedCount = 0;
          var totalModuleSize = 0;
          var max = this.possibleCenters.length;
          for (var _i = 0, _a = this.possibleCenters; _i < _a.length; _i++) {
            var pattern = _a[_i];
            if (pattern.getCount() >= FinderPatternFinder2.CENTER_QUORUM) {
              confirmedCount++;
              totalModuleSize += pattern.getEstimatedModuleSize();
            }
          }
          if (confirmedCount < 3) {
            return false;
          }
          var average = totalModuleSize / max;
          var totalDeviation = 0;
          for (var _b = 0, _c = this.possibleCenters; _b < _c.length; _b++) {
            var pattern = _c[_b];
            totalDeviation += Math.abs(pattern.getEstimatedModuleSize() - average);
          }
          return totalDeviation <= 0.05 * totalModuleSize;
        };
        FinderPatternFinder2.prototype.selectBestPatterns = function() {
          var startSize = this.possibleCenters.length;
          if (startSize < 3) {
            throw new NotFoundException_1.default();
          }
          var possibleCenters = this.possibleCenters;
          var average;
          if (startSize > 3) {
            var totalModuleSize = 0;
            var square = 0;
            for (var _i = 0, _a = this.possibleCenters; _i < _a.length; _i++) {
              var center = _a[_i];
              var size = center.getEstimatedModuleSize();
              totalModuleSize += size;
              square += size * size;
            }
            average = totalModuleSize / startSize;
            var stdDev = Math.sqrt(square / startSize - average * average);
            possibleCenters.sort(
              /**
               * <p>Orders by furthest from average</p>
               */
              // FurthestFromAverageComparator implements Comparator<FinderPattern>
              function(center1, center2) {
                var dA = Math.abs(center2.getEstimatedModuleSize() - average);
                var dB = Math.abs(center1.getEstimatedModuleSize() - average);
                return dA < dB ? -1 : dA > dB ? 1 : 0;
              }
            );
            var limit = Math.max(0.2 * average, stdDev);
            for (var i = 0; i < possibleCenters.length && possibleCenters.length > 3; i++) {
              var pattern = possibleCenters[i];
              if (Math.abs(pattern.getEstimatedModuleSize() - average) > limit) {
                possibleCenters.splice(i, 1);
                i--;
              }
            }
          }
          if (possibleCenters.length > 3) {
            var totalModuleSize = 0;
            for (var _b = 0, possibleCenters_1 = possibleCenters; _b < possibleCenters_1.length; _b++) {
              var possibleCenter = possibleCenters_1[_b];
              totalModuleSize += possibleCenter.getEstimatedModuleSize();
            }
            average = totalModuleSize / possibleCenters.length;
            possibleCenters.sort(
              /**
               * <p>Orders by {@link FinderPattern#getCount()}, descending.</p>
               */
              // CenterComparator implements Comparator<FinderPattern>
              function(center1, center2) {
                if (center2.getCount() === center1.getCount()) {
                  var dA = Math.abs(center2.getEstimatedModuleSize() - average);
                  var dB = Math.abs(center1.getEstimatedModuleSize() - average);
                  return dA < dB ? 1 : dA > dB ? -1 : 0;
                } else {
                  return center2.getCount() - center1.getCount();
                }
              }
            );
            possibleCenters.splice(3);
          }
          return [
            possibleCenters[0],
            possibleCenters[1],
            possibleCenters[2]
          ];
        };
        FinderPatternFinder2.CENTER_QUORUM = 2;
        FinderPatternFinder2.MIN_SKIP = 3;
        FinderPatternFinder2.MAX_MODULES = 57;
        return FinderPatternFinder2;
      }()
    );
    exports.default = FinderPatternFinder;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/detector/AlignmentPattern.js
var require_AlignmentPattern = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/detector/AlignmentPattern.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResultPoint_1 = require_ResultPoint();
    var AlignmentPattern = (
      /** @class */
      function(_super) {
        __extends(AlignmentPattern2, _super);
        function AlignmentPattern2(posX, posY, estimatedModuleSize) {
          var _this = _super.call(this, posX, posY) || this;
          _this.estimatedModuleSize = estimatedModuleSize;
          return _this;
        }
        AlignmentPattern2.prototype.aboutEquals = function(moduleSize, i, j) {
          if (Math.abs(i - this.getY()) <= moduleSize && Math.abs(j - this.getX()) <= moduleSize) {
            var moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
            return moduleSizeDiff <= 1 || moduleSizeDiff <= this.estimatedModuleSize;
          }
          return false;
        };
        AlignmentPattern2.prototype.combineEstimate = function(i, j, newModuleSize) {
          var combinedX = (this.getX() + j) / 2;
          var combinedY = (this.getY() + i) / 2;
          var combinedModuleSize = (this.estimatedModuleSize + newModuleSize) / 2;
          return new AlignmentPattern2(combinedX, combinedY, combinedModuleSize);
        };
        return AlignmentPattern2;
      }(ResultPoint_1.default)
    );
    exports.default = AlignmentPattern;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/detector/AlignmentPatternFinder.js
var require_AlignmentPatternFinder = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/detector/AlignmentPatternFinder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AlignmentPattern_1 = require_AlignmentPattern();
    var NotFoundException_1 = require_NotFoundException();
    var AlignmentPatternFinder = (
      /** @class */
      function() {
        function AlignmentPatternFinder2(image, startX, startY, width, height, moduleSize, resultPointCallback) {
          this.image = image;
          this.startX = startX;
          this.startY = startY;
          this.width = width;
          this.height = height;
          this.moduleSize = moduleSize;
          this.resultPointCallback = resultPointCallback;
          this.possibleCenters = [];
          this.crossCheckStateCount = new Int32Array(3);
        }
        AlignmentPatternFinder2.prototype.find = function() {
          var startX = this.startX;
          var height = this.height;
          var width = this.width;
          var maxJ = startX + width;
          var middleI = this.startY + height / 2;
          var stateCount = new Int32Array(3);
          var image = this.image;
          for (var iGen = 0; iGen < height; iGen++) {
            var i = middleI + ((iGen & 1) === 0 ? Math.floor((iGen + 1) / 2) : -Math.floor((iGen + 1) / 2));
            stateCount[0] = 0;
            stateCount[1] = 0;
            stateCount[2] = 0;
            var j = startX;
            while (j < maxJ && !image.get(j, i)) {
              j++;
            }
            var currentState = 0;
            while (j < maxJ) {
              if (image.get(j, i)) {
                if (currentState === 1) {
                  stateCount[1]++;
                } else {
                  if (currentState === 2) {
                    if (this.foundPatternCross(stateCount)) {
                      var confirmed = this.handlePossibleCenter(stateCount, i, j);
                      if (confirmed !== null) {
                        return confirmed;
                      }
                    }
                    stateCount[0] = stateCount[2];
                    stateCount[1] = 1;
                    stateCount[2] = 0;
                    currentState = 1;
                  } else {
                    stateCount[++currentState]++;
                  }
                }
              } else {
                if (currentState === 1) {
                  currentState++;
                }
                stateCount[currentState]++;
              }
              j++;
            }
            if (this.foundPatternCross(stateCount)) {
              var confirmed = this.handlePossibleCenter(stateCount, i, maxJ);
              if (confirmed !== null) {
                return confirmed;
              }
            }
          }
          if (this.possibleCenters.length !== 0) {
            return this.possibleCenters[0];
          }
          throw new NotFoundException_1.default();
        };
        AlignmentPatternFinder2.centerFromEnd = function(stateCount, end) {
          return end - stateCount[2] - stateCount[1] / 2;
        };
        AlignmentPatternFinder2.prototype.foundPatternCross = function(stateCount) {
          var moduleSize = this.moduleSize;
          var maxVariance = moduleSize / 2;
          for (var i = 0; i < 3; i++) {
            if (Math.abs(moduleSize - stateCount[i]) >= maxVariance) {
              return false;
            }
          }
          return true;
        };
        AlignmentPatternFinder2.prototype.crossCheckVertical = function(startI, centerJ, maxCount, originalStateCountTotal) {
          var image = this.image;
          var maxI = image.getHeight();
          var stateCount = this.crossCheckStateCount;
          stateCount[0] = 0;
          stateCount[1] = 0;
          stateCount[2] = 0;
          var i = startI;
          while (i >= 0 && image.get(centerJ, i) && stateCount[1] <= maxCount) {
            stateCount[1]++;
            i--;
          }
          if (i < 0 || stateCount[1] > maxCount) {
            return NaN;
          }
          while (i >= 0 && !image.get(centerJ, i) && stateCount[0] <= maxCount) {
            stateCount[0]++;
            i--;
          }
          if (stateCount[0] > maxCount) {
            return NaN;
          }
          i = startI + 1;
          while (i < maxI && image.get(centerJ, i) && stateCount[1] <= maxCount) {
            stateCount[1]++;
            i++;
          }
          if (i === maxI || stateCount[1] > maxCount) {
            return NaN;
          }
          while (i < maxI && !image.get(centerJ, i) && stateCount[2] <= maxCount) {
            stateCount[2]++;
            i++;
          }
          if (stateCount[2] > maxCount) {
            return NaN;
          }
          var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
          if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
            return NaN;
          }
          return this.foundPatternCross(stateCount) ? AlignmentPatternFinder2.centerFromEnd(stateCount, i) : NaN;
        };
        AlignmentPatternFinder2.prototype.handlePossibleCenter = function(stateCount, i, j) {
          var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
          var centerJ = AlignmentPatternFinder2.centerFromEnd(stateCount, j);
          var centerI = this.crossCheckVertical(
            i,
            /*(int) */
            centerJ,
            2 * stateCount[1],
            stateCountTotal
          );
          if (!isNaN(centerI)) {
            var estimatedModuleSize = (stateCount[0] + stateCount[1] + stateCount[2]) / 3;
            for (var _i = 0, _a = this.possibleCenters; _i < _a.length; _i++) {
              var center = _a[_i];
              if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
                return center.combineEstimate(centerI, centerJ, estimatedModuleSize);
              }
            }
            var point = new AlignmentPattern_1.default(centerJ, centerI, estimatedModuleSize);
            this.possibleCenters.push(point);
            if (this.resultPointCallback !== null && this.resultPointCallback !== void 0) {
              this.resultPointCallback.foundPossibleResultPoint(point);
            }
          }
          return null;
        };
        return AlignmentPatternFinder2;
      }()
    );
    exports.default = AlignmentPatternFinder;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/detector/Detector.js
var require_Detector2 = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/detector/Detector.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DecodeHintType_1 = require_DecodeHintType();
    var ResultPoint_1 = require_ResultPoint();
    var DetectorResult_1 = require_DetectorResult();
    var GridSamplerInstance_1 = require_GridSamplerInstance();
    var PerspectiveTransform_1 = require_PerspectiveTransform();
    var MathUtils_1 = require_MathUtils();
    var Version_1 = require_Version2();
    var FinderPatternFinder_1 = require_FinderPatternFinder();
    var AlignmentPatternFinder_1 = require_AlignmentPatternFinder();
    var NotFoundException_1 = require_NotFoundException();
    var Detector = (
      /** @class */
      function() {
        function Detector2(image) {
          this.image = image;
        }
        Detector2.prototype.getImage = function() {
          return this.image;
        };
        Detector2.prototype.getResultPointCallback = function() {
          return this.resultPointCallback;
        };
        Detector2.prototype.detect = function(hints) {
          this.resultPointCallback = hints === null || hints === void 0 ? null : (
            /*(ResultPointCallback) */
            hints.get(DecodeHintType_1.default.NEED_RESULT_POINT_CALLBACK)
          );
          var finder = new FinderPatternFinder_1.default(this.image, this.resultPointCallback);
          var info = finder.find(hints);
          return this.processFinderPatternInfo(info);
        };
        Detector2.prototype.processFinderPatternInfo = function(info) {
          var topLeft = info.getTopLeft();
          var topRight = info.getTopRight();
          var bottomLeft = info.getBottomLeft();
          var moduleSize = this.calculateModuleSize(topLeft, topRight, bottomLeft);
          if (moduleSize < 1) {
            throw new NotFoundException_1.default("No pattern found in proccess finder.");
          }
          var dimension = Detector2.computeDimension(topLeft, topRight, bottomLeft, moduleSize);
          var provisionalVersion = Version_1.default.getProvisionalVersionForDimension(dimension);
          var modulesBetweenFPCenters = provisionalVersion.getDimensionForVersion() - 7;
          var alignmentPattern = null;
          if (provisionalVersion.getAlignmentPatternCenters().length > 0) {
            var bottomRightX = topRight.getX() - topLeft.getX() + bottomLeft.getX();
            var bottomRightY = topRight.getY() - topLeft.getY() + bottomLeft.getY();
            var correctionToTopLeft = 1 - 3 / modulesBetweenFPCenters;
            var estAlignmentX = (
              /*(int) */
              Math.floor(topLeft.getX() + correctionToTopLeft * (bottomRightX - topLeft.getX()))
            );
            var estAlignmentY = (
              /*(int) */
              Math.floor(topLeft.getY() + correctionToTopLeft * (bottomRightY - topLeft.getY()))
            );
            for (var i = 4; i <= 16; i <<= 1) {
              try {
                alignmentPattern = this.findAlignmentInRegion(moduleSize, estAlignmentX, estAlignmentY, i);
                break;
              } catch (re) {
                if (!(re instanceof NotFoundException_1.default)) {
                  throw re;
                }
              }
            }
          }
          var transform = Detector2.createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension);
          var bits = Detector2.sampleGrid(this.image, transform, dimension);
          var points;
          if (alignmentPattern === null) {
            points = [bottomLeft, topLeft, topRight];
          } else {
            points = [bottomLeft, topLeft, topRight, alignmentPattern];
          }
          return new DetectorResult_1.default(bits, points);
        };
        Detector2.createTransform = function(topLeft, topRight, bottomLeft, alignmentPattern, dimension) {
          var dimMinusThree = dimension - 3.5;
          var bottomRightX;
          var bottomRightY;
          var sourceBottomRightX;
          var sourceBottomRightY;
          if (alignmentPattern !== null) {
            bottomRightX = alignmentPattern.getX();
            bottomRightY = alignmentPattern.getY();
            sourceBottomRightX = dimMinusThree - 3;
            sourceBottomRightY = sourceBottomRightX;
          } else {
            bottomRightX = topRight.getX() - topLeft.getX() + bottomLeft.getX();
            bottomRightY = topRight.getY() - topLeft.getY() + bottomLeft.getY();
            sourceBottomRightX = dimMinusThree;
            sourceBottomRightY = dimMinusThree;
          }
          return PerspectiveTransform_1.default.quadrilateralToQuadrilateral(3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRightX, bottomRightY, bottomLeft.getX(), bottomLeft.getY());
        };
        Detector2.sampleGrid = function(image, transform, dimension) {
          var sampler = GridSamplerInstance_1.default.getInstance();
          return sampler.sampleGridWithTransform(image, dimension, dimension, transform);
        };
        Detector2.computeDimension = function(topLeft, topRight, bottomLeft, moduleSize) {
          var tltrCentersDimension = MathUtils_1.default.round(ResultPoint_1.default.distance(topLeft, topRight) / moduleSize);
          var tlblCentersDimension = MathUtils_1.default.round(ResultPoint_1.default.distance(topLeft, bottomLeft) / moduleSize);
          var dimension = Math.floor((tltrCentersDimension + tlblCentersDimension) / 2) + 7;
          switch (dimension & 3) {
            case 0:
              dimension++;
              break;
            case 2:
              dimension--;
              break;
            case 3:
              throw new NotFoundException_1.default("Dimensions could be not found.");
          }
          return dimension;
        };
        Detector2.prototype.calculateModuleSize = function(topLeft, topRight, bottomLeft) {
          return (this.calculateModuleSizeOneWay(topLeft, topRight) + this.calculateModuleSizeOneWay(topLeft, bottomLeft)) / 2;
        };
        Detector2.prototype.calculateModuleSizeOneWay = function(pattern, otherPattern) {
          var moduleSizeEst1 = this.sizeOfBlackWhiteBlackRunBothWays(
            /*(int) */
            Math.floor(pattern.getX()),
            /*(int) */
            Math.floor(pattern.getY()),
            /*(int) */
            Math.floor(otherPattern.getX()),
            /*(int) */
            Math.floor(otherPattern.getY())
          );
          var moduleSizeEst2 = this.sizeOfBlackWhiteBlackRunBothWays(
            /*(int) */
            Math.floor(otherPattern.getX()),
            /*(int) */
            Math.floor(otherPattern.getY()),
            /*(int) */
            Math.floor(pattern.getX()),
            /*(int) */
            Math.floor(pattern.getY())
          );
          if (isNaN(moduleSizeEst1)) {
            return moduleSizeEst2 / 7;
          }
          if (isNaN(moduleSizeEst2)) {
            return moduleSizeEst1 / 7;
          }
          return (moduleSizeEst1 + moduleSizeEst2) / 14;
        };
        Detector2.prototype.sizeOfBlackWhiteBlackRunBothWays = function(fromX, fromY, toX, toY) {
          var result = this.sizeOfBlackWhiteBlackRun(fromX, fromY, toX, toY);
          var scale = 1;
          var otherToX = fromX - (toX - fromX);
          if (otherToX < 0) {
            scale = fromX / /*(float) */
            (fromX - otherToX);
            otherToX = 0;
          } else if (otherToX >= this.image.getWidth()) {
            scale = (this.image.getWidth() - 1 - fromX) / /*(float) */
            (otherToX - fromX);
            otherToX = this.image.getWidth() - 1;
          }
          var otherToY = (
            /*(int) */
            Math.floor(fromY - (toY - fromY) * scale)
          );
          scale = 1;
          if (otherToY < 0) {
            scale = fromY / /*(float) */
            (fromY - otherToY);
            otherToY = 0;
          } else if (otherToY >= this.image.getHeight()) {
            scale = (this.image.getHeight() - 1 - fromY) / /*(float) */
            (otherToY - fromY);
            otherToY = this.image.getHeight() - 1;
          }
          otherToX = /*(int) */
          Math.floor(fromX + (otherToX - fromX) * scale);
          result += this.sizeOfBlackWhiteBlackRun(fromX, fromY, otherToX, otherToY);
          return result - 1;
        };
        Detector2.prototype.sizeOfBlackWhiteBlackRun = function(fromX, fromY, toX, toY) {
          var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
          if (steep) {
            var temp = fromX;
            fromX = fromY;
            fromY = temp;
            temp = toX;
            toX = toY;
            toY = temp;
          }
          var dx = Math.abs(toX - fromX);
          var dy = Math.abs(toY - fromY);
          var error = -dx / 2;
          var xstep = fromX < toX ? 1 : -1;
          var ystep = fromY < toY ? 1 : -1;
          var state = 0;
          var xLimit = toX + xstep;
          for (var x = fromX, y = fromY; x !== xLimit; x += xstep) {
            var realX = steep ? y : x;
            var realY = steep ? x : y;
            if (state === 1 === this.image.get(realX, realY)) {
              if (state === 2) {
                return MathUtils_1.default.distance(x, y, fromX, fromY);
              }
              state++;
            }
            error += dy;
            if (error > 0) {
              if (y === toY) {
                break;
              }
              y += ystep;
              error -= dx;
            }
          }
          if (state === 2) {
            return MathUtils_1.default.distance(toX + xstep, toY, fromX, fromY);
          }
          return NaN;
        };
        Detector2.prototype.findAlignmentInRegion = function(overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
          var allowance = (
            /*(int) */
            Math.floor(allowanceFactor * overallEstModuleSize)
          );
          var alignmentAreaLeftX = Math.max(0, estAlignmentX - allowance);
          var alignmentAreaRightX = Math.min(this.image.getWidth() - 1, estAlignmentX + allowance);
          if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3) {
            throw new NotFoundException_1.default("Alignment top exceeds estimated module size.");
          }
          var alignmentAreaTopY = Math.max(0, estAlignmentY - allowance);
          var alignmentAreaBottomY = Math.min(this.image.getHeight() - 1, estAlignmentY + allowance);
          if (alignmentAreaBottomY - alignmentAreaTopY < overallEstModuleSize * 3) {
            throw new NotFoundException_1.default("Alignment bottom exceeds estimated module size.");
          }
          var alignmentFinder = new AlignmentPatternFinder_1.default(this.image, alignmentAreaLeftX, alignmentAreaTopY, alignmentAreaRightX - alignmentAreaLeftX, alignmentAreaBottomY - alignmentAreaTopY, overallEstModuleSize, this.resultPointCallback);
          return alignmentFinder.find();
        };
        return Detector2;
      }()
    );
    exports.default = Detector;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/QRCodeReader.js
var require_QRCodeReader = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/QRCodeReader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarcodeFormat_1 = require_BarcodeFormat();
    var DecodeHintType_1 = require_DecodeHintType();
    var Result_1 = require_Result();
    var ResultMetadataType_1 = require_ResultMetadataType();
    var BitMatrix_1 = require_BitMatrix();
    var Decoder_1 = require_Decoder2();
    var QRCodeDecoderMetaData_1 = require_QRCodeDecoderMetaData();
    var Detector_1 = require_Detector2();
    var NotFoundException_1 = require_NotFoundException();
    var QRCodeReader2 = (
      /** @class */
      function() {
        function QRCodeReader3() {
          this.decoder = new Decoder_1.default();
        }
        QRCodeReader3.prototype.getDecoder = function() {
          return this.decoder;
        };
        QRCodeReader3.prototype.decode = function(image, hints) {
          var decoderResult;
          var points;
          if (hints !== void 0 && hints !== null && void 0 !== hints.get(DecodeHintType_1.default.PURE_BARCODE)) {
            var bits = QRCodeReader3.extractPureBits(image.getBlackMatrix());
            decoderResult = this.decoder.decodeBitMatrix(bits, hints);
            points = QRCodeReader3.NO_POINTS;
          } else {
            var detectorResult = new Detector_1.default(image.getBlackMatrix()).detect(hints);
            decoderResult = this.decoder.decodeBitMatrix(detectorResult.getBits(), hints);
            points = detectorResult.getPoints();
          }
          if (decoderResult.getOther() instanceof QRCodeDecoderMetaData_1.default) {
            decoderResult.getOther().applyMirroredCorrection(points);
          }
          var result = new Result_1.default(decoderResult.getText(), decoderResult.getRawBytes(), void 0, points, BarcodeFormat_1.default.QR_CODE, void 0);
          var byteSegments = decoderResult.getByteSegments();
          if (byteSegments !== null) {
            result.putMetadata(ResultMetadataType_1.default.BYTE_SEGMENTS, byteSegments);
          }
          var ecLevel = decoderResult.getECLevel();
          if (ecLevel !== null) {
            result.putMetadata(ResultMetadataType_1.default.ERROR_CORRECTION_LEVEL, ecLevel);
          }
          if (decoderResult.hasStructuredAppend()) {
            result.putMetadata(ResultMetadataType_1.default.STRUCTURED_APPEND_SEQUENCE, decoderResult.getStructuredAppendSequenceNumber());
            result.putMetadata(ResultMetadataType_1.default.STRUCTURED_APPEND_PARITY, decoderResult.getStructuredAppendParity());
          }
          return result;
        };
        QRCodeReader3.prototype.reset = function() {
        };
        QRCodeReader3.extractPureBits = function(image) {
          var leftTopBlack = image.getTopLeftOnBit();
          var rightBottomBlack = image.getBottomRightOnBit();
          if (leftTopBlack === null || rightBottomBlack === null) {
            throw new NotFoundException_1.default();
          }
          var moduleSize = this.moduleSize(leftTopBlack, image);
          var top = leftTopBlack[1];
          var bottom = rightBottomBlack[1];
          var left = leftTopBlack[0];
          var right = rightBottomBlack[0];
          if (left >= right || top >= bottom) {
            throw new NotFoundException_1.default();
          }
          if (bottom - top !== right - left) {
            right = left + (bottom - top);
            if (right >= image.getWidth()) {
              throw new NotFoundException_1.default();
            }
          }
          var matrixWidth = Math.round((right - left + 1) / moduleSize);
          var matrixHeight = Math.round((bottom - top + 1) / moduleSize);
          if (matrixWidth <= 0 || matrixHeight <= 0) {
            throw new NotFoundException_1.default();
          }
          if (matrixHeight !== matrixWidth) {
            throw new NotFoundException_1.default();
          }
          var nudge = (
            /*(int) */
            Math.floor(moduleSize / 2)
          );
          top += nudge;
          left += nudge;
          var nudgedTooFarRight = left + /*(int) */
          Math.floor((matrixWidth - 1) * moduleSize) - right;
          if (nudgedTooFarRight > 0) {
            if (nudgedTooFarRight > nudge) {
              throw new NotFoundException_1.default();
            }
            left -= nudgedTooFarRight;
          }
          var nudgedTooFarDown = top + /*(int) */
          Math.floor((matrixHeight - 1) * moduleSize) - bottom;
          if (nudgedTooFarDown > 0) {
            if (nudgedTooFarDown > nudge) {
              throw new NotFoundException_1.default();
            }
            top -= nudgedTooFarDown;
          }
          var bits = new BitMatrix_1.default(matrixWidth, matrixHeight);
          for (var y = 0; y < matrixHeight; y++) {
            var iOffset = top + /*(int) */
            Math.floor(y * moduleSize);
            for (var x = 0; x < matrixWidth; x++) {
              if (image.get(left + /*(int) */
              Math.floor(x * moduleSize), iOffset)) {
                bits.set(x, y);
              }
            }
          }
          return bits;
        };
        QRCodeReader3.moduleSize = function(leftTopBlack, image) {
          var height = image.getHeight();
          var width = image.getWidth();
          var x = leftTopBlack[0];
          var y = leftTopBlack[1];
          var inBlack = true;
          var transitions = 0;
          while (x < width && y < height) {
            if (inBlack !== image.get(x, y)) {
              if (++transitions === 5) {
                break;
              }
              inBlack = !inBlack;
            }
            x++;
            y++;
          }
          if (x === width || y === height) {
            throw new NotFoundException_1.default();
          }
          return (x - leftTopBlack[0]) / 7;
        };
        QRCodeReader3.NO_POINTS = new Array();
        return QRCodeReader3;
      }()
    );
    exports.default = QRCodeReader2;
  }
});

// node_modules/@zxing/library/esm5/core/ReaderException.js
var require_ReaderException = __commonJS({
  "node_modules/@zxing/library/esm5/core/ReaderException.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Exception_1 = require_Exception();
    var ReaderException = (
      /** @class */
      function(_super) {
        __extends(ReaderException2, _super);
        function ReaderException2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return ReaderException2;
      }(Exception_1.default)
    );
    exports.default = ReaderException;
  }
});

// node_modules/@zxing/library/esm5/core/MultiFormatReader.js
var require_MultiFormatReader = __commonJS({
  "node_modules/@zxing/library/esm5/core/MultiFormatReader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DecodeHintType_1 = require_DecodeHintType();
    var BarcodeFormat_1 = require_BarcodeFormat();
    var QRCodeReader_1 = require_QRCodeReader();
    var MultiFormatOneDReader_1 = require_MultiFormatOneDReader();
    var DataMatrixReader_1 = require_DataMatrixReader();
    var NotFoundException_1 = require_NotFoundException();
    var ReaderException_1 = require_ReaderException();
    var MultiFormatReader = (
      /** @class */
      function() {
        function MultiFormatReader2() {
        }
        MultiFormatReader2.prototype.decode = function(image, hints) {
          this.setHints(hints);
          return this.decodeInternal(image);
        };
        MultiFormatReader2.prototype.decodeWithState = function(image) {
          if (this.readers === null || this.readers === void 0) {
            this.setHints(null);
          }
          return this.decodeInternal(image);
        };
        MultiFormatReader2.prototype.setHints = function(hints) {
          this.hints = hints;
          var tryHarder = hints !== null && hints !== void 0 && void 0 !== hints.get(DecodeHintType_1.default.TRY_HARDER);
          var formats = hints === null || hints === void 0 ? null : hints.get(DecodeHintType_1.default.POSSIBLE_FORMATS);
          var readers = new Array();
          if (formats !== null && formats !== void 0) {
            var addOneDReader = formats.some(function(f) {
              return f === BarcodeFormat_1.default.UPC_A || f === BarcodeFormat_1.default.UPC_E || f === BarcodeFormat_1.default.EAN_13 || f === BarcodeFormat_1.default.EAN_8 || f === BarcodeFormat_1.default.CODABAR || f === BarcodeFormat_1.default.CODE_39 || f === BarcodeFormat_1.default.CODE_93 || f === BarcodeFormat_1.default.CODE_128 || f === BarcodeFormat_1.default.ITF || f === BarcodeFormat_1.default.RSS_14 || f === BarcodeFormat_1.default.RSS_EXPANDED;
            });
            if (addOneDReader && !tryHarder) {
              readers.push(new MultiFormatOneDReader_1.default(hints));
            }
            if (formats.includes(BarcodeFormat_1.default.QR_CODE)) {
              readers.push(new QRCodeReader_1.default());
            }
            if (formats.includes(BarcodeFormat_1.default.DATA_MATRIX)) {
              readers.push(new DataMatrixReader_1.default());
            }
            if (addOneDReader && tryHarder) {
              readers.push(new MultiFormatOneDReader_1.default(hints));
            }
          }
          if (readers.length === 0) {
            if (!tryHarder) {
              readers.push(new MultiFormatOneDReader_1.default(hints));
            }
            readers.push(new QRCodeReader_1.default());
            readers.push(new DataMatrixReader_1.default());
            if (tryHarder) {
              readers.push(new MultiFormatOneDReader_1.default(hints));
            }
          }
          this.readers = readers;
        };
        MultiFormatReader2.prototype.reset = function() {
          if (this.readers !== null) {
            for (var _i = 0, _a = this.readers; _i < _a.length; _i++) {
              var reader = _a[_i];
              reader.reset();
            }
          }
        };
        MultiFormatReader2.prototype.decodeInternal = function(image) {
          if (this.readers === null) {
            throw new ReaderException_1.default("No readers where selected, nothing can be read.");
          }
          for (var _i = 0, _a = this.readers; _i < _a.length; _i++) {
            var reader = _a[_i];
            try {
              return reader.decode(image, this.hints);
            } catch (ex) {
              if (ex instanceof ReaderException_1.default) {
                continue;
              }
            }
          }
          throw new NotFoundException_1.default("No MultiFormat Readers were able to detect the code.");
        };
        return MultiFormatReader2;
      }()
    );
    exports.default = MultiFormatReader;
  }
});

// node_modules/@zxing/library/esm5/browser/BrowserMultiFormatReader.js
var require_BrowserMultiFormatReader = __commonJS({
  "node_modules/@zxing/library/esm5/browser/BrowserMultiFormatReader.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BrowserCodeReader_1 = require_BrowserCodeReader();
    var MultiFormatReader_1 = require_MultiFormatReader();
    var BrowserMultiFormatReader2 = (
      /** @class */
      function(_super) {
        __extends(BrowserMultiFormatReader3, _super);
        function BrowserMultiFormatReader3(hints, timeBetweenScansMillis) {
          if (hints === void 0) {
            hints = null;
          }
          if (timeBetweenScansMillis === void 0) {
            timeBetweenScansMillis = 500;
          }
          var _this = this;
          var reader = new MultiFormatReader_1.default();
          reader.setHints(hints);
          _this = _super.call(this, reader, timeBetweenScansMillis) || this;
          return _this;
        }
        BrowserMultiFormatReader3.prototype.decodeBitmap = function(binaryBitmap) {
          return this.reader.decodeWithState(binaryBitmap);
        };
        return BrowserMultiFormatReader3;
      }(BrowserCodeReader_1.BrowserCodeReader)
    );
    exports.BrowserMultiFormatReader = BrowserMultiFormatReader2;
  }
});

// node_modules/@zxing/library/esm5/browser/BrowserQRCodeReader.js
var require_BrowserQRCodeReader = __commonJS({
  "node_modules/@zxing/library/esm5/browser/BrowserQRCodeReader.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var BrowserCodeReader_1 = require_BrowserCodeReader();
    var QRCodeReader_1 = require_QRCodeReader();
    var BrowserQRCodeReader = (
      /** @class */
      function(_super) {
        __extends(BrowserQRCodeReader2, _super);
        function BrowserQRCodeReader2(timeBetweenScansMillis) {
          if (timeBetweenScansMillis === void 0) {
            timeBetweenScansMillis = 500;
          }
          return _super.call(this, new QRCodeReader_1.default(), timeBetweenScansMillis) || this;
        }
        return BrowserQRCodeReader2;
      }(BrowserCodeReader_1.BrowserCodeReader)
    );
    exports.BrowserQRCodeReader = BrowserQRCodeReader;
  }
});

// node_modules/@zxing/library/esm5/core/EncodeHintType.js
var require_EncodeHintType = __commonJS({
  "node_modules/@zxing/library/esm5/core/EncodeHintType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EncodeHintType;
    (function(EncodeHintType2) {
      EncodeHintType2[EncodeHintType2["ERROR_CORRECTION"] = 0] = "ERROR_CORRECTION";
      EncodeHintType2[EncodeHintType2["CHARACTER_SET"] = 1] = "CHARACTER_SET";
      EncodeHintType2[EncodeHintType2["DATA_MATRIX_SHAPE"] = 2] = "DATA_MATRIX_SHAPE";
      EncodeHintType2[EncodeHintType2["MIN_SIZE"] = 3] = "MIN_SIZE";
      EncodeHintType2[EncodeHintType2["MAX_SIZE"] = 4] = "MAX_SIZE";
      EncodeHintType2[EncodeHintType2["MARGIN"] = 5] = "MARGIN";
      EncodeHintType2[EncodeHintType2["PDF417_COMPACT"] = 6] = "PDF417_COMPACT";
      EncodeHintType2[EncodeHintType2["PDF417_COMPACTION"] = 7] = "PDF417_COMPACTION";
      EncodeHintType2[EncodeHintType2["PDF417_DIMENSIONS"] = 8] = "PDF417_DIMENSIONS";
      EncodeHintType2[EncodeHintType2["AZTEC_LAYERS"] = 9] = "AZTEC_LAYERS";
      EncodeHintType2[EncodeHintType2["QR_VERSION"] = 10] = "QR_VERSION";
    })(EncodeHintType || (EncodeHintType = {}));
    exports.default = EncodeHintType;
  }
});

// node_modules/@zxing/library/esm5/core/common/reedsolomon/ReedSolomonEncoder.js
var require_ReedSolomonEncoder = __commonJS({
  "node_modules/@zxing/library/esm5/core/common/reedsolomon/ReedSolomonEncoder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GenericGFPoly_1 = require_GenericGFPoly();
    var System_1 = require_System();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var ReedSolomonEncoder = (
      /** @class */
      function() {
        function ReedSolomonEncoder2(field) {
          this.field = field;
          this.cachedGenerators = [];
          this.cachedGenerators.push(new GenericGFPoly_1.default(field, Int32Array.from([1])));
        }
        ReedSolomonEncoder2.prototype.buildGenerator = function(degree) {
          var cachedGenerators = this.cachedGenerators;
          if (degree >= cachedGenerators.length) {
            var lastGenerator = cachedGenerators[cachedGenerators.length - 1];
            var field = this.field;
            for (var d = cachedGenerators.length; d <= degree; d++) {
              var nextGenerator = lastGenerator.multiply(new GenericGFPoly_1.default(field, Int32Array.from([1, field.exp(d - 1 + field.getGeneratorBase())])));
              cachedGenerators.push(nextGenerator);
              lastGenerator = nextGenerator;
            }
          }
          return cachedGenerators[degree];
        };
        ReedSolomonEncoder2.prototype.encode = function(toEncode, ecBytes) {
          if (ecBytes === 0) {
            throw new IllegalArgumentException_1.default("No error correction bytes");
          }
          var dataBytes = toEncode.length - ecBytes;
          if (dataBytes <= 0) {
            throw new IllegalArgumentException_1.default("No data bytes provided");
          }
          var generator = this.buildGenerator(ecBytes);
          var infoCoefficients = new Int32Array(dataBytes);
          System_1.default.arraycopy(toEncode, 0, infoCoefficients, 0, dataBytes);
          var info = new GenericGFPoly_1.default(this.field, infoCoefficients);
          info = info.multiplyByMonomial(ecBytes, 1);
          var remainder = info.divide(generator)[1];
          var coefficients = remainder.getCoefficients();
          var numZeroCoefficients = ecBytes - coefficients.length;
          for (var i = 0; i < numZeroCoefficients; i++) {
            toEncode[dataBytes + i] = 0;
          }
          System_1.default.arraycopy(coefficients, 0, toEncode, dataBytes + numZeroCoefficients, coefficients.length);
        };
        return ReedSolomonEncoder2;
      }()
    );
    exports.default = ReedSolomonEncoder;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/encoder/MaskUtil.js
var require_MaskUtil = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/encoder/MaskUtil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var MaskUtil = (
      /** @class */
      function() {
        function MaskUtil2() {
        }
        MaskUtil2.applyMaskPenaltyRule1 = function(matrix) {
          return MaskUtil2.applyMaskPenaltyRule1Internal(matrix, true) + MaskUtil2.applyMaskPenaltyRule1Internal(matrix, false);
        };
        MaskUtil2.applyMaskPenaltyRule2 = function(matrix) {
          var penalty = 0;
          var array = matrix.getArray();
          var width = matrix.getWidth();
          var height = matrix.getHeight();
          for (var y = 0; y < height - 1; y++) {
            var arrayY = array[y];
            for (var x = 0; x < width - 1; x++) {
              var value = arrayY[x];
              if (value === arrayY[x + 1] && value === array[y + 1][x] && value === array[y + 1][x + 1]) {
                penalty++;
              }
            }
          }
          return MaskUtil2.N2 * penalty;
        };
        MaskUtil2.applyMaskPenaltyRule3 = function(matrix) {
          var numPenalties = 0;
          var array = matrix.getArray();
          var width = matrix.getWidth();
          var height = matrix.getHeight();
          for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
              var arrayY = array[y];
              if (x + 6 < width && arrayY[x] === 1 && arrayY[x + 1] === 0 && arrayY[x + 2] === 1 && arrayY[x + 3] === 1 && arrayY[x + 4] === 1 && arrayY[x + 5] === 0 && arrayY[x + 6] === 1 && (MaskUtil2.isWhiteHorizontal(arrayY, x - 4, x) || MaskUtil2.isWhiteHorizontal(arrayY, x + 7, x + 11))) {
                numPenalties++;
              }
              if (y + 6 < height && array[y][x] === 1 && array[y + 1][x] === 0 && array[y + 2][x] === 1 && array[y + 3][x] === 1 && array[y + 4][x] === 1 && array[y + 5][x] === 0 && array[y + 6][x] === 1 && (MaskUtil2.isWhiteVertical(array, x, y - 4, y) || MaskUtil2.isWhiteVertical(array, x, y + 7, y + 11))) {
                numPenalties++;
              }
            }
          }
          return numPenalties * MaskUtil2.N3;
        };
        MaskUtil2.isWhiteHorizontal = function(rowArray, from, to) {
          from = Math.max(from, 0);
          to = Math.min(to, rowArray.length);
          for (var i = from; i < to; i++) {
            if (rowArray[i] === 1) {
              return false;
            }
          }
          return true;
        };
        MaskUtil2.isWhiteVertical = function(array, col, from, to) {
          from = Math.max(from, 0);
          to = Math.min(to, array.length);
          for (var i = from; i < to; i++) {
            if (array[i][col] === 1) {
              return false;
            }
          }
          return true;
        };
        MaskUtil2.applyMaskPenaltyRule4 = function(matrix) {
          var numDarkCells = 0;
          var array = matrix.getArray();
          var width = matrix.getWidth();
          var height = matrix.getHeight();
          for (var y = 0; y < height; y++) {
            var arrayY = array[y];
            for (var x = 0; x < width; x++) {
              if (arrayY[x] === 1) {
                numDarkCells++;
              }
            }
          }
          var numTotalCells = matrix.getHeight() * matrix.getWidth();
          var fivePercentVariances = Math.floor(Math.abs(numDarkCells * 2 - numTotalCells) * 10 / numTotalCells);
          return fivePercentVariances * MaskUtil2.N4;
        };
        MaskUtil2.getDataMaskBit = function(maskPattern, x, y) {
          var intermediate;
          var temp;
          switch (maskPattern) {
            case 0:
              intermediate = y + x & 1;
              break;
            case 1:
              intermediate = y & 1;
              break;
            case 2:
              intermediate = x % 3;
              break;
            case 3:
              intermediate = (y + x) % 3;
              break;
            case 4:
              intermediate = Math.floor(y / 2) + Math.floor(x / 3) & 1;
              break;
            case 5:
              temp = y * x;
              intermediate = (temp & 1) + temp % 3;
              break;
            case 6:
              temp = y * x;
              intermediate = (temp & 1) + temp % 3 & 1;
              break;
            case 7:
              temp = y * x;
              intermediate = temp % 3 + (y + x & 1) & 1;
              break;
            default:
              throw new IllegalArgumentException_1.default("Invalid mask pattern: " + maskPattern);
          }
          return intermediate === 0;
        };
        MaskUtil2.applyMaskPenaltyRule1Internal = function(matrix, isHorizontal) {
          var penalty = 0;
          var iLimit = isHorizontal ? matrix.getHeight() : matrix.getWidth();
          var jLimit = isHorizontal ? matrix.getWidth() : matrix.getHeight();
          var array = matrix.getArray();
          for (var i = 0; i < iLimit; i++) {
            var numSameBitCells = 0;
            var prevBit = -1;
            for (var j = 0; j < jLimit; j++) {
              var bit = isHorizontal ? array[i][j] : array[j][i];
              if (bit === prevBit) {
                numSameBitCells++;
              } else {
                if (numSameBitCells >= 5) {
                  penalty += MaskUtil2.N1 + (numSameBitCells - 5);
                }
                numSameBitCells = 1;
                prevBit = bit;
              }
            }
            if (numSameBitCells >= 5) {
              penalty += MaskUtil2.N1 + (numSameBitCells - 5);
            }
          }
          return penalty;
        };
        MaskUtil2.N1 = 3;
        MaskUtil2.N2 = 3;
        MaskUtil2.N3 = 40;
        MaskUtil2.N4 = 10;
        return MaskUtil2;
      }()
    );
    exports.default = MaskUtil;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/encoder/ByteMatrix.js
var require_ByteMatrix = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/encoder/ByteMatrix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Arrays_1 = require_Arrays();
    var StringBuilder_1 = require_StringBuilder();
    var ByteMatrix = (
      /** @class */
      function() {
        function ByteMatrix2(width, height) {
          this.width = width;
          this.height = height;
          var bytes = new Array(height);
          for (var i = 0; i !== height; i++) {
            bytes[i] = new Uint8Array(width);
          }
          this.bytes = bytes;
        }
        ByteMatrix2.prototype.getHeight = function() {
          return this.height;
        };
        ByteMatrix2.prototype.getWidth = function() {
          return this.width;
        };
        ByteMatrix2.prototype.get = function(x, y) {
          return this.bytes[y][x];
        };
        ByteMatrix2.prototype.getArray = function() {
          return this.bytes;
        };
        ByteMatrix2.prototype.setNumber = function(x, y, value) {
          this.bytes[y][x] = value;
        };
        ByteMatrix2.prototype.setBoolean = function(x, y, value) {
          this.bytes[y][x] = /*(byte) */
          value ? 1 : 0;
        };
        ByteMatrix2.prototype.clear = function(value) {
          for (var _i = 0, _a = this.bytes; _i < _a.length; _i++) {
            var aByte = _a[_i];
            Arrays_1.default.fillUint8Array(aByte, value);
          }
        };
        ByteMatrix2.prototype.equals = function(o) {
          if (!(o instanceof ByteMatrix2)) {
            return false;
          }
          var other = o;
          if (this.width !== other.width) {
            return false;
          }
          if (this.height !== other.height) {
            return false;
          }
          for (var y = 0, height = this.height; y < height; ++y) {
            var bytesY = this.bytes[y];
            var otherBytesY = other.bytes[y];
            for (var x = 0, width = this.width; x < width; ++x) {
              if (bytesY[x] !== otherBytesY[x]) {
                return false;
              }
            }
          }
          return true;
        };
        ByteMatrix2.prototype.toString = function() {
          var result = new StringBuilder_1.default();
          for (var y = 0, height = this.height; y < height; ++y) {
            var bytesY = this.bytes[y];
            for (var x = 0, width = this.width; x < width; ++x) {
              switch (bytesY[x]) {
                case 0:
                  result.append(" 0");
                  break;
                case 1:
                  result.append(" 1");
                  break;
                default:
                  result.append("  ");
                  break;
              }
            }
            result.append("\n");
          }
          return result.toString();
        };
        return ByteMatrix2;
      }()
    );
    exports.default = ByteMatrix;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/encoder/QRCode.js
var require_QRCode = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/encoder/QRCode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StringBuilder_1 = require_StringBuilder();
    var QRCode = (
      /** @class */
      function() {
        function QRCode2() {
          this.maskPattern = -1;
        }
        QRCode2.prototype.getMode = function() {
          return this.mode;
        };
        QRCode2.prototype.getECLevel = function() {
          return this.ecLevel;
        };
        QRCode2.prototype.getVersion = function() {
          return this.version;
        };
        QRCode2.prototype.getMaskPattern = function() {
          return this.maskPattern;
        };
        QRCode2.prototype.getMatrix = function() {
          return this.matrix;
        };
        QRCode2.prototype.toString = function() {
          var result = new StringBuilder_1.default();
          result.append("<<\n");
          result.append(" mode: ");
          result.append(this.mode ? this.mode.toString() : "null");
          result.append("\n ecLevel: ");
          result.append(this.ecLevel ? this.ecLevel.toString() : "null");
          result.append("\n version: ");
          result.append(this.version ? this.version.toString() : "null");
          result.append("\n maskPattern: ");
          result.append(this.maskPattern.toString());
          if (this.matrix) {
            result.append("\n matrix:\n");
            result.append(this.matrix.toString());
          } else {
            result.append("\n matrix: null\n");
          }
          result.append(">>\n");
          return result.toString();
        };
        QRCode2.prototype.setMode = function(value) {
          this.mode = value;
        };
        QRCode2.prototype.setECLevel = function(value) {
          this.ecLevel = value;
        };
        QRCode2.prototype.setVersion = function(version) {
          this.version = version;
        };
        QRCode2.prototype.setMaskPattern = function(value) {
          this.maskPattern = value;
        };
        QRCode2.prototype.setMatrix = function(value) {
          this.matrix = value;
        };
        QRCode2.isValidMaskPattern = function(maskPattern) {
          return maskPattern >= 0 && maskPattern < QRCode2.NUM_MASK_PATTERNS;
        };
        QRCode2.NUM_MASK_PATTERNS = 8;
        return QRCode2;
      }()
    );
    exports.default = QRCode;
  }
});

// node_modules/@zxing/library/esm5/core/WriterException.js
var require_WriterException = __commonJS({
  "node_modules/@zxing/library/esm5/core/WriterException.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Exception_1 = require_Exception();
    var WriterException = (
      /** @class */
      function(_super) {
        __extends(WriterException2, _super);
        function WriterException2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return WriterException2;
      }(Exception_1.default)
    );
    exports.default = WriterException;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/encoder/MatrixUtil.js
var require_MatrixUtil = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/encoder/MatrixUtil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BitArray_1 = require_BitArray();
    var Integer_1 = require_Integer();
    var QRCode_1 = require_QRCode();
    var MaskUtil_1 = require_MaskUtil();
    var WriterException_1 = require_WriterException();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var MatrixUtil = (
      /** @class */
      function() {
        function MatrixUtil2() {
        }
        MatrixUtil2.clearMatrix = function(matrix) {
          matrix.clear(
            /*(byte) */
            /*-1*/
            255
          );
        };
        MatrixUtil2.buildMatrix = function(dataBits, ecLevel, version, maskPattern, matrix) {
          MatrixUtil2.clearMatrix(matrix);
          MatrixUtil2.embedBasicPatterns(version, matrix);
          MatrixUtil2.embedTypeInfo(ecLevel, maskPattern, matrix);
          MatrixUtil2.maybeEmbedVersionInfo(version, matrix);
          MatrixUtil2.embedDataBits(dataBits, maskPattern, matrix);
        };
        MatrixUtil2.embedBasicPatterns = function(version, matrix) {
          MatrixUtil2.embedPositionDetectionPatternsAndSeparators(matrix);
          MatrixUtil2.embedDarkDotAtLeftBottomCorner(matrix);
          MatrixUtil2.maybeEmbedPositionAdjustmentPatterns(version, matrix);
          MatrixUtil2.embedTimingPatterns(matrix);
        };
        MatrixUtil2.embedTypeInfo = function(ecLevel, maskPattern, matrix) {
          var typeInfoBits = new BitArray_1.default();
          MatrixUtil2.makeTypeInfoBits(ecLevel, maskPattern, typeInfoBits);
          for (var i = 0, size = typeInfoBits.getSize(); i < size; ++i) {
            var bit = typeInfoBits.get(typeInfoBits.getSize() - 1 - i);
            var coordinates = MatrixUtil2.TYPE_INFO_COORDINATES[i];
            var x1 = coordinates[0];
            var y1 = coordinates[1];
            matrix.setBoolean(x1, y1, bit);
            if (i < 8) {
              var x2 = matrix.getWidth() - i - 1;
              var y2 = 8;
              matrix.setBoolean(x2, y2, bit);
            } else {
              var x2 = 8;
              var y2 = matrix.getHeight() - 7 + (i - 8);
              matrix.setBoolean(x2, y2, bit);
            }
          }
        };
        MatrixUtil2.maybeEmbedVersionInfo = function(version, matrix) {
          if (version.getVersionNumber() < 7) {
            return;
          }
          var versionInfoBits = new BitArray_1.default();
          MatrixUtil2.makeVersionInfoBits(version, versionInfoBits);
          var bitIndex = 6 * 3 - 1;
          for (var i = 0; i < 6; ++i) {
            for (var j = 0; j < 3; ++j) {
              var bit = versionInfoBits.get(bitIndex);
              bitIndex--;
              matrix.setBoolean(i, matrix.getHeight() - 11 + j, bit);
              matrix.setBoolean(matrix.getHeight() - 11 + j, i, bit);
            }
          }
        };
        MatrixUtil2.embedDataBits = function(dataBits, maskPattern, matrix) {
          var bitIndex = 0;
          var direction = -1;
          var x = matrix.getWidth() - 1;
          var y = matrix.getHeight() - 1;
          while (x > 0) {
            if (x === 6) {
              x -= 1;
            }
            while (y >= 0 && y < matrix.getHeight()) {
              for (var i = 0; i < 2; ++i) {
                var xx = x - i;
                if (!MatrixUtil2.isEmpty(matrix.get(xx, y))) {
                  continue;
                }
                var bit = void 0;
                if (bitIndex < dataBits.getSize()) {
                  bit = dataBits.get(bitIndex);
                  ++bitIndex;
                } else {
                  bit = false;
                }
                if (maskPattern !== 255 && MaskUtil_1.default.getDataMaskBit(maskPattern, xx, y)) {
                  bit = !bit;
                }
                matrix.setBoolean(xx, y, bit);
              }
              y += direction;
            }
            direction = -direction;
            y += direction;
            x -= 2;
          }
          if (bitIndex !== dataBits.getSize()) {
            throw new WriterException_1.default("Not all bits consumed: " + bitIndex + "/" + dataBits.getSize());
          }
        };
        MatrixUtil2.findMSBSet = function(value) {
          return 32 - Integer_1.default.numberOfLeadingZeros(value);
        };
        MatrixUtil2.calculateBCHCode = function(value, poly) {
          if (poly === 0) {
            throw new IllegalArgumentException_1.default("0 polynomial");
          }
          var msbSetInPoly = MatrixUtil2.findMSBSet(poly);
          value <<= msbSetInPoly - 1;
          while (MatrixUtil2.findMSBSet(value) >= msbSetInPoly) {
            value ^= poly << MatrixUtil2.findMSBSet(value) - msbSetInPoly;
          }
          return value;
        };
        MatrixUtil2.makeTypeInfoBits = function(ecLevel, maskPattern, bits) {
          if (!QRCode_1.default.isValidMaskPattern(maskPattern)) {
            throw new WriterException_1.default("Invalid mask pattern");
          }
          var typeInfo = ecLevel.getBits() << 3 | maskPattern;
          bits.appendBits(typeInfo, 5);
          var bchCode = MatrixUtil2.calculateBCHCode(typeInfo, MatrixUtil2.TYPE_INFO_POLY);
          bits.appendBits(bchCode, 10);
          var maskBits = new BitArray_1.default();
          maskBits.appendBits(MatrixUtil2.TYPE_INFO_MASK_PATTERN, 15);
          bits.xor(maskBits);
          if (bits.getSize() !== 15) {
            throw new WriterException_1.default("should not happen but we got: " + bits.getSize());
          }
        };
        MatrixUtil2.makeVersionInfoBits = function(version, bits) {
          bits.appendBits(version.getVersionNumber(), 6);
          var bchCode = MatrixUtil2.calculateBCHCode(version.getVersionNumber(), MatrixUtil2.VERSION_INFO_POLY);
          bits.appendBits(bchCode, 12);
          if (bits.getSize() !== 18) {
            throw new WriterException_1.default("should not happen but we got: " + bits.getSize());
          }
        };
        MatrixUtil2.isEmpty = function(value) {
          return value === 255;
        };
        MatrixUtil2.embedTimingPatterns = function(matrix) {
          for (var i = 8; i < matrix.getWidth() - 8; ++i) {
            var bit = (i + 1) % 2;
            if (MatrixUtil2.isEmpty(matrix.get(i, 6))) {
              matrix.setNumber(i, 6, bit);
            }
            if (MatrixUtil2.isEmpty(matrix.get(6, i))) {
              matrix.setNumber(6, i, bit);
            }
          }
        };
        MatrixUtil2.embedDarkDotAtLeftBottomCorner = function(matrix) {
          if (matrix.get(8, matrix.getHeight() - 8) === 0) {
            throw new WriterException_1.default();
          }
          matrix.setNumber(8, matrix.getHeight() - 8, 1);
        };
        MatrixUtil2.embedHorizontalSeparationPattern = function(xStart, yStart, matrix) {
          for (var x = 0; x < 8; ++x) {
            if (!MatrixUtil2.isEmpty(matrix.get(xStart + x, yStart))) {
              throw new WriterException_1.default();
            }
            matrix.setNumber(xStart + x, yStart, 0);
          }
        };
        MatrixUtil2.embedVerticalSeparationPattern = function(xStart, yStart, matrix) {
          for (var y = 0; y < 7; ++y) {
            if (!MatrixUtil2.isEmpty(matrix.get(xStart, yStart + y))) {
              throw new WriterException_1.default();
            }
            matrix.setNumber(xStart, yStart + y, 0);
          }
        };
        MatrixUtil2.embedPositionAdjustmentPattern = function(xStart, yStart, matrix) {
          for (var y = 0; y < 5; ++y) {
            var patternY = MatrixUtil2.POSITION_ADJUSTMENT_PATTERN[y];
            for (var x = 0; x < 5; ++x) {
              matrix.setNumber(xStart + x, yStart + y, patternY[x]);
            }
          }
        };
        MatrixUtil2.embedPositionDetectionPattern = function(xStart, yStart, matrix) {
          for (var y = 0; y < 7; ++y) {
            var patternY = MatrixUtil2.POSITION_DETECTION_PATTERN[y];
            for (var x = 0; x < 7; ++x) {
              matrix.setNumber(xStart + x, yStart + y, patternY[x]);
            }
          }
        };
        MatrixUtil2.embedPositionDetectionPatternsAndSeparators = function(matrix) {
          var pdpWidth = MatrixUtil2.POSITION_DETECTION_PATTERN[0].length;
          MatrixUtil2.embedPositionDetectionPattern(0, 0, matrix);
          MatrixUtil2.embedPositionDetectionPattern(matrix.getWidth() - pdpWidth, 0, matrix);
          MatrixUtil2.embedPositionDetectionPattern(0, matrix.getWidth() - pdpWidth, matrix);
          var hspWidth = 8;
          MatrixUtil2.embedHorizontalSeparationPattern(0, hspWidth - 1, matrix);
          MatrixUtil2.embedHorizontalSeparationPattern(matrix.getWidth() - hspWidth, hspWidth - 1, matrix);
          MatrixUtil2.embedHorizontalSeparationPattern(0, matrix.getWidth() - hspWidth, matrix);
          var vspSize = 7;
          MatrixUtil2.embedVerticalSeparationPattern(vspSize, 0, matrix);
          MatrixUtil2.embedVerticalSeparationPattern(matrix.getHeight() - vspSize - 1, 0, matrix);
          MatrixUtil2.embedVerticalSeparationPattern(vspSize, matrix.getHeight() - vspSize, matrix);
        };
        MatrixUtil2.maybeEmbedPositionAdjustmentPatterns = function(version, matrix) {
          if (version.getVersionNumber() < 2) {
            return;
          }
          var index = version.getVersionNumber() - 1;
          var coordinates = MatrixUtil2.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[index];
          for (var i = 0, length_1 = coordinates.length; i !== length_1; i++) {
            var y = coordinates[i];
            if (y >= 0) {
              for (var j = 0; j !== length_1; j++) {
                var x = coordinates[j];
                if (x >= 0 && MatrixUtil2.isEmpty(matrix.get(x, y))) {
                  MatrixUtil2.embedPositionAdjustmentPattern(x - 2, y - 2, matrix);
                }
              }
            }
          }
        };
        MatrixUtil2.POSITION_DETECTION_PATTERN = Array.from([
          Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
          Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
          Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
          Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
          Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
          Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
          Int32Array.from([1, 1, 1, 1, 1, 1, 1])
        ]);
        MatrixUtil2.POSITION_ADJUSTMENT_PATTERN = Array.from([
          Int32Array.from([1, 1, 1, 1, 1]),
          Int32Array.from([1, 0, 0, 0, 1]),
          Int32Array.from([1, 0, 1, 0, 1]),
          Int32Array.from([1, 0, 0, 0, 1]),
          Int32Array.from([1, 1, 1, 1, 1])
        ]);
        MatrixUtil2.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
          Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
          Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
          Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
          Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
          Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
          Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
          Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
          Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
          Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
          Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
          Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
          Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
          Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
          Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
          Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
          Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
          Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
          Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
          Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
          Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
          Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
          Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
          Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
          Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
          Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
          Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
          Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
          Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
          Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
          Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
          Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
          Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
          Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
          Int32Array.from([6, 30, 58, 86, 114, 142, 170])
        ]);
        MatrixUtil2.TYPE_INFO_COORDINATES = Array.from([
          Int32Array.from([8, 0]),
          Int32Array.from([8, 1]),
          Int32Array.from([8, 2]),
          Int32Array.from([8, 3]),
          Int32Array.from([8, 4]),
          Int32Array.from([8, 5]),
          Int32Array.from([8, 7]),
          Int32Array.from([8, 8]),
          Int32Array.from([7, 8]),
          Int32Array.from([5, 8]),
          Int32Array.from([4, 8]),
          Int32Array.from([3, 8]),
          Int32Array.from([2, 8]),
          Int32Array.from([1, 8]),
          Int32Array.from([0, 8])
        ]);
        MatrixUtil2.VERSION_INFO_POLY = 7973;
        MatrixUtil2.TYPE_INFO_POLY = 1335;
        MatrixUtil2.TYPE_INFO_MASK_PATTERN = 21522;
        return MatrixUtil2;
      }()
    );
    exports.default = MatrixUtil;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/encoder/BlockPair.js
var require_BlockPair = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/encoder/BlockPair.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlockPair = (
      /** @class */
      function() {
        function BlockPair2(dataBytes, errorCorrectionBytes) {
          this.dataBytes = dataBytes;
          this.errorCorrectionBytes = errorCorrectionBytes;
        }
        BlockPair2.prototype.getDataBytes = function() {
          return this.dataBytes;
        };
        BlockPair2.prototype.getErrorCorrectionBytes = function() {
          return this.errorCorrectionBytes;
        };
        return BlockPair2;
      }()
    );
    exports.default = BlockPair;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/encoder/Encoder.js
var require_Encoder = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/encoder/Encoder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EncodeHintType_1 = require_EncodeHintType();
    var BitArray_1 = require_BitArray();
    var CharacterSetECI_1 = require_CharacterSetECI();
    var GenericGF_1 = require_GenericGF();
    var ReedSolomonEncoder_1 = require_ReedSolomonEncoder();
    var Mode_1 = require_Mode();
    var Version_1 = require_Version2();
    var MaskUtil_1 = require_MaskUtil();
    var ByteMatrix_1 = require_ByteMatrix();
    var QRCode_1 = require_QRCode();
    var MatrixUtil_1 = require_MatrixUtil();
    var StringEncoding_1 = require_StringEncoding();
    var BlockPair_1 = require_BlockPair();
    var WriterException_1 = require_WriterException();
    var Encoder = (
      /** @class */
      function() {
        function Encoder2() {
        }
        Encoder2.calculateMaskPenalty = function(matrix) {
          return MaskUtil_1.default.applyMaskPenaltyRule1(matrix) + MaskUtil_1.default.applyMaskPenaltyRule2(matrix) + MaskUtil_1.default.applyMaskPenaltyRule3(matrix) + MaskUtil_1.default.applyMaskPenaltyRule4(matrix);
        };
        Encoder2.encode = function(content, ecLevel, hints) {
          if (hints === void 0) {
            hints = null;
          }
          var encoding = Encoder2.DEFAULT_BYTE_MODE_ENCODING;
          var hasEncodingHint = hints !== null && void 0 !== hints.get(EncodeHintType_1.default.CHARACTER_SET);
          if (hasEncodingHint) {
            encoding = hints.get(EncodeHintType_1.default.CHARACTER_SET).toString();
          }
          var mode = this.chooseMode(content, encoding);
          var headerBits = new BitArray_1.default();
          if (mode === Mode_1.default.BYTE && (hasEncodingHint || Encoder2.DEFAULT_BYTE_MODE_ENCODING !== encoding)) {
            var eci = CharacterSetECI_1.default.getCharacterSetECIByName(encoding);
            if (eci !== void 0) {
              this.appendECI(eci, headerBits);
            }
          }
          this.appendModeInfo(mode, headerBits);
          var dataBits = new BitArray_1.default();
          this.appendBytes(content, mode, dataBits, encoding);
          var version;
          if (hints !== null && void 0 !== hints.get(EncodeHintType_1.default.QR_VERSION)) {
            var versionNumber = Number.parseInt(hints.get(EncodeHintType_1.default.QR_VERSION).toString(), 10);
            version = Version_1.default.getVersionForNumber(versionNumber);
            var bitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, version);
            if (!this.willFit(bitsNeeded, version, ecLevel)) {
              throw new WriterException_1.default("Data too big for requested version");
            }
          } else {
            version = this.recommendVersion(ecLevel, mode, headerBits, dataBits);
          }
          var headerAndDataBits = new BitArray_1.default();
          headerAndDataBits.appendBitArray(headerBits);
          var numLetters = mode === Mode_1.default.BYTE ? dataBits.getSizeInBytes() : content.length;
          this.appendLengthInfo(numLetters, version, mode, headerAndDataBits);
          headerAndDataBits.appendBitArray(dataBits);
          var ecBlocks = version.getECBlocksForLevel(ecLevel);
          var numDataBytes = version.getTotalCodewords() - ecBlocks.getTotalECCodewords();
          this.terminateBits(numDataBytes, headerAndDataBits);
          var finalBits = this.interleaveWithECBytes(headerAndDataBits, version.getTotalCodewords(), numDataBytes, ecBlocks.getNumBlocks());
          var qrCode = new QRCode_1.default();
          qrCode.setECLevel(ecLevel);
          qrCode.setMode(mode);
          qrCode.setVersion(version);
          var dimension = version.getDimensionForVersion();
          var matrix = new ByteMatrix_1.default(dimension, dimension);
          var maskPattern = this.chooseMaskPattern(finalBits, ecLevel, version, matrix);
          qrCode.setMaskPattern(maskPattern);
          MatrixUtil_1.default.buildMatrix(finalBits, ecLevel, version, maskPattern, matrix);
          qrCode.setMatrix(matrix);
          return qrCode;
        };
        Encoder2.recommendVersion = function(ecLevel, mode, headerBits, dataBits) {
          var provisionalBitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, Version_1.default.getVersionForNumber(1));
          var provisionalVersion = this.chooseVersion(provisionalBitsNeeded, ecLevel);
          var bitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, provisionalVersion);
          return this.chooseVersion(bitsNeeded, ecLevel);
        };
        Encoder2.calculateBitsNeeded = function(mode, headerBits, dataBits, version) {
          return headerBits.getSize() + mode.getCharacterCountBits(version) + dataBits.getSize();
        };
        Encoder2.getAlphanumericCode = function(code) {
          if (code < Encoder2.ALPHANUMERIC_TABLE.length) {
            return Encoder2.ALPHANUMERIC_TABLE[code];
          }
          return -1;
        };
        Encoder2.chooseMode = function(content, encoding) {
          if (encoding === void 0) {
            encoding = null;
          }
          if (CharacterSetECI_1.default.SJIS.getName() === encoding && this.isOnlyDoubleByteKanji(content)) {
            return Mode_1.default.KANJI;
          }
          var hasNumeric = false;
          var hasAlphanumeric = false;
          for (var i = 0, length_1 = content.length; i < length_1; ++i) {
            var c = content.charAt(i);
            if (Encoder2.isDigit(c)) {
              hasNumeric = true;
            } else if (this.getAlphanumericCode(c.charCodeAt(0)) !== -1) {
              hasAlphanumeric = true;
            } else {
              return Mode_1.default.BYTE;
            }
          }
          if (hasAlphanumeric) {
            return Mode_1.default.ALPHANUMERIC;
          }
          if (hasNumeric) {
            return Mode_1.default.NUMERIC;
          }
          return Mode_1.default.BYTE;
        };
        Encoder2.isOnlyDoubleByteKanji = function(content) {
          var bytes;
          try {
            bytes = StringEncoding_1.default.encode(content, CharacterSetECI_1.default.SJIS);
          } catch (ignored) {
            return false;
          }
          var length = bytes.length;
          if (length % 2 !== 0) {
            return false;
          }
          for (var i = 0; i < length; i += 2) {
            var byte1 = bytes[i] & 255;
            if ((byte1 < 129 || byte1 > 159) && (byte1 < 224 || byte1 > 235)) {
              return false;
            }
          }
          return true;
        };
        Encoder2.chooseMaskPattern = function(bits, ecLevel, version, matrix) {
          var minPenalty = Number.MAX_SAFE_INTEGER;
          var bestMaskPattern = -1;
          for (var maskPattern = 0; maskPattern < QRCode_1.default.NUM_MASK_PATTERNS; maskPattern++) {
            MatrixUtil_1.default.buildMatrix(bits, ecLevel, version, maskPattern, matrix);
            var penalty = this.calculateMaskPenalty(matrix);
            if (penalty < minPenalty) {
              minPenalty = penalty;
              bestMaskPattern = maskPattern;
            }
          }
          return bestMaskPattern;
        };
        Encoder2.chooseVersion = function(numInputBits, ecLevel) {
          for (var versionNum = 1; versionNum <= 40; versionNum++) {
            var version = Version_1.default.getVersionForNumber(versionNum);
            if (Encoder2.willFit(numInputBits, version, ecLevel)) {
              return version;
            }
          }
          throw new WriterException_1.default("Data too big");
        };
        Encoder2.willFit = function(numInputBits, version, ecLevel) {
          var numBytes = version.getTotalCodewords();
          var ecBlocks = version.getECBlocksForLevel(ecLevel);
          var numEcBytes = ecBlocks.getTotalECCodewords();
          var numDataBytes = numBytes - numEcBytes;
          var totalInputBytes = (numInputBits + 7) / 8;
          return numDataBytes >= totalInputBytes;
        };
        Encoder2.terminateBits = function(numDataBytes, bits) {
          var capacity = numDataBytes * 8;
          if (bits.getSize() > capacity) {
            throw new WriterException_1.default("data bits cannot fit in the QR Code" + bits.getSize() + " > " + capacity);
          }
          for (var i = 0; i < 4 && bits.getSize() < capacity; ++i) {
            bits.appendBit(false);
          }
          var numBitsInLastByte = bits.getSize() & 7;
          if (numBitsInLastByte > 0) {
            for (var i = numBitsInLastByte; i < 8; i++) {
              bits.appendBit(false);
            }
          }
          var numPaddingBytes = numDataBytes - bits.getSizeInBytes();
          for (var i = 0; i < numPaddingBytes; ++i) {
            bits.appendBits((i & 1) === 0 ? 236 : 17, 8);
          }
          if (bits.getSize() !== capacity) {
            throw new WriterException_1.default("Bits size does not equal capacity");
          }
        };
        Encoder2.getNumDataBytesAndNumECBytesForBlockID = function(numTotalBytes, numDataBytes, numRSBlocks, blockID, numDataBytesInBlock, numECBytesInBlock) {
          if (blockID >= numRSBlocks) {
            throw new WriterException_1.default("Block ID too large");
          }
          var numRsBlocksInGroup2 = numTotalBytes % numRSBlocks;
          var numRsBlocksInGroup1 = numRSBlocks - numRsBlocksInGroup2;
          var numTotalBytesInGroup1 = Math.floor(numTotalBytes / numRSBlocks);
          var numTotalBytesInGroup2 = numTotalBytesInGroup1 + 1;
          var numDataBytesInGroup1 = Math.floor(numDataBytes / numRSBlocks);
          var numDataBytesInGroup2 = numDataBytesInGroup1 + 1;
          var numEcBytesInGroup1 = numTotalBytesInGroup1 - numDataBytesInGroup1;
          var numEcBytesInGroup2 = numTotalBytesInGroup2 - numDataBytesInGroup2;
          if (numEcBytesInGroup1 !== numEcBytesInGroup2) {
            throw new WriterException_1.default("EC bytes mismatch");
          }
          if (numRSBlocks !== numRsBlocksInGroup1 + numRsBlocksInGroup2) {
            throw new WriterException_1.default("RS blocks mismatch");
          }
          if (numTotalBytes !== (numDataBytesInGroup1 + numEcBytesInGroup1) * numRsBlocksInGroup1 + (numDataBytesInGroup2 + numEcBytesInGroup2) * numRsBlocksInGroup2) {
            throw new WriterException_1.default("Total bytes mismatch");
          }
          if (blockID < numRsBlocksInGroup1) {
            numDataBytesInBlock[0] = numDataBytesInGroup1;
            numECBytesInBlock[0] = numEcBytesInGroup1;
          } else {
            numDataBytesInBlock[0] = numDataBytesInGroup2;
            numECBytesInBlock[0] = numEcBytesInGroup2;
          }
        };
        Encoder2.interleaveWithECBytes = function(bits, numTotalBytes, numDataBytes, numRSBlocks) {
          if (bits.getSizeInBytes() !== numDataBytes) {
            throw new WriterException_1.default("Number of bits and data bytes does not match");
          }
          var dataBytesOffset = 0;
          var maxNumDataBytes = 0;
          var maxNumEcBytes = 0;
          var blocks = new Array();
          for (var i = 0; i < numRSBlocks; ++i) {
            var numDataBytesInBlock = new Int32Array(1);
            var numEcBytesInBlock = new Int32Array(1);
            Encoder2.getNumDataBytesAndNumECBytesForBlockID(numTotalBytes, numDataBytes, numRSBlocks, i, numDataBytesInBlock, numEcBytesInBlock);
            var size = numDataBytesInBlock[0];
            var dataBytes = new Uint8Array(size);
            bits.toBytes(8 * dataBytesOffset, dataBytes, 0, size);
            var ecBytes = Encoder2.generateECBytes(dataBytes, numEcBytesInBlock[0]);
            blocks.push(new BlockPair_1.default(dataBytes, ecBytes));
            maxNumDataBytes = Math.max(maxNumDataBytes, size);
            maxNumEcBytes = Math.max(maxNumEcBytes, ecBytes.length);
            dataBytesOffset += numDataBytesInBlock[0];
          }
          if (numDataBytes !== dataBytesOffset) {
            throw new WriterException_1.default("Data bytes does not match offset");
          }
          var result = new BitArray_1.default();
          for (var i = 0; i < maxNumDataBytes; ++i) {
            for (var _i = 0, blocks_1 = blocks; _i < blocks_1.length; _i++) {
              var block = blocks_1[_i];
              var dataBytes = block.getDataBytes();
              if (i < dataBytes.length) {
                result.appendBits(dataBytes[i], 8);
              }
            }
          }
          for (var i = 0; i < maxNumEcBytes; ++i) {
            for (var _a = 0, blocks_2 = blocks; _a < blocks_2.length; _a++) {
              var block = blocks_2[_a];
              var ecBytes = block.getErrorCorrectionBytes();
              if (i < ecBytes.length) {
                result.appendBits(ecBytes[i], 8);
              }
            }
          }
          if (numTotalBytes !== result.getSizeInBytes()) {
            throw new WriterException_1.default("Interleaving error: " + numTotalBytes + " and " + result.getSizeInBytes() + " differ.");
          }
          return result;
        };
        Encoder2.generateECBytes = function(dataBytes, numEcBytesInBlock) {
          var numDataBytes = dataBytes.length;
          var toEncode = new Int32Array(numDataBytes + numEcBytesInBlock);
          for (var i = 0; i < numDataBytes; i++) {
            toEncode[i] = dataBytes[i] & 255;
          }
          new ReedSolomonEncoder_1.default(GenericGF_1.default.QR_CODE_FIELD_256).encode(toEncode, numEcBytesInBlock);
          var ecBytes = new Uint8Array(numEcBytesInBlock);
          for (var i = 0; i < numEcBytesInBlock; i++) {
            ecBytes[i] = /*(byte) */
            toEncode[numDataBytes + i];
          }
          return ecBytes;
        };
        Encoder2.appendModeInfo = function(mode, bits) {
          bits.appendBits(mode.getBits(), 4);
        };
        Encoder2.appendLengthInfo = function(numLetters, version, mode, bits) {
          var numBits = mode.getCharacterCountBits(version);
          if (numLetters >= 1 << numBits) {
            throw new WriterException_1.default(numLetters + " is bigger than " + ((1 << numBits) - 1));
          }
          bits.appendBits(numLetters, numBits);
        };
        Encoder2.appendBytes = function(content, mode, bits, encoding) {
          switch (mode) {
            case Mode_1.default.NUMERIC:
              Encoder2.appendNumericBytes(content, bits);
              break;
            case Mode_1.default.ALPHANUMERIC:
              Encoder2.appendAlphanumericBytes(content, bits);
              break;
            case Mode_1.default.BYTE:
              Encoder2.append8BitBytes(content, bits, encoding);
              break;
            case Mode_1.default.KANJI:
              Encoder2.appendKanjiBytes(content, bits);
              break;
            default:
              throw new WriterException_1.default("Invalid mode: " + mode);
          }
        };
        Encoder2.getDigit = function(singleCharacter) {
          return singleCharacter.charCodeAt(0) - 48;
        };
        Encoder2.isDigit = function(singleCharacter) {
          var cn = Encoder2.getDigit(singleCharacter);
          return cn >= 0 && cn <= 9;
        };
        Encoder2.appendNumericBytes = function(content, bits) {
          var length = content.length;
          var i = 0;
          while (i < length) {
            var num1 = Encoder2.getDigit(content.charAt(i));
            if (i + 2 < length) {
              var num2 = Encoder2.getDigit(content.charAt(i + 1));
              var num3 = Encoder2.getDigit(content.charAt(i + 2));
              bits.appendBits(num1 * 100 + num2 * 10 + num3, 10);
              i += 3;
            } else if (i + 1 < length) {
              var num2 = Encoder2.getDigit(content.charAt(i + 1));
              bits.appendBits(num1 * 10 + num2, 7);
              i += 2;
            } else {
              bits.appendBits(num1, 4);
              i++;
            }
          }
        };
        Encoder2.appendAlphanumericBytes = function(content, bits) {
          var length = content.length;
          var i = 0;
          while (i < length) {
            var code1 = Encoder2.getAlphanumericCode(content.charCodeAt(i));
            if (code1 === -1) {
              throw new WriterException_1.default();
            }
            if (i + 1 < length) {
              var code2 = Encoder2.getAlphanumericCode(content.charCodeAt(i + 1));
              if (code2 === -1) {
                throw new WriterException_1.default();
              }
              bits.appendBits(code1 * 45 + code2, 11);
              i += 2;
            } else {
              bits.appendBits(code1, 6);
              i++;
            }
          }
        };
        Encoder2.append8BitBytes = function(content, bits, encoding) {
          var bytes;
          try {
            bytes = StringEncoding_1.default.encode(content, encoding);
          } catch (uee) {
            throw new WriterException_1.default(uee);
          }
          for (var i = 0, length_2 = bytes.length; i !== length_2; i++) {
            var b = bytes[i];
            bits.appendBits(b, 8);
          }
        };
        Encoder2.appendKanjiBytes = function(content, bits) {
          var bytes;
          try {
            bytes = StringEncoding_1.default.encode(content, CharacterSetECI_1.default.SJIS);
          } catch (uee) {
            throw new WriterException_1.default(uee);
          }
          var length = bytes.length;
          for (var i = 0; i < length; i += 2) {
            var byte1 = bytes[i] & 255;
            var byte2 = bytes[i + 1] & 255;
            var code = byte1 << 8 & 4294967295 | byte2;
            var subtracted = -1;
            if (code >= 33088 && code <= 40956) {
              subtracted = code - 33088;
            } else if (code >= 57408 && code <= 60351) {
              subtracted = code - 49472;
            }
            if (subtracted === -1) {
              throw new WriterException_1.default("Invalid byte sequence");
            }
            var encoded = (subtracted >> 8) * 192 + (subtracted & 255);
            bits.appendBits(encoded, 13);
          }
        };
        Encoder2.appendECI = function(eci, bits) {
          bits.appendBits(Mode_1.default.ECI.getBits(), 4);
          bits.appendBits(eci.getValue(), 8);
        };
        Encoder2.ALPHANUMERIC_TABLE = Int32Array.from([
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          36,
          -1,
          -1,
          -1,
          37,
          38,
          -1,
          -1,
          -1,
          -1,
          39,
          40,
          -1,
          41,
          42,
          43,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          44,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          -1,
          -1,
          -1,
          -1,
          -1
        ]);
        Encoder2.DEFAULT_BYTE_MODE_ENCODING = CharacterSetECI_1.default.UTF8.getName();
        return Encoder2;
      }()
    );
    exports.default = Encoder;
  }
});

// node_modules/@zxing/library/esm5/browser/BrowserQRCodeSvgWriter.js
var require_BrowserQRCodeSvgWriter = __commonJS({
  "node_modules/@zxing/library/esm5/browser/BrowserQRCodeSvgWriter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EncodeHintType_1 = require_EncodeHintType();
    var Encoder_1 = require_Encoder();
    var ErrorCorrectionLevel_1 = require_ErrorCorrectionLevel();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var IllegalStateException_1 = require_IllegalStateException();
    var BrowserQRCodeSvgWriter = (
      /** @class */
      function() {
        function BrowserQRCodeSvgWriter2() {
        }
        BrowserQRCodeSvgWriter2.prototype.write = function(contents, width, height, hints) {
          if (hints === void 0) {
            hints = null;
          }
          if (contents.length === 0) {
            throw new IllegalArgumentException_1.default("Found empty contents");
          }
          if (width < 0 || height < 0) {
            throw new IllegalArgumentException_1.default("Requested dimensions are too small: " + width + "x" + height);
          }
          var errorCorrectionLevel = ErrorCorrectionLevel_1.default.L;
          var quietZone = BrowserQRCodeSvgWriter2.QUIET_ZONE_SIZE;
          if (hints !== null) {
            if (void 0 !== hints.get(EncodeHintType_1.default.ERROR_CORRECTION)) {
              errorCorrectionLevel = ErrorCorrectionLevel_1.default.fromString(hints.get(EncodeHintType_1.default.ERROR_CORRECTION).toString());
            }
            if (void 0 !== hints.get(EncodeHintType_1.default.MARGIN)) {
              quietZone = Number.parseInt(hints.get(EncodeHintType_1.default.MARGIN).toString(), 10);
            }
          }
          var code = Encoder_1.default.encode(contents, errorCorrectionLevel, hints);
          return this.renderResult(code, width, height, quietZone);
        };
        BrowserQRCodeSvgWriter2.prototype.writeToDom = function(containerElement, contents, width, height, hints) {
          if (hints === void 0) {
            hints = null;
          }
          if (typeof containerElement === "string") {
            containerElement = document.querySelector(containerElement);
          }
          var svgElement = this.write(contents, width, height, hints);
          if (containerElement)
            containerElement.appendChild(svgElement);
        };
        BrowserQRCodeSvgWriter2.prototype.renderResult = function(code, width, height, quietZone) {
          var input = code.getMatrix();
          if (input === null) {
            throw new IllegalStateException_1.default();
          }
          var inputWidth = input.getWidth();
          var inputHeight = input.getHeight();
          var qrWidth = inputWidth + quietZone * 2;
          var qrHeight = inputHeight + quietZone * 2;
          var outputWidth = Math.max(width, qrWidth);
          var outputHeight = Math.max(height, qrHeight);
          var multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight));
          var leftPadding = Math.floor((outputWidth - inputWidth * multiple) / 2);
          var topPadding = Math.floor((outputHeight - inputHeight * multiple) / 2);
          var svgElement = this.createSVGElement(outputWidth, outputHeight);
          for (var inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
            for (var inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
              if (input.get(inputX, inputY) === 1) {
                var svgRectElement = this.createSvgRectElement(outputX, outputY, multiple, multiple);
                svgElement.appendChild(svgRectElement);
              }
            }
          }
          return svgElement;
        };
        BrowserQRCodeSvgWriter2.prototype.createSVGElement = function(w, h) {
          var svgElement = document.createElementNS(BrowserQRCodeSvgWriter2.SVG_NS, "svg");
          svgElement.setAttributeNS(null, "height", w.toString());
          svgElement.setAttributeNS(null, "width", h.toString());
          return svgElement;
        };
        BrowserQRCodeSvgWriter2.prototype.createSvgRectElement = function(x, y, w, h) {
          var rect = document.createElementNS(BrowserQRCodeSvgWriter2.SVG_NS, "rect");
          rect.setAttributeNS(null, "x", x.toString());
          rect.setAttributeNS(null, "y", y.toString());
          rect.setAttributeNS(null, "height", w.toString());
          rect.setAttributeNS(null, "width", h.toString());
          rect.setAttributeNS(null, "fill", "#000000");
          return rect;
        };
        BrowserQRCodeSvgWriter2.QUIET_ZONE_SIZE = 4;
        BrowserQRCodeSvgWriter2.SVG_NS = "http://www.w3.org/2000/svg";
        return BrowserQRCodeSvgWriter2;
      }()
    );
    exports.BrowserQRCodeSvgWriter = BrowserQRCodeSvgWriter;
  }
});

// node_modules/@zxing/library/esm5/core/qrcode/QRCodeWriter.js
var require_QRCodeWriter = __commonJS({
  "node_modules/@zxing/library/esm5/core/qrcode/QRCodeWriter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarcodeFormat_1 = require_BarcodeFormat();
    var EncodeHintType_1 = require_EncodeHintType();
    var BitMatrix_1 = require_BitMatrix();
    var ErrorCorrectionLevel_1 = require_ErrorCorrectionLevel();
    var Encoder_1 = require_Encoder();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var IllegalStateException_1 = require_IllegalStateException();
    var QRCodeWriter = (
      /** @class */
      function() {
        function QRCodeWriter2() {
        }
        QRCodeWriter2.prototype.encode = function(contents, format, width, height, hints) {
          if (contents.length === 0) {
            throw new IllegalArgumentException_1.default("Found empty contents");
          }
          if (format !== BarcodeFormat_1.default.QR_CODE) {
            throw new IllegalArgumentException_1.default("Can only encode QR_CODE, but got " + format);
          }
          if (width < 0 || height < 0) {
            throw new IllegalArgumentException_1.default("Requested dimensions are too small: " + width + "x" + height);
          }
          var errorCorrectionLevel = ErrorCorrectionLevel_1.default.L;
          var quietZone = QRCodeWriter2.QUIET_ZONE_SIZE;
          if (hints !== null) {
            if (void 0 !== hints.get(EncodeHintType_1.default.ERROR_CORRECTION)) {
              errorCorrectionLevel = ErrorCorrectionLevel_1.default.fromString(hints.get(EncodeHintType_1.default.ERROR_CORRECTION).toString());
            }
            if (void 0 !== hints.get(EncodeHintType_1.default.MARGIN)) {
              quietZone = Number.parseInt(hints.get(EncodeHintType_1.default.MARGIN).toString(), 10);
            }
          }
          var code = Encoder_1.default.encode(contents, errorCorrectionLevel, hints);
          return QRCodeWriter2.renderResult(code, width, height, quietZone);
        };
        QRCodeWriter2.renderResult = function(code, width, height, quietZone) {
          var input = code.getMatrix();
          if (input === null) {
            throw new IllegalStateException_1.default();
          }
          var inputWidth = input.getWidth();
          var inputHeight = input.getHeight();
          var qrWidth = inputWidth + quietZone * 2;
          var qrHeight = inputHeight + quietZone * 2;
          var outputWidth = Math.max(width, qrWidth);
          var outputHeight = Math.max(height, qrHeight);
          var multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight));
          var leftPadding = Math.floor((outputWidth - inputWidth * multiple) / 2);
          var topPadding = Math.floor((outputHeight - inputHeight * multiple) / 2);
          var output = new BitMatrix_1.default(outputWidth, outputHeight);
          for (var inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
            for (var inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
              if (input.get(inputX, inputY) === 1) {
                output.setRegion(outputX, outputY, multiple, multiple);
              }
            }
          }
          return output;
        };
        QRCodeWriter2.QUIET_ZONE_SIZE = 4;
        return QRCodeWriter2;
      }()
    );
    exports.default = QRCodeWriter;
  }
});

// node_modules/@zxing/library/esm5/core/MultiFormatWriter.js
var require_MultiFormatWriter = __commonJS({
  "node_modules/@zxing/library/esm5/core/MultiFormatWriter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QRCodeWriter_1 = require_QRCodeWriter();
    var BarcodeFormat_1 = require_BarcodeFormat();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var MultiFormatWriter = (
      /** @class */
      function() {
        function MultiFormatWriter2() {
        }
        MultiFormatWriter2.prototype.encode = function(contents, format, width, height, hints) {
          var writer;
          switch (format) {
            case BarcodeFormat_1.default.QR_CODE:
              writer = new QRCodeWriter_1.default();
              break;
            default:
              throw new IllegalArgumentException_1.default("No encoder available for format " + format);
          }
          return writer.encode(contents, format, width, height, hints);
        };
        return MultiFormatWriter2;
      }()
    );
    exports.default = MultiFormatWriter;
  }
});

// node_modules/@zxing/library/esm5/core/PlanarYUVLuminanceSource.js
var require_PlanarYUVLuminanceSource = __commonJS({
  "node_modules/@zxing/library/esm5/core/PlanarYUVLuminanceSource.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var System_1 = require_System();
    var LuminanceSource_1 = require_LuminanceSource();
    var InvertedLuminanceSource_1 = require_InvertedLuminanceSource();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var PlanarYUVLuminanceSource = (
      /** @class */
      function(_super) {
        __extends(PlanarYUVLuminanceSource2, _super);
        function PlanarYUVLuminanceSource2(yuvData, dataWidth, dataHeight, left, top, width, height, reverseHorizontal) {
          var _this = _super.call(this, width, height) || this;
          _this.yuvData = yuvData;
          _this.dataWidth = dataWidth;
          _this.dataHeight = dataHeight;
          _this.left = left;
          _this.top = top;
          if (left + width > dataWidth || top + height > dataHeight) {
            throw new IllegalArgumentException_1.default("Crop rectangle does not fit within image data.");
          }
          if (reverseHorizontal) {
            _this.reverseHorizontal(width, height);
          }
          return _this;
        }
        PlanarYUVLuminanceSource2.prototype.getRow = function(y, row) {
          if (y < 0 || y >= this.getHeight()) {
            throw new IllegalArgumentException_1.default("Requested row is outside the image: " + y);
          }
          var width = this.getWidth();
          if (row === null || row === void 0 || row.length < width) {
            row = new Uint8ClampedArray(width);
          }
          var offset = (y + this.top) * this.dataWidth + this.left;
          System_1.default.arraycopy(this.yuvData, offset, row, 0, width);
          return row;
        };
        PlanarYUVLuminanceSource2.prototype.getMatrix = function() {
          var width = this.getWidth();
          var height = this.getHeight();
          if (width === this.dataWidth && height === this.dataHeight) {
            return this.yuvData;
          }
          var area = width * height;
          var matrix = new Uint8ClampedArray(area);
          var inputOffset = this.top * this.dataWidth + this.left;
          if (width === this.dataWidth) {
            System_1.default.arraycopy(this.yuvData, inputOffset, matrix, 0, area);
            return matrix;
          }
          for (var y = 0; y < height; y++) {
            var outputOffset = y * width;
            System_1.default.arraycopy(this.yuvData, inputOffset, matrix, outputOffset, width);
            inputOffset += this.dataWidth;
          }
          return matrix;
        };
        PlanarYUVLuminanceSource2.prototype.isCropSupported = function() {
          return true;
        };
        PlanarYUVLuminanceSource2.prototype.crop = function(left, top, width, height) {
          return new PlanarYUVLuminanceSource2(this.yuvData, this.dataWidth, this.dataHeight, this.left + left, this.top + top, width, height, false);
        };
        PlanarYUVLuminanceSource2.prototype.renderThumbnail = function() {
          var width = this.getWidth() / PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
          var height = this.getHeight() / PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
          var pixels = new Int32Array(width * height);
          var yuv = this.yuvData;
          var inputOffset = this.top * this.dataWidth + this.left;
          for (var y = 0; y < height; y++) {
            var outputOffset = y * width;
            for (var x = 0; x < width; x++) {
              var grey = yuv[inputOffset + x * PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR] & 255;
              pixels[outputOffset + x] = 4278190080 | grey * 65793;
            }
            inputOffset += this.dataWidth * PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
          }
          return pixels;
        };
        PlanarYUVLuminanceSource2.prototype.getThumbnailWidth = function() {
          return this.getWidth() / PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
        };
        PlanarYUVLuminanceSource2.prototype.getThumbnailHeight = function() {
          return this.getHeight() / PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
        };
        PlanarYUVLuminanceSource2.prototype.reverseHorizontal = function(width, height) {
          var yuvData = this.yuvData;
          for (var y = 0, rowStart = this.top * this.dataWidth + this.left; y < height; y++, rowStart += this.dataWidth) {
            var middle = rowStart + width / 2;
            for (var x1 = rowStart, x2 = rowStart + width - 1; x1 < middle; x1++, x2--) {
              var temp = yuvData[x1];
              yuvData[x1] = yuvData[x2];
              yuvData[x2] = temp;
            }
          }
        };
        PlanarYUVLuminanceSource2.prototype.invert = function() {
          return new InvertedLuminanceSource_1.default(this);
        };
        PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR = 2;
        return PlanarYUVLuminanceSource2;
      }(LuminanceSource_1.default)
    );
    exports.default = PlanarYUVLuminanceSource;
  }
});

// node_modules/@zxing/library/esm5/core/RGBLuminanceSource.js
var require_RGBLuminanceSource = __commonJS({
  "node_modules/@zxing/library/esm5/core/RGBLuminanceSource.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    require_InvertedLuminanceSource();
    var InvertedLuminanceSource_1 = require_InvertedLuminanceSource();
    var LuminanceSource_1 = require_LuminanceSource();
    var System_1 = require_System();
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    var RGBLuminanceSource = (
      /** @class */
      function(_super) {
        __extends(RGBLuminanceSource2, _super);
        function RGBLuminanceSource2(luminances, width, height, dataWidth, dataHeight, left, top) {
          var _this = _super.call(this, width, height) || this;
          _this.dataWidth = dataWidth;
          _this.dataHeight = dataHeight;
          _this.left = left;
          _this.top = top;
          if (luminances.BYTES_PER_ELEMENT === 4) {
            var size = width * height;
            var luminancesUint8Array = new Uint8ClampedArray(size);
            for (var offset = 0; offset < size; offset++) {
              var pixel = luminances[offset];
              var r = pixel >> 16 & 255;
              var g2 = pixel >> 7 & 510;
              var b = pixel & 255;
              luminancesUint8Array[offset] = /*(byte) */
              (r + g2 + b) / 4 & 255;
            }
            _this.luminances = luminancesUint8Array;
          } else {
            _this.luminances = luminances;
          }
          if (void 0 === dataWidth) {
            _this.dataWidth = width;
          }
          if (void 0 === dataHeight) {
            _this.dataHeight = height;
          }
          if (void 0 === left) {
            _this.left = 0;
          }
          if (void 0 === top) {
            _this.top = 0;
          }
          if (_this.left + width > _this.dataWidth || _this.top + height > _this.dataHeight) {
            throw new IllegalArgumentException_1.default("Crop rectangle does not fit within image data.");
          }
          return _this;
        }
        RGBLuminanceSource2.prototype.getRow = function(y, row) {
          if (y < 0 || y >= this.getHeight()) {
            throw new IllegalArgumentException_1.default("Requested row is outside the image: " + y);
          }
          var width = this.getWidth();
          if (row === null || row === void 0 || row.length < width) {
            row = new Uint8ClampedArray(width);
          }
          var offset = (y + this.top) * this.dataWidth + this.left;
          System_1.default.arraycopy(this.luminances, offset, row, 0, width);
          return row;
        };
        RGBLuminanceSource2.prototype.getMatrix = function() {
          var width = this.getWidth();
          var height = this.getHeight();
          if (width === this.dataWidth && height === this.dataHeight) {
            return this.luminances;
          }
          var area = width * height;
          var matrix = new Uint8ClampedArray(area);
          var inputOffset = this.top * this.dataWidth + this.left;
          if (width === this.dataWidth) {
            System_1.default.arraycopy(this.luminances, inputOffset, matrix, 0, area);
            return matrix;
          }
          for (var y = 0; y < height; y++) {
            var outputOffset = y * width;
            System_1.default.arraycopy(this.luminances, inputOffset, matrix, outputOffset, width);
            inputOffset += this.dataWidth;
          }
          return matrix;
        };
        RGBLuminanceSource2.prototype.isCropSupported = function() {
          return true;
        };
        RGBLuminanceSource2.prototype.crop = function(left, top, width, height) {
          return new RGBLuminanceSource2(this.luminances, width, height, this.dataWidth, this.dataHeight, this.left + left, this.top + top);
        };
        RGBLuminanceSource2.prototype.invert = function() {
          return new InvertedLuminanceSource_1.default(this);
        };
        return RGBLuminanceSource2;
      }(LuminanceSource_1.default)
    );
    exports.default = RGBLuminanceSource;
  }
});

// node_modules/@zxing/library/esm5/index.js
var require_esm5 = __commonJS({
  "node_modules/@zxing/library/esm5/index.js"(exports) {
    "use strict";
    function __export(m) {
      for (var p in m)
        if (!exports.hasOwnProperty(p))
          exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require_BrowserBarcodeReader());
    __export(require_BrowserCodeReader());
    __export(require_BrowserDatamatrixCodeReader());
    __export(require_BrowserMultiFormatReader());
    __export(require_BrowserQRCodeReader());
    __export(require_BrowserQRCodeSvgWriter());
    __export(require_HTMLCanvasElementLuminanceSource());
    __export(require_VideoInputDevice());
    var ArgumentException_1 = require_ArgumentException();
    exports.ArgumentException = ArgumentException_1.default;
    var ArithmeticException_1 = require_ArithmeticException();
    exports.ArithmeticException = ArithmeticException_1.default;
    var ChecksumException_1 = require_ChecksumException();
    exports.ChecksumException = ChecksumException_1.default;
    var Exception_1 = require_Exception();
    exports.Exception = Exception_1.default;
    var FormatException_1 = require_FormatException();
    exports.FormatException = FormatException_1.default;
    var IllegalArgumentException_1 = require_IllegalArgumentException();
    exports.IllegalArgumentException = IllegalArgumentException_1.default;
    var IllegalStateException_1 = require_IllegalStateException();
    exports.IllegalStateException = IllegalStateException_1.default;
    var NotFoundException_1 = require_NotFoundException();
    exports.NotFoundException = NotFoundException_1.default;
    var ReaderException_1 = require_ReaderException();
    exports.ReaderException = ReaderException_1.default;
    var ReedSolomonException_1 = require_ReedSolomonException();
    exports.ReedSolomonException = ReedSolomonException_1.default;
    var UnsupportedOperationException_1 = require_UnsupportedOperationException();
    exports.UnsupportedOperationException = UnsupportedOperationException_1.default;
    var WriterException_1 = require_WriterException();
    exports.WriterException = WriterException_1.default;
    var BarcodeFormat_1 = require_BarcodeFormat();
    exports.BarcodeFormat = BarcodeFormat_1.default;
    var Binarizer_1 = require_Binarizer();
    exports.Binarizer = Binarizer_1.default;
    var BinaryBitmap_1 = require_BinaryBitmap();
    exports.BinaryBitmap = BinaryBitmap_1.default;
    var DecodeHintType_1 = require_DecodeHintType();
    exports.DecodeHintType = DecodeHintType_1.default;
    var InvertedLuminanceSource_1 = require_InvertedLuminanceSource();
    exports.InvertedLuminanceSource = InvertedLuminanceSource_1.default;
    var LuminanceSource_1 = require_LuminanceSource();
    exports.LuminanceSource = LuminanceSource_1.default;
    var MultiFormatReader_1 = require_MultiFormatReader();
    exports.MultiFormatReader = MultiFormatReader_1.default;
    var MultiFormatWriter_1 = require_MultiFormatWriter();
    exports.MultiFormatWriter = MultiFormatWriter_1.default;
    var PlanarYUVLuminanceSource_1 = require_PlanarYUVLuminanceSource();
    exports.PlanarYUVLuminanceSource = PlanarYUVLuminanceSource_1.default;
    var Result_1 = require_Result();
    exports.Result = Result_1.default;
    var ResultMetadataType_1 = require_ResultMetadataType();
    exports.ResultMetadataType = ResultMetadataType_1.default;
    var RGBLuminanceSource_1 = require_RGBLuminanceSource();
    exports.RGBLuminanceSource = RGBLuminanceSource_1.default;
    var BitArray_1 = require_BitArray();
    exports.BitArray = BitArray_1.default;
    var BitMatrix_1 = require_BitMatrix();
    exports.BitMatrix = BitMatrix_1.default;
    var BitSource_1 = require_BitSource();
    exports.BitSource = BitSource_1.default;
    var CharacterSetECI_1 = require_CharacterSetECI();
    exports.CharacterSetECI = CharacterSetECI_1.default;
    var DecoderResult_1 = require_DecoderResult();
    exports.DecoderResult = DecoderResult_1.default;
    var DefaultGridSampler_1 = require_DefaultGridSampler();
    exports.DefaultGridSampler = DefaultGridSampler_1.default;
    var DetectorResult_1 = require_DetectorResult();
    exports.DetectorResult = DetectorResult_1.default;
    var EncodeHintType_1 = require_EncodeHintType();
    exports.EncodeHintType = EncodeHintType_1.default;
    var GlobalHistogramBinarizer_1 = require_GlobalHistogramBinarizer();
    exports.GlobalHistogramBinarizer = GlobalHistogramBinarizer_1.default;
    var GridSampler_1 = require_GridSampler();
    exports.GridSampler = GridSampler_1.default;
    var GridSamplerInstance_1 = require_GridSamplerInstance();
    exports.GridSamplerInstance = GridSamplerInstance_1.default;
    var HybridBinarizer_1 = require_HybridBinarizer();
    exports.HybridBinarizer = HybridBinarizer_1.default;
    var PerspectiveTransform_1 = require_PerspectiveTransform();
    exports.PerspectiveTransform = PerspectiveTransform_1.default;
    var StringUtils_1 = require_StringUtils();
    exports.StringUtils = StringUtils_1.default;
    var MathUtils_1 = require_MathUtils();
    exports.MathUtils = MathUtils_1.default;
    var WhiteRectangleDetector_1 = require_WhiteRectangleDetector();
    exports.WhiteRectangleDetector = WhiteRectangleDetector_1.default;
    var GenericGF_1 = require_GenericGF();
    exports.GenericGF = GenericGF_1.default;
    var GenericGFPoly_1 = require_GenericGFPoly();
    exports.GenericGFPoly = GenericGFPoly_1.default;
    var ReedSolomonDecoder_1 = require_ReedSolomonDecoder();
    exports.ReedSolomonDecoder = ReedSolomonDecoder_1.default;
    var ReedSolomonEncoder_1 = require_ReedSolomonEncoder();
    exports.ReedSolomonEncoder = ReedSolomonEncoder_1.default;
    var DataMatrixReader_1 = require_DataMatrixReader();
    exports.DataMatrixReader = DataMatrixReader_1.default;
    var QRCodeReader_1 = require_QRCodeReader();
    exports.QRCodeReader = QRCodeReader_1.default;
    var QRCodeWriter_1 = require_QRCodeWriter();
    exports.QRCodeWriter = QRCodeWriter_1.default;
    var ErrorCorrectionLevel_1 = require_ErrorCorrectionLevel();
    exports.QRCodeDecoderErrorCorrectionLevel = ErrorCorrectionLevel_1.default;
    var Encoder_1 = require_Encoder();
    exports.QRCodeEncoder = Encoder_1.default;
    var QRCode_1 = require_QRCode();
    exports.QRCodeEncoderQRCode = QRCode_1.default;
    var OneDReader_1 = require_OneDReader();
    exports.OneDReader = OneDReader_1.default;
    var EAN13Reader_1 = require_EAN13Reader();
    exports.EAN13Reader = EAN13Reader_1.default;
    var Code128Reader_1 = require_Code128Reader();
    exports.Code128Reader = Code128Reader_1.default;
    var ITFReader_1 = require_ITFReader();
    exports.ITFReader = ITFReader_1.default;
    var Code39Reader_1 = require_Code39Reader();
    exports.Code39Reader = Code39Reader_1.default;
    var RSS14Reader_1 = require_RSS14Reader();
    exports.RSS14Reader = RSS14Reader_1.default;
    var MultiFormatOneDReader_1 = require_MultiFormatOneDReader();
    exports.MultiformatReader = MultiFormatOneDReader_1.default;
  }
});

// node_modules/fcmlib/lib/FlowObjectDataProperty.js
var FlowObjectDataProperty = class _FlowObjectDataProperty {
  constructor(property) {
    this.ContentFormat = "";
    this.ContentType = eContentType.unknown;
    this.DeveloperName = "";
    this.TypeElementId = "";
    this.TypeElementPropertyId = "";
    if (property) {
      this.DeveloperName = property.developerName;
      this.ContentType = eContentType[property.contentType];
      this.ContentFormat = property.contentFormat ? property.contentFormat : "";
      this.TypeElementId = property.typeElementId ? property.typeElementId : "";
      this.TypeElementPropertyId = property.typeElementPropertyId;
      switch (this.ContentType) {
        case eContentType.ContentObject:
          this.Value = property.objectData ? new FlowObjectData(property.objectData) : void 0;
          break;
        case eContentType.ContentList:
          this.Value = property.objectData ? new FlowObjectDataArray(property.objectData) : new FlowObjectDataArray([]);
          break;
        case eContentType.ContentNumber:
          this.Value = property.contentValue ? parseFloat("" + property.contentValue) : null;
          break;
        case eContentType.ContentBoolean:
          this.Value = ("" + property.contentValue).trim().toLowerCase() === "true" ? true : false;
          break;
        case eContentType.ContentDateTime:
          this.Value = new Date(property.contentValue);
          break;
        default:
          this.Value = property.contentValue ? "" + property.contentValue : "";
          break;
      }
    }
  }
  static newInstance(developerName, contentType, value) {
    let cv;
    let objd = [];
    switch (contentType) {
      case eContentType.ContentObject:
        const od = value;
        objd.push(od.iObjectData());
        break;
      case eContentType.ContentList:
        const oda = value;
        objd = oda.iFlowObjectDataArray();
        break;
      case eContentType.ContentNumber:
        cv = value;
        break;
      case eContentType.ContentBoolean:
        cv = value;
        break;
      default:
        cv = value;
        break;
    }
    const data = {
      contentFormat: "",
      contentType: eContentType[contentType],
      contentValue: cv,
      developerName,
      objectData: objd,
      typeElementId: "",
      typeElementPropertyId: ""
    };
    return new this(data);
  }
  get contentFormat() {
    return this.ContentFormat;
  }
  set contentFormat(contentFormat) {
    this.contentFormat = contentFormat;
  }
  get contentType() {
    return this.ContentType;
  }
  set contentType(contentType) {
    this.ContentType = contentType;
  }
  get developerName() {
    return this.DeveloperName;
  }
  set developerName(developerName) {
    this.DeveloperName = developerName;
  }
  get typeElementId() {
    return this.TypeElementId;
  }
  set typeElementId(typeElementId) {
    this.TypeElementId = typeElementId;
  }
  get typeElementPropertyId() {
    return this.TypeElementPropertyId;
  }
  set typeElementPropertyId(typeElementPropertyId) {
    this.TypeElementPropertyId = typeElementPropertyId;
  }
  get value() {
    switch (this.contentType) {
      case eContentType.ContentNumber:
        return this.Value;
      case eContentType.ContentBoolean:
        return this.Value;
      case eContentType.ContentDateTime:
        return this.Value;
      default:
        return this.Value;
    }
  }
  set value(value) {
    switch (this.contentType) {
      case eContentType.ContentNumber:
        this.Value = parseFloat(value ? "" + value : "0");
        break;
      case eContentType.ContentBoolean:
        this.Value = new String(value).toLowerCase() === "true" ? true : false;
      case eContentType.ContentDateTime:
        this.Value = new Date(value);
      default:
        this.Value = value;
    }
  }
  clone() {
    let value;
    switch (this.contentType) {
      case eContentType.ContentList:
        value = new FlowObjectDataArray();
        this.value.items.forEach((item) => {
          value.addItem(item.clone(item.developerName));
        });
        break;
      case eContentType.ContentObject:
        value = this.value.clone(this.value.developerName);
        break;
      default:
        value = this.value;
    }
    const clone = _FlowObjectDataProperty.newInstance(this.developerName, this.contentType, value);
    return clone;
  }
  iFlowObjectDataProperty() {
    let contentValue = "";
    let objectData = [];
    switch (this.ContentType) {
      case eContentType.ContentObject:
        const od = this.Value;
        if (od && od.developerName && od.developerName.length > 0) {
          objectData.push(od.iObjectData());
        }
        break;
      case eContentType.ContentList:
        const oda = this.Value;
        objectData = oda.iFlowObjectDataArray();
        break;
      case eContentType.ContentNumber:
        contentValue = "" + parseFloat(this.Value ? this.Value : "0");
        break;
      case eContentType.ContentBoolean:
        contentValue = "" + (new String(this.Value).toLowerCase() === "true");
        break;
      case eContentType.ContentDateTime:
        contentValue = isNaN(this.Value.getTime()) ? "" : this.Value.toISOString();
        break;
      default:
        contentValue = this.Value;
        break;
    }
    const output = {
      contentFormat: this.ContentFormat,
      contentType: eContentType[this.ContentType],
      contentValue,
      developerName: this.DeveloperName,
      objectData,
      typeElementId: this.TypeElementId,
      typeElementPropertyId: this.TypeElementPropertyId
    };
    return output;
  }
  get displayString() {
    let label = "";
    if (this.Value) {
      switch (this.ContentType) {
        case eContentType.ContentString:
        case eContentType.ContentNumber:
          label = this.Value;
          break;
        case eContentType.ContentBoolean:
          if (this.Value === true) {
            label = "True";
          } else {
            label = "False";
          }
          break;
        case eContentType.ContentDateTime:
          const d = Date.parse(this.Value);
          if (!isNaN(d)) {
            const dt = new Date(d);
            if (label.length <= 10) {
              return dt.toLocaleDateString();
            } else {
              return dt.toLocaleString();
            }
          }
          break;
        default:
          label = eContentType[this.ContentType];
          break;
      }
    } else {
      label = "Undefined";
    }
    return label;
  }
};

// node_modules/fcmlib/lib/FlowObjectData.js
var FlowObjectData = class _FlowObjectData {
  constructor(data) {
    this.DeveloperName = "";
    this.ExternalId = "";
    this.InternalId = "";
    this.IsSelected = false;
    this.Order = 0;
    this.TypeElementId = "";
    this.Properties = {};
    if (data && data[0]) {
      const objectData = data[0];
      this.DeveloperName = objectData.developerName;
      this.InternalId = objectData.internalId;
      this.ExternalId = objectData.externalId;
      this.Order = objectData.order;
      this.IsSelected = objectData.isSelected;
      this.TypeElementId = objectData.typeElementId;
      if (objectData.properties && objectData.properties.length > 0) {
        for (const property of objectData.properties) {
          this.Properties[property.developerName] = new FlowObjectDataProperty(property);
        }
      }
    } else {
      console.log("null data");
    }
  }
  get developerName() {
    return this.DeveloperName;
  }
  set developerName(developerName) {
    this.DeveloperName = developerName;
  }
  get externalId() {
    return this.ExternalId;
  }
  set externalId(externalId) {
    this.ExternalId = externalId;
  }
  get internalId() {
    return this.InternalId;
  }
  set internalId(internalId) {
    this.InternalId = internalId;
  }
  get isSelected() {
    return this.IsSelected;
  }
  set isSelected(isSelected) {
    this.IsSelected = isSelected;
  }
  get order() {
    return this.Order;
  }
  set order(order) {
    this.Order = order;
  }
  get typeElementId() {
    return this.TypeElementId;
  }
  set typeElementId(typeElementId) {
    this.TypeElementId = typeElementId;
  }
  get properties() {
    return this.Properties;
  }
  static newInstance(developerName) {
    const data = {
      developerName,
      externalId: "",
      internalId: manywho.utils.guid(),
      isSelected: false,
      order: 0,
      properties: [],
      typeElementId: ""
    };
    return new this([data]);
  }
  addProperty(newProperty) {
    this.Properties[newProperty.developerName] = newProperty;
  }
  removeProperty(key) {
    delete this.Properties[key];
  }
  clone(newTypeName) {
    const clone = _FlowObjectData.newInstance(newTypeName || this.DeveloperName);
    Object.keys(this.properties).forEach((key) => {
      const newProp = this.properties[key].clone();
      clone.properties[key] = newProp;
    });
    return clone;
  }
  iObjectData(selected) {
    const props = [];
    for (const key of Object.keys(this.properties)) {
      props.push(this.properties[key].iFlowObjectDataProperty());
    }
    const objectData = {
      developerName: this.developerName,
      externalId: this.externalId,
      internalId: this.internalId,
      isSelected: selected || this.isSelected,
      order: this.order,
      properties: props,
      typeElementId: this.TypeElementId
    };
    return objectData;
  }
  iFlowObjectDataArray(selected) {
    const output = [];
    output.push(this.iObjectData(selected));
    return output;
  }
};

// node_modules/fcmlib/lib/FlowObjectDataArray.js
var eSortOrder;
(function(eSortOrder2) {
  eSortOrder2[eSortOrder2["ascending"] = 0] = "ascending";
  eSortOrder2[eSortOrder2["descending"] = 1] = "descending";
})(eSortOrder || (eSortOrder = {}));
var FlowObjectDataArray = class _FlowObjectDataArray {
  constructor(array) {
    this.Items = [];
    for (const item of array || []) {
      this.Items.push(new FlowObjectData([item]));
    }
  }
  get items() {
    return this.Items;
  }
  sort(order, fieldName) {
    if (order === eSortOrder.ascending) {
      if (fieldName) {
        return this.Items.sort((a, b) => {
          let valA;
          let valB;
          switch (a.properties[fieldName].contentType) {
            case eContentType.ContentNumber:
              valA = parseFloat(a.properties[fieldName].value);
              valB = parseFloat(b.properties[fieldName].value);
              break;
            case eContentType.ContentDateTime:
              valA = new Date(a.properties[fieldName].value);
              valB = new Date(b.properties[fieldName].value);
              break;
            default:
              valA = a.properties[fieldName].value;
              valB = b.properties[fieldName].value;
              break;
          }
          switch (true) {
            case valA < valB:
              return -1;
            case valA > valB:
              return 1;
            default:
              return 0;
          }
        });
      } else {
        return this.Items.sort((a, b) => a.order - b.order);
      }
    } else {
      if (fieldName) {
        return this.Items.sort((a, b) => {
          if (a && b && a.properties && b.properties && a.properties[fieldName] && b.properties[fieldName] && a.properties[fieldName].value && b.properties[fieldName].value) {
            if (a.properties[fieldName]) {
              switch (true) {
                case a.properties[fieldName].value < b.properties[fieldName].value:
                  return 1;
                case a.properties[fieldName].value > b.properties[fieldName].value:
                  return -1;
                default:
                  return 0;
              }
            } else {
              return 0;
            }
          } else {
            return 0;
          }
        });
      } else {
        return this.Items.sort((a, b) => a.order - b.order);
      }
    }
  }
  static fromJSONString(json, primaryKey, columns, flowTypeName) {
    let objDataArray = new _FlowObjectDataArray();
    let model = JSON.parse(json);
    model.forEach((item) => {
      let objData = FlowObjectData.newInstance(flowTypeName);
      columns.forEach((col) => {
        let val = item[col.developerName];
        if (col.developerName === primaryKey) {
          objData.externalId = val;
        }
        switch (col.contentType) {
          case eContentType.ContentDateTime:
            val = new Date(val);
            break;
          case eContentType.ContentNumber:
            val = parseFloat("" + val);
            break;
          case eContentType.ContentBoolean:
            val = new String(val).toLowerCase() === "true";
            break;
        }
        objData.addProperty(FlowObjectDataProperty.newInstance(col.developerName, col.contentType, val));
        objData.properties[col.developerName].typeElementPropertyId = col.typeElementPropertyId;
      });
      objDataArray.addItem(objData);
    });
    return objDataArray;
  }
  addItem(item) {
    this.Items.push(item);
  }
  clearItems() {
    this.Items = [];
  }
  clone() {
    const clone = new _FlowObjectDataArray();
    this.items.forEach((obj) => {
      clone.addItem(obj.clone());
    });
    return clone;
  }
  iFlowObjectDataArray(selected) {
    const output = [];
    for (const od of this.Items) {
      output.push(od.iObjectData(selected));
    }
    return output;
  }
  getItemWithPropertyName(findProperty, withValue, returnProperty) {
    for (const item of this.Items) {
      if (item.properties[findProperty] && item.properties[findProperty].value != void 0) {
        let value = item.properties[findProperty].value;
        let compareTo = withValue;
        switch (item.properties[findProperty].contentType) {
          case eContentType.ContentString:
            value = value.toLowerCase();
            compareTo = compareTo.toLowerCase();
            break;
          case eContentType.ContentNumber:
            value = value;
            compareTo = parseFloat(compareTo.toLowerCase());
            break;
          case eContentType.ContentBoolean:
            value = value;
            compareTo = new String(compareTo).toLowerCase() === "true";
            break;
          default:
            break;
        }
        if (value === compareTo) {
          return item.properties[returnProperty];
        }
      }
    }
    return null;
  }
  getSelectedItems() {
    const results = new _FlowObjectDataArray();
    for (const item of this.Items) {
      if (item.isSelected === true) {
        results.addItem(item);
      }
    }
    return results;
  }
  getItemWithPropertyValue(findProperty, withValue) {
    for (const item of this.Items) {
      if (item.properties[findProperty] && item.properties[findProperty].value != void 0) {
        let value = item.properties[findProperty].value;
        let compareTo = withValue;
        switch (item.properties[findProperty].contentType) {
          case eContentType.ContentString:
            value = value.toLowerCase();
            compareTo = new String(compareTo).toLowerCase();
            break;
          case eContentType.ContentNumber:
            value = value;
            compareTo = parseFloat(new String(compareTo).toLowerCase());
            break;
          case eContentType.ContentBoolean:
            value = value;
            compareTo = new String(compareTo).toLowerCase() === "true";
            break;
          default:
            break;
        }
        if (value === compareTo) {
          return item;
        }
      }
    }
  }
  getIndexOfItemWithPropertyValue(findProperty, withValue) {
    for (let pos = 0; pos < this.items.length; pos++) {
      const item = this.items[pos];
      if (item.properties[findProperty] && item.properties[findProperty].value != void 0) {
        let value = item.properties[findProperty].value;
        let compareTo = withValue;
        switch (item.properties[findProperty].contentType) {
          case eContentType.ContentString:
            value = value.toLowerCase();
            compareTo = compareTo.toLowerCase();
            break;
          case eContentType.ContentNumber:
            value = value;
            compareTo = parseFloat(new String(compareTo).toLowerCase());
            break;
          case eContentType.ContentBoolean:
            value = value;
            compareTo = new String(compareTo).toLowerCase() === "true";
            break;
          default:
            break;
        }
        if (value === compareTo) {
          return pos;
        }
      }
    }
    return -1;
  }
  removeItemWithPropertyValue(findProperty, withValue) {
    let modifiedCount = 0;
    for (let pos = 0; pos < this.items.length; pos++) {
      const item = this.items[pos];
      if (item.properties[findProperty] && item.properties[findProperty].value != void 0) {
        let value = item.properties[findProperty].value;
        let compareTo = withValue;
        switch (item.properties[findProperty].contentType) {
          case eContentType.ContentString:
            value = value.toLowerCase();
            compareTo = compareTo.toLowerCase();
            break;
          case eContentType.ContentNumber:
            value = value;
            compareTo = parseFloat(new String(compareTo).toLowerCase());
            break;
          case eContentType.ContentBoolean:
            value = value;
            compareTo = new String(compareTo).toLowerCase() === "true";
            break;
          default:
            break;
        }
        if (value === compareTo) {
          this.items.splice(pos, 1);
          modifiedCount++;
        }
      }
    }
    return modifiedCount;
  }
  removeItemAtIndex(index) {
    let modifiedCount = 0;
    if (this.items[index]) {
      this.items.splice(index, 1);
      modifiedCount = index;
    }
    return modifiedCount;
  }
};

// node_modules/fcmlib/lib/FlowAttribute.js
var FlowAttribute = class {
  constructor(name, value) {
    this.Name = name;
    this.Value = value;
  }
  get name() {
    return this.Name;
  }
  get value() {
    return this.Value;
  }
};

// node_modules/fcmlib/lib/FlowOutcome.js
var ePageActionBindingType;
(function(ePageActionBindingType2) {
  ePageActionBindingType2["Save"] = "SAVE";
  ePageActionBindingType2["PartialSave"] = "PARTIAL_SAVE";
  ePageActionBindingType2["NoSave"] = "NO_SAVE";
})(ePageActionBindingType || (ePageActionBindingType = {}));
var ePageActionType;
(function(ePageActionType2) {
  ePageActionType2["New"] = "NEW";
  ePageActionType2["Query"] = "QUERY";
  ePageActionType2["Insert"] = "INSERT";
  ePageActionType2["Update"] = "UPDATE";
  ePageActionType2["Upsert"] = "UPSERT";
  ePageActionType2["Delete"] = "DELETE";
  ePageActionType2["Remove"] = "REMOVE";
  ePageActionType2["Add"] = "ADD";
  ePageActionType2["Edit"] = "EDIT";
  ePageActionType2["Next"] = "NEXT";
  ePageActionType2["Back"] = "BACK";
  ePageActionType2["Done"] = "DONE";
  ePageActionType2["Save"] = "SAVE";
  ePageActionType2["Cancel"] = "CANCEL";
  ePageActionType2["Apply"] = "APPLY";
  ePageActionType2["Import"] = "IMPORT";
  ePageActionType2["Close"] = "CLOSE";
  ePageActionType2["Open"] = "OPEN";
  ePageActionType2["Submit"] = "SUBMIT";
  ePageActionType2["Escalate"] = "ESCALATE";
  ePageActionType2["Reject"] = "REJECT";
  ePageActionType2["Delegate"] = "DELEGATE";
})(ePageActionType || (ePageActionType = {}));
var FlowOutcome = class {
  constructor(outcome) {
    this.developerName = outcome.developerName;
    this.id = outcome.id;
    this.isBulkAction = outcome.isBulkAction;
    this.isOut = outcome.isOut;
    this.label = outcome.label;
    this.order = outcome.order;
    this.pageActionBindingType = outcome.pageActionBindingType;
    this.pageActionType = outcome.pageActionType;
    this.pageObjectBindingId = outcome.pageObjectBindingId;
    this.attributes = {};
    if (outcome.attributes) {
      for (const key of Object.keys(outcome.attributes)) {
        this.attributes[key] = new FlowAttribute(key, outcome.attributes[key]);
      }
    }
  }
};

// node_modules/fcmlib/lib/FlowDisplayColumn.js
var FlowDisplayColumn = class {
  constructor(column) {
    this.componentType = column.componentType;
    this.contentFormat = column.contentFormat;
    this.contentType = eContentType[column.contentType];
    this.developerName = column.developerName;
    this.order = column.order;
    this.label = column.label;
    this.isEditable = column.isEditable;
    this.typeElememtPropertyToDisplayId = column.typeElememtPropertyToDisplayId;
    this.typeElementPropertyId = column.typeElementPropertyId;
    this.isDisplayValue = column.isDisplayValue;
  }
};

// node_modules/fcmlib/lib/FCMCore.js
var import_react = __toESM(require_react());

// node_modules/fcmlib/lib/FlowValue.js
var FlowValue = class {
  constructor(field) {
    this.ContentType = eContentType.unknown;
    this.DeveloperName = "";
    this.TypeElementDeveloperName = "";
    this.TypeElementId = "";
    this.TypeElementPropertyDeveloperName = "";
    this.TypeElementPropertyId = "";
    this.ValueElementId = "";
    if (field) {
      this.ContentType = eContentType[field.contentType];
      this.DeveloperName = field.developerName;
      this.TypeElementDeveloperName = field.typeElementDeveloperName;
      this.TypeElementId = field.typeElementId;
      this.TypeElementPropertyDeveloperName = field.typeElementPropertyDeveloperName;
      this.TypeElementPropertyId = field.typeElementPropertyId;
      this.ValueElementId = field.valueElementId;
      switch (this.ContentType) {
        case eContentType.ContentObject:
          this.Value = field.objectData ? new FlowObjectData(field.objectData) : void 0;
          break;
        case eContentType.ContentList:
          this.Value = field.objectData && field.objectData[0] ? new FlowObjectDataArray(field.objectData) : new FlowObjectDataArray([]);
          break;
        default:
          this.Value = field.contentValue;
          break;
      }
    }
  }
  get contentType() {
    return this.ContentType;
  }
  get developerName() {
    return this.DeveloperName;
  }
  get typeElementDeveloperName() {
    return this.TypeElementDeveloperName;
  }
  get typeElementId() {
    return this.TypeElementId;
  }
  get typeElementPropertyDeveloperName() {
    return this.TypeElementPropertyDeveloperName;
  }
  get typeElementPropertyId() {
    return this.TypeElementPropertyId;
  }
  get valueElementId() {
    return this.ValueElementId;
  }
  get value() {
    return this.Value;
  }
  set value(value) {
    this.Value = value;
  }
  iFlowField() {
    let contentValue = "";
    let objectData = [];
    switch (this.ContentType) {
      case eContentType.ContentObject:
        const od = this.Value;
        objectData.push(od.iObjectData());
        break;
      case eContentType.ContentList:
        const oda = this.Value;
        objectData = oda.iFlowObjectDataArray();
        break;
      default:
        contentValue = this.Value ? this.Value : "";
        break;
    }
    const output = {
      contentType: eContentType[this.ContentType],
      contentValue,
      developerName: this.DeveloperName,
      objectData,
      typeElementDeveloperName: this.TypeElementDeveloperName,
      typeElementId: this.TypeElementId,
      typeElementPropertyDeveloperName: this.TypeElementPropertyDeveloperName,
      typeElementPropertyId: this.TypeElementPropertyId,
      valueElementId: this.ValueElementId
    };
    return output;
  }
};

// node_modules/fcmlib/lib/FCMCore.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var FCMCore = class extends import_react.default.Component {
  constructor() {
    super(...arguments);
    this.attributes = {};
  }
  /* Generic Fetch From FLOW API */
  callRequest(endpoint, method, data) {
    return __awaiter(this, void 0, void 0, function* () {
      let results;
      const request = {};
      let uri = window.location.origin + "/api/run/1/state/" + this.stateId;
      if (endpoint && endpoint.length > 0) {
        uri += "/" + endpoint;
      }
      request.method = method;
      request.headers = {
        "Content-Type": "application/json",
        "ManyWhoTenant": this.tenantId
      };
      if (this.authenticationToken) {
        request.headers.Authorization = this.authenticationToken;
      }
      request.credentials = "same-origin";
      if (method === "POST" || method === "PUT") {
        request.body = JSON.stringify(data);
      }
      let response = yield fetch(uri, request);
      if (response.status === 200) {
        results = yield response.json();
        console.log("Fetch Complete");
      } else {
        const errorText = yield response.text();
        console.log("Fetch Failed - " + errorText);
      }
      return results;
    });
  }
  /* Attribute access */
  getAttribute(attributeName, defaultValue) {
    var _a;
    if ((_a = this.attributes) === null || _a === void 0 ? void 0 : _a[attributeName]) {
      return this.attributes[attributeName];
    } else {
      return defaultValue || "";
    }
  }
  getStateValue() {
    var _a;
    switch (this.contentType) {
      case eContentType.ContentObject:
        return this.objectData.items[0];
      case eContentType.ContentList:
        return this.objectData;
      case eContentType.ContentBoolean:
        return ((_a = this.contentValue) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "true";
      case eContentType.ContentNumber:
        let num = parseFloat(this.contentValue);
        if (!isNaN(num)) {
          return num;
        } else {
          return void 0;
        }
      case eContentType.ContentDateTime:
        let dt = new Date(this.contentValue);
        if (!isNaN(dt.getTime())) {
          return dt;
        } else {
          return void 0;
        }
      default:
        return this.contentValue;
    }
  }
  loadValue(valueName) {
    return __awaiter(this, void 0, void 0, function* () {
      let value;
      try {
        value = yield this.callRequest("values/name/" + valueName, "GET", {});
      } catch (e) {
        console.error(e);
      } finally {
        if (value) {
          this.fields[value.developerName] = new FlowValue(value);
        }
        return this.fields[value.developerName];
      }
    });
  }
  updateValues(values) {
    return __awaiter(this, void 0, void 0, function* () {
      const updateFields = [];
      if (values.constructor.name === FlowValue.name) {
        updateFields.push(values.iFlowField());
      } else {
        for (const field of values) {
          updateFields.push(field.iFlowField());
        }
      }
      yield this.callRequest("values", "POST", updateFields);
      if (this.hasEvents) {
      }
      return Promise.resolve();
    });
  }
  // this takes a string value and if it is the {{FieldName->property}} notation it will
  // load the base flow value, save it to the Fields list and extapolate the requested property
  inflateValue(input) {
    return __awaiter(this, void 0, void 0, function* () {
      if (input) {
        let value;
        let match;
        const matches = [];
        while (match = RegExp(/{{([^}]*)}}/).exec(input)) {
          const fldElements = match[1].split("->");
          let fld;
          if (!this.fields.has(fldElements[0])) {
            fld = yield this.loadValue(fldElements[0]);
            this.fields.set(fldElements[0], fld);
          } else {
            fld = this.fields.get(fldElements[0]);
          }
          if (fld) {
            let od = fld.value;
            if (od) {
              if (fldElements.length > 1) {
                for (let epos = 1; epos < fldElements.length; epos++) {
                  od = od.properties[fldElements[epos]].value;
                }
                value = od;
              } else {
                value = fld.value;
              }
            } else {
              value = fld.value;
            }
            input = input.replace(match[0], value);
          }
        }
      }
      return input;
    });
  }
};

// node_modules/fcmlib/lib/FCMNew.js
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var eContentType;
(function(eContentType2) {
  eContentType2[eContentType2["unknown"] = 0] = "unknown";
  eContentType2[eContentType2["ContentString"] = 1] = "ContentString";
  eContentType2[eContentType2["ContentNumber"] = 2] = "ContentNumber";
  eContentType2[eContentType2["ContentObject"] = 3] = "ContentObject";
  eContentType2[eContentType2["ContentBoolean"] = 4] = "ContentBoolean";
  eContentType2[eContentType2["ContentList"] = 5] = "ContentList";
  eContentType2[eContentType2["ContentPassword"] = 6] = "ContentPassword";
  eContentType2[eContentType2["ContentContent"] = 7] = "ContentContent";
  eContentType2[eContentType2["ContentDateTime"] = 8] = "ContentDateTime";
  eContentType2[eContentType2["ContentEncrypted"] = 9] = "ContentEncrypted";
})(eContentType || (eContentType = {}));
var FCMNew = class extends FCMCore {
  constructor(props) {
    var _a, _b, _c;
    super(props);
    this.authenticationToken = props.authenticationToken;
    this.attributes = props.element.attributes;
    this.className = props.element.className;
    this.colSpan = props.element.colSpan;
    this.column = props.element.column;
    this.columns = [];
    (_a = props.element.columns) === null || _a === void 0 ? void 0 : _a.forEach((col) => {
      this.columns.push(new FlowDisplayColumn(col));
    });
    this.columns.sort((a, b) => {
      return a.order - b.order;
    });
    this.componentScriptURL = props.element.componentScriptURL;
    this.componentStyleSheetURL = props.element.componentStyleSheetURL;
    this.content = props.element.content;
    this.contentType = eContentType[props.element.contentType];
    this.contentValue = props.element.contentValue;
    this.developerName = props.element.developerName;
    this.fields = {};
    this.fileDataRequest = props.element.fileDataRequest;
    this.hasEvents = props.element.hasEvents;
    this.hasSubmitted = props.hasSubmitted;
    this.height = props.element.height;
    this.helpInfo = props.element.helpInfo;
    this.hintValue = props.element.hintValue;
    this.id = props.element.id;
    this.imageUri = props.element.imageUri;
    this.isEditable = props.element.isEditable;
    this.isEnabled = props.element.isEnabled;
    this.isMultiSelect = props.element.isMultiSelect;
    this.isRequired = props.element.isRequired;
    this.isSearchable = props.element.isSearchable;
    this.isSearchableDisplayColumns = props.element.isSearchableDisplayColumns;
    this.isValid = props.element.isValid;
    this.isVisible = props.element.isVisible;
    this.label = props.element.label;
    this.maxSize = props.element.maxSize;
    this.objectData = new FlowObjectDataArray(props.element.objectData);
    this.objectDataRequest = props.element.objectDataRequest;
    this.order = props.element.order;
    this.outcomes = {};
    (_b = props.outcomes) === null || _b === void 0 ? void 0 : _b.forEach((outcome) => {
      let oc = new FlowOutcome(outcome);
      if (oc.pageObjectBindingId === this.id) {
        this.outcomes[oc.developerName] = oc;
      }
    });
    (_c = props.element.outcomes) === null || _c === void 0 ? void 0 : _c.forEach((outcome) => {
      let oc = new FlowOutcome(outcome);
      if (oc.pageObjectBindingId === this.id) {
        this.outcomes[oc.developerName] = oc;
      }
    });
    this.pageContainerId = props.element.pageContainerId;
    this.row = props.element.row;
    this.rowSpan = props.element.rowSpan;
    this.selectedItems = props.element.selectedItems;
    this.size = props.element.size;
    this.stateId = props.stateId;
    this.tags = props.element.tags;
    this.tenantId = props.tenantId;
    this.type = props.element.type;
    this.validationMessage = props.element.validationMessage;
    this.validations = props.element.validations;
    this.width = props.element.width;
  }
  triggerOutcome(outcomeName) {
    return __awaiter2(this, void 0, void 0, function* () {
      if (this.outcomes[outcomeName]) {
        let trigger = {
          outcomeId: this.outcomes[outcomeName].id,
          invokeType: "FORWARD"
        };
        this.props.execute(trigger);
      }
    });
  }
  getStateValue() {
    var _a;
    switch (this.contentType) {
      case eContentType.ContentObject:
        return this.objectData.items[0];
      case eContentType.ContentList:
        return this.objectData;
      case eContentType.ContentBoolean:
        return ((_a = this.contentValue) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "true";
      case eContentType.ContentNumber:
        let num = parseFloat(this.contentValue);
        if (!isNaN(num)) {
          return num;
        } else {
          return void 0;
        }
      case eContentType.ContentDateTime:
        let dt = new Date(this.contentValue);
        if (!isNaN(dt.getTime())) {
          return dt;
        } else {
          return void 0;
        }
      default:
        return this.contentValue;
    }
  }
  setStateValue(value) {
    let element = {
      elementId: this.id,
      elementPartial: {},
      triggersPageCondition: this.hasEvents
    };
    switch (this.contentType) {
      case eContentType.ContentObject:
        element.elementPartial.objectData = value.iFlowObjectDataArray(true);
        break;
      case eContentType.ContentList:
        element.elementPartial.objectData = value.iFlowObjectDataArray(true);
        break;
      case eContentType.ContentBoolean:
        element.elementPartial.contentValue = value === true ? "true" : "false";
        break;
      case eContentType.ContentNumber:
        element.elementPartial.contentValue = "" + value;
        break;
      case eContentType.ContentDateTime:
        element.elementPartial.contentValue = isNaN(value.getTime()) ? "" : value.toISOString();
        break;
      default:
        element.elementPartial.contentValue = "" + value;
        break;
    }
    this.props.updateElement(element);
  }
};

// src/BarcodeScanner.tsx
var React2 = __toESM(require_react());
var import_library = __toESM(require_esm5());
var BarcodeScanner = class extends React2.Component {
  constructor(props) {
    super(props);
    this.identifySuccess = false;
    this.acceptLabel = "Accept";
    this.cancelLabel = "Cancel";
    this.scanCodes = [];
    this.deviceIds = {};
    this.selectedDeviceId = "";
    this.startScan = this.startScan.bind(this);
    this.acceptResult = this.acceptResult.bind(this);
    this.scanStat = 0 /* init */;
    this.stopScan = this.stopScan.bind(this);
    this.cancel = this.cancel.bind(this);
    this.switchCamera = this.switchCamera.bind(this);
    this.buildCameras = this.buildCameras.bind(this);
    let parent = this.props.parent;
    if (parent.getAttribute("scanFormats")) {
      let formats = parent.getAttribute("scanFormats").split(",");
      formats.forEach((format) => {
        switch (format) {
          case "QR_CODE":
            this.scanCodes.push(import_library.BarcodeFormat.QR_CODE);
            break;
          case "CODE_128":
            this.scanCodes.push(import_library.BarcodeFormat.CODE_128);
            break;
          case "CODE_39":
            this.scanCodes.push(import_library.BarcodeFormat.CODE_39);
            break;
          case "UPC_EAN_EXTENSION":
            this.scanCodes.push(import_library.BarcodeFormat.UPC_EAN_EXTENSION);
            break;
          case "EAN_8":
            this.scanCodes.push(import_library.BarcodeFormat.EAN_8);
            break;
          case "EAN_13":
            this.scanCodes.push(import_library.BarcodeFormat.EAN_13);
            break;
          case "CODABAR":
            this.scanCodes.push(import_library.BarcodeFormat.CODABAR);
            break;
          case "CODE_93":
            this.scanCodes.push(import_library.BarcodeFormat.CODE_93);
            break;
          case "AZTEC":
            this.scanCodes.push(import_library.BarcodeFormat.AZTEC);
            break;
          case "DATA_MATRIX":
            this.scanCodes.push(import_library.BarcodeFormat.DATA_MATRIX);
            break;
          case "ITF":
            this.scanCodes.push(import_library.BarcodeFormat.ITF);
            break;
          case "MAXICODE":
            this.scanCodes.push(import_library.BarcodeFormat.MAXICODE);
            break;
          case "PDF_417":
            this.scanCodes.push(import_library.BarcodeFormat.PDF_417);
            break;
          case "RSS_14":
            this.scanCodes.push(import_library.BarcodeFormat.RSS_14);
            break;
          case "RSS_EXPANDED":
            this.scanCodes.push(import_library.BarcodeFormat.RSS_EXPANDED);
            break;
          case "UPC_A":
            this.scanCodes.push(import_library.BarcodeFormat.UPC_A);
            break;
          case "UPC_E":
            this.scanCodes.push(import_library.BarcodeFormat.UPC_E);
            break;
        }
      });
    } else {
      this.scanCodes.push(import_library.BarcodeFormat.QR_CODE);
      this.scanCodes.push(import_library.BarcodeFormat.CODE_128);
      this.scanCodes.push(import_library.BarcodeFormat.CODE_39);
      this.scanCodes.push(import_library.BarcodeFormat.UPC_EAN_EXTENSION);
      this.scanCodes.push(import_library.BarcodeFormat.EAN_8);
      this.scanCodes.push(import_library.BarcodeFormat.EAN_13);
      this.scanCodes.push(import_library.BarcodeFormat.CODABAR);
      this.scanCodes.push(import_library.BarcodeFormat.CODE_93);
      this.scanCodes.push(import_library.BarcodeFormat.AZTEC);
      this.scanCodes.push(import_library.BarcodeFormat.DATA_MATRIX);
      this.scanCodes.push(import_library.BarcodeFormat.ITF);
      this.scanCodes.push(import_library.BarcodeFormat.MAXICODE);
      this.scanCodes.push(import_library.BarcodeFormat.PDF_417);
      this.scanCodes.push(import_library.BarcodeFormat.RSS_14);
      this.scanCodes.push(import_library.BarcodeFormat.RSS_EXPANDED);
      this.scanCodes.push(import_library.BarcodeFormat.UPC_A);
      this.scanCodes.push(import_library.BarcodeFormat.UPC_E);
    }
    if (parent.getAttribute("onAccept")) {
      this.onAccept = parent.outcomes[parent.getAttribute("onAccept")];
      this.acceptLabel = this.onAccept.label;
    }
    if (parent.getAttribute("onCancel")) {
      this.onCancel = parent.outcomes[parent.getAttribute("onCancel")];
      this.cancelLabel = this.onCancel.label;
    }
    if (parent.getAttribute("onDetect")) {
      this.onDetect = parent.outcomes[parent.getAttribute("onDetect")];
    }
    if (parent.getAttribute("onStop")) {
      this.onStop = parent.outcomes[parent.getAttribute("onStop")];
    }
  }
  async componentDidMount() {
    const video = this.video;
    const self = this;
    const hints = /* @__PURE__ */ new Map();
    hints.set(import_library.DecodeHintType.POSSIBLE_FORMATS, this.scanCodes);
    this.reader = new import_library.BrowserMultiFormatReader(hints);
    let devices = await navigator.mediaDevices.enumerateDevices();
    for (var i = 0; i !== devices.length; ++i) {
      var deviceInfo = devices[i];
      if (deviceInfo.kind === "videoinput") {
        this.deviceIds[deviceInfo.deviceId] = deviceInfo;
        if (this.selectedDeviceId === "") {
          this.selectedDeviceId = deviceInfo.deviceId;
        }
      }
    }
    self.forceUpdate();
    await self.buildCameras();
    self.startScan();
  }
  async acceptResult() {
    let parent = this.props.parent;
    if (this.onAccept) {
      parent.triggerOutcome(this.onAccept.developerName);
    }
  }
  async startScan() {
    if (this.scanStat === 1 /* scanning */) {
      console.log("already scanning - can't start");
      this.forceUpdate();
    } else {
      this.scanStat = 1 /* scanning */;
      this.forceUpdate();
      let result = await this.reader.decodeOnceFromVideoDevice(this.selectedDeviceId, this.video);
      this.reader.stopAsyncDecode();
      this.code = result.getText();
      let parent = this.props.parent;
      parent.setStateValue(this.code);
      this.scanStat = 3 /* detected */;
      this.forceUpdate();
      if (this.onDetect) {
        parent.triggerOutcome(this.onDetect.developerName);
      }
    }
  }
  async stopScan() {
    if (this.scanStat !== 1 /* scanning */) {
      console.log("not scanning - can't stop");
      this.forceUpdate();
    } else {
      this.reader.stopAsyncDecode();
      this.scanStat = 2 /* paused */;
      this.forceUpdate();
    }
  }
  async cancel() {
    await this.stopScan();
    let parent = this.props.parent;
    if (this.onCancel) {
      parent.triggerOutcome(this.onCancel.developerName);
    }
  }
  async switchCamera(deviceId) {
    await this.stopScan();
    this.selectedDeviceId = deviceId;
    await this.buildCameras();
    this.startScan();
  }
  async buildCameras() {
    this.cameras = [];
    for (let deviceId of Object.keys(this.deviceIds)) {
      let classes = "glyphicon glyphicon-camera bcs-ctl-cambar-cam ";
      if (this.selectedDeviceId === deviceId) {
        classes += "bcs-ctl-cambar-cam-active";
      }
      this.cameras.push(
        /* @__PURE__ */ React2.createElement(
          "div",
          {
            key: deviceId,
            onClick: (e) => {
              this.switchCamera(deviceId);
            }
          },
          /* @__PURE__ */ React2.createElement(
            "span",
            {
              className: classes
            }
          )
        )
      );
    }
    return true;
  }
  render() {
    let parent = this.props.parent;
    const text = parent.label;
    let control;
    let result;
    let message = "";
    const buttons = [];
    switch (this.scanStat) {
      case 0 /* init */:
        message = "Initialising";
        break;
      case 1 /* scanning */:
        let cancelAction;
        if (this.onCancel) {
          cancelAction = this.cancel;
        } else {
          cancelAction = this.stopScan;
        }
        message = "Scanning";
        buttons.push(
          /* @__PURE__ */ React2.createElement(
            "button",
            {
              className: "bcs-ctl-btnbar-btn",
              onClick: cancelAction,
              key: "cancel"
            },
            this.cancelLabel
          )
        );
        break;
      case 2 /* paused */:
        message = "Paused";
        buttons.push(
          /* @__PURE__ */ React2.createElement(
            "button",
            {
              className: "bcs-ctl-btnbar-btn",
              onClick: this.startScan,
              key: "start"
            },
            "Re-Scan"
          )
        );
        break;
      case 3 /* detected */:
        message = "Code Detected";
        buttons.push(
          /* @__PURE__ */ React2.createElement(
            "button",
            {
              className: "bcs-ctl-btnbar-btn",
              onClick: this.startScan,
              key: "start"
            },
            "Re-Scan"
          )
        );
        buttons.push(
          /* @__PURE__ */ React2.createElement(
            "button",
            {
              className: "bcs-ctl-btnbar-btn",
              onClick: this.acceptResult,
              key: "accept"
            },
            this.acceptLabel
          )
        );
        result = this.code;
        break;
    }
    control = /* @__PURE__ */ React2.createElement(
      "div",
      {
        className: "bcs-ctl"
      },
      /* @__PURE__ */ React2.createElement(
        "div",
        {
          className: "bcs-ctl-msgbar"
        },
        /* @__PURE__ */ React2.createElement(
          "span",
          {
            className: "bcs-ctl-msgbar-label"
          },
          message
        )
      ),
      /* @__PURE__ */ React2.createElement(
        "div",
        {
          className: "bcs-ctl-msgbar"
        },
        /* @__PURE__ */ React2.createElement(
          "span",
          {
            className: "bcs-ctl-msgbar-label"
          },
          result
        )
      ),
      /* @__PURE__ */ React2.createElement(
        "div",
        {
          className: "bcs-ctl-btnbar"
        },
        buttons
      ),
      /* @__PURE__ */ React2.createElement(
        "div",
        {
          className: "bcs-ctl-cambar"
        },
        this.cameras
      )
    );
    let style = {};
    let classes = "bcs " + parent.getAttribute("classes", "");
    if (parent.isVisible === false) {
      style.display = "none";
    }
    if (parent.width) {
      style.width = parent.width + "px";
    } else {
      style.width = "auto";
    }
    if (parent.height) {
      style.height = parent.height + "px";
    } else {
      style.height = "auto";
    }
    return /* @__PURE__ */ React2.createElement(
      "div",
      {
        className: "bcs",
        id: parent.id
      },
      /* @__PURE__ */ React2.createElement(
        "video",
        {
          ref: (me) => {
            this.video = me;
          },
          className: "bcs-video",
          autoPlay: true
        }
      ),
      control
    );
  }
};

// src/QRNew.tsx
var React3 = __toESM(require_react());
var QRCodeReader = class extends FCMNew {
  render() {
    return /* @__PURE__ */ React3.createElement(
      BarcodeScanner,
      {
        parent: this
      }
    );
  }
};
export {
  QRCodeReader as default
};
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

ts-custom-error/dist/custom-error.umd.js:
  (*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
  
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
  
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** *)
*/
