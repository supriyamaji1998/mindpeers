(this.webpackJsonpmindpeers_assignment=this.webpackJsonpmindpeers_assignment||[]).push([[0],{217:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(16),s=a.n(n),c=(a(105),a(32)),i=a(33),l=a(36),h=a(35),o=a(62),j=a(1),u=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this.props.imagesArr;return e=t?Object(j.jsx)(o.GridList,{cols:3,children:t.map((function(e){return Object(j.jsx)(o.GridTile,{title:e.tags,children:Object(j.jsx)("img",{src:e.largeImageURL,alt:""})},e.id)}))}):null,Object(j.jsx)("div",{children:e})}}]),a}(r.Component),d=a(220),p=a(221),g=a(98),b=a(95),x=a.n(b),m=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={searchText:"",apiUrl:"https://pixabay.com/api",apiKey:"19066289-56c3481c5b245d604609c2192",imagesArr:[]},e.OnTextChange=function(t){var a=t.target.value;e.setState({searchText:t.target.value},(function(){""===a?e.setState({imagesArr:[]}):x.a.get("".concat(e.state.apiUrl,"/?key=").concat(e.state.apiKey,"&q=").concat(e.state.searchText,"&image_type=photo&safesearch=true")).then((function(t){return e.setState({imagesArr:t.data.hits})})).catch((function(e){return console.log(e)}))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return console.log(this.state.imagesArr),Object(j.jsxs)("div",{children:[Object(j.jsxs)(d.a,{expand:"lg",bg:"dark",variant:"dark",style:{height:"120px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},sticky:"top",children:[Object(j.jsx)(d.a.Brand,{href:"#",children:"Search Photos"}),Object(j.jsx)(p.a,{className:"d-flex",children:Object(j.jsx)(g.a,{type:"search",placeholder:"Search",className:"mr-2","aria-label":"Search",style:{width:"400px"},name:"searchText",value:this.state.searchText,onChange:this.OnTextChange})})]}),this.state.imagesArr.length>0?Object(j.jsx)(u,{imagesArr:this.state.imagesArr}):null]})}}]),a}(r.Component),O=a(100),f=a.n(O);var v=function(){return Object(j.jsx)(f.a,{children:Object(j.jsx)("div",{children:Object(j.jsx)(m,{})})})};s.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[217,1,2]]]);
//# sourceMappingURL=main.6a0a18cf.chunk.js.map