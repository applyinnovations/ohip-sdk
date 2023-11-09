# CreateARInvoiceCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | Pointer to [**ARAccountCriteriaType**](ARAccountCriteriaType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**Charges** | Pointer to [**ChargesCriteriaType**](ChargesCriteriaType.md) |  | [optional] 
**FiscalFolioInfo** | Pointer to [**FiscalServiceType**](FiscalServiceType.md) |  | [optional] 
**FolioNameValue** | Pointer to [**[]NameValueHeaderDetailType**](NameValueHeaderDetailType.md) | Custom Folio Name Value Information to be saved | [optional] 
**GuestProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Market** | Pointer to **string** | Invoice market code. | [optional] 
**OverrideCreditHoldCheck** | Pointer to **bool** |  | [optional] 
**Reason** | Pointer to [**FolioReasonType**](FolioReasonType.md) |  | [optional] 
**Reference** | Pointer to **string** | User-defined invoice reference. | [optional] 
**Remark** | Pointer to **string** | User-defined invoice remark. | [optional] 
**RoomClass** | Pointer to **string** | Invoice room class code. | [optional] 
**Source** | Pointer to **string** | Invoice source code. | [optional] 

## Methods

### NewCreateARInvoiceCriteriaType

`func NewCreateARInvoiceCriteriaType() *CreateARInvoiceCriteriaType`

NewCreateARInvoiceCriteriaType instantiates a new CreateARInvoiceCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateARInvoiceCriteriaTypeWithDefaults

`func NewCreateARInvoiceCriteriaTypeWithDefaults() *CreateARInvoiceCriteriaType`

NewCreateARInvoiceCriteriaTypeWithDefaults instantiates a new CreateARInvoiceCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *CreateARInvoiceCriteriaType) GetAccount() ARAccountCriteriaType`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *CreateARInvoiceCriteriaType) GetAccountOk() (*ARAccountCriteriaType, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *CreateARInvoiceCriteriaType) SetAccount(v ARAccountCriteriaType)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *CreateARInvoiceCriteriaType) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetCashierId

`func (o *CreateARInvoiceCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *CreateARInvoiceCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *CreateARInvoiceCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *CreateARInvoiceCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetCharges

`func (o *CreateARInvoiceCriteriaType) GetCharges() ChargesCriteriaType`

GetCharges returns the Charges field if non-nil, zero value otherwise.

### GetChargesOk

`func (o *CreateARInvoiceCriteriaType) GetChargesOk() (*ChargesCriteriaType, bool)`

GetChargesOk returns a tuple with the Charges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharges

`func (o *CreateARInvoiceCriteriaType) SetCharges(v ChargesCriteriaType)`

SetCharges sets Charges field to given value.

### HasCharges

`func (o *CreateARInvoiceCriteriaType) HasCharges() bool`

HasCharges returns a boolean if a field has been set.

### GetFiscalFolioInfo

`func (o *CreateARInvoiceCriteriaType) GetFiscalFolioInfo() FiscalServiceType`

GetFiscalFolioInfo returns the FiscalFolioInfo field if non-nil, zero value otherwise.

### GetFiscalFolioInfoOk

`func (o *CreateARInvoiceCriteriaType) GetFiscalFolioInfoOk() (*FiscalServiceType, bool)`

GetFiscalFolioInfoOk returns a tuple with the FiscalFolioInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioInfo

`func (o *CreateARInvoiceCriteriaType) SetFiscalFolioInfo(v FiscalServiceType)`

SetFiscalFolioInfo sets FiscalFolioInfo field to given value.

### HasFiscalFolioInfo

`func (o *CreateARInvoiceCriteriaType) HasFiscalFolioInfo() bool`

HasFiscalFolioInfo returns a boolean if a field has been set.

### GetFolioNameValue

`func (o *CreateARInvoiceCriteriaType) GetFolioNameValue() []NameValueHeaderDetailType`

GetFolioNameValue returns the FolioNameValue field if non-nil, zero value otherwise.

### GetFolioNameValueOk

`func (o *CreateARInvoiceCriteriaType) GetFolioNameValueOk() (*[]NameValueHeaderDetailType, bool)`

GetFolioNameValueOk returns a tuple with the FolioNameValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNameValue

`func (o *CreateARInvoiceCriteriaType) SetFolioNameValue(v []NameValueHeaderDetailType)`

SetFolioNameValue sets FolioNameValue field to given value.

### HasFolioNameValue

`func (o *CreateARInvoiceCriteriaType) HasFolioNameValue() bool`

HasFolioNameValue returns a boolean if a field has been set.

### GetGuestProfileId

`func (o *CreateARInvoiceCriteriaType) GetGuestProfileId() UniqueIDType`

GetGuestProfileId returns the GuestProfileId field if non-nil, zero value otherwise.

### GetGuestProfileIdOk

`func (o *CreateARInvoiceCriteriaType) GetGuestProfileIdOk() (*UniqueIDType, bool)`

GetGuestProfileIdOk returns a tuple with the GuestProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestProfileId

`func (o *CreateARInvoiceCriteriaType) SetGuestProfileId(v UniqueIDType)`

SetGuestProfileId sets GuestProfileId field to given value.

### HasGuestProfileId

`func (o *CreateARInvoiceCriteriaType) HasGuestProfileId() bool`

HasGuestProfileId returns a boolean if a field has been set.

### GetMarket

`func (o *CreateARInvoiceCriteriaType) GetMarket() string`

GetMarket returns the Market field if non-nil, zero value otherwise.

### GetMarketOk

`func (o *CreateARInvoiceCriteriaType) GetMarketOk() (*string, bool)`

GetMarketOk returns a tuple with the Market field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarket

`func (o *CreateARInvoiceCriteriaType) SetMarket(v string)`

SetMarket sets Market field to given value.

### HasMarket

`func (o *CreateARInvoiceCriteriaType) HasMarket() bool`

HasMarket returns a boolean if a field has been set.

### GetOverrideCreditHoldCheck

`func (o *CreateARInvoiceCriteriaType) GetOverrideCreditHoldCheck() bool`

GetOverrideCreditHoldCheck returns the OverrideCreditHoldCheck field if non-nil, zero value otherwise.

### GetOverrideCreditHoldCheckOk

`func (o *CreateARInvoiceCriteriaType) GetOverrideCreditHoldCheckOk() (*bool, bool)`

GetOverrideCreditHoldCheckOk returns a tuple with the OverrideCreditHoldCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideCreditHoldCheck

`func (o *CreateARInvoiceCriteriaType) SetOverrideCreditHoldCheck(v bool)`

SetOverrideCreditHoldCheck sets OverrideCreditHoldCheck field to given value.

### HasOverrideCreditHoldCheck

`func (o *CreateARInvoiceCriteriaType) HasOverrideCreditHoldCheck() bool`

HasOverrideCreditHoldCheck returns a boolean if a field has been set.

### GetReason

`func (o *CreateARInvoiceCriteriaType) GetReason() FolioReasonType`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *CreateARInvoiceCriteriaType) GetReasonOk() (*FolioReasonType, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *CreateARInvoiceCriteriaType) SetReason(v FolioReasonType)`

SetReason sets Reason field to given value.

### HasReason

`func (o *CreateARInvoiceCriteriaType) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetReference

`func (o *CreateARInvoiceCriteriaType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *CreateARInvoiceCriteriaType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *CreateARInvoiceCriteriaType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *CreateARInvoiceCriteriaType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetRemark

`func (o *CreateARInvoiceCriteriaType) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *CreateARInvoiceCriteriaType) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *CreateARInvoiceCriteriaType) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *CreateARInvoiceCriteriaType) HasRemark() bool`

HasRemark returns a boolean if a field has been set.

### GetRoomClass

`func (o *CreateARInvoiceCriteriaType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *CreateARInvoiceCriteriaType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *CreateARInvoiceCriteriaType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *CreateARInvoiceCriteriaType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetSource

`func (o *CreateARInvoiceCriteriaType) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *CreateARInvoiceCriteriaType) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *CreateARInvoiceCriteriaType) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *CreateARInvoiceCriteriaType) HasSource() bool`

HasSource returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


