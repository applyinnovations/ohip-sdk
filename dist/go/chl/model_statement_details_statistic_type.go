/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the StatementDetailsStatisticType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StatementDetailsStatisticType{}

// StatementDetailsStatisticType Channel statement details statistics.
type StatementDetailsStatisticType struct {
	// Holds channel of the statement details statistic By Channel.
	BookingChannelCode *string `json:"bookingChannelCode,omitempty"`
	// Holds channel type of the statement details statistic By Channel Type.
	BookingChannelType *string `json:"bookingChannelType,omitempty"`
	ContractAmount *CurrencyAmountType `json:"contractAmount,omitempty"`
	// Channel billing statement details record count grouped by Resort/Channel/Channel Type/Fee Type.
	DetailsCount *int32 `json:"detailsCount,omitempty"`
	FeeType *ContractFeeTypeType `json:"feeType,omitempty"`
	// Holds the property for the statement detail statistic By resort.
	HotelId *string `json:"hotelId,omitempty"`
	InvoiceAmount *CurrencyAmountType `json:"invoiceAmount,omitempty"`
}

// NewStatementDetailsStatisticType instantiates a new StatementDetailsStatisticType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStatementDetailsStatisticType() *StatementDetailsStatisticType {
	this := StatementDetailsStatisticType{}
	return &this
}

// NewStatementDetailsStatisticTypeWithDefaults instantiates a new StatementDetailsStatisticType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStatementDetailsStatisticTypeWithDefaults() *StatementDetailsStatisticType {
	this := StatementDetailsStatisticType{}
	return &this
}

// GetBookingChannelCode returns the BookingChannelCode field value if set, zero value otherwise.
func (o *StatementDetailsStatisticType) GetBookingChannelCode() string {
	if o == nil || IsNil(o.BookingChannelCode) {
		var ret string
		return ret
	}
	return *o.BookingChannelCode
}

// GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatementDetailsStatisticType) GetBookingChannelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BookingChannelCode) {
		return nil, false
	}
	return o.BookingChannelCode, true
}

// HasBookingChannelCode returns a boolean if a field has been set.
func (o *StatementDetailsStatisticType) HasBookingChannelCode() bool {
	if o != nil && !IsNil(o.BookingChannelCode) {
		return true
	}

	return false
}

// SetBookingChannelCode gets a reference to the given string and assigns it to the BookingChannelCode field.
func (o *StatementDetailsStatisticType) SetBookingChannelCode(v string) {
	o.BookingChannelCode = &v
}

// GetBookingChannelType returns the BookingChannelType field value if set, zero value otherwise.
func (o *StatementDetailsStatisticType) GetBookingChannelType() string {
	if o == nil || IsNil(o.BookingChannelType) {
		var ret string
		return ret
	}
	return *o.BookingChannelType
}

// GetBookingChannelTypeOk returns a tuple with the BookingChannelType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatementDetailsStatisticType) GetBookingChannelTypeOk() (*string, bool) {
	if o == nil || IsNil(o.BookingChannelType) {
		return nil, false
	}
	return o.BookingChannelType, true
}

// HasBookingChannelType returns a boolean if a field has been set.
func (o *StatementDetailsStatisticType) HasBookingChannelType() bool {
	if o != nil && !IsNil(o.BookingChannelType) {
		return true
	}

	return false
}

// SetBookingChannelType gets a reference to the given string and assigns it to the BookingChannelType field.
func (o *StatementDetailsStatisticType) SetBookingChannelType(v string) {
	o.BookingChannelType = &v
}

// GetContractAmount returns the ContractAmount field value if set, zero value otherwise.
func (o *StatementDetailsStatisticType) GetContractAmount() CurrencyAmountType {
	if o == nil || IsNil(o.ContractAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.ContractAmount
}

// GetContractAmountOk returns a tuple with the ContractAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatementDetailsStatisticType) GetContractAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.ContractAmount) {
		return nil, false
	}
	return o.ContractAmount, true
}

// HasContractAmount returns a boolean if a field has been set.
func (o *StatementDetailsStatisticType) HasContractAmount() bool {
	if o != nil && !IsNil(o.ContractAmount) {
		return true
	}

	return false
}

// SetContractAmount gets a reference to the given CurrencyAmountType and assigns it to the ContractAmount field.
func (o *StatementDetailsStatisticType) SetContractAmount(v CurrencyAmountType) {
	o.ContractAmount = &v
}

// GetDetailsCount returns the DetailsCount field value if set, zero value otherwise.
func (o *StatementDetailsStatisticType) GetDetailsCount() int32 {
	if o == nil || IsNil(o.DetailsCount) {
		var ret int32
		return ret
	}
	return *o.DetailsCount
}

// GetDetailsCountOk returns a tuple with the DetailsCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatementDetailsStatisticType) GetDetailsCountOk() (*int32, bool) {
	if o == nil || IsNil(o.DetailsCount) {
		return nil, false
	}
	return o.DetailsCount, true
}

// HasDetailsCount returns a boolean if a field has been set.
func (o *StatementDetailsStatisticType) HasDetailsCount() bool {
	if o != nil && !IsNil(o.DetailsCount) {
		return true
	}

	return false
}

// SetDetailsCount gets a reference to the given int32 and assigns it to the DetailsCount field.
func (o *StatementDetailsStatisticType) SetDetailsCount(v int32) {
	o.DetailsCount = &v
}

// GetFeeType returns the FeeType field value if set, zero value otherwise.
func (o *StatementDetailsStatisticType) GetFeeType() ContractFeeTypeType {
	if o == nil || IsNil(o.FeeType) {
		var ret ContractFeeTypeType
		return ret
	}
	return *o.FeeType
}

// GetFeeTypeOk returns a tuple with the FeeType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatementDetailsStatisticType) GetFeeTypeOk() (*ContractFeeTypeType, bool) {
	if o == nil || IsNil(o.FeeType) {
		return nil, false
	}
	return o.FeeType, true
}

// HasFeeType returns a boolean if a field has been set.
func (o *StatementDetailsStatisticType) HasFeeType() bool {
	if o != nil && !IsNil(o.FeeType) {
		return true
	}

	return false
}

// SetFeeType gets a reference to the given ContractFeeTypeType and assigns it to the FeeType field.
func (o *StatementDetailsStatisticType) SetFeeType(v ContractFeeTypeType) {
	o.FeeType = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *StatementDetailsStatisticType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatementDetailsStatisticType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *StatementDetailsStatisticType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *StatementDetailsStatisticType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInvoiceAmount returns the InvoiceAmount field value if set, zero value otherwise.
func (o *StatementDetailsStatisticType) GetInvoiceAmount() CurrencyAmountType {
	if o == nil || IsNil(o.InvoiceAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.InvoiceAmount
}

// GetInvoiceAmountOk returns a tuple with the InvoiceAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatementDetailsStatisticType) GetInvoiceAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.InvoiceAmount) {
		return nil, false
	}
	return o.InvoiceAmount, true
}

// HasInvoiceAmount returns a boolean if a field has been set.
func (o *StatementDetailsStatisticType) HasInvoiceAmount() bool {
	if o != nil && !IsNil(o.InvoiceAmount) {
		return true
	}

	return false
}

// SetInvoiceAmount gets a reference to the given CurrencyAmountType and assigns it to the InvoiceAmount field.
func (o *StatementDetailsStatisticType) SetInvoiceAmount(v CurrencyAmountType) {
	o.InvoiceAmount = &v
}

func (o StatementDetailsStatisticType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StatementDetailsStatisticType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BookingChannelCode) {
		toSerialize["bookingChannelCode"] = o.BookingChannelCode
	}
	if !IsNil(o.BookingChannelType) {
		toSerialize["bookingChannelType"] = o.BookingChannelType
	}
	if !IsNil(o.ContractAmount) {
		toSerialize["contractAmount"] = o.ContractAmount
	}
	if !IsNil(o.DetailsCount) {
		toSerialize["detailsCount"] = o.DetailsCount
	}
	if !IsNil(o.FeeType) {
		toSerialize["feeType"] = o.FeeType
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.InvoiceAmount) {
		toSerialize["invoiceAmount"] = o.InvoiceAmount
	}
	return toSerialize, nil
}

type NullableStatementDetailsStatisticType struct {
	value *StatementDetailsStatisticType
	isSet bool
}

func (v NullableStatementDetailsStatisticType) Get() *StatementDetailsStatisticType {
	return v.value
}

func (v *NullableStatementDetailsStatisticType) Set(val *StatementDetailsStatisticType) {
	v.value = val
	v.isSet = true
}

func (v NullableStatementDetailsStatisticType) IsSet() bool {
	return v.isSet
}

func (v *NullableStatementDetailsStatisticType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStatementDetailsStatisticType(val *StatementDetailsStatisticType) *NullableStatementDetailsStatisticType {
	return &NullableStatementDetailsStatisticType{value: val, isSet: true}
}

func (v NullableStatementDetailsStatisticType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStatementDetailsStatisticType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


