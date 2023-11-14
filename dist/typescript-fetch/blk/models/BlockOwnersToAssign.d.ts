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
import type { Links } from './Links';
import type { SetBlockOwnersType } from './SetBlockOwnersType';
import type { WarningsType } from './WarningsType';
/**
 * Request object to assign block owners.
 * @export
 * @interface BlockOwnersToAssign
 */
export interface BlockOwnersToAssign {
    /**
     *
     * @type {SetBlockOwnersType}
     * @memberof BlockOwnersToAssign
     */
    criteria?: SetBlockOwnersType;
    /**
     *
     * @type {Links}
     * @memberof BlockOwnersToAssign
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof BlockOwnersToAssign
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the BlockOwnersToAssign interface.
 */
export declare function instanceOfBlockOwnersToAssign(value: object): boolean;
export declare function BlockOwnersToAssignFromJSON(json: any): BlockOwnersToAssign;
export declare function BlockOwnersToAssignFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockOwnersToAssign;
export declare function BlockOwnersToAssignToJSON(value?: BlockOwnersToAssign | null): any;