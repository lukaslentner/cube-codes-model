import { CubeMoveLanguage } from "../../src/Cube Move/CubeMoveLanguage";
import { CubeSpecification } from "../../src/Cube Geometry/CubeSpecification";
import { CubeFace } from "../../src/Cube Geometry/CubeFace";
import { CubeMove } from "../../src/Cube Move/CubeMove";

let s3 = new CubeSpecification(3);
let s8 = new CubeSpecification(8);
let cml3 = new CubeMoveLanguage(s3);
let cml8 = new CubeMoveLanguage(s8);

test('Single Face Move Parse Test', () => {

	expect(cml3.parse('R')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 1, 1)]);
	expect(cml3.parse('U')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 1, 1)]);
	expect(cml3.parse('F')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 1, 1)]);
	expect(cml3.parse('L')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 1, 1)]);
	expect(cml3.parse('D')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 1, 1)]);
	expect(cml3.parse('B')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 1, 1)]);

	expect(cml3.parse('R2')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 1, 2)]);
	expect(cml3.parse('U2')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 1, 2)]);
	expect(cml3.parse('F2')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 1, 2)]);
	expect(cml3.parse('L2')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 1, 2)]);
	expect(cml3.parse('D2')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 1, 2)]);
	expect(cml3.parse('B2')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 1, 2)]);

	expect(cml3.parse('R\'')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 1, -1)]);
	expect(cml3.parse('U\'')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 1, -1)]);
	expect(cml3.parse('F\'')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 1, -1)]);
	expect(cml3.parse('L\'')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 1, -1)]);
	expect(cml3.parse('D\'')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 1, -1)]);
	expect(cml3.parse('B\'')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 1, -1)]);

});

test('Single Outer Block Move (default slices) Parse Test', () => {

	expect(cml3.parse('Rw')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 2, 1)]);
	expect(cml3.parse('Uw')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 2, 1)]);
	expect(cml3.parse('Fw')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 2, 1)]);
	expect(cml3.parse('Lw')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 2, 1)]);
	expect(cml3.parse('Dw')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 2, 1)]);
	expect(cml3.parse('Bw')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 2, 1)]);

	expect(cml3.parse('Rw2')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 2, 2)]);
	expect(cml3.parse('Uw2')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 2, 2)]);
	expect(cml3.parse('Fw2')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 2, 2)]);
	expect(cml3.parse('Lw2')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 2, 2)]);
	expect(cml3.parse('Dw2')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 2, 2)]);
	expect(cml3.parse('Bw2')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 2, 2)]);

	expect(cml3.parse('Rw\'')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 2, -1)]);
	expect(cml3.parse('Uw\'')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 2, -1)]);
	expect(cml3.parse('Fw\'')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 2, -1)]);
	expect(cml3.parse('Lw\'')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 2, -1)]);
	expect(cml3.parse('Dw\'')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 2, -1)]);
	expect(cml3.parse('Bw\'')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 2, -1)]);

	expect(cml3.parse('r')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 2, 1)]);
	expect(cml3.parse('u')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 2, 1)]);
	expect(cml3.parse('f')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 2, 1)]);
	expect(cml3.parse('l')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 2, 1)]);
	expect(cml3.parse('d')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 2, 1)]);
	expect(cml3.parse('b')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 2, 1)]);

	expect(cml3.parse('r2')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 2, 2)]);
	expect(cml3.parse('u2')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 2, 2)]);
	expect(cml3.parse('f2')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 2, 2)]);
	expect(cml3.parse('l2')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 2, 2)]);
	expect(cml3.parse('d2')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 2, 2)]);
	expect(cml3.parse('b2')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 2, 2)]);

	expect(cml3.parse('r\'')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 2, -1)]);
	expect(cml3.parse('u\'')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 2, -1)]);
	expect(cml3.parse('f\'')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 2, -1)]);
	expect(cml3.parse('l\'')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 2, -1)]);
	expect(cml3.parse('d\'')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 2, -1)]);
	expect(cml3.parse('b\'')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 2, -1)]);

});

test('Single Outer Block Move (1 slice) Parse Test', () => {

	expect(cml3.parse('1Rw')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 1, 1)]);
	expect(cml3.parse('1Uw')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 1, 1)]);
	expect(cml3.parse('1Fw')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 1, 1)]);
	expect(cml3.parse('1Lw')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 1, 1)]);
	expect(cml3.parse('1Dw')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 1, 1)]);
	expect(cml3.parse('1Bw')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 1, 1)]);

	expect(cml3.parse('1Rw2')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 1, 2)]);
	expect(cml3.parse('1Uw2')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 1, 2)]);
	expect(cml3.parse('1Fw2')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 1, 2)]);
	expect(cml3.parse('1Lw2')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 1, 2)]);
	expect(cml3.parse('1Dw2')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 1, 2)]);
	expect(cml3.parse('1Bw2')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 1, 2)]);

	expect(cml3.parse('1Rw\'')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 1, -1)]);
	expect(cml3.parse('1Uw\'')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 1, -1)]);
	expect(cml3.parse('1Fw\'')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 1, -1)]);
	expect(cml3.parse('1Lw\'')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 1, -1)]);
	expect(cml3.parse('1Dw\'')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 1, -1)]);
	expect(cml3.parse('1Bw\'')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 1, -1)]);

	expect(cml3.parse('1r')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 1, 1)]);
	expect(cml3.parse('1u')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 1, 1)]);
	expect(cml3.parse('1f')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 1, 1)]);
	expect(cml3.parse('1l')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 1, 1)]);
	expect(cml3.parse('1d')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 1, 1)]);
	expect(cml3.parse('1b')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 1, 1)]);

	expect(cml3.parse('1r2')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 1, 2)]);
	expect(cml3.parse('1u2')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 1, 2)]);
	expect(cml3.parse('1f2')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 1, 2)]);
	expect(cml3.parse('1l2')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 1, 2)]);
	expect(cml3.parse('1d2')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 1, 2)]);
	expect(cml3.parse('1b2')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 1, 2)]);

	expect(cml3.parse('1r\'')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 1, -1)]);
	expect(cml3.parse('1u\'')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 1, -1)]);
	expect(cml3.parse('1f\'')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 1, -1)]);
	expect(cml3.parse('1l\'')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 1, -1)]);
	expect(cml3.parse('1d\'')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 1, -1)]);
	expect(cml3.parse('1b\'')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 1, -1)]);

});

test('Single Outer Block Move (2 slices) Parse Test', () => {

	expect(cml3.parse('2Rw')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 2, 1)]);
	expect(cml3.parse('2Uw')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 2, 1)]);
	expect(cml3.parse('2Fw')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 2, 1)]);
	expect(cml3.parse('2Lw')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 2, 1)]);
	expect(cml3.parse('2Dw')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 2, 1)]);
	expect(cml3.parse('2Bw')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 2, 1)]);

	expect(cml3.parse('2Rw2')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 2, 2)]);
	expect(cml3.parse('2Uw2')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 2, 2)]);
	expect(cml3.parse('2Fw2')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 2, 2)]);
	expect(cml3.parse('2Lw2')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 2, 2)]);
	expect(cml3.parse('2Dw2')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 2, 2)]);
	expect(cml3.parse('2Bw2')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 2, 2)]);

	expect(cml3.parse('2Rw\'')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 2, -1)]);
	expect(cml3.parse('2Uw\'')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 2, -1)]);
	expect(cml3.parse('2Fw\'')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 2, -1)]);
	expect(cml3.parse('2Lw\'')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 2, -1)]);
	expect(cml3.parse('2Dw\'')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 2, -1)]);
	expect(cml3.parse('2Bw\'')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 2, -1)]);

	expect(cml3.parse('2r')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 2, 1)]);
	expect(cml3.parse('2u')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 2, 1)]);
	expect(cml3.parse('2f')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 2, 1)]);
	expect(cml3.parse('2l')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 2, 1)]);
	expect(cml3.parse('2d')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 2, 1)]);
	expect(cml3.parse('2b')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 2, 1)]);

	expect(cml3.parse('2r2')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 2, 2)]);
	expect(cml3.parse('2u2')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 2, 2)]);
	expect(cml3.parse('2f2')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 2, 2)]);
	expect(cml3.parse('2l2')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 2, 2)]);
	expect(cml3.parse('2d2')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 2, 2)]);
	expect(cml3.parse('2b2')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 2, 2)]);

	expect(cml3.parse('2r\'')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 2, -1)]);
	expect(cml3.parse('2u\'')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 2, -1)]);
	expect(cml3.parse('2f\'')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 2, -1)]);
	expect(cml3.parse('2l\'')).toEqual([new CubeMove(s3, CubeFace.LEFT, 1, 2, -1)]);
	expect(cml3.parse('2d\'')).toEqual([new CubeMove(s3, CubeFace.DOWN, 1, 2, -1)]);
	expect(cml3.parse('2b\'')).toEqual([new CubeMove(s3, CubeFace.BACK, 1, 2, -1)]);

});

test('Single Outer Block Move (6 slices, Octocube) Parse Test', () => {

	expect(cml8.parse('6Rw')).toEqual([new CubeMove(s8, CubeFace.RIGHT, 1, 6, 1)]);
	expect(cml8.parse('6Uw')).toEqual([new CubeMove(s8, CubeFace.UP, 1, 6, 1)]);
	expect(cml8.parse('6Fw')).toEqual([new CubeMove(s8, CubeFace.FRONT, 1, 6, 1)]);
	expect(cml8.parse('6Lw')).toEqual([new CubeMove(s8, CubeFace.LEFT, 1, 6, 1)]);
	expect(cml8.parse('6Dw')).toEqual([new CubeMove(s8, CubeFace.DOWN, 1, 6, 1)]);
	expect(cml8.parse('6Bw')).toEqual([new CubeMove(s8, CubeFace.BACK, 1, 6, 1)]);

	expect(cml8.parse('6Rw2')).toEqual([new CubeMove(s8, CubeFace.RIGHT, 1, 6, 2)]);
	expect(cml8.parse('6Uw2')).toEqual([new CubeMove(s8, CubeFace.UP, 1, 6, 2)]);
	expect(cml8.parse('6Fw2')).toEqual([new CubeMove(s8, CubeFace.FRONT, 1, 6, 2)]);
	expect(cml8.parse('6Lw2')).toEqual([new CubeMove(s8, CubeFace.LEFT, 1, 6, 2)]);
	expect(cml8.parse('6Dw2')).toEqual([new CubeMove(s8, CubeFace.DOWN, 1, 6, 2)]);
	expect(cml8.parse('6Bw2')).toEqual([new CubeMove(s8, CubeFace.BACK, 1, 6, 2)]);

	expect(cml8.parse('6Rw\'')).toEqual([new CubeMove(s8, CubeFace.RIGHT, 1, 6, -1)]);
	expect(cml8.parse('6Uw\'')).toEqual([new CubeMove(s8, CubeFace.UP, 1, 6, -1)]);
	expect(cml8.parse('6Fw\'')).toEqual([new CubeMove(s8, CubeFace.FRONT, 1, 6, -1)]);
	expect(cml8.parse('6Lw\'')).toEqual([new CubeMove(s8, CubeFace.LEFT, 1, 6, -1)]);
	expect(cml8.parse('6Dw\'')).toEqual([new CubeMove(s8, CubeFace.DOWN, 1, 6, -1)]);
	expect(cml8.parse('6Bw\'')).toEqual([new CubeMove(s8, CubeFace.BACK, 1, 6, -1)]);

	expect(cml8.parse('6r')).toEqual([new CubeMove(s8, CubeFace.RIGHT, 1, 6, 1)]);
	expect(cml8.parse('6u')).toEqual([new CubeMove(s8, CubeFace.UP, 1, 6, 1)]);
	expect(cml8.parse('6f')).toEqual([new CubeMove(s8, CubeFace.FRONT, 1, 6, 1)]);
	expect(cml8.parse('6l')).toEqual([new CubeMove(s8, CubeFace.LEFT, 1, 6, 1)]);
	expect(cml8.parse('6d')).toEqual([new CubeMove(s8, CubeFace.DOWN, 1, 6, 1)]);
	expect(cml8.parse('6b')).toEqual([new CubeMove(s8, CubeFace.BACK, 1, 6, 1)]);

	expect(cml8.parse('6r2')).toEqual([new CubeMove(s8, CubeFace.RIGHT, 1, 6, 2)]);
	expect(cml8.parse('6u2')).toEqual([new CubeMove(s8, CubeFace.UP, 1, 6, 2)]);
	expect(cml8.parse('6f2')).toEqual([new CubeMove(s8, CubeFace.FRONT, 1, 6, 2)]);
	expect(cml8.parse('6l2')).toEqual([new CubeMove(s8, CubeFace.LEFT, 1, 6, 2)]);
	expect(cml8.parse('6d2')).toEqual([new CubeMove(s8, CubeFace.DOWN, 1, 6, 2)]);
	expect(cml8.parse('6b2')).toEqual([new CubeMove(s8, CubeFace.BACK, 1, 6, 2)]);

	expect(cml8.parse('6r\'')).toEqual([new CubeMove(s8, CubeFace.RIGHT, 1, 6, -1)]);
	expect(cml8.parse('6u\'')).toEqual([new CubeMove(s8, CubeFace.UP, 1, 6, -1)]);
	expect(cml8.parse('6f\'')).toEqual([new CubeMove(s8, CubeFace.FRONT, 1, 6, -1)]);
	expect(cml8.parse('6l\'')).toEqual([new CubeMove(s8, CubeFace.LEFT, 1, 6, -1)]);
	expect(cml8.parse('6d\'')).toEqual([new CubeMove(s8, CubeFace.DOWN, 1, 6, -1)]);
	expect(cml8.parse('6b\'')).toEqual([new CubeMove(s8, CubeFace.BACK, 1, 6, -1)]);

});

test('Single Rotation Move Parse Test', () => {

	expect(cml3.parse('x')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 3, 1)]);
	expect(cml3.parse('y')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 3, 1)]);
	expect(cml3.parse('z')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 3, 1)]);

	expect(cml3.parse('x2')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 3, 2)]);
	expect(cml3.parse('y2')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 3, 2)]);
	expect(cml3.parse('z2')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 3, 2)]);

	expect(cml3.parse('x\'')).toEqual([new CubeMove(s3, CubeFace.RIGHT, 1, 3, -1)]);
	expect(cml3.parse('y\'')).toEqual([new CubeMove(s3, CubeFace.UP, 1, 3, -1)]);
	expect(cml3.parse('z\'')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 3, -1)]);

});

test('Multi Move Parse Test', () => {

	expect(cml3.parse('2Fw\'_Fw U2_U_U')).toEqual([new CubeMove(s3, CubeFace.FRONT, 1, 2, -1), new CubeMove(s3, CubeFace.FRONT, 1, 2, 1), new CubeMove(s3, CubeFace.UP, 1, 1, 2), new CubeMove(s3, CubeFace.UP, 1, 1, 1), new CubeMove(s3, CubeFace.UP, 1, 1, 1)]);
	expect(cml8.parse('2-2r3\'_m8 M2\'')).toEqual([new CubeMove(s8, CubeFace.RIGHT, 2, 2, -3), new CubeMove(s8, CubeFace.RIGHT, 2, 6, 8), new CubeMove(s8, CubeFace.RIGHT, 4, 0, -2)]);

});

test('Single Face Move Stringify Test', () => {

	expect(cml3.stringify([new CubeMove(s3, CubeFace.RIGHT, 1, 1, 1)])).toEqual('R');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.UP, 1, 1, 1)])).toEqual('U');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.FRONT, 1, 1, 1)])).toEqual('F');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.LEFT, 1, 1, 1)])).toEqual('L');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.DOWN, 1, 1, 1)])).toEqual('D');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.BACK, 1, 1, 1)])).toEqual('B');

	expect(cml3.stringify([new CubeMove(s3, CubeFace.RIGHT, 1, 1, 2)])).toEqual('R2');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.UP, 1, 1, 2)])).toEqual('U2');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.FRONT, 1, 1, 2)])).toEqual('F2');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.LEFT, 1, 1, 2)])).toEqual('L2');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.DOWN, 1, 1, 2)])).toEqual('D2');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.BACK, 1, 1, 2)])).toEqual('B2');

	expect(cml3.stringify([new CubeMove(s3, CubeFace.RIGHT, 1, 1, -1)])).toEqual('R\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.UP, 1, 1, -1)])).toEqual('U\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.FRONT, 1, 1, -1)])).toEqual('F\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.LEFT, 1, 1, -1)])).toEqual('L\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.DOWN, 1, 1, -1)])).toEqual('D\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.BACK, 1, 1, -1)])).toEqual('B\'');

});

test('Single Outer Block Move (2 slice) Stringify Test', () => {

	expect(cml3.stringify([new CubeMove(s3, CubeFace.RIGHT, 1, 2, 1)])).toEqual('r');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.UP, 1, 2, 1)])).toEqual('u');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.FRONT, 1, 2, 1)])).toEqual('f');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.LEFT, 1, 2, 1)])).toEqual('l');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.DOWN, 1, 2, 1)])).toEqual('d');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.BACK, 1, 2, 1)])).toEqual('b');

	expect(cml3.stringify([new CubeMove(s3, CubeFace.RIGHT, 1, 2, 2)])).toEqual('r2');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.UP, 1, 2, 2)])).toEqual('u2');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.FRONT, 1, 2, 2)])).toEqual('f2');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.LEFT, 1, 2, 2)])).toEqual('l2');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.DOWN, 1, 2, 2)])).toEqual('d2');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.BACK, 1, 2, 2)])).toEqual('b2');

	expect(cml3.stringify([new CubeMove(s3, CubeFace.RIGHT, 1, 2, -1)])).toEqual('r\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.UP, 1, 2, -1)])).toEqual('u\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.FRONT, 1, 2, -1)])).toEqual('f\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.LEFT, 1, 2, -1)])).toEqual('l\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.DOWN, 1, 2, -1)])).toEqual('d\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.BACK, 1, 2, -1)])).toEqual('b\'');

});

test('Single Outer Block Move (3 slice, Quadrocube) Stringify Test', () => {

	expect(cml8.stringify([new CubeMove(s8, CubeFace.RIGHT, 1, 3, 1)])).toEqual('3r');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.UP, 1, 3, 1)])).toEqual('3u');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.FRONT, 1, 3, 1)])).toEqual('3f');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.LEFT, 1, 3, 1)])).toEqual('3l');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.DOWN, 1, 3, 1)])).toEqual('3d');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.BACK, 1, 3, 1)])).toEqual('3b');

	expect(cml8.stringify([new CubeMove(s8, CubeFace.RIGHT, 1, 3, 2)])).toEqual('3r2');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.UP, 1, 3, 2)])).toEqual('3u2');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.FRONT, 1, 3, 2)])).toEqual('3f2');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.LEFT, 1, 3, 2)])).toEqual('3l2');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.DOWN, 1, 3, 2)])).toEqual('3d2');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.BACK, 1, 3, 2)])).toEqual('3b2');

	expect(cml8.stringify([new CubeMove(s8, CubeFace.RIGHT, 1, 3, -1)])).toEqual('3r\'');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.UP, 1, 3, -1)])).toEqual('3u\'');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.FRONT, 1, 3, -1)])).toEqual('3f\'');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.LEFT, 1, 3, -1)])).toEqual('3l\'');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.DOWN, 1, 3, -1)])).toEqual('3d\'');
	expect(cml8.stringify([new CubeMove(s8, CubeFace.BACK, 1, 3, -1)])).toEqual('3b\'');

});

test('Single Rotation Move (3 slice) Stringify Test', () => {

	expect(cml3.stringify([new CubeMove(s3, CubeFace.RIGHT, 1, 3, 1)])).toEqual('x');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.UP, 1, 3, 1)])).toEqual('y');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.FRONT, 1, 3, 1)])).toEqual('z');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.LEFT, 1, 3, 1)])).toEqual('x\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.DOWN, 1, 3, 1)])).toEqual('y\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.BACK, 1, 3, 1)])).toEqual('z\'');

	expect(cml3.stringify([new CubeMove(s3, CubeFace.RIGHT, 1, 3, 2)])).toEqual('x2');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.UP, 1, 3, 2)])).toEqual('y2');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.FRONT, 1, 3, 2)])).toEqual('z2');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.LEFT, 1, 3, 2)])).toEqual('x2\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.DOWN, 1, 3, 2)])).toEqual('y2\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.BACK, 1, 3, 2)])).toEqual('z2\'');

	expect(cml3.stringify([new CubeMove(s3, CubeFace.RIGHT, 1, 3, -1)])).toEqual('x\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.UP, 1, 3, -1)])).toEqual('y\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.FRONT, 1, 3, -1)])).toEqual('z\'');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.LEFT, 1, 3, -1)])).toEqual('x');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.DOWN, 1, 3, -1)])).toEqual('y');
	expect(cml3.stringify([new CubeMove(s3, CubeFace.BACK, 1, 3, -1)])).toEqual('z');

});

test('Multi Move Stringify Test', () => {

	expect(cml3.stringify([new CubeMove(s3, CubeFace.DOWN, 1, 2, 5), new CubeMove(s3, CubeFace.BACK, 1, 3, -5), new CubeMove(s3, CubeFace.UP, 1, 1, 2)])).toEqual('d5 z5 U2');

});