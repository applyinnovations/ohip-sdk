/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Identification information of the customer.
 * @export
 * @interface IdentificationType
 */
export interface IdentificationType {
    /**
     * Expiration date of Identification.
     * @type {string}
     * @memberof IdentificationType
     */
    expirationDate?: string;
    /**
     * Identification Number.
     * @type {string}
     * @memberof IdentificationType
     */
    idNumber?: string;
    /**
     * Masked Identification Number.
     * @type {string}
     * @memberof IdentificationType
     */
    idNumberMasked?: string;
    /**
     * Identification Type. Eg Passport, Driving License etc.
     * @type {string}
     * @memberof IdentificationType
     */
    idType?: string;
    /**
     * The country where Identification was issued.
     * @type {string}
     * @memberof IdentificationType
     */
    issuedCountry?: string;
    /**
     * Issued date of Identification.
     * @type {string}
     * @memberof IdentificationType
     */
    issuedDate?: string;
    /**
     * The place where Identification was issued.
     * @type {string}
     * @memberof IdentificationType
     */
    issuedPlace?: string;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof IdentificationType
     */
    orderSequence?: number;
    /**
     * When true, indicates a primary information.
     * @type {boolean}
     * @memberof IdentificationType
     */
    primaryInd?: boolean;
    /**
     * Property where the identification belongs to.
     * @type {string}
     * @memberof IdentificationType
     */
    registeredProperty?: string;
}
/**
 * Check if a given object implements the IdentificationType interface.
 */
export declare function instanceOfIdentificationType(value: object): boolean;
export declare function IdentificationTypeFromJSON(json: any): IdentificationType;
export declare function IdentificationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentificationType;
export declare function IdentificationTypeToJSON(value?: IdentificationType | null): any;
