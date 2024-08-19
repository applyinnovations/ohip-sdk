/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ECertificateInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ECertificateInfoType{}

// ECertificateInfoType E-Certificates details.
type ECertificateInfoType struct {
	// Award type to which the certificate is linked to.
	AwardCode *string `json:"awardCode,omitempty"`
	// Summary of Benefits attached to this ECertificate.
	BenefitSummary *string `json:"benefitSummary,omitempty"`
	// User defined certificate code.
	CertificateType *string `json:"certificateType,omitempty"`
	Cost *CurrencyAmountType `json:"cost,omitempty"`
	// Description about the certificate.
	Description *string `json:"description,omitempty"`
	Hotels *ECertificateInfoTypeHotels `json:"hotels,omitempty"`
	// Label for the certificate.
	Label *string `json:"label,omitempty"`
	// Detail description about the certificate.
	LongDescription *string `json:"longDescription,omitempty"`
	// Number of times e-certificate can be extended.
	MaxExtensionAllowed *int32 `json:"maxExtensionAllowed,omitempty"`
	// Membership type to which the certificate is linked to.
	MembershipType *string `json:"membershipType,omitempty"`
	// Promotion code to which certificate is attached to.
	PromotionCode *string `json:"promotionCode,omitempty"`
	UsageCriteria *ECertificateUsageCriteriaType `json:"usageCriteria,omitempty"`
	Value *CurrencyAmountType `json:"value,omitempty"`
	// Voucher benefit code attached to the certificate.
	VoucherBenefitCode *string `json:"voucherBenefitCode,omitempty"`
}

// NewECertificateInfoType instantiates a new ECertificateInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewECertificateInfoType() *ECertificateInfoType {
	this := ECertificateInfoType{}
	return &this
}

// NewECertificateInfoTypeWithDefaults instantiates a new ECertificateInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewECertificateInfoTypeWithDefaults() *ECertificateInfoType {
	this := ECertificateInfoType{}
	return &this
}

// GetAwardCode returns the AwardCode field value if set, zero value otherwise.
func (o *ECertificateInfoType) GetAwardCode() string {
	if o == nil || IsNil(o.AwardCode) {
		var ret string
		return ret
	}
	return *o.AwardCode
}

// GetAwardCodeOk returns a tuple with the AwardCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoType) GetAwardCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AwardCode) {
		return nil, false
	}
	return o.AwardCode, true
}

// HasAwardCode returns a boolean if a field has been set.
func (o *ECertificateInfoType) HasAwardCode() bool {
	if o != nil && !IsNil(o.AwardCode) {
		return true
	}

	return false
}

// SetAwardCode gets a reference to the given string and assigns it to the AwardCode field.
func (o *ECertificateInfoType) SetAwardCode(v string) {
	o.AwardCode = &v
}

// GetBenefitSummary returns the BenefitSummary field value if set, zero value otherwise.
func (o *ECertificateInfoType) GetBenefitSummary() string {
	if o == nil || IsNil(o.BenefitSummary) {
		var ret string
		return ret
	}
	return *o.BenefitSummary
}

// GetBenefitSummaryOk returns a tuple with the BenefitSummary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoType) GetBenefitSummaryOk() (*string, bool) {
	if o == nil || IsNil(o.BenefitSummary) {
		return nil, false
	}
	return o.BenefitSummary, true
}

// HasBenefitSummary returns a boolean if a field has been set.
func (o *ECertificateInfoType) HasBenefitSummary() bool {
	if o != nil && !IsNil(o.BenefitSummary) {
		return true
	}

	return false
}

// SetBenefitSummary gets a reference to the given string and assigns it to the BenefitSummary field.
func (o *ECertificateInfoType) SetBenefitSummary(v string) {
	o.BenefitSummary = &v
}

// GetCertificateType returns the CertificateType field value if set, zero value otherwise.
func (o *ECertificateInfoType) GetCertificateType() string {
	if o == nil || IsNil(o.CertificateType) {
		var ret string
		return ret
	}
	return *o.CertificateType
}

// GetCertificateTypeOk returns a tuple with the CertificateType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoType) GetCertificateTypeOk() (*string, bool) {
	if o == nil || IsNil(o.CertificateType) {
		return nil, false
	}
	return o.CertificateType, true
}

// HasCertificateType returns a boolean if a field has been set.
func (o *ECertificateInfoType) HasCertificateType() bool {
	if o != nil && !IsNil(o.CertificateType) {
		return true
	}

	return false
}

// SetCertificateType gets a reference to the given string and assigns it to the CertificateType field.
func (o *ECertificateInfoType) SetCertificateType(v string) {
	o.CertificateType = &v
}

// GetCost returns the Cost field value if set, zero value otherwise.
func (o *ECertificateInfoType) GetCost() CurrencyAmountType {
	if o == nil || IsNil(o.Cost) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Cost
}

// GetCostOk returns a tuple with the Cost field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoType) GetCostOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Cost) {
		return nil, false
	}
	return o.Cost, true
}

// HasCost returns a boolean if a field has been set.
func (o *ECertificateInfoType) HasCost() bool {
	if o != nil && !IsNil(o.Cost) {
		return true
	}

	return false
}

// SetCost gets a reference to the given CurrencyAmountType and assigns it to the Cost field.
func (o *ECertificateInfoType) SetCost(v CurrencyAmountType) {
	o.Cost = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ECertificateInfoType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ECertificateInfoType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ECertificateInfoType) SetDescription(v string) {
	o.Description = &v
}

// GetHotels returns the Hotels field value if set, zero value otherwise.
func (o *ECertificateInfoType) GetHotels() ECertificateInfoTypeHotels {
	if o == nil || IsNil(o.Hotels) {
		var ret ECertificateInfoTypeHotels
		return ret
	}
	return *o.Hotels
}

// GetHotelsOk returns a tuple with the Hotels field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoType) GetHotelsOk() (*ECertificateInfoTypeHotels, bool) {
	if o == nil || IsNil(o.Hotels) {
		return nil, false
	}
	return o.Hotels, true
}

// HasHotels returns a boolean if a field has been set.
func (o *ECertificateInfoType) HasHotels() bool {
	if o != nil && !IsNil(o.Hotels) {
		return true
	}

	return false
}

// SetHotels gets a reference to the given ECertificateInfoTypeHotels and assigns it to the Hotels field.
func (o *ECertificateInfoType) SetHotels(v ECertificateInfoTypeHotels) {
	o.Hotels = &v
}

// GetLabel returns the Label field value if set, zero value otherwise.
func (o *ECertificateInfoType) GetLabel() string {
	if o == nil || IsNil(o.Label) {
		var ret string
		return ret
	}
	return *o.Label
}

// GetLabelOk returns a tuple with the Label field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoType) GetLabelOk() (*string, bool) {
	if o == nil || IsNil(o.Label) {
		return nil, false
	}
	return o.Label, true
}

// HasLabel returns a boolean if a field has been set.
func (o *ECertificateInfoType) HasLabel() bool {
	if o != nil && !IsNil(o.Label) {
		return true
	}

	return false
}

// SetLabel gets a reference to the given string and assigns it to the Label field.
func (o *ECertificateInfoType) SetLabel(v string) {
	o.Label = &v
}

// GetLongDescription returns the LongDescription field value if set, zero value otherwise.
func (o *ECertificateInfoType) GetLongDescription() string {
	if o == nil || IsNil(o.LongDescription) {
		var ret string
		return ret
	}
	return *o.LongDescription
}

// GetLongDescriptionOk returns a tuple with the LongDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoType) GetLongDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.LongDescription) {
		return nil, false
	}
	return o.LongDescription, true
}

// HasLongDescription returns a boolean if a field has been set.
func (o *ECertificateInfoType) HasLongDescription() bool {
	if o != nil && !IsNil(o.LongDescription) {
		return true
	}

	return false
}

// SetLongDescription gets a reference to the given string and assigns it to the LongDescription field.
func (o *ECertificateInfoType) SetLongDescription(v string) {
	o.LongDescription = &v
}

// GetMaxExtensionAllowed returns the MaxExtensionAllowed field value if set, zero value otherwise.
func (o *ECertificateInfoType) GetMaxExtensionAllowed() int32 {
	if o == nil || IsNil(o.MaxExtensionAllowed) {
		var ret int32
		return ret
	}
	return *o.MaxExtensionAllowed
}

// GetMaxExtensionAllowedOk returns a tuple with the MaxExtensionAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoType) GetMaxExtensionAllowedOk() (*int32, bool) {
	if o == nil || IsNil(o.MaxExtensionAllowed) {
		return nil, false
	}
	return o.MaxExtensionAllowed, true
}

// HasMaxExtensionAllowed returns a boolean if a field has been set.
func (o *ECertificateInfoType) HasMaxExtensionAllowed() bool {
	if o != nil && !IsNil(o.MaxExtensionAllowed) {
		return true
	}

	return false
}

// SetMaxExtensionAllowed gets a reference to the given int32 and assigns it to the MaxExtensionAllowed field.
func (o *ECertificateInfoType) SetMaxExtensionAllowed(v int32) {
	o.MaxExtensionAllowed = &v
}

// GetMembershipType returns the MembershipType field value if set, zero value otherwise.
func (o *ECertificateInfoType) GetMembershipType() string {
	if o == nil || IsNil(o.MembershipType) {
		var ret string
		return ret
	}
	return *o.MembershipType
}

// GetMembershipTypeOk returns a tuple with the MembershipType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoType) GetMembershipTypeOk() (*string, bool) {
	if o == nil || IsNil(o.MembershipType) {
		return nil, false
	}
	return o.MembershipType, true
}

// HasMembershipType returns a boolean if a field has been set.
func (o *ECertificateInfoType) HasMembershipType() bool {
	if o != nil && !IsNil(o.MembershipType) {
		return true
	}

	return false
}

// SetMembershipType gets a reference to the given string and assigns it to the MembershipType field.
func (o *ECertificateInfoType) SetMembershipType(v string) {
	o.MembershipType = &v
}

// GetPromotionCode returns the PromotionCode field value if set, zero value otherwise.
func (o *ECertificateInfoType) GetPromotionCode() string {
	if o == nil || IsNil(o.PromotionCode) {
		var ret string
		return ret
	}
	return *o.PromotionCode
}

// GetPromotionCodeOk returns a tuple with the PromotionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoType) GetPromotionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PromotionCode) {
		return nil, false
	}
	return o.PromotionCode, true
}

// HasPromotionCode returns a boolean if a field has been set.
func (o *ECertificateInfoType) HasPromotionCode() bool {
	if o != nil && !IsNil(o.PromotionCode) {
		return true
	}

	return false
}

// SetPromotionCode gets a reference to the given string and assigns it to the PromotionCode field.
func (o *ECertificateInfoType) SetPromotionCode(v string) {
	o.PromotionCode = &v
}

// GetUsageCriteria returns the UsageCriteria field value if set, zero value otherwise.
func (o *ECertificateInfoType) GetUsageCriteria() ECertificateUsageCriteriaType {
	if o == nil || IsNil(o.UsageCriteria) {
		var ret ECertificateUsageCriteriaType
		return ret
	}
	return *o.UsageCriteria
}

// GetUsageCriteriaOk returns a tuple with the UsageCriteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoType) GetUsageCriteriaOk() (*ECertificateUsageCriteriaType, bool) {
	if o == nil || IsNil(o.UsageCriteria) {
		return nil, false
	}
	return o.UsageCriteria, true
}

// HasUsageCriteria returns a boolean if a field has been set.
func (o *ECertificateInfoType) HasUsageCriteria() bool {
	if o != nil && !IsNil(o.UsageCriteria) {
		return true
	}

	return false
}

// SetUsageCriteria gets a reference to the given ECertificateUsageCriteriaType and assigns it to the UsageCriteria field.
func (o *ECertificateInfoType) SetUsageCriteria(v ECertificateUsageCriteriaType) {
	o.UsageCriteria = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *ECertificateInfoType) GetValue() CurrencyAmountType {
	if o == nil || IsNil(o.Value) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoType) GetValueOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *ECertificateInfoType) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given CurrencyAmountType and assigns it to the Value field.
func (o *ECertificateInfoType) SetValue(v CurrencyAmountType) {
	o.Value = &v
}

// GetVoucherBenefitCode returns the VoucherBenefitCode field value if set, zero value otherwise.
func (o *ECertificateInfoType) GetVoucherBenefitCode() string {
	if o == nil || IsNil(o.VoucherBenefitCode) {
		var ret string
		return ret
	}
	return *o.VoucherBenefitCode
}

// GetVoucherBenefitCodeOk returns a tuple with the VoucherBenefitCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateInfoType) GetVoucherBenefitCodeOk() (*string, bool) {
	if o == nil || IsNil(o.VoucherBenefitCode) {
		return nil, false
	}
	return o.VoucherBenefitCode, true
}

// HasVoucherBenefitCode returns a boolean if a field has been set.
func (o *ECertificateInfoType) HasVoucherBenefitCode() bool {
	if o != nil && !IsNil(o.VoucherBenefitCode) {
		return true
	}

	return false
}

// SetVoucherBenefitCode gets a reference to the given string and assigns it to the VoucherBenefitCode field.
func (o *ECertificateInfoType) SetVoucherBenefitCode(v string) {
	o.VoucherBenefitCode = &v
}

func (o ECertificateInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ECertificateInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AwardCode) {
		toSerialize["awardCode"] = o.AwardCode
	}
	if !IsNil(o.BenefitSummary) {
		toSerialize["benefitSummary"] = o.BenefitSummary
	}
	if !IsNil(o.CertificateType) {
		toSerialize["certificateType"] = o.CertificateType
	}
	if !IsNil(o.Cost) {
		toSerialize["cost"] = o.Cost
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Hotels) {
		toSerialize["hotels"] = o.Hotels
	}
	if !IsNil(o.Label) {
		toSerialize["label"] = o.Label
	}
	if !IsNil(o.LongDescription) {
		toSerialize["longDescription"] = o.LongDescription
	}
	if !IsNil(o.MaxExtensionAllowed) {
		toSerialize["maxExtensionAllowed"] = o.MaxExtensionAllowed
	}
	if !IsNil(o.MembershipType) {
		toSerialize["membershipType"] = o.MembershipType
	}
	if !IsNil(o.PromotionCode) {
		toSerialize["promotionCode"] = o.PromotionCode
	}
	if !IsNil(o.UsageCriteria) {
		toSerialize["usageCriteria"] = o.UsageCriteria
	}
	if !IsNil(o.Value) {
		toSerialize["value"] = o.Value
	}
	if !IsNil(o.VoucherBenefitCode) {
		toSerialize["voucherBenefitCode"] = o.VoucherBenefitCode
	}
	return toSerialize, nil
}

type NullableECertificateInfoType struct {
	value *ECertificateInfoType
	isSet bool
}

func (v NullableECertificateInfoType) Get() *ECertificateInfoType {
	return v.value
}

func (v *NullableECertificateInfoType) Set(val *ECertificateInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableECertificateInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableECertificateInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableECertificateInfoType(val *ECertificateInfoType) *NullableECertificateInfoType {
	return &NullableECertificateInfoType{value: val, isSet: true}
}

func (v NullableECertificateInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableECertificateInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


