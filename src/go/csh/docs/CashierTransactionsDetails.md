# CashierTransactionsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierTransactionsInfo** | Pointer to [**CashierTransactionsType**](CashierTransactionsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCashierTransactionsDetails

`func NewCashierTransactionsDetails() *CashierTransactionsDetails`

NewCashierTransactionsDetails instantiates a new CashierTransactionsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCashierTransactionsDetailsWithDefaults

`func NewCashierTransactionsDetailsWithDefaults() *CashierTransactionsDetails`

NewCashierTransactionsDetailsWithDefaults instantiates a new CashierTransactionsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierTransactionsInfo

`func (o *CashierTransactionsDetails) GetCashierTransactionsInfo() CashierTransactionsType`

GetCashierTransactionsInfo returns the CashierTransactionsInfo field if non-nil, zero value otherwise.

### GetCashierTransactionsInfoOk

`func (o *CashierTransactionsDetails) GetCashierTransactionsInfoOk() (*CashierTransactionsType, bool)`

GetCashierTransactionsInfoOk returns a tuple with the CashierTransactionsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierTransactionsInfo

`func (o *CashierTransactionsDetails) SetCashierTransactionsInfo(v CashierTransactionsType)`

SetCashierTransactionsInfo sets CashierTransactionsInfo field to given value.

### HasCashierTransactionsInfo

`func (o *CashierTransactionsDetails) HasCashierTransactionsInfo() bool`

HasCashierTransactionsInfo returns a boolean if a field has been set.

### GetLinks

`func (o *CashierTransactionsDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CashierTransactionsDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CashierTransactionsDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CashierTransactionsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CashierTransactionsDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CashierTransactionsDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CashierTransactionsDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CashierTransactionsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


