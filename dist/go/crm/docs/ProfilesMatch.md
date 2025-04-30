# ProfilesMatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfilesMatchList** | Pointer to [**[]ProfilesMatchType**](ProfilesMatchType.md) | List of profiles matches. The values are ordered by default using main profile first name. | [optional] 
**Offset** | Pointer to **int32** | Indicates the index of the next applicable set(page). | [optional] 
**Limit** | Pointer to **int32** | Indicates number of records the API can return as per the API request limit sent. A maximum of 200 records can be only returned at a time. | [optional] 
**Count** | Pointer to **int32** | Indicates number of records the API has returned actually as per the API request criteria. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether there are more records available to be returned as per the API request criteria or not. | [optional] 
**TotalResults** | Pointer to **int32** | Indicates total number of records available that can be returned as per the API request criteria. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfilesMatch

`func NewProfilesMatch() *ProfilesMatch`

NewProfilesMatch instantiates a new ProfilesMatch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfilesMatchWithDefaults

`func NewProfilesMatchWithDefaults() *ProfilesMatch`

NewProfilesMatchWithDefaults instantiates a new ProfilesMatch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfilesMatchList

`func (o *ProfilesMatch) GetProfilesMatchList() []ProfilesMatchType`

GetProfilesMatchList returns the ProfilesMatchList field if non-nil, zero value otherwise.

### GetProfilesMatchListOk

`func (o *ProfilesMatch) GetProfilesMatchListOk() (*[]ProfilesMatchType, bool)`

GetProfilesMatchListOk returns a tuple with the ProfilesMatchList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfilesMatchList

`func (o *ProfilesMatch) SetProfilesMatchList(v []ProfilesMatchType)`

SetProfilesMatchList sets ProfilesMatchList field to given value.

### HasProfilesMatchList

`func (o *ProfilesMatch) HasProfilesMatchList() bool`

HasProfilesMatchList returns a boolean if a field has been set.

### GetOffset

`func (o *ProfilesMatch) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *ProfilesMatch) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *ProfilesMatch) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *ProfilesMatch) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *ProfilesMatch) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *ProfilesMatch) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *ProfilesMatch) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *ProfilesMatch) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetCount

`func (o *ProfilesMatch) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ProfilesMatch) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ProfilesMatch) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ProfilesMatch) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *ProfilesMatch) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ProfilesMatch) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ProfilesMatch) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ProfilesMatch) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *ProfilesMatch) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ProfilesMatch) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ProfilesMatch) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ProfilesMatch) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetLinks

`func (o *ProfilesMatch) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfilesMatch) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfilesMatch) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfilesMatch) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfilesMatch) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfilesMatch) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfilesMatch) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfilesMatch) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


