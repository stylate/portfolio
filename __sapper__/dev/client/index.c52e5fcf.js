import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, t as text, c as claim_element, b as children, d as claim_text, f as detach, g as add_location, h as insert, j as append, q as set_data, a as space, n as noop, C as destroy_each } from './chunk.0b0fbf73.js';

/* src/routes/blog/index.svelte generated by Svelte v3.4.4 */

const file = "src/routes/blog/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.post = list[i];
	return child_ctx;
}

// (27:1) {#each posts as post}
function create_each_block(ctx) {
	var li, a, t_value = ctx.post.title, t, a_href_value;

	return {
		c: function create() {
			li = element("li");
			a = element("a");
			t = text(t_value);
			this.h();
		},

		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {}, false);
			var li_nodes = children(li);

			a = claim_element(li_nodes, "A", { rel: true, href: true }, false);
			var a_nodes = children(a);

			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			a.rel = "prefetch";
			a.href = a_href_value = "blog/" + ctx.post.slug;
			add_location(a, file, 31, 6, 613);
			add_location(li, file, 31, 2, 609);
		},

		m: function mount(target, anchor) {
			insert(target, li, anchor);
			append(li, a);
			append(a, t);
		},

		p: function update(changed, ctx) {
			if ((changed.posts) && t_value !== (t_value = ctx.post.title)) {
				set_data(t, t_value);
			}

			if ((changed.posts) && a_href_value !== (a_href_value = "blog/" + ctx.post.slug)) {
				a.href = a_href_value;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(li);
			}
		}
	};
}

function create_fragment(ctx) {
	var t0, h1, t1, t2, ul;

	var each_value = ctx.posts;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Recent posts");
			t2 = space();
			ul = element("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "Recent posts");
			h1_nodes.forEach(detach);
			t2 = claim_text(nodes, "\n\n");

			ul = claim_element(nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "Blog";
			add_location(h1, file, 23, 0, 340);
			ul.className = "svelte-1frg2tf";
			add_location(ul, file, 25, 0, 363);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, ul, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.posts) {
				each_value = ctx.posts;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
				detach(ul);
			}

			destroy_each(each_blocks, detaching);
		}
	};
}

function preload({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

function instance($$self, $$props, $$invalidate) {
	let { posts } = $$props;

	const writable_props = ['posts'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Index> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('posts' in $$props) $$invalidate('posts', posts = $$props.posts);
	};

	return { posts };
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["posts"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.posts === undefined && !('posts' in props)) {
			console.warn("<Index> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Index>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Index>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Index;
export { preload };
