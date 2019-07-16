import { check } from "k6";
import * as http from "k6/http";
import { Options } from "k6/options";
import createForm from "./anotherModule.js";

export const options: Partial<Options> = {
    vus: 20,
    iterations: 20
};

export default function (): void {
    const res = http.get(`http://jsonplaceholder.typicode.com/users/${__VU}`);
    check(res, {
        "is status 200": r => r.status === 200
    });
    console.log("createForm: " + createForm());
}