export function createState() {
	let value = $state(0);

	function up() {
		value += 1;
	}

	return {
		get value() {
			return value;
		},
		up
	};
}
