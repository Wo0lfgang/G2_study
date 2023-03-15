
const chart = new G2.Chart({
    container: 'container',
  });

chart
  .interval()
  .data({
    type:'fetch',
    value:'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv'
  })
  .encode('x','letter')
  .encode('y','frequency')
  .style('fill','steelblue')
  .style('strokeWidth',(d)=>(d.frequency>0.1?2:1))
  .style('stroke',(d)=>(d.frequency>0.1?'red':'green'))
  .axis('y',{labelFormatter:'.0%'})

chart.render();