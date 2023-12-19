import type { ChartOptions } from 'chart.js'

import { computed } from 'vue'

export const options = computed<ChartOptions<'bar' | 'pie' | 'line'>>(() => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#353535'
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#353535' },
        grid: { color: '#353535' }
      },
      y: {
        ticks: { color: '#353535' },
        grid: { color: '#353535' }
      }
    }
  }
})
