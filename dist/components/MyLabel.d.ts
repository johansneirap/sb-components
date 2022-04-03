/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Message to display in the label
     */
    label: string;
    /**
     * Size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize the label
     */
    allCaps?: boolean;
    /**
     * Color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom Color for font of the label
     */
    fontColor?: string;
    /**
     * Custom Background Color of the label
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
