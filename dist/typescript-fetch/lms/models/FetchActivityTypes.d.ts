/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ActivityTypeDetailType } from './ActivityTypeDetailType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object after fetching the Activity Types.
 * @export
 * @interface FetchActivityTypes
 */
export interface FetchActivityTypes {
    /**
     * Collection of Activity Types.
     * @type {Array<ActivityTypeDetailType>}
     * @memberof FetchActivityTypes
     */
    activityTypes?: Array<ActivityTypeDetailType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof FetchActivityTypes
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FetchActivityTypes
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the FetchActivityTypes interface.
 */
export declare function instanceOfFetchActivityTypes(value: object): boolean;
export declare function FetchActivityTypesFromJSON(json: any): FetchActivityTypes;
export declare function FetchActivityTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchActivityTypes;
export declare function FetchActivityTypesToJSON(value?: FetchActivityTypes | null): any;
