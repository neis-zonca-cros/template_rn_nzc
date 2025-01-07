import { ColorsEnum } from '@/enums/ColorsEnum';
import { ColorsName } from '@/enums/ColorsName';

const tintColorLight = ColorsEnum.DARK_BLUE;
const tintColorDark = ColorsEnum.GREY_LIGHT;

export default {
  light: {
    [ColorsName.TEXT]: ColorsEnum.DARK_BLUE,
    [ColorsName.BACKGROUND]: ColorsEnum.GREY_LIGHT,
    [ColorsName.BOTTOM_SHEET_BACKGROUND]: ColorsEnum.GREY_DARK,
    [ColorsName.TINT]: tintColorLight,
    [ColorsName.INACTIVE_TINT]: ColorsEnum.GREY_DARK,
    [ColorsName.ICON_HEADER]: tintColorLight,
  },
  dark: {
    [ColorsName.TEXT]: ColorsEnum.GREY_LIGHT,
    [ColorsName.BACKGROUND]: ColorsEnum.DARK_BLUE,
    [ColorsName.BOTTOM_SHEET_BACKGROUND]: ColorsEnum.GREY_DARK,
    [ColorsName.TINT]: tintColorDark,
    [ColorsName.INACTIVE_TINT]: ColorsEnum.GREY_VERY_DARK,
    [ColorsName.ICON_HEADER]: tintColorDark,
  },
};
