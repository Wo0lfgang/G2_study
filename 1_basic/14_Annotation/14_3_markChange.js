//标记和标记转换
const chart = new G2.Chart({
    container:'container',
});

chart
    .data({
        type:'fetch',
        value:'https://gw.alipayobjects.com/os/bmw-prod/1ecf85d2-8279-46a1-898d-d2e1814617f9.json',
    })
    .point()
    .encode('x','GDP')
    .encode('y','LifeExpectancy')
    .encode('series','Continert')
    .style('textAlign','end');


chart
    .text()
    .transform({type:'select',channel:'x',selector:'max'})
    .encode('text','Country')
    .encode('x','GDP')
    .encode('y','LifeExpectancy')
    .encode('series','Continent')
    .style('textAlign','end')

chart.render();