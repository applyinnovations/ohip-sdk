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
 *
 * @export
 * @interface PutGuestTitlesRequest
 */
export interface PutGuestTitlesRequest {
    /**
     *
     * @type {GuestTitlesType}
     * @memberof PutGuestTitlesRequest
     */
    guestTitles?: GuestTitlesType;
    /**
     *
     * @type {Links}
     * @memberof PutGuestTitlesRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PutGuestTitlesRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PutGuestTitlesRequest interface.
 */
export declare function instanceOfPutGuestTitlesRequest(value: object): boolean;
export declare function PutGuestTitlesRequestFromJSON(json: any): PutGuestTitlesRequest;
export declare function PutGuestTitlesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutGuestTitlesRequest;
export declare function PutGuestTitlesRequestToJSON(value?: PutGuestTitlesRequest | null): any;
