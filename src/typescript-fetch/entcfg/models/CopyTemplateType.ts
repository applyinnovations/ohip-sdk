/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Template name for template copy operation. Eg: RateCategory
 * @export
 */
export const CopyTemplateType = {
    RateCategory: 'RateCategory',
    PromotionCode: 'PromotionCode',
    RateClass: 'RateClass',
    DepositPolicy: 'DepositPolicy',
    CancellationPolicy: 'CancellationPolicy',
    GuaranteeCode: 'GuaranteeCode',
    MarketCode: 'MarketCode',
    MarketGroup: 'MarketGroup',
    SourceCode: 'SourceCode',
    SourceGroup: 'SourceGroup',
    RoomType: 'RoomType',
    RoomClass: 'RoomClass',
    CustomNumbers: 'CustomNumbers',
    AlertCode: 'AlertCode',
    AttractionCode: 'AttractionCode',
    Transportation: 'Transportation',
    RoomCondition: 'RoomCondition',
    RateSeason: 'RateSeason',
    Amenity: 'Amenity',
    TransactionCode: 'TransactionCode',
    CompTransactionCode: 'CompTransactionCode',
    PkgForecastGroup: 'PkgForecastGroup',
    RoomMaintenance: 'RoomMaintenance',
    DayTypeCode: 'DayTypeCode',
    TurnawayCodes: 'TurnawayCodes',
    EventCode: 'EventCode',
    MessageCode: 'MessageCode',
    Airport: 'Airport',
    OutOfService: 'OutOfService',
    Floor: 'Floor',
    TransactionGroup: 'TransactionGroup',
    LocatorCode: 'LocatorCode',
    RoomFeatures: 'RoomFeatures',
    JobTitle: 'JobTitle',
    DeviceLocations: 'DeviceLocations',
    ShiftDropLocations: 'ShiftDropLocations',
    HousekeepingTasks: 'HousekeepingTasks',
    HousekeepingRoomSchedules: 'HousekeepingRoomSchedules'
} as const;
export type CopyTemplateType = typeof CopyTemplateType[keyof typeof CopyTemplateType];


export function CopyTemplateTypeFromJSON(json: any): CopyTemplateType {
    return CopyTemplateTypeFromJSONTyped(json, false);
}

export function CopyTemplateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyTemplateType {
    return json as CopyTemplateType;
}

export function CopyTemplateTypeToJSON(value?: CopyTemplateType | null): any {
    return value as any;
}

