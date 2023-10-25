# PutForeignCurrenciesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ForeignCurrencies** | Pointer to [**[]ForeignCurrencyType**](ForeignCurrencyType.md) | List of the Foreign Currencies to be configured or fetched | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutForeignCurrenciesRequest

`func NewPutForeignCurrenciesRequest() *PutForeignCurrenciesRequest`

NewPutForeignCurrenciesRequest instantiates a new PutForeignCurrenciesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutForeignCurrenciesRequestWithDefaults

`func NewPutForeignCurrenciesRequestWithDefaults() *PutForeignCurrenciesRequest`

NewPutForeignCurrenciesRequestWithDefaults instantiates a new PutForeignCurrenciesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForeignCurrencies

`func (o *PutForeignCurrenciesRequest) GetForeignCurrencies() []ForeignCurrencyType`

GetForeignCurrencies returns the ForeignCurrencies field if non-nil, zero value otherwise.

### GetForeignCurrenciesOk

`func (o *PutForeignCurrenciesRequest) GetForeignCurrenciesOk() (*[]ForeignCurrencyType, bool)`

GetForeignCurrenciesOk returns a tuple with the ForeignCurrencies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForeignCurrencies

`func (o *PutForeignCurrenciesRequest) SetForeignCurrencies(v []ForeignCurrencyType)`

SetForeignCurrencies sets ForeignCurrencies field to given value.

### HasForeignCurrencies

`func (o *PutForeignCurrenciesRequest) HasForeignCurrencies() bool`

HasForeignCurrencies returns a boolean if a field has been set.

### GetLinks

`func (o *PutForeignCurrenciesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutForeignCurrenciesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutForeignCurrenciesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutForeignCurrenciesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutForeignCurrenciesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutForeignCurrenciesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutForeignCurrenciesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutForeignCurrenciesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


