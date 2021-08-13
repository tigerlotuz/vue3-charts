<script>
import { PolarArea } from "vue3-chart-v2";

export default {
  extends: PolarArea,
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

            backgroundColor: [
              "rgba(255, 145, 175, 0.4)",
              "rgba(250, 165, 168, 0.4)",
              "rgba(246, 185, 161, 0.4)",
              "rgba(241, 204, 153, 0.4)",
              "rgba(237, 224, 146, 0.4)",
              "rgba(232, 244, 139, 0.4)",
            ],
            borderColor: [
              "rgba(255, 145, 175)",
              "rgba(250, 165, 168)",
              "rgba(246, 185, 161)",
              "rgba(241, 204, 153)",
              "rgba(237, 224, 146)",
              "rgba(232, 244, 139)",
            ],
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
