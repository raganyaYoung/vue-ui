<template>
  <div>
    <chart type="line" 
        width="300"
        height="300"
        :chartdata="linedata"
        :labels="linelabels"
        :responsive="false"
        label="line chart">
    </chart>
    <chart type="bar" 
        width="300"
        height="300"
        :chartdata="linedata"
        :labels="barlabels"
        :responsive="false"
        label="bar chart">
    </chart>
    <chart type="pie" 
        width="300"
        height="300"
        :chartdata="linedata"
        :labels="pielabels"
        :responsive="false"
        label="pie chart">
    </chart>
    <chart type="doughnut" 
        width="300"
        height="300"
        :chartdata="linedata"
        :labels="doughnutlabels"
        :responsive="false"
        label="doughnut chart">
    </chart>
    <chart type="radar"
        width="300"
        height="300"
        :radardata="radarData"
        :labels="chartLabels"
        :responsive="false"
        :radarlabel="radarLabel">
    </chart>
  </div>
</template>
<script>
  import Vue from 'vue'
  import chart from '../common/chart.vue'
  export default ({
    data() {
      return {
        linedata: [14,59,87,34,70,28,60],
        linelabels: ['line1', 'line2', 'line3', 'line4', 'line5', 'line6', 'line7'],
        barlabels: ['bar1', 'bar2', 'bar3', 'bar4', 'bar5', 'bar6', 'bar7'],
        pielabels: ['pie1', 'pie2', 'pie3', 'pie4', 'pie5', 'pie6', 'pie7'],
        doughnutlabels: ['doughnut1', 'doughnut2', 'doughnut3', 'doughnut4', 'doughnut5', 'doughnut6', 'doughnut7'],
        radarData: [[1,2,3,9,2],[4,5,6,7,8]],
        chartLabels: ['d1', 'd2', 'd3', 'd4', 'd5'],
        radarLabel: 'radar chart'
      }
    },
    components: {
      chart
    }
  })
</script>