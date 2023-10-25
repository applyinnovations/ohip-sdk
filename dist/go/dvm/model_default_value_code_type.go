/*
OPERA Cloud DataValueMapping Service API

APIs which offer external systems to config and use values different than what are configured in opera<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package dvm

import (
	"encoding/json"
	"fmt"
)

// DefaultValueCodeType Enumeration of the different default codes.
type DefaultValueCodeType string

// List of defaultValueCodeType
const (
	DEFAULTVALUECODETYPE_ADDRESS_TYPES DefaultValueCodeType = "AddressTypes"
	DEFAULTVALUECODETYPE_AVAILABILITY_TYPE DefaultValueCodeType = "AvailabilityType"
	DEFAULTVALUECODETYPE_BLOCK_CANCELLATION_CODES DefaultValueCodeType = "BlockCancellationCodes"
	DEFAULTVALUECODETYPE_BLOCK_CHANNEL_CODE DefaultValueCodeType = "BlockChannelCode"
	DEFAULTVALUECODETYPE_BLOCK_MARKET_CODE DefaultValueCodeType = "BlockMarketCode"
	DEFAULTVALUECODETYPE_BLOCK_OWNER DefaultValueCodeType = "BlockOwner"
	DEFAULTVALUECODETYPE_BLOCK_RATE_CODE DefaultValueCodeType = "BlockRateCode"
	DEFAULTVALUECODETYPE_BLOCK_RESERVATION_TYPE DefaultValueCodeType = "BlockReservationType"
	DEFAULTVALUECODETYPE_BLOCK_SOURCE_CODE DefaultValueCodeType = "BlockSourceCode"
	DEFAULTVALUECODETYPE_BLOCK_STATUS DefaultValueCodeType = "BlockStatus"
	DEFAULTVALUECODETYPE_BLOCK_TYPE DefaultValueCodeType = "BlockType"
	DEFAULTVALUECODETYPE_CANCELLATION_CODES DefaultValueCodeType = "CancellationCodes"
	DEFAULTVALUECODETYPE_CASHIER_ID DefaultValueCodeType = "CashierId"
	DEFAULTVALUECODETYPE_COUNTRY_CODE DefaultValueCodeType = "CountryCode"
	DEFAULTVALUECODETYPE_CHANNEL_CODES DefaultValueCodeType = "ChannelCodes"
	DEFAULTVALUECODETYPE_CONF_LETTER_ID DefaultValueCodeType = "ConfLetterId"
	DEFAULTVALUECODETYPE_CONF_LETTER_NAME DefaultValueCodeType = "ConfLetterName"
	DEFAULTVALUECODETYPE_CRS_CURRENCY_CODE DefaultValueCodeType = "CrsCurrencyCode"
	DEFAULTVALUECODETYPE_CRS_CURRENCY_FMT_DISPLAY DefaultValueCodeType = "CrsCurrencyFmtDisplay"
	DEFAULTVALUECODETYPE_CRS_CURRENCY_FORMAT DefaultValueCodeType = "CrsCurrencyFormat"
	DEFAULTVALUECODETYPE_CRS_CURRENCY_MULTIPLIER DefaultValueCodeType = "CrsCurrencyMultiplier"
	DEFAULTVALUECODETYPE_CURRENCY_CODE DefaultValueCodeType = "CurrencyCode"
	DEFAULTVALUECODETYPE_CUSTOM1 DefaultValueCodeType = "Custom1"
	DEFAULTVALUECODETYPE_CUSTOM2 DefaultValueCodeType = "Custom2"
	DEFAULTVALUECODETYPE_DELETE_CHAR_IND DefaultValueCodeType = "DeleteCharInd"
	DEFAULTVALUECODETYPE_DELETE_DATE_IND DefaultValueCodeType = "DeleteDateInd"
	DEFAULTVALUECODETYPE_DELETE_NUMBER_IND DefaultValueCodeType = "DeleteNumberInd"
	DEFAULTVALUECODETYPE_DEPOSIT_PAYMENT_METHOD DefaultValueCodeType = "DepositPaymentMethod"
	DEFAULTVALUECODETYPE_DEPT_CODES DefaultValueCodeType = "DeptCodes"
	DEFAULTVALUECODETYPE_DISCOUNT_REASON DefaultValueCodeType = "DiscountReason"
	DEFAULTVALUECODETYPE_GUEST_PREFERENCES DefaultValueCodeType = "GuestPreferences"
	DEFAULTVALUECODETYPE_HIGH_PRIO_MEM_TYPES DefaultValueCodeType = "HighPrioMemTypes"
	DEFAULTVALUECODETYPE_KEEPING_CHAR_IND DefaultValueCodeType = "KeepingCharInd"
	DEFAULTVALUECODETYPE_KEEPING_DATE_IND DefaultValueCodeType = "KeepingDateInd"
	DEFAULTVALUECODETYPE_KEEPING_NUMBER_IND DefaultValueCodeType = "KeepingNumberInd"
	DEFAULTVALUECODETYPE_LANGUAGE_CODES DefaultValueCodeType = "LanguageCodes"
	DEFAULTVALUECODETYPE_MARKET_CODE DefaultValueCodeType = "MarketCode"
	DEFAULTVALUECODETYPE_MAX_AVAIL_IN_ADVANCE DefaultValueCodeType = "MaxAvailInAdvance"
	DEFAULTVALUECODETYPE_PAYMENT_METHOD DefaultValueCodeType = "PaymentMethod"
	DEFAULTVALUECODETYPE_PHONE_TYPE DefaultValueCodeType = "PhoneType"
	DEFAULTVALUECODETYPE_RATE_CATEGORY DefaultValueCodeType = "RateCategory"
	DEFAULTVALUECODETYPE_RATE_CLASS DefaultValueCodeType = "RateClass"
	DEFAULTVALUECODETYPE_RATE_CODE DefaultValueCodeType = "RateCode"
	DEFAULTVALUECODETYPE_RATE_DISPLAY_SET DefaultValueCodeType = "RateDisplaySet"
	DEFAULTVALUECODETYPE_RESERVATION_TYPE DefaultValueCodeType = "ReservationType"
	DEFAULTVALUECODETYPE_ROOM_CATEGORY_LABEL DefaultValueCodeType = "RoomCategoryLabel"
	DEFAULTVALUECODETYPE_SC_DESTINATION DefaultValueCodeType = "ScDestination"
	DEFAULTVALUECODETYPE_SOURCE_CODE DefaultValueCodeType = "SourceCode"
	DEFAULTVALUECODETYPE_START_DAY_OF_WEEK DefaultValueCodeType = "StartDayOfWeek"
	DEFAULTVALUECODETYPE_TA_COMPANY_OWNER DefaultValueCodeType = "TaCompanyOwner"
	DEFAULTVALUECODETYPE_TRACE1 DefaultValueCodeType = "Trace1"
	DEFAULTVALUECODETYPE_TRACE2 DefaultValueCodeType = "Trace2"
	DEFAULTVALUECODETYPE_TRACE_ARRIVAL_DEPT1 DefaultValueCodeType = "TraceArrivalDept1"
	DEFAULTVALUECODETYPE_TRACE_ARRIVAL_DEPT2 DefaultValueCodeType = "TraceArrivalDept2"
	DEFAULTVALUECODETYPE_TRACE_OVERRIDE_DEPT1 DefaultValueCodeType = "TraceOverrideDept1"
	DEFAULTVALUECODETYPE_TRACE_OVERRIDE_DEPT2 DefaultValueCodeType = "TraceOverrideDept2"
	DEFAULTVALUECODETYPE_TRACE_OVERRIDE_WARNING DefaultValueCodeType = "TraceOverrideWarning"
	DEFAULTVALUECODETYPE_TRACE_WARNING DefaultValueCodeType = "TraceWarning"
	DEFAULTVALUECODETYPE_TRAVEL_AGENT_COMMISSION_CODES DefaultValueCodeType = "TravelAgentCommissionCodes"
	DEFAULTVALUECODETYPE_TRAVEL_AGENT_CURRENCY_CODES DefaultValueCodeType = "TravelAgentCurrencyCodes"
	DEFAULTVALUECODETYPE_TRAVEL_AGENT_CURRENCY_CODES_CENTRAL DefaultValueCodeType = "TravelAgentCurrencyCodesCentral"
	DEFAULTVALUECODETYPE_VIP_LEVEL DefaultValueCodeType = "VipLevel"
	DEFAULTVALUECODETYPE_WAITLIST_CODES DefaultValueCodeType = "WaitlistCodes"
	DEFAULTVALUECODETYPE_PROFILE_NOTE_TYPE DefaultValueCodeType = "ProfileNoteType"
	DEFAULTVALUECODETYPE_BLOCK_NOTE_TYPE DefaultValueCodeType = "BlockNoteType"
)

// All allowed values of DefaultValueCodeType enum
var AllowedDefaultValueCodeTypeEnumValues = []DefaultValueCodeType{
	"AddressTypes",
	"AvailabilityType",
	"BlockCancellationCodes",
	"BlockChannelCode",
	"BlockMarketCode",
	"BlockOwner",
	"BlockRateCode",
	"BlockReservationType",
	"BlockSourceCode",
	"BlockStatus",
	"BlockType",
	"CancellationCodes",
	"CashierId",
	"CountryCode",
	"ChannelCodes",
	"ConfLetterId",
	"ConfLetterName",
	"CrsCurrencyCode",
	"CrsCurrencyFmtDisplay",
	"CrsCurrencyFormat",
	"CrsCurrencyMultiplier",
	"CurrencyCode",
	"Custom1",
	"Custom2",
	"DeleteCharInd",
	"DeleteDateInd",
	"DeleteNumberInd",
	"DepositPaymentMethod",
	"DeptCodes",
	"DiscountReason",
	"GuestPreferences",
	"HighPrioMemTypes",
	"KeepingCharInd",
	"KeepingDateInd",
	"KeepingNumberInd",
	"LanguageCodes",
	"MarketCode",
	"MaxAvailInAdvance",
	"PaymentMethod",
	"PhoneType",
	"RateCategory",
	"RateClass",
	"RateCode",
	"RateDisplaySet",
	"ReservationType",
	"RoomCategoryLabel",
	"ScDestination",
	"SourceCode",
	"StartDayOfWeek",
	"TaCompanyOwner",
	"Trace1",
	"Trace2",
	"TraceArrivalDept1",
	"TraceArrivalDept2",
	"TraceOverrideDept1",
	"TraceOverrideDept2",
	"TraceOverrideWarning",
	"TraceWarning",
	"TravelAgentCommissionCodes",
	"TravelAgentCurrencyCodes",
	"TravelAgentCurrencyCodesCentral",
	"VipLevel",
	"WaitlistCodes",
	"ProfileNoteType",
	"BlockNoteType",
}

func (v *DefaultValueCodeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := DefaultValueCodeType(value)
	for _, existing := range AllowedDefaultValueCodeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid DefaultValueCodeType", value)
}

// NewDefaultValueCodeTypeFromValue returns a pointer to a valid DefaultValueCodeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewDefaultValueCodeTypeFromValue(v string) (*DefaultValueCodeType, error) {
	ev := DefaultValueCodeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for DefaultValueCodeType: valid values are %v", v, AllowedDefaultValueCodeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v DefaultValueCodeType) IsValid() bool {
	for _, existing := range AllowedDefaultValueCodeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to defaultValueCodeType value
func (v DefaultValueCodeType) Ptr() *DefaultValueCodeType {
	return &v
}

type NullableDefaultValueCodeType struct {
	value *DefaultValueCodeType
	isSet bool
}

func (v NullableDefaultValueCodeType) Get() *DefaultValueCodeType {
	return v.value
}

func (v *NullableDefaultValueCodeType) Set(val *DefaultValueCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableDefaultValueCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableDefaultValueCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDefaultValueCodeType(val *DefaultValueCodeType) *NullableDefaultValueCodeType {
	return &NullableDefaultValueCodeType{value: val, isSet: true}
}

func (v NullableDefaultValueCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDefaultValueCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

