# ActivityResultsConfigDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityResultsConfiguration** | Pointer to [**ActivityResultsConfigListType**](ActivityResultsConfigListType.md) |  | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewActivityResultsConfigDetails

`func NewActivityResultsConfigDetails() *ActivityResultsConfigDetails`

NewActivityResultsConfigDetails instantiates a new ActivityResultsConfigDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityResultsConfigDetailsWithDefaults

`func NewActivityResultsConfigDetailsWithDefaults() *ActivityResultsConfigDetails`

NewActivityResultsConfigDetailsWithDefaults instantiates a new ActivityResultsConfigDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityResultsConfiguration

`func (o *ActivityResultsConfigDetails) GetActivityResultsConfiguration() ActivityResultsConfigListType`

GetActivityResultsConfiguration returns the ActivityResultsConfiguration field if non-nil, zero value otherwise.

### GetActivityResultsConfigurationOk

`func (o *ActivityResultsConfigDetails) GetActivityResultsConfigurationOk() (*ActivityResultsConfigListType, bool)`

GetActivityResultsConfigurationOk returns a tuple with the ActivityResultsConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityResultsConfiguration

`func (o *ActivityResultsConfigDetails) SetActivityResultsConfiguration(v ActivityResultsConfigListType)`

SetActivityResultsConfiguration sets ActivityResultsConfiguration field to given value.

### HasActivityResultsConfiguration

`func (o *ActivityResultsConfigDetails) HasActivityResultsConfiguration() bool`

HasActivityResultsConfiguration returns a boolean if a field has been set.

### GetCount

`func (o *ActivityResultsConfigDetails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ActivityResultsConfigDetails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ActivityResultsConfigDetails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ActivityResultsConfigDetails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *ActivityResultsConfigDetails) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ActivityResultsConfigDetails) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ActivityResultsConfigDetails) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ActivityResultsConfigDetails) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *ActivityResultsConfigDetails) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *ActivityResultsConfigDetails) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *ActivityResultsConfigDetails) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *ActivityResultsConfigDetails) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *ActivityResultsConfigDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ActivityResultsConfigDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ActivityResultsConfigDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ActivityResultsConfigDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *ActivityResultsConfigDetails) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *ActivityResultsConfigDetails) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *ActivityResultsConfigDetails) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *ActivityResultsConfigDetails) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *ActivityResultsConfigDetails) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *ActivityResultsConfigDetails) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *ActivityResultsConfigDetails) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *ActivityResultsConfigDetails) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *ActivityResultsConfigDetails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ActivityResultsConfigDetails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ActivityResultsConfigDetails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ActivityResultsConfigDetails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *ActivityResultsConfigDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ActivityResultsConfigDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ActivityResultsConfigDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ActivityResultsConfigDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


