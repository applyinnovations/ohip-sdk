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
 * Request object for changing Activity Status Codes.
 * @export
 * @interface ChangeActivityStatusCodes
 */
export interface ChangeActivityStatusCodes {
    /**
     * Activity Status Codes object.
     * @type {Array<ActivityStatusCodeType>}
     * @memberof ChangeActivityStatusCodes
     */
    activityStatusCodes?: Array<ActivityStatusCodeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ChangeActivityStatusCodes
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangeActivityStatusCodes
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ChangeActivityStatusCodes interface.
 */
export declare function instanceOfChangeActivityStatusCodes(value: object): boolean;
export declare function ChangeActivityStatusCodesFromJSON(json: any): ChangeActivityStatusCodes;
export declare function ChangeActivityStatusCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeActivityStatusCodes;
export declare function ChangeActivityStatusCodesToJSON(value?: ChangeActivityStatusCodes | null): any;