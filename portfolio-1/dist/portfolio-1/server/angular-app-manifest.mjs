
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11373, hash: 'fcdd1ac3945ab8c02dc0b73765b4484e118e64f760a8febf07132ae6756853b8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11643, hash: 'f94745d38a8e195536b96eec400bc8d33f620ef29969b3414129ca801292792a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35098, hash: 'b5af501fe84b49979da210ac2aab30a7a4737c8c36b792dcff7d4fb5d2afd196', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-P57VSJXJ.css': {size: 2012, hash: 'MYzyCTY6D7I', text: () => import('./assets-chunks/styles-P57VSJXJ_css.mjs').then(m => m.default)}
  },
};
