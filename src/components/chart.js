import * as gauge from '@grapecity/wijmo.gauge';

// create the gauge
var myRadialGauge = new gauge.RadialGauge('#myRadialGauge', {
      isReadOnly: false,
      min: 0,
    max: 100,
    startAngle: 0,
    sweepAngle: 180,
    value: 75
  });

//   export default myRadialGauge;