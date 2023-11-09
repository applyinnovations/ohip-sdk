# SuspendedProfileMatchStatType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchCriteria** | Pointer to **string** | Suspended profile which associated with a Hotel code. | [optional] 
**ThresholdPoints** | Pointer to **float32** | Indicates number of profiles that have met the threshold limit (eg: Upper, Middle and lower) | [optional] 
**Threshold** | Pointer to **string** | Indicates threshold level(eg: Upper, Middle and lower) | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 

## Methods

### NewSuspendedProfileMatchStatType

`func NewSuspendedProfileMatchStatType() *SuspendedProfileMatchStatType`

NewSuspendedProfileMatchStatType instantiates a new SuspendedProfileMatchStatType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSuspendedProfileMatchStatTypeWithDefaults

`func NewSuspendedProfileMatchStatTypeWithDefaults() *SuspendedProfileMatchStatType`

NewSuspendedProfileMatchStatTypeWithDefaults instantiates a new SuspendedProfileMatchStatType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatchCriteria

`func (o *SuspendedProfileMatchStatType) GetMatchCriteria() string`

GetMatchCriteria returns the MatchCriteria field if non-nil, zero value otherwise.

### GetMatchCriteriaOk

`func (o *SuspendedProfileMatchStatType) GetMatchCriteriaOk() (*string, bool)`

GetMatchCriteriaOk returns a tuple with the MatchCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchCriteria

`func (o *SuspendedProfileMatchStatType) SetMatchCriteria(v string)`

SetMatchCriteria sets MatchCriteria field to given value.

### HasMatchCriteria

`func (o *SuspendedProfileMatchStatType) HasMatchCriteria() bool`

HasMatchCriteria returns a boolean if a field has been set.

### GetThresholdPoints

`func (o *SuspendedProfileMatchStatType) GetThresholdPoints() float32`

GetThresholdPoints returns the ThresholdPoints field if non-nil, zero value otherwise.

### GetThresholdPointsOk

`func (o *SuspendedProfileMatchStatType) GetThresholdPointsOk() (*float32, bool)`

GetThresholdPointsOk returns a tuple with the ThresholdPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThresholdPoints

`func (o *SuspendedProfileMatchStatType) SetThresholdPoints(v float32)`

SetThresholdPoints sets ThresholdPoints field to given value.

### HasThresholdPoints

`func (o *SuspendedProfileMatchStatType) HasThresholdPoints() bool`

HasThresholdPoints returns a boolean if a field has been set.

### GetThreshold

`func (o *SuspendedProfileMatchStatType) GetThreshold() string`

GetThreshold returns the Threshold field if non-nil, zero value otherwise.

### GetThresholdOk

`func (o *SuspendedProfileMatchStatType) GetThresholdOk() (*string, bool)`

GetThresholdOk returns a tuple with the Threshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreshold

`func (o *SuspendedProfileMatchStatType) SetThreshold(v string)`

SetThreshold sets Threshold field to given value.

### HasThreshold

`func (o *SuspendedProfileMatchStatType) HasThreshold() bool`

HasThreshold returns a boolean if a field has been set.

### GetProfileType

`func (o *SuspendedProfileMatchStatType) GetProfileType() ProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *SuspendedProfileMatchStatType) GetProfileTypeOk() (*ProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *SuspendedProfileMatchStatType) SetProfileType(v ProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *SuspendedProfileMatchStatType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


