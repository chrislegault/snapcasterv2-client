import moment from 'moment/moment';
import React from 'react';
import * as d3 from 'd3';
// import calendar-heatmap.js
// import calendarHeatmap from 'calendar-heatmap';
import Chart from './Chart';

export default function CalendarHeatmap() {
  // Generate some random data
  var now = moment().endOf('day').toDate();
  var yearAgo = moment().startOf('day').subtract(1, 'year').toDate();
  let chartData = d3.timeDays(yearAgo, now).map(function (date) {
    return {
      date: date,
      count:
        date.getDay() !== 0 && date.getDay() !== 6
          ? Math.floor(Math.random() * 60)
          : Math.floor(Math.random() * 10),
    };
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '120',
      }}
    >
      <Chart data={chartData} />
    </div>
  );
}
