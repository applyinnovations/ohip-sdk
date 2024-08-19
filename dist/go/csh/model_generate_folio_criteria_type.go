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

// checks if the GenerateFolioCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GenerateFolioCriteriaType{}

// GenerateFolioCriteriaType Generate Folio Criteria type to be used for folio generation request
type GenerateFolioCriteriaType struct {
	// Flag to decide if folios is to be generated for all windows in addition to the one requested with applicable postings and zero balance. If any of the windows have non-zero balance then folios are not generated for other windows.
	AllFolioWindow *bool `json:"allFolioWindow,omitempty"`
	AssociatedBillInfo *AssociatedBillInfoType `json:"associatedBillInfo,omitempty"`
	Balance *CurrencyAmountType `json:"balance,omitempty"`
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	// Correction flag
	Correction *bool `json:"correction,omitempty"`
	// Indicates the type of folio to be generated
	DebitFolio *bool `json:"debitFolio,omitempty"`
	EventType *CashieringEventType `json:"eventType,omitempty"`
	FiscalFolioInstruction *FiscalFolioInstruction `json:"fiscalFolioInstruction,omitempty"`
	FiscalInvoicingCurrencyInfo *ExchangeRateInfoType `json:"fiscalInvoicingCurrencyInfo,omitempty"`
	// Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected.
	FiscalTerminalId *string `json:"fiscalTerminalId,omitempty"`
	// Custom Folio Name Value Information to be saved
	FolioNameValue []NameValueHeaderDetailType `json:"folioNameValue,omitempty"`
	FolioQueue *FolioQueueType `json:"folioQueue,omitempty"`
	// Fiscal Folio sequence ID stored in queue table.
	FolioSeqId *int32 `json:"folioSeqId,omitempty"`
	FolioTypeValidation *FolioTypeValidationType `json:"folioTypeValidation,omitempty"`
	FolioWindowNo *int32 `json:"folioWindowNo,omitempty"`
	// Property code.
	HotelId *string `json:"hotelId,omitempty"`
	// Manual Folio Number used for settlement during checkout
	ManualFolioNo *int32 `json:"manualFolioNo,omitempty"`
	ProfileId *ProfileId `json:"profileId,omitempty"`
	Reason *FolioReasonType `json:"reason,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
	// This flag signifies that generated Folio is Normal or Simple Folio. Certain countries of the World mandate a simple folio when the invoice amount is less than defined threshold.
	SimpleFolio *bool `json:"simpleFolio,omitempty"`
	// Contains transaction service type.
	TransactionServiceType *string `json:"transactionServiceType,omitempty"`
	// List of transaction information.
	Transactions []TransactionType `json:"transactions,omitempty"`
}

// NewGenerateFolioCriteriaType instantiates a new GenerateFolioCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGenerateFolioCriteriaType() *GenerateFolioCriteriaType {
	this := GenerateFolioCriteriaType{}
	return &this
}

// NewGenerateFolioCriteriaTypeWithDefaults instantiates a new GenerateFolioCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGenerateFolioCriteriaTypeWithDefaults() *GenerateFolioCriteriaType {
	this := GenerateFolioCriteriaType{}
	return &this
}

// GetAllFolioWindow returns the AllFolioWindow field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetAllFolioWindow() bool {
	if o == nil || IsNil(o.AllFolioWindow) {
		var ret bool
		return ret
	}
	return *o.AllFolioWindow
}

// GetAllFolioWindowOk returns a tuple with the AllFolioWindow field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetAllFolioWindowOk() (*bool, bool) {
	if o == nil || IsNil(o.AllFolioWindow) {
		return nil, false
	}
	return o.AllFolioWindow, true
}

// HasAllFolioWindow returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasAllFolioWindow() bool {
	if o != nil && !IsNil(o.AllFolioWindow) {
		return true
	}

	return false
}

// SetAllFolioWindow gets a reference to the given bool and assigns it to the AllFolioWindow field.
func (o *GenerateFolioCriteriaType) SetAllFolioWindow(v bool) {
	o.AllFolioWindow = &v
}

// GetAssociatedBillInfo returns the AssociatedBillInfo field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetAssociatedBillInfo() AssociatedBillInfoType {
	if o == nil || IsNil(o.AssociatedBillInfo) {
		var ret AssociatedBillInfoType
		return ret
	}
	return *o.AssociatedBillInfo
}

// GetAssociatedBillInfoOk returns a tuple with the AssociatedBillInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetAssociatedBillInfoOk() (*AssociatedBillInfoType, bool) {
	if o == nil || IsNil(o.AssociatedBillInfo) {
		return nil, false
	}
	return o.AssociatedBillInfo, true
}

// HasAssociatedBillInfo returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasAssociatedBillInfo() bool {
	if o != nil && !IsNil(o.AssociatedBillInfo) {
		return true
	}

	return false
}

// SetAssociatedBillInfo gets a reference to the given AssociatedBillInfoType and assigns it to the AssociatedBillInfo field.
func (o *GenerateFolioCriteriaType) SetAssociatedBillInfo(v AssociatedBillInfoType) {
	o.AssociatedBillInfo = &v
}

// GetBalance returns the Balance field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetBalance() CurrencyAmountType {
	if o == nil || IsNil(o.Balance) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Balance
}

// GetBalanceOk returns a tuple with the Balance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetBalanceOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Balance) {
		return nil, false
	}
	return o.Balance, true
}

// HasBalance returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasBalance() bool {
	if o != nil && !IsNil(o.Balance) {
		return true
	}

	return false
}

// SetBalance gets a reference to the given CurrencyAmountType and assigns it to the Balance field.
func (o *GenerateFolioCriteriaType) SetBalance(v CurrencyAmountType) {
	o.Balance = &v
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *GenerateFolioCriteriaType) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetCorrection returns the Correction field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetCorrection() bool {
	if o == nil || IsNil(o.Correction) {
		var ret bool
		return ret
	}
	return *o.Correction
}

// GetCorrectionOk returns a tuple with the Correction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetCorrectionOk() (*bool, bool) {
	if o == nil || IsNil(o.Correction) {
		return nil, false
	}
	return o.Correction, true
}

// HasCorrection returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasCorrection() bool {
	if o != nil && !IsNil(o.Correction) {
		return true
	}

	return false
}

// SetCorrection gets a reference to the given bool and assigns it to the Correction field.
func (o *GenerateFolioCriteriaType) SetCorrection(v bool) {
	o.Correction = &v
}

// GetDebitFolio returns the DebitFolio field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetDebitFolio() bool {
	if o == nil || IsNil(o.DebitFolio) {
		var ret bool
		return ret
	}
	return *o.DebitFolio
}

// GetDebitFolioOk returns a tuple with the DebitFolio field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetDebitFolioOk() (*bool, bool) {
	if o == nil || IsNil(o.DebitFolio) {
		return nil, false
	}
	return o.DebitFolio, true
}

// HasDebitFolio returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasDebitFolio() bool {
	if o != nil && !IsNil(o.DebitFolio) {
		return true
	}

	return false
}

// SetDebitFolio gets a reference to the given bool and assigns it to the DebitFolio field.
func (o *GenerateFolioCriteriaType) SetDebitFolio(v bool) {
	o.DebitFolio = &v
}

// GetEventType returns the EventType field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetEventType() CashieringEventType {
	if o == nil || IsNil(o.EventType) {
		var ret CashieringEventType
		return ret
	}
	return *o.EventType
}

// GetEventTypeOk returns a tuple with the EventType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetEventTypeOk() (*CashieringEventType, bool) {
	if o == nil || IsNil(o.EventType) {
		return nil, false
	}
	return o.EventType, true
}

// HasEventType returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasEventType() bool {
	if o != nil && !IsNil(o.EventType) {
		return true
	}

	return false
}

// SetEventType gets a reference to the given CashieringEventType and assigns it to the EventType field.
func (o *GenerateFolioCriteriaType) SetEventType(v CashieringEventType) {
	o.EventType = &v
}

// GetFiscalFolioInstruction returns the FiscalFolioInstruction field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetFiscalFolioInstruction() FiscalFolioInstruction {
	if o == nil || IsNil(o.FiscalFolioInstruction) {
		var ret FiscalFolioInstruction
		return ret
	}
	return *o.FiscalFolioInstruction
}

// GetFiscalFolioInstructionOk returns a tuple with the FiscalFolioInstruction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetFiscalFolioInstructionOk() (*FiscalFolioInstruction, bool) {
	if o == nil || IsNil(o.FiscalFolioInstruction) {
		return nil, false
	}
	return o.FiscalFolioInstruction, true
}

// HasFiscalFolioInstruction returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasFiscalFolioInstruction() bool {
	if o != nil && !IsNil(o.FiscalFolioInstruction) {
		return true
	}

	return false
}

// SetFiscalFolioInstruction gets a reference to the given FiscalFolioInstruction and assigns it to the FiscalFolioInstruction field.
func (o *GenerateFolioCriteriaType) SetFiscalFolioInstruction(v FiscalFolioInstruction) {
	o.FiscalFolioInstruction = &v
}

// GetFiscalInvoicingCurrencyInfo returns the FiscalInvoicingCurrencyInfo field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetFiscalInvoicingCurrencyInfo() ExchangeRateInfoType {
	if o == nil || IsNil(o.FiscalInvoicingCurrencyInfo) {
		var ret ExchangeRateInfoType
		return ret
	}
	return *o.FiscalInvoicingCurrencyInfo
}

// GetFiscalInvoicingCurrencyInfoOk returns a tuple with the FiscalInvoicingCurrencyInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetFiscalInvoicingCurrencyInfoOk() (*ExchangeRateInfoType, bool) {
	if o == nil || IsNil(o.FiscalInvoicingCurrencyInfo) {
		return nil, false
	}
	return o.FiscalInvoicingCurrencyInfo, true
}

// HasFiscalInvoicingCurrencyInfo returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasFiscalInvoicingCurrencyInfo() bool {
	if o != nil && !IsNil(o.FiscalInvoicingCurrencyInfo) {
		return true
	}

	return false
}

// SetFiscalInvoicingCurrencyInfo gets a reference to the given ExchangeRateInfoType and assigns it to the FiscalInvoicingCurrencyInfo field.
func (o *GenerateFolioCriteriaType) SetFiscalInvoicingCurrencyInfo(v ExchangeRateInfoType) {
	o.FiscalInvoicingCurrencyInfo = &v
}

// GetFiscalTerminalId returns the FiscalTerminalId field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetFiscalTerminalId() string {
	if o == nil || IsNil(o.FiscalTerminalId) {
		var ret string
		return ret
	}
	return *o.FiscalTerminalId
}

// GetFiscalTerminalIdOk returns a tuple with the FiscalTerminalId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetFiscalTerminalIdOk() (*string, bool) {
	if o == nil || IsNil(o.FiscalTerminalId) {
		return nil, false
	}
	return o.FiscalTerminalId, true
}

// HasFiscalTerminalId returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasFiscalTerminalId() bool {
	if o != nil && !IsNil(o.FiscalTerminalId) {
		return true
	}

	return false
}

// SetFiscalTerminalId gets a reference to the given string and assigns it to the FiscalTerminalId field.
func (o *GenerateFolioCriteriaType) SetFiscalTerminalId(v string) {
	o.FiscalTerminalId = &v
}

// GetFolioNameValue returns the FolioNameValue field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetFolioNameValue() []NameValueHeaderDetailType {
	if o == nil || IsNil(o.FolioNameValue) {
		var ret []NameValueHeaderDetailType
		return ret
	}
	return o.FolioNameValue
}

// GetFolioNameValueOk returns a tuple with the FolioNameValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetFolioNameValueOk() ([]NameValueHeaderDetailType, bool) {
	if o == nil || IsNil(o.FolioNameValue) {
		return nil, false
	}
	return o.FolioNameValue, true
}

// HasFolioNameValue returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasFolioNameValue() bool {
	if o != nil && !IsNil(o.FolioNameValue) {
		return true
	}

	return false
}

// SetFolioNameValue gets a reference to the given []NameValueHeaderDetailType and assigns it to the FolioNameValue field.
func (o *GenerateFolioCriteriaType) SetFolioNameValue(v []NameValueHeaderDetailType) {
	o.FolioNameValue = v
}

// GetFolioQueue returns the FolioQueue field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetFolioQueue() FolioQueueType {
	if o == nil || IsNil(o.FolioQueue) {
		var ret FolioQueueType
		return ret
	}
	return *o.FolioQueue
}

// GetFolioQueueOk returns a tuple with the FolioQueue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetFolioQueueOk() (*FolioQueueType, bool) {
	if o == nil || IsNil(o.FolioQueue) {
		return nil, false
	}
	return o.FolioQueue, true
}

// HasFolioQueue returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasFolioQueue() bool {
	if o != nil && !IsNil(o.FolioQueue) {
		return true
	}

	return false
}

// SetFolioQueue gets a reference to the given FolioQueueType and assigns it to the FolioQueue field.
func (o *GenerateFolioCriteriaType) SetFolioQueue(v FolioQueueType) {
	o.FolioQueue = &v
}

// GetFolioSeqId returns the FolioSeqId field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetFolioSeqId() int32 {
	if o == nil || IsNil(o.FolioSeqId) {
		var ret int32
		return ret
	}
	return *o.FolioSeqId
}

// GetFolioSeqIdOk returns a tuple with the FolioSeqId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetFolioSeqIdOk() (*int32, bool) {
	if o == nil || IsNil(o.FolioSeqId) {
		return nil, false
	}
	return o.FolioSeqId, true
}

// HasFolioSeqId returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasFolioSeqId() bool {
	if o != nil && !IsNil(o.FolioSeqId) {
		return true
	}

	return false
}

// SetFolioSeqId gets a reference to the given int32 and assigns it to the FolioSeqId field.
func (o *GenerateFolioCriteriaType) SetFolioSeqId(v int32) {
	o.FolioSeqId = &v
}

// GetFolioTypeValidation returns the FolioTypeValidation field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetFolioTypeValidation() FolioTypeValidationType {
	if o == nil || IsNil(o.FolioTypeValidation) {
		var ret FolioTypeValidationType
		return ret
	}
	return *o.FolioTypeValidation
}

// GetFolioTypeValidationOk returns a tuple with the FolioTypeValidation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetFolioTypeValidationOk() (*FolioTypeValidationType, bool) {
	if o == nil || IsNil(o.FolioTypeValidation) {
		return nil, false
	}
	return o.FolioTypeValidation, true
}

// HasFolioTypeValidation returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasFolioTypeValidation() bool {
	if o != nil && !IsNil(o.FolioTypeValidation) {
		return true
	}

	return false
}

// SetFolioTypeValidation gets a reference to the given FolioTypeValidationType and assigns it to the FolioTypeValidation field.
func (o *GenerateFolioCriteriaType) SetFolioTypeValidation(v FolioTypeValidationType) {
	o.FolioTypeValidation = &v
}

// GetFolioWindowNo returns the FolioWindowNo field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetFolioWindowNo() int32 {
	if o == nil || IsNil(o.FolioWindowNo) {
		var ret int32
		return ret
	}
	return *o.FolioWindowNo
}

// GetFolioWindowNoOk returns a tuple with the FolioWindowNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetFolioWindowNoOk() (*int32, bool) {
	if o == nil || IsNil(o.FolioWindowNo) {
		return nil, false
	}
	return o.FolioWindowNo, true
}

// HasFolioWindowNo returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasFolioWindowNo() bool {
	if o != nil && !IsNil(o.FolioWindowNo) {
		return true
	}

	return false
}

// SetFolioWindowNo gets a reference to the given int32 and assigns it to the FolioWindowNo field.
func (o *GenerateFolioCriteriaType) SetFolioWindowNo(v int32) {
	o.FolioWindowNo = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *GenerateFolioCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetManualFolioNo returns the ManualFolioNo field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetManualFolioNo() int32 {
	if o == nil || IsNil(o.ManualFolioNo) {
		var ret int32
		return ret
	}
	return *o.ManualFolioNo
}

// GetManualFolioNoOk returns a tuple with the ManualFolioNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetManualFolioNoOk() (*int32, bool) {
	if o == nil || IsNil(o.ManualFolioNo) {
		return nil, false
	}
	return o.ManualFolioNo, true
}

// HasManualFolioNo returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasManualFolioNo() bool {
	if o != nil && !IsNil(o.ManualFolioNo) {
		return true
	}

	return false
}

// SetManualFolioNo gets a reference to the given int32 and assigns it to the ManualFolioNo field.
func (o *GenerateFolioCriteriaType) SetManualFolioNo(v int32) {
	o.ManualFolioNo = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetProfileId() ProfileId {
	if o == nil || IsNil(o.ProfileId) {
		var ret ProfileId
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetProfileIdOk() (*ProfileId, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given ProfileId and assigns it to the ProfileId field.
func (o *GenerateFolioCriteriaType) SetProfileId(v ProfileId) {
	o.ProfileId = &v
}

// GetReason returns the Reason field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetReason() FolioReasonType {
	if o == nil || IsNil(o.Reason) {
		var ret FolioReasonType
		return ret
	}
	return *o.Reason
}

// GetReasonOk returns a tuple with the Reason field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetReasonOk() (*FolioReasonType, bool) {
	if o == nil || IsNil(o.Reason) {
		return nil, false
	}
	return o.Reason, true
}

// HasReason returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasReason() bool {
	if o != nil && !IsNil(o.Reason) {
		return true
	}

	return false
}

// SetReason gets a reference to the given FolioReasonType and assigns it to the Reason field.
func (o *GenerateFolioCriteriaType) SetReason(v FolioReasonType) {
	o.Reason = &v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *GenerateFolioCriteriaType) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

// GetSimpleFolio returns the SimpleFolio field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetSimpleFolio() bool {
	if o == nil || IsNil(o.SimpleFolio) {
		var ret bool
		return ret
	}
	return *o.SimpleFolio
}

// GetSimpleFolioOk returns a tuple with the SimpleFolio field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetSimpleFolioOk() (*bool, bool) {
	if o == nil || IsNil(o.SimpleFolio) {
		return nil, false
	}
	return o.SimpleFolio, true
}

// HasSimpleFolio returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasSimpleFolio() bool {
	if o != nil && !IsNil(o.SimpleFolio) {
		return true
	}

	return false
}

// SetSimpleFolio gets a reference to the given bool and assigns it to the SimpleFolio field.
func (o *GenerateFolioCriteriaType) SetSimpleFolio(v bool) {
	o.SimpleFolio = &v
}

// GetTransactionServiceType returns the TransactionServiceType field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetTransactionServiceType() string {
	if o == nil || IsNil(o.TransactionServiceType) {
		var ret string
		return ret
	}
	return *o.TransactionServiceType
}

// GetTransactionServiceTypeOk returns a tuple with the TransactionServiceType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetTransactionServiceTypeOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionServiceType) {
		return nil, false
	}
	return o.TransactionServiceType, true
}

// HasTransactionServiceType returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasTransactionServiceType() bool {
	if o != nil && !IsNil(o.TransactionServiceType) {
		return true
	}

	return false
}

// SetTransactionServiceType gets a reference to the given string and assigns it to the TransactionServiceType field.
func (o *GenerateFolioCriteriaType) SetTransactionServiceType(v string) {
	o.TransactionServiceType = &v
}

// GetTransactions returns the Transactions field value if set, zero value otherwise.
func (o *GenerateFolioCriteriaType) GetTransactions() []TransactionType {
	if o == nil || IsNil(o.Transactions) {
		var ret []TransactionType
		return ret
	}
	return o.Transactions
}

// GetTransactionsOk returns a tuple with the Transactions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenerateFolioCriteriaType) GetTransactionsOk() ([]TransactionType, bool) {
	if o == nil || IsNil(o.Transactions) {
		return nil, false
	}
	return o.Transactions, true
}

// HasTransactions returns a boolean if a field has been set.
func (o *GenerateFolioCriteriaType) HasTransactions() bool {
	if o != nil && !IsNil(o.Transactions) {
		return true
	}

	return false
}

// SetTransactions gets a reference to the given []TransactionType and assigns it to the Transactions field.
func (o *GenerateFolioCriteriaType) SetTransactions(v []TransactionType) {
	o.Transactions = v
}

func (o GenerateFolioCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GenerateFolioCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllFolioWindow) {
		toSerialize["allFolioWindow"] = o.AllFolioWindow
	}
	if !IsNil(o.AssociatedBillInfo) {
		toSerialize["associatedBillInfo"] = o.AssociatedBillInfo
	}
	if !IsNil(o.Balance) {
		toSerialize["balance"] = o.Balance
	}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.Correction) {
		toSerialize["correction"] = o.Correction
	}
	if !IsNil(o.DebitFolio) {
		toSerialize["debitFolio"] = o.DebitFolio
	}
	if !IsNil(o.EventType) {
		toSerialize["eventType"] = o.EventType
	}
	if !IsNil(o.FiscalFolioInstruction) {
		toSerialize["fiscalFolioInstruction"] = o.FiscalFolioInstruction
	}
	if !IsNil(o.FiscalInvoicingCurrencyInfo) {
		toSerialize["fiscalInvoicingCurrencyInfo"] = o.FiscalInvoicingCurrencyInfo
	}
	if !IsNil(o.FiscalTerminalId) {
		toSerialize["fiscalTerminalId"] = o.FiscalTerminalId
	}
	if !IsNil(o.FolioNameValue) {
		toSerialize["folioNameValue"] = o.FolioNameValue
	}
	if !IsNil(o.FolioQueue) {
		toSerialize["folioQueue"] = o.FolioQueue
	}
	if !IsNil(o.FolioSeqId) {
		toSerialize["folioSeqId"] = o.FolioSeqId
	}
	if !IsNil(o.FolioTypeValidation) {
		toSerialize["folioTypeValidation"] = o.FolioTypeValidation
	}
	if !IsNil(o.FolioWindowNo) {
		toSerialize["folioWindowNo"] = o.FolioWindowNo
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ManualFolioNo) {
		toSerialize["manualFolioNo"] = o.ManualFolioNo
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.Reason) {
		toSerialize["reason"] = o.Reason
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.SimpleFolio) {
		toSerialize["simpleFolio"] = o.SimpleFolio
	}
	if !IsNil(o.TransactionServiceType) {
		toSerialize["transactionServiceType"] = o.TransactionServiceType
	}
	if !IsNil(o.Transactions) {
		toSerialize["transactions"] = o.Transactions
	}
	return toSerialize, nil
}

type NullableGenerateFolioCriteriaType struct {
	value *GenerateFolioCriteriaType
	isSet bool
}

func (v NullableGenerateFolioCriteriaType) Get() *GenerateFolioCriteriaType {
	return v.value
}

func (v *NullableGenerateFolioCriteriaType) Set(val *GenerateFolioCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableGenerateFolioCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableGenerateFolioCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGenerateFolioCriteriaType(val *GenerateFolioCriteriaType) *NullableGenerateFolioCriteriaType {
	return &NullableGenerateFolioCriteriaType{value: val, isSet: true}
}

func (v NullableGenerateFolioCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGenerateFolioCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


