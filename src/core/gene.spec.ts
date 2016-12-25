/// <reference path="../../typings/index.d.ts" />
import { Gene } from './gene'

describe('Gene', () => {
    let gene: Gene
    beforeEach(() => {
        gene = new Gene([123], 10);
    });

    describe('#ReciveInput', () => {
        beforeEach(() => {
            gene.func = () => {};
            gene.input = new Array(3);
            spyOn(gene, 'func');
        });

        it('should call func on input', () => {
            gene.ReciveInput(0, 1);
            expect(gene.func).toHaveBeenCalledTimes(1);
        });

        it('should not call func on same input', () => {
            gene.ReciveInput(0, 1);
            gene.ReciveInput(0, 1);
            gene.ReciveInput(1, 1);
            expect(gene.func).toHaveBeenCalledTimes(2);
        });
    });

    describe('#SendOutput', () => {
        beforeEach(() => {
            gene.output = () => {}
            spyOn(gene, 'output');
        });

        it('should call the output function', () => {
            gene.SendOutput('test');
            expect(gene.output).toHaveBeenCalledTimes(1);
        });

        it('should not call output again for same output', () => {
            gene.SendOutput([]);
            gene.SendOutput([]);
            expect(gene.output).toHaveBeenCalledTimes(1);
        });

        it('should not call output after burnout reached', () => {
            for (var i = 0; i < 12; i++) {
                gene.SendOutput('test' + i)         
            }
            expect(gene.output).toHaveBeenCalledTimes(10);
        })
    });
});