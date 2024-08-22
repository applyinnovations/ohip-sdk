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
import type { RoomTypeSuppliesType } from './RoomTypeSuppliesType';
/**
 * Facility task info related to the departure task.
 * @export
 * @interface DepartureTaskInfoType
 */
export interface DepartureTaskInfoType {
    /**
     * Facility task code of the departure task.
     * @type {string}
     * @memberof DepartureTaskInfoType
     */
    code?: string;
    /**
     * Supplies based on the room type.
     * @type {Array<RoomTypeSuppliesType>}
     * @memberof DepartureTaskInfoType
     */
    roomType?: Array<RoomTypeSuppliesType>;
}
/**
 * Check if a given object implements the DepartureTaskInfoType interface.
 */
export declare function instanceOfDepartureTaskInfoType(value: object): boolean;
export declare function DepartureTaskInfoTypeFromJSON(json: any): DepartureTaskInfoType;
export declare function DepartureTaskInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepartureTaskInfoType;
export declare function DepartureTaskInfoTypeToJSON(value?: DepartureTaskInfoType | null): any;
