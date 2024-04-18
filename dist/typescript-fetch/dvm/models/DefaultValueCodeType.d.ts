/**
 * OPERA Cloud DataValueMapping Service API
 * APIs which offer external systems to config and use values different than what are configured in opera<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Enumeration of the different default codes.
 * @export
 */
export declare const DefaultValueCodeType: {
    readonly AddressTypes: "AddressTypes";
    readonly AvailabilityType: "AvailabilityType";
    readonly BlockCancellationCodes: "BlockCancellationCodes";
    readonly BlockChannelCode: "BlockChannelCode";
    readonly BlockMarketCode: "BlockMarketCode";
    readonly BlockOwner: "BlockOwner";
    readonly BlockRateCode: "BlockRateCode";
    readonly BlockReservationType: "BlockReservationType";
    readonly BlockSourceCode: "BlockSourceCode";
    readonly BlockStatus: "BlockStatus";
    readonly BlockType: "BlockType";
    readonly CancellationCodes: "CancellationCodes";
    readonly CashierId: "CashierId";
    readonly CountryCode: "CountryCode";
    readonly ChannelCodes: "ChannelCodes";
    readonly ConfLetterId: "ConfLetterId";
    readonly ConfLetterName: "ConfLetterName";
    readonly CrsCurrencyCode: "CrsCurrencyCode";
    readonly CrsCurrencyFmtDisplay: "CrsCurrencyFmtDisplay";
    readonly CrsCurrencyFormat: "CrsCurrencyFormat";
    readonly CrsCurrencyMultiplier: "CrsCurrencyMultiplier";
    readonly CurrencyCode: "CurrencyCode";
    readonly Custom1: "Custom1";
    readonly Custom2: "Custom2";
    readonly DeleteCharInd: "DeleteCharInd";
    readonly DeleteDateInd: "DeleteDateInd";
    readonly DeleteNumberInd: "DeleteNumberInd";
    readonly DepositPaymentMethod: "DepositPaymentMethod";
    readonly DeptCodes: "DeptCodes";
    readonly DiscountReason: "DiscountReason";
    readonly GuestPreferences: "GuestPreferences";
    readonly HighPrioMemTypes: "HighPrioMemTypes";
    readonly KeepingCharInd: "KeepingCharInd";
    readonly KeepingDateInd: "KeepingDateInd";
    readonly KeepingNumberInd: "KeepingNumberInd";
    readonly LanguageCodes: "LanguageCodes";
    readonly MarketCode: "MarketCode";
    readonly MaxAvailInAdvance: "MaxAvailInAdvance";
    readonly PaymentMethod: "PaymentMethod";
    readonly PhoneType: "PhoneType";
    readonly RateCategory: "RateCategory";
    readonly RateClass: "RateClass";
    readonly RateCode: "RateCode";
    readonly RateDisplaySet: "RateDisplaySet";
    readonly ReservationType: "ReservationType";
    readonly RoomCategoryLabel: "RoomCategoryLabel";
    readonly ScDestination: "ScDestination";
    readonly SourceCode: "SourceCode";
    readonly StartDayOfWeek: "StartDayOfWeek";
    readonly TaCompanyOwner: "TaCompanyOwner";
    readonly Trace1: "Trace1";
    readonly Trace2: "Trace2";
    readonly TraceArrivalDept1: "TraceArrivalDept1";
    readonly TraceArrivalDept2: "TraceArrivalDept2";
    readonly TraceOverrideDept1: "TraceOverrideDept1";
    readonly TraceOverrideDept2: "TraceOverrideDept2";
    readonly TraceOverrideWarning: "TraceOverrideWarning";
    readonly TraceWarning: "TraceWarning";
    readonly TravelAgentCommissionCodes: "TravelAgentCommissionCodes";
    readonly TravelAgentCurrencyCodes: "TravelAgentCurrencyCodes";
    readonly TravelAgentCurrencyCodesCentral: "TravelAgentCurrencyCodesCentral";
    readonly VipLevel: "VipLevel";
    readonly WaitlistCodes: "WaitlistCodes";
    readonly ProfileNoteType: "ProfileNoteType";
    readonly BlockNoteType: "BlockNoteType";
};
export type DefaultValueCodeType = typeof DefaultValueCodeType[keyof typeof DefaultValueCodeType];
export declare function DefaultValueCodeTypeFromJSON(json: any): DefaultValueCodeType;
export declare function DefaultValueCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefaultValueCodeType;
export declare function DefaultValueCodeTypeToJSON(value?: DefaultValueCodeType | null): any;