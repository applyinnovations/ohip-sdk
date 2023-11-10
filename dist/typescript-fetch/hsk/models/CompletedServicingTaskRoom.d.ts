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
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Existing Operations Responses will eventually be modified to be extended from this type.
 * @export
 * @interface CompletedServicingTaskRoom
 */
export interface CompletedServicingTaskRoom {
    /**
     *
     * @type {Links}
     * @memberof CompletedServicingTaskRoom
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof CompletedServicingTaskRoom
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CompletedServicingTaskRoom interface.
 */
export declare function instanceOfCompletedServicingTaskRoom(value: object): boolean;
export declare function CompletedServicingTaskRoomFromJSON(json: any): CompletedServicingTaskRoom;
export declare function CompletedServicingTaskRoomFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompletedServicingTaskRoom;
export declare function CompletedServicingTaskRoomToJSON(value?: CompletedServicingTaskRoom | null): any;
