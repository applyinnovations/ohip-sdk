# ProfileTypeKeywords

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Keyword** | Pointer to [**[]KeywordType**](KeywordType.md) | Collection of keywords attached to the profile. | [optional] 
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

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

### GetAllRowsFetched

`func (o *ProfileTypeKeywords) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *ProfileTypeKeywords) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *ProfileTypeKeywords) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *ProfileTypeKeywords) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetTotalRows

`func (o *ProfileTypeKeywords) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *ProfileTypeKeywords) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *ProfileTypeKeywords) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *ProfileTypeKeywords) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


