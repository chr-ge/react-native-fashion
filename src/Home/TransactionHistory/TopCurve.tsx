import React from 'react';
import Svg, { Defs, Path, Circle, ClipPath, Rect } from 'react-native-svg';
import { useTheme } from '../../components';
import { palette } from '../../components/Theme';

interface TopCurveProps {
    footerHeight: number;
}

const TopCurve = ({ footerHeight }: TopCurveProps) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.xl;

    return (
        <Svg 
            width={SIZE} 
            height={SIZE}
            style={{ 
                position: 'absolute', 
                bottom: footerHeight, 
                right: 0,
            }} 
            viewBox="0 0 1 1"
        >
            <Defs>
                <ClipPath id="clip">
                    <Path d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1" fill="black" />
                </ClipPath>
            </Defs>
            <Rect clipPath="url(#clip)" x={0} y={0} width={1} height={1} fill={palette.pink} />
            <Circle clipPath="url(#clip)" cx={0.4} cy={0.5} r={0.5} fill={palette.yellow} />
        </Svg>
    )
}

export default TopCurve;