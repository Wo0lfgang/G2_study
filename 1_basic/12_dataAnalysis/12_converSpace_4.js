//转换空间
const chart =new  G2.Chart({
    container:'container',
});

chart
    .factRect()
    // .data({
    //     type:'fetch',
    //     value:'https://assets.antv.antgroup.com/g2/penguins.json',
    // })
    // .encode('x',(d)=>+d.culmen_depth_mm)
    .point()
    .transform({type:'pack'});

chart.render();