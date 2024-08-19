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
import type { RoutingInstructionStatusType } from './RoutingInstructionStatusType';
import type { RoutingInstructionType } from './RoutingInstructionType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Criteria for refreshing the routing instruction set.
 * @export
 * @interface RoomRoutingRefreshCriteriaType
 */
export interface RoomRoutingRefreshCriteriaType {
    /**
     * Flag to indicate whether to fetch transaction from both reservations.
     * @type {boolean}
     * @memberof RoomRoutingRefreshCriteriaType
     */
    fromBothResvs?: boolean;
    /**
     * Property code where the routing instruction set exists.
     * @type {string}
     * @memberof RoomRoutingRefreshCriteriaType
     */
    hotelId?: string;
    /**
     *
     * @type {RoutingInstructionType}
     * @memberof RoomRoutingRefreshCriteriaType
     */
    instructions?: RoutingInstructionType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof RoomRoutingRefreshCriteriaType
     */
    originalTargetResvNameId?: UniqueIDType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof RoomRoutingRefreshCriteriaType
     */
    resvNameId?: UniqueIDType;
    /**
     *
     * @type {RoutingInstructionStatusType}
     * @memberof RoomRoutingRefreshCriteriaType
     */
    status?: RoutingInstructionStatusType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof RoomRoutingRefreshCriteriaType
     */
    targetResvNameId?: UniqueIDType;
    /**
     * Unique Transaction Number of the transaction(posting) which need to be transferred.
     * @type {Array<number>}
     * @memberof RoomRoutingRefreshCriteriaType
     */
    transactions?: Array<number>;
}
/**
 * Check if a given object implements the RoomRoutingRefreshCriteriaType interface.
 */
export declare function instanceOfRoomRoutingRefreshCriteriaType(value: object): boolean;
export declare function RoomRoutingRefreshCriteriaTypeFromJSON(json: any): RoomRoutingRefreshCriteriaType;
export declare function RoomRoutingRefreshCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomRoutingRefreshCriteriaType;
export declare function RoomRoutingRefreshCriteriaTypeToJSON(value?: RoomRoutingRefreshCriteriaType | null): any;
