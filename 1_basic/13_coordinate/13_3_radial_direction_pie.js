//饼图制作
const chart = new G2.Chart({
    container:'container',
});

chart.coordinate({type:'theta'});
chart
    .interval()
    .transform({type:'stackY'})
    .data([
        { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
    ])
    .encode('y','sold')
    .encode('color','genre');

chart.render();