import styles from "./StreamGraphLegend.module.scss";

interface StreamGraphLegendProps {
  colorScale: (group: string) => string;
  groups: string[];
}

export function StreamGraphLegend({ colorScale, groups }: StreamGraphLegendProps) {
  const reversedGroups = [...groups].reverse();

  return (
    <svg className={styles.stremGraphLegend}>
      {reversedGroups.map((group, index) => (
        <g key={index} transform={`translate(${index * 200}, 0)`}>
          <circle r={12} fill={colorScale(group)} cy="20" />
          <text x={25} y="20" dy="0.35em" fontSize={12}>
            {group}
          </text>
        </g>
      ))}
    </svg>
  );
}


