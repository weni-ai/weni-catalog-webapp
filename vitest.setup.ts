import { i18n } from './src/plugins/i18n';
import { UnnnicSystem } from './src/plugins/UnnnicSystem';
import { config } from '@vue/test-utils';

config.global.plugins = [i18n, UnnnicSystem];
config.global.mocks = {
    $t: (msg: string) => msg,
};