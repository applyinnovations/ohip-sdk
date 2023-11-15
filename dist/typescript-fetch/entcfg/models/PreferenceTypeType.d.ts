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
import type { PreferenceType } from './PreferenceType';
/**
 * Preference details for the profile.
 * @export
 * @interface PreferenceTypeType
 */
export interface PreferenceTypeType {
    /**
     * Available quantity of preferences (maximum quantity - Existing preferences)per preference group.
     * @type {number}
     * @memberof PreferenceTypeType
     */
    availableQuantity?: number;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    creatorId?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    lastModifyDateTime?: string;
    /**
     * Maximum quantity of preferences allowed per preference group.
     * @type {number}
     * @memberof PreferenceTypeType
     */
    maxQuantity?: number;
    /**
     * Maximum quantity of preferences used by any resort per preference group.
     * @type {number}
     * @memberof PreferenceTypeType
     */
    maxResortUsedQuantity?: number;
    /**
     * Collection of Preferences for the profile.
     * @type {Array<PreferenceType>}
     * @memberof PreferenceTypeType
     */
    preference?: Array<PreferenceType>;
    /**
     * Preference group code.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    preferenceType?: string;
    /**
     * Preference group description.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    preferenceTypeDescription?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof PreferenceTypeType
     */
    purgeDate?: string;
    /**
     * Whether this preference is reservation preference or not.
     * @type {boolean}
     * @memberof PreferenceTypeType
     */
    reservationPreference?: boolean;
    /**
     * Preference Sequence.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    sequence?: string;
}
/**
 * Check if a given object implements the PreferenceTypeType interface.
 */
export declare function instanceOfPreferenceTypeType(value: object): boolean;
export declare function PreferenceTypeTypeFromJSON(json: any): PreferenceTypeType;
export declare function PreferenceTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreferenceTypeType;
export declare function PreferenceTypeTypeToJSON(value?: PreferenceTypeType | null): any;
