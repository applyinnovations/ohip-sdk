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
import type { ProfileId } from './ProfileId';
/**
 * Contains information regarding the share reservation.
 * @export
 * @interface ResSharedGuestInfoType
 */
export interface ResSharedGuestInfoType {
    /**
     * Given name, first name or names
     * @type {string}
     * @memberof ResSharedGuestInfoType
     */
    firstName?: string;
    /**
     * String representation of the full name
     * @type {string}
     * @memberof ResSharedGuestInfoType
     */
    fullName?: string;
    /**
     * Family name, last name.
     * @type {string}
     * @memberof ResSharedGuestInfoType
     */
    lastName?: string;
    /**
     *
     * @type {ProfileId}
     * @memberof ResSharedGuestInfoType
     */
    profileId?: ProfileId;
}
/**
 * Check if a given object implements the ResSharedGuestInfoType interface.
 */
export declare function instanceOfResSharedGuestInfoType(value: object): boolean;
export declare function ResSharedGuestInfoTypeFromJSON(json: any): ResSharedGuestInfoType;
export declare function ResSharedGuestInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResSharedGuestInfoType;
export declare function ResSharedGuestInfoTypeToJSON(value?: ResSharedGuestInfoType | null): any;
