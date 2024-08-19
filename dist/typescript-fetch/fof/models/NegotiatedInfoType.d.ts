/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * This provides information for a profile negotiated rate.
 * @export
 * @interface NegotiatedInfoType
 */
export interface NegotiatedInfoType {
    /**
     * Informational purposes only in numeric format.
     * @type {string}
     * @memberof NegotiatedInfoType
     */
    comissionCode?: string;
    /**
     * The master identifier for multiple offices/locations under the same company profile. This is optional
     * @type {string}
     * @memberof NegotiatedInfoType
     */
    corporateAgreementId?: string;
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof NegotiatedInfoType
     */
    end?: string;
    /**
     * Negotiated Rate is inactive or not
     * @type {boolean}
     * @memberof NegotiatedInfoType
     */
    inactive?: boolean;
    /**
     * The sell order.
     * @type {number}
     * @memberof NegotiatedInfoType
     */
    order?: number;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof NegotiatedInfoType
     */
    start?: string;
}
/**
 * Check if a given object implements the NegotiatedInfoType interface.
 */
export declare function instanceOfNegotiatedInfoType(value: object): boolean;
export declare function NegotiatedInfoTypeFromJSON(json: any): NegotiatedInfoType;
export declare function NegotiatedInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NegotiatedInfoType;
export declare function NegotiatedInfoTypeToJSON(value?: NegotiatedInfoType | null): any;
