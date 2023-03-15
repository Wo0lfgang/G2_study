
const chart = new G2.Chart({
    container:'container',
});

chart
    .interval()
    .transform({type:'stackY'})
    .data([
        { city: 'London', month: 'Jan.', rainfall: 18.9 },
    { city: 'London', month: 'Feb.', rainfall: 28.8 },
    { city: 'London', month: 'Mar.', rainfall: 39.3 },
    { city: 'London', month: 'Apr.', rainfall: 81.4 },
    { city: 'London', month: 'May', rainfall: 47 },
    { city: 'London', month: 'Jun.', rainfall: 20.3 },
    { city: 'London', month: 'Jul.', rainfall: 24 },
    { city: 'London', month: 'Aug.', rainfall: 35.6 },
    { city: 'Berlin', month: 'Jan.', rainfall: 12.4 },
    { city: 'Berlin', month: 'Feb.', rainfall: 23.2 },
    { city: 'Berlin', month: 'Mar.', rainfall: 34.5 },
    { city: 'Berlin', month: 'Apr.', rainfall: 99.7 },
    { city: 'Berlin', month: 'May', rainfall: 52.6 },
    { city: 'Berlin', month: 'Jun.', rainfall: 35.5 },
    { city: 'Berlin', month: 'Jul.', rainfall: 37.4 },
    { city: 'Berlin', month: 'Aug.', rainfall: 42.4 },
    ])
    .encode('x','month')
    .encode('y','rainfall')
    .encode('color','city')
chart.render();