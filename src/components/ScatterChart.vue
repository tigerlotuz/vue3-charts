<script>
import { Scatter } from "vue3-chart-v2";

export default {
  extends: Scatter,
  data() {
    return {
      chartData: {
        datasets: [
          {
            label: "Dots",
            data: [
              {
                x: 8,
                y: 5,
                r: 15,
              },
              {
                x: 5,
                y: 2,
                r: 4,
              },
              {
                x: 9,
                y: 8,
                r: 10,
              },
              {
                x: 3,
                y: 9,
                r: 8,
              },
              {
                x: 7,
                y: 4,
                r: 20,
              },
              {
                x: 4,
                y: 1,
                r: 3,
              },
              {
                x: 1,
                y: 8,
                r: 11,
              },
              {
                x: 2,
                y: 5,
                r: 6,
              },
            ],
            backgroundColor: "hotpink",
            borderColor: "hotpink",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,

        title: {
          display: true,
          text: "Population of Halland",
          fontColor: "hotpink",
          fontSize: 24,
          position: "left",
          padding: 16,
        },
        legend: {
          align: "end",
          labels: {
            fontColor: "black",
            fontSize: 14,
          },
        },
        layout: {
          padding: 16,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
