/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelTrxCodesAccessType } from './HotelTrxCodesAccessType';
import type { RoleLevelType } from './RoleLevelType';
/**
 * Role having access to set of transaction codes
 * @export
 * @interface TrxCodeAccessRoleType
 */
export interface TrxCodeAccessRoleType {
    /**
     * Role code
     * @type {string}
     * @memberof TrxCodeAccessRoleType
     */
    code?: string;
    /**
     * Transaction Codes associated with particular Hotel
     * @type {Array<HotelTrxCodesAccessType>}
     * @memberof TrxCodeAccessRoleType
     */
    hotel?: Array<HotelTrxCodesAccessType>;
    /**
     *
     * @type {RoleLevelType}
     * @memberof TrxCodeAccessRoleType
     */
    level?: RoleLevelType;
    /**
     * Role level code, for Chain Level code Level code will be Chain Code the role belongs to and for Hotel level role it will b the Hotel Code the role belongs to.
     * @type {string}
     * @memberof TrxCodeAccessRoleType
     */
    levelCode?: string;
}
/**
 * Check if a given object implements the TrxCodeAccessRoleType interface.
 */
export declare function instanceOfTrxCodeAccessRoleType(value: object): boolean;
export declare function TrxCodeAccessRoleTypeFromJSON(json: any): TrxCodeAccessRoleType;
export declare function TrxCodeAccessRoleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrxCodeAccessRoleType;
export declare function TrxCodeAccessRoleTypeToJSON(value?: TrxCodeAccessRoleType | null): any;