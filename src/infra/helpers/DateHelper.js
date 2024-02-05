import moment from "moment";
class DateHelper {

    static getDate(format = "YYYY-MM-DD") {
        return moment().format(format);
    }

    static addDays(days, format = "YYYY-MM-DD") {
        return moment(moment(), format).add(days, 'days').format(format);
    }
}

export default DateHelper;