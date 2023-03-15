//多个转换
const chart = new G2.Chart({
    container:'container',
});

chart
    .rect()
    .data({
        type:'fetch',
        value:'https://assets.antv.antgroup.com/g2/penguins.json'
    })
    .encode('x',(d)=>+d.culen_depth_mm)
    .encode('color','sex')
    .transform({type:'binX',y:'count'})
    .transform({type:'stackY',orderBy:'sum',reverse:true})
    .style('insetLeft',1);

chart.render();
