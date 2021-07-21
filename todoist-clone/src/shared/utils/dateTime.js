import moment from "moment";

export const formatDate = (date, format = "DD MMM") => {
    switch (moment().startOf("day").diff(moment(date).startOf("day"), "days")) {
        case 0:
            return "Today";
        case -1:
            return "Tommorow";
        case -2:
        case -3:
        case -4:
        case -5:
        case -6:
        case -7:
            return moment(date).format("dddd");
        default:
            break;
    }

    return date ? moment(date).format(format) : date;
};
