
const chart = new G2.Chart({
    container:'container'
});

const layer = chart.spaceLayer();

//条形图
layer
    .view()//创建一个视图
    .interval()
    .data([
        { genre: 'Shooter', sold: 350 },
        { genre: 'Sports', sold: 275 },
        { genre: 'Other', sold: 150 },
        { genre: 'Action', sold: 120 },
        { genre: 'Strategy', sold: 115 },
    ])
    .encode('x','genre')
    .encode('y','sold');

//饼图
layer
    .view()
    .attr('paddingLeft',400)
    .attr('paddingBottom',250)
    .coordinate({type:'theta'})//指定坐标系
    .interval()
    .transform({type:'stackY'})
    .data([
        { genre: 'Shooter', sold: 350 },
        { genre: 'Sports', sold: 275 },
        { genre: 'Other', sold: 150 },
        { genre: 'Action', sold: 120 },
        { genre: 'Strategy', sold: 115 },
    ])
    .encode('y','sold')
    .encode('color','genre')
    .legend('color',false);

chart.render();
