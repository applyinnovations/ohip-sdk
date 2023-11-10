"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud DataValueMapping Service API
 * APIs which offer external systems to config and use values different than what are configured in opera<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultValueCodeTypeToJSON = exports.DefaultValueCodeTypeFromJSONTyped = exports.DefaultValueCodeTypeFromJSON = exports.DefaultValueCodeType = void 0;
/**
 * Enumeration of the different default codes.
 * @export
 */
exports.DefaultValueCodeType = {
    AddressTypes: 'AddressTypes',
    AvailabilityType: 'AvailabilityType',
    BlockCancellationCodes: 'BlockCancellationCodes',
    BlockChannelCode: 'BlockChannelCode',
    BlockMarketCode: 'BlockMarketCode',
    BlockOwner: 'BlockOwner',
    BlockRateCode: 'BlockRateCode',
    BlockReservationType: 'BlockReservationType',
    BlockSourceCode: 'BlockSourceCode',
    BlockStatus: 'BlockStatus',
    BlockType: 'BlockType',
    CancellationCodes: 'CancellationCodes',
    CashierId: 'CashierId',
    CountryCode: 'CountryCode',
    ChannelCodes: 'ChannelCodes',
    ConfLetterId: 'ConfLetterId',
    ConfLetterName: 'ConfLetterName',
    CrsCurrencyCode: 'CrsCurrencyCode',
    CrsCurrencyFmtDisplay: 'CrsCurrencyFmtDisplay',
    CrsCurrencyFormat: 'CrsCurrencyFormat',
    CrsCurrencyMultiplier: 'CrsCurrencyMultiplier',
    CurrencyCode: 'CurrencyCode',
    Custom1: 'Custom1',
    Custom2: 'Custom2',
    DeleteCharInd: 'DeleteCharInd',
    DeleteDateInd: 'DeleteDateInd',
    DeleteNumberInd: 'DeleteNumberInd',
    DepositPaymentMethod: 'DepositPaymentMethod',
    DeptCodes: 'DeptCodes',
    DiscountReason: 'DiscountReason',
    GuestPreferences: 'GuestPreferences',
    HighPrioMemTypes: 'HighPrioMemTypes',
    KeepingCharInd: 'KeepingCharInd',
    KeepingDateInd: 'KeepingDateInd',
    KeepingNumberInd: 'KeepingNumberInd',
    LanguageCodes: 'LanguageCodes',
    MarketCode: 'MarketCode',
    MaxAvailInAdvance: 'MaxAvailInAdvance',
    PaymentMethod: 'PaymentMethod',
    PhoneType: 'PhoneType',
    RateCategory: 'RateCategory',
    RateClass: 'RateClass',
    RateCode: 'RateCode',
    RateDisplaySet: 'RateDisplaySet',
    ReservationType: 'ReservationType',
    RoomCategoryLabel: 'RoomCategoryLabel',
    ScDestination: 'ScDestination',
    SourceCode: 'SourceCode',
    StartDayOfWeek: 'StartDayOfWeek',
    TaCompanyOwner: 'TaCompanyOwner',
    Trace1: 'Trace1',
    Trace2: 'Trace2',
    TraceArrivalDept1: 'TraceArrivalDept1',
    TraceArrivalDept2: 'TraceArrivalDept2',
    TraceOverrideDept1: 'TraceOverrideDept1',
    TraceOverrideDept2: 'TraceOverrideDept2',
    TraceOverrideWarning: 'TraceOverrideWarning',
    TraceWarning: 'TraceWarning',
    TravelAgentCommissionCodes: 'TravelAgentCommissionCodes',
    TravelAgentCurrencyCodes: 'TravelAgentCurrencyCodes',
    TravelAgentCurrencyCodesCentral: 'TravelAgentCurrencyCodesCentral',
    VipLevel: 'VipLevel',
    WaitlistCodes: 'WaitlistCodes',
    ProfileNoteType: 'ProfileNoteType',
    BlockNoteType: 'BlockNoteType'
};
function DefaultValueCodeTypeFromJSON(json) {
    return DefaultValueCodeTypeFromJSONTyped(json, false);
}
exports.DefaultValueCodeTypeFromJSON = DefaultValueCodeTypeFromJSON;
function DefaultValueCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.DefaultValueCodeTypeFromJSONTyped = DefaultValueCodeTypeFromJSONTyped;
function DefaultValueCodeTypeToJSON(value) {
    return value;
}
exports.DefaultValueCodeTypeToJSON = DefaultValueCodeTypeToJSON;
