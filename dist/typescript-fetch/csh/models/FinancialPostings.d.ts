/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FinancialPostingsType } from './FinancialPostingsType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response for fetching the Posting Journal.
 * @export
 * @interface FinancialPostings
 */
export interface FinancialPostings {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof FinancialPostings
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof FinancialPostings
     */
    hasMore?: boolean;
    /**
     *
     * @type {FinancialPostingsType}
     * @memberof FinancialPostings
     */
    journalPostings?: FinancialPostingsType;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof FinancialPostings
     */
    limit?: number;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof FinancialPostings
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof FinancialPostings
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof FinancialPostings
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof FinancialPostings
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FinancialPostings
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the FinancialPostings interface.
 */
export declare function instanceOfFinancialPostings(value: object): boolean;
export declare function FinancialPostingsFromJSON(json: any): FinancialPostings;
export declare function FinancialPostingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinancialPostings;
export declare function FinancialPostingsToJSON(value?: FinancialPostings | null): any;
