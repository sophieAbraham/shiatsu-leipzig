import axios from "axios";

// items
const url = "http://localhost:5000/uploads/";

export async function getItems() {
    try {
        let resp = await axios.get(url)

        // Wenn Antwort-Status 404 ist, werfe Fehler fuer nicht gefunden
        if (resp.status === 404) throw new Error('Not found');
        // Wenn Antwort-Status nicht 200 ist, werfe allgemeinen Fehler
        if (resp.status !== 200) throw new Error('Error occurred');

        // Wandle erhaltenen Datensatz in JS-Objekt um
        let data = resp.data;

        console.log(data);

    } catch (error) {
        console.log(error);
    }
}


export async function createItem(item) {
    try {
        let resp = await axios.post(url, item)
        console.log(resp);

    } catch (error) {
        console.log(error);
    }
}


export function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

/* ----------------------------------------------------------- */

// posts

export async function getAllPosts() {
    try {
        let resp = await axios.get("http://localhost:5000/posts/")

        // Wenn Antwort-Status 404 ist, werfe Fehler fuer nicht gefunden
        if (resp.status === 404) throw new Error('Not found');
        // Wenn Antwort-Status nicht 200 ist, werfe allgemeinen Fehler
        if (resp.status !== 200) throw new Error('Error occurred');

        // Wandle erhaltenen Datensatz in JS-Objekt um
        let data = resp.data;

        console.log(data);

    } catch (error) {
        console.log(error);
    }
}


export async function addPost(data) {
    try {
        let resp = await axios.post("http://localhost:5000/posts/", {
            title: data.title,
            description: data.description,
            date: data.date,
        })
        console.log(resp);

    } catch (error) {
        console.log(error);
    }
}


export const getPostDetails = async (id) => {
    const res = await axios.get(`/posts/${id}`).catch((err) => console.log(err));
    if (res.status !== 200) {
        return console.log("Unable to fetch diary");
    }

    const resData = await res.data;
    return resData;
}


export const postUpdate = async (data, id) => {
    const res = await axios
        .put(`/posts/${id}`, {
            title: data.title,
            description: data.description,
        })
        .catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("Unable to udpate");
    }

    const resData = await res.data;
    return resData;
}


export const postDelete = async (id) => {
    const res = await axios
        .delete(`/posts/${id}`)
        .catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("Unable to delete");
    }

    const resData = await res.data;
    return resData;
}
