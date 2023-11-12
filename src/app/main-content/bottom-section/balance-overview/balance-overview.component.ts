import { Component } from '@angular/core';

@Component({
  selector: 'app-balance-overview',
  templateUrl: './balance-overview.component.html',
  styleUrls: ['./balance-overview.component.scss']
})
export class BalanceOverviewComponent {

  dataSource: Object;
  constructor() {
    //STEP 2 - Chart Data
    const chartData = [
      {
        label: "Venezuela",
        value: "290"
      },
      {
        label: "Saudi",
        value: "260"
      },
      {
        label: "Canada",
        value: "180"
      },
      {
        label: "Iran",
        value: "140"
      },
      {
        label: "Russia",
        value: "115"
      },
      {
        label: "UAE",
        value: "100"
      },
      {
        label: "US",
        value: "30"
      },
      {
        label: "China",
        value: "30"
      }
    ];
    // STEP 3 - Chart Configuration
    const dataSource = {
      chart: {
        //Set the chart caption
        caption: "Countries With Most Oil Reserves [2017-18]",
        //Set the chart subcaption
        subCaption: "In MMbbl = One Million barrels",
        //Set the x-axis name
        xAxisName: "Country",
        //Set the y-axis name
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data - from step 2
      data: chartData
    };
    this.dataSource = dataSource;
  }
  // data = {
  //   chart: {
  //     caption: "Support Tickets : Received vs Resolved",
  //     yaxisname: "# of Tickets",
  //     subcaption: "Last week",
  //     numdivlines: "3",
  //     showvalues: "0",
  //     legenditemfontsize: "15",
  //     legenditemfontbold: "1",
  //     plottooltext: "<b>$dataValue</b> Tickets $seriesName on $label",
  //     theme: "candy"
  //   },
  //   categories: [
  //     {
  //       category: [
  //         {
  //           label: "Jan 1"
  //         },
  //         {
  //           label: "Jan 2"
  //         },
  //         {
  //           label: "Jan 3"
  //         },
  //         {
  //           label: "Jan 4"
  //         },
  //         {
  //           label: "Jan 5"
  //         },
  //         {
  //           label: "Jan 6"
  //         },
  //         {
  //           label: "Jan 7"
  //         }
  //       ]
  //     }
  //   ],
  //   dataset: [
  //     {
  //       seriesname: "Received",
  //       data: [
  //         {
  //           value: "55"
  //         },
  //         {
  //           value: "45"
  //         },
  //         {
  //           value: "52"
  //         },
  //         {
  //           value: "29"
  //         },
  //         {
  //           value: "48"
  //         },
  //         {
  //           value: "28"
  //         },
  //         {
  //           value: "32"
  //         }
  //       ]
  //     },
  //     {
  //       seriesname: "Resolved",
  //       data: [
  //         {
  //           value: "50"
  //         },
  //         {
  //           value: "30"
  //         },
  //         {
  //           value: "49"
  //         },
  //         {
  //           value: "22"
  //         },
  //         {
  //           value: "43"
  //         },
  //         {
  //           value: "14"
  //         },
  //         {
  //           value: "31"
  //         }
  //       ]
  //     }
  //   ]
  // };
  // width = 600;
  // height = 400;
  // type = "msspline";
  // dataFormat = "json";
  // dataSource = this.data;
}
