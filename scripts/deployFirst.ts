import { toNano } from '@ton/core';
import { First } from '../wrappers/First';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const first = provider.open(First.createFromConfig({}, await compile('First')));

    await first.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(first.address);

    // run methods on `first`
}
