export default class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toString1() {
		return `${this.x} * ${this.y} is ${multi(this.x, this.y)}`;
	}
}

const multi = (x, y) => {
	return `Hello = ${x*y}`;
}