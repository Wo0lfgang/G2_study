const chart = new G2.Chart({
    container:'container'
});

const data = await fetch('data/people.json').then((res) => res.json());

// 参考 css animation 的描述
const keyframe = chart
  .timingKeyframe() // 创建容器
  .attr('iterationCount', 2) // 迭代次数
  .attr('direction', 'alternate') // 方向
  .attr('duration', 1000); // 持续时间

keyframe
  .interval()
  .transform({ type: 'groupX', y: 'mean' })
  .data(data)
  .encode('x', 'gender')
  .encode('y', 'weight')
  .encode('color', 'gender')
  .encode('key', 'gender'); // 指定 key

keyframe
  .point()
  .data(data)
  .encode('x', 'height')
  .encode('y', 'weight')
  .encode('color', 'gender')
  .encode('shape', 'point')
  .encode('groupKey', 'gender'); // 指定 groupKey

  chart.render();