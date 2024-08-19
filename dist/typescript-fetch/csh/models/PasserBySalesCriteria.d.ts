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
import type { InstanceLink } from './InstanceLink';
import type { PasserByCriteriaType } from './PasserByCriteriaType';
import type { WarningType } from './WarningType';
/**
 * Request to post a set of charges, payments and generate a bill for a PasserBy or for the Post-It functionality . A PasserBy is someone who is not staying at the Property. A PasserBy transaction requires a Profile in Opera for whom the the folio is being created.
 * @export
 * @interface PasserBySalesCriteria
 */
export interface PasserBySalesCriteria {
    /**
     *
     * @type {PasserByCriteriaType}
     * @memberof PasserBySalesCriteria
     */
    criteria?: PasserByCriteriaType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof PasserBySalesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PasserBySalesCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the PasserBySalesCriteria interface.
 */
export declare function instanceOfPasserBySalesCriteria(value: object): boolean;
export declare function PasserBySalesCriteriaFromJSON(json: any): PasserBySalesCriteria;
export declare function PasserBySalesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): PasserBySalesCriteria;
export declare function PasserBySalesCriteriaToJSON(value?: PasserBySalesCriteria | null): any;
