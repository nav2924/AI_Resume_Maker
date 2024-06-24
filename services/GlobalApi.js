import axios from "axios";


const API_KEY= "cc7fc4f2f3849fa5e961ec044666a9ced249dae70722837279d33a7d02507b9d3863a03123ced5fbccbab72ba2096a6a8a5660a269eba152b78bb88fcb64d3078bd3731f759a16cb6c066c375fc19b88ab5e6f1ef36d739679d43cc245446147d635173594bc8f3e8df728cbc948a9e84ab98f5e7ef80d0d77c1aedd67e94a60"
const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api/',
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})


const CreateNewResume=(data)=>axiosClient.post('/user-resumes',data);

const GetUserResumes=(userEmail)=>axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);

const UpdateResumeDetail=(id,data)=>axiosClient.put('/user-resumes/'+id,data)

const GetResumeById=(id)=>axiosClient.get('/user-resumes/'+id+"?populate=*")

const DeleteResumeById=(id)=>axiosClient.delete('/user-resumes/'+id)

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
}