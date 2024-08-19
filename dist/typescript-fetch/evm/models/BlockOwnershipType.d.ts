/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Specifies the type of the owner associated with the business block(Block/Rooms/Catering).
 * @export
 */
export declare const BlockOwnershipType: {
    readonly Block: "Block";
    readonly Rooms: "Rooms";
    readonly Catering: "Catering";
};
export type BlockOwnershipType = typeof BlockOwnershipType[keyof typeof BlockOwnershipType];
export declare function BlockOwnershipTypeFromJSON(json: any): BlockOwnershipType;
export declare function BlockOwnershipTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockOwnershipType;
export declare function BlockOwnershipTypeToJSON(value?: BlockOwnershipType | null): any;
