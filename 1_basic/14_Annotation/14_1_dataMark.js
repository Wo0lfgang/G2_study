//数据标签
const chart = new G2.Chart({
    container:'container',
});

chart
    .interval()
    .data([
        { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
    ])
    .encode('x',"genre")
    .encode('y','sold')
    .label({
        text:'genre',
        style:{
            dy:-15,
            // dx:-18,
        },
    })
    .label({
        text:'sold',
        style:{
            fill:'#fff',
            dy:5,
        },
    });

chart.render();
console.log(chart.options());
