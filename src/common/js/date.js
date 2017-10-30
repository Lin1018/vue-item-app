export function formatDate(time) {
	var oDate = new Date();
	oDate.setTime(time);

	return oDate.getFullYear() + '-' + oDate.getMonth() + '-' + oDate.getDate() + ' ' + oDate.getHours() + ':' + oDate.getMinutes();
};