import axios from "axios";
export const MANGA_LIST = "MANGA_LIST";
export const MANGA_LIST_ERR = "MANGA_LIST_ERR";
const mangaListUrl =  "https://www.mangaeden.com/api/list/";

export const mangaLists = (language = "") => async dispatch => {

      let languageType = (language === "english") ? 0 : 1;
      await axios.get(mangaListUrl+languageType)
      .then(function (response) {
         dispatch({
            type: MANGA_LIST,
            payload: response
         });
      }).catch(function (error) {
         dispatch({
            type: MANGA_LIST_ERR,
            payload: error
         });
      })

}