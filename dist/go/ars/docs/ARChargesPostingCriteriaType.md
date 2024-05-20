# ARChargesPostingCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | Pointer to [**ARAccountCriteriaType**](ARAccountCriteriaType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**Charges** | Pointer to [**[]ChargeCriteriaType**](ChargeCriteriaType.md) | Collection of Charges to be posted. | [optional] 
**HotelId** | Pointer to **string** | Property where the charges are to be posted. | [optional] 
**Invoice** | Pointer to [**ARInvoiceType**](ARInvoiceType.md) |  | [optional] 
**OverrideCreditHoldCheck** | Pointer to **bool** |  | [optional] 

## Methods

### NewARChargesPostingCriteriaType

`func NewARChargesPostingCriteriaType() *ARChargesPostingCriteriaType`

NewARChargesPostingCriteriaType instantiates a new ARChargesPostingCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARChargesPostingCriteriaTypeWithDefaults

`func NewARChargesPostingCriteriaTypeWithDefaults() *ARChargesPostingCriteriaType`

NewARChargesPostingCriteriaTypeWithDefaults instantiates a new ARChargesPostingCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *ARChargesPostingCriteriaType) GetAccount() ARAccountCriteriaType`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *ARChargesPostingCriteriaType) GetAccountOk() (*ARAccountCriteriaType, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *ARChargesPostingCriteriaType) SetAccount(v ARAccountCriteriaType)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *ARChargesPostingCriteriaType) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetCashierId

`func (o *ARChargesPostingCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ARChargesPostingCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ARChargesPostingCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ARChargesPostingCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetCharges

`func (o *ARChargesPostingCriteriaType) GetCharges() []ChargeCriteriaType`

GetCharges returns the Charges field if non-nil, zero value otherwise.

### GetChargesOk

`func (o *ARChargesPostingCriteriaType) GetChargesOk() (*[]ChargeCriteriaType, bool)`

GetChargesOk returns a tuple with the Charges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharges

`func (o *ARChargesPostingCriteriaType) SetCharges(v []ChargeCriteriaType)`

SetCharges sets Charges field to given value.

### HasCharges

`func (o *ARChargesPostingCriteriaType) HasCharges() bool`

HasCharges returns a boolean if a field has been set.

### GetHotelId

`func (o *ARChargesPostingCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARChargesPostingCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARChargesPostingCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARChargesPostingCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInvoice

`func (o *ARChargesPostingCriteriaType) GetInvoice() ARInvoiceType`

GetInvoice returns the Invoice field if non-nil, zero value otherwise.

### GetInvoiceOk

`func (o *ARChargesPostingCriteriaType) GetInvoiceOk() (*ARInvoiceType, bool)`

GetInvoiceOk returns a tuple with the Invoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoice

`func (o *ARChargesPostingCriteriaType) SetInvoice(v ARInvoiceType)`

SetInvoice sets Invoice field to given value.

### HasInvoice

`func (o *ARChargesPostingCriteriaType) HasInvoice() bool`

HasInvoice returns a boolean if a field has been set.

### GetOverrideCreditHoldCheck

`func (o *ARChargesPostingCriteriaType) GetOverrideCreditHoldCheck() bool`

GetOverrideCreditHoldCheck returns the OverrideCreditHoldCheck field if non-nil, zero value otherwise.

### GetOverrideCreditHoldCheckOk

`func (o *ARChargesPostingCriteriaType) GetOverrideCreditHoldCheckOk() (*bool, bool)`

GetOverrideCreditHoldCheckOk returns a tuple with the OverrideCreditHoldCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideCreditHoldCheck

`func (o *ARChargesPostingCriteriaType) SetOverrideCreditHoldCheck(v bool)`

SetOverrideCreditHoldCheck sets OverrideCreditHoldCheck field to given value.

### HasOverrideCreditHoldCheck

`func (o *ARChargesPostingCriteriaType) HasOverrideCreditHoldCheck() bool`

HasOverrideCreditHoldCheck returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


