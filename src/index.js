import { SVG } from '@svgdotjs/svg.js'

var draw = SVG().addTo('body').size(300, 300)
var dot = draw.circle(7).attr({ fill: '#f06', cx: 20, cy: 60 })
var line = draw.line(20, 60, 20, 60).stroke({ width: 2, color: '#f06' })
line.animate(300).plot([[20, 60], [100, 150]])