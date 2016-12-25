import { GenDev, IInput } from '../src/gendev'

var gendev: GenDev = new GenDev();

gendev.RegisterInput('var1');
gendev.RegisterInput('var2');

gendev.RegisterOutput('result');

gendev.SetEvalFunction();

function eval (inputs ) {

}