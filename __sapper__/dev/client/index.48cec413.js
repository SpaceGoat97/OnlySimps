import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.5d21d991.js';

/* src/routes/index.svelte generated by Svelte v3.24.1 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let div2;
	let div0;
	let img;
	let img_src_value;
	let t1;
	let div1;
	let h1;
	let t2;

	const block = {
		c: function create() {
			t0 = space();
			div2 = element("div");
			div0 = element("div");
			img = element("img");
			t1 = space();
			div1 = element("div");
			h1 = element("h1");
			t2 = text("OnlySimps");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-iix6qz\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, class: true, alt: true });
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, "OnlySimps");
			h1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Mekyle Naidoo";
			if (img.src !== (img_src_value = "/Users/mekyle/OnlySimps/static/successkid.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "h-screen w-full landing-image svelte-1s6ztyt");
			attr_dev(img, "alt", "");
			add_location(img, file, 25, 8, 660);
			attr_dev(div0, "class", "bg-red-600 w-full md:w-1/2 h-screen");
			add_location(div0, file, 24, 5, 602);
			attr_dev(h1, "class", "svelte-1s6ztyt");
			add_location(h1, file, 32, 8, 878);
			attr_dev(div1, "class", "bg-white w-full md:w-1/2 h-screen");
			add_location(div1, file, 31, 6, 822);
			attr_dev(div2, "class", "flex flex-wrap md items-center h-screen");
			add_location(div2, file, 23, 4, 543);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, img);
			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, h1);
			append_dev(h1, t2);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNDhjZWM0MTMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
