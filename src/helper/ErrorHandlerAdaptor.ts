import {toast} from "react-toastify";


export const ErrorHandlerAdaptor = (error: any) => {

    let message = '';
    if (error.response.status || error.status === 403) {
        message =
            error.response?.data?.title ||
            error.response?.data?.message ||
            error.response?.data?.detail ||
            error.response?.data?.statusText ||
            error.response?.data ||
            '404';

        toast.error(message);
    } else if (error.response.status || error.status === 409) {
        message =
            error.response.data?.detail ||
            error.response.data?.statusText ||
            error.response.data ||
            error.response.data?.title ||
            '409';

        toast.error(message);
    } else if (error.response.status || error.status === 500) {
        message = error?.response?.statusText;
        toast.error(message);
    } else if (error.response.status || error.status === 400) {
        message = error.response?.data?.detail || error?.response?.statusText;
        toast.error(message);
    } else {
        toast.error('global.an-error-occured');
    }
};
