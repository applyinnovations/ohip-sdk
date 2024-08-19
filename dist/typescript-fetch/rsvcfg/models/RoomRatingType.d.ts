/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Possible room rating values.
 * @export
 */
export declare const RoomRatingType: {
    readonly MostDesirable: "MostDesirable";
    readonly Desirable: "Desirable";
    readonly SomewhatDesirable: "SomewhatDesirable";
    readonly LessDesirable: "LessDesirable";
    readonly LeastDesirable: "LeastDesirable";
    readonly NoValueDefined: "NoValueDefined";
};
export type RoomRatingType = typeof RoomRatingType[keyof typeof RoomRatingType];
export declare function RoomRatingTypeFromJSON(json: any): RoomRatingType;
export declare function RoomRatingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomRatingType;
export declare function RoomRatingTypeToJSON(value?: RoomRatingType | null): any;
