# ProfileTypePreferenceCollection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreferenceType** | Pointer to [**[]PreferenceTypeType**](PreferenceTypeType.md) | Collection of Detailed information on preferences of the customer. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewProfileTypePreferenceCollection

`func NewProfileTypePreferenceCollection() *ProfileTypePreferenceCollection`

NewProfileTypePreferenceCollection instantiates a new ProfileTypePreferenceCollection object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypePreferenceCollectionWithDefaults

`func NewProfileTypePreferenceCollectionWithDefaults() *ProfileTypePreferenceCollection`

NewProfileTypePreferenceCollectionWithDefaults instantiates a new ProfileTypePreferenceCollection object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreferenceType

`func (o *ProfileTypePreferenceCollection) GetPreferenceType() []PreferenceTypeType`

GetPreferenceType returns the PreferenceType field if non-nil, zero value otherwise.

### GetPreferenceTypeOk

`func (o *ProfileTypePreferenceCollection) GetPreferenceTypeOk() (*[]PreferenceTypeType, bool)`

GetPreferenceTypeOk returns a tuple with the PreferenceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceType

`func (o *ProfileTypePreferenceCollection) SetPreferenceType(v []PreferenceTypeType)`

SetPreferenceType sets PreferenceType field to given value.

### HasPreferenceType

`func (o *ProfileTypePreferenceCollection) HasPreferenceType() bool`

HasPreferenceType returns a boolean if a field has been set.

### GetHasMore

`func (o *ProfileTypePreferenceCollection) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ProfileTypePreferenceCollection) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ProfileTypePreferenceCollection) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ProfileTypePreferenceCollection) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *ProfileTypePreferenceCollection) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ProfileTypePreferenceCollection) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ProfileTypePreferenceCollection) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ProfileTypePreferenceCollection) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *ProfileTypePreferenceCollection) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ProfileTypePreferenceCollection) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ProfileTypePreferenceCollection) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ProfileTypePreferenceCollection) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


