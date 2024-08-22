/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
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
