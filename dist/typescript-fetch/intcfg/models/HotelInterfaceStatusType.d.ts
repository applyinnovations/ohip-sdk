/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Status of the Hotel Interface either STOPPED or RUNNING.
 * @export
 */
export declare const HotelInterfaceStatusType: {
    readonly Stopped: "Stopped";
    readonly Running: "Running";
    readonly Waiting: "Waiting";
    readonly StopInitiated: "StopInitiated";
    readonly StartInitiated: "StartInitiated";
    readonly RebootInitiated: "RebootInitiated";
    readonly Other: "Other";
};
export type HotelInterfaceStatusType = typeof HotelInterfaceStatusType[keyof typeof HotelInterfaceStatusType];
export declare function HotelInterfaceStatusTypeFromJSON(json: any): HotelInterfaceStatusType;
export declare function HotelInterfaceStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInterfaceStatusType;
export declare function HotelInterfaceStatusTypeToJSON(value?: HotelInterfaceStatusType | null): any;