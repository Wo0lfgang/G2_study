const chart = new G2.Chart({
    container:'container'
});

chart
    .interval()
    .data([
        { type: 'Apple', year: '2001', value: 260 },
        { type: 'Orange', year: '2001', value: 100 },
        { type: 'Banana', year: '2001', value: 90 },
        { type: 'Apple', year: '2002', value: 210 },
        { type: 'Orange', year: '2002', value: 150 },
        { type: 'Banana', year: '2002', value: 30 },
    ])
    .transform({
        type:'stackEnter',
        groupBy:'color',
    })
    .encode('x','year')
    .encode('y',"value")
    .encode('color','type')
    .encode('series','type')
    .encode('enterDuration',4000);

chart.render();