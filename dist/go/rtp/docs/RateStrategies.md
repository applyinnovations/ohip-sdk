# RateStrategies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateStrategies** | Pointer to [**RateStrategiesType**](RateStrategiesType.md) |  | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRateStrategies

`func NewRateStrategies() *RateStrategies`

NewRateStrategies instantiates a new RateStrategies object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateStrategiesWithDefaults

`func NewRateStrategiesWithDefaults() *RateStrategies`

NewRateStrategiesWithDefaults instantiates a new RateStrategies object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateStrategies

`func (o *RateStrategies) GetRateStrategies() RateStrategiesType`

GetRateStrategies returns the RateStrategies field if non-nil, zero value otherwise.

### GetRateStrategiesOk

`func (o *RateStrategies) GetRateStrategiesOk() (*RateStrategiesType, bool)`

GetRateStrategiesOk returns a tuple with the RateStrategies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateStrategies

`func (o *RateStrategies) SetRateStrategies(v RateStrategiesType)`

SetRateStrategies sets RateStrategies field to given value.

### HasRateStrategies

`func (o *RateStrategies) HasRateStrategies() bool`

HasRateStrategies returns a boolean if a field has been set.

### GetTotalPages

`func (o *RateStrategies) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *RateStrategies) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *RateStrategies) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *RateStrategies) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *RateStrategies) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RateStrategies) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RateStrategies) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RateStrategies) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *RateStrategies) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *RateStrategies) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *RateStrategies) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *RateStrategies) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *RateStrategies) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RateStrategies) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RateStrategies) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RateStrategies) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *RateStrategies) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RateStrategies) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RateStrategies) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RateStrategies) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetLinks

`func (o *RateStrategies) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateStrategies) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateStrategies) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateStrategies) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RateStrategies) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RateStrategies) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RateStrategies) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RateStrategies) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


