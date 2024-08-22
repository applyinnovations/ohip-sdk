/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { NegotiatedType } from './NegotiatedType';
/**
 * List of profile negotiated rates.
 * @export
 * @interface ProfileTypeNegotiatedRates
 */
export interface ProfileTypeNegotiatedRates {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypeNegotiatedRates
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypeNegotiatedRates
     */
    hasMore?: boolean;
    /**
     * Collection of Detailed information on profile negotiated rates.
     * @type {Array<NegotiatedType>}
     * @memberof ProfileTypeNegotiatedRates
     */
    negotiatedRate?: Array<NegotiatedType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypeNegotiatedRates
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the ProfileTypeNegotiatedRates interface.
 */
export declare function instanceOfProfileTypeNegotiatedRates(value: object): boolean;
export declare function ProfileTypeNegotiatedRatesFromJSON(json: any): ProfileTypeNegotiatedRates;
export declare function ProfileTypeNegotiatedRatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeNegotiatedRates;
export declare function ProfileTypeNegotiatedRatesToJSON(value?: ProfileTypeNegotiatedRates | null): any;
