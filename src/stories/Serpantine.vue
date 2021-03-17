<template>
  <div class="border rounded-t">
    <div class="px-3 py-1 text-white bg-red-600 border rounded-t">
      Company Timeline
    </div>
    <!-- <img
      :src="images[0]"
      alt=""
    > -->
    <div
      style="height:500px"
      ref="chartdiv"
    >

    </div>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import data from "./data/CompanyHistory.json";
export default {
  name: "Serpantine",

  props: ["images"],

  mounted() {
    console.log(this.images);
    let chart = am4core.create(
      this.$refs.chartdiv,
      am4plugins_timeline.SerpentineChart
    );
    chart.curveContainer.padding(80, 20, 50, 20);
    chart.levelCount = 4;
    chart.yAxisRadius = am4core.percent(25);
    chart.yAxisInnerRadius = am4core.percent(-25);
    chart.maskBullets = false;

    chart.data = [
      {
        category: "RFA Rating",
        start: "2019-01-15",
        end: "2019-02-12",
        color: "rgba(236,103,10,0.5)".replace(/[^,]+(?=\))/, "0.5"),
        task: "Amber Rating",
        disabled1: false,
        image1:
          "https://rfa2-dev-static.s3.amazonaws.com/images/ratings/amber.png",
      },
      {
        category: "RFA Rating",
        start: "2019-02-12",
        end: "2019-03-10",
        color: "rgba(110,118,124,0.5)".replace(/[^,]+(?=\))/, "0.5"),
        task: "Silver",
        disabled4: false,
        image4:
          "https://rfa2-dev-static.s3.amazonaws.com/images/ratings/silver.png",
      },
      {
        category: "RFA Rating",
        start: "2019-03-10",
        end: "2019-04-30",
        color: "rgba(238,46,36,0.5)".replace(/[^,]+(?=\))/, "0.5"),
        task: "1 Red Flag",
        disabled2: false,
        image2: "./img/ratings/redflag1.png",
      },
    ];

    chart.dateFormatter.dateFormat = "yyyy-MM-dd";
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    chart.fontSize = 11;

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.innerRadius = -60;
    categoryAxis.renderer.radius = 60;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.baseInterval = { count: 1, timeUnit: "day" };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.startLocation = -0.5;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.renderer.line.strokeOpacity = 0.6;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    dateAxis.tooltip.label.paddingTop = 7;

    let labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fillOpacity = 0.7;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor(
      "background"
    );
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.padding(7, 7, 7, 7);

    let series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(10);
    series.columns.template.tooltipText =
      "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 0;

    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 3;
    bullet.circle.strokeOpacity = 0;
    bullet.propertyFields.fill = "color";
    bullet.locationX = 0;

    let bullet2 = series.bullets.push(new am4charts.CircleBullet());
    bullet2.circle.radius = 3;
    bullet2.circle.strokeOpacity = 0;
    bullet2.propertyFields.fill = "color";
    bullet2.locationX = 1;

    let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.disabled = true;
    imageBullet1.propertyFields.disabled = "disabled1";
    imageBullet1.locationX = 1;
    imageBullet1.circle.radius = 20;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "image1";

    let imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet2.disabled = true;
    imageBullet2.propertyFields.disabled = "disabled2";
    imageBullet2.locationX = 1;
    imageBullet2.circle.radius = 20;
    imageBullet2.propertyFields.stroke = "color";
    imageBullet2.background.propertyFields.fill = "color";
    imageBullet2.image = new am4core.Image();
    imageBullet2.image.propertyFields.href = "image2";

    let imageBullet3 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet3.disabled = true;
    imageBullet3.propertyFields.disabled = "disabled3";
    imageBullet3.locationX = 1;
    imageBullet3.circle.radius = 20;
    imageBullet3.propertyFields.stroke = "color";
    imageBullet3.background.propertyFields.fill = "color";
    imageBullet3.image = new am4core.Image();
    imageBullet3.image.propertyFields.href = "image3";

    let imageBullet4 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet4.disabled = true;
    imageBullet4.propertyFields.disabled = "disabled4";
    imageBullet4.locationX = 1;
    imageBullet4.circle.radius = 20;
    imageBullet4.propertyFields.stroke = "color";
    imageBullet4.background.propertyFields.fill = "color";
    imageBullet4.image = new am4core.Image();
    imageBullet4.image.propertyFields.href = "image4";

    let eventSeries = chart.series.push(
      new am4plugins_timeline.CurveLineSeries()
    );
    eventSeries.dataFields.dateX = "eventDate";
    eventSeries.dataFields.categoryY = "category";
    eventSeries.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    eventSeries.data = [
      {
        category: "Creditor Service",
        eventDate: "2019-01-15",
        letter: "New CCJ",
        description: "Unsatisfied",
      },
      {
        category: "",
        eventDate: "2019-01-23",
        letter: "Accounts Added",
        description: "Company Accounts Added",
      },
      {
        category: "",
        eventDate: "2019-02-10",
        letter: "Director Change",
        description: "New Director Appointed",
      },
      {
        category: "",
        eventDate: "2019-02-29",
        letter: "Officer Added",
        description: "A New Officer Added",
      },
      {
        category: "Creditor Service",
        eventDate: "2019-03-06",
        letter: "New CCJ",
        description: "Satisfied",
      },
      {
        category: "Creditor Service",
        eventDate: "2019-03-07",
        letter: "10% Drop in Profit",
        description: "Profit Drop",
      },
      {
        category: "Creditor Service",
        eventDate: "2019-03-09",
        letter: "New CCJ",
        description: "Satisfied",
      },
      {
        category: "Creditor Service",
        eventDate: "2019-03-10",
        letter: "New CCJ",
        description: "Satisfied",
      },
      {
        category: "Creditor Service",
        eventDate: "2019-03-12",
        letter: "New CCJ",
        description: "Satisfied",
      },
      {
        category: "Creditor Service",
        eventDate: "2019-03-12",
        letter: "New CCJ",
        description: "Satisfied",
      },
      {
        category: "Creditor Service",
        eventDate: "2019-03-28",
        letter: "Profit Alert",
        description: "Unsatisfied",
      },
      {
        category: "Creditor Service",
        eventDate: "2019-03-30",
        letter: "Adverse Media",
        description: "Unsatisfied",
      },
      {
        category: "Creditor Service",
        eventDate: "2019-04-30",
        letter: "New CCJ",
        description: "Unsatisfied",
      },
      {
        category: "Creditor Service",
        eventDate: "2019-03-22",
        letter: "Director Change",
        description: "Unsatisfied",
      },
      {
        category: "Creditor Service",
        eventDate: "2019-03-19",
        letter: "Late Filing Returns",
        description: "Unsatisfied",
      },
      {
        category: "Creditor Service",
        eventDate: "2019-04-23",
        letter: "New CCJ",
        description: "Unsatisfied",
      },
    ];
    eventSeries.strokeOpacity = 0;

    let flagBullet = eventSeries.bullets.push(
      new am4plugins_bullets.FlagBullet()
    );
    flagBullet.label.propertyFields.text = "letter";
    flagBullet.locationX = 0;
    flagBullet.tooltipText = "{description}";

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = "center";
    chart.scrollbarX.width = am4core.percent(85);

    let cursor = new am4plugins_timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.strokeDasharray = "1,4";
    cursor.lineX.strokeOpacity = 1;

    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = false;

    this.chart = chart;
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<style>
</style>