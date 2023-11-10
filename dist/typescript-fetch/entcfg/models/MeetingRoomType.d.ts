/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Information about the meeting rooms of the hotel.
 * @export
 * @interface MeetingRoomType
 */
export interface MeetingRoomType {
    /**
     * The charge for the meeting room.
     * @type {string}
     * @memberof MeetingRoomType
     */
    charge?: string;
    /**
     * the code of the meeting room
     * @type {string}
     * @memberof MeetingRoomType
     */
    code?: string;
    /**
     * A description of the meeting room.
     * @type {string}
     * @memberof MeetingRoomType
     */
    description?: string;
}
/**
 * Check if a given object implements the MeetingRoomType interface.
 */
export declare function instanceOfMeetingRoomType(value: object): boolean;
export declare function MeetingRoomTypeFromJSON(json: any): MeetingRoomType;
export declare function MeetingRoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeetingRoomType;
export declare function MeetingRoomTypeToJSON(value?: MeetingRoomType | null): any;
