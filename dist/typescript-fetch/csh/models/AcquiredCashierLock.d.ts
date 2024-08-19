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
import type { OperaRecordLock } from './OperaRecordLock';
import type { WarningType } from './WarningType';
/**
 * Response for the Cashier Lock request.
 * @export
 * @interface AcquiredCashierLock
 */
export interface AcquiredCashierLock {
    /**
     *
     * @type {OperaRecordLock}
     * @memberof AcquiredCashierLock
     */
    acquiredCashierLock?: OperaRecordLock;
    /**
     *
     * @type {OperaRecordLock}
     * @memberof AcquiredCashierLock
     */
    existingCashierLock?: OperaRecordLock;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof AcquiredCashierLock
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AcquiredCashierLock
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the AcquiredCashierLock interface.
 */
export declare function instanceOfAcquiredCashierLock(value: object): boolean;
export declare function AcquiredCashierLockFromJSON(json: any): AcquiredCashierLock;
export declare function AcquiredCashierLockFromJSONTyped(json: any, ignoreDiscriminator: boolean): AcquiredCashierLock;
export declare function AcquiredCashierLockToJSON(value?: AcquiredCashierLock | null): any;
