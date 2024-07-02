import zhCN from './langs/zh-cn';
import enUS from './langs/en-us';
import zhTW from './langs/zh-tw';

const locales: Record<App.I18n.LangType, App.I18n.Schema> = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en-US': enUS
};

export default locales;
