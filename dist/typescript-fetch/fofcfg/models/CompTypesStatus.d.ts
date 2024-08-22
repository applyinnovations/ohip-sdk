/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface CompTypesStatus
 */
export interface CompTypesStatus {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CompTypesStatus
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CompTypesStatus
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CompTypesStatus interface.
 */
export declare function instanceOfCompTypesStatus(value: object): boolean;
export declare function CompTypesStatusFromJSON(json: any): CompTypesStatus;
export declare function CompTypesStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompTypesStatus;
export declare function CompTypesStatusToJSON(value?: CompTypesStatus | null): any;
