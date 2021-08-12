<script>
import { PolarArea } from "vue3-chart-v2";

export default {
  extends: PolarArea,
  data() {
    return {
      chartData: {
        labels: ["Pink", "Blue", "Yellow", "Green", "Purple"],
        datasets: [
          {
            label: "Polar Area Chart",
            borderWidth: 1,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            data: [8, 14, 12, 7, 20],
          },
        ],
      },
      options: {
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
