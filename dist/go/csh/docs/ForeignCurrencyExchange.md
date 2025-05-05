# ForeignCurrencyExchange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ForeignCurrencyExchangeList** | Pointer to [**[]PostForeignCurrencyExchangeType**](PostForeignCurrencyExchangeType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewForeignCurrencyExchange

`func NewForeignCurrencyExchange() *ForeignCurrencyExchange`

NewForeignCurrencyExchange instantiates a new ForeignCurrencyExchange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForeignCurrencyExchangeWithDefaults

`func NewForeignCurrencyExchangeWithDefaults() *ForeignCurrencyExchange`

NewForeignCurrencyExchangeWithDefaults instantiates a new ForeignCurrencyExchange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForeignCurrencyExchangeList

`func (o *ForeignCurrencyExchange) GetForeignCurrencyExchangeList() []PostForeignCurrencyExchangeType`

GetForeignCurrencyExchangeList returns the ForeignCurrencyExchangeList field if non-nil, zero value otherwise.

### GetForeignCurrencyExchangeListOk

`func (o *ForeignCurrencyExchange) GetForeignCurrencyExchangeListOk() (*[]PostForeignCurrencyExchangeType, bool)`

GetForeignCurrencyExchangeListOk returns a tuple with the ForeignCurrencyExchangeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForeignCurrencyExchangeList

`func (o *ForeignCurrencyExchange) SetForeignCurrencyExchangeList(v []PostForeignCurrencyExchangeType)`

SetForeignCurrencyExchangeList sets ForeignCurrencyExchangeList field to given value.

### HasForeignCurrencyExchangeList

`func (o *ForeignCurrencyExchange) HasForeignCurrencyExchangeList() bool`

HasForeignCurrencyExchangeList returns a boolean if a field has been set.

### GetLinks

`func (o *ForeignCurrencyExchange) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ForeignCurrencyExchange) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ForeignCurrencyExchange) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ForeignCurrencyExchange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ForeignCurrencyExchange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ForeignCurrencyExchange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ForeignCurrencyExchange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ForeignCurrencyExchange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


