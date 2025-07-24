import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	formValues: {
		search: '',
		add: '',
	},
	searchTextForQuery: '',
	skills: [
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
	],
	page: 1,
	perPage: 10,
};

const vacancyFilterSlice = createSlice({
	name: 'vacancyFilter',
	initialState,
	reducers: {
		setFormValues: (state, action) => {
			const { type, value } = action.payload;
			state.formValues[type] = value;
		},
		setSearchTextForQuery: (state, action) => {
			state.searchTextForQuery = action.payload;
			state.page = 1;
		},
		resetFormValues: (state, action) => {
			const { type } = action.payload;
			state.formValues[type] = '';
		},
		addSkill: (state, action) => {
			const newSkill = {
				id: crypto.randomUUID(),
				name: action.payload,
			};
			state.skills.push(newSkill);
		},
		removeSkill: (state, action) => {
			state.skills = state.skills.filter((item) => item.id !== action.payload);
		},
		setPage: (state, action) => {
			state.page = action.payload;
		},
	},
});

export const { setSearchTextForQuery, setSearchText, setFormValues, resetFormValues, addSkill, removeSkill, setPage } =
	vacancyFilterSlice.actions;
export default vacancyFilterSlice.reducer;
