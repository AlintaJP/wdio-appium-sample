import { findByResourceId, findByText } from '../../helpers/findBy';

class AddNoteScreen {
  get skipBtn() {
    return findByResourceId(
      'com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip'
    );
  }

  get addNoteText() {
    return findByText('Add note');
  }

  get textOption() {
    return findByText('Text');
  }

  get textEditing() {
    return findByText('Editing');
  }

  get noteHeading() {
    return findByResourceId(
      'com.socialnmobile.dictapps.notepad.color.note:id/edit_title'
    );
  }

  get noteBody() {
    return findByResourceId(
      'com.socialnmobile.dictapps.notepad.color.note:id/edit_note'
    );
  }

  get editBtn() {
    return findByResourceId(
      'com.socialnmobile.dictapps.notepad.color.note:id/edit_btn'
    );
  }

  get viewNote() {
    return findByResourceId(
      'com.socialnmobile.dictapps.notepad.color.note:id/view_note'
    );
  }

  async saveNote() {
    await driver.back();
    await driver.back();
  }
}

export default new AddNoteScreen();
