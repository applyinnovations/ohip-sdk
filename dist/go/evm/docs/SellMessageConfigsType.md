# SellMessageConfigsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellMessageConfig** | Pointer to [**[]SellMessageConfigType**](SellMessageConfigType.md) |  | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewSellMessageConfigsType

`func NewSellMessageConfigsType() *SellMessageConfigsType`

NewSellMessageConfigsType instantiates a new SellMessageConfigsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSellMessageConfigsTypeWithDefaults

`func NewSellMessageConfigsTypeWithDefaults() *SellMessageConfigsType`

NewSellMessageConfigsTypeWithDefaults instantiates a new SellMessageConfigsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSellMessageConfig

`func (o *SellMessageConfigsType) GetSellMessageConfig() []SellMessageConfigType`

GetSellMessageConfig returns the SellMessageConfig field if non-nil, zero value otherwise.

### GetSellMessageConfigOk

`func (o *SellMessageConfigsType) GetSellMessageConfigOk() (*[]SellMessageConfigType, bool)`

GetSellMessageConfigOk returns a tuple with the SellMessageConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellMessageConfig

`func (o *SellMessageConfigsType) SetSellMessageConfig(v []SellMessageConfigType)`

SetSellMessageConfig sets SellMessageConfig field to given value.

### HasSellMessageConfig

`func (o *SellMessageConfigsType) HasSellMessageConfig() bool`

HasSellMessageConfig returns a boolean if a field has been set.

### GetHasMore

`func (o *SellMessageConfigsType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *SellMessageConfigsType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *SellMessageConfigsType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *SellMessageConfigsType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *SellMessageConfigsType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *SellMessageConfigsType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *SellMessageConfigsType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *SellMessageConfigsType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *SellMessageConfigsType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SellMessageConfigsType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SellMessageConfigsType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *SellMessageConfigsType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


