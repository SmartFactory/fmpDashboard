import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Goal I',
        stats: '97 %',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Goal II',
        stats: '$ 89,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Goal III',
        stats: '178,391',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'Goal IV',
        stats: '18',
        icon: 'refresh',
      }
    ];
  }
}
