"use strict";(self["webpackChunkf2ebus"]=self["webpackChunkf2ebus"]||[]).push([[443],{4195:function(t,e,o){o.r(e),o.d(e,{default:function(){return qe}});var a=o(3396),i=o(7139);const l={class:"infoDisplay-container d-flex"},s={class:"busInfo-container col-12 col-md-6 m-2 m-md-0 p-2"},n={key:0,class:"searchResultBar mt-3 mb-3 d-flex"},r={key:0},u={key:1},c={class:"searchResultBar mt-3 mb-3 d-flex"},p={key:0},m={class:"text-warning"},d=(0,a.Uk)(" ] 站牌的公車路線 "),g={class:"throughStopRoutes-container d-flex"},w=["onClick"],y={class:"nav nav-tabs"},S={key:2,class:"fareDropDown d-flex mt-3"},D={key:0,class:"originStopGo dropdown col-6 d-flex p-2"},k=(0,a._)("span",null,"選擇起站",-1),v={class:"btn btn-secondary dropdown-toggle me-3",type:"button",id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false"},b={key:0},f={key:1},C={class:"dropdown-menu filter-dropdown","aria-labelledby":"dropdownMenu2"},h=["onClick"],P={key:1,class:"originStopBack dropdown col-6 d-flex p-2"},W=(0,a._)("span",null,"選擇起站",-1),R={class:"btn btn-secondary dropdown-toggle me-3",type:"button",id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false"},T={key:0},_={key:1},N={class:"dropdown-menu filter-dropdown","aria-labelledby":"dropdownMenu2"},B=["onClick"],z={key:2,class:"targetStopGo dropdown col-6 d-flex p-2"},x=(0,a._)("span",null,"選擇迄站",-1),F={class:"btn btn-secondary dropdown-toggle me-3",type:"button",id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false"},Z={key:0},q={key:1},A={class:"dropdown-menu filter-dropdown","aria-labelledby":"dropdownMenu2"},I=["onClick"],H={key:3,class:"targetStopBack dropdown col-6 d-flex p-2"},E=(0,a._)("span",null,"選擇迄站",-1),L={class:"btn btn-secondary dropdown-toggle me-3",type:"button",id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false"},Y={key:0},M={key:1},j={class:"dropdown-menu filter-dropdown","aria-labelledby":"dropdownMenu2"},K=["onClick"],U={key:3,class:"busInfo"},V={key:0,class:"go"},X={class:"busInfo-container d-flex"},G=["onClick"],O={key:0},Q={key:0,class:"nearTime"},J={key:1,class:"alertTime"},$={key:2,class:"longTime"},tt={key:3},et={key:4},ot={key:5},at={key:6},it={key:1,class:"back"},lt={class:"busInfo-container d-flex"},st=["onClick"],nt={key:0},rt={key:0,class:"nearTime"},ut={key:1,class:"alertTime"},ct={key:2,class:"longTime"},pt={key:3},mt={key:4},dt={key:5},gt={key:6},wt={class:"openStreeMap col-12 col-md-6 m-2 m-md-0 p-2"};function yt(t,e,o,yt,St,Dt){const kt=(0,a.up)("ProgressBar"),vt=(0,a.up)("TopCategory"),bt=(0,a.up)("Filter"),ft=(0,a.up)("OpenStreeMap"),Ct=(0,a.up)("FareInfo");return(0,a.wg)(),(0,a.iD)(a.HY,null,["BusRoute"==t.currentCategory||"StopName"==t.currentCategory?((0,a.wg)(),(0,a.j4)(kt,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(vt),(0,a._)("div",l,[(0,a._)("div",s,[(0,a.Wm)(bt),"BusRoute"==t.currentCategory?((0,a.wg)(),(0,a.iD)("div",n,[t.selectRouteItemData.RouteName?((0,a.wg)(),(0,a.iD)("p",r,(0,i.zw)(t.selectRouteItemData.RouteName.Zh_tw),1)):(0,a.kq)("",!0),(0,a._)("p",null,(0,i.zw)(t.selectRouteItemData.DepartureStopNameZh)+"-"+(0,i.zw)(t.selectRouteItemData.DestinationStopNameZh),1)])):(0,a.kq)("",!0),"StopName"==t.currentCategory?((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",c,[t.selectStopItemData.StopName?((0,a.wg)(),(0,a.iD)("p",p,[(0,a.Uk)(" 經過"+(0,i.zw)(t.currentCityChineseName)+"的 [ ",1),(0,a._)("span",m,(0,i.zw)(t.selectStopItemData.StopName.Zh_tw),1),d])):(0,a.kq)("",!0)]),(0,a._)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.throughStopRoutes,((e,o)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["throughStopRoutes searchResultBar col-2 m-2 p-1",{citybtnActive:o==t.currentRouteIndex}]),key:o,onClick:a=>t.showThroughStopRouteData(e,o)},[(0,a._)("span",null," ["+(0,i.zw)(e.RouteName.Zh_tw)+"]"+(0,i.zw)(e.DepartureStopNameZh)+(0,i.zw)(e.DestinationStopNameZh),1)],10,w)))),128))])])):(0,a.kq)("",!0),(0,a._)("ul",y,["BusRoute"==t.currentCategory||"Ticket"==t.currentCategory?((0,a.wg)(),(0,a.iD)("li",{key:0,class:"nav-item col-6 text-center",onClick:e[0]||(e[0]=e=>t.selectDirection(0))},[(0,a._)("p",{class:(0,i.C_)(["nav-link text-dark",{btnActive:0==t.direction}])},(0,i.zw)(t.selectRouteItemData.DepartureStopNameZh)+"-"+(0,i.zw)(t.selectRouteItemData.DestinationStopNameZh),3)])):(0,a.kq)("",!0),"StopName"==t.currentCategory?((0,a.wg)(),(0,a.iD)("li",{key:1,class:"nav-item text-center col-6",onClick:e[1]||(e[1]=e=>t.selectDirection(0))},[t.itemDisplayData&&t.itemDisplayData.go&&t.itemDisplayData.go[0]&&t.itemDisplayData.go[0].Stops&&t.itemDisplayData.go[0].Stops[0]&&t.itemDisplayData.go[0].Stops[t.itemDisplayData.go[0].Stops.length-1]?((0,a.wg)(),(0,a.iD)("a",{key:0,class:(0,i.C_)(["nav-link text-dark col-6",{btnActive:0==t.direction}])},(0,i.zw)(t.itemDisplayData.go[0].Stops[0].StopName.Zh_tw)+"-"+(0,i.zw)(t.itemDisplayData.go[0].Stops[t.itemDisplayData.go[0].Stops.length-1].StopName.Zh_tw),3)):(0,a.kq)("",!0)])):(0,a.kq)("",!0),"BusRoute"==t.currentCategory||"Ticket"==t.currentCategory?((0,a.wg)(),(0,a.iD)("li",{key:2,class:"nav-item col-6 text-center",onClick:e[2]||(e[2]=e=>t.selectDirection(1))},[(0,a._)("a",{class:(0,i.C_)(["nav-link text-dark",{btnActive:1==t.direction}])},(0,i.zw)(t.selectRouteItemData.DestinationStopNameZh)+"-"+(0,i.zw)(t.selectRouteItemData.DepartureStopNameZh),3)])):(0,a.kq)("",!0),"StopName"==t.currentCategory?((0,a.wg)(),(0,a.iD)("li",{key:3,class:"nav-item col-6 text-center",onClick:e[3]||(e[3]=e=>t.selectDirection(1))},[t.itemDisplayData&&t.itemDisplayData.back&&t.itemDisplayData.back[0]&&t.itemDisplayData.back[0].Stops&&t.itemDisplayData.back[0].Stops[0]&&t.itemDisplayData.back[0].Stops[t.itemDisplayData.back[0].Stops.length-1]?((0,a.wg)(),(0,a.iD)("a",{key:0,class:(0,i.C_)(["nav-link",{btnActive:1==t.direction}])},(0,i.zw)(t.itemDisplayData.back[0].Stops[0].StopName.Zh_tw)+"-"+(0,i.zw)(t.itemDisplayData.back[0].Stops[t.itemDisplayData.back[0].Stops.length-1].StopName.Zh_tw),3)):(0,a.kq)("",!0)])):(0,a.kq)("",!0)]),"Ticket"==t.currentCategory?((0,a.wg)(),(0,a.iD)("div",S,[0==t.direction&&t.itemDisplayData.go?((0,a.wg)(),(0,a.iD)("div",D,[k,(0,a._)("button",v,[""!=t.originStop?((0,a.wg)(),(0,a.iD)("span",b,(0,i.zw)(t.originStop),1)):((0,a.wg)(),(0,a.iD)("span",f,"起點站"))]),(0,a._)("ul",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.itemDisplayData.go[0].Stops,((e,o)=>((0,a.wg)(),(0,a.iD)("li",{key:o},[(0,a._)("button",{class:"dropdown-item",type:"button",onClick:o=>t.setOriginStop(e.StopName.Zh_tw)},[(0,a._)("p",null,"["+(0,i.zw)(e.StopSequence)+"]"+(0,i.zw)(e.StopName.Zh_tw),1)],8,h)])))),128))])])):(0,a.kq)("",!0),1==t.direction&&t.itemDisplayData.back?((0,a.wg)(),(0,a.iD)("div",P,[W,(0,a._)("button",R,[""!=t.originStop?((0,a.wg)(),(0,a.iD)("span",T,(0,i.zw)(t.originStop),1)):((0,a.wg)(),(0,a.iD)("span",_,"起點站"))]),(0,a._)("ul",N,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.itemDisplayData.back[0].Stops,((e,o)=>((0,a.wg)(),(0,a.iD)("li",{key:o},[(0,a._)("button",{class:"dropdown-item",type:"button",onClick:o=>t.setOriginStop(e.StopName.Zh_tw)},[(0,a._)("p",null,"["+(0,i.zw)(e.StopSequence)+"]"+(0,i.zw)(e.StopName.Zh_tw),1)],8,B)])))),128))])])):(0,a.kq)("",!0),0==t.direction&&t.itemDisplayData.go?((0,a.wg)(),(0,a.iD)("div",z,[x,(0,a._)("button",F,[""!=t.targetStop?((0,a.wg)(),(0,a.iD)("span",Z,(0,i.zw)(t.targetStop),1)):((0,a.wg)(),(0,a.iD)("span",q,"終點站"))]),(0,a._)("ul",A,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.itemDisplayData.go[0].Stops,((e,o)=>((0,a.wg)(),(0,a.iD)("li",{key:o},[(0,a._)("button",{class:"dropdown-item",type:"button",onClick:o=>t.setTargetStop(e.StopName.Zh_tw)},[(0,a._)("p",null,"["+(0,i.zw)(e.StopSequence)+"]"+(0,i.zw)(e.StopName.Zh_tw),1)],8,I)])))),128))])])):(0,a.kq)("",!0),1==t.direction&&t.itemDisplayData.back?((0,a.wg)(),(0,a.iD)("div",H,[E,(0,a._)("button",L,[""!=t.targetStop?((0,a.wg)(),(0,a.iD)("span",Y,(0,i.zw)(t.targetStop),1)):((0,a.wg)(),(0,a.iD)("span",M,"終點站"))]),(0,a._)("ul",j,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.itemDisplayData.back[0].Stops,((e,o)=>((0,a.wg)(),(0,a.iD)("li",{key:o},[(0,a._)("button",{class:"dropdown-item",type:"button",onClick:o=>t.setTargetStop(e.StopName.Zh_tw)},[(0,a._)("p",null,"["+(0,i.zw)(e.StopSequence)+"]"+(0,i.zw)(e.StopName.Zh_tw),1)],8,K)])))),128))])])):(0,a.kq)("",!0)])):(0,a.kq)("",!0),"StopName"==t.currentCategory||"BusRoute"==t.currentCategory?((0,a.wg)(),(0,a.iD)("div",U,[0==t.direction&&t.itemDisplayData.go?((0,a.wg)(),(0,a.iD)("div",V,[(0,a._)("div",X,[(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.itemDisplayData.go[0].Stops,((e,o)=>((0,a.wg)(),(0,a.iD)("li",{class:"busInfo-li p-1",key:o,onClick:o=>t.sendStopPosition(e)},[(0,a._)("p",null,"["+(0,i.zw)(e.StopSequence)+"]"+(0,i.zw)(e.StopName.Zh_tw),1)],8,G)))),128))]),0==t.direction&&t.busEstimatedTime.go?((0,a.wg)(),(0,a.iD)("ul",O,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.busEstimatedTime.go,((t,e)=>((0,a.wg)(),(0,a.iD)("li",{class:"busEstimatedTime-li p-1",key:e},[t.EstimateTime&&t.EstimateTime>180?((0,a.wg)(),(0,a.iD)("p",Q,(0,i.zw)(parseInt(t.EstimateTime/60))+"分後到站 ",1)):(0,a.kq)("",!0),t.EstimateTime<=180?((0,a.wg)(),(0,a.iD)("p",J,"即將進站")):(0,a.kq)("",!0),1==t.StopStatus&&t.NextBusTime?((0,a.wg)(),(0,a.iD)("p",$,(0,i.zw)(t.NextBusTime.split("T")[1].split(":")[0])+":"+(0,i.zw)(t.NextBusTime.split("T")[1].split(":")[1]),1)):(0,a.kq)("",!0),1!=t.StopStatus||t.NextBusTime?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",tt,"尚未發車")),2==t.StopStatus?((0,a.wg)(),(0,a.iD)("p",et,"交管不停靠")):(0,a.kq)("",!0),3==t.StopStatus?((0,a.wg)(),(0,a.iD)("p",ot,"末班車已駛離")):(0,a.kq)("",!0),4==t.StopStatus?((0,a.wg)(),(0,a.iD)("p",at,"本日未營運")):(0,a.kq)("",!0)])))),128))])):(0,a.kq)("",!0)])])):(0,a.kq)("",!0),1==t.direction&&t.itemDisplayData.back?((0,a.wg)(),(0,a.iD)("div",it,[(0,a._)("div",lt,[(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.itemDisplayData.back[0].Stops,((e,o)=>((0,a.wg)(),(0,a.iD)("li",{class:"busInfo-li p-1",key:o,onClick:o=>t.sendStopPosition(e)},[(0,a._)("p",null,"["+(0,i.zw)(e.StopSequence)+"]"+(0,i.zw)(e.StopName.Zh_tw),1)],8,st)))),128))]),1==t.direction&&t.busEstimatedTime.back?((0,a.wg)(),(0,a.iD)("ul",nt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.busEstimatedTime.back,((t,e)=>((0,a.wg)(),(0,a.iD)("li",{class:"busEstimatedTime-li p-1",key:e},[t.EstimateTime&&t.EstimateTime>180?((0,a.wg)(),(0,a.iD)("p",rt,(0,i.zw)(parseInt(t.EstimateTime/60))+"分後到站 ",1)):(0,a.kq)("",!0),t.EstimateTime<=180?((0,a.wg)(),(0,a.iD)("p",ut,"即將進站")):(0,a.kq)("",!0),1==t.StopStatus&&t.NextBusTime?((0,a.wg)(),(0,a.iD)("p",ct,(0,i.zw)(t.NextBusTime.split("T")[1].split(":")[0])+":"+(0,i.zw)(t.NextBusTime.split("T")[1].split(":")[1]),1)):(0,a.kq)("",!0),1!=t.StopStatus||t.NextBusTime?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",pt,"尚未發車")),2==t.StopStatus?((0,a.wg)(),(0,a.iD)("p",mt,"交管不停靠")):(0,a.kq)("",!0),3==t.StopStatus?((0,a.wg)(),(0,a.iD)("p",dt,"末班車已駛離")):(0,a.kq)("",!0),4==t.StopStatus?((0,a.wg)(),(0,a.iD)("p",gt,"本日未營運")):(0,a.kq)("",!0)])))),128))])):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)]),(0,a._)("div",wt,["Ticket"!==t.currentCategory?((0,a.wg)(),(0,a.j4)(ft,{key:0})):(0,a.kq)("",!0),"Ticket"==t.currentCategory?((0,a.wg)(),(0,a.j4)(Ct,{key:1})):(0,a.kq)("",!0)])])],64)}var St=o(4870),Dt=o(1167);const kt={class:"selectNavbar navbar-expand-md navbar-light"},vt=(0,a._)("a",{href:"#"},[(0,a._)("img",{class:"d-sm-block d-md-none w-75 ms-3",src:Dt,alt:""})],-1),bt=(0,a._)("button",{class:"navbar-toggler ms-sm-2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),ft={class:"collapse navbar-collapse",id:"navbarNavDropdown"},Ct={class:"category-ul navbar-nav w-100 justify-content-around"},ht={class:"nav-item miniSelectBtn col-12 col-md-5 col-lg-2 m-1"},Pt=(0,a._)("div",{class:"bus1"},null,-1),Wt=(0,a._)("p",{class:"category-text text-danger"},"公車動態",-1),Rt=[Pt,Wt],Tt={class:"nav-item miniSelectBtn col-12 col-md-5 col-lg-2 m-1"},_t=(0,a._)("div",{class:"busStop"},null,-1),Nt=(0,a._)("p",{class:"category-text text-primary"},"站點查詢",-1),Bt=[_t,Nt],zt={class:"nav-item miniSelectBtn col-12 col-md-5 col-lg-2 m-1"},xt=(0,a._)("div",{class:"ticket"},null,-1),Ft=(0,a._)("p",{class:"category-text text-warning"},"票價查詢",-1),Zt=[xt,Ft],qt={class:"nav-item miniSelectBtn col-12 col-md-5 col-lg-2 m-1"},At=(0,a._)("div",{class:"roadPlan"},null,-1),It=(0,a._)("p",{class:"category-text text-success"},"附近站牌",-1),Ht=[At,It];function Et(t,e,o,l,s,n){return(0,a.wg)(),(0,a.iD)("nav",kt,[vt,bt,(0,a._)("div",ft,[(0,a._)("ul",Ct,[(0,a._)("li",ht,[(0,a._)("div",{class:(0,i.C_)(["nav-link d-flex align-items-center",{btnActive:"BusRoute"==t.currentCategory}]),onClick:e[0]||(e[0]=e=>t.setFilterCategory(0))},Rt,2)]),(0,a._)("li",Tt,[(0,a._)("div",{class:(0,i.C_)(["nav-link d-flex align-items-center",{btnActive:"StopName"==t.currentCategory}]),onClick:e[1]||(e[1]=e=>t.setFilterCategory(1))},Bt,2)]),(0,a._)("li",zt,[(0,a._)("div",{class:(0,i.C_)(["nav-link d-flex align-items-center",{btnActive:"Ticket"==t.currentCategory}]),onClick:e[2]||(e[2]=e=>t.setFilterCategory(2))},Zt,2)]),(0,a._)("li",qt,[(0,a._)("div",{class:(0,i.C_)(["nav-link d-flex align-items-center",{btnActive:"BusPlanning"==t.currentCategory}]),onClick:e[3]||(e[3]=e=>t.setFilterCategory(3))},Ht,2)])])])])}var Lt=o(9749),Yt=o(534),Mt=o(678),jt=(0,a.aZ)({components:{},setup(){const t=(0,Lt.oR)(),e=(0,St.Fl)((()=>t.state.currentCity)),o=(0,St.Fl)((()=>Yt.WD[t.state.currentCategory])),a=(0,Mt.tv)();function i(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((o=>{t.commit("nearUserStops/setUserPosition",[o.coords.longitude,o.coords.latitude]),t.commit("busStop/setcurrentCenterStopPosition",[o.coords.longitude,o.coords.latitude]),t.commit("nearUserStops/getnearStopData",e.value),t.commit("openStreeMap/setMapZoom",14)}))}function l(o){if(t.commit("setCurrentCategory",o),e.value){switch(o){case Yt.WD.BusRoute:t.commit("setPlaceHolder","請輸入公車路線號碼或起訖站名稱"),t.commit("busRoute/getCityBusRoute",e.value);break;case Yt.WD.StopName:t.commit("setPlaceHolder","請輸入要查詢的公車站牌"),t.commit("busStop/getCityBusStop",e.value),t.commit("busRoute/getCityBusRoute",e.value),t.commit("busStop/getCityAllRoutesStops",e.value);break;case Yt.WD.Ticket:console.log("請求縣市所有公車路線資料"),t.commit("setPlaceHolder","請輸入欲查詢的公車路線號碼"),t.commit("busRoute/getCityBusRoute",e.value);break;case Yt.WD.NearStop:i();break}a.push("/InfoDisplay")}}return{currentCategory:o,setFilterCategory:l}}}),Kt=o(89);const Ut=(0,Kt.Z)(jt,[["render",Et]]);var Vt=Ut;const Xt={key:1},Gt={key:0},Ot={key:2},Qt={key:0},Jt={key:3};function $t(t,e,o,i,l,s){const n=(0,a.up)("ol-view"),r=(0,a.up)("ol-fullscreen-control"),u=(0,a.up)("ol-source-osm"),c=(0,a.up)("ol-tile-layer"),p=(0,a.up)("ol-geom-point"),m=(0,a.up)("ol-style-fill"),d=(0,a.up)("ol-style-stroke"),g=(0,a.up)("ol-style-text"),w=(0,a.up)("ol-style-circle"),y=(0,a.up)("ol-style"),S=(0,a.up)("ol-feature"),D=(0,a.up)("ol-source-vector"),k=(0,a.up)("ol-vector-layer"),v=(0,a.up)("ol-geom-line-string"),b=(0,a.up)("ol-animation-slide"),f=(0,a.up)("ol-style-icon"),C=(0,a.up)("ol-map");return(0,a.wg)(),(0,a.j4)(C,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"550px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{ref:"view",center:t.center,rotation:t.rotation,zoom:t.zoom,projection:t.projection},null,8,["center","rotation","zoom","projection"]),t.fullscreencontrol?((0,a.wg)(),(0,a.j4)(r,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u)])),_:1}),"NearStop"==t.currentCategory?((0,a.wg)(),(0,a.iD)("div",Xt,[(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{coordinates:t.userPosition},null,8,["coordinates"]),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{radius:"20"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{color:"yellow"}),(0,a.Wm)(d,{color:"blue",width:t.strokeWidth},null,8,["width"]),(0,a.Wm)(g,{text:"me",scale:"2"})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),t.nearStop?((0,a.wg)(),(0,a.iD)("div",Gt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.nearStop,((e,o)=>((0,a.wg)(),(0,a.j4)(k,{key:o},{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[e.StopPosition?((0,a.wg)(),(0,a.j4)(S,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{coordinates:[e.StopPosition.PositionLon,e.StopPosition.PositionLat]},null,8,["coordinates"]),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{radius:"40"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{color:t.fillColor},null,8,["color"]),(0,a.Wm)(d,{color:t.strokeColor,width:t.strokeWidth},null,8,["color","width"]),(0,a.Wm)(g,{text:e.StopName.Zh_tw},null,8,["text"])])),_:2},1024)])),_:2},1024)])),_:2},1024)):(0,a.kq)("",!0)])),_:2},1024)])),_:2},1024)))),128))])):(0,a.kq)("",!0)])):(0,a.kq)("",!0),t.itemDisplayData.go&&0==t.direction&&"NearStop"!==t.currentCategory?((0,a.wg)(),(0,a.iD)("div",Ot,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.itemDisplayData.go[0].Stops,((e,o)=>((0,a.wg)(),(0,a.j4)(k,{key:o},{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{duration:1e3,repeat:1},{default:(0,a.w5)((()=>[o<t.itemDisplayData.go[0].Stops.length-1?((0,a.wg)(),(0,a.j4)(S,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{coordinates:[[t.itemDisplayData.go[0].Stops[o].StopPosition.PositionLon,t.itemDisplayData.go[0].Stops[o].StopPosition.PositionLat],[t.itemDisplayData.go[0].Stops[o+1].StopPosition.PositionLon,t.itemDisplayData.go[0].Stops[o+1].StopPosition.PositionLat]]},null,8,["coordinates"]),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{color:t.strokeColor,width:t.strokeWidth},null,8,["color","width"])])),_:1})])),_:2},1024)):(0,a.kq)("",!0),(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{coordinates:[e.StopPosition.PositionLon,e.StopPosition.PositionLat]},null,8,["coordinates"]),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{radius:t.radius},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{color:t.fillColor},null,8,["color"]),(0,a.Wm)(d,{color:t.strokeColor,width:t.strokeWidth},null,8,["color","width"]),(0,a.Wm)(g,{text:String(o+1)},null,8,["text"])])),_:2},1032,["radius"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),"BusRoute"==t.currentCategory||"StopName"==t.currentCategory?((0,a.wg)(),(0,a.iD)("div",Qt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.busReallTime.go,((e,o)=>((0,a.wg)(),(0,a.j4)(k,{key:o},{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{coordinates:[e.BusPosition.PositionLon,e.BusPosition.PositionLat]},null,8,["coordinates"]),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{color:t.fillColor},null,8,["color"]),(0,a.Wm)(d,{color:t.strokeColor,width:t.strokeWidth},null,8,["color","width"]),(0,a.Wm)(g,{text:e.PlateNumb},null,8,["text"]),(0,a.Wm)(f,{src:t.busIcon,scale:1},null,8,["src"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])):(0,a.kq)("",!0)])):(0,a.kq)("",!0),t.itemDisplayData.back&&1==t.direction&&"NearStop"!==t.currentCategory?((0,a.wg)(),(0,a.iD)("div",Jt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.itemDisplayData.back[0].Stops,((e,o)=>((0,a.wg)(),(0,a.j4)(k,{key:o},{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{duration:1e3,repeat:1},{default:(0,a.w5)((()=>[o<t.itemDisplayData.back[0].Stops.length-1?((0,a.wg)(),(0,a.j4)(S,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{coordinates:[[t.itemDisplayData.back[0].Stops[o].StopPosition.PositionLon,t.itemDisplayData.back[0].Stops[o].StopPosition.PositionLat],[t.itemDisplayData.back[0].Stops[o+1].StopPosition.PositionLon,t.itemDisplayData.back[0].Stops[o+1].StopPosition.PositionLat]]},null,8,["coordinates"]),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{color:t.strokeColor,width:t.strokeWidth},null,8,["color","width"])])),_:1})])),_:2},1024)):(0,a.kq)("",!0),(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{coordinates:[e.StopPosition.PositionLon,e.StopPosition.PositionLat]},null,8,["coordinates"]),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{radius:t.radius},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{color:t.fillColor},null,8,["color"]),(0,a.Wm)(d,{color:t.strokeColor,width:t.strokeWidth},null,8,["color","width"]),(0,a.Wm)(g,{text:String(o+1)},null,8,["text"])])),_:2},1032,["radius"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.busReallTime.back,((e,o)=>((0,a.wg)(),(0,a.j4)(k,{key:o},{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{coordinates:[e.BusPosition.PositionLon,e.BusPosition.PositionLat]},null,8,["coordinates"]),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{color:t.fillColor},null,8,["color"]),(0,a.Wm)(d,{color:t.strokeColor,width:t.strokeWidth},null,8,["color","width"]),(0,a.Wm)(g,{text:e.PlateNumb},null,8,["text"]),(0,a.Wm)(f,{src:t.busIcon,scale:1},null,8,["src"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])):(0,a.kq)("",!0)])),_:1})}var te=(0,a.aZ)({setup(){const t=(0,St.Fl)((()=>m.state.busStop.currentCenterStopPosition)),e=(0,St.iH)("EPSG:4326"),i=(0,St.Fl)((()=>m.state.openStreeMap.zoomIn)),l=(0,St.iH)(0),s=(0,St.iH)(10),n=(0,St.iH)(5),r=(0,St.iH)("red"),u=(0,St.iH)("white"),c=(0,St.iH)(!0),p=o(4156),m=(0,Lt.oR)(),d=(0,St.Fl)((()=>m.state.busStop.cityBusStopByRouteName)),g=(0,St.Fl)((()=>m.state.currentCity)),w=(0,St.Fl)((()=>Yt.WD[m.state.currentCategory])),y=(0,St.Fl)((()=>m.state.busStop.currentDirection)),S=(0,St.Fl)((()=>m.state.busReallTime.routeBusReallTime)),D=(0,St.Fl)((()=>m.state.nearUserStops.userPosition)),k=(0,St.Fl)((()=>m.state.nearUserStops.nearStopData));function v(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((t=>{m.commit("nearUserStops/setUserPosition",[t.coords.longitude,t.coords.latitude]),m.commit("busStop/setcurrentCenterStopPosition",[t.coords.longitude,t.coords.latitude]),m.commit("nearUserStops/getnearStopData",g.value),m.commit("openStreeMap/setMapZoom",14)}))}return(0,a.YP)(g,(()=>{"NearStop"==w.value&&v()})),(0,a.YP)(S.value,(()=>{console.log("公車動態資料",S.value)})),(0,a.YP)(d.value,(()=>{d.value.go&&y.value==Yt.Nm.go?m.commit("busStop/setcurrentCenterStopPosition",[d.value.go[0].Stops[0].StopPosition.PositionLon,d.value.go[0].Stops[0].StopPosition.PositionLat]):d.value.back&&y.value==Yt.Nm.back&&m.commit("busStop/setcurrentCenterStopPosition",[d.value.back[0].Stops[0].StopPosition.PositionLon,d.value.back[0].Stops[0].StopPosition.PositionLat])})),{itemDisplayData:d,currentCategory:w,center:t,projection:e,zoom:i,rotation:l,radius:s,strokeWidth:n,strokeColor:r,fillColor:u,direction:y,fullscreencontrol:c,busReallTime:S,busIcon:p,userPosition:D,nearStop:k}}});const ee=(0,Kt.Z)(te,[["render",$t]]);var oe=ee,ae=o(9242);const ie={class:"filter"},le={class:"filter-title w-100"},se={class:"dropdown d-flex"},ne={class:"btn btn-secondary dropdown-toggle me-3",type:"button",id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false"},re={key:0},ue={key:1},ce={key:0},pe={class:"dropdown-menu filter-dropdown","aria-labelledby":"dropdownMenu2"},me=["onClick"],de=["placeholder"],ge={class:"dropdown-menu filter-dropdown","aria-labelledby":"dropdownMenuButton1"},we=["onClick"],ye=["onClick"],Se=["onClick"];function De(t,e,o,l,s,n){return(0,a.wg)(),(0,a.iD)("div",ie,[(0,a._)("section",le,[(0,a._)("div",se,[(0,a._)("button",ne,[t.currentCity?((0,a.wg)(),(0,a.iD)("span",re,(0,i.zw)(t.currentCityChineseName),1)):((0,a.wg)(),(0,a.iD)("span",ue,"選擇縣市"))]),"NearStop"==t.currentCategory?((0,a.wg)(),(0,a.iD)("p",ce,"請記得選擇您所在的城市唷!")):(0,a.kq)("",!0),(0,a._)("ul",pe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.cityList,((e,o)=>((0,a.wg)(),(0,a.iD)("li",{key:o},[(0,a._)("button",{class:"dropdown-item",type:"button",onClick:o=>t.selectCity(e.City)},(0,i.zw)(e.CityName),9,me)])))),128))]),"NearStop"!==t.currentCategory?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:1,type:"text",class:"filterInput form-control w-100",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","onUpdate:modelValue":e[0]||(e[0]=e=>t.keyWord=e),placeholder:t.placeholder},null,8,de)),[[ae.nr,t.keyWord]]):(0,a.kq)("",!0),(0,a._)("ul",ge,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.filterData,((e,o)=>((0,a.wg)(),(0,a.iD)("li",{key:o},["BusRoute"==t.currentCategory?((0,a.wg)(),(0,a.iD)("a",{key:0,class:"dropdown-item",onClick:o=>t.sendCityRouteData(e)},"["+(0,i.zw)(e.RouteName.Zh_tw)+"]"+(0,i.zw)(e.DepartureStopNameZh)+"-"+(0,i.zw)(e.DestinationStopNameZh),9,we)):(0,a.kq)("",!0),"StopName"==t.currentCategory?((0,a.wg)(),(0,a.iD)("a",{key:1,class:"dropdown-item",onClick:o=>t.sendCityStopData(e)},(0,i.zw)(e.StopName.Zh_tw),9,ye)):(0,a.kq)("",!0),"Ticket"==t.currentCategory?((0,a.wg)(),(0,a.iD)("a",{key:2,class:"dropdown-item",onClick:o=>t.sendCityRouteDataForFare(e)},"["+(0,i.zw)(e.RouteName.Zh_tw)+"]"+(0,i.zw)(e.DepartureStopNameZh)+"-"+(0,i.zw)(e.DestinationStopNameZh),9,Se)):(0,a.kq)("",!0)])))),128))])])])])}var ke=(0,a.aZ)({components:{},setup(){const t=(0,Lt.oR)(),e=t.state.cityList,o=(0,St.iH)(""),i=(0,St.Fl)((()=>t.state.placeHolder)),l=(0,St.Fl)((()=>t.state.currentCity)),s=(0,St.Fl)((()=>t.state.currentCityChineseName)),n=(0,St.Fl)((()=>Yt.WD[t.state.currentCategory])),r=(0,St.Fl)((()=>{switch(n.value){case Yt.WD[Yt.WD.Ticket]:case Yt.WD[Yt.WD.BusRoute]:return t.state.busRoute.cityBusRoute[l.value];case Yt.WD[Yt.WD.StopName]:return t.state.busStop.cityBusStop[l.value]}})),u=(0,St.Fl)((()=>{if(r.value)switch(n.value){case Yt.WD[Yt.WD.BusRoute]:return r.value.filter((t=>t.RouteName.Zh_tw.includes(o.value)||t.DepartureStopNameZh.includes(o.value)||t.DestinationStopNameZh.includes(o.value)));case Yt.WD[Yt.WD.StopName]:let t=r.value.filter((t=>t.StopName.Zh_tw.includes(o.value)));return t;case Yt.WD[Yt.WD.Ticket]:return r.value.filter((t=>t.RouteName.Zh_tw.includes(o.value)||t.DepartureStopNameZh.includes(o.value)||t.DestinationStopNameZh.includes(o.value)))}}));function c(e){switch(t.commit("setCurrentCity",e),n.value){case Yt.WD[Yt.WD.Ticket]:case Yt.WD[Yt.WD.BusRoute]:console.log("執行公車路線搜尋"),t.commit("busRoute/getCityBusRoute",e);break;case Yt.WD[Yt.WD.StopName]:console.log("執行公車站牌搜尋"),t.commit("busStop/getCityBusStop",e),t.commit("busRoute/getCityBusRoute",e),t.commit("busStop/getCityAllRoutesStops",e);break}}function p(e){console.log("傳送當前選擇的資料",e),t.commit("setSelectRouteItem",e)}function m(e){console.log("傳送當前選擇的站牌資料",e),t.commit("setSelectStopItem",e)}function d(e){console.log("傳送當前選擇的路線資料",e),t.commit("busFare/getRouteFareBy",e),t.commit("setSelectRouteItem",e)}return(0,a.YP)(u,(()=>{console.log(u.value)})),{keyWord:o,cityList:e,filterData:u,currentCity:l,currentCityChineseName:s,currentCategory:n,placeholder:i,selectCity:c,sendCityRouteData:p,sendCityStopData:m,sendCityRouteDataForFare:d}}});const ve=(0,Kt.Z)(ke,[["render",De]]);var be=ve;const fe={class:"progress"},Ce=["aria-valuenow"];function he(t,e,o,l,s,n){return(0,a.wg)(),(0,a.iD)("div",fe,[(0,a._)("div",{class:"progress-bar",role:"progressbar","aria-valuenow":t.updateCountDown,"aria-valuemin":"0","aria-valuemax":"30"},(0,i.zw)(t.updateCountDown),9,Ce),(0,a._)("button",{class:"reload",onClick:e[0]||(e[0]=(...e)=>t.updateData&&t.updateData(...e))},"重新整理")])}var Pe=(0,a.aZ)({components:{},setup(){const t=(0,Lt.oR)(),e=(0,St.Fl)((()=>t.state.selectRouteItem)),o=(0,St.Fl)((()=>t.state.busStop.cityBusStopByRouteName)),i=(0,St.Fl)((()=>t.state.busEstimatedTime.busEstimatedTime)),l=(0,St.Fl)((()=>Yt.WD[t.state.currentCategory])),s=(0,St.iH)(30),n=(0,St.iH)({});function r(){c(),n.value=setInterval((()=>{s.value<=0&&(e.value&&"BusRoute"==l.value?t.commit("busEstimatedTime/getBusEstimatedTime",e.value):o.value&&"StopName"==l.value&&t.commit("busEstimatedTime/getBusEstimatedTime",o.value.go[0]),s.value=30),s.value--}),1e3)}function u(){c(),"BusRoute"==l.value&&e.value?t.commit("busEstimatedTime/getBusEstimatedTime",e.value):"StopName"==l.value&&o.value&&t.commit("busEstimatedTime/getBusEstimatedTime",o.value.go[0])}function c(){n.value&&(clearInterval(n.value),s.value=30)}return(0,a.YP)(e,(()=>{console.log(e.value),t.commit("busReallTime/getRouteBusReallTime",e.value),t.commit("busStop/getCityBusStopByRoute",e.value),t.commit("busEstimatedTime/getBusEstimatedTime",e.value),t.commit("openStreeMap/setMapZoom",14)})),(0,a.YP)(o.value,(()=>{console.log("選擇的公車路線",o.value),t.commit("busReallTime/getRouteBusReallTime",o.value.go[0]),t.commit("busEstimatedTime/getBusEstimatedTime",o.value.go[0]),t.commit("openStreeMap/setMapZoom",14)})),(0,a.YP)(i.value,(()=>{r(),console.log("預估時間資料",i.value)})),{updateCountDown:s,updateData:u}}});const We=(0,Kt.Z)(Pe,[["render",he]]);var Re=We;const Te={class:"fareInfo-container"},_e=(0,a._)("h1",{class:"text-warning"},"票價資訊",-1);function Ne(t,e,o,l,s,n){return(0,a.wg)(),(0,a.iD)("div",Te,[_e,(0,a._)("h3",null,"全票"+(0,i.zw)(t.fareInfo)+"元",1)])}var Be=(0,a.aZ)({components:{},setup(){const t=(0,Lt.oR)(),e=(0,St.Fl)((()=>t.state.selectRouteItem)),o=(0,St.Fl)((()=>t.state.busStop.currentDirection)),i=(0,St.Fl)((()=>t.state.busFare.routeFare)),l=(0,St.Fl)((()=>t.state.busFare.selectOriginStop)),s=(0,St.Fl)((()=>t.state.busFare.selectTargetStop)),n=(0,St.iH)(0);async function r(){if(0==o.value){let t=await i.value.go.filter((t=>t.OriginStop.StopName==l.value&&t.DestinationStop.StopName==s.value));n.value=t[0].Fares[0].Price,console.log(n.value)}else if(1==o.value){let t=await i.value.back.filter((t=>t.OriginStop.StopName==l.value&&t.DestinationStop.StopName==s.value));n.value=t[0].Fares[0].Price,console.log(n.value)}}return(0,a.YP)([l,s],(()=>{l.value&&s.value&&i.value&&r()})),(0,a.YP)(i.value,(()=>{console.log(i.value),l.value&&s.value&&i.value&&r()})),(0,a.YP)(e,(()=>{t.commit("busStop/getCityBusStopByRoute",e.value)})),{fareInfo:n}}});const ze=(0,Kt.Z)(Be,[["render",Ne]]);var xe=ze,Fe=(0,a.aZ)({components:{TopCategory:Vt,OpenStreeMap:oe,Filter:be,ProgressBar:Re,FareInfo:xe},setup(){(0,a.bv)((()=>{}));const t=(0,Lt.oR)(),e=(0,St.Fl)((()=>t.state.selectRouteItem)),o=(0,St.Fl)((()=>t.state.selectStopItem)),i=(0,St.Fl)((()=>t.state.busRoute.cityBusRoute)),l=(0,St.Fl)((()=>t.state.busStop.cityBusStopByRouteName)),s=(0,St.Fl)((()=>t.state.busStop.cityAllRoutesStops)),n=(0,St.Fl)((()=>t.state.busEstimatedTime.busEstimatedTime)),r=(0,St.Fl)((()=>t.state.currentCity)),u=(0,St.Fl)((()=>Yt.WD[t.state.currentCategory])),c=(0,St.Fl)((()=>t.state.currentCityChineseName)),p=(0,St.Fl)((()=>t.state.busStop.currentDirection)),m=(0,St.Fl)((()=>t.state.busFare.selectTargetStop)),d=(0,St.Fl)((()=>t.state.busFare.selectOriginStop)),g=(0,St.iH)(-1),w=(0,St.iH)({});function y(e,o){g.value=o,t.commit("busStop/getCityBusStopByRoute",e)}function S(e){t.commit("busStop/setCurrentDirection",e)}function D(){if(e.value&&i.value){let t=o.value.StopUID;console.log(r.value,"資料",s.value);let e=s.value[r.value],a=e.filter((e=>{let o=!1,a=e.Stops;return a.forEach((e=>{e.StopUID==t&&(o=!0)})),o}));const i=new Set,l=a.filter((t=>!i.has(t.RouteName.Zh_tw)&&i.add(t.RouteName.Zh_tw)));a=l,w.value=a,console.log("站名",t,"所有公車路線名稱",e,"最後得到的名單",a)}}function k(e){t.commit("busStop/setcurrentCenterStopPosition",[e.StopPosition.PositionLon,e.StopPosition.PositionLat]),t.commit("openStreeMap/setMapZoom",20)}function v(e){t.commit("busFare/setOriginStop",e)}function b(e){t.commit("busFare/setTargetStop",e)}return(0,a.YP)(o,(()=>{D()})),{itemDisplayData:l,selectRouteItemData:e,direction:p,currentCategory:u,busEstimatedTime:n,selectStopItemData:o,currentCityChineseName:c,throughStopRoutes:w,originStop:d,targetStop:m,currentRouteIndex:g,selectDirection:S,showThroughStopRouteData:y,sendStopPosition:k,setOriginStop:v,setTargetStop:b}}});const Ze=(0,Kt.Z)(Fe,[["render",yt]]);var qe=Ze},4156:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=about.3820c96a.js.map