/**
 *  Copyright 2022 Patrick L. Branson
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import './App.css';

import { useState } from 'react';

import Footer from './footer';
import Header from './header';
import NoteArea from './note-area';
import Note from './note';

const App = () => {
	const [notes, setNotes] = useState([]);

	const addNote = (newNote) => {
		setNotes((previousNotes) => {
			return [...previousNotes, newNote];
		});
	};

	const deleteNote = (id) => {
		setNotes((previousNotes) => {
			return previousNotes.filter((noteItem, index) => {
				return index !== id;
			});
		});
	};

	return (
		<div>
			<Header />
			<NoteArea onAdd={addNote} />
			{notes.map((noteItem, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={noteItem.title}
						content={noteItem.content}
						onDelete={deleteNote}
					/>
				);
			})}
			<Footer />
		</div>
	);
};

export default App;
