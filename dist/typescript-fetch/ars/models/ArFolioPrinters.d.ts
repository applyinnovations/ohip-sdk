/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FolioPrintersType } from './FolioPrintersType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response to the request to fetch the Folio Printers applicable for a Folio, based on the
 * @export
 * @interface ArFolioPrinters
 */
export interface ArFolioPrinters {
    /**
     *
     * @type {Links}
     * @memberof ArFolioPrinters
     */
    links?: Links;
    /**
     *
     * @type {FolioPrintersType}
     * @memberof ArFolioPrinters
     */
    printers?: FolioPrintersType;
    /**
     *
     * @type {WarningsType}
     * @memberof ArFolioPrinters
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ArFolioPrinters interface.
 */
export declare function instanceOfArFolioPrinters(value: object): boolean;
export declare function ArFolioPrintersFromJSON(json: any): ArFolioPrinters;
export declare function ArFolioPrintersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArFolioPrinters;
export declare function ArFolioPrintersToJSON(value?: ArFolioPrinters | null): any;
