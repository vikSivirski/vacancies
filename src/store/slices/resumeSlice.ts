import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isEditing: false,
	userName: 'Брылев Виктор',
	skills: ['JavaScript', 'Typescript', 'React', 'Redux', 'Redux-Toolkit', 'RTK-Query', 'React-Router'],
	aboutMe:
		'Привет! Я — Frontend-разработчик, создаю удобные и быстрые интерфейсы на React и TypeScript. Умею проектировать архитектуру клиентских приложений, оптимизировать производительность и писать чистый поддерживаемый код. Люблю разбираться в новых технологиях, внедрять лучшие практики и работать в команде, где ценят качество и скорость.',
};

const resumeSlice = createSlice({
	name: 'resume',
	initialState,
	reducers: {
		toggleEditing: (state) => {
			state.isEditing = !state.isEditing;
		},
		setUserName: (state, action) => {
			state.userName = action.payload;
		},
		setSkills: (state, action) => {
			state.skills = action.payload;
		},
		setAboutText: (state, action) => {
			state.aboutMe = action.payload;
		},
	},
});

export const { toggleEditing, setUserName, setSkills, setAboutText } = resumeSlice.actions;
export default resumeSlice.reducer;
