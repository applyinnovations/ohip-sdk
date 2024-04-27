# ChangePayeeTaxNumberCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**IgnoreWarnings** | Pointer to **bool** | Flag to ignore warnings while updating a payee folio tax number. | [optional] 
**PayeeId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TaxNumber** | Pointer to **string** | Payee Tax Number. | [optional] 

## Methods

### NewChangePayeeTaxNumberCriteriaType

`func NewChangePayeeTaxNumberCriteriaType() *ChangePayeeTaxNumberCriteriaType`

NewChangePayeeTaxNumberCriteriaType instantiates a new ChangePayeeTaxNumberCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangePayeeTaxNumberCriteriaTypeWithDefaults

`func NewChangePayeeTaxNumberCriteriaTypeWithDefaults() *ChangePayeeTaxNumberCriteriaType`

NewChangePayeeTaxNumberCriteriaTypeWithDefaults instantiates a new ChangePayeeTaxNumberCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *ChangePayeeTaxNumberCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ChangePayeeTaxNumberCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ChangePayeeTaxNumberCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ChangePayeeTaxNumberCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetHotelId

`func (o *ChangePayeeTaxNumberCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChangePayeeTaxNumberCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChangePayeeTaxNumberCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChangePayeeTaxNumberCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetIgnoreWarnings

`func (o *ChangePayeeTaxNumberCriteriaType) GetIgnoreWarnings() bool`

GetIgnoreWarnings returns the IgnoreWarnings field if non-nil, zero value otherwise.

### GetIgnoreWarningsOk

`func (o *ChangePayeeTaxNumberCriteriaType) GetIgnoreWarningsOk() (*bool, bool)`

GetIgnoreWarningsOk returns a tuple with the IgnoreWarnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreWarnings

`func (o *ChangePayeeTaxNumberCriteriaType) SetIgnoreWarnings(v bool)`

SetIgnoreWarnings sets IgnoreWarnings field to given value.

### HasIgnoreWarnings

`func (o *ChangePayeeTaxNumberCriteriaType) HasIgnoreWarnings() bool`

HasIgnoreWarnings returns a boolean if a field has been set.

### GetPayeeId

`func (o *ChangePayeeTaxNumberCriteriaType) GetPayeeId() UniqueIDType`

GetPayeeId returns the PayeeId field if non-nil, zero value otherwise.

### GetPayeeIdOk

`func (o *ChangePayeeTaxNumberCriteriaType) GetPayeeIdOk() (*UniqueIDType, bool)`

GetPayeeIdOk returns a tuple with the PayeeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeId

`func (o *ChangePayeeTaxNumberCriteriaType) SetPayeeId(v UniqueIDType)`

SetPayeeId sets PayeeId field to given value.

### HasPayeeId

`func (o *ChangePayeeTaxNumberCriteriaType) HasPayeeId() bool`

HasPayeeId returns a boolean if a field has been set.

### GetTaxNumber

`func (o *ChangePayeeTaxNumberCriteriaType) GetTaxNumber() string`

GetTaxNumber returns the TaxNumber field if non-nil, zero value otherwise.

### GetTaxNumberOk

`func (o *ChangePayeeTaxNumberCriteriaType) GetTaxNumberOk() (*string, bool)`

GetTaxNumberOk returns a tuple with the TaxNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxNumber

`func (o *ChangePayeeTaxNumberCriteriaType) SetTaxNumber(v string)`

SetTaxNumber sets TaxNumber field to given value.

### HasTaxNumber

`func (o *ChangePayeeTaxNumberCriteriaType) HasTaxNumber() bool`

HasTaxNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


