import Application from 'ember-dsl-helper/app';
import config from 'ember-dsl-helper/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
