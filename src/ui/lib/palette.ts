// SPDX-License-Identifier: Apache-2.0
// SPDX-FileCopyrightText: 2021-Present The Zarf Authors

import type { Palettes } from '@ui';
import { UUI_PALETTES } from '@ui';

// Current default from @ui
export const ZarfPalettes: Palettes = {
	...UUI_PALETTES,
	dark: {
		background: '#0a0e2e',
		onBackground: '#ffffff',
		primary: '#00acac'
	},
	light: {
		primary: '#4adede',
		secondary: '#787ff6',
		background: '#f5f5f5',
		surface: 'white',
		on: {
			background: 'black',
			surface: 'black',
			secondary: 'white',
			primary: '#171717'
		},
		paper: '#0D133D'
	}
};
