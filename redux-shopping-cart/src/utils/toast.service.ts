import { Flip, toast, ToastOptions } from "react-toastify";

interface NotifyStack {
	info(options?: ToastOptions): void;
	success(options?: ToastOptions): void;
	error(options?: ToastOptions): void;
	dark(options?: ToastOptions): void;
	warn(options?: ToastOptions): void;
	default(options?: ToastOptions): void;
}

const currentOptions: ToastOptions = {
	position: 'top-right',
	autoClose: 2000,
	closeOnClick: true,
	pauseOnHover: false,
	draggable: true,
	transition: Flip,
};

function notify(message = ''): NotifyStack {
	return {
		info(options = {}) {
			return toast.info(message, { ...currentOptions, ...options });
		},
		success(options = {}) {
			return toast.success(message, { ...currentOptions, ...options });
		},
		warn(options = {}) {
			return toast.warn(message, { ...currentOptions, ...options });
		},
		error(options = {}) {
			return toast.error(message, { ...currentOptions, ...options });
		},
		dark(options) {
			return toast.dark(message, { ...currentOptions, ...options });
		},
		default(options = {}) {
			return toast(message, { ...currentOptions, ...options });
		},
	};
}

export default notify;
