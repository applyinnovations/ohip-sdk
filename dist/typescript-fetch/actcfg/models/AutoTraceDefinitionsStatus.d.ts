/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Existing Operations Responses will eventually be modified to be extended from this type.
 * @export
 * @interface AutoTraceDefinitionsStatus
 */
export interface AutoTraceDefinitionsStatus {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof AutoTraceDefinitionsStatus
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AutoTraceDefinitionsStatus
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the AutoTraceDefinitionsStatus interface.
 */
export declare function instanceOfAutoTraceDefinitionsStatus(value: object): boolean;
export declare function AutoTraceDefinitionsStatusFromJSON(json: any): AutoTraceDefinitionsStatus;
export declare function AutoTraceDefinitionsStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoTraceDefinitionsStatus;
export declare function AutoTraceDefinitionsStatusToJSON(value?: AutoTraceDefinitionsStatus | null): any;
