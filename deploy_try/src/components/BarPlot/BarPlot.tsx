import { useMemo } from "react";
import * as d3 from "d3";

import styles from "./BarPlot.module.scss";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 50 };
const BAR_PADDING = 0.3;

type BarplotProps = {
  width: number;
  height: number;
  data: { name: string; value: number }[];
};

export const BarPlot = ({ width, height, data }: BarplotProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const groups = data.map((d) => d.name);
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(groups)
      .range([0, boundsWidth])
      .padding(BAR_PADDING)
      .paddingOuter(0.2);
  }, [data, width]);

  const yScale = useMemo(() => {
    const [,max] = d3.extent(data.map((d) => d.value));
    return d3
      .scaleLinear()
      .domain([0, max || 10])
      .range([boundsHeight, 0]);
  }, [data, height]);

  const colorScale = useMemo(() => {
    return d3.scaleOrdinal<string>().domain(groups).range(d3.schemeCategory10);
  }, [groups]);

  const yLabels = ["", "Noob", "Geek", "Ninja", "Jedi", "Prometeus"];
  const yTicks = yScale.ticks(yLabels.length);

  const allShapes = data.map((d, i) => {
    const x = xScale(d.name);
    if (x === undefined) {
      return null;
    }

    return (
      <g key={i}>
        <rect
          x={x}
          y={yScale(d.value)}
          width={xScale.bandwidth()}
          height={boundsHeight - yScale(d.value)}
          opacity={0.7}
          stroke="#d3d3d3"
          fill={colorScale(d.name)}
          fillOpacity={0.7}
          strokeWidth={1}
          rx={1}
        />
        <text
          x={x + xScale.bandwidth() / 2}
          y={yScale(d.value) - 7}
          textAnchor="middle"
          alignmentBaseline="baseline"
          fontSize={12}
          opacity={0.8}
          fill="#808080"
        >
          {d.value}
        </text>
        <text
          x={x + xScale.bandwidth() / 2}
          y={boundsHeight}
          textAnchor="middle"
          alignmentBaseline="ideographic"
          fontSize={12}
          transform={`rotate(-18, ${x + xScale.bandwidth()}, ${boundsHeight})`}
          fill="#808080"
          opacity={1}
        >
          {d.name}
        </text>
      </g>
    );
  });

  const grid = yTicks.map((value, i) => (
    <g key={i}>
      <line
        x1={0}
        x2={boundsWidth}
        y1={yScale(value)}
        y2={yScale(value)}
        stroke="#808080"
        opacity={0.2}
      />
      <text
        x={-10}
        y={yScale(value)}
        textAnchor="end"
        alignmentBaseline="middle"
        fontSize={9}
        fill="#808080"
        opacity={0.8}
      >
        {yLabels[i]}
      </text>
    </g>
  ));

  return (
    <div className={styles.barPlotContainer}>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {grid}
          {allShapes}
        </g>
      </svg>
    </div>
  );
};
