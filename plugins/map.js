if (process.browser) {
  !(function(mapInit) {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
      // 'http://api.map.baidu.com/api?v=2.0&ak=vIRKexmYnjoOWjF8hLNPlXkWxKdzAd26&callback=mapinit'
      "https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=vIRKexmYnjoOWjF8hLNPlXkWxKdzAd26"
    window['mapinit'] = function() {
      mapInit()
    }
    document.head.appendChild(script)
  })(function() {
    // 这里使用BMap
    var map = new BMap.Map('allmap')
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
    var local = new BMap.LocalSearch(map, {
      renderOptions: { map: map }
    })
    local.search('宋家庄地铁站')
  })
}
