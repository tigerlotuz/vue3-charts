<script>
import { Scatter } from "vue3-chart-v2";

export default {
  extends: Scatter,
  data() {
    return {
      chartData: {
        datasets: [
          {
            label: "Population Data",
            borderWidth: 1,
            borderColor: "#2554FF",
            backgroundColor: "#2554FF",
            data: [
              {
                x: 6,
                y: 3,
                r: 15,
              },
              {
                x: 3,
                y: 12,
                r: 4,
              },
              {
                x: 5,
                y: 15,
                r: 10,
              },
              {
                x: 3,
                y: 12,
                r: 8,
              },
              {
                x: 4,
                y: 5,
                r: 20,
              },
              {
                x: 2,
                y: 6,
                r: 3,
              },
              {
                x: 4,
                y: 9,
                r: 11,
              },
              {
                x: 5,
                y: 10,
                r: 6,
              },
            ],
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
