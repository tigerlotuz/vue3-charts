<script>
import { Radar } from "vue3-chart-v2";

export default {
  extends: Radar,
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
            label: "Population",
            data: [46051, 103754, 10649, 84930, 25967, 65397],

            backgroundColor: "rgba(255, 145, 175, 0.4)",
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
          align: "center",
          position: "right",
          labels: {
            fontColor: "black",
            fontSize: 14,
          },
        },
        layout: {
          padding: 0,
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
