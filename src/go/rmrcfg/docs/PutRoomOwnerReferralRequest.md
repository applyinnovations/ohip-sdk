# PutRoomOwnerReferralRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomOwnerReferral** | Pointer to [**RoomOwnerReferralType**](RoomOwnerReferralType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutRoomOwnerReferralRequest

`func NewPutRoomOwnerReferralRequest() *PutRoomOwnerReferralRequest`

NewPutRoomOwnerReferralRequest instantiates a new PutRoomOwnerReferralRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRoomOwnerReferralRequestWithDefaults

`func NewPutRoomOwnerReferralRequestWithDefaults() *PutRoomOwnerReferralRequest`

NewPutRoomOwnerReferralRequestWithDefaults instantiates a new PutRoomOwnerReferralRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomOwnerReferral

`func (o *PutRoomOwnerReferralRequest) GetRoomOwnerReferral() RoomOwnerReferralType`

GetRoomOwnerReferral returns the RoomOwnerReferral field if non-nil, zero value otherwise.

### GetRoomOwnerReferralOk

`func (o *PutRoomOwnerReferralRequest) GetRoomOwnerReferralOk() (*RoomOwnerReferralType, bool)`

GetRoomOwnerReferralOk returns a tuple with the RoomOwnerReferral field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnerReferral

`func (o *PutRoomOwnerReferralRequest) SetRoomOwnerReferral(v RoomOwnerReferralType)`

SetRoomOwnerReferral sets RoomOwnerReferral field to given value.

### HasRoomOwnerReferral

`func (o *PutRoomOwnerReferralRequest) HasRoomOwnerReferral() bool`

HasRoomOwnerReferral returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRoomOwnerReferralRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRoomOwnerReferralRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRoomOwnerReferralRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRoomOwnerReferralRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


