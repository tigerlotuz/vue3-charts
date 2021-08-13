<script>
import { Bubble } from "vue3-chart-v2";

export default {
  extends: Bubble,
  data() {
    return {
      chartData: {
        datasets: [
          {
            label: "Bubble",
            data: [
              {
                x: 5,
                y: 3,
                r: 10,
              },
              {
                x: 2.5,
                y: 12,
                r: 4,
              },
              {
                x: 4.5,
                y: 15,
                r: 10,
              },
              {
                x: 2.5,
                y: 12,
                r: 8,
              },
              {
                x: 3.5,
                y: 4,
                r: 20,
              },
              {
                x: 2,
                y: 5,
                r: 4,
              },
              {
                x: 3.5,
                y: 8,
                r: 11,
              },
              {
                x: 4.5,
                y: 6,
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
