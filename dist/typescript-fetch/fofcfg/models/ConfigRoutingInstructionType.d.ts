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
import type { TimeSpanDaysOfWeekType } from './TimeSpanDaysOfWeekType';
import type { TrxCodesInfoType } from './TrxCodesInfoType';
/**
 * Routing limit can be one of the three: Covers, Limit, Percent. It is not mandatory to set value of either. This field is available when the Cashiering>Routing Limits application function is set to Y.
 * @export
 * @interface ConfigRoutingInstructionType
 */
export interface ConfigRoutingInstructionType {
    /**
     * Code is used to identify a trx code arrangement.
     * @type {string}
     * @memberof ConfigRoutingInstructionType
     */
    code?: string;
    /**
     * Determines if this is a comp routing code or a routing code.
     * @type {boolean}
     * @memberof ConfigRoutingInstructionType
     */
    compAccounting?: boolean;
    /**
     * Number of covers for this routing instruction. Null means no value has been specified.
     * @type {number}
     * @memberof ConfigRoutingInstructionType
     */
    covers?: number;
    /**
     * Signifies whether a separate routing instruction has to be generated for each day of the stay.
     * @type {boolean}
     * @memberof ConfigRoutingInstructionType
     */
    daily?: boolean;
    /**
     *
     * @type {TimeSpanDaysOfWeekType}
     * @memberof ConfigRoutingInstructionType
     */
    daysOfWeek?: TimeSpanDaysOfWeekType;
    /**
     * Description of the trx code arrangement code.
     * @type {string}
     * @memberof ConfigRoutingInstructionType
     */
    description?: string;
    /**
     * Identifies the hotel code for which the trx code arrangement is specified.
     * @type {string}
     * @memberof ConfigRoutingInstructionType
     */
    hotelId?: string;
    /**
     * Reservation to inherit Rate Code from Authorizer.
     * @type {boolean}
     * @memberof ConfigRoutingInstructionType
     */
    inheritAuthRateCode?: boolean;
    /**
     * Allowable credit amount for this routing instruction. Null means no value has been specified.
     * @type {number}
     * @memberof ConfigRoutingInstructionType
     */
    limit?: number;
    /**
     * The routing limit percentage allowed for this routing instruction. Null means no value has been specified.
     * @type {number}
     * @memberof ConfigRoutingInstructionType
     */
    percent?: number;
    /**
     *
     * @type {TrxCodesInfoType}
     * @memberof ConfigRoutingInstructionType
     */
    transactionCodes?: TrxCodesInfoType;
}
/**
 * Check if a given object implements the ConfigRoutingInstructionType interface.
 */
export declare function instanceOfConfigRoutingInstructionType(value: object): boolean;
export declare function ConfigRoutingInstructionTypeFromJSON(json: any): ConfigRoutingInstructionType;
export declare function ConfigRoutingInstructionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigRoutingInstructionType;
export declare function ConfigRoutingInstructionTypeToJSON(value?: ConfigRoutingInstructionType | null): any;
