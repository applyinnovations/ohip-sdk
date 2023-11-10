/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { UniqueIDType } from './UniqueIDType';
/**
 * This contains assignment information for the maintenance request.
 * @export
 * @interface AssignedUserType
 */
export interface AssignedUserType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof AssignedUserType
     */
    assignedByUser?: UniqueIDType;
    /**
     * Name of user who assigned this maintenance request.
     * @type {string}
     * @memberof AssignedUserType
     */
    assignedByUserName?: string;
    /**
     * Date when this task was assigned.
     * @type {Date}
     * @memberof AssignedUserType
     */
    assignedDate?: Date;
    /**
     *
     * @type {UniqueIDType}
     * @memberof AssignedUserType
     */
    assignedToUser?: UniqueIDType;
    /**
     * Name of user to whom this maintenance request has been assigned.
     * @type {string}
     * @memberof AssignedUserType
     */
    assignedToUserName?: string;
    /**
     * Date when this task is due.
     * @type {Date}
     * @memberof AssignedUserType
     */
    expectedByDate?: Date;
}
/**
 * Check if a given object implements the AssignedUserType interface.
 */
export declare function instanceOfAssignedUserType(value: object): boolean;
export declare function AssignedUserTypeFromJSON(json: any): AssignedUserType;
export declare function AssignedUserTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssignedUserType;
export declare function AssignedUserTypeToJSON(value?: AssignedUserType | null): any;
