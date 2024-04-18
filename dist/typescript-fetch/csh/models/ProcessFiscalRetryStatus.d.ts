/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * The response object to send back the fiscal service response to opera.
 * @export
 * @interface ProcessFiscalRetryStatus
 */
export interface ProcessFiscalRetryStatus {
    /**
     * Fiscal Folio sequence ID stored in queue table.
     * @type {number}
     * @memberof ProcessFiscalRetryStatus
     */
    folioSeqId?: number;
    /**
     * Indicating if it is last trial for fiscal printing.
     * @type {boolean}
     * @memberof ProcessFiscalRetryStatus
     */
    isLastRetry?: boolean;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ProcessFiscalRetryStatus
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ProcessFiscalRetryStatus
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ProcessFiscalRetryStatus interface.
 */
export declare function instanceOfProcessFiscalRetryStatus(value: object): boolean;
export declare function ProcessFiscalRetryStatusFromJSON(json: any): ProcessFiscalRetryStatus;
export declare function ProcessFiscalRetryStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessFiscalRetryStatus;
export declare function ProcessFiscalRetryStatusToJSON(value?: ProcessFiscalRetryStatus | null): any;