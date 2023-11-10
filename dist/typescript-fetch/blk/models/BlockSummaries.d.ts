/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockSummariesType } from './BlockSummariesType';
import type { Links } from './Links';
import type { MasterInfoType } from './MasterInfoType';
import type { WarningsType } from './WarningsType';
/**
 * It also contains Success,Warnings and Errors related to this operation.
 * @export
 * @interface BlockSummaries
 */
export interface BlockSummaries {
    /**
     *
     * @type {BlockSummariesType}
     * @memberof BlockSummaries
     */
    blockSummaries?: BlockSummariesType;
    /**
     *
     * @type {Links}
     * @memberof BlockSummaries
     */
    links?: Links;
    /**
     * Refer to Generic common types document.
     * @type {Array<MasterInfoType>}
     * @memberof BlockSummaries
     */
    masterInfoList?: Array<MasterInfoType>;
    /**
     *
     * @type {WarningsType}
     * @memberof BlockSummaries
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the BlockSummaries interface.
 */
export declare function instanceOfBlockSummaries(value: object): boolean;
export declare function BlockSummariesFromJSON(json: any): BlockSummaries;
export declare function BlockSummariesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockSummaries;
export declare function BlockSummariesToJSON(value?: BlockSummaries | null): any;
