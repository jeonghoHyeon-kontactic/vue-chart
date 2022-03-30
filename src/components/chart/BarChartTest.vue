<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props:["labels","data"],
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: "Review",
            backgroundColor: "#f87979",
            data: this.data
          },
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
