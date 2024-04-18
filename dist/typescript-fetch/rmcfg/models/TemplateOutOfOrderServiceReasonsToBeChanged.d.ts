/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { TemplateOutOfOrderServiceReasonType } from './TemplateOutOfOrderServiceReasonType';
import type { WarningType } from './WarningType';
/**
 * Request object for modifying template out of order/service reasons.
 * @export
 * @interface TemplateOutOfOrderServiceReasonsToBeChanged
 */
export interface TemplateOutOfOrderServiceReasonsToBeChanged {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TemplateOutOfOrderServiceReasonsToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Template of out of order/service reason details.
     * @type {Array<TemplateOutOfOrderServiceReasonType>}
     * @memberof TemplateOutOfOrderServiceReasonsToBeChanged
     */
    templateOutOfOrderServiceReasons?: Array<TemplateOutOfOrderServiceReasonType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateOutOfOrderServiceReasonsToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TemplateOutOfOrderServiceReasonsToBeChanged interface.
 */
export declare function instanceOfTemplateOutOfOrderServiceReasonsToBeChanged(value: object): boolean;
export declare function TemplateOutOfOrderServiceReasonsToBeChangedFromJSON(json: any): TemplateOutOfOrderServiceReasonsToBeChanged;
export declare function TemplateOutOfOrderServiceReasonsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateOutOfOrderServiceReasonsToBeChanged;
export declare function TemplateOutOfOrderServiceReasonsToBeChangedToJSON(value?: TemplateOutOfOrderServiceReasonsToBeChanged | null): any;