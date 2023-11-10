/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { GuestTitlesType } from './GuestTitlesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching Guest Titles.
 * @export
 * @interface GuestTitlesDetails
 */
export interface GuestTitlesDetails {
    /**
     *
     * @type {GuestTitlesType}
     * @memberof GuestTitlesDetails
     */
    guestTitles?: GuestTitlesType;
    /**
     *
     * @type {Links}
     * @memberof GuestTitlesDetails
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof GuestTitlesDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the GuestTitlesDetails interface.
 */
export declare function instanceOfGuestTitlesDetails(value: object): boolean;
export declare function GuestTitlesDetailsFromJSON(json: any): GuestTitlesDetails;
export declare function GuestTitlesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestTitlesDetails;
export declare function GuestTitlesDetailsToJSON(value?: GuestTitlesDetails | null): any;
