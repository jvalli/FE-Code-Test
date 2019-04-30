import { Dimensions } from 'react-native';
const screen = Dimensions.get("window");

let _formulaHeight = null;
let _formulaWidth = null;
let _prom = null;

class L {
	static get formulaHeight() {
		return _formulaHeight;
	}

	static set formulaHeight(value) {
		_formulaHeight = value;
	}

	static get formulaWidth() {
		return _formulaWidth;
	}

	static set formulaWidth(value) {
		_formulaWidth = value;
	}

	static s() {
		if (_formulaHeight == null) {
			_formulaHeight = screen.height / 1536;
			_formulaWidth = screen.width / 2048;
			_prom = (_formulaHeight + _formulaWidth) / 2;
		}
	}

	static h(value) {
		return value * _formulaHeight;
	}
	static w(value) {
		return value * _formulaWidth;
	}

	static hProm(value) {
		return value * _prom;
	}
	static wProm(value) {
		return value * _prom;
	}
}

L.s();

module.exports = L;
