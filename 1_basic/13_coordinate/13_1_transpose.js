//转置变换

const chart = new G2.Chart({
    container:'container',
});

//坐标系转换
chart.coordinate({
    transform:[{
        type:'transpose'
    }]
})

chart
    .interval()
    .data([
        { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
    ])
    .encode('x','genre')
    .encode('y','sold');

chart.render();