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
import type { ActivityStatusCodeType } from './ActivityStatusCodeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for creating Activity Status Codes.
 * @export
 * @interface CreateActivityStatusCodes
 */
export interface CreateActivityStatusCodes {
    /**
     * Activity Status Codes object.
     * @type {Array<ActivityStatusCodeType>}
     * @memberof CreateActivityStatusCodes
     */
    activityStatusCodes?: Array<ActivityStatusCodeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CreateActivityStatusCodes
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CreateActivityStatusCodes
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CreateActivityStatusCodes interface.
 */
export declare function instanceOfCreateActivityStatusCodes(value: object): boolean;
export declare function CreateActivityStatusCodesFromJSON(json: any): CreateActivityStatusCodes;
export declare function CreateActivityStatusCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateActivityStatusCodes;
export declare function CreateActivityStatusCodesToJSON(value?: CreateActivityStatusCodes | null): any;