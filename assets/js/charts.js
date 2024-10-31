


const ctx = document.getElementById('myChart1').getContext('2d');

const visitedData = 50; 
const notVisitedData = 10; 
const totalData = visitedData + notVisitedData; 
const percentage = Math.round((visitedData / totalData) * 100); 


document.getElementById('percentageLabel1').innerText = `${percentage}%`;

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['ویزیت', 'ویزیت نشده'],
        datasets: [{
            data: [visitedData, notVisitedData],
            backgroundColor: ["#69BEC7", '#E0E0E0'],
            borderWidth: 10,
        }]
    },
    options: {
        responsive: true, 
        cutout: '50%',
        plugins: {
            tooltip: {
                enabled: true
            },
          
            legend: {
                labels: {
                    font: {
                        size: 16, 
                        family: 'Arial', 
                        weight: 'bold' 
                    }
                }
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeOutBounce'
        }
    }
});







  const ctx2 = document.getElementById('myChart2').getContext('2d');
  const visitedData2 = 12;
  const notVisitedData2 = 19;
  const total = visitedData2 + notVisitedData;
  const percentage2 = Math.round((visitedData / total) * 100);
  
  document.getElementById('percentageLabel').innerText = `${percentage}%`;
  
  new Chart(ctx2, {
      type: 'doughnut',
      data: {
          labels: ['ویزیت شده', 'ویزیت نشده'],
          datasets: [{
              data: [visitedData, notVisitedData],
              backgroundColor: ["#69BEC7", '#E0E0E0'],
              borderWidth: 10,
          }]
      },
      options: {
          responsive: true,
          cutout: '50%', 
          plugins: {
              tooltip: {
                  enabled: true
              },
              legend: {
                labels: {
                    font: {
                        size: 16, 
                        family: 'Arial', 
                        weight: 'bold' 
                    }
                }
              }
          },
          animation: {
              duration: 1000,
              easing: 'easeOutBounce'
          }
      }
  });
  

//  LineChart

//  
const canvasline = document.getElementById('myLineChart');

// تنظیم عرض و ارتفاع canvas
canvasline.width = 570;  
canvasline.height = 230;

const ctx3 = canvasline.getContext('2d');
const myLineChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['شنبه', 'یکشنبه' ,'دوشنبه' ,'سه شنبه' ,'چهار شنبه' ,'پنج شنبه' ,'جمعه'],
        datasets: [{
            label: '',
            data: [0, 10, 20, 30, 40, 50, 30, 40, 50],
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.4,
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: '#fff',
                titleColor: '#333',
                bodyColor: '#333',
                borderColor: '#ddd',
                borderWidth: 1,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 14, // اندازه متن برچسب محور y
                        family: 'Arial', // نوع فونت (اختیاری)
                        weight: 'bold' // ضخامت متن (اختیاری)
                    }
                }
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 14, // اندازه متن برچسب محور x
                        family: 'Arial', // نوع فونت (اختیاری)
                        weight: 'bold' // ضخامت متن (اختیاری)
                    }
                }
            },
        },
    },
});
  

// lg charts----






const ctx5 = document.getElementById('myChart5').getContext('2d');

const visitedData5 = 50; // تعداد ویزیت شده
const notVisitedData5 = 10; // تعداد ویزیت نشده
const totalData5 = visitedData + notVisitedData; // مجموع داده‌ها
const percentage5 = Math.round((visitedData / totalData) * 100); // محاسبه درصد

// نمایش درصد در مرکز چارت
document.getElementById('percentageLabel5').innerText = `${percentage}%`;

new Chart(ctx5, {
    type: 'doughnut',
    data: {
        labels: ['ویزیت', 'ویزیت نشده'],
        datasets: [{
            data: [visitedData, notVisitedData],
            backgroundColor: ["#69BEC7", '#E0E0E0'],
            borderWidth: 10,
        }]
    },
    options: {
        responsive: true, // اطمینان از واکنش‌گرایی چارت
        cutout: '50%', // فضای مرکزی چارت را خالی می‌کند
        plugins: {
            tooltip: {
                enabled: true
            },
            // تنظیمات برچسب‌ها
            legend: {
                labels: {
                    font: {
                        size: 16, // اندازه متن برچسب
                        family: 'Arial', // نوع فونت (اختیاری)
                        weight: 'bold' // ضخامت متن (اختیاری)
                    }
                }
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeOutBounce'
        }
    }
});







  const ctx4 = document.getElementById('myChart4').getContext('2d');
  const visitedData4 = 12;
  const notVisitedData4 = 19;
  const total4 = visitedData4 + notVisitedData;
  const percentage4 = Math.round((visitedData / total) * 100);
  
  document.getElementById('percentageLabel4').innerText = `${percentage}%`;
  
  new Chart(ctx4, {
      type: 'doughnut',
      data: {
          labels: ['ویزیت شده', 'ویزیت نشده'],
          datasets: [{
              data: [visitedData, notVisitedData],
              backgroundColor: ["#69BEC7", '#E0E0E0'],
              borderWidth: 10,
          }]
      },
      options: {
          responsive: true,
          cutout: '50%', 
          plugins: {
              tooltip: {
                  enabled: true
              },
              legend: {
                labels: {
                    font: {
                        size: 16, 
                        family: 'Arial', 
                        weight: 'bold' 
                    }
                }
              }
          },
          animation: {
              duration: 1000,
              easing: 'easeOutBounce'
          }
      }
  });