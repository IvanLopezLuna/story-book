import './myLabel.css'

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

export const MyLabel = ({
  label = 'Your label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
  backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span 
      className={`label ${size} text-${color}`} 
      style={{
        color: fontColor,
        backgroundColor
      }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
