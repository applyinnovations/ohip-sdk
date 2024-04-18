/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockInventoryControlType } from './BlockInventoryControlType';
import type { BlockRatePlanInfoType } from './BlockRatePlanInfoType';
import type { BreakfastType } from './BreakfastType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { PorterageType } from './PorterageType';
/**
 * Contains reservation related information for the block.
 * @export
 * @interface BlockReservationDetailsType
 */
export interface BlockReservationDetailsType {
    /**
     * Whether any active posting master reservations exist for the business block.
     * @type {boolean}
     * @memberof BlockReservationDetailsType
     */
    activePostingMasterReservations?: boolean;
    /**
     * Indicates the approximate check in time for the reservations made for the block.
     * @type {string}
     * @memberof BlockReservationDetailsType
     */
    arrivalTime?: string;
    /**
     *
     * @type {BreakfastType}
     * @memberof BlockReservationDetailsType
     */
    breakfast?: BreakfastType;
    /**
     * Determines whether or not the block can be managed at the CRS level.
     * @type {boolean}
     * @memberof BlockReservationDetailsType
     */
    controlBlockLocally?: boolean;
    /**
     * Cut off date of the block.
     * @type {string}
     * @memberof BlockReservationDetailsType
     */
    cutOffDate?: string;
    /**
     * Cut off days of the block.
     * @type {number}
     * @memberof BlockReservationDetailsType
     */
    cutOffDays?: number;
    /**
     * Contains information about the date by which the group must make a decision on the block.
     * @type {string}
     * @memberof BlockReservationDetailsType
     */
    decisionDate?: string;
    /**
     * Indicates the approximate check out time for the reservations made for the block.
     * @type {string}
     * @memberof BlockReservationDetailsType
     */
    departureTime?: string;
    /**
     * Elasticity of the block.
     * @type {number}
     * @memberof BlockReservationDetailsType
     */
    elastic?: number;
    /**
     * This element informs about the systematic follow up on this business block. A Group Reservations Agent or Reservations Manager can use this date to identify when to followup with the customer.
     * @type {string}
     * @memberof BlockReservationDetailsType
     */
    followupDate?: string;
    /**
     * Determines whether the CRS guarantee is required or not for the block.
     * @type {boolean}
     * @memberof BlockReservationDetailsType
     */
    guaranteeRequired?: boolean;
    /**
     * Determines whether or not the block can be managed at the CRS level.
     * @type {boolean}
     * @memberof BlockReservationDetailsType
     */
    housing?: boolean;
    /**
     *
     * @type {BlockInventoryControlType}
     * @memberof BlockReservationDetailsType
     */
    inventoryControl?: BlockInventoryControlType;
    /**
     * Indicates the expected number of guests per sleeping room when Occupancy Split Per Room Type parameter is N.
     * @type {number}
     * @memberof BlockReservationDetailsType
     */
    personsPerRoom?: number;
    /**
     *
     * @type {PorterageType}
     * @memberof BlockReservationDetailsType
     */
    porterage?: PorterageType;
    /**
     * Indicates if posting master reservations can be cancelled.
     * @type {boolean}
     * @memberof BlockReservationDetailsType
     */
    postingMastersCancellable?: boolean;
    /**
     * Determines if the rate amounts are to be printed on the reservations picked up from the block. This becomes the default Print Rate setting for all reservations picked up from the block.
     * @type {boolean}
     * @memberof BlockReservationDetailsType
     */
    printRate?: boolean;
    /**
     * If this is true, then when a reservation is picked up for the block, the rate for that reservation is taken from the rate grid belonging to the block. If this is false, the rate amounts on the room grid are updated every time the Refresh Rates process is applied.
     * @type {boolean}
     * @memberof BlockReservationDetailsType
     */
    rateGuarantee?: boolean;
    /**
     * Rate Plan for the block.
     * @type {Array<BlockRatePlanInfoType>}
     * @memberof BlockReservationDetailsType
     */
    ratePlanCode?: Array<BlockRatePlanInfoType>;
    /**
     * Due date for the rooming list for the block. This is the date by which the guest list should be provided by the customer.
     * @type {string}
     * @memberof BlockReservationDetailsType
     */
    roomingListDueDate?: string;
    /**
     * Are Rate amounts suppressed for the block.
     * @type {boolean}
     * @memberof BlockReservationDetailsType
     */
    suppressRate?: boolean;
    /**
     * Free format field to store information from Wholesaler for the block.
     * @type {string}
     * @memberof BlockReservationDetailsType
     */
    taRecordLocator?: string;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof BlockReservationDetailsType
     */
    traceCode?: CodeDescriptionType;
    /**
     * Transaction Code for the block
     * @type {string}
     * @memberof BlockReservationDetailsType
     */
    transactionCode?: string;
    /**
     * Determines whether the CutOffDate or CutOffDays has changed for the block header. If CutOffDate or CutOffDays is changed then apply the changed cutoff date/ days as the new cutoff date/ days to all the room types in the Grid.
     * @type {boolean}
     * @memberof BlockReservationDetailsType
     */
    updateGridOnCutoffChange?: boolean;
}
/**
 * Check if a given object implements the BlockReservationDetailsType interface.
 */
export declare function instanceOfBlockReservationDetailsType(value: object): boolean;
export declare function BlockReservationDetailsTypeFromJSON(json: any): BlockReservationDetailsType;
export declare function BlockReservationDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockReservationDetailsType;
export declare function BlockReservationDetailsTypeToJSON(value?: BlockReservationDetailsType | null): any;