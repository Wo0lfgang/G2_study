//对企鹅的culmen_depth_mm 的分布情况，就可以使用bin对数据进行分箱

const chart = new G2.Chart({
    container:'container',
});

chart
    .rect()
    .data({
        type:'fetch',
        value:'https://assets.antv.antgroup.com/g2/penguins.json',
    })
    .encode('x',(d)=>+d.culmen_depth_mm)
    .transform({
        type:'binX',
        y:'count'
    })
    .style('insetLeft',1)
    .coordinate({
        transform:[{
            type:'transpose'
        }]
    })

chart.render();