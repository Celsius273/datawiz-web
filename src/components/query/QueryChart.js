const classnames = require('classnames');
const React = require('react');
const highcharts = require('highcharts');

// require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/exporting')(highcharts);

import { connect } from 'react-redux';
import { executeQuery } from '../../utils/DBAPIUtils.js';

let chart;

// honestly it's easier to keep these as global
let xData = [];
let yData = [];

class QueryChart extends React.Component {
  static propTypes = {
    queryData: React.PropTypes.array.isRequired
  }


  constructor(props) {
    super(props);
  }


  componentDidUpdate() {
    const {queryData} = this.props;

    if (!!queryData && queryData.length > 0) {
      console.log('now we begin');

      const labels = Object.keys(queryData[0]).slice(0, 2);
      const xLabel = labels[0];
      const yLabel = labels[1];

      const xData = queryData.map((data) => {
        return Object.values(data)[0];
      });

      let minY = 0;
      const yData = queryData.map((data) => {
        const y = parseInt(Object.values(data)[1]);
        minY = Math.min(minY, y);
        return y;
      });

      highcharts.chart('chart-container', {
        chart: { type: 'bar' },
        plotOptions: {
          bar: {
            dataLabels: { enabled: true }
          }
        },
        xAxis: {
          categories: xData,
          title: { text: xLabel }
        },
        yAxis: {
          min: minY,
          title: { text: yLabel },
          labels: { overflow: 'justify' }
        },
        series: [{
          data: yData
        }]
      });
    }
  }


  componentWillUnmount() {
    chart.destroy();
  }


  render() {
    const {queryData} = this.props;
    // don't return anything if we have no data


    // we NAIVELY make these assumptions about queryData = this.props.queryData:
    // queryData is in the form:
    /*
    [{
      attr1: v1,
      attr2: v2
      ...
    }, {
      attr1: v3,
      attr2: v4,
      ...
    },
    ...
    ]

    where attr1 is the independent value (string)
    and attr2 is the dependent value (HAS TO BE a number)
    */

    console.log(queryData);


    return (
      <div className="rc-QueryChart">
        <div id="chart-container"></div>
      </div>
    );
  }
}

export default QueryChart;
