# MemberInfoRSType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MemberInfoDetails** | Pointer to [**MemberInfoDetailsType**](MemberInfoDetailsType.md) |  | [optional] 
**MemberInfoRangeDetails** | Pointer to [**MemberInfoDetailsType**](MemberInfoDetailsType.md) |  | [optional] 
**NextTierPoints** | Pointer to **int32** | Points required for next tier of membership. | [optional] 
**PointsAvailable** | Pointer to **int32** | Points available for the member. | [optional] 

## Methods

### NewMemberInfoRSType

`func NewMemberInfoRSType() *MemberInfoRSType`

NewMemberInfoRSType instantiates a new MemberInfoRSType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMemberInfoRSTypeWithDefaults

`func NewMemberInfoRSTypeWithDefaults() *MemberInfoRSType`

NewMemberInfoRSTypeWithDefaults instantiates a new MemberInfoRSType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMemberInfoDetails

`func (o *MemberInfoRSType) GetMemberInfoDetails() MemberInfoDetailsType`

GetMemberInfoDetails returns the MemberInfoDetails field if non-nil, zero value otherwise.

### GetMemberInfoDetailsOk

`func (o *MemberInfoRSType) GetMemberInfoDetailsOk() (*MemberInfoDetailsType, bool)`

GetMemberInfoDetailsOk returns a tuple with the MemberInfoDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberInfoDetails

`func (o *MemberInfoRSType) SetMemberInfoDetails(v MemberInfoDetailsType)`

SetMemberInfoDetails sets MemberInfoDetails field to given value.

### HasMemberInfoDetails

`func (o *MemberInfoRSType) HasMemberInfoDetails() bool`

HasMemberInfoDetails returns a boolean if a field has been set.

### GetMemberInfoRangeDetails

`func (o *MemberInfoRSType) GetMemberInfoRangeDetails() MemberInfoDetailsType`

GetMemberInfoRangeDetails returns the MemberInfoRangeDetails field if non-nil, zero value otherwise.

### GetMemberInfoRangeDetailsOk

`func (o *MemberInfoRSType) GetMemberInfoRangeDetailsOk() (*MemberInfoDetailsType, bool)`

GetMemberInfoRangeDetailsOk returns a tuple with the MemberInfoRangeDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberInfoRangeDetails

`func (o *MemberInfoRSType) SetMemberInfoRangeDetails(v MemberInfoDetailsType)`

SetMemberInfoRangeDetails sets MemberInfoRangeDetails field to given value.

### HasMemberInfoRangeDetails

`func (o *MemberInfoRSType) HasMemberInfoRangeDetails() bool`

HasMemberInfoRangeDetails returns a boolean if a field has been set.

### GetNextTierPoints

`func (o *MemberInfoRSType) GetNextTierPoints() int32`

GetNextTierPoints returns the NextTierPoints field if non-nil, zero value otherwise.

### GetNextTierPointsOk

`func (o *MemberInfoRSType) GetNextTierPointsOk() (*int32, bool)`

GetNextTierPointsOk returns a tuple with the NextTierPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextTierPoints

`func (o *MemberInfoRSType) SetNextTierPoints(v int32)`

SetNextTierPoints sets NextTierPoints field to given value.

### HasNextTierPoints

`func (o *MemberInfoRSType) HasNextTierPoints() bool`

HasNextTierPoints returns a boolean if a field has been set.

### GetPointsAvailable

`func (o *MemberInfoRSType) GetPointsAvailable() int32`

GetPointsAvailable returns the PointsAvailable field if non-nil, zero value otherwise.

### GetPointsAvailableOk

`func (o *MemberInfoRSType) GetPointsAvailableOk() (*int32, bool)`

GetPointsAvailableOk returns a tuple with the PointsAvailable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsAvailable

`func (o *MemberInfoRSType) SetPointsAvailable(v int32)`

SetPointsAvailable sets PointsAvailable field to given value.

### HasPointsAvailable

`func (o *MemberInfoRSType) HasPointsAvailable() bool`

HasPointsAvailable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


