import { ColorsEnum } from '@/enums/ColorsEnum';

const tintColorLight = ColorsEnum.DARK_BLUE;
const tintColorDark = ColorsEnum.GREY_LIGHT;

export default {
  light: {
    text: ColorsEnum.DARK_BLUE,
    background: ColorsEnum.GREY_LIGHT,
    tint: tintColorLight,
    inactiveTint: ColorsEnum.GREY_DARK,
    iconHeader: tintColorLight,
  },
  dark: {
    text: ColorsEnum.GREY_LIGHT,
    background: ColorsEnum.DARK_BLUE,
    tint: tintColorDark,
    inactiveTint: ColorsEnum.GREY_VERY_DARK,
    iconHeader: tintColorDark,
  },
};
