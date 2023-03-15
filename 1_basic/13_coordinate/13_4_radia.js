//玉珏图

const chart = new G2.Chart({
    container:'container',
});

chart.coordinate({type:'radial',endAngle:Math.PI});

chart
    .interval()
    .data([
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Other', sold: 150 },
        { genre: 'Sports', sold: 275 },
        { genre: 'Shooter', sold: 350 },
    ])
    .encode('x','genre')
    .encode('y','sold')
    .encode('color','genre')
    .axis('y',false)
    .legend('color',false)
    .axis('x',{title:null});

chart.render();