/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ProfileIdList } from './ProfileIdList';
/**
 *
 * @export
 * @interface ResAccompanyGuestInfoType
 */
export interface ResAccompanyGuestInfoType {
    /**
     * Given name, first name or names
     * @type {string}
     * @memberof ResAccompanyGuestInfoType
     */
    firstName?: string;
    /**
     * String representation of the full name
     * @type {string}
     * @memberof ResAccompanyGuestInfoType
     */
    fullName?: string;
    /**
     * Family name, last name.
     * @type {string}
     * @memberof ResAccompanyGuestInfoType
     */
    lastName?: string;
    /**
     *
     * @type {ProfileIdList}
     * @memberof ResAccompanyGuestInfoType
     */
    profileIdList?: ProfileIdList;
    /**
     * Unique identifier of the police registration card number.
     * @type {string}
     * @memberof ResAccompanyGuestInfoType
     */
    registrationCardNo?: string;
}
/**
 * Check if a given object implements the ResAccompanyGuestInfoType interface.
 */
export declare function instanceOfResAccompanyGuestInfoType(value: object): boolean;
export declare function ResAccompanyGuestInfoTypeFromJSON(json: any): ResAccompanyGuestInfoType;
export declare function ResAccompanyGuestInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResAccompanyGuestInfoType;
export declare function ResAccompanyGuestInfoTypeToJSON(value?: ResAccompanyGuestInfoType | null): any;
