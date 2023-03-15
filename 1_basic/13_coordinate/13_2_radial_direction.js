//径向变换
const chart = new G2.Chart({
    container:'container',
});

chart
    .coordinate({
        // transform:[{
            type:'polar'
        // }]
    })
    .interval()
    .data([
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
    ])
    .encode('x','genre')
    .encode('y','sold')
    .encode('color','genre')
    .axis('y',false);

chart.render();