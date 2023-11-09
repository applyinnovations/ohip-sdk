# PutCurrenciesMappingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Currencies** | Pointer to [**CurrenciesMappingType**](CurrenciesMappingType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutCurrenciesMappingRequest

`func NewPutCurrenciesMappingRequest() *PutCurrenciesMappingRequest`

NewPutCurrenciesMappingRequest instantiates a new PutCurrenciesMappingRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutCurrenciesMappingRequestWithDefaults

`func NewPutCurrenciesMappingRequestWithDefaults() *PutCurrenciesMappingRequest`

NewPutCurrenciesMappingRequestWithDefaults instantiates a new PutCurrenciesMappingRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrencies

`func (o *PutCurrenciesMappingRequest) GetCurrencies() CurrenciesMappingType`

GetCurrencies returns the Currencies field if non-nil, zero value otherwise.

### GetCurrenciesOk

`func (o *PutCurrenciesMappingRequest) GetCurrenciesOk() (*CurrenciesMappingType, bool)`

GetCurrenciesOk returns a tuple with the Currencies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencies

`func (o *PutCurrenciesMappingRequest) SetCurrencies(v CurrenciesMappingType)`

SetCurrencies sets Currencies field to given value.

### HasCurrencies

`func (o *PutCurrenciesMappingRequest) HasCurrencies() bool`

HasCurrencies returns a boolean if a field has been set.

### GetLinks

`func (o *PutCurrenciesMappingRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutCurrenciesMappingRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutCurrenciesMappingRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutCurrenciesMappingRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutCurrenciesMappingRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutCurrenciesMappingRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutCurrenciesMappingRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutCurrenciesMappingRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


