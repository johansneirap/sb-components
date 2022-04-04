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

export const MyLabel = ( { label='No Label', size='normal', color='primary', allCaps=false, fontColor='', backgroundColor='transparent' }: MyLabelProps ) => {
  return (
        <span 
            className={ `label ${size} text-${color}` }
            style={ { color: fontColor, backgroundColor } }
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
  )
};

export default MyLabel;
