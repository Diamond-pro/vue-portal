/** card program actions */
export const GET_ALL_CARD_PROGRAM = 'GET_ALL_CARD_PROGRAM'
export const GET_ALL_CARD_PROGRAM_LIST = 'GET_ALL_CARD_PROGRAM_LIST'
export const GET_CARD_PROGRAM_BYID = 'GET_CARD_PROGRAM_BYID'
export const ADD_CARD_PROGRAM = 'ADD_CARD_PROGRAM'
export const EDIT_CARD_PROGRAM = 'EDIT_CARD_PROGRAM'
// -> mutations
export const MUTATE_CARD_PROGRAMES = 'MUTATE_CARD_PROGRAMES';
export const MUTATE_ACTIVE_CARD_PROGRAME = 'MUTATE_ACTIVE_CARD_PROGRAME';
export const MUTATE_EDIT_CARD_PROGRAME = 'MUTATE_EDIT_CARD_PROGRAME';
export const MUTATE_ADD_CARD_PROGRAME = 'MUTATE_ADD_CARD_PROGRAME';
export const MUTATE_LOADINGSTATE_CARD_PROGRAM = 'MUTATE_LOADINGSTATE_CARD_PROGRAM'
export const MUTATE_ALL_CARD_PROGRAM_LIST = 'MUTATE_ALL_CARD_PROGRAM_LIST'


// -> getters
export const GETTER_ACTIVE_CARD = 'GETTER_ACTIVE_CARD';
export const GETTER_ALL_CARD_PROGRAM_LIST = 'GETTER_ALL_CARD_PROGRAM_LIST'

export const GETTER_ALL_CARDS = 'GETTER_ALL_CARDS';
export const GETTER_LOADINGSTATE_CARD_PROGRAM = 'GETTER_LOADINGSTATE_CARD_PROGRAM';


/** float account actions */
export const GET_INVOICES_BY_SELLERID = 'GET_INVOICES_BY_SELLERID'
export const SEARCH_INVOICES = 'SEARCH_INVOICES'
export const INVOICES_DETAILS = 'INVOICES_DETAILS'
export const GENRATE_INVOICES = 'GENRATE_INVOICES'
// -> mutations
export const MUTATE_INVOICES_BY_SELLERID = 'MUTATE_INVOICES_BY_SELLERID'
export const MUTATE_SEARCH_INVOICES = 'SEARCH_INVOICES'
export const MUTATE_INVOICES_DETAILS = 'INVOICES_DETAILS'
// -> getters
export const GETTER_INVOICES_BY_SELLERID = 'GETTER_INVOICES_BY_SELLERID'

/** float approval actions */
export const ADD_FLOAT_ENTRY = 'ADD_FLOAT_ENTRY'
export const GET_ALL_FLOATS = 'GET_ALL_FLOATS'
export const GET_PENDING_FLOATS_BYCARDID = 'GET_PENDING_FLOATS_BYCARDID'
export const GET_REVIEWED_FLOATS_BYCARDID = 'GET_REVIEWED_FLOATS_BYCARDID'
export const EDIT_FLOAT_BYFLOATID = 'EDIT_FLOAT_BYFLOATID'
export const ADD_SOFTDOC_TO_FLOAT = 'ADD_SOFTDOC_TO_FLOAT'
export const GET_A_SOFTDOC_BY_FLOATID = 'GET_A_SOFTDOC_BY_FLOATID'
export const GET_ACCOUNT_STATEMENT = 'GET_ACCOUNT_STATEMENT';
export const GET_UNALLOCATED_FLOAT = 'GET_UNALLOCATED_FLOAT';
export const GET_VIEW_STATEMENT = 'GET_VIEW_STATEMENT';


// -> mutations
export const MUTATE_ADD_FLOAT_ENTRY = 'MUTATE_ADD_FLOAT_ENTRY'
export const MUTATE_FLOAT_ACCOUNT = 'MUTATE_FLOAT_ACCOUNT';
export const MUTATE_GET_PENDING_FLOATS_BYCARDID = 'MUTATE_GET_PENDING_FLOATS_BYCARDID'
export const MUTATE_GET_REVIEWED_FLOATS_BYCARDID = 'MUTATE_GET_REVIEWED_FLOATS_BYCARDID'
export const MUTATE_EDIT_FLOAT_BYFLOATID = 'MUTATE_EDIT_FLOAT_BYFLOATID'
export const MUTATE_LOADINGSTATE_RESELLER = 'MUTATE_LOADINGSTATE_RESELLER'
export const MUTATE_LOADINGSTATE_FLOAT_BALANCE = 'MUTATE_LOADINGSTATE_FLOAT_BALANCE';
export const MUTATE_ACCOUNT_STATEMENT = 'MUTATE_ACCOUNT_STATEMENT';
export const MUTATE_UNALLOCATED_FLOAT = 'MUTATE_UNALLOCATED_FLOAT';
export const MUTATE_VIEW_STATEMENT = 'MUTATE_VIEW_STATEMENT';

// ! deprecated files
export const MUTATE_ADD_SOFTDOC_TO_FLOAT = 'MUTATE_ADD_SOFTDOC_TO_FLOAT'
export const MUTATE_GET_A_SOFTDOC_BY_FLOATID = 'MUTATE_GET_A_SOFTDOC_BY_FLOATID'
// -> getters
export const GETTER_FLOATS = 'GETTER_FLOATS'
export const GETTER_PENDING_FLOATS = 'GETTER_PENDING_FLOATS'
export const GETTER_REVIEWD_FLOATS = 'GETTER_REVIEWD_FLOATS'
export const GETTER_LOADINGSTATE_RESELLER = 'GETTER_LOADINGSTATE_RESELLER'
export const GETTER_LOADINGSTATE_FLOAT_BALANCE = 'GETTER_LOADINGSTATE_FLOAT_BALANCE'
export const GETTER_ACCOUNT_STATEMENT = 'GETTER_ACCOUNT_STATEMENT';
export const GETTER_UNALLOCATED_FLOAT = 'GETTER_UNALLOCATED_FLOAT';
export const GETTER_VIEW_STATEMENT = 'GETTER_VIEW_STATEMENT';

/** reseller actions */
export const ADD_RESELLER_SUBSCRIPTION = 'ADD_RESELLER_SUBSCRIPTION'
export const GET_ALL_RESELLER_SUBSCRIPTIONS_LIST = 'GET_ALL_RESELLER_SUBSCRIPTIONS_LIST'
export const GET_ALL_RESELLER_SUBSCRIPTIONS = 'GET_ALL_RESELLER_SUBSCRIPTIONS'

export const GET_RESELLER_SUBSCRTION_BY_ID = 'GET_RESELLER_SUBSCRTION_BY_ID'
export const EDIT_RESELLER_SUBSCRTION_BY_ID = 'EDIT_RESELLER_SUBSCRTION_BY_ID'
// -> mutations
export const MUTATE_ADD_RESELLER_SUBSCRIPTION = 'MUTATE_ADD_RESELLER_SUBSCRIPTION'
export const MUTATE_GET_ALL_RESELLER_SUBSCRIPTIONS_LIST = 'MUTATE_GET_ALL_RESELLER_SUBSCRIPTIONS_LIST'

export const MUTATE_GET_ALL_RESELLER_SUBSCRIPTIONS = 'MUTATE_GET_ALL_RESELLER_SUBSCRIPTIONS'
export const MUTATE_GET_RESELLER_SUBSCRTION_BY_ID = 'MUTATE_GET_RESELLER_SUBSCRTION_BY_ID'
export const MUTATE_EDIT_RESELLER_SUBSCRTION_BY_ID = 'MUTATE_EDIT_RESELLER_SUBSCRTION_BY_ID'
// -> getters
export const GETTER_RESELLER_SUBSCRIPTION = 'GETTER_RESELLER_SUBSCRIPTION'
export const GETTER_RESELLER_SUBSCRIPTIONS = 'GETTER_RESELLER_SUBSCRIPTIONS'
export const GETTER_RESELLER_SUBSCRIPTIONS_LIST = 'GETTER_RESELLER_SUBSCRIPTIONS_LIST'

/** UI actions */
export const SHOW_TOAST_MESSAGE = 'SHOW_TOAST_MESSAGE'
export const HIDE_TOAST_MESSAGE = 'HIDE_TOAST_MESSAGE'
export const UPDATE_RESPONSE_STATE = 'UPDATE_RESPONSE_STATE'
export const SET_AUTH_SATATE = 'SET_AUTH_SATATE'
export const SET_MODAL_TYPE = 'SET_MODAL_TYPE'
export const GET_SUPPORTED_CURRENCIES = 'GET_SUPPORTED_CURRENCIES'

// -> mutations

export const MUTATE_TOAST_MESSAGE = 'MUTATE_TOAST_MESSAGE'
export const MUTATE_RESPONSESTATE_STATE = 'MUTATE_RESPONSESTATE_STAE'
export const MUTATE_AUTH_SATATE = 'MUTATE_AUTH_SATATE'
export const MUTATE_MODAL_TYPE = 'MUTATE_MODAL_TYPE'
export const MUTATE_SUPPORTED_CURRENCIES = 'MUTATE_SUPPORTED_CURRENCIES'

// -> getters

export const GETTER_TOAST_MESSAGE = 'GETTER_TOAST_MESSAGE'
export const GETTER_AUTH_SATATE = 'GETTER_AUTH_SATATE'
export const GETTER_MODAL_TYPE = 'GETTER_MODAL_TYPE'
export const GETTER_SUPPORTED_CURRENCIES = 'GETTER_SUPPORTED_CURRENCIES'

/** KYC actions */

// -> getters
export const GETTER_All_CLIENTS = 'GETTER_All_CLIENTS'
export const GETTER_All_CLIENTS_LIST = 'GETTER_All_CLIENTS_LIST'

// -> mutations
export const MUTATE_All_CLIENTS = 'MUTATE_All_CLIENTS'
export const MUTATE_ALL_CLIENTS_LIST = 'MUTATE_ALL_CLIENTS_LIST'
