import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	formValues: {
		search: '',
		add: '',
	},
	searchTextForQuery: '',
	skills: ['React', 'TypeSkript', 'Redux'],
	cityFilterValue: 'Все',
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
			if (!state.skills.includes(action.payload)) {
				state.skills.push(action.payload);
			}
		},
		removeSkill: (state, action) => {
			state.skills = state.skills.filter((item) => item !== action.payload);
		},
		setCtiesFilterValue: (state, action) => {
			state.cityFilterValue = action.payload;
			console.log(state.cityFilterValue);
		},
		setPage: (state, action) => {
			state.page = action.payload;
		},
	},
});

export const {
	setSearchTextForQuery,
	setSearchText,
	setFormValues,
	resetFormValues,
	addSkill,
	removeSkill,
	setCtiesFilterValue,
	setPage,
} = vacancyFilterSlice.actions;
export default vacancyFilterSlice.reducer;
