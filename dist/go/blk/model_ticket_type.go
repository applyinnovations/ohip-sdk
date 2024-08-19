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

// checks if the TicketType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TicketType{}

// TicketType Reservation Ticket Type Information.
type TicketType struct {
	// Tickets comsumption date.
	ConsumptionDate *string `json:"consumptionDate,omitempty"`
	// Package description.
	Description *string `json:"description,omitempty"`
	// Tickets issue date.
	IssueDate *string `json:"issueDate,omitempty"`
	// Package Code.
	PackageCode *string `json:"packageCode,omitempty"`
	// Tickets price.
	Price *float32 `json:"price,omitempty"`
	// Number of tickets used to create multiple tickets.
	Quantity *int32 `json:"quantity,omitempty"`
	// The Rate Code to which tickets belong to.
	RateCode *string `json:"rateCode,omitempty"`
	// Free text field for reference information.
	Reference *string `json:"reference,omitempty"`
	ReservationProductId *UniqueIDType `json:"reservationProductId,omitempty"`
	// The Status Code for outbound WS call.
	Status *string `json:"status,omitempty"`
	// The Status Description for outbound WS call.
	StatusDescription *string `json:"statusDescription,omitempty"`
	TicketId *UniqueIDType `json:"ticketId,omitempty"`
	TicketNumber *UniqueIDType `json:"ticketNumber,omitempty"`
}

// NewTicketType instantiates a new TicketType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTicketType() *TicketType {
	this := TicketType{}
	return &this
}

// NewTicketTypeWithDefaults instantiates a new TicketType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTicketTypeWithDefaults() *TicketType {
	this := TicketType{}
	return &this
}

// GetConsumptionDate returns the ConsumptionDate field value if set, zero value otherwise.
func (o *TicketType) GetConsumptionDate() string {
	if o == nil || IsNil(o.ConsumptionDate) {
		var ret string
		return ret
	}
	return *o.ConsumptionDate
}

// GetConsumptionDateOk returns a tuple with the ConsumptionDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketType) GetConsumptionDateOk() (*string, bool) {
	if o == nil || IsNil(o.ConsumptionDate) {
		return nil, false
	}
	return o.ConsumptionDate, true
}

// HasConsumptionDate returns a boolean if a field has been set.
func (o *TicketType) HasConsumptionDate() bool {
	if o != nil && !IsNil(o.ConsumptionDate) {
		return true
	}

	return false
}

// SetConsumptionDate gets a reference to the given string and assigns it to the ConsumptionDate field.
func (o *TicketType) SetConsumptionDate(v string) {
	o.ConsumptionDate = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TicketType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TicketType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *TicketType) SetDescription(v string) {
	o.Description = &v
}

// GetIssueDate returns the IssueDate field value if set, zero value otherwise.
func (o *TicketType) GetIssueDate() string {
	if o == nil || IsNil(o.IssueDate) {
		var ret string
		return ret
	}
	return *o.IssueDate
}

// GetIssueDateOk returns a tuple with the IssueDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketType) GetIssueDateOk() (*string, bool) {
	if o == nil || IsNil(o.IssueDate) {
		return nil, false
	}
	return o.IssueDate, true
}

// HasIssueDate returns a boolean if a field has been set.
func (o *TicketType) HasIssueDate() bool {
	if o != nil && !IsNil(o.IssueDate) {
		return true
	}

	return false
}

// SetIssueDate gets a reference to the given string and assigns it to the IssueDate field.
func (o *TicketType) SetIssueDate(v string) {
	o.IssueDate = &v
}

// GetPackageCode returns the PackageCode field value if set, zero value otherwise.
func (o *TicketType) GetPackageCode() string {
	if o == nil || IsNil(o.PackageCode) {
		var ret string
		return ret
	}
	return *o.PackageCode
}

// GetPackageCodeOk returns a tuple with the PackageCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketType) GetPackageCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PackageCode) {
		return nil, false
	}
	return o.PackageCode, true
}

// HasPackageCode returns a boolean if a field has been set.
func (o *TicketType) HasPackageCode() bool {
	if o != nil && !IsNil(o.PackageCode) {
		return true
	}

	return false
}

// SetPackageCode gets a reference to the given string and assigns it to the PackageCode field.
func (o *TicketType) SetPackageCode(v string) {
	o.PackageCode = &v
}

// GetPrice returns the Price field value if set, zero value otherwise.
func (o *TicketType) GetPrice() float32 {
	if o == nil || IsNil(o.Price) {
		var ret float32
		return ret
	}
	return *o.Price
}

// GetPriceOk returns a tuple with the Price field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketType) GetPriceOk() (*float32, bool) {
	if o == nil || IsNil(o.Price) {
		return nil, false
	}
	return o.Price, true
}

// HasPrice returns a boolean if a field has been set.
func (o *TicketType) HasPrice() bool {
	if o != nil && !IsNil(o.Price) {
		return true
	}

	return false
}

// SetPrice gets a reference to the given float32 and assigns it to the Price field.
func (o *TicketType) SetPrice(v float32) {
	o.Price = &v
}

// GetQuantity returns the Quantity field value if set, zero value otherwise.
func (o *TicketType) GetQuantity() int32 {
	if o == nil || IsNil(o.Quantity) {
		var ret int32
		return ret
	}
	return *o.Quantity
}

// GetQuantityOk returns a tuple with the Quantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketType) GetQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.Quantity) {
		return nil, false
	}
	return o.Quantity, true
}

// HasQuantity returns a boolean if a field has been set.
func (o *TicketType) HasQuantity() bool {
	if o != nil && !IsNil(o.Quantity) {
		return true
	}

	return false
}

// SetQuantity gets a reference to the given int32 and assigns it to the Quantity field.
func (o *TicketType) SetQuantity(v int32) {
	o.Quantity = &v
}

// GetRateCode returns the RateCode field value if set, zero value otherwise.
func (o *TicketType) GetRateCode() string {
	if o == nil || IsNil(o.RateCode) {
		var ret string
		return ret
	}
	return *o.RateCode
}

// GetRateCodeOk returns a tuple with the RateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketType) GetRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RateCode) {
		return nil, false
	}
	return o.RateCode, true
}

// HasRateCode returns a boolean if a field has been set.
func (o *TicketType) HasRateCode() bool {
	if o != nil && !IsNil(o.RateCode) {
		return true
	}

	return false
}

// SetRateCode gets a reference to the given string and assigns it to the RateCode field.
func (o *TicketType) SetRateCode(v string) {
	o.RateCode = &v
}

// GetReference returns the Reference field value if set, zero value otherwise.
func (o *TicketType) GetReference() string {
	if o == nil || IsNil(o.Reference) {
		var ret string
		return ret
	}
	return *o.Reference
}

// GetReferenceOk returns a tuple with the Reference field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketType) GetReferenceOk() (*string, bool) {
	if o == nil || IsNil(o.Reference) {
		return nil, false
	}
	return o.Reference, true
}

// HasReference returns a boolean if a field has been set.
func (o *TicketType) HasReference() bool {
	if o != nil && !IsNil(o.Reference) {
		return true
	}

	return false
}

// SetReference gets a reference to the given string and assigns it to the Reference field.
func (o *TicketType) SetReference(v string) {
	o.Reference = &v
}

// GetReservationProductId returns the ReservationProductId field value if set, zero value otherwise.
func (o *TicketType) GetReservationProductId() UniqueIDType {
	if o == nil || IsNil(o.ReservationProductId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ReservationProductId
}

// GetReservationProductIdOk returns a tuple with the ReservationProductId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketType) GetReservationProductIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationProductId) {
		return nil, false
	}
	return o.ReservationProductId, true
}

// HasReservationProductId returns a boolean if a field has been set.
func (o *TicketType) HasReservationProductId() bool {
	if o != nil && !IsNil(o.ReservationProductId) {
		return true
	}

	return false
}

// SetReservationProductId gets a reference to the given UniqueIDType and assigns it to the ReservationProductId field.
func (o *TicketType) SetReservationProductId(v UniqueIDType) {
	o.ReservationProductId = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *TicketType) GetStatus() string {
	if o == nil || IsNil(o.Status) {
		var ret string
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketType) GetStatusOk() (*string, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *TicketType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given string and assigns it to the Status field.
func (o *TicketType) SetStatus(v string) {
	o.Status = &v
}

// GetStatusDescription returns the StatusDescription field value if set, zero value otherwise.
func (o *TicketType) GetStatusDescription() string {
	if o == nil || IsNil(o.StatusDescription) {
		var ret string
		return ret
	}
	return *o.StatusDescription
}

// GetStatusDescriptionOk returns a tuple with the StatusDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketType) GetStatusDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.StatusDescription) {
		return nil, false
	}
	return o.StatusDescription, true
}

// HasStatusDescription returns a boolean if a field has been set.
func (o *TicketType) HasStatusDescription() bool {
	if o != nil && !IsNil(o.StatusDescription) {
		return true
	}

	return false
}

// SetStatusDescription gets a reference to the given string and assigns it to the StatusDescription field.
func (o *TicketType) SetStatusDescription(v string) {
	o.StatusDescription = &v
}

// GetTicketId returns the TicketId field value if set, zero value otherwise.
func (o *TicketType) GetTicketId() UniqueIDType {
	if o == nil || IsNil(o.TicketId) {
		var ret UniqueIDType
		return ret
	}
	return *o.TicketId
}

// GetTicketIdOk returns a tuple with the TicketId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketType) GetTicketIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.TicketId) {
		return nil, false
	}
	return o.TicketId, true
}

// HasTicketId returns a boolean if a field has been set.
func (o *TicketType) HasTicketId() bool {
	if o != nil && !IsNil(o.TicketId) {
		return true
	}

	return false
}

// SetTicketId gets a reference to the given UniqueIDType and assigns it to the TicketId field.
func (o *TicketType) SetTicketId(v UniqueIDType) {
	o.TicketId = &v
}

// GetTicketNumber returns the TicketNumber field value if set, zero value otherwise.
func (o *TicketType) GetTicketNumber() UniqueIDType {
	if o == nil || IsNil(o.TicketNumber) {
		var ret UniqueIDType
		return ret
	}
	return *o.TicketNumber
}

// GetTicketNumberOk returns a tuple with the TicketNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketType) GetTicketNumberOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.TicketNumber) {
		return nil, false
	}
	return o.TicketNumber, true
}

// HasTicketNumber returns a boolean if a field has been set.
func (o *TicketType) HasTicketNumber() bool {
	if o != nil && !IsNil(o.TicketNumber) {
		return true
	}

	return false
}

// SetTicketNumber gets a reference to the given UniqueIDType and assigns it to the TicketNumber field.
func (o *TicketType) SetTicketNumber(v UniqueIDType) {
	o.TicketNumber = &v
}

func (o TicketType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TicketType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ConsumptionDate) {
		toSerialize["consumptionDate"] = o.ConsumptionDate
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.IssueDate) {
		toSerialize["issueDate"] = o.IssueDate
	}
	if !IsNil(o.PackageCode) {
		toSerialize["packageCode"] = o.PackageCode
	}
	if !IsNil(o.Price) {
		toSerialize["price"] = o.Price
	}
	if !IsNil(o.Quantity) {
		toSerialize["quantity"] = o.Quantity
	}
	if !IsNil(o.RateCode) {
		toSerialize["rateCode"] = o.RateCode
	}
	if !IsNil(o.Reference) {
		toSerialize["reference"] = o.Reference
	}
	if !IsNil(o.ReservationProductId) {
		toSerialize["reservationProductId"] = o.ReservationProductId
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	if !IsNil(o.StatusDescription) {
		toSerialize["statusDescription"] = o.StatusDescription
	}
	if !IsNil(o.TicketId) {
		toSerialize["ticketId"] = o.TicketId
	}
	if !IsNil(o.TicketNumber) {
		toSerialize["ticketNumber"] = o.TicketNumber
	}
	return toSerialize, nil
}

type NullableTicketType struct {
	value *TicketType
	isSet bool
}

func (v NullableTicketType) Get() *TicketType {
	return v.value
}

func (v *NullableTicketType) Set(val *TicketType) {
	v.value = val
	v.isSet = true
}

func (v NullableTicketType) IsSet() bool {
	return v.isSet
}

func (v *NullableTicketType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTicketType(val *TicketType) *NullableTicketType {
	return &NullableTicketType{value: val, isSet: true}
}

func (v NullableTicketType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTicketType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


