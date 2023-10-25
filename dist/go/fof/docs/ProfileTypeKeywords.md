# ProfileTypeKeywords

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Keyword** | Pointer to [**[]KeywordType**](KeywordType.md) | Collection of keywords attached to the profile. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewProfileTypeKeywords

`func NewProfileTypeKeywords() *ProfileTypeKeywords`

NewProfileTypeKeywords instantiates a new ProfileTypeKeywords object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypeKeywordsWithDefaults

`func NewProfileTypeKeywordsWithDefaults() *ProfileTypeKeywords`

NewProfileTypeKeywordsWithDefaults instantiates a new ProfileTypeKeywords object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *ProfileTypeKeywords) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ProfileTypeKeywords) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ProfileTypeKeywords) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ProfileTypeKeywords) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *ProfileTypeKeywords) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ProfileTypeKeywords) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ProfileTypeKeywords) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ProfileTypeKeywords) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetKeyword

`func (o *ProfileTypeKeywords) GetKeyword() []KeywordType`

GetKeyword returns the Keyword field if non-nil, zero value otherwise.

### GetKeywordOk

`func (o *ProfileTypeKeywords) GetKeywordOk() (*[]KeywordType, bool)`

GetKeywordOk returns a tuple with the Keyword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyword

`func (o *ProfileTypeKeywords) SetKeyword(v []KeywordType)`

SetKeyword sets Keyword field to given value.

### HasKeyword

`func (o *ProfileTypeKeywords) HasKeyword() bool`

HasKeyword returns a boolean if a field has been set.

### GetTotalResults

`func (o *ProfileTypeKeywords) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ProfileTypeKeywords) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ProfileTypeKeywords) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ProfileTypeKeywords) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


