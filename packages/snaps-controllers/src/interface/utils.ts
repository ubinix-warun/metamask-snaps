import { Component, NodeType } from 'navh-metamask-snaps-ui';
import { ComponentState } from 'navh-metamask-snaps-utils';

export const constructState = (
  state: ComponentState,
  component: Component,
): ComponentState => {
  const { type } = component;
  if (type === NodeType.Panel) {
    return component.children.reduce(
      (acc, node) => constructState(acc, node),
      state,
    );
  }
  if (type === NodeType.Form) {
    return {
      ...state,
      [component.name]: component.children.reduce(
        (acc, node) => constructState(acc, node),
        {},
      ),
    };
  }
  if (type === NodeType.Input) {
    return { ...state, [component.name]: component.value ?? '' };
  }

  return state;
};
