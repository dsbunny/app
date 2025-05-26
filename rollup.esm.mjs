// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// Copyright 2025 Digital Signage Bunny Corp. Use of this source code is
// governed by an MIT-style license that can be found in the LICENSE file or at
// https://opensource.org/licenses/MIT.

import sourcemaps from 'rollup-plugin-sourcemaps';
import summary from 'rollup-plugin-summary';

export default [{
	input: [
		'build/index.js',
	],
	onwarn(warning) {
		if (warning.code !== 'THIS_IS_UNDEFINED') {
			console.error(`(!) ${warning.message}`);
		}
	},
	plugins: [
		sourcemaps(),
		summary(),
	],
	external: [
		'luxon',
	],
	output: {
		file: 'dist/bundle.mjs',
		format: 'esm',
		sourcemap: true,
	},
	preserveEntrySignatures: 'strict',
}];
