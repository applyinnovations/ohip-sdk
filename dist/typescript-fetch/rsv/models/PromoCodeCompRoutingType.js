"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoCodeCompRoutingTypeToJSON = exports.PromoCodeCompRoutingTypeFromJSONTyped = exports.PromoCodeCompRoutingTypeFromJSON = exports.instanceOfPromoCodeCompRoutingType = void 0;
const runtime_1 = require("../runtime");
const AuthorizerInfoType_1 = require("./AuthorizerInfoType");
const PromoCodeCompRoutingTypeDuration_1 = require("./PromoCodeCompRoutingTypeDuration");
/**
 * Check if a given object implements the PromoCodeCompRoutingType interface.
 */
function instanceOfPromoCodeCompRoutingType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPromoCodeCompRoutingType = instanceOfPromoCodeCompRoutingType;
function PromoCodeCompRoutingTypeFromJSON(json) {
    return PromoCodeCompRoutingTypeFromJSONTyped(json, false);
}
exports.PromoCodeCompRoutingTypeFromJSON = PromoCodeCompRoutingTypeFromJSON;
function PromoCodeCompRoutingTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'authorizerInfo': !(0, runtime_1.exists)(json, 'authorizerInfo') ? undefined : (0, AuthorizerInfoType_1.AuthorizerInfoTypeFromJSON)(json['authorizerInfo']),
        'comments': !(0, runtime_1.exists)(json, 'comments') ? undefined : json['comments'],
        'compPreApprovalRequired': !(0, runtime_1.exists)(json, 'compPreApprovalRequired') ? undefined : json['compPreApprovalRequired'],
        'covers': !(0, runtime_1.exists)(json, 'covers') ? undefined : json['covers'],
        'creditLimit': !(0, runtime_1.exists)(json, 'creditLimit') ? undefined : json['creditLimit'],
        'duration': !(0, runtime_1.exists)(json, 'duration') ? undefined : (0, PromoCodeCompRoutingTypeDuration_1.PromoCodeCompRoutingTypeDurationFromJSON)(json['duration']),
        'folioNo': !(0, runtime_1.exists)(json, 'folioNo') ? undefined : json['folioNo'],
        'membershipId': !(0, runtime_1.exists)(json, 'membershipId') ? undefined : json['membershipId'],
        'percentageLimit': !(0, runtime_1.exists)(json, 'percentageLimit') ? undefined : json['percentageLimit'],
        'promotionCode': !(0, runtime_1.exists)(json, 'promotionCode') ? undefined : json['promotionCode'],
        'promptForAuthorizer': !(0, runtime_1.exists)(json, 'promptForAuthorizer') ? undefined : json['promptForAuthorizer'],
    };
}
exports.PromoCodeCompRoutingTypeFromJSONTyped = PromoCodeCompRoutingTypeFromJSONTyped;
function PromoCodeCompRoutingTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'authorizerInfo': (0, AuthorizerInfoType_1.AuthorizerInfoTypeToJSON)(value.authorizerInfo),
        'comments': value.comments,
        'compPreApprovalRequired': value.compPreApprovalRequired,
        'covers': value.covers,
        'creditLimit': value.creditLimit,
        'duration': (0, PromoCodeCompRoutingTypeDuration_1.PromoCodeCompRoutingTypeDurationToJSON)(value.duration),
        'folioNo': value.folioNo,
        'membershipId': value.membershipId,
        'percentageLimit': value.percentageLimit,
        'promotionCode': value.promotionCode,
        'promptForAuthorizer': value.promptForAuthorizer,
    };
}
exports.PromoCodeCompRoutingTypeToJSON = PromoCodeCompRoutingTypeToJSON;
