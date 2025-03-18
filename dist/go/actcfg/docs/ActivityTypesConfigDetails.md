# ActivityTypesConfigDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityConfigTypes** | Pointer to [**[]ActivityConfigTypeDetailType**](ActivityConfigTypeDetailType.md) | Detailed information of activity type. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewActivityTypesConfigDetails

`func NewActivityTypesConfigDetails() *ActivityTypesConfigDetails`

NewActivityTypesConfigDetails instantiates a new ActivityTypesConfigDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityTypesConfigDetailsWithDefaults

`func NewActivityTypesConfigDetailsWithDefaults() *ActivityTypesConfigDetails`

NewActivityTypesConfigDetailsWithDefaults instantiates a new ActivityTypesConfigDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityConfigTypes

`func (o *ActivityTypesConfigDetails) GetActivityConfigTypes() []ActivityConfigTypeDetailType`

GetActivityConfigTypes returns the ActivityConfigTypes field if non-nil, zero value otherwise.

### GetActivityConfigTypesOk

`func (o *ActivityTypesConfigDetails) GetActivityConfigTypesOk() (*[]ActivityConfigTypeDetailType, bool)`

GetActivityConfigTypesOk returns a tuple with the ActivityConfigTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityConfigTypes

`func (o *ActivityTypesConfigDetails) SetActivityConfigTypes(v []ActivityConfigTypeDetailType)`

SetActivityConfigTypes sets ActivityConfigTypes field to given value.

### HasActivityConfigTypes

`func (o *ActivityTypesConfigDetails) HasActivityConfigTypes() bool`

HasActivityConfigTypes returns a boolean if a field has been set.

### GetTotalPages

`func (o *ActivityTypesConfigDetails) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *ActivityTypesConfigDetails) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *ActivityTypesConfigDetails) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *ActivityTypesConfigDetails) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *ActivityTypesConfigDetails) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *ActivityTypesConfigDetails) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *ActivityTypesConfigDetails) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *ActivityTypesConfigDetails) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *ActivityTypesConfigDetails) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *ActivityTypesConfigDetails) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *ActivityTypesConfigDetails) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *ActivityTypesConfigDetails) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *ActivityTypesConfigDetails) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ActivityTypesConfigDetails) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ActivityTypesConfigDetails) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ActivityTypesConfigDetails) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *ActivityTypesConfigDetails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ActivityTypesConfigDetails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ActivityTypesConfigDetails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ActivityTypesConfigDetails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *ActivityTypesConfigDetails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ActivityTypesConfigDetails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ActivityTypesConfigDetails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ActivityTypesConfigDetails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetLinks

`func (o *ActivityTypesConfigDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ActivityTypesConfigDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ActivityTypesConfigDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ActivityTypesConfigDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ActivityTypesConfigDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ActivityTypesConfigDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ActivityTypesConfigDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ActivityTypesConfigDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


