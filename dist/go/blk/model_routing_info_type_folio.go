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

// checks if the RoutingInfoTypeFolio type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoutingInfoTypeFolio{}

// RoutingInfoTypeFolio Folio routing type.
type RoutingInfoTypeFolio struct {
	// Accounts Receivable.
	ARNumber *string `json:"aRNumber,omitempty"`
	FolioWindowNo *int32 `json:"folioWindowNo,omitempty"`
	GuestInfo *RoutingInfoTypeFolioGuestInfo `json:"guestInfo,omitempty"`
	// Set of routing instructions associated to this routing type.
	Instructions []RoutingInstructionType `json:"instructions,omitempty"`
	PayeeInfo *PayeeInfoType `json:"payeeInfo,omitempty"`
	PaymentMethod *string `json:"paymentMethod,omitempty"`
}

// NewRoutingInfoTypeFolio instantiates a new RoutingInfoTypeFolio object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoutingInfoTypeFolio() *RoutingInfoTypeFolio {
	this := RoutingInfoTypeFolio{}
	return &this
}

// NewRoutingInfoTypeFolioWithDefaults instantiates a new RoutingInfoTypeFolio object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoutingInfoTypeFolioWithDefaults() *RoutingInfoTypeFolio {
	this := RoutingInfoTypeFolio{}
	return &this
}

// GetARNumber returns the ARNumber field value if set, zero value otherwise.
func (o *RoutingInfoTypeFolio) GetARNumber() string {
	if o == nil || IsNil(o.ARNumber) {
		var ret string
		return ret
	}
	return *o.ARNumber
}

// GetARNumberOk returns a tuple with the ARNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInfoTypeFolio) GetARNumberOk() (*string, bool) {
	if o == nil || IsNil(o.ARNumber) {
		return nil, false
	}
	return o.ARNumber, true
}

// HasARNumber returns a boolean if a field has been set.
func (o *RoutingInfoTypeFolio) HasARNumber() bool {
	if o != nil && !IsNil(o.ARNumber) {
		return true
	}

	return false
}

// SetARNumber gets a reference to the given string and assigns it to the ARNumber field.
func (o *RoutingInfoTypeFolio) SetARNumber(v string) {
	o.ARNumber = &v
}

// GetFolioWindowNo returns the FolioWindowNo field value if set, zero value otherwise.
func (o *RoutingInfoTypeFolio) GetFolioWindowNo() int32 {
	if o == nil || IsNil(o.FolioWindowNo) {
		var ret int32
		return ret
	}
	return *o.FolioWindowNo
}

// GetFolioWindowNoOk returns a tuple with the FolioWindowNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInfoTypeFolio) GetFolioWindowNoOk() (*int32, bool) {
	if o == nil || IsNil(o.FolioWindowNo) {
		return nil, false
	}
	return o.FolioWindowNo, true
}

// HasFolioWindowNo returns a boolean if a field has been set.
func (o *RoutingInfoTypeFolio) HasFolioWindowNo() bool {
	if o != nil && !IsNil(o.FolioWindowNo) {
		return true
	}

	return false
}

// SetFolioWindowNo gets a reference to the given int32 and assigns it to the FolioWindowNo field.
func (o *RoutingInfoTypeFolio) SetFolioWindowNo(v int32) {
	o.FolioWindowNo = &v
}

// GetGuestInfo returns the GuestInfo field value if set, zero value otherwise.
func (o *RoutingInfoTypeFolio) GetGuestInfo() RoutingInfoTypeFolioGuestInfo {
	if o == nil || IsNil(o.GuestInfo) {
		var ret RoutingInfoTypeFolioGuestInfo
		return ret
	}
	return *o.GuestInfo
}

// GetGuestInfoOk returns a tuple with the GuestInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInfoTypeFolio) GetGuestInfoOk() (*RoutingInfoTypeFolioGuestInfo, bool) {
	if o == nil || IsNil(o.GuestInfo) {
		return nil, false
	}
	return o.GuestInfo, true
}

// HasGuestInfo returns a boolean if a field has been set.
func (o *RoutingInfoTypeFolio) HasGuestInfo() bool {
	if o != nil && !IsNil(o.GuestInfo) {
		return true
	}

	return false
}

// SetGuestInfo gets a reference to the given RoutingInfoTypeFolioGuestInfo and assigns it to the GuestInfo field.
func (o *RoutingInfoTypeFolio) SetGuestInfo(v RoutingInfoTypeFolioGuestInfo) {
	o.GuestInfo = &v
}

// GetInstructions returns the Instructions field value if set, zero value otherwise.
func (o *RoutingInfoTypeFolio) GetInstructions() []RoutingInstructionType {
	if o == nil || IsNil(o.Instructions) {
		var ret []RoutingInstructionType
		return ret
	}
	return o.Instructions
}

// GetInstructionsOk returns a tuple with the Instructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInfoTypeFolio) GetInstructionsOk() ([]RoutingInstructionType, bool) {
	if o == nil || IsNil(o.Instructions) {
		return nil, false
	}
	return o.Instructions, true
}

// HasInstructions returns a boolean if a field has been set.
func (o *RoutingInfoTypeFolio) HasInstructions() bool {
	if o != nil && !IsNil(o.Instructions) {
		return true
	}

	return false
}

// SetInstructions gets a reference to the given []RoutingInstructionType and assigns it to the Instructions field.
func (o *RoutingInfoTypeFolio) SetInstructions(v []RoutingInstructionType) {
	o.Instructions = v
}

// GetPayeeInfo returns the PayeeInfo field value if set, zero value otherwise.
func (o *RoutingInfoTypeFolio) GetPayeeInfo() PayeeInfoType {
	if o == nil || IsNil(o.PayeeInfo) {
		var ret PayeeInfoType
		return ret
	}
	return *o.PayeeInfo
}

// GetPayeeInfoOk returns a tuple with the PayeeInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInfoTypeFolio) GetPayeeInfoOk() (*PayeeInfoType, bool) {
	if o == nil || IsNil(o.PayeeInfo) {
		return nil, false
	}
	return o.PayeeInfo, true
}

// HasPayeeInfo returns a boolean if a field has been set.
func (o *RoutingInfoTypeFolio) HasPayeeInfo() bool {
	if o != nil && !IsNil(o.PayeeInfo) {
		return true
	}

	return false
}

// SetPayeeInfo gets a reference to the given PayeeInfoType and assigns it to the PayeeInfo field.
func (o *RoutingInfoTypeFolio) SetPayeeInfo(v PayeeInfoType) {
	o.PayeeInfo = &v
}

// GetPaymentMethod returns the PaymentMethod field value if set, zero value otherwise.
func (o *RoutingInfoTypeFolio) GetPaymentMethod() string {
	if o == nil || IsNil(o.PaymentMethod) {
		var ret string
		return ret
	}
	return *o.PaymentMethod
}

// GetPaymentMethodOk returns a tuple with the PaymentMethod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInfoTypeFolio) GetPaymentMethodOk() (*string, bool) {
	if o == nil || IsNil(o.PaymentMethod) {
		return nil, false
	}
	return o.PaymentMethod, true
}

// HasPaymentMethod returns a boolean if a field has been set.
func (o *RoutingInfoTypeFolio) HasPaymentMethod() bool {
	if o != nil && !IsNil(o.PaymentMethod) {
		return true
	}

	return false
}

// SetPaymentMethod gets a reference to the given string and assigns it to the PaymentMethod field.
func (o *RoutingInfoTypeFolio) SetPaymentMethod(v string) {
	o.PaymentMethod = &v
}

func (o RoutingInfoTypeFolio) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoutingInfoTypeFolio) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ARNumber) {
		toSerialize["aRNumber"] = o.ARNumber
	}
	if !IsNil(o.FolioWindowNo) {
		toSerialize["folioWindowNo"] = o.FolioWindowNo
	}
	if !IsNil(o.GuestInfo) {
		toSerialize["guestInfo"] = o.GuestInfo
	}
	if !IsNil(o.Instructions) {
		toSerialize["instructions"] = o.Instructions
	}
	if !IsNil(o.PayeeInfo) {
		toSerialize["payeeInfo"] = o.PayeeInfo
	}
	if !IsNil(o.PaymentMethod) {
		toSerialize["paymentMethod"] = o.PaymentMethod
	}
	return toSerialize, nil
}

type NullableRoutingInfoTypeFolio struct {
	value *RoutingInfoTypeFolio
	isSet bool
}

func (v NullableRoutingInfoTypeFolio) Get() *RoutingInfoTypeFolio {
	return v.value
}

func (v *NullableRoutingInfoTypeFolio) Set(val *RoutingInfoTypeFolio) {
	v.value = val
	v.isSet = true
}

func (v NullableRoutingInfoTypeFolio) IsSet() bool {
	return v.isSet
}

func (v *NullableRoutingInfoTypeFolio) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoutingInfoTypeFolio(val *RoutingInfoTypeFolio) *NullableRoutingInfoTypeFolio {
	return &NullableRoutingInfoTypeFolio{value: val, isSet: true}
}

func (v NullableRoutingInfoTypeFolio) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoutingInfoTypeFolio) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


