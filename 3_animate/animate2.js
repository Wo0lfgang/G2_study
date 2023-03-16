const chart = new G2.Chart({
  container: "container",
});

chart.interval().data([
  { name: "event planning", startTime: 1, endTime: 4 },
  { name: "layout logistics", startTime: 3, endTime: 13 },
  { name: "select vendors", startTime: 5, endTime: 8 },
  { name: "hire venue", startTime: 9, endTime: 13 },
  { name: "hire caterer", startTime: 10, endTime: 14 },
  { name: "hire event decorators", startTime: 12, endTime: 17 },
  { name: "rehearsal", startTime: 14, endTime: 16 },
  { name: "event celebration", startTime: 17, endTime: 18 },
])
.coordinate({
    transform:[{
        type:'transpose'
    }]
})
.encode('x','name')
.encode('y',['endTime','startTime'])
.encode('color','name')
.encode('enterDuration',(d)=>d.endTime-d.startTime)
.encode('enterDay','startTime')
.attr('paddingLeft',50)

chart.render();
