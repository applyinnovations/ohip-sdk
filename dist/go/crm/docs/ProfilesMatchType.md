# ProfilesMatchType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchId** | Pointer to **string** | Unique identifier for this particular profile match record. | [optional] 
**MainProfile** | Pointer to [**ShortInfoProfileType**](ShortInfoProfileType.md) |  | [optional] 
**ProfileToMerge** | Pointer to [**ShortInfoProfileType**](ShortInfoProfileType.md) |  | [optional] 
**Rule** | Pointer to **string** | Match criteria rule code that was used to create that match. | [optional] 
**MatchCriteria** | Pointer to **string** | Description of the match point for the profile merge. | [optional] 
**Points** | Pointer to **float32** | Total number of weighing match points that was found between main profile and profile to merge. | [optional] 
**Status** | Pointer to [**ProfileMatchStatusType**](ProfileMatchStatusType.md) |  | [optional] 
**ComputedOn** | Pointer to **string** | Date when the weighing points were computed for the profiles | [optional] 
**DoNotMerge** | Pointer to **bool** | If this value is true, then this record is set as do not merge, if false, it is set as merge. | [optional] 

## Methods

### NewProfilesMatchType

`func NewProfilesMatchType() *ProfilesMatchType`

NewProfilesMatchType instantiates a new ProfilesMatchType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfilesMatchTypeWithDefaults

`func NewProfilesMatchTypeWithDefaults() *ProfilesMatchType`

NewProfilesMatchTypeWithDefaults instantiates a new ProfilesMatchType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatchId

`func (o *ProfilesMatchType) GetMatchId() string`

GetMatchId returns the MatchId field if non-nil, zero value otherwise.

### GetMatchIdOk

`func (o *ProfilesMatchType) GetMatchIdOk() (*string, bool)`

GetMatchIdOk returns a tuple with the MatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchId

`func (o *ProfilesMatchType) SetMatchId(v string)`

SetMatchId sets MatchId field to given value.

### HasMatchId

`func (o *ProfilesMatchType) HasMatchId() bool`

HasMatchId returns a boolean if a field has been set.

### GetMainProfile

`func (o *ProfilesMatchType) GetMainProfile() ShortInfoProfileType`

GetMainProfile returns the MainProfile field if non-nil, zero value otherwise.

### GetMainProfileOk

`func (o *ProfilesMatchType) GetMainProfileOk() (*ShortInfoProfileType, bool)`

GetMainProfileOk returns a tuple with the MainProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMainProfile

`func (o *ProfilesMatchType) SetMainProfile(v ShortInfoProfileType)`

SetMainProfile sets MainProfile field to given value.

### HasMainProfile

`func (o *ProfilesMatchType) HasMainProfile() bool`

HasMainProfile returns a boolean if a field has been set.

### GetProfileToMerge

`func (o *ProfilesMatchType) GetProfileToMerge() ShortInfoProfileType`

GetProfileToMerge returns the ProfileToMerge field if non-nil, zero value otherwise.

### GetProfileToMergeOk

`func (o *ProfilesMatchType) GetProfileToMergeOk() (*ShortInfoProfileType, bool)`

GetProfileToMergeOk returns a tuple with the ProfileToMerge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileToMerge

`func (o *ProfilesMatchType) SetProfileToMerge(v ShortInfoProfileType)`

SetProfileToMerge sets ProfileToMerge field to given value.

### HasProfileToMerge

`func (o *ProfilesMatchType) HasProfileToMerge() bool`

HasProfileToMerge returns a boolean if a field has been set.

### GetRule

`func (o *ProfilesMatchType) GetRule() string`

GetRule returns the Rule field if non-nil, zero value otherwise.

### GetRuleOk

`func (o *ProfilesMatchType) GetRuleOk() (*string, bool)`

GetRuleOk returns a tuple with the Rule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRule

`func (o *ProfilesMatchType) SetRule(v string)`

SetRule sets Rule field to given value.

### HasRule

`func (o *ProfilesMatchType) HasRule() bool`

HasRule returns a boolean if a field has been set.

### GetMatchCriteria

`func (o *ProfilesMatchType) GetMatchCriteria() string`

GetMatchCriteria returns the MatchCriteria field if non-nil, zero value otherwise.

### GetMatchCriteriaOk

`func (o *ProfilesMatchType) GetMatchCriteriaOk() (*string, bool)`

GetMatchCriteriaOk returns a tuple with the MatchCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchCriteria

`func (o *ProfilesMatchType) SetMatchCriteria(v string)`

SetMatchCriteria sets MatchCriteria field to given value.

### HasMatchCriteria

`func (o *ProfilesMatchType) HasMatchCriteria() bool`

HasMatchCriteria returns a boolean if a field has been set.

### GetPoints

`func (o *ProfilesMatchType) GetPoints() float32`

GetPoints returns the Points field if non-nil, zero value otherwise.

### GetPointsOk

`func (o *ProfilesMatchType) GetPointsOk() (*float32, bool)`

GetPointsOk returns a tuple with the Points field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoints

`func (o *ProfilesMatchType) SetPoints(v float32)`

SetPoints sets Points field to given value.

### HasPoints

`func (o *ProfilesMatchType) HasPoints() bool`

HasPoints returns a boolean if a field has been set.

### GetStatus

`func (o *ProfilesMatchType) GetStatus() ProfileMatchStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ProfilesMatchType) GetStatusOk() (*ProfileMatchStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ProfilesMatchType) SetStatus(v ProfileMatchStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ProfilesMatchType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetComputedOn

`func (o *ProfilesMatchType) GetComputedOn() string`

GetComputedOn returns the ComputedOn field if non-nil, zero value otherwise.

### GetComputedOnOk

`func (o *ProfilesMatchType) GetComputedOnOk() (*string, bool)`

GetComputedOnOk returns a tuple with the ComputedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedOn

`func (o *ProfilesMatchType) SetComputedOn(v string)`

SetComputedOn sets ComputedOn field to given value.

### HasComputedOn

`func (o *ProfilesMatchType) HasComputedOn() bool`

HasComputedOn returns a boolean if a field has been set.

### GetDoNotMerge

`func (o *ProfilesMatchType) GetDoNotMerge() bool`

GetDoNotMerge returns the DoNotMerge field if non-nil, zero value otherwise.

### GetDoNotMergeOk

`func (o *ProfilesMatchType) GetDoNotMergeOk() (*bool, bool)`

GetDoNotMergeOk returns a tuple with the DoNotMerge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDoNotMerge

`func (o *ProfilesMatchType) SetDoNotMerge(v bool)`

SetDoNotMerge sets DoNotMerge field to given value.

### HasDoNotMerge

`func (o *ProfilesMatchType) HasDoNotMerge() bool`

HasDoNotMerge returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


