/// <reference path="../../typings/index.d.ts" />
import { Incubator, GenDevOptions, GenDevSeed } from './incubator'
import { Generation } from './generation'

describe('Generation', () => {
    let incubator: Incubator;
    let generation: Generation;
    beforeEach(() => {
        incubator = new Incubator(null, null);
    });

    afterEach(() => {
        generation = undefined;
    });

    describe('#ResolveSequence', () => {
        it('should add genes for every "row" of the sequence', () => {
            
        });
    });
})