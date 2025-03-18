# CreditBillCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property where the charges are to be posted. | [optional] 
**Charges** | Pointer to [**[]ChargeCriteriaType**](ChargeCriteriaType.md) | Collection of Charges to be posted. | [optional] 
**Payments** | Pointer to [**[]PaymentCriteriaType**](PaymentCriteriaType.md) | The payment information to be posted. | [optional] 
**FiscalFolioInfo** | Pointer to [**FiscalServiceType**](FiscalServiceType.md) |  | [optional] 
**IncomeAuditDate** | Pointer to **string** | Date of the Audit. This is used when postings are being created using the Income Audit functionality. | [optional] 
**FiscalTerminalId** | Pointer to **string** | Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected. | [optional] 
**FolioNameValue** | Pointer to [**[]NameValueHeaderDetailType**](NameValueHeaderDetailType.md) | Custom Folio Name Value Informatoin to be saved | [optional] 
**TrxServiceType** | Pointer to **string** | Transaction service type which the Folio is being associated. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**OriginalFolio** | Pointer to [**FolioType**](FolioType.md) |  | [optional] 
**FullCredit** | Pointer to **bool** | Flag can be used when a Credit Bill is to be created for full set of transactions in the Original Bill. | [optional] 
**Reason** | Pointer to [**FolioReasonType**](FolioReasonType.md) |  | [optional] 

## Methods

### NewCreditBillCriteriaType

`func NewCreditBillCriteriaType() *CreditBillCriteriaType`

NewCreditBillCriteriaType instantiates a new CreditBillCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditBillCriteriaTypeWithDefaults

`func NewCreditBillCriteriaTypeWithDefaults() *CreditBillCriteriaType`

NewCreditBillCriteriaTypeWithDefaults instantiates a new CreditBillCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CreditBillCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CreditBillCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CreditBillCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CreditBillCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCharges

`func (o *CreditBillCriteriaType) GetCharges() []ChargeCriteriaType`

GetCharges returns the Charges field if non-nil, zero value otherwise.

### GetChargesOk

`func (o *CreditBillCriteriaType) GetChargesOk() (*[]ChargeCriteriaType, bool)`

GetChargesOk returns a tuple with the Charges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharges

`func (o *CreditBillCriteriaType) SetCharges(v []ChargeCriteriaType)`

SetCharges sets Charges field to given value.

### HasCharges

`func (o *CreditBillCriteriaType) HasCharges() bool`

HasCharges returns a boolean if a field has been set.

### GetPayments

`func (o *CreditBillCriteriaType) GetPayments() []PaymentCriteriaType`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *CreditBillCriteriaType) GetPaymentsOk() (*[]PaymentCriteriaType, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *CreditBillCriteriaType) SetPayments(v []PaymentCriteriaType)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *CreditBillCriteriaType) HasPayments() bool`

HasPayments returns a boolean if a field has been set.

### GetFiscalFolioInfo

`func (o *CreditBillCriteriaType) GetFiscalFolioInfo() FiscalServiceType`

GetFiscalFolioInfo returns the FiscalFolioInfo field if non-nil, zero value otherwise.

### GetFiscalFolioInfoOk

`func (o *CreditBillCriteriaType) GetFiscalFolioInfoOk() (*FiscalServiceType, bool)`

GetFiscalFolioInfoOk returns a tuple with the FiscalFolioInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioInfo

`func (o *CreditBillCriteriaType) SetFiscalFolioInfo(v FiscalServiceType)`

SetFiscalFolioInfo sets FiscalFolioInfo field to given value.

### HasFiscalFolioInfo

`func (o *CreditBillCriteriaType) HasFiscalFolioInfo() bool`

HasFiscalFolioInfo returns a boolean if a field has been set.

### GetIncomeAuditDate

`func (o *CreditBillCriteriaType) GetIncomeAuditDate() string`

GetIncomeAuditDate returns the IncomeAuditDate field if non-nil, zero value otherwise.

### GetIncomeAuditDateOk

`func (o *CreditBillCriteriaType) GetIncomeAuditDateOk() (*string, bool)`

GetIncomeAuditDateOk returns a tuple with the IncomeAuditDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncomeAuditDate

`func (o *CreditBillCriteriaType) SetIncomeAuditDate(v string)`

SetIncomeAuditDate sets IncomeAuditDate field to given value.

### HasIncomeAuditDate

`func (o *CreditBillCriteriaType) HasIncomeAuditDate() bool`

HasIncomeAuditDate returns a boolean if a field has been set.

### GetFiscalTerminalId

`func (o *CreditBillCriteriaType) GetFiscalTerminalId() string`

GetFiscalTerminalId returns the FiscalTerminalId field if non-nil, zero value otherwise.

### GetFiscalTerminalIdOk

`func (o *CreditBillCriteriaType) GetFiscalTerminalIdOk() (*string, bool)`

GetFiscalTerminalIdOk returns a tuple with the FiscalTerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalTerminalId

`func (o *CreditBillCriteriaType) SetFiscalTerminalId(v string)`

SetFiscalTerminalId sets FiscalTerminalId field to given value.

### HasFiscalTerminalId

`func (o *CreditBillCriteriaType) HasFiscalTerminalId() bool`

HasFiscalTerminalId returns a boolean if a field has been set.

### GetFolioNameValue

`func (o *CreditBillCriteriaType) GetFolioNameValue() []NameValueHeaderDetailType`

GetFolioNameValue returns the FolioNameValue field if non-nil, zero value otherwise.

### GetFolioNameValueOk

`func (o *CreditBillCriteriaType) GetFolioNameValueOk() (*[]NameValueHeaderDetailType, bool)`

GetFolioNameValueOk returns a tuple with the FolioNameValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNameValue

`func (o *CreditBillCriteriaType) SetFolioNameValue(v []NameValueHeaderDetailType)`

SetFolioNameValue sets FolioNameValue field to given value.

### HasFolioNameValue

`func (o *CreditBillCriteriaType) HasFolioNameValue() bool`

HasFolioNameValue returns a boolean if a field has been set.

### GetTrxServiceType

`func (o *CreditBillCriteriaType) GetTrxServiceType() string`

GetTrxServiceType returns the TrxServiceType field if non-nil, zero value otherwise.

### GetTrxServiceTypeOk

`func (o *CreditBillCriteriaType) GetTrxServiceTypeOk() (*string, bool)`

GetTrxServiceTypeOk returns a tuple with the TrxServiceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxServiceType

`func (o *CreditBillCriteriaType) SetTrxServiceType(v string)`

SetTrxServiceType sets TrxServiceType field to given value.

### HasTrxServiceType

`func (o *CreditBillCriteriaType) HasTrxServiceType() bool`

HasTrxServiceType returns a boolean if a field has been set.

### GetCashierId

`func (o *CreditBillCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *CreditBillCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *CreditBillCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *CreditBillCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetOriginalFolio

`func (o *CreditBillCriteriaType) GetOriginalFolio() FolioType`

GetOriginalFolio returns the OriginalFolio field if non-nil, zero value otherwise.

### GetOriginalFolioOk

`func (o *CreditBillCriteriaType) GetOriginalFolioOk() (*FolioType, bool)`

GetOriginalFolioOk returns a tuple with the OriginalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalFolio

`func (o *CreditBillCriteriaType) SetOriginalFolio(v FolioType)`

SetOriginalFolio sets OriginalFolio field to given value.

### HasOriginalFolio

`func (o *CreditBillCriteriaType) HasOriginalFolio() bool`

HasOriginalFolio returns a boolean if a field has been set.

### GetFullCredit

`func (o *CreditBillCriteriaType) GetFullCredit() bool`

GetFullCredit returns the FullCredit field if non-nil, zero value otherwise.

### GetFullCreditOk

`func (o *CreditBillCriteriaType) GetFullCreditOk() (*bool, bool)`

GetFullCreditOk returns a tuple with the FullCredit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullCredit

`func (o *CreditBillCriteriaType) SetFullCredit(v bool)`

SetFullCredit sets FullCredit field to given value.

### HasFullCredit

`func (o *CreditBillCriteriaType) HasFullCredit() bool`

HasFullCredit returns a boolean if a field has been set.

### GetReason

`func (o *CreditBillCriteriaType) GetReason() FolioReasonType`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *CreditBillCriteriaType) GetReasonOk() (*FolioReasonType, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *CreditBillCriteriaType) SetReason(v FolioReasonType)`

SetReason sets Reason field to given value.

### HasReason

`func (o *CreditBillCriteriaType) HasReason() bool`

HasReason returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


