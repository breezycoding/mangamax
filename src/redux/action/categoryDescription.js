export const SHOW_CATEGORY_DESC = "SHOW_CATEGORY_DESC";
export const DONT_SHOW_CATEGORY_DESC = "DONT_SHOW_CATEGORY_DESC";

export const categoryDescription = ({id, showCategoryDesc}) => dispatch => {
      if(showCategoryDesc){
         dispatch({
            type: SHOW_CATEGORY_DESC,
            payload: {
               id,
               showCategoryDesc
            }
         });
      }else{
         dispatch({
            type: DONT_SHOW_CATEGORY_DESC,
            payload: {
               id,
               showCategoryDesc
            }
         });
      }
}