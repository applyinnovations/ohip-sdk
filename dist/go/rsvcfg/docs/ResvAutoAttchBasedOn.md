# ResvAutoAttchBasedOn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Condition** | Pointer to [**BasedOnCondition**](BasedOnCondition.md) |  | [optional] 
**Count** | Pointer to **int32** | A positive numeric number, When the number of adults/children or a reservation equals or exceeds this value, then the items that were selected in the Associated Preferences will automatically be attached to the reservation. | [optional] 
**Description** | Pointer to **string** | description. | [optional] 
**KeywordType** | Pointer to **string** | The Keyword attached in the profile,when a reservation is made by a profile that has the selected Keyword attached, then the items that were selected in the Associated Preferences will automatically be attached to the reservation. | [optional] 
**Membership** | Pointer to [**BasedOnMembershipType**](BasedOnMembershipType.md) |  | [optional] 
**Preference** | Pointer to [**AttachPreferenceType**](AttachPreferenceType.md) |  | [optional] 
**RatePlanCode** | Pointer to **string** | Rate Code. | [optional] 
**RoomType** | Pointer to **string** | Room type Code. | [optional] 
**Special** | Pointer to [**AttachPreferenceType**](AttachPreferenceType.md) |  | [optional] 
**Type** | Pointer to [**ResvAutoAttchBasedOnCode**](ResvAutoAttchBasedOnCode.md) |  | [optional] 
**VipCode** | Pointer to **string** | The associated VIP Status. | [optional] 

## Methods

### NewResvAutoAttchBasedOn

`func NewResvAutoAttchBasedOn() *ResvAutoAttchBasedOn`

NewResvAutoAttchBasedOn instantiates a new ResvAutoAttchBasedOn object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResvAutoAttchBasedOnWithDefaults

`func NewResvAutoAttchBasedOnWithDefaults() *ResvAutoAttchBasedOn`

NewResvAutoAttchBasedOnWithDefaults instantiates a new ResvAutoAttchBasedOn object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCondition

`func (o *ResvAutoAttchBasedOn) GetCondition() BasedOnCondition`

GetCondition returns the Condition field if non-nil, zero value otherwise.

### GetConditionOk

`func (o *ResvAutoAttchBasedOn) GetConditionOk() (*BasedOnCondition, bool)`

GetConditionOk returns a tuple with the Condition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCondition

`func (o *ResvAutoAttchBasedOn) SetCondition(v BasedOnCondition)`

SetCondition sets Condition field to given value.

### HasCondition

`func (o *ResvAutoAttchBasedOn) HasCondition() bool`

HasCondition returns a boolean if a field has been set.

### GetCount

`func (o *ResvAutoAttchBasedOn) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ResvAutoAttchBasedOn) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ResvAutoAttchBasedOn) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ResvAutoAttchBasedOn) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetDescription

`func (o *ResvAutoAttchBasedOn) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ResvAutoAttchBasedOn) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ResvAutoAttchBasedOn) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ResvAutoAttchBasedOn) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetKeywordType

`func (o *ResvAutoAttchBasedOn) GetKeywordType() string`

GetKeywordType returns the KeywordType field if non-nil, zero value otherwise.

### GetKeywordTypeOk

`func (o *ResvAutoAttchBasedOn) GetKeywordTypeOk() (*string, bool)`

GetKeywordTypeOk returns a tuple with the KeywordType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeywordType

`func (o *ResvAutoAttchBasedOn) SetKeywordType(v string)`

SetKeywordType sets KeywordType field to given value.

### HasKeywordType

`func (o *ResvAutoAttchBasedOn) HasKeywordType() bool`

HasKeywordType returns a boolean if a field has been set.

### GetMembership

`func (o *ResvAutoAttchBasedOn) GetMembership() BasedOnMembershipType`

GetMembership returns the Membership field if non-nil, zero value otherwise.

### GetMembershipOk

`func (o *ResvAutoAttchBasedOn) GetMembershipOk() (*BasedOnMembershipType, bool)`

GetMembershipOk returns a tuple with the Membership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembership

`func (o *ResvAutoAttchBasedOn) SetMembership(v BasedOnMembershipType)`

SetMembership sets Membership field to given value.

### HasMembership

`func (o *ResvAutoAttchBasedOn) HasMembership() bool`

HasMembership returns a boolean if a field has been set.

### GetPreference

`func (o *ResvAutoAttchBasedOn) GetPreference() AttachPreferenceType`

GetPreference returns the Preference field if non-nil, zero value otherwise.

### GetPreferenceOk

`func (o *ResvAutoAttchBasedOn) GetPreferenceOk() (*AttachPreferenceType, bool)`

GetPreferenceOk returns a tuple with the Preference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreference

`func (o *ResvAutoAttchBasedOn) SetPreference(v AttachPreferenceType)`

SetPreference sets Preference field to given value.

### HasPreference

`func (o *ResvAutoAttchBasedOn) HasPreference() bool`

HasPreference returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *ResvAutoAttchBasedOn) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *ResvAutoAttchBasedOn) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *ResvAutoAttchBasedOn) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *ResvAutoAttchBasedOn) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRoomType

`func (o *ResvAutoAttchBasedOn) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ResvAutoAttchBasedOn) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ResvAutoAttchBasedOn) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ResvAutoAttchBasedOn) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetSpecial

`func (o *ResvAutoAttchBasedOn) GetSpecial() AttachPreferenceType`

GetSpecial returns the Special field if non-nil, zero value otherwise.

### GetSpecialOk

`func (o *ResvAutoAttchBasedOn) GetSpecialOk() (*AttachPreferenceType, bool)`

GetSpecialOk returns a tuple with the Special field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecial

`func (o *ResvAutoAttchBasedOn) SetSpecial(v AttachPreferenceType)`

SetSpecial sets Special field to given value.

### HasSpecial

`func (o *ResvAutoAttchBasedOn) HasSpecial() bool`

HasSpecial returns a boolean if a field has been set.

### GetType

`func (o *ResvAutoAttchBasedOn) GetType() ResvAutoAttchBasedOnCode`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ResvAutoAttchBasedOn) GetTypeOk() (*ResvAutoAttchBasedOnCode, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ResvAutoAttchBasedOn) SetType(v ResvAutoAttchBasedOnCode)`

SetType sets Type field to given value.

### HasType

`func (o *ResvAutoAttchBasedOn) HasType() bool`

HasType returns a boolean if a field has been set.

### GetVipCode

`func (o *ResvAutoAttchBasedOn) GetVipCode() string`

GetVipCode returns the VipCode field if non-nil, zero value otherwise.

### GetVipCodeOk

`func (o *ResvAutoAttchBasedOn) GetVipCodeOk() (*string, bool)`

GetVipCodeOk returns a tuple with the VipCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipCode

`func (o *ResvAutoAttchBasedOn) SetVipCode(v string)`

SetVipCode sets VipCode field to given value.

### HasVipCode

`func (o *ResvAutoAttchBasedOn) HasVipCode() bool`

HasVipCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


