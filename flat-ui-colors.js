Highcharts.theme = {
    colors: ['#3498db', '#2ecc71', '#f1c40f', '#f39c12','#9b59b6', '#c0392b', '#1abc9c', '#d35400', '#bdc3c7', '#34495e', '#7f8c8d', '#16a085', '#27ae60', '#e74c3c', '#8e44ad','#2980b9', '#95a5a6', '#2c3e50'],
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, '#fff'],
                [1, '#fff']
            ]
        },
    },
    title: {
        style: {
            color: '#333333',
            font: 'bold 16px "Arial", Helvetica, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 12px "Arial", Helvetica, sans-serif'
        }
    },

    legend: {
        itemStyle: {
            font: '9pt Arial, Helvetica, sans-serif',
            color: 'black'
        },
        itemHoverStyle:{
            color: 'gray'
        }   
    }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
