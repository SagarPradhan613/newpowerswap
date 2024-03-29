/* eslint-disable camelcase */
import { Types } from 'aptos'

export const ADDRESS = '0x7968a225eba6c99f5f1070aeec1b405757dee939eabcfda43ba91588bf5fccf3' as const

export const MASTERCHEF_MODULE_NAME = 'masterchef' as const

export type MasterchefAddPoolArgs = [bigint | string, boolean, boolean]

export const masterchefAddPool = (
  args: MasterchefAddPoolArgs,
  typeArgs: [string],
): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: typeArgs,
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::add_pool`,
  }
}

export type MasterchefCloseAptIncentiveArgs = [boolean]

export const masterchefCloseAptIncentive = (
  args: MasterchefCloseAptIncentiveArgs,
): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::close_apt_incentive`,
  }
}

export type MasterchefDepositArgs = [bigint | string]

export const masterchefDeposit = (
  args: MasterchefDepositArgs,
  typeArgs: [string],
): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: typeArgs,
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::deposit`,
  }
}

export const masterchefEmergencyWithdraw = (typeArgs: [string]): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: typeArgs,
    arguments: [],
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::emergency_withdraw`,
  }
}

export const masterchefGetAptIncentiveInfo = (): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: [],
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::get_apt_incentive_info`,
  }
}

export type MasterchefGetAptIncentivePoolInfoArgs = [bigint | string]

export const masterchefGetAptIncentivePoolInfo = (
  args: MasterchefGetAptIncentivePoolInfoArgs,
): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::get_apt_incentive_pool_info`,
  }
}

export type MasterchefGetPendingAptArgs = [string]

export const masterchefGetPendingApt = (
  args: MasterchefGetPendingAptArgs,
  typeArgs: [string],
): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: typeArgs,
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::get_pending_apt`,
  }
}

export type MasterchefInitAptIncentiveArgs = [bigint | string, boolean]

export const masterchefInitAptIncentive = (
  args: MasterchefInitAptIncentiveArgs,
): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::init_apt_incentive`,
  }
}

export const masterchefMassUpdatePools = (): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: [],
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::mass_update_pools`,
  }
}

export type MasterchefPendingCakeArgs = [bigint | string, string]

export const masterchefPendingCake = (
  args: MasterchefPendingCakeArgs,
): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::pending_cake`,
  }
}

export const masterchefPoolLength = (): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: [],
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::pool_length`,
  }
}

export type MasterchefSetAdminArgs = [string]

export const masterchefSetAdmin = (args: MasterchefSetAdminArgs): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::set_admin`,
  }
}

export type MasterchefSetPoolArgs = [bigint | string, bigint | string, boolean]

export const masterchefSetPool = (args: MasterchefSetPoolArgs): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::set_pool`,
  }
}

export type MasterchefSetUpkeepAdminArgs = [string]

export const masterchefSetUpkeepAdmin = (
  args: MasterchefSetUpkeepAdminArgs,
): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::set_upkeep_admin`,
  }
}

export type MasterchefUpdateCakeRateArgs = [bigint | string, bigint | string, boolean]

export const masterchefUpdateCakeRate = (
  args: MasterchefUpdateCakeRateArgs,
): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::update_cake_rate`,
  }
}

export type MasterchefUpdatePoolArgs = [bigint | string]

export const masterchefUpdatePool = (args: MasterchefUpdatePoolArgs): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::update_pool`,
  }
}

export type MasterchefUpgradeMasterchefArgs = [number[] | Uint8Array, number[] | Uint8Array]

export const masterchefUpgradeMasterchef = (
  args: MasterchefUpgradeMasterchefArgs,
): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::upgrade_masterchef`,
  }
}

export type MasterchefUpkeepArgs = [bigint | string, bigint | string, boolean]

export const masterchefUpkeep = (args: MasterchefUpkeepArgs): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::upkeep`,
  }
}

export type MasterchefWithdrawArgs = [bigint | string]

export const masterchefWithdraw = (
  args: MasterchefWithdrawArgs,
  typeArgs: [string],
): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: typeArgs,
    arguments: args,
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::withdraw`,
  }
}

export const masterchefWithdrawAllApt = (): Types.TransactionPayload_EntryFunctionPayload => {
  return {
    type: 'entry_function_payload',
    type_arguments: [],
    arguments: [],
    function: `${ADDRESS}::${MASTERCHEF_MODULE_NAME}::withdraw_all_apt`,
  }
}
