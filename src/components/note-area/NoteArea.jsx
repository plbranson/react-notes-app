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

import { useState } from 'react';

import './NoteArea.css';

const NoteArea = (props) => {
	const [note, setNote] = useState({
		title: '',
		content: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setNote((previousNote) => {
			return {
				...previousNote,
				[name]: value,
			};
		});
	};

	const submitNote = (event) => {
		props.onAdd(note);
		setNote({
			title: '',
			content: '',
		});

		event.preventDefault();
	};

	return (
		<div className='NoteArea'>
			<form>
				<input
					name='title'
					onChange={handleChange}
					value={note.title}
					placeholder='Title'
				/>
				<textarea
					name='content'
					onChange={handleChange}
					value={note.content}
					placeholder='Take a note...'
					rows='3'
				/>
				<button onClick={submitNote}>Add</button>
			</form>
		</div>
	);
};

export default NoteArea;
