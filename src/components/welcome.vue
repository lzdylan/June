<template>
    <div class="index">
        <div class="city">
            <span class="town">杭州</span>
            <span class="cale">{{weekDay}}<strong>{{day}}日<em>{{month}}月</em></strong></span>
        </div>
        <div class="content_chart">
            <div id="msales"></div>
        </div>
        <div class="content_chart">
            <div class="chart_box">
                <h3>月订单量</h3>
                <div id="recovery"></div>
            </div>
            <div class="chart_box">
                <h3>产品销售概况</h3>
                <div id="sales_overview" style="width:350px;"></div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    const initchart = function () {
        var echarts = require('../../node_modules/echarts/dist/echarts.min.js');
        var msales = echarts.init(document.getElementById('msales'));
        //  指定图表的配置项和数据
        var moption = {
            title: {
                text: '月销售额',
                right: '49%',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#a1b9d7'
                    }
                }
            },
            legend: {
                data: ['本月', '上月'],
                right: '1%',
                icon: '',
                textStyle: {
                    color: '#fff'
                }
            },
            grid: {
                left: '0%',
                right: '1%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                splitLine: false,
                show: true,
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#ffffff',
                        align: 'left'
                    }
                },
                data: [{
                    value: '1',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '2',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '3',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '4',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '5',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '6',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '7',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '8',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '9',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '10',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '11',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '12',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '13',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '14',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '15',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '16',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '17',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '18',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '19',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '20',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '21',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '22',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '23',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '24',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '25',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '26',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '27',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '28',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '29',
                    textStyle: {
                        align: 'center'
                    }
                }, {
                    value: '30',
                    textStyle: {
                        align: 'center'
                    }
                }]
            },
            yAxis: {
                type: 'value',
                show: true,
                splitLine: false,
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#ffffff'
                    }
                }
            },
            series: [
                {
                    name: '本月',
                    type: 'line',
                    symbol: 'none',
                    smooth: true,
                    data: [12520, 13154, 31232, 83212, 91214, 80021, 48910, 13154, 89232, 83212, 50214, 81321, 98910, 13154, 81232, 83212, 95214, 80321, 48910, 13154, 81232, 83212, 91214, 81321, 98910, 13154, 89232, 83212, 95214, 99999],
                    itemStyle: {
                        normal: {
                            // 设置扇形的颜色
                            color: '#87df1a',
                            lineStyle: {
                                width: 1
                            }
                        }
                    }
                },
                {
                    name: '上月',
                    type: 'line',
                    symbol: 'none',
                    smooth: true,
                    data: [85564, 95300, 13564, 81102, 58974, 83131, 15641, 95300, 93564, 81102, 78974, 83131, 15641, 95300, 13564, 81102, 85974, 83131, 15641, 95300, 13564, 81102, 88974, 83131, 15641, 91300, 13564, 81102, 78974, 83131],
                    itemStyle: {
                        normal: {
                            // 设置扇形的颜色
                            color: '#61c5e0',
                            lineStyle: {
                                width: 1
                            }
                        }
                    }
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        msales.setOption(moption);
        var recovery = echarts.init(document.getElementById('recovery'));
        //  指定图表的配置项和数据
        var roption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#a1b9d7'
                    }
                }
            },
            legend: {
                data: ['月订单量'],
                icon: 'roundRect',
                right: '3%'
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                splitLine: false,
                axisLine: {
                    lineStyle: {
                        color: '#9a9ca0'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#9a9ca0',
                        align: 'left'
                    }
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            },
            yAxis: {
                type: 'value',
                splitLine: false,
                axisLine: {
                    lineStyle: {
                        color: '#9a9ca0'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    formatter: '{value} ',
                    textStyle: {
                        color: '#9a9ca0'
                    }
                }
            },
            series: [
                {
                    name: '月订单量',
                    type: 'line',
                    symbolSize: 10,
                    data: [85, 820, 1000, 84, 190, 598, 280, 392, 580, 194, 490, 980],
                    itemStyle: {
                        normal: {
                            color: '#37d0c8',
                            lineStyle: {
                                width: 3
                            }
                        }
                    }
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        recovery.setOption(roption);
        var salesO = echarts.init(document.getElementById('sales_overview'));
        // 指定图表的配置项和数据
        var soption = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                y: 'bottom',
                data: ['吊坠', '耳钉', '胸针', '手镯', '戒指', '面膜']
            },
            series: [{
                name: '产品销售概况',
                type: 'pie',
                radius: ['40%', '55%'],
                data: [
                    {
                        value: 460,
                        name: '吊坠',
                        itemStyle: {
                            normal: {
                                // 设置扇形的颜色
                                color: '#8cc3ea',
                                label: {
                                    show: true,
                                    formatter: '{d}%'
                                }
                            }
                        }
                    },
                    {
                        value: 40,
                        name: '耳钉',
                        itemStyle: {
                            normal: {
                                // 设置扇形的颜色
                                color: '#ff9600',
                                label: {
                                    show: true,
                                    formatter: '{d}%'
                                }
                            }
                        }
                    },
                    {
                        value: 90,
                        name: '胸针',
                        itemStyle: {
                            normal: {
                                // 设置扇形的颜色
                                color: '#8f82bc',
                                label: {
                                    show: true,
                                    formatter: '{d}%'
                                }
                            }
                        }
                    },
                    {
                        value: 310,
                        name: '手镯',
                        itemStyle: {
                            normal: {
                                // 设置扇形的颜色
                                color: '#38d3cb',
                                label: {
                                    show: true,
                                    formatter: '{d}%'
                                }
                            }
                        }
                    },
                    {
                        value: 50,
                        name: '戒指',
                        itemStyle: {
                            normal: {
                                // 设置扇形的颜色
                                color: '#c6e633',
                                label: {
                                    show: true,
                                    formatter: '{d}%'
                                }
                            }
                        }
                    },
                    {
                        value: 50,
                        name: '面膜',
                        itemStyle: {
                            normal: {
                                // 设置扇形的颜色
                                color: '#ec6bae',
                                label: {
                                    show: true,
                                    formatter: '{d}%'
                                }
                            }
                        }
                    }
                ]
            }
            ]
        };
        //  使用刚指定的配置项和数据显示图表。
        salesO.setOption(soption);
    };
    export default{
        data() {
            return {
                weekDay: '',
                week: ['日', '一', '二', '三', '四', '五', '六'],
                day: '',
                month: ''
            };
        },
        ready() {
            document.getElementById('msales').style.minWidth = document.documentElement.clientWidth - 247 + 'px';
            document.getElementById('recovery').style.minWidth = document.documentElement.clientWidth - 610 + 'px';
            initchart();
        },
        mounted() {
            document.getElementById('msales').style.minWidth = document.documentElement.clientWidth - 247 + 'px';
            document.getElementById('recovery').style.minWidth = document.documentElement.clientWidth - 610 + 'px';
            initchart();
            this.creatDate();
        },
        methods: {
            creatDate: function () {
                var d = new Date();
                this.weekDay = '星期' + this.week[d.getDay()];
                this.month = (d.getMonth() + 1);
                this.day = d.getDate();
            }
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .index
        .city
            text-align  right
            margin-bottom 10px
            overflow  hidden
            span
                padding  10px 30px
                float right
                background  #f6f6f6
                &.cale
                    background  #253034
                    color  #fff
                    padding  3px 20px 4px
                    text-align  left
                    line-height  27px
                    strong
                        display block
                        font-size  24px
                        font-style  normal
                        em
                            font-style  normal
                            font-size  14px
                            margin-left  15px
                &.town
                    font-size  30px
                    color  #253034
        .content_chart
            display flex
            flex-direction row
            justify-content space-between
            margin-top 15px
            .chart_box
                margin-bottom  15px
                border  1px solid #e2e2e2
                overflow  hidden
                position relative
                h3
                    background  #e2e2e2
                    height  35px
                    line-height  35px
                    font-size  16px
                    padding-left  15px
        #msales
            height 300px
            background -webkit-gradient(linear, 0 0, 0 bottom, from(#78938f), to(#253034))!important
        #recovery
            width 750px
            height 250px
        #sales_overview
            width 450px
            height 250px
</style>
