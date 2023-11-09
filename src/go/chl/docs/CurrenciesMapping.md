# CurrenciesMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**CurrenciesMapping** | Pointer to [**CurrenciesMappingType**](CurrenciesMappingType.md) |  | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCurrenciesMapping

`func NewCurrenciesMapping() *CurrenciesMapping`

NewCurrenciesMapping instantiates a new CurrenciesMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCurrenciesMappingWithDefaults

`func NewCurrenciesMappingWithDefaults() *CurrenciesMapping`

NewCurrenciesMappingWithDefaults instantiates a new CurrenciesMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *CurrenciesMapping) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CurrenciesMapping) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CurrenciesMapping) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CurrenciesMapping) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetCurrenciesMapping

`func (o *CurrenciesMapping) GetCurrenciesMapping() CurrenciesMappingType`

GetCurrenciesMapping returns the CurrenciesMapping field if non-nil, zero value otherwise.

### GetCurrenciesMappingOk

`func (o *CurrenciesMapping) GetCurrenciesMappingOk() (*CurrenciesMappingType, bool)`

GetCurrenciesMappingOk returns a tuple with the CurrenciesMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrenciesMapping

`func (o *CurrenciesMapping) SetCurrenciesMapping(v CurrenciesMappingType)`

SetCurrenciesMapping sets CurrenciesMapping field to given value.

### HasCurrenciesMapping

`func (o *CurrenciesMapping) HasCurrenciesMapping() bool`

HasCurrenciesMapping returns a boolean if a field has been set.

### GetHasMore

`func (o *CurrenciesMapping) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *CurrenciesMapping) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *CurrenciesMapping) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *CurrenciesMapping) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *CurrenciesMapping) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *CurrenciesMapping) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *CurrenciesMapping) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *CurrenciesMapping) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *CurrenciesMapping) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CurrenciesMapping) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CurrenciesMapping) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CurrenciesMapping) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *CurrenciesMapping) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *CurrenciesMapping) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *CurrenciesMapping) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *CurrenciesMapping) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *CurrenciesMapping) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *CurrenciesMapping) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *CurrenciesMapping) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *CurrenciesMapping) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *CurrenciesMapping) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *CurrenciesMapping) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *CurrenciesMapping) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *CurrenciesMapping) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *CurrenciesMapping) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CurrenciesMapping) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CurrenciesMapping) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CurrenciesMapping) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


