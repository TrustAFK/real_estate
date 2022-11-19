import  axios from axios;
export const baseurl = "https://bayut.p.rapaidapi.com"

 export const fetchApi = async(url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '5fb99c27c2msh9cc3d0dbe9e555fp1fd41cjsn6de94b0a31c1',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
 }