/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  BasedDistributorV2,
  BasedDistributorV2_Add,
  BasedDistributorV2_AllocPointsUpdated,
  BasedDistributorV2_Deposit,
  BasedDistributorV2_EmergencyWithdraw,
  BasedDistributorV2_EmissionRateUpdated,
  BasedDistributorV2_OwnershipTransferred,
  BasedDistributorV2_RewardLockedUp,
  BasedDistributorV2_UpdatePool,
  BasedDistributorV2_Withdraw,
} from "generated";

BasedDistributorV2.Add.handler(async ({ event, context }) => {
  const entity: BasedDistributorV2_Add = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pid: event.params.pid,
    allocPoint: event.params.allocPoint,
    lpToken: event.params.lpToken,
    depositFeeBP: event.params.depositFeeBP,
    harvestInterval: event.params.harvestInterval,
    rewarders: event.params.rewarders,
  };

  context.BasedDistributorV2_Add.set(entity);
});

BasedDistributorV2.AllocPointsUpdated.handler(async ({ event, context }) => {
  const entity: BasedDistributorV2_AllocPointsUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    previousAmount: event.params.previousAmount,
    newAmount: event.params.newAmount,
  };

  context.BasedDistributorV2_AllocPointsUpdated.set(entity);
});

BasedDistributorV2.Deposit.handler(async ({ event, context }) => {
  const entity: BasedDistributorV2_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    pid: event.params.pid,
    amount: event.params.amount,
  };

  context.BasedDistributorV2_Deposit.set(entity);
});

BasedDistributorV2.EmergencyWithdraw.handler(async ({ event, context }) => {
  const entity: BasedDistributorV2_EmergencyWithdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    pid: event.params.pid,
    amount: event.params.amount,
  };

  context.BasedDistributorV2_EmergencyWithdraw.set(entity);
});

BasedDistributorV2.EmissionRateUpdated.handler(async ({ event, context }) => {
  const entity: BasedDistributorV2_EmissionRateUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    previousValue: event.params.previousValue,
    newValue: event.params.newValue,
  };

  context.BasedDistributorV2_EmissionRateUpdated.set(entity);
});

BasedDistributorV2.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: BasedDistributorV2_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.BasedDistributorV2_OwnershipTransferred.set(entity);
});

BasedDistributorV2.RewardLockedUp.handler(async ({ event, context }) => {
  const entity: BasedDistributorV2_RewardLockedUp = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    pid: event.params.pid,
    amountLockedUp: event.params.amountLockedUp,
  };

  context.BasedDistributorV2_RewardLockedUp.set(entity);
});

BasedDistributorV2.UpdatePool.handler(async ({ event, context }) => {
  const entity: BasedDistributorV2_UpdatePool = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pid: event.params.pid,
    lastRewardTimestamp: event.params.lastRewardTimestamp,
    lpSupply: event.params.lpSupply,
    accAlbPerShare: event.params.accAlbPerShare,
  };

  context.BasedDistributorV2_UpdatePool.set(entity);
});

BasedDistributorV2.Withdraw.handler(async ({ event, context }) => {
  const entity: BasedDistributorV2_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    pid: event.params.pid,
    amount: event.params.amount,
  };

  context.BasedDistributorV2_Withdraw.set(entity);
});
