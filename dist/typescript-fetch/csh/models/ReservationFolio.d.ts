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
import type { CreateProformaCriteriaType } from './CreateProformaCriteriaType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request to create a Proforma(folio) transactions for a reservation. The request generates the internal transactions required to create a Proforma report. After this request is called , the Opera Proforma report should be called so that these transactions can be used in the report. If the report is called without this request, the report will be incorrect and will not have the complete information. If the report is not used after this request, the internal transactions will be removed either by night audit or by the next request.
 * @export
 * @interface ReservationFolio
 */
export interface ReservationFolio {
    /**
     *
     * @type {CreateProformaCriteriaType}
     * @memberof ReservationFolio
     */
    criteria?: CreateProformaCriteriaType;
    /**
     *
     * @type {Links}
     * @memberof ReservationFolio
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof ReservationFolio
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ReservationFolio interface.
 */
export declare function instanceOfReservationFolio(value: object): boolean;
export declare function ReservationFolioFromJSON(json: any): ReservationFolio;
export declare function ReservationFolioFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationFolio;
export declare function ReservationFolioToJSON(value?: ReservationFolio | null): any;