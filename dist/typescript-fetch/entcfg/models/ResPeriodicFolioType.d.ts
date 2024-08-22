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
 * Information regarding periodic folios set on the reservation.
 * @export
 * @interface ResPeriodicFolioType
 */
export interface ResPeriodicFolioType {
    /**
     * Latest date when a direct bill settlement was automatically done using the "Direct Bill Batch Folios" option.
     * @type {string}
     * @memberof ResPeriodicFolioType
     */
    lastSettlementDate?: string;
    /**
     * Latest date when a folio was printed using the "Periodic Batch Folios" option
     * @type {string}
     * @memberof ResPeriodicFolioType
     */
    lastFolioDate?: string;
    /**
     * Frequency in number of days when folios should be printed for this reservation.
     * @type {number}
     * @memberof ResPeriodicFolioType
     */
    frequency?: number;
}
/**
 * Check if a given object implements the ResPeriodicFolioType interface.
 */
export declare function instanceOfResPeriodicFolioType(value: object): boolean;
export declare function ResPeriodicFolioTypeFromJSON(json: any): ResPeriodicFolioType;
export declare function ResPeriodicFolioTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResPeriodicFolioType;
export declare function ResPeriodicFolioTypeToJSON(value?: ResPeriodicFolioType | null): any;
