/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { CommissionCodeType } from './CommissionCodeType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { ProfileTypeType } from './ProfileTypeType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Agent or source commission information.
 * @export
 * @interface AgentInfoType
 */
export interface AgentInfoType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof AgentInfoType
     */
    agentId?: UniqueIDType;
    /**
     * Alternate name of the agent or source profile.
     * @type {string}
     * @memberof AgentInfoType
     */
    alternateName?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof AgentInfoType
     */
    bankAccountId?: UniqueIDType;
    /**
     * City of the travel agency or source profile.
     * @type {string}
     * @memberof AgentInfoType
     */
    city?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof AgentInfoType
     */
    commissionAmount?: CurrencyAmountType;
    /**
     *
     * @type {CommissionCodeType}
     * @memberof AgentInfoType
     */
    commissionCode?: CommissionCodeType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof AgentInfoType
     */
    holdReason?: CodeDescriptionType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof AgentInfoType
     */
    iATANo?: UniqueIDType;
    /**
     * Travel agent or source profile name.
     * @type {string}
     * @memberof AgentInfoType
     */
    name?: string;
    /**
     * Whether this agent/source has been paid or will be paid for commission.
     * @type {boolean}
     * @memberof AgentInfoType
     */
    onCommission?: boolean;
    /**
     * When set to true, commission for all the reservations associated with this agent is flagged as on hold.
     * @type {boolean}
     * @memberof AgentInfoType
     */
    onHold?: boolean;
    /**
     *
     * @type {ProfileTypeType}
     * @memberof AgentInfoType
     */
    profileType?: ProfileTypeType;
}
/**
 * Check if a given object implements the AgentInfoType interface.
 */
export declare function instanceOfAgentInfoType(value: object): boolean;
export declare function AgentInfoTypeFromJSON(json: any): AgentInfoType;
export declare function AgentInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgentInfoType;
export declare function AgentInfoTypeToJSON(value?: AgentInfoType | null): any;