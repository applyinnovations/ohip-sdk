/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { TaskSheetLockCriteriaType } from './TaskSheetLockCriteriaType';
import type { WarningType } from './WarningType';
/**
 * Request for locking a task sheet.
 * @export
 * @interface TaskSheetToLock
 */
export interface TaskSheetToLock {
    /**
     *
     * @type {TaskSheetLockCriteriaType}
     * @memberof TaskSheetToLock
     */
    criteria?: TaskSheetLockCriteriaType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TaskSheetToLock
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TaskSheetToLock
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TaskSheetToLock interface.
 */
export declare function instanceOfTaskSheetToLock(value: object): boolean;
export declare function TaskSheetToLockFromJSON(json: any): TaskSheetToLock;
export declare function TaskSheetToLockFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskSheetToLock;
export declare function TaskSheetToLockToJSON(value?: TaskSheetToLock | null): any;
