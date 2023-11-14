/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockRankingsType } from './BlockRankingsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object for creating Block Rankings.
 * @export
 * @interface BlockRankingsCriteria
 */
export interface BlockRankingsCriteria {
    /**
     *
     * @type {BlockRankingsType}
     * @memberof BlockRankingsCriteria
     */
    blockRankings?: BlockRankingsType;
    /**
     *
     * @type {Links}
     * @memberof BlockRankingsCriteria
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof BlockRankingsCriteria
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the BlockRankingsCriteria interface.
 */
export declare function instanceOfBlockRankingsCriteria(value: object): boolean;
export declare function BlockRankingsCriteriaFromJSON(json: any): BlockRankingsCriteria;
export declare function BlockRankingsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockRankingsCriteria;
export declare function BlockRankingsCriteriaToJSON(value?: BlockRankingsCriteria | null): any;