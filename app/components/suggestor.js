import Component from '@glimmer/component';

const dsl = {

};

const keywords = {
  authenticated: {
    boolean: ["=", "!="],
  },
};

const types = {
  boolean: /(true)|(false)/,
};

export default class SuggestorComponent extends Component {
}
