# CreateRoomOwnerReferralDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomOwnerReferrals** | Pointer to [**RoomOwnerReferralList**](RoomOwnerReferralList.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreateRoomOwnerReferralDetails

`func NewCreateRoomOwnerReferralDetails() *CreateRoomOwnerReferralDetails`

NewCreateRoomOwnerReferralDetails instantiates a new CreateRoomOwnerReferralDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateRoomOwnerReferralDetailsWithDefaults

`func NewCreateRoomOwnerReferralDetailsWithDefaults() *CreateRoomOwnerReferralDetails`

NewCreateRoomOwnerReferralDetailsWithDefaults instantiates a new CreateRoomOwnerReferralDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomOwnerReferrals

`func (o *CreateRoomOwnerReferralDetails) GetRoomOwnerReferrals() RoomOwnerReferralList`

GetRoomOwnerReferrals returns the RoomOwnerReferrals field if non-nil, zero value otherwise.

### GetRoomOwnerReferralsOk

`func (o *CreateRoomOwnerReferralDetails) GetRoomOwnerReferralsOk() (*RoomOwnerReferralList, bool)`

GetRoomOwnerReferralsOk returns a tuple with the RoomOwnerReferrals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnerReferrals

`func (o *CreateRoomOwnerReferralDetails) SetRoomOwnerReferrals(v RoomOwnerReferralList)`

SetRoomOwnerReferrals sets RoomOwnerReferrals field to given value.

### HasRoomOwnerReferrals

`func (o *CreateRoomOwnerReferralDetails) HasRoomOwnerReferrals() bool`

HasRoomOwnerReferrals returns a boolean if a field has been set.

### GetWarnings

`func (o *CreateRoomOwnerReferralDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreateRoomOwnerReferralDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreateRoomOwnerReferralDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreateRoomOwnerReferralDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


