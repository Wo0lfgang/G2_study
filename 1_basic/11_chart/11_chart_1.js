// import { Chart } from "@antv/g2";
//新建一个图表实例
const chart = new G2.Chart({
    container:'chart'
})
//创建一个 Interval 节点
const interval = chart.interval();
console.log('interval',interval);
// interval
//     .encode('x','name')
//     .encode('y','value')
//     .style('fill','red')
console.log(interval.encode());
chart.render();