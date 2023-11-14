/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 */
export declare const MasterRestrictionStatusesType: {
    readonly Closed: "Closed";
    readonly ClosedForArrival: "ClosedForArrival";
    readonly ClosedForDeparture: "ClosedForDeparture";
    readonly MinimumStayThrough: "MinimumStayThrough";
    readonly MaximumStayThrough: "MaximumStayThrough";
    readonly MinimumLengthOfStay: "MinimumLengthOfStay";
    readonly MaximumLengthOfStay: "MaximumLengthOfStay";
    readonly LosNotAvailable: "LOSNotAvailable";
    readonly MinimumAdvanceBooking: "MinimumAdvanceBooking";
    readonly MaximumAdvanceBooking: "MaximumAdvanceBooking";
    readonly Open: "Open";
    readonly OpenForArrival: "OpenForArrival";
    readonly OpenForDeparture: "OpenForDeparture";
    readonly Hurdle: "Hurdle";
    readonly MinimumOccupancy: "MinimumOccupancy";
    readonly MaximumOccupancy: "MaximumOccupancy";
    readonly RateStrategy: "RateStrategy";
    readonly RateDetailsNotSet: "RateDetailsNotSet";
    readonly InventoryItemNotAvailable: "InventoryItemNotAvailable";
    readonly RankRestriction: "RankRestriction";
    readonly MaximumAuth: "MaximumAuth";
    readonly InventoryNotAvailable: "InventoryNotAvailable";
    readonly RoomClassNotAvailable: "RoomClassNotAvailable";
    readonly RoomTypeNotAvailable: "RoomTypeNotAvailable";
    readonly BlockSellLimit: "BlockSellLimit";
    readonly OnRequest: "OnRequest";
};
export type MasterRestrictionStatusesType = typeof MasterRestrictionStatusesType[keyof typeof MasterRestrictionStatusesType];
export declare function MasterRestrictionStatusesTypeFromJSON(json: any): MasterRestrictionStatusesType;
export declare function MasterRestrictionStatusesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MasterRestrictionStatusesType;
export declare function MasterRestrictionStatusesTypeToJSON(value?: MasterRestrictionStatusesType | null): any;