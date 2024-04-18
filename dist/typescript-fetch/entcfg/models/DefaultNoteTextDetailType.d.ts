/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Default Note Text Information Type.
 * @export
 * @interface DefaultNoteTextDetailType
 */
export interface DefaultNoteTextDetailType {
    /**
     * Indicates the Property for which the Default Note Text is specified.
     * @type {string}
     * @memberof DefaultNoteTextDetailType
     */
    hotelId?: string;
    /**
     * Default Note Text if Note Type has default note.
     * @type {string}
     * @memberof DefaultNoteTextDetailType
     */
    defaultNoteText?: string;
}
/**
 * Check if a given object implements the DefaultNoteTextDetailType interface.
 */
export declare function instanceOfDefaultNoteTextDetailType(value: object): boolean;
export declare function DefaultNoteTextDetailTypeFromJSON(json: any): DefaultNoteTextDetailType;
export declare function DefaultNoteTextDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefaultNoteTextDetailType;
export declare function DefaultNoteTextDetailTypeToJSON(value?: DefaultNoteTextDetailType | null): any;