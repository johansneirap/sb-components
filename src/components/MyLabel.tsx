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
}

export const MyLabel = ( { label='No Label', size='normal', color='primary', allCaps=false, fontColor='' }: MyLabelProps ) => {
  return (
        <span 
            className={ `label ${size} text-${color}` }
            style={ { color: fontColor } }
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
  )
}
