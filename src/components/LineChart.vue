<script>
import { Line } from "vue3-chart-v2";

export default {
  extends: Line,
  data() {
    return {
      chartData: {
        labels: [
          "Falkenberg",
          "Halmstad",
          "Hylte",
          "Kungsbacka",
          "Laholm",
          "Varberg",
        ],
        datasets: [
          {
            label: "Line",
            data: [46051, 103754, 10649, 84930, 25967, 65397],
            fill: false,
            tension: 0.1,
            borderColor: "hotpink",
            backgroundColor: "hotpink",
            borderWidth: 2,
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
                display: false,
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
