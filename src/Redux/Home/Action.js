export const GET_ALL_LATEST_MOVIES = "GET_ALL_LATEST_MOVIES"

export const GET_ALL_LATEST_MOVIES_LOADING = "GET_ALL_LATEST_MOVIES_LOADING"

export const GET_ALL_LATEST_MOVIES_FAILURE = "GET_ALL_LATEST_MOVIES_FAILURE"

export const GET_ALL_LATEST_MOVIES_SUCCESS = "GET_ALL_LATEST_MOVIES_SUCCESS"

export const getAllLatestMoviesLoading = () => ({
    type:GET_ALL_LATEST_MOVIES_LOADING 
})

export const getAllLatestMoviesFailure = () => ({
    type:GET_ALL_LATEST_MOVIES_FAILURE
})

export const getAllLatestMoviesSuccess = (payload) => ({
    type:GET_ALL_LATEST_MOVIES_SUCCESS,
    payload
})

export const getAllLatestMovies = () => async (dispatch) => {
    try {
        dispatch(getAllLatestMoviesLoading())
        
        let res = await fetch (`http://localhost:8080/movies`)
        let data = await res.json()
    console.log(data)
        dispatch(getAllLatestMoviesSuccess(data))
        
      } catch (error) {
         dispatch(getAllLatestMoviesFailure())
      }
}