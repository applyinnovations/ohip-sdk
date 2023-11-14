/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { TrackItTypesConfigType } from './TrackItTypesConfigType';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching Track it Types.
 * @export
 * @interface TrackItTypesDetails
 */
export interface TrackItTypesDetails {
    /**
     *
     * @type {Links}
     * @memberof TrackItTypesDetails
     */
    links?: Links;
    /**
     *
     * @type {TrackItTypesConfigType}
     * @memberof TrackItTypesDetails
     */
    trackItTypes?: TrackItTypesConfigType;
    /**
     *
     * @type {WarningsType}
     * @memberof TrackItTypesDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the TrackItTypesDetails interface.
 */
export declare function instanceOfTrackItTypesDetails(value: object): boolean;
export declare function TrackItTypesDetailsFromJSON(json: any): TrackItTypesDetails;
export declare function TrackItTypesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackItTypesDetails;
export declare function TrackItTypesDetailsToJSON(value?: TrackItTypesDetails | null): any;