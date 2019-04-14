export const SHOW_OVERLAY = "SHOW_OVERLAY";
export const DONT_SHOW_OVERLAY = "DONT_SHOW_OVERLAY";

export const overlay = (showOverlay = false) => dispatch => {
      if(showOverlay){
         dispatch({
            type: SHOW_OVERLAY,
            payload: true
         });
      }else{
         dispatch({
            type: DONT_SHOW_OVERLAY,
            payload: false
         });
      }
}