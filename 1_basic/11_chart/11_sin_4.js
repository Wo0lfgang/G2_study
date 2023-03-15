
const chart = new G2.Chart({
    container:'container',
});

const I = [0,1,2,3,4];
const X = I.map((i)=>((i-2)*Math.PI)/2);
const Y = X.map((x)=>Math.sin(x));

chart
    .line()
    .data(I)
    .encode('x',{type:'column',value:X})
    .encode('y',{type:'column',value:Y})
    .encode('shape','smooth')
    chart.render();