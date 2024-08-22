/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AutoFolioSettlementTypeType } from './AutoFolioSettlementTypeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for creating Auto Folio Settlement Types.
 * @export
 * @interface AutoFolioSettlementTypesCriteria
 */
export interface AutoFolioSettlementTypesCriteria {
    /**
     * List of Auto Folio Settlement Types.
     * @type {Array<AutoFolioSettlementTypeType>}
     * @memberof AutoFolioSettlementTypesCriteria
     */
    autoFolioSettlementTypes?: Array<AutoFolioSettlementTypeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof AutoFolioSettlementTypesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AutoFolioSettlementTypesCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the AutoFolioSettlementTypesCriteria interface.
 */
export declare function instanceOfAutoFolioSettlementTypesCriteria(value: object): boolean;
export declare function AutoFolioSettlementTypesCriteriaFromJSON(json: any): AutoFolioSettlementTypesCriteria;
export declare function AutoFolioSettlementTypesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoFolioSettlementTypesCriteria;
export declare function AutoFolioSettlementTypesCriteriaToJSON(value?: AutoFolioSettlementTypesCriteria | null): any;
