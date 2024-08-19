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
import type { AutoTraceDefinitionActivityInfoType } from './AutoTraceDefinitionActivityInfoType';
import type { AutoTraceDefinitionDetailType } from './AutoTraceDefinitionDetailType';
import type { AutoTraceDefinitionOwnerInfoType } from './AutoTraceDefinitionOwnerInfoType';
/**
 * Auto Trace Definition information.
 * @export
 * @interface AutoTraceDefinitionType
 */
export interface AutoTraceDefinitionType {
    /**
     *
     * @type {AutoTraceDefinitionActivityInfoType}
     * @memberof AutoTraceDefinitionType
     */
    autoTraceDefinitionActivityInfo?: AutoTraceDefinitionActivityInfoType;
    /**
     *
     * @type {AutoTraceDefinitionDetailType}
     * @memberof AutoTraceDefinitionType
     */
    autoTraceDefinitionDetail?: AutoTraceDefinitionDetailType;
    /**
     *
     * @type {AutoTraceDefinitionOwnerInfoType}
     * @memberof AutoTraceDefinitionType
     */
    autoTraceDefinitionOwnerInfo?: AutoTraceDefinitionOwnerInfoType;
    /**
     * Determines whether to fetch inactive records or not.
     * @type {boolean}
     * @memberof AutoTraceDefinitionType
     */
    inactive?: boolean;
}
/**
 * Check if a given object implements the AutoTraceDefinitionType interface.
 */
export declare function instanceOfAutoTraceDefinitionType(value: object): boolean;
export declare function AutoTraceDefinitionTypeFromJSON(json: any): AutoTraceDefinitionType;
export declare function AutoTraceDefinitionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoTraceDefinitionType;
export declare function AutoTraceDefinitionTypeToJSON(value?: AutoTraceDefinitionType | null): any;
