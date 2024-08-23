import { writable } from 'svelte/store';

export const cookies = writable({
	accepted: false
});

export const setCookie = (accepted) => {
	cookies.update((c) => {
		c.accepted = accepted;
		return c;
	});
};

export const getCookie = () => {
	let c = null;
	cookies.subscribe(value => {
		c = value;
	});
	return c;
};

// Accepting cookies
export const acceptCookies = () => {
	setCookie(true);
};