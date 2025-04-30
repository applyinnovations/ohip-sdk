# MatchListType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchList** | Pointer to [**[]MatchType**](MatchType.md) | List of matchIds that will be updated to skip or don&#39;t skip profile match. | [optional] 

## Methods

### NewMatchListType

`func NewMatchListType() *MatchListType`

NewMatchListType instantiates a new MatchListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMatchListTypeWithDefaults

`func NewMatchListTypeWithDefaults() *MatchListType`

NewMatchListTypeWithDefaults instantiates a new MatchListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatchList

`func (o *MatchListType) GetMatchList() []MatchType`

GetMatchList returns the MatchList field if non-nil, zero value otherwise.

### GetMatchListOk

`func (o *MatchListType) GetMatchListOk() (*[]MatchType, bool)`

GetMatchListOk returns a tuple with the MatchList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchList

`func (o *MatchListType) SetMatchList(v []MatchType)`

SetMatchList sets MatchList field to given value.

### HasMatchList

`func (o *MatchListType) HasMatchList() bool`

HasMatchList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


