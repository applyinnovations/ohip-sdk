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
import type { GuestTypesType } from './GuestTypesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object for changing Guest Types.
 * @export
 * @interface GuestTypesToBeChanged
 */
export interface GuestTypesToBeChanged {
    /**
     *
     * @type {GuestTypesType}
     * @memberof GuestTypesToBeChanged
     */
    guestTypes?: GuestTypesType;
    /**
     *
     * @type {Links}
     * @memberof GuestTypesToBeChanged
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof GuestTypesToBeChanged
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the GuestTypesToBeChanged interface.
 */
export declare function instanceOfGuestTypesToBeChanged(value: object): boolean;
export declare function GuestTypesToBeChangedFromJSON(json: any): GuestTypesToBeChanged;
export declare function GuestTypesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestTypesToBeChanged;
export declare function GuestTypesToBeChangedToJSON(value?: GuestTypesToBeChanged | null): any;