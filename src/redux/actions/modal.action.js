import modalActionTypes from "../types/modal.types";

export const showModal = () => ({
  type: modalActionTypes.SHOW_MODAL,
});
export const showWithdrawalModal = () => ({
  type: modalActionTypes.SHOW_WITHDRAWAL_MODAL,
});
export const hideModal = () => ({
  type: modalActionTypes.HIDE_MODAL,
});
export const hideWithdrawalModal = () => ({
  type: modalActionTypes.HIDE_WITHDRAWAL_MODAL,
});

export const showInvestModal = () => ({
  type: modalActionTypes.SHOW_INVEST_MODAL,
});

export const hideInvestModal = () => ({
  type: modalActionTypes.HIDE_INVEST_MODAL,
});
