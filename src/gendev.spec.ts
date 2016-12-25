/// <reference path="../typings/index.d.ts" />
import { GenDev } from '../src/gendev'

describe('GenDev', () => {
    var gendev: GenDev;
    beforeEach(() => {
        gendev = new GenDev();
    });

    describe('#RegisterInput', () => {
        it('should add an input to the list', () => {
            expect(gendev.seed.inputs.length).toBe(0);
            gendev.RegisterInput("test");
            expect(gendev.seed.inputs.length).toBe(1);
        });

        it('should throw error if duplicate name', () => {
            var addTestInput = () => {
                gendev.RegisterInput("test");
            }

            addTestInput();
            expect(addTestInput).toThrow()
        });
    });

    describe('#RegisterOutput', () => {
        var addTestOutput = () => {
            gendev.RegisterOutput("test");
        }

        it('should add an output to the list', () => {
            expect(gendev.seed.outputs.length).toBe(0);
            addTestOutput();
            expect(gendev.seed.outputs.length).toBe(1);
        });

        it('should throw error if duplicate name', () => {
            addTestOutput();
            expect(addTestOutput).toThrow();
            expect(gendev.seed.outputs.length).toBe(1);
        });
    });

    describe('#RegisterEvalFunction', () => {
        it('should set the eval function', () => {
            let evalFunc = (values: Object) => {
                return 1;
            }

            expect(gendev.seed.evalFunc).toBeUndefined();
            gendev.RegisterEvalFunction(evalFunc);
            expect(gendev.seed.evalFunc).toBe(evalFunc);
        })
    });

    describe('#Initiate', () => {
        it('should create a new incubator instance', () => {
            expect(gendev.incubator).toBeUndefined();
            gendev.Initiate();
            expect(gendev.incubator).toBeDefined();
        });

        it('should start the incubator', () => {

        });
    });
})