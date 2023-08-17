import { StreamProvider } from '@metamask/providers';

/**
 * The type of `window.ethereum`.
 */
export type Ethereum = StreamProvider;

// Exported again for convenience.
export type { Json, JsonRpcRequest } from '@metamask/utils';
export {
  DialogType,
  NotificationType,
  ManageStateOperation,
} from 'navh-metamask-rpc-methods';
export type { SnapsGlobalObject } from 'navh-metamask-rpc-methods';
export type {
  AccountId,
  ChainId,
  OnCronjobHandler,
  OnRpcRequestHandler,
  OnTransactionHandler,
  OnTransactionResponse,
  ComponentState,
} from 'navh-metamask-snaps-utils';
