
const chart = new G2.Chart({
    container:'container',
});

const repeatMatrix =
     chart
        .repeatMatrix()
        .data({
            type:'fetch',
            value:'https://assets.antv.antgroup.com/g2/penguins.json'
        })
        .encode('position',[
            'culmen_length_mm',
            'culmen_depth_mm',
            'flipper_length_mm',
            'body_mass_g',
        ]);

repeatMatrix.point().encode('color','species');

chart.render();