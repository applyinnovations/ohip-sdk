/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * The Redeem Points contains the number of points required to book a room type.
 * @export
 * @interface PointsType
 */
export interface PointsType {
    /**
     * Awards type for the award type rate code.
     * @type {string}
     * @memberof PointsType
     */
    awardsType?: string;
    /**
     * No of points required to book this Room Stay.
     * @type {number}
     * @memberof PointsType
     */
    points?: number;
}
/**
 * Check if a given object implements the PointsType interface.
 */
export declare function instanceOfPointsType(value: object): boolean;
export declare function PointsTypeFromJSON(json: any): PointsType;
export declare function PointsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PointsType;
export declare function PointsTypeToJSON(value?: PointsType | null): any;
