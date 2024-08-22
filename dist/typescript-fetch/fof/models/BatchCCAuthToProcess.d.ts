/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Response for starting a credit card authorization batch job, which contains the batch ID upon success.
 * @export
 * @interface BatchCCAuthToProcess
 */
export interface BatchCCAuthToProcess {
    /**
     *
     * @type {number}
     * @memberof BatchCCAuthToProcess
     */
    batchId?: number;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BatchCCAuthToProcess
     */
    links?: Array<InstanceLink>;
    /**
     * Used for Character Strings, length 0 to 200.
     * @type {string}
     * @memberof BatchCCAuthToProcess
     */
    processId?: string;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BatchCCAuthToProcess
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BatchCCAuthToProcess interface.
 */
export declare function instanceOfBatchCCAuthToProcess(value: object): boolean;
export declare function BatchCCAuthToProcessFromJSON(json: any): BatchCCAuthToProcess;
export declare function BatchCCAuthToProcessFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchCCAuthToProcess;
export declare function BatchCCAuthToProcessToJSON(value?: BatchCCAuthToProcess | null): any;
