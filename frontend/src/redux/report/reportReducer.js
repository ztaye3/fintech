import {
    DOWNLOAD_IMAGES_SUCCESS,
    GET_ALL_IMAGES_SUCCESS,
    GET_ALL_REPORT_FAIL,
    GET_ALL_REPORT_SUCCESS,
    SUBMIT_REPORT_FAIL,
    SUBMIT_REPORT_SUCCESS
} from "./reportType";

const initialState = {
    isNewReportSubmitted: false,
    reports: [],
    images: []
}

const loginReducer = (state = initialState, action ) => {
    switch (action.type){
        case SUBMIT_REPORT_SUCCESS:
            return {
                ...initialState,
                isNewReportSubmitted: true
            }

        case SUBMIT_REPORT_FAIL:
        case GET_ALL_REPORT_SUCCESS:
            return {
                ...state,
                reports: action.payload,
                isNewReportSubmitted: false
            }
        case DOWNLOAD_IMAGES_SUCCESS:
            return {
                ...state,
                images: action.payload,
                isNewReportSubmitted: false
            }
        case GET_ALL_REPORT_FAIL:


        default:
            return state;
    }
}

export default loginReducer;