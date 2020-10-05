// import { createSelector } from '@reduxjs/toolkit'

// import { IRootState } from '../../rootReducer'
// import KEYS from '../../storeKeys'
// import { entities } from '../../../utils/string'

// const assetGroupsSelector = (state: IRootState) => state[KEYS.ASSET_GROUPS]

// export const getAssetGroups = createSelector(
//   assetGroupsSelector,
//   (state) => state.assetGroups
// )
// export const getAssetGroupTags = createSelector(
//   assetGroupsSelector,
//   (state) => state.assetGroups.map(({ uuid, name }) => ({ value: uuid, label: entities.decode(name) }))
// )
// export const getSelectedAssetGroupId = createSelector(
//   assetGroupsSelector,
//   (state) => state.selectedAssetGroupId
// )
// export const getSelectedAssetGroup = createSelector(
//   assetGroupsSelector, getSelectedAssetGroupId,
//   (state, assetGroupId) => state.assetGroups.find(group => String(group.id) === assetGroupId)
// )
// export const getSelectedCatalogueUuid = createSelector(
//   assetGroupsSelector, getSelectedAssetGroupId,
//   (state, assetGroupId) => state.assetGroups.find(group => String(group.id) === assetGroupId).uuid
// )
// export const getSelectedCatalogueName = createSelector(
//   assetGroupsSelector, getSelectedAssetGroupId,
//   (state, assetGroupId) => state.assetGroups.find(group => String(group.id) === assetGroupId)?.name
// )
