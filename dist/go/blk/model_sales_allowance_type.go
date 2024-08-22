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

// checks if the SalesAllowanceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SalesAllowanceType{}

// SalesAllowanceType A single sales allowances.
type SalesAllowanceType struct {
	// Number of Room nights booked at a deduct status for the date.
	AllotmentDeductQty *int32 `json:"allotmentDeductQty,omitempty"`
	// Number of rooms still available on the Sales Allowance.
	Available *int32 `json:"available,omitempty"`
	// Number of Rooms booked against the Sales Allowance.
	Booked *int32 `json:"booked,omitempty"`
	// Ceiling date for the Sales Allowance.
	CeilingDate *string `json:"ceilingDate,omitempty"`
	CeilingId *SalesAllowanceIDType `json:"ceilingId,omitempty"`
	// Properties for which sales allowances exist.
	HotelId *string `json:"hotelId,omitempty"`
	// Number of rooms booked that is more than the allotted Sales Allowance.
	OverBooked *int32 `json:"overBooked,omitempty"`
	// Number of Rooms allotted for the Sales Allowance.
	SalesAllowance *int32 `json:"salesAllowance,omitempty"`
}

// NewSalesAllowanceType instantiates a new SalesAllowanceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSalesAllowanceType() *SalesAllowanceType {
	this := SalesAllowanceType{}
	return &this
}

// NewSalesAllowanceTypeWithDefaults instantiates a new SalesAllowanceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSalesAllowanceTypeWithDefaults() *SalesAllowanceType {
	this := SalesAllowanceType{}
	return &this
}

// GetAllotmentDeductQty returns the AllotmentDeductQty field value if set, zero value otherwise.
func (o *SalesAllowanceType) GetAllotmentDeductQty() int32 {
	if o == nil || IsNil(o.AllotmentDeductQty) {
		var ret int32
		return ret
	}
	return *o.AllotmentDeductQty
}

// GetAllotmentDeductQtyOk returns a tuple with the AllotmentDeductQty field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SalesAllowanceType) GetAllotmentDeductQtyOk() (*int32, bool) {
	if o == nil || IsNil(o.AllotmentDeductQty) {
		return nil, false
	}
	return o.AllotmentDeductQty, true
}

// HasAllotmentDeductQty returns a boolean if a field has been set.
func (o *SalesAllowanceType) HasAllotmentDeductQty() bool {
	if o != nil && !IsNil(o.AllotmentDeductQty) {
		return true
	}

	return false
}

// SetAllotmentDeductQty gets a reference to the given int32 and assigns it to the AllotmentDeductQty field.
func (o *SalesAllowanceType) SetAllotmentDeductQty(v int32) {
	o.AllotmentDeductQty = &v
}

// GetAvailable returns the Available field value if set, zero value otherwise.
func (o *SalesAllowanceType) GetAvailable() int32 {
	if o == nil || IsNil(o.Available) {
		var ret int32
		return ret
	}
	return *o.Available
}

// GetAvailableOk returns a tuple with the Available field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SalesAllowanceType) GetAvailableOk() (*int32, bool) {
	if o == nil || IsNil(o.Available) {
		return nil, false
	}
	return o.Available, true
}

// HasAvailable returns a boolean if a field has been set.
func (o *SalesAllowanceType) HasAvailable() bool {
	if o != nil && !IsNil(o.Available) {
		return true
	}

	return false
}

// SetAvailable gets a reference to the given int32 and assigns it to the Available field.
func (o *SalesAllowanceType) SetAvailable(v int32) {
	o.Available = &v
}

// GetBooked returns the Booked field value if set, zero value otherwise.
func (o *SalesAllowanceType) GetBooked() int32 {
	if o == nil || IsNil(o.Booked) {
		var ret int32
		return ret
	}
	return *o.Booked
}

// GetBookedOk returns a tuple with the Booked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SalesAllowanceType) GetBookedOk() (*int32, bool) {
	if o == nil || IsNil(o.Booked) {
		return nil, false
	}
	return o.Booked, true
}

// HasBooked returns a boolean if a field has been set.
func (o *SalesAllowanceType) HasBooked() bool {
	if o != nil && !IsNil(o.Booked) {
		return true
	}

	return false
}

// SetBooked gets a reference to the given int32 and assigns it to the Booked field.
func (o *SalesAllowanceType) SetBooked(v int32) {
	o.Booked = &v
}

// GetCeilingDate returns the CeilingDate field value if set, zero value otherwise.
func (o *SalesAllowanceType) GetCeilingDate() string {
	if o == nil || IsNil(o.CeilingDate) {
		var ret string
		return ret
	}
	return *o.CeilingDate
}

// GetCeilingDateOk returns a tuple with the CeilingDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SalesAllowanceType) GetCeilingDateOk() (*string, bool) {
	if o == nil || IsNil(o.CeilingDate) {
		return nil, false
	}
	return o.CeilingDate, true
}

// HasCeilingDate returns a boolean if a field has been set.
func (o *SalesAllowanceType) HasCeilingDate() bool {
	if o != nil && !IsNil(o.CeilingDate) {
		return true
	}

	return false
}

// SetCeilingDate gets a reference to the given string and assigns it to the CeilingDate field.
func (o *SalesAllowanceType) SetCeilingDate(v string) {
	o.CeilingDate = &v
}

// GetCeilingId returns the CeilingId field value if set, zero value otherwise.
func (o *SalesAllowanceType) GetCeilingId() SalesAllowanceIDType {
	if o == nil || IsNil(o.CeilingId) {
		var ret SalesAllowanceIDType
		return ret
	}
	return *o.CeilingId
}

// GetCeilingIdOk returns a tuple with the CeilingId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SalesAllowanceType) GetCeilingIdOk() (*SalesAllowanceIDType, bool) {
	if o == nil || IsNil(o.CeilingId) {
		return nil, false
	}
	return o.CeilingId, true
}

// HasCeilingId returns a boolean if a field has been set.
func (o *SalesAllowanceType) HasCeilingId() bool {
	if o != nil && !IsNil(o.CeilingId) {
		return true
	}

	return false
}

// SetCeilingId gets a reference to the given SalesAllowanceIDType and assigns it to the CeilingId field.
func (o *SalesAllowanceType) SetCeilingId(v SalesAllowanceIDType) {
	o.CeilingId = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *SalesAllowanceType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SalesAllowanceType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *SalesAllowanceType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *SalesAllowanceType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetOverBooked returns the OverBooked field value if set, zero value otherwise.
func (o *SalesAllowanceType) GetOverBooked() int32 {
	if o == nil || IsNil(o.OverBooked) {
		var ret int32
		return ret
	}
	return *o.OverBooked
}

// GetOverBookedOk returns a tuple with the OverBooked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SalesAllowanceType) GetOverBookedOk() (*int32, bool) {
	if o == nil || IsNil(o.OverBooked) {
		return nil, false
	}
	return o.OverBooked, true
}

// HasOverBooked returns a boolean if a field has been set.
func (o *SalesAllowanceType) HasOverBooked() bool {
	if o != nil && !IsNil(o.OverBooked) {
		return true
	}

	return false
}

// SetOverBooked gets a reference to the given int32 and assigns it to the OverBooked field.
func (o *SalesAllowanceType) SetOverBooked(v int32) {
	o.OverBooked = &v
}

// GetSalesAllowance returns the SalesAllowance field value if set, zero value otherwise.
func (o *SalesAllowanceType) GetSalesAllowance() int32 {
	if o == nil || IsNil(o.SalesAllowance) {
		var ret int32
		return ret
	}
	return *o.SalesAllowance
}

// GetSalesAllowanceOk returns a tuple with the SalesAllowance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SalesAllowanceType) GetSalesAllowanceOk() (*int32, bool) {
	if o == nil || IsNil(o.SalesAllowance) {
		return nil, false
	}
	return o.SalesAllowance, true
}

// HasSalesAllowance returns a boolean if a field has been set.
func (o *SalesAllowanceType) HasSalesAllowance() bool {
	if o != nil && !IsNil(o.SalesAllowance) {
		return true
	}

	return false
}

// SetSalesAllowance gets a reference to the given int32 and assigns it to the SalesAllowance field.
func (o *SalesAllowanceType) SetSalesAllowance(v int32) {
	o.SalesAllowance = &v
}

func (o SalesAllowanceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SalesAllowanceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllotmentDeductQty) {
		toSerialize["allotmentDeductQty"] = o.AllotmentDeductQty
	}
	if !IsNil(o.Available) {
		toSerialize["available"] = o.Available
	}
	if !IsNil(o.Booked) {
		toSerialize["booked"] = o.Booked
	}
	if !IsNil(o.CeilingDate) {
		toSerialize["ceilingDate"] = o.CeilingDate
	}
	if !IsNil(o.CeilingId) {
		toSerialize["ceilingId"] = o.CeilingId
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.OverBooked) {
		toSerialize["overBooked"] = o.OverBooked
	}
	if !IsNil(o.SalesAllowance) {
		toSerialize["salesAllowance"] = o.SalesAllowance
	}
	return toSerialize, nil
}

type NullableSalesAllowanceType struct {
	value *SalesAllowanceType
	isSet bool
}

func (v NullableSalesAllowanceType) Get() *SalesAllowanceType {
	return v.value
}

func (v *NullableSalesAllowanceType) Set(val *SalesAllowanceType) {
	v.value = val
	v.isSet = true
}

func (v NullableSalesAllowanceType) IsSet() bool {
	return v.isSet
}

func (v *NullableSalesAllowanceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSalesAllowanceType(val *SalesAllowanceType) *NullableSalesAllowanceType {
	return &NullableSalesAllowanceType{value: val, isSet: true}
}

func (v NullableSalesAllowanceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSalesAllowanceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


