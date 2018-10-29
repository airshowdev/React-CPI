export default CheckGetResponse = (response) => {

    switch (response.Status) {
        case "200":
            return response.Data;
        default:
            this.context.router.history.push('/404');
    }
}