//复合标记
const chart = new G2.Chart({
    container:'container',
});

chart
    .sankey()
    .data({
        type:'fetch',
        value:'https://assets.antv.antgroup.com/g2/energy.json',
        transform:[
            {
                type:'custom',
                callback:(data)=>({links:data}),
            },
        ],
    })
    .layout({
        //设置布局相关的参数
        nodeAlign:'center',
        nodePadding:'0.03',
    })
    .scale('color',{pallette:'schemeTableau10'})
    .scale('labelSpacing',3)
    .scale('labelFontWeight','bold')
    .scale('nodeStrokeWidth',1.2)
    .scale('linkFillOpacity',0.4)

chart.render();