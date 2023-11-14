/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FinancialPostingsType } from './FinancialPostingsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response for fetching the Complimentary Posting Journal.
 * @export
 * @interface CompAccountingJournal
 */
export interface CompAccountingJournal {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof CompAccountingJournal
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof CompAccountingJournal
     */
    hasMore?: boolean;
    /**
     *
     * @type {FinancialPostingsType}
     * @memberof CompAccountingJournal
     */
    journalPostings?: FinancialPostingsType;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof CompAccountingJournal
     */
    limit?: number;
    /**
     *
     * @type {Links}
     * @memberof CompAccountingJournal
     */
    links?: Links;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof CompAccountingJournal
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof CompAccountingJournal
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof CompAccountingJournal
     */
    totalResults?: number;
    /**
     *
     * @type {WarningsType}
     * @memberof CompAccountingJournal
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CompAccountingJournal interface.
 */
export declare function instanceOfCompAccountingJournal(value: object): boolean;
export declare function CompAccountingJournalFromJSON(json: any): CompAccountingJournal;
export declare function CompAccountingJournalFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompAccountingJournal;
export declare function CompAccountingJournalToJSON(value?: CompAccountingJournal | null): any;