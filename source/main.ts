//-------------------------------------------------------------
import('@/stylesheet/index.css');
//-------------------------------------------------------------
import display from '@/index.vue';
import router from './router';
import { createApp as create } from 'vue';
//-------------------------------------------------------------
import CUSTOMIZABLE_LAYOUT from '@/layout/CUSTOMIZABLE_LAYOUT.vue';
import ADMINISTRATION_LAYOUT from '@/layout/ADMINISTRATION_LAYOUT.vue';
//-------------------------------------------------------------
import BRAND_SVG_LOGO from '@/components/BRAND_SVG_LOGO.vue';
import INPUT_TYPE_NUMBER from '@/components/INPUT_TYPE_NUMBER.vue';
import INPUT_TYPE_STRING from '@/components/INPUT_TYPE_STRING.vue';
import INPUT_TYPE_BOOLEAN from '@/components/INPUT_TYPE_BOOLEAN.vue';
import INPUT_TYPE_COUNTER from '@/components/INPUT_TYPE_COUNTER.vue';
import INPUT_TYPE_DEFINITION from '@/components/INPUT_TYPE_DEFINITION.vue';
import FORM_BLOCK from '@/components/FORM_BLOCK.vue';
import FORM_FIELDSET_DETAILS from '@/components/FORM_FIELDSET_DETAILS.vue';
//-------------------------------------------------------------
const application = create(display);
//-------------------------------------------------------------
application.component('BRAND_SVG_LOGO', BRAND_SVG_LOGO);
application.component('INPUT_TYPE_NUMBER', INPUT_TYPE_NUMBER);
application.component('INPUT_TYPE_STRING', INPUT_TYPE_STRING);
application.component('INPUT_TYPE_BOOLEAN', INPUT_TYPE_BOOLEAN);
application.component('INPUT_TYPE_COUNTER', INPUT_TYPE_COUNTER);
application.component('CUSTOMIZABLE_LAYOUT', CUSTOMIZABLE_LAYOUT);
application.component('INPUT_TYPE_DEFINITION', INPUT_TYPE_DEFINITION);
application.component('ADMINISTRATION_LAYOUT', ADMINISTRATION_LAYOUT);
application.component('FORM_BLOCK', FORM_BLOCK);
application.component('FORM_FIELDSET_DETAILS', FORM_FIELDSET_DETAILS);
//-------------------------------------------------------------
application.use(router);
application.mount('[application]');
//-------------------------------------------------------------
