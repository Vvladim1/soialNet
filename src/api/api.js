import * as axios from "axios";


const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    'API-KEY': 'ce4283be-0853-4f9a-a13a-373054a954a3'
  }
});

export const userAPI = {
  getUsers(currentPage=1, pageSize=50) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)// returned only response.data from response-object
    },
  follow(userId) {
    return  instance.post(`follow/${userId}`, {});
  },
  unfollow(userId) {
   return  instance.delete(`follow/${userId}`);
  },
  getProfile(userId){
    return  instance.get(`profile/${userId}`);
  }
}

export const authAPI = {
  me(){
        return instance.get(`auth/me`);
  }
}



