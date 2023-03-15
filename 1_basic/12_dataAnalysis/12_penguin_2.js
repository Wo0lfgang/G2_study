const chart = new G2.Chart({
    container: 'container',
  });

chart
    .point()    
    .data({
        type:'fetch',
        value:'https://assets.antv.antgroup.com/g2/penguins.json',
    })
    .encode('x',(d)=>+d.culmen_depth_mm)
    .encode('y',(d)=>+d.culmen_length_mm);

chart.render();