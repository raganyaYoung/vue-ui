<template>
  <canvas :width="width" :height="height"></canvas>
</template>
<script>
  import Vue from 'vue'
  import Chart from './Chart.js';

  function getRandomColor() {
      var color = 'rgba'
      var r = (Math.floor(Math.random()* 127) + 127);
      var g = (Math.floor(Math.random()* 127) + 127);
      var b = (Math.floor(Math.random()* 127) + 127);
      return color + '(' + r + ',' + g + ',' + b + ',' + 0.6 + ')'
  }

  export default ({
    props: {
      type: { default: 'doughnut' },
      width: { default: 400 },
      height: { default: 300 },
      chartdata: {
        default() {
          return [12, 19, 3, 5, 2, 3, 7]
        }
      },
      labels: {
        default() {
          return ["Red1", "Blue2", "Yellow3", "Green4", "Purple", "Orange", 'sd']
        }
      },
      label: {
        default() {
          return 'My Chart'
        }
      },
      radardata: {
        default() {
          return [
            [1,2,3,9,2],
            [4,5,6,7,8]
          ]
        }
      },
      radarlabel: [],
      responsive: { default: false },
    },
    ready() {
      const ctx = this.$el.getContext('2d')
      var dataLen = this.labels.length
      var tmpColor = this.generateColors(dataLen)
      var tmpDataSets = []
      var dataset = {}
      if(this.type === 'line') {
        dataset = {
          label: this.label,
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.chartdata,
        }
      } else if (this.type === 'bar') {
        dataset = {
          label: this.label,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.chartdata,
        }
      } else if (this.type === 'radar') {
        this.radardata.map((el, index) => {
          tmpDataSets.push({
            label: this.radarlabel[index],
            backgroundColor: getRandomColor(),
            borderColor: getRandomColor(),
            pointBackgroundColor: getRandomColor(),
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: 'rgba(0,0,0,0,0.3)',
            data: el
          })
        })
      } else {
        dataset = {
          label: this.label,
          data: this.chartdata,
          backgroundColor: tmpColor,
          borderColor: tmpColor,
          borderWidth: 2,
        }
      }

      if(this.type !== 'radar') {
        const myChart = new Chart(ctx, {
          type: this.type,
          data: {
              labels: this.labels,
              datasets: [dataset]
          },
          options: {
            responsive: this.responsive
          }
        })
      }else {
        const myChart = new Chart(ctx, {
          type: this.type,
          data: {
              labels: this.labels,
              datasets: tmpDataSets
          },
          options: {
            responsive: this.responsive
          }
        })
      }
      
    },

    methods: {
      generateColors(len) {
        //先给一些默认的颜色 好看点的..
        var colors = [
          'rgba(55,170,0,0.3)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255,170,0,0.3)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255,0,0,0.3)',
          'rgba(180,100,125,0.3)',
          'rgba(255, 159, 64, 0.2)',
        ]
        for (let i = 0; i < len-10; i++) {
          colors.push(getRandomColor())
        }
        return colors
      }
    }

  })


</script>