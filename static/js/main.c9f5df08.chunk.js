(this["webpackJsonpex4-signets"]=this["webpackJsonpex4-signets"]||[]).push([[0],{163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},185:function(e,t,a){},293:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(14),s=a.n(i),r=(a(163),a(47)),o=a(28),l=a(17),u=(a(164),a(165),a(346)),j=a(332),d=a(9),b=a(7);function O(e){var t=e.utilisateur;return Object(b.jsxs)("header",{className:"Entete",children:[Object(b.jsxs)("div",{className:"logo",children:["Signets",Object(b.jsx)(j.a,{variant:"outlined",size:"small",className:"btn-deconnexion",onClick:function(){return d.a.auth().signOut()},children:"D\xe9connexion"})]}),Object(b.jsxs)("div",{className:"utilisateur",children:[t.displayName," ",Object(b.jsx)(u.a,{className:"avatar",alt:t.displayName,src:t.photoURL})]})]})}var h=a(99),m=a.n(h),f=a(136),p=(a(172),a(173),a(336)),x=a(137),g=a.n(x),v=a(138),N=a.n(v),C=a(148),D=a(347);function A(e){e.id;var t=e.nom,a=e.couleur,c=e.datemodif,i=e.couverture,s=Object(n.useState)(null),r=Object(l.a)(s,2),o=r[0],u=r[1],j=function(){u(null)};return""==i&&(i="../images/couverture.webp"),Object(b.jsxs)("article",{className:"Dossier",style:{backgroundColor:a},children:[Object(b.jsxs)("div",{className:"couverture",children:[Object(b.jsx)(p.a,{className:"deplacer","aria-label":"d\xe9placer",disableRipple:!0,children:Object(b.jsx)(g.a,{})}),Object(b.jsx)("img",{src:i,alt:t})]}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsxs)("p",{children:["Modifi\xe9 : ",S(c)]})]}),Object(b.jsx)(p.a,{className:"modifier","aria-label":"modifier","aria-controls":"simple-menu","aria-haspopup":"true",size:"small",onClick:function(e){u(e.currentTarget)},children:Object(b.jsx)(N.a,{})}),Object(b.jsxs)(C.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:j,children:[Object(b.jsx)(D.a,{onClick:j,children:"Modifier"}),Object(b.jsx)(D.a,{onClick:j,children:"Supprimer"})]})]})}function S(e){var t=e?new Date(1e3*e.seconds):new Date;return"".concat(t.getDate()," ").concat(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"][t.getMonth()]," ").concat(t.getFullYear())}var y=a(139);a(295);d.a.apps.length||d.a.initializeApp({apiKey:"AIzaSyBSlXwTxpPtotdlCDMZUVaGCHzDPfBe7CM",authDomain:"signet-4b02b.firebaseapp.com",projectId:"signet-4b02b",storageBucket:"signet-4b02b.appspot.com",messagingSenderId:"832467340854",appId:"1:832467340854:web:ac6e5dde706254b1289297",measurementId:"G-CFBP1KN3V6"});var I=new y.a.AuthUI(d.a.auth()),k=d.a.firestore();function w(e){var t=e.utilisateur,a=e.etatDossiers,c=Object(l.a)(a,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(f.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,k.collection("utilisateurs-ex4").doc(t.uid).collection("dossiers").get();case 3:e.sent.forEach((function(e){a.push(Object(r.a)({id:e.id},e.data()))})),s(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsx)("ul",{className:"ListeDossiers",children:i.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(A,Object(r.a)({},e))},e.id)}))})}var E=a(341),F=a(145),B=a.n(F);a(185),a(186);function P(){return Object(n.useEffect)((function(){return I.start("#firebaseui-widget",{signInOptions:[d.a.auth.GoogleAuthProvider.PROVIDER_ID,d.a.auth.FacebookAuthProvider.PROVIDER_ID,d.a.auth.GithubAuthProvider.PROVIDER_ID],signInFlow:"popup"},[])})),Object(b.jsxs)("div",{className:"Accueil",children:[Object(b.jsxs)("h3",{className:"logo",children:["Signets ",Object(b.jsx)("span",{children:"beta"})]}),Object(b.jsxs)("h2",{className:"amorce",children:["Organisez vos signets Web, ",Object(b.jsx)("br",{}),"Simple comme bonjour !"]}),Object(b.jsx)("h4",{className:"connexion-etiquette",children:"Connexion \xe0 Signets"}),Object(b.jsx)("div",{id:"firebaseui-widget"})]})}var R=a(342),V=a(344),M=a(339),z=a(338),G=a(345),T=a(340),U=a(147),W=a(146),_=a(73);function J(e){var t=e.ouvert,a=e.setOuvert,c=e.gererAjout,i=Object(n.useState)(""),s=Object(l.a)(i,2),r=s[0],o=s[1],u=Object(n.useState)(""),d=Object(l.a)(u,2),O=d[0],h=d[1],m=Object(n.useState)("#537169"),f=Object(l.a)(m,2),p=f[0],x=f[1],g=Object(U.a)({palette:{secondary:_.a}});function v(){o(""),h(""),x("#537169")}return Object(b.jsx)("div",{className:"AjouterDossier",children:Object(b.jsxs)(V.a,{open:t,onClose:function(){return a(!1)},"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(G.a,{id:"form-dialog-title",children:"Ajouter un dossier"}),Object(b.jsxs)(z.a,{children:[Object(b.jsx)(R.a,{autoFocus:!0,margin:"dense",id:"nomDossier",label:"Nom du dossier",type:"text",fullWidth:!0,onChange:function(e){return o(e.target.value)},defaultValue:r}),Object(b.jsx)(R.a,{margin:"dense",id:"urlImage",label:"Adresse de l'image de couverture",type:"text",fullWidth:!0,onChange:function(e){return h(e.target.value)},defaultValue:O}),Object(b.jsx)(W.a,{colors:["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3"],width:"100%",triangle:"hide",onChangeComplete:function(e,t){return x(e.hex)},color:p})]}),Object(b.jsxs)(M.a,{children:[Object(b.jsx)(j.a,{onClick:function(){a(!1),v()},variant:"contained",color:"secondary",children:"Annuler"}),Object(b.jsx)(T.a,{theme:g,children:Object(b.jsx)(j.a,{onClick:function(){""!==r&&c(r,O,p),v()},variant:"contained",color:"secondary",children:"Ajouter"})})]})]})})}function K(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),s=Object(l.a)(i,2),u=s[0],j=s[1],h=Object(n.useState)(!1),m=Object(l.a)(h,2),f=m[0],p=m[1];return Object(n.useEffect)((function(){d.a.auth().onAuthStateChanged((function(e){c(e),e&&k.collection("utilisateurs-ex4").doc(e.uid).set({nom:e.displayName,courriel:e.email,datecompte:d.a.firestore.FieldValue.serverTimestamp()},{merge:!0})}))}),[]),Object(b.jsx)("div",{className:"Appli",children:a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{utilisateur:a}),Object(b.jsxs)("section",{className:"contenu-principal",children:[Object(b.jsx)(w,{utilisateur:a,etatDossiers:i}),Object(b.jsx)(J,{ouvert:f,setOuvert:p,gererAjout:function(e,t,n){var c={nom:e,couverture:t,couleur:n,datemodif:d.a.firestore.FieldValue.serverTimestamp(),signets:[]};k.collection("utilisateurs-ex4").doc(a.uid).collection("dossiers").add(c).then((function(e){e.get().then((function(e){return j([].concat(Object(o.a)(u),[Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id})]))})),p(!1)}))}}),Object(b.jsx)(E.a,{onClick:function(){return p(!0)},className:"ajoutRessource",color:"primary","aria-label":"Ajouter dossier",children:Object(b.jsx)(B.a,{})})]})]}):Object(b.jsx)(P,{})})}s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("racine"))}},[[293,1,2]]]);
//# sourceMappingURL=main.c9f5df08.chunk.js.map