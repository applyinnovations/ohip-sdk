# AwardUpgradeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipType** | Pointer to **string** | The type of the membership. | [optional] 
**MembershipCardNo** | Pointer to **string** | The card number associated with this membership. | [optional] 
**MembershipLevel** | Pointer to **string** | The current level of the membership. | [optional] 
**FromRoomType** | Pointer to **string** | From Room type associated with the award. | [optional] 
**ReservationTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**MembershipPoints** | Pointer to **int32** | Current membership points available for this guest. | [optional] 
**AwardUpgradeSummaries** | Pointer to [**[]AwardUpgradeSummaryType**](AwardUpgradeSummaryType.md) | Summary information related to award upgrade. | [optional] 
**HotelId** | Pointer to **string** | Property associated with the award upgrade. | [optional] 

## Methods

### NewAwardUpgradeInfoType

`func NewAwardUpgradeInfoType() *AwardUpgradeInfoType`

NewAwardUpgradeInfoType instantiates a new AwardUpgradeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwardUpgradeInfoTypeWithDefaults

`func NewAwardUpgradeInfoTypeWithDefaults() *AwardUpgradeInfoType`

NewAwardUpgradeInfoTypeWithDefaults instantiates a new AwardUpgradeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipType

`func (o *AwardUpgradeInfoType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *AwardUpgradeInfoType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *AwardUpgradeInfoType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *AwardUpgradeInfoType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetMembershipCardNo

`func (o *AwardUpgradeInfoType) GetMembershipCardNo() string`

GetMembershipCardNo returns the MembershipCardNo field if non-nil, zero value otherwise.

### GetMembershipCardNoOk

`func (o *AwardUpgradeInfoType) GetMembershipCardNoOk() (*string, bool)`

GetMembershipCardNoOk returns a tuple with the MembershipCardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipCardNo

`func (o *AwardUpgradeInfoType) SetMembershipCardNo(v string)`

SetMembershipCardNo sets MembershipCardNo field to given value.

### HasMembershipCardNo

`func (o *AwardUpgradeInfoType) HasMembershipCardNo() bool`

HasMembershipCardNo returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *AwardUpgradeInfoType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *AwardUpgradeInfoType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *AwardUpgradeInfoType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *AwardUpgradeInfoType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetFromRoomType

`func (o *AwardUpgradeInfoType) GetFromRoomType() string`

GetFromRoomType returns the FromRoomType field if non-nil, zero value otherwise.

### GetFromRoomTypeOk

`func (o *AwardUpgradeInfoType) GetFromRoomTypeOk() (*string, bool)`

GetFromRoomTypeOk returns a tuple with the FromRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRoomType

`func (o *AwardUpgradeInfoType) SetFromRoomType(v string)`

SetFromRoomType sets FromRoomType field to given value.

### HasFromRoomType

`func (o *AwardUpgradeInfoType) HasFromRoomType() bool`

HasFromRoomType returns a boolean if a field has been set.

### GetReservationTimeSpan

`func (o *AwardUpgradeInfoType) GetReservationTimeSpan() TimeSpanType`

GetReservationTimeSpan returns the ReservationTimeSpan field if non-nil, zero value otherwise.

### GetReservationTimeSpanOk

`func (o *AwardUpgradeInfoType) GetReservationTimeSpanOk() (*TimeSpanType, bool)`

GetReservationTimeSpanOk returns a tuple with the ReservationTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationTimeSpan

`func (o *AwardUpgradeInfoType) SetReservationTimeSpan(v TimeSpanType)`

SetReservationTimeSpan sets ReservationTimeSpan field to given value.

### HasReservationTimeSpan

`func (o *AwardUpgradeInfoType) HasReservationTimeSpan() bool`

HasReservationTimeSpan returns a boolean if a field has been set.

### GetMembershipPoints

`func (o *AwardUpgradeInfoType) GetMembershipPoints() int32`

GetMembershipPoints returns the MembershipPoints field if non-nil, zero value otherwise.

### GetMembershipPointsOk

`func (o *AwardUpgradeInfoType) GetMembershipPointsOk() (*int32, bool)`

GetMembershipPointsOk returns a tuple with the MembershipPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipPoints

`func (o *AwardUpgradeInfoType) SetMembershipPoints(v int32)`

SetMembershipPoints sets MembershipPoints field to given value.

### HasMembershipPoints

`func (o *AwardUpgradeInfoType) HasMembershipPoints() bool`

HasMembershipPoints returns a boolean if a field has been set.

### GetAwardUpgradeSummaries

`func (o *AwardUpgradeInfoType) GetAwardUpgradeSummaries() []AwardUpgradeSummaryType`

GetAwardUpgradeSummaries returns the AwardUpgradeSummaries field if non-nil, zero value otherwise.

### GetAwardUpgradeSummariesOk

`func (o *AwardUpgradeInfoType) GetAwardUpgradeSummariesOk() (*[]AwardUpgradeSummaryType, bool)`

GetAwardUpgradeSummariesOk returns a tuple with the AwardUpgradeSummaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardUpgradeSummaries

`func (o *AwardUpgradeInfoType) SetAwardUpgradeSummaries(v []AwardUpgradeSummaryType)`

SetAwardUpgradeSummaries sets AwardUpgradeSummaries field to given value.

### HasAwardUpgradeSummaries

`func (o *AwardUpgradeInfoType) HasAwardUpgradeSummaries() bool`

HasAwardUpgradeSummaries returns a boolean if a field has been set.

### GetHotelId

`func (o *AwardUpgradeInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AwardUpgradeInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AwardUpgradeInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AwardUpgradeInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


