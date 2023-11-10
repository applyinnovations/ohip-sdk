/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ARAccountStatusType } from './ARAccountStatusType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Accounts Receivabales Account details type charged for batched posting.
 * @export
 * @interface ARAccountShortInfoType
 */
export interface ARAccountShortInfoType {
    /**
     * Name of the AR Account.
     * @type {string}
     * @memberof ARAccountShortInfoType
     */
    accountName?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ARAccountShortInfoType
     */
    accountId?: UniqueIDType;
    /**
     * The Account Number for the Account.
     * @type {string}
     * @memberof ARAccountShortInfoType
     */
    accountNo?: string;
    /**
     *
     * @type {ARAccountStatusType}
     * @memberof ARAccountShortInfoType
     */
    status?: ARAccountStatusType;
}
/**
 * Check if a given object implements the ARAccountShortInfoType interface.
 */
export declare function instanceOfARAccountShortInfoType(value: object): boolean;
export declare function ARAccountShortInfoTypeFromJSON(json: any): ARAccountShortInfoType;
export declare function ARAccountShortInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARAccountShortInfoType;
export declare function ARAccountShortInfoTypeToJSON(value?: ARAccountShortInfoType | null): any;
