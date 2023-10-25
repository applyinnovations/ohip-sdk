/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { HousekeepingCreditRuleType } from './HousekeepingCreditRuleType';
import {
    HousekeepingCreditRuleTypeFromJSON,
    HousekeepingCreditRuleTypeFromJSONTyped,
    HousekeepingCreditRuleTypeToJSON,
} from './HousekeepingCreditRuleType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MasterInfoType } from './MasterInfoType';
import {
    MasterInfoTypeFromJSON,
    MasterInfoTypeFromJSONTyped,
    MasterInfoTypeToJSON,
} from './MasterInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching housekeeping credit rules.
 * @export
 * @interface HousekeepingCreditRulesDetails
 */
export interface HousekeepingCreditRulesDetails {
    /**
     * The information of housekeeping credit rule for configuration.
     * @type {Array<HousekeepingCreditRuleType>}
     * @memberof HousekeepingCreditRulesDetails
     */
    creditRules?: Array<HousekeepingCreditRuleType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof HousekeepingCreditRulesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Refer to Generic common types document.
     * @type {Array<MasterInfoType>}
     * @memberof HousekeepingCreditRulesDetails
     */
    masterInfoList?: Array<MasterInfoType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HousekeepingCreditRulesDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the HousekeepingCreditRulesDetails interface.
 */
export function instanceOfHousekeepingCreditRulesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingCreditRulesDetailsFromJSON(json: any): HousekeepingCreditRulesDetails {
    return HousekeepingCreditRulesDetailsFromJSONTyped(json, false);
}

export function HousekeepingCreditRulesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingCreditRulesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'creditRules': !exists(json, 'creditRules') ? undefined : ((json['creditRules'] as Array<any>).map(HousekeepingCreditRuleTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'masterInfoList': !exists(json, 'masterInfoList') ? undefined : ((json['masterInfoList'] as Array<any>).map(MasterInfoTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function HousekeepingCreditRulesDetailsToJSON(value?: HousekeepingCreditRulesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'creditRules': value.creditRules === undefined ? undefined : ((value.creditRules as Array<any>).map(HousekeepingCreditRuleTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'masterInfoList': value.masterInfoList === undefined ? undefined : ((value.masterInfoList as Array<any>).map(MasterInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

