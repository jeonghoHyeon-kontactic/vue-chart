<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props:["labels","data", "label", "color"], 
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: this.label,
            backgroundColor: this.color,
            data: this.data
          },
        ]
      },
      { 
        responsive: true,
        maintainAspectRatio: false,
        sort:true
        // legend: true
      }
    );
  }
};
</script>
