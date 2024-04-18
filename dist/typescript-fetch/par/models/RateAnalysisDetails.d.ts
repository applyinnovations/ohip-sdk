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
import type { InstanceLink } from './InstanceLink';
import type { RateAnalysisType } from './RateAnalysisType';
import type { WarningType } from './WarningType';
/**
 * Response to the fetch Rate Availability Analysis.
 * @export
 * @interface RateAnalysisDetails
 */
export interface RateAnalysisDetails {
    /**
     * Rate availability analysis record for each date of the stay.
     * @type {Array<RateAnalysisType>}
     * @memberof RateAnalysisDetails
     */
    analysis?: Array<RateAnalysisType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RateAnalysisDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RateAnalysisDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RateAnalysisDetails interface.
 */
export declare function instanceOfRateAnalysisDetails(value: object): boolean;
export declare function RateAnalysisDetailsFromJSON(json: any): RateAnalysisDetails;
export declare function RateAnalysisDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateAnalysisDetails;
export declare function RateAnalysisDetailsToJSON(value?: RateAnalysisDetails | null): any;