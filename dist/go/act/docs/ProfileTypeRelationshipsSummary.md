# ProfileTypeRelationshipsSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Relationship** | Pointer to [**[]RelationshipInfoSummaryType**](RelationshipInfoSummaryType.md) | A collection of the profiles summary that have a relationship with this profile. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewProfileTypeRelationshipsSummary

`func NewProfileTypeRelationshipsSummary() *ProfileTypeRelationshipsSummary`

NewProfileTypeRelationshipsSummary instantiates a new ProfileTypeRelationshipsSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypeRelationshipsSummaryWithDefaults

`func NewProfileTypeRelationshipsSummaryWithDefaults() *ProfileTypeRelationshipsSummary`

NewProfileTypeRelationshipsSummaryWithDefaults instantiates a new ProfileTypeRelationshipsSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRelationship

`func (o *ProfileTypeRelationshipsSummary) GetRelationship() []RelationshipInfoSummaryType`

GetRelationship returns the Relationship field if non-nil, zero value otherwise.

### GetRelationshipOk

`func (o *ProfileTypeRelationshipsSummary) GetRelationshipOk() (*[]RelationshipInfoSummaryType, bool)`

GetRelationshipOk returns a tuple with the Relationship field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationship

`func (o *ProfileTypeRelationshipsSummary) SetRelationship(v []RelationshipInfoSummaryType)`

SetRelationship sets Relationship field to given value.

### HasRelationship

`func (o *ProfileTypeRelationshipsSummary) HasRelationship() bool`

HasRelationship returns a boolean if a field has been set.

### GetHasMore

`func (o *ProfileTypeRelationshipsSummary) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ProfileTypeRelationshipsSummary) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ProfileTypeRelationshipsSummary) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ProfileTypeRelationshipsSummary) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *ProfileTypeRelationshipsSummary) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ProfileTypeRelationshipsSummary) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ProfileTypeRelationshipsSummary) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ProfileTypeRelationshipsSummary) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *ProfileTypeRelationshipsSummary) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ProfileTypeRelationshipsSummary) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ProfileTypeRelationshipsSummary) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ProfileTypeRelationshipsSummary) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


