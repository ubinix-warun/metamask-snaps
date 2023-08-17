export type { PermittedRpcMethodHooks } from './permitted';
export {
  handlers as permittedMethods,
  createSnapsMethodMiddleware,
} from './permitted';
export * from './restricted';
export { SnapCaveatType } from 'navh-metamask-snaps-utils';
export { selectHooks } from './utils';
export type { RequestFunction, SnapsGlobalObject } from './request';
