import { HTTP } from "@/HTTPServices";

export class TestAPI {
  getData() {
    return new Promise((resolve: any, reject: any) => {
      HTTP.get(`api/hocvien/hihi`)
        .then((response: any) => {
          resolve(response.data);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
}
export const Api = new TestAPI();
