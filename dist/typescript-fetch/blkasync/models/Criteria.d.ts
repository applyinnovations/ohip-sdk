/**
 * OPERA Cloud Block Reservation Asynchronous API
 * APIs to cater Block Reservation related asynchronous functionality in OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Request object for fetching block allocation summary asynchronously.
 * @export
 * @interface Criteria
 */
export interface Criteria {
    /**
     *
     * @type {Date}
     * @memberof Criteria
     */
    endDate?: Date;
    /**
     *
     * @type {string}
     * @memberof Criteria
     */
    endLastModifiedDate?: string;
    /**
     *
     * @type {Date}
     * @memberof Criteria
     */
    occupancyDate?: Date;
    /**
     *
     * @type {Date}
     * @memberof Criteria
     */
    startDate?: Date;
    /**
     *
     * @type {string}
     * @memberof Criteria
     */
    startLastModifiedDate?: string;
}
/**
 * Check if a given object implements the Criteria interface.
 */
export declare function instanceOfCriteria(value: object): boolean;
export declare function CriteriaFromJSON(json: any): Criteria;
export declare function CriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Criteria;
export declare function CriteriaToJSON(value?: Criteria | null): any;