import { Gene } from './gene'
import { Incubator } from './incubator'

export class Generation {
    genes: Gene[] = [];
    constructor(private incubator: Incubator, sequence: number[][]) {
        this.ResolveSequence(sequence);
    }

    ResolveSequence(sequence: number[][]) {
        let output: number[] = sequence.pop();
        for (var i = 0; i < sequence.length; i++) {
            var element = sequence[i];
            var gene = new Gene(element);
            
        }
    }
}