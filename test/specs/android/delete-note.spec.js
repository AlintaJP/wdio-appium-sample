import EditNoteScreen from '../../screenobjects/android/edit-note.screen';

describe('Delete Note', () => {
  before('Skip tutorial & add a note', async () => {
    const noteHeading = 'TV shows';
    const noteBody = 'Friends\nBreakingBad\nPeakyBlinders';

    await EditNoteScreen.skipTutorial();
    await EditNoteScreen.addAndSaveNote(noteHeading, noteBody);
    await driver.back();
  });

  it('Delete a note & check the note in trash can', async () => {
    const note = await EditNoteScreen.firstNote.getText();

    await EditNoteScreen.firstNote.click();
    await EditNoteScreen.moreIcon.click();
    await EditNoteScreen.deleteIcon.click();

    await driver.acceptAlert();

    await EditNoteScreen.navIcon.click();
    await EditNoteScreen.trachCanItem.click();

    const trashCanItem = await EditNoteScreen.firstNote;
    await expect(trashCanItem).toHaveText(note);
  });
});
