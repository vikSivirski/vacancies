import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		id: crypto.randomUUID(),
		name: 'React',
	},
	{
		id: crypto.randomUUID(),
		name: 'TypeSkript',
	},
	{
		id: crypto.randomUUID(),
		name: 'Redux',
	},
];

const skillsSlice = createSlice({
	name: 'skills',
	initialState,
	reducers: {
		addSkill: (state, action) => {
			const newSkill = {
				id: crypto.randomUUID(),
				name: action.payload,
			};
			state.push(newSkill);
		},
		removeSkill: (state, action) => {
			return state.filter((item) => item.id !== action.payload);
		},
	},
});

export const { addSkill, removeSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
