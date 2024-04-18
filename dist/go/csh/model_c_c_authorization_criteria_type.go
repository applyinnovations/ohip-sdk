/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the CCAuthorizationCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CCAuthorizationCriteriaType{}

// CCAuthorizationCriteriaType Contains the credit card criteria for authorization.
type CCAuthorizationCriteriaType struct {
	Amount *CurrencyAmountType `json:"amount,omitempty"`
	// Session Id registered in the WebSocket component for asynchronous Credit Card handling.
	CcRequestId *string `json:"ccRequestId,omitempty"`
	// Flag to indicate if the approval amount should be calculated before authorization. If this is true and if the amount is 0 the approval amount will be calculated based on the rules.
	EvaluateApprovalAmount *bool `json:"evaluateApprovalAmount,omitempty"`
	// The folio window where this authorization is applied.
	FolioView *int32 `json:"folioView,omitempty"`
	// Identifies the hotel code to authorize a credit card amount for.
	HotelId *string `json:"hotelId,omitempty"`
	IncidentalAmount *CurrencyAmountType `json:"incidentalAmount,omitempty"`
	Payment *CashieringPaymentMethodType `json:"payment,omitempty"`
	ProfileId *ProfileId `json:"profileId,omitempty"`
	ReservationId *UniqueIDType `json:"reservationId,omitempty"`
	SourceOfAuthorization *CardAuthorizationTransactionType `json:"sourceOfAuthorization,omitempty"`
	// Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected.
	TerminalId *string `json:"terminalId,omitempty"`
	// Update the card details on the reservations for Chip and Pin Authorizations.
	UpdateReservation *bool `json:"updateReservation,omitempty"`
}

// NewCCAuthorizationCriteriaType instantiates a new CCAuthorizationCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCCAuthorizationCriteriaType() *CCAuthorizationCriteriaType {
	this := CCAuthorizationCriteriaType{}
	return &this
}

// NewCCAuthorizationCriteriaTypeWithDefaults instantiates a new CCAuthorizationCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCCAuthorizationCriteriaTypeWithDefaults() *CCAuthorizationCriteriaType {
	this := CCAuthorizationCriteriaType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *CCAuthorizationCriteriaType) GetAmount() CurrencyAmountType {
	if o == nil || IsNil(o.Amount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationCriteriaType) GetAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *CCAuthorizationCriteriaType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given CurrencyAmountType and assigns it to the Amount field.
func (o *CCAuthorizationCriteriaType) SetAmount(v CurrencyAmountType) {
	o.Amount = &v
}

// GetCcRequestId returns the CcRequestId field value if set, zero value otherwise.
func (o *CCAuthorizationCriteriaType) GetCcRequestId() string {
	if o == nil || IsNil(o.CcRequestId) {
		var ret string
		return ret
	}
	return *o.CcRequestId
}

// GetCcRequestIdOk returns a tuple with the CcRequestId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationCriteriaType) GetCcRequestIdOk() (*string, bool) {
	if o == nil || IsNil(o.CcRequestId) {
		return nil, false
	}
	return o.CcRequestId, true
}

// HasCcRequestId returns a boolean if a field has been set.
func (o *CCAuthorizationCriteriaType) HasCcRequestId() bool {
	if o != nil && !IsNil(o.CcRequestId) {
		return true
	}

	return false
}

// SetCcRequestId gets a reference to the given string and assigns it to the CcRequestId field.
func (o *CCAuthorizationCriteriaType) SetCcRequestId(v string) {
	o.CcRequestId = &v
}

// GetEvaluateApprovalAmount returns the EvaluateApprovalAmount field value if set, zero value otherwise.
func (o *CCAuthorizationCriteriaType) GetEvaluateApprovalAmount() bool {
	if o == nil || IsNil(o.EvaluateApprovalAmount) {
		var ret bool
		return ret
	}
	return *o.EvaluateApprovalAmount
}

// GetEvaluateApprovalAmountOk returns a tuple with the EvaluateApprovalAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationCriteriaType) GetEvaluateApprovalAmountOk() (*bool, bool) {
	if o == nil || IsNil(o.EvaluateApprovalAmount) {
		return nil, false
	}
	return o.EvaluateApprovalAmount, true
}

// HasEvaluateApprovalAmount returns a boolean if a field has been set.
func (o *CCAuthorizationCriteriaType) HasEvaluateApprovalAmount() bool {
	if o != nil && !IsNil(o.EvaluateApprovalAmount) {
		return true
	}

	return false
}

// SetEvaluateApprovalAmount gets a reference to the given bool and assigns it to the EvaluateApprovalAmount field.
func (o *CCAuthorizationCriteriaType) SetEvaluateApprovalAmount(v bool) {
	o.EvaluateApprovalAmount = &v
}

// GetFolioView returns the FolioView field value if set, zero value otherwise.
func (o *CCAuthorizationCriteriaType) GetFolioView() int32 {
	if o == nil || IsNil(o.FolioView) {
		var ret int32
		return ret
	}
	return *o.FolioView
}

// GetFolioViewOk returns a tuple with the FolioView field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationCriteriaType) GetFolioViewOk() (*int32, bool) {
	if o == nil || IsNil(o.FolioView) {
		return nil, false
	}
	return o.FolioView, true
}

// HasFolioView returns a boolean if a field has been set.
func (o *CCAuthorizationCriteriaType) HasFolioView() bool {
	if o != nil && !IsNil(o.FolioView) {
		return true
	}

	return false
}

// SetFolioView gets a reference to the given int32 and assigns it to the FolioView field.
func (o *CCAuthorizationCriteriaType) SetFolioView(v int32) {
	o.FolioView = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CCAuthorizationCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CCAuthorizationCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CCAuthorizationCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetIncidentalAmount returns the IncidentalAmount field value if set, zero value otherwise.
func (o *CCAuthorizationCriteriaType) GetIncidentalAmount() CurrencyAmountType {
	if o == nil || IsNil(o.IncidentalAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.IncidentalAmount
}

// GetIncidentalAmountOk returns a tuple with the IncidentalAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationCriteriaType) GetIncidentalAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.IncidentalAmount) {
		return nil, false
	}
	return o.IncidentalAmount, true
}

// HasIncidentalAmount returns a boolean if a field has been set.
func (o *CCAuthorizationCriteriaType) HasIncidentalAmount() bool {
	if o != nil && !IsNil(o.IncidentalAmount) {
		return true
	}

	return false
}

// SetIncidentalAmount gets a reference to the given CurrencyAmountType and assigns it to the IncidentalAmount field.
func (o *CCAuthorizationCriteriaType) SetIncidentalAmount(v CurrencyAmountType) {
	o.IncidentalAmount = &v
}

// GetPayment returns the Payment field value if set, zero value otherwise.
func (o *CCAuthorizationCriteriaType) GetPayment() CashieringPaymentMethodType {
	if o == nil || IsNil(o.Payment) {
		var ret CashieringPaymentMethodType
		return ret
	}
	return *o.Payment
}

// GetPaymentOk returns a tuple with the Payment field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationCriteriaType) GetPaymentOk() (*CashieringPaymentMethodType, bool) {
	if o == nil || IsNil(o.Payment) {
		return nil, false
	}
	return o.Payment, true
}

// HasPayment returns a boolean if a field has been set.
func (o *CCAuthorizationCriteriaType) HasPayment() bool {
	if o != nil && !IsNil(o.Payment) {
		return true
	}

	return false
}

// SetPayment gets a reference to the given CashieringPaymentMethodType and assigns it to the Payment field.
func (o *CCAuthorizationCriteriaType) SetPayment(v CashieringPaymentMethodType) {
	o.Payment = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *CCAuthorizationCriteriaType) GetProfileId() ProfileId {
	if o == nil || IsNil(o.ProfileId) {
		var ret ProfileId
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationCriteriaType) GetProfileIdOk() (*ProfileId, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *CCAuthorizationCriteriaType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given ProfileId and assigns it to the ProfileId field.
func (o *CCAuthorizationCriteriaType) SetProfileId(v ProfileId) {
	o.ProfileId = &v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *CCAuthorizationCriteriaType) GetReservationId() UniqueIDType {
	if o == nil || IsNil(o.ReservationId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationCriteriaType) GetReservationIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *CCAuthorizationCriteriaType) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given UniqueIDType and assigns it to the ReservationId field.
func (o *CCAuthorizationCriteriaType) SetReservationId(v UniqueIDType) {
	o.ReservationId = &v
}

// GetSourceOfAuthorization returns the SourceOfAuthorization field value if set, zero value otherwise.
func (o *CCAuthorizationCriteriaType) GetSourceOfAuthorization() CardAuthorizationTransactionType {
	if o == nil || IsNil(o.SourceOfAuthorization) {
		var ret CardAuthorizationTransactionType
		return ret
	}
	return *o.SourceOfAuthorization
}

// GetSourceOfAuthorizationOk returns a tuple with the SourceOfAuthorization field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationCriteriaType) GetSourceOfAuthorizationOk() (*CardAuthorizationTransactionType, bool) {
	if o == nil || IsNil(o.SourceOfAuthorization) {
		return nil, false
	}
	return o.SourceOfAuthorization, true
}

// HasSourceOfAuthorization returns a boolean if a field has been set.
func (o *CCAuthorizationCriteriaType) HasSourceOfAuthorization() bool {
	if o != nil && !IsNil(o.SourceOfAuthorization) {
		return true
	}

	return false
}

// SetSourceOfAuthorization gets a reference to the given CardAuthorizationTransactionType and assigns it to the SourceOfAuthorization field.
func (o *CCAuthorizationCriteriaType) SetSourceOfAuthorization(v CardAuthorizationTransactionType) {
	o.SourceOfAuthorization = &v
}

// GetTerminalId returns the TerminalId field value if set, zero value otherwise.
func (o *CCAuthorizationCriteriaType) GetTerminalId() string {
	if o == nil || IsNil(o.TerminalId) {
		var ret string
		return ret
	}
	return *o.TerminalId
}

// GetTerminalIdOk returns a tuple with the TerminalId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationCriteriaType) GetTerminalIdOk() (*string, bool) {
	if o == nil || IsNil(o.TerminalId) {
		return nil, false
	}
	return o.TerminalId, true
}

// HasTerminalId returns a boolean if a field has been set.
func (o *CCAuthorizationCriteriaType) HasTerminalId() bool {
	if o != nil && !IsNil(o.TerminalId) {
		return true
	}

	return false
}

// SetTerminalId gets a reference to the given string and assigns it to the TerminalId field.
func (o *CCAuthorizationCriteriaType) SetTerminalId(v string) {
	o.TerminalId = &v
}

// GetUpdateReservation returns the UpdateReservation field value if set, zero value otherwise.
func (o *CCAuthorizationCriteriaType) GetUpdateReservation() bool {
	if o == nil || IsNil(o.UpdateReservation) {
		var ret bool
		return ret
	}
	return *o.UpdateReservation
}

// GetUpdateReservationOk returns a tuple with the UpdateReservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationCriteriaType) GetUpdateReservationOk() (*bool, bool) {
	if o == nil || IsNil(o.UpdateReservation) {
		return nil, false
	}
	return o.UpdateReservation, true
}

// HasUpdateReservation returns a boolean if a field has been set.
func (o *CCAuthorizationCriteriaType) HasUpdateReservation() bool {
	if o != nil && !IsNil(o.UpdateReservation) {
		return true
	}

	return false
}

// SetUpdateReservation gets a reference to the given bool and assigns it to the UpdateReservation field.
func (o *CCAuthorizationCriteriaType) SetUpdateReservation(v bool) {
	o.UpdateReservation = &v
}

func (o CCAuthorizationCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CCAuthorizationCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.CcRequestId) {
		toSerialize["ccRequestId"] = o.CcRequestId
	}
	if !IsNil(o.EvaluateApprovalAmount) {
		toSerialize["evaluateApprovalAmount"] = o.EvaluateApprovalAmount
	}
	if !IsNil(o.FolioView) {
		toSerialize["folioView"] = o.FolioView
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.IncidentalAmount) {
		toSerialize["incidentalAmount"] = o.IncidentalAmount
	}
	if !IsNil(o.Payment) {
		toSerialize["payment"] = o.Payment
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.SourceOfAuthorization) {
		toSerialize["sourceOfAuthorization"] = o.SourceOfAuthorization
	}
	if !IsNil(o.TerminalId) {
		toSerialize["terminalId"] = o.TerminalId
	}
	if !IsNil(o.UpdateReservation) {
		toSerialize["updateReservation"] = o.UpdateReservation
	}
	return toSerialize, nil
}

type NullableCCAuthorizationCriteriaType struct {
	value *CCAuthorizationCriteriaType
	isSet bool
}

func (v NullableCCAuthorizationCriteriaType) Get() *CCAuthorizationCriteriaType {
	return v.value
}

func (v *NullableCCAuthorizationCriteriaType) Set(val *CCAuthorizationCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableCCAuthorizationCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableCCAuthorizationCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCCAuthorizationCriteriaType(val *CCAuthorizationCriteriaType) *NullableCCAuthorizationCriteriaType {
	return &NullableCCAuthorizationCriteriaType{value: val, isSet: true}
}

func (v NullableCCAuthorizationCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCCAuthorizationCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

