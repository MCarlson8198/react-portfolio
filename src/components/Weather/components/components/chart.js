import React from 'react';
import { Sparklines, SparklinesReferenceLine, SparklinesBars } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines limit={30} height={100} width={140} data={props.data}>
        <SparklinesBars style={{ fill: "#80a8ba"}} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Avg = {average(props.data)} {props.units}</div>
    </div>
  );
}
