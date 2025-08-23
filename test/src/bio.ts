export default function fetchBio(person) {
    return new Promise((resolve) => {
        fetch("https://react.dev/reference/react/useEffect").then(() => {
            resolve(`This is ${person}'s Bio`);
        })
    })
}