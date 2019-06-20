import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, d as claim_text, h as insert, m as mount_component, f as detach } from './chunk.347ae607.js';
import './chunk.1c8adbe1.js';
import { G as Gallery } from './chunk.10128aab.js';

/* src/routes/fleeting-dream.svelte generated by Svelte v3.4.4 */

function create_fragment(ctx) {
	var title_value, t, current;

	document.title = title_value = name;

	var gallery = new Gallery({
		props: { data: ctx.pictures },
		$$inline: true
	});

	return {
		c: function create() {
			t = space();
			gallery.$$.fragment.c();
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "\n\n");
			gallery.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
			mount_component(gallery, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			if ((!current || changed.name) && title_value !== (title_value = name)) {
				document.title = title_value;
			}

			var gallery_changes = {};
			if (changed.pictures) gallery_changes.data = ctx.pictures;
			gallery.$set(gallery_changes);
		},

		i: function intro(local) {
			if (current) return;
			gallery.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			gallery.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}

			gallery.$destroy(detaching);
		}
	};
}

let name = "fleeting dream";

function instance($$self) {
	let pictures = {
        id: "self",
        number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    };

	return { pictures };
}

class Fleeting_dream extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Fleeting_dream;
