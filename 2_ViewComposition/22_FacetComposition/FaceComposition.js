const chart = new G2.Chart({
  container: "container",
});

const facetRect = chart
  .facetRect()
  .attr("paddingBottom", 50)
  .data({
    type: "fetch",
    value: "https://assets.antv.antgroup.com/g2/anscombe.json",
  })
  .encode("x", "series");

facetRect
  .point()
  .attr("inset", 10)
  .encode("x", "x")
  .encode("y", "y")
  .style("stroke", "#000");

chart.render();
