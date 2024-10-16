import { Text, TextProps } from './Themed';

export function TitleText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'TitleText' }]} />;
}

export function BodyText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'BodyText' }]} />;
}
