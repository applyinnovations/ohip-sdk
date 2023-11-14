/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockPostingAccountReservationsType } from './BlockPostingAccountReservationsType';
import type { CateringEventPostingsType } from './CateringEventPostingsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Object for retrieving catering events postings.
 * @export
 * @interface CateringEventPostingsDetail
 */
export interface CateringEventPostingsDetail {
    /**
     *
     * @type {CateringEventPostingsType}
     * @memberof CateringEventPostingsDetail
     */
    cateringEventPostings?: CateringEventPostingsType;
    /**
     *
     * @type {Links}
     * @memberof CateringEventPostingsDetail
     */
    links?: Links;
    /**
     *
     * @type {BlockPostingAccountReservationsType}
     * @memberof CateringEventPostingsDetail
     */
    postingMasterReservations?: BlockPostingAccountReservationsType;
    /**
     *
     * @type {WarningsType}
     * @memberof CateringEventPostingsDetail
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CateringEventPostingsDetail interface.
 */
export declare function instanceOfCateringEventPostingsDetail(value: object): boolean;
export declare function CateringEventPostingsDetailFromJSON(json: any): CateringEventPostingsDetail;
export declare function CateringEventPostingsDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringEventPostingsDetail;
export declare function CateringEventPostingsDetailToJSON(value?: CateringEventPostingsDetail | null): any;