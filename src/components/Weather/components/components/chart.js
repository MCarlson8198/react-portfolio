import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesBars, SparklinesNormalBand } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={100} width={140} data={props.data}>
        <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".75" }} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Avg = {average(props.data)} {props.units}</div>
    </div>
  );
}
