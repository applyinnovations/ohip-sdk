/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { WashCodeDetailType } from './WashCodeDetailType';
/**
 * A representation of the information contained by a Wash Code.
 * @export
 * @interface WashCodeType
 */
export interface WashCodeType {
    /**
     * Wash Code.
     * @type {string}
     * @memberof WashCodeType
     */
    code?: string;
    /**
     * Description of the Wash Code.
     * @type {string}
     * @memberof WashCodeType
     */
    description?: string;
    /**
     * Hotel Code to which the Wash Code belongs to.
     * @type {string}
     * @memberof WashCodeType
     */
    hotelId?: string;
    /**
     * Wash Code Detail for a single entry.
     * @type {Array<WashCodeDetailType>}
     * @memberof WashCodeType
     */
    washCodeDetails?: Array<WashCodeDetailType>;
}
/**
 * Check if a given object implements the WashCodeType interface.
 */
export declare function instanceOfWashCodeType(value: object): boolean;
export declare function WashCodeTypeFromJSON(json: any): WashCodeType;
export declare function WashCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WashCodeType;
export declare function WashCodeTypeToJSON(value?: WashCodeType | null): any;