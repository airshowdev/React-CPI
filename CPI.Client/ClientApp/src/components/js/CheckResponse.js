
export default CheckGetResponse = (response) => {
    if (response.Status == 200) {
        return response.Data
    } else {
        return;
    }
}