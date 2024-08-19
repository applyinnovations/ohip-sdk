/**
 * OPERA Cloud Content Service
 * Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface CustomizedLetterStatus
 */
export interface CustomizedLetterStatus {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CustomizedLetterStatus
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CustomizedLetterStatus
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CustomizedLetterStatus interface.
 */
export declare function instanceOfCustomizedLetterStatus(value: object): boolean;
export declare function CustomizedLetterStatusFromJSON(json: any): CustomizedLetterStatus;
export declare function CustomizedLetterStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomizedLetterStatus;
export declare function CustomizedLetterStatusToJSON(value?: CustomizedLetterStatus | null): any;
