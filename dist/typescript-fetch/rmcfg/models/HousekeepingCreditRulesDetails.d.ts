/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HousekeepingCreditRulesType } from './HousekeepingCreditRulesType';
import type { Links } from './Links';
import type { MasterInfoType } from './MasterInfoType';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching housekeeping credit rules.
 * @export
 * @interface HousekeepingCreditRulesDetails
 */
export interface HousekeepingCreditRulesDetails {
    /**
     *
     * @type {HousekeepingCreditRulesType}
     * @memberof HousekeepingCreditRulesDetails
     */
    creditRules?: HousekeepingCreditRulesType;
    /**
     *
     * @type {Links}
     * @memberof HousekeepingCreditRulesDetails
     */
    links?: Links;
    /**
     * Refer to Generic common types document.
     * @type {Array<MasterInfoType>}
     * @memberof HousekeepingCreditRulesDetails
     */
    masterInfoList?: Array<MasterInfoType>;
    /**
     *
     * @type {WarningsType}
     * @memberof HousekeepingCreditRulesDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the HousekeepingCreditRulesDetails interface.
 */
export declare function instanceOfHousekeepingCreditRulesDetails(value: object): boolean;
export declare function HousekeepingCreditRulesDetailsFromJSON(json: any): HousekeepingCreditRulesDetails;
export declare function HousekeepingCreditRulesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingCreditRulesDetails;
export declare function HousekeepingCreditRulesDetailsToJSON(value?: HousekeepingCreditRulesDetails | null): any;
