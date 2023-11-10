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
import type { Links } from './Links';
import type { TrxCodeAccessRolesType } from './TrxCodeAccessRolesType';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface SetTransactionCodeAccessRolesRequest
 */
export interface SetTransactionCodeAccessRolesRequest {
    /**
     *
     * @type {Links}
     * @memberof SetTransactionCodeAccessRolesRequest
     */
    links?: Links;
    /**
     *
     * @type {TrxCodeAccessRolesType}
     * @memberof SetTransactionCodeAccessRolesRequest
     */
    transactionAccessRoles?: TrxCodeAccessRolesType;
    /**
     *
     * @type {WarningsType}
     * @memberof SetTransactionCodeAccessRolesRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the SetTransactionCodeAccessRolesRequest interface.
 */
export declare function instanceOfSetTransactionCodeAccessRolesRequest(value: object): boolean;
export declare function SetTransactionCodeAccessRolesRequestFromJSON(json: any): SetTransactionCodeAccessRolesRequest;
export declare function SetTransactionCodeAccessRolesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetTransactionCodeAccessRolesRequest;
export declare function SetTransactionCodeAccessRolesRequestToJSON(value?: SetTransactionCodeAccessRolesRequest | null): any;
