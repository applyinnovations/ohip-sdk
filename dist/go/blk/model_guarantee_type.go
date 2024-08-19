/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the GuaranteeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GuaranteeType{}

// GuaranteeType Specifies Guarantee Code attributes.
type GuaranteeType struct {
	// Description of the Guarantee Code.
	Description *string `json:"description,omitempty"`
	// Code assigned to the Guarantee.
	GuaranteeCode *string `json:"guaranteeCode,omitempty"`
	// Represents the late arrival time.
	LateArrival *string `json:"lateArrival,omitempty"`
	// If true indicates this Guarantee Code is used only to hold the inventory during reservation process.
	OnHold *bool `json:"onHold,omitempty"`
	// Display Order sequence.
	OrderSequence *float32 `json:"orderSequence,omitempty"`
	// Payment card code like AX,VI etc.
	PaymentTypes []string `json:"paymentTypes,omitempty"`
	Requirements *GuaranteeRequirementsType `json:"requirements,omitempty"`
	// If true indicates inventory will be reserved/deducted when reservation uses this Guarantee Code.
	ReserveInventory *bool `json:"reserveInventory,omitempty"`
	ShortDescription *TranslationTextType80 `json:"shortDescription,omitempty"`
}

// NewGuaranteeType instantiates a new GuaranteeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuaranteeType() *GuaranteeType {
	this := GuaranteeType{}
	return &this
}

// NewGuaranteeTypeWithDefaults instantiates a new GuaranteeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuaranteeTypeWithDefaults() *GuaranteeType {
	this := GuaranteeType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *GuaranteeType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *GuaranteeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *GuaranteeType) SetDescription(v string) {
	o.Description = &v
}

// GetGuaranteeCode returns the GuaranteeCode field value if set, zero value otherwise.
func (o *GuaranteeType) GetGuaranteeCode() string {
	if o == nil || IsNil(o.GuaranteeCode) {
		var ret string
		return ret
	}
	return *o.GuaranteeCode
}

// GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeType) GetGuaranteeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.GuaranteeCode) {
		return nil, false
	}
	return o.GuaranteeCode, true
}

// HasGuaranteeCode returns a boolean if a field has been set.
func (o *GuaranteeType) HasGuaranteeCode() bool {
	if o != nil && !IsNil(o.GuaranteeCode) {
		return true
	}

	return false
}

// SetGuaranteeCode gets a reference to the given string and assigns it to the GuaranteeCode field.
func (o *GuaranteeType) SetGuaranteeCode(v string) {
	o.GuaranteeCode = &v
}

// GetLateArrival returns the LateArrival field value if set, zero value otherwise.
func (o *GuaranteeType) GetLateArrival() string {
	if o == nil || IsNil(o.LateArrival) {
		var ret string
		return ret
	}
	return *o.LateArrival
}

// GetLateArrivalOk returns a tuple with the LateArrival field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeType) GetLateArrivalOk() (*string, bool) {
	if o == nil || IsNil(o.LateArrival) {
		return nil, false
	}
	return o.LateArrival, true
}

// HasLateArrival returns a boolean if a field has been set.
func (o *GuaranteeType) HasLateArrival() bool {
	if o != nil && !IsNil(o.LateArrival) {
		return true
	}

	return false
}

// SetLateArrival gets a reference to the given string and assigns it to the LateArrival field.
func (o *GuaranteeType) SetLateArrival(v string) {
	o.LateArrival = &v
}

// GetOnHold returns the OnHold field value if set, zero value otherwise.
func (o *GuaranteeType) GetOnHold() bool {
	if o == nil || IsNil(o.OnHold) {
		var ret bool
		return ret
	}
	return *o.OnHold
}

// GetOnHoldOk returns a tuple with the OnHold field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeType) GetOnHoldOk() (*bool, bool) {
	if o == nil || IsNil(o.OnHold) {
		return nil, false
	}
	return o.OnHold, true
}

// HasOnHold returns a boolean if a field has been set.
func (o *GuaranteeType) HasOnHold() bool {
	if o != nil && !IsNil(o.OnHold) {
		return true
	}

	return false
}

// SetOnHold gets a reference to the given bool and assigns it to the OnHold field.
func (o *GuaranteeType) SetOnHold(v bool) {
	o.OnHold = &v
}

// GetOrderSequence returns the OrderSequence field value if set, zero value otherwise.
func (o *GuaranteeType) GetOrderSequence() float32 {
	if o == nil || IsNil(o.OrderSequence) {
		var ret float32
		return ret
	}
	return *o.OrderSequence
}

// GetOrderSequenceOk returns a tuple with the OrderSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeType) GetOrderSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.OrderSequence) {
		return nil, false
	}
	return o.OrderSequence, true
}

// HasOrderSequence returns a boolean if a field has been set.
func (o *GuaranteeType) HasOrderSequence() bool {
	if o != nil && !IsNil(o.OrderSequence) {
		return true
	}

	return false
}

// SetOrderSequence gets a reference to the given float32 and assigns it to the OrderSequence field.
func (o *GuaranteeType) SetOrderSequence(v float32) {
	o.OrderSequence = &v
}

// GetPaymentTypes returns the PaymentTypes field value if set, zero value otherwise.
func (o *GuaranteeType) GetPaymentTypes() []string {
	if o == nil || IsNil(o.PaymentTypes) {
		var ret []string
		return ret
	}
	return o.PaymentTypes
}

// GetPaymentTypesOk returns a tuple with the PaymentTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeType) GetPaymentTypesOk() ([]string, bool) {
	if o == nil || IsNil(o.PaymentTypes) {
		return nil, false
	}
	return o.PaymentTypes, true
}

// HasPaymentTypes returns a boolean if a field has been set.
func (o *GuaranteeType) HasPaymentTypes() bool {
	if o != nil && !IsNil(o.PaymentTypes) {
		return true
	}

	return false
}

// SetPaymentTypes gets a reference to the given []string and assigns it to the PaymentTypes field.
func (o *GuaranteeType) SetPaymentTypes(v []string) {
	o.PaymentTypes = v
}

// GetRequirements returns the Requirements field value if set, zero value otherwise.
func (o *GuaranteeType) GetRequirements() GuaranteeRequirementsType {
	if o == nil || IsNil(o.Requirements) {
		var ret GuaranteeRequirementsType
		return ret
	}
	return *o.Requirements
}

// GetRequirementsOk returns a tuple with the Requirements field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeType) GetRequirementsOk() (*GuaranteeRequirementsType, bool) {
	if o == nil || IsNil(o.Requirements) {
		return nil, false
	}
	return o.Requirements, true
}

// HasRequirements returns a boolean if a field has been set.
func (o *GuaranteeType) HasRequirements() bool {
	if o != nil && !IsNil(o.Requirements) {
		return true
	}

	return false
}

// SetRequirements gets a reference to the given GuaranteeRequirementsType and assigns it to the Requirements field.
func (o *GuaranteeType) SetRequirements(v GuaranteeRequirementsType) {
	o.Requirements = &v
}

// GetReserveInventory returns the ReserveInventory field value if set, zero value otherwise.
func (o *GuaranteeType) GetReserveInventory() bool {
	if o == nil || IsNil(o.ReserveInventory) {
		var ret bool
		return ret
	}
	return *o.ReserveInventory
}

// GetReserveInventoryOk returns a tuple with the ReserveInventory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeType) GetReserveInventoryOk() (*bool, bool) {
	if o == nil || IsNil(o.ReserveInventory) {
		return nil, false
	}
	return o.ReserveInventory, true
}

// HasReserveInventory returns a boolean if a field has been set.
func (o *GuaranteeType) HasReserveInventory() bool {
	if o != nil && !IsNil(o.ReserveInventory) {
		return true
	}

	return false
}

// SetReserveInventory gets a reference to the given bool and assigns it to the ReserveInventory field.
func (o *GuaranteeType) SetReserveInventory(v bool) {
	o.ReserveInventory = &v
}

// GetShortDescription returns the ShortDescription field value if set, zero value otherwise.
func (o *GuaranteeType) GetShortDescription() TranslationTextType80 {
	if o == nil || IsNil(o.ShortDescription) {
		var ret TranslationTextType80
		return ret
	}
	return *o.ShortDescription
}

// GetShortDescriptionOk returns a tuple with the ShortDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeType) GetShortDescriptionOk() (*TranslationTextType80, bool) {
	if o == nil || IsNil(o.ShortDescription) {
		return nil, false
	}
	return o.ShortDescription, true
}

// HasShortDescription returns a boolean if a field has been set.
func (o *GuaranteeType) HasShortDescription() bool {
	if o != nil && !IsNil(o.ShortDescription) {
		return true
	}

	return false
}

// SetShortDescription gets a reference to the given TranslationTextType80 and assigns it to the ShortDescription field.
func (o *GuaranteeType) SetShortDescription(v TranslationTextType80) {
	o.ShortDescription = &v
}

func (o GuaranteeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GuaranteeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.GuaranteeCode) {
		toSerialize["guaranteeCode"] = o.GuaranteeCode
	}
	if !IsNil(o.LateArrival) {
		toSerialize["lateArrival"] = o.LateArrival
	}
	if !IsNil(o.OnHold) {
		toSerialize["onHold"] = o.OnHold
	}
	if !IsNil(o.OrderSequence) {
		toSerialize["orderSequence"] = o.OrderSequence
	}
	if !IsNil(o.PaymentTypes) {
		toSerialize["paymentTypes"] = o.PaymentTypes
	}
	if !IsNil(o.Requirements) {
		toSerialize["requirements"] = o.Requirements
	}
	if !IsNil(o.ReserveInventory) {
		toSerialize["reserveInventory"] = o.ReserveInventory
	}
	if !IsNil(o.ShortDescription) {
		toSerialize["shortDescription"] = o.ShortDescription
	}
	return toSerialize, nil
}

type NullableGuaranteeType struct {
	value *GuaranteeType
	isSet bool
}

func (v NullableGuaranteeType) Get() *GuaranteeType {
	return v.value
}

func (v *NullableGuaranteeType) Set(val *GuaranteeType) {
	v.value = val
	v.isSet = true
}

func (v NullableGuaranteeType) IsSet() bool {
	return v.isSet
}

func (v *NullableGuaranteeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuaranteeType(val *GuaranteeType) *NullableGuaranteeType {
	return &NullableGuaranteeType{value: val, isSet: true}
}

func (v NullableGuaranteeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuaranteeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


