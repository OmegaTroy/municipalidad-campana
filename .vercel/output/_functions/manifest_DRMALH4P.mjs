import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DODORssm.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_C17s0MFG.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/","adapterName":"@astrojs/vercel","routes":[{"file":"gobierno/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gobierno","isIndex":false,"type":"page","pattern":"^\\/gobierno\\/?$","segments":[[{"content":"gobierno","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gobierno.astro","pathname":"/gobierno","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/pages/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/pages/gobierno.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/gobierno@_@astro":"pages/gobierno.astro.mjs","\u0000@astro-page:src/pages/[id]@_@astro":"pages/_id_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-1.md?astroContentCollectionEntry=true":"chunks/post-1_CUkxglMT.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-2.md?astroContentCollectionEntry=true":"chunks/post-2_BlRowQRj.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-3.md?astroContentCollectionEntry=true":"chunks/post-3_2A3Onptk.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-4.md?astroContentCollectionEntry=true":"chunks/post-4_JV_rPSR_.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-5.md?astroContentCollectionEntry=true":"chunks/post-5_Cya5EAh5.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-6.md?astroContentCollectionEntry=true":"chunks/post-6_BCWWn8uC.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-1.md?astroPropagatedAssets":"chunks/post-1_CpYxseZk.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-2.md?astroPropagatedAssets":"chunks/post-2_CCP2qE28.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-3.md?astroPropagatedAssets":"chunks/post-3_BfCWpvIi.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-4.md?astroPropagatedAssets":"chunks/post-4_CM5DNcHS.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-5.md?astroPropagatedAssets":"chunks/post-5_CkzhMePX.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-6.md?astroPropagatedAssets":"chunks/post-6_CMlU34gm.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:content-module-imports":"chunks/_astro_content-module-imports_B0nxoYfl.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-1.md":"chunks/post-1_CHMoBq6g.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-2.md":"chunks/post-2_B1GYvGw-.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-3.md":"chunks/post-3_rNwoE3s5.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-4.md":"chunks/post-4_CVOqSC25.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-5.md":"chunks/post-5_z52QBpg2.mjs","C:/Users/Usuario/Documents/Dev/proyectos/municipalidad-campana/src/content/posts/post-6.md":"chunks/post-6_D4oDh_YQ.mjs","\u0000@astrojs-manifest":"manifest_DRMALH4P.mjs","\u0000astro:assets":"chunks/_astro_assets_CCmy7hQ5.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CeQ5d_3E.js","@astrojs/react/client.js":"_astro/client.DWOAAOFd.js","@/components/MenuDropdown":"_astro/MenuDropdown.D944pKvj.js","/astro/hoisted.js?q=1":"_astro/hoisted.BScVxmeO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_id_.ShrNissM.css","/_astro/index.D1qbDLcn.css","/alertaCampana.jpg","/campana-icon.webp","/clear.png","/cloud.png","/EUROAMERICA.jpg","/globo-aerostatico.jpg","/logo-municipalidad.webp","/mist.png","/palacio-municipal.jpg","/rain.png","/snow.png","/utn-nuevo.jpg","/fonts/Quicksand.ttf","/img-posts/Pasted image 20241117004207.png","/img-posts/Pasted image 20241117004212.png","/img-posts/Pasted image 20241117004226.png","/img-posts/Pasted image 20241117004242.png","/img-posts/Pasted image 20241117005235.png","/img-posts/Pasted image 20241117005735.png","/img-posts/Pasted image 20241117005834.png","/_astro/client.DWOAAOFd.js","/_astro/hoisted.BScVxmeO.js","/_astro/hoisted.CeQ5d_3E.js","/_astro/index.DYPFZqgc.js","/_astro/MenuDropdown.D944pKvj.js","/gobierno/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"BB7RK1h+0HvAyVKTD0dbD2og2DNx02+yapz9ZbmFlrs=","experimentalEnvGetSecretEnabled":false});

export { manifest };
