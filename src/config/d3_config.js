import * as d3 from "d3";
import Constants from './app_constants';

d3.eesur = {}

d3.eesur.singleValueDonut = function createDonut () {

  var height = null;
  var width = null;
  var isMobile = false;
  var innnerRadius = null;
  var outerRadius = null;
  var translateWidth = null;
  var translateHeight = null;

  function exports (selection) {
    selection.each(function (chartData) {
      
      var total = chartData.Total;
      var title = chartData.Title;
      var byPhone = chartData.ByPhone;
      var byTablet = chartData.ByTablet;
      width = document.querySelector("#AppContent").offsetWidth;
      if(width < 600){
        isMobile = true;
      }

      if(isMobile){
        innnerRadius = width / 4.5;
        outerRadius = width / 4.1;
        translateHeight = height / 2;
        translateWidth = width / 2.6;
      }else{
        innnerRadius = width / 19;
        outerRadius = width / 17.5;
        translateHeight = height / 1.2;
        translateWidth = width / 9.5;
      }          

      var colors = [];
      switch(title){
        case Constants.Revenue:
          colors = ["#3B6B15", "#8BD145"];
          break;
        case Constants.Impresions:
          colors = ["#2D5066", "#72C9E2"];
          break;
        case Constants.Visits:
          colors = ["#BB5620", "#F0C42F"];
          break;
      }

      var byPhonePercent = Math.floor(byPhone/total*100);   
      var byTabletPercent = Math.floor(byTablet/total*100);
      
      var pies = d3.pie().sort(null)([byPhonePercent, byTabletPercent])

      var arc = d3.arc()
        .innerRadius(innnerRadius)
        .outerRadius(outerRadius)
        .startAngle(function (d) { return d.startAngle; })
        .endAngle(function (d) { return d.endAngle; })

      var svg = d3.select(this)
        .append('svg')
        .attr('class', 'svg-chart')
        .append('g')
        .attr('class', 'g-chart')
        .attr('transform', ("translate(" + translateWidth + ", " + translateHeight + ")"))
      svg.selectAll('path')
        .data(pies)
        .enter().append('path')
        .attr('d', arc)
        .attr('fill', function (d) { return colors[d.index]; })
    })
  }

  exports.height = function (value) {
    if (!arguments.length) { return height }
    height = value
    return this
  }
  exports.width = function (value) {
    if (!arguments.length) { return width }
    width = value
    return this
  }
  exports.innnerRadius = function (value) {
    if (!arguments.length) { return innnerRadius }
    innnerRadius = value
    return this
  }
  exports.outerRadius = function (value) {
    if (!arguments.length) { return outerRadius }
    outerRadius = value
    return this
  }
  exports.colors = function (value) {
    if (!arguments.length) { return colors }
    colors = value
    return this
  }

  return exports
}

export default d3.eesur;
