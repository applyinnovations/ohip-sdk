# CompanyProfileTypeRelationships

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Relationship** | Pointer to [**[]RelationshipInfoType**](RelationshipInfoType.md) | A collection of the profiles that have a relationship with this profile. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewCompanyProfileTypeRelationships

`func NewCompanyProfileTypeRelationships() *CompanyProfileTypeRelationships`

NewCompanyProfileTypeRelationships instantiates a new CompanyProfileTypeRelationships object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompanyProfileTypeRelationshipsWithDefaults

`func NewCompanyProfileTypeRelationshipsWithDefaults() *CompanyProfileTypeRelationships`

NewCompanyProfileTypeRelationshipsWithDefaults instantiates a new CompanyProfileTypeRelationships object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRelationship

`func (o *CompanyProfileTypeRelationships) GetRelationship() []RelationshipInfoType`

GetRelationship returns the Relationship field if non-nil, zero value otherwise.

### GetRelationshipOk

`func (o *CompanyProfileTypeRelationships) GetRelationshipOk() (*[]RelationshipInfoType, bool)`

GetRelationshipOk returns a tuple with the Relationship field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationship

`func (o *CompanyProfileTypeRelationships) SetRelationship(v []RelationshipInfoType)`

SetRelationship sets Relationship field to given value.

### HasRelationship

`func (o *CompanyProfileTypeRelationships) HasRelationship() bool`

HasRelationship returns a boolean if a field has been set.

### GetHasMore

`func (o *CompanyProfileTypeRelationships) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *CompanyProfileTypeRelationships) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *CompanyProfileTypeRelationships) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *CompanyProfileTypeRelationships) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *CompanyProfileTypeRelationships) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *CompanyProfileTypeRelationships) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *CompanyProfileTypeRelationships) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *CompanyProfileTypeRelationships) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *CompanyProfileTypeRelationships) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CompanyProfileTypeRelationships) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CompanyProfileTypeRelationships) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CompanyProfileTypeRelationships) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


