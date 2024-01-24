var oc=oc||{};oc.components=oc.components||{};oc.components['3bf02f6a5139c1b412aff666921c879f9213b0e9']=function(model) {
    var __toOcStaticPathUrl = function(args) {
      return model.component.props._staticPath + 'public/' + args;
    } 
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = model.component.props;
    var __$$oc_initialData__ = rest;
    var __$$oc_Settings__ = {id: model.id, staticPath: _staticPath, baseUrl: _baseUrl, name: _componentName, version: _componentVersion};
    var innerFn = function(model){
  oc.vueComponents = oc.vueComponents || {};
  oc.vueComponents['11d4200eba5440e5e1467bc740ea3e2a99775092'] = oc.vueComponents['11d4200eba5440e5e1467bc740ea3e2a99775092'] || ((function() {
    var clientBundle = function(vue) {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

  const logo = "" + __toOcStaticPathUrl("logo.png");
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var dist = {};
  var Server$1 = {};
  Object.defineProperty(Server$1, "__esModule", { value: true });
  Server$1.getSettings = Server$1.getInitialData = Server$1.Server = void 0;
  class Server {
    constructor(initial) {
      __publicField(this, "initial");
      __publicField(this, "actions", {});
      this.initial = initial;
    }
    action(name, action) {
      this.actions[name] = action;
      return this;
    }
    getData() {
      return async ({ action: actionName, params, setEmptyResponse, ...context }, cb) => {
        let res;
        try {
          if (actionName && this.actions[actionName]) {
            const data = (params == null ? void 0 : params.data) ?? params;
            res = await this.actions[actionName](data, context);
          } else {
            res = await this.initial(params, context);
          }
        } catch (err) {
          cb(err);
          return;
        }
        cb(null, res);
      };
    }
  }
  Server$1.Server = Server;
  const getInitialData = () => typeof __$$oc_initialData__ !== "undefined" ? __$$oc_initialData__ : {};
  Server$1.getInitialData = getInitialData;
  const getSettings = () => typeof __$$oc_Settings__ !== "undefined" ? __$$oc_Settings__ : {};
  Server$1.getSettings = getSettings;
  var serverClient = {};
  Object.defineProperty(serverClient, "__esModule", { value: true });
  serverClient.serverClient = void 0;
  const Server_1 = Server$1;
  serverClient.serverClient = new Proxy({}, {
    get(_target, prop) {
      return (data) => {
        var _a, _b, _c;
        const componentName = "hero";
        const componentVersion = "1.0.0";
        const baseUrl = (0, Server_1.getSettings)().baseUrl ?? ((_c = (_b = (_a = window.oc) == null ? void 0 : _a.renderedComponents) == null ? void 0 : _b[componentName]) == null ? void 0 : _c.baseUrl);
        return window.oc.getAction({
          action: prop,
          baseUrl,
          component: componentName,
          version: componentVersion,
          parameters: data
        });
      };
    }
  });
  var types = {};
  Object.defineProperty(types, "__esModule", { value: true });
  (function(exports) {
    var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(Server$1, exports);
    __exportStar(serverClient, exports);
    __exportStar(types, exports);
  })(dist);
  const _withScopeId = (n) => (vue.pushScopeId("data-v-a09d83f7"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = { className: "container" };
  const _hoisted_2 = ["src"];
  const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode(
    "h1",
    null,
    "This section is in Vue Js",
    -1
    /* HOISTED */
  ));
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    props: {
      firstName: {},
      lastName: {},
      born: {},
      hobbies: {}
    },
    setup(__props) {
      const props = __props;
      vue.ref(null);
      props.hobbies.map((x) => x.toLowerCase()).join(", ");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("img", {
            width: "50",
            height: "50",
            src: vue.unref(logo),
            alt: "Logo"
          }, null, 8, _hoisted_2),
          _hoisted_3
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const View = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a09d83f7"]]);
  function renderer(props, element, ssr) {
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = props;
    function _getData(providerProps, parameters, cb) {
      return window.oc.getData(
        {
          name: providerProps._componentName,
          version: providerProps._componentVersion,
          baseUrl: providerProps._baseUrl,
          parameters
        },
        (err, data) => {
          if (err) {
            return cb(err);
          }
          const { _staticPath: _staticPath2, _baseUrl: _baseUrl2, _componentName: _componentName2, _componentVersion: _componentVersion2, ...rest2 } = data.component.props;
          cb(null, rest2, data.component.props);
        }
      );
    }
    function _getSetting(providerProps, setting) {
      const settingHash = {
        name: providerProps._componentName,
        version: providerProps._componentVersion,
        baseUrl: providerProps._baseUrl,
        staticPath: providerProps._staticPath
      };
      return settingHash[setting];
    }
    const getData = (parameters, cb) => {
      if (!cb || typeof cb !== "function") {
        return new Promise((resolve, reject) => {
          _getData(props, parameters, (err, data) => {
            if (err) {
              return reject(err);
            }
            resolve(data);
          });
        });
      }
      _getData(props, parameters, cb);
    };
    const getSetting = (setting) => _getSetting(props, setting);
    rest.getData = getData;
    rest.getSetting = getSetting;
    vue.createApp(View, rest).mount(element, ssr);
  }
  renderer.component = View;
  return renderer;
}(Vue);

    return clientBundle;
  })());
  if (!model) return;
  var modelHTML =  model.__html ? model.__html : '';
  var ssr = !!modelHTML;
  var externals = [{"global":"Vue","url":"https://unpkg.com/vue@3.4.3/dist/vue.global.prod.js","devUrl":"https://unpkg.com/vue@3.4.3/dist/vue.global.js","name":"vue"}];
  var staticPath = model.component.props._staticPath;
  if (ssr) {
    externals.push({
      global: ['oc', 'components', '3bf02f6a5139c1b412aff666921c879f9213b0e9'],
      url: staticPath + 'template.js',
      name: "template"
    });
  }
  var props = JSON.stringify(model.component.props);
  oc = oc || {};
  oc.__vueTemplate = oc.__vueTemplate || { count: 0 };
  var count = oc.__vueTemplate.count;
  var templateId = "oc-vueRoot-hero-" + count;
  oc.__vueTemplate.count++;
  var ssrCall = 'oc.components["3bf02f6a5139c1b412aff666921c879f9213b0e9"]({ component: { props:' + props + ' } });';

  return '<div id="' + templateId + '" class="oc-vueRoot-hero">' + modelHTML + '</div>' +
    '<style>.container[data-v-a09d83f7] {  background-color: #ffa500;  color: #fff;  font-family: sans-serif;  padding: 40px;  text-align: center;}.button[data-v-a09d83f7] {  background-color: #a97613;  border: none;  padding: 15px 32px;  text-align: center;  font-size: 16px;  text-decoration: none;  display: inline-block;  color: inherit;  cursor: pointer;}h1[data-v-a09d83f7] {  margin: 0 0 20px 0;}span[data-v-a09d83f7] {  text-decoration: underline;}.info[data-v-a09d83f7] {  margin-bottom: 20px;}.block[data-v-a09d83f7] {  margin: 6px 0;}</style>' +
    '<script>' +
    'oc = oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    'oc.events.fire(\'oc:cssDidMount\', \'.container[data-v-a09d83f7] {  background-color: #ffa500;  color: #fff;  font-family: sans-serif;  padding: 40px;  text-align: center;}.button[data-v-a09d83f7] {  background-color: #a97613;  border: none;  padding: 15px 32px;  text-align: center;  font-size: 16px;  text-decoration: none;  display: inline-block;  color: inherit;  cursor: pointer;}h1[data-v-a09d83f7] {  margin: 0 0 20px 0;}span[data-v-a09d83f7] {  text-decoration: underline;}.info[data-v-a09d83f7] {  margin-bottom: 20px;}.block[data-v-a09d83f7] {  margin: 6px 0;}\');' +
      'oc.requireSeries(' + JSON.stringify(externals) + ', function(){' +
        'var targetNode = document.getElementById("' + templateId + '");' +
        'targetNode.setAttribute("id","");' +
        (ssr ? ssrCall : '') +
        'oc.components["3bf02f6a5139c1b412aff666921c879f9213b0e9"]({ component: { props:' + props + ' } });' +
        'oc.vueComponents["11d4200eba5440e5e1467bc740ea3e2a99775092"](' + props + ', targetNode, ' + !!modelHTML  + ');' +
      '});' +
    '});' +
  '</script>'
};
    return innerFn(model);
  }
  