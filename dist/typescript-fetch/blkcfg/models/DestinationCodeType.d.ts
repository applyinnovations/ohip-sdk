/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TranslationTextType2000 } from './TranslationTextType2000';
/**
 * Contains Common Master configuration detail.
 * @export
 * @interface DestinationCodeType
 */
export interface DestinationCodeType {
    /**
     * Common Master unique code.
     * @type {string}
     * @memberof DestinationCodeType
     */
    code?: string;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof DestinationCodeType
     */
    description?: TranslationTextType2000;
    /**
     * Common Master record sequence number.
     * @type {number}
     * @memberof DestinationCodeType
     */
    displayOrder?: number;
}
/**
 * Check if a given object implements the DestinationCodeType interface.
 */
export declare function instanceOfDestinationCodeType(value: object): boolean;
export declare function DestinationCodeTypeFromJSON(json: any): DestinationCodeType;
export declare function DestinationCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DestinationCodeType;
export declare function DestinationCodeTypeToJSON(value?: DestinationCodeType | null): any;
