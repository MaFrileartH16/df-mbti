import{r as p,f as E,u as N,c as De,j as d,B as z,e as Ie,l as ae,H as eo,h as ce,m as Ee,z as oo,d as to}from"./app-Cq8Aqup0.js";import{j as ro,P as Z,l as ie,e as je,d as le,u as no}from"./AppLayout-CwXQp4_H.js";import{I as so}from"./Input-BTJoUmQC.js";import{C as ao}from"./CheckIcon-DaSv3lMC.js";import{S as lo}from"./ScrollArea-YXKuiWdK.js";import{I as Pe}from"./InputBase-CEIJ_Rsw.js";function co(e){const o=p.useRef();return p.useEffect(()=>{o.current=e},[e]),o.current}function ke(e){return typeof e=="string"?{value:e,label:e}:"value"in e&&!("label"in e)?{value:e.value,label:e.value,disabled:e.disabled}:typeof e=="number"?{value:e.toString(),label:e.toString()}:"group"in e?{group:e.group,items:e.items.map(o=>ke(o))}:e}function io(e){return e?e.map(o=>ke(o)):[]}function Te(e){return e.reduce((o,t)=>"group"in t?{...o,...Te(t.items)}:(o[t.value]=t,o),{})}var A={dropdown:"m_88b62a41",options:"m_b2821a6e",option:"m_92253aa5",search:"m_985517d8",empty:"m_2530cd1d",header:"m_858f94bd",footer:"m_82b967cb",group:"m_254f3e4f",groupLabel:"m_2bb2e9e5",chevron:"m_2943220b",optionsDropdownOption:"m_390b5f4",optionsDropdownCheckIcon:"m_8ee53fc2"};const uo={error:null},po=Ie((e,{size:o})=>({chevron:{"--combobox-chevron-size":ae(o,"combobox-chevron-size")}})),ue=E((e,o)=>{const t=N("ComboboxChevron",uo,e),{size:r,error:s,style:a,className:n,classNames:l,styles:c,unstyled:i,vars:b,mod:u,...f}=t,g=De({name:"ComboboxChevron",classes:A,props:t,style:a,className:n,classNames:l,styles:c,unstyled:i,vars:b,varsResolver:po,rootSelector:"chevron"});return d.jsx(z,{component:"svg",...f,...g("chevron"),size:r,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",mod:["combobox-chevron",{error:s},u],ref:o,children:d.jsx("path",{d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})});ue.classes=A;ue.displayName="@mantine/core/ComboboxChevron";const[bo,P]=ro("Combobox component was not found in tree"),_e=p.forwardRef(({size:e,onMouseDown:o,onClick:t,onClear:r,...s},a)=>d.jsx(eo,{ref:a,size:e||"sm",variant:"transparent",tabIndex:-1,"aria-hidden":!0,...s,onMouseDown:n=>{n.preventDefault(),o==null||o(n)},onClick:n=>{r(),t==null||t(n)}}));_e.displayName="@mantine/core/ComboboxClearButton";const mo={},de=E((e,o)=>{const{classNames:t,styles:r,className:s,style:a,hidden:n,...l}=N("ComboboxDropdown",mo,e),c=P();return d.jsx(Z.Dropdown,{...l,ref:o,role:"presentation","data-hidden":n||void 0,...c.getStyles("dropdown",{className:s,style:a,classNames:t,styles:r})})});de.classes=A;de.displayName="@mantine/core/ComboboxDropdown";const fo={refProp:"ref"},$e=E((e,o)=>{const{children:t,refProp:r}=N("ComboboxDropdownTarget",fo,e);if(P(),!ie(t))throw new Error("Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return d.jsx(Z.Target,{ref:o,refProp:r,children:t})});$e.displayName="@mantine/core/ComboboxDropdownTarget";const xo={},pe=E((e,o)=>{const{classNames:t,className:r,style:s,styles:a,vars:n,...l}=N("ComboboxEmpty",xo,e),c=P();return d.jsx(z,{ref:o,...c.getStyles("empty",{className:r,classNames:t,styles:a,style:s}),...l})});pe.classes=A;pe.displayName="@mantine/core/ComboboxEmpty";function be({onKeyDown:e,withKeyboardNavigation:o,withAriaAttributes:t,withExpandedAttribute:r,targetType:s,autoComplete:a}){const n=P(),[l,c]=p.useState(null),i=u=>{if(e==null||e(u),!n.readOnly&&o){if(u.nativeEvent.isComposing)return;if(u.nativeEvent.code==="ArrowDown"&&(u.preventDefault(),n.store.dropdownOpened?c(n.store.selectNextOption()):(n.store.openDropdown("keyboard"),c(n.store.selectActiveOption()))),u.nativeEvent.code==="ArrowUp"&&(u.preventDefault(),n.store.dropdownOpened?c(n.store.selectPreviousOption()):(n.store.openDropdown("keyboard"),c(n.store.selectActiveOption()))),u.nativeEvent.code==="Enter"||u.nativeEvent.code==="NumpadEnter"){if(u.nativeEvent.keyCode===229)return;const f=n.store.getSelectedOptionIndex();n.store.dropdownOpened&&f!==-1?(u.preventDefault(),n.store.clickSelectedOption()):s==="button"&&(u.preventDefault(),n.store.openDropdown("keyboard"))}u.nativeEvent.code==="Escape"&&n.store.closeDropdown("keyboard"),u.nativeEvent.code==="Space"&&s==="button"&&(u.preventDefault(),n.store.toggleDropdown("keyboard"))}};return{...t?{"aria-haspopup":"listbox","aria-expanded":r&&!!(n.store.listId&&n.store.dropdownOpened)||void 0,"aria-controls":n.store.listId,"aria-activedescendant":n.store.dropdownOpened&&l||void 0,autoComplete:a,"data-expanded":n.store.dropdownOpened||void 0,"data-mantine-stop-propagation":n.store.dropdownOpened||void 0}:{},onKeyDown:i}}const ho={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},Re=E((e,o)=>{const{children:t,refProp:r,withKeyboardNavigation:s,withAriaAttributes:a,withExpandedAttribute:n,targetType:l,autoComplete:c,...i}=N("ComboboxEventsTarget",ho,e);if(!ie(t))throw new Error("Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");const b=P(),u=be({targetType:l,withAriaAttributes:a,withKeyboardNavigation:s,withExpandedAttribute:n,onKeyDown:t.props.onKeyDown,autoComplete:c});return p.cloneElement(t,{...u,...i,[r]:ce(o,b.store.targetRef,t==null?void 0:t.ref)})});Re.displayName="@mantine/core/ComboboxEventsTarget";const go={},me=E((e,o)=>{const{classNames:t,className:r,style:s,styles:a,vars:n,...l}=N("ComboboxFooter",go,e),c=P();return d.jsx(z,{ref:o,...c.getStyles("footer",{className:r,classNames:t,style:s,styles:a}),...l,onMouseDown:i=>{i.preventDefault()}})});me.classes=A;me.displayName="@mantine/core/ComboboxFooter";const vo={},fe=E((e,o)=>{const{classNames:t,className:r,style:s,styles:a,vars:n,children:l,label:c,...i}=N("ComboboxGroup",vo,e),b=P();return d.jsxs(z,{ref:o,...b.getStyles("group",{className:r,classNames:t,style:s,styles:a}),...i,children:[c&&d.jsx("div",{...b.getStyles("groupLabel",{classNames:t,styles:a}),children:c}),l]})});fe.classes=A;fe.displayName="@mantine/core/ComboboxGroup";const yo={},xe=E((e,o)=>{const{classNames:t,className:r,style:s,styles:a,vars:n,...l}=N("ComboboxHeader",yo,e),c=P();return d.jsx(z,{ref:o,...c.getStyles("header",{className:r,classNames:t,style:s,styles:a}),...l,onMouseDown:i=>{i.preventDefault()}})});xe.classes=A;xe.displayName="@mantine/core/ComboboxHeader";function Fe({value:e,valuesDivider:o=",",...t}){return d.jsx("input",{type:"hidden",value:Array.isArray(e)?e.join(o):e||"",...t})}Fe.displayName="@mantine/core/ComboboxHiddenInput";const Co={},he=E((e,o)=>{const t=N("ComboboxOption",Co,e),{classNames:r,className:s,style:a,styles:n,vars:l,onClick:c,id:i,active:b,onMouseDown:u,onMouseOver:f,disabled:g,selected:D,mod:k,...S}=t,v=P(),R=p.useId(),C=i||R;return d.jsx(z,{...v.getStyles("option",{className:s,classNames:r,styles:n,style:a}),...S,ref:o,id:C,mod:["combobox-option",{"combobox-active":b,"combobox-disabled":g,"combobox-selected":D},k],role:"option",onClick:h=>{var I;g?h.preventDefault():((I=v.onOptionSubmit)==null||I.call(v,t.value,t),c==null||c(h))},onMouseDown:h=>{h.preventDefault(),u==null||u(h)},onMouseOver:h=>{v.resetSelectionOnOptionHover&&v.store.resetSelectedOption(),f==null||f(h)}})});he.classes=A;he.displayName="@mantine/core/ComboboxOption";const wo={},ge=E((e,o)=>{const t=N("ComboboxOptions",wo,e),{classNames:r,className:s,style:a,styles:n,id:l,onMouseDown:c,labelledBy:i,...b}=t,u=P(),f=je(l);return p.useEffect(()=>{u.store.setListId(f)},[f]),d.jsx(z,{ref:o,...u.getStyles("options",{className:s,style:a,classNames:r,styles:n}),...b,id:f,role:"listbox","aria-labelledby":i,onMouseDown:g=>{g.preventDefault(),c==null||c(g)}})});ge.classes=A;ge.displayName="@mantine/core/ComboboxOptions";const So={withAriaAttributes:!0,withKeyboardNavigation:!0},ve=E((e,o)=>{const t=N("ComboboxSearch",So,e),{classNames:r,styles:s,unstyled:a,vars:n,withAriaAttributes:l,onKeyDown:c,withKeyboardNavigation:i,size:b,...u}=t,f=P(),g=f.getStyles("search"),D=be({targetType:"input",withAriaAttributes:l,withKeyboardNavigation:i,withExpandedAttribute:!1,onKeyDown:c,autoComplete:"off"});return d.jsx(so,{ref:ce(o,f.store.searchRef),classNames:[{input:g.className},r],styles:[{input:g.style},s],size:b||f.size,...D,...u,__staticSelector:"Combobox"})});ve.classes=A;ve.displayName="@mantine/core/ComboboxSearch";const Oo={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},Le=E((e,o)=>{const{children:t,refProp:r,withKeyboardNavigation:s,withAriaAttributes:a,withExpandedAttribute:n,targetType:l,autoComplete:c,...i}=N("ComboboxTarget",Oo,e);if(!ie(t))throw new Error("Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");const b=P(),u=be({targetType:l,withAriaAttributes:a,withKeyboardNavigation:s,withExpandedAttribute:n,onKeyDown:t.props.onKeyDown,autoComplete:c}),f=p.cloneElement(t,{...u,...i});return d.jsx(Z.Target,{ref:ce(o,b.store.targetRef),children:f})});Le.displayName="@mantine/core/ComboboxTarget";function Ao(e,o,t){for(let r=e-1;r>=0;r-=1)if(!o[r].hasAttribute("data-combobox-disabled"))return r;if(t){for(let r=o.length-1;r>-1;r-=1)if(!o[r].hasAttribute("data-combobox-disabled"))return r}return e}function No(e,o,t){for(let r=e+1;r<o.length;r+=1)if(!o[r].hasAttribute("data-combobox-disabled"))return r;if(t){for(let r=0;r<o.length;r+=1)if(!o[r].hasAttribute("data-combobox-disabled"))return r}return e}function Eo(e){for(let o=0;o<e.length;o+=1)if(!e[o].hasAttribute("data-combobox-disabled"))return o;return-1}function Ve({defaultOpened:e,opened:o,onOpenedChange:t,onDropdownClose:r,onDropdownOpen:s,loop:a=!0,scrollBehavior:n="instant"}={}){const[l,c]=le({value:o,defaultValue:e,finalValue:!1,onChange:t}),i=p.useRef(null),b=p.useRef(-1),u=p.useRef(null),f=p.useRef(null),g=p.useRef(-1),D=p.useRef(-1),k=p.useRef(-1),S=p.useCallback((m="unknown")=>{l||(c(!0),s==null||s(m))},[c,s,l]),v=p.useCallback((m="unknown")=>{l&&(c(!1),r==null||r(m))},[c,r,l]),R=p.useCallback((m="unknown")=>{l?v(m):S(m)},[v,S,l]),C=p.useCallback(()=>{const m=document.querySelector(`#${i.current} [data-combobox-selected]`);m==null||m.removeAttribute("data-combobox-selected"),m==null||m.removeAttribute("aria-selected")},[]),h=p.useCallback(m=>{const w=document.getElementById(i.current),y=w==null?void 0:w.querySelectorAll("[data-combobox-option]");if(!y)return null;const O=m>=y.length?0:m<0?y.length-1:m;return b.current=O,y!=null&&y[O]&&!y[O].hasAttribute("data-combobox-disabled")?(C(),y[O].setAttribute("data-combobox-selected","true"),y[O].setAttribute("aria-selected","true"),y[O].scrollIntoView({block:"nearest",behavior:n}),y[O].id):null},[n,C]),I=p.useCallback(()=>{const m=document.querySelector(`#${i.current} [data-combobox-active]`);if(m){const w=document.querySelectorAll(`#${i.current} [data-combobox-option]`),y=Array.from(w).findIndex(O=>O===m);return h(y)}return h(0)},[h]),T=p.useCallback(()=>h(No(b.current,document.querySelectorAll(`#${i.current} [data-combobox-option]`),a)),[h,a]),W=p.useCallback(()=>h(Ao(b.current,document.querySelectorAll(`#${i.current} [data-combobox-option]`),a)),[h,a]),J=p.useCallback(()=>h(Eo(document.querySelectorAll(`#${i.current} [data-combobox-option]`))),[h]),Q=p.useCallback((m="selected",w)=>{k.current=window.setTimeout(()=>{var M;const y=document.querySelectorAll(`#${i.current} [data-combobox-option]`),O=Array.from(y).findIndex(te=>te.hasAttribute(`data-combobox-${m}`));b.current=O,w!=null&&w.scrollIntoView&&((M=y[O])==null||M.scrollIntoView({block:"nearest",behavior:n}))},0)},[]),X=p.useCallback(()=>{b.current=-1,C()},[C]),H=p.useCallback(()=>{const m=document.querySelectorAll(`#${i.current} [data-combobox-option]`),w=m==null?void 0:m[b.current];w==null||w.click()},[]),F=p.useCallback(m=>{i.current=m},[]),Y=p.useCallback(()=>{g.current=window.setTimeout(()=>u.current.focus(),0)},[]),ee=p.useCallback(()=>{D.current=window.setTimeout(()=>f.current.focus(),0)},[]),oe=p.useCallback(()=>b.current,[]);return p.useEffect(()=>()=>{window.clearTimeout(g.current),window.clearTimeout(D.current),window.clearTimeout(k.current)},[]),{dropdownOpened:l,openDropdown:S,closeDropdown:v,toggleDropdown:R,selectedOptionIndex:b.current,getSelectedOptionIndex:oe,selectOption:h,selectFirstOption:J,selectActiveOption:I,selectNextOption:T,selectPreviousOption:W,resetSelectedOption:X,updateSelectedOptionIndex:Q,listId:i.current,setListId:F,clickSelectedOption:H,searchRef:u,focusSearchInput:Y,targetRef:f,focusTarget:ee}}const Do={keepMounted:!0,withinPortal:!0,resetSelectionOnOptionHover:!1,width:"target",transitionProps:{transition:"fade",duration:0}},Io=Ie((e,{size:o,dropdownPadding:t})=>({options:{"--combobox-option-fz":Ee(o),"--combobox-option-padding":ae(o,"combobox-option-padding")},dropdown:{"--combobox-padding":t===void 0?void 0:oo(t),"--combobox-option-fz":Ee(o),"--combobox-option-padding":ae(o,"combobox-option-padding")}}));function x(e){const o=N("Combobox",Do,e),{classNames:t,styles:r,unstyled:s,children:a,store:n,vars:l,onOptionSubmit:c,onClose:i,size:b,dropdownPadding:u,resetSelectionOnOptionHover:f,__staticSelector:g,readOnly:D,...k}=o,S=Ve(),v=n||S,R=De({name:g||"Combobox",classes:A,props:o,classNames:t,styles:r,unstyled:s,vars:l,varsResolver:Io}),C=()=>{i==null||i(),v.closeDropdown()};return d.jsx(bo,{value:{getStyles:R,store:v,onOptionSubmit:c,size:b,resetSelectionOnOptionHover:f,readOnly:D},children:d.jsx(Z,{opened:v.dropdownOpened,...k,onClose:C,withRoles:!1,unstyled:s,children:a})})}const jo=e=>e;x.extend=jo;x.classes=A;x.displayName="@mantine/core/Combobox";x.Target=Le;x.Dropdown=de;x.Options=ge;x.Option=he;x.Search=ve;x.Empty=pe;x.Chevron=ue;x.Footer=me;x.Header=xe;x.EventsTarget=Re;x.DropdownTarget=$e;x.Group=fe;x.ClearButton=_e;x.HiddenInput=Fe;function G(e){return"group"in e}function ze({options:e,search:o,limit:t}){const r=o.trim().toLowerCase(),s=[];for(let a=0;a<e.length;a+=1){const n=e[a];if(s.length===t)return s;G(n)&&s.push({group:n.group,items:ze({options:n.items,search:o,limit:t-s.length})}),G(n)||n.label.toLowerCase().includes(r)&&s.push(n)}return s}function Po(e){if(e.length===0)return!0;for(const o of e)if(!("group"in o)||o.items.length>0)return!1;return!0}function He(e,o=new Set){if(Array.isArray(e))for(const t of e)if(G(t))He(t.items,o);else{if(typeof t.value>"u")throw new Error("[@mantine/core] Each option must have value property");if(typeof t.value!="string")throw new Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof t.value}`);if(o.has(t.value))throw new Error(`[@mantine/core] Duplicate options are not supported. Option with value "${t.value}" was provided more than once`);o.add(t.value)}}function ko(e,o){return Array.isArray(e)?e.includes(o):e===o}function Be({data:e,withCheckIcon:o,value:t,checkIconPosition:r,unstyled:s,renderOption:a}){if(!G(e)){const l=ko(t,e.value),c=o&&l&&d.jsx(ao,{className:A.optionsDropdownCheckIcon}),i=d.jsxs(d.Fragment,{children:[r==="left"&&c,d.jsx("span",{children:e.label}),r==="right"&&c]});return d.jsx(x.Option,{value:e.value,disabled:e.disabled,className:to({[A.optionsDropdownOption]:!s}),"data-reverse":r==="right"||void 0,"data-checked":l||void 0,"aria-selected":l,active:l,children:typeof a=="function"?a({option:e,checked:l}):i})}const n=e.items.map(l=>d.jsx(Be,{data:l,value:t,unstyled:s,withCheckIcon:o,checkIconPosition:r,renderOption:a},l.value));return d.jsx(x.Group,{label:e.group,children:n})}function To({data:e,hidden:o,hiddenWhenEmpty:t,filter:r,search:s,limit:a,maxDropdownHeight:n,withScrollArea:l=!0,filterOptions:c=!0,withCheckIcon:i=!1,value:b,checkIconPosition:u,nothingFoundMessage:f,unstyled:g,labelId:D,renderOption:k,scrollAreaProps:S,"aria-label":v}){He(e);const C=typeof s=="string"?(r||ze)({options:e,search:c?s:"",limit:a??1/0}):e,h=Po(C),I=C.map(T=>d.jsx(Be,{data:T,withCheckIcon:i,value:b,checkIconPosition:u,unstyled:g,renderOption:k},G(T)?T.group:T.value));return d.jsx(x.Dropdown,{hidden:o||t&&h,children:d.jsxs(x.Options,{labelledBy:D,"aria-label":v,children:[l?d.jsx(lo.Autosize,{mah:n??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...S,children:I}):I,h&&f&&d.jsx(x.Empty,{children:f})]})})}const _o={searchable:!1,withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},qe=E((e,o)=>{const t=N("Select",_o,e),{classNames:r,styles:s,unstyled:a,vars:n,dropdownOpened:l,defaultDropdownOpened:c,onDropdownClose:i,onDropdownOpen:b,onFocus:u,onBlur:f,onClick:g,onChange:D,data:k,value:S,defaultValue:v,selectFirstOptionOnChange:R,onOptionSubmit:C,comboboxProps:h,readOnly:I,disabled:T,filter:W,limit:J,withScrollArea:Q,maxDropdownHeight:X,size:H,searchable:F,rightSection:Y,checkIconPosition:ee,withCheckIcon:oe,nothingFoundMessage:m,name:w,form:y,searchValue:O,defaultSearchValue:M,onSearchChange:te,allowDeselect:Ke,error:ye,rightSectionPointerEvents:Ge,id:Me,clearable:Ue,clearButtonProps:Ze,hiddenInputProps:We,renderOption:Je,onClear:re,autoComplete:Qe,scrollAreaProps:Xe,...U}=t,ne=p.useMemo(()=>io(k),[k]),K=p.useMemo(()=>Te(ne),[ne]),Ce=je(Me),[L,we,Ye]=le({value:S,defaultValue:v,finalValue:null,onChange:D}),_=typeof L=="string"?K[L]:void 0,B=co(_),[se,q]=le({value:O,defaultValue:M,finalValue:_?_.label:"",onChange:te}),$=Ve({opened:l,defaultOpened:c,onDropdownOpen:()=>{b==null||b(),$.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{i==null||i(),$.resetSelectedOption()}}),{resolvedClassNames:Se,resolvedStyles:Oe}=no({props:t,styles:s,classNames:r});p.useEffect(()=>{R&&$.selectFirstOption()},[R,L]),p.useEffect(()=>{S===null&&q(""),typeof S=="string"&&_&&((B==null?void 0:B.value)!==_.value||(B==null?void 0:B.label)!==_.label)&&q(_.label)},[S,_]);const Ae=Ue&&!!L&&!T&&!I&&d.jsx(x.ClearButton,{size:H,...Ze,onClear:()=>{we(null,null),q(""),re==null||re()}});return d.jsxs(d.Fragment,{children:[d.jsxs(x,{store:$,__staticSelector:"Select",classNames:Se,styles:Oe,unstyled:a,readOnly:I,onOptionSubmit:j=>{C==null||C(j);const V=Ke&&K[j].value===L?null:K[j],Ne=V?V.value:null;we(Ne,V),!Ye&&q(typeof Ne=="string"&&(V==null?void 0:V.label)||""),$.closeDropdown()},size:H,...h,children:[d.jsx(x.Target,{targetType:F?"input":"button",autoComplete:Qe,children:d.jsx(Pe,{id:Ce,ref:o,rightSection:Y||Ae||d.jsx(x.Chevron,{size:H,error:ye,unstyled:a}),rightSectionPointerEvents:Ge||(Ae?"all":"none"),...U,size:H,__staticSelector:"Select",disabled:T,readOnly:I||!F,value:se,onChange:j=>{q(j.currentTarget.value),$.openDropdown(),R&&$.selectFirstOption()},onFocus:j=>{F&&$.openDropdown(),u==null||u(j)},onBlur:j=>{var V;F&&$.closeDropdown(),q(L!=null&&((V=K[L])==null?void 0:V.label)||""),f==null||f(j)},onClick:j=>{F?$.openDropdown():$.toggleDropdown(),g==null||g(j)},classNames:Se,styles:Oe,unstyled:a,pointer:!F,error:ye})}),d.jsx(To,{data:ne,hidden:I||T,filter:W,search:se,limit:J,hiddenWhenEmpty:!F||!m,withScrollArea:Q,maxDropdownHeight:X,filterOptions:F&&(_==null?void 0:_.label)!==se,value:L,checkIconPosition:ee,withCheckIcon:oe,nothingFoundMessage:m,unstyled:a,labelId:U.label?`${Ce}-label`:void 0,"aria-label":U.label?void 0:U["aria-label"],renderOption:Je,scrollAreaProps:Xe})]}),d.jsx(x.HiddenInput,{value:L,name:w,form:y,disabled:T,...We})]})});qe.classes={...Pe.classes,...x.classes};qe.displayName="@mantine/core/Select";export{qe as S};
