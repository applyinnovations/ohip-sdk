/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AutoSettlementType } from './AutoSettlementType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request type for batch auto settlement.
 * @export
 * @interface BatchAutoSettlementCriteria
 */
export interface BatchAutoSettlementCriteria {
    /**
     *
     * @type {AutoSettlementType}
     * @memberof BatchAutoSettlementCriteria
     */
    criteria?: AutoSettlementType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BatchAutoSettlementCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BatchAutoSettlementCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BatchAutoSettlementCriteria interface.
 */
export declare function instanceOfBatchAutoSettlementCriteria(value: object): boolean;
export declare function BatchAutoSettlementCriteriaFromJSON(json: any): BatchAutoSettlementCriteria;
export declare function BatchAutoSettlementCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAutoSettlementCriteria;
export declare function BatchAutoSettlementCriteriaToJSON(value?: BatchAutoSettlementCriteria | null): any;