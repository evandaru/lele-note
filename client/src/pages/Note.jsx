import { useState } from 'react';

function NoteApp() {
    const [notes, setNotes] = useState([]);  // Menyimpan daftar catatan
    const [noteInput, setNoteInput] = useState('');  // Menyimpan isi catatan
    const [titleInput, setTitleInput] = useState('');  // Menyimpan judul catatan
    const [editIndex, setEditIndex] = useState(null);  // Indeks catatan yang sedang diedit
    const [deleteIndex, setDeleteIndex] = useState(null);  // Indeks catatan yang akan dihapus

    // Fungsi untuk menambah atau mengedit catatan
    const saveNote = () => {
        if (titleInput.trim() === '' || noteInput.trim() === '') return;

        const newNote = { title: titleInput, content: noteInput };

        if (editIndex === null) {
            // Tambahkan catatan baru
            setNotes([...notes, newNote]);
        } else {
            // Edit catatan yang ada
            const updatedNotes = notes.map((note, index) =>
                index === editIndex ? newNote : note
            );
            setNotes(updatedNotes);
        }

        // Reset input dan tutup modal
        setNoteInput('');
        setTitleInput('');
        setEditIndex(null);
        document.getElementById('note_modal').close();
    };

    // Fungsi untuk menghapus catatan berdasarkan index
    const confirmDeleteNote = () => {
        if (deleteIndex !== null) {
            setNotes(notes.filter((_, i) => i !== deleteIndex));
            setDeleteIndex(null);
        }
        document.getElementById('delete_modal').close();
    };

    // Fungsi untuk membuka modal edit dengan data catatan
    const editNote = (index) => {
        setTitleInput(notes[index].title);
        setNoteInput(notes[index].content);
        setEditIndex(index);
        document.getElementById('note_modal').showModal();
    };

    // Fungsi untuk membuka modal konfirmasi hapus
    const openDeleteConfirm = (index) => {
        setDeleteIndex(index);
        document.getElementById('delete_modal').showModal();
    };

    return (
        <div className="flex justify-center items-center py-20">
            <div className="w-full max-w-5xl p-4 bg-base-100 shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-6">Note App</h1>

                {/* Tombol untuk membuka modal */}
                <button
                    className="btn-sm btn  mb-4 bg-base-200 shadow"
                    onClick={() => {
                        setEditIndex(null); // Reset edit state saat menambah catatan baru
                        setNoteInput('');
                        setTitleInput('');
                        document.getElementById('note_modal').showModal();
                    }}>
                    Add a New Note
                </button>

                {/* Modal untuk menambah/edit catatan */}
                <dialog id="note_modal" className="modal">
                    <div className="modal-box w-11/12 max-w-lg">
                        <h3 className="font-bold text-lg">
                            {editIndex === null ? 'Add a New Note' : 'Edit Note'}
                        </h3>
                        <div className="py-4">
                            {/* Input untuk judul */}
                            <input
                                type="text"
                                value={titleInput}
                                onChange={(e) => setTitleInput(e.target.value)}
                                className="input input-bordered w-full mb-2"
                                placeholder="Title"
                            />
                            {/* Textarea untuk isi catatan */}
                            <textarea
                                value={noteInput}
                                onChange={(e) => setNoteInput(e.target.value)}
                                className="textarea textarea-bordered w-full h-40"
                                placeholder="Type your note here"
                            />
                        </div>
                        <div className="modal-action">
                            <button className="btn btn-sm" onClick={() => document.getElementById('note_modal').close()}>
                                Cancel
                            </button>
                            <button className="btn btn-sm btn-outline" onClick={saveNote}>
                                {editIndex === null ? 'Add Note' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                </dialog>

                {/* Modal konfirmasi hapus */}
                <dialog id="delete_modal" className="modal">
                    <div className="modal-box w-11/12 max-w-sm">
                        <h3 className="font-bold text-lg">Konfirmasi Hapus</h3>
                        <p className="py-4">Apakah Anda yakin ingin menghapus catatan ini?</p>
                        <div className="modal-action">
                            <button
                                className="btn"
                                onClick={() => document.getElementById('delete_modal').close()}>
                                Cancel
                            </button>
                            <button
                                className="btn btn-sm btn-error"
                                onClick={confirmDeleteNote}>
                                Delete
                            </button>
                        </div>
                    </div>
                </dialog>

                {/* Daftar catatan dalam bentuk kotak seperti Google Keep */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {notes.length === 0 ? (
                        <p className="text-gray-500 col-span-full">No notes available.</p>
                    ) : (
                        notes.map((note, index) => (
                            <div key={index} className="card bg-base-200 shadow w-full">
                                <div className="card-body">
                                    <h2 className="card-title">{note.title}</h2>
                                    {/* Teks akan wrap dan tidak keluar dari card */}
                                    <p className="break-words">{note.content}</p>
                                    <div className="card-actions justify-end space-x-2">
                                        <button
                                            className="btn btn-sm btn-outline"
                                            onClick={() => editNote(index)}>
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-sm btn-outline btn-error"
                                            onClick={() => openDeleteConfirm(index)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default NoteApp;
