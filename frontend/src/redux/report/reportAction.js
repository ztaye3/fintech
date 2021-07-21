import {GET_IMAGES_URL, SUBMIT_REPORT_URL} from "../../utils/Constant";
import {
    DOWNLOAD_IMAGES_SUCCESS,
    GET_ALL_IMAGES_SUCCESS,
    GET_ALL_REPORT_FAIL,
    GET_ALL_REPORT_SUCCESS,
    SUBMIT_REPORT_FAIL,
    SUBMIT_REPORT_SUCCESS
} from "./reportType";
import axios from "axios";
import {push} from "connected-react-router";
import {errorFilter} from "../../utils/Utils";
import {forEach} from "react-bootstrap/ElementChildren";


const reportAction = (userInput, operation) => dispatch => {

    switch (operation){
        case "submitReport":
            dispatch(submitReport(userInput));

        case "getReports":
            dispatch(getAllReports());
    }
}

// Get all reports
const getAllReports = () => dispatch =>{
    axios
        .get(SUBMIT_REPORT_URL)
        .then(response => {
            dispatch({
                type: GET_ALL_REPORT_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
             dispatch({
                type: GET_ALL_REPORT_FAIL,
            })
            errorFilter(error)
        })
}

// Submit report action
const submitReport = userInput => dispatch =>{

     const formData = new FormData();

        formData.append("image", userInput.image);
        formData.append("video", userInput.video);
        formData.append("body", userInput.body);
        formData.append("headline", userInput.headline);
        formData.append("report_type", userInput.report_type);
        formData.append("updated_by", localStorage.getItem("signupEmail"));
        formData.append("reporters", localStorage.getItem("signupEmail"));

    axios.post(SUBMIT_REPORT_URL, formData)
        .then( response => {
                dispatch({type: SUBMIT_REPORT_SUCCESS})
                dispatch(push("/home"))
            }
        )
    .catch(error => {
                dispatch({
                    type: SUBMIT_REPORT_FAIL
                })
                errorFilter(error);
            });
}

const getImages = reports => dispatch =>{

    const images = []
    let image;
    reports.map((report) =>{

        console.log("report", report)

        axios({
                url: GET_IMAGES_URL + report['id'], //your url
                method: 'GET',
                responseType: 'blob', // important
        })
        .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            // response.blob().then(blob => {
                console.log("file", url);
                image = url;
                images.push(url)

            // });
        })
        .catch( error =>{
            errorFilter(error)
        })

    })

    console.log("this is new")

    // console.log("images", images)

    // if (images.length !== 0) {

        dispatch({
                type: DOWNLOAD_IMAGES_SUCCESS,
                payload: images
            })

    // }

}
export default reportAction;
