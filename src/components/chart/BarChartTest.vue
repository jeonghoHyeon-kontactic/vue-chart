<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props:["labels","data", "label"],
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: this.label,
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
