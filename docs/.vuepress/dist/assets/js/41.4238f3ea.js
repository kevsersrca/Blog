(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{391:function(s,a,e){"use strict";e.r(a);var t=e(33),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#lets-block-ip-address-in-server-with-iptables"}},[s._v("Lets block ip address in server with iptables")])])])]),e("p"),s._v(" "),e("h3",{attrs:{id:"lets-block-ip-address-in-server-with-iptables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lets-block-ip-address-in-server-with-iptables"}},[s._v("#")]),s._v(" Lets block ip address in server with iptables")]),s._v(" "),e("p",[s._v("For example block all inbound traffic for 192.168.122.12 ip address.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("iptables -A INPUT -s "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".122.12 -j DROP\n")])])]),e("p",[s._v("And other example, block all subnet.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("iptables -A INPUT -s "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1/24 -j DROP\n")])])]),e("p",[s._v("and after changing save the commands.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables save\n")])])]),e("p",[s._v("Thanks for reading.")])])}),[],!1,null,null,null);a.default=r.exports}}]);