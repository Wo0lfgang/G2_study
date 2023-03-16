
const chart = new G2.Chart({
    container:'container'
});

const flex = chart.spaceFlex();

const data = [ { genre: 'Shooter', sold: 350 },
{ genre: 'Sports', sold: 275 },
{ genre: 'Other', sold: 150 },
{ genre: 'Action', sold: 120 },
{ genre: 'Strategy', sold: 115 },]
//条形图
flex
    .view()
    .interval()
    .data(data)
    .encode('x','genre')
    .encode('y','sold');

//饼图
flex
    .view()
    .coordinate({type:'theta'})
    .interval()
    .transform({type:'stackY'})
    .data(data)
    .encode('y','sold')
    .encode('color','genre')
    .legend('color',false);

chart.render();
