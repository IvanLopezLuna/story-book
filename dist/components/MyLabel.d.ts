/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * Label to display
     */
    label: string;
    /**
     * Size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Whether the label should be all caps
     */
    allCaps?: boolean;
    /**
     * Basic color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom font color of the label
     */
    fontColor?: string;
    /**
     * Custom background color of the label
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
