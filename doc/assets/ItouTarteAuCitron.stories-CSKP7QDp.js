import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a;function o(){return(o=e((()=>{t={title:`Libraries/Tarte au citron`,decorators:[e=>`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
Intégration de <a href="https://tarteaucitron.io/fr/" target="_blank" rel="noopener noreferrer" class="has-external-link">Tarte au citron 1.29.0</a> avec le thème Itou.

Pour l'utiliser, inclure le script via CDN :

<pre><script src="https://cdn.jsdelivr.net/npm/tarteaucitronjs@1.29.0/tarteaucitron.min.js"><\/script></pre>

Puis appeler <code>tarteaucitron.init({...})</code> avec la configuration souhaitée.

Les styles Tarte au citron sont pris en charge par le thème Itou — passer <code>useExternalCss: true</code> pour ne pas charger le CSS par défaut de la librairie.
`}}}},n=`tarteaucitron.init({
  "privacyUrl": "",
  "bodyPosition": "bottom",
  "hashtag": "#tarteaucitron",
  "cookieName": "tarteaucitron",
  "orientation": "bottom",

  "groupServices": false,
  "showDetailsOnClick": true,
  "serviceDefaultState": "wait",

  "showAlertSmall": false,
  "cookieslist": false,
  "cookieslistEmbed": false,

  "showIcon": true,
  "iconPosition": "BottomRight",

  "adblocker": false,

  "DenyAllCta": true,
  "AcceptAllCta": true,
  "highPrivacy": true,
  "alwaysNeedConsent": false,

  "handleBrowserDNTRequest": false,

  "removeCredit": true,
  "moreInfoLink": true,

  "useExternalCss": true,
  "useExternalJs": false,

  "readmoreLink": "",

  "mandatory": true,
  "mandatoryCta": true,

  "googleConsentMode": true,
  "bingConsentMode": true,
  "pianoConsentMode": true,
  "pianoConsentModeEssential": false,
  "softConsentMode": false,

  "dataLayer": false,
  "serverSide": false,

  "partnersList": false
});`,r=()=>`
    <article class="row py-3">
      <div class="col-12">
        <p>Exemple de configuration Tarte au citron :</p>
        <pre class="bg-info-lighter p-3"><code>${n.replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}</code></pre>
        <p class="mt-3"><i>Les styles seront automatiquement chargés par le thème Itou, il est donc inutile d'inclure les styles par défaut (<code>useExternalCss: true</code>).</i></p>
      </div>
    </article>
  `,i={render:r},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render
}`,...i.parameters?.docs?.source}}},a=[`Default`]})))()}o();export{i as Default,a as __namedExportsOrder,t as default};