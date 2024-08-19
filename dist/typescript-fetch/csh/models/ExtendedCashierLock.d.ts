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
 * This response will indicate whether or not the extension was successful. This operation may return errors when the lock being requested to be extended no longer exists. This can happen when the lock has already expired and cleaned up.
 * @export
 * @interface ExtendedCashierLock
 */
export interface ExtendedCashierLock {
    /**
     *
     * @type {OperaRecordLock}
     * @memberof ExtendedCashierLock
     */
    cashierLock?: OperaRecordLock;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ExtendedCashierLock
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ExtendedCashierLock
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ExtendedCashierLock interface.
 */
export declare function instanceOfExtendedCashierLock(value: object): boolean;
export declare function ExtendedCashierLockFromJSON(json: any): ExtendedCashierLock;
export declare function ExtendedCashierLockFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtendedCashierLock;
export declare function ExtendedCashierLockToJSON(value?: ExtendedCashierLock | null): any;
