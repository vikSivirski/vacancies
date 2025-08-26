const formatSalary = (data: { from: number | null; to: number | null } | null) => {
	if (data !== null) {
		if (data.to === null) {
			return `${data.from}`;
		} else {
			return `${data.from} - ${data.to}`;
		}
	} else {
		return 'Зарплата не указана';
	}
};

export default formatSalary;
