
//图形对应多个数据项的标记来说，我们可以通过selector去选择需要保留的标记。目前支持的值如下：
const chart = new G2.Chart({
    container:'container'
});

chart
    .line()
    .data({
        type:'fetch',
        value:'https://assets.antv.antgroup.com/g2/indices.json',
    })
    .transform({type:'normalizeY',basis:'first',groupBy:'color'})
    .encode('x',(d)=>new Date(d.Date))
    .encode('y','Close')
    .encode('color','Symbol')
    .axis('y',{title:'! Change in price (%)'})
    .label({
        text:'Close',
        selector:'last',
        style:{
            fontSize:10,
        }
    })

chart.render();