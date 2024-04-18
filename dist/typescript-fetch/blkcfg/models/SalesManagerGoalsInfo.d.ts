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
import type { InstanceLink } from './InstanceLink';
import type { SalesManagerGoalType } from './SalesManagerGoalType';
import type { WarningType } from './WarningType';
/**
 * You can use this API to retrieve individual Sales Manager Goals for a hotel, you can narrow the results using different search criteria
 * @export
 * @interface SalesManagerGoalsInfo
 */
export interface SalesManagerGoalsInfo {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof SalesManagerGoalsInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Detail Information about Sales Manager's goal.
     * @type {Array<SalesManagerGoalType>}
     * @memberof SalesManagerGoalsInfo
     */
    salesManagerGoals?: Array<SalesManagerGoalType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof SalesManagerGoalsInfo
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the SalesManagerGoalsInfo interface.
 */
export declare function instanceOfSalesManagerGoalsInfo(value: object): boolean;
export declare function SalesManagerGoalsInfoFromJSON(json: any): SalesManagerGoalsInfo;
export declare function SalesManagerGoalsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesManagerGoalsInfo;
export declare function SalesManagerGoalsInfoToJSON(value?: SalesManagerGoalsInfo | null): any;