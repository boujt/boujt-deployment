import { Box, Flex } from "@chakra-ui/react";
import React from "react";

import styles from './CircleChart.module.css';

type Props = {
    percentage: number, // Value range [0, 100]
    fill: string,
    text: string
}

const CircleChart: React.FC<Props> = (props) => {
    return (
        <div className={styles.singleChart}>
            <svg viewBox="0 0 36 36" className={styles.circularChart}>
            <path className={styles.circleBG}
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                stroke={'gray'}
                strokeOpacity={0.2}
            />
            <path className={styles.circle}
                strokeDasharray={`${props.percentage}, 100`}
                stroke={props.fill}
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="16.35" className={styles.percentage}>
                {props.percentage}%
            </text>
            <text x="18" y="21.35" className={styles.text}>
                {props.text}
            </text>
            </svg>
        </div>
    )
}

export default CircleChart;