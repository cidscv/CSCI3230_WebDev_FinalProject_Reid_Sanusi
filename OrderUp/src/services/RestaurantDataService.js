import http from "../http-common";
class RestaurantDataService {
  getAll() {
    return http.get("/rests");
  }
  get(id) {
    console.log(id);
    return http.get(`/rests/${id}`);
  }
  create(data) {
    return http.post("/rests", data);
  }
  update(id, data) {
    return http.put(`/rests/${id}`, data);
  }
  delete(id) {
    return http.delete(`/rests/${id}`);
  }
  deleteAll() {
    return http.delete(`/rests`);
  }
  findByRestName(restName) {
    return http.get(`/rests?restName=${restName}`);
  }
}
export default new RestaurantDataService();
