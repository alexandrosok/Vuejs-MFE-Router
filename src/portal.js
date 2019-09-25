import 'zone.js';
import * as singleSpa from 'single-spa';
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper'

async function init() {
    const globalEventDistributor = new GlobalEventDistributor();
    const loadingPromises = [];

    loadingPromises.push(loadApp('page1', '/page1', '/page1/singleSpaEntry.js', '/page1/store.js', globalEventDistributor));
    await Promise.all(loadingPromises);

    loadingPromises.push(loadApp('page2', '/page2', '/page2/singleSpaEntry.js', '/page2/store.js', globalEventDistributor));
    await Promise.all(loadingPromises);

    loadingPromises.push(loadApp('page3', '/page3', '/page3/singleSpaEntry.js', '/page3/store.js', globalEventDistributor));
    await Promise.all(loadingPromises);

    singleSpa.start();
}

init();

