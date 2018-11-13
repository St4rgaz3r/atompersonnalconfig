'use babel';

import Apm install fileIconsView from './apm install file-icons-view';
import { CompositeDisposable } from 'atom';

export default {

  apm install fileIconsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.apm install fileIconsView = new Apm install fileIconsView(state.apm install fileIconsViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.apm install fileIconsView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'apm install file-icons:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.apm install fileIconsView.destroy();
  },

  serialize() {
    return {
      apm install fileIconsViewState: this.apm install fileIconsView.serialize()
    };
  },

  toggle() {
    console.log('Apm install fileIcons was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
