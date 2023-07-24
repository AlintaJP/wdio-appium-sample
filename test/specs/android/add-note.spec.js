import EditNoteScreen from '../../screenobjects/android/edit-note.screen';

describe('Add Notes', () => {
  const noteHeading = 'Fav Anime List';
  const noteBody = 'Naruto\nOnePiece\nAOT';

  before('Skip tutorial', async () => {
    EditNoteScreen.skipTutorial();
  });

  it('Add a note, save changes & verify note', async () => {
    await EditNoteScreen.addAndSaveNote(noteHeading, noteBody);
  });
});
