import { S as SvelteComponentDev, i as init, s as safe_not_equal, n as noop } from './chunk.5c1bd8f2.js';

/* src/routes/index.svelte generated by Svelte v3.4.4 */

function create_fragment(ctx) {
	return {
		c: function create() {
			this.h();
		},

		l: function claim(nodes) {
			this.h();
		},

		h: function hydrate() {
			document.title = "Sapper project template";
		},

		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Index;
