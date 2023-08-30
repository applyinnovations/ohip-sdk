# PasserByCriteriaType

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
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 

## Methods

### NewPasserByCriteriaType

`func NewPasserByCriteriaType() *PasserByCriteriaType`

NewPasserByCriteriaType instantiates a new PasserByCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasserByCriteriaTypeWithDefaults

`func NewPasserByCriteriaTypeWithDefaults() *PasserByCriteriaType`

NewPasserByCriteriaTypeWithDefaults instantiates a new PasserByCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PasserByCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PasserByCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PasserByCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PasserByCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCharges

`func (o *PasserByCriteriaType) GetCharges() []ChargeCriteriaType`

GetCharges returns the Charges field if non-nil, zero value otherwise.

### GetChargesOk

`func (o *PasserByCriteriaType) GetChargesOk() (*[]ChargeCriteriaType, bool)`

GetChargesOk returns a tuple with the Charges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharges

`func (o *PasserByCriteriaType) SetCharges(v []ChargeCriteriaType)`

SetCharges sets Charges field to given value.

### HasCharges

`func (o *PasserByCriteriaType) HasCharges() bool`

HasCharges returns a boolean if a field has been set.

### GetPayments

`func (o *PasserByCriteriaType) GetPayments() []PaymentCriteriaType`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *PasserByCriteriaType) GetPaymentsOk() (*[]PaymentCriteriaType, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *PasserByCriteriaType) SetPayments(v []PaymentCriteriaType)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *PasserByCriteriaType) HasPayments() bool`

HasPayments returns a boolean if a field has been set.

### GetFiscalFolioInfo

`func (o *PasserByCriteriaType) GetFiscalFolioInfo() FiscalServiceType`

GetFiscalFolioInfo returns the FiscalFolioInfo field if non-nil, zero value otherwise.

### GetFiscalFolioInfoOk

`func (o *PasserByCriteriaType) GetFiscalFolioInfoOk() (*FiscalServiceType, bool)`

GetFiscalFolioInfoOk returns a tuple with the FiscalFolioInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioInfo

`func (o *PasserByCriteriaType) SetFiscalFolioInfo(v FiscalServiceType)`

SetFiscalFolioInfo sets FiscalFolioInfo field to given value.

### HasFiscalFolioInfo

`func (o *PasserByCriteriaType) HasFiscalFolioInfo() bool`

HasFiscalFolioInfo returns a boolean if a field has been set.

### GetIncomeAuditDate

`func (o *PasserByCriteriaType) GetIncomeAuditDate() string`

GetIncomeAuditDate returns the IncomeAuditDate field if non-nil, zero value otherwise.

### GetIncomeAuditDateOk

`func (o *PasserByCriteriaType) GetIncomeAuditDateOk() (*string, bool)`

GetIncomeAuditDateOk returns a tuple with the IncomeAuditDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncomeAuditDate

`func (o *PasserByCriteriaType) SetIncomeAuditDate(v string)`

SetIncomeAuditDate sets IncomeAuditDate field to given value.

### HasIncomeAuditDate

`func (o *PasserByCriteriaType) HasIncomeAuditDate() bool`

HasIncomeAuditDate returns a boolean if a field has been set.

### GetFiscalTerminalId

`func (o *PasserByCriteriaType) GetFiscalTerminalId() string`

GetFiscalTerminalId returns the FiscalTerminalId field if non-nil, zero value otherwise.

### GetFiscalTerminalIdOk

`func (o *PasserByCriteriaType) GetFiscalTerminalIdOk() (*string, bool)`

GetFiscalTerminalIdOk returns a tuple with the FiscalTerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalTerminalId

`func (o *PasserByCriteriaType) SetFiscalTerminalId(v string)`

SetFiscalTerminalId sets FiscalTerminalId field to given value.

### HasFiscalTerminalId

`func (o *PasserByCriteriaType) HasFiscalTerminalId() bool`

HasFiscalTerminalId returns a boolean if a field has been set.

### GetFolioNameValue

`func (o *PasserByCriteriaType) GetFolioNameValue() []NameValueHeaderDetailType`

GetFolioNameValue returns the FolioNameValue field if non-nil, zero value otherwise.

### GetFolioNameValueOk

`func (o *PasserByCriteriaType) GetFolioNameValueOk() (*[]NameValueHeaderDetailType, bool)`

GetFolioNameValueOk returns a tuple with the FolioNameValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNameValue

`func (o *PasserByCriteriaType) SetFolioNameValue(v []NameValueHeaderDetailType)`

SetFolioNameValue sets FolioNameValue field to given value.

### HasFolioNameValue

`func (o *PasserByCriteriaType) HasFolioNameValue() bool`

HasFolioNameValue returns a boolean if a field has been set.

### GetTrxServiceType

`func (o *PasserByCriteriaType) GetTrxServiceType() string`

GetTrxServiceType returns the TrxServiceType field if non-nil, zero value otherwise.

### GetTrxServiceTypeOk

`func (o *PasserByCriteriaType) GetTrxServiceTypeOk() (*string, bool)`

GetTrxServiceTypeOk returns a tuple with the TrxServiceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxServiceType

`func (o *PasserByCriteriaType) SetTrxServiceType(v string)`

SetTrxServiceType sets TrxServiceType field to given value.

### HasTrxServiceType

`func (o *PasserByCriteriaType) HasTrxServiceType() bool`

HasTrxServiceType returns a boolean if a field has been set.

### GetCashierId

`func (o *PasserByCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *PasserByCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *PasserByCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *PasserByCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetProfileId

`func (o *PasserByCriteriaType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *PasserByCriteriaType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *PasserByCriteriaType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *PasserByCriteriaType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


