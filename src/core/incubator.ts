import { EventEmitter } from 'events';
import { Generation } from './generation'
export class GendevEventEmitter extends EventEmitter { }

export class Incubator {
    generations: Generation[];
    constructor(private seed: GenDevSeed, private options: GenDevOptions) {}
}

export class GenDevOptions {
    evalNumberMode: 'percent' | 'absolute' = 'percent';
}

export interface IInput {
    event: String
}

export interface IOutput {
    event: String
}

export class GenDevSeed {
    inputs: IInput[] = [];
    outputs: IOutput[] = [];
    inputEvents: EventEmitter
    outputEvents: EventEmitter
    evalFunc: (IGenDevSeed, Object, String) => Number
}