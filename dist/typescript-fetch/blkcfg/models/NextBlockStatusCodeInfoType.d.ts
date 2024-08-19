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
/**
 * Information of next block status code.
 * @export
 * @interface NextBlockStatusCodeInfoType
 */
export interface NextBlockStatusCodeInfoType {
    /**
     * Order of next block status code
     * @type {number}
     * @memberof NextBlockStatusCodeInfoType
     */
    order?: number;
    /**
     * Next block status code.
     * @type {string}
     * @memberof NextBlockStatusCodeInfoType
     */
    status?: string;
}
/**
 * Check if a given object implements the NextBlockStatusCodeInfoType interface.
 */
export declare function instanceOfNextBlockStatusCodeInfoType(value: object): boolean;
export declare function NextBlockStatusCodeInfoTypeFromJSON(json: any): NextBlockStatusCodeInfoType;
export declare function NextBlockStatusCodeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NextBlockStatusCodeInfoType;
export declare function NextBlockStatusCodeInfoTypeToJSON(value?: NextBlockStatusCodeInfoType | null): any;
