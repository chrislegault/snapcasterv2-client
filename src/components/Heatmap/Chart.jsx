import React from 'react';
import moment from 'moment/moment';
import * as d3 from 'd3';
import './calendar-heatmap.css';

export default function Chart({ data }) {
  var width = 750;
  var height = 150;
  var selector = '.heatmap-container';
  var SQUARE_LENGTH = 11;
  var SQUARE_PADDING = 2;
  var MONTH_LABEL_PADDING = 6;
  var now = moment().endOf('day').toDate();
  var yearAgo = moment().startOf('day').subtract(1, 'year').toDate();
  var max = null;
  var colorRange = ['#e1b8ff', '#7700cf'];
  var weekStart = 0; //0 for Sunday, 1 for Monday
  var dateRange = ((d3.time && d3.time.days) || d3.timeDays)(yearAgo, now); // generates an array of date objects within the specified range
  var firstDate = moment(dateRange[0]);

  var color = d3
    .scaleLinear()
    .domain([
      0,
      max ||
        d3.max(data, function (d) {
          return d.count;
        }),
    ])
    .range(colorRange);

  const countForDate = d => {
    var count = data.find(function (element) {
      return moment(d).isSame(element.date, 'day');
    }).count;
    return count;
  };

  const formatWeekday = weekDay => {
    if (weekStart === 1) {
      if (weekDay === 0) {
        return 6;
      } else {
        return weekDay - 1;
      }
    }
    return weekDay;
  };

  const chart = () => {
    d3.select(selector).selectAll('svg.calendar-heatmap').remove(); // remove the existing chart, if it exists

    if (data.length == 0) {
      max = 0;
    } else if (max === null) {
      max = d3.max(data, function (d) {
        return d.count;
      }); // max data value
    }
    return drawChart();
  };

  const drawChart = () => {
    var svg = d3
      .select(selector)
      .style('position', 'relative')
      .append('svg')
      .attr('width', width)
      .attr('class', 'calendar-heatmap')
      .attr('height', height)
      .style('padding', '36px');

    var dayRects = svg.selectAll('.day-cell').data(dateRange); //  array of days for the last yr
    var enterSelection = dayRects
      .enter()
      .append('rect')
      .attr('class', 'day-cell')
      .attr('width', SQUARE_LENGTH)
      .attr('height', SQUARE_LENGTH)
      .attr('fill', function (d) {
        return color(countForDate(d));
      })
      .attr('x', function (d, i) {
        var cellDate = moment(d);
        var result =
          cellDate.week() -
          firstDate.week() +
          firstDate.weeksInYear() *
            (cellDate.weekYear() - firstDate.weekYear());
        return result * (SQUARE_LENGTH + SQUARE_PADDING);
      })
      .attr('y', function (d, i) {
        return (
          MONTH_LABEL_PADDING +
          formatWeekday(d.getDay()) * (SQUARE_LENGTH + SQUARE_PADDING)
        );
      });

    dayRects.exit().remove();
  };

  return (
    <div className="heatmap-container">
      <div className="calendar-heatmap">{chart()}</div>
    </div>
  );
}
