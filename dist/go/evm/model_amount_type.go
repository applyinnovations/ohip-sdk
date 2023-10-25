/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the AmountType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AmountType{}

// AmountType Base charge and additional charges related to a functionSpaceDetails that includes such things as additional guest amounts, cancel fees, etc. Also includes Discount percentages, total amount, and the rate description.
type AmountType struct {
	// Collection of incremental charges per age qualifying code for additional guests. Amount charged for additional occupant is with respect to age group of the base guests.
	AdditionalGuestAmounts []AdditionalGuestAmountType `json:"additionalGuestAmounts,omitempty"`
	Base *TotalType `json:"base,omitempty"`
	Discount *DiscountType `json:"discount,omitempty"`
	EffectiveRate *TotalType `json:"effectiveRate,omitempty"`
	// The ending value of the date range.
	EventEndDate *string `json:"eventEndDate,omitempty"`
	// The starting value of the date range.
	EventStartDate *string `json:"eventStartDate,omitempty"`
	RequiredPoints *PointsType `json:"requiredPoints,omitempty"`
	ShareDistributionInstruction *ShareDistributionInstructionType `json:"shareDistributionInstruction,omitempty"`
	// Indicates the share rate percentage for the reservation if set to CUSTOMSPLIT.
	ShareRatePercentage *float32 `json:"shareRatePercentage,omitempty"`
	Total *TotalType `json:"total,omitempty"`
}

// NewAmountType instantiates a new AmountType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAmountType() *AmountType {
	this := AmountType{}
	return &this
}

// NewAmountTypeWithDefaults instantiates a new AmountType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAmountTypeWithDefaults() *AmountType {
	this := AmountType{}
	return &this
}

// GetAdditionalGuestAmounts returns the AdditionalGuestAmounts field value if set, zero value otherwise.
func (o *AmountType) GetAdditionalGuestAmounts() []AdditionalGuestAmountType {
	if o == nil || IsNil(o.AdditionalGuestAmounts) {
		var ret []AdditionalGuestAmountType
		return ret
	}
	return o.AdditionalGuestAmounts
}

// GetAdditionalGuestAmountsOk returns a tuple with the AdditionalGuestAmounts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AmountType) GetAdditionalGuestAmountsOk() ([]AdditionalGuestAmountType, bool) {
	if o == nil || IsNil(o.AdditionalGuestAmounts) {
		return nil, false
	}
	return o.AdditionalGuestAmounts, true
}

// HasAdditionalGuestAmounts returns a boolean if a field has been set.
func (o *AmountType) HasAdditionalGuestAmounts() bool {
	if o != nil && !IsNil(o.AdditionalGuestAmounts) {
		return true
	}

	return false
}

// SetAdditionalGuestAmounts gets a reference to the given []AdditionalGuestAmountType and assigns it to the AdditionalGuestAmounts field.
func (o *AmountType) SetAdditionalGuestAmounts(v []AdditionalGuestAmountType) {
	o.AdditionalGuestAmounts = v
}

// GetBase returns the Base field value if set, zero value otherwise.
func (o *AmountType) GetBase() TotalType {
	if o == nil || IsNil(o.Base) {
		var ret TotalType
		return ret
	}
	return *o.Base
}

// GetBaseOk returns a tuple with the Base field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AmountType) GetBaseOk() (*TotalType, bool) {
	if o == nil || IsNil(o.Base) {
		return nil, false
	}
	return o.Base, true
}

// HasBase returns a boolean if a field has been set.
func (o *AmountType) HasBase() bool {
	if o != nil && !IsNil(o.Base) {
		return true
	}

	return false
}

// SetBase gets a reference to the given TotalType and assigns it to the Base field.
func (o *AmountType) SetBase(v TotalType) {
	o.Base = &v
}

// GetDiscount returns the Discount field value if set, zero value otherwise.
func (o *AmountType) GetDiscount() DiscountType {
	if o == nil || IsNil(o.Discount) {
		var ret DiscountType
		return ret
	}
	return *o.Discount
}

// GetDiscountOk returns a tuple with the Discount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AmountType) GetDiscountOk() (*DiscountType, bool) {
	if o == nil || IsNil(o.Discount) {
		return nil, false
	}
	return o.Discount, true
}

// HasDiscount returns a boolean if a field has been set.
func (o *AmountType) HasDiscount() bool {
	if o != nil && !IsNil(o.Discount) {
		return true
	}

	return false
}

// SetDiscount gets a reference to the given DiscountType and assigns it to the Discount field.
func (o *AmountType) SetDiscount(v DiscountType) {
	o.Discount = &v
}

// GetEffectiveRate returns the EffectiveRate field value if set, zero value otherwise.
func (o *AmountType) GetEffectiveRate() TotalType {
	if o == nil || IsNil(o.EffectiveRate) {
		var ret TotalType
		return ret
	}
	return *o.EffectiveRate
}

// GetEffectiveRateOk returns a tuple with the EffectiveRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AmountType) GetEffectiveRateOk() (*TotalType, bool) {
	if o == nil || IsNil(o.EffectiveRate) {
		return nil, false
	}
	return o.EffectiveRate, true
}

// HasEffectiveRate returns a boolean if a field has been set.
func (o *AmountType) HasEffectiveRate() bool {
	if o != nil && !IsNil(o.EffectiveRate) {
		return true
	}

	return false
}

// SetEffectiveRate gets a reference to the given TotalType and assigns it to the EffectiveRate field.
func (o *AmountType) SetEffectiveRate(v TotalType) {
	o.EffectiveRate = &v
}

// GetEventEndDate returns the EventEndDate field value if set, zero value otherwise.
func (o *AmountType) GetEventEndDate() string {
	if o == nil || IsNil(o.EventEndDate) {
		var ret string
		return ret
	}
	return *o.EventEndDate
}

// GetEventEndDateOk returns a tuple with the EventEndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AmountType) GetEventEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EventEndDate) {
		return nil, false
	}
	return o.EventEndDate, true
}

// HasEventEndDate returns a boolean if a field has been set.
func (o *AmountType) HasEventEndDate() bool {
	if o != nil && !IsNil(o.EventEndDate) {
		return true
	}

	return false
}

// SetEventEndDate gets a reference to the given string and assigns it to the EventEndDate field.
func (o *AmountType) SetEventEndDate(v string) {
	o.EventEndDate = &v
}

// GetEventStartDate returns the EventStartDate field value if set, zero value otherwise.
func (o *AmountType) GetEventStartDate() string {
	if o == nil || IsNil(o.EventStartDate) {
		var ret string
		return ret
	}
	return *o.EventStartDate
}

// GetEventStartDateOk returns a tuple with the EventStartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AmountType) GetEventStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.EventStartDate) {
		return nil, false
	}
	return o.EventStartDate, true
}

// HasEventStartDate returns a boolean if a field has been set.
func (o *AmountType) HasEventStartDate() bool {
	if o != nil && !IsNil(o.EventStartDate) {
		return true
	}

	return false
}

// SetEventStartDate gets a reference to the given string and assigns it to the EventStartDate field.
func (o *AmountType) SetEventStartDate(v string) {
	o.EventStartDate = &v
}

// GetRequiredPoints returns the RequiredPoints field value if set, zero value otherwise.
func (o *AmountType) GetRequiredPoints() PointsType {
	if o == nil || IsNil(o.RequiredPoints) {
		var ret PointsType
		return ret
	}
	return *o.RequiredPoints
}

// GetRequiredPointsOk returns a tuple with the RequiredPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AmountType) GetRequiredPointsOk() (*PointsType, bool) {
	if o == nil || IsNil(o.RequiredPoints) {
		return nil, false
	}
	return o.RequiredPoints, true
}

// HasRequiredPoints returns a boolean if a field has been set.
func (o *AmountType) HasRequiredPoints() bool {
	if o != nil && !IsNil(o.RequiredPoints) {
		return true
	}

	return false
}

// SetRequiredPoints gets a reference to the given PointsType and assigns it to the RequiredPoints field.
func (o *AmountType) SetRequiredPoints(v PointsType) {
	o.RequiredPoints = &v
}

// GetShareDistributionInstruction returns the ShareDistributionInstruction field value if set, zero value otherwise.
func (o *AmountType) GetShareDistributionInstruction() ShareDistributionInstructionType {
	if o == nil || IsNil(o.ShareDistributionInstruction) {
		var ret ShareDistributionInstructionType
		return ret
	}
	return *o.ShareDistributionInstruction
}

// GetShareDistributionInstructionOk returns a tuple with the ShareDistributionInstruction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AmountType) GetShareDistributionInstructionOk() (*ShareDistributionInstructionType, bool) {
	if o == nil || IsNil(o.ShareDistributionInstruction) {
		return nil, false
	}
	return o.ShareDistributionInstruction, true
}

// HasShareDistributionInstruction returns a boolean if a field has been set.
func (o *AmountType) HasShareDistributionInstruction() bool {
	if o != nil && !IsNil(o.ShareDistributionInstruction) {
		return true
	}

	return false
}

// SetShareDistributionInstruction gets a reference to the given ShareDistributionInstructionType and assigns it to the ShareDistributionInstruction field.
func (o *AmountType) SetShareDistributionInstruction(v ShareDistributionInstructionType) {
	o.ShareDistributionInstruction = &v
}

// GetShareRatePercentage returns the ShareRatePercentage field value if set, zero value otherwise.
func (o *AmountType) GetShareRatePercentage() float32 {
	if o == nil || IsNil(o.ShareRatePercentage) {
		var ret float32
		return ret
	}
	return *o.ShareRatePercentage
}

// GetShareRatePercentageOk returns a tuple with the ShareRatePercentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AmountType) GetShareRatePercentageOk() (*float32, bool) {
	if o == nil || IsNil(o.ShareRatePercentage) {
		return nil, false
	}
	return o.ShareRatePercentage, true
}

// HasShareRatePercentage returns a boolean if a field has been set.
func (o *AmountType) HasShareRatePercentage() bool {
	if o != nil && !IsNil(o.ShareRatePercentage) {
		return true
	}

	return false
}

// SetShareRatePercentage gets a reference to the given float32 and assigns it to the ShareRatePercentage field.
func (o *AmountType) SetShareRatePercentage(v float32) {
	o.ShareRatePercentage = &v
}

// GetTotal returns the Total field value if set, zero value otherwise.
func (o *AmountType) GetTotal() TotalType {
	if o == nil || IsNil(o.Total) {
		var ret TotalType
		return ret
	}
	return *o.Total
}

// GetTotalOk returns a tuple with the Total field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AmountType) GetTotalOk() (*TotalType, bool) {
	if o == nil || IsNil(o.Total) {
		return nil, false
	}
	return o.Total, true
}

// HasTotal returns a boolean if a field has been set.
func (o *AmountType) HasTotal() bool {
	if o != nil && !IsNil(o.Total) {
		return true
	}

	return false
}

// SetTotal gets a reference to the given TotalType and assigns it to the Total field.
func (o *AmountType) SetTotal(v TotalType) {
	o.Total = &v
}

func (o AmountType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AmountType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdditionalGuestAmounts) {
		toSerialize["additionalGuestAmounts"] = o.AdditionalGuestAmounts
	}
	if !IsNil(o.Base) {
		toSerialize["base"] = o.Base
	}
	if !IsNil(o.Discount) {
		toSerialize["discount"] = o.Discount
	}
	if !IsNil(o.EffectiveRate) {
		toSerialize["effectiveRate"] = o.EffectiveRate
	}
	if !IsNil(o.EventEndDate) {
		toSerialize["eventEndDate"] = o.EventEndDate
	}
	if !IsNil(o.EventStartDate) {
		toSerialize["eventStartDate"] = o.EventStartDate
	}
	if !IsNil(o.RequiredPoints) {
		toSerialize["requiredPoints"] = o.RequiredPoints
	}
	if !IsNil(o.ShareDistributionInstruction) {
		toSerialize["shareDistributionInstruction"] = o.ShareDistributionInstruction
	}
	if !IsNil(o.ShareRatePercentage) {
		toSerialize["shareRatePercentage"] = o.ShareRatePercentage
	}
	if !IsNil(o.Total) {
		toSerialize["total"] = o.Total
	}
	return toSerialize, nil
}

type NullableAmountType struct {
	value *AmountType
	isSet bool
}

func (v NullableAmountType) Get() *AmountType {
	return v.value
}

func (v *NullableAmountType) Set(val *AmountType) {
	v.value = val
	v.isSet = true
}

func (v NullableAmountType) IsSet() bool {
	return v.isSet
}

func (v *NullableAmountType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAmountType(val *AmountType) *NullableAmountType {
	return &NullableAmountType{value: val, isSet: true}
}

func (v NullableAmountType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAmountType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


