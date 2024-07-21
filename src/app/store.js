import { configureStore } from '@reduxjs/toolkit'
import postSliceReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'

const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    users: usersReducer,
  },
})

export default store


// Quedé en: Adding New Posts