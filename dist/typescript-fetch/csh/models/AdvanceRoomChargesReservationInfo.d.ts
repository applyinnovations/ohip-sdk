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
import type { AdvanceRoomChargesInfoType } from './AdvanceRoomChargesInfoType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response for the generate advance folio request. Post Advance Room Charges Request can return the below error codes : FOF00065 - Reservation ID or Resort was not supplied. FOF00147 - Reservation is currently not In-House. FOF00148 - Date range requested is not valid. FOF00149 - Advance Room Charges Posting was not completed successfully as there was an Error during posting. FOF00150 - Room Charges have already been posted for the requested dates. FOF00151 - Advance Room Charges could not be completed {the error message if any}.
 * @export
 * @interface AdvanceRoomChargesReservationInfo
 */
export interface AdvanceRoomChargesReservationInfo {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof AdvanceRoomChargesReservationInfo
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {AdvanceRoomChargesInfoType}
     * @memberof AdvanceRoomChargesReservationInfo
     */
    reservationInfo?: AdvanceRoomChargesInfoType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AdvanceRoomChargesReservationInfo
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the AdvanceRoomChargesReservationInfo interface.
 */
export declare function instanceOfAdvanceRoomChargesReservationInfo(value: object): boolean;
export declare function AdvanceRoomChargesReservationInfoFromJSON(json: any): AdvanceRoomChargesReservationInfo;
export declare function AdvanceRoomChargesReservationInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdvanceRoomChargesReservationInfo;
export declare function AdvanceRoomChargesReservationInfoToJSON(value?: AdvanceRoomChargesReservationInfo | null): any;
