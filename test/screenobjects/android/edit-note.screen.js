import { findByResourceId, findByText } from '../../helpers/findBy';
import AddNoteScreen from './add-note.screen';

class EditNoteScreen {
  get firstNote() {
    return findByResourceId(
      'com.socialnmobile.dictapps.notepad.color.note:id/title'
    );
  }

  get moreIcon() {
    return $('~More');
  }

  get deleteIcon() {
    return findByText('Delete');
  }

  get navIcon() {
    return findByResourceId(
      'com.socialnmobile.dictapps.notepad.color.note:id/icon_nav'
    );
  }

  get trachCanItem() {
    return findByText('Trash Can');
  }

  async skipTutorial() {
    await AddNoteScreen.skipBtn.click();
    await expect(AddNoteScreen.addNoteText).toBeDisplayed();
  }

  async addAndSaveNote(noteHeading, noteBody) {
    await AddNoteScreen.addNoteText.click();
    await AddNoteScreen.textOption.click();
    await expect(AddNoteScreen.textEditing).toBeDisplayed();

    await AddNoteScreen.noteHeading.setValue(noteHeading);
    await AddNoteScreen.noteBody.setValue(noteBody);
    await AddNoteScreen.saveNote();

    await expect(AddNoteScreen.editBtn).toBeDisplayed();
    await expect(AddNoteScreen.viewNote).toHaveText(noteBody);
  }
}

export default new EditNoteScreen();
