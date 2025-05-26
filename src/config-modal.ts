// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { AppBaseParams } from './app-params.js';

export type ConfigShowModalFunction = (params: AppBaseParams) => Promise<AppBaseParams>;
