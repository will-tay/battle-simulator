// import { createAction, createReducer, ActionCreatorWithPayload, ActionCreatorWithoutPayload, PayloadAction } from '@reduxjs/toolkit'
// import { IAssetGroup } from '../../../api/assetGroups'

// export interface IAssetGroupsState {
//   assetGroups: Array<IAssetGroup>
//   selectedAssetGroupId: string
// }
// interface ISetAssetGroups {
//   assetGroups: IAssetGroup[]
// }
// interface ISetSelectedAssetGroupId {
//   id: string
// }

// export const fetchAssetGroups: ActionCreatorWithoutPayload = createAction('fetchAssetGroups')
// export const setAssetGroups: ActionCreatorWithPayload<ISetAssetGroups> = createAction('setAssetGroups')
// export const setSelectedAssetGroupId: ActionCreatorWithPayload<ISetSelectedAssetGroupId> = createAction('setSelectedAssetGroupId')

// const initialState: IAssetGroupsState = {
//   assetGroups: [],
//   selectedAssetGroupId: ''
// }

// const reducer = createReducer(initialState, {
//   [setAssetGroups.type]: (state, { payload: { assetGroups } }: PayloadAction<ISetAssetGroups>) => {
//     state.assetGroups = assetGroups
//   },
//   [setSelectedAssetGroupId.type]: (state, { payload: { id } }: PayloadAction<ISetSelectedAssetGroupId>) => {
//     state.selectedAssetGroupId = id
//   }
// })

// export * from './selectors'
// export default reducer
