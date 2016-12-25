import { Incubator, GenDevOptions, GenDevSeed, IInput, IOutput } from './core/incubator';

export class GenDev {
    incubator: Incubator;
    seed: GenDevSeed = new GenDevSeed();

    RegisterInput(name: String) {
        if (this.seed.inputs.some(data => 
            data.event === name)) {
            throw(`Unable to register duplicate input with name '${name}'`);
        }

        let input: IInput = {
            event: name
        }

        this.seed.inputs.push(input);
    }

    RegisterOutput(name: String) {
        if (this.seed.outputs.some(data => 
            data.event === name)) {
            throw(`Unable to register duplicate output with name '${name}'`);
        }

        let output: IOutput = {
            event: name
        };

        this.seed.outputs.push(output);
    }

    RegisterEvalFunction(evalFunction: (Object, GameDev) => Number) {
        this.seed.evalFunc = evalFunction;
    }

    Initiate(options?: GenDevOptions) {
        this.incubator = new Incubator(null, options || new GenDevOptions());
        //this.incubator.Start();
    }
}