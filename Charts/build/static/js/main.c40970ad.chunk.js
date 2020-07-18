(this.webpackJsonpreactcharts=this.webpackJsonpreactcharts||[]).push([[0],{169:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(46),s=a.n(o),i=(a(53),a(15)),c=a(16),u=a(18),l=a(17),d=a(19),m=(a(54),a(20)),p=(a(150),a(151)),h=!0,g=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e={trackNames:[],subTrackData:{},subAudioFeatureData:{}};try{Object.keys(this.props.rawIncomingData).map((function(a){return e[a]=t.props.rawIncomingData[a]})),e.spotifyAudioFeatures.map((function(t){e.subAudioFeatureData[t]=[]})),e.rawDataByTrack.map((function(t){e.trackNames.push(t.trackName),e.subTrackData[t.trackName]=[],e.spotifyAudioFeatures.map((function(a){e.subAudioFeatureData[a].push(t.audioFeatures[a]),e.subTrackData[t.trackName].push(t.audioFeatures[a])}))})),e.dataByAudioFeature={datasets:[],labels:e.trackNames},e.dataByTrack={datasets:[],labels:e.spotifyAudioFeatures};var a=0;e.spotifyAudioFeatures.map((function(t){var n={label:t,data:e.subAudioFeatureData[t],fill:!1,borderColor:e.colors[a]};(a+=1)===e.colors.length&&(a=0),e.dataByAudioFeature.datasets.push(n)}));var n=0;e.rawDataByTrack.map((function(t){var a={label:t.trackName,data:e.subTrackData[t.trackName],fill:!1,borderColor:e.colors[n]};(n+=1)===e.colors.length&&(n=0),e.dataByTrack.datasets.push(a)})),h=!1}catch(o){console.log("still loading data"),h=!0}return h?r.a.createElement("div",{className:"loading"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"}},r.a.createElement(p,{name:"ball-triangle-path",fadeIn:"none"})),r.a.createElement("div",null,r.a.createElement("h1",null,"Loading track data..."))):"cluster"===e.mode?r.a.createElement("div",{className:"chart"},r.a.createElement(m.b,{data:e.dataByTrack,options:{title:{display:this.props.displayTitle,text:this.props.title,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition},scale:{ticks:{beginAtZero:!0,max:1}}}})):r.a.createElement("div",{className:"chart"},r.a.createElement("div",{className:"topRow"},r.a.createElement("div",{className:"buttons"},r.a.createElement("form",{onSubmit:function(e){return t.props.onRequestNewTracks(e)}},r.a.createElement("input",{type:"submit",value:"Request new tracks"})),r.a.createElement("form",{onSubmit:function(e){return t.props.onCommitSet(e)}},r.a.createElement("input",{type:"submit",value:"Commit current set to Spotify"}))),r.a.createElement("div",{className:"radar"},r.a.createElement(m.b,{data:e.dataByTrack,options:{responsive:!0,maintainAspectRatio:!1,dragData:!0,dragDataRound:2,showTooltip:!0,title:{display:!1,text:this.props.title,fontSize:25},legend:{display:!0,position:"right"},scale:{ticks:{beginAtZero:!0,max:1}},onDragStart:function(t,e){},onDrag:function(t,e,a,n){t.target.style.cursor="grabbing"},onDragEnd:function(e,a,n,r){t.props.onDrag(a,n,r),e.target.style.cursor="default"},hover:{onHover:function(t){this.getElementAtEvent(t).length?t.target.style.cursor="grab":t.target.style.cursor="default"}}}}))),r.a.createElement("div",{className:"line"},r.a.createElement(m.a,{data:e.dataByAudioFeature,options:{responsive:!0,maintainAspectRatio:!1,dragData:!0,dragDataRound:2,title:{display:!1,text:this.props.title,fontSize:25},scales:{yAxes:[{ticks:{min:0,max:1,stepSize:.1}}]},legend:{display:this.props.displayLegend,position:"right"},onDragStart:function(t,e){},onDrag:function(t,e,a,n){t.target.style.cursor="grabbing"},onDragEnd:function(e,a,n,r){t.props.onDrag(n,a,r),e.target.style.cursor="default"},hover:{onHover:function(t){this.getElementAtEvent(t).length?t.target.style.cursor="grab":t.target.style.cursor="default"}}}})))}}]),e}(n.Component);g.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"right"};var f=g,y=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).handleDrag=function(e,a,n){var r=t.state.rawIncomingData.spotifyAudioFeatures[a];t.setState((function(t){var a=Object.assign({},t.rawIncomingData.rawDataByTrack[e]);return a.audioFeatures[r]=n,a.audioFeatures.shouldChange=1,{selectedTrack:a}}))},t.handleReset=function(e){e.preventDefault(),console.log("Reset triggered"),t.setState({rawIncomingData:t.state.previousState})},t.state={},t}return Object(d.a)(e,t),Object(c.a)(e,[{key:"handleCommitSet",value:function(t){t.preventDefault();var e=window.location.search,a=new URLSearchParams(e),n={refresh_token:a.get("refresh_token"),mode:a.get("mode")};fetch("https://music-in-context-backend.herokuapp.com/commitplaylist",{mode:"cors",method:"POST",body:JSON.stringify({refresh_token:n.refresh_token,mode:n.mode}),headers:{"Content-Type":"application/json"}}).then(console.log("Sent to Spotify"))}},{key:"handleRequestNewTracks",value:function(t){var e=this;t.preventDefault();var a=window.location.search,n=new URLSearchParams(a),r={refresh_token:n.get("refresh_token"),mode:n.get("mode")};fetch("https://music-in-context-backend.herokuapp.com/changeset",{mode:"cors",method:"POST",body:JSON.stringify({previousTrackList:this.state.rawIncomingData.rawDataByTrack,previousTrackIDs:this.state.rawIncomingData.trackIDs,refresh_token:r.refresh_token,mode:r.mode}),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){e.setState((function(e){var a=Object.assign({},e.rawIncomingData);return a.rawDataByTrack=t.newTracks,a.trackIDs=t.trackIDs,{rawIncomingData:a}}))})).then(console.log(this.state))}},{key:"componentDidMount",value:function(){var t=this,e=window.location.search,a=new URLSearchParams(e),n={refresh_token:a.get("refresh_token"),mode:a.get("mode"),form_data:a.get("form_data")};fetch("https://music-in-context-backend.herokuapp.com/data",{mode:"cors",method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(e){t.setState({rawIncomingData:e,previousState:e})}))}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement(f,{rawIncomingData:this.state.rawIncomingData,title:"Audio Features",legendPosition:"bottom",onDrag:function(e,a,n){return t.handleDrag(e,a,n)},onRequestNewTracks:function(e){return t.handleRequestNewTracks(e)},onCommitSet:function(e){return t.handleCommitSet(e)},onReset:function(e){return t.handleReset(e)}}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},48:function(t,e,a){t.exports=a(169)},53:function(t,e,a){},54:function(t,e,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.c40970ad.chunk.js.map