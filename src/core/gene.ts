import { EventEmitter } from 'events'
import { Incubator } from './incubator'

export class Gene {
    func: (Array) => any;

    output: (any) => void;
    lastOutput: any = '';
    outputCount: number = 0;

    input: any[];
    inputString: string[];
    constructor(private gene: number[], private burnout?: number) {}

    ReciveInput(index: number, value: any) {
        if (!this.inputString || this.input.length != this.inputString.length) {
            this.inputString = new Array<string>(this.input.length);
        }

        let valueString = JSON.stringify(value);
        if (this.inputString[index] === valueString) { return; }

        this.inputString[index] = valueString;
        this.input[index] = value;
        this.func(this.input)
    }

    SendOutput(result: any) {
        if(this.outputCount >= this.burnout) { return; }
        this.outputCount ++;

        let stringResult = JSON.stringify(result);
        if (stringResult === this.lastOutput) { return; }

        this.lastOutput = stringResult;
        this.output(result);
    }
}

export interface IGene {
    sequence: number[];
    execute: () => void;
}