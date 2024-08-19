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
import type { CompleteRoomRepairCriteria } from './CompleteRoomRepairCriteria';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 *
 * @export
 * @interface CompleteRoomRepair
 */
export interface CompleteRoomRepair {
    /**
     *
     * @type {CompleteRoomRepairCriteria}
     * @memberof CompleteRoomRepair
     */
    criteria?: CompleteRoomRepairCriteria;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CompleteRoomRepair
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CompleteRoomRepair
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CompleteRoomRepair interface.
 */
export declare function instanceOfCompleteRoomRepair(value: object): boolean;
export declare function CompleteRoomRepairFromJSON(json: any): CompleteRoomRepair;
export declare function CompleteRoomRepairFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompleteRoomRepair;
export declare function CompleteRoomRepairToJSON(value?: CompleteRoomRepair | null): any;
