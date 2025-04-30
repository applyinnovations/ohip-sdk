# ActivitiesInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivitiesInformation** | Pointer to [**[]ActivityDetailsType**](ActivityDetailsType.md) | Activity information in detail. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewActivitiesInfo

`func NewActivitiesInfo() *ActivitiesInfo`

NewActivitiesInfo instantiates a new ActivitiesInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivitiesInfoWithDefaults

`func NewActivitiesInfoWithDefaults() *ActivitiesInfo`

NewActivitiesInfoWithDefaults instantiates a new ActivitiesInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivitiesInformation

`func (o *ActivitiesInfo) GetActivitiesInformation() []ActivityDetailsType`

GetActivitiesInformation returns the ActivitiesInformation field if non-nil, zero value otherwise.

### GetActivitiesInformationOk

`func (o *ActivitiesInfo) GetActivitiesInformationOk() (*[]ActivityDetailsType, bool)`

GetActivitiesInformationOk returns a tuple with the ActivitiesInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivitiesInformation

`func (o *ActivitiesInfo) SetActivitiesInformation(v []ActivityDetailsType)`

SetActivitiesInformation sets ActivitiesInformation field to given value.

### HasActivitiesInformation

`func (o *ActivitiesInfo) HasActivitiesInformation() bool`

HasActivitiesInformation returns a boolean if a field has been set.

### GetTotalPages

`func (o *ActivitiesInfo) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *ActivitiesInfo) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *ActivitiesInfo) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *ActivitiesInfo) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *ActivitiesInfo) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *ActivitiesInfo) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *ActivitiesInfo) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *ActivitiesInfo) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *ActivitiesInfo) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *ActivitiesInfo) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *ActivitiesInfo) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *ActivitiesInfo) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *ActivitiesInfo) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ActivitiesInfo) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ActivitiesInfo) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ActivitiesInfo) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *ActivitiesInfo) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ActivitiesInfo) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ActivitiesInfo) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ActivitiesInfo) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *ActivitiesInfo) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ActivitiesInfo) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ActivitiesInfo) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ActivitiesInfo) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetLinks

`func (o *ActivitiesInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ActivitiesInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ActivitiesInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ActivitiesInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ActivitiesInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ActivitiesInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ActivitiesInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ActivitiesInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


