# MatchType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchId** | Pointer to **string** | Identifier of the match record. | [optional] 
**SkipProfileMatch** | Pointer to **bool** | If true, it sets the record to skip profile match for this particular matchId. if false, it sets the record to not skip profile match. | [optional] 

## Methods

### NewMatchType

`func NewMatchType() *MatchType`

NewMatchType instantiates a new MatchType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMatchTypeWithDefaults

`func NewMatchTypeWithDefaults() *MatchType`

NewMatchTypeWithDefaults instantiates a new MatchType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatchId

`func (o *MatchType) GetMatchId() string`

GetMatchId returns the MatchId field if non-nil, zero value otherwise.

### GetMatchIdOk

`func (o *MatchType) GetMatchIdOk() (*string, bool)`

GetMatchIdOk returns a tuple with the MatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchId

`func (o *MatchType) SetMatchId(v string)`

SetMatchId sets MatchId field to given value.

### HasMatchId

`func (o *MatchType) HasMatchId() bool`

HasMatchId returns a boolean if a field has been set.

### GetSkipProfileMatch

`func (o *MatchType) GetSkipProfileMatch() bool`

GetSkipProfileMatch returns the SkipProfileMatch field if non-nil, zero value otherwise.

### GetSkipProfileMatchOk

`func (o *MatchType) GetSkipProfileMatchOk() (*bool, bool)`

GetSkipProfileMatchOk returns a tuple with the SkipProfileMatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipProfileMatch

`func (o *MatchType) SetSkipProfileMatch(v bool)`

SetSkipProfileMatch sets SkipProfileMatch field to given value.

### HasSkipProfileMatch

`func (o *MatchType) HasSkipProfileMatch() bool`

HasSkipProfileMatch returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


