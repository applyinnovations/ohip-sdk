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
import type { PreferenceTypeType } from './PreferenceTypeType';
/**
 * List of customer preferences.
 * @export
 * @interface ProfileTypePreferenceCollection
 */
export interface ProfileTypePreferenceCollection {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypePreferenceCollection
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypePreferenceCollection
     */
    hasMore?: boolean;
    /**
     * Collection of Detailed information on preferences of the customer.
     * @type {Array<PreferenceTypeType>}
     * @memberof ProfileTypePreferenceCollection
     */
    preferenceType?: Array<PreferenceTypeType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypePreferenceCollection
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the ProfileTypePreferenceCollection interface.
 */
export declare function instanceOfProfileTypePreferenceCollection(value: object): boolean;
export declare function ProfileTypePreferenceCollectionFromJSON(json: any): ProfileTypePreferenceCollection;
export declare function ProfileTypePreferenceCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypePreferenceCollection;
export declare function ProfileTypePreferenceCollectionToJSON(value?: ProfileTypePreferenceCollection | null): any;
