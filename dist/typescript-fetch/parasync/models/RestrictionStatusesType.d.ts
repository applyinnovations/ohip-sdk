/**
 * OPERA Cloud Price Availability Rate Async API
 * APIs to cater for Price and Rate Availability Asynchronous functionality in OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
export declare const RestrictionStatusesType: {
    readonly Closed: "Closed";
    readonly ClosedForArrival: "ClosedForArrival";
    readonly ClosedForDeparture: "ClosedForDeparture";
    readonly MinimumStayThrough: "MinimumStayThrough";
    readonly MaximumStayThrough: "MaximumStayThrough";
    readonly MinimumLengthOfStay: "MinimumLengthOfStay";
    readonly MaximumLengthOfStay: "MaximumLengthOfStay";
    readonly LengthOfStayNotAvailable: "LengthOfStayNotAvailable";
    readonly MinimumAdvanceBooking: "MinimumAdvanceBooking";
    readonly MaximumAdvanceBooking: "MaximumAdvanceBooking";
    readonly Open: "Open";
    readonly OpenForArrival: "OpenForArrival";
    readonly OpenForDeparture: "OpenForDeparture";
};
export type RestrictionStatusesType = typeof RestrictionStatusesType[keyof typeof RestrictionStatusesType];
export declare function RestrictionStatusesTypeFromJSON(json: any): RestrictionStatusesType;
export declare function RestrictionStatusesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestrictionStatusesType;
export declare function RestrictionStatusesTypeToJSON(value?: RestrictionStatusesType | null): any;