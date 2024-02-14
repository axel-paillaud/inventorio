import { ref } from 'vue';

export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);

    fetch(url)
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err));

    return { data, error };
}

export function useRefreshFetch(url, data, error) {
    data.value = null;
    error.value = null;

    return new Promise((resolve) => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                data.value = json;
                resolve();
            })
            .catch((err) => (error.value = err));
    });
}
