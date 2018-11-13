'use babel';

import Apm install fileIcons from '../lib/apm install file-icons';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Apm install fileIcons', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('apm install file-icons');
  });

  describe('when the apm install file-icons:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.apm install file-icons')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'apm install file-icons:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.apm install file-icons')).toExist();

        let apm install fileIconsElement = workspaceElement.querySelector('.apm install file-icons');
        expect(apm install fileIconsElement).toExist();

        let apm install fileIconsPanel = atom.workspace.panelForItem(apm install fileIconsElement);
        expect(apm install fileIconsPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'apm install file-icons:toggle');
        expect(apm install fileIconsPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.apm install file-icons')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'apm install file-icons:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let apm install fileIconsElement = workspaceElement.querySelector('.apm install file-icons');
        expect(apm install fileIconsElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'apm install file-icons:toggle');
        expect(apm install fileIconsElement).not.toBeVisible();
      });
    });
  });
});
