import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ExtendedPurchase } from 'src/types/purchase.type'
import { User } from 'src/types/user.type'
import { getAccesTokentoLS, getProfileLS } from 'src/utils/auth'

interface IAppSlice {
  isAuthenticated: boolean
  profile: User | null
  extendedPurchases: ExtendedPurchase[]
}
const initialState: IAppSlice = {
  isAuthenticated: Boolean(getAccesTokentoLS()),
  profile: getProfileLS(),
  extendedPurchases: []
}
export const AppSlice = createSlice({
  name: 'redux',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    setProfile: (state, action: PayloadAction<User | null>) => {
      state.profile = action.payload
    },
    setExtendedPurchases: (state, action: PayloadAction<ExtendedPurchase[]>) => {
      state.extendedPurchases = action.payload
    },
    reset: (state) => {
      ;(state.isAuthenticated = false), (state.extendedPurchases = []), (state.profile = null)
    }
  }
})
export const { setIsAuthenticated, reset, setProfile, setExtendedPurchases } = AppSlice.actions
export default AppSlice.reducer
