(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{162:function(t,s,a){"use strict";var e={props:["post"]},n=a(29),o=Object(n.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-meta"},[t._v("\n   Posted "+t._s(t.post.date)+".\n   "),t.post.timeToRead?[a("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);s.a=o.exports},163:function(t,s,a){"use strict";var e={props:["post"]},n=a(29),o=Object(n.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"post-tags inline"},t._l(t.post.tags,(function(s){return a("li",{key:s.id},[a("g-link",{staticClass:"post-tags__link",attrs:{to:s.path}},[a("span",[t._v("#")]),t._v(t._s(s.title))])],1)})),0)}),[],!1,null,null,null);s.a=o.exports},164:function(t,s){},169:function(t,s,a){"use strict";var e=a(162),n=a(163),o={components:{PostMeta:e.a,PostTags:n.a},props:["post"]},i=a(29),r=Object(i.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[a("div",{staticClass:"post-card__content"},[a("h2",{staticClass:"post-card__title"},[a("g-link",{attrs:{to:t.post.path}},[t._v(t._s(t.post.title))])],1),a("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),a("g-link",{staticClass:"post-card__link btn",attrs:{"aria-hidden":"true",to:t.post.path}},[t._v("Read More")])],1)])}),[],!1,null,null,null);s.a=r.exports},171:function(t,s,a){"use strict";var e=a(164),n=a.n(e);s.default=n.a},181:function(t,s,a){"use strict";a.r(s);var e={components:{PostCard:a(169).a},metaInfo:function(){return console.log(this),{title:"Posts tagged under ".concat(this.$route.params.id)}}},n=a(29),o=a(171),i=Object(n.a)(e,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("h1",{staticClass:"tag-title text-center space-bottom"},[this._v("\n    # "+this._s(this.$page.tag.title)+"\n  ")]),s("div",{staticClass:"posts"},this._l(this.$page.tag.belongsTo.edges,(function(t){return s("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)])}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(i);s.default=i.exports}}]);