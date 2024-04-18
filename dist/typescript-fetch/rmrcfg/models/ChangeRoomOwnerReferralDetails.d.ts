/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RoomOwnerReferralType } from './RoomOwnerReferralType';
import type { WarningType } from './WarningType';
/**
 * Request object for changing Room Owner Referral records.
 * @export
 * @interface ChangeRoomOwnerReferralDetails
 */
export interface ChangeRoomOwnerReferralDetails {
    /**
     *
     * @type {RoomOwnerReferralType}
     * @memberof ChangeRoomOwnerReferralDetails
     */
    roomOwnerReferral?: RoomOwnerReferralType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangeRoomOwnerReferralDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ChangeRoomOwnerReferralDetails interface.
 */
export declare function instanceOfChangeRoomOwnerReferralDetails(value: object): boolean;
export declare function ChangeRoomOwnerReferralDetailsFromJSON(json: any): ChangeRoomOwnerReferralDetails;
export declare function ChangeRoomOwnerReferralDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeRoomOwnerReferralDetails;
export declare function ChangeRoomOwnerReferralDetailsToJSON(value?: ChangeRoomOwnerReferralDetails | null): any;