import { createClient } from "urql";

const client = createClient({
    url: 'https://api-sa-east-1.graphcms.com/v2/ckzq8mmhq5v0s01xke8edfp4j/master',
    /*fetchOptions: () => {
        const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDUwNTk5MjUsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrenE4bW1ocTV2MHMwMXhrZThlZGZwNGovbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZjk5MjMyZTItZDI3ZC00MzZiLWFjNmEtMWZjMWM1M2Y1YzY1IiwianRpIjoiY2t6cWE3ZWU2NXlwOTAxejNocGd0NHBlMCJ9.c0T9G3bTmF8vjlSbIj4LWqT72RdYIEfTDdzbiQkrP9M5PeUZSG9aczVQaWirUQpv3JmgoB4RjN5eeLw0Awmnl_wPgzHtQdeT7-Qhedejxg41PS8UEq6QeRlGZn7w5AqPUJ9xasLYrXTDgI9vCZXYkQTDdvYVA2ue1ely4xjmFpflwVrutHOMefCUKeyINoKYyozQcIgXZ10etPCz0AXE-pb4l3QVlrsz7m2FrOCTXMZ1-YiG3LfyUJHRbtRYUZQU6Qaj3LcmCudHvuZ4GVTTl_ZyYtaZJoEQbOctoGrgfybG2k2z5FBSu8MGQnYqrgZ_WEm_QNl7T-nSr2QyfQZ6qN4e_dxNueUDNACxfj83aDiHEJKI53tNt2bGIFgx5DJjuuoNNIGvpyeQtsvLkoYBe_OyQqfW8Z_iQey_Fuj1Czz5BSqBLxSj83ejInPw8UCYvPIB-aHMyqwlrBfXtegdibh8sGjFs4Ki2Llbn7pNkXARrG0A9DEEZTzev8x159DmqIAB76I4iGbH_O5G7-iPZg33iImT7N54sEFgWns9a0sjxrvGhs_4scmGKnNQpwUquUVNtP1qzR_ic7IVYp1dM14WcDjSEAZ7VzvZi2_5QgXboe8JaXOR7_uyCp13uoPqQV_ywjI9vOkBbbxO0wls3hW3ejodHZd2OwCZ7JLLyO4'
        return {
            headers: { authorization: token ? `Bearer ${token}` : '' }
        }
    }*/
});

export default client;
